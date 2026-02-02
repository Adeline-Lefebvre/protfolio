export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Adeline Lefebvre",
    jobTitle: "Fullstack Software Engineer",
    description:
      "Fullstack Software Engineer specializing in Next.js, Flutter, and Node.js. Building impactful tech solutions for CSR and GreenTech projects.",
    url: "https://adelinelefebvre.com",
    image: "https://adelinelefebvre.com/profile-photo.jpg",
    sameAs: [
      "https://github.com/adelinelefebvre",
      "https://linkedin.com/in/adelinelefebvre",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Valencia",
      addressCountry: "ES",
    },
    knowsAbout: [
      "Next.js",
      "Flutter",
      "Node.js",
      "TypeScript",
      "React",
      "Vue.js",
      "Mobile Development",
      "Fullstack Development",
      "GreenTech",
      "Sustainable Technology",
    ],
    alumniOf: {
      "@type": "Organization",
      name: "Deloitte",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
