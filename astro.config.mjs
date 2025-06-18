// @ts-check
import { defineConfig, envField } from "astro/config";
import { loadEnv } from "vite";
// import purgecss from "astro-purgecss";
import netlify from "@astrojs/netlify";
const { API_SECRET_TOKEN } = loadEnv(
  process.env.NODE_ENV || "",
  process.cwd(),
  "",
);

// https://astro.build/config
export default defineConfig({
  // integrations: [purgecss()],
  experimental: {
    // svg: true,
  },
  site: "https://tnhs.xyz",
  base: "/",
  output: "server",
  env: {
    schema: {
      API_SECRET_TOKEN: envField.string({
        context: "server",
        access: "secret",
        default: API_SECRET_TOKEN,
      }),
    },
    validateSecrets: true,
  },
  adapter: netlify(),
});
