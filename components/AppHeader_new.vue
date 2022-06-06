<template>
  <div>
    <SfHeader
      data-cy="app-header"
      :cart-items-qty="cartTotalItems"
      :account-icon="accountIcon"
      class="sf-header--has-mobile-search"
      @click:cart="toggleCartSidebar"
      @click:wishlist="toggleWishlistSidebar"
      @click:account="
        isUserAuthenticated
          ? $router.push(localePath({ name: 'my-account' }))
          : toggleLoginModal()
      "
      ref="div_1"
      id="SfHeaders"
      :isSticky="isplay === 0 ? false : true"
    >
      <!-- TODO: add mobile view buttons after SFUI team PR -->
      <template #logo>
        <nuxt-link :to="localePath('/')" class="sf-header__logo">
          <SfImage
            src="/icons/osmiler-logo-default.svg"
            alt="osmiler"
            class="sf-header__logo-image"
            :width="34"
            :height="34"
          />
        </nuxt-link>
      </template>

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
      <template #aside>
        <LocaleSelector class="smartphone-only" />
      </template>
      <template #header-icons>
        <div class="sf-header__icons">
          <SfButton
            v-if="isUserAuthenticated"
            class="sf-button--pure sf-header__action"
            @click="$router.push(localePath({ name: 'my-account' }))"
          >
            <SfIcon :icon="accountIcon" size="1.25rem" />
          </SfButton>
          <SfButton
            v-else
            class="sf-button--pure sf-header__action"
            @click="toggleLoginModal()"
          >
            <SfIcon :icon="accountIcon" size="1.25rem" />
          </SfButton>
          <SfButton
            v-e2e="'app-header-cart'"
            class="sf-button--pure sf-header__action"
            @click="toggleCartSidebar"
          >
            <SfIcon class="sf-header__icon" icon="empty_cart" size="1.25rem" />
            <SfBadge
              v-if="cartTotalItems"
              class="sf-badge--number cart-badge"
            >{{ cartTotalItems }}</SfBadge
            >
          </SfButton>
        </div>
      </template>

      <template #search>
        <div></div>
      </template>
    </SfHeader>
  </div>
</template>

<script type="module">
import {
  SfHeader,
  SfImage,
  SfButton,
  SfBadge,
  SfIcon
} from '@storefront-ui/vue'
import { onSSR } from '@vue-storefront/core'
import { computed, ref } from '@nuxtjs/composition-api'
import { useUiHelpers, useUiState } from '~/composables'
import LocaleSelector from './LocaleSelector.vue'

import { useCategory } from '@vue-storefront/shopify'

export default {
  components: {
    SfHeader,
    SfImage,
    SfIcon,
    LocaleSelector,
    SfButton,
    // SfOverlay,
    SfBadge
    // SfSearchBar
  },
  props: {
    cartTotalItems: {
      type: Number,
      default: 0
    },
    isUserAuthenticated: Boolean
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup(props) {
    const { toggleCartSidebar, toggleWishlistSidebar, toggleLoginModal } =
      useUiState()
    const { getFacetsFromURL } = useUiHelpers()
    const { search } = useCategory('menuCategories')
    const curCatSlug = ref(getFacetsFromURL().categorySlug)
    const accountIcon = computed(() =>
      props.isUserAuthenticated ? 'profile_fill' : 'profile'
    )
    onSSR(async () => {
      await search({ slug: '' })
    })

    return {
      accountIcon,
      toggleLoginModal,
      toggleCartSidebar,
      toggleWishlistSidebar,
      curCatSlug
    }
  },

  data() {
    return {
      shopRootCategories: ['women', 'man', 'music', 'News'],
      isplay: 0
    }
  },
  mounted() {
    if (this.$route.path === '/' || this.$route.path === '/music') {
      this.isplay = 0
      var ele = this.$refs.div_1.$el.lastChild
      ele.style.backgroundColor = 'red'
    }
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      if (
        (scrollTop && this.$route.path === '/') ||
        this.$route.path === '/music'
      ) {
        this.isplay = 1
        var ele = this.$refs.div_1.$el.lastChild
        ele.style.backgroundColor = '#fff'
        console.log(scrollTop, 4444)
        if (scrollTop < 50) {
          this.isplay = 0
          ele.style.backgroundColor = 'red'
          console.log(222, 4444)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
.sf-search-bar {
  @include for-desktop {
    max-width: 20rem;
    width: 100%;
  }
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
