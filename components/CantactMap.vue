<template>
  <div>
    <div
      class="uk-section-muted uk-section uk-section-large"
      uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
    >
      <div class="uk-container">
        <div
          class="tm-grid-expand uk-child-width-1-1 uk-grid-margin uk-grid uk-grid-stack"
          uk-grid=""
        >
          <div class="uk-width-1-1@m uk-first-column">
            <div class="uk-margin-medium uk-text-center uk-scrollspy-inview">
              <div class="uk-inline">
                <img
                  alt=""
                  src="/wp-content/themes/yootheme/cache/image-59-c5c1dcb5.png"
                  sizes="(min-width: 1080px) 1080px"
                />
                <div class="tm-popover-items uk-visible@s">
                  <a
                    class="el-marker uk-position-absolute uk-transform-center  uk-marker"
                    style="top: 50%; left: 79%"
                    aria-haspopup="true"
                    aria-expanded="false"
                    ></a>
                  <div
                    style="width: 300px; left: 703.188px; top: -60.6718px"
                    uk-drop="pos: top-center;"
                    class="uk-drop uk-drop-top-center"
                  >
                    <div
                      class="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child"
                    >
                      <div
                        class="uk-card-title uk-margin-top uk-margin-remove-bottom"
                      >
                         Osilmer
                      </div>
                      <div class="el-content uk-panel uk-margin-top">
                        Room 309,Building 5, QianHai E-Hub, ShenZhen,China
                        <br />
                        <br />
                        +86 755-25827634
                        <br />
                       service@osilmer.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tm-popover-items uk-margin uk-hidden@s">
                <ul
                  id="js-bb56"
                  class="uk-switcher"
                  style="touch-action: pan-y pinch-zoom"
                >
                  <li>
                    <div
                      class="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child"
                    >
                      <h3
                        class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom"
                      >
                        SHENZHEN ONE
                      </h3>
                      <div class="el-content uk-panel uk-margin-top">
                        Room 309,Building 5, QianHai E-Hub, ShenZhen,China
                        <br />
                        <br />
                        +86 755-25827634
                        <br />
                        service@osilmer.com
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      class="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child"
                    >
                      <h3
                        class="el-title uk-card-title uk-margin-top uk-margin-remove-bottom"
                      >
                      SHENZHEN TWO
                      </h3>
                      <div class="el-content uk-panel uk-margin-top">
                        Room 1607E Education Techonology Building
                        No. 26 Zizhu Seven Road Xiangmihu Street
                        Futian DistrictE Shenzhen
                        <br />
                        <br />
                       +86 755-25827634
                        <br />
                          service@osilmer.com
                      </div>
                    </div>
                  </li>
                </ul>
                <ul
                  class="uk-dotnav uk-flex-center uk-margin"
                  uk-switcher="connect: #js-bb56; animation: uk-animation-fade;"
                >
                  <li class="uk-active">
                    <a
                      aria-expanded="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      aria-expanded="false"
                    ></a>
                  </li>
                </ul>
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
  name: 'CantactMap'
}
</script>
<style lang="scss" scoped>
.uk-section-large {
  padding: 0;
@include for-desktop{
  padding: 0;
}
}
.uk-marker{
 width: 13px;
 height: 13px;
}

</style>
