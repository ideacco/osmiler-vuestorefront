import Vue from 'vue'

// 安装uikit的核心代码和 icon
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

UIkit.use(Icons)
Vue.prototype.$UIkit = UIkit
