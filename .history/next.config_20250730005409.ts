/** @type {import('next').NextConfig} */
const nextConfig = {};

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  async rewrites() {
    return [
      {
        source: "/fr/galerie",
        destination: "/fr/gallery",
        locale: false,
      },
      {
        source: "/fr/a-propos",
        destination: "/fr/about",
        locale: false,
      },
      {
        source: "/fr/a-propos",
        destination: "/fr/privacy",
        locale: false,
      },
    ];
  },
};
