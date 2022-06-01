export default ({ store, route, redirect, $axios, req }) => {
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
