import { computed } from '@nuxtjs/composition-api'
import { sharedRef, useVSFContext, Logger } from '@vue-storefront/core'

export const useCustom = (id: string) => {
  // 加载用于调用API端点的上下文
  const context = useVSFContext()

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

  // 调用 API 端点并更新 `result`、`loading` 和 `error` 属性的方法
  // Method to call an API endpoint and update `result`, `loading` and `error` properties
  const search = async ( params ) => {
    Logger.debug(`useCustom/${id}/search`, params)

    try {
      loading.value = true
      // 将“yourIntegration”更改为集成的名称
      // Change "yourIntegration" to the name of the integration
      console.log('发起请求')
      result.value = await context.$shopify.api.searchCustom(params)
      console.log('完成请求',result.value)
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
    result: computed(() => result.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value)
  }
}