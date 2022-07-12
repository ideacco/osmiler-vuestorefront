<!-- 组件-联系我们 -->
<template>
  <div>
        <div class="uk-section-default uk-section uk-padding-remove-vertical uk-flex uk-flex-middle"
            uk-height-viewport="offset-top: true; offset-bottom: 20;">
            <div class="uk-width-1-1">
                <div class="uk-margin-remove-top uk-margin-remove-bottom tm-grid-expand uk-child-width-1-1 uk-grid-margin uk-margin-remove-top uk-margin-remove-bottom"
                    uk-grid>
                    <div>
                        <div uk-slideshow="ratio: false;" class="uk-margin">
                            <div class="uk-position-relative">
                                <ul class="uk-slideshow-items"
                                    uk-height-viewport="offset-top: true; ">
                                    <li class="el-item">
                                        <img src="/wp-content/themes/yootheme/cache/osmiler_42.jpg"
                                            class="el-image"
                                            alt
                                            style="top:50%"
                                            uk-cover
                                      >
                                    </li>
                                    <li class="el-item">
                                        <img src="/wp-content/themes/yootheme/cache/x2.jpg"
                                            class="el-image"
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
  </div>
</template>

<script>
export default {
  name: 'AboutosmilerSisan'
}
</script>

<style lang="scss" scoped>

.slideriht{
width: 20px;
height: 20px;
background: rgba(255, 255, 255, 0.85);
border-radius: 10px;
padding-left: 0px;
margin-right: 0px;

}
</style>
