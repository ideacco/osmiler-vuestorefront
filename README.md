# Osmiler 商城前端框架

## 简介
OSMILER的前端商城框架使用 Vue Storefron 作为基础前端框架,使用Shopify作为后端框架,并调用Shopify 前端接口实现店面系统.

## 项目结构
```
vuestorefront
├── .nuxt                     // nuxt 服务端渲染缓存,会根据文档更改自动更新
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
├── layouts
├── middleware                 // 中间件(shopify key配置在这里)
├── modules
├── pages                      // 页面
│   ├── Checkout               // 结账页面
│   ├── MyAccount              // 我的账户页面
│   ├── Home.vue
│   ├── ...
├── plugins                    // 第三方插件目录(第三方UI库的JS,工具JS)
│   ├── UIkit.js
│   ├── element-ui.js
│   ├── ...
├── server-middleware          // 服务器中间件
├── static                     // 静态目录
├── store                      // 状态管理
├── .env                       // 环境配置
├── .env.development
├── .env.example
├── .env.production
├── README.md
├── jest.config.js
├── middleware.config.js       // nuxt中间件配置
├── nuxt.config.js             // nuxt主要配置
├── package.json
├── tsconfig.json

```

## 技术栈说明
vuestorefront 底层基础使用 (nuxt)[https://www.nuxtjs.org/] 作为基础支撑.

(vuestorefront 文档地址)[https://docs.vuestorefront.io/v2/]
(vuestorefront CSS 文档地址)[https://docs.storefrontui.io/?path=/docs/utilities-transitions--slide-left]



# 接口的封装
  1. 通过package.json 切换环境部署
  2. 通过api的直接调用接口

    ```js

    export default({$axios},inject)=>{
          inject('test',()=>$axios.$get('/test'))
          inject('test2',()=>$axios.$get('/test'))
      }

    ```
  3. 在页面中怎么调用接口
  类似案例如：

  ```js

  async asyncdata({$axios,app}){
      const respone=await app.$test()
    console.log('respopnse‘,respone)
    return {
        data:respone.data
    }
  }
  async asyncdata({$axios]}){
      const response=await $axios.get()
      return(data:response。data)
  }

  ```

  路由跳转放在appheader.vue文件中

  ```js
    <el-menu-item index="/music" class="el-menu-demo">
                    <span class="menusize">music</span></el-menu-item
                  >
                  <el-menu-item index="/Aboutus" class="el-menu-demo">
                    <span class="menusize">关于我们</span></el-menu-item
                  >
  ```

  页面路由的路径只需要 /about

## 如何自定义样式

1. 首先在配置文件中,注册样式文件: `nuxt.config.js`

```js
styleResources: {
    scss: [
      require.resolve('@storefront-ui/shared/styles/_helpers.scss', {
        paths: [process.cwd()]
      })
    ]
  }

```

2. 编辑SCSS 文件 `/style/index.scss`




Settings 维护整个网站的变量
Tools  维护一些样式的工具库
Base  对元素进行一些定制化处理
Objects 通用模块的样式处理
theme 样式的权重变高


## ENV与环境配置
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
3,导致问题:这就导致了一个问题：保存文件时，ESLint 先 fix 了代码，之后 prettier 格式化了代码，导致代码变得不符合 ESLint 规则了。这份代码在保存时，ESLint 会先从初始状态变成正确的格式，然后 prettier 又把代码变成了错误的格式vscode 配置了在文件保存时进行格式化和 ESLint 自动修复：
4,解决方案:只用 ESLint fix 就可以保证代码风格了，那么关掉 vscode 保存时的自动格式化：
"editor.formatOnSave": false,

## 项目启动使用：
yarn install

yarn dev


### Stay connected (项目原始地址)

[![GitHub Repo stars](https://img.shields.io/github/stars/vuestorefront/vue-storefront?style=social)](https://github.com/vuestorefront/vue-storefront)
[![Twitter Follow](https://img.shields.io/twitter/follow/vuestorefront?style=social)](https://twitter.com/vuestorefront)
[![YouTube Channel Subscribers](https://img.shields.io/youtube/channel/subscribers/UCkm1F3Cglty3CE1QwKQUhhg?style=social)](https://www.youtube.com/c/VueStorefront)
[![Discord](https://img.shields.io/discord/770285988244750366?label=join%20discord&logo=Discord&logoColor=white)](https://discord.vuestorefront.io)

Vue Storefront 2 template for Shopify.

