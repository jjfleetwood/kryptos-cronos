import type { MetadataRoute } from "next";

// Never index this deployment under any circumstances.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", disallow: "/" } };
}
