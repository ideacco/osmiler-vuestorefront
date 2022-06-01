import axios from 'axios'
import * as Cookies from 'js-cookie'
import {
  Message,
  Loading
} from 'element-ui'
let loadingInstance
axios.create({
  withCredentials: false, // 跨域请求是否允许携带cookie资源凭证
  time: 1000 // 请求超时时间
})

//  request请求拦截器
axios.interceptors.request.use(
  (config) => {
    if (!Cookies.get('token')) {
      //未登录
      // location.href = index.html/*  */
    }
    loadingInstance = Loading.service({
      lock: true,
      text: '飞速加载中……'
    })
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// response响应拦截器
axios.interceptors.response.use(
  (response) => {
    setTimeout(() => {
      loadingInstance && loadingInstance.close()
    }, 300)
    return response
  },
  (error) => {
    setTimeout(() => {
      loadingInstance && loadingInstance.close()
    }, 300)
    const {
      response
    } = error
    if (response) {
      // 服务器有返回内容
      let errormsg = ''
      switch (response.status) {
        case 400:
          errormsg = '错误请求'
          break
        case 401:
          errormsg = '未登录,请重新登录'
          break
        case 403:
          errormsg = '决绝访问'
          break
        case 404:
          errormsg = '请求错误，未找到该资源'
          break
        case 405:
          errormsg = '请求方法未允许'
          break
        case 408:
          errormsg = '请求超时'
          break
        case 500:
          errormsg = '服务器出错'
          break
        case 501:
          errormsg = '网络未实现'
          break
        case 502:
          errormsg = '网络错误'
          break
        case 503:
          errormsg = '服务不可用'
          break
        case 504:
          errormsg = '网络超时'
          break
        case 505:
          errormsg = 'http版本不支持该请求'
          break
        default:
          errormsg = '连接错误'
      }
      Message({
        type: 'warning',
        message: errormsg
      })
      return false
    } else if (!window.navigator.online) {
      // 服务器连结果都没有返回  有可能是断网或者服务器奔溃
      // 断网处理
      Message('网络中断')
      return false
    }
    // 服务器奔了
    Message('服务器奔了')
    return Promise.reject(error)

  }
)

/*
 *get 方法，对应get请求
 *@param {String} url [请求的url地址]
 *@param {Object} params[请求携带的参数]]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params
      })
      .then((res) => {
        if (res && res.status === 200 && res.data) {
          //请求成功
          reject(res)
        } else {
          Message({
            type: 'warning',
            message: res.statusText ? res.statusText : '发生未知错误'
          })
          reject(res)
        }
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}

/*
 *post 方法，对应post请求
 *@param {String} url [请求的url地址]
 *@param {Object} params[请求携带的参数]]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios({
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'post',
      url,
      data: params
    })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}

/*
 *封装patch请求
 *@param url
 * @param params
 * @returns {Promise}
 */
export function patch(url, params) {
  return new Promise((resolve, reject) => {
    axios.patch(url, params).then(
      (res) => {
        resolve(res.data)
      },
      (err) => {
        reject(err)
      }
    )
  })
}

/*
 *put 请求
 *@param url
 * @param params
 */
export function put(url, params) {
  return new Promise((resolve, reject) => {
    axios.put(url, params).then(
      (res) => {
        resolve(res.data)
      },
      (err) => {
        reject(err)
      }
    )
  })
}