// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ["@vite-pwa/nuxt"], // https://vite-pwa-org.netlify.app/frameworks/nuxt
  pwa: {
    mode: 'development',
    registerType: 'autoUpdate',
    /* your pwa options */
    manifest: {
      name: "My Nuxt App",
      short_name: "My Nuxt App",
      description: "My Nuxt App description",
      lang: "en",
    },
    workbox: {
      //navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,json}'],
    }
  },
  experimental: {
    payloadExtraction: false
  }
  /*generate: {
    routes: ["/"],
    // TODO https://vite-pwa-org.netlify.app/frameworks/nuxt#prompt-for-update-and-offline-ready
  },*/
});
