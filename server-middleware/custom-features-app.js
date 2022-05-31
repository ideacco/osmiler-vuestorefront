const Koa = require('koa')
const Router = require('koa-router')
// const bodyParser = require('koa-bodyparser'); // 解析post请求
const axios = require('axios');

const app = new Koa()
const router = new Router()


router.get('/cart.js', async (ctx, next) => {

  const options = {
    method: 'GET',
    url: `https://${process.env.SHOPIFY_DOMAIN}` + ctx.url
  };

  console.log('获取前端请求', ctx.query)
  // console.log('获取前端请求', options)

  // 需要等待异步返回
  const data = await axios.request(options).then(response => response.data)

  ctx.status = 200
  ctx.type = 'application/json'
  // ctx.body = Object.assign({}, { data: data })
  ctx.body = { data: data }

})


app.use(router.routes())

export default {
  // 这边可以写URL前缀
  path: '/app/v1',
  handler: app.callback()
}

