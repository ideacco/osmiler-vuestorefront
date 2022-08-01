<template>
  <SfTopBar class="topbar">
    <template #center>
      <p style="margin:auto 0;color: #fff;font-family: Overpass">August Great Offer for New Customers $20 off</p>
    </template>
  </SfTopBar>
</template>

<script>
import { SfButton, SfTopBar } from '@storefront-ui/vue'
export default {
  name: 'HeAder',
  components: {
    SfTopBar,
    SfButton
  }
}

</script>
<style lang="scss" scoped>
.topbar {
  position: relative;
  background: #0C0C54;
  z-index: 99;
  &__button {
    margin: 0 0 0 var(--spacer-xs);
  }
}
</style>
