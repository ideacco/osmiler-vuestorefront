<template>
  <div>
    <SfHeader
      data-cy="app-header"
      :cart-items-qty="cartTotalItems"
      :account-icon="accountIcon"
      class="sf-header--has-mobile-search"
      :class="{ 'common-header-light': isTransparency }"
      @click:cart="toggleCartSidebar"
      @click:wishlist="toggleWishlistSidebar"
      @click:account="
        isUserAuthenticated
          ? $router.push(localePath({ name: 'my-account' }))
          : toggleLoginModal()
      "
      :isSticky="isUP"
      ref="SfHeader"
    >
      <!-- TODO: add mobile view buttons after SFUI team PR -->
      <template #logo>
        <nuxt-link :to="localePath('/')" class="sf-header__logo">
          <SfImage
            :src="
              isTransparency
                ? require('../static/icons/osmiler-logo-light.svg')
                : require('../static/icons/osmiler-logo-default.svg')
            "
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
            <SfIcon
              :icon="accountIcon"
              :class="{ 'common-header-icon-light': isTransparency }"
              size="1.25rem"
            />
          </SfButton>
          <SfButton
            v-else
            class="sf-button--pure sf-header__action"
            @click="toggleLoginModal()"
          >
            <SfIcon
              :icon="accountIcon"
              :class="{ 'common-header-icon-light': isTransparency }"
              size="1.25rem"
            />
          </SfButton>
          <SfButton
            v-e2e="'app-header-cart'"
            class="sf-button--pure sf-header__action"
            @click="toggleCartSidebar"
          >
            <SfIcon
              class="sf-header__icon"
              :class="{ 'common-header-icon-light': isTransparency }"
              icon="empty_cart"
              size="1.25rem"
            />
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
  SfSearchBar,
  SfIcon,
  SfOverlay
} from '@storefront-ui/vue'
import SearchResultsComp from './SearchResults.vue'
import debounce from 'lodash/debounce'
import { onSSR } from '@vue-storefront/core'
import {
  computed,
  ref,
  watch,
  useRoute,
  useContext
} from '@nuxtjs/composition-api'
import { useUiHelpers, useUiState } from '~/composables'
import LocaleSelector from './LocaleSelector.vue'

import {
  searchGetters,
  useCategory,
  useSearch,
  useContent
} from '@vue-storefront/shopify'

export default {
  components: {
    SfHeader,
    SfImage,
    SfIcon,
    LocaleSelector,
    SfButton,
    SfBadge
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
    const { changeSearchTerm, getFacetsFromURL } = useUiHelpers()
    const { search: headerSearch, result } = useSearch('header-search')
    const { search, categories } = useCategory('menuCategories')
    const { search: getArticles, content: articlesContent } =
      useContent('articles')

    const curCatSlug = ref(getFacetsFromURL().categorySlug)
    const accountIcon = computed(() =>
      props.isUserAuthenticated ? 'profile_fill' : 'profile'
    )

    // #region Search Section
    const isSearchOpen = ref(false)
    const term = ref(getFacetsFromURL().term)
    const route = useRoute()
    const handleSearch = debounce(async (searchTerm) => {
      if (!searchTerm.target) {
        term.value = searchTerm
      } else {
        term.value = searchTerm.target.value
      }

      await headerSearch({
        term: term.value
      })
      await getArticles({
        contentType: 'article',
        query: term.value,
        first: 5
      })
    }, 500)

    watch(route, () => {
      term.value = ''
    })

    const closeSearch = () => {
      if (!isSearchOpen.value) return
      term.value = ''
      isSearchOpen.value = false
    }

    const searchResults = computed(() =>
      !term.value
        ? { products: [], articles: [] }
        : {
          products: searchGetters.getItems(result.value),
          articles: articlesContent?.value?.data
        }
    )
    onSSR(async () => {
      await search({ slug: '' })
    })

    return {
      accountIcon,
      closeSearch,
      toggleLoginModal,
      toggleCartSidebar,
      toggleWishlistSidebar,
      changeSearchTerm,
      term,
      handleSearch,
      curCatSlug,
      searchResults,
      isSearchOpen
    }
  },
  data() {
    return {
      shopRootCategories: ['women', 'man', 'music', 'PrivacyPolicy'],
      isplay: 0,
      isTransparency: false,
      isUP: true
    }
  },
  watch: {
    '$route.path': function (newvalue) {
      if (newvalue === '/' || newvalue === '/music') {
        const ele = this.$el.querySelector(
          '.sf-header--has-mobile-search .sf-header__wrapper'
        )
        ele.style.background = 'transparent'
        this.isUP = true
        this.isTransparency = true
        window.addEventListener('scroll', this.handleScroll)
      } else if (newvalue != '/' || newvalue != '/music') {
        const ele = this.$el.querySelector(
          '.sf-header--has-mobile-search .sf-header__wrapper'
        )
        window.removeEventListener('scroll', this.handleScroll)
        ele.style.backgroundColor = '#fff'
        this.isUP = false
        this.isTransparency = false
      }
    }
  },
  methods: {
    handleScroll() {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      if (scrollTop) {
        const ele = this.$el.querySelector(
          '.sf-header--has-mobile-search .sf-header__wrapper'
        )
        ele.style.background = `rgba(255,255,255,${
          scrollTop / (scrollTop + 100)
        })`
        this.isTransparency = false
        if (scrollTop < 50) {
          // const ele = this.$el.querySelector(
          //   '.sf-header--has-mobile-search .sf-header__wrapper'
          // )
          this.isTransparency = true
          ele.style.background = `rgba(255,255,255,${
            scrollTop / (scrollTop - 100)
          })`
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// 自定义页头CSS, 亮色背景
.common-header-light {
  @include for-desktop {
    --header-navigation-item-color: #fff;
    --icon-color: #fff;
    --header-wrapper-transition: all 0.3s ease; // 过度动画
  }
}

.common-header-light :focus {
  --header-navigation-item-color: #fff;
  --header-navigation-item-border-color: #fff;
}

.common-header-icon-light {
  --icon-color: #fff;
}
// 自定义页头CSS, 滑动时隐藏
.common-header-hide {
  @include for-desktop {
    --header-wrapper-transform: translate(0, 0);
  }
}
.sf-header-navigation-item{
--font-family--secondary:var(--font-family--primary)
}
.sf-header {
  --header-padding: var(--spacer-sm);
  @include for-desktop {
    --header-padding: 0;
    // --header-box-shadow: 0 5px 15px rgb(39 44 63 / 6%);
    --header-wrapper-transition: all 0.3s ease;
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
