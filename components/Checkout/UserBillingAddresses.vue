<template>
  <div>
    <SfAddressPicker
      :selected="String(currentAddressId)"
      class="billing__addresses"
      @input="setCurrentAddress($event)"
    >
      <SfAddress
        v-for="billingAddress in billingAddresses"
        :key="userBillingGetters.getId(billingAddress)"
        :name="String(userBillingGetters.getId(billingAddress))"
      >
        <span
        >{{ userBillingGetters.getFirstName(billingAddress) }}
          {{ userBillingGetters.getLastName(billingAddress) }}</span
        >
        <span
        >{{ userBillingGetters.getStreetName(billingAddress) }}
          {{ userBillingGetters.getApartmentNumber(billingAddress) }}</span
        >
        <span>{{ userBillingGetters.getPostCode(billingAddress) }}</span>
        <span
        >{{ userBillingGetters.getCity(billingAddress)
        }}{{
          userBillingGetters.getProvince(billingAddress)
            ? `, ${userBillingGetters.getProvince(billingAddress)}`
            : ''
        }}</span
        >
        <span>{{ userBillingGetters.getCountry(billingAddress) }}</span>
        <span>{{ userBillingGetters.getPhone(billingAddress) }}</span>
      </SfAddress>
    </SfAddressPicker>
    <SfCheckbox
      data-cy="billing-details-checkbox_isDefault"
      :selected="setAsDefault"
      name="setAsDefault"
      label="Use this address as my default one."
      class="billing-address-setAsDefault"
      @change="$emit('changeSetAsDefault', $event)"
    />
  </div>
</template>

<script type="module">
import { SfCheckbox, SfAddressPicker } from '@storefront-ui/vue'
import { userBillingGetters } from '@vue-storefront/shopify'

export default {
  name: 'UserBillingAddresses',
  components: {
    SfCheckbox,
    SfAddressPicker
  },
  props: {
    currentAddressId: {
      type: Number,
      required: true
    },
    setAsDefault: {
      type: Boolean,
      required: true
    },
    billingAddresses: {
      type: Array,
      required: true
    }
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup(_, { emit }) {
    const setCurrentAddress = ($event) => emit('setCurrentAddress', $event)

    return {
      setCurrentAddress,
      userBillingGetters
    }
  }
}
</script>

<style lang="scss" scoped>
.billing__addresses {
  --font-family--secondary: var(--font-family--primary);
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: var(--spacer-xl);
}

.billing-address-setAsDefault,
.form__action-button--margin-bottom {
  margin-bottom: var(--spacer-xl);
}
</style>
