<template>
  <div>
    <div id="Community" class="uk-visible@m uk-section-default uk-light">
      <div
        class="uk-background-norepeat uk-background-cover uk-background-center-right uk-background-fixed uk-section uk-padding-remove-vertical uk-flex uk-flex-middle"
        uk-height-viewport="offset-top: true;"
        :style = backgroundStyles
      >
        <div class="uk-width-1-1">
          <div class="uk-container uk-container-large">
            <div
              class="uk-grid-margin uk-margin-remove-bottom uk-container uk-container-large"
            >
              <div
                class="uk-margin-remove-bottom tm-grid-expand uk-grid-column-collapse"
                uk-grid
              >
                <div class="uk-grid-item-match uk-flex-middle uk-width-1-2@m">
                  <div class="uk-panel uk-width-1-1">
                    <h1
                      class="uk-margin-remove-vertical uk-text-left@m uk-text-center"
                      id="page#6-0-0-0"
                      style="font-family:osmiler-title"
                    >
                      When noise turns to music.
                    </h1>
                    <div
                      class="uk-panel uk-margin uk-text-left@m uk-text-center"
                    >
                      <p>
                        Are you tired of the noise of an electric toothbrush?
                        Our sonic electric toothbrush is both a stereo and a
                        musical instrument, allowing wonderful melodies and
                        dynamic rhythms to glide between your teeth, bringing
                        excitement throughout the day.
                      </p>
                    </div>
                    <div id="page#6-0-0-2"></div>
                    <div
                      id="page#6-0-0-3"
                      class="uk-margin uk-text-left@m uk-text-center"
                    >
                      <img
                        src="/wp-content/uploads/2022/06/A24-1(1).gif"
                        class="el-image"
                        alt
                        uk-gif
                        loading="lazy"
                      />
                    </div>
                    <div id="page#6-0-0-4"></div>
                  </div>
                </div>
                <div class="uk-width-1-2@m"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="Community" class="uk-hidden@m uk-section-default">
      <div
        :style = backgroundStylees
        class="uk-background-norepeat  uk-background-cover uk-background-center-center uk-section uk-padding-remove-vertical"

      >
        <div class="uk-container uk-container-large">
          <div
            class="uk-grid-margin uk-margin-remove-bottom uk-container uk-container-large"
          >
            <div
              class="uk-margin-remove-bottom tm-grid-expand uk-grid-column-collapse uk-child-width-1-1"
              uk-grid
            >
              <div class="uk-grid-item-match uk-flex-middle uk-light">
                <div class="uk-panel uk-width-1-1">
                  <h1
                    class="uk-margin-remove-vertical uk-text-left@m uk-text-left"
                    id="page#7-0-0-0"
                    style="font-family: osmiler-title;margin-top: 15px !important;font-size: 32px;"
                  >
                    When noise turns to music.
                  </h1>
                  <div class="uk-panel uk-margin uk-text-left@m uk-text-left">
                    <p style="margin-top: -16px !important">
                      Are you tired of the noise of an electric toothbrush? Our
                      sonic electric toothbrush is both a stereo and a musical
                      instrument, allowing wonderful melodies and dynamic
                      rhythms to glide between your teeth, bringing excitement
                      throughout the day.
                    </p>
                  </div>
                  <div
                    id="page#7-0-0-2"
                    class="uk-margin uk-text-left@m uk-text-center"
                  >
                    <img
                      src="/wp-content/uploads/2022/06/A24-1(1).gif"
                      class="el-image"
                      alt
                      uk-gif
                   loading="lazy"
                    />
                  </div>
                  <div id="page#7-0-0-4"></div>
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
  name: 'CoMmunity',
  computed: {
    backgroundStyles() {
      const imgUrl = this.$img('/wp-content/themes/yootheme/cache/03.jpg')
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
      const imgUrl = this.$img('/wp-content/themes/yootheme/cache/4646dcaf.jpeg')
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
<style lang="scss" scoped>
#page\#6-0-0-0 {
  font-family: 'osmiler-title';
}
#page\#7-0-0-2 {
  width: 60%;
}
#page\#7-0-0-4 {
  height: 300px;
}
</style>
