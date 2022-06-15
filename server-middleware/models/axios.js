// axios 简单封装
const axios = require('axios')

// import QS from 'qs'
// import Koa from 'Koa'
// let Token // 设置一个默认的 token

// 请求超时时间
axios.defaults.timeout = 1000 * 20

// post请求头
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// axios.headers = { Authorization: 'Bearer ' + Token }

// 请求拦截器
// axios.interceptors.request.use(
//   config => {
//     // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
//     // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
//     // console.log('请求拦截:', global.Token)
//     if (global.Token) {
//       // const token = global.Token
//       // token && (config.headers.Authorization = 'Bearer ' + token)
//       // console.log('设置了Token', token)
//       config.headers.Authorization = 'Bearer ' + global.Token
//       // console.log('请求头设置：', config.headers.Authorization)
//       console.log('请求参数：', config)
//       return config
//     } else {
//       console.log('请求参数：', config)
//       return config
//     }
//   },
//   error => {
//     return Promise.error(error)
//   })


// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  // 服务器状态码不是200的情况
  error => {
    console.log('返回状态码：', error.response.status)
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 400:
          console.log('返回状态码：400')
          return Promise.reject(error.response)
          // break
          // 403 token过期
          // 登录过期对用户进行提示
          // 清除本地token和清空vuex中token对象
          // 跳转登录页面
        case 401:
          console.log('登陆过期，需要重新登录')
          return Promise.reject(error.response)
          // break
          // 403 token过期
          // 登录过期对用户进行提示
          // 清除本地token和清空vuex中token对象
          // 跳转登录页面
        case 403:
          console.log('登陆过期，需要重新登录')
          return Promise.reject(error.response)
          // break
          // 404请求不存在
        case 404:
          console.log('接口返回404')
          return Promise.reject(error.response)
          // break
          // 其他错误，直接抛出错误提示
        default:
          console.log('接口返回未知错误')
          break
      }
      return Promise.reject(error.response)
    }
  }
)

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */

exports.get = function (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */

exports.post = function (url, params) {
  console.log('post 传参：', url, params)
  return new Promise((resolve, reject) => {
    // axios.post(url, QS.stringify(params))
    axios.post(url, params)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        console.log(err.data)
        reject(err.data)
      })
  })
}

// 导出一个未封装的axios实例,方便使用自定义的配置
exports.Axios = axios
