﻿/*!
 * Font Awesome Pro 5.10.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Commercial License)
 */

var e,
    t;
e = this,
    t = function (e) {
        "use strict";

        function t(e) {
            return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                        return typeof e
                    }
                    : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }
            )(e)
        }

        function a(r) {
            for (var e = 1;
                 e < arguments.length;
                 e++) {
                var i = null != arguments[e] ? arguments[e] : {}
                    ,
                    t = Object.keys(i);
                "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(i).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(i, e).enumerable
                    }
                ))),
                    t.forEach(function (e) {
                            var t, n, o;
                            t = r, o = i[n = e], n in t ? Object.defineProperty(t, n, {
                                    value: o, enumerable: !0, configurable: !0, writable: !0
                                }
                            ) : t[n] = o
                        }
                    )
            }
            return r
        }

        var n = {}
            ,
            o = {}
        ;
        try {
            "undefined" != typeof window && (n = window),
            "undefined" != typeof document && (o = document)
        } catch (e) {
        }
        var r = (n.navigator || {}
            ).userAgent,
            i = void 0 === r ? "" : r,
            l = n,
            u = o,
            c = !!l.document,
            s = !!u.documentElement && !!u.head && "function" == typeof u.addEventListener && "function" == typeof u.createElement,
            f = (~i.indexOf("MSIE") || i.indexOf("Trident/"), []),
            d = !1;

        function m(e) {
            s && (d ? setTimeout(e, 0) : f.push(e))
        }

        s && ((d = (u.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(u.readyState)) || u.addEventListener("DOMContentLoaded", function e() {
                u.removeEventListener("DOMContentLoaded", e), d = 1, f.map(function (e) {
                        return e()
                    }
                )
            }
        ));
        var h = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
        ;
        var g,
            p = (function (c) {
                !function (e) {
                    function u(e, t) {
                        var n = (65535 & e) + (65535 & t);
                        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
                    }

                    function a(e, t, n, o, r, i) {
                        return u((c = u(u(t, e), u(o, i))) << (a = r) | c >>> 32 - a, n);
                        var c, a
                    }

                    function d(e, t, n, o, r, i, c) {
                        return a(t & n | ~t & o, e, t, r, i, c)
                    }

                    function m(e, t, n, o, r, i, c) {
                        return a(t & o | n & ~o, e, t, r, i, c)
                    }

                    function h(e, t, n, o, r, i, c) {
                        return a(t ^ n ^ o, e, t, r, i, c)
                    }

                    function g(e, t, n, o, r, i, c) {
                        return a(n ^ (t | ~o), e, t, r, i, c)
                    }

                    function s(e, t) {
                        var n, o, r, i, c;
                        e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                        var a = 1732584193, s = -271733879, f = -1732584194, l = 271733878;
                        for (n = 0;
                             n < e.length;
                             n += 16) s = g(s = g(s = g(s = g(s = h(s = h(s = h(s = h(s = m(s = m(s = m(s = m(s = d(s = d(s = d(s = d(r = s, f = d(i = f, l = d(c = l, a = d(o = a, s, f, l, e[n], 7, -680876936), s, f, e[n + 1], 12, -389564586), a, s, e[n + 2], 17, 606105819), l, a, e[n + 3], 22, -1044525330), f = d(f, l = d(l, a = d(a, s, f, l, e[n + 4], 7, -176418897), s, f, e[n + 5], 12, 1200080426), a, s, e[n + 6], 17, -1473231341), l, a, e[n + 7], 22, -45705983), f = d(f, l = d(l, a = d(a, s, f, l, e[n + 8], 7, 1770035416), s, f, e[n + 9], 12, -1958414417), a, s, e[n + 10], 17, -42063), l, a, e[n + 11], 22, -1990404162), f = d(f, l = d(l, a = d(a, s, f, l, e[n + 12], 7, 1804603682), s, f, e[n + 13], 12, -40341101), a, s, e[n + 14], 17, -1502002290), l, a, e[n + 15], 22, 1236535329), f = m(f, l = m(l, a = m(a, s, f, l, e[n + 1], 5, -165796510), s, f, e[n + 6], 9, -1069501632), a, s, e[n + 11], 14, 643717713), l, a, e[n], 20, -373897302), f = m(f, l = m(l, a = m(a, s, f, l, e[n + 5], 5, -701558691), s, f, e[n + 10], 9, 38016083), a, s, e[n + 15], 14, -660478335), l, a, e[n + 4], 20, -405537848), f = m(f, l = m(l, a = m(a, s, f, l, e[n + 9], 5, 568446438), s, f, e[n + 14], 9, -1019803690), a, s, e[n + 3], 14, -187363961), l, a, e[n + 8], 20, 1163531501), f = m(f, l = m(l, a = m(a, s, f, l, e[n + 13], 5, -1444681467), s, f, e[n + 2], 9, -51403784), a, s, e[n + 7], 14, 1735328473), l, a, e[n + 12], 20, -1926607734), f = h(f, l = h(l, a = h(a, s, f, l, e[n + 5], 4, -378558), s, f, e[n + 8], 11, -2022574463), a, s, e[n + 11], 16, 1839030562), l, a, e[n + 14], 23, -35309556), f = h(f, l = h(l, a = h(a, s, f, l, e[n + 1], 4, -1530992060), s, f, e[n + 4], 11, 1272893353), a, s, e[n + 7], 16, -155497632), l, a, e[n + 10], 23, -1094730640), f = h(f, l = h(l, a = h(a, s, f, l, e[n + 13], 4, 681279174), s, f, e[n], 11, -358537222), a, s, e[n + 3], 16, -722521979), l, a, e[n + 6], 23, 76029189), f = h(f, l = h(l, a = h(a, s, f, l, e[n + 9], 4, -640364487), s, f, e[n + 12], 11, -421815835), a, s, e[n + 15], 16, 530742520), l, a, e[n + 2], 23, -995338651), f = g(f, l = g(l, a = g(a, s, f, l, e[n], 6, -198630844), s, f, e[n + 7], 10, 1126891415), a, s, e[n + 14], 15, -1416354905), l, a, e[n + 5], 21, -57434055), f = g(f, l = g(l, a = g(a, s, f, l, e[n + 12], 6, 1700485571), s, f, e[n + 3], 10, -1894986606), a, s, e[n + 10], 15, -1051523), l, a, e[n + 1], 21, -2054922799), f = g(f, l = g(l, a = g(a, s, f, l, e[n + 8], 6, 1873313359), s, f, e[n + 15], 10, -30611744), a, s, e[n + 6], 15, -1560198380), l, a, e[n + 13], 21, 1309151649), f = g(f, l = g(l, a = g(a, s, f, l, e[n + 4], 6, -145523070), s, f, e[n + 11], 10, -1120210379), a, s, e[n + 2], 15, 718787259), l, a, e[n + 9], 21, -343485551), a = u(a, o), s = u(s, r), f = u(f, i), l = u(l, c);
                        return [a, s, f, l]
                    }

                    function f(e) {
                        var t, n = "", o = 32 * e.length;
                        for (t = 0;
                             t < o;
                             t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
                        return n
                    }

                    function l(e) {
                        var t, n = [];
                        for (n[(e.length >> 2) - 1] = void 0, t = 0;
                             t < n.length;
                             t += 1) n[t] = 0;
                        var o = 8 * e.length;
                        for (t = 0;
                             t < o;
                             t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                        return n
                    }

                    function o(e) {
                        var t, n, o = "0123456789abcdef", r = "";
                        for (n = 0;
                             n < e.length;
                             n += 1) t = e.charCodeAt(n), r += o.charAt(t >>> 4 & 15) + o.charAt(15 & t);
                        return r
                    }

                    function n(e) {
                        return unescape(encodeURIComponent(e))
                    }

                    function r(e) {
                        return f(s(l(t = n(e)), 8 * t.length));
                        var t
                    }

                    function i(e, t) {
                        return function (e, t) {
                            var n, o, r = l(e), i = [], c = [];
                            for (i[15] = c[15] = void 0, 16 < r.length && (r = s(r, 8 * e.length)), n = 0;
                                 n < 16;
                                 n += 1) i[n] = 909522486 ^ r[n], c[n] = 1549556828 ^ r[n];
                            return o = s(i.concat(l(t)), 512 + 8 * t.length), f(s(c.concat(o), 640))
                        }
                        (n(e), n(t))
                    }

                    function t(e, t, n) {
                        return t ? n ? i(t, e) : o(i(t, e)) : n ? r(e) : o(r(e))
                    }

                    c.exports ? c.exports = t : e.md5 = t
                }
                (h)
            }
            (g = {
                    exports: {}
                }
                , g.exports), g.exports);

        function v(e) {
            if (null !== e && "object" === t(e)) return e.src ? p(e.src) : e.href ? p(e.href) : e.innerText && "" !== e.innerText ? p(e.innerText) : void 0
        }

        var y = "fa-kits-diag",
            b = "fa-kits-node-under-test",
            w = "data-md5",
            x = "data-fa-detection-ignore",
            A = "data-fa-detection-timeout",
            T = "data-fa-detection-results-collection-max-wait";

        function D(e) {
            var t = e.fn,
                c = void 0 === t ? function () {
                        return !0
                    }
                    : t,
                n = e.initialDuration,
                o = void 0 === n ? 1 : n,
                r = e.maxDuration,
                a = void 0 === r ? l.FontAwesomeDetection.timeout : r,
                i = e.showProgress,
                s = void 0 !== i && i,
                f = e.progressIndicator;
            return new Promise(function (r, i) {
                    !function n(e, o) {
                        setTimeout(function () {
                                var e = c();
                                if (s && console.info(f), e) r(e);
                                else {
                                    var t = 250 + o;
                                    t <= a ? n(250, t) : i("timeout")
                                }
                            }
                            , e)
                    }
                    (o, 0)
                }
            )
        }

        function E(e) {
            var t = e.nodesTested,
                n = e.nodesFound;
            l.FontAwesomeDetection = l.FontAwesomeDetection || {}
                ,
                l.FontAwesomeDetection.nodesTested = t,
                l.FontAwesomeDetection.nodesFound = n,
                l.FontAwesomeDetection.detectionDone = !0
        }

        function C() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : function () {
                }
                ,
                n = {
                    conflict: {}
                    ,
                    noConflict: {}
                }
            ;
            l.onmessage = function (e) {
                "file://" !== l.location.origin && e.origin !== l.location.origin || e && e.data && ("fontawesome-conflict" === e.data.type ? n.conflict[e.data.md5] = e.data : "no-conflict" === e.data.type && (n.noConflict[e.data.md5] = e.data))
            }
            ;
            var e = function (t) {
                    for (var c = Array.from(u.scripts).filter(function (e) {
                            return !e.hasAttribute(x) && e !== t
                        }
                    ), a = {}
                             , e = function (e) {
                            var t = u.createElement("iframe");
                            t.setAttribute("style", "display:none;");
                            var n = u.createElement("script");
                            n.setAttribute("id", b);
                            var o = v(c[e]);
                            n.setAttribute(w, o), a[o] = c[e], "" !== c[e].src && (n.src = c[e].src), "" !== c[e].innerText && (n.innerText = c[e].innerText), n.async = !0;
                            var r = u.createElement("script");
                            r.setAttribute("id", y);
                            var i = "file://" === l.location.origin ? "*" : l.location.origin;
                            r.innerText = "(".concat(function (n, o, r) {
                                parent.FontAwesomeDetection.__pollUntil({
                                        fn: function () {
                                            return !!window.FontAwesomeConfig
                                        }
                                    }
                                ).then(function () {
                                        var e = document.getElementById(n);
                                        parent.postMessage({
                                                type: "fontawesome-conflict",
                                                technology: "js",
                                                src: e.src,
                                                innerText: e.innerText,
                                                tagName: e.tagName,
                                                md5: o
                                            }
                                            , r)
                                    }
                                ).catch(function (e) {
                                        var t = document.getElementById(n);
                                        "timeout" === e ? parent.postMessage({
                                                type: "no-conflict", src: t.src, innerText: t.innerText, tagName: t.tagName, md5: o
                                            }
                                            , r) : console.error(e)
                                    }
                                )
                            }
                                .toString(), ")('").concat(b, "', '").concat(o, "', '").concat(i, "');"), t.onload = function () {
                                t.contentDocument.head.appendChild(r), t.contentDocument.head.appendChild(n)
                            }
                                , m(function () {
                                    return u.body.appendChild(t)
                                }
                            )
                        }
                             , n = 0;
                         n < c.length;
                         n++) e(n);
                    return a
                }
                (u.currentScript),
                o = function () {
                    var e = Array.from(u.getElementsByTagName("link")).filter(function (e) {
                            return !e.hasAttribute(x)
                        }
                        ),
                        t = Array.from(u.getElementsByTagName("style")).filter(function (e) {
                                return !(e.hasAttribute(x) || l.FontAwesomeConfig && e.innerText.match(new RegExp("svg:not\\(:root\\)\\.".concat(l.FontAwesomeConfig.replacementClass))))
                            }
                        );

                    function n(e, t) {
                        var n = u.createElement("iframe");
                        n.setAttribute("style", "visibility: hidden; position: absolute; height: 0; width: 0;");
                        var o = "fa-test-icon-" + t,
                            r = u.createElement("i");
                        r.setAttribute("class", "fa fa-coffee"),
                            r.setAttribute("id", o);
                        var i = u.createElement("script");
                        i.setAttribute("id", y);
                        var c = "file://" === l.location.origin ? "*" : l.location.origin;
                        i.innerText = "(".concat(function (n, o, r, i) {
                            parent.FontAwesomeDetection.__pollUntil({
                                    fn: function () {
                                        var e = document.getElementById(o),
                                            t = window.getComputedStyle(e).getPropertyValue("font-family");
                                        return !(!t.match(/FontAwesome/) && !t.match(/Font Awesome 5/))
                                    }
                                }
                            ).then(function () {
                                    var e = document.getElementById(n);
                                    parent.postMessage({
                                            type: "fontawesome-conflict",
                                            technology: "webfont",
                                            href: e.href,
                                            innerText: e.innerText,
                                            tagName: e.tagName,
                                            md5: r
                                        }
                                        , i)
                                }
                            ).catch(function (e) {
                                    var t = document.getElementById(n);
                                    "timeout" === e ? parent.postMessage({
                                            type: "no-conflict",
                                            technology: "webfont",
                                            href: t.src,
                                            innerText: t.innerText,
                                            tagName: t.tagName,
                                            md5: r
                                        }
                                        , i) : console.error(e)
                                }
                            )
                        }
                            .toString(), ")('").concat(b, "', '").concat(o || "foo", "', '").concat(t, "', '").concat(c, "');"),
                            n.onload = function () {
                                n.contentDocument.head.appendChild(i),
                                    n.contentDocument.head.appendChild(e),
                                    n.contentDocument.body.appendChild(r)
                            }
                            ,
                            m(function () {
                                    return u.body.appendChild(n)
                                }
                            )
                    }

                    for (var o = {}
                             , r = 0;
                         r < e.length;
                         r++) {
                        var i = u.createElement("link");
                        i.setAttribute("id", b),
                            i.setAttribute("href", e[r].href),
                            i.setAttribute("rel", e[r].rel);
                        var c = v(e[r]);
                        i.setAttribute(w, c),
                            o[c] = e[r],
                            n(i, c)
                    }
                    for (var a = 0;
                         a < t.length;
                         a++) {
                        var s = u.createElement("style");
                        s.setAttribute("id", b);
                        var f = v(t[a]);
                        s.setAttribute(w, f),
                            s.innerText = t[a].innerText,
                            o[f] = t[a],
                            n(s, f)
                    }
                    return o
                }
                (),
                r = a({}
                    , e, o),
                i = Object.keys(e).length + Object.keys(o).length,
                c = l.FontAwesomeDetection.timeout + l.FontAwesomeDetection.resultsCollectionMaxWait;
            console.group("Font Awesome Detector"),
                0 === i ? (console.info("%cAll Good!", "color: green; font-size: large"), console.info("We didn't find anything that needs testing for conflicts. Ergo, no conflicts.")) : (console.info("Testing ".concat(i, " possible conflicts.")), console.info("We'll wait about ".concat(Math.round(l.FontAwesomeDetection.timeout / 10) / 100, " seconds while testing these and\n") + "then up to another ".concat(Math.round(l.FontAwesomeDetection.resultsCollectionMaxWait / 10) / 100, " to allow the browser time\n") + "to accumulate the results. But we'll probably be outta here way before then.\n\n"), console.info("You can adjust those durations by assigning values to these attributes on the <script> element that loads this detection:"), console.info("\t%c".concat(A, "%c: milliseconds to wait for each test before deciding whether it's a conflict."), "font-weight: bold;", "font-size: normal;"), console.info("\t%c".concat(T, "%c: milliseconds to wait for the browser to accumulate test results before giving up."), "font-weight: bold;", "font-size: normal;"), D({
                        maxDuration: c, showProgress: !0, progressIndicator: "waiting...", fn: function () {
                            return Object.keys(n.conflict).length + Object.keys(n.noConflict).length >= i
                        }
                    }
                ).then(function () {
                        console.info("DONE!"), E({
                                nodesTested: n, nodesFound: r
                            }
                        ), t({
                                nodesTested: n, nodesFound: r
                            }
                        ), console.groupEnd()
                    }
                ).catch(function (e) {
                        "timeout" === e ? console.info("TIME OUT! We waited until we got tired. Here's what we found:") : (console.info("Whoops! We hit an error:", e), console.info("Here's what we'd found up until that error:")), E({
                                nodesTested: n, nodesFound: r
                            }
                        ), t({
                                nodesTested: n, nodesFound: r
                            }
                        ), console.groupEnd()
                    }
                ))
        }

        var F = l.FontAwesomeDetection || {}
            ,
            O = a({}
                , {
                    report: function (e) {
                        var t = e.nodesTested, n = e.nodesFound, o = {}
                        ;
                        for (var r in n) t.conflict[r] || t.noConflict[r] || (o[r] = n[r]);
                        var i = Object.keys(t.conflict).length;
                        if (0 < i) {
                            console.info("%cConflict".concat(1 < i ? "s" : "", " found:"), "color: darkred; font-size: large");
                            var c = {}
                            ;
                            for (var a in t.conflict) {
                                var s = t.conflict[a];
                                c[a] = {
                                    tagName: s.tagName,
                                    "src/href": s.src || s.href || "n/a",
                                    "innerText excerpt": s.innerText && "" !== s.innerText ? s.innerText.slice(0, 200) + "..." : "(empty)"
                                }
                            }
                            console.table(c)
                        }
                        var f = Object.keys(t.noConflict).length;
                        if (0 < f) {
                            console.info("%cNo conflict".concat(1 < f ? "s" : "", " found with ").concat(1 == f ? "this" : "these", ":"), "color: green; font-size: large");
                            var l = {}
                            ;
                            for (var u in t.noConflict) {
                                var d = t.noConflict[u];
                                l[u] = {
                                    tagName: d.tagName,
                                    "src/href": d.src || d.href || "n/a",
                                    "innerText excerpt": d.innerText && "" !== d.innerText ? d.innerText.slice(0, 200) + "..." : "(empty)"
                                }
                            }
                            console.table(l)
                        }
                        var m = Object.keys(o).length;
                        if (0 < m) {
                            console.info("%cLeftovers--we timed out before collecting test results for ".concat(1 == m ? "this" : "these", ":"), "color: blue; font-size: large");
                            var h = {}
                            ;
                            for (var g in o) {
                                var p = o[g];
                                h[g] = {
                                    tagName: p.tagName,
                                    "src/href": p.src || p.href || "n/a",
                                    "innerText excerpt": p.innerText && "" !== p.innerText ? p.innerText.slice(0, 200) + "..." : "(empty)"
                                }
                            }
                            console.table(h)
                        }
                    }
                    ,
                    timeout: +(u.currentScript.getAttribute(A) || "2000"),
                    resultsCollectionMaxWait: +(u.currentScript.getAttribute(T) || "5000")
                }
                , F, {
                    __pollUntil: D, md5ForNode: v, detectionDone: !1, nodesTested: null, nodesFound: null
                }
            );
        l.FontAwesomeDetection = O;
        var N = function () {
            try {
                return "production" === process.env.NODE_ENV
            } catch (e) {
                return !1
            }
        }
        ();
        !function (e) {
            try {
                e()
            } catch (e) {
                if (!N) throw e
            }
        }
        (function () {
                c && s && C(window.FontAwesomeDetection.report)
            }
        ),
            e.conflictDetection = C,
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }
            )
    }

    ,
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(e["fontawesome-pro-conflict-detection"] = {}
    );