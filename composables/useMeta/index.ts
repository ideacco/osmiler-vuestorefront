import { computed } from '@nuxtjs/composition-api'
import { sharedRef, Logger } from '@vue-storefront/core'
import { useClient as client } from '../graphQL-client'

export const useMeta = (id: string) => {

  const result = sharedRef(null, `useMeta-${id}`)
  const loading = sharedRef(false, `useMeta-loading-${id}`)
  const error = sharedRef({
    search: null
  }, `useMeta-error-${id}`)

  /**
   * search 触发函数,获取产品元字段信息
   * @param params 可以传入一个句产品名称,空值则返回所有的产品
   */
  const search = async (params) => {
    Logger.debug(`useMeta/${id}/search`, params)

    let productsQuery = null

    if (params.slug) {
      productsQuery = client.graphQLClient.query((root) => {
        root.add('productByHandle', { args: { handle: params.slug } }, (productByHandle) => {
          productByHandle.add('id')
          productByHandle.add('title')
          productByHandle.add('handle')
          productByHandle.addConnection('metafields', { args: { first: 3 } }, (metafield) => {
            metafield.add('createdAt')
            metafield.add('namespace')
            metafield.add('key')
            metafield.add('value')
            metafield.add('type')
          })
        })
      })
    } else {
      productsQuery = client.graphQLClient.query((root) => {
        root.addConnection('products', { args: { first: params.limit ? params.limit : 20 } }, (product) => {
          product.add('title')
          product.add('id')
          product.add('handle')
          product.addConnection('metafields', { args: { first: 3 } }, (metafield) => {
            metafield.add('createdAt')
            metafield.add('namespace')
            metafield.add('key')
            metafield.add('value')
            metafield.add('type')
          })
        })
      })
    }

    try {
      loading.value = true
      if (params.slug) {
        result.value = await client.graphQLClient.send(productsQuery).then(({ model }) => {
          console.log(model.productByHandle)
          return model.productByHandle
        })
      } else {
        result.value = await client.graphQLClient.send(productsQuery).then(({ model }) => {
          if (model) {
            return model
          }
        })
      }

      error.value.search = null
    } catch (err) {
      error.value.search = err
      Logger.error(`useMeta/${id}/search`, err)
    } finally {
      loading.value = false
    }
  }

  return {
    search,
    meta: computed(() => result.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value)
  }
}