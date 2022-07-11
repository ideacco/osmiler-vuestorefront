// eslint-disable-next-line nuxt/no-cjs-in-config
require('isomorphic-fetch')
// console.log('当前服务状态:', process.env.NODE_ENV)
const CompressionPlugin = require('compression-webpack-plugin');
import webpack from 'webpack'
// import nuxtSeoMeta from "nuxt-seo-meta/src"
// const platformENV = process.env.NODE_ENV !== 'production' ? 'http' : 'https'
const Timestamp = new Date().getTime()
const config = {
  server: {
    port: process.env.APP_PORT || 8888,
    host: '0.0.0.0',
  },
  publicRuntimeConfig: {
    appKey: 'vsf2spcon',
    appVersion: Date.now(),
    // middlewareUrl: `${platformENV}://${process.env.BASE_URL}/api/`,
    middlewareUrl:
      process.env.NODE_ENV === 'production'
        ? `${process.env.BASE_URL}/api/`
        : `${process.env.DEV_URL}/api/`,
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
    '~/plugins/gtm',
    // '@/plugins/element-ui',
    {
      src: '@/plugins/UIkit',
      ssr: false,
    },
  ],
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/google-analytics',
    // to core
    './modules/cms/build',
    '@aceforth/nuxt-optimized-images',
    'nuxt-facebook-pixel-module',
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
  optimizedImages: {
    optimizeImages: true
  },
  // script:[
  //  {src:'~/plugins/pixel.js',type: 'text/javascript'}
  // ],
  // googleAnalytics: {
  //   id: 'UA-233114703-1'
  // },
  // debug: {
  //   enabled: false,
  //   sendHitTask: false
  // },
  // publicRuntimeConfig: {
  //   googleAnalytics: {
  //     id: 'UA-233114703-1'
  //   }
  // },
  // 'google-gtag': {
  //   id: 'UA-233114703-1',
  //   config: {
  //     anonymize_ip: true, // anonymize IP
  //     send_page_view: false, // might be necessary to avoid duplicated page track on page reload
  //   },
  //   debug: false, // enable to track in dev mode
  //   disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...).
  // },
  // googleAnalytics: {
  //   id: process.env.GOOGLE_ANALYTICS_ID, // Use as fallback if no runtime config is provided
  // },
  // publicRuntimeConfig: {
  //   googleAnalytics: {
  //     id: process.env.GOOGLE_ANALYTICS_ID,
  //   },
  // },
  css: [
    {
      src: '@/style/index.scss',
      lang: 'scss',
    },
  ],
  modules: [
    '@nuxtjs/i18n',
    'nuxt-facebook-pixel-module',
    '@nuxtjs/gtm',
    'nuxt-precompress',
    // '@nuxtjs/google-gtag',
    'cookie-universal-nuxt',
    'vue-scrollto/nuxt',
    '@vue-storefront/middleware/nuxt',
    '@nuxtjs/sitemap',
    './modules/cms/runtime',
    '@nuxt/image',
    '@nuxtjs/axios',
    'nuxt-seo-meta'
  ],
  seoMeta: {
    title: "SEO Meta - Title",
    description: "SEO Meta - Description",
    defaultImage: "defaultImage.png",
    defaultUrl: "https://longbridgeapp.com"
  },
  nuxtPrecompress: {
    enabled: true, // Enable in production
    report: false, // set true to turn one console messages during module init
    test: /\.(js|css|html|txt|xml|svg)$/, // files to compress on build
    // Serving options
    middleware: {
      // You can disable middleware if you serve static files using nginx...
      enabled: true,
      // Enable if you have .gz or .br files in /static/ folder
      enabledStatic: true,
      // Priority of content-encodings, first matched with request Accept-Encoding will me served
      encodingsPriority: ['br', 'gzip'],
    },
    gzip: {
      // should compress to gzip?
      enabled: true,
      // compression config
      // https://www.npmjs.com/package/compression-webpack-plugin
      filename: '[path].gz[query]', // middleware will look for this filename
      threshold: 10240,
      minRatio: 0.8,
      compressionOptions: { level: 9 },
    },
    brotli: {
      // should compress to brotli?
      enabled: true,
      // compression config
      // https://www.npmjs.com/package/compression-webpack-plugin
      filename: '[path].br[query]', // middleware will look for this filename
      compressionOptions: { level: 11 },
      threshold: 10240,
      minRatio: 0.8,
    },
  },
  gtm: {
    id: 'GTM-PB39ZGK', // Used as fallback if no runtime config is provided
    enabled: true,
    scriptDefer: true,
    pageTracking: true,
  },
  facebook: {
    /* module options */
    track: 'PageView',
    pixelId: '769420814057414',
    autoPageView: true,
    disabled: false,
    manualModef:false,
   Pixels:[
   {
    pixelId : '789343135804814',
    autoPageView: true,
    disabled: false,
    manualModef:false,
    track: 'PageView'
   }
   ]
  },
  publicRuntimeConfig: {
    gtm: {
      id:'GTM-PB39ZGK'
    }
  },
  // 'google-gtag': {
  //   id: 'UA-233114703-1',
  //   config: {
  //     anonymize_ip: true, // anonymize IP
  //     send_page_view: false, // might be necessary to avoid duplicated page track on page reload
  //     linker: {
  //       domains: ['domain.com', 'domain.org'],
  //     },
  //   },
  //   debug: true, // enable to track in dev mode
  //   disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...).
  //   additionalAccounts: [
  //     {
  //       id: 'GTM-PB39ZGK', // required if you are adding additional accounts
  //       config: {
  //         send_page_view: false, // optional configurations
  //       },
  //     },
  //   ],
  // },
  axios: {
    proxy: true,
    prefix: '/app',
  },
  proxy: {
    '/app': {
      target: `${process.env.BASE_URL}`,
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
      extractCSS:true,
      optimization: {
      splitChunks: {
      minSize: 10000,
      maxSize: 250000,
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.(css|scss)$/,
          chunks: 'all',
          enforce: true
        }
      }
    },
  },
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
      new CompressionPlugin({
      test: /\.js$|\.html$|\.css/, // 匹配文件名
      threshold: 10240,
      deleteOriginalAssets: false
      })
    ],
    extend(config, ctx) {
      config.output.filename = `js/[name].${Timestamp}.js` // 每次构建打包时给文件名加上时间戳，保证版本更新时与上版本文件名不一样
      config.output.chunkFilename = `js/[name].${Timestamp}.js`
      config.resolve.extensions.push('.mjs')
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      })
    },
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
          src: '/icons/LOGO.png',
          sizes: '48x48',
          type: 'image/png',
        },
        {
          src: '/icons/LOGO-1.png',
          sizes: '72x72',
          type: 'image/png',
        },
        {
          src: '/icons/LOGO-2.png',
          sizes: '96x96',
          type: 'image/png',
        },
        {
          src: '/icons/LOGO-3.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: '/icons/LOGO-4.png',
          sizes: '168x168',
          type: 'image/png',
        },
        {
          src: '/icons/LOGO-5.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icons/LOGO-6.png',
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
