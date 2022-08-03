<!--  -->
<template>
  <div>
    <div
      class="
        uk-section-default uk-section uk-section-large uk-padding-remove-top
      "
    >
      <div class="uk-container uk-container-expand">
        <div class="uk-container uk-container-large uk-container-expand-right">
          <div class="tm-grid-expand uk-grid-collapse" uk-grid>
            <div class="uk-grid-item-match uk-width-1-3@m" id="page#0-0-0">
              <div
                class="
                  uk-tile-default uk-tile uk-tile-small uk-flex uk-flex-middle
                "
              >
                <div class="uk-panel uk-width-1-1">
                  <img
                    src="/wp-content/themes/yootheme/cache/LOGO.png"
                    alt=""
                    class="logo"
                    loading="lazy"
                  />
                  <p class="pfontsize">
                    We are committed to creating more possibilities for enjoying
                    life.
                  </p>
                  <div>
                    <h3 style="color:#0c0b0e">Vision</h3>
                    <p>Better Health, Brighten Smile</p>
                  </div>
                  <div>
                    <h3 style="color:#0c0b0e">Mission</h3>
                    <p>Healthier Oral Condition For All</p>
                  </div>
                  <div>
                    <h3 style="color:#0c0b0e">Value</h3>
                    <p>Oral care routine isn't complete, until Osmile</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="uk-grid-item-match uk-width-2-3@m">
              <div class="uk-panel uk-width-1-1">
                <div
                  id="page#0-0-1-1"
                  class="
                    uk-position-relative
                    uk-margin
                    uk-margin-remove-top
                    uk-text-right
                  "
                >
                  <img
                    src="/wp-content/themes/yootheme/cache/Frame1400.jpg"
                    sizes="(min-width: 1300px) 1300px"
                    data-width="1300"
                    data-height="977"
                    class="el-image"
                    alt
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
export default {
  name: 'AboutYuanJing',
  data() {
    return {}
  }
}
</script>
<style lang='scss' scoped>
.uk-container {
  padding: 0;
}
.uk-padding-remove-top {
  padding-bottom: 0;
}
.pfontsize {
  margin-top: 41px;
  width: 310px;
  height: 82px;
}
.logo {
  width: 137px;
  height: 40px;
  @include for-desktop {
    width: 219px;
    height: 64px;
  }
}
.uk-grid-item-match{
  background-color: #f4f0ff;
}
.uk-margin{
  @include for-desktop{
  width: 1100px;
  }
}



</style>