export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Adeline Lefebvre",
    jobTitle: "Freelance Fullstack Developer",
    description:
      "Freelance fullstack developer building Next.js apps with AI (Claude, Mistral), custom websites (WordPress, Craft CMS), with long-term maintenance.",
    url: "https://adelinelefebvre.com",
    image: "https://adelinelefebvre.com/profile-photo.jpg",
    sameAs: [
      "https://github.com/Adeline-Lefebvre",
      "https://www.linkedin.com/in/adeline-lefebvre-600b46aa/",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "AI Integration",
      "Claude API",
      "WordPress",
      "Craft CMS",
      "Headless CMS",
      "Fullstack Development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
