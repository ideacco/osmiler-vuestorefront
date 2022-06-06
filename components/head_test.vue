<template>
  <div>
    <SfHeader
      logo="/icons/osmiler-logo-default.svg"
      :logoHeight="80"
      :logoWidth="130"
      title="Storefront UI"
      cartIcon="empty_cart"
      wishlistIcon="heart"
      accountIcon="profile"
      activeIcon="account"
      :wishlistItemsQty="0"
      :cartItemsQty="0"
      :isSticky="false"
      :isNavVisible="false"
    >
      <template v-if="shopRootCategories.length > 0" #navigation>
        <div class="navigation-wrapper">
          <SfHeaderNavigationItem
            v-for="(category, key) in shopRootCategories"
            :key="`sf-header-navigation-item-${key}`"
            :link="`/${category}`"
            :label="category"
          />
        </div>
      </template>
      <template #search>
        <div></div>
      </template>
    </SfHeader>
  </div>
</template>

<script>
import { SfHeader } from '@storefront-ui/vue'

export default {
  props: {
    cartTotalItems: {
      type: Number,
      default: 0
    },
    isUserAuthenticated: Boolean
  },
  components: {
    SfHeader
  },
  data() {
    return {
      // menus: [
      //   {
      //     id: 1,
      //     title: 'Home',
      //     handle: 'home',
      //     url: '/home',
      //   },
      //   {
      //     id: 2,
      //     title: 'ContactUs',
      //     handle: 'ContactUs',
      //     url: '/ContactUs',
      //   },
      //   {
      //     id: 3,
      //     title: 'News',
      //     handle: 'News',
      //     url: '/News',
      //   },
      // ],
      shopRootCategories: ['women', 'man', 'New']
    }
  },
  computed: {
    menus3: () => [
      ...categories.value,
      { id: 'blogs', title: 'Blogs', handle: context.$config.cms.blogs }
    ]
  },
  methods: {
    getMenuPath(menu) {
      if (menu.id === 'blogs') {
        return { name: 'blogs' }
      }

      return { name: 'category', params: { slug_1: menu.handle } }
    }
  }
}
</script>

<style lang="scss" scoped>
.sf-header__search {
  display: none;
}

.sf-link .nuxt-link-active {
  width: 130px;
}

.sf-header {
  --header-padding: var(--spacer-sm);
  @include for-desktop {
    --header-padding: 0;
  }
  &__logo-image {
    height: 100%;
  }
}
.header-on-top {
  z-index: 2;
}
.navigation-wrapper {
  display: flex;
  width: min-content;
}

.nav-item {
  flex: 0;
  .sf-header-navigation-item__item--mobile {
    display: none;
  }
  &--mobile {
    padding: var(--spacer-xs) 0;
  }
  ::v-deep &__item--mobile {
    display: block;
  }
  ::v-deep .nuxt-link-active {
    color: var(--c-primary);
    --header-navigation-item-border-color: var(--c-primary);
  }
}
.cart-badge {
  position: absolute;
  bottom: 40%;
  left: 40%;
}
</style>
