﻿/*!
     * Font Awesome Pro 5.10.2 by @fontawesome - https://fontawesome.com
     * License - https://fontawesome.com/license (Commercial License)
     */
!function () {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var a = e[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
        }
    }

    function G(r) {
        for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {},
                e = Object.keys(i);
            "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(i).filter(function (t) {
                return Object.getOwnPropertyDescriptor(i, t).enumerable
            }))), e.forEach(function (t) {
                var e, n, a;
                e = r, a = i[n = t], n in e ? Object.defineProperty(e, n, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = a
            })
        }
        return r
    }

    function d(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = [],
                a = !0,
                r = !1,
                i = void 0;
            try {
                for (var o, c = t[Symbol.iterator](); !(a = (o = c.next()).done) && (n.push(o.value), !e || n.length !== e); a = !0) ;
            } catch (t) {
                r = !0, i = t
            } finally {
                try {
                    a || null == c.return || c.return()
                } finally {
                    if (r) throw i
                }
            }
            return n
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function m(t) {
        return function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    var t = function () {
        },
        e = {},
        n = {},
        a = null,
        o = {
            mark: t,
            measure: t
        };
    try {
        "undefined" != typeof window && (e = window), "undefined" != typeof document && (n = document), "undefined" != typeof MutationObserver && (a = MutationObserver), "undefined" != typeof performance && (o = performance)
    } catch (t) {
    }
    var c = (e.navigator || {}).userAgent,
        s = void 0 === c ? "" : c,
        g = e,
        v = n,
        l = a,
        f = o,
        u = !!g.document,
        p = !!v.documentElement && !!v.head && "function" == typeof v.addEventListener && "function" == typeof v.createElement,
        k = ~s.indexOf("MSIE") || ~s.indexOf("Trident/"),
        h = "___FONT_AWESOME___",
        A = 16,
        b = "fa",
        y = "svg-inline--fa",
        K = "data-fa-i2svg",
        w = "data-fa-pseudo-element",
        x = "data-fa-pseudo-element-pending",
        C = "data-prefix",
        O = "data-icon",
        S = "fontawesome-i2svg",
        P = "async",
        N = ["HTML", "HEAD", "STYLE", "SCRIPT"],
        M = function () {
            try {
                return !0
            } catch (t) {
                return !1
            }
        }(),
        z = {
            fas: "solid",
            far: "regular",
            fal: "light",
            fad: "duotone",
            fab: "brands",
            fa: "solid"
        },
        E = {
            solid: "fas",
            regular: "far",
            light: "fal",
            duotone: "fad",
            brands: "fab"
        },
        j = "fa-layers-text",
        L = /Font Awesome 5 (Solid|Regular|Light|Duotone|Brands|Free|Pro)/,
        R = {
            900: "fas",
            400: "far",
            normal: "far",
            300: "fal"
        },
        _ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        T = _.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
        I = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"],
        Y = {
            GROUP: "group",
            SWAP_OPACITY: "swap-opacity",
            PRIMARY: "primary",
            SECONDARY: "secondary"
        },
        H = ["xs", "sm", "lg", "fw", "ul", "li", "border", "pull-left", "pull-right", "spin", "pulse", "rotate-90", "rotate-180", "rotate-270", "flip-horizontal", "flip-vertical", "flip-both", "stack", "stack-1x", "stack-2x", "inverse", "layers", "layers-text", "layers-counter", Y.GROUP, Y.SWAP_OPACITY, Y.PRIMARY, Y.SECONDARY].concat(_.map(function (t) {
            return "".concat(t, "x")
        })).concat(T.map(function (t) {
            return "w-".concat(t)
        })),
        D = g.FontAwesomeConfig || {};
    if (v && "function" == typeof v.querySelector) {
        [
            ["data-family-prefix", "familyPrefix"],
            ["data-replacement-class", "replacementClass"],
            ["data-auto-replace-svg", "autoReplaceSvg"],
            ["data-auto-add-css", "autoAddCss"],
            ["data-auto-a11y", "autoA11y"],
            ["data-search-pseudo-elements", "searchPseudoElements"],
            ["data-observe-mutations", "observeMutations"],
            ["data-mutate-approach", "mutateApproach"],
            ["data-keep-original-source", "keepOriginalSource"],
            ["data-measure-performance", "measurePerformance"],
            ["data-show-missing-icons", "showMissingIcons"]
        ].forEach(function (t) {
            var e, n = d(t, 2),
                a = n[0],
                r = n[1],
                i = "" === (e = function (t) {
                    var e = v.querySelector("script[" + t + "]");
                    if (e) return e.getAttribute(t)
                }(a)) || "false" !== e && ("true" === e || e);
            null != i && (D[r] = i)
        })
    }
    var F = G({}, {
        familyPrefix: b,
        replacementClass: y,
        autoReplaceSvg: !0,
        autoAddCss: !0,
        autoA11y: !0,
        searchPseudoElements: !1,
        observeMutations: !0,
        mutateApproach: "async",
        keepOriginalSource: !0,
        measurePerformance: !1,
        showMissingIcons: !0
    }, D);
    F.autoReplaceSvg || (F.observeMutations = !1);
    var J = G({}, F);
    g.FontAwesomeConfig = J;
    var U = g || {};
    U[h] || (U[h] = {}), U[h].styles || (U[h].styles = {}), U[h].hooks || (U[h].hooks = {}), U[h].shims || (U[h].shims = []);
    var W = U[h],
        q = [],
        X = !1;

    function B(t) {
        p && (X ? setTimeout(t, 0) : q.push(t))
    }

    p && ((X = (v.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(v.readyState)) || v.addEventListener("DOMContentLoaded", function t() {
        v.removeEventListener("DOMContentLoaded", t), X = 1, q.map(function (t) {
            return t()
        })
    }));
    var V, Q = "pending",
        Z = "settled",
        $ = "fulfilled",
        tt = "rejected",
        et = function () {
        },
        nt = "undefined" != typeof global && void 0 !== global.process && "function" == typeof global.process.emit,
        at = "undefined" == typeof setImmediate ? setTimeout : setImmediate,
        rt = [];

    function it() {
        for (var t = 0; t < rt.length; t++) rt[t][0](rt[t][1]);
        V = !(rt = [])
    }

    function ot(t, e) {
        rt.push([t, e]), V || (V = !0, at(it, 0))
    }

    function ct(t) {
        var e = t.owner,
            n = e._state,
            a = e._data,
            r = t[n],
            i = t.then;
        if ("function" == typeof r) {
            n = $;
            try {
                a = r(a)
            } catch (t) {
                ut(i, t)
            }
        }
        st(i, a) || (n === $ && lt(i, a), n === tt && ut(i, a))
    }

    function st(e, n) {
        var a;
        try {
            if (e === n) throw new TypeError("A promises callback cannot return that same promise.");
            if (n && ("function" == typeof n || "object" === r(n))) {
                var t = n.then;
                if ("function" == typeof t) return t.call(n, function (t) {
                    a || (a = !0, n === t ? ft(e, t) : lt(e, t))
                }, function (t) {
                    a || (a = !0, ut(e, t))
                }), !0
            }
        } catch (t) {
            return a || ut(e, t), !0
        }
        return !1
    }

    function lt(t, e) {
        t !== e && st(t, e) || ft(t, e)
    }

    function ft(t, e) {
        t._state === Q && (t._state = Z, t._data = e, ot(mt, t))
    }

    function ut(t, e) {
        t._state === Q && (t._state = Z, t._data = e, ot(pt, t))
    }

    function dt(t) {
        t._then = t._then.forEach(ct)
    }

    function mt(t) {
        t._state = $, dt(t)
    }

    function pt(t) {
        t._state = tt, dt(t), !t._handled && nt && global.process.emit("unhandledRejection", t._data, t)
    }

    function ht(t) {
        global.process.emit("rejectionHandled", t)
    }

    function gt(t) {
        if ("function" != typeof t) throw new TypeError("Promise resolver " + t + " is not a function");
        if (this instanceof gt == !1) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
        this._then = [],
            function (t, e) {
                function n(t) {
                    ut(e, t)
                }

                try {
                    t(function (t) {
                        lt(e, t)
                    }, n)
                } catch (t) {
                    n(t)
                }
            }(t, this)
    }

    gt.prototype = {
        constructor: gt,
        _state: Q,
        _then: null,
        _data: void 0,
        _handled: !1,
        then: function (t, e) {
            var n = {
                owner: this,
                then: new this.constructor(et),
                fulfilled: t,
                rejected: e
            };
            return !e && !t || this._handled || (this._handled = !0, this._state === tt && nt && ot(ht, this)), this._state === $ || this._state === tt ? ot(ct, n) : this._then.push(n), n.then
        },
        catch: function (t) {
            return this.then(null, t)
        }
    }, gt.all = function (c) {
        if (!Array.isArray(c)) throw new TypeError("You must pass an array to Promise.all().");
        return new gt(function (n, t) {
            var a = [],
                r = 0;

            function e(e) {
                return r++,
                    function (t) {
                        a[e] = t, --r || n(a)
                    }
            }

            for (var i, o = 0; o < c.length; o++) (i = c[o]) && "function" == typeof i.then ? i.then(e(o), t) : a[o] = i;
            r || n(a)
        })
    }, gt.race = function (r) {
        if (!Array.isArray(r)) throw new TypeError("You must pass an array to Promise.race().");
        return new gt(function (t, e) {
            for (var n, a = 0; a < r.length; a++) (n = r[a]) && "function" == typeof n.then ? n.then(t, e) : t(n)
        })
    }, gt.resolve = function (e) {
        return e && "object" === r(e) && e.constructor === gt ? e : new gt(function (t) {
            t(e)
        })
    }, gt.reject = function (n) {
        return new gt(function (t, e) {
            e(n)
        })
    };
    var vt = "function" == typeof Promise ? Promise : gt,
        bt = A,
        yt = {
            size: 16,
            x: 0,
            y: 0,
            rotate: 0,
            flipX: !1,
            flipY: !1
        };

    function wt(t) {
        if (t && p) {
            var e = v.createElement("style");
            e.setAttribute("type", "text/css"), e.innerHTML = t;
            for (var n = v.head.childNodes, a = null, r = n.length - 1; -1 < r; r--) {
                var i = n[r],
                    o = (i.tagName || "").toUpperCase();
                -1 < ["STYLE", "LINK"].indexOf(o) && (a = i)
            }
            return v.head.insertBefore(e, a), t
        }
    }

    var xt = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    function kt() {
        for (var t = 12, e = ""; 0 < t--;) e += xt[62 * Math.random() | 0];
        return e
    }

    function At(t) {
        for (var e = [], n = (t || []).length >>> 0; n--;) e[n] = t[n];
        return e
    }

    function Ct(t) {
        return t.classList ? At(t.classList) : (t.getAttribute("class") || "").split(" ").filter(function (t) {
            return t
        })
    }

    function Ot(t, e) {
        var n, a = e.split("-"),
            r = a[0],
            i = a.slice(1).join("-");
        return r !== t || "" === i || (n = i, ~H.indexOf(n)) ? null : i
    }

    function St(t) {
        return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function Pt(n) {
        return Object.keys(n || {}).reduce(function (t, e) {
            return t + "".concat(e, ": ").concat(n[e], ";")
        }, "")
    }

    function Nt(t) {
        return t.size !== yt.size || t.x !== yt.x || t.y !== yt.y || t.rotate !== yt.rotate || t.flipX || t.flipY
    }

    function Mt(t) {
        var e = t.transform,
            n = t.containerWidth,
            a = t.iconWidth,
            r = {
                transform: "translate(".concat(n / 2, " 256)")
            },
            i = "translate(".concat(32 * e.x, ", ").concat(32 * e.y, ") "),
            o = "scale(".concat(e.size / 16 * (e.flipX ? -1 : 1), ", ").concat(e.size / 16 * (e.flipY ? -1 : 1), ") "),
            c = "rotate(".concat(e.rotate, " 0 0)");
        return {
            outer: r,
            inner: {
                transform: "".concat(i, " ").concat(o, " ").concat(c)
            },
            path: {
                transform: "translate(".concat(a / 2 * -1, " -256)")
            }
        }
    }

    var zt = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
    };

    function Et(t) {
        var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
        return t.attributes && (t.attributes.fill || e) && (t.attributes.fill = "black"), t
    }

    function jt(t) {
        var e = t.icons,
            n = e.main,
            a = e.mask,
            r = t.prefix,
            i = t.iconName,
            o = t.transform,
            c = t.symbol,
            s = t.title,
            l = t.extra,
            f = t.watchable,
            u = void 0 !== f && f,
            d = a.found ? a : n,
            m = d.width,
            p = d.height,
            h = "fa-w-".concat(Math.ceil(m / p * 16)),
            g = [J.replacementClass, i ? "".concat(J.familyPrefix, "-").concat(i) : "", h].filter(function (t) {
                return -1 === l.classes.indexOf(t)
            }).concat(l.classes).join(" "),
            v = {
                children: [],
                attributes: G({}, l.attributes, {
                    "data-prefix": r,
                    "data-icon": i,
                    class: g,
                    role: l.attributes.role || "img",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 ".concat(m, " ").concat(p)
                })
            };
        u && (v.attributes[K] = ""), s && v.children.push({
            tag: "title",
            attributes: {
                id: v.attributes["aria-labelledby"] || "title-".concat(kt())
            },
            children: [s]
        });
        var b, y, w, x, k, A, C, O, S, P, N, M, z, E, j, L, R, _, T, I, Y, H, D, F, U, W, q = G({}, v, {
                prefix: r,
                iconName: i,
                main: n,
                mask: a,
                transform: o,
                symbol: c,
                styles: l.styles
            }),
            X = a.found && n.found ? (w = (b = q).children, x = b.attributes, k = b.main, A = b.mask, C = b.transform, O = k.width, S = k.icon, P = A.width, N = A.icon, M = Mt({
                transform: C,
                containerWidth: P,
                iconWidth: O
            }), z = {
                tag: "rect",
                attributes: G({}, zt, {
                    fill: "white"
                })
            }, E = S.children ? {
                children: S.children.map(Et)
            } : {}, j = {
                tag: "g",
                attributes: G({}, M.inner),
                children: [Et(G({
                    tag: S.tag,
                    attributes: G({}, S.attributes, M.path)
                }, E))]
            }, L = {
                tag: "g",
                attributes: G({}, M.outer),
                children: [j]
            }, R = "mask-".concat(kt()), _ = "clip-".concat(kt()), T = {
                tag: "mask",
                attributes: G({}, zt, {
                    id: R,
                    maskUnits: "userSpaceOnUse",
                    maskContentUnits: "userSpaceOnUse"
                }),
                children: [z, L]
            }, I = {
                tag: "defs",
                children: [{
                    tag: "clipPath",
                    attributes: {
                        id: _
                    },
                    children: (y = N, "g" === y.tag ? y.children : [y])
                }, T]
            }, w.push(I, {
                tag: "rect",
                attributes: G({
                    fill: "currentColor",
                    "clip-path": "url(#".concat(_, ")"),
                    mask: "url(#".concat(R, ")")
                }, zt)
            }), {
                children: w,
                attributes: x
            }) : function (t) {
                var e = t.children,
                    n = t.attributes,
                    a = t.main,
                    r = t.transform,
                    i = Pt(t.styles);
                if (0 < i.length && (n.style = i), Nt(r)) {
                    var o = Mt({
                        transform: r,
                        containerWidth: a.width,
                        iconWidth: a.width
                    });
                    e.push({
                        tag: "g",
                        attributes: G({}, o.outer),
                        children: [{
                            tag: "g",
                            attributes: G({}, o.inner),
                            children: [{
                                tag: a.icon.tag,
                                children: a.icon.children,
                                attributes: G({}, a.icon.attributes, o.path)
                            }]
                        }]
                    })
                } else e.push(a.icon);
                return {
                    children: e,
                    attributes: n
                }
            }(q),
            B = X.children,
            V = X.attributes;
        return q.children = B, q.attributes = V, c ? (H = (Y = q).prefix, D = Y.iconName, F = Y.children, U = Y.attributes, W = Y.symbol, [{
            tag: "svg",
            attributes: {
                style: "display: none;"
            },
            children: [{
                tag: "symbol",
                attributes: G({}, U, {
                    id: !0 === W ? "".concat(H, "-").concat(J.familyPrefix, "-").concat(D) : W
                }),
                children: F
            }]
        }]) : function (t) {
            var e = t.children,
                n = t.main,
                a = t.mask,
                r = t.attributes,
                i = t.styles,
                o = t.transform;
            if (Nt(o) && n.found && !a.found) {
                var c = n.width / n.height / 2,
                    s = .5;
                r.style = Pt(G({}, i, {
                    "transform-origin": "".concat(c + o.x / 16, "em ").concat(s + o.y / 16, "em")
                }))
            }
            return [{
                tag: "svg",
                attributes: r,
                children: e
            }]
        }(q)
    }

    function Lt(t) {
        var e = t.content,
            n = t.width,
            a = t.height,
            r = t.transform,
            i = t.title,
            o = t.extra,
            c = t.watchable,
            s = void 0 !== c && c,
            l = G({}, o.attributes, i ? {
                title: i
            } : {}, {
                class: o.classes.join(" ")
            });
        s && (l[K] = "");
        var f, u, d, m, p, h, g, v, b, y = G({}, o.styles);
        Nt(r) && (y.transform = (u = (f = {
            transform: r,
            startCentered: !0,
            width: n,
            height: a
        }).transform, d = f.width, m = void 0 === d ? A : d, p = f.height, h = void 0 === p ? A : p, g = f.startCentered, b = "", b += (v = void 0 !== g && g) && k ? "translate(".concat(u.x / bt - m / 2, "em, ").concat(u.y / bt - h / 2, "em) ") : v ? "translate(calc(-50% + ".concat(u.x / bt, "em), calc(-50% + ").concat(u.y / bt, "em)) ") : "translate(".concat(u.x / bt, "em, ").concat(u.y / bt, "em) "), b += "scale(".concat(u.size / bt * (u.flipX ? -1 : 1), ", ").concat(u.size / bt * (u.flipY ? -1 : 1), ") "), b += "rotate(".concat(u.rotate, "deg) ")), y["-webkit-transform"] = y.transform);
        var w = Pt(y);
        0 < w.length && (l.style = w);
        var x = [];
        return x.push({
            tag: "span",
            attributes: l,
            children: [e]
        }), i && x.push({
            tag: "span",
            attributes: {
                class: "sr-only"
            },
            children: [i]
        }), x
    }

    var Rt = function () {
        },
        _t = J.measurePerformance && f && f.mark && f.measure ? f : {
            mark: Rt,
            measure: Rt
        },
        Tt = 'FA "5.10.2"',
        It = function (t) {
            _t.mark("".concat(Tt, " ").concat(t, " ends")), _t.measure("".concat(Tt, " ").concat(t), "".concat(Tt, " ").concat(t, " begins"), "".concat(Tt, " ").concat(t, " ends"))
        },
        Yt = {
            begin: function (t) {
                return _t.mark("".concat(Tt, " ").concat(t, " begins")),
                    function () {
                        return It(t)
                    }
            },
            end: It
        },
        Ht = function (t, e, n, a) {
            var r, i, o, c, s, l = Object.keys(t),
                f = l.length,
                u = void 0 !== a ? (c = e, s = a, function (t, e, n, a) {
                    return c.call(s, t, e, n, a)
                }) : e;
            for (o = void 0 === n ? (r = 1, t[l[0]]) : (r = 0, n); r < f; r++) o = u(o, t[i = l[r]], i, t);
            return o
        };

    function Dt(t) {
        for (var e = "", n = 0; n < t.length; n++) {
            e += ("000" + t.charCodeAt(n).toString(16)).slice(-4)
        }
        return e
    }

    var Ft = W.styles,
        Ut = W.shims,
        Wt = {},
        qt = {},
        Xt = {},
        Bt = function () {
            var t = function (a) {
                return Ht(Ft, function (t, e, n) {
                    return t[n] = Ht(e, a, {}), t
                }, {})
            };
            Wt = t(function (t, e, n) {
                return e[3] && (t[e[3]] = n), t
            }), qt = t(function (e, t, n) {
                var a = t[2];
                return e[n] = n, a.forEach(function (t) {
                    e[t] = n
                }), e
            });
            var i = "far" in Ft;
            Xt = Ht(Ut, function (t, e) {
                var n = e[0],
                    a = e[1],
                    r = e[2];
                return "far" !== a || i || (a = "fas"), t[n] = {
                    prefix: a,
                    iconName: r
                }, t
            }, {})
        };

    function Vt(t, e) {
        return (Wt[t] || {})[e]
    }

    Bt();
    var Gt = W.styles,
        Kt = function () {
            return {
                prefix: null,
                iconName: null,
                rest: []
            }
        };

    function Jt(t) {
        return t.reduce(function (t, e) {
            var n = Ot(J.familyPrefix, e);
            if (Gt[e]) t.prefix = e;
            else if (J.autoFetchSvg && -1 < ["fas", "far", "fal", "fad", "fab", "fa"].indexOf(e)) t.prefix = e;
            else if (n) {
                var a = "fa" === t.prefix ? Xt[n] || {
                    prefix: null,
                    iconName: null
                } : {};
                t.iconName = a.iconName || n, t.prefix = a.prefix || t.prefix
            } else e !== J.replacementClass && 0 !== e.indexOf("fa-w-") && t.rest.push(e);
            return t
        }, Kt())
    }

    function Qt(t, e, n) {
        if (t && t[e] && t[e][n]) return {
            prefix: e,
            iconName: n,
            icon: t[e][n]
        }
    }

    function Zt(t) {
        var n, e = t.tag,
            a = t.attributes,
            r = void 0 === a ? {} : a,
            i = t.children,
            o = void 0 === i ? [] : i;
        return "string" == typeof t ? St(t) : "<".concat(e, " ").concat((n = r, Object.keys(n || {}).reduce(function (t, e) {
            return t + "".concat(e, '="').concat(St(n[e]), '" ')
        }, "").trim()), ">").concat(o.map(Zt).join(""), "</").concat(e, ">")
    }

    var $t = function () {
    };

    function te(t) {
        return "string" == typeof (t.getAttribute ? t.getAttribute(K) : null)
    }

    var ee = {
        replace: function (t) {
            var e = t[0],
                n = t[1].map(function (t) {
                    return Zt(t)
                }).join("\n");
            if (e.parentNode && e.outerHTML) e.outerHTML = n + (J.keepOriginalSource && "svg" !== e.tagName.toLowerCase() ? "\x3c!-- ".concat(e.outerHTML, " --\x3e") : "");
            else if (e.parentNode) {
                var a = document.createElement("span");
                e.parentNode.replaceChild(a, e), a.outerHTML = n
            }
        },
        nest: function (t) {
            var e = t[0],
                n = t[1];
            if (~Ct(e).indexOf(J.replacementClass)) return ee.replace(t);
            var a = new RegExp("".concat(J.familyPrefix, "-.*"));
            delete n[0].attributes.style;
            var r = n[0].attributes.class.split(" ").reduce(function (t, e) {
                return e === J.replacementClass || e.match(a) ? t.toSvg.push(e) : t.toNode.push(e), t
            }, {
                toNode: [],
                toSvg: []
            });
            n[0].attributes.class = r.toSvg.join(" ");
            var i = n.map(function (t) {
                return Zt(t)
            }).join("\n");
            e.setAttribute("class", r.toNode.join(" ")), e.setAttribute(K, ""), e.innerHTML = i
        }
    };

    function ne(t) {
        t()
    }

    function ae(n, t) {
        var a = "function" == typeof t ? t : $t;
        if (0 === n.length) a();
        else {
            var e = ne;
            J.mutateApproach === P && (e = g.requestAnimationFrame || ne), e(function () {
                var t = !0 === J.autoReplaceSvg ? ee.replace : ee[J.autoReplaceSvg] || ee.replace,
                    e = Yt.begin("mutate");
                n.map(t), e(), a()
            })
        }
    }

    var re = !1;

    function ie() {
        re = !1
    }

    var oe = null;

    function ce(t) {
        if (l && J.observeMutations) {
            var r = t.treeCallback,
                i = t.nodeCallback,
                o = t.pseudoElementsCallback,
                e = t.observeMutationsRoot,
                n = void 0 === e ? v : e;
            oe = new l(function (t) {
                re || At(t).forEach(function (t) {
                    if ("childList" === t.type && 0 < t.addedNodes.length && !te(t.addedNodes[0]) && (J.searchPseudoElements && o(t.target), r(t.target)), "attributes" === t.type && t.target.parentNode && J.searchPseudoElements && o(t.target.parentNode), "attributes" === t.type && te(t.target) && ~I.indexOf(t.attributeName))
                        if ("class" === t.attributeName) {
                            var e = Jt(Ct(t.target)),
                                n = e.prefix,
                                a = e.iconName;
                            n && t.target.setAttribute("data-prefix", n), a && t.target.setAttribute("data-icon", a)
                        } else i(t.target)
                })
            }), p && oe.observe(n, {
                childList: !0,
                attributes: !0,
                characterData: !0,
                subtree: !0
            })
        }
    }

    function se(t) {
        var e, n, a = t.getAttribute("data-prefix"),
            r = t.getAttribute("data-icon"),
            i = void 0 !== t.innerText ? t.innerText.trim() : "",
            o = Jt(Ct(t));
        return a && r && (o.prefix = a, o.iconName = r), o.prefix && 1 < i.length ? o.iconName = (e = o.prefix, n = t.innerText, (qt[e] || {})[n]) : o.prefix && 1 === i.length && (o.iconName = Vt(o.prefix, Dt(t.innerText))), o
    }

    var le = function (t) {
        var e = {
            size: 16,
            x: 0,
            y: 0,
            flipX: !1,
            flipY: !1,
            rotate: 0
        };
        return t ? t.toLowerCase().split(" ").reduce(function (t, e) {
            var n = e.toLowerCase().split("-"),
                a = n[0],
                r = n.slice(1).join("-");
            if (a && "h" === r) return t.flipX = !0, t;
            if (a && "v" === r) return t.flipY = !0, t;
            if (r = parseFloat(r), isNaN(r)) return t;
            switch (a) {
                case "grow":
                    t.size = t.size + r;
                    break;
                case "shrink":
                    t.size = t.size - r;
                    break;
                case "left":
                    t.x = t.x - r;
                    break;
                case "right":
                    t.x = t.x + r;
                    break;
                case "up":
                    t.y = t.y - r;
                    break;
                case "down":
                    t.y = t.y + r;
                    break;
                case "rotate":
                    t.rotate = t.rotate + r
            }
            return t
        }, e) : e
    };

    function fe(t) {
        var e, n, a, r, i, o, c, s = se(t),
            l = s.iconName,
            f = s.prefix,
            u = s.rest,
            d = (e = t.getAttribute("style"), n = [], e && (n = e.split(";").reduce(function (t, e) {
                var n = e.split(":"),
                    a = n[0],
                    r = n.slice(1);
                return a && 0 < r.length && (t[a] = r.join(":").trim()), t
            }, {})), n),
            m = le(t.getAttribute("data-fa-transform")),
            p = null !== (a = t.getAttribute("data-fa-symbol")) && ("" === a || a),
            h = (i = At((r = t).attributes).reduce(function (t, e) {
                return "class" !== t.name && "style" !== t.name && (t[e.name] = e.value), t
            }, {}), o = r.getAttribute("title"), J.autoA11y && (o ? i["aria-labelledby"] = "".concat(J.replacementClass, "-title-").concat(kt()) : (i["aria-hidden"] = "true", i.focusable = "false")), i),
            g = (c = t.getAttribute("data-fa-mask")) ? Jt(c.split(" ").map(function (t) {
                return t.trim()
            })) : Kt();
        return {
            iconName: l,
            title: t.getAttribute("title"),
            prefix: f,
            transform: m,
            symbol: p,
            mask: g,
            extra: {
                classes: u,
                styles: d,
                attributes: h
            }
        }
    }

    function ue(t) {
        this.name = "MissingIcon", this.message = t || "Icon unavailable", this.stack = (new Error).stack
    }

    (ue.prototype = Object.create(Error.prototype)).constructor = ue;
    var de = {
            fill: "currentColor"
        },
        me = {
            attributeType: "XML",
            repeatCount: "indefinite",
            dur: "2s"
        },
        pe = {
            tag: "path",
            attributes: G({}, de, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
            })
        },
        he = G({}, me, {
            attributeName: "opacity"
        }),
        ge = {
            tag: "g",
            children: [pe, {
                tag: "circle",
                attributes: G({}, de, {
                    cx: "256",
                    cy: "364",
                    r: "28"
                }),
                children: [{
                    tag: "animate",
                    attributes: G({}, me, {
                        attributeName: "r",
                        values: "28;14;28;28;14;28;"
                    })
                }, {
                    tag: "animate",
                    attributes: G({}, he, {
                        values: "1;0;1;1;0;1;"
                    })
                }]
            }, {
                tag: "path",
                attributes: G({}, de, {
                    opacity: "1",
                    d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
                }),
                children: [{
                    tag: "animate",
                    attributes: G({}, he, {
                        values: "1;0;0;0;0;1;"
                    })
                }]
            }, {
                tag: "path",
                attributes: G({}, de, {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
                }),
                children: [{
                    tag: "animate",
                    attributes: G({}, he, {
                        values: "0;0;1;1;0;0;"
                    })
                }]
            }]
        },
        ve = W.styles;

    function be(t) {
        var e = t[0],
            n = t[1],
            a = d(t.slice(4), 1)[0];
        return {
            found: !0,
            width: e,
            height: n,
            icon: Array.isArray(a) ? {
                tag: "g",
                attributes: {
                    class: "".concat(J.familyPrefix, "-").concat(Y.GROUP)
                },
                children: [{
                    tag: "path",
                    attributes: {
                        class: "".concat(J.familyPrefix, "-").concat(Y.SECONDARY),
                        fill: "currentColor",
                        d: a[0]
                    }
                }, {
                    tag: "path",
                    attributes: {
                        class: "".concat(J.familyPrefix, "-").concat(Y.PRIMARY),
                        fill: "currentColor",
                        d: a[1]
                    }
                }]
            } : {
                tag: "path",
                attributes: {
                    fill: "currentColor",
                    d: a
                }
            }
        }
    }

    function ye(a, r) {
        return new vt(function (t, e) {
            var n = {
                found: !1,
                width: 512,
                height: 512,
                icon: ge
            };
            if (a && r && ve[r] && ve[r][a]) return t(be(ve[r][a]));
            a && r && !J.showMissingIcons ? e(new ue("Icon is missing for prefix ".concat(r, " with icon name ").concat(a))) : t(n)
        })
    }

    var we = W.styles;

    function xe(t) {
        var i, e, o, c, s, l, f, n, u, a = fe(t);
        return ~a.extra.classes.indexOf(j) ? function (t, e) {
            var n = e.title,
                a = e.transform,
                r = e.extra,
                i = null,
                o = null;
            if (k) {
                var c = parseInt(getComputedStyle(t).fontSize, 10),
                    s = t.getBoundingClientRect();
                i = s.width / c, o = s.height / c
            }
            return J.autoA11y && !n && (r.attributes["aria-hidden"] = "true"), vt.resolve([t, Lt({
                content: t.innerHTML,
                width: i,
                height: o,
                transform: a,
                title: n,
                extra: r,
                watchable: !0
            })])
        }(t, a) : (i = t, o = (e = a).iconName, c = e.title, s = e.prefix, l = e.transform, f = e.symbol, n = e.mask, u = e.extra, new vt(function (r, t) {
            vt.all([ye(o, s), ye(n.iconName, n.prefix)]).then(function (t) {
                var e = d(t, 2),
                    n = e[0],
                    a = e[1];
                r([i, jt({
                    icons: {
                        main: n,
                        mask: a
                    },
                    prefix: s,
                    iconName: o,
                    transform: l,
                    symbol: f,
                    mask: a,
                    title: c,
                    extra: u,
                    watchable: !0
                })])
            })
        }))
    }

    function ke(t) {
        var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
        if (p) {
            var e = v.documentElement.classList,
                a = function (t) {
                    return e.add("".concat(S, "-").concat(t))
                },
                r = function (t) {
                    return e.remove("".concat(S, "-").concat(t))
                },
                i = J.autoFetchSvg ? Object.keys(z) : Object.keys(we),
                o = [".".concat(j, ":not([").concat(K, "])")].concat(i.map(function (t) {
                    return ".".concat(t, ":not([").concat(K, "])")
                })).join(", ");
            if (0 !== o.length) {
                var c = [];
                try {
                    c = At(t.querySelectorAll(o))
                } catch (t) {
                }
                if (0 < c.length) {
                    a("pending"), r("complete");
                    var s = Yt.begin("onTree"),
                        l = c.reduce(function (t, e) {
                            try {
                                var n = xe(e);
                                n && t.push(n)
                            } catch (t) {
                                M || t instanceof ue && console.error(t)
                            }
                            return t
                        }, []);
                    return new vt(function (e, t) {
                        vt.all(l).then(function (t) {
                            ae(t, function () {
                                a("active"), a("complete"), r("pending"), "function" == typeof n && n(), s(), e()
                            })
                        }).catch(function () {
                            s(), t()
                        })
                    })
                }
            }
        }
    }

    function Ae(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
        xe(t).then(function (t) {
            t && ae([t], e)
        })
    }

    function Ce(m, p) {
        var h = "".concat(x).concat(p.replace(":", "-"));
        return new vt(function (a, t) {
            if (null !== m.getAttribute(h)) return a();
            var e = At(m.children).filter(function (t) {
                    return t.getAttribute(w) === p
                })[0],
                n = g.getComputedStyle(m, p),
                r = n.getPropertyValue("font-family").match(L),
                i = n.getPropertyValue("font-weight");
            if (e && !r) return m.removeChild(e), a();
            if (r) {
                var o = n.getPropertyValue("content"),
                    c = ~["Solid", "Regular", "Light", "Duotone", "Brands"].indexOf(r[1]) ? E[r[1].toLowerCase()] : R[i],
                    s = Dt(3 === o.length ? o.substr(1, 1) : o),
                    l = Vt(c, s),
                    f = l;
                if (!l || e && e.getAttribute(C) === c && e.getAttribute(O) === f) a();
                else {
                    m.setAttribute(h, f), e && m.removeChild(e);
                    var u = {
                            iconName: null,
                            title: null,
                            prefix: null,
                            transform: yt,
                            symbol: !1,
                            mask: null,
                            extra: {
                                classes: [],
                                styles: {},
                                attributes: {}
                            }
                        },
                        d = u.extra;
                    d.attributes[w] = p, ye(l, c).then(function (t) {
                        var e = jt(G({}, u, {
                                icons: {
                                    main: t,
                                    mask: Kt()
                                },
                                prefix: c,
                                iconName: f,
                                extra: d,
                                watchable: !0
                            })),
                            n = v.createElement("svg");
                        ":before" === p ? m.insertBefore(n, m.firstChild) : m.appendChild(n), n.outerHTML = e.map(function (t) {
                            return Zt(t)
                        }).join("\n"), m.removeAttribute(h), a()
                    }).catch(t)
                }
            } else a()
        })
    }

    function Oe(t) {
        return vt.all([Ce(t, ":before"), Ce(t, ":after")])
    }

    function Se(t) {
        return !(t.parentNode === document.head || ~N.indexOf(t.tagName.toUpperCase()) || t.getAttribute(w) || t.parentNode && "svg" === t.parentNode.tagName)
    }

    function Pe(r) {
        if (p) return new vt(function (t, e) {
            var n = At(r.querySelectorAll("*")).filter(Se).map(Oe),
                a = Yt.begin("searchPseudoElements");
            re = !0, vt.all(n).then(function () {
                a(), ie(), t()
            }).catch(function () {
                a(), ie(), e()
            })
        })
    }

    var Ne = "svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fad.fa-inverse{color:#fff}";

    function Me() {
        var t = b,
            e = y,
            n = J.familyPrefix,
            a = J.replacementClass,
            r = Ne;
        if (n !== t || a !== e) {
            var i = new RegExp("\\.".concat(t, "\\-"), "g"),
                o = new RegExp("\\--".concat(t, "\\-"), "g"),
                c = new RegExp("\\.".concat(e), "g");
            r = r.replace(i, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(c, ".".concat(a))
        }
        return r
    }

    function ze() {
        J.autoAddCss && !_e && (wt(Me()), _e = !0)
    }

    function Ee(e, t) {
        return Object.defineProperty(e, "abstract", {
            get: t
        }), Object.defineProperty(e, "html", {
            get: function () {
                return e.abstract.map(function (t) {
                    return Zt(t)
                })
            }
        }), Object.defineProperty(e, "node", {
            get: function () {
                if (p) {
                    var t = v.createElement("div");
                    return t.innerHTML = e.html, t.children
                }
            }
        }), e
    }

    function je(t) {
        var e = t.prefix,
            n = void 0 === e ? "fa" : e,
            a = t.iconName;
        if (a) return Qt(Re.definitions, n, a) || Qt(W.styles, n, a)
    }

    var Le, Re = new (function () {
            function t() {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.definitions = {}
            }

            var e, n, a;
            return e = t, (n = [{
                key: "add",
                value: function () {
                    for (var e = this, t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a];
                    var r = n.reduce(this._pullDefinitions, {});
                    Object.keys(r).forEach(function (t) {
                        e.definitions[t] = G({}, e.definitions[t] || {}, r[t]),
                            function t(e, a) {
                                var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
                                    r = void 0 !== n && n,
                                    i = Object.keys(a).reduce(function (t, e) {
                                        var n = a[e];
                                        return n.icon ? t[n.iconName] = n.icon : t[e] = n, t
                                    }, {});
                                "function" != typeof W.hooks.addPack || r ? W.styles[e] = G({}, W.styles[e] || {}, i) : W.hooks.addPack(e, i), "fas" === e && t("fa", a)
                            }(t, r[t]), Bt()
                    })
                }
            }, {
                key: "reset",
                value: function () {
                    this.definitions = {}
                }
            }, {
                key: "_pullDefinitions",
                value: function (i, t) {
                    var o = t.prefix && t.iconName && t.icon ? {
                        0: t
                    } : t;
                    return Object.keys(o).map(function (t) {
                        var e = o[t],
                            n = e.prefix,
                            a = e.iconName,
                            r = e.icon;
                        i[n] || (i[n] = {}), i[n][a] = r
                    }), i
                }
            }]) && i(e.prototype, n), a && i(e, a), t
        }()),
        _e = !1,
        Te = {
            i2svg: function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                if (p) {
                    ze();
                    var e = t.node,
                        n = void 0 === e ? v : e,
                        a = t.callback,
                        r = void 0 === a ? function () {
                        } : a;
                    return J.searchPseudoElements && Pe(n), ke(n, r)
                }
                return vt.reject("Operation requires a DOM of some kind.")
            },
            css: Me,
            insertCss: function () {
                _e || (wt(Me()), _e = !0)
            },
            watch: function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.autoReplaceSvgRoot,
                    n = t.observeMutationsRoot;
                !1 === J.autoReplaceSvg && (J.autoReplaceSvg = !0), J.observeMutations = !0, B(function () {
                    He({
                        autoReplaceSvgRoot: e
                    }), ce({
                        treeCallback: ke,
                        nodeCallback: Ae,
                        pseudoElementsCallback: Pe,
                        observeMutationsRoot: n
                    })
                })
            }
        },
        Ie = (Le = function (t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                n = e.transform,
                a = void 0 === n ? yt : n,
                r = e.symbol,
                i = void 0 !== r && r,
                o = e.mask,
                c = void 0 === o ? null : o,
                s = e.title,
                l = void 0 === s ? null : s,
                f = e.classes,
                u = void 0 === f ? [] : f,
                d = e.attributes,
                m = void 0 === d ? {} : d,
                p = e.styles,
                h = void 0 === p ? {} : p;
            if (t) {
                var g = t.prefix,
                    v = t.iconName,
                    b = t.icon;
                return Ee(G({
                    type: "icon"
                }, t), function () {
                    return ze(), J.autoA11y && (l ? m["aria-labelledby"] = "".concat(J.replacementClass, "-title-").concat(kt()) : (m["aria-hidden"] = "true", m.focusable = "false")), jt({
                        icons: {
                            main: be(b),
                            mask: c ? be(c.icon) : {
                                found: !1,
                                width: null,
                                height: null,
                                icon: {}
                            }
                        },
                        prefix: g,
                        iconName: v,
                        transform: G({}, yt, a),
                        symbol: i,
                        title: l,
                        extra: {
                            attributes: m,
                            styles: h,
                            classes: u
                        }
                    })
                })
            }
        }, function (t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                n = (t || {}).icon ? t : je(t || {}),
                a = e.mask;
            return a && (a = (a || {}).icon ? a : je(a || {})), Le(n, G({}, e, {
                mask: a
            }))
        }),
        Ye = {
            noAuto: function () {
                J.autoReplaceSvg = !1, J.observeMutations = !1, oe && oe.disconnect()
            },
            config: J,
            dom: Te,
            library: Re,
            parse: {
                transform: function (t) {
                    return le(t)
                }
            },
            findIconDefinition: je,
            icon: Ie,
            text: function (t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    n = e.transform,
                    a = void 0 === n ? yt : n,
                    r = e.title,
                    i = void 0 === r ? null : r,
                    o = e.classes,
                    c = void 0 === o ? [] : o,
                    s = e.attributes,
                    l = void 0 === s ? {} : s,
                    f = e.styles,
                    u = void 0 === f ? {} : f;
                return Ee({
                    type: "text",
                    content: t
                }, function () {
                    return ze(), Lt({
                        content: t,
                        transform: G({}, yt, a),
                        title: i,
                        extra: {
                            attributes: l,
                            styles: u,
                            classes: ["".concat(J.familyPrefix, "-layers-text")].concat(m(c))
                        }
                    })
                })
            },
            counter: function (t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    n = e.title,
                    a = void 0 === n ? null : n,
                    r = e.classes,
                    i = void 0 === r ? [] : r,
                    o = e.attributes,
                    c = void 0 === o ? {} : o,
                    s = e.styles,
                    l = void 0 === s ? {} : s;
                return Ee({
                    type: "counter",
                    content: t
                }, function () {
                    return ze(),
                        function (t) {
                            var e = t.content,
                                n = t.title,
                                a = t.extra,
                                r = G({}, a.attributes, n ? {
                                    title: n
                                } : {}, {
                                    class: a.classes.join(" ")
                                }),
                                i = Pt(a.styles);
                            0 < i.length && (r.style = i);
                            var o = [];
                            return o.push({
                                tag: "span",
                                attributes: r,
                                children: [e]
                            }), n && o.push({
                                tag: "span",
                                attributes: {
                                    class: "sr-only"
                                },
                                children: [n]
                            }), o
                        }({
                            content: t.toString(),
                            title: a,
                            extra: {
                                attributes: c,
                                styles: l,
                                classes: ["".concat(J.familyPrefix, "-layers-counter")].concat(m(i))
                            }
                        })
                })
            },
            layer: function (t) {
                var e = (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).classes,
                    n = void 0 === e ? [] : e;
                return Ee({
                    type: "layer"
                }, function () {
                    ze();
                    var e = [];
                    return t(function (t) {
                        Array.isArray(t) ? t.map(function (t) {
                            e = e.concat(t.abstract)
                        }) : e = e.concat(t.abstract)
                    }), [{
                        tag: "span",
                        attributes: {
                            class: ["".concat(J.familyPrefix, "-layers")].concat(m(n)).join(" ")
                        },
                        children: e
                    }]
                })
            },
            toHtml: Zt
        },
        He = function () {
            var t = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
                e = void 0 === t ? v : t;
            (0 < Object.keys(W.styles).length || J.autoFetchSvg) && p && J.autoReplaceSvg && Ye.dom.i2svg({
                node: e
            })
        };
    !function (t) {
        try {
            t()
        } catch (t) {
            if (!M) throw t
        }
    }(function () {
        u && (g.FontAwesome || (g.FontAwesome = Ye), B(function () {
            He(), ce({
                treeCallback: ke,
                nodeCallback: Ae,
                pseudoElementsCallback: Pe
            })
        })), W.hooks = G({}, W.hooks, {
            addPack: function (t, e) {
                W.styles[t] = G({}, W.styles[t] || {}, e), Bt(), He()
            },
            addShims: function (t) {
                var e;
                (e = W.shims).push.apply(e, m(t)), Bt(), He()
            }
        })
    })
}();