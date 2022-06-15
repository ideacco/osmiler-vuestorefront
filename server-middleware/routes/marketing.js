// 业务路由
const Router = require("koa-router");
const router = new Router({ prefix: "/mailchimp" })  // 路由前缀
const {
  subscribed,
  unSubscribed,
  verifySubscribed,
} = require("../controllers/mailSubscribe")  // 控制器方法


router.post("/subscribed", subscribed)  // 创建用户订阅
router.post("/unsubscribed", unSubscribed)  // 用户退订
router.post("/verifysubscribed", verifySubscribed)  // 查找用户订阅

module.exports = router