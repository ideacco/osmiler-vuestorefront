<!-- 组件-联系我们 -->
<template>
  <div >
        <div class="uk-visible@s uk-section-default uk-section uk-padding-remove-vertical uk-flex uk-flex-middle "
            uk-height-viewport="offset-top: true; offset-bottom: 20;">
            <div class="uk-width-1-1">
                <div class="uk-margin-remove-top uk-margin-remove-bottom tm-grid-expand uk-child-width-1-1 uk-grid-margin uk-margin-remove-top uk-margin-remove-bottom"
                    uk-grid>
                    <div>
                        <div uk-slideshow="ratio: false;" class="uk-margin">
                            <div class="uk-position-relative" uk-slideshow="autoplay: true ;autoplayInterval: 2000" >
                                <ul class="uk-slideshow-items"
                                    uk-height-viewport="offset-top: true; ">
                                    <li class="el-item">
                                        <img src="/wp-content/themes/yootheme/cache/osmiler_42.jpg"
                                            class="el-image el-heightbox"
                                            alt
                                            style="top:50%"
                                            uk-cover
                                      >
                                    </li>
                                    <li class="el-item">
                                        <img src="/wp-content/themes/yootheme/cache/x2(1).jpg"
                                            class="el-image el-heightbox"
                                            uk-cover
                                            style="top:50%"
                                            alt
                                       >
                                    </li>
                                </ul>
                                <div class="uk-position-bottom-center uk-position-medium uk-visible@s">
                                    <ul class="el-nav uk-thumbnav uk-flex-nowrap uk-flex-center" uk-margin>
                                        <li uk-slideshow-item="0" class="slideriht" style="margin-right:10px">
                                        </li>
                                        <li uk-slideshow-item="1" class="slideriht">
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                   <div class="uk-section-default uk-section uk-hidden@s uk-section-mobile" >
                        <div class="uk-container uk-container-mobile">
                                <div class="tm-grid-expand uk-child-width-1-1 uk-grid-margin" uk-grid>
                                        <div>
                                                <div class="uk-margin"
                                                        uk-slider="autoplay: 1;  autoplayInterval: 2000;">
                                                        <div class="uk-position-relative">
                                                                <ul class="uk-slider-items uk-grid uk-grid-match">
                                                                        <li class="uk-width-1-1 uk-width-1-1@m">
                                                                                <div
                                                                                        class="el-item uk-panel uk-margin-remove-first-child">
                                                                                        <img src="/wp-content/themes/yootheme/cache/osmiler_42.jpg"
                                                                                                sizes="(min-width: 2160px) 2160px"
                                                                                                data-width="2160"
                                                                                                data-height="1215"
                                                                                                class="el-image" >
                                                                                </div>
                                                                        </li>
                                                                        <li class="uk-width-1-1 uk-width-1-1@m">
                                                                                <div
                                                                                        class="el-item uk-panel uk-margin-remove-first-child">
                                                                                        <img src="/wp-content/themes/yootheme/cache/x2(1).jpg"
                                                                                                sizes="(min-width: 1440px) 1440px"
                                                                                                data-width="1440"
                                                                                                data-height="810"
                                                                                                class="el-image" >
                                                                                </div>
                                                                        </li>
                                                                </ul>
                                                        </div>
                                                        <ul class="el-nav uk-slider-nav uk-dotnav uk-flex-center uk-margin-top uk-visible@s"
                                                                uk-margin></ul>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
  </div>
</template>
<script>
export default {
  name: 'AboutosmilerSisan'
}
</script>
<style lang="scss" scoped>
.slideriht{
width: 15px;
height: 15px;
background: rgba(255, 255, 255, 0.85);
border-radius: 10px;
padding-left: 0px;
margin-right: 0px;
}
.uk-section-mobile {
 padding: 0;
}
.uk-container-mobile{
    padding: 0;
}
.uk-grid>*{
    padding-left: 0;
}
.uk-height-1{
    height: 306px;
}

</style>
