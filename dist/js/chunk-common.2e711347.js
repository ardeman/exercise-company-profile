(self["webpackChunkwe_officials"] =
  self["webpackChunkwe_officials"] || []).push([
  [64],
  {
    9408: (e, t, a) => {
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
        $e = qe,
        Ye = JSON.parse(
          '{"//navigation":"目前未實作浮動的選單數量，若有需求可再調整","navigation":{"menu":"MENU","about":"ABOUT WE","product":"PRODUCT","service":"SERVICE","news":"NEWS","contact":"CONTACT"},"//slogan":"message popup after clicked enter site","slogan":["ELEVATE","YOUR BRAND EXPERIENCE","WITH WORLD ENTERTAINMENT"],"header":{"//title":"須至少一項；不同語系，數量應相同","title":["ELEVATE YOUR BRAND EXPERIENCE WITH WORLD ENTERTAINMENT"],"subtitle":"PAGCOR, MGA, GLI INTERNATIONAL FAIRNESS MECHANISM CERTIFICATE","sign":""},"outline":{"//title":"須至少一項，每項代表一行字；不同語系，數量應相同；因自適應，避免字行過長","title":["EVERYTHING START FROM OUR ASIA","FIRST WORLD CLASS LIVE STUDIO COMPLEX","AND OUR KNOWHOW IN DETAILS"],"subtitle":"WORLD ENTERTAINMENT WAS FOUNDED IN 2020","//content":"是二維陣列，代表段落與其字行；不同語系，數量應相同；須至少一個段落，每個段落須至少一行字；因自適應，避免字行過長","content":[["ABOUT WORLD ENTERTAINMENT:","World Entertainment (WE) is a premier B2B solution provider, boasting the industry\'s largest and most advanced studio complex that empowers casino operators to achieve unprecedented success. Our state-of-the-art facility, spanning over 12,000 square meters, offers an unparalleled array of exclusive services, from branded casino decor to private live shows and tailor-made game events, ensuring that any casino operator can dominate the future market."],["MISSION:","We are relentless in our pursuit of revolutionizing the gaming industry in the live gaming sector. Our goal is to provide our business partners with access to the most revolutionary technology and unique gaming content, as well as a wide range of elite branded services."],["VISION:","With our revolutionary entertainment philosophy and approach, we are determined to become the go-to B2B solution provider in the casino industry, serving both online and brick-and-mortar operators, listed and private enterprises, and regional and worldwide integrated resorts. Our ultimate goal is to take World Entertainment public and attract fans and talent who share our vision of creating a truly game-changing entertainment future."]]},"product":{"gameList":{"gOFBaccarat":"GOF Baccarat","gOFRoulette":"GOF Roulette","traditionalBaccarat":"Traditional Baccarat","speedBaccarat":"Speed Baccarat","squeezeBaccarat":"Squeeze Baccarat","themedBaccarat":"Themed Baccarat","dragonTiger":"Dragon Tiger","speedDragonTiger":"Speed Dragon Tiger","sicBo":"Sic Bo ","roulette":"Roulette","mahjongLuckyWheel":"Mahjong Lucky Wheel ","bullBull":"Bull Bull","winThreeCards":"Win Three Cards","fanTan":"Fan Tan","lotto":"Lotto","pk10":"PK10"},"gameChoose":"Games Available:","live":{"title":"LIVE GAME","content":"Established in 2018, The largest Live Studio in Asia. Spanning over 12,000 square metres with professional TV studio setup equipment and more than 120 tables. World Entertainment is committed to obtaining numerous gaming licenses to reinforce the credibility of their business and provide partners and players with a heightened level of confidence through meticulous license audits. Currently, World Entertainment is licensed by both the Philippines PAGCOR and Malta Gaming Authority.","img":"image_1_en.png"},"sport":{"title":"SPORTSBOOK","content":"Get in on the action like never before with our sportsbook featuring live streams of mainstream matches and localized streamer commentary for an adrenaline-fueled experience that\'ll have you on the edge of your seat.","list":{"bet":"Inplay with Live Game Broadcast","diverse":"Wide Variety of Odds and Bet Types","data":"Real-time Data Analysis","anchor":"Live Streamer","customized":"Filter System to View Your Selected Leagues","globalization":"Multilingual Support","humanize":"Simplified Interface"}},"bc":{"title":"BLOCKCHAIN","content":"Experience the ultimate in fairness and transparency with our provably fair online casino table games, where every hand dealt and every spin of the wheel is backed by advanced blockchain technology for complete peace of mind.","img":"image_3_en.png"},"lotto":{"title":"LOTTERY GAMES","content":"Step away from the mundane lottery experience and elevate your players\' excitement by offering a physical lottery machine with a live drawing process. Our innovative lottery drawing method is complemented by cross-selling solutions that help our partners maximize player value.","img":"image_4_en.png"}},"service":{"content":[["SERVICES:","Unlike the standard solution providers in traditional market, World Entertainment has innovated the exclusive streaming solution that offers casino operators the unlimited opportunities not only for branding but also complete and immersive gaming experience in depth through various customization execises and approaches. "],["World Entertainment also offers over 120 live gaming tables and 32 different gaming styles and types, as well as our most powerful interface which allows seamlessly cross-promote casino operator different products within its own retail network."],["After all, World Entertainment is seeking a unique and unparallel experience that deepens the connection between our customers and their end-users then elevates their brand influence in the industry to the successful path"],["Last but not lease, our global facing solution helps the casino operators to unlock the universal market in just one click."]]},"news":{"//articles":"須至少一項，每項代表一篇文章，文章對應的圖片存放於 `src/assets/images/articles`；不同語系，數量應相同","articles":[{"date":"03.27","year":"2023","summary":"World Entertainment (WE) Mobile Version Upgrade","href":"mobileapp2023","image":"20230327.jpg"},{"date":"02.10","year":"2023","summary":"World Entertainment Takes First Step on International Stage at London ICE Event","href":"ice20230210","image":"20230210.jpg"},{"date":"02.07","year":"2023","summary":"World Entertainment (WE), the leading B2B solution provider for the casino industry, is excited to announce its participation in the upcoming ICE London event taking place on 7th - 9th February 2023.","href":"ice2023","image":"20230207.jpg"},{"date":"12.11","year":"2022","summary":"WE World Entertainment\'s exclusive title, world boxing champion Manny Pacquiao VS Korea Bruce Lee DK YOO South Korea\'s first exhibition match","href":"boxing","image":"20221211.jpg"}],"//pages":"若 news.articles.href 非 http 開頭，將對應以下的頁面；content 支援基本的 Markdown 語法","pages":{"mobileapp2023":{"date":"2023.03.27","title":"World Entertainment (WE) Mobile Version Upgrade","image":"20230327.jpg","content":["World Entertainment\'s Vice President of Business and Strategy, Robert, announced today that the company has upgraded its mobile user interface, further enhancing the gaming experience for its players. With the new interface, players can easily switch between games and find their favorites with just a few clicks. The upgrade is part of World Entertainment\'s ongoing commitment to providing the best possible gaming experience for its customers.","\\"We understand the importance of convenience and ease of use for our players, and this upgrade reflects our commitment to providing the best possible gaming experience,\\" said Robert.","The new mobile user interface is just one of many innovations that World Entertainment has introduced to the market. As one of the leading live casino providers in the industry, the company is constantly pushing the boundaries of what\'s possible and delivering new and exciting gaming experiences to its customers.","<b>About World Entertainment:</b>\\nWorld Entertainment is a leading provider of live casino solutions, offering a wide range of games and services to players around the world. With a state-of-the-art studio and advanced technology, World Entertainment is committed to delivering an authentic and exciting gaming experience.","For more information, please contact: \\nmarketing{\'@\'}worldent.com"]},"ice20230210":{"date":"2023.02.10","title":"World Entertainment Takes First Step on International Stage at London ICE Event","image":"20230210.jpg","content":["World Entertainment, Asia\'s largest live casino provider, has successfully participated in the London ICE event and taken its first step on the international stage. The event, which was held on February 1-3, 2022, provided a great opportunity for World Entertainment to showcase its state-of-the-art studio and advanced technology to a global audience.","During the event, World Entertainment had the chance to connect with multiple giant brands and build strong relationships with them. This will help World Entertainment to expand its international presence and bring its ultimate gaming experience to more players around the world.","\\"We are thrilled with the success of our participation in the London ICE event,\\" said a spokesperson for World Entertainment. \\"This event has provided us with a fantastic opportunity to showcase our expertise and innovative solutions to a global audience. We are excited to have taken our first step on the international stage and are looking forward to expanding our reach further in the future.\\"","World Entertainment\'s live casino platform offers a wide range of games, including baccarat, blackjack, and roulette, as well as its branded table option and wallet solutions. The company\'s integrated API solution also enables a one-time integration to access all of its games.","For more information about World Entertainment and its solutions, please visit our website or contact us at marketing{\'@\'}worldent.com.","<b>About World Entertainment:</b>\\nWorld Entertainment is Asia\'s largest live casino provider, dedicated to bringing players the ultimate gaming experience. With its state-of-the-art studio and advanced technology, the company provides an authentic and exciting casino experience to players around the world.","For more information, please contact: \\nmarketing{\'@\'}worldent.com"]},"ice2023":{"date":"2023.02.07","title":"World Entertainment (WE), the leading B2B solution provider for the casino industry, is excited to announce its participation in the upcoming ICE London event taking place on 7th - 9th February 2023.","image":"20230207.jpg","content":["World Entertainment (WE), the leading B2B solution provider for the casino industry, is excited to announce its participation in the upcoming ICE London event taking place on 7th - 9th February 2023. Visitors to booth S10-210 will have the opportunity to experience the company\'s state-of-the-art billion-dollar studio complex, spanning 12,000 square meters.","\\"We are thrilled to participate in the ICE London event and showcase our cutting-edge technology and innovative solutions,\\" said Robert, Vice President of Business and Strategy at World Entertainment. \\"Our studio offers a truly immersive and engaging experience for players, and we invite key decision makers of casino operators to visit our booth and schedule an appointment to learn more about our unique services.\\"","World Entertainment\'s mission is to provide business partners with access to the latest ground-breaking technology and unique gaming contents, as well as a wide range of branded services. The company\'s vision is to become the most favored B2B solution provider in the casino industry, and to float World Entertainment to the public market.","Unlike standard solution providers, World Entertainment offers an exclusive streaming solution that allows for unlimited opportunities for branding and a complete and immersive gaming experience through customization exercises and approaches. The company also offers over 120 live gaming tables and 32 different gaming styles and types, as well as a powerful interface that allows for seamless cross-promotion of casino operator\'s products within its own retail network.","\\"Our goal is to deepen the connection between our customers and their end-users, and to elevate their brand influence in the industry to the successful path,\\" Robert added. \\"We also offer a global facing solution that helps casino operators unlock the universal market with just one click.\\"","For more information or to schedule an appointment at the World Entertainment booth during the ICE London event, please contact marketing{\'@\'}Worldent.com.","<b>About World Entertainment:</b>\\nWorld Entertainment is a leading B2B solution provider for the casino industry, committed to providing business partners with access to the latest ground-breaking technology and unique gaming contents, as well as a wide range of branded services. With a state-of-the-art billion-dollar studio complex spanning 12,000 square meters, the company offers a truly immersive and engaging experience for players.","For more information, please contact: \\nmarketing{\'@\'}worldent.com"]},"boxing":{"date":"2022.12.11","title":"World Entertainment title sponsor for world boxing champion Manny Pacquiao VS Korean Bruce Lee DK YOO South Korea\'s first exhibition match","image":"20221211.jpg","content":["World champion Pacquiao\'s 2022 comeback first exhibition match is about to debut in Seoul, South Korea on December 11","World Entertainment was a title sponsor this competition and designed the World Boxing room for this boxing event.","When you play the WE live game, you can challenge the number of exciting winning streaks.","【Philippine Legendary Boxer-Pacquiao】【Korea Bruce Lee-DK YOO】【Fight K】"]}}},"order":{"//title":"須至少一項，每項代表一行字，建議兩項；不同語系，數量應相同；因自適應，避免字行過長","title":["WORLD ENTERTAINMENT","CREATE MASTERPIECE OF LIVE"],"//subtitle":"須至少一項，每項代表一行字；不同語系，數量應相同；因自適應，避免字行過長","subtitle":["Connect with us to let our team of professionals","to upgrade your players\' gaming experience"],"link":{"top":[{"title":"Telegram","href":"https://t.me/we_biz_admin"}],"bottom":[{"title":"YouTube","href":"https://www.youtube.com/{\'@\'}World-Entertainment"},{"title":"Instagram","href":"https://www.instagram.com/accounts/login/?next=/worldent.official/"},{"title":"LinkedIn","href":"https://www.linkedin.com/company/world-entertainment-igaming/"}],"social":[{"icon":"email.svg","title":"Sales Email","href":"mailto:sales{\'@\'}worldent.com"},{"icon":"email.svg","title":"Partnership Email","href":"mailto:marketing{\'@\'}worldent.com"},{"icon":"telegram.svg","title":"Sales Telegram","href":"https://t.me/we_biz_admin"},{"icon":"whatsapp.svg","title":"Sales WhatsApp","href":"https://wa.me/+639693126299"}]}},"marquee":{"//bottom":"須至少一項；不同語系，數量應相同","bottom":["FISHING ARCADE","SPORTSBOOK","SLOT","LOTTORY","BLOCKCHAIN","LIVE DEALER","ASIA PALACE","MACAU PALACE","THAI PALACE","GAME SHOW","CHINA RED","VICTORIA S"],"ring":"LIVE BLOCKCHAIN LOTTORY FISHING SPORT SLOT"},"button":{"enter":"ENTER","fullMovie":{"text":"▶","textLeft":"-10","border":"WORLD ENTERTAINMENT    WORLD ENTERTAINMENT","borderSize":"8.5"},"sound":"Music on and off","more":"View","load":"More","close":"CLOSE","back":"BACK"},"rights":"COPYRIGHT © WORLD ENTERTAINMENT 2023"}'
        ),
        Ke = JSON.parse(
          '{"//navigation":"目前未實作浮動的選單數量，若有需求可再調整","navigation":{"menu":"選單","about":"關於WE","product":"產品","service":"服務","news":"新聞","contact":"商務聯繫"},"//slogan":"message popup after clicked enter site","slogan":["世界娛樂","與您提升","品牌體驗"],"header":{"//title":"須至少一項；不同語系，數量應相同","title":["世界娛樂與您提升品牌體驗"],"subtitle":"持有菲律賓、馬耳他博彩牌照、GLI國際公正機制證書！","sign":""},"outline":{"//title":"須至少一項，每項代表一行字；不同語系，數量應相同；因自適應，避免字行過長","title":["一切始於我們的亞洲","世界一流的現場廳","以及我們的專業知識"],"subtitle":"世界娛樂成立於2020年","//content":"是二維陣列，代表段落與其字行；不同語系，數量應相同；須至少一個段落，每個段落須至少一行字；因自適應，避免字行過長","content":[["關於世界娛樂:","世界娛樂（WE）是一家頂級的真人視訊遊戲供應商，擁有業界最大、最先進的工作室綜合體，幫助遊戲運營商實現前所未有的成功。我們的先進設施佔地超過12,000平方米，提供獨一無二的服務，從品牌賭場裝飾到私人現場表演和量身定制的遊戲活動，確保任何賭場運營商都可以主宰未來市場。"],["使命：","我們不懈地追求在現場遊戲行業革命化的目標。我們的目標是為我們的商業合作夥伴提供最革命性的技術和獨特的遊戲內容，以及廣泛的精英品牌服務。"],["願景：","通過我們革命性的娛樂理念和方法，我們決心成為賭場行業的首選真人視訊遊戲供應商，服務所有不同產業客戶。我們的最終目標是將世界娛樂上市，吸引支持我們創造真正改變未來娛樂產業的粉絲和人才。"]]},"product":{"gameList":{"gOFBaccarat":"財神百家樂","gOFRoulette":"財神輪盤","traditionalBaccarat":"經典百家樂 ","speedBaccarat":"極速百家樂","squeezeBaccarat":"咪牌百家樂 ","themedBaccarat":"主題百家樂 ","dragonTiger":"龍虎","speedDragonTiger":"極速龍虎","sicBo":"骰寶","roulette":"輪盤 ","mahjongLuckyWheel":"麻雀幸運輪","bullBull":"牛牛","winThreeCards":"炸金花","fanTan":"番攤","lotto":"時時彩","pk10":"北京賽車"},"gameChoose":"遊戲選擇:","live":{"title":"現場遊戲","content":"全亞洲最大真人直播基地，佔地 12,000 平方米，採用專業級電視台設備，超過 120 張桌。世界娛樂致力於獲得多項遊戲牌照，以加強其業務的可信度，並通過嚴謹的牌照審核為合作夥伴和玩家提供更高水平的信心。目前，世界娛樂已獲得菲律賓 PAGCOR 和 MALTA GAMING AUTHORITY的牌照。","img":"image_1.png"},"sport":{"title":"體育直播社群首選","content":"進入我們的體育世界，您將獲得一場無與倫比的刺激體驗！透過現場直播和專業口撥員的評述，引領您身歷其境地坐在世界各國球場邊，感受腎上腺素飆升的刺激，讓您跟著上萬人一起吶喊一起歡呼，享受比賽，成為球賽的頭號粉絲！","list":{"bet":"現場直播同步下注","diverse":"盤口類型多元豐富","data":"賽況分析掌握數據","anchor":"美女主播陪您聊球","customized":"自定義篩選聯賽","globalization":"國際化語言選擇","humanize":"下單介面人性化"}},"bc":{"title":"區塊鏈遊戲","content":"感受極致公平和透明度的快感，體驗我們可證實公平的桌牌遊戲，每一張發出的牌和每一個轉輪的旋轉都受到先進的區塊鏈技術支持，讓您完全放心。","img":"image_3.png"},"lotto":{"title":"彩票遊戲","content":"超越平凡的彩票體驗，透過實體彩票機器與現場抽獎過程提升玩家的刺激感。我們創新的抽獎方式還附加了跨賣解決方案，協助合作夥伴最大化玩家價值。","img":"image_4.png"}},"service":{"content":[["服務：","與傳統市場上真人視訊供應商不同，世界娛樂創新了獨家的直播解決方案，為賭場運營商提供無限的機會，不僅可以進行品牌推廣，還可以透過各種定制和方法獲得完整而身臨其境的遊戲體驗。"],["世界娛樂還提供超過120個現場遊戲桌和32種不同的遊戲風格和類型，以及我們最強大的界面，允許賭場運營商在其自己的網絡中無縫地推廣不同產品。"],["最重要的是，世界娛樂正在尋求一種獨特且無與倫比的體驗，深化我們的客戶與他們的最終用戶之間的聯繫，從而提高他們在行業中的品牌影響力，走向成功之路。"],["最後但同樣重要的是，我們面向全球的解決方案可以幫助運營商在一個點擊中開啟全球市場。"]]},"news":{"//articles":"須至少一項，每項代表一篇文章，文章對應的圖片存放於 `src/assets/images/articles`；不同語系，數量應相同","articles":[{"date":"03.27","year":"2023","summary":"世界娛樂 (WE) 手機版升級","href":"mobileapp2023","image":"20230327.jpg"},{"date":"02.10","year":"2023","summary":"World Entertainment 在倫敦 ICE 活動中邁出國際舞台的第一步","href":"ice20230210","image":"20230210.jpg"},{"date":"02.07","year":"2023","summary":"世界娛樂（WE），是博彩行業領先的B2B遊戲供應商，非常高興宣布參加2023年2月7日至9日舉行的即將到來的ICE倫敦活動。","href":"ice2023","image":"20230207.jpg"},{"date":"12.11","year":"2022","summary":"WE世界娛樂獨家冠名，世界拳王帕奎奧 VS 韓國李小龍 DK YOO 南韓首場表演賽","href":"boxing","image":"20221211.jpg"}],"//pages":"若 news.articles.href 非 http 開頭，將對應以下的頁面；content 支援基本的 Markdown 語法","pages":{"mobileapp2023":{"date":"2023.03.27","title":"世界娛樂 (WE) 手機版升級","image":"20230327.jpg","content":["現場視訊供應商世界娛樂（World Entertainment）的商務與策略副總裁羅伯特今天宣布，公司已升級了其移動用戶界面，進一步增強玩家的遊戲體驗。新界面可讓玩家輕鬆切換並找到他們喜愛的遊戲。此次升級是世界娛樂為提供最佳遊戲體驗而持續承諾的一部分。","羅伯特表示：\\"我們了解對玩家來說方便和易用性的重要性，此次升級反映了我們提供最佳遊戲體驗的承諾。\\"","新的移動用戶界面只是世界娛樂引入市場的眾多創新之一。作為業界領先的現場視訊供應商之一，公司不斷推動可能性的極限，並為客戶提供新穎而令人興奮的遊戲體驗。","<b>關於世界娛樂：</b>\\n世界娛樂是現場視訊供應商，為全球玩家提供各種遊戲和服務。憑藉先進的技術和最先進的工作室，世界娛樂致力於提供真正的刺激和令人興奮的遊戲體驗。","欲獲取更多信息，請聯繫： \\nmarketing{\'@\'}worldent.com"]},"ice20230210":{"date":"2023.02.10","title":"World Entertainment 在倫敦 ICE 活動中邁出國際舞台的第一步","image":"20230210.jpg","content":["亞洲最大的現場视讯供應商世界娛樂（WE）於2月份參加倫敦國際博彩展（London ICE）並取得了巨大成功。這次參展讓WE邁出了國際化的第一步，同時與多家大型品牌建立了牢固的聯繫。","作為亞洲最大的現場视讯供應商，WE在ICE展上展示了其先進技術和專業的服務，吸引了眾多國際博彩業者和參觀者的目光。WE為參展者展示了其最新的現場娛樂場設施和現場娛樂場遊戲，這些遊戲具有高度的互動性和視覺效果，能夠為玩家帶來更真實的娛樂體驗。","在ICE展上，WE與多家大型品牌建立了牢固的聯繫，並開始探討合作機會。WE將與這些品牌攜手合作，提供最佳的現場娛樂場體驗，並進一步擴大其在國際市場上的影響力。","WE的代表在ICE展上表示：“我們非常榮幸能夠在這個國際舞台上展示我們的技術和產品。這次參展對於我們來說是一個極為成功的機會，我們將繼續致力於為玩家提供最優質的現場娛樂場體驗。\\"","WE的成功參展是其向國際市場邁出的關鍵一步，也證明了其在現場娛樂場行業中的實力和地位。WE將繼續開發最先進的技術和產品，致力於為全球玩家提供最優質的現場娛樂場體驗。","如需了解更多有關世界娛樂公司及我們先進的現場娛樂和遊戲解決方案的信息，請訪問我們的網站或通過以下聯繫方式與我們聯繫：marketing{\'@\'}worldent.com","<b>關於世界娛樂： </b>\\n世界娛樂是亞洲最大的現場视讯供應商，致力於為玩家帶來最優質的現場娛樂場體驗。我們提供最先進的技術，致力於提供真正的刺激和令人興奮的遊戲體驗。","欲獲取更多信息，請聯繫： \\nmarketing{\'@\'}worldent.com"]},"ice2023":{"date":"2023.02.07","title":"世界娛樂（WE），是博彩行業領先的B2B遊戲供應商，非常高興宣布參加2023年2月7日至9日舉行的即將到來的ICE倫敦活動。","image":"20230207.jpg","content":["世界娛樂（WE），是賭場行業領先的B2B遊戲供應商，非常高興宣布參加2023年2月7日至9日舉行的即將到來的ICE倫敦活動。前往展位S10-210的參觀者將有機會體驗該公司佔地12,000平方米的最先進的十億美元工作室。","\\"我們很高興參加ICE倫敦活動，展示我們尖端的技術和創新的解決方案，\\"世界娛樂的商務和策略副總裁羅伯特說，\\"我們的遊戲為玩家提供了一個真正身臨其境和引人入勝的體驗，我們邀請博彩運營商的關鍵決策者們到我們的展位，安排預約以了解更多關於我們獨特服務的信息。\\"","世界娛樂的使命是為業務夥伴提供最新的突破性技術和獨特的遊戲內容，以及廣泛的品牌服務。公司的願景是成為最受博彩行業青睞的B2B遊戲供應商，並將世界娛樂上市。","不同於標準的遊戲供應商，世界娛樂提供了一個獨家的串流解決方案，允許通過定制練習和方法無限機會進行品牌推廣和完整沉浸式的遊戲體驗。公司還提供超過120個直播遊戲桌和32種不同的遊戲風格和類型，以及一個強大的界面，允許在其自己的零售網絡內無縫地交叉推廣博彩運營商的產品。","\\"我們的目標是加深我們的客戶和他們的最終用戶之間的聯繫，並將他們在行業中的品牌影響力提升到成功的道路上,\\" Robert補充道。 \\"我們還提供一個面向全球的解決方案，幫助賭場經營者只需點擊一次即可開啟通往全球市場的大門。\\"","如欲獲得更多信息或預約在ICE倫敦活動期間在World Entertainment攤位的預約時間，請聯繫 marketing{\'@\'}Worldent.com","<b>關於World Entertainment：</b>\\nWorld Entertainment是賭場行業的領先B2B解決方案提供商，致力於為商業合作夥伴提供最新的開創性技術和獨特的遊戲內容，以及廣泛的品牌服務。公司擁有一個佔地12,000平方米的現代化十億美元的工作室複合體，為玩家提供真正沉浸式和引人入勝的體驗。","欲獲取更多信息，請聯繫： \\nmarketing{\'@\'}worldent.com"]},"boxing":{"date":"2022.12.11","title":"WE世界娛樂獨家冠名，世界拳王帕奎奧 VS 韓國李小龍 DK YOO 南韓首場表演賽","image":"20221211.jpg","content":["世界拳王帕奎奧2022復出首場表演賽即將在12月11日於南韓首爾登場","WE世界娛樂獨家冠名本次表演賽並為本次拳賽活動設計『世界拳賽廳』當您暢遊 WE真人遊戲即可挑戰刺激的連勝次數，官方將於11月20日公布前10名的玩家","於活動時間內進入『WE世界拳賽廳』真人百家樂遊戲獲得連贏次數最多的『前10名玩家』即可領取VIP席位門票乙張，若次數相同則取完成時間較早者至前10名","【WE世界娛樂 現場之最】【菲律賓傳奇拳王-帕奎奧】【韓國李小龍-DK YOO】【Fight K】"]}}},"order":{"//title":"須至少一項，每項代表一行字，建議兩項；不同語系，數量應相同；因自適應，避免字行過長","title":["ＷＥ世界娛樂","現場之最"],"//subtitle":"須至少一項，每項代表一行字；不同語系，數量應相同；因自適應，避免字行過長","subtitle":["與我們聯繫，讓我們的專業團隊提升您玩家的遊戲體驗",""],"link":{"top":[{"title":"Telegram","href":"https://t.me/we_biz_admin"}],"bottom":[{"title":"YouTube","href":"https://www.youtube.com/{\'@\'}World-Entertainment"},{"title":"Instagram","href":"https://www.instagram.com/accounts/login/?next=/worldent.official/"},{"title":"LinkedIn","href":"https://www.linkedin.com/company/world-entertainment-igaming/"}],"social":[{"icon":"email.svg","title":"商務郵箱","href":"mailto:sales{\'@\'}worldent.com"},{"icon":"email.svg","title":"合作郵箱","href":"mailto:marketing{\'@\'}worldent.com"},{"icon":"telegram.svg","title":"銷售Telegram","href":"https://t.me/we_biz_admin"},{"icon":"whatsapp.svg","title":"銷售Whatsapp","href":"https://wa.me/+639693126299"}]}},"marquee":{"//bottom":"須至少一項；不同語系，數量應相同","bottom":["世界捕魚","世界杯","世界老虎機","世界彩","區塊鏈","世界真人","亞洲廳","澳門廳","泰國廳","真人秀","中國紅","維蜜廳"],"ring":"真人 WE 區塊鏈 WE 彩票 WE 捕魚 WE 世界杯 WE 老虎機 WE"},"button":{"enter":"進入網站","fullMovie":{"text":"▶","textLeft":"-10","border":"WORLD ENTERTAINMENT    WORLD ENTERTAINMENT","borderSize":"8.5"},"sound":"開關音樂","more":"查看","load":"載入更多","close":"關閉","back":"返回清單"},"rights":"版權所有 © 世界娛樂 2023"}'
        );
      var Ze = "en";
      const Ge = (0, c.o)({
        locale: Ze,
        fallbackLocale: Ze,
        messages: { en: Ye, zht: Ke },
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
