import { computed } from '@nuxtjs/composition-api'
import { sharedRef, Logger } from '@vue-storefront/core'
import { useClient as client } from '../graphQL-client'

// 工厂方式参考
// https://github.com/vuestorefront/vue-storefront/blob/main/packages/core/src/factories/useProductFactory.ts
export const useCustom = (id: string) => {

  // 共享引用保存来自API的响应 Shared ref holding the response from the API
  const result = sharedRef(null, `useCustom-${id}`)

  // 共享 ref 指示是否有任何方法正在等待来自 API 的数据
  // Shared ref indicating whether any method is waiting for the data from the API
  const loading = sharedRef(false, `useCustom-loading-${id}`)

  // 方法中的共享 ref 持有错误
  // Shared ref holding errors from the methods
  const error = sharedRef({
    search: null
  }, `useCustom-error-${id}`)

  const isId = 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNDc5OTI1Nzg='
  const slug = 'osmiler-swing'

  // 构造查询
  const productsQuery = client.graphQLClient.query((root) => {
    root.add('shop', (shop) => {
      shop.add('name')
      root.addConnection('products', {args: {first: 10}}, (product) => {
        product.add('title')
        product.add('id')
        product.addConnection('metafields', { args: { first: 3 }, query: {id:isId} }, (metafield) => {
          metafield.add('createdAt')
          metafield.add('namespace')
          metafield.add('key')
          metafield.add('value')
          metafield.add('type')
      })
      })
    })
  })

  // 调用 API 端点并更新 `result`、`loading` 和 `error` 属性的方法
  // Method to call an API endpoint and update `result`, `loading` and `error` properties
  const search = async ( params ) => {
    Logger.debug(`useCustom/${id}/search`, params)

    try {
      loading.value = true
      // console.log('发起请求')
      // result.value = await context.$shopify.api.searchCustom(params)

      console.log('base64生成:',Buffer.from('gid://shopify/Page/99714236674').toString('base64'));
      console.log('转义:base64:',Buffer.from('Z2lkOi8vc2hvcGlmeS9QYWdlLzk5NzE0MjM2Njc0', 'base64').toString());
      
      // 自定义请求
      result.value = await client.graphQLClient.send(productsQuery).then(data => {
        // console.log('返回数据,',JSON.stringify(data.data))
        return data.data
      })
      // console.log('完成请求',result.value)

      error.value.search = null
    } catch (err) {
      error.value.search = err
      Logger.error(`useCustom/${id}/search`, err)
    } finally {
      loading.value = false
    }
  };

  return {
    search,
    custom: computed(() => result.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value)
  }
}