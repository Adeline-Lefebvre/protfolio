import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Adeline Lefebvre - Fullstack Developer",
    short_name: "A. Lefebvre",
    description:
      "Fullstack Software Engineer specializing in Next.js, Flutter, and Node.js",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/icon-light.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
