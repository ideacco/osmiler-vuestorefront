<template>
  <div>
    <div
      class="uk-visible@m uk-section-primary uk-cover-container uk-section uk-padding-remove-vertical uk-flex uk-flex-middle"
      tm-header-transparent="light"
      uk-height-viewport="offset-top: true;"
      style="margin-top: -64px;"
    >
      <video
        src="/homepage/Osmiler_video.mp4"
        loop
        autoplay
        muted
        playsinline
        uk-cover
      ></video>
      <div class="uk-width-1-1" >
        <div
          class="uk-container uk-container-large uk-container-expand-right uk-position-relative"
        >
          <div class="tm-header-placeholder uk-margin-remove-adjacent"></div>
          <div class="tm-grid-expand uk-grid-collapse" uk-grid>
            <div
              class="uk-grid-item-match uk-flex-middle uk-width-1-3@m"
              id="page#0-0-0"
            >
              <div class="uk-panel uk-width-1-1">
                <h1
                  class="uk-heading-medium uk-position-relative uk-margin-remove-vertical uk-text-left@m uk-text-center"
                  id="page#0-0-0-0"
                  style="z-index: 1"
                >
                  A musical revolution.
                </h1>
                <div
                  class="uk-text-primary uk-margin-medium uk-width-large uk-margin-auto-right@m uk-margin-remove-left@m uk-margin-auto uk-text-left@m uk-text-center"
                >
                  Beyond imagination, it&#8217;s the world&#8217;s first
                  electric sonic toothbrush that can listen to music.
                </div>
                <div id="page#0-0-0-2">
                  <div></div>
                </div>
                <div class="uk-margin uk-text-left@m uk-text-center">
                  <a
                    class="el-content uk-button uk-button-default"
                    uk-scroll
                    @click="myfuction()"
                  >
                    Coming soon
                  </a>
                </div>
              </div>
            </div>
            <div class="uk-width-2-3@m"></div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="page#1"
      class="uk-hidden@m uk-section-primary uk-section uk-section-small uk-padding-remove-top uk-flex uk-flex-middle"
      tm-header-transparent="light"
      uk-height-viewport="offset-top: true;"
      style="background: #411e7b"
    >
      <div class="uk-width-1-1" style="margin-top:-80px">
        <div class="tm-header-placeholder uk-margin-remove-adjacent"></div>
        <div class="tm-grid-expand uk-child-width-1-1 uk-grid-margin" uk-grid>
          <div>
            <div class="uk-margin">
              <img
                src="/wp-content/themes/yootheme/cache/Hero-ya.jpg"
                sizes="(min-width: 1125px) 1125px"
                data-width="1125"
                data-height="1086"
                class="el-image"
                alt
              />
            </div>
          </div>
        </div>
        <div class="tm-grid-expand uk-grid-collapse uk-child-width-1-1" uk-grid>
          <div class="uk-grid-item-match uk-flex-middle" id="page#1-1-0">
            <div class="uk-panel uk-width-1-1">
              <h1
                class="uk-heading-medium uk-position-relative uk-margin uk-text-center@m uk-text-center"
                id="page#1-1-0-0"
                style="top: 8px; z-index: 1"
              >
                A musical revolution.
              </h1>
              <div
                class="uk-text-primary uk-margin-medium uk-margin-remove-top uk-width-medium uk-margin-auto-right@m uk-margin-remove-left@m uk-margin-auto uk-text-left@m uk-text-center"
              >
                Beyond imagination, it&#8217;s the original electric sonic
                toothbrush that can listen to music.
              </div>
              <div class="uk-margin uk-text-left@m uk-text-center">
                <a
                  class="el-content uk-button uk-button-default"
                  uk-scroll
                  @click="myfuction()"
                >
                  Coming soon
                </a>
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
  name: 'VideoPlayback',
  data() {
    return {}
  },
  methods: {
    myfuction() {
      window.location.href =
        'https://osmiler.myshopify.com/63788810498/checkouts/c57525528cffe22429aead6ffe61d813'
    }
  }
}
</script>
<style lang="scss" scoped></style>
