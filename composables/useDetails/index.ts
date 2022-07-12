import { computed } from '@nuxtjs/composition-api'
import { sharedRef, Logger } from '@vue-storefront/core'
import { useClient as client } from '../graphQL-client'

export const useDetails = (id: string) => {

  // 共享引用保存来自API的响应 Shared ref holding the response from the API
  const result = sharedRef(null, `useDetails-${id}`)

  // 共享 ref 指示是否有任何方法正在等待来自 API 的数据
  // Shared ref indicating whether any method is waiting for the data from the API
  const loading = sharedRef(false, `useDetails-loading-${id}`)

  // 方法中的共享 ref 持有错误
  // Shared ref holding errors from the methods
  const error = sharedRef({
    search: null
  }, `useDetails-error-${id}`)

  // 调用 API 端点并更新 `result`、`loading` 和 `error` 属性的方法
  // Method to call an API endpoint and update `result`, `loading` and `error` properties
  const search = async (params) => {
    Logger.debug(`useDetails/${id}/search`, params)

    let pagesQuery

    if (params.slug) {
      pagesQuery = client.graphQLClient.query((root) => {
        root.add('pageByHandle', { args: { handle: params.slug } }, (pageByHandle) => {
          pageByHandle.add('id')
          pageByHandle.add('title')
          pageByHandle.add('handle')
          pageByHandle.add('bodySummary')
          pageByHandle.add('body')
          pageByHandle.add('createdAt')
        })
      })
    } else {
      pagesQuery = client.graphQLClient.query((root) => {
        root.addConnection('pages', { args: { first: params.limit ? params.limit : 20 } }, (article) => {
          article.add('id')
          article.add('title')
          article.add('handle')
          article.add('bodySummary')
          article.add('body')
          article.add('createdAt')
        })
      })
    }

    try {
      loading.value = true

      if (params.slug) {
        result.value = client.graphQLClient.send(pagesQuery).then(({ model }) => {
          return model.pageByHandle
        })
      } else {
        result.value = await client.graphQLClient.send(pagesQuery).then(({ model }) => {
          if (model) {
            return model
          }
        })
      }

      error.value.search = null
    } catch (err) {
      error.value.search = err
      Logger.error(`useDetails/${id}/search`, err)
    } finally {
      loading.value = false
    }
  }

  return {
    search,
    details: computed(() => result.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value)
  }
}