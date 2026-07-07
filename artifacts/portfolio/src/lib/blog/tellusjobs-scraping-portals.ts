export const coverImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80";

export const content = `## We Scraped 10 Kenyan Job Portals for a Year. Here Is What the Data Shows

A year of systematic data collection across ten Kenyan job portals produces a picture of the market that no single platform can offer. When you aggregate posting volume, categorise by sector, track posting cadence, and map which employers appear where, patterns emerge that challenge common assumptions about where hiring actually happens — and where it doesn't.

This is that picture. It covers the methodology behind TellusJobs' data collection, a portal-by-portal breakdown of what each source actually contributes to the total market view, and the key findings that only become visible when you can see the whole ecosystem simultaneously.

![Data analytics dashboard showing job market metrics](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80)

## Methodology: What We Scraped, How Often, and How We Normalised

TellusJobs monitors ten primary sources: LinkedIn Kenya (filtered to Kenya-based roles), BrighterMonday, ReliefWeb (Kenya-tagged postings), Devex (Kenya-focused roles), the UN Jobs portal (East Africa region), UNDP's careers portal, the Public Service Commission portal, MyJobMag Kenya, Career Point Kenya, and a rotating set of large employer career pages covering approximately 60 major Kenyan organisations.

Each source is crawled on a schedule calibrated to its actual update cadence. LinkedIn and BrighterMonday are crawled every four hours given their continuous update model. The PSC portal is checked daily as its posting cadence is slower and more predictable. Individual employer career pages are checked twice daily — most don't update more than once per working day.

For each posting, the system extracts: job title (raw text as posted, preserved for analysis), company name, location, sector/function category (where provided by the portal; otherwise inferred), posting date, application deadline (where stated), salary or salary range (where disclosed), job description full text, and experience/qualification requirements. Each field undergoes normalisation — date formats are standardised, locations are mapped to a consistent geographic hierarchy, company names are deduplicated against a master employer registry.

The resulting dataset represents everything we've seen posted in the Kenyan formal sector over twelve months. Here is what it shows.

## LinkedIn Kenya: Multinational Strength, SME Blind Spot

LinkedIn is the platform most professional Kenyan job seekers default to first, and for certain subsections of the market the instinct is correct. Multinational companies with regional offices in Nairobi — Unilever, Diageo, Nestlé, Standard Chartered, Barclays/ABSA, PwC, Deloitte, KPMG, McKinsey — post consistently on LinkedIn because their global HR infrastructure is built around it. Large Kenyan corporates with sophisticated HR departments — Equity Bank, KCB, Safaricom, East African Breweries, Nation Media Group — also maintain strong LinkedIn presence.

But LinkedIn's coverage has systematic gaps. SMEs — which employ the majority of Kenya's formal private sector workforce — are largely absent. The posting cost and the LinkedIn audience skew mean that a 50-person manufacturing firm in Thika is very unlikely to post on LinkedIn, even for professional roles. NGOs below a certain organisational size are similarly absent. And the LinkedIn algorithm problem is real: even companies that post on LinkedIn don't reach all relevant candidates. The algorithm's decision about which job seekers to show a particular posting to is opaque and imperfect. Following a company's LinkedIn page improves visibility but doesn't guarantee you'll see all their postings.

In TellusJobs' data, LinkedIn contributes approximately 28% of total posting volume but is disproportionately weighted toward the top of the employer size distribution. It is a necessary source, not a sufficient one.

## BrighterMonday: The Kenyan Volume Leader

BrighterMonday consistently contributes the highest posting volume of any Kenya-specific commercial platform in our dataset. Its employer base is broader than LinkedIn's, with better representation of mid-sized Kenyan firms, the banking sector's full depth (including regional banks and microfinance institutions), FMCG companies from multinationals down to Kenyan-owned brands, professional services firms, and a reasonable NGO presence.

BrighterMonday's update cadence is good — most new postings appear within hours of the employer submitting them. The platform's age and established brand in the Kenyan market means employers who are aware of the local landscape and want Kenyan-market-specific candidate pools default to it. For candidates targeting Kenya-specific companies rather than global employers, BrighterMonday's employer mix is arguably more relevant than LinkedIn's.

The weaknesses: search functionality is basic by modern standards. There is no intelligent matching — it's keyword search with category filters. Stale postings are a genuine problem; roles that closed on the employer side frequently remain visible on BrighterMonday because employers don't always remember to close the listing. And salary disclosure rates are low — roughly 15% of BrighterMonday postings include any salary information.

![Office worker searching for jobs on laptop](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80)

## The Development Sector: High Salaries, Complete Invisibility on Mainstream Platforms

The NGO and international development sector is the most striking finding in the data from a job seeker perspective. ReliefWeb, Devex, the UNDP careers portal, and UN Jobs collectively contribute a posting volume that is proportionally smaller than LinkedIn or BrighterMonday — but the roles they contain are among the most competitively compensated in the Kenyan formal sector.

A senior monitoring and evaluation specialist at a well-funded INGO might earn KES 250,000-400,000 per month. A country director for a mid-sized development organisation earns salaries that compete with senior private sector management. Programme managers with the right thematic expertise and donor reporting experience command premiums that their equivalent private sector counterparts rarely match. Yet these roles appear on ReliefWeb and Devex — and nowhere else.

The development sector has its own vocabulary, its own career ladders, and its own hiring culture. Roles are categorised by thematic area (food security, WASH, health, protection, livelihood) and by function (programme management, M&E, logistics, finance). The application expectations are different: sector-specific references to logframes, results-based management, donor compliance requirements, and specific INGO systems are standard components of both job descriptions and expected applications. A candidate making the transition from private sector to development sector needs not just to find these roles but to understand how to present their experience in sector-appropriate terms.

## Government and Parastatal Sector: A Parallel Hiring Universe

The Public Service Commission is the formal channel for most national government employment, and it operates on a completely separate rhythm from the commercial job market. PSC advertisements are published on the PSC website, in the official Kenya Gazette, and sometimes in national newspapers. The timelines are longer, the application processes are more formal, and the volume of applications per role is enormous — government roles attract applicant pools an order of magnitude larger than equivalent private sector roles.

Beyond the PSC, individual ministries, semi-autonomous government agencies (SAGAs), state corporations, and county governments all maintain varying degrees of independent hiring. The Kenya Revenue Authority, Kenya Power, Kenya Ports Authority, Kenya Airways, and the major state-owned enterprises each have their own career pages and their own posting practices. Monitoring this sector requires maintaining a roster of individual institutional portals, and the rewards are real: government and parastatal salaries at the professional level are competitive with private sector equivalents once benefits and job security are factored in.

County government is an undermonitored opportunity. Devolution has created substantial professional employment at the county level in healthcare administration, finance, planning, and technical functions, but county recruitment processes are often informal or poorly advertised outside the county's own communication channels.

## The Biggest Finding: Corporate Career Pages as the Real Market

The most significant finding from twelve months of systematic data collection is this: the majority of large Kenyan employers post most of their professional roles exclusively on their own career pages, and these roles never appear on any aggregator.

Among the 60 employer career pages TellusJobs monitors directly, the proportion of postings that also appeared on at least one commercial platform averaged below 40%. That means more than 60% of roles at these large employers were career-page-exclusive. The gap was most pronounced for specialised technical roles, senior positions, and roles in certain sectors including banking, telecommunications, and insurance.

The explanation is partly cost (posting fees on commercial platforms), partly culture (certain HR departments believe that candidates who find their career page are demonstrating appropriate initiative), and partly practicality (for employers who receive hundreds of applications for every posting, limiting distribution actually reduces the administrative burden). Whatever the reason, the practical implication for job seekers is stark: if you're not checking the career pages of your target employers directly, you're invisible to a large share of the available market.

![Professional candidate updating resume](https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80)

## The 23% Duplicate Rate: How Deduplication Works

Across all sources combined, approximately 23% of postings in the TellusJobs dataset are duplicates — the same role appearing on more than one platform. The most common duplication pattern is LinkedIn plus BrighterMonday (employers who use both platforms simultaneously), followed by BrighterMonday plus a sector-specific board, and then the development sector platforms where ReliefWeb and Devex frequently both carry the same INGO role.

Deduplication is a non-trivial technical problem because the same role is never represented identically across platforms. The title might have minor variations. The description might be truncated on one platform and full on another. The posting dates differ because each platform logs when the role was submitted to them, not when the employer originally created it.

TellusJobs' deduplication uses a combination of fuzzy string matching on titles (catching minor variations while being conservative about different roles with similar-sounding titles), company name normalisation against the employer registry, location matching, and a similarity threshold on the job description text. Probable duplicates are flagged and the best-quality version is retained.

## Posting Cadence: Tuesday and Wednesday Are Not an Accident

The data is clear about when jobs are posted. Tuesday and Wednesday account for approximately 35% of all new postings, despite being only 40% of working days. Monday is below average — HR departments are catching up from the weekend. Thursday is moderate. Friday is significantly below average. The weekend is near zero outside of automated postings.

The practical implication: if you're checking job boards once daily, checking them on Tuesday and Wednesday morning gives you first access to the largest share of new postings. If you're checking less frequently, Tuesday morning is the single best time to look.

## Salary Transparency: The Missing Data Problem

Across all sources combined, salary information is present in approximately 18% of postings. The development sector has the highest salary disclosure rate — INGO jobs frequently include salary bands or grades in their postings. The private sector, particularly banking and financial services, has near-zero voluntary salary disclosure.

This is a genuine disadvantage for job seekers trying to prioritise their applications efficiently. Without salary information, a candidate can't easily distinguish between a role that would represent a meaningful step up and one that would be lateral or worse. The absence of salary data forces candidates to invest application time in roles that turn out to be misaligned on compensation.

The pattern across the data shows no meaningful trend toward increased transparency in the private sector. If anything, private sector salary disclosure has remained flat while the development sector — partly driven by donor transparency requirements — has improved modestly.

What TellusJobs can do in the absence of direct salary data is leverage its accumulated posting history to provide estimated salary ranges based on comparable roles, employer, seniority level, and sector — giving candidates a data-informed basis for prioritisation even when the employer hasn't disclosed compensation directly.
`;
