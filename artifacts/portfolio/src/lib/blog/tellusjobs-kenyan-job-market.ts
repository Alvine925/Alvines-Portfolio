export const coverImage = "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&q=80";

export const content = `## The Kenyan Job Market Is Fragmented. TellusJobs Is the Fix

Kenya's formal job market is one of the most dynamic in Sub-Saharan Africa, yet it remains stubbornly fragmented in ways that cost job seekers enormous time, opportunity, and money. If you've searched for a professional role in Kenya in the last five years, you already know the experience: you check LinkedIn at 7 AM, then BrighterMonday, then a company's career page, then a WhatsApp group tip, then a recruitment agency you registered with eight months ago, and somewhere in between you miss a role that closed yesterday, accidentally apply twice for the same position, and still end up wondering whether you've actually seen all the relevant openings.

You haven't. Not even close. This article maps the full landscape of where Kenyan jobs are advertised, explains why no single platform comes close to complete coverage, and makes the case for why aggregation — real, intelligent aggregation — is the most important infrastructure the Kenyan job market currently lacks.

![Job search papers and applications](https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&q=80)

## The Portal Landscape: A Tour of Where Jobs Actually Live

**LinkedIn** is where most white-collar Kenyan job seekers start. It has real strengths: multinational companies and large Kenyan corporates with sophisticated HR departments post here consistently. If you're looking for roles at Safaricom, Equity Bank, Standard Chartered, international NGOs with Nairobi offices, or any company with a significant international footprint, LinkedIn is a necessary part of your search. But LinkedIn is deeply imperfect for the Kenyan market. The algorithm is designed for a global audience and treats Kenya as a small market. Most job postings reach only a fraction of potential Kenyan candidates unless those candidates are already following the company page or LinkedIn decides the posting is relevant to them. The algorithm is opaque, the employer posting costs are high, and crucially, a large proportion of Kenyan employers — especially SMEs, development sector organisations, and government — either don't post there at all or post inconsistently.

**BrighterMonday** is the most significant Kenya-specific job portal by posting volume. It covers banking, FMCG, professional services, and a reasonable slice of NGO roles. The employer base skews toward formal, larger organisations, but the platform has genuine depth in certain sectors. Its search functionality is basic compared to LinkedIn, but its Kenya-specificity gives it a different employer mix that often surfaces roles absent from LinkedIn's feed.

**The development and NGO sector** is an entirely separate ecosystem with its own set of platforms that most private-sector-focused job seekers never visit. ReliefWeb, Devex, UNDP Jobs, and various organisation-specific career portals are the primary channels for roles in international development, humanitarian response, public health, and environmental management. These roles frequently carry the most competitive salaries in the Kenyan market — a senior M&E specialist at a well-funded INGO can earn more than their equivalent in Kenyan banking — but they are completely invisible on mainstream job boards. The Kenyan candidate who has never heard of ReliefWeb is leaving significant opportunity unexamined.

**Government and parastatal jobs** are another closed ecosystem. The Public Service Commission advertises through its own portal, the official Kenya Gazette, and on occasion the daily newspapers. Individual ministries, state corporations, and county governments maintain their own career pages and advertise through their own channels. A candidate targeting the public sector needs to maintain a roster of ministry websites, check gazette notices, and monitor the PSC portal directly. None of this flows automatically into commercial job boards.

**Professional association boards** add another layer. ICPAK (the Institute of Certified Public Accountants of Kenya) maintains a jobs board for accounting and finance roles. The Law Society of Kenya circulates legal sector vacancies. The Institute of Human Resource Management has an active network. The Architectural Association of Kenya, the Kenya Medical Association, and engineering professional bodies all have some form of job circulation. These boards capture sector-specific roles that often never appear anywhere else.

![Kenyan professional landscape](https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=1200&q=80)

## The Exclusive Listing Problem: Where Most Large Kenyan Employers Actually Post

Here is the finding that surprises people who haven't systematically analysed the market: the majority of large Kenyan employers — including many of the country's largest banks, telecommunications companies, and major corporates — advertise most of their open roles exclusively on their own career pages. They do not post on LinkedIn. They do not post on BrighterMonday. They post on their own website, and they rely on candidates who already know to check there.

Consider the implications. A candidate who diligently checks LinkedIn and BrighterMonday every day is missing a substantial portion of the market. They're seeing the employers who have decided to pay for third-party distribution or who have LinkedIn-focused HR policies — but they're invisible to the employer's own career page that may have three or four open roles that fit their profile perfectly.

This is not a small phenomenon. When TellusJobs mapped corporate career pages against aggregator listings, the gap was striking. Employers in banking, telecommunications, insurance, manufacturing, and large retail consistently maintained active career pages with roles that never appeared on any commercial board. The pattern was especially pronounced for specialised technical roles where employers preferred to attract candidates who had done enough research to find their career page directly.

## The Time Cost: What Comprehensive Manual Searching Actually Takes

A job seeker genuinely attempting comprehensive coverage of the Kenyan market needs to check: LinkedIn, BrighterMonday, ReliefWeb, Devex (if development sector), PSC portal, 15-20 individual corporate career pages for relevant employers, their professional association board, any sector-specific niche boards, and their recruitment agency contact list. On a good day, moving through all of these, filtering for relevant roles, identifying new postings since yesterday, and recording what you've found takes 2-3 hours. Every day.

That time calculation understates the real cost because it doesn't include the cognitive overhead of context-switching between platforms with completely different interfaces, filtering logic, and role descriptions. It doesn't include the time spent deduplicating — realising the role you just carefully read on BrighterMonday is the same one you already noted from LinkedIn two days ago. And it doesn't include the quality degradation that comes from doing the same slightly tedious search task repeatedly. The fourth day of checking 12 platforms is not as thorough as the first day.

Over a three-month job search — a conservative estimate for most professional roles — that's 180-270 hours of search time alone, before you've written a single application.

## The Geography Problem: Nairobi, Mombasa, and the Rest

Kenya's formal job market is geographically concentrated in ways that the portal landscape reflects imperfectly. Greater Nairobi — including Nairobi County, Kiambu County, and to a lesser extent Machakos — accounts for the overwhelming majority of formal private sector employment. Mombasa is the clear secondary market, with a different sectoral mix (logistics, port services, hospitality, coastal tourism). Kisumu is growing as a regional hub for Lake Victoria basin operations and has a meaningful development sector presence. Nakuru, Eldoret, and Thika have manufacturing and agribusiness employment that rarely appears on national job boards.

The portal coverage geography roughly mirrors the employment geography — LinkedIn and BrighterMonday are essentially Nairobi-first, with other regions poorly served. The candidate in Kisumu looking for professional employment faces the same fragmentation problem as the Nairobi candidate, plus the additional problem that locally-relevant roles are even less likely to appear on the major national platforms.

![Data and analytics dashboard](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80)

## How TellusJobs Approaches Aggregation: The Technical Foundation

Aggregating from 10+ sources with meaningfully different structures, update cadences, and technical accessibility requires solving several hard problems simultaneously.

**Scraping and normalization** involves accessing portal content at the data layer where possible (using official APIs where they exist, structured scraping where they don't), then transforming the output into a consistent schema. A role title, company name, location, salary range (when disclosed), posting date, application deadline, and job description need to be extracted and normalised from sources that structure each field differently, use different date formats, and vary enormously in how much information they include.

**Deduplication** is a significant challenge. TellusJobs' data shows a 23% duplicate rate across the major portals — roughly one in four job listings appears on more than one platform. A naive aggregator that simply concatenated portal feeds would show the same role multiple times, creating a misleading picture of available opportunities and wasting the job seeker's time. The deduplication logic combines fuzzy string matching on job titles and descriptions, company name normalisation, location matching, and posting date proximity to identify probable duplicates with high confidence.

**Update cadence** varies significantly by source. Some portals update continuously as new roles are submitted. Others batch their updates once daily. Corporate career pages are updated whenever the employer's internal HR process produces a new opening, which can be daily or months apart. TellusJobs' crawling schedule is calibrated to each source's actual update cadence to balance freshness against server load.

## Who Benefits Most from Consolidation

The efficiency gains from aggregation are not evenly distributed across candidate types. Some groups benefit disproportionately.

**Recent graduates** benefit enormously from aggregation because they don't yet have the sector-specific knowledge to know which portals serve which industries. They're most likely to be over-invested in LinkedIn (because that's what their university career services recommended) and under-invested in the sector-specific and corporate career page channels where many entry-level roles actually live.

**Career changers** benefit because they're crossing sector boundaries that correspond to portal boundaries. The accountant moving into the NGO sector needs to know about ReliefWeb and Devex but probably doesn't. The marketing professional moving from FMCG into technology needs to know which technology-specific boards exist. Aggregation removes the requirement to know the portal landscape of your destination sector before you've arrived in it.

**Experienced professionals doing selective searches** benefit in a different way — they're not trying to cover the whole market but to ensure they see the specific types of opportunities that match their level. Senior candidates are especially at risk of missing the corporate career page postings that many large employers use exclusively for specialist and leadership roles.

**Candidates in secondary cities** benefit because their relevant opportunities are even more scattered across local channels, national platforms, and regional-employer career pages than Nairobi candidates' opportunities are.

## What the Aggregation Data Reveals About Hiring Reality

When you can see the whole market — not just the LinkedIn-visible slice — patterns emerge that challenge common assumptions about where hiring actually happens in Kenya.

The data shows that a significant minority of professional roles are posted exclusively on corporate career pages and never appear on any third-party platform. It shows that certain sectors — development, government, legal, accounting — have essentially separate hiring ecosystems invisible to candidates who only search commercial job boards. It shows that the Tuesday/Wednesday posting peak is real: significantly more roles go live in the middle of the work week than on Mondays or Fridays. It shows that the modal Kenyan job posting contains no salary information whatsoever, making comparison and prioritisation harder.

Most importantly, it shows that comprehensive coverage of the Kenyan job market is not achievable through any single platform. It requires systematic aggregation, intelligent deduplication, and continuous monitoring of sources that range from well-structured APIs to individual employer career pages.

This is what TellusJobs is built to solve. The fragmentation of Kenya's job market is not a bug or a temporary inefficiency waiting to be corrected by market forces. It reflects the genuine diversity of the Kenyan hiring ecosystem — its multiple sectors, multiple organisation types, multiple geographic markets, and multiple professional communities. Effective job search in Kenya requires infrastructure that matches this complexity. The alternative is spending 200+ hours per job search navigating the fragmentation manually, and still missing a third of the relevant market.
`;
