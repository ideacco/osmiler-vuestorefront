# 后端架构说明

## Koa 框架

<<<<<<< HEAD

## 后端框架

```
|-- config.js                   # 数据库（mongodb）配置信息
|-- custom-features-app.js      # 入口
|-- controllers                 # 控制器：用于解析用户输入，处理后返回相应的结果
|-- models                      # 模型（schema）： 用于定义数据模型
|-- routes                      # 后端路由
```

### 后端接口设计最佳实践

#### `请求设计规范`

- `URI 使用名词`，尽量使用复数，如/users
- URI 使用`嵌套`表示`关联关系`，如/users/123/repos/234
- 使用`正确的 HTTP 方法`，如 GET/POST/PUT/DELETE

#### `响应设计规范`

- `查询`
- `分页`
- `字段过滤`

如果记录数量很多，服务器不可能都将它们返回给用户。API 应该提供参数，过滤返回结果。下面是一些常见的参数（包括上面的查询、分页以及字段过滤）：

```
?limit=10：指定返回记录的数量
?offset=10：指定返回记录的开始位置。
?page=2&per_page=100：指定第几页，以及每页的记录数。
?sortby=name&order=asc：指定返回结果按照哪个属性排序，以及排序顺序。
?animal_type_id=1：指定筛选条件
复制代码
```

- `状态码`
- `错误处理`

就像 HTML 的出错页面向访问者展示了有用的错误消息一样，API 也应该用之前清晰易读的格式来提供有用的错误消息。

比如对于常见的提交表单，当遇到如下错误信息时：

```
{
    "error": "Invalid payoad.",
    "detail": {
        "surname": "This field is required."
    }
}
复制代码
```

接口调用者很快就能定位到错误原因。

### Controller（控制器）

#### `什么是控制器？`

- 拿到路由分配的任务并执行
- 在 koa 中是一个中间件

#### `为什么要用控制器`

- `获取 HTTP 请求参数`

  - Query String，如?q=keyword
  - Router Params，如/users/:id
  - Body，如{name: 'jack'}
  - Header，如 Accept、Cookie

- `处理业务逻辑`
- `发送 HTTP 响应`

  - 发送 Status，如 200/400
  - 发送 Body，如{name: 'jack'}
  - 发送 Header，如 Allow、Content-Type

#### `编写控制器的最佳实践`

- 每个资源的控制器放在不同的文件里
- 尽量使用类+类方法的形式编写控制器
- 严谨的错误处理

#### `示例`

`app/controllers/users.js`

```
const User = require("../models/users");
class UserController {
  async create(ctx) {
    ctx.verifyParams({
      name: { type: "string", required: true },
      password: { type: "string", required: true }
    });
    const { name } = ctx.request.body;
    const repeatedUser = await User.findOne({ name });
    if (repeatedUser) {
      ctx.throw(409, "用户名已存在");
    }
    const user = await new User(ctx.request.body).save();
    ctx.body = user;
  }
}

module.exports = new UserController();

复制代码
```

=======
[框架官网地址](www.koajs.org)

> > > > > > > 92b35605e61ec88b86ee07a683d5913b5447506e
