export const coverImage = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80";

export const content = `
## Building a Two-Sided Marketplace for Kenyan Weddings When You Have Zero Users

Every two-sided marketplace faces the same foundational problem: supply without demand is useless, and demand without supply is frustrating. The chicken-and-egg problem has killed more marketplace startups than bad engineering ever will. For MyJoyfulDay's vendor marketplace, we had one unusual advantage: we didn't start with zero demand signals. We started with Jitabi.

### The Cold-Start Problem in Theory

The canonical cold-start playbook for two-sided marketplaces involves picking a side — usually supply — and subsidising it until enough supply exists to attract demand organically. Airbnb manually photographed apartments. OpenTable gave restaurants free terminals. DoorDash launched in small college towns where restaurant density made early supply tractable.

The playbook works. But it requires either significant capital to subsidise supply or clever geographic constraints to manufacture density. MyJoyfulDay in early 2023 had neither. What it had was a growing body of event creation data and a WhatsApp bot that was having thousands of conversations with event creators every month.

And those conversations contained something valuable: unprompted vendor requests.

### The Demand Signal That Preceded Everything

Before we had a single vendor in the marketplace, users were asking Jitabi for vendor recommendations. The messages varied in form — "do you know any good caterers in Westlands?", "any photographers for a 50th birthday in Lavington?", "where can I find a good MC for a house party?" — but the intent was consistent. People organising events wanted help finding the professionals to make those events happen.

We were logging these requests but not fulfilling them. The frequency was striking: in the month before we launched the vendor marketplace, **31% of active event creators** sent at least one vendor-related query to Jitabi. We had demand. We just had no supply to serve it.

The vendor marketplace was not a strategic pivot or a new product bet. It was a direct response to user behaviour we had already observed. The hardest part of marketplace cold-start — manufacturing initial demand — had been solved for us by the core product. We needed to build the supply side.

![Kenya marketplace and vendor network](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80)

### The Manual Vendor Onboarding Playbook

The first 50 vendors on the platform were not acquired through self-serve signup flows or digital advertising. They were acquired through direct outreach, one conversation at a time.

The outreach process had three stages. First, identification: we searched Instagram, Facebook, and Google for event vendors in Nairobi and Kisumu with active portfolios, positive reviews, and clear service offerings. We prioritised vendors who were already active on WhatsApp Business, because we knew the platform experience would be most natural for them. Second, outreach: a personal message — not a template blast — explaining what MyJoyfulDay was, what the user demand data showed, and what being listed would mean for their business. Third, onboarding: a WhatsApp conversation to collect their service details, portfolio links, service areas, and pricing range, followed by a photography session for vendors who needed better portfolio images.

The photography sessions were expensive and operationally complex. We sent a photographer to twelve vendor locations in Nairobi over two weekends. It cost roughly Ksh 45,000 in total. It was worth every shilling: vendors with professional photography on their profiles receive 2.3 times more contact requests than those with self-supplied images.

### The Pitch With No Traction

Selling a marketplace listing to a vendor when you have no users on the demand side requires a specific kind of honesty. We showed vendors the Jitabi conversation logs — anonymised but real — of users asking for exactly the kind of services they offered. We showed them the event creation growth curve. We told them we were not charging for early access and explained why: we needed their supply to validate the demand, and asking them to pay before we had proven the referral flow was a bad deal.

Most vendors we approached said yes. Not because we were compelling salespeople, but because the demand evidence was genuinely persuasive. When you can show a photographer that 47 event creators in Lavington asked for photography recommendations last month and no one fulfilled the request, the conversation changes from "convince me your platform is valuable" to "how quickly can I get listed?"

### Kisumu vs. Nairobi: Two Different Markets

The vendor landscape in Kisumu is structurally different from Nairobi. Nairobi has a dense, well-differentiated vendor ecosystem: specialised event photographers, dedicated caterers, professional MCs, full-service decor companies. Kisumu's vendor ecosystem is thinner and more generalist. The same vendor often offers photography, MC services, and decor — they are comprehensive event service providers rather than specialists.

This difference required different onboarding approaches. In Nairobi, we could search for "wedding photographer Westlands" and find dozens of options. In Kisumu, we found vendors through personal network referrals and community WhatsApp groups. The resulting vendor profiles in Kisumu reflect the market reality: they describe broader service offerings and the recommendation logic surfaces them for multiple event needs rather than single specialisations.

### How Vendor Recommendations Surface in Jitabi

The vendor recommendation flow is designed to be conversational, not transactional. After an event is created and the URL has been delivered, Jitabi waits 30 seconds and then sends a single follow-up message: "Your event is live! Are you looking for any help with [event type]-related services — photography, catering, decor?"

If the user says yes or asks about a specific category, Jitabi presents two or three vendor recommendations relevant to the event location and type. Each recommendation includes the vendor's name, a one-line description, their price range, and a direct WhatsApp contact link.

The **22% conversion rate** from vendor-suggested to vendor-contacted is higher than we expected. We attribute it to three factors: the recommendation arrives at the moment of highest intent (immediately after event creation), it is non-intrusive (a question, not a push), and the vendor profiles are genuinely relevant (location and event type filtering is effective).

![Wedding planning and vendor coordination](https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80)

### Two-Sided Liquidity: How We Measure It

Marketplace liquidity is the property of having enough supply and demand that transactions happen quickly and reliably. For the vendor marketplace, we measure it through two metrics: **supply coverage** (what percentage of event creation locations have at least three vendors per category within 20km?) and **demand fulfillment** (what percentage of vendor recommendation requests result in a vendor contact within 48 hours?).

Current supply coverage is 78% for Nairobi and 54% for Kisumu. Demand fulfillment is 67% across all markets. Both numbers are increasing as vendor density grows, but fulfillment in Kisumu and secondary cities remains a constraint that limits marketplace value in those markets.

### Vendor Quality and Dispute Resolution

Vendor quality is maintained through a post-event review flow. Guests and event creators who interacted with a vendor receive a single-message review request via Jitabi after the event date: "How was your experience with [Vendor Name]? Reply with a number 1-5 and any comments."

Review response rates are 34% — higher than most email-based review systems, lower than we'd like. Vendors with fewer than 4.0 average rating after 10 reviews are flagged for a quality conversation. Vendors with sustained low ratings or complaint patterns are removed from the recommendation pool.

Dispute resolution is handled manually by the MyJoyfulDay team for all disputes involving payments or unfulfilled services. The marketplace does not currently process payments — vendors and clients transact directly, usually via M-Pesa — which limits our visibility into transaction disputes but also limits our liability. As the marketplace matures, in-platform payment handling is on the roadmap.

### The Next Expansion

The vendor marketplace currently covers five categories: photography, catering, decor, entertainment (DJs and MCs), and venues. The next categories in the expansion queue — based on the frequency of unprompted Jitabi queries — are cake makers, hair and makeup, and event coordination services. Each expansion follows the same playbook: identify demand in the Jitabi conversation logs, manually recruit supply, validate the recommendation flow, then scale.

The marketplace exists because users asked for it. That demand-first approach — building supply to serve demand that already exists rather than manufacturing demand to justify supply — is the only reason the cold-start problem did not kill it.
`;
