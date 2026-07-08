#!/usr/bin/env python3
"""Add coverImage fields to the 33 hardcoded blog posts in data.ts that are missing them."""

import re

DATA_FILE = "artifacts/portfolio/src/lib/data.ts"

# Map: slug → Unsplash coverImage URL
COVER_IMAGES = {
    # MyJoyfulDay
    "myjoyfullday-whatsapp-event-website": "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1200&q=80",
    "myjoyfullday-no-app-needed":           "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
    "myjoyfullday-50000-events":            "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
    "myjoyfullday-zero-ui-design":          "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=1200&q=80",
    "myjoyfullday-vendor-marketplace":      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80",
    "myjoyfullday-rsvp-guest-management":   "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80",
    "myjoyfullday-natural-language-events": "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80",
    "myjoyfullday-whatsapp-cloud-api":      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80",
    "myjoyfullday-event-tech-kenya":        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80",
    "myjoyfullday-jitabi-conversational-ux":"https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=1200&q=80",
    # TellusJobs
    "tellusjobs-kenyan-job-market":         "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80",
    "tellusjobs-ai-cv-matching":            "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&q=80",
    "tellusjobs-scraping-portals":          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
    "tellusjobs-cover-letters-ai":          "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80",
    "tellusjobs-beyond-linkedin":           "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=1200&q=80",
    "tellusjobs-application-workflow":      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80",
    "tellusjobs-job-title-problem":         "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=1200&q=80",
    "tellusjobs-vs-job-boards":             "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
    "tellusjobs-hidden-cost":               "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&q=80",
    "tellusjobs-what-employers-want":       "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80",
    # Tellus
    "tellus-why-we-built-it":              "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&q=80",
    "tellus-context-aware-ai":             "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80",
    "tellus-latency-problem":              "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    "tellus-proactive-vs-noisy":           "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80",
    "tellus-workflow-integrations":        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&q=80",
    "tellus-human-autonomy":               "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80",
    "tellus-communication-overhead":       "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
    "tellus-thread-coherence":             "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80",
    "tellus-async-future":                 "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
    "tellus-meetings-cut-in-half":         "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80",
    # Standalone
    "whatsapp-as-infrastructure":          "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=1200&q=80",
    "automation-before-hiring":            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80",
    "building-for-kenya":                  "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1200&q=80",
}

with open(DATA_FILE, "r") as f:
    src = f.read()

added = 0
for slug, url in COVER_IMAGES.items():
    # Match the block: slug line ... tags line, NOT already followed by coverImage
    pattern = (
        r'(slug:\s*"' + re.escape(slug) + r'"'
        r'[\s\S]*?'
        r'(tags:\s*\[[^\]]+\]),)'
        r'(?!\s*\n\s*coverImage)'
    )
    replacement = r'\1\n    coverImage: "' + url + r'",'
    new_src, n = re.subn(pattern, replacement, src)
    if n:
        src = new_src
        added += 1
        print(f"  ✓ {slug}")
    else:
        print(f"  ✗ SKIPPED (already has coverImage or not found): {slug}")

with open(DATA_FILE, "w") as f:
    f.write(src)

print(f"\nDone. Added coverImage to {added}/{len(COVER_IMAGES)} posts.")
