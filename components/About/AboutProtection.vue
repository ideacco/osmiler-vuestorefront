<template>
  <div>
    <div id="Bone" class="uk-visible@m uk-section-default uk-light">
      <div
        :style ="backgroundStyles"
        style="height: 860px;"
        class="
          uk-background-norepeat
          uk-background-cover
          uk-background-top-left
          uk-section
          uk-padding-remove-vertical
          uk-flex
          uk-flex-middle

        "
        loading="lazy"
        uk-height-viewport="offset-top: true;"
      >
        <div class="uk-width-1-1">
          <div class="uk-container uk-container-expand">
            <div class="tm-grid-expand uk-grid-margin" uk-grid>
              <div class="uk-width-2-3@m"></div>
              <div class="uk-width-1-3@m">
                <h1
                  class="
                    uk-margin-remove-vertical uk-text-left@m uk-text-center
                  "
                  id="page3-0-1-0"
                >
                Environmental Protection
                </h1>
                <div class="uk-panel uk-margin uk-text-left@m uk-text-center" style="font-size:18px">
                  We want to be as environmentally friendly and resource
                  efficient as possible in all our production steps. So from
                  product to packaging, we use RoHS compliant and recyclable raw
                  materials.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="Bone" class="uk-hidden@m uk-section-secondary">
      <div
        :style ="backgroundStylees"
        style="height:600px;"
        class="
          uk-background-norepeat
          uk-background-cover
          uk-background-bottom-center
          uk-section
          uk-padding-remove-vertical
        "
          loading="lazy"
      >
        <div class="uk-container uk-container-xsmall">
          <div class="tm-grid-expand uk-child-width-1-1 uk-grid-margin " uk-grid>
            <div class="uk-containerbox222">
              <h1
                class="
                  uk-margin-remove-vertical
                  uk-width-medium@m
                  uk-text-left@m
                  uk-text-left
                "
                id="page#4-0-0-0"
                style="font-size: 32px !important;"
              >
                Environmental Protection
              </h1>
              <div class="uk-panel uk-margin-small uk-text-left@m uk-text-left ">
                <p>
                  We want to be as environmentally friendly and resource
                  efficient as possible in all our production steps. So from
                  product to packaging, we use RoHS compliant and recyclable raw
                  materials.
                </p>
              </div>
              <div id="page#4-0-0-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        uk-hidden@m
        uk-section-default
        uk-section
        uk-padding-remove-top
        uk-padding-remove-bottom
      "
    ></div>
  </div>
</template>
<script>
export default {
  name: 'BannerGrids',
    computed: {
    backgroundStyles() {
      const imgUrl = this.$img('/wp-content/themes/yootheme/cache/Group1363banner.jpg')
      return {
        backgroundImage: `url('${imgUrl}')`,
        loading: 'lazy',
        modifiers: {
            format: 'webp',
            quality: 80
        }
      }
    },
    backgroundStylees(){
         const imgUrl = this.$img('/wp-content/themes/yootheme/cache/image.jpg')
      return {
        backgroundImage: `url('${imgUrl}')`,
        loading: 'lazy',
        modifiers: {
            format: 'webp',
            quality: 80
        }
      }
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss">
#page\#4-0-0-0 {
  font-family: 'osmiler-title';
  padding-top: 32px;
  font-size: 35px;
}
#page3-0-1-0 {
  font-family: 'osmiler-title';
}
.uk-containerbox222{
  margin-bottom: -60px;
  @include for-desktop{
     margin-top: 90%;
  }
}
</style>
