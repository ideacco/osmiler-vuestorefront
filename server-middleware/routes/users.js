// // 用户接口 示例代码
// const jsonwebtoken = require("jsonwebtoken");
// const jwt = require("koa-jwt");
// const { secret } = require("../config");
// const Router = require("koa-router");
// const router = new Router({ prefix: "/users" });  // 路由前缀
// const {
//   find,
//   findById,
//   create,
//   checkOwner,
//   update,
//   delete: del,
//   login,
// } = require("../controllers/users");  // 控制器方法

// const auth = jwt({ secret });  // jwt鉴权

// router.get("/", find);  // 获取用户列表

// router.post("/", auth, create);  // 创建用户（需要jwt认证）

// router.get("/:id", findById);  // 获取特定用户

// router.patch("/:id", auth, checkOwner, update);  // 更新用户信息（需要jwt认证和验证操作用户身份）

// router.delete("/:id", auth, checkOwner, del);  // 删除用户（需要jwt认证和验证操作用户身份）

// router.post("/login", login);  // 用户登录

// module.exports = router
