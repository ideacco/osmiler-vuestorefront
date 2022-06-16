// 具体使用方法请查看
// https://axios.nuxtjs.org/usage

export default ({ store, route, redirect, $axios, req }) => {

  // 设置前端请求的baseURL,这里使用的nuxt的代理模式,在nuxt.config.js中配置
  // if (process.client) {
  //   $axios.setBaseURL(process.env.VUE_APP_API_BASE_URL)
  // }

  $axios.onRequest((config) => {
    // console.log("请求拦截器")
    // 有需要的话可以在请求头中添加token
    const accessToken = store.state.accessToken
    if (accessToken) {
      // Authorization: Bearer token
      config.headers.Authorization = 'Bearer ' + accessToken
    }
    // 请求头添加token
    return config
  })

  $axios.onResponse((response) => {
    // console.log('响应拦截器：', response)
    // if(!store.state.accessToken) {
    //     sendRefreshRequest(route, store, redirect)
    // }
    return response
  })

  $axios.onError((error) => {
    // console.log('响应异常：', error.response.status)
    if (error.response.status != 401) {
      return Promise.reject(error)
    }
    // 401 发送刷新获取新令牌
    sendRefreshRequest(route, store, redirect, req)
    return Promise.reject('令牌过期，重新登录')
  })
}
