<!-- 组件-联系我们 -->
<template>
  <div>
    <div class="uk-section-default uk-dark">
      <div
        :style ="backgroundStyles"
        loading="lazy"
        class="uk-background-norepeat uk-background-cover uk-background-center-center uk-section uk-section-large"
      >
        <div class="uk-container uk-container-expand">
          <div class="uk-grid-margin uk-container uk-container-large">
            <div class="tm-grid-expand uk-child-width-1-1" uk-grid>
              <div  class="ukwidth">
                <div
                  class="uk-panel uk-text-lead uk-position-relative uk-margin uk-width-medium uk-text-left@s uk-text-left"
                  id="page#26-0-0-1"
                >
                <h1 style="color:#fff;font-family: osmiler-title;font-size: 32px;" class="fonth1">Join The Osmiler Family </h1>
                  <p style="color:#fff;font-size: 16px;" class="fontp" >
                   Join our family for more details about the latest sales, special products and community news
                  </p>
                </div>
                <div class="uk-margin-medium uk-text-left@l uk-text-left">
                  <a
                    class="el-content uk-button uk-button-primary uk-button-small uk-flex-inline uk-flex-center uk-flex-middle"
                    href="mailto:servers@osmiler.com?subject=Hello Osmiler"
                    @click="gitcheckoumail()"
                  >
                    Contact us
                    <span class="uk-margin-small-left" uk-icon="mail" style="color:#fff"></span>
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
  name: 'MusicContact',
  data() {
    return {}
  },
    computed: {
    backgroundStyles() {
      const imgUrl = this.$img('/wp-content/themes/yootheme/cache/tongyong.jpg')
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
  methods: {
        gitcheckoumail(){
    window.uetq = window.uetq || []
    window.uetq.push('event', 'mailto:', {})
    }
  }
}
</script>

<style lang="scss" scoped>
.fonth1{
 @include for-desktop {
  width: 500px;
 }
}
.uk-icon{
  color: #ffff;
}
.ukwidth{
  @include for-desktop{
    margin-left: 80px;
  }
}

.fontp{
   @include for-desktop {
  width: 900px;
 }
}
.ukwidth{
  margin: 0 15px;
  @include for-desktop{
    margin-left: 80px;
  }
}
.uk-section-large{
  padding-top: 15px;
  @include for-desktop{
   padding-top: 70px;
  }
}
</style>
