<template>
  <div>
    <div
      id="subscribe"
      class="uk-section-muted uk-section uk-section-large uk-padding-remove-top"
    >
      <div
        class="uk-margin uk-container uk-container-large uk-container-expand-right"
      >
        <div class="tm-grid-expand">
          <div class="uk-width-1-2@m">
            <div id="page#25-0-0-0"></div>
            <div
              class="uk-panel uk-margin-remove-first-child uk-position-relative uk-margin uk-text-left@m uk-text-center "
              id="page#25-0-0-1"
              style="z-index: 1"
            >
              <h2 class="el-title uk-margin-top uk-margin-remove-bottom">
                Join the osmiler family
              </h2>
              <div class="el-content uk-panel uk-margin-top">
                <p>
                  Join our family for more details about the latest sales,
                  special products and community news
                </p>
              </div>
            </div>
            <div class="uk-text-center">
              <div class="uk-form uk-panel js-form-newsletter" >
                <div class="uk-child-width-expand@s uk-display">
                  <div>
                    <input
                      class="el-input uk-input"
                      type="email"
                      name="email"
                      v-model.lazy="emailaddress"
                      placeholder="Email address"
                      required
                    />
                  </div>
                  <div class="uk-width-auto@s" @click.prevent="sub()">
                    <button
                      class="el-button uk-button uk-button-primary"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                <input type="hidden" name="settings" value="" />
                <div class="message uk-margin uk-hidden"></div>
              </div>
            </div>
          </div>
          <div class="uk-grid-item-match uk-width-1-2@m uk-visible@m">
            <div class="uk-panel uk-width-1-1">
              <div
                class="uk-visible@m uk-position-absolute uk-width-1-1 uk-text-right"
              >
                <nuxt-img
                  src="/wp-content/themes/yootheme/cache/Frame-58-246b27e9.png"
                  format="webp"
                  quality="80"
                  loading="lazy"
                  data-width="488"
                  data-height="401"
                  class="el-image"
                  alt
                  target="!*"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUiState, useUiNotification } from '~/composables'
export default {
  name: 'SendEmali',
  setup() {
    const { send: sendNotification } = useUiNotification()
    return {
      sendNotification
    }
  },
  data() {
    return {
      emailaddress: ''
    }
  },
  methods: {
    sub() {
      if (this.emailaddress === '') {
        this.$UIkit.notification(
          "<span uk-icon='icon: question'></span> <span class=???fontsize1???>The input account is empty, please re-enter</span>"
        )
        return
      }
      window.uetq = window.uetq || []
      window.uetq.push('event', 'mailto:', {})
      this.$axios
        .$post('/v1/mailchimp/subscribed', {
          email_address: this.emailaddress
        })
        .then((res) => {
          if (res.code === 1) {
            this.$UIkit.notification(
              "<span uk-icon='icon: check'></span> <span class='uk-text-primary'>Your account has been successfully subscribed</span>"
            )
          } else if (res.code === 0) {
            this.$UIkit.notification(
              "<span uk-icon='icon: close'></span> <span  class='uk-text-primary'>Your account is already subscribed</span>"
            )
          }
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.uk-text-primary {
  color: #3a3543 !important;
}
.uk-notification-message-warning {
  background-color: #fff !important;
  color: #3a3543 !important;
}
::v-deep .fontsize1 {
  color: red;
}
::v-deep .uk-notification-message-primary {
  color: green !important;
  background-color: #fff !important;
}
::v-deep .uk-notification-message-danger {
  color: red !important;
  background-color: #fff !important;
}
h2 {
  color: #4132c7 !important;
}
#page\#21-0-0-1 .el-title {
  font-family: 'osmiler-title';
}
.el-content {
  color: #3a3543 !important;
}
.uk-light .uk-input {
  background: #fff !important;
}
.el-input {
  color: #4132c7 !important ;
}
input::-webkit-input-placeholder {
  color: #4132c7 !important;
}
/* Mozilla Firefox 4 to 18 */
input:-moz-placeholder {
  color: #4132c7 !important;
}
/* Mozilla Firefox 19+ */
input::-moz-placeholder {
  color: #4132c7 !important;
}
/* Internet Explorer 10+ */
input:-ms-input-placeholder {
  color: #4132c7 !important;
}
.el-input{
  margin-bottom: 20px;
  @include for-desktop {
  margin-bottom:0px;
  }
}
.uk-display{
@include for-desktop {
 display: flex;
  }
}
.el-button{
  width: 100%;
  @include for-desktop {
   width: 138px;
   margin-left: 30px;
  }
}
.uk-position-absolute{
  @include for-desktop {
    position: absolute !important;
    top: -80px;
    right:-850px
  }
}

</style>
