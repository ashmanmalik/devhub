import dotenv from 'dotenv'
dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.local' })

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  publicRuntimeConfig: {
    EDIT_API_URL: process.env.EDIT_API_URL,
    EDIT_GITHUB_URL: process.env.EDIT_GITHUB_URL,
    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
    ALGOLIA_API_PUBLIC_KEY: process.env.ALGOLIA_API_PUBLIC_KEY,
  },
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  target: 'static',
  head: {
    title: 'dev-portal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', property: '', content: '' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/OG-image.png',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://developers.chargetrip.com',
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Roboto+Mono:wght@400;500&display=swap',
      },
    ],
    script: [
      {
        src: 'https://cdn.usefathom.com/script.js',
        defer: true,
        'data-site': process.env.FATHOM_ID,
      },
      {
        src: 'https://static.zdassets.com/ekr/snippet.js?key=559acab4-5df1-4b09-a177-99fb73e9c04a',
        id: 'ze-snippet',
        defer: true,
      },
    ],
  },
  router: {
    base: '/',
    extendRoutes(routes) {
      routes.unshift({
        path: '/',
        name: 'home',
        component: 'pages/_slug.vue',
      })
      routes.push({
        path: '*',
        name: `catch-all`,
        component: 'pages/_slug.vue',
      })
    },
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/styles/index.scss',
    '@chargetrip/internal-vue-components/dist/components.css',
    '@chargetrip/internal-vue-components/src/assets/styles/icons.scss',
    '@chargetrip/internal-vue-components/src/assets/styles/defaults.scss',
  ],

  content: {
    editor: '~/components/Editor.vue',
    markdown: {
      prism: {
        theme: false,
      },
    },
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/globals.ts',
    '~/plugins/axios.ts',
    '~/utilities/directives.ts',
    '~/utilities/filters.ts',
  ],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxt/image',
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/pwa',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios',
    '@nuxt/content',
    [
      '@chargetrip/internal-vue-components/src/modules/file-upload',
      {
        CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
        CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
        ALLOWED_FORMATS: process.env.ALLOWED_FORMATS,
        CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
        CLOUDINARY_FOLDER: process.env.CLOUDINARY_FOLDER,
      },
    ],
  ],
  image: {
    cloudinary: {
      baseURL: `${process.env.CLOUDINARY_URL}/image/upload/`,
    },
  },
  tailwindcss: {
    jit: true,
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-private-methods', { loose: true }],
      ],
    },
    extend(config) {
      config.node = {
        fs: 'empty',
      }
    },
  },
}
