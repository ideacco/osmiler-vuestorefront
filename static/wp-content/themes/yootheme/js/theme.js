/*! YOOtheme Pro v2.7.22 | https://yootheme.com */
;(function (p, e) {
  'use strict'

  function l(a) {
    return a && typeof a == 'object' && 'default' in a ? a : { default: a }
  }
  var n = l(p),
    v = {
      update: [
        {
          read: function () {
            return d() ? { height: this.$el.offsetHeight } : !1
          },
          write: function (r) {
            var t = r.height,
              o = d(),
              h = o[0],
              s = o[1]
            e.hasClass(this.$el, 'tm-header-overlay') ||
              (e.addClass(this.$el, 'tm-header-overlay'),
              e.addClass(
                e.$$(
                  '.tm-headerbar-top, .tm-headerbar-bottom, .js-toolbar-transparent'
                ),
                'uk-' + s
              ),
              e.removeClass(
                e.$$('.tm-headerbar-top, .tm-headerbar-bottom'),
                'tm-headerbar-default'
              ),
              e.removeClass(
                e.$('.js-toolbar-transparent.tm-toolbar-default'),
                'tm-toolbar-default'
              ),
              e.$('[uk-sticky]', this.$el) ||
                e.addClass(
                  e.$('.uk-navbar-container', this.$el),
                  'uk-navbar-transparent uk-' + s
                )),
              e.css(e.$('.tm-header-placeholder', h), { height: t })
          },
          events: ['resize'],
        },
      ],
    },
    $ = {
      update: {
        read: function () {
          var r = d() || [],
            t = r[0],
            o = r[1]
          !o ||
            !e.closest(this.$el, '[uk-header]') ||
            ((this.animation = 'uk-animation-slide-top'),
            (this.clsInactive = 'uk-navbar-transparent uk-' + o),
            (this.top =
              t.offsetHeight <= window.innerHeight
                ? e.offset(t).bottom
                : e.offset(t).top + 300))
        },
        events: ['resize'],
      },
    },
    u = {
      computed: {
        dropbarMode: function (r) {
          var t = r.dropbarMode
          return d() || e.closest(this.$el, '[uk-sticky]') ? 'slide' : t
        },
      },
    }

  function d() {
    var a = e.$(
        '.tm-header ~ [class*="uk-section"], .tm-header ~ :not(.tm-page) > [class*="uk-section"]'
      ),
      r = e.attr(a, 'tm-header-transparent')
    return a && r && [a, r]
  }
  if (
    (n.default.component('Header', v),
    n.default.mixin($, 'sticky'),
    n.default.mixin(u, 'navbar'),
    e.isRtl)
  ) {
    var c = {
      created: function () {
        this.$props.pos = e.swap(this.$props.pos, 'left', 'right')
      },
    }
    n.default.mixin(c, 'drop'), n.default.mixin(c, 'tooltip')
  }
  e.ready(function () {
    var a = window,
      r = a.$load,
      t = r === void 0 ? [] : r,
      o = a.$theme,
      h = o === void 0 ? {} : o

    function s(f, m) {
      f.length &&
        f.shift()(m, function () {
          return s(f, m)
        })
    }
    s(t, h)
  })
})(UIkit, UIkit.util)
