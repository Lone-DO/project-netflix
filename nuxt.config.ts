import tailwindcss from '@tailwindcss/vite';

import './app/lib/env';

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
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' },
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
    '@pinia/nuxt',
    '@vee-validate/nuxt',
  ],
  typescript: {
    /**
     * MUST DISABLE typecheck, BLOCKS HMR FLOW
     * https://github.com/nuxt/nuxt/issues/32564#issuecomment-3313960055
     */
    typeCheck: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
