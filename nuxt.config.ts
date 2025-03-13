import { themeSettings } from "./theme";


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-02-08",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  css: ["~/assets/css/main.css"],
  build: {
    output: {
      entrFileNames: "assets/js/[name].[hash].js",
    },
  },
});
