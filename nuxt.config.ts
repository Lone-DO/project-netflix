import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    /** https://nuxt.com/docs/4.x/getting-started/seo-meta */
    head: {
      title: 'Project Netflix (Losovoj)',
      htmlAttrs: {
        lang: 'en',
      },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  colorMode: {
    /** Modify `data-theme` attribute on root html element */
    dataValue: 'theme',
  },
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  eslint: {
    config: {
      standalone: false, // <---
    },
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxtjs/color-mode',
  ],
  typescript: {
    typeCheck: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
