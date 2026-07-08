export const coverImage = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80";

export const content = `## M-Pesa API Integration (Daraja): A Developer's Guide for Kenyan Applications

M-Pesa's Daraja API is the most important payment integration any Kenyan developer can build. With over 30 million active M-Pesa users in Kenya transacting over $200 billion annually, M-Pesa is not just a payment option for Kenyan products  -  it's the payment option. Applications that don't integrate M-Pesa exclude the majority of Kenya's transacting population.

The Daraja API (daraja means "bridge" in Kiswahili) is Safaricom's developer platform for M-Pesa integration. It's mature, well-documented relative to its complexity, and supported by an active Kenyan developer community that has solved most integration challenges and shared those solutions publicly.

This guide covers M-Pesa Daraja API integration comprehensively  -  from account setup through the most common integration patterns, with practical code examples and the gotchas that cost developers hours of debugging.

![M-Pesa mobile payment on smartphone Kenya](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80)

## Understanding the M-Pesa Daraja API Ecosystem

Daraja isn't a single API  -  it's a collection of APIs for different M-Pesa transaction types.

**STK Push (Lipa na M-Pesa Online / C2B via STK):**
The most commonly integrated API. Initiates a payment request from your server that appears as a push notification on the customer's phone. The customer enters their M-Pesa PIN to confirm the payment. The flow is:
1. Your server calls Daraja to initiate the STK push
2. M-Pesa sends an STK push to the customer's phone
3. Customer confirms with PIN
4. M-Pesa sends a callback to your server confirming success or failure

This is what powers M-Pesa checkout on Kenyan e-commerce sites, subscription confirmations, and in-app purchases.

**C2B (Customer to Business):**
Allows customers to pay via M-Pesa paybill or till number. Your system registers URLs with Safaricom, and M-Pesa sends real-time notifications when payments are received. Used for:
- Receiving payments on existing paybill numbers
- Online-to-paybill payment flows

**B2C (Business to Customer):**
Sends money from a business M-Pesa account to individual customers or staff. Used for:
- Staff salary disbursement
- Customer refunds
- Vendor payments
- Loan disbursements

Requires higher approval from Safaricom than C2B/STK push.

**B2B (Business to Business):**
Transfers between business M-Pesa accounts. Used for inter-company payments in the M-Pesa ecosystem.

**Transaction Status Query:**
Check the status of any transaction by TransactionID. Essential for reconciliation and handling ambiguous transaction states.

**Account Balance:**
Query your M-Pesa business account balance programmatically.

**Reversal:**
Reverse an erroneous transaction. Requires specific Safaricom approval.

## Setting Up Your Daraja Developer Account

**Step 1: Register on the Daraja portal**
Visit https://developer.safaricom.co.ke and register a developer account with your business email.

**Step 2: Create your app**
In the Daraja portal, create an application. This generates your Consumer Key and Consumer Secret (OAuth credentials for API authentication).

**Step 3: Enable the APIs you need**
Each API type (STK Push, C2B, B2C) must be explicitly enabled for your app. In the sandbox, this is immediate. For production, you need Safaricom's go-live approval.

**Step 4: Get your sandbox credentials**
The sandbox environment uses test credentials:
- Sandbox paybill: 174379
- Test phone number: Start with 254708374149 or check Daraja docs for current test numbers
- Passkey: bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919 (sandbox)

**Step 5: Set up your callback URL**
Daraja sends results to a URL you provide (the callback/result URL). This must be:
- HTTPS (not HTTP)
- Publicly accessible (not localhost)
- Returns a 200 status code when it receives the callback

For development, use ngrok to expose localhost to the internet: \`ngrok http 3000\`

## Authenticating with the Daraja API

All Daraja API calls require OAuth 2.0 authentication. The process:

1. Base64-encode your Consumer Key and Consumer Secret: \`base64(consumerKey:consumerSecret)\`
2. Call the OAuth token endpoint with this encoded credential
3. Receive an access_token valid for 60 minutes
4. Include this token in all subsequent API calls

**Node.js authentication example:**

\`\`\`javascript
const getAccessToken = async () => {
  const credentials = Buffer.from(
    \`\${process.env.MPESA_CONSUMER_KEY}:\${process.env.MPESA_CONSUMER_SECRET}\`
  ).toString('base64');
  
  const response = await fetch(
    'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
    {
      method: 'GET',
      headers: {
        'Authorization': \`Basic \${credentials}\`,
        'Content-Type': 'application/json',
      },
    }
  );
  
  const data = await response.json();
  return data.access_token;
};
\`\`\`

For production, replace the sandbox URL with the production equivalent.

## STK Push Integration: Step by Step

The STK Push is the integration most Kenyan developers implement first. Here's the complete flow:

**Generate the password:**

The STK Push password is:
\`base64(BusinessShortCode + Passkey + Timestamp)\`

Where Timestamp is formatted as \`YYYYMMDDHHMMSS\`.

**Make the STK Push request:**

\`\`\`javascript
const initiateStkPush = async ({ phone, amount, reference, description }) => {
  const accessToken = await getAccessToken();
  const timestamp = new Date().toISOString().replace(/[-:T.Z]/g, '').slice(0, 14);
  const password = Buffer.from(
    \`\${BUSINESS_SHORTCODE}\${PASSKEY}\${timestamp}\`
  ).toString('base64');
  
  const response = await fetch(
    'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
    {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \${accessToken}\`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        BusinessShortCode: BUSINESS_SHORTCODE,
        Password: password,
        Timestamp: timestamp,
        TransactionType: 'CustomerPayBillOnline',
        Amount: amount,
        PartyA: phone, // Customer phone: 254XXXXXXXXX format
        PartyB: BUSINESS_SHORTCODE,
        PhoneNumber: phone,
        CallBackURL: 'https://yourdomain.com/mpesa/callback',
        AccountReference: reference,
        TransactionDesc: description,
      }),
    }
  );
  
  return response.json();
};
\`\`\`

**Handle the STK Push callback:**

The callback arrives at your CallbackURL as a POST request with a JSON body:

\`\`\`javascript
app.post('/mpesa/callback', (req, res) => {
  const { Body } = req.body;
  const { stkCallback } = Body;
  
  if (stkCallback.ResultCode === 0) {
    // Payment successful
    const items = stkCallback.CallbackMetadata.Item;
    const amount = items.find(i => i.Name === 'Amount').Value;
    const mpesaReceiptNumber = items.find(i => i.Name === 'MpesaReceiptNumber').Value;
    const phone = items.find(i => i.Name === 'PhoneNumber').Value;
    
    // Update your database, send receipt, trigger fulfilment
    updateOrderPayment({ mpesaReceiptNumber, amount, phone });
  } else {
    // Payment failed or cancelled
    const errorMessage = stkCallback.ResultDesc;
    handlePaymentFailure({ errorMessage });
  }
  
  res.json({ ResultCode: 0, ResultDesc: 'Success' });
});
\`\`\`

Always return \`{ ResultCode: 0, ResultDesc: 'Success' }\` to acknowledge receipt of the callback, even if your processing fails. If you return an error status, M-Pesa may retry the callback multiple times.

![Developer coding M-Pesa integration on laptop](https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80)

## Common Daraja Integration Gotchas

These are the issues that cost Kenyan developers the most debugging time:

**Phone number format:** Daraja requires the \`254XXXXXXXXX\` format (no + prefix, no leading 0). The most common error is submitting \`0712345678\` or \`+254712345678\`. Always normalise your phone number input before the API call.

\`\`\`javascript
const formatPhone = (phone) => {
  // Remove any non-digit characters
  const digits = phone.replace(/\D/g, '');
  // Handle 07XXXXXXXX or 254XXXXXXXXX or +254XXXXXXXXX
  if (digits.startsWith('254')) return digits;
  if (digits.startsWith('0')) return \`254\${digits.slice(1)}\`;
  return digits;
};
\`\`\`

**Callback URL must be HTTPS and publicly accessible:** This catches many developers because they test with localhost. Your callback URL must be reachable from the internet with a valid SSL certificate. In production, this is a standard server requirement. In development, use ngrok.

**Timestamp timezone:** The timestamp should be in East Africa Time (EAT, UTC+3). Using UTC can cause authentication failures, particularly at certain times of day.

**Access token caching:** Generating a new access token for every API call adds unnecessary latency and can hit rate limits. Cache the access token for its 3600-second validity period:

\`\`\`javascript
let tokenCache = null;
let tokenExpiry = null;

const getCachedAccessToken = async () => {
  if (tokenCache && tokenExpiry && Date.now() < tokenExpiry) {
    return tokenCache;
  }
  const token = await getAccessToken();
  tokenCache = token;
  tokenExpiry = Date.now() + (3500 * 1000); // 3500 seconds to be safe
  return token;
};
\`\`\`

**Result code 1032 (cancelled by user):** Users who receive the STK push and don't confirm in time, or who actively cancel, generate ResultCode 1032. Handle this gracefully  -  don't retry automatically; present the customer with the option to try again.

**Duplicate transaction handling:** A customer might accidentally initiate two STK pushes. Your callback handler should check whether the MpesaReceiptNumber has already been processed before updating your database.

**Production go-live process:** Moving from sandbox to production requires Safaricom's go-live process  -  submitting your application, integrating their production credentials, and potentially a review. Allow 1 - 2 weeks for this process; don't build timeline assumptions on same-day production access.

## Handling Unreliable Callback Delivery

The Daraja callback is the mechanism by which you learn whether a payment succeeded. Callbacks are reliable in the vast majority of cases, but the internet is imperfect and callbacks occasionally fail to deliver.

**Implement STK Push query as a fallback:**

After initiating an STK push, you can query its status using the STK Push Query API. Implement a polling mechanism that queries the status if your callback hasn't been received within a reasonable timeframe (60 - 120 seconds):

\`\`\`javascript
const queryStkPushStatus = async (checkoutRequestId) => {
  const accessToken = await getCachedAccessToken();
  const timestamp = getCurrentTimestamp();
  const password = generatePassword(timestamp);
  
  const response = await fetch(
    'https://sandbox.safaricom.co.ke/mpesa/stkpushquery/v1/query',
    {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \${accessToken}\`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        BusinessShortCode: BUSINESS_SHORTCODE,
        Password: password,
        Timestamp: timestamp,
        CheckoutRequestID: checkoutRequestId,
      }),
    }
  );
  
  return response.json();
};
\`\`\`

Store the \`CheckoutRequestID\` returned when you initiate the STK push, and use it to query status if the callback doesn't arrive.

## Security Considerations for M-Pesa Integration

**Never expose your Consumer Key and Consumer Secret:** These credentials are equivalent to your password. Store them as environment variables; never include them in version-controlled code.

**Validate callback source:** The Daraja callback POST comes from Safaricom's servers. While Safaricom doesn't provide a fixed IP whitelist for sandbox callbacks, production IP whitelisting is possible and advisable.

**Idempotent callback handling:** Design your callback handler to be safe to call multiple times with the same data. Check whether a receipt number has been processed before taking action.

**Amount validation:** Don't trust the amount in the callback blindly. If you initiated an STK push for KES 1,000, verify that the callback amount matches before fulfilling the order.

## Integrating M-Pesa with n8n Automation

One of the highest-value combinations for Kenyan businesses is M-Pesa integration through the Daraja API connected to n8n automation workflows. Payment received → trigger fulfilment → update inventory → send receipt → update accounts → notify operations  -  all automated from a single M-Pesa callback.

Tellus has built this pattern for multiple Kenyan businesses. The result is a payment experience that is instantaneous and a post-payment process that is fully automated  -  no manual reconciliation, no manual receipt sending, no manual order processing.

If you need M-Pesa integration for your Kenyan business application  -  whether building it yourself or engaging Tellus to build it for you  -  the foundation is solid and the capability is comprehensive. M-Pesa is Kenya's payment infrastructure. Build on it.

## Daraja API Setup for Production: What the Documentation Doesn't Tell You

The official Safaricom Daraja API documentation covers the technical steps accurately. What it doesn't cover are the practical experience patterns that distinguish developers who go live smoothly from those who spend weeks debugging.

**Sandbox vs production differences:** The sandbox environment is permissive in ways production is not. Sandbox accepts requests with missing parameters that production will reject. Sandbox always returns success for STK Push requests regardless of whether the target phone number is real or the number format is valid. Testing in sandbox does not fully validate your production readiness. Always test with a real Safaricom number before claiming integration is complete.

**Phone number normalisation is essential:** Safaricom's API requires phone numbers in the format \`254XXXXXXXXX\` — not \`+254XXXXXXXXX\`, not \`0XXXXXXXXX\`. If your application accepts phone numbers in any format (which it should, for user experience), you must normalise before passing to the API. Every API call with an incorrectly formatted number will fail, and the error messages are not always intuitive about the cause.

**Callback URL requirements:** Your callback URL must be publicly accessible via HTTPS with a valid SSL certificate. During development, you cannot use localhost. Tools like ngrok create temporary public tunnels for local development. In production, your callback endpoint must be reliably available — a Daraja callback that can't reach your endpoint will not retry in a way that allows you to recover missed payment notifications.

**Idempotency and duplicate handling:** Daraja can deliver the same callback multiple times. Your callback handler must be idempotent — processing the same payment notification twice should produce the same result as processing it once. Implement deduplication on the \`MpesaReceiptNumber\` field that Daraja includes in every successful payment callback.

![M-Pesa Daraja API integration showing STK Push flow and callback handling architecture](https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80)

## Building Reliable Payment Flow User Experience

The technical API integration is one component of M-Pesa payment UX. The user-facing experience — from initiating payment to confirmation — is where most Kenyan users will judge whether your integration is trustworthy.

**STK Push timing:** The STK Push prompt appears on the user's phone within 2-5 seconds of the API call. Design your UI to reflect this delay without alarming the user. A "payment request sent to your phone" message immediately after the API call, followed by a loading state while waiting for callback, produces better UX than either immediate success messaging (premature) or nothing (alarming).

**Timeout handling:** STK Push requests time out after 90 seconds if the user doesn't respond. Your application must handle this timeout gracefully — detecting it from the callback or from polling the transaction status API, and presenting the user with a clear "payment timed out, please try again" option.

**Partial payment prevention:** Daraja's API does not prevent a user from paying an incorrect amount. If your business requires exact payment amounts, implement validation on the callback that checks the received amount against the expected amount and handles mismatches explicitly — either refunding or flagging for manual reconciliation.

**Receipt communication:** Send the M-Pesa receipt number to the user immediately after confirmed payment. For Kenyan users, the M-Pesa receipt is the authoritative proof of payment. An application that accepts an M-Pesa payment without echoing the receipt number back to the user creates doubt.

Tellus provides Daraja API implementation support — from initial Safaricom business account registration through production integration, callback handling, and payment reconciliation automation.

`;