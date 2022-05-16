export default({store, route, redirect, $axios,req}) => {

    $axios.onRequest(config => {
        // console.log("请求拦截器")
        // 有需要的话可以在请求头中添加token
        const accessToken = store.state.accessToken
        if(accessToken) {
            // Authorization: Bearer token
            config.headers.Authorization = 'Bearer ' + accessToken
        }
        // 请求头添加token
        return config
    })

    $axios.onResponse(response => {
        // console.log('响应拦截器：', response)
        // if(!store.state.accessToken) {
        //     sendRefreshRequest(route, store, redirect)
        // }
        return response
    })

    $axios.onError(error => {
        // console.log('响应异常：', error.response.status)
        if(error.response.status != 401 ) {
            return Promise.reject(error)
        }
        // 401 发送刷新获取新令牌
        sendRefreshRequest(route, store, redirect,req)
        return  Promise.reject('令牌过期，重新登录')
    })

}

// 下面操作是401权限问题，会重定向到统一登录中心
const sendRefreshRequest = (route, store, redirect,req) => {
   let isLock = true // 防止并发重复发送刷新令牌请求， true 还未发送，false正在请求刷新
    if(isLock && store.state.refreshToken) {
        isLock = false
        // 发送请求到认证客户端，通过刷新令牌获取新令牌
        redirect(`${process.env.authURL}/refresh?redirectURL=${redirectURL(route,req)}`)
    }else {
        isLock = true
        // 没有刷新令牌，跳转到登录页
        // 重置用户状态
        // console.log('跳转到登录页')
        store.commit('RESET_USER_STATE')
        // 跳转到登录页

        redirect(`${process.env.authURL}?redirectURL=${redirectURL(route,req)}`)
    }
}

// 获取重定向地址
const redirectURL = (route,req) => {
    // 客户端
    if(process.client) {
        return window.location.href
    }
   // 服务端
    return `${process.env.NODE_ENV === 'production' ? 'https://' : 'http://'}` + req.headers.host + route.fullPath
}
