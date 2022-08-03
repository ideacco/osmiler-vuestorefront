module.exports = {
  // 开发环境 dev
  dev: {
    NODE_ENV: 'dev',
    VUE_APP_TITLE:'Osmiler-DEV',
    SHOPIFY_DOMAIN:'osmiler.myshopify.com',
    SHOPIFY_STOREFRONT_TOKEN:'d91f449799cb2244a9ed112e71f233ed',
    BASE_URL: 'http://localhost:8888', // 开发服务器地址
    APP_PORT:'8888'
  },
  // 测试环境 release
  pre: {
    NODE_ENV: 'pre',
    VUE_APP_TITLE:'Osmiler-PRE',
    SHOPIFY_DOMAIN:'osmiler.myshopify.com',
    SHOPIFY_STOREFRONT_TOKEN:'d91f449799cb2244a9ed112e71f233ed',
    BASE_URL: 'http://release.osmiler.com', // 预上线服务器地址
    APP_PORT:'9999'
  },
  // 生产环境 master
  production: {
    NODE_ENV: 'production',
    VUE_APP_TITLE:'Osmiler',
    SHOPIFY_DOMAIN:'osmiler.myshopify.com',
    SHOPIFY_STOREFRONT_TOKEN:'d91f449799cb2244a9ed112e71f233ed',
    BASE_URL: 'https://www.osmiler.com', // 正式服务器地址
    APP_PORT:'8888'
  }
}
