<template>
  <div>
    <div class="uk-section-muted uk-section uk-padding-remove-bottom">
      <div
        class="tm-grid-expand uk-grid-small uk-child-width-1-1 uk-grid-margin-small"
        uk-grid
      >
        <div>
          <h1
            class="uk-text-center"
            id="page#17-0-0-0"
            style="color: #4132c7; font-size: 32px"
          >
            Certificate
          </h1>
          <div
            id="page#17-0-0-1"
            class="uk-margin uk-margin-remove-top uk-margin-remove-bottom uk-text-center"
          >
            <div
              class="uk-child-width-1-2 uk-child-width-1-4@m uk-grid-small uk-grid-match"
              uk-grid
            >
              <div>
                <div
                  class="el-item uk-card uk-card-default uk-card-small uk-card-body uk-margin-remove-first-child"
                  uk-scrollspy="target: [uk-scrollspy-class];"
                >
                  <img
                    src="/wp-content/uploads/2022/05/ic_rohs.svg"
                    width="120"
                    class="el-image"
                    alt
                    uk-svg
                  />
                  <div class="el-content uk-panel uk-margin-small-top">
                    <p><span>Restriction of Hazardous Substances</span></p>
                  </div>
                </div>
              </div>
              <div>
                <div
                  class="el-item uk-card uk-card-default uk-card-small uk-card-body uk-margin-remove-first-child"
                  uk-scrollspy="target: [uk-scrollspy-class];"
                >
                  <img
                    src="/wp-content/uploads/2022/05/ic_ce.svg"
                    width="120"
                    class="el-image"
                    alt
                    uk-svg
                  />
                  <div class="el-content uk-panel uk-margin-small-top">
                    <p>CE certification</p>
                  </div>
                </div>
              </div>
              <div>
                <div
                  class="el-item uk-card uk-card-default uk-card-small uk-card-body uk-margin-remove-first-child"
                  uk-scrollspy="target: [uk-scrollspy-class];"
                >
                  <img
                    src="/wp-content/uploads/2022/05/ic_fda.svg"
                    width="120"
                    class="el-image"
                    alt
                    uk-svg
                  />
                  <div class="el-content uk-panel uk-margin-small-top">
                    <p>Food and Drug Administration</p>
                  </div>
                </div>
              </div>
              <div>
                <div
                  class="el-item uk-card uk-card-default uk-card-small uk-card-body uk-margin-remove-first-child"
                  uk-scrollspy="target: [uk-scrollspy-class];"
                >
                  <img
                    src="/wp-content/uploads/2022/05/ic_fc.svg"
                    width="120"
                    class="el-image"
                    alt
                    uk-svg
                  />
                  <div class="el-content uk-panel uk-margin-small-top">
                    <p>Federal Communications Commission</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tm-grid-expand uk-child-width-1-1 uk-grid-margin" uk-grid>
        <div>
          <div class="uk-hr uk-position-relative uk-margin-medium"></div>
          <div id="page#17-1-0-1"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CertifiCate',
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.uk-padding-remove-bottom{
  min-height: 680px;
  @include for-desktop{
  min-height: 268px;
  }
}
</style>
