import { Helmet } from "react-helmet-async";

const SITE_URL = "https://alvineotieno.com";
const SITE_NAME = "Alvine Otieno";
const DEFAULT_DESCRIPTION =
  "Alvine Otieno  -  WhatsApp AI bot developer, workflow automation specialist, and web developer based in Kisumu, Kenya. Building products that remove friction and help businesses scale.";
const DEFAULT_KEYWORDS =
  "WhatsApp AI bot developer Kenya, workflow automation Kenya, web developer Kisumu, AI chatbot developer, M-Pesa integration, business automation Kenya, WhatsApp chatbot, n8n automation, AI developer Kenya, Kisumu web developer";
const OG_IMAGE = `${SITE_URL}/opengraph.jpg`;

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  type?: "website" | "article";
  article?: {
    publishedTime: string;
    tags: string[];
    author?: string;
  };
  noindex?: boolean;
  breadcrumb?: { label: string; href: string }[];
  service?: {
    name: string;
    description: string;
    url: string;
    provider?: string;
  };
  project?: {
    name: string;
    description: string;
    url: string;
    dateCreated?: string;
  };
}

export function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonical,
  ogImage,
  type = "website",
  article,
  noindex = false,
  breadcrumb,
  service,
  project,
}: SEOProps) {
  const fullTitle = title
    ? `${title} | Alvine Otieno`
    : "Alvine Otieno  -  WhatsApp AI Bots, Automation & Web Development · Kisumu, Kenya";
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;
  const resolvedOgImage = ogImage ? `${SITE_URL}${ogImage}` : OG_IMAGE;

  // Person structured data — appears on every page
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alvine Otieno",
    url: SITE_URL,
    image: `${SITE_URL}/opengraph.jpg`,
    jobTitle: "WhatsApp AI Bot Developer & Automation Specialist",
    description: DEFAULT_DESCRIPTION,
    telephone: "+254110486677",
    email: "otienoalvine925@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kisumu",
      addressRegion: "Kisumu County",
      addressCountry: "KE",
    },
    sameAs: [
      "https://x.com/AlvineOtieno14",
      "https://ke.linkedin.com/in/alvine-otieno-0351a2286",
      "https://www.facebook.com/profile.php?id=61591047677884",
    ],
    knowsAbout: [
      "WhatsApp AI Bot Development",
      "Workflow Automation",
      "Web Development",
      "n8n Automation",
      "M-Pesa Integration",
      "AI Integration",
      "E-commerce Kenya",
      "Business Operations",
    ],
  };

  // Article schema for blog posts
  const articleSchema =
    type === "article" && article
      ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: title,
          description,
          image: resolvedOgImage,
          author: {
            "@type": "Person",
            name: article.author || "Alvine Otieno",
            url: SITE_URL,
          },
          publisher: {
            "@type": "Person",
            name: "Alvine Otieno",
            url: SITE_URL,
          },
          datePublished: article.publishedTime,
          url: canonicalUrl,
          keywords: article.tags.join(", "),
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": canonicalUrl,
          },
        }
      : null;

  // Website schema for root
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    author: {
      "@type": "Person",
      name: "Alvine Otieno",
    },
  };

  // Breadcrumb schema
  const breadcrumbSchema = breadcrumb && breadcrumb.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumb.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.label,
          item: `${SITE_URL}${item.href}`,
        })),
      }
    : null;

  // Service schema for capability pages
  const serviceSchema = service
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: service.url,
        provider: {
          "@type": "Person",
          name: service.provider || "Alvine Otieno",
          url: SITE_URL,
        },
        areaServed: {
          "@type": "Country",
          name: "Kenya",
        },
        serviceType: service.name,
      }
    : null;

  // CreativeWork schema for project pages
  const projectSchema = project
    ? {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: project.name,
        description: project.description,
        url: project.url,
        author: {
          "@type": "Person",
          name: "Alvine Otieno",
          url: SITE_URL,
        },
        ...(project.dateCreated ? { dateCreated: project.dateCreated } : {}),
      }
    : null;

  return (
    <Helmet>
      {/* Core */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Alvine Otieno" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={resolvedOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_KE" />
      {type === "article" && article && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {type === "article" && article?.tags.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@AlvineOtieno14" />
      <meta name="twitter:creator" content="@AlvineOtieno14" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={resolvedOgImage} />

      {/* Geo / Local SEO */}
      <meta name="geo.region" content="KE-300" />
      <meta name="geo.placename" content="Kisumu, Kenya" />
      <meta name="geo.position" content="-0.0917;34.7680" />
      <meta name="ICBM" content="-0.0917, 34.7680" />

      {/* Structured data */}
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      {articleSchema && (
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
      {serviceSchema && (
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      )}
      {projectSchema && (
        <script type="application/ld+json">{JSON.stringify(projectSchema)}</script>
      )}
    </Helmet>
  );
}
