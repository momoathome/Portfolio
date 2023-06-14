export default defineNuxtConfig({
  app: {
    head: {
      title: 'Maurice Knoll Portfolio',
      titleTemplate: '%s - Maurice Knoll Portfolio',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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
  css: ['~/assets/normalize.css', '~/assets/main.css'],
  vite: {
    plugins: [
      // https://github.com/antfu/unocss
      // see unocss.config.ts for config
      // see nuxt.config.ts "css" for css loading
      // Unocss({ 'configFile: unocss.config.ts' }),
    ],
  },
  modules: ['@unocss/nuxt'],
})
