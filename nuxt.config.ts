// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],

  app: {
    head: {
      titleTemplate: '%s Nuxt Dojo',
      meta: [
        {
          name: 'description',
          content: 'Everything about Nuxt 3',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
      ],
    },
  },

  runtimeConfig: {
    storeApi: process.env.STORE_API,
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
