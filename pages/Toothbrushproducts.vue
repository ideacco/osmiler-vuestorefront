<template>
  <div id="category">
    <nav class="sf-breadcrumbs" aria-label="breadcrumbs">
      <ol class="sf-breadcrumbs__list">
        <li class="sf-breadcrumbs__list-item" :aria-current="false">
          <vue-component-36-SfLink
            class="sf-breadcrumbs__breadcrumb"
            link="#"
            data-testid="Home"
          >
            Product Collection
          </vue-component-36-SfLink>
        </li>
      </ol>
    </nav>
    <div class="main section">
      <div class="products">
        <transition-group
          v-if="isGridView"
          appear
          name="products__slide"
          tag="div"
          class="products__grid"
        >
          <SfProductCard
            v-for="(product, i) in products"
            :key="product.id"
            :style="{ '--index': i }"
            :colors="product.colors"
            :title="product.title"
            :image="product.image"
            :image-height="326"
            :image-width="216"
            :regular-price="product.price.regular"
            :special-price="product.price.special"
            :max-rating="product.rating.max"
            :score-rating="product.rating.score"
            :is-in-wishlist="product.isInWishlist"
            :show-add-to-cart-button="true"
            image-tag="nuxt-img"
            :nuxt-img-config="{
              format: 'webp',
              fit: 'cover',
            }"
            class="products__product-card"
            @click:wishlist="toggleWishlist(i)"
            @click:colors="handleSelectedColor($event, i)"
          />
        </transition-group>
        <transition-group
          v-else
          appear
          name="products__slide"
          tag="div"
          class="products__list"
        >
          <SfProductCardHorizontal
            v-for="(product, i) in products"
            :key="product.id"
            :style="{ '--index': i }"
            :title="product.title"
            :description="product.description"
            :image="product.image"
            :regular-price="product.price.regular"
            :special-price="product.price.special"
            :max-rating="product.rating.max"
            :reviews-count="product.reviewsCount"
            :score-rating="product.rating.score"
            :is-in-wishlist="product.isInWishlist"
            :image-height="200"
            :image-width="140"
            image-tag="nuxt-img"
            :nuxt-img-config="{
              format: 'webp',
              fit: 'cover',
            }"
            class="products__product-card-horizontal"
            @click:wishlist="toggleWishlist(i)"
          >
            <template #configuration>
              <SfProperty
                class="desktop-only"
                name="Size"
                value="XS"
                style="margin: 0 0 1rem"
              />
              <SfProperty class="desktop-only" name="Color" value="white" />
            </template>
            <template #actions>
              <SfButton
                class="sf-button--text desktop-only"
                style="margin: 0 0 1rem auto; display: block"
                @click="$emit('click:add-to-wishlist')"
              >
                Save for later
              </SfButton>
              <SfButton
                class="sf-button--text desktop-only"
                style="margin: 0 0 0 auto; display: block"
                @click="$emit('click:add-to-compare')"
              >
                Add to compare
              </SfButton>
            </template>
          </SfProductCardHorizontal>
        </transition-group>
      </div>
    </div>
    <div class="footer">23123</div>
  </div>
</template>
<script>
import {
  SfHeading,
  SfSidebar,
  SfButton,
  SfList,
  SfIcon,
  SfMenuItem,
  SfFilter,
  SfProductCard,
  SfProductCardHorizontal,
  SfPagination,
  SfAccordion,
  SfComponentSelect,
  SfBreadcrumbs,
  SfColor,
  SfProperty,
  SfRadio,
  SfSelect
} from '@storefront-ui/vue'
export default {
  name: 'ToothbruShproducts',
  components: {
    SfHeading,
    SfButton,
    SfSidebar,
    SfIcon,
    SfList,
    SfFilter,
    SfProductCard,
    SfProductCardHorizontal,
    SfPagination,
    SfMenuItem,
    SfAccordion,
    SfComponentSelect,
    SfBreadcrumbs,
    SfColor,
    SfProperty,
    SfRadio,
    SfSelect
  },
  data() {
    return {
      currentPage: 1,
      sortBy: 'Latest',
      isFilterSidebarOpen: false,
      isGridView: true,
      category: 'Clothing',
      displayOnPage: '40',
      sortByOptions: [
        {
          value: 'Latest',
          label: 'Latest'
        },
        {
          value: 'Price-up',
          label: 'Price from low to high'
        },
        {
          value: 'Price-down',
          label: 'Price from high to low'
        }
      ],
      sidebarAccordion: [
        {
          header: 'Clothing',
          items: [
            { label: 'All', count: '280' },
            { label: 'Skirts', count: '23' },
            { label: 'Sweaters', count: '54' },
            { label: 'Dresses', count: '34' },
            { label: 'T-shirts', count: '56' },
            { label: 'Pants', count: '7' },
            { label: 'Underwear', count: '12' }
          ]
        },
        {
          header: 'Accessorries',
          items: [
            { label: 'All', count: '280' },
            { label: 'Skirts', count: '23' },
            { label: 'Sweaters', count: '54' },
            { label: 'Dresses', count: '34' },
            { label: 'T-shirts', count: '56' },
            { label: 'Pants', count: '7' },
            { label: 'Underwear', count: '12' }
          ]
        },
        {
          header: 'Shoes',
          items: [
            { label: 'All', count: '280' },
            { label: 'Skirts', count: '23' },
            { label: 'Sweaters', count: '54' },
            { label: 'Dresses', count: '34' },
            { label: 'T-shirts', count: '56' },
            { label: 'Pants', count: '7' },
            { label: 'Underwear', count: '12' }
          ]
        }
      ],
      showOnPage: ['20', '40', '60'],
      products: [
        {
          title: 'Cream Beach Bag',
          id: 1,
          description:
            'Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.',
          image: '/homepage/productC.webp',
          price: { regular: '$50.00' },
          rating: { max: 5, score: 5 },
          reviewsCount: 8,
          isInWishlist: true
        },
        {
          title: 'Cream Beach Bag',
          id: 2,
          description:
            'Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.',
          image: '/homepage/productB.webp',
          price: { regular: '$50.00' },
          rating: { max: 5, score: 4 },
          reviewsCount: 8,
          isInWishlist: false
        },
        {
          title: 'Cream Beach Bag',
          id: 3,
          description:
            'Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.',
          image: '/homepage/productC.webp',
          price: { regular: '$50.00' },
          rating: { max: 5, score: 4 },
          reviewsCount: 8,
          isInWishlist: false
        },
        {
          title: 'Cream Beach Bag',
          id: 4,
          description:
            'Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.',
          image: '/homepage/productA.webp',
          price: { regular: '$50.00' },
          rating: { max: 5, score: 4 },
          reviewsCount: 8,
          isInWishlist: false
        },
        {
          title: 'Cream Beach Bag',
          id: 5,
          description:
            'Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.',
          image: '/homepage/productB.webp',
          price: { regular: '$50.00' },
          rating: { max: 5, score: 4 },
          reviewsCount: 8,
          isInWishlist: false
        },
        {
          title: 'Cream Beach Bag',
          id: 6,
          description:
            'Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.',
          image: '/homepage/productC.webp',
          price: { regular: '$50.00' },
          rating: { max: 5, score: 4 },
          reviewsCount: 8,
          isInWishlist: false
        },
        {
          title: 'Cream Beach Bag',
          id: 7,
          description:
            'Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.',
          image: '/homepage/productA.webp',
          price: { regular: '$50.00' },
          rating: { max: 5, score: 4 },
          reviewsCount: 6,
          isInWishlist: false
        },
        {
          title: 'Cream Beach Bag',
          id: 8,
          description:
            'Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.',
          image: '/homepage/productB.webp',
          price: { regular: '$50.00' },
          rating: { max: 5, score: 4 },
          reviewsCount: 8,
          isInWishlist: false
        }
      ],
      filters: {
        collection: [
          {
            label: 'Summer fly',
            value: 'summer-fly',
            count: '10',
            selected: false
          },
          {
            label: 'Best 2018',
            value: 'best-2018',
            count: '23',
            selected: false
          },
          {
            label: 'Your choice',
            value: 'your-choice',
            count: '54',
            selected: false
          }
        ],
        size: [
          { label: 'Size 2 (XXS)', value: 'xxs', count: '10', selected: false },
          { label: 'Size 4-6 (XS)', value: 'xs', count: '23', selected: false },
          { label: 'Size 8-10 (S)', value: 's', count: '54', selected: false },
          {
            label: 'Size 12-14 (M)',
            value: 'm',
            count: '109',
            selected: false
          },
          { label: 'Size 16-18 (L)', value: 'l', count: '23', selected: false },
          {
            label: 'Size 20-22(XL)',
            value: 'xl',
            count: '12',
            selected: false
          },
          {
            label: 'Size 24-26 (XXL)',
            value: 'xxl',
            count: '2',
            selected: false
          }
        ],
        price: [
          {
            label: 'Under $200',
            value: 'under-200',
            count: '23',
            selected: false
          },
          {
            label: 'Under $300',
            value: 'under-300',
            count: '54',
            selected: false
          }
        ],
        material: [
          { label: 'Cotton', value: 'coton', count: '33', selected: false },
          { label: 'Silk', value: 'silk', count: '73', selected: false }
        ]
      },
      breadcrumbs: [
        {
          text: 'Product Collection'
        }
      ]
    }
  },
  methods: {
    clearAllFilters() {
      const filters = Object.keys(this.filters)
      filters.forEach((name) => {
        const prop = this.filters[name]
        prop.forEach((value) => {
          value.selected = false
        })
      })
    },
    toggleWishlist(index) {
      this.products[index].isInWishlist = !this.products[index].isInWishlist
    },
    handleSelectedColor(color, index) {
      this.products[index].colors.map((el) => {
        el.selected = el.label === color.label ? !el.selected : false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@storefront-ui/vue/styles';
#category {
  --font-family--secondary: var(--font-family--primary);
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1140px;
    margin: 0 auto;
  }
}
.main {
  &.section {
    padding: var(--spacer-xs);
    @include for-desktop {
      padding: 0;
    }
  }
}
.breadcrumbs {
  font-family: 'Alibaba PuHuiTi';
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 46px;
  /* or 121% */
  text-align: center;
  /* 浅色模式文本/Title Text */
  color: #0c0b0e;
}
.navbar {
  position: relative;
  display: flex;
  border: 1px solid var(--c-light);
  border-width: 0 0 1px 0;
  @include for-desktop {
    border-width: 1px 0 1px 0;
  }
  &.section {
    padding: var(--spacer-sm);
    @include for-desktop {
      padding: 0;
    }
  }
  &__aside,
  &__main {
    display: flex;
    align-items: center;
    padding: var(--spacer-sm) 0;
  }
  &__aside {
    flex: 0 0 15%;
    padding: var(--spacer-sm) var(--spacer-sm);
    border: 1px solid var(--c-light);
    border-width: 0 1px 0 0;
  }
  &__main {
    flex: 1;
    display: flex;
    padding: 0;
    @include for-desktop {
      padding: var(--spacer-xs) var(--spacer-xl);
    }
  }
  &__title {
    --heading-title-font-weight: var(--font-weight--semibold);
    --heading-title-font-size: var(--h3-font-size);
  }
  &__filters-icon {
    margin: 0 0 0 var(--spacer-2xs);
    order: 1;
    @include for-desktop {
      margin: 0 var(--spacer-xs) 0 0;
      order: 0;
    }
  }
  &__filters-button {
    display: flex;
    align-items: center;
    --button-font-size: var(--font-size--base);
    --button-text-decoration: none;
    --button-color: var(--c-link);
    --button-font-weight: var(--font-weight--normal);
    @include for-mobile {
      --button-font-weight: var(--font-weight--medium);
      margin-right: var(--spacer-sm);
      order: 1;
    }
    svg {
      fill: var(--c-text-muted);
      transition: fill 150ms ease;
    }
    &:hover {
      svg {
        fill: var(--c-primary);
      }
    }
  }
  &__label {
    font-family: Overpass;
    font-weight: var(--font-weight--normal);
    color: var(--c-text-muted);
    @include for-desktop {
      margin: 0 var(--spacer-2xs) 0 0;
    }
  }
  &__select {
    --component-select-width: 220px;
    --component-select-padding: 0;
    --component-select-selected-padding: 0 var(--spacer-lg) 0 var(--spacer-2xs);
    --component-select-margin: 0;
    --component-select-error-message-height: 0;
  }
  &__sort {
    display: flex;
    align-items: center;
    margin: 0 auto 0 var(--spacer-2xl);
  }
  &__counter {
    font-family: Overpass;
    margin: auto;
    @include for-desktop {
      margin: auto 0 auto auto;
    }
  }
  &__view {
    display: flex;
    order: -1;
    align-items: center;
    margin: 0;
    @include for-desktop {
      margin: 0 0 0 var(--spacer-2xl);
      order: 0;
    }
    &-icon {
      cursor: pointer;
      margin: 0 var(--spacer-base) 0 var(--spacer-sm);
      @include for-desktop {
        margin: 0 var(--spacer-base) 0 0;
      }
      &:last-child {
        margin: 0;
      }
    }
    &-button {
      cursor: pointer;
      margin: 0 var(--spacer-base) 0 var(--spacer-sm);
      @include for-desktop {
        margin: 0 var(--spacer-base) 0 0;
      }
      &:last-child {
        margin: 0;
      }
    }
    &-label {
      margin: 0 var(--spacer-sm) 0 0;
      font: var(--font-weight--normal) var(--font-size--base) / 1.6 Overpass;
      text-decoration: none;
      color: var(--c-link);
    }
  }
}
.sort-by {
  --component-select-dropdown-z-index: 1;
  flex: unset;
  width: 11.875rem;
}
.main {
  display: flex;
}
.sidebar {
  flex: 0 0 15%;
  padding: var(--spacer-sm);
  border: 1px solid var(--c-light);
  border-width: 0 1px 0 0;
}
.sidebar-filters {
  --sidebar-title-display: none;
  --sidebar-top-padding: 0;
  @include for-desktop {
    --sidebar-content-padding: 0 var(--spacer-xl);
    --sidebar-bottom-padding: 0 var(--spacer-xl);
  }
}
.list {
  --menu-item-font-size: var(--font-size--sm);
  &__item {
    &:not(:last-of-type) {
      --list-item-margin: 0 0 var(--spacer-sm) 0;
    }
  }
}
.products {
  box-sizing: border-box;
  flex: 1;
  margin: 0;
  &__grid,
  &__list {
    display: flex;
    flex-wrap: wrap;
  }
  &__grid {
    justify-content: center;
    @include for-desktop {
      justify-content: space-between;
    }
  }
  &__product-card {
    --product-card-max-width: 11rem;
    margin-right: 3px;
    --product-card-title-margin: var(--spacer-2xs) 0 0 0;
    --price-regular-font-line-height: 1;
    margin-bottom: var(--spacer-sm);
    ::v-deep .sf-product-card__price {
      margin: var(--spacer-2xs) 0 var(--spacer-xs);
    }
    flex: 1 1 50%;
    @include for-desktop {
      margin-bottom: 0;
      --product-card-max-width: 50%;
      --product-card-title-margin: var(--spacer-base) 0 0 0;
    }
  }
  &__product-card-horizontal {
    margin-bottom: var(--spacer-sm);
    flex: 0 0 100%;
    ::v-deep .sf-product-card-horizontal__wishlist-icon {
      .sf-icon {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
  &__slide-enter {
    opacity: 0;
    transform: scale(0.5);
  }
  &__slide-enter-active {
    transition: all 0.2s ease;
    transition-delay: calc(0.1s * var(--index));
  }
  &__pagination {
    display: flex;
    justify-content: center;
    margin: var(--spacer-base) 0;
  }
  @include for-desktop {
    margin: var(--spacer-sm) 0 0 var(--spacer-sm);
    &__pagination {
      justify-content: flex-start;
      margin: var(--spacer-xl) 0 0 0;
    }
    &__product-card-horizontal {
      margin: var(--spacer-lg) 0;
    }
    &__product-card {
      flex: 1 1 20%;
      margin-top: 30px;
      margin-right: 30px;
    }
    &__list {
      margin: 0 0 0 var(--spacer-sm);
    }
  }
  &__show-on-page {
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    &__label {
      font-family: Overpass;
      font-size: var(--font-size--sm);
    }
  }
}
.sf-breadcrumbs__breadcrumb {
  top: 174px;
  font-family: 'Alibaba PuHuiTi';
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 46px;
  /* or 121% */
  text-align: center;
  /* 浅色模式文本/Title Text */
  color: #0c0b0e;
}
.sf-breadcrumbs__list-item {
  margin-top: 50px;
  margin-left: 10px;
}
</style>
