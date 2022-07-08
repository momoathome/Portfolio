import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
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
  /* '@nuxtjs/axios',
  ['nuxt-mail', {
    message: {
      to: 'mknoll1901@gmail.com',
    },
    smtp: {
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: 'username',
        pass: 'password'
      },
    },
  }], */
],

plugins: [

]
})
