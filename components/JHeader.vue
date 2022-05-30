<template>
  <div>
    <div class="tm-header-mobile uk-hidden@m">
      <div class="uk-navbar-container">
        <nav uk-navbar="container: .tm-header-mobile">
          <div class="uk-navbar-center">
            <a href="./../index.html" class="uk-navbar-item uk-logo">
              <img
                alt="OSMILER"
                style="width: 80px"
                src="/wp-content/uploads/2022/05/osmiler-logo-default.svg"
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
                <ul
                  class="
                    uk-nav
                    uk-nav-default
                    uk-nav-divider
                    uk-nav-parent-icon
                    uk-nav-accordion
                  "
                  uk-nav="targets: &gt; .js-accordion"
                >
                  <li
                    class="
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page menu-item-home
                    "
                  >
                    <a href="/Home"> Home</a>
                  </li>
                  <li
                    class="
                      menu-item
                      menu-item-type-custom
                      menu-item-object-custom
                      menu-item-has-children
                      js-accordion
                      uk-parent
                    "
                  >
                    <a> Services</a>
                    <ul class="uk-nav-sub">
                      <li
                        class="
                          menu-item
                          menu-item-type-post_type
                          menu-item-object-page
                        "
                      >
                        <a href="./../services/index.html"> All Services</a>
                      </li>
                      <li
                        class="
                          menu-item
                          menu-item-type-post_type
                          menu-item-object-page
                        "
                      >
                        <a href="./../general-dentistry/index.html">
                          General Dentistry</a
                        >
                      </li>
                      <li
                        class="
                          menu-item
                          menu-item-type-post_type
                          menu-item-object-page menu-item-has-children
                          uk-parent
                        "
                      >
                        <a href="./../implant-dentistry/index.html">
                          Implant Dentistry</a
                        >
                        <ul>
                          <li
                            class="
                              menu-item
                              menu-item-type-post_type
                              menu-item-object-page
                            "
                          >
                            <a href="./../dental-implants/index.html">
                              Dental Implants</a
                            >
                          </li>
                        </ul>
                      </li>
                      <li
                        class="
                          menu-item
                          menu-item-type-post_type
                          menu-item-object-page
                        "
                      >
                        <a href="./../cosmetic-dentistry/index.html">
                          Cosmetic Dentistry</a
                        >
                      </li>
                      <li
                        class="
                          menu-item
                          menu-item-type-post_type
                          menu-item-object-page
                        "
                      >
                        <a href="./../product-page-a/index.html">
                          Product-page-A</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li
                    class="
                      menu-item
                      menu-item-type-custom
                      menu-item-object-custom
                      menu-item-has-children
                      js-accordion
                      uk-parent
                    "
                  >
                    <a> Doctors</a>
                    <ul class="uk-nav-sub">
                      <li
                        class="
                          menu-item
                          menu-item-type-post_type
                          menu-item-object-page
                        "
                      >
                        <a href="./../doctors/index.html"> All Doctors</a>
                      </li>
                      <li
                        class="
                          menu-item
                          menu-item-type-post_type
                          menu-item-object-page
                        "
                      >
                        <a href="./../gina-lange-dmd/index.html">
                          Gina Lange DMD</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li
                    class="
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page
                    "
                  >
                    <a href="./../about-us/index.html"> About Us</a>
                  </li>
                  <li
                    class="
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page
                    "
                  >
                    <a href="./../contact/index.html"> Contact</a>
                  </li>
                  <li
                    class="
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page
                    "
                  >
                    <a href="./../blog/index.html"> Blog</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div class="uk-panel widget widget_search" id="search-3">
                <form
                  id="search-84d9"
                  action="."
                  method="get"
                  role="search"
                  class="uk-search uk-search-default uk-width-1-1"
                >
                  <span uk-search-icon></span
                  ><input
                    name="s"
                    placeholder="Search"
                    required
                    type="search"
                    class="uk-search-input"
                  />
                </form>
              </div>
            </div>
            <div>
              <div class="uk-panel widget widget_text" id="text-4">
                <div class="uk-panel textwidget">
                  <hr />
                </div>
              </div>
            </div>
            <div>
              <div
                class="uk-panel uk-text-center widget widget_text"
                id="text-5"
              >
                <div class="uk-panel textwidget">
                  <p>
                    <a class="uk-button uk-button-primary uk-width-1-1"
                      >Book Appointment</a
                    >
                  </p>
                  <div
                    class="
                      uk-grid-small
                      uk-child-width-auto
                      uk-flex-middle
                      uk-flex-center
                    "
                    uk-grid
                  >
                    <div>
                      <a class="uk-text-emphasis" href="tel:5551234678"
                        >+ 555 - 1234678</a
                      >
                    </div>
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
                    © Union Dental. All rights reserved. Powered by
                    <a class="uk-link-muted" href="https://www.yootheme.com/"
                      >YOOtheme</a
                    >.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tm-header uk-visible@m">
      <div
        uk-sticky
        media="@m"
        cls-active="uk-navbar-sticky"
        sel-target=".uk-navbar-container"
      >
        <div class="uk-navbar-container">
          <div class="uk-container uk-container-large">
            <nav class="uk-navbar">
              <div class="uk-navbar-left" id="top">
                <a href="/Home" class="uk-navbar-item uk-logo">
                  <img
                    alt="OSMILER"
                    style="width: 90px"
                    src="/wp-content/uploads/2022/05/osmiler-logo-default.svg" />
                  <img
                    class="uk-logo-inverse"
                    alt="OSMILER"
                    style="width: 90px"
                    src="/wp-content/uploads/2022/05/osmiler-logo-light.svg"
                /></a>
                <ul class="uk-navbar-nav">
                  <li
                    class="
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page menu-item-home
                    "
                    :class="tabIndex === 0 ? 'uk-active' : ''"
                    @click="tabggle(0)"
                  >
                    <nuxt-link to="/Home"> Home</nuxt-link>
                  </li>
                  <li
                    class="
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page
                      current-menu-item
                      page_item page-item-1286
                      current_page_item
                    "
                    :class="tabIndex === 1 ? 'uk-active' : ''"
                    @click="tabggle(1)"
                  >
                    <nuxt-link to="/music"> Music community</nuxt-link>
                  </li>
                  <li
                    class="
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page menu-item-has-children
                      uk-parent
                    "
                    :class="tabIndex === 2 ? 'uk-active' : ''"
                    @click="tabggle(2)"
                  >
                    <nuxt-link to="/"> Services</nuxt-link>
                    <div class="uk-navbar-dropdown">
                      <div
                        class="uk-navbar-dropdown-grid uk-child-width-1-1"
                        uk-grid
                      >
                        <div>
                          <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li
                              class="
                                menu-item
                                menu-item-type-post_type
                                menu-item-object-page
                              "
                            >
                              <a href="./../general-dentistry/index.html">
                                General Dentistry</a
                              >
                            </li>
                            <li
                              class="
                                menu-item
                                menu-item-type-post_type
                                menu-item-object-page menu-item-has-children
                                uk-parent
                              "
                            >
                              <a href="./../implant-dentistry/index.html">
                                Implant Dentistry</a
                              >
                              <ul class="uk-nav-sub">
                                <li
                                  class="
                                    menu-item
                                    menu-item-type-post_type
                                    menu-item-object-page
                                  "
                                >
                                  <a href="./../dental-implants/index.html">
                                    Dental Implants</a
                                  >
                                </li>
                              </ul>
                            </li>
                            <li
                              class="
                                menu-item
                                menu-item-type-post_type
                                menu-item-object-page
                              "
                            >
                              <a href="./../cosmetic-dentistry/index.html">
                                Cosmetic Dentistry</a
                              >
                            </li>
                            <li
                              class="
                                menu-item
                                menu-item-type-post_type
                                menu-item-object-page
                              "
                            >
                              <a href="./../product-page-a/index.html">
                                Product-page-A</a
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page menu-item-has-children
                      uk-parent
                    "
                    :class="tabIndex === 3 ? 'uk-active' : ''"
                    @click="tabggle(3)"
                  >
                    <nuxt-link to="/"> Doctors</nuxt-link>
                    <div class="uk-navbar-dropdown">
                      <div
                        class="uk-navbar-dropdown-grid uk-child-width-1-1"
                        uk-grid
                      >
                        <div>
                          <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li
                              class="
                                menu-item
                                menu-item-type-post_type
                                menu-item-object-page
                              "
                              :class="tabIndex === 4 ? 'uk-active' : ''"
                              @click="tabggle(4)"
                            >
                              <nuxt-link to="/"> Gina Lange DMD</nuxt-link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page
                    "
                    :class="tabIndex === 5 ? 'uk-active' : ''"
                    @click="tabggle(5)"
                  >
                    <nuxt-link to="/"> About Us</nuxt-link>
                  </li>
                  <li
                    class="
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page
                    "
                    :class="tabIndex === 6 ? 'uk-active' : ''"
                    @click="tabggle(6)"
                  >
                    <nuxt-link to="/"> Contact</nuxt-link>
                  </li>
                  <li
                    class="
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page
                    "
                    :class="tabIndex === 7 ? 'uk-active' : ''"
                    @click="tabggle(7)"
                  >
                    <nuxt-link to="/"> Blog</nuxt-link>
                  </li>
                </ul>
              </div>
              <div class="uk-navbar-right">
                <div class="widget widget_search" id="search-2">
                  <a
                    class="uk-navbar-toggle"
                    href="#search-c3d5-modal"
                    uk-search-icon
                    uk-toggle
                  ></a>
                  <div id="search-c3d5-modal" class="uk-modal-full" uk-modal>
                    <div
                      class="
                        uk-modal-dialog uk-flex uk-flex-center uk-flex-middle
                      "
                      uk-height-viewport
                    >
                      <button
                        class="uk-modal-close-full"
                        type="button"
                        uk-close
                      ></button>
                      <div class="uk-search uk-search-large">
                        <form
                          id="search-c3d5"
                          action="."
                          method="get"
                          role="search"
                          class="uk-search uk-search-large"
                        >
                          <input
                            name="s"
                            placeholder="Search"
                            required
                            type="search"
                            class="uk-search-input uk-text-center"
                            autofocus
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="uk-navbar-item widget widget_custom_html"
                  id="custom_html-3"
                >
                  <div class="textwidget custom-html-widget">
                    <a
                      class="uk-button uk-button-primary"
                      @click="toggleLoginModal()"
                      >Lognin</a
                    >
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <LoginModal
      :visible="visible"
      ref="Logins"
      @closeDialog="handleClose"
    ></LoginModal>
  </div>
</template>
<script type="module">
import LoginModal from "./LoginModal.vue";

export default {
  name: "JHeader",
  components: {
    LoginModal,
  },
  data() {
    return {
      tabIndex: 0,
      visible: false,
    };
  },
  mounted(){
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    tabggle(index) {
      this.tabIndex = index;
    },
    handleClose() {
      this.visible = false;
    },
    toggleLoginModal(data) {
      this.visible = true;
    },
  },
};
</script>

<style lang="scss"  scoped>
@import "../static/wp-includes/css/dist/block-library/style.min.css";
@import "../static/wp-content/themes/yootheme/css/theme.1.css";
@import "../static/wp-content/themes/yootheme/vendor/yootheme/theme-highlight/assets/styles/monokai.css";
</style>
