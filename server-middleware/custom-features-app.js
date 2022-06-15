const Koa = require('koa')
const Router = require('koa-router')
// const bodyParser = require('koa-bodyparser'); // 解析post请求
const axios = require('axios')
const routing = require("./routes")
// const subscribe = require("./routes/marketing")
const bodyParser = require('koa-bodyparser')

const app = new Koa()
const router = new Router()

// koa中间件测试
// const middlewareTest = async (ctx, next) => {
//   console.log('middlewareTest')
//   await next()
// }

// router.get('/cart.js', async (ctx, next) => {
//   const options = {
//     method: 'GET',
//     url: `https://${process.env.SHOPIFY_DOMAIN}` + ctx.url,
//   }

//   console.log('获取前端请求:', ctx.query)
//   console.log('请求参数', options)

//   // // 需要等待异步返回
//   const data = await axios.request(options).then((response) => response.data)
//   // console.log('data',data)
//   ctx.status = 200
//   ctx.type = 'application/json'
//   ctx.body = Object.assign({}, { data: data })
//   // ctx.body = { data: ctx }
// })

// router.get('/wp', middlewareTest, async (ctx, next) => {
//   console.log('获取到wp接口请求')
//   const options = {
//     method: 'GET',
//     url: `http://192.168.1.80:8800/wp-json/`,
//   }

//   const data = await axios.request(options).then((response) => response.data)
//   // console.log(data)
//   ctx.body = data
// })
// console.log('routing2222', router.routes.toString())

app.use(bodyParser())

// 路由处理
app.use(router.routes())
routing(app)

export default {
  // 这边可以写URL前缀
  path: '/app/v1',
  handler: app.callback(),
}
// 请求地址示例
// http://localhost:8888/app/v1/cart.js