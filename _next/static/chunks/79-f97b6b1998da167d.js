(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[79], {
    1879: function(e) {
        "use strict";
        e.exports = function e(t, n) {
            if (t === n)
                return !0;
            if (t && n && "object" == typeof t && "object" == typeof n) {
                if (t.constructor !== n.constructor)
                    return !1;
                if (Array.isArray(t)) {
                    if ((r = t.length) != n.length)
                        return !1;
                    for (o = r; 0 != o--; )
                        if (!e(t[o], n[o]))
                            return !1;
                    return !0
                }
                if (t instanceof Map && n instanceof Map) {
                    if (t.size !== n.size)
                        return !1;
                    for (o of t.entries())
                        if (!n.has(o[0]))
                            return !1;
                    for (o of t.entries())
                        if (!e(o[1], n.get(o[0])))
                            return !1;
                    return !0
                }
                if (t instanceof Set && n instanceof Set) {
                    if (t.size !== n.size)
                        return !1;
                    for (o of t.entries())
                        if (!n.has(o[0]))
                            return !1;
                    return !0
                }
                if (ArrayBuffer.isView(t) && ArrayBuffer.isView(n)) {
                    if ((r = t.length) != n.length)
                        return !1;
                    for (o = r; 0 != o--; )
                        if (t[o] !== n[o])
                            return !1;
                    return !0
                }
                if (t.constructor === RegExp)
                    return t.source === n.source && t.flags === n.flags;
                if (t.valueOf !== Object.prototype.valueOf)
                    return t.valueOf() === n.valueOf();
                if (t.toString !== Object.prototype.toString)
                    return t.toString() === n.toString();
                if ((r = (i = Object.keys(t)).length) !== Object.keys(n).length)
                    return !1;
                for (o = r; 0 != o--; )
                    if (!Object.prototype.hasOwnProperty.call(n, i[o]))
                        return !1;
                for (o = r; 0 != o--; ) {
                    var r, o, i, a = i[o];
                    if (("_owner" !== a || !t.$$typeof) && !e(t[a], n[a]))
                        return !1
                }
                return !0
            }
            return t != t && n != n
        }
    },
    8872: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "Image", {
            enumerable: !0,
            get: function() {
                return y
            }
        });
        let r = n(8754)
          , o = n(1757)
          , i = o._(n(7294))
          , a = n(3935)
          , l = r._(n(2636))
          , u = n(5471)
          , c = n(3735)
          , s = n(3341);
        n(4210);
        let f = n(9955)
          , d = r._(n(7746))
          , p = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };
        function m(e, t, n, r, o, i) {
            let a = null == e ? void 0 : e.src;
            if (!e || e["data-loaded-src"] === a)
                return;
            e["data-loaded-src"] = a;
            let l = "decode"in e ? e.decode() : Promise.resolve();
            l.catch(()=>{}
            ).then(()=>{
                if (e.parentElement && e.isConnected) {
                    if ("empty" !== t && o(!0),
                    null == n ? void 0 : n.current) {
                        let t = new Event("load");
                        Object.defineProperty(t, "target", {
                            writable: !1,
                            value: e
                        });
                        let r = !1
                          , o = !1;
                        n.current({
                            ...t,
                            nativeEvent: t,
                            currentTarget: e,
                            target: e,
                            isDefaultPrevented: ()=>r,
                            isPropagationStopped: ()=>o,
                            persist: ()=>{}
                            ,
                            preventDefault: ()=>{
                                r = !0,
                                t.preventDefault()
                            }
                            ,
                            stopPropagation: ()=>{
                                o = !0,
                                t.stopPropagation()
                            }
                        })
                    }
                    (null == r ? void 0 : r.current) && r.current(e)
                }
            }
            )
        }
        function v(e) {
            let[t,n] = i.version.split(".")
              , r = parseInt(t, 10)
              , o = parseInt(n, 10);
            return r > 18 || 18 === r && o >= 3 ? {
                fetchPriority: e
            } : {
                fetchpriority: e
            }
        }
        let h = (0,
        i.forwardRef)((e,t)=>{
            let {src: n, srcSet: r, sizes: o, height: a, width: l, decoding: u, className: c, style: s, fetchPriority: f, placeholder: d, loading: p, unoptimized: h, fill: g, onLoadRef: y, onLoadingCompleteRef: b, setBlurComplete: w, setShowAltText: E, onLoad: x, onError: S, ...C} = e;
            return i.default.createElement("img", {
                ...C,
                ...v(f),
                loading: p,
                width: l,
                height: a,
                decoding: u,
                "data-nimg": g ? "fill" : "1",
                className: c,
                style: s,
                sizes: o,
                srcSet: r,
                src: n,
                ref: (0,
                i.useCallback)(e=>{
                    t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)),
                    e && (S && (e.src = e.src),
                    e.complete && m(e, d, y, b, w, h))
                }
                , [n, d, y, b, w, S, h, t]),
                onLoad: e=>{
                    let t = e.currentTarget;
                    m(t, d, y, b, w, h)
                }
                ,
                onError: e=>{
                    E(!0),
                    "empty" !== d && w(!0),
                    S && S(e)
                }
            })
        }
        );
        function g(e) {
            let {isAppRouter: t, imgAttributes: n} = e
              , r = {
                as: "image",
                imageSrcSet: n.srcSet,
                imageSizes: n.sizes,
                crossOrigin: n.crossOrigin,
                referrerPolicy: n.referrerPolicy,
                ...v(n.fetchPriority)
            };
            return t && a.preload ? ((0,
            a.preload)(n.src, r),
            null) : i.default.createElement(l.default, null, i.default.createElement("link", {
                key: "__nimg-" + n.src + n.srcSet + n.sizes,
                rel: "preload",
                href: n.srcSet ? void 0 : n.src,
                ...r
            }))
        }
        let y = (0,
        i.forwardRef)((e,t)=>{
            let n = (0,
            i.useContext)(f.RouterContext)
              , r = (0,
            i.useContext)(s.ImageConfigContext)
              , o = (0,
            i.useMemo)(()=>{
                let e = p || r || c.imageConfigDefault
                  , t = [...e.deviceSizes, ...e.imageSizes].sort((e,t)=>e - t)
                  , n = e.deviceSizes.sort((e,t)=>e - t);
                return {
                    ...e,
                    allSizes: t,
                    deviceSizes: n
                }
            }
            , [r])
              , {onLoad: a, onLoadingComplete: l} = e
              , m = (0,
            i.useRef)(a);
            (0,
            i.useEffect)(()=>{
                m.current = a
            }
            , [a]);
            let v = (0,
            i.useRef)(l);
            (0,
            i.useEffect)(()=>{
                v.current = l
            }
            , [l]);
            let[y,b] = (0,
            i.useState)(!1)
              , [w,E] = (0,
            i.useState)(!1)
              , {props: x, meta: S} = (0,
            u.getImgProps)(e, {
                defaultLoader: d.default,
                imgConf: o,
                blurComplete: y,
                showAltText: w
            });
            return i.default.createElement(i.default.Fragment, null, i.default.createElement(h, {
                ...x,
                unoptimized: S.unoptimized,
                placeholder: S.placeholder,
                fill: S.fill,
                onLoadRef: m,
                onLoadingCompleteRef: v,
                setBlurComplete: b,
                setShowAltText: E,
                ref: t
            }), S.priority ? i.default.createElement(g, {
                isAppRouter: !n,
                imgAttributes: x
            }) : null)
        }
        );
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    5471: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getImgProps", {
            enumerable: !0,
            get: function() {
                return l
            }
        }),
        n(4210);
        let r = n(7757)
          , o = n(3735);
        function i(e) {
            return void 0 !== e.default
        }
        function a(e) {
            return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
        }
        function l(e, t) {
            var n;
            let l, u, c, {src: s, sizes: f, unoptimized: d=!1, priority: p=!1, loading: m, className: v, quality: h, width: g, height: y, fill: b=!1, style: w, onLoad: E, onLoadingComplete: x, placeholder: S="empty", blurDataURL: C, fetchPriority: O, layout: A, objectFit: R, objectPosition: P, lazyBoundary: M, lazyRoot: _, ...T} = e, {imgConf: k, showAltText: D, blurComplete: L, defaultLoader: I} = t, F = k || o.imageConfigDefault;
            if ("allSizes"in F)
                l = F;
            else {
                let e = [...F.deviceSizes, ...F.imageSizes].sort((e,t)=>e - t)
                  , t = F.deviceSizes.sort((e,t)=>e - t);
                l = {
                    ...F,
                    allSizes: e,
                    deviceSizes: t
                }
            }
            let j = T.loader || I;
            delete T.loader,
            delete T.srcSet;
            let N = "__next_img_default"in j;
            if (N) {
                if ("custom" === l.loader)
                    throw Error('Image with src "' + s + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
            } else {
                let e = j;
                j = t=>{
                    let {config: n, ...r} = t;
                    return e(r)
                }
            }
            if (A) {
                "fill" === A && (b = !0);
                let e = {
                    intrinsic: {
                        maxWidth: "100%",
                        height: "auto"
                    },
                    responsive: {
                        width: "100%",
                        height: "auto"
                    }
                }[A];
                e && (w = {
                    ...w,
                    ...e
                });
                let t = {
                    responsive: "100vw",
                    fill: "100vw"
                }[A];
                t && !f && (f = t)
            }
            let z = ""
              , W = a(g)
              , B = a(y);
            if ("object" == typeof (n = s) && (i(n) || void 0 !== n.src)) {
                let e = i(s) ? s.default : s;
                if (!e.src)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
                if (!e.height || !e.width)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e));
                if (u = e.blurWidth,
                c = e.blurHeight,
                C = C || e.blurDataURL,
                z = e.src,
                !b) {
                    if (W || B) {
                        if (W && !B) {
                            let t = W / e.width;
                            B = Math.round(e.height * t)
                        } else if (!W && B) {
                            let t = B / e.height;
                            W = Math.round(e.width * t)
                        }
                    } else
                        W = e.width,
                        B = e.height
                }
            }
            let $ = !p && ("lazy" === m || void 0 === m);
            (!(s = "string" == typeof s ? s : z) || s.startsWith("data:") || s.startsWith("blob:")) && (d = !0,
            $ = !1),
            l.unoptimized && (d = !0),
            N && s.endsWith(".svg") && !l.dangerouslyAllowSVG && (d = !0),
            p && (O = "high");
            let V = a(h)
              , H = Object.assign(b ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: R,
                objectPosition: P
            } : {}, D ? {} : {
                color: "transparent"
            }, w)
              , U = L || "empty" === S ? null : "blur" === S ? 'url("data:image/svg+xml;charset=utf-8,' + (0,
            r.getImageBlurSvg)({
                widthInt: W,
                heightInt: B,
                blurWidth: u,
                blurHeight: c,
                blurDataURL: C || "",
                objectFit: H.objectFit
            }) + '")' : 'url("' + S + '")'
              , K = U ? {
                backgroundSize: H.objectFit || "cover",
                backgroundPosition: H.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: U
            } : {}
              , G = function(e) {
                let {config: t, src: n, unoptimized: r, width: o, quality: i, sizes: a, loader: l} = e;
                if (r)
                    return {
                        src: n,
                        srcSet: void 0,
                        sizes: void 0
                    };
                let {widths: u, kind: c} = function(e, t, n) {
                    let {deviceSizes: r, allSizes: o} = e;
                    if (n) {
                        let e = /(^|\s)(1?\d?\d)vw/g
                          , t = [];
                        for (let r; r = e.exec(n); r)
                            t.push(parseInt(r[2]));
                        if (t.length) {
                            let e = .01 * Math.min(...t);
                            return {
                                widths: o.filter(t=>t >= r[0] * e),
                                kind: "w"
                            }
                        }
                        return {
                            widths: o,
                            kind: "w"
                        }
                    }
                    if ("number" != typeof t)
                        return {
                            widths: r,
                            kind: "w"
                        };
                    let i = [...new Set([t, 2 * t].map(e=>o.find(t=>t >= e) || o[o.length - 1]))];
                    return {
                        widths: i,
                        kind: "x"
                    }
                }(t, o, a)
                  , s = u.length - 1;
                return {
                    sizes: a || "w" !== c ? a : "100vw",
                    srcSet: u.map((e,r)=>l({
                        config: t,
                        src: n,
                        quality: i,
                        width: e
                    }) + " " + ("w" === c ? e : r + 1) + c).join(", "),
                    src: l({
                        config: t,
                        src: n,
                        quality: i,
                        width: u[s]
                    })
                }
            }({
                config: l,
                src: s,
                unoptimized: d,
                width: W,
                quality: V,
                sizes: f,
                loader: j
            })
              , Y = {
                ...T,
                loading: $ ? "lazy" : m,
                fetchPriority: O,
                width: W,
                height: B,
                decoding: "async",
                className: v,
                style: {
                    ...H,
                    ...K
                },
                sizes: G.sizes,
                srcSet: G.srcSet,
                src: G.src
            }
              , X = {
                unoptimized: d,
                priority: p,
                placeholder: S,
                fill: b
            };
            return {
                props: Y,
                meta: X
            }
        }
    },
    7757: function(e, t) {
        "use strict";
        function n(e) {
            let {widthInt: t, heightInt: n, blurWidth: r, blurHeight: o, blurDataURL: i, objectFit: a} = e
              , l = r ? 40 * r : t
              , u = o ? 40 * o : n
              , c = l && u ? "viewBox='0 0 " + l + " " + u + "'" : "";
            return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + c + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (c ? "none" : "contain" === a ? "xMidYMid" : "cover" === a ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + i + "'/%3E%3C/svg%3E"
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getImageBlurSvg", {
            enumerable: !0,
            get: function() {
                return n
            }
        })
    },
    2555: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            default: function() {
                return c
            },
            unstable_getImgProps: function() {
                return u
            }
        });
        let r = n(8754)
          , o = n(5471)
          , i = n(4210)
          , a = n(8872)
          , l = r._(n(7746))
          , u = e=>{
            (0,
            i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
            let {props: t} = (0,
            o.getImgProps)(e, {
                defaultLoader: l.default,
                imgConf: {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                }
            });
            for (let[e,n] of Object.entries(t))
                void 0 === n && delete t[e];
            return {
                props: t
            }
        }
          , c = a.Image
    },
    7746: function(e, t) {
        "use strict";
        function n(e) {
            let {config: t, src: n, width: r, quality: o} = e;
            return t.path + "?url=" + encodeURIComponent(n) + "&w=" + r + "&q=" + (o || 75)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return r
            }
        }),
        n.__next_img_default = !0;
        let r = n
    },
    5675: function(e, t, n) {
        e.exports = n(2555)
    },
    9185: function(e, t, n) {
        "use strict";
        var r, o, i = n(1248), a = n.n(i), l = n(7294), u = n(1879), c = n.n(u), s = n(1697), f = n.n(s);
        function d() {
            return (d = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function p(e, t) {
            return e(t = {
                exports: {}
            }, t.exports),
            t.exports
        }
        /** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
        var m = "function" == typeof Symbol && Symbol.for
          , v = m ? Symbol.for("react.element") : 60103
          , h = m ? Symbol.for("react.portal") : 60106
          , g = m ? Symbol.for("react.fragment") : 60107
          , y = m ? Symbol.for("react.strict_mode") : 60108
          , b = m ? Symbol.for("react.profiler") : 60114
          , w = m ? Symbol.for("react.provider") : 60109
          , E = m ? Symbol.for("react.context") : 60110
          , x = m ? Symbol.for("react.async_mode") : 60111
          , S = m ? Symbol.for("react.concurrent_mode") : 60111
          , C = m ? Symbol.for("react.forward_ref") : 60112
          , O = m ? Symbol.for("react.suspense") : 60113
          , A = m ? Symbol.for("react.suspense_list") : 60120
          , R = m ? Symbol.for("react.memo") : 60115
          , P = m ? Symbol.for("react.lazy") : 60116
          , M = m ? Symbol.for("react.block") : 60121
          , _ = m ? Symbol.for("react.fundamental") : 60117
          , T = m ? Symbol.for("react.responder") : 60118
          , k = m ? Symbol.for("react.scope") : 60119;
        function D(e) {
            if ("object" == typeof e && null !== e) {
                var t = e.$$typeof;
                switch (t) {
                case v:
                    switch (e = e.type) {
                    case x:
                    case S:
                    case g:
                    case b:
                    case y:
                    case O:
                        return e;
                    default:
                        switch (e = e && e.$$typeof) {
                        case E:
                        case C:
                        case P:
                        case R:
                        case w:
                            return e;
                        default:
                            return t
                        }
                    }
                case h:
                    return t
                }
            }
        }
        function L(e) {
            return D(e) === S
        }
        var I = {
            AsyncMode: x,
            ConcurrentMode: S,
            ContextConsumer: E,
            ContextProvider: w,
            Element: v,
            ForwardRef: C,
            Fragment: g,
            Lazy: P,
            Memo: R,
            Portal: h,
            Profiler: b,
            StrictMode: y,
            Suspense: O,
            isAsyncMode: function(e) {
                return L(e) || D(e) === x
            },
            isConcurrentMode: L,
            isContextConsumer: function(e) {
                return D(e) === E
            },
            isContextProvider: function(e) {
                return D(e) === w
            },
            isElement: function(e) {
                return "object" == typeof e && null !== e && e.$$typeof === v
            },
            isForwardRef: function(e) {
                return D(e) === C
            },
            isFragment: function(e) {
                return D(e) === g
            },
            isLazy: function(e) {
                return D(e) === P
            },
            isMemo: function(e) {
                return D(e) === R
            },
            isPortal: function(e) {
                return D(e) === h
            },
            isProfiler: function(e) {
                return D(e) === b
            },
            isStrictMode: function(e) {
                return D(e) === y
            },
            isSuspense: function(e) {
                return D(e) === O
            },
            isValidElementType: function(e) {
                return "string" == typeof e || "function" == typeof e || e === g || e === S || e === b || e === y || e === O || e === A || "object" == typeof e && null !== e && (e.$$typeof === P || e.$$typeof === R || e.$$typeof === w || e.$$typeof === E || e.$$typeof === C || e.$$typeof === _ || e.$$typeof === T || e.$$typeof === k || e.$$typeof === M)
            },
            typeOf: D
        };
        function F() {}
        function j() {}
        p(function(e, t) {}),
        p(function(e) {
            e.exports = I
        }),
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable,
        function() {
            try {
                if (!Object.assign)
                    return !1;
                var e = new String("abc");
                if (e[5] = "de",
                "5" === Object.getOwnPropertyNames(e)[0])
                    return !1;
                for (var t = {}, n = 0; n < 10; n++)
                    t["_" + String.fromCharCode(n)] = n;
                var r = Object.getOwnPropertyNames(t).map(function(e) {
                    return t[e]
                });
                if ("0123456789" !== r.join(""))
                    return !1;
                var o = {};
                "abcdefghijklmnopqrst".split("").forEach(function(e) {
                    o[e] = e
                }),
                Object.keys(Object.assign({}, o)).join("")
            } catch (e) {
                return !1
            }
        }(),
        Function.call.bind(Object.prototype.hasOwnProperty),
        j.resetWarningCache = F;
        var N = function() {
            function e(e, t, n, r, o, i) {
                if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== i) {
                    var a = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw a.name = "Invariant Violation",
                    a
                }
            }
            function t() {
                return e
            }
            e.isRequired = e;
            var n = {
                array: e,
                bigint: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: j,
                resetWarningCache: F
            };
            return n.PropTypes = n,
            n
        }
          , z = p(function(e) {
            e.exports = N()
        })
          , W = {
            animationData: z.object,
            path: z.string,
            play: z.bool,
            goTo: z.number,
            speed: z.number,
            direction: z.number,
            loop: z.oneOfType([z.number, z.bool]),
            useSubframes: z.bool,
            segments: z.oneOfType([z.arrayOf(z.number), z.bool]),
            rendererSettings: z.object,
            renderer: z.string,
            audioFactory: z.func,
            onComplete: z.func,
            onLoopComplete: z.func,
            onEnterFrame: z.func,
            onSegmentStart: z.func
        }
          , B = {}
          , $ = function() {}
          , V = (r = a().loadAnimation,
        (o = (0,
        l.memo)((0,
        l.forwardRef)(function(e, t) {
            var n = e.animationData
              , o = void 0 === n ? null : n
              , i = e.path
              , a = void 0 === i ? null : i
              , u = e.play
              , s = void 0 === u ? null : u
              , p = e.speed
              , m = void 0 === p ? 1 : p
              , v = e.direction
              , h = void 0 === v ? 1 : v
              , g = e.segments
              , y = void 0 === g ? null : g
              , b = e.goTo
              , w = void 0 === b ? null : b
              , E = e.useSubframes
              , x = void 0 === E || E
              , S = e.renderer
              , C = void 0 === S ? "svg" : S
              , O = e.loop
              , A = void 0 === O || O
              , R = e.rendererSettings
              , P = void 0 === R ? B : R
              , M = e.audioFactory
              , _ = void 0 === M ? null : M
              , T = e.onLoad
              , k = void 0 === T ? $ : T
              , D = e.onComplete
              , L = void 0 === D ? $ : D
              , I = e.onLoopComplete
              , F = void 0 === I ? $ : I
              , j = e.onEnterFrame
              , N = void 0 === j ? $ : j
              , z = e.onSegmentStart
              , W = void 0 === z ? $ : z
              , V = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    t.indexOf(n = i[r]) >= 0 || (o[n] = e[n]);
                return o
            }(e, ["animationData", "path", "play", "speed", "direction", "segments", "goTo", "useSubframes", "renderer", "loop", "rendererSettings", "audioFactory", "onLoad", "onComplete", "onLoopComplete", "onEnterFrame", "onSegmentStart"])
              , H = (0,
            l.useRef)()
              , U = (0,
            l.useRef)()
              , K = (0,
            l.useState)(!1)
              , G = K[0]
              , Y = K[1]
              , X = (0,
            l.useState)(y)
              , q = X[0]
              , Z = X[1];
            (0,
            l.useEffect)(function() {
                c()(q, y) || Z(y)
            }, [y, q]);
            var J = (0,
            l.useState)(P)
              , Q = J[0]
              , ee = J[1];
            (0,
            l.useEffect)(function() {
                c()(Q, P) || ee(P)
            }, [P, Q]),
            (0,
            l.useEffect)(function() {
                return function() {
                    return U.current.removeEventListener("complete", L)
                }
            }, [L]),
            (0,
            l.useEffect)(function() {
                return function() {
                    return U.current.removeEventListener("loopComplete", F)
                }
            }, [F]),
            (0,
            l.useEffect)(function() {
                return function() {
                    return U.current.removeEventListener("enterFrame", N)
                }
            }, [N]),
            (0,
            l.useEffect)(function() {
                return function() {
                    return U.current.removeEventListener("segmentStart", W)
                }
            }, [W]),
            (0,
            l.useEffect)(function() {
                return function() {
                    return U.current.removeEventListener("DOMLoaded", k)
                }
            }, [k]);
            var et = (0,
            l.useCallback)(function(e) {
                U.current = e,
                t && (t.current = e)
            }, []);
            (0,
            l.useEffect)(function() {
                et(r({
                    animationData: null == o || "object" != typeof o ? o : "object" == typeof o.default ? f()(o.default) : f()(o),
                    path: a,
                    container: H.current,
                    renderer: C,
                    loop: !1,
                    autoplay: !1,
                    rendererSettings: Q,
                    audioFactory: _
                }));
                var e = function() {
                    return Y(!0)
                };
                return U.current.addEventListener("DOMLoaded", e),
                function() {
                    U.current.removeEventListener("DOMLoaded", e),
                    Y(!1),
                    U.current.destroy(),
                    et(void 0)
                }
            }, [A, C, Q, o, a, _, et]),
            (0,
            l.useEffect)(function() {
                U.current.addEventListener("DOMLoaded", k)
            }, [k]),
            (0,
            l.useEffect)(function() {
                U.current.addEventListener("complete", L)
            }, [L]),
            (0,
            l.useEffect)(function() {
                U.current.addEventListener("loopComplete", F)
            }, [F]),
            (0,
            l.useEffect)(function() {
                U.current.addEventListener("enterFrame", N)
            }, [N]),
            (0,
            l.useEffect)(function() {
                U.current.addEventListener("segmentStart", W)
            }, [W]),
            (0,
            l.useEffect)(function() {
                G && (U.current.loop = A)
            }, [G, A]);
            var en = (0,
            l.useRef)(!1);
            return (0,
            l.useEffect)(function() {
                G && (!0 === s ? q ? (U.current.playSegments(q, !0),
                en.current = !0,
                -1 === h && e(q[1])) : (en.current && U.current.resetSegments(!0),
                en.current = !1,
                -1 === h ? e(U.current.getDuration(!0)) : U.current.play()) : !1 === s && U.current.pause());
                function e(e) {
                    U.current.goToAndPlay(e, !0),
                    U.current.setDirection(h)
                }
            }, [s, q, G, h]),
            (0,
            l.useEffect)(function() {
                G && (Number.isNaN(m) || U.current.setSpeed(m))
            }, [m, G]),
            (0,
            l.useEffect)(function() {
                G && U.current.setDirection(h)
            }, [h, G]),
            (0,
            l.useEffect)(function() {
                G && null != w && (s ? U.current.goToAndPlay(w, !0) : U.current.goToAndStop(w, !0))
            }, [w, s, G]),
            (0,
            l.useEffect)(function() {
                U.current.setSubframe && U.current.setSubframe(x)
            }, [x]),
            l.createElement("div", d({}, V, {
                ref: H
            }))
        }))).propTypes = W,
        o);
        t.Z = V
    },
    1697: function(e, t, n) {
        "use strict";
        e.exports = n(3188)()
    },
    3188: function(e, t, n) {
        "use strict";
        var r = n(1876).Buffer;
        function o(e) {
            return e instanceof r ? r.from(e) : new e.constructor(e.buffer.slice(),e.byteOffset,e.length)
        }
        e.exports = function(e) {
            if ((e = e || {}).circles)
                return function(e) {
                    var t = []
                      , n = [];
                    return e.proto ? function e(i) {
                        if ("object" != typeof i || null === i)
                            return i;
                        if (i instanceof Date)
                            return new Date(i);
                        if (Array.isArray(i))
                            return r(i, e);
                        if (i instanceof Map)
                            return new Map(r(Array.from(i), e));
                        if (i instanceof Set)
                            return new Set(r(Array.from(i), e));
                        var a = {};
                        for (var l in t.push(i),
                        n.push(a),
                        i) {
                            var u = i[l];
                            if ("object" != typeof u || null === u)
                                a[l] = u;
                            else if (u instanceof Date)
                                a[l] = new Date(u);
                            else if (u instanceof Map)
                                a[l] = new Map(r(Array.from(u), e));
                            else if (u instanceof Set)
                                a[l] = new Set(r(Array.from(u), e));
                            else if (ArrayBuffer.isView(u))
                                a[l] = o(u);
                            else {
                                var c = t.indexOf(u);
                                -1 !== c ? a[l] = n[c] : a[l] = e(u)
                            }
                        }
                        return t.pop(),
                        n.pop(),
                        a
                    }
                    : function e(i) {
                        if ("object" != typeof i || null === i)
                            return i;
                        if (i instanceof Date)
                            return new Date(i);
                        if (Array.isArray(i))
                            return r(i, e);
                        if (i instanceof Map)
                            return new Map(r(Array.from(i), e));
                        if (i instanceof Set)
                            return new Set(r(Array.from(i), e));
                        var a = {};
                        for (var l in t.push(i),
                        n.push(a),
                        i)
                            if (!1 !== Object.hasOwnProperty.call(i, l)) {
                                var u = i[l];
                                if ("object" != typeof u || null === u)
                                    a[l] = u;
                                else if (u instanceof Date)
                                    a[l] = new Date(u);
                                else if (u instanceof Map)
                                    a[l] = new Map(r(Array.from(u), e));
                                else if (u instanceof Set)
                                    a[l] = new Set(r(Array.from(u), e));
                                else if (ArrayBuffer.isView(u))
                                    a[l] = o(u);
                                else {
                                    var c = t.indexOf(u);
                                    -1 !== c ? a[l] = n[c] : a[l] = e(u)
                                }
                            }
                        return t.pop(),
                        n.pop(),
                        a
                    }
                    ;
                    function r(e, r) {
                        for (var i = Object.keys(e), a = Array(i.length), l = 0; l < i.length; l++) {
                            var u = i[l]
                              , c = e[u];
                            if ("object" != typeof c || null === c)
                                a[u] = c;
                            else if (c instanceof Date)
                                a[u] = new Date(c);
                            else if (ArrayBuffer.isView(c))
                                a[u] = o(c);
                            else {
                                var s = t.indexOf(c);
                                -1 !== s ? a[u] = n[s] : a[u] = r(c)
                            }
                        }
                        return a
                    }
                }(e);
            return e.proto ? function e(n) {
                if ("object" != typeof n || null === n)
                    return n;
                if (n instanceof Date)
                    return new Date(n);
                if (Array.isArray(n))
                    return t(n, e);
                if (n instanceof Map)
                    return new Map(t(Array.from(n), e));
                if (n instanceof Set)
                    return new Set(t(Array.from(n), e));
                var r = {};
                for (var i in n) {
                    var a = n[i];
                    "object" != typeof a || null === a ? r[i] = a : a instanceof Date ? r[i] = new Date(a) : a instanceof Map ? r[i] = new Map(t(Array.from(a), e)) : a instanceof Set ? r[i] = new Set(t(Array.from(a), e)) : ArrayBuffer.isView(a) ? r[i] = o(a) : r[i] = e(a)
                }
                return r
            }
            : function e(n) {
                if ("object" != typeof n || null === n)
                    return n;
                if (n instanceof Date)
                    return new Date(n);
                if (Array.isArray(n))
                    return t(n, e);
                if (n instanceof Map)
                    return new Map(t(Array.from(n), e));
                if (n instanceof Set)
                    return new Set(t(Array.from(n), e));
                var r = {};
                for (var i in n)
                    if (!1 !== Object.hasOwnProperty.call(n, i)) {
                        var a = n[i];
                        "object" != typeof a || null === a ? r[i] = a : a instanceof Date ? r[i] = new Date(a) : a instanceof Map ? r[i] = new Map(t(Array.from(a), e)) : a instanceof Set ? r[i] = new Set(t(Array.from(a), e)) : ArrayBuffer.isView(a) ? r[i] = o(a) : r[i] = e(a)
                    }
                return r
            }
            ;
            function t(e, t) {
                for (var n = Object.keys(e), r = Array(n.length), i = 0; i < n.length; i++) {
                    var a = n[i]
                      , l = e[a];
                    "object" != typeof l || null === l ? r[a] = l : l instanceof Date ? r[a] = new Date(l) : ArrayBuffer.isView(l) ? r[a] = o(l) : r[a] = t(l)
                }
                return r
            }
        }
    },
    619: function(e, t, n) {
        "use strict";
        var r = n(7294);
        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        t.Z = function(e, t) {
            void 0 === t && (t = {});
            var i = t
              , a = i.volume
              , l = void 0 === a ? 1 : a
              , u = i.playbackRate
              , c = void 0 === u ? 1 : u
              , s = i.soundEnabled
              , f = void 0 === s || s
              , d = i.interrupt
              , p = void 0 !== d && d
              , m = i.onload
              , v = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    t.indexOf(n = i[r]) >= 0 || (o[n] = e[n]);
                return o
            }(i, ["id", "volume", "playbackRate", "soundEnabled", "interrupt", "onload"])
              , h = r.useRef(null)
              , g = r.useRef(!1)
              , y = r.useState(null)
              , b = y[0]
              , w = y[1]
              , E = r.useState(null)
              , x = E[0]
              , S = E[1]
              , C = function() {
                "function" == typeof m && m.call(this),
                g.current && w(1e3 * this.duration()),
                S(this)
            };
            (0,
            r.useEffect)(function() {
                return n.e(766).then(n.t.bind(n, 1766, 23)).then(function(t) {
                    if (!g.current) {
                        var n;
                        h.current = null !== (n = t.Howl) && void 0 !== n ? n : t.default.Howl,
                        g.current = !0,
                        new h.current(o({
                            src: Array.isArray(e) ? e : [e],
                            volume: l,
                            rate: c,
                            onload: C
                        }, v))
                    }
                }),
                function() {
                    g.current = !1
                }
            }, []),
            r.useEffect(function() {
                h.current && x && S(new h.current(o({
                    src: Array.isArray(e) ? e : [e],
                    volume: l,
                    onload: C
                }, v)))
            }, [JSON.stringify(e)]),
            r.useEffect(function() {
                x && (x.volume(l),
                x.rate(c))
            }, [l, c]);
            var O = r.useCallback(function(e) {
                void 0 === e && (e = {}),
                x && (f || e.forceSoundEnabled) && (p && x.stop(),
                e.playbackRate && x.rate(e.playbackRate),
                x.play(e.id))
            }, [x, f, p])
              , A = r.useCallback(function(e) {
                x && x.stop(e)
            }, [x])
              , R = r.useCallback(function(e) {
                x && x.pause(e)
            }, [x]);
            return [O, {
                sound: x,
                stop: A,
                pause: R,
                duration: b
            }]
        }
    },
    2066: function(e, t, n) {
        "use strict";
        let r, o;
        function i() {
            return (i = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        n.d(t, {
            VY: function() {
                return n7
            },
            ck: function() {
                return n4
            },
            Uv: function() {
                return n6
            },
            fC: function() {
                return n5
            },
            xz: function() {
                return n3
            }
        });
        var a, l, u, c, s, f, d = n(7294), p = n.t(d, 2);
        function m(e, t, {checkForDefaultPrevented: n=!0}={}) {
            return function(r) {
                if (null == e || e(r),
                !1 === n || !r.defaultPrevented)
                    return null == t ? void 0 : t(r)
            }
        }
        function v(e, t=[]) {
            let n = []
              , r = ()=>{
                let t = n.map(e=>(0,
                d.createContext)(e));
                return function(n) {
                    let r = (null == n ? void 0 : n[e]) || t;
                    return (0,
                    d.useMemo)(()=>({
                        [`__scope${e}`]: {
                            ...n,
                            [e]: r
                        }
                    }), [n, r])
                }
            }
            ;
            return r.scopeName = e,
            [function(t, r) {
                let o = (0,
                d.createContext)(r)
                  , i = n.length;
                function a(t) {
                    let {scope: n, children: r, ...a} = t
                      , l = (null == n ? void 0 : n[e][i]) || o
                      , u = (0,
                    d.useMemo)(()=>a, Object.values(a));
                    return (0,
                    d.createElement)(l.Provider, {
                        value: u
                    }, r)
                }
                return n = [...n, r],
                a.displayName = t + "Provider",
                [a, function(n, a) {
                    let l = (null == a ? void 0 : a[e][i]) || o
                      , u = (0,
                    d.useContext)(l);
                    if (u)
                        return u;
                    if (void 0 !== r)
                        return r;
                    throw Error(`\`${n}\` must be used within \`${t}\``)
                }
                ]
            }
            , function(...e) {
                let t = e[0];
                if (1 === e.length)
                    return t;
                let n = ()=>{
                    let n = e.map(e=>({
                        useScope: e(),
                        scopeName: e.scopeName
                    }));
                    return function(e) {
                        let r = n.reduce((t,{useScope: n, scopeName: r})=>{
                            let o = n(e)
                              , i = o[`__scope${r}`];
                            return {
                                ...t,
                                ...i
                            }
                        }
                        , {});
                        return (0,
                        d.useMemo)(()=>({
                            [`__scope${t.scopeName}`]: r
                        }), [r])
                    }
                }
                ;
                return n.scopeName = t.scopeName,
                n
            }(r, ...t)]
        }
        var h = n(3935);
        function g(...e) {
            return t=>e.forEach(e=>{
                "function" == typeof e ? e(t) : null != e && (e.current = t)
            }
            )
        }
        function y(...e) {
            return (0,
            d.useCallback)(g(...e), e)
        }
        let b = (0,
        d.forwardRef)((e,t)=>{
            let {children: n, ...r} = e
              , o = d.Children.toArray(n)
              , a = o.find(x);
            if (a) {
                let e = a.props.children
                  , n = o.map(t=>t !== a ? t : d.Children.count(e) > 1 ? d.Children.only(null) : (0,
                d.isValidElement)(e) ? e.props.children : null);
                return (0,
                d.createElement)(w, i({}, r, {
                    ref: t
                }), (0,
                d.isValidElement)(e) ? (0,
                d.cloneElement)(e, void 0, n) : null)
            }
            return (0,
            d.createElement)(w, i({}, r, {
                ref: t
            }), n)
        }
        );
        b.displayName = "Slot";
        let w = (0,
        d.forwardRef)((e,t)=>{
            let {children: n, ...r} = e;
            return (0,
            d.isValidElement)(n) ? (0,
            d.cloneElement)(n, {
                ...function(e, t) {
                    let n = {
                        ...t
                    };
                    for (let r in t) {
                        let o = e[r]
                          , i = t[r]
                          , a = /^on[A-Z]/.test(r);
                        a ? o && i ? n[r] = (...e)=>{
                            i(...e),
                            o(...e)
                        }
                        : o && (n[r] = o) : "style" === r ? n[r] = {
                            ...o,
                            ...i
                        } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                    }
                    return {
                        ...e,
                        ...n
                    }
                }(r, n.props),
                ref: t ? g(t, n.ref) : n.ref
            }) : d.Children.count(n) > 1 ? d.Children.only(null) : null
        }
        );
        w.displayName = "SlotClone";
        let E = ({children: e})=>(0,
        d.createElement)(d.Fragment, null, e);
        function x(e) {
            return (0,
            d.isValidElement)(e) && e.type === E
        }
        let S = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e,t)=>{
            let n = (0,
            d.forwardRef)((e,n)=>{
                let {asChild: r, ...o} = e
                  , a = r ? b : t;
                return (0,
                d.useEffect)(()=>{
                    window[Symbol.for("radix-ui")] = !0
                }
                , []),
                (0,
                d.createElement)(a, i({}, o, {
                    ref: n
                }))
            }
            );
            return n.displayName = `Primitive.${t}`,
            {
                ...e,
                [t]: n
            }
        }
        , {});
        function C(e, t) {
            e && (0,
            h.flushSync)(()=>e.dispatchEvent(t))
        }
        function O(e) {
            let t = e + "CollectionProvider"
              , [n,r] = v(t)
              , [o,i] = n(t, {
                collectionRef: {
                    current: null
                },
                itemMap: new Map
            })
              , a = e + "CollectionSlot"
              , l = d.forwardRef((e,t)=>{
                let {scope: n, children: r} = e
                  , o = i(a, n)
                  , l = y(t, o.collectionRef);
                return d.createElement(b, {
                    ref: l
                }, r)
            }
            )
              , u = e + "CollectionItemSlot"
              , c = "data-radix-collection-item"
              , s = d.forwardRef((e,t)=>{
                let {scope: n, children: r, ...o} = e
                  , a = d.useRef(null)
                  , l = y(t, a)
                  , s = i(u, n);
                return d.useEffect(()=>(s.itemMap.set(a, {
                    ref: a,
                    ...o
                }),
                ()=>void s.itemMap.delete(a))),
                d.createElement(b, {
                    [c]: "",
                    ref: l
                }, r)
            }
            );
            return [{
                Provider: e=>{
                    let {scope: t, children: n} = e
                      , r = d.useRef(null)
                      , i = d.useRef(new Map).current;
                    return d.createElement(o, {
                        scope: t,
                        itemMap: i,
                        collectionRef: r
                    }, n)
                }
                ,
                Slot: l,
                ItemSlot: s
            }, function(t) {
                let n = i(e + "CollectionConsumer", t)
                  , r = d.useCallback(()=>{
                    let e = n.collectionRef.current;
                    if (!e)
                        return [];
                    let t = Array.from(e.querySelectorAll(`[${c}]`))
                      , r = Array.from(n.itemMap.values())
                      , o = r.sort((e,n)=>t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
                    return o
                }
                , [n.collectionRef, n.itemMap]);
                return r
            }
            , r]
        }
        let A = (0,
        d.createContext)(void 0);
        function R(e) {
            let t = (0,
            d.useContext)(A);
            return e || t || "ltr"
        }
        function P(e) {
            let t = (0,
            d.useRef)(e);
            return (0,
            d.useEffect)(()=>{
                t.current = e
            }
            ),
            (0,
            d.useMemo)(()=>(...e)=>{
                var n;
                return null === (n = t.current) || void 0 === n ? void 0 : n.call(t, ...e)
            }
            , [])
        }
        let M = "dismissableLayer.update"
          , _ = (0,
        d.createContext)({
            layers: new Set,
            layersWithOutsidePointerEventsDisabled: new Set,
            branches: new Set
        })
          , T = (0,
        d.forwardRef)((e,t)=>{
            var n;
            let {disableOutsidePointerEvents: o=!1, onEscapeKeyDown: a, onPointerDownOutside: l, onFocusOutside: u, onInteractOutside: c, onDismiss: s, ...f} = e
              , p = (0,
            d.useContext)(_)
              , [v,h] = (0,
            d.useState)(null)
              , g = null !== (n = null == v ? void 0 : v.ownerDocument) && void 0 !== n ? n : null == globalThis ? void 0 : globalThis.document
              , [,b] = (0,
            d.useState)({})
              , w = y(t, e=>h(e))
              , E = Array.from(p.layers)
              , [x] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1)
              , C = E.indexOf(x)
              , O = v ? E.indexOf(v) : -1
              , A = p.layersWithOutsidePointerEventsDisabled.size > 0
              , R = O >= C
              , T = function(e, t=null == globalThis ? void 0 : globalThis.document) {
                let n = P(e)
                  , r = (0,
                d.useRef)(!1)
                  , o = (0,
                d.useRef)(()=>{}
                );
                return (0,
                d.useEffect)(()=>{
                    let e = e=>{
                        if (e.target && !r.current) {
                            let r = {
                                originalEvent: e
                            };
                            function i() {
                                D("dismissableLayer.pointerDownOutside", n, r, {
                                    discrete: !0
                                })
                            }
                            "touch" === e.pointerType ? (t.removeEventListener("click", o.current),
                            o.current = i,
                            t.addEventListener("click", o.current, {
                                once: !0
                            })) : i()
                        } else
                            t.removeEventListener("click", o.current);
                        r.current = !1
                    }
                      , i = window.setTimeout(()=>{
                        t.addEventListener("pointerdown", e)
                    }
                    , 0);
                    return ()=>{
                        window.clearTimeout(i),
                        t.removeEventListener("pointerdown", e),
                        t.removeEventListener("click", o.current)
                    }
                }
                , [t, n]),
                {
                    onPointerDownCapture: ()=>r.current = !0
                }
            }(e=>{
                let t = e.target
                  , n = [...p.branches].some(e=>e.contains(t));
                !R || n || (null == l || l(e),
                null == c || c(e),
                e.defaultPrevented || null == s || s())
            }
            , g)
              , L = function(e, t=null == globalThis ? void 0 : globalThis.document) {
                let n = P(e)
                  , r = (0,
                d.useRef)(!1);
                return (0,
                d.useEffect)(()=>{
                    let e = e=>{
                        e.target && !r.current && D("dismissableLayer.focusOutside", n, {
                            originalEvent: e
                        }, {
                            discrete: !1
                        })
                    }
                    ;
                    return t.addEventListener("focusin", e),
                    ()=>t.removeEventListener("focusin", e)
                }
                , [t, n]),
                {
                    onFocusCapture: ()=>r.current = !0,
                    onBlurCapture: ()=>r.current = !1
                }
            }(e=>{
                let t = e.target
                  , n = [...p.branches].some(e=>e.contains(t));
                n || (null == u || u(e),
                null == c || c(e),
                e.defaultPrevented || null == s || s())
            }
            , g);
            return !function(e, t=null == globalThis ? void 0 : globalThis.document) {
                let n = P(e);
                (0,
                d.useEffect)(()=>{
                    let e = e=>{
                        "Escape" === e.key && n(e)
                    }
                    ;
                    return t.addEventListener("keydown", e),
                    ()=>t.removeEventListener("keydown", e)
                }
                , [n, t])
            }(e=>{
                let t = O === p.layers.size - 1;
                t && (null == a || a(e),
                !e.defaultPrevented && s && (e.preventDefault(),
                s()))
            }
            , g),
            (0,
            d.useEffect)(()=>{
                if (v)
                    return o && (0 === p.layersWithOutsidePointerEventsDisabled.size && (r = g.body.style.pointerEvents,
                    g.body.style.pointerEvents = "none"),
                    p.layersWithOutsidePointerEventsDisabled.add(v)),
                    p.layers.add(v),
                    k(),
                    ()=>{
                        o && 1 === p.layersWithOutsidePointerEventsDisabled.size && (g.body.style.pointerEvents = r)
                    }
            }
            , [v, g, o, p]),
            (0,
            d.useEffect)(()=>()=>{
                v && (p.layers.delete(v),
                p.layersWithOutsidePointerEventsDisabled.delete(v),
                k())
            }
            , [v, p]),
            (0,
            d.useEffect)(()=>{
                let e = ()=>b({});
                return document.addEventListener(M, e),
                ()=>document.removeEventListener(M, e)
            }
            , []),
            (0,
            d.createElement)(S.div, i({}, f, {
                ref: w,
                style: {
                    pointerEvents: A ? R ? "auto" : "none" : void 0,
                    ...e.style
                },
                onFocusCapture: m(e.onFocusCapture, L.onFocusCapture),
                onBlurCapture: m(e.onBlurCapture, L.onBlurCapture),
                onPointerDownCapture: m(e.onPointerDownCapture, T.onPointerDownCapture)
            }))
        }
        );
        function k() {
            let e = new CustomEvent(M);
            document.dispatchEvent(e)
        }
        function D(e, t, n, {discrete: r}) {
            let o = n.originalEvent.target
              , i = new CustomEvent(e,{
                bubbles: !1,
                cancelable: !0,
                detail: n
            });
            t && o.addEventListener(e, t, {
                once: !0
            }),
            r ? C(o, i) : o.dispatchEvent(i)
        }
        let L = 0;
        function I() {
            let e = document.createElement("span");
            return e.setAttribute("data-radix-focus-guard", ""),
            e.tabIndex = 0,
            e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none",
            e
        }
        let F = "focusScope.autoFocusOnMount"
          , j = "focusScope.autoFocusOnUnmount"
          , N = {
            bubbles: !1,
            cancelable: !0
        }
          , z = (0,
        d.forwardRef)((e,t)=>{
            let {loop: n=!1, trapped: r=!1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...l} = e
              , [u,c] = (0,
            d.useState)(null)
              , s = P(o)
              , f = P(a)
              , p = (0,
            d.useRef)(null)
              , m = y(t, e=>c(e))
              , v = (0,
            d.useRef)({
                paused: !1,
                pause() {
                    this.paused = !0
                },
                resume() {
                    this.paused = !1
                }
            }).current;
            (0,
            d.useEffect)(()=>{
                if (r) {
                    function e(e) {
                        if (v.paused || !u)
                            return;
                        let t = e.target;
                        u.contains(t) ? p.current = t : $(p.current, {
                            select: !0
                        })
                    }
                    function t(e) {
                        if (v.paused || !u)
                            return;
                        let t = e.relatedTarget;
                        null === t || u.contains(t) || $(p.current, {
                            select: !0
                        })
                    }
                    document.addEventListener("focusin", e),
                    document.addEventListener("focusout", t);
                    let n = new MutationObserver(function(e) {
                        let t = document.activeElement;
                        if (t === document.body)
                            for (let t of e)
                                t.removedNodes.length > 0 && $(u)
                    }
                    );
                    return u && n.observe(u, {
                        childList: !0,
                        subtree: !0
                    }),
                    ()=>{
                        document.removeEventListener("focusin", e),
                        document.removeEventListener("focusout", t),
                        n.disconnect()
                    }
                }
            }
            , [r, u, v.paused]),
            (0,
            d.useEffect)(()=>{
                if (u) {
                    V.add(v);
                    let e = document.activeElement
                      , t = u.contains(e);
                    if (!t) {
                        let t = new CustomEvent(F,N);
                        u.addEventListener(F, s),
                        u.dispatchEvent(t),
                        t.defaultPrevented || (function(e, {select: t=!1}={}) {
                            let n = document.activeElement;
                            for (let r of e)
                                if ($(r, {
                                    select: t
                                }),
                                document.activeElement !== n)
                                    return
                        }(W(u).filter(e=>"A" !== e.tagName), {
                            select: !0
                        }),
                        document.activeElement === e && $(u))
                    }
                    return ()=>{
                        u.removeEventListener(F, s),
                        setTimeout(()=>{
                            let t = new CustomEvent(j,N);
                            u.addEventListener(j, f),
                            u.dispatchEvent(t),
                            t.defaultPrevented || $(null != e ? e : document.body, {
                                select: !0
                            }),
                            u.removeEventListener(j, f),
                            V.remove(v)
                        }
                        , 0)
                    }
                }
            }
            , [u, s, f, v]);
            let h = (0,
            d.useCallback)(e=>{
                if (!n && !r || v.paused)
                    return;
                let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey
                  , o = document.activeElement;
                if (t && o) {
                    let t = e.currentTarget
                      , [r,i] = function(e) {
                        let t = W(e)
                          , n = B(t, e)
                          , r = B(t.reverse(), e);
                        return [n, r]
                    }(t)
                      , a = r && i;
                    a ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(),
                    n && $(i, {
                        select: !0
                    })) : (e.preventDefault(),
                    n && $(r, {
                        select: !0
                    })) : o === t && e.preventDefault()
                }
            }
            , [n, r, v.paused]);
            return (0,
            d.createElement)(S.div, i({
                tabIndex: -1
            }, l, {
                ref: m,
                onKeyDown: h
            }))
        }
        );
        function W(e) {
            let t = []
              , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: e=>{
                    let t = "INPUT" === e.tagName && "hidden" === e.type;
                    return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                }
            });
            for (; n.nextNode(); )
                t.push(n.currentNode);
            return t
        }
        function B(e, t) {
            for (let n of e)
                if (!function(e, {upTo: t}) {
                    if ("hidden" === getComputedStyle(e).visibility)
                        return !0;
                    for (; e && (void 0 === t || e !== t); ) {
                        if ("none" === getComputedStyle(e).display)
                            return !0;
                        e = e.parentElement
                    }
                    return !1
                }(n, {
                    upTo: t
                }))
                    return n
        }
        function $(e, {select: t=!1}={}) {
            if (e && e.focus) {
                var n;
                let r = document.activeElement;
                e.focus({
                    preventScroll: !0
                }),
                e !== r && (n = e)instanceof HTMLInputElement && "select"in n && t && e.select()
            }
        }
        let V = (o = [],
        {
            add(e) {
                let t = o[0];
                e !== t && (null == t || t.pause()),
                (o = H(o, e)).unshift(e)
            },
            remove(e) {
                var t;
                null === (t = (o = H(o, e))[0]) || void 0 === t || t.resume()
            }
        });
        function H(e, t) {
            let n = [...e]
              , r = n.indexOf(t);
            return -1 !== r && n.splice(r, 1),
            n
        }
        let U = (null == globalThis ? void 0 : globalThis.document) ? d.useLayoutEffect : ()=>{}
          , K = p["useId".toString()] || (()=>void 0)
          , G = 0
          , Y = ["top", "right", "bottom", "left"]
          , X = Math.min
          , q = Math.max
          , Z = Math.round
          , J = Math.floor
          , Q = e=>({
            x: e,
            y: e
        })
          , ee = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        }
          , et = {
            start: "end",
            end: "start"
        };
        function en(e, t) {
            return "function" == typeof e ? e(t) : e
        }
        function er(e) {
            return e.split("-")[0]
        }
        function eo(e) {
            return e.split("-")[1]
        }
        function ei(e) {
            return "x" === e ? "y" : "x"
        }
        function ea(e) {
            return "y" === e ? "height" : "width"
        }
        function el(e) {
            return ["top", "bottom"].includes(er(e)) ? "y" : "x"
        }
        function eu(e) {
            return e.replace(/start|end/g, e=>et[e])
        }
        function ec(e) {
            return e.replace(/left|right|bottom|top/g, e=>ee[e])
        }
        function es(e) {
            return "number" != typeof e ? {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                ...e
            } : {
                top: e,
                right: e,
                bottom: e,
                left: e
            }
        }
        function ef(e) {
            return {
                ...e,
                top: e.y,
                left: e.x,
                right: e.x + e.width,
                bottom: e.y + e.height
            }
        }
        function ed(e, t, n) {
            let r, {reference: o, floating: i} = e, a = el(t), l = ei(el(t)), u = ea(l), c = er(t), s = "y" === a, f = o.x + o.width / 2 - i.width / 2, d = o.y + o.height / 2 - i.height / 2, p = o[u] / 2 - i[u] / 2;
            switch (c) {
            case "top":
                r = {
                    x: f,
                    y: o.y - i.height
                };
                break;
            case "bottom":
                r = {
                    x: f,
                    y: o.y + o.height
                };
                break;
            case "right":
                r = {
                    x: o.x + o.width,
                    y: d
                };
                break;
            case "left":
                r = {
                    x: o.x - i.width,
                    y: d
                };
                break;
            default:
                r = {
                    x: o.x,
                    y: o.y
                }
            }
            switch (eo(t)) {
            case "start":
                r[l] -= p * (n && s ? -1 : 1);
                break;
            case "end":
                r[l] += p * (n && s ? -1 : 1)
            }
            return r
        }
        let ep = async(e,t,n)=>{
            let {placement: r="bottom", strategy: o="absolute", middleware: i=[], platform: a} = n
              , l = i.filter(Boolean)
              , u = await (null == a.isRTL ? void 0 : a.isRTL(t))
              , c = await a.getElementRects({
                reference: e,
                floating: t,
                strategy: o
            })
              , {x: s, y: f} = ed(c, r, u)
              , d = r
              , p = {}
              , m = 0;
            for (let n = 0; n < l.length; n++) {
                let {name: i, fn: v} = l[n]
                  , {x: h, y: g, data: y, reset: b} = await v({
                    x: s,
                    y: f,
                    initialPlacement: r,
                    placement: d,
                    strategy: o,
                    middlewareData: p,
                    rects: c,
                    platform: a,
                    elements: {
                        reference: e,
                        floating: t
                    }
                });
                if (s = null != h ? h : s,
                f = null != g ? g : f,
                p = {
                    ...p,
                    [i]: {
                        ...p[i],
                        ...y
                    }
                },
                b && m <= 50) {
                    m++,
                    "object" == typeof b && (b.placement && (d = b.placement),
                    b.rects && (c = !0 === b.rects ? await a.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: o
                    }) : b.rects),
                    {x: s, y: f} = ed(c, d, u)),
                    n = -1;
                    continue
                }
            }
            return {
                x: s,
                y: f,
                placement: d,
                strategy: o,
                middlewareData: p
            }
        }
        ;
        async function em(e, t) {
            var n;
            void 0 === t && (t = {});
            let {x: r, y: o, platform: i, rects: a, elements: l, strategy: u} = e
              , {boundary: c="clippingAncestors", rootBoundary: s="viewport", elementContext: f="floating", altBoundary: d=!1, padding: p=0} = en(t, e)
              , m = es(p)
              , v = l[d ? "floating" === f ? "reference" : "floating" : f]
              , h = ef(await i.getClippingRect({
                element: null == (n = await (null == i.isElement ? void 0 : i.isElement(v))) || n ? v : v.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(l.floating)),
                boundary: c,
                rootBoundary: s,
                strategy: u
            }))
              , g = "floating" === f ? {
                ...a.floating,
                x: r,
                y: o
            } : a.reference
              , y = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(l.floating))
              , b = await (null == i.isElement ? void 0 : i.isElement(y)) && await (null == i.getScale ? void 0 : i.getScale(y)) || {
                x: 1,
                y: 1
            }
              , w = ef(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                rect: g,
                offsetParent: y,
                strategy: u
            }) : g);
            return {
                top: (h.top - w.top + m.top) / b.y,
                bottom: (w.bottom - h.bottom + m.bottom) / b.y,
                left: (h.left - w.left + m.left) / b.x,
                right: (w.right - h.right + m.right) / b.x
            }
        }
        let ev = e=>({
            name: "arrow",
            options: e,
            async fn(t) {
                let {x: n, y: r, placement: o, rects: i, platform: a, elements: l, middlewareData: u} = t
                  , {element: c, padding: s=0} = en(e, t) || {};
                if (null == c)
                    return {};
                let f = es(s)
                  , d = {
                    x: n,
                    y: r
                }
                  , p = ei(el(o))
                  , m = ea(p)
                  , v = await a.getDimensions(c)
                  , h = "y" === p
                  , g = h ? "clientHeight" : "clientWidth"
                  , y = i.reference[m] + i.reference[p] - d[p] - i.floating[m]
                  , b = d[p] - i.reference[p]
                  , w = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(c))
                  , E = w ? w[g] : 0;
                E && await (null == a.isElement ? void 0 : a.isElement(w)) || (E = l.floating[g] || i.floating[m]);
                let x = E / 2 - v[m] / 2 - 1
                  , S = X(f[h ? "top" : "left"], x)
                  , C = X(f[h ? "bottom" : "right"], x)
                  , O = E - v[m] - C
                  , A = E / 2 - v[m] / 2 + (y / 2 - b / 2)
                  , R = q(S, X(A, O))
                  , P = !u.arrow && null != eo(o) && A != R && i.reference[m] / 2 - (A < S ? S : C) - v[m] / 2 < 0
                  , M = P ? A < S ? A - S : A - O : 0;
                return {
                    [p]: d[p] + M,
                    data: {
                        [p]: R,
                        centerOffset: A - R - M,
                        ...P && {
                            alignmentOffset: M
                        }
                    },
                    reset: P
                }
            }
        });
        function eh(e, t) {
            return {
                top: e.top - t.height,
                right: e.right - t.width,
                bottom: e.bottom - t.height,
                left: e.left - t.width
            }
        }
        function eg(e) {
            return Y.some(t=>e[t] >= 0)
        }
        async function ey(e, t) {
            let {placement: n, platform: r, elements: o} = e
              , i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating))
              , a = er(n)
              , l = eo(n)
              , u = "y" === el(n)
              , c = ["left", "top"].includes(a) ? -1 : 1
              , s = i && u ? -1 : 1
              , f = en(t, e)
              , {mainAxis: d, crossAxis: p, alignmentAxis: m} = "number" == typeof f ? {
                mainAxis: f,
                crossAxis: 0,
                alignmentAxis: null
            } : {
                mainAxis: 0,
                crossAxis: 0,
                alignmentAxis: null,
                ...f
            };
            return l && "number" == typeof m && (p = "end" === l ? -1 * m : m),
            u ? {
                x: p * s,
                y: d * c
            } : {
                x: d * c,
                y: p * s
            }
        }
        function eb(e) {
            return ex(e) ? (e.nodeName || "").toLowerCase() : "#document"
        }
        function ew(e) {
            var t;
            return (null == e ? void 0 : null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
        }
        function eE(e) {
            var t;
            return null == (t = (ex(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
        }
        function ex(e) {
            return e instanceof Node || e instanceof ew(e).Node
        }
        function eS(e) {
            return e instanceof Element || e instanceof ew(e).Element
        }
        function eC(e) {
            return e instanceof HTMLElement || e instanceof ew(e).HTMLElement
        }
        function eO(e) {
            return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof ew(e).ShadowRoot)
        }
        function eA(e) {
            let {overflow: t, overflowX: n, overflowY: r, display: o} = e_(e);
            return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
        }
        function eR(e) {
            let t = eP()
              , n = e_(e);
            return "none" !== n.transform || "none" !== n.perspective || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some(e=>(n.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e=>(n.contain || "").includes(e))
        }
        function eP() {
            return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
        }
        function eM(e) {
            return ["html", "body", "#document"].includes(eb(e))
        }
        function e_(e) {
            return ew(e).getComputedStyle(e)
        }
        function eT(e) {
            return eS(e) ? {
                scrollLeft: e.scrollLeft,
                scrollTop: e.scrollTop
            } : {
                scrollLeft: e.pageXOffset,
                scrollTop: e.pageYOffset
            }
        }
        function ek(e) {
            if ("html" === eb(e))
                return e;
            let t = e.assignedSlot || e.parentNode || eO(e) && e.host || eE(e);
            return eO(t) ? t.host : t
        }
        function eD(e, t, n) {
            var r;
            void 0 === t && (t = []),
            void 0 === n && (n = !0);
            let o = function e(t) {
                let n = ek(t);
                return eM(n) ? t.ownerDocument ? t.ownerDocument.body : t.body : eC(n) && eA(n) ? n : e(n)
            }(e)
              , i = o === (null == (r = e.ownerDocument) ? void 0 : r.body)
              , a = ew(o);
            return i ? t.concat(a, a.visualViewport || [], eA(o) ? o : [], a.frameElement && n ? eD(a.frameElement) : []) : t.concat(o, eD(o, [], n))
        }
        function eL(e) {
            let t = e_(e)
              , n = parseFloat(t.width) || 0
              , r = parseFloat(t.height) || 0
              , o = eC(e)
              , i = o ? e.offsetWidth : n
              , a = o ? e.offsetHeight : r
              , l = Z(n) !== i || Z(r) !== a;
            return l && (n = i,
            r = a),
            {
                width: n,
                height: r,
                $: l
            }
        }
        function eI(e) {
            return eS(e) ? e : e.contextElement
        }
        function eF(e) {
            let t = eI(e);
            if (!eC(t))
                return Q(1);
            let n = t.getBoundingClientRect()
              , {width: r, height: o, $: i} = eL(t)
              , a = (i ? Z(n.width) : n.width) / r
              , l = (i ? Z(n.height) : n.height) / o;
            return a && Number.isFinite(a) || (a = 1),
            l && Number.isFinite(l) || (l = 1),
            {
                x: a,
                y: l
            }
        }
        let ej = Q(0);
        function eN(e) {
            let t = ew(e);
            return eP() && t.visualViewport ? {
                x: t.visualViewport.offsetLeft,
                y: t.visualViewport.offsetTop
            } : ej
        }
        function ez(e, t, n, r) {
            var o;
            void 0 === t && (t = !1),
            void 0 === n && (n = !1);
            let i = e.getBoundingClientRect()
              , a = eI(e)
              , l = Q(1);
            t && (r ? eS(r) && (l = eF(r)) : l = eF(e));
            let u = (void 0 === (o = n) && (o = !1),
            r && (!o || r === ew(a)) && o) ? eN(a) : Q(0)
              , c = (i.left + u.x) / l.x
              , s = (i.top + u.y) / l.y
              , f = i.width / l.x
              , d = i.height / l.y;
            if (a) {
                let e = ew(a)
                  , t = r && eS(r) ? ew(r) : r
                  , n = e.frameElement;
                for (; n && r && t !== e; ) {
                    let e = eF(n)
                      , t = n.getBoundingClientRect()
                      , r = e_(n)
                      , o = t.left + (n.clientLeft + parseFloat(r.paddingLeft)) * e.x
                      , i = t.top + (n.clientTop + parseFloat(r.paddingTop)) * e.y;
                    c *= e.x,
                    s *= e.y,
                    f *= e.x,
                    d *= e.y,
                    c += o,
                    s += i,
                    n = ew(n).frameElement
                }
            }
            return ef({
                width: f,
                height: d,
                x: c,
                y: s
            })
        }
        function eW(e) {
            return ez(eE(e)).left + eT(e).scrollLeft
        }
        function eB(e, t, n) {
            let r;
            if ("viewport" === t)
                r = function(e, t) {
                    let n = ew(e)
                      , r = eE(e)
                      , o = n.visualViewport
                      , i = r.clientWidth
                      , a = r.clientHeight
                      , l = 0
                      , u = 0;
                    if (o) {
                        i = o.width,
                        a = o.height;
                        let e = eP();
                        (!e || e && "fixed" === t) && (l = o.offsetLeft,
                        u = o.offsetTop)
                    }
                    return {
                        width: i,
                        height: a,
                        x: l,
                        y: u
                    }
                }(e, n);
            else if ("document" === t)
                r = function(e) {
                    let t = eE(e)
                      , n = eT(e)
                      , r = e.ownerDocument.body
                      , o = q(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
                      , i = q(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight)
                      , a = -n.scrollLeft + eW(e)
                      , l = -n.scrollTop;
                    return "rtl" === e_(r).direction && (a += q(t.clientWidth, r.clientWidth) - o),
                    {
                        width: o,
                        height: i,
                        x: a,
                        y: l
                    }
                }(eE(e));
            else if (eS(t))
                r = function(e, t) {
                    let n = ez(e, !0, "fixed" === t)
                      , r = n.top + e.clientTop
                      , o = n.left + e.clientLeft
                      , i = eC(e) ? eF(e) : Q(1)
                      , a = e.clientWidth * i.x
                      , l = e.clientHeight * i.y
                      , u = o * i.x
                      , c = r * i.y;
                    return {
                        width: a,
                        height: l,
                        x: u,
                        y: c
                    }
                }(t, n);
            else {
                let n = eN(e);
                r = {
                    ...t,
                    x: t.x - n.x,
                    y: t.y - n.y
                }
            }
            return ef(r)
        }
        function e$(e, t) {
            return eC(e) && "fixed" !== e_(e).position ? t ? t(e) : e.offsetParent : null
        }
        function eV(e, t) {
            let n = ew(e);
            if (!eC(e))
                return n;
            let r = e$(e, t);
            for (; r && ["table", "td", "th"].includes(eb(r)) && "static" === e_(r).position; )
                r = e$(r, t);
            return r && ("html" === eb(r) || "body" === eb(r) && "static" === e_(r).position && !eR(r)) ? n : r || function(e) {
                let t = ek(e);
                for (; eC(t) && !eM(t); ) {
                    if (eR(t))
                        return t;
                    t = ek(t)
                }
                return null
            }(e) || n
        }
        let eH = async function(e) {
            let {reference: t, floating: n, strategy: r} = e
              , o = this.getOffsetParent || eV
              , i = this.getDimensions;
            return {
                reference: function(e, t, n) {
                    let r = eC(t)
                      , o = eE(t)
                      , i = "fixed" === n
                      , a = ez(e, !0, i, t)
                      , l = {
                        scrollLeft: 0,
                        scrollTop: 0
                    }
                      , u = Q(0);
                    if (r || !r && !i) {
                        if (("body" !== eb(t) || eA(o)) && (l = eT(t)),
                        r) {
                            let e = ez(t, !0, i, t);
                            u.x = e.x + t.clientLeft,
                            u.y = e.y + t.clientTop
                        } else
                            o && (u.x = eW(o))
                    }
                    return {
                        x: a.left + l.scrollLeft - u.x,
                        y: a.top + l.scrollTop - u.y,
                        width: a.width,
                        height: a.height
                    }
                }(t, await o(n), r),
                floating: {
                    x: 0,
                    y: 0,
                    ...await i(n)
                }
            }
        }
          , eU = {
            convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                let {rect: t, offsetParent: n, strategy: r} = e
                  , o = eC(n)
                  , i = eE(n);
                if (n === i)
                    return t;
                let a = {
                    scrollLeft: 0,
                    scrollTop: 0
                }
                  , l = Q(1)
                  , u = Q(0);
                if ((o || !o && "fixed" !== r) && (("body" !== eb(n) || eA(i)) && (a = eT(n)),
                eC(n))) {
                    let e = ez(n);
                    l = eF(n),
                    u.x = e.x + n.clientLeft,
                    u.y = e.y + n.clientTop
                }
                return {
                    width: t.width * l.x,
                    height: t.height * l.y,
                    x: t.x * l.x - a.scrollLeft * l.x + u.x,
                    y: t.y * l.y - a.scrollTop * l.y + u.y
                }
            },
            getDocumentElement: eE,
            getClippingRect: function(e) {
                let {element: t, boundary: n, rootBoundary: r, strategy: o} = e
                  , i = "clippingAncestors" === n ? function(e, t) {
                    let n = t.get(e);
                    if (n)
                        return n;
                    let r = eD(e, [], !1).filter(e=>eS(e) && "body" !== eb(e))
                      , o = null
                      , i = "fixed" === e_(e).position
                      , a = i ? ek(e) : e;
                    for (; eS(a) && !eM(a); ) {
                        let t = e_(a)
                          , n = eR(a);
                        n || "fixed" !== t.position || (o = null);
                        let l = i ? !n && !o : !n && "static" === t.position && !!o && ["absolute", "fixed"].includes(o.position) || eA(a) && !n && function e(t, n) {
                            let r = ek(t);
                            return !(r === n || !eS(r) || eM(r)) && ("fixed" === e_(r).position || e(r, n))
                        }(e, a);
                        l ? r = r.filter(e=>e !== a) : o = t,
                        a = ek(a)
                    }
                    return t.set(e, r),
                    r
                }(t, this._c) : [].concat(n)
                  , a = [...i, r]
                  , l = a[0]
                  , u = a.reduce((e,n)=>{
                    let r = eB(t, n, o);
                    return e.top = q(r.top, e.top),
                    e.right = X(r.right, e.right),
                    e.bottom = X(r.bottom, e.bottom),
                    e.left = q(r.left, e.left),
                    e
                }
                , eB(t, l, o));
                return {
                    width: u.right - u.left,
                    height: u.bottom - u.top,
                    x: u.left,
                    y: u.top
                }
            },
            getOffsetParent: eV,
            getElementRects: eH,
            getClientRects: function(e) {
                return Array.from(e.getClientRects())
            },
            getDimensions: function(e) {
                return eL(e)
            },
            getScale: eF,
            isElement: eS,
            isRTL: function(e) {
                return "rtl" === e_(e).direction
            }
        }
          , eK = (e,t,n)=>{
            let r = new Map
              , o = {
                platform: eU,
                ...n
            }
              , i = {
                ...o.platform,
                _c: r
            };
            return ep(e, t, {
                ...o,
                platform: i
            })
        }
          , eG = e=>({
            name: "arrow",
            options: e,
            fn(t) {
                let {element: n, padding: r} = "function" == typeof e ? e(t) : e;
                if (n && ({}).hasOwnProperty.call(n, "current")) {
                    if (null != n.current)
                        return ev({
                            element: n.current,
                            padding: r
                        }).fn(t)
                } else if (n)
                    return ev({
                        element: n,
                        padding: r
                    }).fn(t);
                return {}
            }
        });
        var eY = "undefined" != typeof document ? d.useLayoutEffect : d.useEffect;
        function eX(e, t) {
            let n, r, o;
            if (e === t)
                return !0;
            if (typeof e != typeof t)
                return !1;
            if ("function" == typeof e && e.toString() === t.toString())
                return !0;
            if (e && t && "object" == typeof e) {
                if (Array.isArray(e)) {
                    if ((n = e.length) != t.length)
                        return !1;
                    for (r = n; 0 != r--; )
                        if (!eX(e[r], t[r]))
                            return !1;
                    return !0
                }
                if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
                    return !1;
                for (r = n; 0 != r--; )
                    if (!({}).hasOwnProperty.call(t, o[r]))
                        return !1;
                for (r = n; 0 != r--; ) {
                    let n = o[r];
                    if (("_owner" !== n || !e.$$typeof) && !eX(e[n], t[n]))
                        return !1
                }
                return !0
            }
            return e != e && t != t
        }
        function eq(e) {
            if ("undefined" == typeof window)
                return 1;
            let t = e.ownerDocument.defaultView || window;
            return t.devicePixelRatio || 1
        }
        function eZ(e, t) {
            let n = eq(e);
            return Math.round(t * n) / n
        }
        function eJ(e) {
            let t = d.useRef(e);
            return eY(()=>{
                t.current = e
            }
            ),
            t
        }
        let eQ = (0,
        d.forwardRef)((e,t)=>{
            let {children: n, width: r=10, height: o=5, ...a} = e;
            return (0,
            d.createElement)(S.svg, i({}, a, {
                ref: t,
                width: r,
                height: o,
                viewBox: "0 0 30 10",
                preserveAspectRatio: "none"
            }), e.asChild ? n : (0,
            d.createElement)("polygon", {
                points: "0,0 30,0 15,10"
            }))
        }
        )
          , e0 = "Popper"
          , [e1,e2] = v(e0)
          , [e5,e3] = e1(e0)
          , e6 = (0,
        d.forwardRef)((e,t)=>{
            let {__scopePopper: n, virtualRef: r, ...o} = e
              , a = e3("PopperAnchor", n)
              , l = (0,
            d.useRef)(null)
              , u = y(t, l);
            return (0,
            d.useEffect)(()=>{
                a.onAnchorChange((null == r ? void 0 : r.current) || l.current)
            }
            ),
            r ? null : (0,
            d.createElement)(S.div, i({}, o, {
                ref: u
            }))
        }
        )
          , e7 = "PopperContent"
          , [e4,e8] = e1(e7)
          , e9 = (0,
        d.forwardRef)((e,t)=>{
            var n, r, o, a, l, u, c, s, f, p, m, v, g, b;
            let {__scopePopper: w, side: E="bottom", sideOffset: x=0, align: C="center", alignOffset: O=0, arrowPadding: A=0, avoidCollisions: R=!0, collisionBoundary: M=[], collisionPadding: _=0, sticky: T="partial", hideWhenDetached: k=!1, updatePositionStrategy: D="optimized", onPlaced: L, ...I} = e
              , F = e3(e7, w)
              , [j,N] = (0,
            d.useState)(null)
              , z = y(t, e=>N(e))
              , [W,B] = (0,
            d.useState)(null)
              , $ = function(e) {
                let[t,n] = (0,
                d.useState)(void 0);
                return U(()=>{
                    if (e) {
                        n({
                            width: e.offsetWidth,
                            height: e.offsetHeight
                        });
                        let t = new ResizeObserver(t=>{
                            let r, o;
                            if (!Array.isArray(t) || !t.length)
                                return;
                            let i = t[0];
                            if ("borderBoxSize"in i) {
                                let e = i.borderBoxSize
                                  , t = Array.isArray(e) ? e[0] : e;
                                r = t.inlineSize,
                                o = t.blockSize
                            } else
                                r = e.offsetWidth,
                                o = e.offsetHeight;
                            n({
                                width: r,
                                height: o
                            })
                        }
                        );
                        return t.observe(e, {
                            box: "border-box"
                        }),
                        ()=>t.unobserve(e)
                    }
                    n(void 0)
                }
                , [e]),
                t
            }(W)
              , V = null !== (n = null == $ ? void 0 : $.width) && void 0 !== n ? n : 0
              , H = null !== (r = null == $ ? void 0 : $.height) && void 0 !== r ? r : 0
              , K = "number" == typeof _ ? _ : {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                ..._
            }
              , G = Array.isArray(M) ? M : [M]
              , Y = G.length > 0
              , Z = {
                padding: K,
                boundary: G.filter(tn),
                altBoundary: Y
            }
              , {refs: Q, floatingStyles: ee, placement: et, isPositioned: es, middlewareData: ef} = function(e) {
                void 0 === e && (e = {});
                let {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: i, floating: a}={}, transform: l=!0, whileElementsMounted: u, open: c} = e
                  , [s,f] = d.useState({
                    x: 0,
                    y: 0,
                    strategy: n,
                    placement: t,
                    middlewareData: {},
                    isPositioned: !1
                })
                  , [p,m] = d.useState(r);
                eX(p, r) || m(r);
                let[v,g] = d.useState(null)
                  , [y,b] = d.useState(null)
                  , w = d.useCallback(e=>{
                    e != C.current && (C.current = e,
                    g(e))
                }
                , [g])
                  , E = d.useCallback(e=>{
                    e !== O.current && (O.current = e,
                    b(e))
                }
                , [b])
                  , x = i || v
                  , S = a || y
                  , C = d.useRef(null)
                  , O = d.useRef(null)
                  , A = d.useRef(s)
                  , R = eJ(u)
                  , P = eJ(o)
                  , M = d.useCallback(()=>{
                    if (!C.current || !O.current)
                        return;
                    let e = {
                        placement: t,
                        strategy: n,
                        middleware: p
                    };
                    P.current && (e.platform = P.current),
                    eK(C.current, O.current, e).then(e=>{
                        let t = {
                            ...e,
                            isPositioned: !0
                        };
                        _.current && !eX(A.current, t) && (A.current = t,
                        h.flushSync(()=>{
                            f(t)
                        }
                        ))
                    }
                    )
                }
                , [p, t, n, P]);
                eY(()=>{
                    !1 === c && A.current.isPositioned && (A.current.isPositioned = !1,
                    f(e=>({
                        ...e,
                        isPositioned: !1
                    })))
                }
                , [c]);
                let _ = d.useRef(!1);
                eY(()=>(_.current = !0,
                ()=>{
                    _.current = !1
                }
                ), []),
                eY(()=>{
                    if (x && (C.current = x),
                    S && (O.current = S),
                    x && S) {
                        if (R.current)
                            return R.current(x, S, M);
                        M()
                    }
                }
                , [x, S, M, R]);
                let T = d.useMemo(()=>({
                    reference: C,
                    floating: O,
                    setReference: w,
                    setFloating: E
                }), [w, E])
                  , k = d.useMemo(()=>({
                    reference: x,
                    floating: S
                }), [x, S])
                  , D = d.useMemo(()=>{
                    let e = {
                        position: n,
                        left: 0,
                        top: 0
                    };
                    if (!k.floating)
                        return e;
                    let t = eZ(k.floating, s.x)
                      , r = eZ(k.floating, s.y);
                    return l ? {
                        ...e,
                        transform: "translate(" + t + "px, " + r + "px)",
                        ...eq(k.floating) >= 1.5 && {
                            willChange: "transform"
                        }
                    } : {
                        position: n,
                        left: t,
                        top: r
                    }
                }
                , [n, l, k.floating, s.x, s.y]);
                return d.useMemo(()=>({
                    ...s,
                    update: M,
                    refs: T,
                    elements: k,
                    floatingStyles: D
                }), [s, M, T, k, D])
            }({
                strategy: "fixed",
                placement: E + ("center" !== C ? "-" + C : ""),
                whileElementsMounted: (...e)=>{
                    let t = function(e, t, n, r) {
                        let o;
                        void 0 === r && (r = {});
                        let {ancestorScroll: i=!0, ancestorResize: a=!0, elementResize: l="function" == typeof ResizeObserver, layoutShift: u="function" == typeof IntersectionObserver, animationFrame: c=!1} = r
                          , s = eI(e)
                          , f = i || a ? [...s ? eD(s) : [], ...eD(t)] : [];
                        f.forEach(e=>{
                            i && e.addEventListener("scroll", n, {
                                passive: !0
                            }),
                            a && e.addEventListener("resize", n)
                        }
                        );
                        let d = s && u ? function(e, t) {
                            let n, r = null, o = eE(e);
                            function i() {
                                clearTimeout(n),
                                r && r.disconnect(),
                                r = null
                            }
                            return !function a(l, u) {
                                void 0 === l && (l = !1),
                                void 0 === u && (u = 1),
                                i();
                                let {left: c, top: s, width: f, height: d} = e.getBoundingClientRect();
                                if (l || t(),
                                !f || !d)
                                    return;
                                let p = J(s)
                                  , m = J(o.clientWidth - (c + f))
                                  , v = J(o.clientHeight - (s + d))
                                  , h = J(c)
                                  , g = {
                                    rootMargin: -p + "px " + -m + "px " + -v + "px " + -h + "px",
                                    threshold: q(0, X(1, u)) || 1
                                }
                                  , y = !0;
                                function b(e) {
                                    let t = e[0].intersectionRatio;
                                    if (t !== u) {
                                        if (!y)
                                            return a();
                                        t ? a(!1, t) : n = setTimeout(()=>{
                                            a(!1, 1e-7)
                                        }
                                        , 100)
                                    }
                                    y = !1
                                }
                                try {
                                    r = new IntersectionObserver(b,{
                                        ...g,
                                        root: o.ownerDocument
                                    })
                                } catch (e) {
                                    r = new IntersectionObserver(b,g)
                                }
                                r.observe(e)
                            }(!0),
                            i
                        }(s, n) : null
                          , p = -1
                          , m = null;
                        l && (m = new ResizeObserver(e=>{
                            let[r] = e;
                            r && r.target === s && m && (m.unobserve(t),
                            cancelAnimationFrame(p),
                            p = requestAnimationFrame(()=>{
                                m && m.observe(t)
                            }
                            )),
                            n()
                        }
                        ),
                        s && !c && m.observe(s),
                        m.observe(t));
                        let v = c ? ez(e) : null;
                        return c && function t() {
                            let r = ez(e);
                            v && (r.x !== v.x || r.y !== v.y || r.width !== v.width || r.height !== v.height) && n(),
                            v = r,
                            o = requestAnimationFrame(t)
                        }(),
                        n(),
                        ()=>{
                            f.forEach(e=>{
                                i && e.removeEventListener("scroll", n),
                                a && e.removeEventListener("resize", n)
                            }
                            ),
                            d && d(),
                            m && m.disconnect(),
                            m = null,
                            c && cancelAnimationFrame(o)
                        }
                    }(...e, {
                        animationFrame: "always" === D
                    });
                    return t
                }
                ,
                elements: {
                    reference: F.anchor
                },
                middleware: [{
                    name: "offset",
                    options: f = {
                        mainAxis: x + H,
                        alignmentAxis: O
                    },
                    async fn(e) {
                        let {x: t, y: n} = e
                          , r = await ey(e, f);
                        return {
                            x: t + r.x,
                            y: n + r.y,
                            data: r
                        }
                    }
                }, R && {
                    name: "shift",
                    options: m = {
                        mainAxis: !0,
                        crossAxis: !1,
                        limiter: "partial" === T ? (void 0 === p && (p = {}),
                        {
                            options: p,
                            fn(e) {
                                let {x: t, y: n, placement: r, rects: o, middlewareData: i} = e
                                  , {offset: a=0, mainAxis: l=!0, crossAxis: u=!0} = en(p, e)
                                  , c = {
                                    x: t,
                                    y: n
                                }
                                  , s = el(r)
                                  , f = ei(s)
                                  , d = c[f]
                                  , m = c[s]
                                  , v = en(a, e)
                                  , h = "number" == typeof v ? {
                                    mainAxis: v,
                                    crossAxis: 0
                                } : {
                                    mainAxis: 0,
                                    crossAxis: 0,
                                    ...v
                                };
                                if (l) {
                                    let e = "y" === f ? "height" : "width"
                                      , t = o.reference[f] - o.floating[e] + h.mainAxis
                                      , n = o.reference[f] + o.reference[e] - h.mainAxis;
                                    d < t ? d = t : d > n && (d = n)
                                }
                                if (u) {
                                    var g, y;
                                    let e = "y" === f ? "width" : "height"
                                      , t = ["top", "left"].includes(er(r))
                                      , n = o.reference[s] - o.floating[e] + (t && (null == (g = i.offset) ? void 0 : g[s]) || 0) + (t ? 0 : h.crossAxis)
                                      , a = o.reference[s] + o.reference[e] + (t ? 0 : (null == (y = i.offset) ? void 0 : y[s]) || 0) - (t ? h.crossAxis : 0);
                                    m < n ? m = n : m > a && (m = a)
                                }
                                return {
                                    [f]: d,
                                    [s]: m
                                }
                            }
                        }) : void 0,
                        ...Z
                    },
                    async fn(e) {
                        let {x: t, y: n, placement: r} = e
                          , {mainAxis: o=!0, crossAxis: i=!1, limiter: a={
                            fn: e=>{
                                let {x: t, y: n} = e;
                                return {
                                    x: t,
                                    y: n
                                }
                            }
                        }, ...l} = en(m, e)
                          , u = {
                            x: t,
                            y: n
                        }
                          , c = await em(e, l)
                          , s = el(er(r))
                          , f = ei(s)
                          , d = u[f]
                          , p = u[s];
                        if (o) {
                            let e = d + c["y" === f ? "top" : "left"]
                              , t = d - c["y" === f ? "bottom" : "right"];
                            d = q(e, X(d, t))
                        }
                        if (i) {
                            let e = "y" === s ? "top" : "left"
                              , t = "y" === s ? "bottom" : "right"
                              , n = p + c[e]
                              , r = p - c[t];
                            p = q(n, X(p, r))
                        }
                        let v = a.fn({
                            ...e,
                            [f]: d,
                            [s]: p
                        });
                        return {
                            ...v,
                            data: {
                                x: v.x - t,
                                y: v.y - n
                            }
                        }
                    }
                }, R && {
                    name: "flip",
                    options: v = {
                        ...Z
                    },
                    async fn(e) {
                        var t, n, r, o, i;
                        let {placement: a, middlewareData: l, rects: u, initialPlacement: c, platform: s, elements: f} = e
                          , {mainAxis: d=!0, crossAxis: p=!0, fallbackPlacements: m, fallbackStrategy: h="bestFit", fallbackAxisSideDirection: g="none", flipAlignment: y=!0, ...b} = en(v, e);
                        if (null != (t = l.arrow) && t.alignmentOffset)
                            return {};
                        let w = er(a)
                          , E = er(c) === c
                          , x = await (null == s.isRTL ? void 0 : s.isRTL(f.floating))
                          , S = m || (E || !y ? [ec(c)] : function(e) {
                            let t = ec(e);
                            return [eu(e), t, eu(t)]
                        }(c));
                        m || "none" === g || S.push(...function(e, t, n, r) {
                            let o = eo(e)
                              , i = function(e, t, n) {
                                let r = ["left", "right"]
                                  , o = ["right", "left"];
                                switch (e) {
                                case "top":
                                case "bottom":
                                    if (n)
                                        return t ? o : r;
                                    return t ? r : o;
                                case "left":
                                case "right":
                                    return t ? ["top", "bottom"] : ["bottom", "top"];
                                default:
                                    return []
                                }
                            }(er(e), "start" === n, r);
                            return o && (i = i.map(e=>e + "-" + o),
                            t && (i = i.concat(i.map(eu)))),
                            i
                        }(c, y, g, x));
                        let C = [c, ...S]
                          , O = await em(e, b)
                          , A = []
                          , R = (null == (n = l.flip) ? void 0 : n.overflows) || [];
                        if (d && A.push(O[w]),
                        p) {
                            let e = function(e, t, n) {
                                void 0 === n && (n = !1);
                                let r = eo(e)
                                  , o = ei(el(e))
                                  , i = ea(o)
                                  , a = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                                return t.reference[i] > t.floating[i] && (a = ec(a)),
                                [a, ec(a)]
                            }(a, u, x);
                            A.push(O[e[0]], O[e[1]])
                        }
                        if (R = [...R, {
                            placement: a,
                            overflows: A
                        }],
                        !A.every(e=>e <= 0)) {
                            let e = ((null == (r = l.flip) ? void 0 : r.index) || 0) + 1
                              , t = C[e];
                            if (t)
                                return {
                                    data: {
                                        index: e,
                                        overflows: R
                                    },
                                    reset: {
                                        placement: t
                                    }
                                };
                            let n = null == (o = R.filter(e=>e.overflows[0] <= 0).sort((e,t)=>e.overflows[1] - t.overflows[1])[0]) ? void 0 : o.placement;
                            if (!n)
                                switch (h) {
                                case "bestFit":
                                    {
                                        let e = null == (i = R.map(e=>[e.placement, e.overflows.filter(e=>e > 0).reduce((e,t)=>e + t, 0)]).sort((e,t)=>e[1] - t[1])[0]) ? void 0 : i[0];
                                        e && (n = e);
                                        break
                                    }
                                case "initialPlacement":
                                    n = c
                                }
                            if (a !== n)
                                return {
                                    reset: {
                                        placement: n
                                    }
                                }
                        }
                        return {}
                    }
                }, {
                    name: "size",
                    options: g = {
                        ...Z,
                        apply: ({elements: e, rects: t, availableWidth: n, availableHeight: r})=>{
                            let {width: o, height: i} = t.reference
                              , a = e.floating.style;
                            a.setProperty("--radix-popper-available-width", `${n}px`),
                            a.setProperty("--radix-popper-available-height", `${r}px`),
                            a.setProperty("--radix-popper-anchor-width", `${o}px`),
                            a.setProperty("--radix-popper-anchor-height", `${i}px`)
                        }
                    },
                    async fn(e) {
                        let t, n;
                        let {placement: r, rects: o, platform: i, elements: a} = e
                          , {apply: l=()=>{}
                        , ...u} = en(g, e)
                          , c = await em(e, u)
                          , s = er(r)
                          , f = eo(r)
                          , d = "y" === el(r)
                          , {width: p, height: m} = o.floating;
                        "top" === s || "bottom" === s ? (t = s,
                        n = f === (await (null == i.isRTL ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (n = s,
                        t = "end" === f ? "top" : "bottom");
                        let v = m - c[t]
                          , h = p - c[n]
                          , y = !e.middlewareData.shift
                          , b = v
                          , w = h;
                        if (d) {
                            let e = p - c.left - c.right;
                            w = f || y ? X(h, e) : e
                        } else {
                            let e = m - c.top - c.bottom;
                            b = f || y ? X(v, e) : e
                        }
                        if (y && !f) {
                            let e = q(c.left, 0)
                              , t = q(c.right, 0)
                              , n = q(c.top, 0)
                              , r = q(c.bottom, 0);
                            d ? w = p - 2 * (0 !== e || 0 !== t ? e + t : q(c.left, c.right)) : b = m - 2 * (0 !== n || 0 !== r ? n + r : q(c.top, c.bottom))
                        }
                        await l({
                            ...e,
                            availableWidth: w,
                            availableHeight: b
                        });
                        let E = await i.getDimensions(a.floating);
                        return p !== E.width || m !== E.height ? {
                            reset: {
                                rects: !0
                            }
                        } : {}
                    }
                }, W && eG({
                    element: W,
                    padding: A
                }), tr({
                    arrowWidth: V,
                    arrowHeight: H
                }), k && {
                    name: "hide",
                    options: b = {
                        strategy: "referenceHidden",
                        ...Z
                    },
                    async fn(e) {
                        let {rects: t} = e
                          , {strategy: n="referenceHidden", ...r} = en(b, e);
                        switch (n) {
                        case "referenceHidden":
                            {
                                let n = await em(e, {
                                    ...r,
                                    elementContext: "reference"
                                })
                                  , o = eh(n, t.reference);
                                return {
                                    data: {
                                        referenceHiddenOffsets: o,
                                        referenceHidden: eg(o)
                                    }
                                }
                            }
                        case "escaped":
                            {
                                let n = await em(e, {
                                    ...r,
                                    altBoundary: !0
                                })
                                  , o = eh(n, t.floating);
                                return {
                                    data: {
                                        escapedOffsets: o,
                                        escaped: eg(o)
                                    }
                                }
                            }
                        default:
                            return {}
                        }
                    }
                }]
            })
              , [ed,ep] = to(et)
              , ev = P(L);
            U(()=>{
                es && (null == ev || ev())
            }
            , [es, ev]);
            let eb = null === (o = ef.arrow) || void 0 === o ? void 0 : o.x
              , ew = null === (a = ef.arrow) || void 0 === a ? void 0 : a.y
              , ex = (null === (l = ef.arrow) || void 0 === l ? void 0 : l.centerOffset) !== 0
              , [eS,eC] = (0,
            d.useState)();
            return U(()=>{
                j && eC(window.getComputedStyle(j).zIndex)
            }
            , [j]),
            (0,
            d.createElement)("div", {
                ref: Q.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                    ...ee,
                    transform: es ? ee.transform : "translate(0, -200%)",
                    minWidth: "max-content",
                    zIndex: eS,
                    "--radix-popper-transform-origin": [null === (u = ef.transformOrigin) || void 0 === u ? void 0 : u.x, null === (c = ef.transformOrigin) || void 0 === c ? void 0 : c.y].join(" ")
                },
                dir: e.dir
            }, (0,
            d.createElement)(e4, {
                scope: w,
                placedSide: ed,
                onArrowChange: B,
                arrowX: eb,
                arrowY: ew,
                shouldHideArrow: ex
            }, (0,
            d.createElement)(S.div, i({
                "data-side": ed,
                "data-align": ep
            }, I, {
                ref: z,
                style: {
                    ...I.style,
                    animation: es ? void 0 : "none",
                    opacity: null !== (s = ef.hide) && void 0 !== s && s.referenceHidden ? 0 : void 0
                }
            }))))
        }
        )
          , te = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right"
        }
          , tt = (0,
        d.forwardRef)(function(e, t) {
            let {__scopePopper: n, ...r} = e
              , o = e8("PopperArrow", n)
              , a = te[o.placedSide];
            return (0,
            d.createElement)("span", {
                ref: o.onArrowChange,
                style: {
                    position: "absolute",
                    left: o.arrowX,
                    top: o.arrowY,
                    [a]: 0,
                    transformOrigin: {
                        top: "",
                        right: "0 0",
                        bottom: "center 0",
                        left: "100% 0"
                    }[o.placedSide],
                    transform: {
                        top: "translateY(100%)",
                        right: "translateY(50%) rotate(90deg) translateX(-50%)",
                        bottom: "rotate(180deg)",
                        left: "translateY(50%) rotate(-90deg) translateX(50%)"
                    }[o.placedSide],
                    visibility: o.shouldHideArrow ? "hidden" : void 0
                }
            }, (0,
            d.createElement)(eQ, i({}, r, {
                ref: t,
                style: {
                    ...r.style,
                    display: "block"
                }
            })))
        });
        function tn(e) {
            return null !== e
        }
        let tr = e=>({
            name: "transformOrigin",
            options: e,
            fn(t) {
                var n, r, o, i, a;
                let {placement: l, rects: u, middlewareData: c} = t
                  , s = (null === (n = c.arrow) || void 0 === n ? void 0 : n.centerOffset) !== 0
                  , f = s ? 0 : e.arrowWidth
                  , d = s ? 0 : e.arrowHeight
                  , [p,m] = to(l)
                  , v = {
                    start: "0%",
                    center: "50%",
                    end: "100%"
                }[m]
                  , h = (null !== (r = null === (o = c.arrow) || void 0 === o ? void 0 : o.x) && void 0 !== r ? r : 0) + f / 2
                  , g = (null !== (i = null === (a = c.arrow) || void 0 === a ? void 0 : a.y) && void 0 !== i ? i : 0) + d / 2
                  , y = ""
                  , b = "";
                return "bottom" === p ? (y = s ? v : `${h}px`,
                b = `${-d}px`) : "top" === p ? (y = s ? v : `${h}px`,
                b = `${u.floating.height + d}px`) : "right" === p ? (y = `${-d}px`,
                b = s ? v : `${g}px`) : "left" === p && (y = `${u.floating.width + d}px`,
                b = s ? v : `${g}px`),
                {
                    data: {
                        x: y,
                        y: b
                    }
                }
            }
        });
        function to(e) {
            let[t,n="center"] = e.split("-");
            return [t, n]
        }
        let ti = e=>{
            let {__scopePopper: t, children: n} = e
              , [r,o] = (0,
            d.useState)(null);
            return (0,
            d.createElement)(e5, {
                scope: t,
                anchor: r,
                onAnchorChange: o
            }, n)
        }
          , ta = (0,
        d.forwardRef)((e,t)=>{
            var n;
            let {container: r=null == globalThis ? void 0 : null === (n = globalThis.document) || void 0 === n ? void 0 : n.body, ...o} = e;
            return r ? h.createPortal((0,
            d.createElement)(S.div, i({}, o, {
                ref: t
            })), r) : null
        }
        )
          , tl = e=>{
            let {present: t, children: n} = e
              , r = function(e) {
                var t;
                let[n,r] = (0,
                d.useState)()
                  , o = (0,
                d.useRef)({})
                  , i = (0,
                d.useRef)(e)
                  , a = (0,
                d.useRef)("none")
                  , l = e ? "mounted" : "unmounted"
                  , [u,c] = (t = {
                    mounted: {
                        UNMOUNT: "unmounted",
                        ANIMATION_OUT: "unmountSuspended"
                    },
                    unmountSuspended: {
                        MOUNT: "mounted",
                        ANIMATION_END: "unmounted"
                    },
                    unmounted: {
                        MOUNT: "mounted"
                    }
                },
                (0,
                d.useReducer)((e,n)=>{
                    let r = t[e][n];
                    return null != r ? r : e
                }
                , l));
                return (0,
                d.useEffect)(()=>{
                    let e = tu(o.current);
                    a.current = "mounted" === u ? e : "none"
                }
                , [u]),
                U(()=>{
                    let t = o.current
                      , n = i.current
                      , r = n !== e;
                    if (r) {
                        let r = a.current
                          , o = tu(t);
                        e ? c("MOUNT") : "none" === o || (null == t ? void 0 : t.display) === "none" ? c("UNMOUNT") : n && r !== o ? c("ANIMATION_OUT") : c("UNMOUNT"),
                        i.current = e
                    }
                }
                , [e, c]),
                U(()=>{
                    if (n) {
                        let e = e=>{
                            let t = tu(o.current)
                              , r = t.includes(e.animationName);
                            e.target === n && r && (0,
                            h.flushSync)(()=>c("ANIMATION_END"))
                        }
                          , t = e=>{
                            e.target === n && (a.current = tu(o.current))
                        }
                        ;
                        return n.addEventListener("animationstart", t),
                        n.addEventListener("animationcancel", e),
                        n.addEventListener("animationend", e),
                        ()=>{
                            n.removeEventListener("animationstart", t),
                            n.removeEventListener("animationcancel", e),
                            n.removeEventListener("animationend", e)
                        }
                    }
                    c("ANIMATION_END")
                }
                , [n, c]),
                {
                    isPresent: ["mounted", "unmountSuspended"].includes(u),
                    ref: (0,
                    d.useCallback)(e=>{
                        e && (o.current = getComputedStyle(e)),
                        r(e)
                    }
                    , [])
                }
            }(t)
              , o = "function" == typeof n ? n({
                present: r.isPresent
            }) : d.Children.only(n)
              , i = y(r.ref, o.ref)
              , a = "function" == typeof n;
            return a || r.isPresent ? (0,
            d.cloneElement)(o, {
                ref: i
            }) : null
        }
        ;
        function tu(e) {
            return (null == e ? void 0 : e.animationName) || "none"
        }
        tl.displayName = "Presence";
        let tc = "rovingFocusGroup.onEntryFocus"
          , ts = {
            bubbles: !1,
            cancelable: !0
        }
          , tf = "RovingFocusGroup"
          , [td,tp,tm] = O(tf)
          , [tv,th] = v(tf, [tm])
          , [tg,ty] = tv(tf)
          , tb = (0,
        d.forwardRef)((e,t)=>(0,
        d.createElement)(td.Provider, {
            scope: e.__scopeRovingFocusGroup
        }, (0,
        d.createElement)(td.Slot, {
            scope: e.__scopeRovingFocusGroup
        }, (0,
        d.createElement)(tw, i({}, e, {
            ref: t
        })))))
          , tw = (0,
        d.forwardRef)((e,t)=>{
            let {__scopeRovingFocusGroup: n, orientation: r, loop: o=!1, dir: a, currentTabStopId: l, defaultCurrentTabStopId: u, onCurrentTabStopIdChange: c, onEntryFocus: s, ...f} = e
              , p = (0,
            d.useRef)(null)
              , v = y(t, p)
              , h = R(a)
              , [g=null,b] = function({prop: e, defaultProp: t, onChange: n=()=>{}
            }) {
                let[r,o] = function({defaultProp: e, onChange: t}) {
                    let n = (0,
                    d.useState)(e)
                      , [r] = n
                      , o = (0,
                    d.useRef)(r)
                      , i = P(t);
                    return (0,
                    d.useEffect)(()=>{
                        o.current !== r && (i(r),
                        o.current = r)
                    }
                    , [r, o, i]),
                    n
                }({
                    defaultProp: t,
                    onChange: n
                })
                  , i = void 0 !== e
                  , a = i ? e : r
                  , l = P(n)
                  , u = (0,
                d.useCallback)(t=>{
                    if (i) {
                        let n = "function" == typeof t ? t(e) : t;
                        n !== e && l(n)
                    } else
                        o(t)
                }
                , [i, e, o, l]);
                return [a, u]
            }({
                prop: l,
                defaultProp: u,
                onChange: c
            })
              , [w,E] = (0,
            d.useState)(!1)
              , x = P(s)
              , C = tp(n)
              , O = (0,
            d.useRef)(!1)
              , [A,M] = (0,
            d.useState)(0);
            return (0,
            d.useEffect)(()=>{
                let e = p.current;
                if (e)
                    return e.addEventListener(tc, x),
                    ()=>e.removeEventListener(tc, x)
            }
            , [x]),
            (0,
            d.createElement)(tg, {
                scope: n,
                orientation: r,
                dir: h,
                loop: o,
                currentTabStopId: g,
                onItemFocus: (0,
                d.useCallback)(e=>b(e), [b]),
                onItemShiftTab: (0,
                d.useCallback)(()=>E(!0), []),
                onFocusableItemAdd: (0,
                d.useCallback)(()=>M(e=>e + 1), []),
                onFocusableItemRemove: (0,
                d.useCallback)(()=>M(e=>e - 1), [])
            }, (0,
            d.createElement)(S.div, i({
                tabIndex: w || 0 === A ? -1 : 0,
                "data-orientation": r
            }, f, {
                ref: v,
                style: {
                    outline: "none",
                    ...e.style
                },
                onMouseDown: m(e.onMouseDown, ()=>{
                    O.current = !0
                }
                ),
                onFocus: m(e.onFocus, e=>{
                    let t = !O.current;
                    if (e.target === e.currentTarget && t && !w) {
                        let t = new CustomEvent(tc,ts);
                        if (e.currentTarget.dispatchEvent(t),
                        !t.defaultPrevented) {
                            let e = C().filter(e=>e.focusable)
                              , t = e.find(e=>e.active)
                              , n = e.find(e=>e.id === g)
                              , r = [t, n, ...e].filter(Boolean)
                              , o = r.map(e=>e.ref.current);
                            tS(o)
                        }
                    }
                    O.current = !1
                }
                ),
                onBlur: m(e.onBlur, ()=>E(!1))
            })))
        }
        )
          , tE = (0,
        d.forwardRef)((e,t)=>{
            let {__scopeRovingFocusGroup: n, focusable: r=!0, active: o=!1, tabStopId: a, ...l} = e
              , u = function(e) {
                let[t,n] = d.useState(K());
                return U(()=>{
                    e || n(e=>null != e ? e : String(G++))
                }
                , [e]),
                e || (t ? `radix-${t}` : "")
            }()
              , c = a || u
              , s = ty("RovingFocusGroupItem", n)
              , f = s.currentTabStopId === c
              , p = tp(n)
              , {onFocusableItemAdd: v, onFocusableItemRemove: h} = s;
            return (0,
            d.useEffect)(()=>{
                if (r)
                    return v(),
                    ()=>h()
            }
            , [r, v, h]),
            (0,
            d.createElement)(td.ItemSlot, {
                scope: n,
                id: c,
                focusable: r,
                active: o
            }, (0,
            d.createElement)(S.span, i({
                tabIndex: f ? 0 : -1,
                "data-orientation": s.orientation
            }, l, {
                ref: t,
                onMouseDown: m(e.onMouseDown, e=>{
                    r ? s.onItemFocus(c) : e.preventDefault()
                }
                ),
                onFocus: m(e.onFocus, ()=>s.onItemFocus(c)),
                onKeyDown: m(e.onKeyDown, e=>{
                    if ("Tab" === e.key && e.shiftKey) {
                        s.onItemShiftTab();
                        return
                    }
                    if (e.target !== e.currentTarget)
                        return;
                    let t = function(e, t, n) {
                        var r;
                        let o = (r = e.key,
                        "rtl" !== n ? r : "ArrowLeft" === r ? "ArrowRight" : "ArrowRight" === r ? "ArrowLeft" : r);
                        if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(o)) && !("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(o)))
                            return tx[o]
                    }(e, s.orientation, s.dir);
                    if (void 0 !== t) {
                        e.preventDefault();
                        let o = p().filter(e=>e.focusable)
                          , i = o.map(e=>e.ref.current);
                        if ("last" === t)
                            i.reverse();
                        else if ("prev" === t || "next" === t) {
                            var n, r;
                            "prev" === t && i.reverse();
                            let o = i.indexOf(e.currentTarget);
                            i = s.loop ? (n = i,
                            r = o + 1,
                            n.map((e,t)=>n[(r + t) % n.length])) : i.slice(o + 1)
                        }
                        setTimeout(()=>tS(i))
                    }
                }
                )
            })))
        }
        )
          , tx = {
            ArrowLeft: "prev",
            ArrowUp: "prev",
            ArrowRight: "next",
            ArrowDown: "next",
            PageUp: "first",
            Home: "first",
            PageDown: "last",
            End: "last"
        };
        function tS(e) {
            let t = document.activeElement;
            for (let n of e)
                if (n === t || (n.focus(),
                document.activeElement !== t))
                    return
        }
        var tC = new WeakMap
          , tO = new WeakMap
          , tA = {}
          , tR = 0
          , tP = function(e) {
            return e && (e.host || tP(e.parentNode))
        }
          , tM = function(e, t, n, r) {
            var o = (Array.isArray(e) ? e : [e]).map(function(e) {
                if (t.contains(e))
                    return e;
                var n = tP(e);
                return n && t.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"),
                null)
            }).filter(function(e) {
                return !!e
            });
            tA[n] || (tA[n] = new WeakMap);
            var i = tA[n]
              , a = []
              , l = new Set
              , u = new Set(o)
              , c = function(e) {
                !e || l.has(e) || (l.add(e),
                c(e.parentNode))
            };
            o.forEach(c);
            var s = function(e) {
                !e || u.has(e) || Array.prototype.forEach.call(e.children, function(e) {
                    if (l.has(e))
                        s(e);
                    else {
                        var t = e.getAttribute(r)
                          , o = null !== t && "false" !== t
                          , u = (tC.get(e) || 0) + 1
                          , c = (i.get(e) || 0) + 1;
                        tC.set(e, u),
                        i.set(e, c),
                        a.push(e),
                        1 === u && o && tO.set(e, !0),
                        1 === c && e.setAttribute(n, "true"),
                        o || e.setAttribute(r, "true")
                    }
                })
            };
            return s(t),
            l.clear(),
            tR++,
            function() {
                a.forEach(function(e) {
                    var t = tC.get(e) - 1
                      , o = i.get(e) - 1;
                    tC.set(e, t),
                    i.set(e, o),
                    t || (tO.has(e) || e.removeAttribute(r),
                    tO.delete(e)),
                    o || e.removeAttribute(n)
                }),
                --tR || (tC = new WeakMap,
                tC = new WeakMap,
                tO = new WeakMap,
                tA = {})
            }
        }
          , t_ = function(e, t, n) {
            void 0 === n && (n = "data-aria-hidden");
            var r = Array.from(Array.isArray(e) ? e : [e])
              , o = t || ("undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
            return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
            tM(r, o, n, "aria-hidden")) : function() {
                return null
            }
        }
          , tT = function() {
            return (tT = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        };
        function tk(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
            return n
        }
        "function" == typeof SuppressedError && SuppressedError;
        var tD = "right-scroll-bar-position"
          , tL = "width-before-scroll-bar"
          , tI = (void 0 === a && (a = {}),
        (void 0 === l && (l = function(e) {
            return e
        }
        ),
        u = [],
        c = !1,
        s = {
            read: function() {
                if (c)
                    throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return u.length ? u[u.length - 1] : null
            },
            useMedium: function(e) {
                var t = l(e, c);
                return u.push(t),
                function() {
                    u = u.filter(function(e) {
                        return e !== t
                    })
                }
            },
            assignSyncMedium: function(e) {
                for (c = !0; u.length; ) {
                    var t = u;
                    u = [],
                    t.forEach(e)
                }
                u = {
                    push: function(t) {
                        return e(t)
                    },
                    filter: function() {
                        return u
                    }
                }
            },
            assignMedium: function(e) {
                c = !0;
                var t = [];
                if (u.length) {
                    var n = u;
                    u = [],
                    n.forEach(e),
                    t = u
                }
                var r = function() {
                    var n = t;
                    t = [],
                    n.forEach(e)
                }
                  , o = function() {
                    return Promise.resolve().then(r)
                };
                o(),
                u = {
                    push: function(e) {
                        t.push(e),
                        o()
                    },
                    filter: function(e) {
                        return t = t.filter(e),
                        u
                    }
                }
            }
        }).options = tT({
            async: !0,
            ssr: !1
        }, a),
        s)
          , tF = function() {}
          , tj = d.forwardRef(function(e, t) {
            var n, r, o, i = d.useRef(null), a = d.useState({
                onScrollCapture: tF,
                onWheelCapture: tF,
                onTouchMoveCapture: tF
            }), l = a[0], u = a[1], c = e.forwardProps, s = e.children, f = e.className, p = e.removeScrollBar, m = e.enabled, v = e.shards, h = e.sideCar, g = e.noIsolation, y = e.inert, b = e.allowPinchZoom, w = e.as, E = void 0 === w ? "div" : w, x = tk(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), S = (n = [i, t],
            r = function(e) {
                return n.forEach(function(t) {
                    return "function" == typeof t ? t(e) : t && (t.current = e),
                    t
                })
            }
            ,
            (o = (0,
            d.useState)(function() {
                return {
                    value: null,
                    callback: r,
                    facade: {
                        get current() {
                            return o.value
                        },
                        set current(value) {
                            var e = o.value;
                            e !== value && (o.value = value,
                            o.callback(value, e))
                        }
                    }
                }
            })[0]).callback = r,
            o.facade), C = tT(tT({}, x), l);
            return d.createElement(d.Fragment, null, m && d.createElement(h, {
                sideCar: tI,
                removeScrollBar: p,
                shards: v,
                noIsolation: g,
                inert: y,
                setCallbacks: u,
                allowPinchZoom: !!b,
                lockRef: i
            }), c ? d.cloneElement(d.Children.only(s), tT(tT({}, C), {
                ref: S
            })) : d.createElement(E, tT({}, C, {
                className: f,
                ref: S
            }), s))
        });
        tj.defaultProps = {
            enabled: !0,
            removeScrollBar: !0,
            inert: !1
        },
        tj.classNames = {
            fullWidth: tL,
            zeroRight: tD
        };
        var tN = function(e) {
            var t = e.sideCar
              , n = tk(e, ["sideCar"]);
            if (!t)
                throw Error("Sidecar: please provide `sideCar` property to import the right car");
            var r = t.read();
            if (!r)
                throw Error("Sidecar medium not found");
            return d.createElement(r, tT({}, n))
        };
        tN.isSideCarExport = !0;
        var tz = function() {
            var e = 0
              , t = null;
            return {
                add: function(r) {
                    if (0 == e && (t = function() {
                        if (!document)
                            return null;
                        var e = document.createElement("style");
                        e.type = "text/css";
                        var t = f || n.nc;
                        return t && e.setAttribute("nonce", t),
                        e
                    }())) {
                        var o, i;
                        (o = t).styleSheet ? o.styleSheet.cssText = r : o.appendChild(document.createTextNode(r)),
                        i = t,
                        (document.head || document.getElementsByTagName("head")[0]).appendChild(i)
                    }
                    e++
                },
                remove: function() {
                    --e || !t || (t.parentNode && t.parentNode.removeChild(t),
                    t = null)
                }
            }
        }
          , tW = function() {
            var e = tz();
            return function(t, n) {
                d.useEffect(function() {
                    return e.add(t),
                    function() {
                        e.remove()
                    }
                }, [t && n])
            }
        }
          , tB = function() {
            var e = tW();
            return function(t) {
                return e(t.styles, t.dynamic),
                null
            }
        }
          , t$ = {
            left: 0,
            top: 0,
            right: 0,
            gap: 0
        }
          , tV = function(e) {
            return parseInt(e || "", 10) || 0
        }
          , tH = function(e) {
            var t = window.getComputedStyle(document.body)
              , n = t["padding" === e ? "paddingLeft" : "marginLeft"]
              , r = t["padding" === e ? "paddingTop" : "marginTop"]
              , o = t["padding" === e ? "paddingRight" : "marginRight"];
            return [tV(n), tV(r), tV(o)]
        }
          , tU = function(e) {
            if (void 0 === e && (e = "margin"),
            "undefined" == typeof window)
                return t$;
            var t = tH(e)
              , n = document.documentElement.clientWidth
              , r = window.innerWidth;
            return {
                left: t[0],
                top: t[1],
                right: t[2],
                gap: Math.max(0, r - n + t[2] - t[0])
            }
        }
          , tK = tB()
          , tG = function(e, t, n, r) {
            var o = e.left
              , i = e.top
              , a = e.right
              , l = e.gap;
            return void 0 === n && (n = "margin"),
            "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(l, "px ").concat(r, ";\n  }\n  body {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(a, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(l, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(tD, " {\n    right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(tL, " {\n    margin-right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(tD, " .").concat(tD, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(tL, " .").concat(tL, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(l, "px;\n  }\n")
        }
          , tY = function(e) {
            var t = e.noRelative
              , n = e.noImportant
              , r = e.gapMode
              , o = void 0 === r ? "margin" : r
              , i = d.useMemo(function() {
                return tU(o)
            }, [o]);
            return d.createElement(tK, {
                styles: tG(i, !t, o, n ? "" : "!important")
            })
        }
          , tX = !1;
        if ("undefined" != typeof window)
            try {
                var tq = Object.defineProperty({}, "passive", {
                    get: function() {
                        return tX = !0,
                        !0
                    }
                });
                window.addEventListener("test", tq, tq),
                window.removeEventListener("test", tq, tq)
            } catch (e) {
                tX = !1
            }
        var tZ = !!tX && {
            passive: !1
        }
          , tJ = function(e, t) {
            var n = window.getComputedStyle(e);
            return "hidden" !== n[t] && !(n.overflowY === n.overflowX && "TEXTAREA" !== e.tagName && "visible" === n[t])
        }
          , tQ = function(e, t) {
            var n = t;
            do {
                if ("undefined" != typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host),
                t0(e, n)) {
                    var r = t1(e, n);
                    if (r[1] > r[2])
                        return !0
                }
                n = n.parentNode
            } while (n && n !== document.body);
            return !1
        }
          , t0 = function(e, t) {
            return "v" === e ? tJ(t, "overflowY") : tJ(t, "overflowX")
        }
          , t1 = function(e, t) {
            return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
        }
          , t2 = function(e, t, n, r, o) {
            var i, a = (i = window.getComputedStyle(t).direction,
            "h" === e && "rtl" === i ? -1 : 1), l = a * r, u = n.target, c = t.contains(u), s = !1, f = l > 0, d = 0, p = 0;
            do {
                var m = t1(e, u)
                  , v = m[0]
                  , h = m[1] - m[2] - a * v;
                (v || h) && t0(e, u) && (d += h,
                p += v),
                u = u.parentNode
            } while (!c && u !== document.body || c && (t.contains(u) || t === u));
            return f && (o && 0 === d || !o && l > d) ? s = !0 : !f && (o && 0 === p || !o && -l > p) && (s = !0),
            s
        }
          , t5 = function(e) {
            return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        }
          , t3 = function(e) {
            return [e.deltaX, e.deltaY]
        }
          , t6 = function(e) {
            return e && "current"in e ? e.current : e
        }
          , t7 = 0
          , t4 = []
          , t8 = (tI.useMedium(function(e) {
            var t = d.useRef([])
              , n = d.useRef([0, 0])
              , r = d.useRef()
              , o = d.useState(t7++)[0]
              , i = d.useState(function() {
                return tB()
            })[0]
              , a = d.useRef(e);
            d.useEffect(function() {
                a.current = e
            }, [e]),
            d.useEffect(function() {
                if (e.inert) {
                    document.body.classList.add("block-interactivity-".concat(o));
                    var t = (function(e, t, n) {
                        if (n || 2 == arguments.length)
                            for (var r, o = 0, i = t.length; o < i; o++)
                                !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)),
                                r[o] = t[o]);
                        return e.concat(r || Array.prototype.slice.call(t))
                    }
                    )([e.lockRef.current], (e.shards || []).map(t6), !0).filter(Boolean);
                    return t.forEach(function(e) {
                        return e.classList.add("allow-interactivity-".concat(o))
                    }),
                    function() {
                        document.body.classList.remove("block-interactivity-".concat(o)),
                        t.forEach(function(e) {
                            return e.classList.remove("allow-interactivity-".concat(o))
                        })
                    }
                }
            }, [e.inert, e.lockRef.current, e.shards]);
            var l = d.useCallback(function(e, t) {
                if ("touches"in e && 2 === e.touches.length)
                    return !a.current.allowPinchZoom;
                var o, i = t5(e), l = n.current, u = "deltaX"in e ? e.deltaX : l[0] - i[0], c = "deltaY"in e ? e.deltaY : l[1] - i[1], s = e.target, f = Math.abs(u) > Math.abs(c) ? "h" : "v";
                if ("touches"in e && "h" === f && "range" === s.type)
                    return !1;
                var d = tQ(f, s);
                if (!d)
                    return !0;
                if (d ? o = f : (o = "v" === f ? "h" : "v",
                d = tQ(f, s)),
                !d)
                    return !1;
                if (!r.current && "changedTouches"in e && (u || c) && (r.current = o),
                !o)
                    return !0;
                var p = r.current || o;
                return t2(p, t, e, "h" === p ? u : c, !0)
            }, [])
              , u = d.useCallback(function(e) {
                if (t4.length && t4[t4.length - 1] === i) {
                    var n = "deltaY"in e ? t3(e) : t5(e)
                      , r = t.current.filter(function(t) {
                        var r;
                        return t.name === e.type && t.target === e.target && (r = t.delta)[0] === n[0] && r[1] === n[1]
                    })[0];
                    if (r && r.should) {
                        e.cancelable && e.preventDefault();
                        return
                    }
                    if (!r) {
                        var o = (a.current.shards || []).map(t6).filter(Boolean).filter(function(t) {
                            return t.contains(e.target)
                        });
                        (o.length > 0 ? l(e, o[0]) : !a.current.noIsolation) && e.cancelable && e.preventDefault()
                    }
                }
            }, [])
              , c = d.useCallback(function(e, n, r, o) {
                var i = {
                    name: e,
                    delta: n,
                    target: r,
                    should: o
                };
                t.current.push(i),
                setTimeout(function() {
                    t.current = t.current.filter(function(e) {
                        return e !== i
                    })
                }, 1)
            }, [])
              , s = d.useCallback(function(e) {
                n.current = t5(e),
                r.current = void 0
            }, [])
              , f = d.useCallback(function(t) {
                c(t.type, t3(t), t.target, l(t, e.lockRef.current))
            }, [])
              , p = d.useCallback(function(t) {
                c(t.type, t5(t), t.target, l(t, e.lockRef.current))
            }, []);
            d.useEffect(function() {
                return t4.push(i),
                e.setCallbacks({
                    onScrollCapture: f,
                    onWheelCapture: f,
                    onTouchMoveCapture: p
                }),
                document.addEventListener("wheel", u, tZ),
                document.addEventListener("touchmove", u, tZ),
                document.addEventListener("touchstart", s, tZ),
                function() {
                    t4 = t4.filter(function(e) {
                        return e !== i
                    }),
                    document.removeEventListener("wheel", u, tZ),
                    document.removeEventListener("touchmove", u, tZ),
                    document.removeEventListener("touchstart", s, tZ)
                }
            }, []);
            var m = e.removeScrollBar
              , v = e.inert;
            return d.createElement(d.Fragment, null, v ? d.createElement(i, {
                styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
            }) : null, m ? d.createElement(tY, {
                gapMode: "margin"
            }) : null)
        }),
        tN)
          , t9 = d.forwardRef(function(e, t) {
            return d.createElement(tj, tT({}, e, {
                ref: t,
                sideCar: t8
            }))
        });
        t9.classNames = tj.classNames;
        let ne = ["Enter", " "]
          , nt = ["ArrowUp", "PageDown", "End"]
          , nn = ["ArrowDown", "PageUp", "Home", ...nt]
          , nr = {
            ltr: [...ne, "ArrowRight"],
            rtl: [...ne, "ArrowLeft"]
        }
          , no = {
            ltr: ["ArrowLeft"],
            rtl: ["ArrowRight"]
        }
          , ni = "Menu"
          , [na,nl,nu] = O(ni)
          , [nc,ns] = v(ni, [nu, e2, th])
          , nf = e2()
          , nd = th()
          , [np,nm] = nc(ni)
          , [nv,nh] = nc(ni)
          , ng = (0,
        d.forwardRef)((e,t)=>{
            let {__scopeMenu: n, ...r} = e
              , o = nf(n);
            return (0,
            d.createElement)(e6, i({}, o, r, {
                ref: t
            }))
        }
        )
          , ny = "MenuPortal"
          , [nb,nw] = nc(ny, {
            forceMount: void 0
        })
          , nE = "MenuContent"
          , [nx,nS] = nc(nE)
          , nC = (0,
        d.forwardRef)((e,t)=>{
            let n = nw(nE, e.__scopeMenu)
              , {forceMount: r=n.forceMount, ...o} = e
              , a = nm(nE, e.__scopeMenu)
              , l = nh(nE, e.__scopeMenu);
            return (0,
            d.createElement)(na.Provider, {
                scope: e.__scopeMenu
            }, (0,
            d.createElement)(tl, {
                present: r || a.open
            }, (0,
            d.createElement)(na.Slot, {
                scope: e.__scopeMenu
            }, l.modal ? (0,
            d.createElement)(nO, i({}, o, {
                ref: t
            })) : (0,
            d.createElement)(nA, i({}, o, {
                ref: t
            })))))
        }
        )
          , nO = (0,
        d.forwardRef)((e,t)=>{
            let n = nm(nE, e.__scopeMenu)
              , r = (0,
            d.useRef)(null)
              , o = y(t, r);
            return (0,
            d.useEffect)(()=>{
                let e = r.current;
                if (e)
                    return t_(e)
            }
            , []),
            (0,
            d.createElement)(nR, i({}, e, {
                ref: o,
                trapFocus: n.open,
                disableOutsidePointerEvents: n.open,
                disableOutsideScroll: !0,
                onFocusOutside: m(e.onFocusOutside, e=>e.preventDefault(), {
                    checkForDefaultPrevented: !1
                }),
                onDismiss: ()=>n.onOpenChange(!1)
            }))
        }
        )
          , nA = (0,
        d.forwardRef)((e,t)=>{
            let n = nm(nE, e.__scopeMenu);
            return (0,
            d.createElement)(nR, i({}, e, {
                ref: t,
                trapFocus: !1,
                disableOutsidePointerEvents: !1,
                disableOutsideScroll: !1,
                onDismiss: ()=>n.onOpenChange(!1)
            }))
        }
        )
          , nR = (0,
        d.forwardRef)((e,t)=>{
            let {__scopeMenu: n, loop: r=!1, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: l, disableOutsidePointerEvents: u, onEntryFocus: c, onEscapeKeyDown: s, onPointerDownOutside: f, onFocusOutside: p, onInteractOutside: v, onDismiss: h, disableOutsideScroll: g, ...w} = e
              , E = nm(nE, n)
              , x = nh(nE, n)
              , S = nf(n)
              , C = nd(n)
              , O = nl(n)
              , [A,R] = (0,
            d.useState)(null)
              , P = (0,
            d.useRef)(null)
              , M = y(t, P, E.onContentChange)
              , _ = (0,
            d.useRef)(0)
              , k = (0,
            d.useRef)("")
              , D = (0,
            d.useRef)(0)
              , F = (0,
            d.useRef)(null)
              , j = (0,
            d.useRef)("right")
              , N = (0,
            d.useRef)(0)
              , W = g ? t9 : d.Fragment
              , B = g ? {
                as: b,
                allowPinchZoom: !0
            } : void 0
              , $ = e=>{
                var t, n;
                let r = k.current + e
                  , o = O().filter(e=>!e.disabled)
                  , i = document.activeElement
                  , a = null === (t = o.find(e=>e.ref.current === i)) || void 0 === t ? void 0 : t.textValue
                  , l = o.map(e=>e.textValue)
                  , u = function(e, t, n) {
                    var r;
                    let o = t.length > 1 && Array.from(t).every(e=>e === t[0])
                      , i = o ? t[0] : t
                      , a = n ? e.indexOf(n) : -1
                      , l = (r = Math.max(a, 0),
                    e.map((t,n)=>e[(r + n) % e.length]))
                      , u = 1 === i.length;
                    u && (l = l.filter(e=>e !== n));
                    let c = l.find(e=>e.toLowerCase().startsWith(i.toLowerCase()));
                    return c !== n ? c : void 0
                }(l, r, a)
                  , c = null === (n = o.find(e=>e.textValue === u)) || void 0 === n ? void 0 : n.ref.current;
                !function e(t) {
                    k.current = t,
                    window.clearTimeout(_.current),
                    "" !== t && (_.current = window.setTimeout(()=>e(""), 1e3))
                }(r),
                c && setTimeout(()=>c.focus())
            }
            ;
            (0,
            d.useEffect)(()=>()=>window.clearTimeout(_.current), []),
            (0,
            d.useEffect)(()=>{
                var e, t;
                let n = document.querySelectorAll("[data-radix-focus-guard]");
                return document.body.insertAdjacentElement("afterbegin", null !== (e = n[0]) && void 0 !== e ? e : I()),
                document.body.insertAdjacentElement("beforeend", null !== (t = n[1]) && void 0 !== t ? t : I()),
                L++,
                ()=>{
                    1 === L && document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),
                    L--
                }
            }
            , []);
            let V = (0,
            d.useCallback)(e=>{
                var t, n;
                let r = j.current === (null === (t = F.current) || void 0 === t ? void 0 : t.side);
                return r && function(e, t) {
                    if (!t)
                        return !1;
                    let n = {
                        x: e.clientX,
                        y: e.clientY
                    };
                    return function(e, t) {
                        let {x: n, y: r} = e
                          , o = !1;
                        for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                            let a = t[e].x
                              , l = t[e].y
                              , u = t[i].x
                              , c = t[i].y
                              , s = l > r != c > r && n < (u - a) * (r - l) / (c - l) + a;
                            s && (o = !o)
                        }
                        return o
                    }(n, t)
                }(e, null === (n = F.current) || void 0 === n ? void 0 : n.area)
            }
            , []);
            return (0,
            d.createElement)(nx, {
                scope: n,
                searchRef: k,
                onItemEnter: (0,
                d.useCallback)(e=>{
                    V(e) && e.preventDefault()
                }
                , [V]),
                onItemLeave: (0,
                d.useCallback)(e=>{
                    var t;
                    V(e) || (null === (t = P.current) || void 0 === t || t.focus(),
                    R(null))
                }
                , [V]),
                onTriggerLeave: (0,
                d.useCallback)(e=>{
                    V(e) && e.preventDefault()
                }
                , [V]),
                pointerGraceTimerRef: D,
                onPointerGraceIntentChange: (0,
                d.useCallback)(e=>{
                    F.current = e
                }
                , [])
            }, (0,
            d.createElement)(W, B, (0,
            d.createElement)(z, {
                asChild: !0,
                trapped: o,
                onMountAutoFocus: m(a, e=>{
                    var t;
                    e.preventDefault(),
                    null === (t = P.current) || void 0 === t || t.focus()
                }
                ),
                onUnmountAutoFocus: l
            }, (0,
            d.createElement)(T, {
                asChild: !0,
                disableOutsidePointerEvents: u,
                onEscapeKeyDown: s,
                onPointerDownOutside: f,
                onFocusOutside: p,
                onInteractOutside: v,
                onDismiss: h
            }, (0,
            d.createElement)(tb, i({
                asChild: !0
            }, C, {
                dir: x.dir,
                orientation: "vertical",
                loop: r,
                currentTabStopId: A,
                onCurrentTabStopIdChange: R,
                onEntryFocus: m(c, e=>{
                    x.isUsingKeyboardRef.current || e.preventDefault()
                }
                )
            }), (0,
            d.createElement)(e9, i({
                role: "menu",
                "aria-orientation": "vertical",
                "data-state": nB(E.open),
                "data-radix-menu-content": "",
                dir: x.dir
            }, S, w, {
                ref: M,
                style: {
                    outline: "none",
                    ...w.style
                },
                onKeyDown: m(w.onKeyDown, e=>{
                    let t = e.target
                      , n = t.closest("[data-radix-menu-content]") === e.currentTarget
                      , r = e.ctrlKey || e.altKey || e.metaKey
                      , o = 1 === e.key.length;
                    n && ("Tab" === e.key && e.preventDefault(),
                    !r && o && $(e.key));
                    let i = P.current;
                    if (e.target !== i || !nn.includes(e.key))
                        return;
                    e.preventDefault();
                    let a = O().filter(e=>!e.disabled)
                      , l = a.map(e=>e.ref.current);
                    nt.includes(e.key) && l.reverse(),
                    function(e) {
                        let t = document.activeElement;
                        for (let n of e)
                            if (n === t || (n.focus(),
                            document.activeElement !== t))
                                return
                    }(l)
                }
                ),
                onBlur: m(e.onBlur, e=>{
                    e.currentTarget.contains(e.target) || (window.clearTimeout(_.current),
                    k.current = "")
                }
                ),
                onPointerMove: m(e.onPointerMove, nH(e=>{
                    let t = e.target
                      , n = N.current !== e.clientX;
                    if (e.currentTarget.contains(t) && n) {
                        let t = e.clientX > N.current ? "right" : "left";
                        j.current = t,
                        N.current = e.clientX
                    }
                }
                ))
            })))))))
        }
        )
          , nP = (0,
        d.forwardRef)((e,t)=>{
            let {__scopeMenu: n, ...r} = e;
            return (0,
            d.createElement)(S.div, i({
                role: "group"
            }, r, {
                ref: t
            }))
        }
        )
          , nM = ((e,t)=>{
            let {__scopeMenu: n, ...r} = e;
            return (0,
            d.createElement)(S.div, i({}, r, {
                ref: t
            }))
        }
        ,
        "MenuItem")
          , n_ = "menu.itemSelect"
          , nT = (0,
        d.forwardRef)((e,t)=>{
            let {disabled: n=!1, onSelect: r, ...o} = e
              , a = (0,
            d.useRef)(null)
              , l = nh(nM, e.__scopeMenu)
              , u = nS(nM, e.__scopeMenu)
              , c = y(t, a)
              , s = (0,
            d.useRef)(!1);
            return (0,
            d.createElement)(nk, i({}, o, {
                ref: c,
                disabled: n,
                onClick: m(e.onClick, ()=>{
                    let e = a.current;
                    if (!n && e) {
                        let t = new CustomEvent(n_,{
                            bubbles: !0,
                            cancelable: !0
                        });
                        e.addEventListener(n_, e=>null == r ? void 0 : r(e), {
                            once: !0
                        }),
                        C(e, t),
                        t.defaultPrevented ? s.current = !1 : l.onClose()
                    }
                }
                ),
                onPointerDown: t=>{
                    var n;
                    null === (n = e.onPointerDown) || void 0 === n || n.call(e, t),
                    s.current = !0
                }
                ,
                onPointerUp: m(e.onPointerUp, e=>{
                    var t;
                    s.current || null === (t = e.currentTarget) || void 0 === t || t.click()
                }
                ),
                onKeyDown: m(e.onKeyDown, e=>{
                    let t = "" !== u.searchRef.current;
                    !n && (!t || " " !== e.key) && ne.includes(e.key) && (e.currentTarget.click(),
                    e.preventDefault())
                }
                )
            }))
        }
        )
          , nk = (0,
        d.forwardRef)((e,t)=>{
            let {__scopeMenu: n, disabled: r=!1, textValue: o, ...a} = e
              , l = nS(nM, n)
              , u = nd(n)
              , c = (0,
            d.useRef)(null)
              , s = y(t, c)
              , [f,p] = (0,
            d.useState)(!1)
              , [v,h] = (0,
            d.useState)("");
            return (0,
            d.useEffect)(()=>{
                let e = c.current;
                if (e) {
                    var t;
                    h((null !== (t = e.textContent) && void 0 !== t ? t : "").trim())
                }
            }
            , [a.children]),
            (0,
            d.createElement)(na.ItemSlot, {
                scope: n,
                disabled: r,
                textValue: null != o ? o : v
            }, (0,
            d.createElement)(tE, i({
                asChild: !0
            }, u, {
                focusable: !r
            }), (0,
            d.createElement)(S.div, i({
                role: "menuitem",
                "data-highlighted": f ? "" : void 0,
                "aria-disabled": r || void 0,
                "data-disabled": r ? "" : void 0
            }, a, {
                ref: s,
                onPointerMove: m(e.onPointerMove, nH(e=>{
                    if (r)
                        l.onItemLeave(e);
                    else if (l.onItemEnter(e),
                    !e.defaultPrevented) {
                        let t = e.currentTarget;
                        t.focus()
                    }
                }
                )),
                onPointerLeave: m(e.onPointerLeave, nH(e=>l.onItemLeave(e))),
                onFocus: m(e.onFocus, ()=>p(!0)),
                onBlur: m(e.onBlur, ()=>p(!1))
            }))))
        }
        )
          , [nD,nL] = ((e,t)=>{
            let {checked: n=!1, onCheckedChange: r, ...o} = e;
            return (0,
            d.createElement)(nF, {
                scope: e.__scopeMenu,
                checked: n
            }, (0,
            d.createElement)(nT, i({
                role: "menuitemcheckbox",
                "aria-checked": n$(n) ? "mixed" : n
            }, o, {
                ref: t,
                "data-state": nV(n),
                onSelect: m(o.onSelect, ()=>null == r ? void 0 : r(!!n$(n) || !n), {
                    checkForDefaultPrevented: !1
                })
            })))
        }
        ,
        nc("MenuRadioGroup", {
            value: void 0,
            onValueChange: ()=>{}
        }))
          , nI = ((e,t)=>{
            let {value: n, onValueChange: r, ...o} = e
              , a = P(r);
            return (0,
            d.createElement)(nD, {
                scope: e.__scopeMenu,
                value: n,
                onValueChange: a
            }, (0,
            d.createElement)(nP, i({}, o, {
                ref: t
            })))
        }
        ,
        "MenuItemIndicator")
          , [nF,nj] = nc(nI, {
            checked: !1
        })
          , [nN,nz] = ((e,t)=>{
            let {__scopeMenu: n, forceMount: r, ...o} = e
              , a = nj(nI, n);
            return (0,
            d.createElement)(tl, {
                present: r || n$(a.checked) || !0 === a.checked
            }, (0,
            d.createElement)(S.span, i({}, o, {
                ref: t,
                "data-state": nV(a.checked)
            })))
        }
        ,
        nc("MenuSub"))
          , nW = "MenuSubTrigger";
        function nB(e) {
            return e ? "open" : "closed"
        }
        function n$(e) {
            return "indeterminate" === e
        }
        function nV(e) {
            return n$(e) ? "indeterminate" : e ? "checked" : "unchecked"
        }
        function nH(e) {
            return t=>"mouse" === t.pointerType ? e(t) : void 0
        }
        (e,t)=>{
            let n = nm(nW, e.__scopeMenu)
              , r = nh(nW, e.__scopeMenu)
              , o = nz(nW, e.__scopeMenu)
              , a = nS(nW, e.__scopeMenu)
              , l = (0,
            d.useRef)(null)
              , {pointerGraceTimerRef: u, onPointerGraceIntentChange: c} = a
              , s = {
                __scopeMenu: e.__scopeMenu
            }
              , f = (0,
            d.useCallback)(()=>{
                l.current && window.clearTimeout(l.current),
                l.current = null
            }
            , []);
            return (0,
            d.useEffect)(()=>f, [f]),
            (0,
            d.useEffect)(()=>{
                let e = u.current;
                return ()=>{
                    window.clearTimeout(e),
                    c(null)
                }
            }
            , [u, c]),
            (0,
            d.createElement)(ng, i({
                asChild: !0
            }, s), (0,
            d.createElement)(nk, i({
                id: o.triggerId,
                "aria-haspopup": "menu",
                "aria-expanded": n.open,
                "aria-controls": o.contentId,
                "data-state": nB(n.open)
            }, e, {
                ref: g(t, o.onTriggerChange),
                onClick: t=>{
                    var r;
                    null === (r = e.onClick) || void 0 === r || r.call(e, t),
                    e.disabled || t.defaultPrevented || (t.currentTarget.focus(),
                    n.open || n.onOpenChange(!0))
                }
                ,
                onPointerMove: m(e.onPointerMove, nH(t=>{
                    a.onItemEnter(t),
                    t.defaultPrevented || e.disabled || n.open || l.current || (a.onPointerGraceIntentChange(null),
                    l.current = window.setTimeout(()=>{
                        n.onOpenChange(!0),
                        f()
                    }
                    , 100))
                }
                )),
                onPointerLeave: m(e.onPointerLeave, nH(e=>{
                    var t, r;
                    f();
                    let o = null === (t = n.content) || void 0 === t ? void 0 : t.getBoundingClientRect();
                    if (o) {
                        let t = null === (r = n.content) || void 0 === r ? void 0 : r.dataset.side
                          , i = "right" === t
                          , l = o[i ? "left" : "right"]
                          , c = o[i ? "right" : "left"];
                        a.onPointerGraceIntentChange({
                            area: [{
                                x: e.clientX + (i ? -5 : 5),
                                y: e.clientY
                            }, {
                                x: l,
                                y: o.top
                            }, {
                                x: c,
                                y: o.top
                            }, {
                                x: c,
                                y: o.bottom
                            }, {
                                x: l,
                                y: o.bottom
                            }],
                            side: t
                        }),
                        window.clearTimeout(u.current),
                        u.current = window.setTimeout(()=>a.onPointerGraceIntentChange(null), 300)
                    } else {
                        if (a.onTriggerLeave(e),
                        e.defaultPrevented)
                            return;
                        a.onPointerGraceIntentChange(null)
                    }
                }
                )),
                onKeyDown: m(e.onKeyDown, t=>{
                    let o = "" !== a.searchRef.current;
                    if (!e.disabled && (!o || " " !== t.key) && nr[r.dir].includes(t.key)) {
                        var i;
                        n.onOpenChange(!0),
                        null === (i = n.content) || void 0 === i || i.focus(),
                        t.preventDefault()
                    }
                }
                )
            })))
        }
        ,
        (e,t)=>{
            let n = nw(nE, e.__scopeMenu)
              , {forceMount: r=n.forceMount, ...o} = e
              , a = nm(nE, e.__scopeMenu)
              , l = nh(nE, e.__scopeMenu)
              , u = nz("MenuSubContent", e.__scopeMenu)
              , c = (0,
            d.useRef)(null)
              , s = y(t, c);
            return (0,
            d.createElement)(na.Provider, {
                scope: e.__scopeMenu
            }, (0,
            d.createElement)(tl, {
                present: r || a.open
            }, (0,
            d.createElement)(na.Slot, {
                scope: e.__scopeMenu
            }, (0,
            d.createElement)(nR, i({
                id: u.contentId,
                "aria-labelledby": u.triggerId
            }, o, {
                ref: s,
                align: "start",
                side: "rtl" === l.dir ? "left" : "right",
                disableOutsidePointerEvents: !1,
                disableOutsideScroll: !1,
                trapFocus: !1,
                onOpenAutoFocus: e=>{
                    var t;
                    l.isUsingKeyboardRef.current && (null === (t = c.current) || void 0 === t || t.focus()),
                    e.preventDefault()
                }
                ,
                onCloseAutoFocus: e=>e.preventDefault(),
                onFocusOutside: m(e.onFocusOutside, e=>{
                    e.target !== u.trigger && a.onOpenChange(!1)
                }
                ),
                onEscapeKeyDown: m(e.onEscapeKeyDown, e=>{
                    l.onClose(),
                    e.preventDefault()
                }
                ),
                onKeyDown: m(e.onKeyDown, e=>{
                    let t = e.currentTarget.contains(e.target)
                      , n = no[l.dir].includes(e.key);
                    if (t && n) {
                        var r;
                        a.onOpenChange(!1),
                        null === (r = u.trigger) || void 0 === r || r.focus(),
                        e.preventDefault()
                    }
                }
                )
            })))))
        }
        ;
        let nU = e=>{
            let {__scopeMenu: t, open: n=!1, children: r, dir: o, onOpenChange: i, modal: a=!0} = e
              , l = nf(t)
              , [u,c] = (0,
            d.useState)(null)
              , s = (0,
            d.useRef)(!1)
              , f = P(i)
              , p = R(o);
            return (0,
            d.useEffect)(()=>{
                let e = ()=>{
                    s.current = !0,
                    document.addEventListener("pointerdown", t, {
                        capture: !0,
                        once: !0
                    }),
                    document.addEventListener("pointermove", t, {
                        capture: !0,
                        once: !0
                    })
                }
                  , t = ()=>s.current = !1;
                return document.addEventListener("keydown", e, {
                    capture: !0
                }),
                ()=>{
                    document.removeEventListener("keydown", e, {
                        capture: !0
                    }),
                    document.removeEventListener("pointerdown", t, {
                        capture: !0
                    }),
                    document.removeEventListener("pointermove", t, {
                        capture: !0
                    })
                }
            }
            , []),
            (0,
            d.createElement)(ti, l, (0,
            d.createElement)(np, {
                scope: t,
                open: n,
                onOpenChange: f,
                content: u,
                onContentChange: c
            }, (0,
            d.createElement)(nv, {
                scope: t,
                onClose: (0,
                d.useCallback)(()=>f(!1), [f]),
                isUsingKeyboardRef: s,
                dir: p,
                modal: a
            }, r)))
        }
          , nK = e=>{
            let {__scopeMenu: t, forceMount: n, children: r, container: o} = e
              , i = nm(ny, t);
            return (0,
            d.createElement)(nb, {
                scope: t,
                forceMount: n
            }, (0,
            d.createElement)(tl, {
                present: n || i.open
            }, (0,
            d.createElement)(ta, {
                asChild: !0,
                container: o
            }, r)))
        }
          , nG = "ContextMenu"
          , [nY,nX] = v(nG, [ns])
          , nq = ns()
          , [nZ,nJ] = nY(nG)
          , nQ = (0,
        d.forwardRef)((e,t)=>{
            let {__scopeContextMenu: n, disabled: r=!1, ...o} = e
              , a = nJ("ContextMenuTrigger", n)
              , l = nq(n)
              , u = (0,
            d.useRef)({
                x: 0,
                y: 0
            })
              , c = (0,
            d.useRef)({
                getBoundingClientRect: ()=>DOMRect.fromRect({
                    width: 0,
                    height: 0,
                    ...u.current
                })
            })
              , s = (0,
            d.useRef)(0)
              , f = (0,
            d.useCallback)(()=>window.clearTimeout(s.current), [])
              , p = e=>{
                u.current = {
                    x: e.clientX,
                    y: e.clientY
                },
                a.onOpenChange(!0)
            }
            ;
            return (0,
            d.useEffect)(()=>f, [f]),
            (0,
            d.useEffect)(()=>void (r && f()), [r, f]),
            (0,
            d.createElement)(d.Fragment, null, (0,
            d.createElement)(ng, i({}, l, {
                virtualRef: c
            })), (0,
            d.createElement)(S.span, i({
                "data-state": a.open ? "open" : "closed",
                "data-disabled": r ? "" : void 0
            }, o, {
                ref: t,
                style: {
                    WebkitTouchCallout: "none",
                    ...e.style
                },
                onContextMenu: r ? e.onContextMenu : m(e.onContextMenu, e=>{
                    f(),
                    p(e),
                    e.preventDefault()
                }
                ),
                onPointerDown: r ? e.onPointerDown : m(e.onPointerDown, n2(e=>{
                    f(),
                    s.current = window.setTimeout(()=>p(e), 700)
                }
                )),
                onPointerMove: r ? e.onPointerMove : m(e.onPointerMove, n2(f)),
                onPointerCancel: r ? e.onPointerCancel : m(e.onPointerCancel, n2(f)),
                onPointerUp: r ? e.onPointerUp : m(e.onPointerUp, n2(f))
            })))
        }
        )
          , n0 = (0,
        d.forwardRef)((e,t)=>{
            let {__scopeContextMenu: n, ...r} = e
              , o = nJ("ContextMenuContent", n)
              , a = nq(n)
              , l = (0,
            d.useRef)(!1);
            return (0,
            d.createElement)(nC, i({}, a, r, {
                ref: t,
                side: "right",
                sideOffset: 2,
                align: "start",
                onCloseAutoFocus: t=>{
                    var n;
                    null === (n = e.onCloseAutoFocus) || void 0 === n || n.call(e, t),
                    !t.defaultPrevented && l.current && t.preventDefault(),
                    l.current = !1
                }
                ,
                onInteractOutside: t=>{
                    var n;
                    null === (n = e.onInteractOutside) || void 0 === n || n.call(e, t),
                    t.defaultPrevented || o.modal || (l.current = !0)
                }
                ,
                style: {
                    ...e.style,
                    "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
                }
            }))
        }
        )
          , n1 = (0,
        d.forwardRef)((e,t)=>{
            let {__scopeContextMenu: n, ...r} = e
              , o = nq(n);
            return (0,
            d.createElement)(nT, i({}, o, r, {
                ref: t
            }))
        }
        );
        function n2(e) {
            return t=>"mouse" !== t.pointerType ? e(t) : void 0
        }
        let n5 = e=>{
            let {__scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: a=!0} = e
              , [l,u] = (0,
            d.useState)(!1)
              , c = nq(t)
              , s = P(r)
              , f = (0,
            d.useCallback)(e=>{
                u(e),
                s(e)
            }
            , [s]);
            return (0,
            d.createElement)(nZ, {
                scope: t,
                open: l,
                onOpenChange: f,
                modal: a
            }, (0,
            d.createElement)(nU, i({}, c, {
                dir: o,
                open: l,
                onOpenChange: f,
                modal: a
            }), n))
        }
          , n3 = nQ
          , n6 = e=>{
            let {__scopeContextMenu: t, ...n} = e
              , r = nq(t);
            return (0,
            d.createElement)(nK, i({}, r, n))
        }
          , n7 = n0
          , n4 = n1
    },
    3104: function(e, t, n) {
        "use strict";
        n.d(t, {
            H: function() {
                return j
            }
        });
        var r = n(6681)
          , o = n(5411)
          , i = n(5487);
        function a(e, t, n) {
            var r;
            if ("string" == typeof e) {
                let o = document;
                t && ((0,
                i.k)(!!t.current, "Scope provided, but no element detected."),
                o = t.current),
                n ? (null !== (r = n[e]) && void 0 !== r || (n[e] = o.querySelectorAll(e)),
                e = n[e]) : e = o.querySelectorAll(e)
            } else
                e instanceof Element && (e = [e]);
            return Array.from(e || [])
        }
        var l = n(6955)
          , u = n(2074)
          , c = n(4522);
        let s = (0,
        c.X)(()=>void 0 !== window.ScrollTimeline);
        class f {
            constructor(e) {
                this.animations = e.filter(Boolean)
            }
            then(e, t) {
                return Promise.all(this.animations).then(e).catch(t)
            }
            getAll(e) {
                return this.animations[0][e]
            }
            setAll(e, t) {
                for (let n = 0; n < this.animations.length; n++)
                    this.animations[n][e] = t
            }
            attachTimeline(e) {
                let t = this.animations.map(t=>{
                    if (!s() || !t.attachTimeline)
                        return t.pause(),
                        function(e, t) {
                            let n;
                            let r = ()=>{
                                let {currentTime: r} = t
                                  , o = null === r ? 0 : r.value
                                  , i = o / 100;
                                n !== i && e(i),
                                n = i
                            }
                            ;
                            return u.Wi.update(r, !0),
                            ()=>(0,
                            u.Pn)(r)
                        }(e=>{
                            t.time = t.duration * e
                        }
                        , e);
                    t.attachTimeline(e)
                }
                );
                return ()=>{
                    t.forEach((e,t)=>{
                        e && e(),
                        this.animations[t].stop()
                    }
                    )
                }
            }
            get time() {
                return this.getAll("time")
            }
            set time(e) {
                this.setAll("time", e)
            }
            get speed() {
                return this.getAll("speed")
            }
            set speed(e) {
                this.setAll("speed", e)
            }
            get duration() {
                let e = 0;
                for (let t = 0; t < this.animations.length; t++)
                    e = Math.max(e, this.animations[t].duration);
                return e
            }
            runAll(e) {
                this.animations.forEach(t=>t[e]())
            }
            play() {
                this.runAll("play")
            }
            pause() {
                this.runAll("pause")
            }
            stop() {
                this.runAll("stop")
            }
            cancel() {
                this.runAll("cancel")
            }
            complete() {
                this.runAll("complete")
            }
        }
        var d = n(8254)
          , p = n(5194)
          , m = n(5794)
          , v = n(4547)
          , h = n(1059)
          , g = n(5086)
          , y = n(2284)
          , b = n(6917)
          , w = n(599)
          , E = n(6615)
          , x = n(3967)
          , S = n(406);
        function C(e, t, n, r) {
            var o;
            return "number" == typeof t ? t : t.startsWith("-") || t.startsWith("+") ? Math.max(0, e + parseFloat(t)) : "<" === t ? n : null !== (o = r.get(t)) && void 0 !== o ? o : e
        }
        let O = (e,t,n)=>{
            let r = t - e;
            return ((n - e) % r + r) % r + e
        }
        ;
        var A = n(3338)
          , R = n(10)
          , P = n(22);
        function M(e, t) {
            return e.at !== t.at ? e.at - t.at : null === e.value ? 1 : null === t.value ? -1 : 0
        }
        function _(e, t) {
            return t.has(e) || t.set(e, {}),
            t.get(e)
        }
        function T(e, t) {
            return t[e] || (t[e] = []),
            t[e]
        }
        let k = e=>"number" == typeof e
          , D = e=>e.every(k);
        function L(e, t, n, r) {
            let o = a(e, r)
              , u = o.length;
            (0,
            i.k)(!!u, "No valid element provided.");
            let c = [];
            for (let e = 0; e < u; e++) {
                let r = o[e];
                l.R.has(r) || function(e) {
                    let t = {
                        presenceContext: null,
                        props: {},
                        visualState: {
                            renderState: {
                                transform: {},
                                transformOrigin: {},
                                style: {},
                                vars: {},
                                attrs: {}
                            },
                            latestValues: {}
                        }
                    }
                      , n = (0,
                    p.v)(e) ? new m.e(t,{
                        enableHardwareAcceleration: !1
                    }) : new v.W(t,{
                        enableHardwareAcceleration: !0
                    });
                    n.mount(e),
                    l.R.set(e, n)
                }(r);
                let i = l.R.get(r)
                  , a = {
                    ...n
                };
                "function" == typeof a.delay && (a.delay = a.delay(e, u)),
                c.push(...(0,
                d.w)(i, {
                    ...t,
                    transition: a
                }, {}))
            }
            return new f(c)
        }
        let I = e=>Array.isArray(e) && Array.isArray(e[0])
          , F = e=>function(t, n, r) {
            let o;
            return o = I(t) ? function(e, t, n) {
                let r = []
                  , o = function(e, {defaultTransition: t={}, ...n}={}, r) {
                    let o = t.duration || .3
                      , i = new Map
                      , l = new Map
                      , u = {}
                      , c = new Map
                      , s = 0
                      , f = 0
                      , d = 0;
                    for (let n = 0; n < e.length; n++) {
                        let i = e[n];
                        if ("string" == typeof i) {
                            c.set(i, f);
                            continue
                        }
                        if (!Array.isArray(i)) {
                            c.set(i.name, C(f, i.at, s, c));
                            continue
                        }
                        let[p,m,v={}] = i;
                        void 0 !== v.at && (f = C(f, v.at, s, c));
                        let h = 0
                          , x = (e,n,r,i=0,a=0)=>{
                            let l = Array.isArray(e) ? e : [e]
                              , {delay: u=0, times: c=(0,
                            w.Y)(l), type: s="keyframes", ...p} = n
                              , {ease: m=t.ease || "easeOut", duration: v} = n
                              , x = "function" == typeof u ? u(i, a) : u
                              , S = l.length;
                            if (S <= 2 && "spring" === s) {
                                let e = 100;
                                if (2 === S && D(l)) {
                                    let t = l[1] - l[0];
                                    e = Math.abs(t)
                                }
                                let t = {
                                    ...p
                                };
                                void 0 !== v && (t.duration = (0,
                                b.w)(v));
                                let n = function(e, t=100) {
                                    let n = (0,
                                    g.S)({
                                        keyframes: [0, t],
                                        ...e
                                    })
                                      , r = Math.min((0,
                                    y.i)(n), y.E);
                                    return {
                                        type: "keyframes",
                                        ease: e=>n.next(r * e).value / t,
                                        duration: (0,
                                        b.X)(r)
                                    }
                                }(t, e);
                                m = n.ease,
                                v = n.duration
                            }
                            null != v || (v = o);
                            let C = f + x
                              , M = C + v;
                            1 === c.length && 0 === c[0] && (c[1] = 1);
                            let _ = c.length - l.length;
                            _ > 0 && (0,
                            E.c)(c, _),
                            1 === l.length && l.unshift(null),
                            function(e, t, n, r, o, i) {
                                !function(e, t, n) {
                                    for (let r = 0; r < e.length; r++) {
                                        let o = e[r];
                                        o.at > t && o.at < n && ((0,
                                        R.cl)(e, o),
                                        r--)
                                    }
                                }(e, o, i);
                                for (let l = 0; l < t.length; l++) {
                                    var a;
                                    e.push({
                                        value: t[l],
                                        at: (0,
                                        P.C)(o, i, r[l]),
                                        easing: (a = l,
                                        (0,
                                        A.N)(n) ? n[O(0, n.length, a)] : n)
                                    })
                                }
                            }(r, l, m, c, C, M),
                            h = Math.max(x + v, h),
                            d = Math.max(M, d)
                        }
                        ;
                        if ((0,
                        S.i)(p)) {
                            let e = _(p, l);
                            x(m, v, T("default", e))
                        } else {
                            let e = a(p, r, u)
                              , t = e.length;
                            for (let n = 0; n < t; n++) {
                                let r = e[n]
                                  , o = _(r, l);
                                for (let e in m)
                                    x(m[e], v[e] ? {
                                        ...v,
                                        ...v[e]
                                    } : {
                                        ...v
                                    }, T(e, o), n, t)
                            }
                            s = f,
                            f += h
                        }
                    }
                    return l.forEach((e,r)=>{
                        for (let o in e) {
                            let a = e[o];
                            a.sort(M);
                            let l = []
                              , u = []
                              , c = [];
                            for (let e = 0; e < a.length; e++) {
                                let {at: t, value: n, easing: r} = a[e];
                                l.push(n),
                                u.push((0,
                                x.Y)(0, d, t)),
                                c.push(r || "easeOut")
                            }
                            0 !== u[0] && (u.unshift(0),
                            l.unshift(l[0]),
                            c.unshift("easeInOut")),
                            1 !== u[u.length - 1] && (u.push(1),
                            l.push(null)),
                            i.has(r) || i.set(r, {
                                keyframes: {},
                                transition: {}
                            });
                            let s = i.get(r);
                            s.keyframes[o] = l,
                            s.transition[o] = {
                                ...t,
                                duration: d,
                                ease: c,
                                times: u,
                                ...n
                            }
                        }
                    }
                    ),
                    i
                }(e, t, n);
                return o.forEach(({keyframes: e, transition: t},n)=>{
                    let o;
                    o = (0,
                    S.i)(n) ? (0,
                    h.D)(n, e.default, t.default) : L(n, e, t),
                    r.push(o)
                }
                ),
                new f(r)
            }(t, n, e) : "object" != typeof n || Array.isArray(n) ? (0,
            h.D)(t, n, r) : L(t, n, r, e),
            e && e.animations.push(o),
            o
        }
        ;
        function j() {
            let e = (0,
            r.h)(()=>({
                current: null,
                animations: []
            }))
              , t = (0,
            r.h)(()=>F(e));
            return (0,
            o.z)(()=>{
                e.animations.forEach(e=>e.stop())
            }
            ),
            [e, t]
        }
        F()
    }
}]);
