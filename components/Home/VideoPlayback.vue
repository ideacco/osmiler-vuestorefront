<template>

  <div  >
    <div
      class="
        uk-visible@m
        uk-section-primary
        uk-cover-container
        uk-section
        uk-padding-remove-vertical
        uk-flex
        uk-flex-middle
        uk-background-norepeat
        uk-background-cover
        uk-background-center-center
        uk-section
        uk-section-large
      "
      tm-header-transparent="light"
      uk-height-viewport="offset-top: true;"
      :style ="[{ marginTop: innerWidth > 940 ? '-120px' : '0px' },backgroundStyles,{ height : '960px'}]"
    >

      <!-- <video
        src="/homepage/Osmiler_video.mp4"
        loop
        autoplay
        muted
        playsinline
        uk-cover
      ></video> -->
<!--
      <video
        src="https://d3kyzzp5arlnnu.cloudfront.net/videos/Osmiler_video2.mp4?v=1658745087"
        loop
        muted
        autoplay
        playsinline
        uk-cover
        id="homeVideo"
      ></video> -->

      <div class="uk-width-1-1">
        <div
          class="
            uk-container
            uk-container-large
            uk-container-expand-right
            uk-position-relative
          "
        >
          <div class="tm-header-placeholder uk-margin-remove-adjacent"></div>
          <div class="tm-grid-expand uk-grid-collapse" uk-grid>
            <div
              class="uk-grid-item-match uk-flex-middle uk-width-1-3@m"
              id="page#0-0-0"
            >
              <div class="uk-panel uk-width-1-1">
                <h1
                  class="
                    uk-heading-medium
                    uk-position-relative
                    uk-margin-remove-vertical
                    uk-text-left@m
                    uk-text-center
                  "
                  id="page#0-0-0-0"
                  style="z-index: 1"
                >
                  A musical revolution.
                </h1>
                <div
                  class="
                    uk-text-primary
                    uk-margin-medium
                    uk-width-large
                    uk-margin-auto-right@m
                    uk-margin-remove-left@m
                    uk-margin-auto
                    uk-text-left@m
                    uk-text-center
                  "
                >
                  Beyond imagination, it&#8217;s the world&#8217;s first
                  electric sonic toothbrush that can listen to music.
                </div>
                <div id="page#0-0-0-2">
                  <div></div>
                </div>
                <div class="product__price-and-rating ">
                  <template>
                    <div class="sf-price ">
                      <span class="sf-price__regular display-none"
                        >$69</span
                      >
                      <del class="sf-price__old" >$69</del>
                      <ins class="sf-price__special">$49</ins>
                    </div>
                  </template>
                </div>
                <div class="uk-margin uk-text-left@m uk-text-center">
                  <a
                    class="el-content uk-button uk-button-default"
                    uk-scroll
                    @click="buyNow()"
                  >
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>
            <div class="uk-width-2-3@m"></div>
          </div>
        </div>
      </div>

  </div>
      <div
      id="page#1"
      class="
        uk-hidden@m
        uk-section-primary
        uk-section
        uk-section-small
        uk-padding-remove-top
        uk-flex
      "
      tm-header-transparent="light"
      uk-height-viewport="offset-top: true;"
      style="background: #411e7b"
    >
      <div
        class="uk-width-1-1"
        :style="{ marginTop: innerWidth > 940 ? '-80px' : '0px' }"
      >
        <div class="tm-header-placeholder uk-margin-remove-adjacent"></div>
        <div class="tm-grid-expand uk-child-width-1-1 uk-grid-margin" uk-grid>
          <div>
            <div class="uk-margin">
              <nuxt-img
                src="/wp-content/themes/yootheme/cache/Hero.png"
                data-width="1125"
                data-height="1086"
                class="el-image"
                style="width: 100%"
                alt
                format="webp"
                quality="80"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div class="tm-grid-expand uk-grid-collapse uk-child-width-1-1" uk-grid>
          <div class="uk-grid-item-match uk-flex-middle" id="page#1-1-0">
            <div class="uk-panel uk-width-1-1">
              <h1
                class="
                  uk-heading-medium
                  uk-position-relative
                  uk-margin
                  uk-text-center@m
                  uk-text-center
                "
                id="page#1-1-0-0"
                style="top: 8px; z-index: 1; font-size: 32px"
              >
                A musical revolution.
              </h1>
              <div
                class="
                  uk-text-primary
                  uk-margin-medium
                  uk-margin-remove-top
                  uk-width-medium
                  uk-margin-auto-right@m
                  uk-margin-remove-left@m
                  uk-margin-auto
                  uk-text-left@m
                  uk-text-center
                "
              >
                Beyond imagination, it&#8217;s the original electric sonic
                toothbrush that can listen to music.
              </div>
                 <div class="product__price-and-rating">
                  <template>
                    <div class="sf-price sf-displayprice">
                      <span class="sf-price__regular display-none"
                        >$69</span
                      >
                      <del class="sf-price__old" >$69</del>
                      <ins class="sf-price__special sf-special">$49</ins>
                    </div>
                  </template>
                </div>
              <div class="uk-margin uk-text-left@m uk-text-center">
                <a
                  class="el-content uk-button uk-button-default"
                  uk-scroll
                  @click="buyNow()"
                >
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { SfPrice } from '@storefront-ui/vue'
import {
  ref,
  computed,
  watch,
  useRoute,
  useRouter,
  onMounted,
  onUnmounted
} from '@nuxtjs/composition-api'
import {
  useProduct,
  useCart,
  productGetters,
  cartGetters
} from '@vue-storefront/shopify'

import { onSSR } from '@vue-storefront/core'
import useUiNotification from '~/composables/useUiNotification'
import { useUiState } from '~/composables'

export default {
  name: 'VideoPlayback',
    computed: {
    backgroundStyles() {
      const imgUrl = this.$img('/wp-content/themes/yootheme/cache/Hero_2-ya2.jpg')
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
  setup(__, context) {
    const { isCartSidebarOpen, toggleCartSidebar } = useUiState()
    const route = useRoute()
    const router = useRouter()
    const breadcrumbs = ref([])
    const atttLbl = ''
    const qty = ref(1)
    const { slug } = route?.value?.params
    const { loading: productloading, products, search } = useProduct('products')
    const { send: sendNotification } = useUiNotification()
    const {
      products: relatedProducts,
      search: searchRelatedProducts,
      loading: relatedLoading
    } = useProduct('relatedProducts')
    const { addItem, loading, cart } = useCart()
    const product = computed(
      () =>
        productGetters.getFiltered(products.value, {
          master: true,
          attributes: route?.value?.query
        })[0]
    )
    const totals = computed(() => cartGetters.getTotals(cart.value))
    const id = 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY='
    const originalId = 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY='
    const productTitle = computed(() => productGetters.getName(product.value))
    const productCoverImage = computed(() =>
      productGetters.getPDPCoverImage(product.value)
    )
    const checkoutURL = computed(() => cartGetters.getcheckoutURL(cart.value))
    const handleCheckout = (checkoutUrl) => {
      setTimeout(() => {
        window.location.href = checkoutUrl
      }, 300)
    }
    const { $router, $route } = context.root
    const productDescription = computed(() =>
      productGetters.getDescription(product.value)
    )
    const productDescriptionHtml = computed(() =>
      productGetters.getDescription(product.value, true)
    )
    const totalItems = computed(() => cartGetters.getTotalItems(cart.value))
    const options = computed(() => productGetters.getAttributes(products.value))

    const configuration = computed(() => {
      return productGetters.getSelectedVariant(route?.value?.query)
    })
    const { isProductCartButtonColor, setisProductCartButtonColor } =
      useUiState()
    const ispath = route.value.fullPath
    const setBreadcrumb = () => {
      breadcrumbs.value = [
        {
          text: 'Home',
          link: '/Home'
        },
        {
          text: 'All products',
          link: '/c/all-products'
        },
        {
          text: productTitle.value,
          link: ''
        }
      ]
    }

    watch(
      productTitle,
      (currproductTitle, prevproductTitle) => {
        if (currproductTitle !== prevproductTitle) {
          setBreadcrumb()
        }
      },
      { deep: true }
    )
    const productGallery = computed(() => {
      if (product.value && product.value.images.length > 4) {
        product.value.images.push({
          originalSrc:
            'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/placeholder_600x600.jpg?v=1625742127'
        })
      }

      const img = productGetters
        .getGallery(product.value)
        .map((img) => ({
          mobile: { url: img.small },
          desktop: { url: img.normal },
          big: { url: img.big },
          alt: product.value._name || product.value.name
        }))
        .slice(0, 4)
      return img
    })
    const stock = computed(() => {
      return productGetters.getStock(product.value)
    })
    const ActiveVariantImage = computed(() => {
      return productGetters.getVariantImage(product.value) || 0
    })

    const getProductGallery = (product) =>
      (product ? product.images : []).map((image) => {
        const imgPath = image.originalSrc.substring(
          0,
          image.originalSrc.lastIndexOf('.')
        )
        const imgext = image.originalSrc.split('.').pop()
        const imgSmall = imgPath + '_160x160.' + imgext
        const imgBig = imgPath + '_295x295.' + imgext
        const imgNormal = imgPath + '_1500x1500.' + imgext
        return {
          small: imgSmall,
          big: imgBig,
          normal: imgNormal
        }
      })
    const productGallery3 = computed(() => {
      const img = getProductGallery(product.value)
        .map((img) => {
          // console.log('img?',img)
          return {
            mobile: { url: img.small },
            desktop: { url: img.normal },
            big: { url: img.big },
            alt: product.value._name || product.value.name
          }
        })
        .slice(0, 4)
      return img
    })
    onSSR(async () => {
      await search({ slug, selectedOptions: configuration.value }).then(() => {
        // "Product Title" serve as the flag if the product is existing or not
        if (!productTitle.value) {
          return route?.value?.error({
            statusCode: 404,
            message: 'This product could not be found'
          })
        }
      })
      await searchRelatedProducts({
        productId: id.value || null,
        related: true
      })
    })

    // 节流函数
    const debounce = (func, wait) => {
      let timer
      return function () {
        !!timer && clearTimeout(timer)
        timer = setTimeout(func, wait)
      }
    }

    const innerWidth = ref()
    // 在组合式API中应该先判断执行环境，然后再执行函数
    if (process.client) {
      innerWidth.value = window.innerWidth
    }

    onMounted(() => {
      if (process.client) {
        // 使用节流方法设置监听事件
        window.onresize = debounce(() => {
          innerWidth.value = window.innerWidth
          // console.log('resize', innerWidth.value)
        }, 300)
      }
    })

    // 销毁时解绑事件
    onUnmounted(() => {
      // console.log('unmount,销毁')
      if (process.client) {
        window.onresize = null
      }
    })

    return {
      innerWidth,
      isCartSidebarOpen,
      toggleCartSidebar,
      ispath,
      configuration,
      product,
      productDescription,
      productCoverImage,
      productDescriptionHtml,
      ActiveVariantImage,
      sendNotification,
      originalId,
      relatedLoading,
      options,
      stock,
      productTitle,
      breadcrumbs,
      totals,
      qty,
      id,
      addItem,
      productGallery3,
      totalItems,
      cartGetters,
      loading,
      productloading,
      productGallery,
      productGetters,
      handleCheckout,
      setBreadcrumb,
      checkoutURL,
      atttLbl,
      isProductCartButtonColor
    }
  },
  components: {
    SfPrice
  },
  data() {
    return {
      musicmp3: false
    }
  },

  methods: {
    play_v1() {
      const rotateEnlarge = document.getElementById('homeVideo')
      rotateEnlarge.play()
      rotateEnlarge.muted = false
    },
    buyNow() {
      window.open(
        'https://osmiler.myshopify.com/63788810498/checkouts/75e53fded8f9c955c439653f5787732e?no_cookies_from_redirect=1',
        '_blank'
      )
    },
    stop_v1() {
      const rotateEnlarge = document.getElementById('homeVideo')
      rotateEnlarge.muted = false
      rotateEnlarge.play()
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep.sf-price__old{
  font-size: 24px !important;
  color:rgba(255, 255, 255, 1) ;
  font-weight: 100 !important;
  font-family: Overpass;
}
::v-deep .sf-displayprice{
  display: flex;
  justify-content: center;
  align-items: center;

}
::v-deep .sf-price__special {
  font-size: 32px !important;
   font-family: Overpass;
  color: #FFFFFF;
}
::v-deep .sf-special{
  background: #411e7b;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
