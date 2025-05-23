import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  images: {
    remotePatterns:
      [
        {
          protocol: "https",
          hostname: "i.abcnewsfe.com"
        }
      ]
  }
};

export default nextConfig;
