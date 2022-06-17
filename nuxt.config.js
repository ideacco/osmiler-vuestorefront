// eslint-disable-next-line nuxt/no-cjs-in-config
require('isomorphic-fetch')
import webpack from 'webpack'
const platformENV =
  process.env.VUE_APP_TITLE !== 'production' ? 'http' : 'https'

const config = {
  env: {
    VUE_APP_TITLE: process.env.VUE_APP_TITLE,
  },
  server: {
    port: 8888,
    host: '0.0.0.0',
  },
  publicRuntimeConfig: {
    appKey: 'vsf2spcon',
    appVersion: Date.now(),
    middlewareUrl: `${platformENV}://${process.env.BASE_URL}/api/`,
  },
  privateRuntimeConfig: {
    storeURL: process.env.SHOPIFY_DOMAIN,
    storeToken: process.env.SHOPIFY_STOREFRONT_TOKEN,
  },
  serverMiddleware: [
    // { path: '/custom', handler: '~/server-middleware/custom-features.js' }, // 去掉了原版使用的express的中间件
    {
      path: '/custom',
      handler: '~/server-middleware/custom-features-app.js',
    },
  ],
  head: {
    title: 'Osmiler',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        name: 'theme-color',
        content: '#5ece7b',
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', href: '/icon.png' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'crossorigin',
      },
      {
        rel: 'Overpass',
        href: 'https://fonts.googleapis.com/css2?family=Overpass:wght@200;300;400;500;600;700;800;900&display=swap',
        as: 'style',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Overpass:wght@200;300;400;500;600;700;800;900&display=swap',
        media: 'print',
        onload: "this.media='all'",
      },
    ],
  },
  loading: {
    color: '#fff',
  },
  router: {
    // 在每页渲染前运行 middleware/user-agent.js 中间件的逻辑
    middleware: 'user-agent',
  },
  plugins: [
    '@/plugins/scrollToTop.client.js',
    // '@/plugins/element-ui',
    {
      src: '@/plugins/UIkit',
      ssr: false,
    }
  ],
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // to core
    './modules/cms/build',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/pwa',
    '@nuxtjs/device',
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
    [
      '@vue-storefront/nuxt',
      {
        useRawSource: {
          dev: ['@vue-storefront/shopify', '@vue-storefront/core'],
          prod: ['@vue-storefront/shopify', '@vue-storefront/core'],
        },
        performance: {
          purgeCSS: {
            enabled: false,
            paths: ['**/*.vue'],
          },
        },
      },
    ],
    ['@vue-storefront/nuxt-theme'],
    [
      '@vue-storefront/shopify/nuxt',
      {
        i18n: {
          useNuxtI18nConfig: true,
        },
      },
    ],
  ],
  css: [
    {
      src: '@/style/index.scss',
      lang: 'scss',
    },
  ],
  modules: [
    '@nuxtjs/i18n',
    'cookie-universal-nuxt',
    'vue-scrollto/nuxt',
    '@vue-storefront/middleware/nuxt',
    '@nuxtjs/sitemap',
    './modules/cms/runtime',
    '@nuxt/image',
    '@nuxtjs/axios',
  ],
  axios: {
    proxy: true,
    prefix: '/app',
  },
  proxy: {
    '/app': {
      target: process.env.VUE_APP_API_BASE_URL,
      changeOrigin: true,
      pathRewrite: {
        '^/app': '',
      },
    },
  },
  device: {
    refreshOnResize: true,
  },
  i18n: {
    currency: 'USD',
    country: 'US',
    countries: [
      {
        name: 'US',
        label: 'United States',
      },
      {
        name: 'DE',
        label: 'Germany',
      },
    ],
    currencies: [
      {
        name: 'EUR',
        label: 'Euro',
      },
      {
        name: 'USD',
        label: 'Dollar',
      },
    ],
    locales: [
      {
        code: 'en',
        alias: 'us',
        label: 'English',
        file: 'en.js',
        iso: 'en',
      },
      {
        code: 'de',
        alias: 'de',
        label: 'German',
        file: 'de.js',
        iso: 'de',
      },
    ],
    defaultLocale: 'en',
    lazy: true,
    seo: true,
    langDir: 'lang/',
    vueI18n: {
      fallbackLocale: 'en',
      numberFormats: {
        en: {
          currency: {
            style: 'currency',
            currency: 'USD',
            currencyDisplay: 'symbol',
          },
          decimal: {
            style: 'decimal',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          },
          percent: {
            style: 'percent',
            useGrouping: false,
          },
        },
        de: {
          currency: {
            style: 'currency',
            currency: 'EUR',
            currencyDisplay: 'symbol',
          },
          decimal: {
            style: 'decimal',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          },
          percent: {
            style: 'percent',
            useGrouping: false,
          },
        },
      },
    },
    detectBrowserLanguage: {
      cookieKey: 'vsf-locale',
    },
  },
  styleResources: {
    scss: [
      require.resolve('@storefront-ui/shared/styles/_helpers.scss', {
        paths: [process.cwd()],
      }),
      // './style/index.scss',
    ],
  },
  build: {
    // transpile: ['vee-validate/dist/rules', 'storefront-ui'],
    transpile: ['vee-validate/dist/rules'],
    plugins: [
      new webpack.DefinePlugin({
        'process.VERSION': JSON.stringify({
          // eslint-disable-next-line global-require
          version: require('./package.json').version,
          lastCommit: process.env.LAST_COMMIT || '',
        }),
      }),
    ],
    extend(config) {
      config.resolve.extensions.push('.mjs')

      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      })
    },
    // extractCSS: {
    //   allChunks: true,
    //   ignoreOrder: true,
    // },
  },
  pwa: {
    manifest: {
      name: 'Osmiler',
      lang: 'en',
      shortName: 'SPVSF2',
      startUrl: '/',
      display: 'standalone',
      backgroundColor: '#5d47ee',
      themeColor: '#5d47ee',
      description: 'let your smile light up the world',
      icons: [
        {
          src: '/icons/android-icon-48x48.png',
          sizes: '48x48',
          type: 'image/png',
        },
        {
          src: '/icons/android-icon-72x72.png',
          sizes: '72x72',
          type: 'image/png',
        },
        {
          src: '/icons/android-icon-96x96.png',
          sizes: '96x96',
          type: 'image/png',
        },
        {
          src: '/icons/android-icon-144x144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: '/icons/android-icon-168x168.png',
          sizes: '168x168',
          type: 'image/png',
        },
        {
          src: '/icons/android-icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icons/android-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    meta: {
      name: 'Osmiler',
      author: 'Osmiler Team',
      backgroundColor: '#5d47ee',
      description: 'let your smile light up the world',
      themeColor: '#5d47ee',
      ogHost: 'shopify-pwa.aureatelabs.com',
    },
    icon: {
      source: '/icon.png',
      fileName: 'icon.png',
    },
    build: {
      transpile: [/^@storefront-ui/, /^UIkit/],
    },
    workbox: {
      offlineStrategy: 'StaleWhileRevalidate',
      runtimeCaching: [
        {
          // Match any request that ends with .png, .jpg, .jpeg or .svg.
          urlPattern: /\.(?:png|jpg|jpeg|svg|woff|woff2)$/,
          // Apply a cache-first strategy.
          handler: 'CacheFirst',
          options: {
            // Use a custom cache name.
            cacheName: 'SPVSF2Assets',

            // Only cache 100 images.
            expiration: {
              maxEntries: 100,
            },
          },
        },
        {
          urlPattern: /^\/(?:(c)?(\/.*)?)$/,
          handler: 'StaleWhileRevalidate',
          strategyOptions: {
            cacheName: 'SPVSF2cached',
            cacheExpiration: {
              maxEntries: 200,
              maxAgeSeconds: 3600,
            },
          },
        },
      ],
    },
  },
}

export default config
