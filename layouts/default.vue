<template>
  <div>
    <client-only>
      <BottomNavigation />
    </client-only>
    <client-only>
      <CartSidebar />
    </client-only>
    <client-only>
      <WishlistSidebar />
    </client-only>
    <client-only>
      <LoginModal />
    </client-only>
    <LazyHydrate when-visible>
      <Notification />
    </LazyHydrate>

    <!-- <AssHeader /> -->
    <AppHeader
      :cart-total-items="getCartTotalItems"
      :is-user-authenticated="isAuthenticated"
    />

    <div id="layout">
      <nuxt :keep-alive="false" :keep-alive-prrps= "{inclue:includeArr}" @testPage="getData" :key="route.fullPath" />
    </div>
    <LoadWhenVisible>
      <AppFooter />
    </LoadWhenVisible>
  </div>
</template>
<script>

import AppHeader from '~/components/UikitHeader.vue'
// import AppHeader from '~/components/AppHeader_new.vue'
import LazyHydrate from 'vue-lazy-hydration'
import {
  useUser,
  cartGetters,
  useCart,
  userGetters
} from '@vue-storefront/shopify'
import {
  computed,
  onBeforeMount,
  provide,
  useRoute,
  useContext
} from '@nuxtjs/composition-api'
import LoadWhenVisible from '~/components/utils/LoadWhenVisible'

export default {
  name: 'DefaultLayout',
  components: {
    LazyHydrate,
    // AssHeader,
    AppHeader,
    BottomNavigation: () =>
      import(/* webpackPrefetch: true */ '~/components/BottomNavigation.vue'),
    // AppFooter: () =>
    //   import(/* webpackPrefetch: true */ '~/components/AppFooter.vue'),
    AppFooter: () =>
      import(/* webpackPrefetch: true */ '~/components/AppFooter_new.vue'),
    CartSidebar: () =>
      import(/* webpackPrefetch: true */ '~/components/CartSidebar.vue'),
    WishlistSidebar: () =>
      import(/* webpackPrefetch: true */ '~/components/WishlistSidebar.vue'),
    LoginModal: () =>
      import(/* webpackPrefetch: true */ '~/components/LoginModal.vue'),
    Notification: () =>
      import(/* webpackPrefetch: true */ '~/components/Notification'),
    LoadWhenVisible
  },
  setup() {
    const route = useRoute()
    const context = useContext()
    const { load: loadUser, user: userInfo } = useUser()
    const { load: loadCart, cart } = useCart()
    const getCartTotalItems = computed(() =>
      cartGetters.getTotalItems(cart.value)
    )
    const isAuthenticated = computed(() => {
      return !!userGetters.getFirstName(userInfo.value)
    })
    provide('currentCart', cart)

    // 加载用户信息和购物车信息
    onBeforeMount(async () => {
      await loadUser()
      await loadCart().then(() => {
        if (cart && cart.value && cart.value.orderStatusUrl !== null) {
          context.$cookies.remove(`${context.$config.appKey}_cart_id`)
        }
      })
    })

    return {
      getCartTotalItems,
      isAuthenticated,
      route
    }
  },
  data(){
    return{
      includeArr: ['HoMe','CateGory','ContactUs','MuSic','AboutS','MyAccount','Services','ProDuct','TermsAndConditions','PrivacyPolicy','ShippingReturnPolicy','ShippingPolicy']
    }
  },
watch: {
   '$route': 'getPath'
},
/* eslint-disable  */
   mounted() {
 if (process.browser) {
  this.$gtag('config', 'UA-233114703-1')
    // console.log(this.$gtag,888)
    //  console.log(this.$fb,888)
    // //* eslint-disable  */
    // if (process.browser) {
    //   this.$gtag('config', 'UA-233114703-1', {
    //     // page_title: this.$metaInfo.title,
    //     page_path: this.$route.fullPath,
    //   })
    // }
 }
  },
  methods: {
    getData(msg) {
      // console.log('父页面信息', msg)
    },

      getPath(){
     this.$gtag('event','UA-233114703-1',{
       page_path:'this.$route.path',
     })
   }
  }
}
</script>

<style lang="scss">
@import '~@storefront-ui/vue/styles';

#layout {
  box-sizing: border-box;
  @include for-desktop {
    margin: auto;
  }
}

.no-scroll {
  overflow: hidden;
  height: 100vh;
}
</style>
