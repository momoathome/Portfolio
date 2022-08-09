import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Maurice Knoll Portfolio',
      titleTemplate: '%s - Maurice Knoll Portfolio',
      meta: [
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {
          hid: 'description',
          name: 'description',
          content: 'Maurice Knoll Portfolio',
        },
      ],
    },
  },
  nitro: {
    preset: 'Netlify',
  },
  css: [],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/main.scss";',
        },
      },
    },
  },
  modules: ['@unocss/nuxt'],

  plugins: [],

  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`
  },
})
