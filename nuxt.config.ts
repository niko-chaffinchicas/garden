// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    baseUrl: '/garden/'
  },

  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxt/image'
  ]
})