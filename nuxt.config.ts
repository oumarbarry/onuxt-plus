export default defineNuxtConfig({
  typescript: { shim: false, strict: true },
  experimental: { reactivityTransform: true },

  modules: ['@vueuse/nuxt', '@unocss/nuxt', '@pinia/nuxt', 'nuxt-icon'],
  unocss: { preflight: true },
})
