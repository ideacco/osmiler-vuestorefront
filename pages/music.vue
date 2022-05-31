<template>
  <div >


      <div class="uk-section-default uk-light" tm-header-transparent="light"
            uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-slide-bottom-medium; delay: false;">
            <div style="background-image: url('/wp-content/themes/yootheme/cache/music-hero-4f873de3.jpeg');"
                class="uk-background-norepeat uk-background-cover uk-background-top-center uk-section uk-section-large">
                <div class="uk-container uk-container-expand">
                    <div class="tm-header-placeholder uk-margin-remove-adjacent"></div>
                    <div class="uk-margin uk-container uk-container-large">
                        <div class="tm-grid-expand uk-child-width-1-1" uk-grid>
                            <div class="uk-width-1-1@m">
                                <h1 class="uk-heading-small uk-width-xlarge uk-text-left" id="page#0-0-0-0"
                                    uk-scrollspy-class> Let music <br class="uk-visible@s"> activate your life </h1>
                            </div>
                        </div>
                    </div>
                    <div class="uk-margin-large uk-container uk-container-large">
                        <div class="tm-grid-expand uk-grid-large" uk-grid>
                            <div class="uk-grid-item-match uk-flex-middle uk-width-2-3@l">
                                <div class="uk-panel uk-width-1-1">
                                    <div class="uk-margin-large uk-text-left@m uk-text-center" uk-scrollspy-class>
                                        <img src="/wp-content/themes/yootheme/cache/music-vinyl-70a316b9.png"
                                            srcset="" sizes="(min-width: 900px) 900px" data-width="900"
                                            data-height="630" class="el-image" alt>
                                    </div>
                                </div>
                            </div>
                            <div class="uk-grid-item-match uk-flex-middle uk-width-1-3@l">
                                <div class="uk-panel uk-width-1-1">
                                    <h2 class="uk-h5 uk-text-primary" uk-scrollspy-class> Tracklist </h2>
                                    <div class="uk-overflow-auto" uk-scrollspy-class>
                                        <table class="uk-table uk-table-justify uk-table-small uk-table-middle">
                                            <tbody>
                                            
                                                <tr class="el-item" v-for="(item, index) in mp3_info" :key="index">
                                                
                                                    <td class="uk-text-nowrap uk-table-shrink">
                                                        <div class="el-meta uk-text-meta">{{index + 1}}</div>
                                                    </td>
                                                    <td class="uk-text-nowrap uk-table-shrink">
                                                        <div class="el-title">{{item.music_name}}</div>
                                                    </td>
                                                    <td class="uk-text-nowrap uk-text-right uk-table-shrink">
                                                        <a
                                                            class="el-link uk-button uk-button-primary uk-button-small"
                                                            href="#"
                                                            :class="{'uk-button-secondary':isPlaying}"
                                                            @click.prevent="play(item.music_url)">
                                                            Sample
                                                            </a>
                                                    </td>
                                                </tr>


                                                <tr class="el-item">
                                                    <td class="uk-text-nowrap uk-table-shrink">
                                                        <div class="el-meta uk-text-meta">01</div>
                                                    </td>
                                                    <td class="uk-text-nowrap uk-table-shrink">
                                                        <div class="el-title">Alpha (Intro)</div>
                                                    </td>
                                                    <td class="uk-text-nowrap uk-text-right uk-table-shrink"><a
                                                            class="el-link uk-button uk-button-primary uk-button-small"
                                                            href="/wp-content/uploads/2022/05/06-Up.mp3">Sample</a>
                                                    </td>
                                                </tr>
                                                <tr class="el-item">
                                                    <td class="uk-text-nowrap">
                                                        <div class="el-meta uk-text-meta">02</div>
                                                    </td>
                                                    <td class="uk-text-nowrap">
                                                        <div class="el-title"> We are not friends (ft. Goku)</div>
                                                    </td>
                                                    <td class="uk-text-nowrap uk-text-right"><a
                                                            class="el-link uk-button uk-button-primary uk-button-small"
                                                            href="#" uk-scroll>Sample</a></td>
                                                </tr>
                                                <tr class="el-item">
                                                    <td class="uk-text-nowrap">
                                                        <div class="el-meta uk-text-meta">03</div>
                                                    </td>
                                                    <td class="uk-text-nowrap">
                                                        <div class="el-title">Eat your Vegetables</div>
                                                    </td>
                                                    <td class="uk-text-nowrap uk-text-right"><a
                                                            class="el-link uk-button uk-button-primary uk-button-small"
                                                            href="#" uk-scroll>Sample</a></td>
                                                </tr>
                                                <tr class="el-item">
                                                    <td class="uk-text-nowrap">
                                                        <div class="el-meta uk-text-meta">04</div>
                                                    </td>
                                                    <td class="uk-text-nowrap">
                                                        <div class="el-title">Power Level 500K</div>
                                                    </td>
                                                    <td class="uk-text-nowrap uk-text-right"><a
                                                            class="el-link uk-button uk-button-primary uk-button-small"
                                                            href="#" uk-scroll>Sample</a></td>
                                                </tr>
                                                <tr class="el-item">
                                                    <td class="uk-text-nowrap">
                                                        <div class="el-meta uk-text-meta">05</div>
                                                    </td>
                                                    <td class="uk-text-nowrap">
                                                        <div class="el-title">Battle Sirens</div>
                                                    </td>
                                                    <td class="uk-text-nowrap uk-text-right"><a
                                                            class="el-link uk-button uk-button-primary uk-button-small"
                                                            href="#" uk-scroll>Sample</a></td>
                                                </tr>
                                                <tr class="el-item">
                                                    <td class="uk-text-nowrap">
                                                        <div class="el-meta uk-text-meta">06</div>
                                                    </td>
                                                    <td class="uk-text-nowrap">
                                                        <div class="el-title">Dance on the Moon</div>
                                                    </td>
                                                    <td class="uk-text-nowrap uk-text-right"><a
                                                            class="el-link uk-button uk-button-primary uk-button-small"
                                                            href="#" uk-scroll>Sample</a></td>
                                                </tr>
                                                <tr class="el-item">
                                                    <td class="uk-text-nowrap">
                                                        <div class="el-meta uk-text-meta">07</div>
                                                    </td>
                                                    <td class="uk-text-nowrap">
                                                        <div class="el-title">Endgame (ft. Trunks)</div>
                                                    </td>
                                                    <td class="uk-text-nowrap uk-text-right"><a
                                                            class="el-link uk-button uk-button-primary uk-button-small"
                                                            href="#" uk-scroll>Sample</a></td>
                                                </tr>
                                                <tr class="el-item">
                                                    <td class="uk-text-nowrap">
                                                        <div class="el-meta uk-text-meta">08</div>
                                                    </td>
                                                    <td class="uk-text-nowrap">
                                                        <div class="el-title">Omega (Outro)</div>
                                                    </td>
                                                    <td class="uk-text-nowrap uk-text-right"><a
                                                            class="el-link uk-button uk-button-primary uk-button-small"
                                                            href="#" uk-scroll>Sample</a></td>
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
        <div class="uk-section-muted uk-section uk-section-large"
            uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;">
            <div class="uk-container">
                <div class="tm-grid-expand uk-child-width-1-1 uk-grid-margin" uk-grid>
                    <div class="uk-width-1-1@m">
                        <h2 class="uk-width-xlarge uk-margin-auto uk-text-center" uk-scrollspy-class> All music
                            downloads </h2>
                        <div class="uk-divider-icon" uk-scrollspy-class></div>
                    </div>
                </div>
                <div class="tm-grid-expand uk-child-width-1-1 uk-margin-large" uk-grid>
                    <div class="uk-width-1-1@m">
                        <table
                            class="uk-table uk-table-divider uk-table-justify uk-table-middle uk-table-responsive uk-text-left@m uk-text-center"
                            uk-scrollspy-class>
                            <thead>
                                <tr>
                                    <th class="uk-text-left@m uk-text-center uk-text-nowrap">Min</th>
                                    <th class="uk-text-left@m uk-text-center">Music name</th>
                                    <th class="uk-text-left@m uk-text-center">速度</th>
                                    <th class="uk-text-right@m uk-text-nowrap">试听/下载</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="el-item">
                                    <td class="uk-text-nowrap uk-table-shrink">
                                        <div class="el-meta uk-text-muted">2:25</div>
                                    </td>
                                    <td>
                                        <div class="el-title uk-h4">Broly Festival</div>
                                    </td>
                                    <td>
                                        <div class="el-content uk-panel uk-text-meta">fast</div>
                                    </td>
                                    <td class="uk-text-nowrap uk-text-right@m uk-table-shrink"><a
                                            class="el-link uk-button uk-button-primary" href="#" uk-scroll>Download</a>
                                    </td>
                                </tr>
                                <tr class="el-item">
                                    <td class="uk-text-nowrap">
                                        <div class="el-meta uk-text-muted">1:50</div>
                                    </td>
                                    <td>
                                        <div class="el-title uk-h4">Destination Zero 2017</div>
                                    </td>
                                    <td>
                                        <div class="el-content uk-panel uk-text-meta">Seattle, WA</div>
                                    </td>
                                    <td class="uk-text-nowrap uk-text-right@m"><a
                                            class="el-link uk-button uk-button-primary" href="#" uk-scroll>Download</a>
                                    </td>
                                </tr>
                                <tr class="el-item">
                                    <td class="uk-text-nowrap">
                                        <div class="el-meta uk-text-muted">3:10</div>
                                    </td>
                                    <td>
                                        <div class="el-title uk-h4">Zamasu XXL 2017</div>
                                    </td>
                                    <td>
                                        <div class="el-content uk-panel uk-text-meta">Denver, CO</div>
                                    </td>
                                    <td class="uk-text-nowrap uk-text-right@m"><a
                                            class="el-link uk-button uk-button-primary" href="#" uk-scroll>Download</a>
                                    </td>
                                </tr>
                                <tr class="el-item">
                                    <td class="uk-text-nowrap">
                                        <div class="el-meta uk-text-muted">Oct 26</div>
                                    </td>
                                    <td>
                                        <div class="el-title uk-h4">Ka-me-ha-me-ha 2017</div>
                                    </td>
                                    <td>
                                        <div class="el-content uk-panel uk-text-meta">Miami, FL</div>
                                    </td>
                                    <td class="uk-text-nowrap uk-text-right@m"><a
                                            class="el-link uk-button uk-button-primary" href="#" uk-scroll>Download</a>
                                    </td>
                                </tr>
                                <tr class="el-item">
                                    <td class="uk-text-nowrap">
                                        <div class="el-meta uk-text-muted">Aug 04</div>
                                    </td>
                                    <td>
                                        <div class="el-title uk-h4">Frieza Festival</div>
                                    </td>
                                    <td>
                                        <div class="el-content uk-panel uk-text-meta">Austin, TX</div>
                                    </td>
                                    <td class="uk-text-nowrap uk-text-right@m"><a
                                            class="el-link uk-button uk-button-primary" href="#" uk-scroll>Download</a>
                                    </td>
                                </tr>
                                <tr class="el-item">
                                    <td class="uk-text-nowrap">
                                        <div class="el-meta uk-text-muted">Jul 28</div>
                                    </td>
                                    <td>
                                        <div class="el-title uk-h4">Westchester Club</div>
                                    </td>
                                    <td>
                                        <div class="el-content uk-panel uk-text-meta">London, UK</div>
                                    </td>
                                    <td class="uk-text-nowrap uk-text-right@m"><a
                                            class="el-link uk-button uk-button-primary" href="#" uk-scroll>Download</a>
                                    </td>
                                </tr>
                                <tr class="el-item">
                                    <td class="uk-text-nowrap">
                                        <div class="el-meta uk-text-muted">Jul 24</div>
                                    </td>
                                    <td>
                                        <div class="el-title uk-h4">Shamrock</div>
                                    </td>
                                    <td>
                                        <div class="el-content uk-panel uk-text-meta">Dublin, IRE</div>
                                    </td>
                                    <td class="uk-text-nowrap uk-text-right@m"><a
                                            class="el-link uk-button uk-button-primary" href="#" uk-scroll>Download</a>
                                    </td>
                                </tr>
                                <tr class="el-item">
                                    <td class="uk-text-nowrap">
                                        <div class="el-meta uk-text-muted">Jul 17</div>
                                    </td>
                                    <td>
                                        <div class="el-title uk-h4">La petite cornée</div>
                                    </td>
                                    <td>
                                        <div class="el-content uk-panel uk-text-meta">Paris, FRA</div>
                                    </td>
                                    <td class="uk-text-nowrap uk-text-right@m"><a
                                            class="el-link uk-button uk-button-primary" href="#" uk-scroll>Download</a>
                                    </td>
                                </tr>
                                <tr class="el-item">
                                    <td class="uk-text-nowrap">
                                        <div class="el-meta uk-text-muted">Jul 05</div>
                                    </td>
                                    <td>
                                        <div class="el-title uk-h4">Knaack Klub</div>
                                    </td>
                                    <td>
                                        <div class="el-content uk-panel uk-text-meta">Berlin, GER</div>
                                    </td>
                                    <td class="uk-text-nowrap uk-text-right@m"><a
                                            class="el-link uk-button uk-button-primary" href="#" uk-scroll>Download</a>
                                    </td>
                                </tr>
                                <tr class="el-item">
                                    <td class="uk-text-nowrap">
                                        <div class="el-meta uk-text-muted">Jun 30</div>
                                    </td>
                                    <td>
                                        <div class="el-title uk-h4">Markthalle</div>
                                    </td>
                                    <td>
                                        <div class="el-content uk-panel uk-text-meta">Hamburg, GER</div>
                                    </td>
                                    <td class="uk-text-nowrap uk-text-right@m"><a
                                            class="el-link uk-button uk-button-primary" href="#" uk-scroll>Download</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="uk-section-default uk-section">
            <div class="uk-container">
                <div class="tm-grid-expand uk-child-width-1-1 uk-grid-margin" uk-grid>
                    <div>
                        <audio src="/wp-content/uploads/2022/05/06-Up.mp3" controls controlslist="nodownload"
                            oncontextmenu="return false">
                            Your browser does not support the
                            <code>audio</code> element.
                        </audio>
                    </div>
                    <!-- <div>
                        <audio id="audio" height="100" width="100" style="opacity:0" preload="auto" controls hidden="true">
                            <source src="/wp-content/uploads/2022/05/06-Up.mp3" type="audio/mpeg" />
                            <embed height="50" width="100" src="/wp-content/uploads/2022/05/06-Up.mp3" />
                        </audio>
                        <button @click="test">点击播放</button>
                    </div> -->
                </div>
            </div>
        </div>
  </div>
</template>
  <script type="text/javascript"
        src="static/wp-content/themes/yootheme/vendor/yootheme/theme-highlight/assets/highlight.js"
        id="script:highlight-js"></script>
<script type="module">
// let myAuto = document.getElementById('audio')
// myAuto.play()

export default {
    data() {
      return {
          audio: null,
          mp3_info:[
            {
                music_name:'Up',
                mins:'3:00',
                speed:'fast',
                music_url:'/wp-content/uploads/2022/05/06-Up.mp3',
            },
            {
                music_name:'Up2',
                mins:'3:00',
                speed:'fast',
                music_url:'/wp-content/uploads/2022/05/06-Up.mp3',
            },
            {
                music_name:'Up3',
                mins:'3:00',
                speed:'fast',
                music_url:'/wp-content/uploads/2022/05/06-Up.mp3',
            },
            {
                music_name:'Up4',
                mins:'3:00',
                speed:'fast',
                music_url:'/wp-content/uploads/2022/05/06-Up.mp3',
            },
          ],
          isPlaying:false,
          isActive: true
      }
    },
    mounted () {
        let myAuto = this.$el.querySelector('#audio')
        this.audio = new Audio()
    },
    methods: {
        test() {
            console.log('test')
            let audio = new Audio()
            audio.src = this.mp3
            audio.play();
        },
        play(music_url) {
            console.log(music_url)

            if (this.isPlaying) {
                this.audio.pause()
                this.isPlaying = false
            } else {
                this.audio.src = music_url
                this.audio.play()
                this.isPlaying = true
            }
        }
    }
  }
</script>
<style scoped>
@import "../static/wp-includes/css/dist/block-library/style.min.css";
@import "../static/wp-content/themes/yootheme/css/theme.1.css";
@import "../static/wp-content/themes/yootheme/vendor/yootheme/theme-highlight/assets/styles/monokai.css";
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


