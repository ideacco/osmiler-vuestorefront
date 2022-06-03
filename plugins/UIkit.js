import Vue from 'vue'

// 只安装uikit的 icon
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
// import 'uikit/dist/css/uikit.min.css'

UIkit.use(Icons)
Vue.prototype.$uikit = UIkit
