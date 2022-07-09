import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    preset: 'Netlify'
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  vite: {
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/assets/main.scss";',
            },
        },
    },
},
modules: [
  
],

plugins: [

]
})
