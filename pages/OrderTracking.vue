<template>
  <div>
    <el-row class="conatactbox">
      <el-col class="conatactbox1">Order Tracking</el-col>
      <el-col class="conatactbox2">
        <p>Enter your tracking number to find out the status of your order,</p>
        <p>which you can find in your order confirmation email.</p>
      </el-col>
      <el-col class="conatactbox3">
        <el-input
          class="conatactbox4"
          type="text"
          style="border-radius: 22px"
          placeholder="Enter your tracking number"
        ></el-input>
        <el-col class="conatactbox5">
          <el-col class="conatactbox6">
            <el-col class="conatactbox7">
              <el-col class="conatactbox8">TRACK </el-col></el-col
            >
          </el-col>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
.conatactbox {
  position: relative;
  height: 600px;
  background: red;
  .conatactbox1 {
    position: absolute;
    width: 279px;
    height: 46px;
    left: 581px;
    top: 174px;
    /* 中文-标准/二级标题/二级标题_Heavy */
    font-family: "Alibaba PuHuiTi";
    font-style: normal;
    font-weight: 400;
    font-size: 38px;
    line-height: 46px;
    /* identical to box height, or 121% */
    text-align: center;
    /* 浅色模式文本/Title Text */
    color: #0c0b0e;
  }
  .conatactbox2 {
    position: absolute;
    width: 538px;
    height: 52px;
    left: 451px;
    top: 251px;
    p {
      font-family: "Alibaba PuHuiTi";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 26px;
      /* or 144% */
      text-align: center;
      /* 浅色模式文本/Title Text */
      color: #0c0b0e;
    }
  }
  .conatactbox3 {
    position: absolute;
    width: 464px;
    height: 44px;
    left: 488px;
    top: 345px;

    .conatactbox4 {
      width: 279px;
      height: 44px;
      border-radius: 22px;
      vertical-align: middle;
      ::v-deep.el-input__inner {
        border-radius: 22px;
      }
    }
    .conatactbox5 {
      padding: 0px;
      position: absolute;
      width: 169px;
      height: 44px;
      left: 294px;
      top: -4px;
      text-align: center;
      vertical-align: middle;
      .conatactbox6 {
        padding: 12px 28px;
        width: 169px;
        height: 44px;
        /* 功能色/品牌/Brand_light */
        background: #5d47ee;
        border-radius: 22px;
        /* Inside auto layout */
        flex: none;
        order: 0;
        flex-grow: 1;
      }
      .conatactbox7 {
        padding: 0px;
      }
      .conatactbox8 {
        font-family: "Alibaba PuHuiTi";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
        /* identical to box height, or 150% */
        /* 浅色模式文本/Anti */
        color: #ffffff;
        /* Inside auto layout */
      }
    }
  }
}
</style>
