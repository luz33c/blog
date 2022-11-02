import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "dracula",
      wrap: true
    }
  },
  site: "https://www.astro-theme-cactus.netlify.app",
  integrations: [mdx({}), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), image(), sitemap()],
  output: "server",
  adapter: netlify()
});