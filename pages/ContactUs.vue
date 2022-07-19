<template>
  <div>
    <div class="uk-section-default uk-section">
      <div
        class="uk-margin-large uk-margin-remove-top uk-container uk-container-large"
      >
        <div
          class="uk-margin-remove-top tm-grid-expand uk-grid-collapse uk-child-width-1-1"
          uk-grid
        >
          <div>
            <div class="uk-h6 uk-text-primary uk-text-center">Get in Touch</div>
            <h1 class="uk-margin-remove-vertical uk-text-center">Contact Us</h1>
            <div class="uk-panel uk-text-large uk-margin uk-text-center">
              <p>
                For all product or technical support inquiries, please call us
                and we will be glad to help resolve it for you.
              </p>
            </div>
            <div class="uk-margin-large uk-text-center@s uk-text-center">
              <div
                class="uk-child-width-1-2 uk-child-width-1-2@s uk-child-width-1-2@l uk-grid-match"
                uk-grid
              >
                <div>
                  <div
                    class="el-item uk-panel uk-margin-remove-first-child"
                    uk-scrollspy="target: [uk-scrollspy-class];"
                  >
                    <img
                      src="/wp-content/themes/yootheme/cache/ic_location.svg"
                      sizes="(min-width: 40px) 40px"
                      data-width="40"
                      data-height="40"
                      class="el-image"
                      alt
                    />
                    <h2
                      class="el-title uk-h3 uk-margin-top uk-margin-remove-bottom"
                    >
                      Address
                    </h2>
                    <div class="el-content uk-panel uk-margin-top">
                    Room 1607E&nbsp;Education Techonology Building<br/>
                    No. 26 Zizhu Seven Road&nbsp;Xiangmihu Street<br/>
                    Futian DistrictE&nbsp;Shenzhen
                    </div>
                  </div>
                </div>
                <div style="margin: 0 auto">
                  <div
                    class="el-item uk-panel uk-margin-remove-first-child"
                    uk-scrollspy="target: [uk-scrollspy-class];"
                  >
                    <img
                      src="/wp-content/themes/yootheme/cache/ic_emile.svg"
                      sizes="(min-width: 40px) 40px"
                      data-width="40"
                      data-height="40"
                      class="el-image"
                      alt
                    />
                    <h2
                      class="el-title uk-h3 uk-margin-top uk-margin-remove-bottom"
                    >
                      Contact
                    </h2>
                    <div class="el-content uk-panel uk-margin-top">
                      <a
                        class="uk-link-text"
                        href="tel:+860755-25827634"
                      >+ 86 &#8211; 755 &#8211; 25827634</a
                      ><br />
                      <a href="/service@osmiler.com">service@osmiler.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="tm-grid-expand uk-child-width-1-1 uk-grid-margin" uk-grid>
        <div>
          <div class="uk-margin uk-text-center">
          <div class="uk-box222">
              <img
              src="/wp-content/themes/yootheme/cache/image-59-c5c1dcb5.png"
              sizes="(min-width: 1080px) 1080px"
              data-width="1080"
              data-height="560"
              class="el-image"
              alt
            />
                <div class="uk-position-bottom-right  uk-overlay-default">
              <div class="uk-esllipse2"></div>
              <div class="uk-esllipse3">
                <div style="text-align:left !important;" class="fontsize">Osilmer<br/>
                Room 309,Building 5, QianHai E-Hub, ShenZhen,China <br/><br/>
                +86 755-25827634<br/>service@osilmer.com</div>
              </div>

            </div>
          </div>
          </div>
        </div>
      </div> -->
      <CantactMap/>
    </div>
   <Contact />
    <MainChack />
  </div>
</template>
<script>
import MainChack from '~/components/MainChack'
import Contact from '~/components/Home/Contact'
import CantactMap from '~/components/CantactMap'
export default {
  name: 'ContactUs',
  components: {
    MainChack,
    Contact,
    CantactMap
  }
}
</script>
<style lang="scss" scoped>
.uk-section-default{
background: #FAF9FD;
}
.fontsize{
  @include for-desktop{
    padding-top: 16px;
    margin-left: 24px;
    margin-top: 9px;
  }
}
#page\#1-1-0-0 {
  font-family: 'osmiler-title';
  color: #3a3543;
}
#page\#1-1-0-1 {
  color: #3a3543;
}
.uk-box222{
 @include for-desktop{
  position: relative;
  width: 1080;
  height: 560px;
 }
}
.uk-box{
  @include for-desktop{
  position: absolute;
  z-index: 99;
  width: 364px;
  height: 188px;
  left: 1080px;
  top: 322px;
  }
}
.uk-esllipse2{
@include for-desktop{
width: 24px;
height: 24px;
background: #5D47EE;
border-radius: 24px;
}
}
.uk-esllipse3{
@include for-desktop{
width: 364px;
height: 188px;
background: #FFFFFF;
border-radius: 20px;
}
}
.el-content{
  font-size: 10px;
  @include for-desktop{
    font-size: 16px;
  }
}

</style>
