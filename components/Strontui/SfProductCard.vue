<template>
  <div
    class="sf-product-card"
    :class="{ 'has-colors': colors.length }"
    data-testid="product-card"
  >
    <div class="sf-product-card__image-wrapper">
      <slot
        name="image"
        v-bind="{
          image,
          title,
          link,
          imageHeight,
          imageWidth,
          imageTag,
          nuxtImgConfig,
        }"
      >
        <SfButton
          :link="link"
          class="sf-button--pure sf-product-card__link"
          data-testid="product-link"
          aria-label="Go To Product"
          v-on="$listeners"
        >
          <template v-if="Array.isArray(image)">
            <SfImage
              v-for="(picture, key) in image.slice(0, 2)"
              :key="key"
              class="sf-product-card__picture"
              :src="picture"
              :alt="title"
              :width="imageWidth"
              :height="imageHeight"
              :image-tag="imageTag"
              :nuxt-img-config="nuxtImgConfig"
            />
          </template>
          <SfImage
            v-else
            class="sf-product-card__image"
            :src="image"
            :alt="title"
            :width="imageWidth"
            :height="imageHeight"
            :image-tag="imageTag"
            :nuxt-img-config="nuxtImgConfig"
          />
        </SfButton>
      </slot>
      <slot name="colors" v-bind="{ colors }">
        <SfColorPicker
          :class="{ 'display-none': !colors.length }"
          class="sf-product-card__colors"
          label="Choose color"
          :is-open="!isMobile || openColorPicker"
          @click:toggle="toggleColorPicker"
        >
          <SfColor
            v-for="(color, i) in colors"
            :key="color.value"
            :color="color.color"
            :selected="color.selected"
            class="sf-product-card__color"
            :class="{ 'display-none': i > 3 && showBadge }"
            @click="handleSelectedColor(i)"
          />
          <SfBadge
            v-if="showBadge"
            class="sf-product-card__colors-badge color-secondary"
          >
            {{ `+${colors.length - 4}` }}
          </SfBadge>
        </SfColorPicker>
      </slot>
      <slot name="badge" v-bind="{ badgeLabel, badgeColor }">
        <SfBadge
          class="sf-product-card__badge"
          :class="[badgeColorClass, { 'display-none': !badgeLabel }]"
        >{{ badgeLabel }}</SfBadge
        >
      </slot>
      <SfButton
        :aria-label="`${ariaLabel} ${title}`"
        :class="[wishlistIconClasses, { 'display-none': !wishlistIcon }]"
        data-testid="product-wishlist-button"
        @click="toggleIsInWishlist"
      >
        <slot name="wishlist-icon" v-bind="{ currentWishlistIcon }">
          <SfIcon
            v-if="currentWishlistIcon !== false"
            :icon="currentWishlistIcon"
            size="22px"
            data-test="sf-wishlist-icon"
          />
        </slot>
      </SfButton>
      <div :class="{ 'display-none': !showAddToCartButton }">
        <slot
          name="add-to-cart"
          v-bind="{
            isAddedToCart,
            showAddedToCartBadge,
            isAddingToCart,
            title,
          }"
        >
          <SfCircleIcon
            class="sf-product-card__add-button"
            :aria-label="`Add to Cart ${title}`"
            :has-badge="showAddedToCartBadge"
            :disabled="addToCartDisabled"
            data-testid="product-add-icon"
            @click="onAddToCart"
          >
            <span class="sf-product-card__add-button--icons">
              <transition
                v-if="!isAddingToCart && !isAddedToCart"
                name="sf-pulse"
                mode="out-in"
              >
                <slot name="add-to-cart-icon">
                  <SfIcon
                    key="add_to_cart"
                    icon="add_to_cart"
                    size="20px"
                    color="white"
                  />
                </slot>
              </transition>
              <transition v-else name="sf-pulse" mode="out-in">
                <slot name="adding-to-cart-icon">
                  <SfIcon
                    key="added_to_cart"
                    icon="added_to_cart"
                    size="20px"
                    color="white"
                  />
                </slot>
              </transition>
            </span>
          </SfCircleIcon>
        </slot>
      </div>
    </div>
    <slot name="title" v-bind="{ title, link }">
      <SfButton
        :link="link"
        class="sf-button--pure sf-product-card__link"
        data-testid="product-link"
        v-on="$listeners"
      >
        <span class="sf-product-card__title">
          {{ title }}
        </span>
      </SfButton>
    </slot>
    <slot name="price" v-bind="{ specialPrice, regularPrice }">
      <SfPrice
        :class="{ 'display-none': !regularPrice }"
        class="sf-product-card__price"
        :regular="regularPrice"
        :special="specialPrice"
      />
    </slot>
    <slot name="reviews" v-bind="{ maxRating, scoreRating }">
      <div
        :class="{ 'display-none': !scoreRating }"
        class="sf-product-card__reviews"
      >
        <SfRating
          v-if="typeof scoreRating === 'number'"
          class="sf-product-card__rating"
          :max="maxRating"
          :score="scoreRating"
        />
        <SfButton
          :class="{ 'display-none': !reviewsCount }"
          :aria-label="`Read ${reviewsCount} reviews about ${title}`"
          class="sf-button--pure sf-product-card__reviews-count"
          data-testid="product-review-button"
          @click="$emit('click:reviews')"
        >
          ({{ reviewsCount }})
        </SfButton>
      </div>
    </slot>
  </div>
</template>
<script>
import { colorsValues as SF_COLORS } from '@storefront-ui/shared/variables/colors'
import {
  SfIcon,
  SfPrice,
  SfRating,
  SfImage,
  SfCircleIcon,
  SfBadge,
  SfButton,
  SfColorPicker,
  SfColor
} from '@storefront-ui/vue'
import {
  mapMobileObserver,
  unMapMobileObserver
} from '@storefront-ui/vue/src/utilities/mobile-observer'
export default {
  name: 'SfProductCard',
  components: {
    SfPrice,
    SfRating,
    SfIcon,
    SfImage,
    SfCircleIcon,
    SfBadge,
    SfButton,
    SfColorPicker,
    SfColor
  },
  props: {
    image: {
      type: [Array, Object, String],
      default: ''
    },
    imageWidth: {
      type: [Number, String],
      default: null
    },
    imageHeight: {
      type: [Number, String],
      default: null
    },
    badgeLabel: {
      type: String,
      default: ''
    },
    badgeColor: {
      type: String,
      default: ''
    },
    colors: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ''
    },
    link: {
      type: [String, Object],
      default: null
    },
    /**
     * Link element tag
     * @deprecated will be removed in 1.0.0 use slot to replace content
     */
    linkTag: {
      type: String,
      default: undefined
    },
    scoreRating: {
      type: [Number, Boolean],
      default: false
    },
    reviewsCount: {
      type: [Number, Boolean],
      default: false
    },
    maxRating: {
      type: [Number, String],
      default: 5
    },
    regularPrice: {
      type: [Number, String],
      default: null
    },
    specialPrice: {
      type: [Number, String],
      default: null
    },
    wishlistIcon: {
      type: [String, Array, Boolean],
      default: 'heart'
    },
    isInWishlistIcon: {
      type: [String, Array],
      default: 'heart_fill'
    },
    isInWishlist: {
      type: Boolean,
      default: false
    },
    showAddToCartButton: {
      type: Boolean,
      default: false
    },
    isAddedToCart: {
      type: Boolean,
      deafult: false
    },
    addToCartDisabled: {
      type: Boolean,
      default: false
    },
    imageTag: {
      type: String,
      default: ''
    },
    nuxtImgConfig: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      isAddingToCart: false,
      openColorPicker: false
    }
  },
  computed: {
    ...mapMobileObserver(),
    isSFColors() {
      return SF_COLORS.includes(this.badgeColor.trim())
    },
    badgeColorClass() {
      return this.isSFColors ? `${this.badgeColor.trim()}` : ''
    },
    currentWishlistIcon() {
      return this.isInWishlist ? this.isInWishlistIcon : this.wishlistIcon
    },
    showAddedToCartBadge() {
      return !this.isAddingToCart && this.isAddedToCart
    },
    ariaLabel() {
      return this.isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'
    },
    wishlistIconClasses() {
      const defaultClass = 'sf-button--pure sf-product-card__wishlist-icon'
      return `${defaultClass} ${this.isInWishlist ? 'on-wishlist' : ''}`
    },
    showBadge() {
      return this.colors.length > 5
    }
  },
  beforeDestroy() {
    unMapMobileObserver()
  },
  methods: {
    toggleIsInWishlist() {
      this.$emit('click:wishlist', !this.isInWishlist)
    },
    onAddToCart(event) {
      event.preventDefault()
      this.isAddingToCart = true
      setTimeout(() => {
        this.isAddingToCart = false
      }, 1000)
      this.$emit('click:add-to-cart')
    },
    handleSelectedColor(colorIndex) {
      if (this.colors.length > 0) {
        this.colors.map((color, i) => {
          if (colorIndex === i) {
            this.$emit('click:colors', color)
            if (this.isMobile) {
              this.toggleColorPicker()
            }
          }
        })
      }
    },
    toggleColorPicker() {
      this.openColorPicker = !this.openColorPicker
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@storefront-ui/shared/styles/helpers';
.sf-product-card {
  box-sizing: border-box;
  position: relative;
  z-index: var(--product-card-z-index);
  max-width: var(--product-card-max-width, 10.625rem);
  flex: 0 1 var(--product-card-max-width, 10.625rem);
  height: var(--product-card-height);
  padding: var(--product-card-padding, var(--spacer-xs));
  background-color: var(--product-card-background, var(--c-white));
  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: var(--product-card-transition);
    box-shadow: var(--product-card-box-shadow);
  }
  &:hover {
    --product-card-image-opacity: 1;
    --product-card-image-even-opacity: 1;
    --product-card-wishlist-icon-opacity: 1;
    --product-card-add-button-opacity: 1;
    --product-card-z-index: 1;
    --product-card-box-shadow: 0px 4px 11px rgba(29, 31, 34, 0.1);
  }
  &.has-colors {
    --product-card-add-button-bottom: 0;
  }
  &:active {
    --product-card-box-shadow: 0px 4px 11px rgba(29, 31, 34, 0.1);
  }
  &__link {
    display: block;
    width: 100%;
    line-height: 0;
    text-decoration: none;
    margin: var(--product-card-link-margin, 0);
    text-align: left;
  }
  &__colors {
    --color-picker-position: absolute;
    --color-picker-label-font-size: var(--font-size--base);
    --color-picker-label-font-weight: var(--font-weight--medium);
    @include for-desktop {
      --color-picker-position: relative;
      --color-picker-justify-content: flex-start;
      --color-picker-padding: 0;
      pointer-events: none;
    }
  }
  &__color {
    margin: var(--spacer-xs);
    pointer-events: visible;
    @include for-desktop {
      margin: var(--spacer-sm) var(--spacer-sm) 0 0;
    }
  }
  &__title {
    @include font(
      --product-card-title-font,
      var(--font-weight--normal),
      var(--h5-font-size),
      1.6,
      var(--font-family--secondary)
    );
    color: var(--product-card-title-color, var(--c-link));
    margin: var(--product-card-title-margin, var(--spacer-xs) 0 0 0);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
  }
  &__image-wrapper {
    position: relative;
  }
  &__image,
  &__picture {
    --image-width: var(--product-card-image-width, 100%);
    --image-height: var(--product-card-image-height, auto);
    transition: var(--product-card-image-transition, opacity 150ms ease-in-out);
    opacity: var(--product-card-image-opacity);
    &:nth-child(even) {
      position: absolute;
      top: 0;
      left: 0;
      opacity: var(--product-card-image-even-opacity, 0);
    }
  }
  &__badge {
    position: absolute;
    top: var(--product-card-badge-top, var(--spacer-xs));
    left: var(--product-card-badge-left, 0);
  }
  &__colors-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: var(--spacer-xs);
    width: 2.5rem;
    height: 2.5rem;
    padding: 0;
    color: var(--c-white);
    z-index: 2;
  }
  &__add-button {
    --circle-icon-position: absolute;
    right: var(--product-card-add-button-right, 1rem);
    bottom: var(--product-card-add-button-bottom, -1.5rem);
    display: var(--product-card-add-button-display, none);
    transform: var(--product-card-add-button-transform);
    opacity: var(--product-card-add-button-opacity, 0);
    &:focus {
      --product-card-add-button-opacity: 1;
    }
    & .sf-circle-icon:hover {
      --button-box-shadow: 0px 4px 11px rgba(29, 31, 34, 0.1);
      --button-box-shadow-opacity: 0.3;
    }
  }
  &__price {
    margin: var(--product-card-margin, 0);
  }
  &__reviews {
    display: flex;
    align-items: center;
  }
  &__rating {
    display: flex;
  }
  &__reviews-count {
    margin: var(--product-card-reviews-count-margin, 0 0 0 var(--spacer-xs));
    color: var(--product-card-reviews-count-color, var(--c-text));
    text-decoration: none;
    @include font(
      --product-reviews-count-font,
      var(--font-weight--light),
      var(--font-size--sm),
      1.6,
      var(--font-family--secondary)
    );
  }
  &__wishlist-icon {
    --icon-color: var(--c-dark-variant);
    position: absolute;
    top: var(--product-card-wishlist-icon-top, var(--spacer-xs));
    right: var(--product-card-wishlist-icon-right, var(--spacer-xs));
    padding: var(--product-card-wishlist-icon-padding, 0);
    opacity: var(--product-card-wishlist-icon-opacity, 1);
    transition: var(
      --product-card-wishlist-icon-transition,
      opacity 150ms ease-in-out
    );
    cursor: pointer;
    &:focus {
      --product-card-wishlist-icon-opacity: 1;
    }
  }
  &.on-wishlist {
    --product-card-wishlist-icon-opacity: 1;
  }
  @include for-desktop {
    --product-card-max-width: 15.5rem;
    --product-card-padding: var(--spacer-sm);
    --product-card-transition: box-shadow 150ms ease-in-out;
    --product-card-wishlist-icon-top: var(--spacer-base);
    --product-card-wishlist-icon-right: var(--spacer-base);
    --product-card-wishlist-icon-opacity: 0;
    --product-card-add-button-display: flex;
    --product-card-title-margin: var(--spacer-sm) 0 0 0;
    --product-card-margin: var(--spacer-xs) 0;
    &__colors-badge {
      margin: var(--spacer-sm) var(--spacer-sm) 0 0;
      width: 1.25rem;
      height: 1.25rem;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
  }
}

</style>
