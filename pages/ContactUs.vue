<template>
  <div>
    <el-row class="conatactbox">
      <el-col>
        <h1 class="conatactboxh1">Contact US</h1>
      </el-col>
      <el-col>
        <p class="conatactboxp">
          If you have questions or concerns then please do not hesitate to get in contact with us.
          We would love to hear from you, contact us on:
        </p>
      </el-col>
      <el-row class="conatactbox-twobox">
        <el-col class="conatactbox-twobox-one">
          <el-image src="/homepage/Ellipse.jpg" alt="" class="elispse1" />
          <el-col class="elcolelispse2"> Distribution </el-col>
          <el-col class="elcolelispse325"> cooperation@osmile.com </el-col>
        </el-col>
        <el-col class="conatactbox-twobox-one">
          <el-image src="/homepage/Ellipse.jpg" alt="" class="elispse1" />
          <el-col class="elcolelispse2"> Distribution </el-col>
          <el-col class="elcolelispse325"> cooperation@osmile.com </el-col>
        </el-col>
        <el-col class="conatactbox-twobox-one">
          <el-image src="/homepage/Ellipse.jpg" alt="" class="elispse1" />
          <el-col class="elcolelispse2"> Distribution </el-col>
          <el-col class="elcolelispse325"> cooperation@osmile.com </el-col>
        </el-col>
      </el-row>
      <!-- 背景图 -->
      <el-row class="conatactbox-threebox">
        <el-image
          src="/homepage/ditu.png"
          alt="conatactbox-threebox_img"
          class="conatactbox-threebox_img"
        />
        <el-col class="conatactbox-box3-three">
          <el-col class="conatactbox-box3-esling"> </el-col>
          <el-col class="conatactbox-box4-four">
            <el-col class="conatactbox-box4-fourfont">
              <el-col></el-col>
              <p class="conatactbox-fontsize">Osmail</p>
              <p class="conatactbox-fontsize">Room 309,Building 5, QianHai E-Hub, ShenZhen,</p>
              <p class="conatactbox-fontsize">China +86</p>
              <p class="conatactbox-fontsize">755-25827634 service@sleepon.cn</p>
            </el-col>
          </el-col>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
.conatactbox {
  position: relative;
  width: 1440px;
  height: 946px;
  background: #efefef;
}
.conatactboxh1 {
  position: absolute;
  width: 204px;
  height: 46px;
  left: 619px;
  top: 54px;
  /* 中文-标准/二级标题/二级标题_Heavy */
  font-family: 'Alibaba PuHuiTi';
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 46px;
  /* identical to box height, or 121% */
  text-align: center;
  /* 浅色模式文本/Title Text */
  color: #0c0b0e;
}
.conatactboxp {
  position: absolute;
  width: 575px;
  height: 44px;
  left: 424px;
  top: 124px;
  /* 中文-标准/正文3-14pt/正文3_Regular */
  font-family: 'Alibaba PuHuiTi';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  /* or 157% */
  text-align: center;
  /* 浅色模式文本/Default in Field */
  color: #6f6b78;
}
.conatactbox-twobox {
  margin-top: 59px;
  margin-left: 125px;
  margin-right: 99px;
}
.conatactbox-twobox-one {
  margin-right: 29px;
  margin-top: 170px;
  width: 363px;
  height: 118px;
  margin-left: 10px;
  background: #ffff;
}

.conatactbox-twobox-one {
  position: relative;
}
.elispse1 {
  position: absolute;
  width: 66px;
  height: 66px;
  left: 46px;
  top: 23px;
  background: #a0a0a0;
}
.elcolelispse2 {
  position: absolute;
  width: 314px;
  height: 22px;
  left: 154px;
  top: 34px;
  width: 80px;
  height: 22px;
  font-family: 'Alibaba PuHuiTi';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  /* identical to box height, or 157% */
  /* 浅色模式文本/Title Text */
  color: #0c0b0e;
}
.elcolelispse325 {
  position: absolute;
  width: 169px;
  height: 22px;
  left: 154px;
  top: 62px;
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
.conatactbox-threebox {
  position: absolute;
  width: 1080px;
  height: 560px;
  .conatactbox-threebox_img {
    left: 182px;
    top: 24px;
  }
}

.conatactbox-box3-three {
  position: absolute;
  top: 320px;
  left: 994px;
  width: 364px;
  height: 218px;
  .conatactbox-box3-esling {
    width: 24px;
    height: 24px;
    background: #5d47ee;
    border-radius: 24px;
  }
  .conatactbox-box4-four {
    width: 364px;
    height: 188px;
    background: #ffffff;
    border-radius: 20px;
  }
  .conatactbox-box4-fourfont {
    width: 317px;
    height: 156px;
    .conatactbox-fontsize {
      margin-top: 10px;
      margin-left: 10px;
      font-family: 'Alibaba PuHuiTi';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 26px;
      /* or 144% */
      color: #000000;
    }
  }
}
</style>
