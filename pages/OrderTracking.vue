<template>
  <div>
    <div id="YQContainer" class="uk-section-muted uk-section">
      <div class="uk-container">
        <div
          class="
            tm-grid-expand
            uk-child-width-1-1 uk-grid-margin uk-grid uk-grid-stack
          "
          uk-grid=""
        >
          <div class="uk-width-1-1@m uk-first-column">
            <h1 class="uk-text-center">Order Tracking</h1>
            <h4 class="uk-text-muted uk-text-center">
              <p>
                <span style="font-weight: 400"
                  >Enter your tracking number to find out the status of your
                  order, which you can find in your order confirmation
                  email.</span
                >
              </p>
            </h4>
            <div>
              <!--单号输入框。-->
              <div
                class="uk-grid-small uk-margin-large-bottom uk-grid"
                uk-grid=""
              >
                <div class="uk-width-expand uk-first-column">
                  <input
                    class="uk-input"
                    style="border-radius: 20px"
                    type="text"
                    id="tracking_code"
                    maxlength="50"
                    placeholder="Enter your tracking number"
                    v-model="inputStr"
                  />
                </div>
                <!--用于调用脚本方法的按钮。-->
                <div class="uk-width-auto">
                  <input
                    class="uk-button uk-button-primary"
                    type="button"
                    value="TRACK"
                    @click="doTrack()"
                  />
                </div>
              </div>
              <div id="show" style="display: none">
                <div
                  class="
                    uk-align-center
                    uk-card
                    uk-card-default
                    uk-width-2xlarge
                    uk-margin-bottom
                  "
                >
                  <div
                    class="uk-card-header"
                    style="
                      background-color: #cdd2d1;
                      border-top-left-radius: 10px;
                      border-top-right-radius: 10px;
                    "
                  >
                    <div class="uk-grid-small uk-grid uk-grid-stack" uk-grid="">
                      <div class="uk-width-auto" style="margin-top: 20px">
                        <img loading="lazy" width="40" height="40" />
                      </div>
                      <div id="card_tittle" class="uk-width-expand">
                        <!-- 插入区域 -->
                      </div>
                    </div>
                  </div>
                  <div class="uk-card-body">
                    <dl
                      id="card_body"
                      class="uk-description-list uk-margin-large-left"
                    >
                      <!-- 插入区域2 -->
                    </dl>
                  </div>
                  <div class="uk-card-footer">
                    <p>
                      If you have any questions, please contact our customer
                      service agent.
                      <a href="mailto:servers@osmiler.com?subject=Hello Osmiler"
                        >servers@osmiler.com</a
                      >
                    </p>
                  </div>
                </div>
              </div>
              <div id="show_err" style="display: none">
                <div
                  class="
                    uk-align-center
                    uk-card
                    uk-card-default
                    uk-width-2xlarge
                    uk-margin-bottom
                  "
                >
                  <div
                    class="uk-card-header"
                    style="
                      background-color: #cdd2d1;
                      border-top-left-radius: 10px;
                      border-top-right-radius: 10px;
                    "
                  >
                    <div class="uk-grid-small uk-grid uk-grid-stack" uk-grid="">
                      <div class="uk-width-auto" style="margin-top: 20px">
                        <img loading="lazy" width="40" height="40" />
                      </div>
                      <div id="card_err_tittle" class="uk-width-expand"></div>
                    </div>
                  </div>
                  <div class="uk-card-body">
                    <h3>
                      Sorry, we can’t find your order. Please check the tracking
                      number you entered.
                    </h3>
                  </div>
                  <div class="uk-card-footer">
                    <p>
                      If you have any questions, please contact our customer
                      service agent.
                      <a href="mailto:servers@osmiler.com?subject=Hello Osmiler"
                        >servers@osmiler.com</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script typ="text/javascript">
  let info = ''
  let DestinationCountry = ''
  let deliveryOrderNo = ''

export default {
  name: 'OrderTracking',
  data() {
    return {
      orderStatus: false,
      req_Erro: false,
      inputStr: ''
    }
  },
  methods: {
    GetQueryString(name) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
      var r = window.location.search.substr(1).match(reg)
      if (r != null) return decodeURI(r[2])
      return null
    },
    zeroFill(i) {
      if (i >= 0 && i <= 9) {
        return '0' + i
      }
      return i
    },
    //格式化时间戳
    getTime() {
      const date = new Date() //当前时间
      const month = this.zeroFill(date.getMonth() + 1) //月
      const day = this.zeroFill(date.getDate()) //日
      const hour = this.zeroFill(date.getHours()) //时
      const minute = this.zeroFill(date.getMinutes()) //分
      const second = this.zeroFill(date.getSeconds()) //秒

      //当前时间
      const curTime =
        date.getFullYear() +
        '-' +
        month +
        '-' +
        day +
        ' ' +
        hour +
        ':' +
        minute +
        ':' +
        second
      return curTime
    },
    //UI提示
    alert(msg) {
      UIkit.notification({
        message: msg,
        status: 'danger',
        pos: 'top-center',
        timeout: 2000
      })
    },
    show_body(data) {
      var str = ''
      const card_body = document.getElementById('card_body')
      for (let i = 0; i < data.length; i++) {
        // console.log(i)
        str += `<dt class=""><span class="uk-text-bold">${data[
          i
        ].occurDatetime.substring(
          0,
          10
        )}</span> <span class="uk-text-light uk-text-muted">${data[
          i
        ].occurDatetime.substring(11)}</span></dt>
          <dd class="">
              <p>${data[i].occurLocation} ${data[i].trackingContent}</p>
          </dd>`
      }

      card_body.innerHTML = str
    },
    show_err_body(inputStr) {
      const err_tittle = document.getElementById('card_err_tittle')
      const err_str = `<div class="uk-card-badge uk-label uk-label-danger">Not found</div>
                  <h3 class="uk-card-title uk-margin-top uk-margin-remove-bottom">Tracking number: ${inputStr}</h3>
                  <p class="uk-text-meta uk-margin-remove-top">${getTime()}</p>
                  <p>From: Unknown <span class="uk-text-light uk-text-muted">———</span> To: Unknown</p>`

      err_tittle.innerHTML = err_str
    },
    doTrack(id = false) {
    const err_body = document.getElementById('show_err')
    const all_body = document.getElementById('show')
      if (id) {
        this.inputStr = id
      } else {
       this.inputStr = document.getElementById('tracking_code').value
        // inputStr = '420100289214490270334813659477'
        if (this.inputStr === '') {
          alert('Enter your number.')
          return
        }
      }
      // 查询前重置状态
      err_body.style.display = 'none'
      all_body.style.display = 'none'
      const urls = 'https://tracking.sleepon.cn/get_track'
      const ids = `?id=${this.inputStr.toString()}`
      const strs = urls.concat(ids)
      this.$axios.$post(strs,{
         id: this.inputStr.toString() ,
         dataType: 'json', //数据格式
         async: true, //是否异步请求
         timeout: 30000
     }).then((data)=>{
             if (data.data !== 'err') {
          if (data.result === '2') {
            this.orderStatus = true
            // console.log(orderStatus)
          }
           info = data.trackingList
           DestinationCountry = data.destinationCountry
           deliveryOrderNo = data.deliveryOrderNo
          // console.log('返回结果', info)
          // 先将Dom显示出来，然后填充内容
          all_body.style.display = 'inline'
          this.show_tittle()
          this.show_body(info)
        } else {
          // console.log('触发错误')
          req_Erro = true
          alert(
            "Sorry, we can't find your order. Please check the tracking number you entered."
          )
          err_body.style.display = 'inline'
          show_err_body(inputStr)
        }
     })

    },
 show_tittle() {
      const card_tittle = document.getElementById('card_tittle')
      let tittle = ''
      const label = this.orderStatus ? 'Delivered' : 'In transit'

      tittle = `<div class="uk-card-badge uk-label uk-label-success" style="padding-top:10px;">${label}</div>
      <h3 class="uk-card-title uk-margin-top uk-margin-remove-bottom">Tracking Number: <span class="uk-text" style="word-wrap:break-word;">${deliveryOrderNo}</span></h3>
      <p class="uk-text-meta uk-margin-remove-top">${this.getTime()}</p>
      <p>From: China <span class="uk-text-light uk-text-muted">———</span> To: ${DestinationCountry}</p>`

      card_tittle.innerHTML = tittle
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deeep .uk-label{
    padding-top: 10px !important;
}

</style>
