export default function (context) {
  console.log('中间件')
  console.log(process.env.BASE_URL)
  console.log(process.env.APP_PORT)
  // 给上下文对象增加 userAgent 属性（增加的属性可在 `asyncData` 和 `fetch` 方法中获取）
  // context.userAgent = process.server
  //   ? context.req.headers['user-agent']
  //   : navigator.userAgent
  // console.log('user-agent1111', context.params)
  // console.log('user-agent2222', context.route)
}
