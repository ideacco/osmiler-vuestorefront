<template>
  <div>
    <div
      id="subscribe"
      class="uk-section-muted uk-section uk-section-large uk-padding-remove-top"
      style="background:#f4f0ff"
    >
      <div
        class="uk-margin uk-container uk-container-large uk-container-expand-right"
      >
        <div class="tm-grid-expand" uk-grid>
          <div class="uk-width-1-2@m">
            <div id="page#21-0-0-0"></div>
            <div
              class="uk-panel uk-margin-remove-first-child uk-position-relative uk-margin uk-text-left@m uk-text-center"
              id="page#21-0-0-1"
              style="z-index: 1"
            >
              <div
                class="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom"
              >
                Subscribe to Newsletters
              </div>
              <h2 class="el-title uk-margin-top uk-margin-remove-bottom">
                We Look Forward to Welcoming <br class="uk-visible@xl" />You in
                Our Practice
              </h2>
              <div class="el-content uk-panel uk-margin-top">
                Subscribe to upcoming sales and events to receive gifts and
                special offers!
              </div>
            </div>
            <div class="uk-text-center">
              <form class="uk-form uk-panel js-form-newsletter">
                <div class="uk-child-width-expand@s" uk-grid>
                  <div>
                    <input
                      class="el-input uk-input"
                      type="email"
                      name="email"
                      placeholder="Email address"
                      required
                    />
                  </div>
                  <div class="uk-width-auto@s">
                    <button
                      class="el-button uk-button uk-button-primary"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                <input type="hidden" name="settings" value="Email address" />
                <div class="message uk-margin uk-hidden"></div>
              </form>
            </div>
          </div>
          <div class="uk-grid-item-match uk-width-1-2@m uk-visible@m">
            <div class="uk-panel uk-width-1-1">
              <div
                class="uk-visible@m uk-position-absolute uk-width-1-1"
                style="left: 240px; bottom: -220px"
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
    return {}
  }
}
</script>
<style lang="scss" scoped>
.uk-text-primary {
    color: #3a3543!important;
}
h2{
 color: #4132c7 !important;
}
#page\#21-0-0-1 .el-title {
    font-family: "osmiler-title";
}
.el-content{
   color: #3a3543!important;
}
.uk-light .uk-input{
  background: #fff !important;
}
.el-input {
 color: #4132c7!important ;
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
  color: #4132c7  !important;
}
/* Internet Explorer 10+ */
input:-ms-input-placeholder {
  color: #4132c7 !important;
}
</style>
