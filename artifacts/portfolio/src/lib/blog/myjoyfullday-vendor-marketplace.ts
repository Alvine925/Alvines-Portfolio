export const title = "Building a Two-Sided Marketplace for Kenyan Weddings from Zero";
export const date = "2025-04-28";
export const excerpt = "The cold-start problem is real. Here's how we built both sides of the MyJoyfulDay vendor marketplace simultaneously  -  without faking supply or subsidizing demand.";
export const tags = ["MyJoyfulDay", "Product", "Kenya"];

export const coverImage = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80";

export const content = `
## Building a Two-Sided Marketplace for Kenyan Weddings When You Have Zero Users

Every two-sided marketplace faces the same foundational problem: supply without demand is useless, and demand without supply is frustrating. The chicken-and-egg problem has killed more marketplace startups than bad engineering ever will. For MyJoyfulDay's vendor marketplace, we had one unusual advantage: we didn't start with zero demand signals. We started with Jitabi.

### The Cold-Start Problem in Theory

The canonical cold-start playbook for two-sided marketplaces involves picking a side  -  usually supply  -  and subsidising it until enough supply exists to attract demand organically. Airbnb manually photographed apartments. OpenTable gave restaurants free terminals. DoorDash launched in small college towns where restaurant density made early supply tractable.

The playbook works. But it requires either significant capital to subsidise supply or clever geographic constraints to manufacture density. MyJoyfulDay in early 2023 had neither. What it had was a growing body of event creation data and a WhatsApp bot that was having thousands of conversations with event creators every month.

And those conversations contained something valuable: unprompted vendor requests.

### The Demand Signal That Preceded Everything

Before we had a single vendor in the marketplace, users were asking Jitabi for vendor recommendations. The messages varied in form  -  "do you know any good caterers in Westlands?", "any photographers for a 50th birthday in Lavington?", "where can I find a good MC for a house party?"  -  but the intent was consistent. People organising events wanted help finding the professionals to make those events happen.

We were logging these requests but not fulfilling them. The frequency was striking: in the month before we launched the vendor marketplace, **31% of active event creators** sent at least one vendor-related query to Jitabi. We had demand. We just had no supply to serve it.

The vendor marketplace was not a strategic pivot or a new product bet. It was a direct response to user behaviour we had already observed. The hardest part of marketplace cold-start  -  manufacturing initial demand  -  had been solved for us by the core product. We needed to build the supply side.

![Kenya marketplace and vendor network](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80)

### The Manual Vendor Onboarding Playbook

The first 50 vendors on the platform were not acquired through self-serve signup flows or digital advertising. They were acquired through direct outreach, one conversation at a time.

The outreach process had three stages. First, identification: we searched Instagram, Facebook, and Google for event vendors in Nairobi and Kisumu with active portfolios, positive reviews, and clear service offerings. We prioritised vendors who were already active on WhatsApp Business, because we knew the platform experience would be most natural for them. Second, outreach: a personal message  -  not a template blast  -  explaining what MyJoyfulDay was, what the user demand data showed, and what being listed would mean for their business. Third, onboarding: a WhatsApp conversation to collect their service details, portfolio links, service areas, and pricing range, followed by a photography session for vendors who needed better portfolio images.

The photography sessions were expensive and operationally complex. We sent a photographer to twelve vendor locations in Nairobi over two weekends. It cost roughly Ksh 45,000 in total. It was worth every shilling: vendors with professional photography on their profiles receive 2.3 times more contact requests than those with self-supplied images.

### The Pitch With No Traction

Selling a marketplace listing to a vendor when you have no users on the demand side requires a specific kind of honesty. We showed vendors the Jitabi conversation logs  -  anonymised but real  -  of users asking for exactly the kind of services they offered. We showed them the event creation growth curve. We told them we were not charging for early access and explained why: we needed their supply to validate the demand, and asking them to pay before we had proven the referral flow was a bad deal.

Most vendors we approached said yes. Not because we were compelling salespeople, but because the demand evidence was genuinely persuasive. When you can show a photographer that 47 event creators in Lavington asked for photography recommendations last month and no one fulfilled the request, the conversation changes from "convince me your platform is valuable" to "how quickly can I get listed?"

### Kisumu vs. Nairobi: Two Different Markets

The vendor landscape in Kisumu is structurally different from Nairobi. Nairobi has a dense, well-differentiated vendor ecosystem: specialised event photographers, dedicated caterers, professional MCs, full-service decor companies. Kisumu's vendor ecosystem is thinner and more generalist. The same vendor often offers photography, MC services, and decor  -  they are comprehensive event service providers rather than specialists.

This difference required different onboarding approaches. In Nairobi, we could search for "wedding photographer Westlands" and find dozens of options. In Kisumu, we found vendors through personal network referrals and community WhatsApp groups. The resulting vendor profiles in Kisumu reflect the market reality: they describe broader service offerings and the recommendation logic surfaces them for multiple event needs rather than single specialisations.

### How Vendor Recommendations Surface in Jitabi

The vendor recommendation flow is designed to be conversational, not transactional. After an event is created and the URL has been delivered, Jitabi waits 30 seconds and then sends a single follow-up message: "Your event is live! Are you looking for any help with [event type]-related services  -  photography, catering, decor?"

If the user says yes or asks about a specific category, Jitabi presents two or three vendor recommendations relevant to the event location and type. Each recommendation includes the vendor's name, a one-line description, their price range, and a direct WhatsApp contact link.

The **22% conversion rate** from vendor-suggested to vendor-contacted is higher than we expected. We attribute it to three factors: the recommendation arrives at the moment of highest intent (immediately after event creation), it is non-intrusive (a question, not a push), and the vendor profiles are genuinely relevant (location and event type filtering is effective).

![Wedding planning and vendor coordination](https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80)

### Two-Sided Liquidity: How We Measure It

Marketplace liquidity is the property of having enough supply and demand that transactions happen quickly and reliably. For the vendor marketplace, we measure it through two metrics: **supply coverage** (what percentage of event creation locations have at least three vendors per category within 20km?) and **demand fulfillment** (what percentage of vendor recommendation requests result in a vendor contact within 48 hours?).

Current supply coverage is 78% for Nairobi and 54% for Kisumu. Demand fulfillment is 67% across all markets. Both numbers are increasing as vendor density grows, but fulfillment in Kisumu and secondary cities remains a constraint that limits marketplace value in those markets.

### Vendor Quality and Dispute Resolution

Vendor quality is maintained through a post-event review flow. Guests and event creators who interacted with a vendor receive a single-message review request via Jitabi after the event date: "How was your experience with [Vendor Name]? Reply with a number 1-5 and any comments."

Review response rates are 34%  -  higher than most email-based review systems, lower than we'd like. Vendors with fewer than 4.0 average rating after 10 reviews are flagged for a quality conversation. Vendors with sustained low ratings or complaint patterns are removed from the recommendation pool.

Dispute resolution is handled manually by the MyJoyfulDay team for all disputes involving payments or unfulfilled services. The marketplace does not currently process payments  -  vendors and clients transact directly, usually via M-Pesa  -  which limits our visibility into transaction disputes but also limits our liability. As the marketplace matures, in-platform payment handling is on the roadmap.

### The Next Expansion

The vendor marketplace currently covers five categories: photography, catering, decor, entertainment (DJs and MCs), and venues. The next categories in the expansion queue  -  based on the frequency of unprompted Jitabi queries  -  are cake makers, hair and makeup, and event coordination services. Each expansion follows the same playbook: identify demand in the Jitabi conversation logs, manually recruit supply, validate the recommendation flow, then scale.

The marketplace exists because users asked for it. That demand-first approach  -  building supply to serve demand that already exists rather than manufacturing demand to justify supply  -  is the only reason the cold-start problem did not kill it.

## The Cold-Start Problem and How Jitabi Solved It

Every two-sided marketplace faces the same chicken-and-egg problem: vendors will not join without event creators to serve, and event creators will not value the marketplace without vendors to discover. Most marketplace businesses solve this by picking one side and subsidising it - typically by paying vendors to join or by charging event creators below cost until vendor supply is established.

MyJoyfulDay's approach was different because Jitabi created a demand signal before the marketplace existed. Within the first three months of Jitabi's operation, event creators started asking Jitabi unprompted questions like "where can I find a cake in Kisumu for Saturday?" and "who does good catering for 50 people in Westlands?" These questions were arriving in the Jitabi conversation flow with no vendor marketplace to answer them - Jitabi was returning a "coming soon" message.

This demand signal - real, uncoerced, organic demand from users who were already engaged with the platform - was the evidence base for the marketplace investment. The cold-start problem was partially solved before the first vendor was approached: there was demonstrable demand to show them.

The first vendor conversations were straightforward. "We have 500 event creators who asked for photography services last month and we told them we would have an answer for them soon. Do you want to be the first photographer we recommend when they ask?" That framing, backed by the actual demand data, converted nearly every vendor approached in the first wave.

![Kenyan wedding vendors and event suppliers showing marketplace supply side recruitment](https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80)

## The Manual Onboarding Playbook

The first 50 vendors on the MyJoyfulDay marketplace were onboarded manually. There was no self-serve vendor registration, no online form, no automated process. The team conducted individual conversations, helped vendors write their profiles, and in several cases arranged photography sessions to provide vendors with the professional images needed for their marketplace listing.

This manual process was slow and not scalable. But it was intentional. Each manual onboarding was a quality control mechanism and a learning opportunity. The quality of early vendors established the standards that self-serve onboarding would later need to maintain. The conversations revealed what vendors cared about (customer quality, payment reliability, profile visibility), what they feared (bad reviews from events that went wrong for reasons outside their control), and what they needed to feel confident recommending the platform to other vendors.

The transition to self-serve onboarding happened at 50 vendors. By that point, the quality bar was documented, the review system was in place, and there was enough social proof within vendor communities that new vendors arriving at the self-serve form understood what they were joining and why it was worth their time.

## The 22 Percent Conversion That Validated the Model

The first marketplace quality metric tracked was vendor-suggested to vendor-contacted: what percentage of event creators who saw a vendor recommendation in their Jitabi conversation went on to contact that vendor directly.

The initial expectation was 10 to 15% - comparable to typical click-through rates on digital advertising. The actual rate was 22%. This was significantly higher than expected and reflected something specific about the context: vendor recommendations in Jitabi arrive at exactly the moment the creator is planning an event and actively thinking about vendors. The intent is at its peak. The recommendation is not an interruption but an answer to an active question.

For context: a typical Google Ads campaign targeting Kenyan event planning keywords converts at 2 to 5% from click to contact. A Facebook or Instagram ad targeting event planners converts at 1 to 3%. The 22% Jitabi conversation conversion reflects the premium value of context-matched, intent-timed recommendations over interrupt advertising.

![MyJoyfulDay vendor marketplace showing conversion rate comparison with other marketing channels](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80)

## Geographic Expansion From Kisumu to Nairobi

MyJoyfulDay's vendor marketplace launched in Kisumu. The decision to start in Kisumu rather than Nairobi was deliberate: a smaller market with lower vendor competition allowed the team to build a complete, high-quality vendor set in one city before attempting the larger and more complex Nairobi market.

The Kisumu launch covered six vendor categories: photography, catering, cake and confectionery, decor, entertainment, and venue hire. Within four months, each category had at least five active vendors with reviews. The Kisumu vendor community was tight-knit enough that quality vendors referred other quality vendors, reducing the manual outreach burden significantly.

The Nairobi expansion used the Kisumu playbook but moved faster, benefiting from process documentation, lessons learned, and the credibility of a working marketplace in another city. The initial Nairobi focus was Karen, Westlands, and Kileleshwa - suburbs with high MyJoyfulDay event creation rates and established event vendor communities.

The expansion to other cities (Mombasa, Nakuru, Eldoret) is ongoing, with each city being approached after its MyJoyfulDay event creation volume crosses a threshold that suggests sufficient vendor demand to make marketplace investment worthwhile.

`;