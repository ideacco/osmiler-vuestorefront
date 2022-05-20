<template>
  <div class="mxg-header">
    <div class="mxg-nav mxg-header-fixed">
      <el-row type="flex" justify="space-between">
        <div class="menunav">
          <el-col :xs="4" :sm="4" :md="4">
            <nuxt-link to="/">
              <img
                src="https://cdn.shopify.com/s/files/1/0529/4112/7855/files/LOGO_ae78022a-64a3-4cbc-879d-af1b4b67df04_540x.png?v=1652778903"
                alt=""
                class="logo"
              />
            </nuxt-link>
          </el-col>
          <!-- 导航菜单 -->
          <el-col class="hidden-sm-and-down">
            <div class="elmenubox">
              <el-menu
                router
                :default-active="this.$router.path"
                background-color="#fafafa"
                class="elmenulist"
                style="border: none"
              >
                <el-menu-item index="/music" class="el-menu-demo">
                  <span class="menusize">music</span></el-menu-item
                >
                <el-menu-item index="/Aboutus" class="el-menu-demo">
                  <span class="menusize">关于我们</span></el-menu-item
                >
                <el-menu-item index="/ContactUs" class="el-menu-demo">
                  <span class="menusize">联系我们</span></el-menu-item
                >
                 <el-menu-item index="3" class="el-menu-demo">
                  <span class="menusize">texttable3</span></el-menu-item
                >
                 <el-menu-item index="3" class="el-menu-demo">
                  <span class="menusize">texttable3</span></el-menu-item
                >
                 <el-menu-item index="3" class="el-menu-demo">
                  <span class="menusize">texttable3</span></el-menu-item
                >
                 <el-menu-item index="3" class="el-menu-demo">
                  <span class="menusize">texttable3</span></el-menu-item
                >
              </el-menu>
            </div>
          </el-col>
        </div>
        <!-- 购物车与登陆 -->
        <el-col class="nav-sign" :xl="3" :lg="3" :xs="10" :sm="10" :md="8">
         <div class="buttonbox">
           <div class="buttonbox1">
             <el-button type="text" class="button3">sign in</el-button>
           </div>
         </div>
          <div class="buttonbox33">
            <div class="buttonbox44">
              <div class="buttonbox55"></div>
              <el-button type="primary" class="button66">shop</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script type="module">
</script>
<style lang="css" scoped>
.mxg-header {
  width: 100%;
  height: 122px;
  background-color: #fafafa;
  border-top: 3px solid #345dc2;
  z-index: 1501;
}
.mxg-header-fixed {
  position: fixed;
}
.mxg-header .mxg-nav {
  position: relative;
  max-width: 1340.37px;
  margin: auto;
  padding: 0 50px 0 20px;
}
.el-menu .el-menu--horozontal {
  border-bottom: 0px;
  margin-top: -10px;
}
.nav-right {
  text-align: center;
}
.nav-sign {
  position: absolute;
  top: 30%;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 24px;
  width: 264px;
  height: 44px;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
}
.menunav {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 716.98px;
  height: 122px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
.logo {
  width: 136.98px;
  height: 40px;
}
.elmenubox {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 570px;
  height: 122px;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
}
.elmenulist {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  width: 570px;
  height: 122px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
.el-menu-demo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 49px 36px;
  gap: 10px;
  width: 110px;
  height: 122px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
.menusize {
  /* Tab1 */
  height: 24px;
  /* 中文-标准/正文2-16pt/正文2_Regular */
  font-family: "Alibaba PuHuiTi";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  /* 浅色模式文本/Title Text */
  color: #0c0b0e;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
.buttonbox{
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 109px;
height: 44px;
background: #FFFFFF;
/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
}
.buttonbox1{
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
gap: 8px;
width: 53px;
height: 24px;
/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
}
.button3{
/* 中文-标准/正文2-16pt/正文2_Mmedium */
font-family: 'Alibaba PuHuiTi';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */
display: flex;
align-items: center;
text-align: center;
/* 功能色/品牌/Brand_light */
color: #4132C7;
/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
}
.buttonbox33{
  /* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 131px;
height: 44px;
/* 功能色/品牌/Brand_light */
background: #4132C7;
border-radius: 22px;
/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
}
.buttonbox44{
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
gap: 8px;
width: 75px;
height: 24px;
/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
}
.buttonbox55{
/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
}
.button66{
background: #4132C7;
width: 43px;
height: 24px;
border: none;
/* 中文-标准/正文2-16pt/正文2_Mmedium */
font-family: 'Alibaba PuHuiTi';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */
display: flex;
align-items: center;
text-align: center;
/* 浅色模式文本/Anti */
color: #FFFFFF;
margin-left: -30px;
/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
}
.mxgmiddlebox2{
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 60px;
width: 389px;
height: 162px;
/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
}
.mxgmiddlebox2-footer{
 display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 12px;
width: 61px;
height: 110px;
/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
}
.mxgmiddlebox2-footer2{
  /* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 12px;
width: 97px;
height: 136px;
/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
}
.mxgmiddlebox2-footer3{
  /* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 12px;
width: 111px;
height: 162px;
/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;
}
.titlegh1{
  width: 32px;
height: 24px;
/* 中文-标准/正文2-16pt/正文2_Mmedium */
font-family: 'Alibaba PuHuiTi';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */
/* 浅色模式文本/Title Text */
color: #0C0B0E;
/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
}
.framtitle74{
  display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 4px;
width: 61px;
height: 74px;
/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
}
</style>
