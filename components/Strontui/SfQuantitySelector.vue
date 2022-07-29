<template functional>
  <div
    :class="[data.class, data.staticClass, 'sf-quantity-selector']"
    :style="[data.style, data.staticStyle]"
  >
    <SfButton
      :disabled="
        props.disabled || Boolean(props.min !== null && props.qty <= props.min)
      "
      class="sf-button--pure sf-quantity-selector__button"
      data-testid="decrease"
      @click=" $options.handleInput(
          Number(props.qty) - 1,
          listeners,
          props.min,
          props.max
        )"
    >
      &minus;
    </SfButton>
   <SfInput
      type="number"
      :name="$options.uniqueKey()"
      :value="Number(props.qty)"
      :disabled="props.disabled"
      class="sf-quantity-selector__input"
      data-testid="sf-quantity-selector input"
    @input="$options.handleInput($event, listeners, props.min, props.max)"
      @blur="$options.handleBlur(listeners)"
    />
    <SfButton
      :disabled="
        props.disabled || Boolean(props.max !== null && props.qty >= props.max)
      "
      class="sf-button--pure sf-quantity-selector__button"
      data-testid="increase"
      @click="
       $options.handleInput(
          Number(props.qty) + 1,
          listeners,
          props.min,
          props.max
        )
      "
    >
      +
    </SfButton>
  </div>
</template>
<script  >

import SfInput from '@storefront-ui/vue'
import SfButton from '@storefront-ui/vue'
import { useCart } from '@vue-storefront/shopify'
export default {
  name: 'SfQuantitySelector',
    inject: {
    components: {
      default: {
        SfInput,
        SfButton
      }
    }
  },
  model: {
    prop: 'qty'
  },
  props: {
    qty: {
      type: [Number, String],
      default: 1
    },
     removeItem: {
     type: Function,
     default: null
    },

    disabled: {
      type: Boolean,
      default: false
    },
    min: {
      type: Number,
      default: null
    },
    max: {
      type: Number,
      default: null
    }
  },
// handlermove(qty){
//    const { wishlist, removeItem } = useCart()
//       const remove = removeItem(async(context, { currentCart, qty, customQuery })=>{
//          return {}
//         })
//  return remove
// },
mounted(){
 console.log(this.props.removeItem,55)
},

handleBlur(listeners) {
    return listeners.blur && listeners.blur()
  },
  uniqueKey() {
    const key = Math.random().toString(16).slice(2)
    return 'quantitySelector' + key
  },
  handleInput(qty, listeners, min, max) {
    // adjust qty per min/max if needed
    const minimum = min || 1
    if (qty < minimum || isNaN(qty)) {
      qty = minimum
      this.props.removeItem = ''
    } else if (max !== null && qty > max) {
      qty = max
    }
    return listeners.input && listeners.input(qty)
  }
}
</script>
<style lang="scss">
@import '~@storefront-ui/shared/styles/components/atoms/SfQuantitySelector.scss';
</style>
