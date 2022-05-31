<template>
  <div class="container">
    <div class="audio-container">
      <div class="left">
        <span class="icon" v-if="isPlay == false" @click="play">
          <i class="fa fa-play play-icon" aria-hidden="true"></i>
        </span>
        <span class="icon" v-if="isPlay == true" @click="pause">
          <i class="fa fa-pause pause-icon" aria-hidden="true"></i>
        </span>
      </div>
      <div class="right">
        <div class="words flex-between">
          <div class="name">{{  audioName==null ? "未知": audioName}}</div>
          <div class="time">{{ formatCurrentTime }} / {{ formatTotalTime }}</div>
        </div>
        <div class="duration">
          <input type="range" ref="range" @input="onChange" @change="onChange" min="0" max="360" value="0">
        </div>
      </div>
    </div>
    <audio style="display: none" :src="audioURL" ref="audio" controls @timeupdate="update" @canplay="loadingFinish"></audio>
  </div>
</template>

<script>
export default {
  name: 'AudioPlayer',
  components: {},
  props: {
    audioURL: {
      type: String,
      default: '../未知',
    },
  },
  data() {
    return {
      isPlay: false, // 控制icon切换
      totalTime: 0, // 播放总时间--秒
      currentTime: 0, // 当前播放时间--秒
    }
  },
  computed: {
    formatTotalTime() {
      return this.formatTime(this.totalTime)
    },
    formatCurrentTime() {
      return this.formatTime(this.currentTime)
    },
    // 音频名称
    audioName() {
      return this.getFilename(this.audioURL)
    },
  },
  mounted() {
    this.$refs.audio.src = this.audioURL
    // 将range位置归0--如果不使用这个的话，设置了value之后没有用= =郁闷
    setTimeout(() => {
      this.$refs.range.value = 0
    }, 1)
  },
  methods: {
    // 控制音乐播放
    play() {
      const audio = this.$refs.audio
      audio.play()
      this.isPlay = true
    },
    // 控制音乐暂停
    pause() {
      const audio = this.$refs.audio
      audio.pause()
      this.isPlay = false
    },
    // 音乐缓存完毕，获取时间
    loadingFinish() {
      const totalTime = this.$refs.audio.duration
      this.totalTime = totalTime
    },
    // range--拖动进度条得到的回调
    onChange() {
      let value = this.$refs.range.value
      const persentage = ((value / 360) * 100).toFixed(1) + '%'
      this.$refs.range.style.backgroundSize = `${persentage} 100%`
      // 控制音频播放
      const timeToGo = (value / 360) * this.totalTime
      const audio = this.$refs.audio
      audio.currentTime = timeToGo
    },
    // audio--进度变化的时候的回调--改变文字
    update() {
      const audio = this.$refs.audio
      const currentTime = audio.currentTime // 当前播放时间
      this.currentTime = currentTime
      // 改变进度条的值
      const range = this.$refs.range
      range.value = ((this.currentTime / this.totalTime) * 360).toFixed(1)
      // 进度条的值改变的时候，颜色也跟着变化
      const persentage = ((this.currentTime / this.totalTime) * 100).toFixed(1) + '%'
      this.$refs.range.style.backgroundSize = `${persentage} 100%`
    },

    //辅助函数，将秒变成分秒的形式--用在计算属性中
    formatTime(value) {
      let second = 0
      let minute = 0
      minute = parseInt(value / 60)
      second = parseInt(value % 60)
      // 补0
      minute = minute < 10 ? '0' + minute : minute
      second = second < 10 ? '0' + second : second
      return minute + ':' + second
    },
    // 通过url获取filename
    getFilename(url) {
      const arr = url.split('/')
      return arr[arr.length - 1]
    },
  },
}
</script>

<style scoped>
.audio-container {
  padding: 8px 16px;
  width: 100%;
  background: #f5f6f8;
  border-radius: 2px;
  display: flex;
}
.left {
  margin-right: 16px;
}

.icon {
  display: inline-block;
  width: 28px;
  height: 28px;
  border: 2px solid #10a9ff;
  border-radius: 50%;

  text-align: center;
  font-size: 16px;
  line-height: 28px;

}
.icon:hover {
  cursor: pointer;
}
.play-icon {
  position: relative;
  left: 2px;
}
.flex-between {
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.right {
  flex: 1;
}
.words {
  margin-bottom: -1px;
}
.name {
  font-size: 14px;
  color: #333333;
  line-height: 14px;
}
.time {
  font-size: 14px;
  color: #666666;
  line-height: 14px;
}

input[type='range'] {
  outline: none;
  -webkit-appearance: none; /*清除系统默认样式*/
  width: 100% !important;
  background: -webkit-linear-gradient(#10a9ff, #10a9ff) no-repeat, #dddddd; /*背景颜色，俩个颜色分别对应上下*/
  background-size: 0% 100%; /*设置左右宽度比例，这里可以设置为拖动条属性*/
  height: 2px; /*横条的高度，细的真的比较好看嗯*/
}
/*拖动块的样式*/
input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none; /*清除系统默认样式*/
  height: 10px; /*拖动块高度*/
  width: 3px; /*拖动块宽度*/
  background: #10a9ff; /*拖动块背景*/
}
</style>
