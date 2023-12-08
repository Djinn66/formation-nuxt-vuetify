import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // @ts-ignore
  srcDir: 'src/',
  runtimeConfig: {
    public: {
      API_BASE: process.env.API_BASE
    }
  },
  ssr: false,
  typescript: { typeCheck: true , strict: true },
  css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.css'],
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@pinia/nuxt',
    async (_options: {}, nuxt: Record<string, any>) => {
      // @ts-ignore
      nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
          vuetify()
      ))
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
