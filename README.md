# Osmiler 商城前端框架

## 简介

OSMILER 的前端商城框架使用 Vue Storefron 作为基础前端框架,使用 Shopify 作为后端框架,并调用 Shopify 前端接口实现店面系统.

## 项目结构

```
vuestorefront
├── .nuxt                     // NUXT 服务端渲染缓存,会根据文档更改自动更新
├── api                       // 接口定义
├── components                // 组件库
│   ├── Checkout
│   ├── MyAccount
│   ├── utils
│   ├── AppFooter.vue
│   ├── ...
├── composables
├── helpers
├── integrations
├── lang                       // 多语言
├── layouts                    // 布局管理,用于管理布局
├── middleware                 // 中间件(shopify key配置在这里)
├── modules                    // NUXT模块,是Nuxt的官方支持模块目录
├── pages                      // 页面
│   ├── Checkout               // 结账页面
│   ├── MyAccount              // 我的账户页面
│   ├── Home.vue
│   ├── ...
├── plugins                    // 第三方插件目录(第三方UI库的JS,工具JS)
│   ├── UIkit.js               // 第三方UIkit的js库
│   ├── element-ui.js
│   ├── ...
├── server-middleware          // 服务器中间件
├── static                     // 静态目录,不经过NUXT预处理的静态文件
├── store                      // 状态管理 VUEX的 NUXT封装
├── .env                       // 环境配置
├── .env.development
├── .env.example
├── .env.production
├── README.md
├── jest.config.js
├── middleware.config.js       // NUXT中间件配置
├── nuxt.config.js             // NUXT主要配置
├── package.json
├── tsconfig.json

```

## 技术栈说明

vuestorefront 底层基础使用 (nuxt)[https://www.nuxtjs.org/] 作为基础支撑.

(vuestorefront 文档地址)[https://docs.vuestorefront.io/v2/]
(vuestorefront CSS 文档地址)[https://docs.storefrontui.io/?path=/docs/utilities-transitions--slide-left]

### api 接口文档
(vuestorefront-shopify)[https://docs.vuestorefront.io/shopify/guide/use-product.html#examples]
(shopify-node-api 参考文档)[https://github.com/Shopify/shopify-node-api/tree/main/docs#readme]
(graphql-js-客户端)[https://github.com/Shopify/graphql-js-client]

# 接口的封装

## 使用 NUXT 官方的 axios

官方文档地址`https://axios.nuxtjs.org/usage`

### 自定义 axios

1. 通过 package.json 切换环境部署
2. 通过 api 的封装接口

   ```js
   export function getBlog(id) {
     data: (params) => get('/api/index', params)
   }
   ```

3. 在页面中怎么调用接口
   类似案例如：

```js

async asyncdata({$axios,app}){
    const respone=await app.$test()
  console.log('respopnse',respone)
  return {
      data:respone.data
  }
}
async asyncdata({$axios}){
    const response=await $axios.get()
    return(data:response。data)
}

```

## 路由

### 在页面中

## 在 html 中使用路由

可以使用 绑定 方式写:

`$router.push(localePath({name:'my-account'}))``

也可以使用 `nuxt-link` 特有语法写

```html
<nuxt-link :to="localePath('/')" class="uk-navbar-item uk-logo">
  回到首页
</nuxt-link>
```

路由跳转放在 AppHeader_new.vue 文件中需要添加路由的话则需要

```js
  data中的shopRootCategories: ['women', 'man', 'music']里添加page路由页面名即可实现路由跳转
  例如News，则需要这里添加News字段完成之后则是shopRootCategories: ['women', 'man', 'music','News']
```

页面路由的路径只需要 /about

## 如何自定义样式

1. 首先在配置文件中,注册样式文件: `nuxt.config.js`

```js
styleResources: {
  scss: [
    require.resolve('@storefront-ui/shared/styles/_helpers.scss', {
      paths: [process.cwd()],
    }),
  ]
}
```

2. 编辑 SCSS 文件 `/style/index.scss`

Settings 维护整个网站的变量
Tools 维护一些样式的工具库
Base 对元素进行一些定制化处理
Objects 通用模块的样式处理
theme 样式的权重变高

## ENV 与环境配置

默认的环境配置在`.env`文件中

```
SHOPIFY_DOMAIN=xxx.myshopify.com
SHOPIFY_STOREFRONT_TOKEN= xxx
BASE_URL=localhost:8888
```

请注意 `BASE_URL=localhost:8888`这个端口号应该与 `nuxt.config.js`中的`port`端口对应

```json
server: {
  port:8888,
  host: 'localhost'
}
```

## 关于代码格式化说明：

请注意以下几点
1,prettier 并不会根据 ESLint 的配置去格式化代码。当这两个工具同时工作时，产生的结果不一致，就会产生冲突。
2,现象:例如，使用 vue-cli 创建一个项目，ESLint 配置为 standard 代码风格，prettier 没有设置规则（vue-cli 生成的项目里不包含 prettier 包，此时使用的 prettier 是 vscode 的扩展程序）。
3,导致问题:这就导致了一个问题：保存文件时，ESLint 先 fix 了代码，之后 prettier 格式化了代码，导致代码变得不符合 ESLint 规则了。这份代码在保存时，ESLint 会先从初始状态变成正确的格式，然后 prettier 又把代码变成了错误的格式 vscode 配置了在文件保存时进行格式化和 ESLint 自动修复：
4,解决方案:只用 ESLint fix 就可以保证代码风格了，那么关掉 vscode 保存时的自动格式化：
"editor.formatOnSave": false,

**只需要 `yarn lintfix` 就可以修复代码格式统一格式化**

## 项目启动使用：

yarn install

yarn dev

### Stay connected (项目原始地址)

[![GitHub Repo stars](https://img.shields.io/github/stars/vuestorefront/vue-storefront?style=social)](https://github.com/vuestorefront/vue-storefront)
[![Twitter Follow](https://img.shields.io/twitter/follow/vuestorefront?style=social)](https://twitter.com/vuestorefront)
[![YouTube Channel Subscribers](https://img.shields.io/youtube/channel/subscribers/UCkm1F3Cglty3CE1QwKQUhhg?style=social)](https://www.youtube.com/c/VueStorefront)
[![Discord](https://img.shields.io/discord/770285988244750366?label=join%20discord&logo=Discord&logoColor=white)](https://discord.vuestorefront.io)

Vue Storefront 2 template for Shopify.
