import Vue from 'vue'

// 只安装uikit的 icon
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
// import'/static/wp-content/themes/yootheme/vendor/assets/uikit/dist/js/uikit-icons-union-dental.min.js'
// import'/static/wp-content/themes/yootheme/vendor/assets/uikit/dist/js/uikit.min.js'

UIkit.use(Icons)
Vue.prototype.$uikit = UIkit
