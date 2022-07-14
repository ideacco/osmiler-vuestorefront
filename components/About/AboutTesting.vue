<!-- 组件-联系我们 -->
<template>
  <div>
    <div
      class="
        uk-section-default
        uk-section
        uk-padding-remove-vertical
        uk-flex
        uk-flex-middle
      "
      uk-height-viewport="offset-top: true; offset-bottom: 20;"
    >
      <div class="uk-width-1-1">
        <div
          class="
            uk-margin-remove-top uk-margin-remove-bottom
            tm-grid-expand
            uk-child-width-1-1
            uk-grid-margin
            uk-margin-remove-top
            uk-margin-remove-bottom
          "
          uk-grid
        >
          <div>
            <div uk-slideshow="ratio: false;" class="uk-margin">
              <div class="uk-position-relative" uk-slideshow="autoplay: true">
                <ul
                  class="uk-slideshow-items"
                  uk-height-viewport="offset-top: true; "
                >
                  <li class="el-item">
                    <img
                      src="/wp-content/themes/yootheme/cache/_DSD2424.jpg"
                      class="el-image"
                      alt
                      style="top: 50%"
                      uk-cover
                    />

                    <div
                      class="
                        uk-position-cover
                        uk-flex
                        uk-flex-left
                        uk-flex-middle
                        uk-container
                        uk-section
                      "
                    >
                      <div
                        class="
                          el-overlay
                          uk-panel uk-light uk-margin-remove-first-child
                        "
                      >
                        <h3
                          class="
                            el-title
                            uk-heading-small
                            uk-margin-top
                            uk-margin-remove-bottom
                          "
                        >
                          Rigorous Testing
                        </h3>
                        <div class="el-meta uk-text-lead uk-margin-top">
                          We hope that Osmiler's products will be with you for a
                          long time, so from buttons to batteries, from motor to
                          waterproof, all of them are tested for professional
                          reliability. At the same time, we will continue to
                          iterate on the product experience.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="el-item">
                    <img
                      src="/wp-content/themes/yootheme/cache/_DSD2509.jpg"
                      class="el-image"
                      uk-cover
                      style="top: 50%"
                      alt
                    />
   <div
                      class="
                        uk-position-cover
                        uk-flex
                        uk-flex-left
                        uk-flex-middle
                        uk-container
                        uk-section
                      "
                    >
                      <div
                        class="
                          el-overlay
                          uk-panel uk-light uk-margin-remove-first-child
                        "
                      >
                        <h3
                          class="
                            el-title
                            uk-heading-small
                            uk-margin-top
                            uk-margin-remove-bottom
                          "
                        >
                          Waterproof  Testing
                        </h3>
                        <div class="el-meta uk-text-lead uk-margin-top">
                        We hope that our products on the waterproof layer to bring you reliable protection, so that products accompany you through more days and nights
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="el-item">
                    <img
                      src="/wp-content/themes/yootheme/cache/_DSD2534.jpg"
                      class="el-image"
                      uk-cover
                      style="top: 50%"
                      alt
                    />
 <div
                      class="
                        uk-position-cover
                        uk-flex
                        uk-flex-left
                        uk-flex-middle
                        uk-container
                        uk-section
                      "
                    >
                      <div
                        class="
                          el-overlay
                          uk-panel uk-light uk-margin-remove-first-child
                        "
                      >
                        <h3
                          class="
                            el-title
                            uk-heading-small
                            uk-margin-top
                            uk-margin-remove-bottom
                          "
                        >
                         Drawing Testing
                        </h3>
                        <div class="el-meta uk-text-lead uk-margin-top">
                        We hope that users can get a better product experience, so we have done a lot of brush head pulling force tests to increase the use time of the product.
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div
                  class="
                    uk-position-bottom-center uk-position-medium uk-visible@s
                  "
                >
                  <ul
                    class="el-nav uk-thumbnav uk-flex-nowrap uk-flex-center"
                    uk-margin
                  >
                    <li
                      uk-slideshow-item="0"
                      class="slideriht"
                      style="margin-right: 10px"
                    ></li>
                    <li
                      uk-slideshow-item="1"
                      class="slideriht"
                      style="margin-right: 10px"
                    ></li>
                    <li
                      uk-slideshow-item="2"
                      class="slideriht"
                      style="margin-right: 10px"
                    ></li>
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
.slideriht {
  width: 15px;
  height: 15px;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 10px;
  padding-left: 0px;
  margin-right: 0px;
}
.uk-container {
  @include for-desktop {
    margin-left: 212px !important;
    height: 600px !important;
  }
}
.uk-text-lead{
  font-size: 18px !important;
  @include for-desktop{
    width: 600px;
  }

}
.uk-section{
  @include for-desktop{
  height: 604px !important;
  }
}
h3 {
    font-family: 'osmiler-title';
    font-size: 32px;
}
</style>
