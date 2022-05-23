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


### Stay connected

[![GitHub Repo stars](https://img.shields.io/github/stars/vuestorefront/vue-storefront?style=social)](https://github.com/vuestorefront/vue-storefront)
[![Twitter Follow](https://img.shields.io/twitter/follow/vuestorefront?style=social)](https://twitter.com/vuestorefront)
[![YouTube Channel Subscribers](https://img.shields.io/youtube/channel/subscribers/UCkm1F3Cglty3CE1QwKQUhhg?style=social)](https://www.youtube.com/c/VueStorefront)
[![Discord](https://img.shields.io/discord/770285988244750366?label=join%20discord&logo=Discord&logoColor=white)](https://discord.vuestorefront.io)

Vue Storefront 2 template for Shopify.

接口的封装
1，通过package.json 切换环境部署
2，通过api的直接调用接口
例如：export default({$axios},inject)=>{
    inject('test',()=>$axios.$get('/test'))
    inject('test2',()=>$axios.$get('/test'))
}
3，在页面中怎么调用接口
类似案例如：
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
路由跳转放在appheader.vue文件中
   <el-menu-item index="/music" class="el-menu-demo">
                  <span class="menusize">music</span></el-menu-item
                >
                <el-menu-item index="/Aboutus" class="el-menu-demo">
                  <span class="menusize">关于我们</span></el-menu-item
                >
页面路由的路径只需要 /about

关于样式的文档解说说明
Settings 维护整个网站的变量
Tools  维护一些样式的工具库
Base  对元素进行一些定制化处理
Objects 通用模块的样式处理
theme 样式的权重变高

项目启动使用：
yarn install

yarn dev
