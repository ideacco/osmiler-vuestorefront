<template>
  <SfLoader
    v-if="productloading"
    class="pdc-pdp-loader"
    :loading="productloading"
  >
    <div />
  </SfLoader>
  <div v-else id="product">
    <SfBreadcrumbs
      class="breadcrumbs breadcrumbs-center"
      :breadcrumbs="breadcrumbs"
    >
      <template #link="{ breadcrumb }">
        <nuxt-link
          :data-testid="breadcrumb.text"
          :to="breadcrumb.link ? localePath(breadcrumb.link) : ''"
          class="sf-link disable-active-link sf-breadcrumbs__breadcrumb"
        >
          {{ breadcrumb.text }}
        </nuxt-link>
      </template>
    </SfBreadcrumbs>
    <div class="product">
      <SfGallery
        id="SfGallery"
        ref="SfGallery"
        :images="productGallery3"
        :imageWidth="1000"
        :imageHeight="1000"
        :thumbWidth="160"
        :thumbHeight="160"
        :current="ActiveVariantImage + 1"
        :sliderOptions="{
          type: 'slider',
          autoplay: false,
          rewind: false,
          gap: 0,
        }"
        :outsideZoom="false"
        enableZoom
      />
      <div class="product__info">
        <div class="product__header">
          <SfHeading
            :title="productGetters.getFullName(product)"
            :level="3"
            class="sf-heading--no-underline sf-heading--left"
          />
          <SfIcon
            icon="drag"
            size="xxl"
            color="var(--c-text-disabled)"
            class="product__drag-icon smartphone-only"
          />
        </div>
        <div style="color:#00477d;font-size:16px;"
                    v-show="
              ispath ===
                '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTc0MDc1ODg2MTA=/osmiler-swing-head-5pcs' ||
                ispath ===
                '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTc0MDc1ODg2MTA=/osmiler-swing-head-5pcs?Color=White' ||
                ispath ===
                '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTc0MDc1ODg2MTA=/osmiler-swing-head-5pcs?Color=Deep%20Blue' ||
                ispath ===
                '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNDc5OTI1Nzg=/osmiler-swing-head-3pcs' ||
                ispath ===
                '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNDc5OTI1Nzg=/osmiler-swing-head-3pcs?Color=White' ||
                ispath ===
                '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNDc5OTI1Nzg=/osmiler-swing-head-3pcs?Color=Deep%20Blue'
            "
        >&nbsp;will start shipping at the end of the July</div>

        <div class="product__price-and-rating">
          <SfPrice
            :regular="$n(productGetters.getPrice(product).regular, 'currency')>$n(productGetters.getPrice(product).special, 'currency')?$n(productGetters.getPrice(product).regular, 'currency'):null"
            :special="$n(productGetters.getPrice(product).regular, 'currency')<$n(productGetters.getPrice(product).special, 'currency')?null:$n(productGetters.getPrice(product).special, 'currency')"
          />
        </div>
        <div class="product__details">
          <div
            class="product__description"
            v-show="
              ispath ===
                '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing' ||
                ispath ===
                '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing?Color=Silver' ||
                ispath ===
                '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing?Color=Deep%20Blue'
            "
          >
            {{ productdescription1 }}
          </div>
          <div
            class="product__description"
            v-show="
              ispath ===
                '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTc0MDc1ODg2MTA=/osmiler-swing-head-5pcs' ||
                ispath ===
                '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTc0MDc1ODg2MTA=/osmiler-swing-head-5pcs?Color=White' ||
                ispath ===
                '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTc0MDc1ODg2MTA=/osmiler-swing-head-5pcs?Color=Deep%20Blue' ||
                ispath ===
                '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNDc5OTI1Nzg=/osmiler-swing-head-3pcs' ||
                ispath ===
                '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNDc5OTI1Nzg=/osmiler-swing-head-3pcs?Color=White' ||
                ispath ===
                '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNDc5OTI1Nzg=/osmiler-swing-head-3pcs?Color=Deep%20Blue'
            "
          >
            {{ productdescription2 }}
          </div>
          <div
            v-if="options && Object.keys(options).length > 0"
            class="product__variants"
          >
            <template v-for="(option, key) in options">
              <!-- <SfSelect
                v-if="key.toLowerCase() !== 'color'"
                :key="`attrib-${key}`"
                :data-cy="`product-select_${key.toLowerCase()}`"
                :set="(atttLbl = key)"
                :value="configuration[key] || options[key][0]"
                :label="$t(`${key}`)"
                :class="`sf-select--underlined product__select-${key.toLowerCase()}`"
                :required="true"
                @input="(key) => updateFilter({ [atttLbl]: key })"
              >
                <SfSelectOption
                  v-for="(attribs, a) in option"
                  :key="`item-${a}`"
                  :value="attribs"
                >
                  {{ attribs }}
                </SfSelectOption>
              </SfSelect> -->
              <div
                v-if="key.toLowerCase() === 'color'"
                :key="`attrib-${key.toLowerCase()}`"
                class="product__colors"
              >
                <label class="product__color-label">{{ $t(key) }}</label>
                <div class="product__flex-break"></div>
                <SfButton
                  v-for="(attribs, a) in option"
                  @click="
                    ;(atttLbl = key),
                      updateFilter(attribs, { [atttLbl]: attribs })
                  "
                  :class="{ active: attribs == isProductCartButtonColor }"
                  :key="a"
                  style="margin-right: 30px"
                >{{ attribs }}</SfButton
                >
              </div>
            </template>
          </div>

          <SfAlert
            v-if="!productGetters.getStockStatus(product)"
            :message="$t('Out of Stock')"
            type="warning"
            class="product__stock-information"
          >
            <template #icon>
              <SfIcon
                color="yellow-primary"
                icon="info_shield"
                size="lg"
                view-box="0 0 24 24"
              />
            </template>
          </SfAlert>
          <SfAddToCart
            v-model.lazy="qty"
            :disabled="!productGetters.getStockStatus(product)"
            data-cy="product-cart_add"
            :stock="stock"
            :can-add-to-cart="stock > 0"
            class="product__add-to-cart"
          >
            <template #add-to-cart-btn>
              <SfButton
                class="sf-add-to-cart__button SfButtontwo"
                :disabled="!productGetters.getStockStatus(product)"
                @click="
                  addingToCart({
                    product,
                    quantity: parseInt(qty),
                    customQuery: [
                      { key: 'CustomAttrKey', value: 'CustomAttrValue' },
                    ],
                  }),toggleCartSidebar()
                "
              >
                {{ $t('Add to Cart') }}
              </SfButton>
              <SfButton
                v-if="totalItems"
                class="sf-button--full-width sf-proceed_to_checkout SfButtontwo"
                @click="toggleCartSidebar(),gotocheckout()"
              >
                {{ $t('Go to checkout') }}
              </SfButton>
              <SfButton
                v-else
                class="sf-button--full-width sf-proceed_to_checkout SfButtontwo"
                :disabled="!productGetters.getStockStatus(product)"
                @click="
                  addingToCarts({
                    product,
                    quantity: parseInt(qty),
                    customQuery: [
                      { key: 'CustomAttrKey', value: 'CustomAttrValue' },
                    ],
                  }),toggleCartSidebar()
                "
              >
                {{ $t('Go to checkout') }}
              </SfButton>
            </template>
          </SfAddToCart>
        </div>
        <LazyHydrate when-idle>
          <SfTabs :open-tab="1" class="product__tabs">
            <SfTab data-cy="product-tab_description" title="Description">
              <div v-if="productDescriptionHtml" class="product__description">
                <div v-html="productDescriptionHtml"></div>
              </div>
              <SfProperty
                v-for="(property, i) in properties"
                :key="i"
                :name="property.name"
                :value="property.value"
                class="product__property"
              >
                <template v-if="property.name === 'Category'" #value>
                  <SfButton class="product__property__button sf-button--text">
                    {{ property.value }}
                  </SfButton>
                </template>
              </SfProperty>
            </SfTab>
            <!-- <SfTab
              :title="$t('Additional Information')"
              data-cy="product-tab_additional"
              class="product__additional-info"
            >
              <div class="product__additional-info">
                <p class="product__additional-info__title">
                  {{ $t('Brand') }}
                </p> -->
                <!-- <p>{{ brand }}</p>
                <p class="product__additional-info__title">
                  {{ $t('Instruction1') }}
                </p> -->
                <!-- <p class="product__additional-info__paragraph">
                  {{ $t('Instruction2') }}
                </p>
                <p class="product__additional-info__paragraph">
                  {{ $t('Instruction3') }}
                </p>
                <p>{{ careInstructions }}</p>
              </div>
            </SfTab> -->
          </SfTabs>
        </LazyHydrate>
      </div>
    </div>
    <div
      v-show="
        ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing?Color=Silver' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing?Color=Deep%20Blue'
      "
    >
      <BannerGrids />
    </div>
    <div
      v-show="
        ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing?Color=Silver' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing?Color=Deep%20Blue'
      "
    >
      <Community />
    </div>
    <div
      v-show="
        ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing?Color=Silver' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing?Color=Deep%20Blue'
      "
    >
      <Mp3 />
    </div>
    <div
      v-show="
        ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing?Color=Silver' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing?Color=Deep%20Blue'
      "
    >
      <Automatic />
    </div>
    <div
      v-show="
        ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing?Color=Silver' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing?Color=Deep%20Blue'
      "
    >
      <AutoPage />
    </div>
    <div
      v-show="
        ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing?Color=Silver' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing?Color=Deep%20Blue'
      "
    >
      <Proudcut />
    </div>
        <div
      v-show="
        ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing?Color=Silver' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing?Color=Deep%20Blue'
      "
    >
      <Chargepc />
    </div>
    <div
      v-show="
        ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing?Color=Silver' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing?Color=Deep%20Blue'
      "
    >
      <AutoPages />
    </div>
    <div
      v-show="
        ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing?Color=Silver' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing?Color=Deep%20Blue'
      "
    >
      <Toothbrushpople />
    </div>
    <div
      v-show="
        ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing?Color=Silver' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing?Color=Deep%20Blue'
      "
    >
      <Certificate />
    </div>
    <div
      v-show="
        ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing?Color=Silver' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing?Color=Deep%20Blue'
      "
    >
      <Autobox />
    </div>
    <div
      v-show="
        ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing?Color=Silver' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNTM0MzIwNjY=/osmiler-swing?Color=Deep%20Blue'
      "
    >
      <HomeLogolist />
    </div>

    <div
      v-show="
        ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNDc5OTI1Nzg=/osmiler-swing-head-3pcs' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNDc5OTI1Nzg=/osmiler-swing-head-3pcs?Color=White' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNDc5OTI1Nzg=/osmiler-swing-head-3pcs?Color=Deep%20Blue'
      "
    >
      <AutoPage />
    </div>

    <div
      v-show="
        ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNDc5OTI1Nzg=/osmiler-swing-head-3pcs' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNDc5OTI1Nzg=/osmiler-swing-head-3pcs?Color=White' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNDc5OTI1Nzg=/osmiler-swing-head-3pcs?Color=Deep%20Blue'
      "
    >
      <ToothBannerGrids />
    </div>
    <div
      v-show="
        ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNDc5OTI1Nzg=/osmiler-swing-head-3pcs' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNDc5OTI1Nzg=/osmiler-swing-head-3pcs?Color=White' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNDc5OTI1Nzg=/osmiler-swing-head-3pcs?Color=Deep%20Blue'
      "
    >
      <TootBrushHead3 />
    </div>
    <div
      v-show="
        ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNDc5OTI1Nzg=/osmiler-swing-head-3pcs' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNDc5OTI1Nzg=/osmiler-swing-head-3pcs?Color=White' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNDc5OTI1Nzg=/osmiler-swing-head-3pcs?Color=Deep%20Blue'
      "
    >
      <Toothbrushheadfooter />
    </div>
    <div
      v-show="
        ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTc0MDc1ODg2MTA=/osmiler-swing-head-5pcs' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTc0MDc1ODg2MTA=/osmiler-swing-head-5pcs?Color=White' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTc0MDc1ODg2MTA=/osmiler-swing-head-5pcs?Color=Deep%20Blue'
      "
    >
      <AutoPage />
    </div>
    <div
      v-show="
        ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTc0MDc1ODg2MTA=/osmiler-swing-head-5pcs' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTc0MDc1ODg2MTA=/osmiler-swing-head-5pcs?Color=White' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTc0MDc1ODg2MTA=/osmiler-swing-head-5pcs?Color=Deep%20Blue'
      "
    >
      <ToothBannerGrids />
    </div>
    <div
      v-show="
        ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTc0MDc1ODg2MTA=/osmiler-swing-head-5pcs' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTc0MDc1ODg2MTA=/osmiler-swing-head-5pcs?Color=White' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTc0MDc1ODg2MTA=/osmiler-swing-head-5pcs?Color=Deep%20Blue'
      "
    >
      <TootBrushHead5 />
    </div>
    <div
      v-show="
        ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTc0MDc1ODg2MTA=/osmiler-swing-head-5pcs' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTc0MDc1ODg2MTA=/osmiler-swing-head-5pcs?Color=White' ||
          ispath ===
          '/p/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTc0MDc1ODg2MTA=/osmiler-swing-head-5pcs?Color=Deep%20Blue'
      "
    >
      <Toothbrushheadfooter />
    </div>
  </div>
</template>
<script>
import {
  SfProperty,
  SfHeading,
  SfPrice,
  SfSelect,
  SfAddToCart,
  SfTabs,
  SfIcon,
  SfAlert,
  SfBreadcrumbs,
  SfLoader,
  SfButton,
  SfColor
} from '@storefront-ui/vue'
import SfGallery from '~/components/Strontui/SfGallery'
import Certificate from '~/components/Home/Certificate'
import Contact from '~/components/Home/Contact'
// import GridList from '~/components/Home/GridList'
import BannerGrids from '~/components/Home/BannerGrids'
import ToothBannerGrids from '~/components/Toothbrushhead/ToothBannerGrids'
import TootBrushHead3 from '~/components/Toothbrushhead/TootBrushHead3'
import TootBrushHead5 from '~/components/Toothbrushhead/TootBrushHead5'
import Toothbrushheadfooter from '~/components/Toothbrushhead/Toothbrushheadfooter'
import Community from '~/components/Home/Community'
import Mp3 from '~/components/Home/Mp3'
import Automatic from '~/components/Home/Automatic'
import AutoPage from '~/components/Home/AutoPage'
import AutoPages from '~/components/Home/AutoPages'
import Proudcut from '~/components/Home/Proudcut'
import Toothbrushpople from '~/components/Toothbrush/Toothbrushpople'
import Chargepc from '~/components/Toothbrush/Chargepc.vue'
import Autobox from '~/components/Home/Autobox'
import HomeLogolist from '~/components/Home/HomeLogolist'
import SendEmali from '~/components/Home/SendEmali'
import InstagramFeed from '~/components/InstagramFeed.vue'
import RelatedProducts from '~/components/RelatedProducts.vue'
import {
  ref,
  computed,
  watch,
  useRoute,
  useRouter,
  onMounted
} from '@nuxtjs/composition-api'
import {
  useProduct,
  useCart,
  productGetters,
  cartGetters
} from '@vue-storefront/shopify'
import MobileStoreBanner from '~/components/MobileStoreBanner.vue'
import LazyHydrate from 'vue-lazy-hydration'
import { onSSR } from '@vue-storefront/core'
import useUiNotification from '~/composables/useUiNotification'
import { useUiState } from '~/composables'

export default {
  name: 'ProDuct',
  components: {
    SfAlert,
    SfColor,
    SfLoader,
    SfProperty,
    SfHeading,
    SfPrice,
    SfSelect,
    SfAddToCart,
    SfTabs,
    SfGallery,
    SfIcon,
    SfBreadcrumbs,
    SfButton,
    InstagramFeed,
    RelatedProducts,
    MobileStoreBanner,
    Contact,
    // GridList,
    BannerGrids,
    Community,
    Mp3,
    Proudcut,
    Automatic,
    AutoPage,
    AutoPages,
    Autobox,
    Certificate,
    HomeLogolist,
    SendEmali,
    LazyHydrate,
    Toothbrushpople,
    ToothBannerGrids,
    TootBrushHead3,
    Toothbrushheadfooter,
    TootBrushHead5,
    Chargepc
  },
  beforeRouteEnter(__, from, next) {
    next((vm) => {
      vm.prevRoute = from
    })
  },
  transition: 'fade',
  setup(__, context) {
    const { isCartSidebarOpen, toggleCartSidebar } = useUiState()
    const route = useRoute()
    const router = useRouter()
    const breadcrumbs = ref([])
    const atttLbl = ''
    const qty = ref(1)
    const { slug } = route?.value?.params
    const { loading: productloading, products, search } = useProduct('products')
    const { send: sendNotification } = useUiNotification()
    const {
      products: relatedProducts,
      search: searchRelatedProducts,
      loading: relatedLoading
    } = useProduct('relatedProducts')
    const { addItem, loading, cart } = useCart()
    const product = computed(
      () =>
        productGetters.getFiltered(products.value, {
          master: true,
          attributes: route?.value?.query
        })[0]
    )
    const totals = computed(() => cartGetters.getTotals(cart.value))
    const id = computed(() => productGetters.getId(product.value))
    const originalId = computed(() =>
      productGetters.getProductOriginalId(product.value)
    )
    const productTitle = computed(() => productGetters.getName(product.value))
    const productCoverImage = computed(() =>
      productGetters.getPDPCoverImage(product.value)
    )
    const checkoutURL = computed(() => cartGetters.getcheckoutURL(cart.value))
    const handleCheckout = (checkoutUrl) => {
      setTimeout(() => {
        window.location.href = checkoutUrl
      }, 300)
    }
    const { $router, $route } = context.root
    const productDescription = computed(() =>
      productGetters.getDescription(product.value)
    )
    const productDescriptionHtml = computed(() =>
      productGetters.getDescription(product.value, true)
    )
    const totalItems = computed(() => cartGetters.getTotalItems(cart.value))
    const options = computed(() => productGetters.getAttributes(products.value))

    const configuration = computed(() => {
      return productGetters.getSelectedVariant(route?.value?.query)
    })
    const { isProductCartButtonColor, setisProductCartButtonColor } =
      useUiState()
    const ispath = route.value.fullPath
    const setBreadcrumb = () => {
      breadcrumbs.value = [
        {
          text: 'Home',
          link: '/Home'
        },
        {
          text: 'All products',
          link: '/c/all-products'
        },
        {
          text: productTitle.value,
          link: ''
        }
      ]
    }

    watch(
      productTitle,
      (currproductTitle, prevproductTitle) => {
        if (currproductTitle !== prevproductTitle) {
          setBreadcrumb()
        }
      },
      { deep: true }
    )
    const productGallery = computed(() => {
      if (product.value && product.value.images.length > 4) {
        product.value.images.push({
          originalSrc:
            'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/placeholder_600x600.jpg?v=1625742127'
        })
      }

      const img = productGetters
        .getGallery(product.value)
        .map((img) => ({
          mobile: { url: img.small },
          desktop: { url: img.normal },
          big: { url: img.big },
          alt: product.value._name || product.value.name
        }))
        .slice(0, 4)
      return img
    })
    const stock = computed(() => {
      return productGetters.getStock(product.value)
    })
    const ActiveVariantImage = computed(() => {
      return productGetters.getVariantImage(product.value) || 0
    })

    const getProductGallery = (product) =>
      (product ? product.images : []).map((image) => {
        const imgPath = image.originalSrc.substring(
          0,
          image.originalSrc.lastIndexOf('.')
        )
        const imgext = image.originalSrc.split('.').pop()
        const imgSmall = imgPath + '_160x160.' + imgext
        const imgBig = imgPath + '_295x295.' + imgext
        const imgNormal = imgPath + '_1500x1500.' + imgext
        return {
          small: imgSmall,
          big: imgBig,
          normal: imgNormal
        }
      })
    const productGallery3 = computed(() => {
      const img = getProductGallery(product.value)
        .map((img) => {
          // console.log('img?',img)
          return {
            mobile: { url: img.small },
            desktop: { url: img.normal },
            big: { url: img.big },
            alt: product.value._name || product.value.name
          }
        })
        .slice(0, 4)
      return img
    })
    // onMounted(()=>{
    //   console.log($route.path, $router.path,slug, $route?.value?.path,888)
    // })
    onSSR(async () => {
      await search({ slug, selectedOptions: configuration.value }).then(() => {
        // "Product Title" serve as the flag if the product is existing or not
        if (!productTitle.value) {
          return route?.value?.error({
            statusCode: 404,
            message: 'This product could not be found'
          })
        }
      })
      await searchRelatedProducts({
        productId: id.value || null,
        related: true
      })
    })

    const updateFilter = (colorname, filter) => {
      setisProductCartButtonColor(colorname)
      if (options.value) {
        Object.keys(options.value).forEach((attr) => {
          if (attr in filter) {
            return
          }
          filter[attr] =
            Object.keys(configuration.value).length > 0
              ? configuration.value[attr]
              : options.value[attr][0]
        })
      }
      // console.log(configuration.value, 444, filter)
      $router.push({
        path: $route?.value?.path,
        query: {
          ...configuration.value,
          ...filter
        }
      })
    }

    return {
      updateFilter,
      isCartSidebarOpen,
      toggleCartSidebar,
      ispath,
      configuration,
      product,
      productDescription,
      productCoverImage,
      productDescriptionHtml,
      ActiveVariantImage,
      sendNotification,
      originalId,
      relatedProducts: computed(() =>
        productGetters.getFiltered(relatedProducts.value, { master: true })
      ),
      relatedLoading,
      options,
      stock,
      productTitle,
      breadcrumbs,
      totals,
      qty,
      addItem,
      productGallery3,
      totalItems,
      cartGetters,
      loading,
      productloading,
      productGallery,
      productGetters,
      handleCheckout,
      setBreadcrumb,
      checkoutURL,
      atttLbl,
      isProductCartButtonColor,
      ToothBannerGrids
    }
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      productdescription1:
        '\r\n✔️\tEnjoy music while brushin\r\n✔️\tUpload music to toothbrush via Bluetooth or PC\r\n✔️\tConstant high-frequency vibration\r\n✔️\tW-shaped three-dimensional cutting toothhead\r\n✔️\tThree built-in classic vibrating modes',
      productdescription2:
        '\r\n✔️\tFood-grade Dupont brush\r\n✔️\tW-shaped three-dimensional cutting\r\n✔️\tThe rounded top',
      properties: [
        // {
        //   name: 'Product Code',
        //   value: '578902-00'
        // },
        // {
        //   name: 'Category',
        //   value: 'Pants'
        // },
        // {
        //   name: 'Material',
        //   value: 'Cotton'
        // },
        // {
        //   name: 'Country',
        //   value: 'Germany'
        // }
      ],
      currentindex: 1,
      description:
        'Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.',
      detailsIsActive: false,
      brand:
        'Brand name is the perfect pairing of quality and design. This label creates major everyday vibes with its collection of modern brooches, silver and gold jewellery, or clips it back with hair accessories in geo styles.',
      careInstructions: 'Do not wash!'
    }
  },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  mounted() {
    // console.log(window.location.href, 5858588)
    window.addEventListener('load', () => {
      this.setGalleryWidth()
    })
    this.$nextTick(() => {
      this.setGalleryWidth()
      this.setBreadcrumb()
      window.addEventListener('resize', this.setGalleryWidth)
    })
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  updated() {
    this.setGalleryWidth()
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
     gotocheckout(){
     window.uetq = window.uetq || []
     window.uetq.push('event', 'checkout', {})
        this.$gtag('event','begin_checkout',{
        item_id: this.product.id,
        item_name: this.product.name
      })
     },
    addingToCart(Productdata) {
      this.addItem(Productdata).then((res) => {
        this.sendNotification({
          key: 'product_added',
          message: `${Productdata.product.name} has been successfully added to your cart.`,
          type: 'success',
          title: 'Product added!',
          icon: 'check'
        })
        this.qty = 1
      })
    window.uetq = window.uetq || []
      window.uetq.push('event', 'add-to-cart', {})
      this.$gtag('event','add_to_cart',{
        item_id: Productdata.product.id,
        item_name: Productdata.product.name
      })
    },
     addingToCarts(Productdata) {
      window.uetq = window.uetq || []
      window.uetq.push('event', 'add-to-cart', {})
      this.$gtag('event','add_to_cart',{
        item_id: Productdata.product.id,
        item_name: Productdata.product.name
      })
     this.addItem(Productdata).then((res) => {
        this.sendNotification({
          key: 'product_added',
          message: `${Productdata.product.name} has been successfully added to your cart.`,
          type: 'success',
          title: 'Product added!',
          icon: 'check'
        })
        this.qty = 1
      })
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    updatedQuantity(value) {
      this.qty = value
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setGalleryWidth() {
      const gallary = document.getElementsByClassName('product__gallery')
      const gallerySlider =
        gallary.length > 0 && gallary[0].querySelectorAll('.glide__slides')
      const galleryAllSlides =
        gallerySlider.length > 0 &&
        gallerySlider[0].querySelectorAll('.glide__slide')
      typeof galleryAllSlides !== 'boolean' &&
        galleryAllSlides.length > 0 &&
        galleryAllSlides.forEach((gallerySlide) => {
          gallerySlide.style.flexBasis = gallerySlide.style.width
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.product__description {
  position: relative;
  white-space: pre-wrap;
  top: 10px;
}
.product__details {
  margin-top: 40px !important;
}
.sf-price {
  position: relative;
}

.pdc-pdp-loader {
  --loader-spinner-stroke: #fff !important;
  min-height: 200px;
  padding: 100px 0;
}
.sf-add-to-cart {
  display: flex;
  flex-direction: column;
}

.sf-price__old {
  font-size: 20px;
}

#product {
  --loader-spinner-stroke: #fff !important;
}
.SfButtontwo {
  width: 300px;
  margin-top: 10px;
}
.sf-add-to-cart__button {
  background: #fff;
  color: #3a3543;
  border: 1px solid #3a3543;
}

.product {
  --loader-spinner-stroke: #fff !important;
  --font-family--secondary: var(--font-family--primary);
  box-sizing: border-box;

  @include for-desktop {
    max-width: 1272px;
    margin: 0 auto;
    display: flex;
  }

  &__info {
    margin: var(--spacer-sm) auto;

    @include for-desktop {
      max-width: 32.625rem;
      margin: 0 0 0 7.5rem;
    }
  }

  &__header {
    --heading-title-color: var(--c-link);
    --heading-title-font-weight: var(--font-weight--bold);
    --heading-padding: 0;
    margin: 0 var(--spacer-sm);
    display: flex;
    justify-content: space-between;

    @include for-desktop {
      --heading-title-font-weight: var(--font-weight--semibold);
      margin: 0 auto;
    }
  }

  &__drag-icon {
    animation: moveicon 1s ease-in-out infinite;
  }

  &__price-and-rating {
    margin: 0 var(--spacer-sm) var(--spacer-base);
    align-items: center;

    @include for-desktop {
      display: flex;
      justify-content: space-between;
      margin: var(--spacer-sm) 0 var(--spacer-lg) 0;
    }
  }

  &__rating {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: var(--spacer-xs) 0 var(--spacer-xs);
  }

  &__count {
    @include font(
      --count-font,
      var(--font-weight--normal),
      var(--font-size--sm),
      1.4,
      var(--font-family--secondary)
    );
    color: var(--c-text);
    text-decoration: none;
    margin: 0 0 0 var(--spacer-xs);
  }
  &__details {
    margin: 0 var(--spacer-sm) var(--spacer-base);

    @include for-desktop {
      margin: var(--spacer-lg) 0;
    }
  }

  &__description {
    @include font(
      --product-description-font,
      var(--font-weight--light),
      var(--font-size--base),
      1.6,
      var(--font-family--primary)
    );
  }

  &__colors {
    @include font(
      --product-color-font,
      var(--font-weight--normal),
      var(--font-size--xs),
      1.6,
      var(--font-family--secondary)
    );
    display: flex;
    flex-wrap: wrap;
  }

  &__color-label {
    margin: 0 var(--spacer-lg) var(--spacer-xs) 0;
    padding: 0 0 0 4px;
  }

  &__color {
    margin: 0 var(--spacer-2xs);
  }

  &__add-to-cart,
  &__stock-information {
    margin-top: var(--spacer-xl);
  }

  &__guide,
  &__compare,
  &__save {
    display: block;
    margin: var(--spacer-xl) 0 var(--spacer-base) auto;
  }

  &__compare {
    margin-top: 0;
  }

  &__tabs {
    margin: var(--spacer-lg) auto var(--spacer-2xl);
    --tabs-title-font-size: var(--font-size--lg);
    --tabs-title-z-index: 0;

    @include for-desktop {
      margin-top: var(--spacer-2xl);
    }
  }

  &__property {
    margin: var(--spacer-base) 0;

    &__button {
      --button-font-size: var(--font-size--base);
    }
  }

  &__review {
    padding-bottom: 24px;
    border-bottom: var(--c-light) solid 1px;
    margin-bottom: var(--spacer-base);
  }

  &__additional-info {
    color: var(--c-link);
    @include font(
      --additional-info-font,
      var(--font-weight--light),
      var(--font-size--sm),
      1.6,
      var(--font-family--primary)
    );

    &__title {
      font-weight: var(--font-weight--normal);
      font-size: var(--font-size--base);
      margin: 0 0 var(--spacer-sm);

      &:not(:first-child) {
        margin-top: 3.5rem;
      }
    }

    &__paragraph {
      margin: 0;
    }
  }

  &__gallery {
    flex: 1;
  }

  &__flex-break {
    flex-basis: 100%;
    height: 0;
  }
}

.breadcrumbs {
  max-width: 1240px;
  margin: 0 auto;
  --font-family--secondary: var(--font-family--primary);
  margin: var(--spacer-base) auto var(--spacer-lg);
}
// ::v-deep img.sf-image.sf-image-loaded{
// height: 500px;
// width: 500px;
// }
.sf-price__special {
  position: absolute;
  top: 30px;
  left:0;
  font-size: 48px;
  background: transparent !important;
}

.product__color-label {
  font-size: 16px;
}

.product__variants {
  margin-top: 100px;

  .sf-button {
    border: 1px solid black;
    background: #fff;
    color: #3a3543;
  }
}
.active {
  color: #fff !important ;
  background-color: #3a3543 !important;
}
.banner-app {
  --banner-container-width: 100%;
  --banner-title-margin: var(--spacer-base) 0 var(--spacer-xl) 0;
  --banner-padding: 0 var(--spacer-2xl);
  --banner-title-font-size: var(--h1-font-size);
  --banner-subtitle-font-size: var(--font-size--xl);
  --banner-title-font-weight: var(--font-weight--semibold);
  --banner-subtitle-font-weight: var(--font-weight--medium);
  --banner-title-text-transform: capitalize;
  --banner-subtitle-text-transform: capitalize;
  display: block;
  min-height: 26.25rem;
  max-width: 65rem;
  margin: 0 auto;
  padding: 0 calc(25% + var(--spacer-2xl)) 0 var(--spacer-xl);

  &__call-to-action {
    --button-background: transparent;
    display: flex;
  }

  &__button {
    --image-width: 8.375rem;
    --image-height: 2.75rem;
    --button-padding: 0;

    & + & {
      margin: 0 0 0 calc(var(--spacer-xl) / 2);
    }
  }
}
::v-deep.sf-image--placeholder {
  display: none;
}

::v-deep .product__color {
  border: 1px solid;
}

@keyframes moveicon {
  0% {
    transform: translate3d(0, 0, 0);
  }

  50% {
    transform: translate3d(0, 30%, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
}
.sf-breadcrumbs__list{
  margin-left: 10px;
  @include for-desktop{
      margin-left: 0;
  }
}

</style>
