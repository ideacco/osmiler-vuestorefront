<template>
  <div>
    <div
      class="uk-section-default uk-light"
      tm-header-transparent="light"
      uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-slide-bottom-medium; delay: false;"
    >
      <div
        style="
          background-image: url('/wp-content/themes/yootheme/cache/music-hero-4f873de3.jpeg');
        "
        class="uk-background-norepeat uk-background-cover uk-background-top-center uk-section uk-section-large"
      >
        <div class="uk-container uk-container-expand">
          <div class="tm-header-placeholder uk-margin-remove-adjacent"></div>
          <div class="uk-margin uk-container uk-container-large">
            <div class="tm-grid-expand uk-child-width-1-1" uk-grid>
              <div class="uk-width-1-1@m">
                <h1
                  class="uk-heading-small uk-width-xlarge uk-text-left"
                  id="page#0-0-0-0"
                  uk-scrollspy-class
                >
                  Let music <br class="uk-visible@s" />
                  activate your life
                </h1>
              </div>
            </div>
          </div>
          <div class="uk-margin-large uk-container uk-container-large">
            <div class="tm-grid-expand uk-grid-large" uk-grid>
              <div class="uk-grid-item-match uk-flex-middle uk-width-2-3@l">
                <div class="uk-panel uk-width-1-1">
                  <div
                    class="uk-margin-large uk-text-left@m uk-text-center"
                    uk-scrollspy-class
                  >
                    <img
                      src="/wp-content/themes/yootheme/cache/music-vinyl-70a316b9.png"
                      srcset=""
                      sizes="(min-width: 900px) 900px"
                      data-width="900"
                      data-height="630"
                      class="el-image"
                      alt
                    />
                  </div>
                </div>
              </div>
              <div class="uk-grid-item-match uk-flex-middle uk-width-1-3@l">
                <div class="uk-panel uk-width-1-1">
                  <h2 class="uk-h5 uk-text-primary" uk-scrollspy-class>
                    Tracklist
                  </h2>
                  <div class="uk-overflow-auto" uk-scrollspy-class>
                    <table
                      class="uk-table uk-table-justify uk-table-small uk-table-middle"
                    >
                      <tbody>
                        <tr
                          class="el-item"
                          v-for="(item, index) in mp3_info"
                          :key="index"
                        >
                          <td class="uk-text-nowrap uk-table-shrink">
                            <div class="el-meta uk-text-meta">
                              {{ index + 1 }}
                            </div>
                          </td>
                          <td class="uk-text-nowrap uk-table-shrink">
                            <div class="el-title">{{ item.music_name }}</div>
                          </td>
                          <td
                            class="uk-text-nowrap uk-text-right uk-table-shrink"
                          >
                            <a
                              class="el-link uk-button uk-button-primary uk-button-small"
                              href="#"
                              :class="{
                                'uk-button-secondary': item.id == playingId,
                              }"
                              @click.prevent="play(item.music_url, item.id)"
                            >
                              Audition
                              <img
                                class="uk-icon-image"
                                :src="
                                  item.id == playingId && isPlaying
                                    ? require('../static/icons/vieo.png')
                                    : require('../static/icons/play.png')
                                "
                              />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="uk-section-muted uk-section uk-section-large"
      uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
    >
      <div class="uk-container">
        <div class="tm-grid-expand uk-child-width-1-1 uk-grid-margin" uk-grid>
          <div class="uk-width-1-1@m">
            <h2
              class="uk-width-xlarge uk-margin-auto uk-text-center"
              uk-scrollspy-class
            >
              All music downloads
            </h2>
            <div class="uk-divider-icon" uk-scrollspy-class></div>
          </div>
        </div>
        <div class="tm-grid-expand uk-child-width-1-1 uk-margin-large" uk-grid>
          <div class="uk-width-1-1@m">
            <table
              class="uk-table uk-table-divider uk-table-justify uk-table-middle uk-table-responsive uk-text-left@m uk-text-center"
              uk-scrollspy-class
            >
              <thead>
                <tr>
                  <th class="uk-text-left@m uk-text-center uk-text-nowrap">
                    Min
                  </th>
                  <th class="uk-text-left@m uk-text-center">Music name</th>
                  <th class="uk-text-left@m uk-text-center">速度</th>
                  <th class="uk-text-right@m uk-text-nowrap">试听/下载</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="el-item"
                  v-for="(item, index) in mp3_info"
                  :key="index"
                >
                  <td class="uk-text-nowrap uk-table-shrink">
                    <div class="el-meta uk-text-muted">{{ item.mins }}</div>
                  </td>
                  <td>
                    <div class="el-title uk-h4">{{ item.music_name }}</div>
                  </td>
                  <td>
                    <div class="el-content uk-panel uk-text-meta">
                      {{ item.speed }}
                    </div>
                  </td>

                  <td class="uk-text-nowrap uk-text-right@m uk-table-shrink">
                    <a
                      class="el-link uk-button uk-button-default"
                      href="#"
                      uk-scroll
                      :class="{ 'uk-button-secondary': item.id == playingId }"
                      @click.prevent="play(item.music_url, item.id)"
                    >try
                      <img
                        class="uk-icon-image"
                        :src="
                          item.id == playingId && isPlaying
                            ? require('../static/icons/vieo.png')
                            : require('../static/icons/play.png')
                        "
                      />
                    </a>
                    <a
                      class="el-link uk-button uk-button-primary"
                      :href="item.music_url"
                      download
                    >Download
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="module">
// import '/static/wp-content/themes/yootheme/vendor/assets/uikit/dist/js/uikit-icons-union-dental.min.js'
// // import '/static/wp-content/themes/yootheme/vendor/assets/uikit/dist/js/uikit.min.js'
export default {
  name: 'MuSic',
  data() {
    return {
      audio: null,
      mp3_info: [
        {
          id: 1,
          music_name: 'Alpha (Intro)',
          mins: '3:00',
          speed: 'fast',
          music_url: '/wp-content/uploads/2022/05/06-Up.mp3'
        },
        {
          id: 2,
          music_name: 'We are not friends (ft. Goku)',
          mins: '3:00',
          speed: 'fast',
          music_url: '/wp-content/uploads/2022/05/06-Up.mp3'
        },
        {
          id: 3,
          music_name: 'Eat your Vegetables',
          mins: '3:00',
          speed: 'fast',
          music_url: '/wp-content/uploads/2022/05/06-Up.mp3'
        },
        {
          id: 4,
          music_name: 'Power Level 500K',
          mins: '3:00',
          speed: 'fast',
          music_url: '/wp-content/uploads/2022/05/06-Up.mp3'
        }
      ],
      isPlaying: false,
      isActive: true,
      playingId: -1
      // uikitdom: null
    }
  },
  mounted() {
    this.update()
    this.audio = new Audio()
    // this.uikitdom = this.$uikit.sticky('#sticky')
    this.$uikit.util.on('#sticky', 'active', () => {
      // do something
      console.log('active')
    })
  },
  methods: {
    // uitest(){
    //   console.log('uitest',this.$uikit.sticky('#sticky'))
    // },
    play(music_url, id) {
      // 播放中,且当前点击的音乐正在播放
      if (this.isPlaying && this.playingId === id) {
        this.audio.pause()
        this.isPlaying = false
        this.playingId = -1
        // 播放中,且当前播放的音乐不是点击的音乐
      } else if (this.isPlaying && this.playingId !== id) {
        this.audio.pause()
        this.audio.src = music_url
        this.audio.play()
        this.isPlaying = true
        this.playingId = id
        // 没有播放中
      } else {
        this.audio.src = music_url
        this.audio.play()
        this.isPlaying = true
        this.playingId = id
      }
    }
  }
}
</script>
<style scoped>
/* @import '../static/wp-includes/css/dist/block-library/style.min.css';
@import '../static/wp-content/themes/yootheme/css/theme.1.css'; */

img.wp-smiley,
img.emoji {
  display: inline !important;
  border: none !important;
  box-shadow: none !important;
  height: 1em !important;
  width: 1em !important;
  margin: 0 0.07em !important;
  vertical-align: -0.1em !important;
  background: none !important;
  padding: 0 !important;
}
</style>
