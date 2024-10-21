// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  runtimeConfig: {
    // Public keys that are exposed to the client
    public: {
      apiBase: 'https://oyabu.g.kuroco.app'
    }
  },
})
