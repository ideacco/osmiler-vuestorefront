import Client from 'shopify-buy/index.unoptimized.umd'

const storeURL = process.env.storeURL
const storeToken = process.env.storeToken

/**
 * 导出一个graphQLClient实例
 */

export const useClient = Client.buildClient({
  domain: storeURL,
  storefrontAccessToken: storeToken
})
 