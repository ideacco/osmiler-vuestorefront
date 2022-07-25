import Vue from 'vue'
import VueGtag from 'vue-gtag'
export default ({ app }) => {
  Vue.use(
    VueGtag,
    {
      config: { id: 'G-934Z930PQ3' }, // this is defined in my Netlify env variables together with my backend API which works
      appName: 'SleepRescue',
      bootstrap: true,
      enabled: true,
      pageTrackerScreenviewEnabled: true
    },
    app.router
  )
}