export const coverImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80";

export const content = `## We Scraped 10 Kenyan Job Portals for a Year. Here Is What the Data Shows

A year of systematic data collection across ten Kenyan job portals produces a picture of the market that no single platform can offer. When you aggregate posting volume, categorise by sector, track posting cadence, and map which employers appear where, patterns emerge that challenge common assumptions about where hiring actually happens  -  and where it doesn't.

This is that picture. It covers the methodology behind TellusJobs' data collection, a portal-by-portal breakdown of what each source actually contributes to the total market view, and the key findings that only become visible when you can see the whole ecosystem simultaneously.

![Data analytics dashboard showing job market metrics](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80)

## Methodology: What We Scraped, How Often, and How We Normalised

TellusJobs monitors ten primary sources: LinkedIn Kenya (filtered to Kenya-based roles), BrighterMonday, ReliefWeb (Kenya-tagged postings), Devex (Kenya-focused roles), the UN Jobs portal (East Africa region), UNDP's careers portal, the Public Service Commission portal, MyJobMag Kenya, Career Point Kenya, and a rotating set of large employer career pages covering approximately 60 major Kenyan organisations.

Each source is crawled on a schedule calibrated to its actual update cadence. LinkedIn and BrighterMonday are crawled every four hours given their continuous update model. The PSC portal is checked daily as its posting cadence is slower and more predictable. Individual employer career pages are checked twice daily  -  most don't update more than once per working day.

For each posting, the system extracts: job title (raw text as posted, preserved for analysis), company name, location, sector/function category (where provided by the portal; otherwise inferred), posting date, application deadline (where stated), salary or salary range (where disclosed), job description full text, and experience/qualification requirements. Each field undergoes normalisation  -  date formats are standardised, locations are mapped to a consistent geographic hierarchy, company names are deduplicated against a master employer registry.

The resulting dataset represents everything we've seen posted in the Kenyan formal sector over twelve months. Here is what it shows.

## LinkedIn Kenya: Multinational Strength, SME Blind Spot

LinkedIn is the platform most professional Kenyan job seekers default to first, and for certain subsections of the market the instinct is correct. Multinational companies with regional offices in Nairobi  -  Unilever, Diageo, Nestlé, Standard Chartered, Barclays/ABSA, PwC, Deloitte, KPMG, McKinsey  -  post consistently on LinkedIn because their global HR infrastructure is built around it. Large Kenyan corporates with sophisticated HR departments  -  Equity Bank, KCB, Safaricom, East African Breweries, Nation Media Group  -  also maintain strong LinkedIn presence.

But LinkedIn's coverage has systematic gaps. SMEs  -  which employ the majority of Kenya's formal private sector workforce  -  are largely absent. The posting cost and the LinkedIn audience skew mean that a 50-person manufacturing firm in Thika is very unlikely to post on LinkedIn, even for professional roles. NGOs below a certain organisational size are similarly absent. And the LinkedIn algorithm problem is real: even companies that post on LinkedIn don't reach all relevant candidates. The algorithm's decision about which job seekers to show a particular posting to is opaque and imperfect. Following a company's LinkedIn page improves visibility but doesn't guarantee you'll see all their postings.

In TellusJobs' data, LinkedIn contributes approximately 28% of total posting volume but is disproportionately weighted toward the top of the employer size distribution. It is a necessary source, not a sufficient one.

## BrighterMonday: The Kenyan Volume Leader

BrighterMonday consistently contributes the highest posting volume of any Kenya-specific commercial platform in our dataset. Its employer base is broader than LinkedIn's, with better representation of mid-sized Kenyan firms, the banking sector's full depth (including regional banks and microfinance institutions), FMCG companies from multinationals down to Kenyan-owned brands, professional services firms, and a reasonable NGO presence.

BrighterMonday's update cadence is good  -  most new postings appear within hours of the employer submitting them. The platform's age and established brand in the Kenyan market means employers who are aware of the local landscape and want Kenyan-market-specific candidate pools default to it. For candidates targeting Kenya-specific companies rather than global employers, BrighterMonday's employer mix is arguably more relevant than LinkedIn's.

The weaknesses: search functionality is basic by modern standards. There is no intelligent matching  -  it's keyword search with category filters. Stale postings are a genuine problem; roles that closed on the employer side frequently remain visible on BrighterMonday because employers don't always remember to close the listing. And salary disclosure rates are low  -  roughly 15% of BrighterMonday postings include any salary information.

![Office worker searching for jobs on laptop](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80)

## The Development Sector: High Salaries, Complete Invisibility on Mainstream Platforms

The NGO and international development sector is the most striking finding in the data from a job seeker perspective. ReliefWeb, Devex, the UNDP careers portal, and UN Jobs collectively contribute a posting volume that is proportionally smaller than LinkedIn or BrighterMonday  -  but the roles they contain are among the most competitively compensated in the Kenyan formal sector.

A senior monitoring and evaluation specialist at a well-funded INGO might earn KES 250,000-400,000 per month. A country director for a mid-sized development organisation earns salaries that compete with senior private sector management. Programme managers with the right thematic expertise and donor reporting experience command premiums that their equivalent private sector counterparts rarely match. Yet these roles appear on ReliefWeb and Devex  -  and nowhere else.

The development sector has its own vocabulary, its own career ladders, and its own hiring culture. Roles are categorised by thematic area (food security, WASH, health, protection, livelihood) and by function (programme management, M&E, logistics, finance). The application expectations are different: sector-specific references to logframes, results-based management, donor compliance requirements, and specific INGO systems are standard components of both job descriptions and expected applications. A candidate making the transition from private sector to development sector needs not just to find these roles but to understand how to present their experience in sector-appropriate terms.

## Government and Parastatal Sector: A Parallel Hiring Universe

The Public Service Commission is the formal channel for most national government employment, and it operates on a completely separate rhythm from the commercial job market. PSC advertisements are published on the PSC website, in the official Kenya Gazette, and sometimes in national newspapers. The timelines are longer, the application processes are more formal, and the volume of applications per role is enormous  -  government roles attract applicant pools an order of magnitude larger than equivalent private sector roles.

Beyond the PSC, individual ministries, semi-autonomous government agencies (SAGAs), state corporations, and county governments all maintain varying degrees of independent hiring. The Kenya Revenue Authority, Kenya Power, Kenya Ports Authority, Kenya Airways, and the major state-owned enterprises each have their own career pages and their own posting practices. Monitoring this sector requires maintaining a roster of individual institutional portals, and the rewards are real: government and parastatal salaries at the professional level are competitive with private sector equivalents once benefits and job security are factored in.

County government is an undermonitored opportunity. Devolution has created substantial professional employment at the county level in healthcare administration, finance, planning, and technical functions, but county recruitment processes are often informal or poorly advertised outside the county's own communication channels.

## The Biggest Finding: Corporate Career Pages as the Real Market

The most significant finding from twelve months of systematic data collection is this: the majority of large Kenyan employers post most of their professional roles exclusively on their own career pages, and these roles never appear on any aggregator.

Among the 60 employer career pages TellusJobs monitors directly, the proportion of postings that also appeared on at least one commercial platform averaged below 40%. That means more than 60% of roles at these large employers were career-page-exclusive. The gap was most pronounced for specialised technical roles, senior positions, and roles in certain sectors including banking, telecommunications, and insurance.

The explanation is partly cost (posting fees on commercial platforms), partly culture (certain HR departments believe that candidates who find their career page are demonstrating appropriate initiative), and partly practicality (for employers who receive hundreds of applications for every posting, limiting distribution actually reduces the administrative burden). Whatever the reason, the practical implication for job seekers is stark: if you're not checking the career pages of your target employers directly, you're invisible to a large share of the available market.

![Professional candidate updating resume](https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80)

## The 23% Duplicate Rate: How Deduplication Works

Across all sources combined, approximately 23% of postings in the TellusJobs dataset are duplicates  -  the same role appearing on more than one platform. The most common duplication pattern is LinkedIn plus BrighterMonday (employers who use both platforms simultaneously), followed by BrighterMonday plus a sector-specific board, and then the development sector platforms where ReliefWeb and Devex frequently both carry the same INGO role.

Deduplication is a non-trivial technical problem because the same role is never represented identically across platforms. The title might have minor variations. The description might be truncated on one platform and full on another. The posting dates differ because each platform logs when the role was submitted to them, not when the employer originally created it.

TellusJobs' deduplication uses a combination of fuzzy string matching on titles (catching minor variations while being conservative about different roles with similar-sounding titles), company name normalisation against the employer registry, location matching, and a similarity threshold on the job description text. Probable duplicates are flagged and the best-quality version is retained.

## Posting Cadence: Tuesday and Wednesday Are Not an Accident

The data is clear about when jobs are posted. Tuesday and Wednesday account for approximately 35% of all new postings, despite being only 40% of working days. Monday is below average  -  HR departments are catching up from the weekend. Thursday is moderate. Friday is significantly below average. The weekend is near zero outside of automated postings.

The practical implication: if you're checking job boards once daily, checking them on Tuesday and Wednesday morning gives you first access to the largest share of new postings. If you're checking less frequently, Tuesday morning is the single best time to look.

## Salary Transparency: The Missing Data Problem

Across all sources combined, salary information is present in approximately 18% of postings. The development sector has the highest salary disclosure rate  -  INGO jobs frequently include salary bands or grades in their postings. The private sector, particularly banking and financial services, has near-zero voluntary salary disclosure.

This is a genuine disadvantage for job seekers trying to prioritise their applications efficiently. Without salary information, a candidate can't easily distinguish between a role that would represent a meaningful step up and one that would be lateral or worse. The absence of salary data forces candidates to invest application time in roles that turn out to be misaligned on compensation.

The pattern across the data shows no meaningful trend toward increased transparency in the private sector. If anything, private sector salary disclosure has remained flat while the development sector  -  partly driven by donor transparency requirements  -  has improved modestly.

What TellusJobs can do in the absence of direct salary data is leverage its accumulated posting history to provide estimated salary ranges based on comparable roles, employer, seniority level, and sector  -  giving candidates a data-informed basis for prioritisation even when the employer hasn't disclosed compensation directly.

## The Technical Reality of Aggregating Kenya's Job Market

Building a reliable aggregation layer across 10+ Kenyan job portals means solving a different technical problem for each source. No two portals expose their data in the same way, update at the same frequency, or respond to the same scraping approaches.

LinkedIn presents the most significant challenge: it is the most valuable source for certain candidate profiles but the most aggressively anti-scraping platform in the market. TellusJobs accesses LinkedIn through their official API for partner integrations and through the public search API where available, rather than through direct scraping. This limits coverage to roles posted publicly but ensures compliance with LinkedIn's terms of service.

BrighterMonday has a more accessible structure and provides the highest volume of Kenya-specific postings. The site updates multiple times daily and has a sufficiently consistent HTML structure that the TellusJobs parser handles it reliably. The main challenge is stale posting detection - BrighterMonday does not always remove filled positions promptly, creating a persistent population of posts that appear active but are no longer accepting applications.

Government portals present a different challenge: inconsistent update schedules, PDF-based job advertisements that require document parsing rather than HTML scraping, and public service commission advertisement formats that vary significantly between ministries. TellusJobs handles PDF advertisements through optical character recognition and document parsing, which works well for clearly formatted PDFs but struggles with scanned document PDFs where text is not machine-readable.

![TellusJobs technical aggregation system showing multi-source job portal monitoring and parsing](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80)

## The Stale Posting Problem in Kenya's Job Market

One of the most frustrating experiences in Kenyan job searching is investing time in preparing an application for a role, submitting it, and receiving no response because the role was filled weeks before the posting was removed. TellusJobs' stale posting detection system addresses this directly.

The system tracks each posting across multiple signals to estimate whether it is still actively accepting applications:

**Employer career page cross-reference:** If the role is no longer visible on the employer's own career page but still live on aggregators, the role is likely filled. This is the most reliable stale detection signal.

**Application button status:** Some portals change the application button state when a role closes. TellusJobs monitors these states and updates role status accordingly.

**Historical posting duration:** Based on 12 months of data, TellusJobs has established typical posting durations by sector and seniority. A senior finance role that has been visible for 45 days when the sector median is 21 days is flagged for stale review.

**Employer response patterns:** Employers that consistently remove postings promptly are treated differently from employers that historically leave filled postings visible. The stale confidence score adjusts based on the employer's historical behaviour.

Roles flagged as potentially stale are shown with a warning indicator in the TellusJobs feed, and users can filter to show only recently posted or recently verified active roles.

## Sector-by-Sector Insights From the Data

One year of aggregation data across 10+ Kenyan job portals provides a market-level view of the job posting landscape that no individual portal gives. Selected findings:

**Banking and financial services** post with the highest consistency to their own career portals and rarely to aggregators below the management level. Entry-level banking roles (tellers, relationship officers) appear on BrighterMonday reliably. Management roles above senior associate level predominantly use recruitment agencies or internal posting.

**NGO and development sector** is almost entirely invisible on mainstream portals. Reliefweb and Devex contain roles paying 50 to 150% premium over equivalent private sector roles, yet these platforms are used by a small fraction of the candidate pool that would qualify for these roles. The information asymmetry here is large and addressable.

**Technology sector** is the most LinkedIn-heavy, with the majority of software engineering, product, and data roles posted primarily on LinkedIn with secondary posting to company career pages. Tech companies also have the highest prevalence of remote-first or remote-inclusive roles - important for Kenya's growing technology talent pool outside Nairobi.

**FMCG and consumer goods** rely heavily on recruitment agencies for senior roles and use BrighterMonday and company career pages for field sales and distribution management positions. The informal recruitment channel through distributor networks is significant for roles in trade marketing and sales but largely opaque to any platform.

![Data analysis showing Kenyan job market sector distribution across different posting platforms](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80)

## Searching TellusJobs Most Effectively

Understanding the aggregation methodology helps users search more effectively.

**Use the "source" filter strategically.** TellusJobs allows filtering by source portal. If you are specifically targeting development sector roles, filtering for Reliefweb and Devex sources gives you those exclusively. If you are specifically targeting company career page postings (the exclusive listing category), filtering for that source gives you roles invisible on any other aggregator.

**Set your freshness preference.** By default, TellusJobs shows roles posted in the last 30 days. For high-competition roles in finance and technology, narrowing to the last seven days prioritises the most recent postings where application competition is still building. For specialist or niche roles, extending to 60 or 90 days may surface older postings still accepting applications.

**Use the sector filter broadly then narrow.** If you are a finance professional, start with the Finance and Accounting sector filter to see the full market, then use sub-filters to narrow. Many relevant roles appear under General Management or Operations rather than Finance - filtering too narrowly at the outset misses these.

**Save searches and set up alerts.** The most effective TellusJobs users save their primary search configuration and receive daily email or WhatsApp alerts when new matching roles appear. This replaces the need for daily manual checking while ensuring you see relevant new postings within 24 hours of posting.

`;