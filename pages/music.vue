<template>
  <div>
    <el-row class="Popularrecommendationbox">
      <el-col class="Popularrecommendationbox1">
        <h1 class="Popularrecommendation">热门推荐</h1>
        <el-col class="Popularrecommendationmusic">
          <el-button type="text" class="Popularrecommendationmusic-button"
            ><div class="Popularrecommendationmusic-button-text">
              上传音乐
            </div></el-button
          >
        </el-col>
      </el-col>
      <el-col class="Popularrecommendationboxlist">
        <el-col class="Popularrecommendationboxlist-one">
          <el-col class="Popularrecommendationboxlist-one-box"> </el-col>
          <el-col class="Popularrecommendationboxlist-one-font"
            >歌单名字</el-col
          >
        </el-col>
        <el-col class="Popularrecommendationboxlist-one">
          <el-col class="Popularrecommendationboxlist-one-box"> </el-col>
          <el-col class="Popularrecommendationboxlist-one-font"
            >歌单名字</el-col
          >
        </el-col>
        <el-col class="Popularrecommendationboxlist-one">
          <el-col class="Popularrecommendationboxlist-one-box"> </el-col>
          <el-col class="Popularrecommendationboxlist-one-font"
            >歌单名字</el-col
          >
        </el-col>
        <el-col class="Popularrecommendationboxlist-one">
          <el-col class="Popularrecommendationboxlist-one-box"> </el-col>
          <el-col class="Popularrecommendationboxlist-one-font"
            >歌单名字</el-col
          >
        </el-col>
        <el-col class="Popularrecommendationboxlist-one">
          <el-col class="Popularrecommendationboxlist-one-box"> </el-col>
          <el-col class="Popularrecommendationboxlist-one-font"
            >歌单名字</el-col
          >
        </el-col>
      </el-col>
    </el-row>
    <!-- 排行 -->
    <el-row class="Rankingbox">
      <el-col class="Rankingbox2">
        <h1 class="rankong-title">排行榜</h1>
<el-col class="rankong-table">
    <el-table
    :data="tableData"
    style="width: 100%"
    border
    :row-class-name="tableRowClassName"
    >
    <el-table-column
      prop="address"
      label="#"
      width="66">
      <template slot-scope="scope">
          <el-image :src="scope.row.address" :preview-src-list="[scope.row.address]" :key="scope.row.id">
            <div slot="error" class="image-slot">
               <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="歌曲标题"
      width="615">
    </el-table-column>
    <el-table-column
      prop="address"
      width="329"
      label="时长">
    </el-table-column>
       <el-table-column
      prop="address"
      width="329"
      label="作者">
    </el-table-column>
  </el-table>
</el-col>
      </el-col>
    </el-row>
  </div>
</template>
<script type="module">
export default {
    data() {
      return {
        tableData: [{
          address:require('../static/homepage/play.jpg'),
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          address:require('../static/homepage/play.jpg'),
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          address:require('../static/homepage/play.jpg'),
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          address:require('../static/homepage/play.jpg'),
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          address:require('../static/homepage/play.jpg'),
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          address:require('../static/homepage/play.jpg'),
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          address:require('../static/homepage/play.jpg'),
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
          {
          address:require('../static/homepage/play.jpg'),
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
          {
          address:require('../static/homepage/play.jpg'),
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
          {
          address:require('../static/homepage/play.jpg'),
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
          {
          address:require('../static/homepage/play.jpg'),
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
          {
          address:require('../static/homepage/play.jpg'),
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
         {
          address:require('../static/homepage/play.jpg'),
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },]


      }
    }
  }
</script>
<style lang="css" scoped>
.Popularrecommendationbox {
  margin-top: 29px;
  margin-left: 50px;
}
.Popularrecommendation {
  width: 130px;
  height: 36px;
  font-family: "Alibaba PuHuiTi";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  /* identical to box height, or 129% */
  /* 浅色模式文本/Title Text */
  color: #0c0b0e;
}
.Popularrecommendationmusic {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 28px;
  position: absolute;
  width: 144px;
  height: 44px;
  left: 1246px;
  top: 0px;
  /* 功能色/品牌/Brand_light */
  border: 2px solid #4132c7;
  border-radius: 22px;
}
.Popularrecommendationbox1 {
  position: relative;
}
.Popularrecommendationmusic-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 63px;
  height: 24px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
.Popularrecommendationmusic-button-text {
  width: 63px;
  height: 24px;
  /* 中文-标准/正文2-16pt/正文2_Regular */
  font-family: "Alibaba PuHuiTi";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  display: flex;
  align-items: center;
  text-align: right;
  /* 功能色/品牌/Brand_light */
  color: #4132c7;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
.Popularrecommendationboxlist-one {
  margin-top: 24px;
  width: 239.6px;
  height: 311px;
  margin-right: 35px;
}
.Popularrecommendationboxlist-one-box {
  width: 239.6px;
  height: 262px;
  background: #c4c4c4;
}
.Popularrecommendationboxlist-one-font {
  margin-left: 18px;
  margin-top: 17px;
  font-family: "Alibaba PuHuiTi";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  /* identical to box height, or 133% */
  /* 浅色模式文本/Title Text */
  color: #0c0b0e;
  width: 95px;
  height: 32px;
}
.Rankingbox {
  height: 1463px;
  margin-top: 29px;
  margin-left: 50px;
}
.rankong-title {
  width: 100px;
  height: 36px;
  font-family: "Alibaba PuHuiTi";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  /* identical to box height, or 129% */
  /* 浅色模式文本/Title Text */
  color: #0c0b0e;
}
.rankong-table{
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
width: 1340px;
height: 682px;
margin: 24px ;
}
.el-table--scrollable-x .el-table__body-wrapper{
  overflow-x: hidden;

}
</style>
