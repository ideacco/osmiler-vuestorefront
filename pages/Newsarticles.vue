<template>
  <div>
    <el-row class="conatactbox">
      <el-col class="conatactbox-title">
        We are dedicated to creating better sleep products
      </el-col>
      <el-col class="conatactbox-title2"
        >Written by SLEEPON on 09/23/2021. Posted in News&Updates.</el-col
      >
      <el-col class="conatactbox-title3"></el-col>
      <el-col class="conatactbox-title4"
        ><p>Hi everyone,</p>
        <p>
          It is our pleasure to announce that Sleepon’s HRV (beta) is now
          available on its app. You will be able to see the HRV data in your
          report when you update the app.
        </p>

        <p>
          Feedback and suggestions are really appreciated so that we can improve
          the App and make sure you have a better user experience.
        </p>
        <p>Thank you.</p>
        <p>Sleepon Team</p></el-col
      >
      <el-col class="conatactbox-title5">
        APP, go2sleep, hrv, sleepon, updates
      </el-col>
    </el-row>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
.conatactbox {
  position: relative;
  height: 1200px;
  background: red;
  .conatactbox-title {
    position: absolute;
    width: 816px;
    height: 92px;
    left: calc(50% - 816px / 2);
    top: 219px;
    /* 中文-标准/二级标题/二级标题_Medium */
    font-family: "Alibaba PuHuiTi";
    font-style: normal;
    font-weight: 400;
    font-size: 38px;
    line-height: 46px;
    /* or 121% */
    text-align: center;
    /* 浅色模式文本/Title Text */
    color: #0c0b0e;
  }
  .conatactbox-title2 {
    position: absolute;
    width: 816px;
    height: 24px;
    left: calc(50% - 816px / 2);
    top: 331px;
    /* 中文-标准/正文2-16pt/正文2_Regular */
    font-family: "Alibaba PuHuiTi";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */
    text-align: center;
    /* 浅色模式文本/Title Text */
    color: #0c0b0e;
  }
  .conatactbox-title3 {
    position: absolute;
    width: 818px;
    height: 383px;
    left: calc(50% - 818px / 2);
    top: 392px;
    background: #c4c4c4;
  }
  .conatactbox-title4 {
    position: absolute;
    width: 816px;
    height: 264px;
    left: calc(50% - 816px / 2);
    top: 812px;
    p {
      margin-top: 10px;
      font-family: "Alibaba PuHuiTi";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      /* or 150% */
      /* 浅色模式文本/Title Text */
      color: #0c0b0e;
    }
  }
  .conatactbox-title5 {
    position: absolute;
    width: 816px;
    height: 24px;
    left: calc(50% - 816px / 2);
    top: 1122px;

    /* 中文-标准/正文2-16pt/正文2_Regular */

    font-family: "Alibaba PuHuiTi";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    /* 品牌色/color-5 */

    color: #5d47ee;
  }
}
</style>
