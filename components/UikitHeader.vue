<template>
  <div>
    <div class="tm-header-mobile uk-hidden@m">
      <div class="uk-navbar-container uk-navbar-transparent">
        <nav uk-navbar="container: .tm-header-mobile">
          <div class="uk-navbar-center" style="z-index: 2">
            <a href="/home" class="uk-navbar-item uk-logo">
              <img
                alt="OSMILER"
                width="80"
                src="../static/icons/osmiler-logo-default.svg"
              /></a>
          </div>
          <div class="uk-navbar-right">
            <a class="uk-navbar-toggle" href="#tm-mobile" uk-toggle>
              <div uk-navbar-toggle-icon></div>
            </a>
          </div>
        </nav>
      </div>
      <div id="tm-mobile" class="uk-modal-full" uk-modal>
        <div class="uk-modal-dialog uk-modal-body uk-height-viewport">
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
                    <a href="./about-us/index.html"> About Us</a>
                  </li>
                  <li
                    class="menu-item menu-item-type-post_type menu-item-object-page"
                  >
                    <a href="./contact/index.html"> Contact</a>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div class="uk-panel widget widget_text" id="text-4">
                <div class="uk-panel textwidget"></div>
              </div>
            </div>
            <div>
              <div
                class="uk-panel uk-text-center widget widget_text"
                id="text-5"
              >
                <div class="uk-panel textwidget">
                  <p v-if="isUserAuthenticated">
                    <a
                      href="./index.php?page_id=8"
                      class="uk-button uk-button-primary uk-width-1-1"
                    >Login</a
                    >
                  </p>
                  <div
                    class="uk-grid-small uk-child-width-auto uk-flex-middle uk-flex-center"
                    uk-grid
                  >
                    <div>
                      <ul class="uk-iconnav">
                        <li>
                          <a
                            href="https://facebook.com/yootheme"
                            uk-icon="icon: facebook"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="https://instagram.com/"
                            uk-icon="icon: instagram"
                          ></a>
                        </li>
                        <li>
                          <a href="https://yelp.com/" uk-icon="icon: yelp"></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p class="uk-text-meta">
                    © 2022 Osmiler. All rights reserved.
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
    >
      <div>
        <nav
          class="uk-navbar-container"
          :class="classObject"
          style="z-index: 2"
        >
          <div class="uk-container uk-container-expand">
            <div uk-navbar>
              <div class="uk-navbar-left">
                <nuxt-link :to="localePath('/')" class="uk-navbar-item uk-logo">
                  <img
                    alt="OSMILER"
                    width="90"
                    src="../static/icons/osmiler-logo-default.svg"
                  /><img
                    class="uk-logo-inverse"
                    alt="OSMILER"
                    width="90"
                    src="../static/icons/osmiler-logo-light.svg"
                    style="z-index: 1"
                  />
                </nuxt-link>
                <ul
                  class="uk-navbar-nav"
                  v-for="(category, key) in shopRootCategories"
                  :key="`${key}`"
                >
                  <li :class="{ 'uk-active': category.name === navActive }">
                    <a @click="navJump(category)">{{ category.name }}</a>
                  </li>
                </ul>
              </div>
              <div class="uk-navbar-right">
                <ul class="uk-navbar-nav" style="align-items: center">
                  <li v-if="!isLogin">
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
                      @click="toggleCartSidebar"
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
  reactive,
  computed,
  onMounted,
  getCurrentInstance
} from '@nuxtjs/composition-api'
import { onSSR } from '@vue-storefront/core'
import { useCategory, useContent } from '@vue-storefront/shopify'
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
    const { categories, search, loading } = useCategory('menu-categories')
    onSSR(async () => {
      await search({})
    })

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
      //   console.log('导航栏返回',isNavbarTransparent.value)
      // }
      // 使用Uikit的组件化开发模式设定导航栏的粘贴和滚动
      proxy.$UIkit.sticky('.uk-navbar-container', {
        start: 300,
        animation: 'uk-animation-slide-top',
        showOnUp: true
      })

      proxy.$UIkit.util.on('.uk-navbar-container', 'active', () => {
        // console.log('导航栏活动状态')
        isActive.value = true
      })

      proxy.$UIkit.util.on('.uk-navbar-container', 'inactive', () => {
        // console.log('导航栏活动状态')
        isActive.value = false
      })
    })

    // onMounted((async() => {
    //   const data = function() {
    //     return new Promise((resolve, reject) => {
    //       proxy.$uikit.util.on('.uk-navbar-container','active',() => {
    //         console.log('导航栏活动状态')
    //         resolve(true)
    //       })
    //     })
    //   }
    //   isActive.value = await data().then()
    // }))

    const isLogin = computed(() => (props.isUserAuthenticated ? true : false))

    // 输出动态样式绑定
    const classObject = computed(() => {
      // 在导航栏处于活动状态时,动态绑定样式
      if (isActive.value) {
        return {
          'uk-background-default': true,
          'uk-animation-slide-top': true
        }
      }
      // 在非活动状态时,动态绑定样式
      return {
        'uk-background-default': !isNavbarTransparent.value, // 在非透明状态时，添加样式
        'uk-navbar-transparent': isNavbarTransparent.value, // 在透明状态时，添加样式
        'uk-light': isNavbarTransparent.value // 在透明状态时，添加样式
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
      isActive: false, // 活动状态
      isInactive: false, // 非活动状态
      shopRootCategories: [
        {
          name: 'Home',
          path: '/home'
        },
        {
          name: 'Music',
          path: '/music'
        },
        {
          name: 'About',
          path: '/about'
        },
        {
          name: 'Product',
          path: '/Product'
        },
        {
          name: 'test',
          path: '/test_page'
        }
      ]
    }
  },

  // mounted () {
  //   console.log('cartTotalItems',this.cartTotalItems)
  //   console.log('REFS',this.$refs.header)
  // },

  watch: {
    isUserAuthenticated(val) {
      console.log('isUserAuthenticated', val)
    }
    // isNavbarTransparent(Transparent) {
    //   console.log('切换导航监听',Transparent)
    //   this.$UIkit.update('.uk-navbar-container','update')
    //   console.log('REFS2',this.$refs.header)
    // }
  },

  methods: {
    navJump(category, key) {
      console.log('navJump', category.name)
      this.navActive = category.name
      this.$router.push({ path: category.path })
    }
  }
}
</script>

<style lang="scoped"></style>
