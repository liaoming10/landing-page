// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/content'],
  app:{
    head:{
      link:[
        {
          rel:'stylesheet',
          href:'/github-markdown.css'
        }
      ]
    }
  }
})