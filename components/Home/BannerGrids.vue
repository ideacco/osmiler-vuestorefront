<template>
  <div>
    <div id="Bone" class="uk-visible@m uk-section-default uk-light">
      <div
        style="height:860px ;"
        class="uk-background-norepeat uk-background-cover uk-background-top-left uk-section uk-padding-remove-vertical uk-flex uk-flex-middle"
        uk-height-viewport="offset-top: true;"
        data-src=""
        :style = backgroundStyles
        uk-img
      >
        <div class="uk-width-1-1">
          <div class="uk-container uk-container-expand">
            <div class="tm-grid-expand uk-grid-margin" uk-grid>
              <div class="uk-width-2-3@m"></div>
              <div class="uk-width-1-3@m">
                <h1
                  class="uk-margin-remove-vertical uk-text-left@m uk-text-center"
                  id="page3-0-1-0"
                >
                  Your senses. Set free.
                </h1>
                <div class="uk-panel uk-margin uk-text-left@m uk-text-center">
                  Our sonic toothbrush incorporates the latest bone conduction
                  technology to get rid of the tedious daily brushing time and
                  allow your teeth and whole body to enjoy music.
                </div>
                <div class="uk-margin">
                  <nuxt-img
                    src="/wp-content/themes/yootheme/cache/card-38c1e7bb.png"
                    data-width="353"
                    data-height="234"
                    class="el-image"
                    alt
                   format="webp"
                   quality="80"
                   loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="Bone" class="uk-hidden@m uk-section-secondary">
      <div
        :style = backgroundStylees
        class="uk-background-norepeat uk-background-cover uk-background-bottom-center uk-section uk-padding-remove-vertical"
        uk-height-viewport="offset-top: true;"
      >
        <div class="uk-container uk-container-xsmall">
          <div class="tm-grid-expand uk-child-width-1-1 uk-grid-margin" uk-grid>
            <div>
              <h1
                class="uk-margin-remove-vertical uk-width-medium@m uk-text-left@m uk-text-left"
                id="page#4-0-0-0"
                style="font-size: 32px !important"
              >
                Your senses. <br />Set free.
              </h1>
              <div class="uk-panel uk-margin-small uk-text-left@m uk-text-left">
                <p>
                  Our sonic toothbrush incorporates the latest bone conduction
                  technology to get rid of the tedious daily brushing time and
                  allow your teeth and whole body to enjoy music.
                </p>
              </div>
              <div id="page#4-0-0-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="uk-hidden@m uk-section-default uk-section uk-padding-remove-top uk-padding-remove-bottom"
    >
      <div class="uk-container uk-padding-remove-horizontal">
        <div class="tm-grid-expand uk-child-width-1-1 uk-grid-margin" uk-grid>
          <div>
            <div class="uk-margin">
              <nuxt-img
                src="/wp-content/themes/yootheme/cache/Frame-1344-721e9d0d.jpeg"
                data-width="960"
                data-height="462"
                class="el-image"
                alt
                format="webp"
                quality="80"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'BannerGrids',
  computed: {
    backgroundStyles() {
      const imgUrl = this.$img('/wp-content/themes/yootheme/cache/02.jpg')
      return {
        backgroundImage: `url('${imgUrl}')`,
        loading: 'lazy',
        modifiers: {
            format: 'webp',
            quality: 80
        }
      }
    },
  backgroundStylees() {
      const imgUrl = this.$img('/wp-content/themes/yootheme/cache/02-afe67aa2.jpeg')
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
</style>
