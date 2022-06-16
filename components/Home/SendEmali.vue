<template>
  <div>
    <div
      id="subscribe"
      class="uk-section-muted uk-section uk-section-large uk-padding-remove-top"
    >
      <div
        class="uk-margin uk-container uk-container-large uk-container-expand-right"
      >
        <div class="tm-grid-expand" uk-grid>
          <div class="uk-width-1-2@m">
            <div id="page#25-0-0-0"></div>
            <div
              class="uk-panel uk-margin-remove-first-child uk-position-relative uk-margin uk-text-left@m uk-text-center"
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
              <form class="uk-form uk-panel js-form-newsletter" method="post">
                <div class="uk-child-width-expand@s" uk-grid>
                  <div>
                    <input
                      class="el-input uk-input"
                      type="email"
                      name="email"
                      v-model="emailaddress"
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
                <input
                  type="hidden"
                  name="settings"
                  value="Q3HruOz4qbJHeGn7N5e2bw==.a2RjT1lXcTdCMHd1NUVLY1RaNmJjaCtOWWNqWFROODdxQklsRmxQSXVLYjBQNVZ0MytjaVRjdTBKVkdKS2hPS2xsU0RNNjlYNVVIaXBhS2ErWURpczJBT2pDK2hCUGJ2aURUY0F5bU9NNTFmZG5BdW5PZFhOMmFlVUtRa2RNalNWMnNHYk9LOUJqc1lyR2xUTWtXa2lyMkRYS2RUUlV4Q3VrcS9NWG00OVRzUmVpYnBSQk0wclJESWRlMFBTc3NQTHgyN2VwWFNyeXR5ZU5zZE9RRXBUYkF2SGZRMUVmWVhQb0c5Qy9HOGxIazhaRWFNd0hxKzNVbHc0bU8yVWg1T3Qrekd4UkhuK1Rmb1RQZElDV1pGYW1IbmRyaWtuczUzUllHdjQ2NVladFU9.OGFlZDE3NmQyNDI1MWZjYzcyMzA5NjBkYzdmYjJiZjEwMTkyMWQ2ZjM2ZmY4MzgwMGFlNTMzMGExNDkzMDk1Yg=="
                />
                <div class="message uk-margin uk-hidden"></div>
              </form>
            </div>
          </div>
          <div class="uk-grid-item-match uk-width-1-2@m uk-visible@m">
            <div class="uk-panel uk-width-1-1">
              <div
                class="uk-visible@m uk-position-absolute uk-width-1-1 uk-text-right"
                style="left: 150px; bottom: -240px"
              >
                <img
                  src="/wp-content/themes/yootheme/cache/Frame-58-246b27e9.png"
                  srcset="
                    /wp-content/themes/yootheme/cache/Frame-58-246b27e9.png 488w
                  "
                  sizes="(min-width: 488px) 488px"
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
export default {
  name: 'SendEmali',
  data() {
    return {
      emailaddress: ''
    }
  },
  methods: {
    sub() {
      this.$UIkit.modal.confirm('UIkit confirm!')
      this.$axios
        .$post('/v1/mailchimp/subscribed', {
          email_address: this.emailaddress
        })
        .then((res) => {
          console.log(res, 4544)
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.uk-text-primary {
  color: #3a3543 !important;
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
</style>
