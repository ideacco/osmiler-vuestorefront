<template>
  <div >
    <div class="tm-header-mobile uk-hidden@m">
      <!-- <div class="uk-navbar-container uk-navbar-transparent"> -->
      <div class="uk-navbar-container">
        <!-- <nav
          uk-navbar="container: .tm-header-mobile"
          :class="{'uk-light': isNavbarTransparent}"
          > -->
        <nav
          uk-navbar="container: .tm-header-mobile"
          style="background-color: #fff"
        >
          <div class="uk-navbar-center" style="z-index: 2">
            <a href="/home" class="uk-navbar-item uk-logo">
              <img
                alt="OSMILER"
                width="80"
                src="../static/icons/osmiler-logo-default.svg"
                loading="lazy"
              />
              <img
                class="uk-logo-inverse"
                alt="OSMILER"
                width="90"
                src="../static/icons/osmiler-logo-light.svg"
                style="z-index: 1"
               loading="lazy"
              />
            </a>
          </div>
          <div class="uk-navbar-right">
            <a class="uk-navbar-toggle" href="#tm-mobile" uk-toggle>
              <div uk-navbar-toggle-icon></div>
            </a>
          </div>
        </nav>
      </div>
      <div id="tm-mobile" class="uk-modal-full" uk-modal>
        <div
          class="uk-modal-dialog uk-modal-body uk-height-viewport"
          style="position: fixed"
        >
          <button class="uk-modal-close-full" type="button" uk-close></button>
          <div class="uk-child-width-1-1" uk-grid>
            <div>
              <div class="uk-panel">
                <ul class="uk-nav uk-nav-default uk-nav-divider">
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1 current_page_item uk-active"
                  >
                    <a href="/Home"> Home</a>
                  </li>
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page"
                  >
                    <a href="/c/all-products"> Product</a>
                  </li>
                     <li
                    class="menu-item menu-item-type-post_type menu-item-object-page"
                  >
                    <a href="/music"> Music</a>
                  </li>
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page"
                  >
                    <a href="/Services"> Services</a>
                  </li>
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page"
                  >
                    <a href="/Aboutus"> About Us</a>
                  </li>
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page"
                  >
                    <a href="/ContactUs"> Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div class="uk-panel widget widget_text" id="text-4">
                <div class="uk-panel textwidget"></div>
              </div>
            </div>
            <div class="uk-position-bottom uk-margin-bottom">
              <div
                class="uk-panel uk-text-center widget widget_text"
                id="text-5"
              >
                <div class="uk-panel textwidget">
                  <p class="uk-text-meta">
                    ?? 2022 Osmiler. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="uk-visible@m"
      :class="{ 'uk-position-top': isNavbarTransparent }"
      ref="header"
      id="pc-header"
      uk-header
      style="z-index: 22;"
    >
      <div >
        <nav class="uk-navbar-container" :class="classObject" id="pc-navbar">
          <div class="uk-container uk-container-expand">
            <div uk-navbar>
              <div class="uk-navbar-left">
                <nuxt-link :to="localePath('/')" class="uk-navbar-item uk-logo">
                  <img
                    alt="OSMILER"
                    width="90"
                    src="../static/icons/osmiler-logo-default.svg"
                    loading="lazy"
                  /><img
                    class="uk-logo-inverse"
                    alt="OSMILER"
                    width="90"
                    src="../static/icons/osmiler-logo-light.svg"
                    style="z-index: 1"
                    loading="lazy"
                  />
                </nuxt-link>
                <ul
                  class="uk-navbar-nav"
                  v-for="(category, key) in shopRootCategories"
                  :key="`${key}`"
                >
                  <li :class="{ 'uk-active': category.name === navActive }">
                    <a @click.prevent="navJump(category)">{{ category.name }}</a>
                  </li>
                </ul>
              </div>
              <div class="uk-navbar-right uk-position-top-right ">
                <ul class="uk-navbar-nav" style="align-items: center">
                  <li v-if="!isUserAuthenticated" style="z-index: 999">
                    <button
                      @click="toggleLoginModal()"
                      class="uk-button uk-button-small uk-button-default"
                    >
                      Login
                    </button>
                  </li>

                  <li v-else>
                    <a
                      @click="$router.push(localePath({ name: 'my-account' }))"
                      class="uk-icon-link"
                      uk-icon="user"
                    />
                  </li>

                  <li>
                    <a
                      @click="toggleCartSidebar(),gobuy()"
                      class="uk-icon-link"
                      uk-icon="cart"
                    >
                      <span
                        v-if="cartTotalItems !== 0"
                        class="uk-position-center-right uk-badge"
                      >
                        {{ cartTotalItems }}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { useUiState } from '~/composables'
import {
  ref,
  // reactive,
  computed,
  onMounted,
  getCurrentInstance
} from '@nuxtjs/composition-api'
import { onSSR } from '@vue-storefront/core'
// import { useCategory, useContent } from '@vue-storefront/shopify'

export default {
  name: 'UikitHeader',
  props: {
    cartTotalItems: {
      type: Number,
      default: 0
    },
    isUserAuthenticated: Boolean
  },
  setup(props) {
    // const { categories, search, loading } = useCategory('menu-categories')
    // onSSR(async () => {
    //   await search({})
    // })

    const {
      isNavbarTransparent,
      toggleNavbarTransparent,
      toggleLoginModal,
      toggleCartSidebar,
      toggleWishlistSidebar
    } = useUiState()
    const { proxy } = getCurrentInstance()

    const isActive = ref(false)

    onMounted(() => {
      // if (isNavbarTransparent) {
      //   console.log('???????????????',isNavbarTransparent.value)
      // }
      // ??????Uikit?????????????????????????????????????????????????????????
      proxy.$UIkit.sticky('#pc-navbar', {
        start: 300,
        animation: 'uk-animation-slide-top',
        showOnUp: true
      })
      proxy.$UIkit.util.on('.uk-navbar-container', 'active', () => {
        // console.log('?????????????????????')
        isActive.value = true
      })

      proxy.$UIkit.util.on('.uk-navbar-container', 'inactive', () => {
        // console.log('?????????????????????', 88)
        isActive.value = false
      })
    })

    // onMounted((async() => {
    //   const data = function() {
    //     return new Promise((resolve, reject) => {
    //       proxy.$uikit.util.on('.uk-navbar-container','active',() => {
    //         console.log('?????????????????????')
    //         resolve(true)
    //       })
    //     })
    //   }
    //   isActive.value = await data().then()
    // }))

    const isLogin = computed(() => (props.isUserAuthenticated ? true : false))

    // ????????????????????????
    const classObject = computed(() => {
      // ?????????????????????????????????,??????????????????
      if (isActive.value) {
        return {
          'uk-background-default': true,
          'uk-animation-slide-top': true
        }
      }
      // ?????????????????????,??????????????????
      return {
        'uk-background-default': !isNavbarTransparent.value, // ????????????????????????????????????
        'uk-navbar-transparent': isNavbarTransparent.value, // ?????????????????????????????????
        'uk-light': isNavbarTransparent.value // ?????????????????????????????????
      }
    })

    return {
      toggleCartSidebar,
      toggleWishlistSidebar,
      toggleLoginModal,
      isNavbarTransparent,
      toggleNavbarTransparent,
      classObject,
      isLogin
    }
  },
  data() {
    return {
      navActive: 'home',
      isActive: false, // ????????????
      isInactive: false, // ???????????????
      shopRootCategories: [
        {
          name: 'Home',
          path: '/Home'
        },
        // {
        //   name: 'Music',
        //   path: '/music'
        // },
        {
          name: 'Product',
          path: '/c/all-products'
        },
          {
          name: 'Music',
          path: '/music'
        },
        {
          name: 'Services',
          path: '/Services'
        },
        {
          name: 'About Us',
          path: '/Aboutus'
        },
        {
          name: 'Contact Us',
          path: '/ContactUs'
        }
        // {
        //   name: 'test',
        //   path: '/test_page'
        // }
      ]
    }
  },


  watch: {
    isUserAuthenticated(val) {
      // console.log('isUserAuthenticated', val)
    }
    // isNavbarTransparent(Transparent) {
    //   console.log('??????????????????',Transparent)
    //   this.$UIkit.update('.uk-navbar-container','update')
    //   console.log('REFS2',this.$refs.header)
    // }

  },

  methods: {
    gobuy(){
      this.$gtag('event','view_cart',{
        currency: 'USD',
        value: 7.77
      })
    },
    navJump(category, key) {
      this.$router.push({ path: category.path})
      // console.log('navJump', category.name)
      this.navActive = category.name
    }
  }
}
</script>

<style lang="scss" scoped>
.uk-position-top{
  top: 30px !important;
}
</style>
