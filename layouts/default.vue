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
      <nuxt @testPage="getData" :key="route.fullPath" />
    </div>
    <LoadWhenVisible>
      <AppFooter />
    </LoadWhenVisible>
  </div>
</template>

<script>
 /* eslint-disable */
(function(w,d,s,l,i){
  w[l] = w[l] || [];
  w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'})
  var f = d.getElementsByTagName(s)[0],
  j =d.createElement(s),
  dl = l!= 'dataLayer'?'&l='+l:''
  j.async = true
  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','');
 /* eslint-disable */
</script>
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
/* eslint-disable  */
   mounted() {
    //* eslint-disable  */
    if (process.browser) {
      this.$gtag('config', 'UA-233114703-1', {
        // page_title: this.$metaInfo.title,
        page_path: this.$route.fullPath,
      })
    }
  },
  methods: {
    getData(msg) {
      // console.log('父页面信息', msg)
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
