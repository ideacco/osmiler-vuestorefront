<template>
  <div>
    <div id="layout">
      <AppHeader />
      <nuxt />
      <BottomNavigation />
      <CartSidebar />
      <LoginModal />
    </div>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader_new.vue'
import BottomNavigation from '~/components/BottomNavigation.vue'

import CartSidebar from '~/components/CartSidebar.vue'
import LoginModal from '~/components/LoginModal.vue'

export default {
  name: 'AccountLayout',

  components: {
    AppHeader,
    BottomNavigation,
    CartSidebar,
    LoginModal
  }
}
</script>

<style lang="scss">
@import '~@storefront-ui/vue/styles';

body {
  padding: 0;
  margin: 0;
}

#layout {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1440px;
    margin: auto;
  }
}
</style>
