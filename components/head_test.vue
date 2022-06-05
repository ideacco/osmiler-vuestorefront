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
      <template v-if="menus.length > 0" #navigation>
        <div class="navigation-wrapper">
          <SfHeaderNavigationItem
            v-for="menu in menus"
            :key="menu.id"
            class="nav-item"
            :data-cy="'app-header-url_' + menu.handle"
            :label="menu.title"
            :link="localePath(getMenuPath(menu))"
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
import { onSSR } from '@vue-storefront/core'

import { SfHeader } from '@storefront-ui/vue'

import { useCategory } from '@vue-storefront/shopify'

import { computed, useContext } from '@nuxtjs/composition-api'

export default {
  props: {
    cartTotalItems: {
      type: Number,
      default: 0
    },
    isUserAuthenticated: Boolean
  },

  setup(props) {
    const context = useContext()
    const { search, categories } = useCategory('menuCategories')
    const menus = computed(() => [
      ...categories.value,
      { id: 'blogs', title: 'Blogs', handle: context.$config.cms.blogs }
    ])
    onSSR(async () => {
      await search({ slug: '' })
    })
  },

  components: {
    SfHeader,
    useContext
  },
  data() {
    return {
      menus: [
        {
          id: 1,
          title: 'Home',
          handle: 'home',
          url: '/'
        },
        {
          id: 2,
          title: 'About',
          handle: 'about',
          url: '/about'
        },
        {
          id: 3,
          title: 'Contact',
          handle: 'contact',
          url: '/contact'
        }
      ]
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
