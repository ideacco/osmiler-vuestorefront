<template>
  <div>
    <div id="page#18" class="uk-visible@m uk-section-default uk-light">
      <div
        style="height: 840px;"
        :style = backgroundStyles
        class="uk-background-norepeat uk-background-cover uk-background-top-center uk-section uk-section-large uk-padding-remove-bottom"
        uk-height-viewport="offset-top: true;"
      >
        <div class="uk-container uk-container-large">
          <div
            class="uk-margin-small uk-container uk-container-large uk-padding-remove-horizontal"
          >
            <div class="tm-grid-expand uk-grid-small" uk-grid>
              <div class="uk-width-1-2@m uk-first-column">
                <h1
                  class="uk-margin-remove-vertical"
                  id="page#18-0-0-0"
                  style="color: #5a47ee; font-size: 32px"
                >
                  Color options
                </h1>
              </div>
              <div class="uk-width-1-2@m"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="page#19"
      class="uk-hidden@m uk-section-primary uk-section uk-padding-remove-vertical"
      style="background: #d4c7ff; border: none"
    >
      <div
        class="uk-grid-margin uk-margin-remove-top uk-container uk-container-large"
      >
        <div
          class="uk-margin-remove-top tm-grid-expand uk-grid-column-collapse uk-child-width-1-1"
          uk-grid
        >
          <div>
            <h1
              class="uk-margin uk-width-medium"
              id="page#19-0-0-0"
              style="font-size: 32px; color: #5a47ee"
            >
              Color options
            </h1>
          </div>
        </div>
      </div>
      <div class="tm-grid-expand uk-child-width-1-1 uk-grid-margin" uk-grid>
        <div>
          <div class="uk-margin uk-margin-remove-top uk-text-center">
            <nuxt-img
              src="/wp-content/themes/yootheme/cache/Framepeploe.jpg"
              data-width="1125"
              data-height="1152"
              class="el-image"
              alt="two brown wooden toothbrushes"
              format="webp"
              quality="80"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AutoPages',
    computed: {
    backgroundStyles() {
      const imgUrl = this.$img('/wp-content/themes/yootheme/cache/Frame1353.jpg')
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
<style lang="scss"></style>
