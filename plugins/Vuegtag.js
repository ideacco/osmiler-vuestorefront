import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app }) => {
  Vue.use(VueGtag, {
    config: { id: 'G-934Z930PQ3' },
    appName: 'app-name'
  }, app.router)
}