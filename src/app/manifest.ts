import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "A1 Car Wash — Quality Car Cleaning & Detailing",
    short_name: "A1 Car Wash",
    description:
      "A1 Car Wash provides premium hydraulic jack lift car washes, touchless snow foam, RO soft-water detailing, Teflon coatings, and bike washes across Hyderabad.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#dc2626",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
