<template>
  <div class="mxg-header">
    <div class="mxg-nav mxg-header-fixed">
      <el-row type="flex">
        <!-- 左边 -->
        <div class="mxg-navleft">
          <!-- 左上 -->
          <div class="mxg-navlefttitle">
            <el-image src="/homepage/LOGO.jpg" class="mxg-navlefttitleimg" alt="" />
            <div class="logfontsize">Let your smile light up the world</div>
          </div>
          <!-- 左中 -->
          <div class="mxg-navmiddle">
            <el-image src="/homepage/Ellipse.jpg" alt="" class="mxgclass" />
            <el-image src="/homepage/Ellipse.jpg" alt="" class="mxgclass" />
            <el-image src="/homepage/Ellipse.jpg" alt="" class="mxgclass" />
            <el-image src="/homepage/Ellipse.jpg" alt="" class="mxgclass" />
          </div>
          <!-- 左右 -->
          <div class="mxg-navmiddleright">
            <el-input placeholder="Type your email address"></el-input>
            <el-button class="buttonsize">SUBSCRIBE</el-button>
          </div>
        </div>
        <!-- 中边 -->
        <el-row class="mxgrightsize">
          <el-col class="mxgrightsize1">
            <el-col class="mxgrightsizetitle">服务</el-col>
            <el-col class="layoutfontsize">
              <el-col class="layoutfontsize-font">s1 牙刷</el-col>
              <el-col class="layoutfontsize-font">s2 牙刷</el-col>
              <el-col class="layoutfontsize-font">s3 洗牙器</el-col>
            </el-col>
          </el-col>
          <el-col class="mxgrightsize1">
            <el-col class="mxgrightsizetitle">服务</el-col>
            <el-col class="layoutfontsize">
              <el-col class="layoutfontsize-font">隐私政策</el-col>
              <el-col class="layoutfontsize-font">运输和退货政策</el-col>
              <el-col class="layoutfontsize-font">条款和条件</el-col>
              <el-col class="layoutfontsize-font">订单跟踪</el-col>
            </el-col>
          </el-col>
          <el-col class="mxgrightsize3">
            <el-col class="mxgrightsizetitle">公司</el-col>
            <el-col class="layoutfontsize2222">
              <el-col class="layoutfontsize-font">关于我们</el-col>
              <el-col class="layoutfontsize-font">联系我们</el-col>
              <el-col class="layoutfontsize-font">消息</el-col>
              <el-col class="layoutfontsize-font">支持</el-col>
              <el-col class="layoutfontsize-font">成为我们合作伙伴</el-col>
            </el-col>
          </el-col>
        </el-row>
        <!-- 右边 -->
      </el-row>
      <el-row class="box-frame745">
        <!-- 底部上 -->
        <el-col class="border-top">
          <el-col class="border-fontsize">
           <span class="border-fontsize11">© Copyright 2022 © SLEEPON All Rights Reserved   <span class="border-fontsiz21">Terms & Conditions 条款</span>
           <span class="border-fontsiz31">Privacy policy 隐私</span></span>
          </el-col>
          <el-col class="borderimage">
              <el-image src="/homepage/Ellipse.jpg" alt="" class="borderimage222"/>
              <el-image src="/homepage/Ellipse.jpg" alt="" class="borderimage222"/>
              <el-image src="/homepage/Ellipse.jpg" alt="" class="borderimage222"/>
              <el-image src="/homepage/Ellipse.jpg" alt="" class="borderimage222"/>

          </el-col>
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
  z-index: 1501;
}
.mxg-header-fixed {
  position: fixed;
}
.mxg-header .mxg-nav {
  position: relative;
  max-width: 1600px;
  margin: auto;
  padding: 60px 50px 161px 60px;
}

.el-menu .el-menu--horozontal {
  border-bottom: 0px;
  margin-top: -10px;
}
.mxg-navleft {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  width: 451.27px;
  height: 100%;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
.navlefttitle {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  width: 451.27px;
}
.mxg-navlefttitleimg {
  width: 143.83px;
  height: 42px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
.logfontsize {
  width: 451.27px;
  height: 24px;
  /* 中文-标准/正文2-16pt/正文2_Regular */
  font-family: "Alibaba PuHuiTi";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  /* 浅色模式文本/Body Text */
  color: #3a3543;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
}
.mxg-navmiddle {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 256px;
  height: 46px;
}
.mxgclass {
  width: 46px;
  height: 46px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
.mxg-input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  width: 242px;
  height: 32px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
.el-input__inner::placeholder {
  position: absolute;
  left: 3.31%;
  right: 9.92%;
  top: 0%;
  bottom: 0%;
  /* Desktop H6 */
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  /* or 138% */
 display: flex;
  align-items: center;
 /* Black Secondary */
 color: #3a3543;
  background: #f2f1f3;
}
.mxg-button {
  width: 116px;
  height: 32px;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
}
.mxg-navmiddleright {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  width: 358px;
  height: 32px;
  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;
}

/deep/.el-input__inner {
  border-radius: 0px;
}
.buttonsize {
  border-left: none;
  border-radius: 0px;
}
.mxgrightsize {
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
.mxgrightsize1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  width: 61px;
  height: 110px;
}
.mxgrightsizetitle {
  width: 32px;
  height: 24px;
 /* 中文-标准/正文2-16pt/正文2_Mmedium */
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
.layoutfontsize {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
 width: 70px;
  height: 74px;
 /* Inside auto layout */
 flex: none;
  order: 1;
  flex-grow: 0;
}
.layoutfontsize-font {
  /* 中文-标准/正文3-14pt/正文3_Regular */
 font-family: "Alibaba PuHuiTi";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
 /* identical to box height, or 157% */
 /* 浅色模式文本/Body Text */
 color: #3a3543;
 /* Inside auto layout */
}
/* 中部 */
.mxgrightsize2 {
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
/* 右部 */
.mxgrightsize3 {
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
.layoutfontsize2222 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
 width: 120px;
  height: 74px;
 /* Inside auto layout */
 flex: none;
  order: 1;
  flex-grow: 0;
}
.box-frame745{
  display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 24px;

width: 1320px;
height: 71px;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
}
.border-top{
width: 1440px;
height: 1px;
/* 浅色模式文本/Disable */
background: #C1BBC9;

}
.border-fontsize{
  display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 4px;

width: 612px;
height: 22px;
/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
margin-top: 24px;
}
.border-fontsize11{
  width: 640px;
height: 22px;

/* 中文-标准/正文3-14pt/正文3_Regular */

font-family: 'Alibaba PuHuiTi';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
/* identical to box height, or 157% */


color: rgba(0, 0, 0, 0.8);


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
}
.border-fontsiz21{
  width: 158px;
height: 22px;

font-family: 'Alibaba PuHuiTi';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
/* identical to box height, or 157% */

text-decoration-line: underline;

/* 浅色模式文本/Title Text */

color: #0C0B0E;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
}
.border-fontsiz31{
  width: 122px;
height: 22px;

font-family: 'Alibaba PuHuiTi';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
/* identical to box height, or 157% */

text-decoration-line: underline;

/* 浅色模式文本/Title Text */

color: #0C0B0E;


/* Inside auto layout */

flex: none;
order: 2;
flex-grow: 0;
}
.borderimage{
  display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 24px;
margin-left:1200px;
width: 256px;
height: 46px;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
}
.borderimage222{
width: 46px;
height: 46px;
/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
}
</style>

