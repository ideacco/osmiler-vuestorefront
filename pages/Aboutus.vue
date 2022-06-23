<template>
  <div>
    <div
      class="uk-section-default uk-section uk-section-large uk-padding-remove-top"
    >
      <div class="uk-container uk-container-expand">
        <div class="uk-container uk-container-large uk-container-expand-right">
          <div class="tm-grid-expand uk-grid-collapse" uk-grid>
            <div class="uk-grid-item-match uk-width-1-3@m" id="page#0-0-0">
              <div
                class="uk-tile-default uk-tile uk-tile-small uk-flex uk-flex-middle"
              >
                <div class="uk-panel uk-width-1-1">
                  <div
                    class="uk-h6 uk-text-primary uk-text-left@m uk-text-center"
                  >
                    About Us
                  </div>
                  <h1
                    class="uk-margin-remove-vertical uk-width-large@m uk-text-left@m uk-text-center"
                  >
                    <span></span>
                    We are committed to creating more possibilities for enjoying
                    life.
                  </h1>
                </div>
              </div>
            </div>
            <div class="uk-grid-item-match uk-width-2-3@m">
              <div class="uk-panel uk-width-1-1">
                <div
                  class="uk-visible@l uk-position-absolute uk-width-1-1"
                  style="left: -170px"
                >
                  <img
                    loading="lazy"
                    src="/wp-content/uploads/yootheme/about-us-shape-01.svg"
                    width="170"
                    height="170"
                    class="el-image"
                    alt
                    target="!*"
                  />
                </div>
                <div
                  id="page#0-0-1-1"
                  class="uk-position-relative uk-margin uk-margin-remove-top uk-text-right uk-container-item-padding-remove-right"
                >
                  <img
                    src="/wp-content/themes/yootheme/cache/Frame-1315-ya-56886d56.jpeg"
                    srcset="
                      /wp-content/themes/yootheme/cache/Frame-1315-ya-56886d56.jpeg  768w,
                      /wp-content/themes/yootheme/cache/Frame-1315-ya-d28e9925.jpeg 1024w,
                      /wp-content/themes/yootheme/cache/Frame-1315-ya-47dd6acd.jpeg 1299w,
                      /wp-content/themes/yootheme/cache/Frame-1315-ya-56886d56.jpeg 1300w
                    "
                    sizes="(min-width: 1300px) 1300px"
                    data-width="1300"
                    data-height="977"
                    class="el-image"
                    alt
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="uk-section-default uk-section">
      <div class="uk-container">
        <div class="tm-grid-expand uk-grid-margin" uk-grid>
          <div class="uk-width-1-2@m">
            <h1>Osmiler is concerned about your oral health.</h1>
          </div>
          <div class="uk-width-1-2@m">
            <div class="uk-panel uk-margin">
              <p>
                <span></span>It redefines the way of teeth cleaning with
                transforming the traditional“Vibration” cleaning mode into
                the“Music bone conduction vibration” mode.Not only do we know
                how time-consuming it is to brush our teeth, but we also know
                how boring and inefficient it can be! But let&#8217;s not forget
                the substance and necessity of it for one&#8217;s oral hygiene
                health. Osmiler is positioned to go far beyond those with a deep
                understanding of“Oral hygiene, it is also suitable for anyone
                who aspires to simple, comfortable, and innovative
                experiences.As a company that puts our community first, every
                product has been thoroughly tested to ensure safe and consistent
                use.<br />From now on, revolutionize your brushing experience.
              </p>
            </div>
            <div class="uk-panel uk-margin">
              <p><strong>Mission</strong></p>
              <p>Let everyone have a confident smile</p>
            </div>
            <div class="uk-panel uk-margin">
              <p><strong>Vision</strong></p>
              <p>Build consumers&#8217; favorite oral health brand</p>
            </div>
            <div class="uk-panel uk-margin">
              <p><strong>Value</strong></p>
              <p>Humanized service, innovative technology and unique design</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Contact />
    <MainChack />
  </div>
</template>
<script type="module">
import Contact from '~/components/Home/Contact'
import MainChack from '~/components/MainChack'
export default {
  name: 'AboutS',
  components: {
    Contact,
    MainChack
  }
}
</script>
<style lang="scss" scoped>
#page2 {
  font-family: 'osmiler-title';
  color: #3a3543;
}
</style>
