<template>
  <div>
    <div
      class="uk-section-default uk-light "
      tm-header-transparent="light"
      uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-slide-bottom-medium; delay: false;"
    >
      <div
        :style = backgroundStyles
        class="uk-background-norepeat uk-background-cover uk-background-top-center uk-section uk-section-large"
        data-src=""
        uk-img
      >
        <div class="uk-container uk-container-expand">
          <div class="tm-header-placeholder uk-margin-remove-adjacent"></div>
          <div class="uk-margin uk-container uk-container-large">
            <div class="tm-grid-expand uk-child-width-1-1" uk-grid>
              <div class="uk-width-1-1@m">
                <h1
                  class="uk-heading-small uk-width-xlarge uk-text-left fontsize2"
                  id="page#0-0-0-0"
                  uk-scrollspy-class
                  style="font-size:42px"
                >
                  Let music activate your life
                </h1>
                <p class="fontsize2  uk-text-left "  style="color:#fff">welcome to be the osmiler community. where music fans<br/>can find create download. enjoy and share music</p>
                <p style="color:#fff" class="fontsize2  uk-text-left"> check out the latest list of music lovers around the world </p>
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
                    <nuxt-img
                      src="/wp-content/themes/yootheme/cache/music-vinyl-70a316b9.png"
                      sizes="sm:100vw md:50vw lg:900px"
                      format="webp"
                      quality="80"
                      width="900"
                      height="630"
                      class="el-image"
                      loading="lazy"
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
    <MusicDownload/>
    <div
      class="uk-section-muted uk-section uk-section-large"
      uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      style="background:#0c0b0e;color: #fff;"
    >
      <div class="uk-container">
         <div class="tm-grid-expand uk-child-width-1-1 uk-grid-margin" uk-grid>
          <div class="uk-width-1-1@m">
            <h2
              class="uk-width-xlarge uk-margin-auto uk-text-center"
              uk-scrollspy-class
              style="font-family: osmiler-title;font-size: 32px;"
            >
              All music downloads
            </h2>
            <!-- <div class="uk-divider-icon" uk-scrollspy-class style="color:#fff"></div> -->
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
                  <th class="uk-text-left@m uk-text-center">Speed/Strength</th>
                  <th class="uk-text-right@m uk-text-nowrap" style="color:#fff">audition/Download</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="el-item"
                  v-for="(item, index) in mp3_info"
                  :key="index"
                >
                  <td class="uk-text-nowrap uk-table-shrink">
                    <div class="el-meta uk-text-muted" style="color:#fff !important">{{ item.mins }}</div>
                  </td>
                  <td>
                    <div class="el-title uk-h4" style="color:#fff">{{ item.music_name }}</div>
                  </td>
                  <td>
                    <div class="el-content uk-panel uk-text-meta" style="color:#fff">
                      {{ item.speed }}
                    </div>
                  </td>

                  <td class="uk-text-nowrap uk-text-right@m uk-table-shrink" >
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
                            : require('../static/icons/ic_play.png')
                        "
                      />
                    </a>
                    <a
                      class="el-link uk-button uk-button-primary"
                      :href="item.music_zip"
                      download
                    >Download
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style="font-size:16px" class="pfontsize">Note:The speed of the music is related to the vibration of the toothbrush（the faster,the stonger/the slower，the genteler)</p>
          </div>
        </div>
      </div>
    </div>
<CopyrightNotice/>
<MusicQuarter/>
<MusicContact/>
  </div>
</template>

<script type="module">
import MusicDownload from '~/components/Music/MusicDownload.vue'
import MusicQuarter from '~/components/Music/MusicQuarter.vue'
import CopyrightNotice from '~/components/Music/CopyrightNotice.vue'
import MusicContact from '~/components/Music/MusicContact.vue'
// import '/static/wp-content/themes/yootheme/vendor/assets/uikit/dist/js/uikit-icons-union-dental.min.js'
// // import '/static/wp-content/themes/yootheme/vendor/assets/uikit/dist/js/uikit.min.js'
export default {
  name: 'MuSic',
  computed: {
    backgroundStyles() {
      const imgUrl = this.$img('/wp-content/themes/yootheme/cache/music-hero-4f873de3.jpeg', { width: 100 })
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
    return {
      audio: null,
      mp3_info: [
       {
          id: 1,
          music_name: 'Last Drunk',
          mins: '1:50',
          speed: '70/soft',
          music_url: '/wp-content/uploads/2022/05/LastDrunk.mp3',
          music_zip: '/wp-content/uploads/2022/05/LastDrunk.zip'
        },
        {
          id: 2,
          music_name: 'LoveLetter',
          mins: '1:20',
          speed: '72/soft',
          music_url: '/wp-content/uploads/2022/05/LoveLetter.mp3',
          music_zip: '/wp-content/uploads/2022/05/LoveLetter.zip'
        },
        {
          id: 3,
          music_name: 'Childhood',
          mins: '1:45',
          speed: '73/soft',
          music_url: '/wp-content/uploads/2022/05/Childhood.mp3',
          music_zip: '/wp-content/uploads/2022/05/Childhood.zip'
        },
        {
          id: 4,
          music_name: 'Time Tunnel',
          mins: '1:42',
          speed: '75/soft',
          music_url: '/wp-content/uploads/2022/05/TimeTunnel.mp3',
          music_zip: '/wp-content/uploads/2022/05/TimeTunnel.zip'
        },
        {
          id: 5,
          music_name: 'Open your eyes',
          mins: '1:51',
          speed: '80/soft',
          music_url: '/wp-content/uploads/2022/05/Openyoureyes.mp3',
          music_zip: '/wp-content/uploads/2022/05/Openyoureyes.zip'
        },

        {
          id: 6,
          music_name: 'Drama Club',
          mins: '1:37',
          speed: '85/standard',
          music_url: '/wp-content/uploads/2022/05/DramaClub.mp3',
          music_zip: '/wp-content/uploads/2022/05/DramaClub.zip'
        },
        {
          id: 7,
          music_name: 'Boulevard',
          mins: '1:26',
          speed: '90/standard',
          music_url: '/wp-content/uploads/2022/05/Boulevard.mp3',
          music_zip: '/wp-content/uploads/2022/05/Boulevard.zip'
        },
              {
          id: 8,
          music_name: 'daylight',
          mins: '2:08',
          speed: '90/soft',
          music_url: '/wp-content/uploads/2022/05/daylight.mp3',
          music_zip: '/wp-content/uploads/2022/05/daylight.zip'
        },
           {
          id: 9,
          music_name: 'Tropical Fish',
          mins: '1:51',
          speed: '95/standard',
          music_url: '/wp-content/uploads/2022/05/TropicalFish.mp3',
          music_zip: '/wp-content/uploads/2022/05/TropicalFish.zip'
        },
              {
          id: 10,
          music_name: 'Pump It Up',
          mins: '2:06',
          speed: '122/strong',
          music_url: '/wp-content/uploads/2022/05/PumpItUp.mp3',
          music_zip: '/wp-content/uploads/2022/05/PumpItUp.zip'
        },
        {
          id: 11,
          music_name: 'Feeling Myself',
          mins: '2:14',
          speed: '126/strong',
          music_url: '/wp-content/uploads/2022/05/FeelingMyself.mp3',
          music_zip: '/wp-content/uploads/2022/05/FeelingMyself.zip'
        }
      ],
      isPlaying: false,
      isActive: true,
      playingId: -1
      // uikitdom: null
    }
  },
  components: {
    MusicDownload,
    MusicQuarter,
    CopyrightNotice,
    MusicContact
  },
  mounted() {
    this.audio = new Audio()
    // this.uikitdom = this.$uikit.sticky('#sticky')
    // this.$uikit.util.on('#sticky', 'active', () => {
    //   // do something
    //   console.log('active')
    // })
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
<style lang="scss" scoped>
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

.uk-text-center {
  color: #fff;
}


// .uk-table td{
//    padding: 16px 20px;
// }\

.fontsize2 {
 margin: 0 15px;
 @include for-desktop {
 margin: 0 10px;
 }
}
.pfontsize{
  font-size: 16px;
  padding: 0 10px;
  @include for-desktop{
  padding: 0 ;
  }
}


.uk-section-large{
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>
