(self["webpackChunkwe_officials"] =
  self["webpackChunkwe_officials"] || []).push([
  [64],
  {
    9408: async (e, t, a) => {
      "use strict";
      a(6992), a(8674), a(9601), a(7727);
      var n = a(5010),
        i = a(6084),
        r = a(9584),
        o =
          (a(3710),
          a(8309),
          a(2222),
          a(1249),
          a(3290),
          a(3112),
          a(6977),
          a(4916),
          a(3123),
          a(3396)),
        l = a(4870),
        s = a(7139),
        c = a(3490),
        d = a(678),
        u = a(6623);
      a(4723);
      function p(e, t) {
        var a = (0, c.QT)(),
          n = a.t,
          i = [],
          r = console.warn;
        console.warn = function () {};
        while (1) {
          var o = ""
              .concat(e, "[")
              .concat(i.length, "]")
              .concat(t ? ".".concat(t) : ""),
            l = n(o);
          if (o === l) return (console.warn = r), i;
          i.push(l);
        }
      }
      function g() {
        return !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/);
      }
      function m() {
        return (
          window.matchMedia("(min-aspect-ratio: 13 / 9)").matches ||
          window.matchMedia("(orientation: landscape)").matches
        );
      }
      function h(e, t) {
        return "".concat(e).padStart(t, "0");
      }
      function f(e) {
        var t = new XMLHttpRequest();
        return t.open("HEAD", e, !1), t.send(), 404 !== t.status;
      }
      const v = (0, u.MT)({
        modules: {},
        state: {
          headerLogoVisible: !0,
          isSoundPlaying: !1,
          isVideoPlaying: !1,
          isPageEntered: !1,
          useMobileVideo: w(),
        },
        getters: {},
        mutations: {
          toggleSound: function (e) {
            e.isSoundPlaying = !e.isSoundPlaying;
          },
          enterPage: function (e) {
            (e.isPageEntered = !0), (e.isSoundPlaying = !0);
          },
          updateMobileVideo: function (e) {
            e.useMobileVideo = w();
          },
        },
        actions: {},
      });
      function w() {
        return g() && !m() && f("./assets/videos/backgroundM.mp4");
      }
      var b = a(3531),
        _ = a.n(b),
        y = ["href"],
        k = ["src"];
      const E = (0, o.aZ)({
          __name: "LogoSign",
          props: { target: null },
          setup: function (e) {
            var t = e,
              n = (0, o.Fl)(function () {
                return "/#/";
              });
            return function (e, i) {
              return (
                (0, o.wg)(),
                (0, o.iD)(
                  "a",
                  {
                    class: (0, s.C_)("".concat(t.target, "-logo")),
                    href: (0, l.SU)(n),
                  },
                  [
                    (0, o._)("p", null, [
                      (0, o._)(
                        "img",
                        {
                          class: (0, s.C_)(
                            "".concat(t.target, "-logo-image sign-logo-image")
                          ),
                          src: a(4298),
                          alt: "Sign",
                          loading: "lazy",
                        },
                        null,
                        10,
                        k
                      ),
                    ]),
                  ],
                  10,
                  y
                )
              );
            };
          },
        }),
        x = E,
        S = x;
      var M = { class: "cHeader-main" },
        O = { class: "cHeader-text" },
        T = { class: "cHeader-nav" },
        W = { class: "cHeader-list" },
        A = { class: "cHeader-item" },
        L = {
          class: "cHeader-link",
          href: "/#about",
          "data-el": "cHoverOverlap",
        },
        D = { class: "cHeader-item" },
        C = {
          class: "cHeader-link",
          href: "/#product",
          "data-el": "cHoverOverlap",
        },
        N = { class: "cHeader-item" },
        z = {
          class: "cHeader-link",
          href: "/#service",
          "data-el": "cHoverOverlap",
        },
        B = { class: "cHeader-item" },
        I = {
          class: "cHeader-link",
          href: "/#news",
          "data-el": "cHoverOverlap",
        },
        j = { class: "cHeader-item" },
        H = {
          class: "cHeader-link",
          href: "/#contact",
          "data-el": "cHoverOverlap",
        },
        P = (0, o.uE)(
          '<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="10" r="8.5" stroke="#ffffff"></circle><path d="M8.48389 1.40332C8.48389 1.40332 6 4.09619 6 10C6 15.9038 8.48389 18.5798 8.48389 18.5798" stroke="#ffffff" stroke-linecap="round"></path><path d="M9.5 1.40332C9.5 1.40332 11.9839 4.09619 11.9839 10C11.9839 15.9038 9.5 18.5798 9.5 18.5798" stroke="#ffffff" stroke-linecap="round"></path><path d="M0.75 7.5H17.25" stroke="#ffffff" stroke-linecap="square"></path><path d="M0.75 13H17.25" stroke="#ffffff" stroke-linecap="square"></path></svg>',
          1
        ),
        R = { class: "cHeader-menu" },
        U = {
          class: "cHeader-item",
          "data-modal-trigger": "menu",
          "data-el": "cHoverOverlap",
        },
        F = (0, o.uE)(
          '<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="10" r="8.5" stroke="#ffffff"></circle><path d="M8.48389 1.40332C8.48389 1.40332 6 4.09619 6 10C6 15.9038 8.48389 18.5798 8.48389 18.5798" stroke="#ffffff" stroke-linecap="round"></path><path d="M9.5 1.40332C9.5 1.40332 11.9839 4.09619 11.9839 10C11.9839 15.9038 9.5 18.5798 9.5 18.5798" stroke="#ffffff" stroke-linecap="round"></path><path d="M0.75 7.5H17.25" stroke="#ffffff" stroke-linecap="square"></path><path d="M0.75 13H17.25" stroke="#ffffff" stroke-linecap="square"></path></svg>',
          1
        );
      const V = (0, o.aZ)({
          __name: "MenuNavigation",
          setup: function (e) {
            var t = (0, l.iH)(null),
              a = (0, d.yj)(),
              i = (0, c.QT)(),
              r = i.locale,
              u = (0, l.qj)({ isShow: !1 }),
              p = function () {
                return (u.isShow = !u.isShow);
              },
              g = function (e) {
                (u.isShow = !1),
                  (r.value = e),
                  localStorage.setItem("lang", e),
                  location.reload();
              };
            return (
              window.addEventListener("scroll", function () {
                var e, a;
                window.scrollY > 200
                  ? null === (e = t.value) ||
                    void 0 === e ||
                    e.classList.add("-background")
                  : null === (a = t.value) ||
                    void 0 === a ||
                    a.classList.remove("-background");
              }),
              function (e, i) {
                return (
                  (0, o.wg)(),
                  (0, o.iD)(
                    "header",
                    {
                      class: (0, s.C_)(
                        "cHeader ".concat(
                          "home" !== (0, l.SU)(a).name && "opacity-100"
                        )
                      ),
                      ref_key: "header",
                      ref: t,
                      "data-el": "cHeader",
                    },
                    [
                      (0, o._)("div", M, [
                        (0, o._)("p", O, (0, s.zw)(e.$t("header.sign")), 1),
                        (0, o.Wm)(S, { target: "cHeader" }),
                      ]),
                      (0, o._)("nav", T, [
                        (0, o._)("ul", W, [
                          (0, o._)("li", A, [
                            (0, o._)(
                              "a",
                              L,
                              (0, s.zw)(e.$t("navigation.about")),
                              1
                            ),
                          ]),
                          (0, o._)("li", D, [
                            (0, o._)(
                              "a",
                              C,
                              (0, s.zw)(e.$t("navigation.product")),
                              1
                            ),
                          ]),
                          (0, o._)("li", N, [
                            (0, o._)(
                              "a",
                              z,
                              (0, s.zw)(e.$t("navigation.service")),
                              1
                            ),
                          ]),
                          (0, o._)("li", B, [
                            (0, o._)(
                              "a",
                              I,
                              (0, s.zw)(e.$t("navigation.news")),
                              1
                            ),
                          ]),
                          (0, o._)("li", j, [
                            (0, o._)(
                              "a",
                              H,
                              (0, s.zw)(e.$t("navigation.contact")),
                              1
                            ),
                          ]),
                          (0, o._)(
                            "li",
                            {
                              class: "cHeader-item",
                              onClick: p,
                              style: {
                                position: "relative",
                                cursor: "pointer",
                              },
                            },
                            [
                              P,
                              (0, o._)(
                                "div",
                                {
                                  class: "localeModal",
                                  style: (0, s.j5)({
                                    display: u.isShow ? "block" : "none",
                                  }),
                                },
                                [
                                  (0, o._)(
                                    "div",
                                    {
                                      class: (0, s.C_)([
                                        "localeListItem",
                                        { active: "zht" === (0, l.SU)(r) },
                                      ]),
                                      onClick:
                                        i[0] ||
                                        (i[0] = (0, n.iM)(
                                          function (e) {
                                            return g("zht");
                                          },
                                          ["stop"]
                                        )),
                                    },
                                    "繁體中文",
                                    2
                                  ),
                                  (0, o._)(
                                    "div",
                                    {
                                      class: (0, s.C_)([
                                        "localeListItem",
                                        { active: "en" === (0, l.SU)(r) },
                                      ]),
                                      onClick:
                                        i[1] ||
                                        (i[1] = (0, n.iM)(
                                          function (e) {
                                            return g("en");
                                          },
                                          ["stop"]
                                        )),
                                    },
                                    "English",
                                    2
                                  ),
                                ],
                                4
                              ),
                            ]
                          ),
                        ]),
                        (0, o._)("ul", R, [
                          (0, o._)(
                            "li",
                            U,
                            (0, s.zw)(e.$t("navigation.menu")),
                            1
                          ),
                          (0, o._)(
                            "li",
                            {
                              class: "cHeader-item",
                              onClick: p,
                              style: {
                                position: "relative",
                                cursor: "pointer",
                              },
                            },
                            [
                              F,
                              (0, o._)(
                                "div",
                                {
                                  class: "localeModal",
                                  style: (0, s.j5)({
                                    display: u.isShow ? "block" : "none",
                                  }),
                                },
                                [
                                  (0, o._)(
                                    "div",
                                    {
                                      class: (0, s.C_)([
                                        "localeListItem",
                                        { active: "zht" === (0, l.SU)(r) },
                                      ]),
                                      onClick:
                                        i[2] ||
                                        (i[2] = (0, n.iM)(
                                          function (e) {
                                            return g("zht");
                                          },
                                          ["stop"]
                                        )),
                                    },
                                    "繁體中文",
                                    2
                                  ),
                                  (0, o._)(
                                    "div",
                                    {
                                      class: (0, s.C_)([
                                        "localeListItem",
                                        { active: "en" === (0, l.SU)(r) },
                                      ]),
                                      onClick:
                                        i[3] ||
                                        (i[3] = (0, n.iM)(
                                          function (e) {
                                            return g("en");
                                          },
                                          ["stop"]
                                        )),
                                    },
                                    "English",
                                    2
                                  ),
                                ],
                                4
                              ),
                            ]
                          ),
                        ]),
                      ]),
                    ],
                    2
                  )
                );
              }
            );
          },
        }),
        q = V,
        $ = q;
      var Y = { key: 0 };
      const K = (0, o.aZ)({
          __name: "BottomMarquee",
          props: { target: null },
          setup: function (e) {
            var t = e,
              a = (0, l.iH)(null),
              n = (0, l.qj)({ textWidth: 0, offsetX: 0, speed: 0.5 }),
              i = (0, o.Fl)(function () {
                return p("marquee.bottom");
              }),
              r = function e() {
                if (a.value) {
                  var t = a.value.getBoundingClientRect(),
                    i = t.width;
                  i && (n.textWidth = i),
                    (n.offsetX += n.speed),
                    n.offsetX > n.textWidth && (n.offsetX = 0);
                }
                requestAnimationFrame(e);
              };
            return (
              r(),
              function (e, r) {
                return (
                  (0, o.wg)(),
                  (0, o.iD)(
                    "p",
                    {
                      class: (0, s.C_)(
                        "cMarquee ".concat(t.target, "-marquee")
                      ),
                      "aria-label": "Marquee Text",
                      "data-ref": "",
                    },
                    [
                      (0, o._)(
                        "span",
                        {
                          class: "cMarquee-line",
                          style: (0, s.j5)(
                            "transform: translateX(-".concat(n.offsetX, "px)")
                          ),
                          "data-ref": "",
                        },
                        [
                          (0, o._)(
                            "span",
                            {
                              class: "cMarquee-text",
                              ref_key: "marqueeText",
                              ref: a,
                              "data-ref": "",
                            },
                            [
                              ((0, o.wg)(!0),
                              (0, o.iD)(
                                o.HY,
                                null,
                                (0, o.Ko)((0, l.SU)(i), function (e, t) {
                                  return (
                                    (0, o.wg)(),
                                    (0, o.iD)("span", { key: t }, [
                                      0 !== t
                                        ? ((0, o.wg)(),
                                          (0, o.iD)("span", Y, "    "))
                                        : (0, o.kq)("", !0),
                                      (0, o._)("span", null, (0, s.zw)(e), 1),
                                    ])
                                  );
                                }),
                                128
                              )),
                            ],
                            512
                          ),
                        ],
                        4
                      ),
                    ],
                    2
                  )
                );
              }
            );
          },
        }),
        Z = K,
        G = Z;
      var Q = { class: "cModal cMenu", "data-modal": "menu", "data-el": "" },
        X = { class: "cModal-content cMenu-content", "data-modal-content": "" },
        J = { class: "cModal-close", "data-modal-close": "" },
        ee = { "data-ref": "cMenu-cHoverOverlap" },
        te = { class: "cMenu-group" },
        ae = { class: "cMenu-item", href: "/#about", "data-ref": "" },
        ne = (0, o.uE)(
          '<span class="cMenu-item-line -top"><span class="cMenu-item-line-child -left"></span><span class="cMenu-item-line-child -right"></span></span><span class="cMenu-item-line -bottom"><span class="cMenu-item-line-child -left"></span><span class="cMenu-item-line-child -right"></span></span>',
          2
        ),
        ie = { class: "cMenu-linkTitle" },
        re = { class: "cMenu-item", href: "/#product", "data-ref": "" },
        oe = (0, o.uE)(
          '<span class="cMenu-item-line -top"><span class="cMenu-item-line-child -left"></span><span class="cMenu-item-line-child -right"></span></span><span class="cMenu-item-line -bottom"><span class="cMenu-item-line-child -left"></span><span class="cMenu-item-line-child -right"></span></span>',
          2
        ),
        le = { class: "cMenu-linkTitle" },
        se = { class: "cMenu-item", href: "/#service", "data-ref": "" },
        ce = (0, o.uE)(
          '<span class="cMenu-item-line -top"><span class="cMenu-item-line-child -left"></span><span class="cMenu-item-line-child -right"></span></span><span class="cMenu-item-line -bottom"><span class="cMenu-item-line-child -left"></span><span class="cMenu-item-line-child -right"></span></span>',
          2
        ),
        de = { class: "cMenu-linkTitle" },
        ue = { class: "cMenu-item", href: "/#news", "data-ref": "" },
        pe = (0, o.uE)(
          '<span class="cMenu-item-line -top"><span class="cMenu-item-line-child -left"></span><span class="cMenu-item-line-child -right"></span></span><span class="cMenu-item-line -bottom"><span class="cMenu-item-line-child -left"></span><span class="cMenu-item-line-child -right"></span></span>',
          2
        ),
        ge = { class: "cMenu-linkTitle" },
        me = { class: "cMenu-item", href: "/#contact", "data-ref": "" },
        he = (0, o.uE)(
          '<span class="cMenu-item-line -top"><span class="cMenu-item-line-child -left"></span><span class="cMenu-item-line-child -right"></span></span><span class="cMenu-item-line -bottom"><span class="cMenu-item-line-child -left"></span><span class="cMenu-item-line-child -right"></span></span>',
          2
        ),
        fe = { class: "cMenu-linkTitle" };
      const ve = (0, o.aZ)({
          __name: "MenuPopup",
          setup: function (e) {
            var t = (0, l.iH)(null);
            return (
              (0, o.bv)(function () {
                t.value &&
                  (t.value.style.backgroundImage = "url(".concat(
                    window.menuBgSrc[g() ? 1 : 0],
                    ")"
                  ));
              }),
              function (e, a) {
                return (
                  (0, o.wg)(),
                  (0, o.iD)("div", Q, [
                    (0, o._)(
                      "div",
                      {
                        ref_key: "menuBg",
                        ref: t,
                        class: "cModal-backdrop cMenu-background",
                        "data-modal-backdrop": "",
                      },
                      null,
                      512
                    ),
                    (0, o._)("div", X, [
                      (0, o._)("div", J, [
                        (0, o._)(
                          "span",
                          ee,
                          (0, s.zw)(e.$t("button.close")),
                          1
                        ),
                      ]),
                      (0, o.Wm)(S, { target: "cMenu" }),
                      (0, o._)("div", te, [
                        (0, o._)("a", ae, [
                          ne,
                          (0, o._)(
                            "span",
                            ie,
                            (0, s.zw)(e.$t("navigation.about")),
                            1
                          ),
                        ]),
                        (0, o._)("a", re, [
                          oe,
                          (0, o._)(
                            "span",
                            le,
                            (0, s.zw)(e.$t("navigation.product")),
                            1
                          ),
                        ]),
                        (0, o._)("a", se, [
                          ce,
                          (0, o._)(
                            "span",
                            de,
                            (0, s.zw)(e.$t("navigation.service")),
                            1
                          ),
                        ]),
                        (0, o._)("a", ue, [
                          pe,
                          (0, o._)(
                            "span",
                            ge,
                            (0, s.zw)(e.$t("navigation.news")),
                            1
                          ),
                        ]),
                        (0, o._)("a", me, [
                          he,
                          (0, o._)(
                            "span",
                            fe,
                            (0, s.zw)(e.$t("navigation.contact")),
                            1
                          ),
                        ]),
                      ]),
                      (0, o.Wm)(G, { target: "cMenu" }),
                    ]),
                  ])
                );
              }
            );
          },
        }),
        we = ve,
        be = we;
      var _e = ["title"],
        ye = (0, o._)("span", { class: "pulsing-ui" }, null, -1),
        ke = [ye];
      const Ee = (0, o.aZ)({
          __name: "SoundToggle",
          setup: function (e) {
            var t = v.state,
              a = v.commit;
            return function (e, n) {
              return (
                (0, o.wg)(),
                (0, o.iD)(
                  "button",
                  {
                    type: "button",
                    class: (0, s.C_)(
                      "site-volume ".concat(
                        (0, l.SU)(t).isSoundPlaying && "is-playing"
                      )
                    ),
                    title: e.$t("button.sound"),
                    onClick:
                      n[0] ||
                      (n[0] = function (e) {
                        return (0, l.SU)(a)("toggleSound");
                      }),
                  },
                  ke,
                  10,
                  _e
                )
              );
            };
          },
        }),
        xe = Ee,
        Se = xe;
      var Me = ["src"],
        Oe = {
          class: "cBase",
          "data-menu-hidden": "",
          "data-transition-hidden": "",
        },
        Te = { "data-scroll-container": "" },
        We = {
          class: "cFooter",
          "data-scroll": "",
          "data-scroll-call": "footer",
          "data-scroll-repeat": "",
          "data-permanent": "",
        },
        Ae = (0, o._)("div", { "data-fixed-local-container": "" }, null, -1),
        Le = { "data-permanent": "" },
        De = (0, o._)("canvas", { class: "cRay", "data-el": "" }, null, -1),
        Ce = (0, o._)(
          "canvas",
          { class: "cRayBackground", "data-el": "" },
          null,
          -1
        ),
        Ne = (0, o._)(
          "canvas",
          { class: "cCylinder", "data-el": "" },
          null,
          -1
        ),
        ze = { class: "cScrollingMask" },
        Be = { class: "full-screen" },
        Ie = ["src"],
        je = { key: 2, id: "loading-bar" },
        He = { class: "progress" },
        Pe = { class: "bar-bg" },
        Re = ["src"],
        Ue = ["src"],
        Fe = ["src"];
      const Ve = (0, o.aZ)({
          __name: "App",
          setup: function (e) {
            var t = (0, c.QT)(),
              u = t.t,
              p = t.locale,
              g = v.state,
              m = v.commit,
              h = (0, d.yj)(),
              f = (0, l.iH)(null),
              w = new Date().getTime(),
              b = (0, l.qj)({ progress: 0 }),
              y = (0, l.qj)({ pending: !1, status: !1 }),
              k = (0, l.qj)({ progress: 0 }),
              E = (0, l.qj)({ scrolling: !1 }),
              x = (0, o.Fl)(function () {
                var e = g.isPageEntered || "home" !== h.name;
                return (
                  e ||
                    void 0 === h.name ||
                    _().any(
                      [].concat(
                        (0, r.Z)(
                          ["vendor", "pace.min", "index", "main"].map(function (
                            e
                          ) {
                            return {
                              url: "./libs/home/".concat(e, ".js?v=").concat(w),
                              type: "binary",
                            };
                          })
                        ),
                        (0, r.Z)(
                          new Array(5).fill(null).map(function (e, t) {
                            return a(8567)(
                              "./bg-".concat(
                                "".concat(t + 1).padStart(2, "0"),
                                ".png"
                              )
                            );
                          })
                        ),
                        (0, r.Z)(
                          new Array(6).fill(null).map(function (e, t) {
                            return a(6725)(
                              "./photo-".concat(
                                "".concat(t + 1).padStart(2, "0"),
                                ".jpg"
                              )
                            );
                          })
                        ),
                        [a(3917), a(3614)]
                      ),
                      function (e) {
                        var t = e.target,
                          a = e.progress,
                          n = e.error;
                        (b.progress = a),
                          console.debug(
                            "Assets Loaded: "
                              .concat((100 * a).toFixed(1), "% - ")
                              .concat("string" === typeof t ? t : t.url)
                          ),
                          n && console.error(n);
                      }
                    ),
                  e
                );
              });
            (window.rayImageSrc = a(3285)),
              (window.menuBgSrc = [a(4900), a(6219)]),
              (window.openingTimeout = 7),
              (window.openingStatus = !0);
            var S = function e() {
              (y.pending = !!window.openingPending),
                (y.status = window.openingStatus),
                (k.progress = window.rayProgress || 0),
                (E.scrolling = !!window.screenScrolling),
                requestAnimationFrame(e);
            };
            S();
            var M = function (e) {
              var t = document.getElementsByTagName("head")[0],
                a = [];
              switch (e) {
                case "zht":
                  a.push({
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap",
                  });
                  break;
              }
              for (var n = 0, i = a; n < i.length; n++) {
                var r = i[n],
                  o = document.createElement("link");
                (o.rel = r.rel), (o.href = r.href), t.appendChild(o);
              }
              window.marqueeRing = u("marquee.ring");
            };
            return (
              M(p.value),
              (0, o.YP)(p, M),
              (0, o.YP)(
                function () {
                  return g.isSoundPlaying;
                },
                function (e) {
                  var t, a;
                  e
                    ? null === (t = f.value) || void 0 === t || t.play()
                    : null === (a = f.value) || void 0 === a || a.pause();
                }
              ),
              (0, o.YP)(
                function () {
                  return g.isVideoPlaying;
                },
                function (e) {
                  f.value && (f.value.muted = e);
                }
              ),
              (0, o.bv)(function () {
                var e = localStorage.getItem("autoplay");
                if (f.value && e) {
                  var t = e.split(",").map(function (e) {
                      return +e;
                    }),
                    a = (0, i.Z)(t, 3),
                    n = a[0],
                    r = a[1],
                    o = a[2];
                  new Date().getTime() - n <= 2e3 &&
                    (m("enterPage"),
                    (f.value.currentTime = r),
                    o && m("toggleSound"));
                }
              }),
              document.body.addEventListener("touchend", function () {
                var e;
                g.isSoundPlaying &&
                  null !== (e = f.value) &&
                  void 0 !== e &&
                  e.paused &&
                  f.value.play();
              }),
              window.addEventListener("resize", function () {
                return m("updateMobileVideo");
              }),
              window.addEventListener("orientationchange", function () {
                return m("updateMobileVideo");
              }),
              function (e, t) {
                var i = (0, o.up)("router-view");
                return (
                  (0, o.wg)(),
                  (0, o.iD)("div", null, [
                    (0, o._)(
                      "audio",
                      {
                        ref_key: "sound",
                        ref: f,
                        id: "bgm",
                        src: a(4846),
                        onPlay:
                          t[0] ||
                          (t[0] = function (e) {
                            return (e.target.volume = 0.5);
                          }),
                      },
                      null,
                      40,
                      Me
                    ),
                    (0, l.SU)(x)
                      ? ((0, o.wg)(),
                        (0, o.iD)(
                          o.HY,
                          { key: 0 },
                          [
                            (0, o._)("div", Oe, [
                              (0, o._)("div", Te, [
                                (0, o.Wm)(i),
                                (0, o._)("footer", We, [
                                  (0, o._)("p", null, [
                                    (0, o._)(
                                      "small",
                                      null,
                                      (0, s.zw)(e.$t("rights")),
                                      1
                                    ),
                                  ]),
                                ]),
                              ]),
                              Ae,
                            ]),
                            (0, o._)("div", Le, [
                              (0, o.Wm)($),
                              (0, o.Wm)(be),
                              (0, o.Wm)(Se),
                              De,
                              Ce,
                              Ne,
                              (0, o.wy)(
                                (0, o._)(
                                  "div",
                                  {
                                    class: "cRayForeground",
                                    style: (0, s.j5)(
                                      "background-image: url("
                                        .concat(a(3892), "); opacity: ")
                                        .concat(k.progress)
                                    ),
                                  },
                                  null,
                                  4
                                ),
                                [[n.F8, k.progress >= 0.01]]
                              ),
                              (0, o.wy)((0, o._)("div", ze, null, 512), [
                                [n.F8, E.scrolling],
                              ]),
                            ]),
                          ],
                          64
                        ))
                      : ((0, o.wg)(),
                        (0, o.iD)(
                          o.HY,
                          { key: 1 },
                          [
                            (0, o._)("div", Be, [
                              b.progress >= 1
                                ? ((0, o.wg)(),
                                  (0, o.iD)(
                                    "img",
                                    { key: 0, id: "img-logo", src: a(4334) },
                                    null,
                                    8,
                                    Ie
                                  ))
                                : (0, o.kq)("", !0),
                              b.progress >= 1
                                ? ((0, o.wg)(),
                                  (0, o.iD)(
                                    "button",
                                    {
                                      key: 1,
                                      id: "btn-enter",
                                      onClick:
                                        t[1] ||
                                        (t[1] = function (e) {
                                          return (0, l.SU)(m)("enterPage");
                                        }),
                                    },
                                    (0, s.zw)(e.$t("button.enter")),
                                    1
                                  ))
                                : ((0, o.wg)(),
                                  (0, o.iD)("div", je, [
                                    (0, o._)(
                                      "div",
                                      He,
                                      (0, s.zw)((100 * b.progress).toFixed(1)) +
                                        "%",
                                      1
                                    ),
                                    (0, o._)("div", Pe, [
                                      (0, o._)(
                                        "div",
                                        {
                                          class: "bar",
                                          style: (0, s.j5)({
                                            width: "".concat(
                                              100 * b.progress,
                                              "%"
                                            ),
                                          }),
                                        },
                                        null,
                                        4
                                      ),
                                    ]),
                                  ])),
                            ]),
                            (0, o._)(
                              "audio",
                              {
                                style: { visibility: "hidden" },
                                src: a(4846),
                                muted: "",
                                autoplay: "",
                                preload: "auto",
                              },
                              null,
                              8,
                              Re
                            ),
                            (0, o._)(
                              "video",
                              {
                                style: { visibility: "hidden", height: "1px" },
                                src: "./assets/videos/landing-desktop-2.mp4",
                                muted: "",
                                autoplay: "",
                                preload: "auto",
                              },
                              null,
                              8,
                              Ue
                            ),
                            (0, o._)(
                              "video",
                              {
                                style: { visibility: "hidden", height: "1px" },
                                src: "./assets/videos/landing-mobile.mp4",
                                muted: "",
                                autoplay: "",
                                preload: "auto",
                              },
                              null,
                              8,
                              Fe
                            ),
                          ],
                          64
                        )),
                  ])
                );
              }
            );
          },
        }),
        qe = Ve,
        $e = qe;
      const [enData, zhData] = await Promise.all([
        fetch('/locales/en.json').then(response => response.json()),
        fetch('/locales/zh.json').then(response => response.json())
      ]);
      var Ze = "en";
      const Ge = (0, c.o)({
        locale: Ze,
        fallbackLocale: Ze,
        messages: { en: enData, zht: zhData },
      });
      a(7601);
      var Qe = a(124),
        Xe = a(8534),
        Je = (a(8783), a(3948), a(1539), a(5306), { class: "lHero-title" }),
        et = { class: "lHero-titleInner", "data-ref": "" },
        tt = (0, o._)(
          "h1",
          { class: "lHero-titleMain", "data-ref": "" },
          [
            (0, o._)("span", {
              class: "lHero-titleMajor",
              "data-ref": "",
              "aria-hidden": "true",
            }),
            (0, o._)("span", {
              class: "lHero-titleMajor -flicker",
              "data-ref": "titleMajorFlicker",
            }),
          ],
          -1
        ),
        at = { class: "lHero-logo", "data-ref": "" },
        nt = ["src", "poster"],
        it = {
          class: "lHeroMouseStalker",
          "data-el": "cMouseStalker",
          style: { display: "none" },
        },
        rt = (0, o._)(
          "div",
          {
            class: "lHeroMouseStalker-shape -normal",
            "data-ref": "cMouseStalker-shapeNormal",
            style: { display: "none" },
          },
          null,
          -1
        ),
        ot = (0, o._)(
          "div",
          {
            class: "lHeroMouseStalker-shape -accent",
            "data-ref": "cMouseStalker-shapeAccent",
            style: { display: "none" },
          },
          null,
          -1
        ),
        lt = {
          class: "lHeroMouseStalker-shape -theme",
          "data-ref": "cMouseStalker-shapeTheme",
        },
        st = {
          class: "lHeroMouseStalker-circle",
          viewBox: "0 0 100 100",
          width: "100",
          height: "100",
        },
        ct = (0, o._)(
          "defs",
          null,
          [
            (0, o._)("path", {
              id: "circle",
              d: "M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0",
            }),
          ],
          -1
        ),
        dt = ["font-size"],
        ut = { "xlink:href": "#circle" };
      const pt = (0, o.aZ)({
          __name: "PageHeader",
          setup: function (e) {
            var t = v.state,
              i = (0, l.iH)(null),
              r = (0, l.iH)(!0),
              c =
                ((0, o.Fl)(function () {
                  return p("header.title");
                }),
                (0, o.Fl)(function () {
                  return p("marquee.bottom");
                })),
              d = function (e) {
                return e.preventDefault();
              },
              u = function () {
                window.addEventListener("touchmove", d, { passive: !1 }),
                  window.addEventListener("wheel", d, { passive: !1 });
              },
              g = function () {
                window.removeEventListener("touchmove", d),
                  window.removeEventListener("wheel", d);
              };
            u();
            var m = function e() {
              var t;
              window.heroStarting
                ? (g(),
                  null !== (t = i.value) &&
                    void 0 !== t &&
                    t.paused &&
                    window.setHeroScrollable())
                : requestAnimationFrame(e);
            };
            return (
              m(),
              window.addEventListener("scroll", function () {
                var e = window.scrollY < 200;
                (r.value = e), e || g();
              }),
              function (e, d) {
                return (
                  (0, o.wg)(),
                  (0, o.iD)(
                    "a",
                    {
                      class: "lHero",
                      style: (0, s.j5)(
                        "".concat(r.value || "visibility: hidden")
                      ),
                      "data-el": "",
                      "data-scroll": "",
                      "data-scroll-sticky": "",
                      "data-scroll-target": ".cMain",
                    },
                    [
                      (0, o._)("div", Je, [
                        (0, o._)("div", et, [
                          tt,
                          (0, o.wy)((0, o._)("p", at, null, 512), [
                            [n.F8, (0, l.SU)(t).headerLogoVisible],
                          ]),
                        ]),
                      ]),
                      (0, o.Wm)(
                        G,
                        { target: "lHero", texts: (0, l.SU)(c) },
                        null,
                        8,
                        ["texts"]
                      ),
                      (0, o._)(
                        "video",
                        {
                          class: "lHero-video",
                          ref_key: "video",
                          ref: i,
                          src: "".concat(
                            (0, l.SU)(t).useMobileVideo
                              ? "./assets/videos/landing-mobile.mp4"
                              : "./assets/videos/landing-desktop-2.mp4"
                          ),
                          poster: a(952),
                          muted: "",
                          loop: "",
                          playsinline: "",
                          autoplay: "",
                          "data-ref": "",
                        },
                        null,
                        8,
                        nt
                      ),
                      (0, o._)("div", it, [
                        (0, o._)(
                          "div",
                          {
                            class: "lHeroMouseStalker-text",
                            "data-ref": "cMouseStalker-text",
                            style: (0, s.j5)(
                              "left: calc(50% + ".concat(
                                e.$t("button.fullMovie.textLeft"),
                                "px)"
                              )
                            ),
                          },
                          (0, s.zw)(e.$t("button.fullMovie.text")),
                          5
                        ),
                        rt,
                        ot,
                        (0, o._)("div", lt, [
                          ((0, o.wg)(),
                          (0, o.iD)("svg", st, [
                            ct,
                            (0, o._)(
                              "text",
                              {
                                "font-size": e.$t(
                                  "button.fullMovie.borderSize"
                                ),
                              },
                              [
                                (0, o._)(
                                  "textPath",
                                  ut,
                                  (0, s.zw)(
                                    e
                                      .$t("button.fullMovie.border")
                                      .replace(/ /g, " ")
                                  ),
                                  1
                                ),
                              ],
                              8,
                              dt
                            ),
                          ])),
                        ]),
                      ]),
                    ],
                    4
                  )
                );
              }
            );
          },
        }),
        gt = pt,
        mt = gt;
      var ht = {
          class: "lOutline",
          id: "about",
          "data-el": "",
          "data-scroll": "",
          "data-scroll-call": "lOutline",
        },
        ft = {
          class: "cTitle -right lOutline-title",
          "data-el": "cTitle",
          "data-scroll": "",
          "data-scroll-call": "lOutline-title",
          "data-ref": "",
          "data-scroll-offset": "10%",
        },
        vt = (0, o._)("span", { class: "cTitle-line -top" }, null, -1),
        wt = (0, o._)("span", { class: "cTitle-line -bottom" }, null, -1),
        bt = {
          class: "lOutline-catchMajor",
          "data-el": "",
          "data-scroll": "",
          "data-scroll-call": "lOutline-catchMajor",
        },
        _t = (0, o._)("br", null, null, -1),
        yt = ["srcset"],
        kt = ["src", "width"],
        Et = {
          class: "lOutline-catchSub",
          "data-ref": "",
          "data-scroll": "",
          "data-scroll-call": "lOutline-catchSub",
        },
        xt = (0, o._)(
          "span",
          { class: "lOutline-catchSub-line -top" },
          null,
          -1
        ),
        St = (0, o._)(
          "span",
          { class: "lOutline-catchSub-line -bottom" },
          null,
          -1
        ),
        Mt = {
          class: "lOutline-text",
          "data-el": "",
          "data-scroll": "",
          "data-scroll-call": "lOutline-text-p",
        };
      const Ot = (0, o.aZ)({
          __name: "PageOutline",
          setup: function (e) {
            var t = (0, l.qj)({ width: 1480 }),
              n = (0, o.Fl)(function () {
                return p("outline.title");
              }),
              i = (0, o.Fl)(function () {
                return p("outline.content", "0").map(function (e, t) {
                  return p("outline.content[".concat(t, "]"));
                });
              });
            return function (e, r) {
              return (
                (0, o.wg)(),
                (0, o.iD)("section", ht, [
                  (0, o._)("h2", ft, [
                    vt,
                    wt,
                    (0, o.Uk)(" " + (0, s.zw)(e.$t("navigation.about")), 1),
                  ]),
                  (0, o._)("p", bt, [
                    ((0, o.wg)(!0),
                    (0, o.iD)(
                      o.HY,
                      null,
                      (0, o.Ko)((0, l.SU)(n), function (e, t) {
                        return (
                          (0, o.wg)(),
                          (0, o.iD)("span", { key: t }, [
                            (0, o.Uk)((0, s.zw)(e) + " ", 1),
                            _t,
                          ])
                        );
                      }),
                      128
                    )),
                  ]),
                  (0, o._)("picture", null, [
                    (0, o._)(
                      "source",
                      { media: "(max-width: 767px)", srcset: a(3614) },
                      null,
                      8,
                      yt
                    ),
                    (0, o._)(
                      "img",
                      {
                        class: "lOutline-image",
                        alt: "",
                        loading: "lazy",
                        "data-ref": "",
                        "data-scroll": "",
                        "data-scroll-speed": "-3",
                        src: a(3917),
                        width: t.width,
                      },
                      null,
                      8,
                      kt
                    ),
                  ]),
                  (0, o._)("p", Et, [
                    xt,
                    St,
                    (0, o.Uk)(" " + (0, s.zw)(e.$t("outline.subtitle")), 1),
                  ]),
                  (0, o._)("div", Mt, [
                    ((0, o.wg)(!0),
                    (0, o.iD)(
                      o.HY,
                      null,
                      (0, o.Ko)((0, l.SU)(i), function (e, t) {
                        return (
                          (0, o.wg)(),
                          (0, o.iD)("p", { key: t, class: "lOutline-text-p" }, [
                            ((0, o.wg)(!0),
                            (0, o.iD)(
                              o.HY,
                              null,
                              (0, o.Ko)(e, function (e, t) {
                                return (
                                  (0, o.wg)(),
                                  (0, o.iD)(
                                    "span",
                                    { key: t, class: "full-width line-break" },
                                    (0, s.zw)(e),
                                    1
                                  )
                                );
                              }),
                              128
                            )),
                          ])
                        );
                      }),
                      128
                    )),
                  ]),
                ])
              );
            };
          },
        }),
        Tt = Ot,
        Wt = Tt;
      var At = {
          class: "lOutlineGallery",
          "data-el": "",
          "data-scroll": "",
          "data-scroll-id": "lOutlineGallery",
          "data-scroll-call": "lOutlineGallery",
          "data-scroll-repeat": "",
        },
        Lt = {
          class: "lOutlineGallery-target",
          "data-ref": "",
          "data-scroll": "",
          "data-scroll-call": "lOutlineGallery-inner",
          "data-scroll-offset": "80%,80%",
          "data-scroll-repeat": "",
        },
        Dt = {
          class: "lOutlineGallery-wrapper",
          "data-scroll": "",
          "data-scroll-sticky": "",
          "data-scroll-target": ".lOutlineGallery-target",
          "data-sticky": "",
        },
        Ct = { class: "lOutlineGallery-list", "data-ref": "" },
        Nt = ["srcset"],
        zt = ["src", "width", "height"];
      const Bt = (0, o.aZ)({
          __name: "PageOutlineGallery",
          setup: function (e) {
            var t = (0, l.qj)({ length: 6, width: 1e3, height: 660 });
            return function (e, n) {
              return (
                (0, o.wg)(),
                (0, o.iD)("div", At, [
                  (0, o._)("div", Lt, [
                    (0, o._)("div", Dt, [
                      (0, o._)("ul", Ct, [
                        ((0, o.wg)(!0),
                        (0, o.iD)(
                          o.HY,
                          null,
                          (0, o.Ko)(t.length, function (e) {
                            return (
                              (0, o.wg)(),
                              (0, o.iD)(
                                "li",
                                { key: e, class: "lOutlineGallery-item" },
                                [
                                  (0, o._)("picture", null, [
                                    (0, o._)(
                                      "source",
                                      {
                                        media: "(max-width: 767px)",
                                        srcset: a(6725)(
                                          "./photo-".concat(
                                            (0, l.SU)(h)(e, 2),
                                            ".jpg"
                                          )
                                        ),
                                      },
                                      null,
                                      8,
                                      Nt
                                    ),
                                    (0, o._)(
                                      "img",
                                      {
                                        class: "lOutlineGallery-image",
                                        alt: "",
                                        loading: "lazy",
                                        "data-el": "",
                                        src: a(6725)(
                                          "./photo-".concat(
                                            (0, l.SU)(h)(e, 2),
                                            ".jpg"
                                          )
                                        ),
                                        width: t.width,
                                        height: t.height,
                                      },
                                      null,
                                      8,
                                      zt
                                    ),
                                  ]),
                                ]
                              )
                            );
                          }),
                          128
                        )),
                      ]),
                    ]),
                  ]),
                ])
              );
            };
          },
        }),
        It = Bt,
        jt = It;
      var Ht = {
          class: "lProduct",
          id: "product",
          "data-el": "",
          "data-scroll": "",
          "data-scroll-call": "lProduct",
        },
        Pt = ["srcset"],
        Rt = ["src", "width"],
        Ut = (0, o._)(
          "div",
          { id: "service-detector", style: { width: "1px", height: "1px" } },
          null,
          -1
        ),
        Ft = { class: "lProduct-content" },
        Vt = { class: "lOrder-catch -left" },
        qt = { class: "lProduct-text" },
        $t = { class: "lProduct-text-p" },
        Yt = { class: "full-width line-break" },
        Kt = (0, o._)("br", null, null, -1),
        Zt = (0, o._)("br", null, null, -1),
        Gt = { class: "game-list" },
        Qt = { class: "lProduct-img" },
        Xt = ["src"];
      const Jt = (0, o.aZ)({
          __name: "PageProductLive",
          setup: function (e) {
            var t = (0, l.qj)({ width: 1480 }),
              n = [
                "gOFBaccarat",
                "gOFRoulette",
                "traditionalBaccarat",
                "speedBaccarat",
                "squeezeBaccarat",
                "themedBaccarat",
                "dragonTiger",
                "speedDragonTiger",
                "sicBo",
                "roulette",
                "mahjongLuckyWheel",
                "bullBull",
                "winThreeCards",
                "fanTan",
              ];
            return function (e, i) {
              return (
                (0, o.wg)(),
                (0, o.iD)("section", Ht, [
                  (0, o._)("picture", null, [
                    (0, o._)(
                      "source",
                      { media: "(max-width: 767px)", srcset: a(2102) },
                      null,
                      8,
                      Pt
                    ),
                    (0, o._)(
                      "img",
                      {
                        class: "lOutline-image",
                        alt: "",
                        loading: "lazy",
                        src: a(2977),
                        width: t.width,
                      },
                      null,
                      8,
                      Rt
                    ),
                  ]),
                  Ut,
                  (0, o._)("div", Ft, [
                    (0, o._)("p", Vt, [
                      (0, o._)(
                        "span",
                        null,
                        (0, s.zw)(e.$t("product.live.title")),
                        1
                      ),
                    ]),
                    (0, o._)("div", qt, [
                      (0, o._)("p", $t, [
                        (0, o._)("span", Yt, [
                          (0, o.Uk)(
                            (0, s.zw)(e.$t("product.live.content")) + " ",
                            1
                          ),
                          Kt,
                          Zt,
                          (0, o.Uk)((0, s.zw)(e.$t("product.gameChoose")), 1),
                        ]),
                      ]),
                      (0, o._)("div", Gt, [
                        (0, o._)("ul", null, [
                          ((0, o.wg)(),
                          (0, o.iD)(
                            o.HY,
                            null,
                            (0, o.Ko)(n, function (t, a) {
                              return (0,
                              o._)("li", { key: a }, (0, s.zw)(e.$t("product.gameList.".concat(t))), 1);
                            }),
                            64
                          )),
                        ]),
                      ]),
                    ]),
                  ]),
                  (0, o._)("div", Qt, [
                    (0, o._)(
                      "img",
                      {
                        alt: "",
                        loading: "lazy",
                        src: a(5726)("./".concat(e.$t("product.live.img"))),
                      },
                      null,
                      8,
                      Xt
                    ),
                  ]),
                ])
              );
            };
          },
        }),
        ea = Jt,
        ta = ea;
      var aa = { class: "lProductSport" },
        na = ["srcset"],
        ia = ["src", "width"],
        ra = (0, o._)(
          "div",
          { id: "service-detector", style: { width: "1px", height: "1px" } },
          null,
          -1
        ),
        oa = { class: "lProductSport-content" },
        la = { class: "lOrder-catch -left" },
        sa = { class: "lProduct-text" },
        ca = { class: "lProduct-text-p" },
        da = { class: "full-width line-break" },
        ua = { class: "game-list" },
        pa = { class: "lProductSport-img" },
        ga = ["src"];
      const ma = (0, o.aZ)({
          __name: "PageProductSport",
          setup: function (e) {
            var t = (0, l.qj)({ width: 1480 }),
              n = [
                "bet",
                "diverse",
                "data",
                "anchor",
                "customized",
                "globalization",
                "humanize",
              ];
            return function (e, i) {
              return (
                (0, o.wg)(),
                (0, o.iD)("section", aa, [
                  (0, o._)("picture", null, [
                    (0, o._)(
                      "source",
                      { media: "(max-width: 767px)", srcset: a(6654) },
                      null,
                      8,
                      na
                    ),
                    (0, o._)(
                      "img",
                      {
                        class: "lOutline-image",
                        alt: "",
                        loading: "lazy",
                        src: a(1049),
                        width: t.width,
                      },
                      null,
                      8,
                      ia
                    ),
                  ]),
                  ra,
                  (0, o._)("div", oa, [
                    (0, o._)("p", la, [
                      (0, o._)(
                        "span",
                        null,
                        (0, s.zw)(e.$t("product.sport.title")),
                        1
                      ),
                    ]),
                    (0, o._)("div", sa, [
                      (0, o._)("p", ca, [
                        (0, o._)(
                          "span",
                          da,
                          (0, s.zw)(e.$t("product.sport.content")),
                          1
                        ),
                      ]),
                      (0, o._)("div", ua, [
                        (0, o._)("ul", null, [
                          ((0, o.wg)(),
                          (0, o.iD)(
                            o.HY,
                            null,
                            (0, o.Ko)(n, function (t, a) {
                              return (0,
                              o._)("li", { key: a }, (0, s.zw)(e.$t("product.sport.list.".concat(t))), 1);
                            }),
                            64
                          )),
                        ]),
                      ]),
                    ]),
                  ]),
                  (0, o._)("div", pa, [
                    (0, o._)(
                      "img",
                      { alt: "", loading: "lazy", src: a(4786) },
                      null,
                      8,
                      ga
                    ),
                  ]),
                ])
              );
            };
          },
        }),
        ha = ma,
        fa = ha;
      var va = { class: "lProductBC" },
        wa = ["srcset"],
        ba = ["src", "width"],
        _a = (0, o._)(
          "div",
          { id: "service-detector", style: { width: "1px", height: "1px" } },
          null,
          -1
        ),
        ya = { class: "lProductBC-content" },
        ka = { class: "lOrder-catch -left" },
        Ea = { class: "lProduct-text" },
        xa = { class: "lProduct-text-p" },
        Sa = { class: "full-width line-break" },
        Ma = (0, o._)("br", null, null, -1),
        Oa = (0, o._)("br", null, null, -1),
        Ta = { class: "game-list" },
        Wa = { class: "lProductBC-img" },
        Aa = ["src"];
      const La = (0, o.aZ)({
          __name: "PageProductBlockchain",
          setup: function (e) {
            var t = (0, l.qj)({ width: 1480 }),
              n = [
                "traditionalBaccarat",
                "speedBaccarat",
                "squeezeBaccarat",
                "dragonTiger",
                "sicBo",
                "roulette",
                "mahjongLuckyWheel",
                "bullBull",
                "winThreeCards",
              ];
            return function (e, i) {
              return (
                (0, o.wg)(),
                (0, o.iD)("section", va, [
                  (0, o._)("picture", null, [
                    (0, o._)(
                      "source",
                      { media: "(max-width: 767px)", srcset: a(343) },
                      null,
                      8,
                      wa
                    ),
                    (0, o._)(
                      "img",
                      {
                        class: "lOutline-image",
                        alt: "",
                        loading: "lazy",
                        src: a(5196),
                        width: t.width,
                      },
                      null,
                      8,
                      ba
                    ),
                  ]),
                  _a,
                  (0, o._)("div", ya, [
                    (0, o._)("p", ka, [
                      (0, o._)(
                        "span",
                        null,
                        (0, s.zw)(e.$t("product.bc.title")),
                        1
                      ),
                    ]),
                    (0, o._)("div", Ea, [
                      (0, o._)("p", xa, [
                        (0, o._)("span", Sa, [
                          (0, o.Uk)(
                            (0, s.zw)(e.$t("product.bc.content")) + " ",
                            1
                          ),
                          Ma,
                          Oa,
                          (0, o.Uk)((0, s.zw)(e.$t("product.gameChoose")), 1),
                        ]),
                      ]),
                      (0, o._)("div", Ta, [
                        (0, o._)("ul", null, [
                          ((0, o.wg)(),
                          (0, o.iD)(
                            o.HY,
                            null,
                            (0, o.Ko)(n, function (t, a) {
                              return (0,
                              o._)("li", { key: a }, (0, s.zw)(e.$t("product.gameList.".concat(t))), 1);
                            }),
                            64
                          )),
                        ]),
                      ]),
                    ]),
                  ]),
                  (0, o._)("div", Wa, [
                    (0, o._)(
                      "img",
                      {
                        alt: "",
                        loading: "lazy",
                        src: a(5726)("./".concat(e.$t("product.bc.img"))),
                      },
                      null,
                      8,
                      Aa
                    ),
                  ]),
                ])
              );
            };
          },
        }),
        Da = La,
        Ca = Da;
      var Na = { class: "lProductLotto" },
        za = ["srcset"],
        Ba = ["src", "width"],
        Ia = (0, o._)(
          "div",
          { id: "service-detector", style: { width: "1px", height: "1px" } },
          null,
          -1
        ),
        ja = { class: "lProductLotto-content" },
        Ha = { class: "lOrder-catch -left" },
        Pa = { class: "lProduct-text" },
        Ra = { class: "lProduct-text-p" },
        Ua = { class: "full-width line-break" },
        Fa = (0, o._)("br", null, null, -1),
        Va = (0, o._)("br", null, null, -1),
        qa = { class: "game-list" },
        $a = { class: "lProductLotto-img" },
        Ya = ["src"];
      const Ka = (0, o.aZ)({
          __name: "PageProductLotto",
          setup: function (e) {
            var t = (0, l.qj)({ width: 1480 }),
              n = ["lotto", "pk10"];
            return function (e, i) {
              return (
                (0, o.wg)(),
                (0, o.iD)("section", Na, [
                  (0, o._)("picture", null, [
                    (0, o._)(
                      "source",
                      { media: "(max-width: 767px)", srcset: a(5019) },
                      null,
                      8,
                      za
                    ),
                    (0, o._)(
                      "img",
                      {
                        class: "lOutline-image",
                        alt: "",
                        loading: "lazy",
                        src: a(8272),
                        width: t.width,
                      },
                      null,
                      8,
                      Ba
                    ),
                  ]),
                  Ia,
                  (0, o._)("div", ja, [
                    (0, o._)("p", Ha, [
                      (0, o._)(
                        "span",
                        null,
                        (0, s.zw)(e.$t("product.lotto.title")),
                        1
                      ),
                    ]),
                    (0, o._)("div", Pa, [
                      (0, o._)("p", Ra, [
                        (0, o._)("span", Ua, [
                          (0, o.Uk)(
                            (0, s.zw)(e.$t("product.lotto.content")) + " ",
                            1
                          ),
                          Fa,
                          Va,
                          (0, o.Uk)(
                            " " + (0, s.zw)(e.$t("product.gameChoose")),
                            1
                          ),
                        ]),
                      ]),
                      (0, o._)("div", qa, [
                        (0, o._)("ul", null, [
                          ((0, o.wg)(),
                          (0, o.iD)(
                            o.HY,
                            null,
                            (0, o.Ko)(n, function (t, a) {
                              return (0,
                              o._)("li", { key: a }, (0, s.zw)(e.$t("product.gameList.".concat(t))), 1);
                            }),
                            64
                          )),
                        ]),
                      ]),
                    ]),
                  ]),
                  (0, o._)("div", $a, [
                    (0, o._)(
                      "img",
                      {
                        alt: "",
                        loading: "lazy",
                        src: a(5726)("./".concat(e.$t("product.lotto.img"))),
                      },
                      null,
                      8,
                      Ya
                    ),
                  ]),
                ])
              );
            };
          },
        }),
        Za = Ka,
        Ga = Za;
      var Qa = {
          class: "lService",
          id: "service",
          "data-el": "",
          "data-scroll": "",
          "data-scroll-call": "lService",
        },
        Xa = (0, o._)(
          "div",
          { id: "service-detector", style: { width: "1px", height: "1px" } },
          null,
          -1
        ),
        Ja = {
          class: "lService-content lOutline-text",
          "data-el": "",
          "data-scroll": "",
          "data-scroll-call": "lOutline-text-p",
        },
        en = { class: "lService-img" },
        tn = ["src"];
      const an = (0, o.aZ)({
          __name: "PageService",
          setup: function (e) {
            var t = (0, o.Fl)(function () {
              return p("service.content", "0").map(function (e, t) {
                return p("service.content[".concat(t, "]"));
              });
            });
            return function (e, a) {
              return (
                (0, o.wg)(),
                (0, o.iD)("section", Qa, [
                  Xa,
                  (0, o._)("div", Ja, [
                    ((0, o.wg)(!0),
                    (0, o.iD)(
                      o.HY,
                      null,
                      (0, o.Ko)((0, l.SU)(t), function (e, t) {
                        return (
                          (0, o.wg)(),
                          (0, o.iD)("p", { key: t, class: "lOutline-text-p" }, [
                            ((0, o.wg)(!0),
                            (0, o.iD)(
                              o.HY,
                              null,
                              (0, o.Ko)(e, function (e, t) {
                                return (
                                  (0, o.wg)(),
                                  (0, o.iD)(
                                    "span",
                                    { key: t, class: "full-width line-break" },
                                    (0, s.zw)(e),
                                    1
                                  )
                                );
                              }),
                              128
                            )),
                          ])
                        );
                      }),
                      128
                    )),
                  ]),
                  (0, o._)("div", en, [
                    (0, o._)(
                      "video",
                      {
                        ref: "video",
                        src: "./assets/videos/service.mp4",
                        muted: "",
                        loop: "",
                        playsinline: "",
                        autoplay: "",
                        "data-ref": "",
                      },
                      null,
                      8,
                      tn
                    ),
                  ]),
                ])
              );
            };
          },
        }),
        nn = an,
        rn = nn;
      a(6755);
      var on = { class: "cNews", "data-news": "" },
        ln = { class: "cNews-day" },
        sn = { class: "cNews-day-month" },
        cn = { class: "cNews-day-year" },
        dn = { class: "cNews-article" },
        un = { class: "cNews-article-text" },
        pn = { class: "cNews-article-image", "data-news-image": "" },
        gn = ["src"];
      const mn = (0, o.aZ)({
          __name: "NewsArticle",
          props: { article: null },
          setup: function (e) {
            var t = e,
              n = function () {
                var e = document.querySelector("#bgm");
                localStorage.setItem(
                  "autoplay",
                  ""
                    .concat(new Date().getTime(), ",")
                    .concat(
                      (null === e || void 0 === e ? void 0 : e.currentTime) ||
                        0,
                      ","
                    )
                    .concat(null !== e && void 0 !== e && e.paused ? 1 : 0)
                );
              };
            return function (e, i) {
              return (
                (0, o.wg)(),
                (0, o.iD)("div", on, [
                  ((0, o.wg)(),
                  (0, o.j4)(
                    (0, o.LL)(
                      t.article.href.startsWith("http") ? "a" : "router-link"
                    ),
                    {
                      class: "cNews-link",
                      href: t.article.href,
                      to: "/article/".concat(t.article.href),
                      onClick: n,
                    },
                    {
                      default: (0, o.w5)(function () {
                        return [
                          (0, o._)("div", ln, [
                            (0, o._)("p", sn, (0, s.zw)(t.article.date), 1),
                            (0, o._)("p", cn, (0, s.zw)(t.article.year), 1),
                          ]),
                          (0, o._)("div", dn, [
                            (0, o._)("p", un, (0, s.zw)(t.article.summary), 1),
                            (0, o._)("div", pn, [
                              (0, o._)(
                                "img",
                                {
                                  width: "2000",
                                  height: "1125",
                                  src: a(8909)("./".concat(t.article.image)),
                                  class: "cNews-article-img wp-post-image",
                                  alt: "",
                                  loading: "lazy",
                                },
                                null,
                                8,
                                gn
                              ),
                            ]),
                          ]),
                        ];
                      }),
                      _: 1,
                    },
                    8,
                    ["href", "to"]
                  )),
                ])
              );
            };
          },
        }),
        hn = mn,
        fn = hn;
      var vn = { class: "lNews", id: "news" },
        wn = {
          class: "cTitle lNews-title",
          "data-el": "cTitle",
          "data-scroll": "",
          "data-scroll-call": "cTitle",
        },
        bn = (0, o._)("span", { class: "cTitle-line -top" }, null, -1),
        _n = (0, o._)("span", { class: "cTitle-line -bottom" }, null, -1),
        yn = { class: "lNews-accordion", "data-accordion": "" },
        kn = { class: "lNews-group lNewsStalker", "data-el": "" },
        En = { class: "lNewsMouseStalker", "data-el": "" },
        xn = { class: "lNewsMouseStalker-text", "data-ref": "" },
        Sn = (0, o.uE)(
          '<div class="lNewsMouseStalker-shapeNormal -shape -normal" data-ref><div class="lNewsMouseStalker-circle"></div></div><div class="lNewsMouseStalker-shapeAccent -shape -accent" data-ref><div class="lNewsMouseStalker-circle"></div></div><div class="lNewsMouseStalker-shapeTheme -shape -theme" data-ref><div class="lNewsMouseStalker-circle"></div></div>',
          3
        ),
        Mn = { class: "lNews-accordionMore", "data-accordion-trigger": "" },
        On = { class: "lNews-accordionMore-text" },
        Tn = (0, o._)(
          "div",
          { class: "lNews-accordionMore-iconWrap" },
          [(0, o._)("div", { class: "lNews-accordionMore-icon" })],
          -1
        );
      const Wn = (0, o.aZ)({
          __name: "PageNews",
          setup: function (e) {
            var t = (0, c.QT)(),
              a = t.t,
              n = (0, o.Fl)(function () {
                return p("news.articles", "summary").map(function (e, t) {
                  return {
                    date: a("news.articles[".concat(t, "].date")),
                    year: a("news.articles[".concat(t, "].year")),
                    summary: a("news.articles[".concat(t, "].summary")),
                    href: a("news.articles[".concat(t, "].href")),
                    image: a("news.articles[".concat(t, "].image")),
                  };
                });
              });
            return function (e, t) {
              return (
                (0, o.wg)(),
                (0, o.iD)("section", vn, [
                  (0, o._)("h2", wn, [
                    bn,
                    _n,
                    (0, o.Uk)(" " + (0, s.zw)(e.$t("navigation.news")), 1),
                  ]),
                  (0, o._)("div", yn, [
                    (0, o._)("div", kn, [
                      ((0, o.wg)(!0),
                      (0, o.iD)(
                        o.HY,
                        null,
                        (0, o.Ko)((0, l.SU)(n), function (e, t) {
                          return (
                            (0, o.wg)(),
                            (0, o.j4)(fn, { key: t, article: e }, null, 8, [
                              "article",
                            ])
                          );
                        }),
                        128
                      )),
                      (0, o._)("div", En, [
                        (0, o._)("div", xn, (0, s.zw)(e.$t("button.more")), 1),
                        Sn,
                      ]),
                    ]),
                    (0, o._)("div", Mn, [
                      (0, o._)("div", On, (0, s.zw)(e.$t("button.load")), 1),
                      Tn,
                    ]),
                  ]),
                ])
              );
            };
          },
        }),
        An = Wn,
        Ln = An;
      var Dn = { class: "lOrder-contact-link-font" },
        Cn = { class: "lOrder-contact-link-arrow" },
        Nn = { class: "lOrder-contact-link-arrow-wrap" },
        zn = ["src"],
        Bn = ["src"];
      const In = (0, o.aZ)({
          __name: "ContactLink",
          props: { title: null, href: null, routerLink: { type: Boolean } },
          setup: function (e) {
            var t = e,
              n = function () {
                var e = document.querySelector("#bgm");
                localStorage.setItem(
                  "autoplay",
                  ""
                    .concat(new Date().getTime(), ",")
                    .concat(
                      (null === e || void 0 === e ? void 0 : e.currentTime) ||
                        0,
                      ","
                    )
                    .concat(null !== e && void 0 !== e && e.paused ? 1 : 0)
                );
              };
            return function (i, r) {
              return (
                (0, o.wg)(),
                (0, o.j4)(
                  (0, o.LL)(e.routerLink ? "router-link" : "a"),
                  {
                    class: "lOrder-contact-link",
                    href: t.href,
                    to: t.href,
                    target: e.routerLink ? "_self" : "_blank",
                    onClick: n,
                    rel: "noopener noreferrer",
                  },
                  {
                    default: (0, o.w5)(function () {
                      return [
                        (0, o._)("div", Dn, (0, s.zw)(t.title), 1),
                        (0, o._)("div", Cn, [
                          (0, o._)("div", Nn, [
                            (0, o._)(
                              "img",
                              {
                                class: "lOrder-contact-link-arrow-img01",
                                src: a(7165),
                                width: "21",
                                height: "21",
                                alt: "",
                                loading: "lazy",
                              },
                              null,
                              8,
                              zn
                            ),
                            (0, o._)(
                              "img",
                              {
                                class:
                                  "lOrder-contact-link-arrow-img02 -pcOnly",
                                src: a(7165),
                                width: "21",
                                height: "21",
                                alt: "",
                                loading: "lazy",
                              },
                              null,
                              8,
                              Bn
                            ),
                          ]),
                        ]),
                      ];
                    }),
                    _: 1,
                  },
                  8,
                  ["href", "to", "target"]
                )
              );
            };
          },
        }),
        jn = In,
        Hn = jn;
      var Pn = { class: "lOrder", id: "contact", "data-el": "" },
        Rn = {
          class: "cTitle -right lOrder-title",
          "data-el": "cTitle",
          "data-scroll": "",
          "data-scroll-call": "cTitle",
        },
        Un = (0, o._)("span", { class: "cTitle-line -top" }, null, -1),
        Fn = (0, o._)("span", { class: "cTitle-line -bottom" }, null, -1),
        Vn = {
          class: "lOrder-catch",
          "data-ref": "",
          "data-scroll": "",
          "data-scroll-call": "lOrder-catch",
        },
        qn = { class: "lOrder-purchase" },
        $n = { class: "lOrder-purchase-text" },
        Yn = ["innerHTML"],
        Kn = { class: "lOrder-social-buttons" },
        Zn = ["onClick"],
        Gn = ["src", "alt"],
        Qn = { class: "lOrder-contact" },
        Xn = { class: "lOrder-video" },
        Jn = ["src"];
      const ei = (0, o.aZ)({
          __name: "PageOrder",
          setup: function (e) {
            var t = v.state,
              i = (0, c.QT)(),
              r = i.t,
              d = (0, o.Fl)(function () {
                return p("order.title");
              }),
              u = (0, o.Fl)(function () {
                return p("order.subtitle").map(function (e) {
                  return e + "&nbsp;";
                });
              }),
              g =
                ((0, o.Fl)(function () {
                  return p("order.link.top", "title").map(function (e, t) {
                    return {
                      title: r("order.link.top[".concat(t, "].title")),
                      href: r("order.link.top[".concat(t, "].href")),
                    };
                  });
                }),
                (0, o.Fl)(function () {
                  return p("order.link.bottom", "title").map(function (e, t) {
                    return {
                      title: r("order.link.bottom[".concat(t, "].title")),
                      href: r("order.link.bottom[".concat(t, "].href")),
                    };
                  });
                })),
              m = (0, o.Fl)(function () {
                return p("order.link.social", "title").map(function (e, t) {
                  return {
                    title: r("order.link.social[".concat(t, "].title")),
                    icon: r("order.link.social[".concat(t, "].icon")),
                    href: r("order.link.social[".concat(t, "].href")),
                  };
                });
              }),
              h = function (e) {
                window.open(e, "_blank");
              };
            return function (e, i) {
              return (
                (0, o.wg)(),
                (0, o.iD)("div", Pn, [
                  (0, o._)("h2", Rn, [
                    Un,
                    Fn,
                    (0, o.Uk)(" " + (0, s.zw)(e.$t("navigation.contact")), 1),
                  ]),
                  (0, o._)("p", Vn, [
                    ((0, o.wg)(!0),
                    (0, o.iD)(
                      o.HY,
                      null,
                      (0, o.Ko)((0, l.SU)(d), function (e, t) {
                        return (
                          (0, o.wg)(),
                          (0, o.iD)("span", { key: t }, (0, s.zw)(e), 1)
                        );
                      }),
                      128
                    )),
                  ]),
                  (0, o._)("div", qn, [
                    (0, o._)("p", $n, [
                      ((0, o.wg)(!0),
                      (0, o.iD)(
                        o.HY,
                        null,
                        (0, o.Ko)((0, l.SU)(u), function (e, t) {
                          return (
                            (0, o.wg)(),
                            (0, o.iD)(
                              "span",
                              { key: t, class: "full-width", innerHTML: e },
                              null,
                              8,
                              Yn
                            )
                          );
                        }),
                        128
                      )),
                    ]),
                    (0, o._)("div", Kn, [
                      ((0, o.wg)(!0),
                      (0, o.iD)(
                        o.HY,
                        null,
                        (0, o.Ko)((0, l.SU)(m), function (e, t) {
                          return (
                            (0, o.wg)(),
                            (0, o.iD)(
                              "button",
                              {
                                key: t,
                                onClick: (0, n.iM)(
                                  function (t) {
                                    return h(e.href);
                                  },
                                  ["prevent"]
                                ),
                              },
                              [
                                (0, o._)(
                                  "img",
                                  {
                                    src: a(3818)("./".concat(e.icon)),
                                    alt: e.title,
                                  },
                                  null,
                                  8,
                                  Gn
                                ),
                                (0, o._)("div", null, (0, s.zw)(e.title), 1),
                              ],
                              8,
                              Zn
                            )
                          );
                        }),
                        128
                      )),
                    ]),
                  ]),
                  (0, o._)("div", Qn, [
                    ((0, o.wg)(!0),
                    (0, o.iD)(
                      o.HY,
                      null,
                      (0, o.Ko)((0, l.SU)(g), function (e, t) {
                        return (
                          (0, o.wg)(),
                          (0, o.j4)(
                            Hn,
                            { key: t, title: e.title, href: e.href },
                            null,
                            8,
                            ["title", "href"]
                          )
                        );
                      }),
                      128
                    )),
                  ]),
                  (0, o._)("div", Xn, [
                    (0, o._)(
                      "video",
                      {
                        class: "lOrderVideo",
                        src: "".concat(
                          (0, l.SU)(t).useMobileVideo
                            ? "./assets/videos/backgroundM.mp4"
                            : "./assets/videos/background.mp4"
                        ),
                        muted: "",
                        loop: "",
                        playsinline: "",
                        autoplay: "",
                        "data-el": "",
                        "data-scroll": "",
                        "data-scroll-speed": "2",
                        "data-scroll-call": "lOrderVideo",
                        "data-scroll-repeat": "",
                      },
                      null,
                      8,
                      Jn
                    ),
                  ]),
                ])
              );
            };
          },
        }),
        ti = ei,
        ai = ti;
      var ni = {
          class: "cModal lVideo",
          "data-modal": "lVideo",
          "data-el": "",
        },
        ii = ["data-src"],
        ri = (0, o.uE)(
          '<div class="cModal-close lVideo-close" data-modal-close aria-label="CLOSE"><div class="lVideo-close-side -top"></div><div class="lVideo-close-side -bottom"></div></div><div class="cModal-backdrop" data-modal-backdrop></div><div class="lVideoMouseStalker" data-el="cMouseStalker"><div class="lVideoMouseStalker-shape -normal" data-ref="cMouseStalker-shapeNormal"><div class="lVideoMouseStalker-side -top"></div><div class="lVideoMouseStalker-side -bottom"></div></div><div class="lVideoMouseStalker-shape -accent" data-ref="cMouseStalker-shapeAccent"><div class="lVideoMouseStalker-side -top"></div><div class="lVideoMouseStalker-side -bottom"></div></div><div class="lVideoMouseStalker-shape -theme" data-ref="cMouseStalker-shapeTheme"><div class="lVideoMouseStalker-side -top"></div><div class="lVideoMouseStalker-side -bottom"></div></div></div>',
          3
        );
      const oi = (0, o.aZ)({
          __name: "VideoPopup",
          setup: function (e) {
            var t = v.state,
              n = (0, l.iH)(null),
              i = function e() {
                var a;
                (t.isVideoPlaying =
                  ((null === (a = n.value) || void 0 === a
                    ? void 0
                    : a.style.opacity) || 0) > 0),
                  requestAnimationFrame(e);
              };
            return (
              i(),
              function (e, t) {
                return (
                  (0, o.wg)(),
                  (0, o.iD)("div", ni, [
                    (0, o._)(
                      "div",
                      {
                        class: "cModal-content lVideo-content",
                        ref_key: "video",
                        ref: n,
                        "data-modal-content": "",
                        "data-ref": "",
                      },
                      [
                        (0, o._)(
                          "video",
                          {
                            ref: "videoEl",
                            class: "lVideo-video",
                            "data-src": a(4714),
                            controls: "",
                            preload: "none",
                            "data-ref": "",
                            onPlay:
                              t[0] ||
                              (t[0] = function (e) {
                                return (e.target.volume = 1);
                              }),
                          },
                          null,
                          40,
                          ii
                        ),
                      ],
                      512
                    ),
                    ri,
                  ])
                );
              }
            );
          },
        }),
        li = oi,
        si = li;
      var ci = { class: "cLoading", "data-el": "cLoading" },
        di = ["data-ref"],
        ui = (0, o._)(
          "div",
          { class: "cLoading-percentage", "data-ref": "cLoading-percentage" },
          null,
          -1
        );
      const pi = (0, o.aZ)({
          __name: "LoadingPopup",
          setup: function (e) {
            var t = (0, c.QT)(),
              a = t.locale,
              n = (0, o.Fl)(function () {
                return p("slogan");
              });
            return function (e, t) {
              return (
                (0, o.wg)(),
                (0, o.iD)("div", ci, [
                  ((0, o.wg)(!0),
                  (0, o.iD)(
                    o.HY,
                    null,
                    (0, o.Ko)((0, l.SU)(n), function (e, t) {
                      return (
                        (0, o.wg)(),
                        (0, o.iD)(
                          "div",
                          {
                            key: t,
                            class: (0, s.C_)([
                              "cLoading-catch",
                              { "tracking-tight": "zht" !== (0, l.SU)(a) },
                            ]),
                            "data-ref": "cLoading-catch".concat(t + 1),
                          },
                          (0, s.zw)(e),
                          11,
                          di
                        )
                      );
                    }),
                    128
                  )),
                  ui,
                ])
              );
            };
          },
        }),
        gi = pi,
        mi = gi;
      var hi = { "data-router-wrapper": "" },
        fi = { "data-router-view": "pIndex" },
        vi = { class: "cMain" },
        wi = (0, o._)(
          "div",
          {
            "data-scroll": "",
            "data-scroll-repeat": "",
            "data-scroll-call": "scrollDown",
            style: { position: "absolute", top: "0", height: "5vh" },
          },
          null,
          -1
        ),
        bi = { "data-fixed-local": "" };
      const _i = (0, o.aZ)({
          __name: "HomePage",
          setup: function (e) {
            return (
              (0, o.bv)(
                (0, Xe.Z)(
                  (0, Qe.Z)().mark(function e() {
                    var t, a, n, i, r, o;
                    return (0, Qe.Z)().wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (t = document.getElementsByTagName("head")[0]),
                              (a = ["vendor", "pace.min", "index", "main"]),
                              (n = new Date().getTime()),
                              (i = (0, Qe.Z)().mark(function e() {
                                var a;
                                return (0, Qe.Z)().wrap(function (e) {
                                  while (1)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (a = o[r]),
                                          (e.next = 3),
                                          new Promise(function (e) {
                                            var i =
                                              document.createElement("script");
                                            (i.defer = !0),
                                              (i.src = "./libs/home/"
                                                .concat(a, ".js?v=")
                                                .concat(n)),
                                              (i.onload = e),
                                              t.appendChild(i);
                                          })
                                        );
                                      case 3:
                                        console.debug(
                                          "Scripts Loaded: ./libs/home/"
                                            .concat(a, ".js?v=")
                                            .concat(n)
                                        );
                                      case 4:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })),
                              (r = 0),
                              (o = a);
                          case 5:
                            if (!(r < o.length)) {
                              e.next = 10;
                              break;
                            }
                            return e.delegateYield(i(), "t0", 7);
                          case 7:
                            r++, (e.next = 5);
                            break;
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )
              ),
              function (e, t) {
                return (
                  (0, o.wg)(),
                  (0, o.iD)("div", hi, [
                    (0, o._)("div", fi, [
                      (0, o._)("main", vi, [
                        (0, o.Wm)(mt),
                        (0, o.Wm)(Wt),
                        (0, o.Wm)(jt),
                        (0, o.Wm)(ta),
                        (0, o.Wm)(fa),
                        (0, o.Wm)(Ca),
                        (0, o.Wm)(Ga),
                        (0, o.Wm)(rn),
                        (0, o.Wm)(Ln),
                        (0, o.Wm)(ai),
                        wi,
                      ]),
                      (0, o._)("div", bi, [(0, o.Wm)(si), (0, o.Wm)(mi)]),
                    ]),
                  ])
                );
              }
            );
          },
        }),
        yi = _i,
        ki = yi;
      var Ei = a(3812),
        xi = a.n(Ei),
        Si = { "data-router-wrapper": "" },
        Mi = { "data-router-view": "pNewsDetail" },
        Oi = { class: "cMain" },
        Ti = { class: "lNewsDetail-main" },
        Wi = { class: "lNewsDetail-lead" },
        Ai = { class: "lNewsDetail-lead-date" },
        Li = { class: "lNewsDetail-lead-mainTitle" },
        Di = { class: "lNewsDetail-lead-image" },
        Ci = ["src"],
        Ni = { class: "lNewsDetail-wysiwyg" },
        zi = ["innerHTML"],
        Bi = (0, o._)(
          "div",
          {
            "data-scroll": "",
            "data-scroll-repeat": "",
            "data-scroll-call": "scrollDown",
            style: { position: "absolute", top: "0", height: "5vh" },
          },
          null,
          -1
        ),
        Ii = (0, o._)("div", { "data-fixed-local": "" }, null, -1);
      const ji = (0, o.aZ)({
          __name: "ArticlePage",
          setup: function (e) {
            var t = (0, d.yj)(),
              n = t.params,
              i = (0, o.Fl)(function () {
                return "news.pages.".concat(n.id);
              }),
              r = p("".concat(i.value, ".content")),
              c = function (e) {
                var t = function (e, t, a, n, i) {
                  var r = e[t];
                  return (
                    "_" === r.markup && (r.tag = "u"), i.renderToken(e, t, a)
                  );
                };
                (e.renderer.rules.em_open = t), (e.renderer.rules.em_close = t);
              },
              u = xi()({ html: !0, xhtmlOut: !0, breaks: !0, linkify: !0 }).use(
                c
              );
            return (
              (0, o.bv)(
                (0, Xe.Z)(
                  (0, Qe.Z)().mark(function e() {
                    var t, a, n, i, r, o;
                    return (0, Qe.Z)().wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (t = document.getElementsByTagName("head")[0]),
                              (a = ["vendor", "pace.min", "main"]),
                              (n = new Date().getTime()),
                              (i = (0, Qe.Z)().mark(function e() {
                                var a;
                                return (0, Qe.Z)().wrap(function (e) {
                                  while (1)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (a = o[r]),
                                          (e.next = 3),
                                          new Promise(function (e) {
                                            var i =
                                              document.createElement("script");
                                            (i.defer = !0),
                                              (i.src = "./libs/article/"
                                                .concat(a, ".js?v=")
                                                .concat(n)),
                                              (i.onload = e),
                                              t.appendChild(i);
                                          })
                                        );
                                      case 3:
                                        console.debug(
                                          "Scripts Loaded: ./libs/article/"
                                            .concat(a, ".js?v=")
                                            .concat(n)
                                        );
                                      case 4:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })),
                              (r = 0),
                              (o = a);
                          case 5:
                            if (!(r < o.length)) {
                              e.next = 10;
                              break;
                            }
                            return e.delegateYield(i(), "t0", 7);
                          case 7:
                            r++, (e.next = 5);
                            break;
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )
              ),
              function (e, t) {
                return (
                  (0, o.wg)(),
                  (0, o.iD)("div", Si, [
                    (0, o._)("div", Mi, [
                      (0, o._)("main", Oi, [
                        (0, o._)("div", Ti, [
                          (0, o._)("div", Wi, [
                            (0, o._)(
                              "div",
                              Ai,
                              (0, s.zw)(e.$t("".concat((0, l.SU)(i), ".date"))),
                              1
                            ),
                            (0, o._)(
                              "h1",
                              Li,
                              (0, s.zw)(
                                e.$t("".concat((0, l.SU)(i), ".title"))
                              ),
                              1
                            ),
                          ]),
                          (0, o._)("div", Di, [
                            (0, o._)(
                              "img",
                              {
                                class: "lNewsDetail-lead-img wp-post-image",
                                src: a(8909)(
                                  "./".concat(
                                    e.$t("".concat((0, l.SU)(i), ".image"))
                                  )
                                ),
                                width: "1000",
                                height: "650",
                                alt: "",
                              },
                              null,
                              8,
                              Ci
                            ),
                          ]),
                          (0, o._)("div", Ni, [
                            ((0, o.wg)(!0),
                            (0, o.iD)(
                              o.HY,
                              null,
                              (0, o.Ko)((0, l.SU)(r), function (e, t) {
                                return (
                                  (0, o.wg)(),
                                  (0, o.iD)(
                                    "p",
                                    {
                                      key: t,
                                      innerHTML: (0, l.SU)(u).renderInline(e),
                                    },
                                    null,
                                    8,
                                    zi
                                  )
                                );
                              }),
                              128
                            )),
                          ]),
                          (0, o.Wm)(
                            Hn,
                            {
                              title: e.$t("button.back"),
                              href: "/news",
                              routerLink: !0,
                            },
                            null,
                            8,
                            ["title"]
                          ),
                        ]),
                        Bi,
                      ]),
                      Ii,
                    ]),
                  ])
                );
              }
            );
          },
        }),
        Hi = ji,
        Pi = Hi;
      var Ri = [
          {
            path: "/",
            alias: ["/about", "/product", "/service", "/news", "/contact"],
            name: "home",
            component: ki,
          },
          { path: "/article/:id", name: "article", component: Pi },
        ],
        Ui = !0,
        Fi = (0, d.p7)({ history: Ui ? (0, d.r5)() : (0, d.PO)(), routes: Ri });
      (window.routes = ["/article"]),
        Fi.beforeEach(function (e) {
          if (e.query.lang)
            (Ge.global.locale = e.query.lang),
              localStorage.setItem("lang", Ge.global.locale);
          else {
            var t = /^zh/.test(navigator.language) ? "zht" : "en";
            Ge.global.locale = localStorage.getItem("lang") || t;
          }
        }),
        Fi.afterEach(function () {
          sessionStorage.getItem("site-loaded")
            ? sessionStorage.clear()
            : (sessionStorage.setItem("site-loaded", "true"),
              window.location.reload());
        });
      const Vi = Fi;
      (0, n.ri)($e).use(Ge).use(v).use(Vi).mount("#pIndex");
    },
    8909: (e, t, a) => {
      var n = {
        "./20220701.jpg": 6915,
        "./20220801.jpg": 93,
        "./20220901.jpg": 6550,
        "./20221001.jpg": 6825,
        "./20221211.jpg": 1399,
        "./20230207.jpg": 5021,
        "./20230210.jpg": 7911,
        "./20230327.jpg": 1181,
      };
      function i(e) {
        var t = r(e);
        return a(t);
      }
      function r(e) {
        if (!a.o(n, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return n[e];
      }
      (i.keys = function () {
        return Object.keys(n);
      }),
        (i.resolve = r),
        (e.exports = i),
        (i.id = 8909);
    },
    6725: (e, t, a) => {
      var n = {
        "./photo-01.jpg": 8527,
        "./photo-02.jpg": 2397,
        "./photo-03.jpg": 1984,
        "./photo-04.jpg": 582,
        "./photo-05.jpg": 2038,
        "./photo-06.jpg": 187,
      };
      function i(e) {
        var t = r(e);
        return a(t);
      }
      function r(e) {
        if (!a.o(n, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return n[e];
      }
      (i.keys = function () {
        return Object.keys(n);
      }),
        (i.resolve = r),
        (e.exports = i),
        (i.id = 6725);
    },
    8567: (e, t, a) => {
      var n = {
        "./bg-01.png": 9315,
        "./bg-02.png": 6942,
        "./bg-03.png": 1492,
        "./bg-04.png": 5694,
        "./bg-05.png": 3628,
      };
      function i(e) {
        var t = r(e);
        return a(t);
      }
      function r(e) {
        if (!a.o(n, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return n[e];
      }
      (i.keys = function () {
        return Object.keys(n);
      }),
        (i.resolve = r),
        (e.exports = i),
        (i.id = 8567);
    },
    5726: (e, t, a) => {
      var n = {
        "./blockchain_bg.png": 5196,
        "./blockchain_m_bg.png": 343,
        "./image_1.png": 9236,
        "./image_1_en.png": 2386,
        "./image_2.png": 4786,
        "./image_3.png": 7910,
        "./image_3_en.png": 917,
        "./image_4.png": 4112,
        "./image_4_en.png": 6708,
        "./live_bg.png": 2977,
        "./live_m_bg.png": 2102,
        "./lotto_bg.png": 8272,
        "./lotto_m_bg.png": 5019,
        "./sport_bg.png": 1049,
        "./sport_m_bg.png": 6654,
      };
      function i(e) {
        var t = r(e);
        return a(t);
      }
      function r(e) {
        if (!a.o(n, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return n[e];
      }
      (i.keys = function () {
        return Object.keys(n);
      }),
        (i.resolve = r),
        (e.exports = i),
        (i.id = 5726);
    },
    3818: (e, t, a) => {
      var n = {
        "./border.svg": 3035,
        "./email.svg": 8639,
        "./telegram.svg": 1111,
        "./whatsapp.svg": 6350,
      };
      function i(e) {
        var t = r(e);
        return a(t);
      }
      function r(e) {
        if (!a.o(n, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return n[e];
      }
      (i.keys = function () {
        return Object.keys(n);
      }),
        (i.resolve = r),
        (e.exports = i),
        (i.id = 3818);
    },
    3035: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/border.6d0e16c2.svg";
    },
    8639: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/email.bebbfe93.svg";
    },
    1111: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/telegram.21b4a307.svg";
    },
    6350: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/whatsapp.2d529b0b.svg";
    },
    6915: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/20220701.18019b6e.jpg";
    },
    93: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/20220801.bcb0625f.jpg";
    },
    6550: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/20220901.c3f597ae.jpg";
    },
    6825: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/20221001.fd38a6c7.jpg";
    },
    1399: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/20221211.724b3066.jpg";
    },
    5021: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/20230207.c3bfc1ab.jpg";
    },
    7911: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/20230210.3a22c135.jpg";
    },
    1181: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/20230327.1c3f552a.jpg";
    },
    8527: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/photo-01.d1c20b11.jpg";
    },
    2397: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/photo-02.e9960113.jpg";
    },
    1984: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/photo-03.613346e8.jpg";
    },
    582: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/photo-04.c81cb142.jpg";
    },
    2038: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/photo-05.9de224ae.jpg";
    },
    187: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/photo-06.76692867.jpg";
    },
    3892: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/king.4ed7d88a.png";
    },
    7165: (e) => {
      "use strict";
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVBAMAAABbObilAAAAIVBMVEUAAAC/xMzAxM3Bxcq/w8vBxc3CxcvBxMvBxMrBxMv///+QczJYAAAACXRSTlMAPD0+QEKq6OmkskytAAAAAWJLR0QKaND0VgAAAFJJREFUCNdFzzERxEAQA8FZk/BCeAiGsSBMwRAuV2q2H1xZUtQ1mXg94V1xPfE5SsbusWth99i1sHvsWtg99s7bO6NklIySEfzGPr6MkhG33+gPbBsaxQ2Pbk4AAAAASUVORK5CYII=";
    },
    4334: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/logo-large.140f2e7c.png";
    },
    6219: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/bg-mobile.f514ed88.jpg";
    },
    4900: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/bg.c226d03e.jpg";
    },
    9315: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/bg-01.85a55e4a.png";
    },
    6942: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/bg-02.306958c5.png";
    },
    1492: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/bg-03.478b4528.png";
    },
    5694: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/bg-04.feb708ae.png";
    },
    3628: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/bg-05.184de851.png";
    },
    3614: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/main-mobile.b980f1a3.jpg";
    },
    3917: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/main.63d84e19.jpg";
    },
    5196: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/blockchain_bg.81836209.png";
    },
    343: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/blockchain_m_bg.16f55747.png";
    },
    9236: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/image_1.6c13abdd.png";
    },
    2386: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/image_1_en.57a1cc14.png";
    },
    4786: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/image_2.c9374ad3.png";
    },
    7910: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/image_3.9746cc35.png";
    },
    917: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/image_3_en.8055edc5.png";
    },
    4112: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/image_4.a5767001.png";
    },
    6708: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/image_4_en.27705e93.png";
    },
    2977: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/live_bg.1d3eeaaf.png";
    },
    2102: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/live_m_bg.92d169c5.png";
    },
    8272: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/lotto_bg.2081eb94.png";
    },
    5019: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/lotto_m_bg.f0d151e4.png";
    },
    1049: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/sport_bg.d9478c3b.png";
    },
    6654: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/sport_m_bg.05853670.png";
    },
    3285: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/ray.8735b8cd.jpg";
    },
    4298: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/sign.38c43a76.png";
    },
    952: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/video-cover.e842e332.jpg";
    },
    4846: (e, t, a) => {
      "use strict";
      e.exports = a.p + "media/sound.5ae58811.mp3";
    },
    4714: (e, t, a) => {
      "use strict";
      e.exports = a.p + "media/full.7fd63cea.mp4";
    },
  },
]);
//# sourceMappingURL=chunk-common.2e711347.js.map
