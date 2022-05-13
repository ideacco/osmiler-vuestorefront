<template>
  <div>
         <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
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
} from '@storefront-ui/vue';
import SearchResultsComp from './SearchResults.vue';
import debounce from 'lodash/debounce';
import { onSSR } from '@vue-storefront/core';
import {
  computed,
  ref,
  watch,
  useRoute,
  useContext,
} from '@nuxtjs/composition-api';
import { useUiHelpers, useUiState } from '~/composables';
import LocaleSelector from './LocaleSelector.vue';

import {
  searchGetters,
  useCategory,
  useSearch,
  useContent
} from '@vue-storefront/shopify';

export default {
  components: {
    SearchResults: SearchResultsComp,
    SfHeader,
    SfImage,
    SfIcon,
    LocaleSelector,
    SfButton,
    SfOverlay,
    SfBadge,
    SfSearchBar
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
    const context = useContext();
    const { toggleCartSidebar, toggleWishlistSidebar, toggleLoginModal } =
      useUiState();
    const { changeSearchTerm, getFacetsFromURL } = useUiHelpers();
    const { search: headerSearch, result } = useSearch('header-search');
    const { search, categories } = useCategory('menuCategories');
    const { search: getArticles, content: articlesContent } =
      useContent('articles');

    const curCatSlug = ref(getFacetsFromURL().categorySlug);
    const accountIcon = computed(() =>
      props.isUserAuthenticated ? 'profile_fill' : 'profile'
    );

    // #region Search Section
    const isSearchOpen = ref(false);
    const term = ref(getFacetsFromURL().term);
    const route = useRoute();
    const handleSearch = debounce(async (searchTerm) => {
      if (!searchTerm.target) {
        term.value = searchTerm;
      } else {
        term.value = searchTerm.target.value;
      }

      await headerSearch({
        term: term.value
      });
      await getArticles({
        contentType: 'article',
        query: term.value,
        first: 5
      });
    }, 500);

    watch(route, () => {
      hideSearch();
      term.value = '';
    });

    const hideSearch = () => {
      if (isSearchOpen.value) {
        isSearchOpen.value = false;
        if (document) {
          document.body.classList.remove('no-scroll');
        }
      }
    };

    const closeSearch = () => {
      if (!isSearchOpen.value) return;
      term.value = '';
      isSearchOpen.value = false;
    };

    const searchResults = computed(() =>
      !term.value
        ? { products: [], articles: [] }
        : {
            products: searchGetters.getItems(result.value),
            articles: articlesContent?.value?.data
          }
    );
    // #endregion Search Section

    onSSR(async () => {
      await search({ slug: '' });
    });
    const menus = computed(() => [
      { id: 'blogs', title: 'Blogs', handle: context.$config.cms.blogs }
    ]);

    const getMenuPath = (menu) => {
      if (menu.id === 'blogs') {
        return { name: 'blogs' };
      }

      return { name: 'category', params: { slug_1: menu.handle } };
    };

    return {
      getMenuPath,
      accountIcon,
      hideSearch,
      closeSearch,
      toggleLoginModal,
      toggleCartSidebar,
      toggleWishlistSidebar,
      changeSearchTerm,
      term,
      handleSearch,
      curCatSlug,
      searchResults,
      menus,
      isSearchOpen
    };
  }
};
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
