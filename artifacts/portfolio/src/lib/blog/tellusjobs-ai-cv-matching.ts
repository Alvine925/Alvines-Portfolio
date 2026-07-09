export const title = "How AI Reads Your CV and Matches You to Jobs in Seconds";
export const date = "2025-06-20";
export const excerpt = "Keyword matching is how 2015 job sites worked. TellusJobs uses embedding-based semantic matching to understand what you've done and compare it to what employers actually want.";
export const tags = ["TellusJobs", "AI", "Technical"];

export const coverImage = "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80";

export const content = `## How AI Reads Your CV and Matches You to Jobs: The TellusJobs Approach

The way most job platforms match candidates to roles is essentially a sophisticated version of Ctrl+F. They look for keyword overlap between your CV and a job description, count the matches, and rank accordingly. If you wrote "managed cross-functional teams to deliver strategic initiatives" and the job description says "team leadership," the keyword matcher gives you zero credit. If you wrote "excellent verbal and written communication skills"  -  because every CV template suggests you should  -  you match every job description on the planet equally, which is the same as matching none of them.

Keyword matching doesn't just produce poor results. It actively penalises candidates who describe their work accurately in natural professional language. It rewards candidates who have learned to stuff their CV with recruiter-facing jargon regardless of whether it reflects their actual experience. And it completely ignores the context that makes a skill meaningful: ten years of financial modelling in investment banking is not the same as two years of financial modelling in a microfinance NGO, even if both CVs mention the same keyword.

TellusJobs takes a fundamentally different approach, using semantic embeddings to match candidates to roles based on meaning rather than exact terminology. This article explains how it works, why it matters specifically for the Kenyan market, and what actually happens to your CV from the moment you upload it.

![AI and machine learning visualization](https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80)

## Why Keyword Matching Is Broken: A Deeper Look

Before explaining what TellusJobs does differently, it's worth understanding exactly how keyword matching fails.

**The synonym problem** is the most obvious failure mode. "Managed" and "led" and "supervised" and "oversaw" are semantically identical in most professional contexts but keyword-distinct. A system matching on keywords treats these as different concepts. In a market like Kenya where professional writing conventions vary considerably  -  between candidates trained in American corporate styles, British NGO styles, East African academic styles, and local professional cultures  -  the synonym variation is enormous. Two candidates with identical experience described in different vocabulary will receive completely different match scores.

**The context collapse problem** is subtler and more damaging. "Excel" appears in the CV of a junior administrator who uses it for basic data entry and in the CV of a senior financial analyst who builds complex valuation models. Keyword matching treats these as equivalent. The job posting that requires "advanced Excel skills" for a financial modelling role will match both CVs identically.

**The false positive problem** is where keyword matching actively misleads. A CV that mentions "sales" in the context of "I oversee the sales team's training programme" will match sales executive postings. A CV that mentions "research" in the context of completing a university dissertation will match research analyst postings. The word is there; the experience is not.

**The penalty for clarity problem** is perhaps the most counterproductive. A candidate who writes a clear, specific, natural description of their work  -  the kind that a good career coach would praise  -  will often score lower on keyword matching than a candidate who has padded their CV with every relevant buzzword regardless of specificity. The system rewards gaming over authenticity.

## The Semantic Embedding Approach: An Accessible Explanation

Semantic embeddings are the mathematical foundation of modern natural language understanding. The core idea is that text can be represented as a point in a high-dimensional space  -  a vector  -  where the position encodes meaning. Text with similar meaning ends up at points that are geometrically close together, regardless of whether the exact words match.

Think of it this way. Imagine a two-dimensional map where words and phrases are plotted as points. "Managed a team" and "led a group of staff" would appear close together on this map because they mean similar things and appear in similar contexts across millions of professional documents. "Excel financial modelling" and "spreadsheet-based valuation analysis" would also be near each other. Meanwhile, "Excel financial modelling" and "Excel in customer service environments" would be further apart, because despite sharing the word "Excel," they appear in completely different contexts.

The actual embeddings used in TellusJobs operate in hundreds or thousands of dimensions rather than two, which allows for far more nuanced representation of meaning. A large language model trained on vast amounts of text has learned to map text to positions in this high-dimensional space in ways that capture subtle semantic relationships. Two passages that mean the same thing, described in different words, end up close together. Two passages that happen to share keywords but describe different things end up further apart.

Matching your CV to a job description then becomes a geometric operation: compute the vector for your CV, compute the vector for the job description, and measure how close they are. This is called cosine similarity, and it captures semantic alignment rather than surface lexical overlap.

![Professional reviewing documents on laptop](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80)

## What Happens to Your CV: Step by Step

**Upload and parsing:** When you upload your CV  -  in PDF or Word format  -  the first step is extracting the text while preserving structural information. This is harder than it sounds. A well-formatted CV in a two-column layout needs to have its columns read in the right order, not left-to-right across the page in a way that scrambles the content. Tables need to be linearised. Headers need to be identified as section markers, not treated as ordinary text. The parser handles the most common CV structures and flags parsing ambiguities for user review.

**Section extraction:** Once the text is extracted, the system identifies structural sections: contact information, professional summary, work experience entries (each with employer, title, dates, and description), education, skills, certifications, and any additional sections. Each work experience entry is treated as a distinct unit with its own embedding  -  this allows the matching to identify which parts of your career are most relevant to a specific role, rather than treating your whole career history as undifferentiated text.

**Accomplishment identification:** Within work experience entries, the system distinguishes between responsibility statements ("managed the accounts payable function") and accomplishment statements ("reduced invoice processing time by 40% through process automation"). Accomplishment statements receive additional weight in matching because they provide concrete evidence that corresponds to what employers actually screen for.

**Embedding generation:** Each extracted component  -  professional summary, individual work experience entries, skills list, and the document as a whole  -  is passed through the embedding model to generate its vector representation. These vectors are stored and reused across all job matches, so the computational cost of embedding your CV is a one-time operation.

**Vector storage:** Your CV embeddings are stored securely and associated with your profile. When new job postings are ingested, they undergo the same embedding process, and matching becomes a query across the stored vectors.

## How Job Descriptions Undergo the Same Process

Every job description ingested from TellusJobs' source portals undergoes parallel processing. The job description text is parsed to extract the requirements section, responsibilities section, nice-to-have qualifications, and any explicit seniority or experience requirements. Each section is embedded separately, allowing the matching to weight requirements differently.

The requirements section receives the highest weight  -  these are the non-negotiable criteria. The responsibilities section provides context about what the role actually involves on a day-to-day basis. The nice-to-have qualifications contribute to a differentiation score for candidates who already meet the core requirements.

## Relevancy Scoring Dimensions

The final match score is not a single number from a single comparison. It's a weighted combination of several dimensions.

**Core skills alignment** measures how well your demonstrated skills and experience match the requirements the employer has explicitly stated as necessary. This is the most heavily weighted component.

**Seniority alignment** assesses whether the level of responsibility, scope, and strategic/tactical balance in your experience matches what the role requires. A role asking for someone to lead a department of 50 will score differently for a candidate who has managed one person versus a candidate who has managed teams of 20.

**Sector experience** captures how much of your background is directly relevant to the industry the role operates in. Sector knowledge is genuinely transferable at the conceptual level, but certain roles require domain-specific knowledge that general experience doesn't provide.

**Location preference** is a practical filter. The system respects explicitly stated location preferences and scores accordingly, while flagging roles with remote flexibility for candidates who have indicated openness to remote work.

**Requirements coverage** measures the percentage of explicitly stated requirements that your profile addresses. A role with eight stated requirements where your profile clearly addresses six scores differently from one where it addresses three.

## Why Kenyan Job Matching Needs Different Calibration

Global matching models are trained primarily on English-language job market data from North America and Europe. Applying them directly to the Kenyan market produces systematic errors.

**Title non-standardisation** is the most significant. "Business Development Executive" in Kenya can mean anything from a door-to-door sales representative to a corporate partnerships manager. The same title carries completely different seniority and responsibility implications depending on the employer and sector. A matching model calibrated on North American data where "Business Development Executive" has a relatively consistent meaning will misinterpret this signal.

**Sector-specific vocabulary** in the development sector is a particularly significant calibration challenge. The NGO sector has its own professional language: M&E frameworks, logframes, MEAL systems, theory of change, beneficiary reporting, donor compliance. These terms appear rarely in private-sector-trained models and are heavily underweighted as a result. TellusJobs has calibrated its embeddings specifically for this vocabulary.

**The local regulatory and market context** adds another calibration dimension. References to specific Kenyan regulatory frameworks, local market conditions, and Kenya-specific professional bodies and certifications need to be understood as meaningful signals, not noise.

![Person working at desk with coffee](https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80)

## Handling Career Changers: Transferable Skill Extraction

Career changers present a particular challenge for any matching system. By definition, their experience doesn't align neatly with the roles they're targeting. Keyword matching fails them almost completely  -  they don't have the keywords from the destination sector.

The embedding approach handles career changers better because it can identify semantic similarity between experience descriptions from different sectors. A project manager in construction whose experience involves coordinating multiple contractors, managing budgets, monitoring schedules, and reporting to senior stakeholders has experience that is genuinely similar  -  at the meaning level  -  to a programme officer role in an NGO. The keywords are different; the underlying competencies are aligned.

TellusJobs' career changer mode explicitly extracts transferable competencies  -  leadership, analytical reasoning, stakeholder management, project delivery, budget management, communication  -  as separate embedding dimensions that can be matched across sector boundaries. The result is that the career changer sees roles where their transferable skills are genuinely relevant, rather than only roles that use the exact vocabulary of their current sector.

## What a 90% Match Score Actually Means

A 90% match score from TellusJobs means that across the weighted combination of skills alignment, seniority, sector experience, location, and requirements coverage, your profile and the job description are highly aligned semantically. It does not mean you will get the job  -  match scoring is about fit, not about interview performance, network connections, employer preferences for specific educational backgrounds, or the dozens of other factors that influence hiring outcomes.

What the score does predict, based on benchmarking, is conversion from application to interview. High-match applications show meaningfully better application-to-interview conversion than low-match applications, even when the quality of the application materials is held constant. Applying to roles where you are genuinely well-matched is one of the highest-leverage actions a job seeker can take. TellusJobs' matching is designed to help you identify those roles faster and more reliably than manual review can.

## Why Keyword Matching Fails the Kenyan Job Seeker

Traditional job matching - the technology underlying most Kenyan job portals - compares words in a CV against words in a job description. This approach has a structural flaw: it privileges vocabulary consistency over substance. A candidate who has done substantial commercial finance work but describes it using business-oriented language rather than technical accounting vocabulary will score poorly against a role that uses specific accounting jargon in its requirements.

In Kenya, this problem is amplified by several market-specific factors. Kenya's non-standardised job title landscape means that the same role carries different titles at different organisations - the Finance Manager at one company is called the Head of Finance at another and the Finance Controller at a third. Keyword matching treats these as different roles. Semantic matching recognises they are the same function.

The development and NGO sector is particularly affected. International development organisations use a specific vocabulary - log frames, theory of change, M&E frameworks, indicators, beneficiaries - that differs from private sector vocabulary for essentially similar analytical and management work. A candidate moving from development to private sector (or vice versa) with strong relevant skills often scores poorly on keyword matching against roles in their target sector despite being highly qualified.

TellusJobs' semantic embedding approach converts both the CV and the job description into dense numerical representations of their meaning, then measures how close those representations are to each other. This process captures semantic similarity - two texts that mean the same thing score highly regardless of whether they use the same words.

![TellusJobs AI matching system showing semantic similarity score between CV and job description](https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80)

## What the Matching Score Actually Means

TellusJobs generates a match score from 0 to 100 for each candidate-role pairing. Understanding what drives this score - and what it does not capture - helps users interpret results correctly.

The score is composed of four weighted dimensions: skills coverage (what percentage of the explicitly mentioned skills in the job description appear in the candidate's documented experience), seniority alignment (whether the experience level implied by the CV matches the level implied by the job description), sector experience (how much of the candidate's documented sector experience overlaps with the sector of the role), and requirement coverage (how many of the stated requirements in the job description are addressed somewhere in the CV).

What the score does not capture: personal fit beyond what the documents express, cultural alignment, soft skills not explicitly documented in the CV, professional reputation, or network relationships. A 90% match score does not mean the candidate will get the job - it means the documented profile matches the documented requirements well. The human judgment layers in the hiring process will assess the dimensions the score does not reach.

The practical guidance from TellusJobs' application success data: prioritise applications to roles scoring 75 or above, where the documented match is strong enough that the application is clearly justified. Roles scoring 50 to 75 are worth applying to if you have specific non-documented advantages (relevant network, specific project experience not reflected in the CV). Roles below 50 typically reflect a genuine mismatch between current experience and the role requirements.

## The Career Changer Challenge and How Embeddings Help

Career changers - candidates moving between sectors or significantly shifting function - are the group for which traditional keyword matching fails most completely. A commercial banker moving to a fintech role, a development sector M&E specialist moving to a private sector data analyst role, a teacher moving to a learning and development corporate role: these transitions involve genuine transferable skills that keyword matching cannot detect.

Semantic embeddings help career changers because the model understands conceptual relationships between skills even when the vocabulary is different. Data analysis in a development organisation context (survey analysis, indicator tracking, report production) and data analysis in a private sector context (business intelligence, KPI tracking, management reporting) use different vocabulary but share significant conceptual overlap. The embedding model captures this overlap; keyword matching misses it.

For career changers using TellusJobs, the system supplements the raw match score with a transferable skills overlay - a separate analysis that identifies specific experience elements from the CV that map to requirements in the role, even where direct vocabulary overlap is low. This overlay gives career changers a clearer picture of which of their experiences are relevant to a target role and which are not, helping them construct their cover letter around genuine transferability rather than generic claims.

![Career change matching tool at TellusJobs showing transferable skills mapping between sectors](https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80)

## Improving Your Match Score Through CV Optimisation

The match score is based on what the CV document says. Improving the CV improves the score. But the goal is not to game the matching system - it is to ensure the CV accurately represents genuine experience and skills in language that the matching system can recognise.

Common CV optimisation steps that improve match quality on TellusJobs:

Adding quantified accomplishments alongside descriptions of responsibility. "Managed a team of five" generates weaker embedding signals than "Managed a team of five finance officers and delivered a 15% reduction in month-end reporting time over 12 months." The second version contains richer information that maps more strongly to similar content in job descriptions.

Using the full names of tools, systems, and frameworks alongside abbreviations. "SAP FI/CO (SAP Financial Accounting and Controlling)" ensures the system captures both the abbreviated and full-form references that might appear in job descriptions.

Ensuring the most recent and relevant experience is described in the most detail. Embedding models weight experience descriptions by the depth of information provided. A current role described in five bullet points influences the match less than one described in fifteen.

Addressing career breaks or unusual patterns with brief explanation sentences. Unexplained gaps or lateral moves confuse the seniority alignment scoring. A sentence explaining a career break or a deliberate lateral move for skill development improves alignment accuracy.

`;