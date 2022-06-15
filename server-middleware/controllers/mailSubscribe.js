// 用户订阅功能
const { Axios, get, post } = require("../models/axios")
const { Mailchimp_API_KEY } = require("../config.js")
const { Md5 } = require('../utils')

class SubscribeController {

  /**
   * 用户订阅到 Mailchimp 列表
   * @param {*} ctx 
   * @returns 
   */

  async subscribed (ctx) {
    // 想列表中添加一个用户订阅

    const params = ctx.request.body
    console.log('????params',params)

    if (!params.email_address) {
      ctx.body = {
        code: 0,
        mag: '邮箱地址为必填项'
      }
      return
    }

    // 验证邮箱地址是否合法
    const email_address = params.email_address
    const re = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/

    if (!re.test(email_address)) {
      ctx.body = {
        code: 0,
        mag: '邮箱地址不合法'
      }
      return
    }

    const subscribingUser = {
      "merge_fields": {
        "FNAME": params.first_name ? ctx.query.first_name : '',
        "LNAME": params.last_name ? ctx.query.last_name : '',
      },
      email_address: email_address,
      status: "subscribed" // 状态必填
    }

    const reqUrl = `https://${Mailchimp_API_KEY.server}.api.mailchimp.com/3.0/lists/${Mailchimp_API_KEY.listId}/members/`

    const options = {
      method: 'POST',
      url: reqUrl,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Buffer.from(`apikey:${Mailchimp_API_KEY.apiKey}`).toString('base64')}`,
      },
      data: subscribingUser
    }

    const response = await Axios.request(options)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        console.log(error)
        return error
      })


    if (response) {
      console.log('Successfully added a subscriber.', response)
    }

    // 异常处理
    if (response.status !== 200) {
      ctx.body = {
        code: 0,
        data: {
          "status": response.status,
          "email_address": response.email_address,
          "detail": response.detail
        },
        mag: '数据错误,请查看细节'
      }
    }

    ctx.body = {
      code: 1,
      data: {
        "status": response.status,
        "email_address": response.email_address
      }
    }
  }

  /**
   * 用户从 Mailchimp 列表退订
   * @param {*} ctx 
   * @returns 
   */

  async unSubscribed (ctx) {
    // 想列表中添加一个用户订阅
    const params = ctx.request.body
    if (!params.email_address) {
      ctx.body = {
        code: 0,
        mag: '邮箱地址为必填项'
      }
      return
    }

    // 验证邮箱地址是否合法
    const email_address = params.email_address
    const re = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/

    if (!re.test(email_address)) {
      ctx.body = {
        code: 0,
        mag: '邮箱地址不合法'
      }
      return
    }

    const subscribingUser = {
      "merge_fields": {
        "FNAME": params.first_name ? params.first_name : '',
        "LNAME": params.last_name ? params.last_name : '',
      },
      email_address: email_address,
      status: "unsubscribed"
    }

    const reqUrl = `https://${Mailchimp_API_KEY.server}.api.mailchimp.com/3.0/lists/${Mailchimp_API_KEY.listId}/members/`

    const options = {
      method: 'PUT',
      url: reqUrl,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Buffer.from(`apikey:${Mailchimp_API_KEY.apiKey}`).toString('base64')}`,
      },
      data: subscribingUser
    }

    const response = await Axios.request(options)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        console.log(error)
        return error
      })


    if (response) {
      console.log('Successfully added a subscriber.', response)
    }

    // 异常处理
    if (response.status !== 200) {
      ctx.body = {
        code: 0,
        data: {
          "status": response.status,
          "email_address": response.email_address,
          "detail": response.detail
        },
        mag: '数据错误,请查看细节'
      }
    }

    ctx.body = {
      code: 1,
      data: {
        "status": response.status,
        "email_address": response.email_address
      }
      // data: response
    }
  }


  async verifySubscribed (ctx) {
    // 想列表中添加一个用户订阅

    const params = ctx.request.body

    if (!params.email_address) {
      ctx.body = {
        code: 0,
        mag: '邮箱地址为必填项'
      }
      return
    }

    // 验证邮箱地址是否合法
    const email_address = params.email_address
    const re = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/

    if (!re.test(email_address)) {
      ctx.body = {
        code: 0,
        mag: '邮箱地址不合法'
      }
      return
    }

    const mailHash = Md5(email_address)

    // const subscribingUser = {
    //   "merge_fields": {
    //     "FNAME": params.first_name ? params.first_name : '',
    //     "LNAME": params.last_name ? params.last_name : '',
    //   },
    //   email_address: email_address,
    //   status: "unsubscribed"
    // }

    const reqUrl = `https://${Mailchimp_API_KEY.server}.api.mailchimp.com/3.0/lists/${Mailchimp_API_KEY.listId}/members/${mailHash}`

    const options = {
      method: 'GET',
      url: reqUrl,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Buffer.from(`apikey:${Mailchimp_API_KEY.apiKey}`).toString('base64')}`,
      },
      // data: subscribingUser
    }

    const response = await Axios.request(options)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        console.log(error)
        return error
      })

    // 异常处理
    if (response.status !== 200) {
      ctx.body = {
        code: 0,
        data: {
          "status": response.status,
          "detail": response.detail
        },
        mag: '数据错误,请查看细节'
      }
    }

    ctx.body = {
      code: 1,
      // data: {
      //   "status": response.status,
      //   "email_address": response.email_address
      // }
      data: response
    }
  }

}

module.exports = new SubscribeController()