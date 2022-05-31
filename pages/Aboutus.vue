<template>
  <div>
    <el-row class="headerbox-image">
      <el-col class="headerbox-title">
        <el-col class="headerbox-titletap">
          <el-col class="headerbox-titletap-one">
            <h1 class="headerbox-titletap-h1">
              We are dedicated to creating better sleep products
            </h1>
            <p class="headerbox-titletap-content">
              Ant Design Landing platform has a variety of templates, download template package, you
              can use it quickly, you can also use the editor to quickly build a dedicated page for
              you.
            </p>
          </el-col>
        </el-col>
      </el-col>
      <el-col class="headerbox2-image">
        <el-image src="/homepage/backgroundimage.jpg" class="headerbox2-image23"></el-image>
      </el-col>
    </el-row>
    <el-row class="headerbox-box2">
      <el-col>
        <h1 class="headerbox-fontsize1">We’re Osmile 专注口腔健康，呵护你的口腔健康</h1>
      </el-col>
      <el-col class="headerbox-box2-center">
        <el-col>
          <el-col class="headerbox-box2-font">
            Osmile, a leading Asian all-round oral care brand owned by Guangzhou Stars Pulse Co.,
            Ltd., is committed to refining oral care experience with a comprehensive range of
            products, including sonic toothbrush, cordless water flosser, toothpaste, dental floss,
            and mouthwash.
          </el-col>
        </el-col>
        <el-col class="missibox">
          <h1 class="Missionh1">Mission</h1>
          <el-col class="Missionh1-comntent"> Healthier Oral Condition For All </el-col>
        </el-col>
        <el-col class="missibox">
          <h1 class="Missionh1">Vision</h1>
          <el-col class="Missionh1-comntent"> Osmile, Brighten Your Smile </el-col>
        </el-col>
        <el-col class="missibox">
          <h1 class="Missionh1">Tagline</h1>
          <el-col class="Missionh1-comntent">
            Oral care routine isn't complete, until Osmile
          </el-col>
        </el-col>
      </el-col>
    </el-row>
    <el-row class="headerbox-box3">
      <el-col class="headerbox-box3-font">
        <h1 class="headerbox-box3-fontsize">Stay in Touch</h1>
        <p class="headerbox-box3-fontsix">
          Be the first to receive the latest product updates, coupons, and free product trials.
        </p>
      </el-col>
      <el-col class="elinput">
        <el-input placeholder="Email address"></el-input>
      </el-col>
      <el-col class="elinputbutton">
        <el-button class="elinputbuttonfont">Subscribe</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script type="module">
export default {
  name: 'AboutS'
}
</script>
<style lang="css" scoped>
.headerbox-image {
  position: relative;
  width: 1440px;
  height: 960px;
  /* Background/White */
}
.headerbox2-image {
  width: 1440px;
  height: 960px;
  background: #ffffff;
}
.headerbox2-image23 {
  bottom: 0px;
  /* 品牌色/color-1 */
  background: #f4f0ff;
}
.headerbox-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0px 0px;
  gap: 10px;
  position: absolute;
  width: 1440px;
  height: 750px;
  left: 0px;
  top: 0px;
}
.headerbox-titletap {
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 50px;
  width: 816px;
  height: 160px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
.headerbox-titletap-one {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 20px;
  width: 816px;
  height: 160px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}
.headerbox-titletap-h1 {
  font-family: 'Alibaba PuHuiTi';
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 46px;
  /* or 121% */
  text-align: center;
  /* 浅色模式文本/Title Text */
  color: #0c0b0e;
  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}
.headerbox-titletap-content {
  font-family: 'Alibaba PuHuiTi';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */
  text-align: center;
  /* 浅色模式文本/Title Text */
  color: #0c0b0e;
  /* Inside auto layout */
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
}
.headerbox-box2 {
  position: relative;
  width: 1440px;
  height: 626px;
  left: 0px;
  top: -211px;
}
.headerbox-fontsize1 {
  position: absolute;
  left: 5.56%;
  right: 63.19%;
  top: 27.16%;
  bottom: 46.01%;
  /* 中文-标准/一级标题/一级标题_Heavy */
  font-family: 'Alibaba PuHuiTi';
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  /* or 117% */
  /* Background/Fill Blue */
  color: #5d47ee;
}
.headerbox-box2-center {
  position: relative;
  width: 600px;
  height: 339px;
  left: 730px;
  top: 170px;
}
.headerbox-box2-font {
  font-family: 'Alibaba PuHuiTi';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */
  /* 浅色模式文本/Default in Field */
  color: #6f6b78;
}
.Missionh1 {
  font-family: 'Alibaba PuHuiTi';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  /* 浅色模式文本/Title Text */
  color: #0c0b0e;
}
.Missionh1-comntent {
  font-family: 'Alibaba PuHuiTi';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  /* 浅色模式文本/Default in Field */
  color: #6f6b78;
}
.missibox {
  margin-top: 28px;
}
.headerbox-box3 {
  width: 1440px;
  height: 310px;
  background: #5d47ee;
}
.headerbox-box3-font {
  width: 377px;
  height: 148px;
  margin-top: 96px;
  margin-left: 80px;
}
.headerbox-box3-fontsize {
  font-family: 'Alibaba PuHuiTi';
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  /* identical to box height, or 117% */
  /* 深色模式文本/Anti */
  color: rgba(255, 255, 255, 0.9);
}
.headerbox-box3-fontsix {
  font-family: 'Alibaba PuHuiTi';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */
  /* 浅色模式文本/Anti */
  color: #ffffff;
}
.elinput {
  position: absolute;
  width: 261px;
  height: 55px;
  left: 730px;
  top: 100px;
}
.elinputbutton {
  position: absolute;
  top: 100px;
  left: 1038px;
  width: 143px;
  height: 38px;
  border-radius: 22px;
}
.elinputbuttonfont {
  border-radius: 22px;
  padding: 8px 24px;
  height: 38px;
}
</style>
