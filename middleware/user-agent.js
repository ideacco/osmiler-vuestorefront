
export default function (context) {
  // 给上下文对象增加 userAgent 属性（增加的属性可在 `asyncData` 和 `fetch` 方法中获取）
  // context.userAgent = process.server
  //   ? context.req.headers['user-agent']
  //   : navigator.userAgent
  console.log('user-agent1111', context.params)
  console.log('user-agent2222', context.route)
}