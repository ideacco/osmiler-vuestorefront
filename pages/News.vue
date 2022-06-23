<template>
  <div>
    <el-row class="conatactbox">
      <el-col class="conatactbox-bigone">
        <el-col class="conatactbox-bigonetitle">标题</el-col>
        <el-col class="conatactbox-bigonetitleone"
        >09/23/2021 | SLEEPON | News&Updates | 2 Comments</el-col
        >
        <el-col class="conatactbox-bigonetitlebox"></el-col>
        <el-col class="conatactbox-bigonetitleboxfont-size"
        >HRV Hi everyone, It is our pleasure
        </el-col>
        <el-col class="boxbutton">
          <el-col class="boxbuttonone">
            <el-col class="boxbuttontwo">Read me</el-col>
          </el-col>
        </el-col>
      </el-col>

      <el-col class="conatactbox-bigone" style="margin-top: 828px">
        <el-col class="conatactbox-bigonetitle">标题</el-col>
        <el-col class="conatactbox-bigonetitleone"
        >09/23/2021 | SLEEPON | News&Updates | 2 Comments</el-col
        >
        <el-col class="conatactbox-bigonetitlebox"></el-col>
        <el-col class="conatactbox-bigonetitleboxfont-size"
        >HRV Hi everyone, It is our pleasure
        </el-col>
        <el-col class="boxbutton">
          <el-col class="boxbuttonone">
            <el-col class="boxbuttontwo">Read me</el-col>
          </el-col>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'NewS'
}
</script>
<style lang="scss" scoped>
.conatactbox {
  position: relative;
  height: 1750px;
  background: red;
  .conatactbox-bigone {
    position: absolute;
    width: 900px;
    height: 707px;
    left: 270px;
    top: 193px;
    background: #ffffff;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08);
    border-radius: 16px;
    .conatactbox-bigonetitle {
      position: absolute;
      width: 48px;
      height: 32px;
      left: 41px;
      top: 47px;
      /* 中文-标准/四级标题/四级标题_Regular */
      font-family: 'Alibaba PuHuiTi';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
      /* identical to box height, or 133% */
      color: #000000;
    }
    .conatactbox-bigonetitleone {
      position: absolute;
      width: 362px;
      height: 22px;
      left: 41px;
      top: 89px;
      /* 中文-标准/正文3-14pt/正文3_Regular */
      font-family: 'Alibaba PuHuiTi';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      /* identical to box height, or 157% */
      /* 浅色模式文本/Default in Field */
      color: #6f6b78;
    }
    .conatactbox-bigonetitlebox {
      position: absolute;
      width: 818px;
      height: 383px;
      left: 41px;
      top: 121px;
      background: #c4c4c4;
    }
    .conatactbox-bigonetitleboxfont-size {
      position: absolute;
      width: 111px;
      height: 66px;
      left: 41px;
      top: 533px;
      /* 中文-标准/正文3-14pt/正文3_Regular */
      font-family: 'Alibaba PuHuiTi';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      /* or 157% */
      /* 浅色模式文本/Default in Field */
      color: #6f6b78;
    }
    .boxbutton {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 10px 28px;
      position: absolute;
      width: 124px;
      height: 44px;
      left: 41px;
      top: 617px;
      /* 辅助色/基础/Base_20 */
      border: 1px solid #d5d2da;
      border-radius: 22px;
    }
    .boxbuttonone {
      padding: 0px;
      gap: 8px;
      width: 68px;
      height: 24px;
      /* Inside auto layout */
      flex: none;
      order: 0;
      flex-grow: 0;
    }
    .boxbuttontwo {
      width: 68px;
      height: 24px;

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

      /* 浅色模式文本/Body Text */

      color: #3a3543;

      /* Inside auto layout */

      flex: none;
      order: 0;
      flex-grow: 0;
    }
  }
}
</style>
