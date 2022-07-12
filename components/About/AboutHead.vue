
<template>
  <div>
    <div class="uk-section-primary uk-preserve-color uk-light">
      <div
        style="background-image: url('/wp-content/themes/yootheme/cache/gongsiweijing.jpg');"
        class="
          uk-background-norepeat
          uk-background-cover
          uk-background-center-center
          uk-section
          uk-section-heigth
          uk-padding-remove-vertical
          uk-flex
          uk-flex-middle
        "
      >
        <div class="uk-width-1-1 uk-width-1-2">
          <div class="uk-container uk-textfont">
            <div class="tm-grid-expand uk-grid-margin" uk-grid>
              <div>
                <h1 style="color:black; font-family: osmiler-title">
                  About Osmiler
                </h1>
                <div class="uk-panel uk-margin uk-margin-box">
                  <p style="color:black; " class="ukfontsize" >
                    Osmiler is a company dedicated to improving oral health
                    through technology and innovation, independently developing
                    high quality, smart and fashionable oral care products ,
                    advocating the concept of oral health and a more complete
                    and effective oral care routine.Let osmiler revolutionize
                    your brushing experience.
                  </p>
                </div>
              </div>
              <div class="uk-width-1-2@m"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
export default {
  name: 'AboutHead'
}
</script>
<style lang='scss' scoped>
.uk-section-large {
  padding-bottom: 0px;
}
.uk-container {
  padding-left: 0;
  padding-right: 0;
}
.uk-section-heigth {
  height: 500px;
 @include for-desktop {
  height: 960px;
  }
}
.ukfontsize{
  margin: 0 10px;
  font-size: 16px;
  @include for-desktop {
   margin: 0 ;
  }
}
.uk-width-1-2 {
  width: 1200px;
  text-align: center;
  @include for-desktop {
    margin: auto;
    position: relative;
  }
}
.uk-panel{
  margin-top: -20px;
  @include for-desktop{
    margin-top: 0;
  }
}
.uk-first-column {
  margin-top: 80px;
  padding-left: 0;
  @include for-desktop {
   text-align: left;
   margin-top: 0px;
  }
}
.uk-grid {
  margin-left: 0px;
}
// .uk-container{
//   margin: 0  auto;
// }
.uk-textfont {
  margin-top: -280px;
}
// .uk-containerfontsize{
//   margin-left: 16px;
// }
.el-title {
  margin-left: 16px;
  @include for-desktop {
    margin-left: 0;
  }
}
.uk-grid-margin{
  margin-top: 0;
  @include for-desktop{
    margin-top:-100px;
  }
}

.uk-margin-box{
  @include for-desktop {
    width: 491px;
  }
}
.el-meta {
  margin-left: 16px;
  @include for-desktop {
    margin-left: 0;
  }
}
</style>