<template>
  <div class="sf-product-card-horizontal">
    <div class="sf-product-card-horizontal__image-wrapper">
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
        <SfLink
          :link="link"
          class="sf-product-card-horizontal__link sf-product-card-horizontal__link--image"
        >
          <template v-if="Array.isArray(image)">
            <SfImage
              v-for="(picture, key) in image.slice(0, 2)"
              :key="key"
              class="sf-product-card-horizontal__picture"
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
            class="sf-product-card-horizontal__image"
            :src="image"
            :alt="title"
            :width="imageWidth"
            :height="imageHeight"
            :image-tag="imageTag"
            :nuxt-img-config="nuxtImgConfig"
          />
        </SfLink>
      </slot>
    </div>
    <div class="sf-product-card-horizontal__main">
      <div class="sf-product-card-horizontal__details">
        <slot name="title" v-bind="{ title, link }">
          <SfLink :link="link" class="sf-product-card-horizontal__link">
            <h3 class="sf-product-card-horizontal__title">
              {{ title }}
            </h3>
          </SfLink>
        </slot>
        <slot name="description">
          <p class="sf-product-card-horizontal__description desktop-only">
            {{ description }}
          </p>
        </slot>
        <div
          class="sf-product-card-horizontal__configuration"
          style="display: none"
        >
          <slot name="configuration" />
        </div>
      </div>
      <div class="sf-product-card-horizontal__actions-wrapper">
        <slot name="price" v-bind="{ specialPrice, regularPrice }">
          <SfPrice
            :class="{ 'display-none': !regularPrice }"
            class="sf-product-card-horizontal__price"
            :regular="regularPrice"
            :special="specialPrice"
          />
        </slot>
        <slot name="reviews" v-bind="{ maxRating, scoreRating }">
          <div
            :class="{ 'display-none': !scoreRating }"
            class="sf-product-card-horizontal__reviews"
            style="display: none"
          >
            <SfRating
              v-if="typeof scoreRating === 'number'"
              class="sf-product-card-horizontal__rating"
              :max="maxRating"
              :score="scoreRating"
            />
            <SfButton
              :class="{ 'display-none': !reviewsCount }"
              :aria-label="`Read ${reviewsCount} reviews about ${title}`"
              class="sf-button--pure sf-product-card-horizontal__reviews-count"
              href="#"
              @click="$emit('click:reviews')"
            >
              ({{ reviewsCount }})
            </SfButton>
          </div>
        </slot>
        <div class="sf-product-card-horizontal__actions">
          <slot name="actions" />
        </div>
        <div class="sf-product-card-horizontal__add-to-cart">
          <slot name="add-to-cart">
            <SfAddToCart
              v-model="itemQuantity"
              class="sf-product-card-horizontal__add-to-cart desktop-only"
              @input="$emit('input', $event)"
              @click="$emit('click:add-to-cart', itemQuantity)"
            />
          </slot>
        </div>
      </div>
      <SfButton
        v-if="wishlistIcon !== false"
        :aria-label="`${ariaLabel} ${title}`"
        class="sf-button--pure smartphone-only sf-product-card-horizontal__wishlist-icon"
        @click="toggleIsInWishlist"
      >
        <slot name="wishlist-icon" v-bind="{ currentWishlistIcon }">
          <SfIcon
            :icon="currentWishlistIcon"
            size="19px"
            data-test="sf-wishlist-icon"
          />
        </slot>
      </SfButton>
    </div>
  </div>
</template>
<script>
import {
  SfPrice,
  SfIcon,
  SfLink,
  SfRating,
  SfButton,
  SfAddToCart
} from '@storefront-ui/vue'
import SfImage from './Sfimage.vue'

export default {
  name: 'SfProductCardHorizontal',
  components: {
    SfPrice,
    SfRating,
    SfImage,
    SfIcon,
    SfLink,
    SfButton,
    SfAddToCart
  },
  props: {
    description: {
      type: String,
      default: ''
    },
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
     * @deprecated will be removed. Use slot to replace content
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
    qty: {
      type: [Number, String],
      default: 1
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
      quantity: this.qty
    }
  },
  computed: {
    currentWishlistIcon() {
      return this.isInWishlist ? this.isInWishlistIcon : this.wishlistIcon
    },
    ariaLabel() {
      return this.isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'
    },
    itemQuantity: {
      get() {
        return typeof this.quantity === 'string'
          ? Number(this.quantity)
          : this.quantity
      },
      set(newValue) {
        this.quantity = newValue
      }
    }
  },
  methods: {
    toggleIsInWishlist() {
      this.$emit('click:wishlist', !this.isInWishlist)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@storefront-ui/shared/styles/helpers';
.sf-product-card-horizontal {
  display: flex;
  box-sizing: border-box;
  padding: var(--product-card-horizontal-padding, var(--spacer-xs));
  background-color: var(--product-card-horizontal-background, var(--c-white));
  --property-value-font-weight: var(--font-weight--normal);
  @include for-desktop {
   height: 220px;
  }
  &__link {
    color: inherit;
    text-decoration: inherit;
    &--image {
      display: block;
      line-height: 0;
    }
  }
  &__image-wrapper {
    flex: 0 0 var(--product-card-horizontal-image-width, 5.3125rem);
    position: relative;
    &:hover {
      --product-card-horizontal-image-opacity: 1;
      --product-card-horizontal-image-even-opacity: 1;
    }
  }
  &__image,
  &__picture {
    --image-width: var(--product-card-horizontal-image-width, 100%);
    --image-height: var(--product-card-horizontal-image-height, auto);
    transition: var(
      --product-card-horizontal-image-transition,
      opacity 150ms ease-in-out
    );
    opacity: var(--product-card-horizontal-image-opacity);
    &:nth-child(even) {
      position: absolute;
      top: 0;
      left: 0;
      opacity: var(--product-card-horizontal-image-even-opacity, 0);
    }
  }
  &__main {
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: var(--product-card-horizontal-flex-direction, column);
    padding: var(
      --product-card-horizontal-main-padding,
      0 0 0 var(--spacer-sm)
    );
  }
  &__details,
  &__actions-wrapper {
    display: flex;
    flex-direction: column;
  }
  &__actions-wrapper {
    flex: 1;
    align-items: var(--product-card-horizontal-actions-wrapper, flex-start);
    margin: var(--product-card-horizontal-actions-wrapper-margin);
  }
  &__title {
    margin: 0;
    color: var(--c-link);
    color: var(--product-card-horizontal-title-color, var(--c-link));
    @include font(
      --product-card-horizontal-title-font,
      var(--font-weight--medium),
      var(--font-size--base),
      1.6,
      var(--font-family--secondary)
    );
  }
  &__description {
    margin: var(
      --product-card-horizontal-description-margin,
      var(--spacer-sm) 0
    );
    color: var(--product-card-horizontal-description-color, var(--c-text-muted));
    @include font(
      --product-card-horizontal-description-font,
      var(--font-weight--normal),
      var(--font-size--base),
      1.6,
      var(--font-family--primary)
    );
  }
  &__configuration {
    margin: var(--product-card-horizontal-configuration-margin, 0);
  }
  &__reviews {
    display: flex;
    align-items: center;
    margin: var(--product-card-horizontal-review-margin, auto 0 0 0);
    @include font(
      --product-card-horizontal-reviews-font,
      var(--font-weight--light),
      var(--font-size--sm),
      1.4,
      var(--font-family--secondary)
    );
    &-count {
      --button-font-size: var(--font-size--sm);
      --button-font-weight: var(--font-weight--light);
      color: var(--c-text);
      text-decoration: none;
      margin: 0 0 0 var(--spacer-xs);
    }
  }
  &__actions {
    margin: var(--product-card-horizontal-actions-margin, 0);
  }
  &__add-to-cart {
    margin: var(--product-card-horizontal-add-to-cart-margin, 0);
  }
  &__wishlist-icon {
    --icon-color: var(--c-dark-variant);
    position: absolute;
    top: 0;
    right: 0;
  }
  &:hover {
    box-shadow: var(--product-card-horizontal-box-shadow, 0px 4px 11px rgba(29, 31, 34, 0.1));
  }
  @include for-desktop {
    --product-card-horizontal-flex-direction: row;
    --product-card-horizontal-image-width: 8.75rem;
    --product-card-horizontal-padding: var(--spacer-xs) var(--spacer-sm) var(--spacer-xs) var(--spacer-xs);
    --product-card-horizontal-actions-wrapper: flex-end;
    --product-card-horizontal-review-margin: var(--spacer-xs) 0 0 0;
    --product-card-horizontal-configuration-margin: auto 0 var(--spacer-xs) 0;
    --product-card-horizontal-add-to-cart-margin: auto 0 0 0;
    --product-card-horizontal-actions-margin: var(--spacer-base) 0 0 0;
    --product-card-horizontal-actions-wrapper-margin: 0;
    --product-card-horizontal-title-font-weight: var(--font-weight--normal);
  }
}
::v-deep .sf-image-loaded{
   height:85px;
   width:85px ;
  @include for-desktop {
   height: 200px;
   width: 200px ;
  }
}
::v-deep.sf-product-card-horizontal__details{
   @include for-desktop {
     margin-top:10px;
  }
}
::v-deep.sf-product-card-horizontal__add-to-cart{
    @include for-desktop {
     margin-top:39px;
  }
}
// ::v-deep.sf-product-card-horizontal__title{
//   @include for-desktop {
//     margin: ;
//   }
// }
::v-deep.products__product-card-horizonta{
  @include for-desktop {
   margin: 22px 0 !important;
  }
}
</style>
