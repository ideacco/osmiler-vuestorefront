<template>
  <div class="tm-page">
    <div class="tm-header-mobile uk-hidden@m">
      <div class="uk-navbar-container">
        <nav uk-navbar="container: .tm-header-mobile">
          <div class="uk-navbar-center">
            <a href="./../index.html" class="uk-navbar-item uk-logo">
              <img
                alt="OSMILER"
                width="80"
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
                    <a href="./../index.html"> Home</a>
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
                    <a
                      href="./../index.php?page_id=8"
                      class="uk-button uk-button-primary uk-width-1-1"
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
<div >
      <div class="tm-header uk-visible@m" uk-header>
      <div
        uk-sticky
        media="@m"

      >
        <div class="uk-navbar-container">
          <div class="uk-container uk-container-large">
            <nav
              class="uk-navbar"
            >
              <div class="uk-navbar-left">
                <a href="./../index.html" class="uk-navbar-item uk-logo">
                  <img
                    alt="OSMILER"
                    width="90"
                    src="/wp-content/uploads/2022/05/osmiler-logo-default.svg" /><img
                    class="uk-logo-inverse"
                    alt="OSMILER"
                    width="90"
                    src="/wp-content/uploads/2022/05/osmiler-logo-light.svg"
                /></a>
                <ul class="uk-navbar-nav">
                  <li
                    class="
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page menu-item-home
                    "
                  >
                    <a href="./../index.html"> Home</a>
                  </li>
                  <li
                    class="
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page
                      current-menu-item
                      page_item page-item-1286
                      current_page_item
                      uk-active
                    "
                  >
                    <nuxt-link to="/music"> </nuxt-link>
                  </li>
                  <li
                    class="
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page menu-item-has-children
                      uk-parent
                    "
                  >
                    <a href="./../services/index.html"> Services</a>
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
                  >
                    <a href="./../doctors/index.html"> Doctors</a>
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
                              <a href="./../gina-lange-dmd/index.html">
                                Gina Lange DMD</a
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
                      href="./../index.php?page_id=8"
                      class="uk-button uk-button-primary"
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
</div>
  </div>
</template>
<script >
import "static/wp-content/themes/yootheme/js/theme.js";
import "static/wp-content/themes/yootheme/vendor/assets/uikit/dist/js/uikit-icons-union-dental.min.js";
import "static/wp-content/themes/yootheme/vendor/assets/uikit/dist/js/uikit.min.js";

</script>

<style lang="scss"  scoped>
</style>
