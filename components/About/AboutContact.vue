<!-- 组件-联系我们 -->
<template>
  <div>
    <div class="uk-section-default uk-dark">
      <div
        :style = backgroundStyles
        class="uk-background-norepeat uk-background-cover uk-background-center-center uk-section uk-section-large"
        data-src=""
        uk-img
      >
        <div class="uk-container uk-container-expand">
          <div class="uk-grid-margin uk-container uk-container-large">
            <div class="tm-grid-expand uk-child-width-1-1" uk-grid>
              <div>
                <div
                  class="uk-panel uk-text-lead uk-position-relative uk-margin uk-width-medium uk-text-left@s uk-text-left"
                  id="page#26-0-0-1"
                >
                  <p style="font-size:16px" class="uk-width-class">
                    For product or technical support inquiries, email us and we
                    will respond you soon.
                  </p>
                </div>
                <div class="uk-margin-medium uk-text-left@l uk-text-left">
                  <a
                    class="el-content uk-button uk-button-primary uk-button-small uk-flex-inline uk-flex-center uk-flex-middle"
                    href="mailto:servers@osmiler.com?subject=Hello Osmiler"
                    @click="gitcheckoumail()"
                  >
                    Contact us
                    <span class="uk-margin-small-left" uk-icon="mail"></span>
                  </a>
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
  name: 'ContactComponent',
    computed: {
          backgroundStyles() {
      const imgUrl = this.$img('/wp-content/themes/yootheme/cache/wecomle.jpg')
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
  },

  methods: {
        gitcheckoumail(){
    window.uetq = window.uetq || []
    window.uetq.push('event', 'mailto:', {})
    }
  }
}
</script>

<style lang="scss" scoped>
.uk-section-large {
  @include for-desktop{
    margin-top: 80px;
  }
}
.uk-width-class{
  width: 200px;
  @include for-desktop{
    width: 601px;
  }
}
</style>
