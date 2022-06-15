const fs = require('fs')
const path = require('path')

// 自动注册路由
module.exports = (app) => {
  const fsPath = path.join(__dirname)
  fs.readdirSync(fsPath).forEach((file) => {
    if (file === 'index.js' || file === 'users.js') {
      return
    }

    const router = require(`${fsPath}/${file}`)
    // const router = require("./marketing") //
    app.use(router.routes()).use(router.allowedMethods())
  })
}
