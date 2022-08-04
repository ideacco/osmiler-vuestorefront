<!--  -->
<template>
  <div>
            <div class="uk-visible@m uk-section-primary" data-v-69ab7cfe="">
                <div uk-height-viewport="offset-top: true; offset-bottom: 20;"
                  class="uk-background-norepeat  uk-background-cover uk-background-center-center uk-section uk-section-large"
                  style=" height: 840px;"
                  :style = backgroundStyles
                 >
                  <div class="uk-container uk-container-large" data-v-69ab7cfe="">
                    <div  class="tm-grid-expand uk-child-width-1-1 uk-grid-margin uk-grid uk-grid-stack"
                      data-v-69ab7cfe="">
                      <div data-v-69ab7cfe="" class="uk-first-column">
                        <h1 id="page#14-0-0-0" class="uk-margin-medium uk-margin-remove-bottom uk-width-large">
                        Ultra battery life
                        </h1>
                        <div class="uk-panel uk-margin" style="display:flex">
                          <div class="uk-getukmargin"  >
                            <div >
                              <strong style="font-size:36px;">4</strong><span style="font-size: 16px;margin-left: 10px;">hours</span>
                            <p style="font-size:16px">quick charge</p>
                            </div>
                          </div>
                         <div style="height:50px;width:1px;background:#ffff;margin:18px ;" ></div>
                         <div class="uk-getukmargin"  >
                            <div >
                              <strong style="font-size:36px;">90</strong><span style="font-size: 16px;margin-left: 10px;">days</span>
                            <p style="font-size:16px">batterry life</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  <div id="Community" class="uk-hidden@m uk-section-default">
      <div
        :style = backgroundStylees
        class="uk-background-norepeat  uk-background-cover uk-background-center-center uk-section uk-padding-remove-vertical"
 style="height:596px"
      >
        <div class="uk-container uk-container-large">
          <div
            class="uk-grid-margin uk-margin-remove-bottom uk-container uk-container-large"
          >
            <div
              class="uk-margin-remove-bottom tm-grid-expand uk-grid-column-collapse uk-child-width-1-1"
              uk-grid
            >
              <div class="uk-grid-item-match uk-flex-middle uk-light">
                <div class="uk-panel uk-width-1-1" style="margin-left: 15px;margin-top: 57px;">
                  <h1
                    class="uk-margin-remove-vertical uk-text-left@m uk-text-left"
                    id="page#7-0-0-0"
                    style="font-family: osmiler-title;margin-top: 15px !important;font-size: 32px;"
                  >
                  Ultra battery life
                  </h1>
                  <div class="uk-panel uk-margin uk-text-left@m uk-text-left" style="display:flex;">
      <div class="uk-getukmargin"  >
                            <div >
                              <strong style="font-size:36px;">4</strong><span style="font-size: 16px;margin-left: 10px;">hours</span>
                            <p style="font-size:16px">quick charge</p>
                            </div>
                          </div>
                         <div style="height:50px;width:1px;background:#ffff;margin:18px ;" ></div>
                         <div class="uk-getukmargin"  >
                            <div >
                              <strong style="font-size:36px;">90</strong><span style="font-size: 16px;margin-left: 10px;">days</span>
                            <p style="font-size:16px">batterry life</p>
                            </div>
                          </div>
                  </div>
                  <div id="page#7-0-0-4"></div>
                </div>
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
  name: 'chargePc',
    computed: {
    backgroundStyles() {
      const imgUrl = this.$img('/wp-content/themes/yootheme/cache/chargepc.jpg')
      return {
        backgroundImage: `url('${imgUrl}')`,
        loading: 'lazy',
        modifiers: {
            format: 'webp',
            quality: 80
        }
      }
    },
         backgroundStylees() {
      const imgUrl = this.$img('/wp-content/themes/yootheme/cache/changemoblie.jpg')
      return {
        backgroundImage: `url('${imgUrl}')`,
        loading: 'lazy',
        modifiers: {
            format: 'webp',
            quality: 80
        }
      }
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.uk-card-title {
  color: #333 !important;
  font-size: 24px;
}
.uk-getukmargin{
  width: 101px;
  height: 72px;
  color: #fff;
}
</style>
