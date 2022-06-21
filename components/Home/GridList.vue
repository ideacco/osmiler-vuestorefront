<template>
  <div>
    <div
      id="page#2"
      class="uk-section-muted uk-section uk-section-xsmall"
      uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-slide-top-small; delay: false;"
    >
      <div class="uk-grid-margin uk-container uk-container-large">
        <div class="tm-grid-expand uk-child-width-1-1" uk-grid>
          <div class="uk-grid-item-match uk-flex-middle">
            <div class="uk-panel uk-width-1-1">
              <div id="page#2-0-0-0" class="uk-text-center">
                <div
                  class="uk-child-width-1-2 uk-child-width-1-2@s uk-child-width-1-4@l uk-grid-collapse uk-grid-match"
                  uk-grid
                >
                  <div>
                    <div
                      class="el-item uk-margin-auto uk-width-xlarge uk-panel uk-tile-default uk-margin-remove-first-child"
                      uk-scrollspy-class
                      @click="jump(1)"
                    >
                      <div>
                        <img
                          src="/wp-content/themes/yootheme/cache/01-2-9aad7647.png"
                          srcset="
                            /wp-content/themes/yootheme/cache/01-2-9aad7647.png 100w,
                            /wp-content/themes/yootheme/cache/01-2-35816000.png 120w
                          "
                          sizes="(min-width: 100px) 100px"
                          data-width="100"
                          data-height="100"
                          class="el-image"
                          alt
                        />
                      </div>
                      <div
                        class="el-title uk-card-title uk-margin-small-top uk-margin-remove-bottom"
                      >
                        Bone Conduction
                      </div>
                      <div class="el-content uk-panel uk-margin-small-top">
                        <p>Enjoy music while brushing</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      class="el-item uk-margin-auto uk-width-xlarge uk-panel uk-tile-default uk-margin-remove-first-child"
                      uk-scrollspy-class
                    >
                      <div>
                        <img
                          src="/wp-content/themes/yootheme/cache/04-2-4f7809bc.png"
                          srcset="
                            /wp-content/themes/yootheme/cache/04-2-4f7809bc.png 100w,
                            /wp-content/themes/yootheme/cache/04-2-e0541ffb.png 120w
                          "
                          sizes="(min-width: 100px) 100px"
                          data-width="100"
                          data-height="100"
                          class="el-image"
                          alt
                        />
                      </div>
                      <div
                        class="el-title uk-card-title uk-margin-small-top uk-margin-remove-bottom"
                      >
                        Music Community
                      </div>
                      <div class="el-content uk-panel uk-margin-small-top">
                        Find and share your own music
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      class="el-item uk-margin-auto uk-width-xlarge uk-panel uk-tile-muted uk-margin-remove-first-child"
                      uk-scrollspy-class
                    >
                      <div>
                        <img
                          src="/wp-content/themes/yootheme/cache/02-2-d61e5cee.png"
                          srcset="
                            /wp-content/themes/yootheme/cache/02-2-d61e5cee.png 100w,
                            /wp-content/themes/yootheme/cache/02-2-79324aa9.png 120w
                          "
                          sizes="(min-width: 100px) 100px"
                          data-width="100"
                          data-height="100"
                          class="el-image"
                          alt
                        />
                      </div>
                      <div
                        class="el-title uk-card-title uk-margin-small-top uk-margin-remove-bottom"
                        style="background: #fff"
                      >
                        Customize Music
                      </div>
                      <div class="el-content uk-panel uk-margin-small-top">
                        Upload built-in music to the toothbrush
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      class="el-item uk-margin-auto uk-width-xlarge uk-panel uk-tile-default uk-margin-remove-first-child"
                      uk-scrollspy-class
                    >
                      <div>
                        <img
                          src="/wp-content/themes/yootheme/cache/03-2-5b5fb8b6.png"
                          srcset="
                            /wp-content/themes/yootheme/cache/03-2-5b5fb8b6.png 100w,
                            /wp-content/themes/yootheme/cache/03-2-f473aef1.png 120w
                          "
                          sizes="(min-width: 100px) 100px"
                          data-width="100"
                          data-height="100"
                          class="el-image"
                          alt
                        />
                      </div>
                      <div
                        class="el-title uk-card-title uk-margin-small-top uk-margin-remove-bottom"
                      >
                        Classic mode
                      </div>
                      <div class="el-content uk-panel uk-margin-small-top">
                        3 built-in classic vibrating modes
                      </div>
                    </div>
                  </div>
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
  name: 'GridList',
  data() {
    return {}
  },
  methods: {
    jump(index) {
      console.log(this.$parent, 444)
    }
  }
}
</script>
<style lang="scss" scoped>
.uk-margin-remove-bottom,
.uk-margin-small-top {
  color: #3a3543;
}
#page\#2-0-0-0 .el-title {
  font-size: 20px;
}
.uk-section-muted {
  background: #fff;
}
.el-item {
  background: #fff !important;
}
</style>
