import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Adeline Lefebvre - Freelance Fullstack Developer",
    short_name: "A. Lefebvre",
    description:
      "Freelance fullstack developer: Next.js apps with AI, custom WordPress & Craft CMS sites, and long-term maintenance.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf7f0",
    theme_color: "#d97757",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/icon-light.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
