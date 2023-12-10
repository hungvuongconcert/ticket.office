(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[888], {
    6840: function(t, e, n) {
        (window.__done_P = window.__done_P || []).push(["/_app", function() {
            return n(6625)
        }
        ])
    },
    3991: function(t, e) {
        "use strict";
        var n, r;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var n in e)
                Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: e[n]
                })
        }(e, {
            PrefetchKind: function() {
                return n
            },
            ACTION_REFRESH: function() {
                return i
            },
            ACTION_NAVIGATE: function() {
                return s
            },
            ACTION_RESTORE: function() {
                return o
            },
            ACTION_SERVER_PATCH: function() {
                return a
            },
            ACTION_PREFETCH: function() {
                return l
            },
            ACTION_FAST_REFRESH: function() {
                return u
            },
            ACTION_SERVER_ACTION: function() {
                return c
            }
        });
        let i = "refresh"
          , s = "navigate"
          , o = "restore"
          , a = "server-patch"
          , l = "prefetch"
          , u = "fast-refresh"
          , c = "server-action";
        (r = n || (n = {})).AUTO = "auto",
        r.FULL = "full",
        r.TEMPORARY = "temporary",
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    1516: function(t, e, n) {
        "use strict";
        function r(t, e, n, r) {
            return !1
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "getDomainLocale", {
            enumerable: !0,
            get: function() {
                return r
            }
        }),
        n(2387),
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    5569: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function() {
                return P
            }
        });
        let r = n(8754)
          , i = r._(n(7294))
          , s = n(4532)
          , o = n(3353)
          , a = n(1410)
          , l = n(9064)
          , u = n(370)
          , c = n(9955)
          , h = n(4224)
          , d = n(508)
          , f = n(1516)
          , p = n(4266)
          , m = n(3991)
          , v = new Set;
        function g(t, e, n, r, i, s) {
            if (!s && !(0,
            o.isLocalURL)(e))
                return;
            if (!r.bypassPrefetchedCheck) {
                let i = void 0 !== r.locale ? r.locale : "locale"in t ? t.locale : void 0
                  , s = e + "%" + n + "%" + i;
                if (v.has(s))
                    return;
                v.add(s)
            }
            let a = s ? t.prefetch(e, i) : t.prefetch(e, n, r);
            Promise.resolve(a).catch(t=>{}
            )
        }
        function y(t) {
            return "string" == typeof t ? t : (0,
            a.formatUrl)(t)
        }
        let x = i.default.forwardRef(function(t, e) {
            let n, r;
            let {href: a, as: v, children: x, prefetch: P=null, passHref: b, replace: w, shallow: A, scroll: C, locale: T, onClick: E, onMouseEnter: S, onTouchStart: V, legacyBehavior: M=!1, ...j} = t;
            n = x,
            M && ("string" == typeof n || "number" == typeof n) && (n = i.default.createElement("a", null, n));
            let R = i.default.useContext(c.RouterContext)
              , D = i.default.useContext(h.AppRouterContext)
              , k = null != R ? R : D
              , L = !R
              , O = !1 !== P
              , F = null === P ? m.PrefetchKind.AUTO : m.PrefetchKind.FULL
              , {href: B, as: I} = i.default.useMemo(()=>{
                if (!R) {
                    let t = y(a);
                    return {
                        href: t,
                        as: v ? y(v) : t
                    }
                }
                let[t,e] = (0,
                s.resolveHref)(R, a, !0);
                return {
                    href: t,
                    as: v ? (0,
                    s.resolveHref)(R, v) : e || t
                }
            }
            , [R, a, v])
              , N = i.default.useRef(B)
              , $ = i.default.useRef(I);
            M && (r = i.default.Children.only(n));
            let U = M ? r && "object" == typeof r && r.ref : e
              , [W,_,z] = (0,
            d.useIntersection)({
                rootMargin: "200px"
            })
              , H = i.default.useCallback(t=>{
                ($.current !== I || N.current !== B) && (z(),
                $.current = I,
                N.current = B),
                W(t),
                U && ("function" == typeof U ? U(t) : "object" == typeof U && (U.current = t))
            }
            , [I, U, B, z, W]);
            i.default.useEffect(()=>{
                k && _ && O && g(k, B, I, {
                    locale: T
                }, {
                    kind: F
                }, L)
            }
            , [I, B, _, T, O, null == R ? void 0 : R.locale, k, L, F]);
            let X = {
                ref: H,
                onClick(t) {
                    M || "function" != typeof E || E(t),
                    M && r.props && "function" == typeof r.props.onClick && r.props.onClick(t),
                    k && !t.defaultPrevented && function(t, e, n, r, s, a, l, u, c, h) {
                        let {nodeName: d} = t.currentTarget
                          , f = "A" === d.toUpperCase();
                        if (f && (function(t) {
                            let e = t.currentTarget
                              , n = e.getAttribute("target");
                            return n && "_self" !== n || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which
                        }(t) || !c && !(0,
                        o.isLocalURL)(n)))
                            return;
                        t.preventDefault();
                        let p = ()=>{
                            let t = null == l || l;
                            "beforePopState"in e ? e[s ? "replace" : "push"](n, r, {
                                shallow: a,
                                locale: u,
                                scroll: t
                            }) : e[s ? "replace" : "push"](r || n, {
                                forceOptimisticNavigation: !h,
                                scroll: t
                            })
                        }
                        ;
                        c ? i.default.startTransition(p) : p()
                    }(t, k, B, I, w, A, C, T, L, O)
                },
                onMouseEnter(t) {
                    M || "function" != typeof S || S(t),
                    M && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(t),
                    k && (O || !L) && g(k, B, I, {
                        locale: T,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: F
                    }, L)
                },
                onTouchStart(t) {
                    M || "function" != typeof V || V(t),
                    M && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(t),
                    k && (O || !L) && g(k, B, I, {
                        locale: T,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: F
                    }, L)
                }
            };
            if ((0,
            l.isAbsoluteUrl)(I))
                X.href = I;
            else if (!M || b || "a" === r.type && !("href"in r.props)) {
                let t = void 0 !== T ? T : null == R ? void 0 : R.locale
                  , e = (null == R ? void 0 : R.isLocaleDomain) && (0,
                f.getDomainLocale)(I, t, null == R ? void 0 : R.locales, null == R ? void 0 : R.domainLocales);
                X.href = e || (0,
                p.addBasePath)((0,
                u.addLocale)(I, t, null == R ? void 0 : R.defaultLocale))
            }
            return M ? i.default.cloneElement(r, X) : i.default.createElement("a", {
                ...j,
                ...X
            }, n)
        })
          , P = x;
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    508: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "useIntersection", {
            enumerable: !0,
            get: function() {
                return l
            }
        });
        let r = n(7294)
          , i = n(29)
          , s = "function" == typeof IntersectionObserver
          , o = new Map
          , a = [];
        function l(t) {
            let {rootRef: e, rootMargin: n, disabled: l} = t
              , u = l || !s
              , [c,h] = (0,
            r.useState)(!1)
              , d = (0,
            r.useRef)(null)
              , f = (0,
            r.useCallback)(t=>{
                d.current = t
            }
            , []);
            (0,
            r.useEffect)(()=>{
                if (s) {
                    if (u || c)
                        return;
                    let t = d.current;
                    if (t && t.tagName) {
                        let r = function(t, e, n) {
                            let {id: r, observer: i, elements: s} = function(t) {
                                let e;
                                let n = {
                                    root: t.root || null,
                                    margin: t.rootMargin || ""
                                }
                                  , r = a.find(t=>t.root === n.root && t.margin === n.margin);
                                if (r && (e = o.get(r)))
                                    return e;
                                let i = new Map
                                  , s = new IntersectionObserver(t=>{
                                    t.forEach(t=>{
                                        let e = i.get(t.target)
                                          , n = t.isIntersecting || t.intersectionRatio > 0;
                                        e && n && e(n)
                                    }
                                    )
                                }
                                ,t);
                                return e = {
                                    id: n,
                                    observer: s,
                                    elements: i
                                },
                                a.push(n),
                                o.set(n, e),
                                e
                            }(n);
                            return s.set(t, e),
                            i.observe(t),
                            function() {
                                if (s.delete(t),
                                i.unobserve(t),
                                0 === s.size) {
                                    i.disconnect(),
                                    o.delete(r);
                                    let t = a.findIndex(t=>t.root === r.root && t.margin === r.margin);
                                    t > -1 && a.splice(t, 1)
                                }
                            }
                        }(t, t=>t && h(t), {
                            root: null == e ? void 0 : e.current,
                            rootMargin: n
                        });
                        return r
                    }
                } else if (!c) {
                    let t = (0,
                    i.requestIdleCallback)(()=>h(!0));
                    return ()=>(0,
                    i.cancelIdleCallback)(t)
                }
            }
            , [u, n, e, c, d.current]);
            let p = (0,
            r.useCallback)(()=>{
                h(!1)
            }
            , []);
            return [f, c, p]
        }
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    3769: function(t, e, n) {
        "use strict";
        n.d(e, {
            b: function() {
                return a
            },
            w: function() {
                return o
            }
        });
        var r = n(5893)
          , i = n(7294);
        let s = i.createContext({
            currentProperty: null,
            setCurrentProperty: ()=>{}
            ,
            muted: !1,
            setMuted: ()=>{}
        })
          , o = t=>{
            let {children: e} = t
              , [n,o] = i.useState(null)
              , [a,l] = i.useState(!1);
            return i.createElement(s.Provider, {
                value: {
                    currentProperty: n,
                    setCurrentProperty: o,
                    muted: a,
                    setMuted: l
                }
            }, (0,
            r.jsx)(r.Fragment, {
                children: e
            }))
        }
          , a = ()=>{
            let t = i.useContext(s);
            if (void 0 === t)
                throw Error("useAppContext must be used within a AppProvider");
            return t
        }
    },
    6401: function(t, e, n) {
        "use strict";
        n.d(e, {
            E: function() {
                return d
            }
        });
        var r = n(5893)
          , i = n(2266)
          , s = n.n(i)
          , o = n(1664)
          , a = n.n(o)
          , l = n(9411)
          , u = n.n(l);
        let c = ()=>(0,
        r.jsxs)("svg", {
            width: "7",
            height: "9",
            viewBox: "0 0 7 9",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0,
            r.jsx)("path", {
                d: "M0.000488281 4.49707L6.40403 0.801753L6.40403 -2.36448e-05L0.000488246 3.6943L0.000488281 4.49707Z",
                fill: "currentColor"
            }), (0,
            r.jsx)("path", {
                d: "M6.40354 9L6.40354 8.19822L-1.96673e-07 4.50291L-1.61609e-07 5.30468L6.40354 9Z",
                fill: "currentColor"
            })]
        })
          , h = t=>{
            let {children: e, href: n} = t;
            return (0,
            r.jsxs)(a(), {
                href: n,
                className: u().button,
                children: [(0,
                r.jsx)(c, {}), e]
            })
        }
          , d = t=>{
            let {children: e, blogPost: n} = t;
            return (0,
            r.jsxs)("main", {
                className: s().main,
                children: [n ? (0,
                r.jsx)(h, {
                    href: "/blog",
                    children: "View Blog"
                }) : (0,
                r.jsx)(h, {
                    href: "/",
                    children: "Return Home"
                }), (0,
                r.jsx)("section", {
                    children: e
                })]
            })
        }
    },
    4159: function(t, e, n) {
        "use strict";
        n.d(e, {
            yG: function() {
                return u
            }
        });
        var r = n(5893)
          , i = n(9008)
          , s = n.n(i)
          , o = n(1163);
        let a = "Avara"
          , l = "https://avara.xyz"
          , u = t=>{
            let {title: e="Avara", description: n="Avara creates smart contract-enabled products and public goods (open source protocols) that incorporate decentralized blockchain technologies and token-based economies.", image: i, devMode: u=!1} = t
              , c = (0,
            o.useRouter)()
              , h = (null == i ? void 0 : i.startsWith("http")) ? i : "".concat(l).concat(null != i ? i : "/preview.png")
              , d = "".concat(l).concat(c.asPath)
              , f = "".concat(null != e ? e : a, " ").concat("/" !== c.asPath ? "| ".concat(a) : "");
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsxs)(s(), {
                    children: [(0,
                    r.jsx)("title", {
                        children: f
                    }), (0,
                    r.jsx)("meta", {
                        name: "description",
                        content: null != n ? n : ""
                    }), (0,
                    r.jsx)("meta", {
                        name: "msapplication-TileColor",
                        content: "#000000"
                    }), (0,
                    r.jsx)("meta", {
                        name: "theme-color",
                        content: "#000000"
                    }), (0,
                    r.jsx)("meta", {
                        property: "og:title",
                        content: null != e ? e : ""
                    }), (0,
                    r.jsx)("meta", {
                        property: "og:description",
                        content: null != n ? n : ""
                    }), (0,
                    r.jsx)("meta", {
                        property: "og:site_name",
                        content: "avara.xyz"
                    }), (0,
                    r.jsx)("meta", {
                        property: "og:url",
                        content: d
                    }), (0,
                    r.jsx)("meta", {
                        property: "og:type",
                        content: "website"
                    }), (0,
                    r.jsx)("meta", {
                        property: "og:image",
                        content: h
                    }), (0,
                    r.jsx)("meta", {
                        name: "twitter:domain",
                        content: l
                    }), (0,
                    r.jsx)("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }), (0,
                    r.jsx)("meta", {
                        name: "twitter:site",
                        content: l
                    }), (0,
                    r.jsx)("meta", {
                        name: "twitter:creator",
                        content: "@avara"
                    }), (0,
                    r.jsx)("meta", {
                        name: "twitter:title",
                        content: null != e ? e : ""
                    }), (0,
                    r.jsx)("meta", {
                        name: "twitter:description",
                        content: null != n ? n : ""
                    }), (0,
                    r.jsx)("meta", {
                        name: "twitter:url",
                        content: d
                    }), (0,
                    r.jsx)("meta", {
                        property: "twitter:image",
                        content: h
                    })]
                }), !1]
            })
        }
    },
    6625: function(t, e, n) {
        "use strict";
        n.r(e),
        n.d(e, {
            default: function() {
                return S
            }
        });
        var r = n(5893)
          , i = n(9008)
          , s = n.n(i);
        n(8804);
        var o = n(5820)
          , a = n(4876)
          , l = n(3273)
          , u = n.n(l)
          , c = n(4159)
          , h = n(1664)
          , d = n.n(h)
          , f = n(4043)
          , p = n.n(f);
        let m = ()=>(0,
        r.jsx)("svg", {
            width: "9",
            height: "10",
            viewBox: "0 0 9 10",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0,
            r.jsx)("path", {
                d: "M0.5 9L8.5 1M8.5 1H2.1M8.5 1V7.4",
                stroke: "white"
            })
        })
          , v = t=>{
            let {children: e, href: n} = t;
            return (0,
            r.jsx)("div", {
                className: p().container,
                children: n ? (0,
                r.jsxs)(d(), {
                    href: n,
                    className: p().content,
                    children: [(0,
                    r.jsx)("span", {
                        children: e
                    }), " ", (0,
                    r.jsx)(m, {})]
                }) : (0,
                r.jsx)("div", {
                    className: p().content,
                    children: e
                })
            })
        }
        ;
        var g = n(3769)
          , y = n(1163);
        let x = t=>{
            let {children: e, title: n, description: i} = t
              , s = (0,
            y.useRouter)()
              , {currentProperty: l} = (0,
            g.b)();
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(c.yG, {
                    title: n,
                    description: i
                }), (0,
                r.jsxs)(o.M, {
                    mode: "wait",
                    children: [(0,
                    r.jsx)(a.E.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        children: (0,
                        r.jsx)("main", {
                            className: u().main,
                            children: e
                        })
                    }, s.pathname), (0,
                    r.jsx)(a.E.div, {
                        initial: {
                            y: -200
                        },
                        animate: {
                            y: 0
                        },
                        transition: {
                            duration: 1,
                            delay: 1,
                            ease: [.19, 1, .22, 1]
                        },
                        children: (0,
                        r.jsx)(o.M, {
                            
                        })
                    })]
                })]
            })
        }
        ;
        var P = n(6401)
          , b = n(7294);
        let w = ()=>{
            let {events: t} = (0,
            y.useRouter)()
              , e = function() {
                let {isReady: t, asPath: e, basePath: n, locale: r} = (0,
                y.useRouter)()
                  , i = b.useCallback(()=>{
                    if (!t)
                        return null;
                    let i = e;
                    return n && (i = n + ("/" === i ? "" : i)),
                    r && (i = "/".concat(r).concat(i)),
                    i
                }
                , [e, t, n, r])
                  , [s,o] = b.useState(i());
                return b.useEffect(()=>{
                    o(i())
                }
                , [i]),
                s
            }()
              , n = b.useRef(new Map)
              , r = b.useRef(null)
              , i = b.useRef(null)
              , s = b.useRef(null)
              , o = b.useCallback((t,e)=>{
                if (t && e) {
                    var r;
                    let i = n.current
                      , s = null !== (r = i.get(t)) && void 0 !== r ? r : new Set
                      , o = A(e);
                    o && !s.has(o) && (s.add(o),
                    i.set(t, s))
                }
            }
            , [])
              , a = b.useCallback(()=>{
                let t = C("head > link[data-n-p-perm],head > style[data-n-href-perm]");
                return t.map(t=>{
                    let e = "LINK" === t.nodeName ? t.getAttribute("href") : t.getAttribute("data-n-href-perm")
                      , n = A(e);
                    return {
                        node: t,
                        hash: n
                    }
                }
                )
            }
            , [])
              , l = b.useCallback(()=>{
                var t, e;
                let s = r.current && null !== (t = n.current.get(r.current)) && void 0 !== t ? t : new Set
                  , o = i.current && null !== (e = n.current.get(i.current)) && void 0 !== e ? e : new Set;
                return [...s, ...o]
            }
            , [])
              , u = b.useCallback(()=>{
                let t = l();
                a().forEach(e=>{
                    let {node: n, hash: r} = e;
                    if (!t.includes(r)) {
                        var i;
                        null === (i = n.parentNode) || void 0 === i || i.removeChild(n)
                    }
                }
                )
            }
            , [a, l]);
            return b.useEffect(()=>{
                e && !r.current && (r.current = e,
                C("head > link[data-n-p]").reverse().forEach(t=>{
                    t.removeAttribute("data-n-p"),
                    t.setAttribute("data-n-p-perm", ""),
                    o(e, t.getAttribute("href")),
                    E(t)
                }
                ))
            }
            , [e, o]),
            b.useEffect(()=>{
                let e = t=>{
                    s.current = T(),
                    i.current = r.current,
                    r.current = t
                }
                  , n = ()=>{
                    u(),
                    i.current = null
                }
                ;
                return t.on("routeChangeStart", e),
                t.on("routeChangeComplete", n),
                ()=>{
                    t.off("routeChangeStart", e),
                    t.off("routeChangeComplete", n)
                }
            }
            , [t, u]),
            b.useEffect(()=>{
                let t = new MutationObserver(t=>{
                    t.forEach(t=>{
                        let {target: e, addedNodes: n} = t;
                        "HEAD" === e.nodeName && n.forEach(t=>{
                            if ("STYLE" === t.nodeName && t.hasAttribute("data-n-href")) {
                                var e;
                                let n = null !== (e = t.getAttribute("data-n-href")) && void 0 !== e ? e : "";
                                t.setAttribute("data-n-href-perm", n),
                                t.removeAttribute("data-n-href"),
                                "x" === t.getAttribute("media") && t.removeAttribute("media"),
                                o(r.current, n),
                                E(t),
                                s.current = t
                            }
                        }
                        )
                    }
                    )
                }
                );
                return t.observe(document.head, {
                    childList: !0,
                    subtree: !0
                }),
                ()=>{
                    t.disconnect()
                }
            }
            , [o]),
            u
        }
        ;
        function A(t) {
            var e, n;
            return null !== (n = null == t ? void 0 : null === (e = t.match(/([a-z0-9]+).css$/)) || void 0 === e ? void 0 : e[1]) && void 0 !== n ? n : null
        }
        function C(t) {
            return Array.from(document.querySelectorAll(t))
        }
        function T() {
            return document.querySelector("noscript[data-n-css]")
        }
        function E(t) {
            var e;
            let n = T();
            null == n || null === (e = n.parentNode) || void 0 === e || e.insertBefore(t, null == n ? void 0 : n.nextSibling)
        }
        function S(t) {
            let {Component: e, pageProps: n, router: i} = t
              , l = e.getLayout ? e.getLayout : e.toString().startsWith("function MDXContent") ? t=>(0,
            r.jsx)(P.E, {
                blogPost: !0,
                children: t
            }) : t=>(0,
            r.jsx)(x, {
                children: t
            });
            return w(),
            (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsxs)(s(), {
                    children: [(0,
                    r.jsx)("meta", {
                        charSet: "utf-8"
                    }), (0,
                    r.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, maximum-scale=1"
                    }), (0,
                    r.jsx)("meta", {
                        name: "theme-color",
                        content: "#000000"
                    }), (0,
                    r.jsx)("meta", {
                        name: "msapplication-navbutton-color",
                        content: "#000000"
                    }), (0,
                    r.jsx)("meta", {
                        name: "apple-mobile-web-app-status-bar-style",
                        content: "#000000"
                    })]
                }), (0,
                r.jsx)(g.w, {
                    children: (0,
                    r.jsx)(o.M, {
                        mode: "wait",
                        initial: !1,
                        children: (0,
                        r.jsx)(a.E.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                duration: .2
                            },
                            children: l((0,
                            r.jsx)(e, {
                                ...n
                            }))
                        }, i.pathname)
                    })
                })]
            })
        }
    },
    8804: function() {},
    9411: function(t) {
        t.exports = {
            button: "styles_button__Mz1TS"
        }
    },
    4043: function(t) {
        t.exports = {
            container: "styles_container__3Tolf",
            content: "styles_content__PBlCz"
        }
    },
    2266: function(t) {
        t.exports = {
            main: "styles_main__FjzCk"
        }
    },
    3273: function(t) {
        t.exports = {
           
        }
    },
    9008: function(t, e, n) {
        t.exports = n(2636)
    },
    1664: function(t, e, n) {
        t.exports = n(5569)
    },
    1163: function(t, e, n) {
        t.exports = n(6885)
    },
    5086: function(t, e, n) {
        "use strict";
        n.d(e, {
            S: function() {
                return h
            }
        });
        var r = n(6917)
          , i = n(5753)
          , s = n(5487)
          , o = n(4169);
        function a(t, e) {
            return t * Math.sqrt(1 - e * e)
        }
        let l = ["duration", "bounce"]
          , u = ["stiffness", "damping", "mass"];
        function c(t, e) {
            return e.some(e=>void 0 !== t[e])
        }
        function h({keyframes: t, restDelta: e, restSpeed: n, ...h}) {
            let d;
            let f = t[0]
              , p = t[t.length - 1]
              , m = {
                done: !1,
                value: f
            }
              , {stiffness: v, damping: g, mass: y, velocity: x, duration: P, isResolvedFromDuration: b} = function(t) {
                let e = {
                    velocity: 0,
                    stiffness: 100,
                    damping: 10,
                    mass: 1,
                    isResolvedFromDuration: !1,
                    ...t
                };
                if (!c(t, u) && c(t, l)) {
                    let n = function({duration: t=800, bounce: e=.25, velocity: n=0, mass: i=1}) {
                        let l, u;
                        (0,
                        s.K)(t <= (0,
                        r.w)(10), "Spring duration must be 10 seconds or less");
                        let c = 1 - e;
                        c = (0,
                        o.u)(.05, 1, c),
                        t = (0,
                        o.u)(.01, 10, (0,
                        r.X)(t)),
                        c < 1 ? (l = e=>{
                            let r = e * c
                              , i = r * t
                              , s = a(e, c);
                            return .001 - (r - n) / s * Math.exp(-i)
                        }
                        ,
                        u = e=>{
                            let r = e * c
                              , i = r * t
                              , s = Math.pow(c, 2) * Math.pow(e, 2) * t
                              , o = a(Math.pow(e, 2), c)
                              , u = -l(e) + .001 > 0 ? -1 : 1;
                            return u * ((i * n + n - s) * Math.exp(-i)) / o
                        }
                        ) : (l = e=>{
                            let r = Math.exp(-e * t)
                              , i = (e - n) * t + 1;
                            return -.001 + r * i
                        }
                        ,
                        u = e=>{
                            let r = Math.exp(-e * t)
                              , i = (n - e) * (t * t);
                            return r * i
                        }
                        );
                        let h = 5 / t
                          , d = function(t, e, n) {
                            let r = n;
                            for (let n = 1; n < 12; n++)
                                r -= t(r) / e(r);
                            return r
                        }(l, u, h);
                        if (t = (0,
                        r.w)(t),
                        isNaN(d))
                            return {
                                stiffness: 100,
                                damping: 10,
                                duration: t
                            };
                        {
                            let e = Math.pow(d, 2) * i;
                            return {
                                stiffness: e,
                                damping: 2 * c * Math.sqrt(i * e),
                                duration: t
                            }
                        }
                    }(t);
                    (e = {
                        ...e,
                        ...n,
                        velocity: 0,
                        mass: 1
                    }).isResolvedFromDuration = !0
                }
                return e
            }(h)
              , w = x ? -(0,
            r.X)(x) : 0
              , A = g / (2 * Math.sqrt(v * y))
              , C = p - f
              , T = (0,
            r.X)(Math.sqrt(v / y))
              , E = 5 > Math.abs(C);
            if (n || (n = E ? .01 : 2),
            e || (e = E ? .005 : .5),
            A < 1) {
                let t = a(T, A);
                d = e=>{
                    let n = Math.exp(-A * T * e);
                    return p - n * ((w + A * T * C) / t * Math.sin(t * e) + C * Math.cos(t * e))
                }
            } else if (1 === A)
                d = t=>p - Math.exp(-T * t) * (C + (w + T * C) * t);
            else {
                let t = T * Math.sqrt(A * A - 1);
                d = e=>{
                    let n = Math.exp(-A * T * e)
                      , r = Math.min(t * e, 300);
                    return p - n * ((w + A * T * C) * Math.sinh(r) + t * C * Math.cosh(r)) / t
                }
            }
            return {
                calculatedDuration: b && P || null,
                next: t=>{
                    let r = d(t);
                    if (b)
                        m.done = t >= P;
                    else {
                        let s = w;
                        0 !== t && (s = A < 1 ? (0,
                        i.P)(d, t, r) : 0);
                        let o = Math.abs(s) <= n
                          , a = Math.abs(p - r) <= e;
                        m.done = o && a
                    }
                    return m.value = m.done ? p : r,
                    m
                }
            }
        }
    },
    2284: function(t, e, n) {
        "use strict";
        n.d(e, {
            E: function() {
                return r
            },
            i: function() {
                return i
            }
        });
        let r = 2e4;
        function i(t) {
            let e = 0
              , n = t.next(e);
            for (; !n.done && e < r; )
                e += 50,
                n = t.next(e);
            return e >= r ? 1 / 0 : e
        }
    },
    5753: function(t, e, n) {
        "use strict";
        n.d(e, {
            P: function() {
                return i
            }
        });
        var r = n(3038);
        function i(t, e, n) {
            let i = Math.max(e - 5, 0);
            return (0,
            r.R)(n - t(i), e - i)
        }
    },
    4502: function(t, e, n) {
        "use strict";
        n.d(e, {
            v: function() {
                return tv
            }
        });
        var r = n(5487)
          , i = n(6917);
        let s = {
            current: !1
        }
          , o = t=>Array.isArray(t) && "number" == typeof t[0]
          , a = ([t,e,n,r])=>`cubic-bezier(${t}, ${e}, ${n}, ${r})`
          , l = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: a([0, .65, .55, 1]),
            circOut: a([.55, 0, 1, .45]),
            backIn: a([.31, .01, .66, -.59]),
            backOut: a([.33, 1.53, .69, .99])
        };
        var u = n(1662);
        let c = (t,e,n)=>(((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;
        function h(t, e, n, r) {
            if (t === e && n === r)
                return u.Z;
            let i = e=>(function(t, e, n, r, i) {
                let s, o;
                let a = 0;
                do
                    (s = c(o = e + (n - e) / 2, r, i) - t) > 0 ? n = o : e = o;
                while (Math.abs(s) > 1e-7 && ++a < 12);
                return o
            }
            )(e, 0, 1, t, n);
            return t=>0 === t || 1 === t ? t : c(i(t), e, r)
        }
        let d = h(.42, 0, 1, 1)
          , f = h(0, 0, .58, 1)
          , p = h(.42, 0, .58, 1);
        var m = n(3338)
          , v = n(7255)
          , g = n(415)
          , y = n(5129);
        let x = h(.33, 1.53, .69, .99)
          , P = (0,
        y.M)(x)
          , b = (0,
        g.o)(P)
          , w = {
            linear: u.Z,
            easeIn: d,
            easeInOut: p,
            easeOut: f,
            circIn: v.Z7,
            circInOut: v.X7,
            circOut: v.Bn,
            backIn: P,
            backInOut: b,
            backOut: x,
            anticipate: t=>(t *= 2) < 1 ? .5 * P(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        }
          , A = t=>{
            if (Array.isArray(t)) {
                (0,
                r.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                let[e,n,i,s] = t;
                return h(e, n, i, s)
            }
            return "string" == typeof t ? ((0,
            r.k)(void 0 !== w[t], `Invalid easing type '${t}'`),
            w[t]) : t
        }
        ;
        var C = n(5385)
          , T = n(4169)
          , E = n(22);
        function S(t, e, n) {
            return (n < 0 && (n += 1),
            n > 1 && (n -= 1),
            n < 1 / 6) ? t + (e - t) * 6 * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
        }
        var V = n(6382)
          , M = n(819)
          , j = n(3184);
        let R = (t,e,n)=>{
            let r = t * t;
            return Math.sqrt(Math.max(0, n * (e * e - r) + r))
        }
          , D = [V.$, M.m, j.J]
          , k = t=>D.find(e=>e.test(t));
        function L(t) {
            let e = k(t);
            (0,
            r.k)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`);
            let n = e.parse(t);
            return e === j.J && (n = function({hue: t, saturation: e, lightness: n, alpha: r}) {
                t /= 360,
                n /= 100;
                let i = 0
                  , s = 0
                  , o = 0;
                if (e /= 100) {
                    let r = n < .5 ? n * (1 + e) : n + e - n * e
                      , a = 2 * n - r;
                    i = S(a, r, t + 1 / 3),
                    s = S(a, r, t),
                    o = S(a, r, t - 1 / 3)
                } else
                    i = s = o = n;
                return {
                    red: Math.round(255 * i),
                    green: Math.round(255 * s),
                    blue: Math.round(255 * o),
                    alpha: r
                }
            }(n)),
            n
        }
        let O = (t,e)=>{
            let n = L(t)
              , r = L(e)
              , i = {
                ...n
            };
            return t=>(i.red = R(n.red, r.red, t),
            i.green = R(n.green, r.green, t),
            i.blue = R(n.blue, r.blue, t),
            i.alpha = (0,
            E.C)(n.alpha, r.alpha, t),
            M.m.transform(i))
        }
        ;
        var F = n(3624)
          , B = n(1550);
        let I = (t,e)=>n=>`${n > 0 ? e : t}`;
        function N(t, e) {
            return "number" == typeof t ? n=>(0,
            E.C)(t, e, n) : C.$.test(t) ? O(t, e) : t.startsWith("var(") ? I(t, e) : W(t, e)
        }
        let $ = (t,e)=>{
            let n = [...t]
              , r = n.length
              , i = t.map((t,n)=>N(t, e[n]));
            return t=>{
                for (let e = 0; e < r; e++)
                    n[e] = i[e](t);
                return n
            }
        }
          , U = (t,e)=>{
            let n = {
                ...t,
                ...e
            }
              , r = {};
            for (let i in n)
                void 0 !== t[i] && void 0 !== e[i] && (r[i] = N(t[i], e[i]));
            return t=>{
                for (let e in r)
                    n[e] = r[e](t);
                return n
            }
        }
          , W = (t,e)=>{
            let n = B.P.createTransformer(e)
              , i = (0,
            B.V)(t)
              , s = (0,
            B.V)(e)
              , o = i.numVars === s.numVars && i.numColors === s.numColors && i.numNumbers >= s.numNumbers;
            return o ? (0,
            F.z)($(i.values, s.values), n) : ((0,
            r.K)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),
            I(t, e))
        }
        ;
        var _ = n(3967);
        let z = (t,e)=>n=>(0,
        E.C)(t, e, n);
        function H(t, e, {clamp: n=!0, ease: i, mixer: s}={}) {
            let o = t.length;
            if ((0,
            r.k)(o === e.length, "Both input and output ranges must be the same length"),
            1 === o)
                return ()=>e[0];
            t[0] > t[o - 1] && (t = [...t].reverse(),
            e = [...e].reverse());
            let a = function(t, e, n) {
                let r = []
                  , i = n || function(t) {
                    if ("number" == typeof t)
                        ;
                    else if ("string" == typeof t)
                        return C.$.test(t) ? O : W;
                    else if (Array.isArray(t))
                        return $;
                    else if ("object" == typeof t)
                        return U;
                    return z
                }(t[0])
                  , s = t.length - 1;
                for (let n = 0; n < s; n++) {
                    let s = i(t[n], t[n + 1]);
                    if (e) {
                        let t = Array.isArray(e) ? e[n] || u.Z : e;
                        s = (0,
                        F.z)(t, s)
                    }
                    r.push(s)
                }
                return r
            }(e, i, s)
              , l = a.length
              , c = e=>{
                let n = 0;
                if (l > 1)
                    for (; n < t.length - 2 && !(e < t[n + 1]); n++)
                        ;
                let r = (0,
                _.Y)(t[n], t[n + 1], e);
                return a[n](r)
            }
            ;
            return n ? e=>c((0,
            T.u)(t[0], t[o - 1], e)) : c
        }
        var X = n(599);
        function Y({duration: t=300, keyframes: e, times: n, ease: r="easeInOut"}) {
            let i = (0,
            m.N)(r) ? r.map(A) : A(r)
              , s = {
                done: !1,
                value: e[0]
            }
              , o = (n && n.length === e.length ? n : (0,
            X.Y)(e)).map(e=>e * t)
              , a = H(o, e, {
                ease: Array.isArray(i) ? i : e.map(()=>i || p).splice(0, e.length - 1)
            });
            return {
                calculatedDuration: t,
                next: e=>(s.value = a(e),
                s.done = e >= t,
                s)
            }
        }
        var Z = n(5086)
          , G = n(5753);
        function q({keyframes: t, velocity: e=0, power: n=.8, timeConstant: r=325, bounceDamping: i=10, bounceStiffness: s=500, modifyTarget: o, min: a, max: l, restDelta: u=.5, restSpeed: c}) {
            let h, d;
            let f = t[0]
              , p = {
                done: !1,
                value: f
            }
              , m = t=>void 0 !== a && t < a || void 0 !== l && t > l
              , v = t=>void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l
              , g = n * e
              , y = f + g
              , x = void 0 === o ? y : o(y);
            x !== y && (g = x - f);
            let P = t=>-g * Math.exp(-t / r)
              , b = t=>x + P(t)
              , w = t=>{
                let e = P(t)
                  , n = b(t);
                p.done = Math.abs(e) <= u,
                p.value = p.done ? x : n
            }
              , A = t=>{
                m(p.value) && (h = t,
                d = (0,
                Z.S)({
                    keyframes: [p.value, v(p.value)],
                    velocity: (0,
                    G.P)(b, t, p.value),
                    damping: i,
                    stiffness: s,
                    restDelta: u,
                    restSpeed: c
                }))
            }
            ;
            return A(0),
            {
                calculatedDuration: null,
                next: t=>{
                    let e = !1;
                    return (d || void 0 !== h || (e = !0,
                    w(t),
                    A(t)),
                    void 0 !== h && t > h) ? d.next(t - h) : (e || w(t),
                    p)
                }
            }
        }
        var K = n(2074);
        let J = t=>{
            let e = ({timestamp: e})=>t(e);
            return {
                start: ()=>K.Wi.update(e, !0),
                stop: ()=>(0,
                K.Pn)(e),
                now: ()=>K.frameData.isProcessing ? K.frameData.timestamp : performance.now()
            }
        }
        ;
        var Q = n(2284);
        let tt = {
            decay: q,
            inertia: q,
            tween: Y,
            keyframes: Y,
            spring: Z.S
        };
        function te({autoplay: t=!0, delay: e=0, driver: n=J, keyframes: r, type: s="keyframes", repeat: o=0, repeatDelay: a=0, repeatType: l="loop", onPlay: u, onStop: c, onComplete: h, onUpdate: d, ...f}) {
            let p, m, v, g, y, x = 1, P = !1, b = ()=>{
                m = new Promise(t=>{
                    p = t
                }
                )
            }
            ;
            b();
            let w = tt[s] || Y;
            w !== Y && "number" != typeof r[0] && (g = H([0, 100], r, {
                clamp: !1
            }),
            r = [0, 100]);
            let A = w({
                ...f,
                keyframes: r
            });
            "mirror" === l && (y = w({
                ...f,
                keyframes: [...r].reverse(),
                velocity: -(f.velocity || 0)
            }));
            let C = "idle"
              , E = null
              , S = null
              , V = null;
            null === A.calculatedDuration && o && (A.calculatedDuration = (0,
            Q.i)(A));
            let {calculatedDuration: M} = A
              , j = 1 / 0
              , R = 1 / 0;
            null !== M && (R = (j = M + a) * (o + 1) - a);
            let D = 0
              , k = t=>{
                if (null === S)
                    return;
                x > 0 && (S = Math.min(S, t)),
                x < 0 && (S = Math.min(t - R / x, S)),
                D = null !== E ? E : Math.round(t - S) * x;
                let n = D - e * (x >= 0 ? 1 : -1)
                  , i = x >= 0 ? n < 0 : n > R;
                D = Math.max(n, 0),
                "finished" === C && null === E && (D = R);
                let s = D
                  , u = A;
                if (o) {
                    let t = D / j
                      , e = Math.floor(t)
                      , n = t % 1;
                    !n && t >= 1 && (n = 1),
                    1 === n && e--,
                    e = Math.min(e, o + 1);
                    let r = !!(e % 2);
                    r && ("reverse" === l ? (n = 1 - n,
                    a && (n -= a / j)) : "mirror" === l && (u = y));
                    let i = (0,
                    T.u)(0, 1, n);
                    D > R && (i = "reverse" === l && r ? 1 : 0),
                    s = i * j
                }
                let c = i ? {
                    done: !1,
                    value: r[0]
                } : u.next(s);
                g && (c.value = g(c.value));
                let {done: h} = c;
                i || null === M || (h = x >= 0 ? D >= R : D <= 0);
                let f = null === E && ("finished" === C || "running" === C && h);
                return d && d(c.value),
                f && F(),
                c
            }
              , L = ()=>{
                v && v.stop(),
                v = void 0
            }
              , O = ()=>{
                C = "idle",
                L(),
                p(),
                b(),
                S = V = null
            }
              , F = ()=>{
                C = "finished",
                h && h(),
                L(),
                p()
            }
              , B = ()=>{
                if (P)
                    return;
                v || (v = n(k));
                let t = v.now();
                u && u(),
                null !== E ? S = t - E : S && "finished" !== C || (S = t),
                "finished" === C && b(),
                V = S,
                E = null,
                C = "running",
                v.start()
            }
            ;
            t && B();
            let I = {
                then: (t,e)=>m.then(t, e),
                get time() {
                    return (0,
                    i.X)(D)
                },
                set time(newTime) {
                    D = newTime = (0,
                    i.w)(newTime),
                    null === E && v && 0 !== x ? S = v.now() - newTime / x : E = newTime
                },
                get duration() {
                    let t = null === A.calculatedDuration ? (0,
                    Q.i)(A) : A.calculatedDuration;
                    return (0,
                    i.X)(t)
                },
                get speed() {
                    return x
                },
                set speed(newSpeed) {
                    if (newSpeed === x || !v)
                        return;
                    x = newSpeed,
                    I.time = (0,
                    i.X)(D)
                },
                get state() {
                    return C
                },
                play: B,
                pause: ()=>{
                    C = "paused",
                    E = D
                }
                ,
                stop: ()=>{
                    P = !0,
                    "idle" !== C && (C = "idle",
                    c && c(),
                    O())
                }
                ,
                cancel: ()=>{
                    null !== V && k(V),
                    O()
                }
                ,
                complete: ()=>{
                    C = "finished"
                }
                ,
                sample: t=>(S = 0,
                k(t))
            };
            return I
        }
        var tn = n(4522);
        let tr = (0,
        tn.X)(()=>Object.hasOwnProperty.call(Element.prototype, "animate"))
          , ti = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"])
          , ts = (t,e)=>"spring" === e.type || "backgroundColor" === t || !function t(e) {
            return !!(!e || "string" == typeof e && l[e] || o(e) || Array.isArray(e) && e.every(t))
        }(e.ease);
        var to = n(4714);
        let ta = {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        }
          , tl = t=>({
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
        })
          , tu = {
            type: "keyframes",
            duration: .8
        }
          , tc = {
            type: "keyframes",
            ease: [.25, .1, .35, 1],
            duration: .3
        }
          , th = (t,{keyframes: e})=>e.length > 2 ? tu : to.G.has(t) ? t.startsWith("scale") ? tl(e[1]) : ta : tc
          , td = (t,e)=>"zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && (B.P.test(e) || "0" === e) && !e.startsWith("url("));
        var tf = n(9135)
          , tp = n(681)
          , tm = n(1056);
        let tv = (t,e,n,c={})=>h=>{
            let d = (0,
            tm.e)(c, t) || {}
              , f = d.delay || c.delay || 0
              , {elapsed: p=0} = c;
            p -= (0,
            i.w)(f);
            let m = function(t, e, n, r) {
                let i, s;
                let o = td(e, n);
                i = Array.isArray(n) ? [...n] : [null, n];
                let a = void 0 !== r.from ? r.from : t.get()
                  , l = [];
                for (let t = 0; t < i.length; t++) {
                    var u;
                    null === i[t] && (i[t] = 0 === t ? a : i[t - 1]),
                    ("number" == typeof (u = i[t]) ? 0 === u : null !== u ? "none" === u || "0" === u || (0,
                    tp.W)(u) : void 0) && l.push(t),
                    "string" == typeof i[t] && "none" !== i[t] && "0" !== i[t] && (s = i[t])
                }
                if (o && l.length && s)
                    for (let t = 0; t < l.length; t++) {
                        let n = l[t];
                        i[n] = (0,
                        tf.T)(e, s)
                    }
                return i
            }(e, t, n, d)
              , v = m[0]
              , g = m[m.length - 1]
              , y = td(t, v)
              , x = td(t, g);
            (0,
            r.K)(y === x, `You are trying to animate ${t} from "${v}" to "${g}". ${v} is not an animatable value - to enable this animation set ${v} to a value animatable to ${g} via the \`style\` property.`);
            let P = {
                keyframes: m,
                velocity: e.getVelocity(),
                ease: "easeOut",
                ...d,
                delay: -p,
                onUpdate: t=>{
                    e.set(t),
                    d.onUpdate && d.onUpdate(t)
                }
                ,
                onComplete: ()=>{
                    h(),
                    d.onComplete && d.onComplete()
                }
            };
            if ((0,
            tm.r)(d) || (P = {
                ...P,
                ...th(t, P)
            }),
            P.duration && (P.duration = (0,
            i.w)(P.duration)),
            P.repeatDelay && (P.repeatDelay = (0,
            i.w)(P.repeatDelay)),
            !y || !x || s.current || !1 === d.type)
                return function({keyframes: t, delay: e, onUpdate: n, onComplete: r}) {
                    let i = ()=>(n && n(t[t.length - 1]),
                    r && r(),
                    {
                        time: 0,
                        speed: 1,
                        duration: 0,
                        play: u.Z,
                        pause: u.Z,
                        stop: u.Z,
                        then: t=>(t(),
                        Promise.resolve()),
                        cancel: u.Z,
                        complete: u.Z
                    });
                    return e ? te({
                        keyframes: [0, 1],
                        duration: 0,
                        delay: e,
                        onComplete: i
                    }) : i()
                }(s.current ? {
                    ...P,
                    delay: 0
                } : P);
            if (e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate) {
                let n = function(t, e, {onUpdate: n, onComplete: r, ...s}) {
                    let c, h;
                    let d = tr() && ti.has(e) && !s.repeatDelay && "mirror" !== s.repeatType && 0 !== s.damping && "inertia" !== s.type;
                    if (!d)
                        return !1;
                    let f = !1
                      , p = ()=>{
                        h = new Promise(t=>{
                            c = t
                        }
                        )
                    }
                    ;
                    p();
                    let {keyframes: m, duration: v=300, ease: g, times: y} = s;
                    if (ts(e, s)) {
                        let t = te({
                            ...s,
                            repeat: 0,
                            delay: 0
                        })
                          , e = {
                            done: !1,
                            value: m[0]
                        }
                          , n = []
                          , r = 0;
                        for (; !e.done && r < 2e4; )
                            n.push((e = t.sample(r)).value),
                            r += 10;
                        y = void 0,
                        m = n,
                        v = r - 10,
                        g = "linear"
                    }
                    let x = function(t, e, n, {delay: r=0, duration: i, repeat: s=0, repeatType: u="loop", ease: c, times: h}={}) {
                        let d = {
                            [e]: n
                        };
                        h && (d.offset = h);
                        let f = function t(e) {
                            if (e)
                                return o(e) ? a(e) : Array.isArray(e) ? e.map(t) : l[e]
                        }(c);
                        return Array.isArray(f) && (d.easing = f),
                        t.animate(d, {
                            delay: r,
                            duration: i,
                            easing: Array.isArray(f) ? "linear" : f,
                            fill: "both",
                            iterations: s + 1,
                            direction: "reverse" === u ? "alternate" : "normal"
                        })
                    }(t.owner.current, e, m, {
                        ...s,
                        duration: v,
                        ease: g,
                        times: y
                    });
                    s.syncStart && (x.startTime = K.frameData.isProcessing ? K.frameData.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
                    let P = ()=>x.cancel()
                      , b = ()=>{
                        K.Wi.update(P),
                        c(),
                        p()
                    }
                    ;
                    return x.onfinish = ()=>{
                        t.set(function(t, {repeat: e, repeatType: n="loop"}) {
                            let r = e && "loop" !== n && e % 2 == 1 ? 0 : t.length - 1;
                            return t[r]
                        }(m, s)),
                        r && r(),
                        b()
                    }
                    ,
                    {
                        then: (t,e)=>h.then(t, e),
                        attachTimeline: t=>(x.timeline = t,
                        x.onfinish = null,
                        u.Z),
                        get time() {
                            return (0,
                            i.X)(x.currentTime || 0)
                        },
                        set time(newTime) {
                            x.currentTime = (0,
                            i.w)(newTime)
                        },
                        get speed() {
                            return x.playbackRate
                        },
                        set speed(newSpeed) {
                            x.playbackRate = newSpeed
                        },
                        get duration() {
                            return (0,
                            i.X)(v)
                        },
                        play: ()=>{
                            f || (x.play(),
                            (0,
                            K.Pn)(P))
                        }
                        ,
                        pause: ()=>x.pause(),
                        stop: ()=>{
                            if (f = !0,
                            "idle" === x.playState)
                                return;
                            let {currentTime: e} = x;
                            if (e) {
                                let n = te({
                                    ...s,
                                    autoplay: !1
                                });
                                t.setWithVelocity(n.sample(e - 10).value, n.sample(e).value, 10)
                            }
                            b()
                        }
                        ,
                        complete: ()=>x.finish(),
                        cancel: b
                    }
                }(e, t, P);
                if (n)
                    return n
            }
            return te(P)
        }
    },
    1059: function(t, e, n) {
        "use strict";
        n.d(e, {
            D: function() {
                return o
            }
        });
        var r = n(4502)
          , i = n(3234)
          , s = n(406);
        function o(t, e, n) {
            let o = (0,
            s.i)(t) ? t : (0,
            i.BX)(t);
            return o.start((0,
            r.v)("", o, e, n)),
            o.animation
        }
    },
    8254: function(t, e, n) {
        "use strict";
        n.d(e, {
            w: function() {
                return c
            }
        });
        var r = n(4714)
          , i = n(3193);
        let s = "data-" + (0,
        i.D)("framerAppearId");
        var o = n(4502)
          , a = n(2490)
          , l = n(4330)
          , u = n(2074);
        function c(t, e, {delay: n=0, transitionOverride: i, type: c}={}) {
            let {transition: h=t.getDefaultTransition(), transitionEnd: d, ...f} = t.makeTargetAnimatable(e)
              , p = t.getValue("willChange");
            i && (h = i);
            let m = []
              , v = c && t.animationState && t.animationState.getState()[c];
            for (let e in f) {
                let i = t.getValue(e)
                  , l = f[e];
                if (!i || void 0 === l || v && function({protectedKeys: t, needsAnimating: e}, n) {
                    let r = t.hasOwnProperty(n) && !0 !== e[n];
                    return e[n] = !1,
                    r
                }(v, e))
                    continue;
                let c = {
                    delay: n,
                    elapsed: 0,
                    ...h
                };
                if (window.HandoffAppearAnimations && !i.hasAnimated) {
                    let n = t.getProps()[s];
                    n && (c.elapsed = window.HandoffAppearAnimations(n, e, i, u.Wi),
                    c.syncStart = !0)
                }
                i.start((0,
                o.v)(e, i, l, t.shouldReduceMotion && r.G.has(e) ? {
                    type: !1
                } : c));
                let d = i.animation;
                (0,
                a.L)(p) && (p.add(e),
                d.then(()=>p.remove(e))),
                m.push(d)
            }
            return d && Promise.all(m).then(()=>{
                d && (0,
                l.CD)(t, d)
            }
            ),
            m
        }
    },
    2445: function(t, e, n) {
        "use strict";
        function r(t) {
            return "object" == typeof t && "function" == typeof t.start
        }
        n.d(e, {
            H: function() {
                return r
            }
        })
    },
    8488: function(t, e, n) {
        "use strict";
        n.d(e, {
            C: function() {
                return r
            }
        });
        let r = t=>Array.isArray(t)
    },
    1056: function(t, e, n) {
        "use strict";
        function r({when: t, delay: e, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: s, repeatType: o, repeatDelay: a, from: l, elapsed: u, ...c}) {
            return !!Object.keys(c).length
        }
        function i(t, e) {
            return t[e] || t.default || t
        }
        n.d(e, {
            e: function() {
                return i
            },
            r: function() {
                return r
            }
        })
    },
    5820: function(t, e, n) {
        "use strict";
        n.d(e, {
            M: function() {
                return g
            }
        });
        var r = n(7294)
          , i = n(8868);
        function s() {
            let t = (0,
            r.useRef)(!1);
            return (0,
            i.L)(()=>(t.current = !0,
            ()=>{
                t.current = !1
            }
            ), []),
            t
        }
        var o = n(2074)
          , a = n(240)
          , l = n(6681);
        class u extends r.Component {
            getSnapshotBeforeUpdate(t) {
                let e = this.props.childRef.current;
                if (e && t.isPresent && !this.props.isPresent) {
                    let t = this.props.sizeRef.current;
                    t.height = e.offsetHeight || 0,
                    t.width = e.offsetWidth || 0,
                    t.top = e.offsetTop,
                    t.left = e.offsetLeft
                }
                return null
            }
            componentDidUpdate() {}
            render() {
                return this.props.children
            }
        }
        function c({children: t, isPresent: e}) {
            let n = (0,
            r.useId)()
              , i = (0,
            r.useRef)(null)
              , s = (0,
            r.useRef)({
                width: 0,
                height: 0,
                top: 0,
                left: 0
            });
            return (0,
            r.useInsertionEffect)(()=>{
                let {width: t, height: r, top: o, left: a} = s.current;
                if (e || !i.current || !t || !r)
                    return;
                i.current.dataset.motionPopId = n;
                let l = document.createElement("style");
                return document.head.appendChild(l),
                l.sheet && l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${t}px !important;
            height: ${r}px !important;
            top: ${o}px !important;
            left: ${a}px !important;
          }
        `),
                ()=>{
                    document.head.removeChild(l)
                }
            }
            , [e]),
            r.createElement(u, {
                isPresent: e,
                childRef: i,
                sizeRef: s
            }, r.cloneElement(t, {
                ref: i
            }))
        }
        let h = ({children: t, initial: e, isPresent: n, onExitComplete: i, custom: s, presenceAffectsLayout: o, mode: u})=>{
            let h = (0,
            l.h)(d)
              , f = (0,
            r.useId)()
              , p = (0,
            r.useMemo)(()=>({
                id: f,
                initial: e,
                isPresent: n,
                custom: s,
                onExitComplete: t=>{
                    for (let e of (h.set(t, !0),
                    h.values()))
                        if (!e)
                            return;
                    i && i()
                }
                ,
                register: t=>(h.set(t, !1),
                ()=>h.delete(t))
            }), o ? void 0 : [n]);
            return (0,
            r.useMemo)(()=>{
                h.forEach((t,e)=>h.set(e, !1))
            }
            , [n]),
            r.useEffect(()=>{
                n || h.size || !i || i()
            }
            , [n]),
            "popLayout" === u && (t = r.createElement(c, {
                isPresent: n
            }, t)),
            r.createElement(a.O.Provider, {
                value: p
            }, t)
        }
        ;
        function d() {
            return new Map
        }
        var f = n(5364)
          , p = n(5411)
          , m = n(5487);
        let v = t=>t.key || ""
          , g = ({children: t, custom: e, initial: n=!0, onExitComplete: a, exitBeforeEnter: l, presenceAffectsLayout: u=!0, mode: c="sync"})=>{
            (0,
            m.k)(!l, "Replace exitBeforeEnter with mode='wait'");
            let d = (0,
            r.useContext)(f.p).forceRender || function() {
                let t = s()
                  , [e,n] = (0,
                r.useState)(0)
                  , i = (0,
                r.useCallback)(()=>{
                    t.current && n(e + 1)
                }
                , [e])
                  , a = (0,
                r.useCallback)(()=>o.Wi.postRender(i), [i]);
                return [a, e]
            }()[0]
              , g = s()
              , y = function(t) {
                let e = [];
                return r.Children.forEach(t, t=>{
                    (0,
                    r.isValidElement)(t) && e.push(t)
                }
                ),
                e
            }(t)
              , x = y
              , P = (0,
            r.useRef)(new Map).current
              , b = (0,
            r.useRef)(x)
              , w = (0,
            r.useRef)(new Map).current
              , A = (0,
            r.useRef)(!0);
            if ((0,
            i.L)(()=>{
                A.current = !1,
                function(t, e) {
                    t.forEach(t=>{
                        let n = v(t);
                        e.set(n, t)
                    }
                    )
                }(y, w),
                b.current = x
            }
            ),
            (0,
            p.z)(()=>{
                A.current = !0,
                w.clear(),
                P.clear()
            }
            ),
            A.current)
                return r.createElement(r.Fragment, null, x.map(t=>r.createElement(h, {
                    key: v(t),
                    isPresent: !0,
                    initial: !!n && void 0,
                    presenceAffectsLayout: u,
                    mode: c
                }, t)));
            x = [...x];
            let C = b.current.map(v)
              , T = y.map(v)
              , E = C.length;
            for (let t = 0; t < E; t++) {
                let e = C[t];
                -1 !== T.indexOf(e) || P.has(e) || P.set(e, void 0)
            }
            return "wait" === c && P.size && (x = []),
            P.forEach((t,n)=>{
                if (-1 !== T.indexOf(n))
                    return;
                let i = w.get(n);
                if (!i)
                    return;
                let s = C.indexOf(n)
                  , o = t;
                o || (o = r.createElement(h, {
                    key: v(i),
                    isPresent: !1,
                    onExitComplete: ()=>{
                        w.delete(n),
                        P.delete(n);
                        let t = b.current.findIndex(t=>t.key === n);
                        if (b.current.splice(t, 1),
                        !P.size) {
                            if (b.current = y,
                            !1 === g.current)
                                return;
                            d(),
                            a && a()
                        }
                    }
                    ,
                    custom: e,
                    presenceAffectsLayout: u,
                    mode: c
                }, i),
                P.set(n, o)),
                x.splice(s, 0, o)
            }
            ),
            x = x.map(t=>{
                let e = t.key;
                return P.has(e) ? t : r.createElement(h, {
                    key: v(t),
                    isPresent: !0,
                    presenceAffectsLayout: u,
                    mode: c
                }, t)
            }
            ),
            r.createElement(r.Fragment, null, P.size ? x : x.map(t=>(0,
            r.cloneElement)(t)))
        }
    },
    5364: function(t, e, n) {
        "use strict";
        n.d(e, {
            p: function() {
                return i
            }
        });
        var r = n(7294);
        let i = (0,
        r.createContext)({})
    },
    240: function(t, e, n) {
        "use strict";
        n.d(e, {
            O: function() {
                return i
            }
        });
        var r = n(7294);
        let i = (0,
        r.createContext)(null)
    },
    7255: function(t, e, n) {
        "use strict";
        n.d(e, {
            Bn: function() {
                return o
            },
            X7: function() {
                return a
            },
            Z7: function() {
                return s
            }
        });
        var r = n(415)
          , i = n(5129);
        let s = t=>1 - Math.sin(Math.acos(t))
          , o = (0,
        i.M)(s)
          , a = (0,
        r.o)(o)
    },
    415: function(t, e, n) {
        "use strict";
        n.d(e, {
            o: function() {
                return r
            }
        });
        let r = t=>e=>e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
    },
    5129: function(t, e, n) {
        "use strict";
        n.d(e, {
            M: function() {
                return r
            }
        });
        let r = t=>e=>1 - t(1 - e)
    },
    3338: function(t, e, n) {
        "use strict";
        n.d(e, {
            N: function() {
                return r
            }
        });
        let r = t=>Array.isArray(t) && "number" != typeof t[0]
    },
    2074: function(t, e, n) {
        "use strict";
        n.d(e, {
            Pn: function() {
                return a
            },
            Wi: function() {
                return o
            },
            frameData: function() {
                return l
            },
            S6: function() {
                return u
            }
        });
        var r = n(1662);
        class i {
            constructor() {
                this.order = [],
                this.scheduled = new Set
            }
            add(t) {
                if (!this.scheduled.has(t))
                    return this.scheduled.add(t),
                    this.order.push(t),
                    !0
            }
            remove(t) {
                let e = this.order.indexOf(t);
                -1 !== e && (this.order.splice(e, 1),
                this.scheduled.delete(t))
            }
            clear() {
                this.order.length = 0,
                this.scheduled.clear()
            }
        }
        let s = ["prepare", "read", "update", "preRender", "render", "postRender"]
          , {schedule: o, cancel: a, state: l, steps: u} = function(t, e) {
            let n = !1
              , r = !0
              , o = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
            }
              , a = s.reduce((t,e)=>(t[e] = function(t) {
                let e = new i
                  , n = new i
                  , r = 0
                  , s = !1
                  , o = !1
                  , a = new WeakSet
                  , l = {
                    schedule: (t,i=!1,o=!1)=>{
                        let l = o && s
                          , u = l ? e : n;
                        return i && a.add(t),
                        u.add(t) && l && s && (r = e.order.length),
                        t
                    }
                    ,
                    cancel: t=>{
                        n.remove(t),
                        a.delete(t)
                    }
                    ,
                    process: i=>{
                        if (s) {
                            o = !0;
                            return
                        }
                        if (s = !0,
                        [e,n] = [n, e],
                        n.clear(),
                        r = e.order.length)
                            for (let n = 0; n < r; n++) {
                                let r = e.order[n];
                                r(i),
                                a.has(r) && (l.schedule(r),
                                t())
                            }
                        s = !1,
                        o && (o = !1,
                        l.process(i))
                    }
                };
                return l
            }(()=>n = !0),
            t), {})
              , l = t=>a[t].process(o)
              , u = ()=>{
                let i = performance.now();
                n = !1,
                o.delta = r ? 1e3 / 60 : Math.max(Math.min(i - o.timestamp, 40), 1),
                o.timestamp = i,
                o.isProcessing = !0,
                s.forEach(l),
                o.isProcessing = !1,
                n && e && (r = !1,
                t(u))
            }
              , c = ()=>{
                n = !0,
                r = !0,
                o.isProcessing || t(u)
            }
              , h = s.reduce((t,e)=>{
                let r = a[e];
                return t[e] = (t,e=!1,i=!1)=>(n || c(),
                r.schedule(t, e, i)),
                t
            }
            , {});
            return {
                schedule: h,
                cancel: t=>s.forEach(e=>a[e].cancel(t)),
                state: o,
                steps: a
            }
        }("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : r.Z, !0)
    },
    3983: function(t, e, n) {
        "use strict";
        n.d(e, {
            A: function() {
                return i
            }
        });
        let r = {
            animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
            exit: ["exit"],
            drag: ["drag", "dragControls"],
            focus: ["whileFocus"],
            hover: ["whileHover", "onHoverStart", "onHoverEnd"],
            tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
            pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
            inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
            layout: ["layout", "layoutId"]
        }
          , i = {};
        for (let t in r)
            i[t] = {
                isEnabled: e=>r[t].some(t=>!!e[t])
            }
    },
    6816: function(t, e, n) {
        "use strict";
        n.d(e, {
            j: function() {
                return s
            }
        });
        var r = n(4561)
          , i = n(4714);
        function s(t, {layout: e, layoutId: n}) {
            return i.G.has(t) || t.startsWith("origin") || (e || void 0 !== n) && (!!r.P[t] || "opacity" === t)
        }
    },
    6117: function(t, e, n) {
        "use strict";
        function r({top: t, left: e, right: n, bottom: r}) {
            return {
                x: {
                    min: e,
                    max: n
                },
                y: {
                    min: t,
                    max: r
                }
            }
        }
        function i({x: t, y: e}) {
            return {
                top: e.min,
                right: t.max,
                bottom: e.max,
                left: t.min
            }
        }
        function s(t, e) {
            if (!e)
                return t;
            let n = e({
                x: t.left,
                y: t.top
            })
              , r = e({
                x: t.right,
                y: t.bottom
            });
            return {
                top: n.y,
                left: n.x,
                bottom: r.y,
                right: r.x
            }
        }
        n.d(e, {
            d7: function() {
                return s
            },
            i8: function() {
                return r
            },
            z2: function() {
                return i
            }
        })
    },
    6e3: function(t, e, n) {
        "use strict";
        n.d(e, {
            D2: function() {
                return m
            },
            YY: function() {
                return u
            },
            am: function() {
                return h
            },
            o2: function() {
                return l
            },
            q2: function() {
                return s
            }
        });
        var r = n(22)
          , i = n(9527);
        function s(t, e, n) {
            return n + e * (t - n)
        }
        function o(t, e, n, r, i) {
            return void 0 !== i && (t = r + i * (t - r)),
            r + n * (t - r) + e
        }
        function a(t, e=0, n=1, r, i) {
            t.min = o(t.min, e, n, r, i),
            t.max = o(t.max, e, n, r, i)
        }
        function l(t, {x: e, y: n}) {
            a(t.x, e.translate, e.scale, e.originPoint),
            a(t.y, n.translate, n.scale, n.originPoint)
        }
        function u(t, e, n, r=!1) {
            let s, o;
            let a = n.length;
            if (a) {
                e.x = e.y = 1;
                for (let u = 0; u < a; u++) {
                    o = (s = n[u]).projectionDelta;
                    let a = s.instance;
                    (!a || !a.style || "contents" !== a.style.display) && (r && s.options.layoutScroll && s.scroll && s !== s.root && m(t, {
                        x: -s.scroll.offset.x,
                        y: -s.scroll.offset.y
                    }),
                    o && (e.x *= o.x.scale,
                    e.y *= o.y.scale,
                    l(t, o)),
                    r && (0,
                    i.ud)(s.latestValues) && m(t, s.latestValues))
                }
                e.x = c(e.x),
                e.y = c(e.y)
            }
        }
        function c(t) {
            return Number.isInteger(t) ? t : t > 1.0000000000001 || t < .999999999999 ? t : 1
        }
        function h(t, e) {
            t.min = t.min + e,
            t.max = t.max + e
        }
        function d(t, e, [n,i,s]) {
            let o = void 0 !== e[s] ? e[s] : .5
              , l = (0,
            r.C)(t.min, t.max, o);
            a(t, e[n], e[i], l, e.scale)
        }
        let f = ["x", "scaleX", "originX"]
          , p = ["y", "scaleY", "originY"];
        function m(t, e) {
            d(t.x, e, f),
            d(t.y, e, p)
        }
    },
    1512: function(t, e, n) {
        "use strict";
        n.d(e, {
            dO: function() {
                return o
            },
            wc: function() {
                return i
            }
        });
        let r = ()=>({
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
        })
          , i = ()=>({
            x: r(),
            y: r()
        })
          , s = ()=>({
            min: 0,
            max: 0
        })
          , o = ()=>({
            x: s(),
            y: s()
        })
    },
    4561: function(t, e, n) {
        "use strict";
        n.d(e, {
            B: function() {
                return i
            },
            P: function() {
                return r
            }
        });
        let r = {};
        function i(t) {
            Object.assign(r, t)
        }
    },
    9527: function(t, e, n) {
        "use strict";
        function r(t) {
            return void 0 === t || 1 === t
        }
        function i({scale: t, scaleX: e, scaleY: n}) {
            return !r(t) || !r(e) || !r(n)
        }
        function s(t) {
            return i(t) || o(t) || t.z || t.rotate || t.rotateX || t.rotateY
        }
        function o(t) {
            var e, n;
            return (e = t.x) && "0%" !== e || (n = t.y) && "0%" !== n
        }
        n.d(e, {
            D_: function() {
                return o
            },
            Lj: function() {
                return i
            },
            ud: function() {
                return s
            }
        })
    },
    6460: function(t, e, n) {
        "use strict";
        n.d(e, {
            J: function() {
                return s
            },
            z: function() {
                return o
            }
        });
        var r = n(6117)
          , i = n(6e3);
        function s(t, e) {
            return (0,
            r.i8)((0,
            r.d7)(t.getBoundingClientRect(), e))
        }
        function o(t, e, n) {
            let r = s(t, n)
              , {scroll: o} = e;
            return o && ((0,
            i.am)(r.x, o.offset.x),
            (0,
            i.am)(r.y, o.offset.y)),
            r
        }
    },
    1760: function(t, e, n) {
        "use strict";
        n.d(e, {
            J: function() {
                return Y
            }
        });
        var r = n(4330)
          , i = n(5487)
          , s = n(3441)
          , o = n(7630);
        let a = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
        function l(t, e, n=1) {
            (0,
            i.k)(n <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
            let[r,u] = function(t) {
                let e = a.exec(t);
                if (!e)
                    return [, ];
                let[,n,r] = e;
                return [n, r]
            }(t);
            if (!r)
                return;
            let c = window.getComputedStyle(e).getPropertyValue(r);
            if (c) {
                let t = c.trim();
                return (0,
                s.P)(t) ? parseFloat(t) : t
            }
            return (0,
            o.tm)(u) ? l(u, e, n + 1) : u
        }
        var u = n(8488)
          , c = n(4714)
          , h = n(6440)
          , d = n(1741)
          , f = n(1649)
          , p = n(6190);
        let m = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
          , v = t=>m.has(t)
          , g = t=>Object.keys(t).some(v)
          , y = t=>t === f.Rx || t === p.px
          , x = (t,e)=>parseFloat(t.split(", ")[e])
          , P = (t,e)=>(n,{transform: r})=>{
            if ("none" === r || !r)
                return 0;
            let i = r.match(/^matrix3d\((.+)\)$/);
            if (i)
                return x(i[1], e);
            {
                let e = r.match(/^matrix\((.+)\)$/);
                return e ? x(e[1], t) : 0
            }
        }
          , b = new Set(["x", "y", "z"])
          , w = c._.filter(t=>!b.has(t))
          , A = {
            width: ({x: t},{paddingLeft: e="0", paddingRight: n="0"})=>t.max - t.min - parseFloat(e) - parseFloat(n),
            height: ({y: t},{paddingTop: e="0", paddingBottom: n="0"})=>t.max - t.min - parseFloat(e) - parseFloat(n),
            top: (t,{top: e})=>parseFloat(e),
            left: (t,{left: e})=>parseFloat(e),
            bottom: ({y: t},{top: e})=>parseFloat(e) + (t.max - t.min),
            right: ({x: t},{left: e})=>parseFloat(e) + (t.max - t.min),
            x: P(4, 13),
            y: P(5, 14)
        };
        A.translateX = A.x,
        A.translateY = A.y;
        let C = (t,e,n)=>{
            let r = e.measureViewportBox()
              , i = e.current
              , s = getComputedStyle(i)
              , {display: o} = s
              , a = {};
            "none" === o && e.setStaticValue("display", t.display || "block"),
            n.forEach(t=>{
                a[t] = A[t](r, s)
            }
            ),
            e.render();
            let l = e.measureViewportBox();
            return n.forEach(n=>{
                let r = e.getValue(n);
                r && r.jump(a[n]),
                t[n] = A[n](l, s)
            }
            ),
            t
        }
          , T = (t,e,n={},r={})=>{
            e = {
                ...e
            },
            r = {
                ...r
            };
            let s = Object.keys(e).filter(v)
              , o = []
              , a = !1
              , l = [];
            if (s.forEach(s=>{
                let c;
                let d = t.getValue(s);
                if (!t.hasValue(s))
                    return;
                let f = n[s]
                  , m = (0,
                h.C)(f)
                  , v = e[s];
                if ((0,
                u.C)(v)) {
                    let t = v.length
                      , e = null === v[0] ? 1 : 0;
                    f = v[e],
                    m = (0,
                    h.C)(f);
                    for (let n = e; n < t && null !== v[n]; n++)
                        c ? (0,
                        i.k)((0,
                        h.C)(v[n]) === c, "All keyframes must be of the same type") : (c = (0,
                        h.C)(v[n]),
                        (0,
                        i.k)(c === m || y(m) && y(c), "Keyframes must be of the same dimension as the current value"))
                } else
                    c = (0,
                    h.C)(v);
                if (m !== c) {
                    if (y(m) && y(c)) {
                        let t = d.get();
                        "string" == typeof t && d.set(parseFloat(t)),
                        "string" == typeof v ? e[s] = parseFloat(v) : Array.isArray(v) && c === p.px && (e[s] = v.map(parseFloat))
                    } else
                        (null == m ? void 0 : m.transform) && (null == c ? void 0 : c.transform) && (0 === f || 0 === v) ? 0 === f ? d.set(c.transform(f)) : e[s] = m.transform(v) : (a || (o = function(t) {
                            let e = [];
                            return w.forEach(n=>{
                                let r = t.getValue(n);
                                void 0 !== r && (e.push([n, r.get()]),
                                r.set(n.startsWith("scale") ? 1 : 0))
                            }
                            ),
                            e.length && t.render(),
                            e
                        }(t),
                        a = !0),
                        l.push(s),
                        r[s] = void 0 !== r[s] ? r[s] : e[s],
                        d.jump(v))
                }
            }
            ),
            !l.length)
                return {
                    target: e,
                    transitionEnd: r
                };
            {
                let n = l.indexOf("height") >= 0 ? window.pageYOffset : null
                  , i = C(e, t, l);
                return o.length && o.forEach(([e,n])=>{
                    t.getValue(e).set(n)
                }
                ),
                t.render(),
                d.j && null !== n && window.scrollTo({
                    top: n
                }),
                {
                    target: i,
                    transitionEnd: r
                }
            }
        }
          , E = (t,e,n,r)=>{
            var i, s;
            let a = function(t, {...e}, n) {
                let r = t.current;
                if (!(r instanceof Element))
                    return {
                        target: e,
                        transitionEnd: n
                    };
                for (let i in n && (n = {
                    ...n
                }),
                t.values.forEach(t=>{
                    let e = t.get();
                    if (!(0,
                    o.tm)(e))
                        return;
                    let n = l(e, r);
                    n && t.set(n)
                }
                ),
                e) {
                    let t = e[i];
                    if (!(0,
                    o.tm)(t))
                        continue;
                    let s = l(t, r);
                    s && (e[i] = s,
                    n || (n = {}),
                    void 0 === n[i] && (n[i] = t))
                }
                return {
                    target: e,
                    transitionEnd: n
                }
            }(t, e, r);
            return e = a.target,
            r = a.transitionEnd,
            i = e,
            s = r,
            g(i) ? T(t, i, n, s) : {
                target: i,
                transitionEnd: s
            }
        }
        ;
        var S = n(1512)
          , V = n(1804);
        let M = {
            current: null
        }
          , j = {
            current: !1
        };
        var R = n(1560)
          , D = n(3234)
          , k = n(2490)
          , L = n(406)
          , O = n(7504)
          , F = n(7732)
          , B = n(9432)
          , I = n(3983)
          , N = n(2963)
          , $ = n(6955)
          , U = n(2074);
        let W = Object.keys(I.A)
          , _ = W.length
          , z = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]
          , H = N.V.length;
        class X {
            constructor({parent: t, props: e, presenceContext: n, reducedMotionConfig: r, visualState: i}, s={}) {
                this.current = null,
                this.children = new Set,
                this.isVariantNode = !1,
                this.isControllingVariants = !1,
                this.shouldReduceMotion = null,
                this.values = new Map,
                this.features = {},
                this.valueSubscriptions = new Map,
                this.prevMotionValues = {},
                this.events = {},
                this.propEventSubscriptions = {},
                this.notifyUpdate = ()=>this.notify("Update", this.latestValues),
                this.render = ()=>{
                    this.current && (this.triggerBuild(),
                    this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                }
                ,
                this.scheduleRender = ()=>U.Wi.render(this.render, !1, !0);
                let {latestValues: o, renderState: a} = i;
                this.latestValues = o,
                this.baseTarget = {
                    ...o
                },
                this.initialValues = e.initial ? {
                    ...o
                } : {},
                this.renderState = a,
                this.parent = t,
                this.props = e,
                this.presenceContext = n,
                this.depth = t ? t.depth + 1 : 0,
                this.reducedMotionConfig = r,
                this.options = s,
                this.isControllingVariants = (0,
                O.G)(e),
                this.isVariantNode = (0,
                O.M)(e),
                this.isVariantNode && (this.variantChildren = new Set),
                this.manuallyAnimateOnMount = !!(t && t.current);
                let {willChange: l, ...u} = this.scrapeMotionValuesFromProps(e, {});
                for (let t in u) {
                    let e = u[t];
                    void 0 !== o[t] && (0,
                    L.i)(e) && (e.set(o[t], !1),
                    (0,
                    k.L)(l) && l.add(t))
                }
            }
            scrapeMotionValuesFromProps(t, e) {
                return {}
            }
            mount(t) {
                this.current = t,
                $.R.set(t, this),
                this.projection && !this.projection.instance && this.projection.mount(t),
                this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
                this.values.forEach((t,e)=>this.bindToMotionValue(e, t)),
                j.current || function() {
                    if (j.current = !0,
                    d.j) {
                        if (window.matchMedia) {
                            let t = window.matchMedia("(prefers-reduced-motion)")
                              , e = ()=>M.current = t.matches;
                            t.addListener(e),
                            e()
                        } else
                            M.current = !1
                    }
                }(),
                this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || M.current),
                this.parent && this.parent.children.add(this),
                this.update(this.props, this.presenceContext)
            }
            unmount() {
                for (let t in $.R.delete(this.current),
                this.projection && this.projection.unmount(),
                (0,
                U.Pn)(this.notifyUpdate),
                (0,
                U.Pn)(this.render),
                this.valueSubscriptions.forEach(t=>t()),
                this.removeFromVariantTree && this.removeFromVariantTree(),
                this.parent && this.parent.children.delete(this),
                this.events)
                    this.events[t].clear();
                for (let t in this.features)
                    this.features[t].unmount();
                this.current = null
            }
            bindToMotionValue(t, e) {
                let n = c.G.has(t)
                  , r = e.on("change", e=>{
                    this.latestValues[t] = e,
                    this.props.onUpdate && U.Wi.update(this.notifyUpdate, !1, !0),
                    n && this.projection && (this.projection.isTransformDirty = !0)
                }
                )
                  , i = e.on("renderRequest", this.scheduleRender);
                this.valueSubscriptions.set(t, ()=>{
                    r(),
                    i()
                }
                )
            }
            sortNodePosition(t) {
                return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
            }
            loadFeatures({children: t, ...e}, n, r, i) {
                let s, o;
                for (let t = 0; t < _; t++) {
                    let n = W[t]
                      , {isEnabled: r, Feature: i, ProjectionNode: a, MeasureLayout: l} = I.A[n];
                    a && (s = a),
                    r(e) && (!this.features[n] && i && (this.features[n] = new i(this)),
                    l && (o = l))
                }
                if (!this.projection && s) {
                    this.projection = new s(this.latestValues,this.parent && this.parent.projection);
                    let {layoutId: t, layout: n, drag: r, dragConstraints: o, layoutScroll: a, layoutRoot: l} = e;
                    this.projection.setOptions({
                        layoutId: t,
                        layout: n,
                        alwaysMeasureLayout: !!r || o && (0,
                        V.I)(o),
                        visualElement: this,
                        scheduleRender: ()=>this.scheduleRender(),
                        animationType: "string" == typeof n ? n : "both",
                        initialPromotionConfig: i,
                        layoutScroll: a,
                        layoutRoot: l
                    })
                }
                return o
            }
            updateFeatures() {
                for (let t in this.features) {
                    let e = this.features[t];
                    e.isMounted ? e.update() : (e.mount(),
                    e.isMounted = !0)
                }
            }
            triggerBuild() {
                this.build(this.renderState, this.latestValues, this.options, this.props)
            }
            measureViewportBox() {
                return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0,
                S.dO)()
            }
            getStaticValue(t) {
                return this.latestValues[t]
            }
            setStaticValue(t, e) {
                this.latestValues[t] = e
            }
            makeTargetAnimatable(t, e=!0) {
                return this.makeTargetAnimatableFromInstance(t, this.props, e)
            }
            update(t, e) {
                (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
                this.prevProps = this.props,
                this.props = t,
                this.prevPresenceContext = this.presenceContext,
                this.presenceContext = e;
                for (let e = 0; e < z.length; e++) {
                    let n = z[e];
                    this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](),
                    delete this.propEventSubscriptions[n]);
                    let r = t["on" + n];
                    r && (this.propEventSubscriptions[n] = this.on(n, r))
                }
                this.prevMotionValues = function(t, e, n) {
                    let {willChange: r} = e;
                    for (let i in e) {
                        let s = e[i]
                          , o = n[i];
                        if ((0,
                        L.i)(s))
                            t.addValue(i, s),
                            (0,
                            k.L)(r) && r.add(i);
                        else if ((0,
                        L.i)(o))
                            t.addValue(i, (0,
                            D.BX)(s, {
                                owner: t
                            })),
                            (0,
                            k.L)(r) && r.remove(i);
                        else if (o !== s) {
                            if (t.hasValue(i)) {
                                let e = t.getValue(i);
                                e.hasAnimated || e.set(s)
                            } else {
                                let e = t.getStaticValue(i);
                                t.addValue(i, (0,
                                D.BX)(void 0 !== e ? e : s, {
                                    owner: t
                                }))
                            }
                        }
                    }
                    for (let r in n)
                        void 0 === e[r] && t.removeValue(r);
                    return e
                }(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues),
                this.handleChildMotionValue && this.handleChildMotionValue()
            }
            getProps() {
                return this.props
            }
            getVariant(t) {
                return this.props.variants ? this.props.variants[t] : void 0
            }
            getDefaultTransition() {
                return this.props.transition
            }
            getTransformPagePoint() {
                return this.props.transformPagePoint
            }
            getClosestVariantNode() {
                return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
            }
            getVariantContext(t=!1) {
                if (t)
                    return this.parent ? this.parent.getVariantContext() : void 0;
                if (!this.isControllingVariants) {
                    let t = this.parent && this.parent.getVariantContext() || {};
                    return void 0 !== this.props.initial && (t.initial = this.props.initial),
                    t
                }
                let e = {};
                for (let t = 0; t < H; t++) {
                    let n = N.V[t]
                      , r = this.props[n];
                    ((0,
                    F.$)(r) || !1 === r) && (e[n] = r)
                }
                return e
            }
            addVariantChild(t) {
                let e = this.getClosestVariantNode();
                if (e)
                    return e.variantChildren && e.variantChildren.add(t),
                    ()=>e.variantChildren.delete(t)
            }
            addValue(t, e) {
                e !== this.values.get(t) && (this.removeValue(t),
                this.bindToMotionValue(t, e)),
                this.values.set(t, e),
                this.latestValues[t] = e.get()
            }
            removeValue(t) {
                this.values.delete(t);
                let e = this.valueSubscriptions.get(t);
                e && (e(),
                this.valueSubscriptions.delete(t)),
                delete this.latestValues[t],
                this.removeValueFromRenderState(t, this.renderState)
            }
            hasValue(t) {
                return this.values.has(t)
            }
            getValue(t, e) {
                if (this.props.values && this.props.values[t])
                    return this.props.values[t];
                let n = this.values.get(t);
                return void 0 === n && void 0 !== e && (n = (0,
                D.BX)(e, {
                    owner: this
                }),
                this.addValue(t, n)),
                n
            }
            readValue(t) {
                var e;
                return void 0 === this.latestValues[t] && this.current ? null !== (e = this.getBaseTargetFromProps(this.props, t)) && void 0 !== e ? e : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t]
            }
            setBaseTarget(t, e) {
                this.baseTarget[t] = e
            }
            getBaseTarget(t) {
                var e;
                let {initial: n} = this.props
                  , r = "string" == typeof n || "object" == typeof n ? null === (e = (0,
                B.o)(this.props, n)) || void 0 === e ? void 0 : e[t] : void 0;
                if (n && void 0 !== r)
                    return r;
                let i = this.getBaseTargetFromProps(this.props, t);
                return void 0 === i || (0,
                L.i)(i) ? void 0 !== this.initialValues[t] && void 0 === r ? void 0 : this.baseTarget[t] : i
            }
            on(t, e) {
                return this.events[t] || (this.events[t] = new R.L),
                this.events[t].add(e)
            }
            notify(t, ...e) {
                this.events[t] && this.events[t].notify(...e)
            }
        }
        class Y extends X {
            sortInstanceNodePosition(t, e) {
                return 2 & t.compareDocumentPosition(e) ? 1 : -1
            }
            getBaseTargetFromProps(t, e) {
                return t.style ? t.style[e] : void 0
            }
            removeValueFromRenderState(t, {vars: e, style: n}) {
                delete e[t],
                delete n[t]
            }
            makeTargetAnimatableFromInstance({transition: t, transitionEnd: e, ...n}, {transformValues: i}, s) {
                let o = (0,
                r.P$)(n, t || {}, this);
                if (i && (e && (e = i(e)),
                n && (n = i(n)),
                o && (o = i(o))),
                s) {
                    (0,
                    r.GJ)(this, n, o);
                    let t = E(this, n, o, e);
                    e = t.transitionEnd,
                    n = t.target
                }
                return {
                    transition: t,
                    transitionEnd: e,
                    ...n
                }
            }
        }
    },
    4876: function(t, e, n) {
        "use strict";
        n.d(e, {
            E: function() {
                return e7
            }
        });
        var r, i = n(7294);
        let s = (0,
        i.createContext)({
            transformPagePoint: t=>t,
            isStatic: !1,
            reducedMotion: "never"
        })
          , o = (0,
        i.createContext)({});
        var a = n(240)
          , l = n(8868);
        let u = (0,
        i.createContext)({
            strict: !1
        });
        var c = n(1804)
          , h = n(7732)
          , d = n(7504);
        function f(t) {
            return Array.isArray(t) ? t.join(" ") : t
        }
        var p = n(3983)
          , m = n(1741)
          , v = n(5364);
        let g = (0,
        i.createContext)({})
          , y = Symbol.for("motionComponentSymbol")
          , x = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
        function P(t) {
            if ("string" != typeof t || t.includes("-"))
                ;
            else if (x.indexOf(t) > -1 || /[A-Z]/.test(t))
                return !0;
            return !1
        }
        var b = n(6816)
          , w = n(406)
          , A = n(8057);
        let C = ()=>({
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {}
        });
        function T(t, e, n) {
            for (let r in e)
                (0,
                w.i)(e[r]) || (0,
                b.j)(r, n) || (t[r] = e[r])
        }
        function E(t, e, n) {
            let r = {}
              , s = function(t, e, n) {
                let r = t.style || {}
                  , s = {};
                return T(s, r, t),
                Object.assign(s, function({transformTemplate: t}, e, n) {
                    return (0,
                    i.useMemo)(()=>{
                        let r = C();
                        return (0,
                        A.r)(r, e, {
                            enableHardwareAcceleration: !n
                        }, t),
                        Object.assign({}, r.vars, r.style)
                    }
                    , [e])
                }(t, e, n)),
                t.transformValues ? t.transformValues(s) : s
            }(t, e, n);
            return t.drag && !1 !== t.dragListener && (r.draggable = !1,
            s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none",
            s.touchAction = !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`),
            void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0),
            r.style = s,
            r
        }
        let S = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);
        function V(t) {
            return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || S.has(t)
        }
        let M = t=>!V(t);
        try {
            (r = require("@emotion/is-prop-valid").default) && (M = t=>t.startsWith("on") ? !V(t) : r(t))
        } catch (t) {}
        var j = n(5415);
        let R = ()=>({
            ...C(),
            attrs: {}
        });
        var D = n(9854);
        function k(t, e, n, r) {
            let s = (0,
            i.useMemo)(()=>{
                let n = R();
                return (0,
                j.i)(n, e, {
                    enableHardwareAcceleration: !1
                }, (0,
                D.a)(r), t.transformTemplate),
                {
                    ...n.attrs,
                    style: {
                        ...n.style
                    }
                }
            }
            , [e]);
            if (t.style) {
                let e = {};
                T(e, t.style, t),
                s.style = {
                    ...e,
                    ...s.style
                }
            }
            return s
        }
        var L = n(8504)
          , O = n(6832)
          , F = n(2445)
          , B = n(9432)
          , I = n(6681)
          , N = n(8715);
        function $(t) {
            let e = (0,
            w.i)(t) ? t.get() : t;
            return (0,
            N.p)(e) ? e.toValue() : e
        }
        let U = t=>(e,n)=>{
            let r = (0,
            i.useContext)(o)
              , s = (0,
            i.useContext)(a.O)
              , l = ()=>(function({scrapeMotionValuesFromProps: t, createRenderState: e, onMount: n}, r, i, s) {
                let o = {
                    latestValues: function(t, e, n, r) {
                        let i = {}
                          , s = r(t, {});
                        for (let t in s)
                            i[t] = $(s[t]);
                        let {initial: o, animate: a} = t
                          , l = (0,
                        d.G)(t)
                          , u = (0,
                        d.M)(t);
                        e && u && !l && !1 !== t.inherit && (void 0 === o && (o = e.initial),
                        void 0 === a && (a = e.animate));
                        let c = !!n && !1 === n.initial;
                        c = c || !1 === o;
                        let h = c ? a : o;
                        if (h && "boolean" != typeof h && !(0,
                        F.H)(h)) {
                            let e = Array.isArray(h) ? h : [h];
                            e.forEach(e=>{
                                let n = (0,
                                B.o)(t, e);
                                if (!n)
                                    return;
                                let {transitionEnd: r, transition: s, ...o} = n;
                                for (let t in o) {
                                    let e = o[t];
                                    if (Array.isArray(e)) {
                                        let t = c ? e.length - 1 : 0;
                                        e = e[t]
                                    }
                                    null !== e && (i[t] = e)
                                }
                                for (let t in r)
                                    i[t] = r[t]
                            }
                            )
                        }
                        return i
                    }(r, i, s, t),
                    renderState: e()
                };
                return n && (o.mount = t=>n(r, t, o)),
                o
            }
            )(t, e, r, s);
            return n ? l() : (0,
            I.h)(l)
        }
        ;
        var W = n(2074);
        let _ = {
            useVisualState: U({
                scrapeMotionValuesFromProps: O.U,
                createRenderState: R,
                onMount: (t,e,{renderState: n, latestValues: r})=>{
                    W.Wi.read(()=>{
                        try {
                            n.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                        } catch (t) {
                            n.dimensions = {
                                x: 0,
                                y: 0,
                                width: 0,
                                height: 0
                            }
                        }
                    }
                    ),
                    W.Wi.render(()=>{
                        (0,
                        j.i)(n, r, {
                            enableHardwareAcceleration: !1
                        }, (0,
                        D.a)(e.tagName), t.transformTemplate),
                        (0,
                        L.K)(e, n)
                    }
                    )
                }
            })
        };
        var z = n(189);
        let H = {
            useVisualState: U({
                scrapeMotionValuesFromProps: z.U,
                createRenderState: C
            })
        };
        function X(t, e, n, r={
            passive: !0
        }) {
            return t.addEventListener(e, n, r),
            ()=>t.removeEventListener(e, n)
        }
        let Y = t=>"mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;
        function Z(t, e="page") {
            return {
                point: {
                    x: t[e + "X"],
                    y: t[e + "Y"]
                }
            }
        }
        let G = t=>e=>Y(e) && t(e, Z(e));
        function q(t, e, n, r) {
            return X(t, e, G(n), r)
        }
        var K = n(3624);
        function J(t) {
            let e = null;
            return ()=>null === e && (e = t,
            ()=>{
                e = null
            }
            )
        }
        let Q = J("dragHorizontal")
          , tt = J("dragVertical");
        function te(t) {
            let e = !1;
            if ("y" === t)
                e = tt();
            else if ("x" === t)
                e = Q();
            else {
                let t = Q()
                  , n = tt();
                t && n ? e = ()=>{
                    t(),
                    n()
                }
                : (t && t(),
                n && n())
            }
            return e
        }
        function tn() {
            let t = te(!0);
            return !t || (t(),
            !1)
        }
        class tr {
            constructor(t) {
                this.isMounted = !1,
                this.node = t
            }
            update() {}
        }
        function ti(t, e) {
            let n = "pointer" + (e ? "enter" : "leave")
              , r = "onHover" + (e ? "Start" : "End");
            return q(t.current, n, (n,i)=>{
                if ("touch" === n.type || tn())
                    return;
                let s = t.getProps();
                t.animationState && s.whileHover && t.animationState.setActive("whileHover", e),
                s[r] && W.Wi.update(()=>s[r](n, i))
            }
            , {
                passive: !t.getProps()[r]
            })
        }
        let ts = (t,e)=>!!e && (t === e || ts(t, e.parentElement));
        var to = n(1662);
        function ta(t, e) {
            if (!e)
                return;
            let n = new PointerEvent("pointer" + t);
            e(n, Z(n))
        }
        let tl = new WeakMap
          , tu = new WeakMap
          , tc = t=>{
            let e = tl.get(t.target);
            e && e(t)
        }
          , th = t=>{
            t.forEach(tc)
        }
          , td = {
            some: 0,
            all: 1
        };
        var tf = n(8488);
        function tp(t, e) {
            if (!Array.isArray(e))
                return !1;
            let n = e.length;
            if (n !== t.length)
                return !1;
            for (let r = 0; r < n; r++)
                if (e[r] !== t[r])
                    return !1;
            return !0
        }
        var tm = n(2248)
          , tv = n(2963)
          , tg = n(8254);
        function ty(t, e, n={}) {
            let r = (0,
            tm.x)(t, e, n.custom)
              , {transition: i=t.getDefaultTransition() || {}} = r || {};
            n.transitionOverride && (i = n.transitionOverride);
            let s = r ? ()=>Promise.all((0,
            tg.w)(t, r, n)) : ()=>Promise.resolve()
              , o = t.variantChildren && t.variantChildren.size ? (r=0)=>{
                let {delayChildren: s=0, staggerChildren: o, staggerDirection: a} = i;
                return function(t, e, n=0, r=0, i=1, s) {
                    let o = []
                      , a = (t.variantChildren.size - 1) * r
                      , l = 1 === i ? (t=0)=>t * r : (t=0)=>a - t * r;
                    return Array.from(t.variantChildren).sort(tx).forEach((t,r)=>{
                        t.notify("AnimationStart", e),
                        o.push(ty(t, e, {
                            ...s,
                            delay: n + l(r)
                        }).then(()=>t.notify("AnimationComplete", e)))
                    }
                    ),
                    Promise.all(o)
                }(t, e, s + r, o, a, n)
            }
            : ()=>Promise.resolve()
              , {when: a} = i;
            if (!a)
                return Promise.all([s(), o(n.delay)]);
            {
                let[t,e] = "beforeChildren" === a ? [s, o] : [o, s];
                return t().then(()=>e())
            }
        }
        function tx(t, e) {
            return t.sortNodePosition(e)
        }
        let tP = [...tv.e].reverse()
          , tb = tv.e.length;
        function tw(t=!1) {
            return {
                isActive: t,
                protectedKeys: {},
                needsAnimating: {},
                prevResolvedValues: {}
            }
        }
        let tA = 0;
        var tC = n(5487)
          , tT = n(6917);
        let tE = (t,e)=>Math.abs(t - e);
        class tS {
            constructor(t, e, {transformPagePoint: n}={}) {
                if (this.startEvent = null,
                this.lastMoveEvent = null,
                this.lastMoveEventInfo = null,
                this.handlers = {},
                this.updatePoint = ()=>{
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let t = tj(this.lastMoveEventInfo, this.history)
                      , e = null !== this.startEvent
                      , n = function(t, e) {
                        let n = tE(t.x, e.x)
                          , r = tE(t.y, e.y);
                        return Math.sqrt(n ** 2 + r ** 2)
                    }(t.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                    if (!e && !n)
                        return;
                    let {point: r} = t
                      , {timestamp: i} = W.frameData;
                    this.history.push({
                        ...r,
                        timestamp: i
                    });
                    let {onStart: s, onMove: o} = this.handlers;
                    e || (s && s(this.lastMoveEvent, t),
                    this.startEvent = this.lastMoveEvent),
                    o && o(this.lastMoveEvent, t)
                }
                ,
                this.handlePointerMove = (t,e)=>{
                    this.lastMoveEvent = t,
                    this.lastMoveEventInfo = tV(e, this.transformPagePoint),
                    W.Wi.update(this.updatePoint, !0)
                }
                ,
                this.handlePointerUp = (t,e)=>{
                    if (this.end(),
                    !(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let {onEnd: n, onSessionEnd: r} = this.handlers
                      , i = tj("pointercancel" === t.type ? this.lastMoveEventInfo : tV(e, this.transformPagePoint), this.history);
                    this.startEvent && n && n(t, i),
                    r && r(t, i)
                }
                ,
                !Y(t))
                    return;
                this.handlers = e,
                this.transformPagePoint = n;
                let r = Z(t)
                  , i = tV(r, this.transformPagePoint)
                  , {point: s} = i
                  , {timestamp: o} = W.frameData;
                this.history = [{
                    ...s,
                    timestamp: o
                }];
                let {onSessionStart: a} = e;
                a && a(t, tj(i, this.history)),
                this.removeListeners = (0,
                K.z)(q(window, "pointermove", this.handlePointerMove), q(window, "pointerup", this.handlePointerUp), q(window, "pointercancel", this.handlePointerUp))
            }
            updateHandlers(t) {
                this.handlers = t
            }
            end() {
                this.removeListeners && this.removeListeners(),
                (0,
                W.Pn)(this.updatePoint)
            }
        }
        function tV(t, e) {
            return e ? {
                point: e(t.point)
            } : t
        }
        function tM(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }
        function tj({point: t}, e) {
            return {
                point: t,
                delta: tM(t, tR(e)),
                offset: tM(t, e[0]),
                velocity: function(t, e) {
                    if (t.length < 2)
                        return {
                            x: 0,
                            y: 0
                        };
                    let n = t.length - 1
                      , r = null
                      , i = tR(t);
                    for (; n >= 0 && (r = t[n],
                    !(i.timestamp - r.timestamp > (0,
                    tT.w)(.1))); )
                        n--;
                    if (!r)
                        return {
                            x: 0,
                            y: 0
                        };
                    let s = (0,
                    tT.X)(i.timestamp - r.timestamp);
                    if (0 === s)
                        return {
                            x: 0,
                            y: 0
                        };
                    let o = {
                        x: (i.x - r.x) / s,
                        y: (i.y - r.y) / s
                    };
                    return o.x === 1 / 0 && (o.x = 0),
                    o.y === 1 / 0 && (o.y = 0),
                    o
                }(e, 0)
            }
        }
        function tR(t) {
            return t[t.length - 1]
        }
        var tD = n(3967)
          , tk = n(22);
        function tL(t) {
            return t.max - t.min
        }
        function tO(t, e=0, n=.01) {
            return Math.abs(t - e) <= n
        }
        function tF(t, e, n, r=.5) {
            t.origin = r,
            t.originPoint = (0,
            tk.C)(e.min, e.max, t.origin),
            t.scale = tL(n) / tL(e),
            (tO(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
            t.translate = (0,
            tk.C)(n.min, n.max, t.origin) - t.originPoint,
            (tO(t.translate) || isNaN(t.translate)) && (t.translate = 0)
        }
        function tB(t, e, n, r) {
            tF(t.x, e.x, n.x, r ? r.originX : void 0),
            tF(t.y, e.y, n.y, r ? r.originY : void 0)
        }
        function tI(t, e, n) {
            t.min = n.min + e.min,
            t.max = t.min + tL(e)
        }
        function tN(t, e, n) {
            t.min = e.min - n.min,
            t.max = t.min + tL(e)
        }
        function t$(t, e, n) {
            tN(t.x, e.x, n.x),
            tN(t.y, e.y, n.y)
        }
        var tU = n(4169);
        function tW(t, e, n) {
            return {
                min: void 0 !== e ? t.min + e : void 0,
                max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
            }
        }
        function t_(t, e) {
            let n = e.min - t.min
              , r = e.max - t.max;
            return e.max - e.min < t.max - t.min && ([n,r] = [r, n]),
            {
                min: n,
                max: r
            }
        }
        function tz(t, e, n) {
            return {
                min: tH(t, e),
                max: tH(t, n)
            }
        }
        function tH(t, e) {
            return "number" == typeof t ? t : t[e] || 0
        }
        var tX = n(1512);
        function tY(t) {
            return [t("x"), t("y")]
        }
        var tZ = n(6460)
          , tG = n(6117)
          , tq = n(6190)
          , tK = n(4502);
        let tJ = new WeakMap;
        class tQ {
            constructor(t) {
                this.openGlobalLock = null,
                this.isDragging = !1,
                this.currentDirection = null,
                this.originPoint = {
                    x: 0,
                    y: 0
                },
                this.constraints = !1,
                this.hasMutatedConstraints = !1,
                this.elastic = (0,
                tX.dO)(),
                this.visualElement = t
            }
            start(t, {snapToCursor: e=!1}={}) {
                let {presenceContext: n} = this.visualElement;
                n && !1 === n.isPresent || (this.panSession = new tS(t,{
                    onSessionStart: t=>{
                        this.stopAnimation(),
                        e && this.snapToCursor(Z(t, "page").point)
                    }
                    ,
                    onStart: (t,e)=>{
                        let {drag: n, dragPropagation: r, onDragStart: i} = this.getProps();
                        if (n && !r && (this.openGlobalLock && this.openGlobalLock(),
                        this.openGlobalLock = te(n),
                        !this.openGlobalLock))
                            return;
                        this.isDragging = !0,
                        this.currentDirection = null,
                        this.resolveConstraints(),
                        this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                        this.visualElement.projection.target = void 0),
                        tY(t=>{
                            let e = this.getAxisMotionValue(t).get() || 0;
                            if (tq.aQ.test(e)) {
                                let {projection: n} = this.visualElement;
                                if (n && n.layout) {
                                    let r = n.layout.layoutBox[t];
                                    if (r) {
                                        let t = tL(r);
                                        e = t * (parseFloat(e) / 100)
                                    }
                                }
                            }
                            this.originPoint[t] = e
                        }
                        ),
                        i && W.Wi.update(()=>i(t, e), !1, !0);
                        let {animationState: s} = this.visualElement;
                        s && s.setActive("whileDrag", !0)
                    }
                    ,
                    onMove: (t,e)=>{
                        let {dragPropagation: n, dragDirectionLock: r, onDirectionLock: i, onDrag: s} = this.getProps();
                        if (!n && !this.openGlobalLock)
                            return;
                        let {offset: o} = e;
                        if (r && null === this.currentDirection) {
                            this.currentDirection = function(t, e=10) {
                                let n = null;
                                return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"),
                                n
                            }(o),
                            null !== this.currentDirection && i && i(this.currentDirection);
                            return
                        }
                        this.updateAxis("x", e.point, o),
                        this.updateAxis("y", e.point, o),
                        this.visualElement.render(),
                        s && s(t, e)
                    }
                    ,
                    onSessionEnd: (t,e)=>this.stop(t, e)
                },{
                    transformPagePoint: this.visualElement.getTransformPagePoint()
                }))
            }
            stop(t, e) {
                let n = this.isDragging;
                if (this.cancel(),
                !n)
                    return;
                let {velocity: r} = e;
                this.startAnimation(r);
                let {onDragEnd: i} = this.getProps();
                i && W.Wi.update(()=>i(t, e))
            }
            cancel() {
                this.isDragging = !1;
                let {projection: t, animationState: e} = this.visualElement;
                t && (t.isAnimationBlocked = !1),
                this.panSession && this.panSession.end(),
                this.panSession = void 0;
                let {dragPropagation: n} = this.getProps();
                !n && this.openGlobalLock && (this.openGlobalLock(),
                this.openGlobalLock = null),
                e && e.setActive("whileDrag", !1)
            }
            updateAxis(t, e, n) {
                let {drag: r} = this.getProps();
                if (!n || !t0(t, r, this.currentDirection))
                    return;
                let i = this.getAxisMotionValue(t)
                  , s = this.originPoint[t] + n[t];
                this.constraints && this.constraints[t] && (s = function(t, {min: e, max: n}, r) {
                    return void 0 !== e && t < e ? t = r ? (0,
                    tk.C)(e, t, r.min) : Math.max(t, e) : void 0 !== n && t > n && (t = r ? (0,
                    tk.C)(n, t, r.max) : Math.min(t, n)),
                    t
                }(s, this.constraints[t], this.elastic[t])),
                i.set(s)
            }
            resolveConstraints() {
                let {dragConstraints: t, dragElastic: e} = this.getProps()
                  , {layout: n} = this.visualElement.projection || {}
                  , r = this.constraints;
                t && (0,
                c.I)(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && n ? this.constraints = function(t, {top: e, left: n, bottom: r, right: i}) {
                    return {
                        x: tW(t.x, n, i),
                        y: tW(t.y, e, r)
                    }
                }(n.layoutBox, t) : this.constraints = !1,
                this.elastic = function(t=.35) {
                    return !1 === t ? t = 0 : !0 === t && (t = .35),
                    {
                        x: tz(t, "left", "right"),
                        y: tz(t, "top", "bottom")
                    }
                }(e),
                r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && tY(t=>{
                    this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                        let n = {};
                        return void 0 !== e.min && (n.min = e.min - t.min),
                        void 0 !== e.max && (n.max = e.max - t.min),
                        n
                    }(n.layoutBox[t], this.constraints[t]))
                }
                )
            }
            resolveRefConstraints() {
                var t;
                let {dragConstraints: e, onMeasureDragConstraints: n} = this.getProps();
                if (!e || !(0,
                c.I)(e))
                    return !1;
                let r = e.current;
                (0,
                tC.k)(null !== r, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                let {projection: i} = this.visualElement;
                if (!i || !i.layout)
                    return !1;
                let s = (0,
                tZ.z)(r, i.root, this.visualElement.getTransformPagePoint())
                  , o = {
                    x: t_((t = i.layout.layoutBox).x, s.x),
                    y: t_(t.y, s.y)
                };
                if (n) {
                    let t = n((0,
                    tG.z2)(o));
                    this.hasMutatedConstraints = !!t,
                    t && (o = (0,
                    tG.i8)(t))
                }
                return o
            }
            startAnimation(t) {
                let {drag: e, dragMomentum: n, dragElastic: r, dragTransition: i, dragSnapToOrigin: s, onDragTransitionEnd: o} = this.getProps()
                  , a = this.constraints || {}
                  , l = tY(o=>{
                    if (!t0(o, e, this.currentDirection))
                        return;
                    let l = a && a[o] || {};
                    s && (l = {
                        min: 0,
                        max: 0
                    });
                    let u = {
                        type: "inertia",
                        velocity: n ? t[o] : 0,
                        bounceStiffness: r ? 200 : 1e6,
                        bounceDamping: r ? 40 : 1e7,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...i,
                        ...l
                    };
                    return this.startAxisValueAnimation(o, u)
                }
                );
                return Promise.all(l).then(o)
            }
            startAxisValueAnimation(t, e) {
                let n = this.getAxisMotionValue(t);
                return n.start((0,
                tK.v)(t, n, 0, e))
            }
            stopAnimation() {
                tY(t=>this.getAxisMotionValue(t).stop())
            }
            getAxisMotionValue(t) {
                let e = "_drag" + t.toUpperCase()
                  , n = this.visualElement.getProps()
                  , r = n[e];
                return r || this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0)
            }
            snapToCursor(t) {
                tY(e=>{
                    let {drag: n} = this.getProps();
                    if (!t0(e, n, this.currentDirection))
                        return;
                    let {projection: r} = this.visualElement
                      , i = this.getAxisMotionValue(e);
                    if (r && r.layout) {
                        let {min: n, max: s} = r.layout.layoutBox[e];
                        i.set(t[e] - (0,
                        tk.C)(n, s, .5))
                    }
                }
                )
            }
            scalePositionWithinConstraints() {
                if (!this.visualElement.current)
                    return;
                let {drag: t, dragConstraints: e} = this.getProps()
                  , {projection: n} = this.visualElement;
                if (!(0,
                c.I)(e) || !n || !this.constraints)
                    return;
                this.stopAnimation();
                let r = {
                    x: 0,
                    y: 0
                };
                tY(t=>{
                    let e = this.getAxisMotionValue(t);
                    if (e) {
                        let n = e.get();
                        r[t] = function(t, e) {
                            let n = .5
                              , r = tL(t)
                              , i = tL(e);
                            return i > r ? n = (0,
                            tD.Y)(e.min, e.max - r, t.min) : r > i && (n = (0,
                            tD.Y)(t.min, t.max - i, e.min)),
                            (0,
                            tU.u)(0, 1, n)
                        }({
                            min: n,
                            max: n
                        }, this.constraints[t])
                    }
                }
                );
                let {transformTemplate: i} = this.visualElement.getProps();
                this.visualElement.current.style.transform = i ? i({}, "") : "none",
                n.root && n.root.updateScroll(),
                n.updateLayout(),
                this.resolveConstraints(),
                tY(e=>{
                    if (!t0(e, t, null))
                        return;
                    let n = this.getAxisMotionValue(e)
                      , {min: i, max: s} = this.constraints[e];
                    n.set((0,
                    tk.C)(i, s, r[e]))
                }
                )
            }
            addListeners() {
                if (!this.visualElement.current)
                    return;
                tJ.set(this.visualElement, this);
                let t = this.visualElement.current
                  , e = q(t, "pointerdown", t=>{
                    let {drag: e, dragListener: n=!0} = this.getProps();
                    e && n && this.start(t)
                }
                )
                  , n = ()=>{
                    let {dragConstraints: t} = this.getProps();
                    (0,
                    c.I)(t) && (this.constraints = this.resolveRefConstraints())
                }
                  , {projection: r} = this.visualElement
                  , i = r.addEventListener("measure", n);
                r && !r.layout && (r.root && r.root.updateScroll(),
                r.updateLayout()),
                n();
                let s = X(window, "resize", ()=>this.scalePositionWithinConstraints())
                  , o = r.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e})=>{
                    this.isDragging && e && (tY(e=>{
                        let n = this.getAxisMotionValue(e);
                        n && (this.originPoint[e] += t[e].translate,
                        n.set(n.get() + t[e].translate))
                    }
                    ),
                    this.visualElement.render())
                }
                );
                return ()=>{
                    s(),
                    e(),
                    i(),
                    o && o()
                }
            }
            getProps() {
                let t = this.visualElement.getProps()
                  , {drag: e=!1, dragDirectionLock: n=!1, dragPropagation: r=!1, dragConstraints: i=!1, dragElastic: s=.35, dragMomentum: o=!0} = t;
                return {
                    ...t,
                    drag: e,
                    dragDirectionLock: n,
                    dragPropagation: r,
                    dragConstraints: i,
                    dragElastic: s,
                    dragMomentum: o
                }
            }
        }
        function t0(t, e, n) {
            return (!0 === e || e === t) && (null === n || n === t)
        }
        let t1 = t=>(e,n)=>{
            t && W.Wi.update(()=>t(e, n))
        }
          , t4 = {
            hasAnimatedSinceResize: !0,
            hasEverUpdated: !1
        };
        function t5(t, e) {
            return e.max === e.min ? 0 : t / (e.max - e.min) * 100
        }
        let t2 = {
            correct: (t,e)=>{
                if (!e.target)
                    return t;
                if ("string" == typeof t) {
                    if (!tq.px.test(t))
                        return t;
                    t = parseFloat(t)
                }
                let n = t5(t, e.target.x)
                  , r = t5(t, e.target.y);
                return `${n}% ${r}%`
            }
        };
        var t6 = n(1550)
          , t3 = n(4561);
        class t8 extends i.Component {
            componentDidMount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: n, layoutId: r} = this.props
                  , {projection: i} = t;
                (0,
                t3.B)(t7),
                i && (e.group && e.group.add(i),
                n && n.register && r && n.register(i),
                i.root.didUpdate(),
                i.addEventListener("animationComplete", ()=>{
                    this.safeToRemove()
                }
                ),
                i.setOptions({
                    ...i.options,
                    onExitComplete: ()=>this.safeToRemove()
                })),
                t4.hasEverUpdated = !0
            }
            getSnapshotBeforeUpdate(t) {
                let {layoutDependency: e, visualElement: n, drag: r, isPresent: i} = this.props
                  , s = n.projection;
                return s && (s.isPresent = i,
                r || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(),
                t.isPresent === i || (i ? s.promote() : s.relegate() || W.Wi.postRender(()=>{
                    let t = s.getStack();
                    t && t.members.length || this.safeToRemove()
                }
                ))),
                null
            }
            componentDidUpdate() {
                let {projection: t} = this.props.visualElement;
                t && (t.root.didUpdate(),
                queueMicrotask(()=>{
                    !t.currentAnimation && t.isLead() && this.safeToRemove()
                }
                ))
            }
            componentWillUnmount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: n} = this.props
                  , {projection: r} = t;
                r && (r.scheduleCheckAfterUnmount(),
                e && e.group && e.group.remove(r),
                n && n.deregister && n.deregister(r))
            }
            safeToRemove() {
                let {safeToRemove: t} = this.props;
                t && t()
            }
            render() {
                return null
            }
        }
        function t9(t) {
            let[e,n] = function() {
                let t = (0,
                i.useContext)(a.O);
                if (null === t)
                    return [!0, null];
                let {isPresent: e, onExitComplete: n, register: r} = t
                  , s = (0,
                i.useId)();
                return (0,
                i.useEffect)(()=>r(s), []),
                !e && n ? [!1, ()=>n && n(s)] : [!0]
            }()
              , r = (0,
            i.useContext)(v.p);
            return i.createElement(t8, {
                ...t,
                layoutGroup: r,
                switchLayoutGroup: (0,
                i.useContext)(g),
                isPresent: e,
                safeToRemove: n
            })
        }
        let t7 = {
            borderRadius: {
                ...t2,
                applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
            },
            borderTopLeftRadius: t2,
            borderTopRightRadius: t2,
            borderBottomLeftRadius: t2,
            borderBottomRightRadius: t2,
            boxShadow: {
                correct: (t,{treeScale: e, projectionDelta: n})=>{
                    let r = t6.P.parse(t);
                    if (r.length > 5)
                        return t;
                    let i = t6.P.createTransformer(t)
                      , s = "number" != typeof r[0] ? 1 : 0
                      , o = n.x.scale * e.x
                      , a = n.y.scale * e.y;
                    r[0 + s] /= o,
                    r[1 + s] /= a;
                    let l = (0,
                    tk.C)(o, a, .5);
                    return "number" == typeof r[2 + s] && (r[2 + s] /= l),
                    "number" == typeof r[3 + s] && (r[3 + s] /= l),
                    i(r)
                }
            }
        };
        var et = n(1560)
          , ee = n(7255);
        let en = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
          , er = en.length
          , ei = t=>"string" == typeof t ? parseFloat(t) : t
          , es = t=>"number" == typeof t || tq.px.test(t);
        function eo(t, e) {
            return void 0 !== t[e] ? t[e] : t.borderRadius
        }
        let ea = eu(0, .5, ee.Bn)
          , el = eu(.5, .95, to.Z);
        function eu(t, e, n) {
            return r=>r < t ? 0 : r > e ? 1 : n((0,
            tD.Y)(t, e, r))
        }
        function ec(t, e) {
            t.min = e.min,
            t.max = e.max
        }
        function eh(t, e) {
            ec(t.x, e.x),
            ec(t.y, e.y)
        }
        var ed = n(6e3);
        function ef(t, e, n, r, i) {
            return t -= e,
            t = (0,
            ed.q2)(t, 1 / n, r),
            void 0 !== i && (t = (0,
            ed.q2)(t, 1 / i, r)),
            t
        }
        function ep(t, e, [n,r,i], s, o) {
            !function(t, e=0, n=1, r=.5, i, s=t, o=t) {
                if (tq.aQ.test(e)) {
                    e = parseFloat(e);
                    let t = (0,
                    tk.C)(o.min, o.max, e / 100);
                    e = t - o.min
                }
                if ("number" != typeof e)
                    return;
                let a = (0,
                tk.C)(s.min, s.max, r);
                t === s && (a -= e),
                t.min = ef(t.min, e, n, a, i),
                t.max = ef(t.max, e, n, a, i)
            }(t, e[n], e[r], e[i], e.scale, s, o)
        }
        let em = ["x", "scaleX", "originX"]
          , ev = ["y", "scaleY", "originY"];
        function eg(t, e, n, r) {
            ep(t.x, e, em, n ? n.x : void 0, r ? r.x : void 0),
            ep(t.y, e, ev, n ? n.y : void 0, r ? r.y : void 0)
        }
        var ey = n(1056);
        function ex(t) {
            return 0 === t.translate && 1 === t.scale
        }
        function eP(t) {
            return ex(t.x) && ex(t.y)
        }
        function eb(t, e) {
            return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max)
        }
        function ew(t) {
            return tL(t.x) / tL(t.y)
        }
        var eA = n(10);
        class eC {
            constructor() {
                this.members = []
            }
            add(t) {
                (0,
                eA.y4)(this.members, t),
                t.scheduleRender()
            }
            remove(t) {
                if ((0,
                eA.cl)(this.members, t),
                t === this.prevLead && (this.prevLead = void 0),
                t === this.lead) {
                    let t = this.members[this.members.length - 1];
                    t && this.promote(t)
                }
            }
            relegate(t) {
                let e;
                let n = this.members.findIndex(e=>t === e);
                if (0 === n)
                    return !1;
                for (let t = n; t >= 0; t--) {
                    let n = this.members[t];
                    if (!1 !== n.isPresent) {
                        e = n;
                        break
                    }
                }
                return !!e && (this.promote(e),
                !0)
            }
            promote(t, e) {
                let n = this.lead;
                if (t !== n && (this.prevLead = n,
                this.lead = t,
                t.show(),
                n)) {
                    n.instance && n.scheduleRender(),
                    t.scheduleRender(),
                    t.resumeFrom = n,
                    e && (t.resumeFrom.preserveOpacity = !0),
                    n.snapshot && (t.snapshot = n.snapshot,
                    t.snapshot.latestValues = n.animationValues || n.latestValues),
                    t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                    let {crossfade: r} = t.options;
                    !1 === r && n.hide()
                }
            }
            exitAnimationComplete() {
                this.members.forEach(t=>{
                    let {options: e, resumingFrom: n} = t;
                    e.onExitComplete && e.onExitComplete(),
                    n && n.options.onExitComplete && n.options.onExitComplete()
                }
                )
            }
            scheduleRender() {
                this.members.forEach(t=>{
                    t.instance && t.scheduleRender(!1)
                }
                )
            }
            removeLeadSnapshot() {
                this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
            }
        }
        function eT(t, e, n) {
            let r = ""
              , i = t.x.translate / e.x
              , s = t.y.translate / e.y;
            if ((i || s) && (r = `translate3d(${i}px, ${s}px, 0) `),
            (1 !== e.x || 1 !== e.y) && (r += `scale(${1 / e.x}, ${1 / e.y}) `),
            n) {
                let {rotate: t, rotateX: e, rotateY: i} = n;
                t && (r += `rotate(${t}deg) `),
                e && (r += `rotateX(${e}deg) `),
                i && (r += `rotateY(${i}deg) `)
            }
            let o = t.x.scale * e.x
              , a = t.y.scale * e.y;
            return (1 !== o || 1 !== a) && (r += `scale(${o}, ${a})`),
            r || "none"
        }
        var eE = n(9527);
        let eS = (t,e)=>t.depth - e.depth;
        class eV {
            constructor() {
                this.children = [],
                this.isDirty = !1
            }
            add(t) {
                (0,
                eA.y4)(this.children, t),
                this.isDirty = !0
            }
            remove(t) {
                (0,
                eA.cl)(this.children, t),
                this.isDirty = !0
            }
            forEach(t) {
                this.isDirty && this.children.sort(eS),
                this.isDirty = !1,
                this.children.forEach(t)
            }
        }
        var eM = n(5194)
          , ej = n(1059);
        let eR = ["", "X", "Y", "Z"]
          , eD = 0
          , ek = {
            type: "projectionFrame",
            totalNodes: 0,
            resolvedTargetDeltas: 0,
            recalculatedProjection: 0
        };
        function eL({attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
            return class {
                constructor(t={}, n=null == e ? void 0 : e()) {
                    this.id = eD++,
                    this.animationId = 0,
                    this.children = new Set,
                    this.options = {},
                    this.isTreeAnimating = !1,
                    this.isAnimationBlocked = !1,
                    this.isLayoutDirty = !1,
                    this.isProjectionDirty = !1,
                    this.isSharedProjectionDirty = !1,
                    this.isTransformDirty = !1,
                    this.updateManuallyBlocked = !1,
                    this.updateBlockedByResize = !1,
                    this.isUpdating = !1,
                    this.isSVG = !1,
                    this.needsReset = !1,
                    this.shouldResetTransform = !1,
                    this.treeScale = {
                        x: 1,
                        y: 1
                    },
                    this.eventHandlers = new Map,
                    this.hasTreeAnimated = !1,
                    this.updateScheduled = !1,
                    this.checkUpdateFailed = ()=>{
                        this.isUpdating && (this.isUpdating = !1,
                        this.clearAllSnapshots())
                    }
                    ,
                    this.updateProjection = ()=>{
                        ek.totalNodes = ek.resolvedTargetDeltas = ek.recalculatedProjection = 0,
                        this.nodes.forEach(eB),
                        this.nodes.forEach(ez),
                        this.nodes.forEach(eH),
                        this.nodes.forEach(eI),
                        window.MotionDebug && window.MotionDebug.record(ek)
                    }
                    ,
                    this.hasProjected = !1,
                    this.isVisible = !0,
                    this.animationProgress = 0,
                    this.sharedNodes = new Map,
                    this.latestValues = t,
                    this.root = n ? n.root || n : this,
                    this.path = n ? [...n.path, n] : [],
                    this.parent = n,
                    this.depth = n ? n.depth + 1 : 0;
                    for (let t = 0; t < this.path.length; t++)
                        this.path[t].shouldResetTransform = !0;
                    this.root === this && (this.nodes = new eV)
                }
                addEventListener(t, e) {
                    return this.eventHandlers.has(t) || this.eventHandlers.set(t, new et.L),
                    this.eventHandlers.get(t).add(e)
                }
                notifyListeners(t, ...e) {
                    let n = this.eventHandlers.get(t);
                    n && n.notify(...e)
                }
                hasListeners(t) {
                    return this.eventHandlers.has(t)
                }
                mount(e, n=this.root.hasTreeAnimated) {
                    if (this.instance)
                        return;
                    this.isSVG = (0,
                    eM.v)(e),
                    this.instance = e;
                    let {layoutId: r, layout: i, visualElement: s} = this.options;
                    if (s && !s.current && s.mount(e),
                    this.root.nodes.add(this),
                    this.parent && this.parent.children.add(this),
                    n && (i || r) && (this.isLayoutDirty = !0),
                    t) {
                        let n;
                        let r = ()=>this.root.updateBlockedByResize = !1;
                        t(e, ()=>{
                            this.root.updateBlockedByResize = !0,
                            n && n(),
                            n = function(t, e) {
                                let n = performance.now()
                                  , r = ({timestamp: i})=>{
                                    let s = i - n;
                                    s >= e && ((0,
                                    W.Pn)(r),
                                    t(s - e))
                                }
                                ;
                                return W.Wi.read(r, !0),
                                ()=>(0,
                                W.Pn)(r)
                            }(r, 250),
                            t4.hasAnimatedSinceResize && (t4.hasAnimatedSinceResize = !1,
                            this.nodes.forEach(e_))
                        }
                        )
                    }
                    r && this.root.registerSharedNode(r, this),
                    !1 !== this.options.animate && s && (r || i) && this.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e, hasRelativeTargetChanged: n, layout: r})=>{
                        if (this.isTreeAnimationBlocked()) {
                            this.target = void 0,
                            this.relativeTarget = void 0;
                            return
                        }
                        let i = this.options.transition || s.getDefaultTransition() || eK
                          , {onLayoutAnimationStart: o, onLayoutAnimationComplete: a} = s.getProps()
                          , l = !this.targetLayout || !eb(this.targetLayout, r) || n
                          , u = !e && n;
                        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || e && (l || !this.currentAnimation)) {
                            this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                            this.resumingFrom.resumingFrom = void 0),
                            this.setAnimationOrigin(t, u);
                            let e = {
                                ...(0,
                                ey.e)(i, "layout"),
                                onPlay: o,
                                onComplete: a
                            };
                            (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0,
                            e.type = !1),
                            this.startAnimation(e)
                        } else
                            e || e_(this),
                            this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                        this.targetLayout = r
                    }
                    )
                }
                unmount() {
                    this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this);
                    let t = this.getStack();
                    t && t.remove(this),
                    this.parent && this.parent.children.delete(this),
                    this.instance = void 0,
                    (0,
                    W.Pn)(this.updateProjection)
                }
                blockUpdate() {
                    this.updateManuallyBlocked = !0
                }
                unblockUpdate() {
                    this.updateManuallyBlocked = !1
                }
                isUpdateBlocked() {
                    return this.updateManuallyBlocked || this.updateBlockedByResize
                }
                isTreeAnimationBlocked() {
                    return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                }
                startUpdate() {
                    !this.isUpdateBlocked() && (this.isUpdating = !0,
                    this.nodes && this.nodes.forEach(eX),
                    this.animationId++)
                }
                getTransformTemplate() {
                    let {visualElement: t} = this.options;
                    return t && t.getProps().transformTemplate
                }
                willUpdate(t=!0) {
                    if (this.root.hasTreeAnimated = !0,
                    this.root.isUpdateBlocked()) {
                        this.options.onExitComplete && this.options.onExitComplete();
                        return
                    }
                    if (this.root.isUpdating || this.root.startUpdate(),
                    this.isLayoutDirty)
                        return;
                    this.isLayoutDirty = !0;
                    for (let t = 0; t < this.path.length; t++) {
                        let e = this.path[t];
                        e.shouldResetTransform = !0,
                        e.updateScroll("snapshot"),
                        e.options.layoutRoot && e.willUpdate(!1)
                    }
                    let {layoutId: e, layout: n} = this.options;
                    if (void 0 === e && !n)
                        return;
                    let r = this.getTransformTemplate();
                    this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0,
                    this.updateSnapshot(),
                    t && this.notifyListeners("willUpdate")
                }
                update() {
                    this.updateScheduled = !1;
                    let t = this.isUpdateBlocked();
                    if (t) {
                        this.unblockUpdate(),
                        this.clearAllSnapshots(),
                        this.nodes.forEach(e$);
                        return
                    }
                    this.isUpdating || this.nodes.forEach(eU),
                    this.isUpdating = !1,
                    this.nodes.forEach(eW),
                    this.nodes.forEach(eO),
                    this.nodes.forEach(eF),
                    this.clearAllSnapshots();
                    let e = performance.now();
                    W.frameData.delta = (0,
                    tU.u)(0, 1e3 / 60, e - W.frameData.timestamp),
                    W.frameData.timestamp = e,
                    W.frameData.isProcessing = !0,
                    W.S6.update.process(W.frameData),
                    W.S6.preRender.process(W.frameData),
                    W.S6.render.process(W.frameData),
                    W.frameData.isProcessing = !1
                }
                didUpdate() {
                    this.updateScheduled || (this.updateScheduled = !0,
                    queueMicrotask(()=>this.update()))
                }
                clearAllSnapshots() {
                    this.nodes.forEach(eN),
                    this.sharedNodes.forEach(eY)
                }
                scheduleUpdateProjection() {
                    W.Wi.preRender(this.updateProjection, !1, !0)
                }
                scheduleCheckAfterUnmount() {
                    W.Wi.postRender(()=>{
                        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                    }
                    )
                }
                updateSnapshot() {
                    !this.snapshot && this.instance && (this.snapshot = this.measure())
                }
                updateLayout() {
                    if (!this.instance || (this.updateScroll(),
                    !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                        return;
                    if (this.resumeFrom && !this.resumeFrom.instance)
                        for (let t = 0; t < this.path.length; t++) {
                            let e = this.path[t];
                            e.updateScroll()
                        }
                    let t = this.layout;
                    this.layout = this.measure(!1),
                    this.layoutCorrected = (0,
                    tX.dO)(),
                    this.isLayoutDirty = !1,
                    this.projectionDelta = void 0,
                    this.notifyListeners("measure", this.layout.layoutBox);
                    let {visualElement: e} = this.options;
                    e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                }
                updateScroll(t="measure") {
                    let e = !!(this.options.layoutScroll && this.instance);
                    this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1),
                    e && (this.scroll = {
                        animationId: this.root.animationId,
                        phase: t,
                        isRoot: r(this.instance),
                        offset: n(this.instance)
                    })
                }
                resetTransform() {
                    if (!i)
                        return;
                    let t = this.isLayoutDirty || this.shouldResetTransform
                      , e = this.projectionDelta && !eP(this.projectionDelta)
                      , n = this.getTransformTemplate()
                      , r = n ? n(this.latestValues, "") : void 0
                      , s = r !== this.prevTransformTemplateValue;
                    t && (e || (0,
                    eE.ud)(this.latestValues) || s) && (i(this.instance, r),
                    this.shouldResetTransform = !1,
                    this.scheduleRender())
                }
                measure(t=!0) {
                    var e;
                    let n = this.measurePageBox()
                      , r = this.removeElementScroll(n);
                    return t && (r = this.removeTransform(r)),
                    e0((e = r).x),
                    e0(e.y),
                    {
                        animationId: this.root.animationId,
                        measuredBox: n,
                        layoutBox: r,
                        latestValues: {},
                        source: this.id
                    }
                }
                measurePageBox() {
                    let {visualElement: t} = this.options;
                    if (!t)
                        return (0,
                        tX.dO)();
                    let e = t.measureViewportBox()
                      , {scroll: n} = this.root;
                    return n && ((0,
                    ed.am)(e.x, n.offset.x),
                    (0,
                    ed.am)(e.y, n.offset.y)),
                    e
                }
                removeElementScroll(t) {
                    let e = (0,
                    tX.dO)();
                    eh(e, t);
                    for (let n = 0; n < this.path.length; n++) {
                        let r = this.path[n]
                          , {scroll: i, options: s} = r;
                        if (r !== this.root && i && s.layoutScroll) {
                            if (i.isRoot) {
                                eh(e, t);
                                let {scroll: n} = this.root;
                                n && ((0,
                                ed.am)(e.x, -n.offset.x),
                                (0,
                                ed.am)(e.y, -n.offset.y))
                            }
                            (0,
                            ed.am)(e.x, i.offset.x),
                            (0,
                            ed.am)(e.y, i.offset.y)
                        }
                    }
                    return e
                }
                applyTransform(t, e=!1) {
                    let n = (0,
                    tX.dO)();
                    eh(n, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let r = this.path[t];
                        !e && r.options.layoutScroll && r.scroll && r !== r.root && (0,
                        ed.D2)(n, {
                            x: -r.scroll.offset.x,
                            y: -r.scroll.offset.y
                        }),
                        (0,
                        eE.ud)(r.latestValues) && (0,
                        ed.D2)(n, r.latestValues)
                    }
                    return (0,
                    eE.ud)(this.latestValues) && (0,
                    ed.D2)(n, this.latestValues),
                    n
                }
                removeTransform(t) {
                    let e = (0,
                    tX.dO)();
                    eh(e, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let n = this.path[t];
                        if (!n.instance || !(0,
                        eE.ud)(n.latestValues))
                            continue;
                        (0,
                        eE.Lj)(n.latestValues) && n.updateSnapshot();
                        let r = (0,
                        tX.dO)()
                          , i = n.measurePageBox();
                        eh(r, i),
                        eg(e, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, r)
                    }
                    return (0,
                    eE.ud)(this.latestValues) && eg(e, this.latestValues),
                    e
                }
                setTargetDelta(t) {
                    this.targetDelta = t,
                    this.root.scheduleUpdateProjection(),
                    this.isProjectionDirty = !0
                }
                setOptions(t) {
                    this.options = {
                        ...this.options,
                        ...t,
                        crossfade: void 0 === t.crossfade || t.crossfade
                    }
                }
                clearMeasurements() {
                    this.scroll = void 0,
                    this.layout = void 0,
                    this.snapshot = void 0,
                    this.prevTransformTemplateValue = void 0,
                    this.targetDelta = void 0,
                    this.target = void 0,
                    this.isLayoutDirty = !1
                }
                forceRelativeParentToResolveTarget() {
                    this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== W.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
                }
                resolveTargetDelta(t=!1) {
                    var e, n, r, i;
                    let s = this.getLead();
                    this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty),
                    this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty),
                    this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                    let o = !!this.resumingFrom || this !== s
                      , a = !(t || o && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget);
                    if (a)
                        return;
                    let {layout: l, layoutId: u} = this.options;
                    if (this.layout && (l || u)) {
                        if (this.resolvedRelativeTargetAt = W.frameData.timestamp,
                        !this.targetDelta && !this.relativeTarget) {
                            let t = this.getClosestProjectingParent();
                            t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t,
                            this.forceRelativeParentToResolveTarget(),
                            this.relativeTarget = (0,
                            tX.dO)(),
                            this.relativeTargetOrigin = (0,
                            tX.dO)(),
                            t$(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox),
                            eh(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                        }
                        if (this.relativeTarget || this.targetDelta) {
                            if ((this.target || (this.target = (0,
                            tX.dO)(),
                            this.targetWithTransforms = (0,
                            tX.dO)()),
                            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(),
                            n = this.target,
                            r = this.relativeTarget,
                            i = this.relativeParent.target,
                            tI(n.x, r.x, i.x),
                            tI(n.y, r.y, i.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : eh(this.target, this.layout.layoutBox),
                            (0,
                            ed.o2)(this.target, this.targetDelta)) : eh(this.target, this.layout.layoutBox),
                            this.attemptToResolveRelativeTarget) {
                                this.attemptToResolveRelativeTarget = !1;
                                let t = this.getClosestProjectingParent();
                                t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t,
                                this.forceRelativeParentToResolveTarget(),
                                this.relativeTarget = (0,
                                tX.dO)(),
                                this.relativeTargetOrigin = (0,
                                tX.dO)(),
                                t$(this.relativeTargetOrigin, this.target, t.target),
                                eh(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            ek.resolvedTargetDeltas++
                        }
                    }
                }
                getClosestProjectingParent() {
                    return !this.parent || (0,
                    eE.Lj)(this.parent.latestValues) || (0,
                    eE.D_)(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                }
                isProjecting() {
                    return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                }
                calcProjection() {
                    var t;
                    let e = this.getLead()
                      , n = !!this.resumingFrom || this !== e
                      , r = !0;
                    if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (r = !1),
                    n && (this.isSharedProjectionDirty || this.isTransformDirty) && (r = !1),
                    this.resolvedRelativeTargetAt === W.frameData.timestamp && (r = !1),
                    r)
                        return;
                    let {layout: i, layoutId: s} = this.options;
                    if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
                    this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                    !this.layout || !(i || s))
                        return;
                    eh(this.layoutCorrected, this.layout.layoutBox);
                    let o = this.treeScale.x
                      , a = this.treeScale.y;
                    (0,
                    ed.YY)(this.layoutCorrected, this.treeScale, this.path, n),
                    e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox);
                    let {target: l} = e;
                    if (!l) {
                        this.projectionTransform && (this.projectionDelta = (0,
                        tX.wc)(),
                        this.projectionTransform = "none",
                        this.scheduleRender());
                        return
                    }
                    this.projectionDelta || (this.projectionDelta = (0,
                    tX.wc)(),
                    this.projectionDeltaWithTransform = (0,
                    tX.wc)());
                    let u = this.projectionTransform;
                    tB(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
                    this.projectionTransform = eT(this.projectionDelta, this.treeScale),
                    (this.projectionTransform !== u || this.treeScale.x !== o || this.treeScale.y !== a) && (this.hasProjected = !0,
                    this.scheduleRender(),
                    this.notifyListeners("projectionUpdate", l)),
                    ek.recalculatedProjection++
                }
                hide() {
                    this.isVisible = !1
                }
                show() {
                    this.isVisible = !0
                }
                scheduleRender(t=!0) {
                    if (this.options.scheduleRender && this.options.scheduleRender(),
                    t) {
                        let t = this.getStack();
                        t && t.scheduleRender()
                    }
                    this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                }
                setAnimationOrigin(t, e=!1) {
                    let n;
                    let r = this.snapshot
                      , i = r ? r.latestValues : {}
                      , s = {
                        ...this.latestValues
                    }
                      , o = (0,
                    tX.wc)();
                    this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0),
                    this.attemptToResolveRelativeTarget = !e;
                    let a = (0,
                    tX.dO)()
                      , l = r ? r.source : void 0
                      , u = this.layout ? this.layout.source : void 0
                      , c = l !== u
                      , h = this.getStack()
                      , d = !h || h.members.length <= 1
                      , f = !!(c && !d && !0 === this.options.crossfade && !this.path.some(eq));
                    this.animationProgress = 0,
                    this.mixTargetDelta = e=>{
                        let r = e / 1e3;
                        if (eZ(o.x, t.x, r),
                        eZ(o.y, t.y, r),
                        this.setTargetDelta(o),
                        this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                            var l, u, h, p;
                            t$(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                            h = this.relativeTarget,
                            p = this.relativeTargetOrigin,
                            eG(h.x, p.x, a.x, r),
                            eG(h.y, p.y, a.y, r),
                            n && (l = this.relativeTarget,
                            u = n,
                            l.x.min === u.x.min && l.x.max === u.x.max && l.y.min === u.y.min && l.y.max === u.y.max) && (this.isProjectionDirty = !1),
                            n || (n = (0,
                            tX.dO)()),
                            eh(n, this.relativeTarget)
                        }
                        c && (this.animationValues = s,
                        function(t, e, n, r, i, s) {
                            i ? (t.opacity = (0,
                            tk.C)(0, void 0 !== n.opacity ? n.opacity : 1, ea(r)),
                            t.opacityExit = (0,
                            tk.C)(void 0 !== e.opacity ? e.opacity : 1, 0, el(r))) : s && (t.opacity = (0,
                            tk.C)(void 0 !== e.opacity ? e.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, r));
                            for (let i = 0; i < er; i++) {
                                let s = `border${en[i]}Radius`
                                  , o = eo(e, s)
                                  , a = eo(n, s);
                                if (void 0 === o && void 0 === a)
                                    continue;
                                o || (o = 0),
                                a || (a = 0);
                                let l = 0 === o || 0 === a || es(o) === es(a);
                                l ? (t[s] = Math.max((0,
                                tk.C)(ei(o), ei(a), r), 0),
                                (tq.aQ.test(a) || tq.aQ.test(o)) && (t[s] += "%")) : t[s] = a
                            }
                            (e.rotate || n.rotate) && (t.rotate = (0,
                            tk.C)(e.rotate || 0, n.rotate || 0, r))
                        }(s, i, this.latestValues, r, f, d)),
                        this.root.scheduleUpdateProjection(),
                        this.scheduleRender(),
                        this.animationProgress = r
                    }
                    ,
                    this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                }
                startAnimation(t) {
                    this.notifyListeners("animationStart"),
                    this.currentAnimation && this.currentAnimation.stop(),
                    this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
                    this.pendingAnimation && ((0,
                    W.Pn)(this.pendingAnimation),
                    this.pendingAnimation = void 0),
                    this.pendingAnimation = W.Wi.update(()=>{
                        t4.hasAnimatedSinceResize = !0,
                        this.currentAnimation = (0,
                        ej.D)(0, 1e3, {
                            ...t,
                            onUpdate: e=>{
                                this.mixTargetDelta(e),
                                t.onUpdate && t.onUpdate(e)
                            }
                            ,
                            onComplete: ()=>{
                                t.onComplete && t.onComplete(),
                                this.completeAnimation()
                            }
                        }),
                        this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                        this.pendingAnimation = void 0
                    }
                    )
                }
                completeAnimation() {
                    this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                    this.resumingFrom.preserveOpacity = void 0);
                    let t = this.getStack();
                    t && t.exitAnimationComplete(),
                    this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                    this.notifyListeners("animationComplete")
                }
                finishAnimation() {
                    this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3),
                    this.currentAnimation.stop()),
                    this.completeAnimation()
                }
                applyTransformsToTarget() {
                    let t = this.getLead()
                      , {targetWithTransforms: e, target: n, layout: r, latestValues: i} = t;
                    if (e && n && r) {
                        if (this !== t && this.layout && r && e1(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                            n = this.target || (0,
                            tX.dO)();
                            let e = tL(this.layout.layoutBox.x);
                            n.x.min = t.target.x.min,
                            n.x.max = n.x.min + e;
                            let r = tL(this.layout.layoutBox.y);
                            n.y.min = t.target.y.min,
                            n.y.max = n.y.min + r
                        }
                        eh(e, n),
                        (0,
                        ed.D2)(e, i),
                        tB(this.projectionDeltaWithTransform, this.layoutCorrected, e, i)
                    }
                }
                registerSharedNode(t, e) {
                    this.sharedNodes.has(t) || this.sharedNodes.set(t, new eC);
                    let n = this.sharedNodes.get(t);
                    n.add(e);
                    let r = e.options.initialPromotionConfig;
                    e.promote({
                        transition: r ? r.transition : void 0,
                        preserveFollowOpacity: r && r.shouldPreserveFollowOpacity ? r.shouldPreserveFollowOpacity(e) : void 0
                    })
                }
                isLead() {
                    let t = this.getStack();
                    return !t || t.lead === this
                }
                getLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                }
                getPrevLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                }
                getStack() {
                    let {layoutId: t} = this.options;
                    if (t)
                        return this.root.sharedNodes.get(t)
                }
                promote({needsReset: t, transition: e, preserveFollowOpacity: n}={}) {
                    let r = this.getStack();
                    r && r.promote(this, n),
                    t && (this.projectionDelta = void 0,
                    this.needsReset = !0),
                    e && this.setOptions({
                        transition: e
                    })
                }
                relegate() {
                    let t = this.getStack();
                    return !!t && t.relegate(this)
                }
                resetRotation() {
                    let {visualElement: t} = this.options;
                    if (!t)
                        return;
                    let e = !1
                      , {latestValues: n} = t;
                    if ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (e = !0),
                    !e)
                        return;
                    let r = {};
                    for (let e = 0; e < eR.length; e++) {
                        let i = "rotate" + eR[e];
                        n[i] && (r[i] = n[i],
                        t.setStaticValue(i, 0))
                    }
                    for (let e in t.render(),
                    r)
                        t.setStaticValue(e, r[e]);
                    t.scheduleRender()
                }
                getProjectionStyles(t={}) {
                    var e, n;
                    let r = {};
                    if (!this.instance || this.isSVG)
                        return r;
                    if (!this.isVisible)
                        return {
                            visibility: "hidden"
                        };
                    r.visibility = "";
                    let i = this.getTransformTemplate();
                    if (this.needsReset)
                        return this.needsReset = !1,
                        r.opacity = "",
                        r.pointerEvents = $(t.pointerEvents) || "",
                        r.transform = i ? i(this.latestValues, "") : "none",
                        r;
                    let s = this.getLead();
                    if (!this.projectionDelta || !this.layout || !s.target) {
                        let e = {};
                        return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1,
                        e.pointerEvents = $(t.pointerEvents) || ""),
                        this.hasProjected && !(0,
                        eE.ud)(this.latestValues) && (e.transform = i ? i({}, "") : "none",
                        this.hasProjected = !1),
                        e
                    }
                    let o = s.animationValues || s.latestValues;
                    this.applyTransformsToTarget(),
                    r.transform = eT(this.projectionDeltaWithTransform, this.treeScale, o),
                    i && (r.transform = i(o, r.transform));
                    let {x: a, y: l} = this.projectionDelta;
                    for (let t in r.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`,
                    s.animationValues ? r.opacity = s === this ? null !== (n = null !== (e = o.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== n ? n : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : r.opacity = s === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0,
                    t3.P) {
                        if (void 0 === o[t])
                            continue;
                        let {correct: e, applyTo: n} = t3.P[t]
                          , i = "none" === r.transform ? o[t] : e(o[t], s);
                        if (n) {
                            let t = n.length;
                            for (let e = 0; e < t; e++)
                                r[n[e]] = i
                        } else
                            r[t] = i
                    }
                    return this.options.layoutId && (r.pointerEvents = s === this ? $(t.pointerEvents) || "" : "none"),
                    r
                }
                clearSnapshot() {
                    this.resumeFrom = this.snapshot = void 0
                }
                resetTree() {
                    this.root.nodes.forEach(t=>{
                        var e;
                        return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                    }
                    ),
                    this.root.nodes.forEach(e$),
                    this.root.sharedNodes.clear()
                }
            }
        }
        function eO(t) {
            t.updateLayout()
        }
        function eF(t) {
            var e;
            let n = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
            if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
                let {layoutBox: e, measuredBox: r} = t.layout
                  , {animationType: i} = t.options
                  , s = n.source !== t.layout.source;
                "size" === i ? tY(t=>{
                    let r = s ? n.measuredBox[t] : n.layoutBox[t]
                      , i = tL(r);
                    r.min = e[t].min,
                    r.max = r.min + i
                }
                ) : e1(i, n.layoutBox, e) && tY(r=>{
                    let i = s ? n.measuredBox[r] : n.layoutBox[r]
                      , o = tL(e[r]);
                    i.max = i.min + o,
                    t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
                    t.relativeTarget[r].max = t.relativeTarget[r].min + o)
                }
                );
                let o = (0,
                tX.wc)();
                tB(o, e, n.layoutBox);
                let a = (0,
                tX.wc)();
                s ? tB(a, t.applyTransform(r, !0), n.measuredBox) : tB(a, e, n.layoutBox);
                let l = !eP(o)
                  , u = !1;
                if (!t.resumeFrom) {
                    let r = t.getClosestProjectingParent();
                    if (r && !r.resumeFrom) {
                        let {snapshot: i, layout: s} = r;
                        if (i && s) {
                            let o = (0,
                            tX.dO)();
                            t$(o, n.layoutBox, i.layoutBox);
                            let a = (0,
                            tX.dO)();
                            t$(a, e, s.layoutBox),
                            eb(o, a) || (u = !0),
                            r.options.layoutRoot && (t.relativeTarget = a,
                            t.relativeTargetOrigin = o,
                            t.relativeParent = r)
                        }
                    }
                }
                t.notifyListeners("didUpdate", {
                    layout: e,
                    snapshot: n,
                    delta: a,
                    layoutDelta: o,
                    hasLayoutChanged: l,
                    hasRelativeTargetChanged: u
                })
            } else if (t.isLead()) {
                let {onExitComplete: e} = t.options;
                e && e()
            }
            t.options.transition = void 0
        }
        function eB(t) {
            ek.totalNodes++,
            t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
            t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
        }
        function eI(t) {
            t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
        }
        function eN(t) {
            t.clearSnapshot()
        }
        function e$(t) {
            t.clearMeasurements()
        }
        function eU(t) {
            t.isLayoutDirty = !1
        }
        function eW(t) {
            let {visualElement: e} = t.options;
            e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
            t.resetTransform()
        }
        function e_(t) {
            t.finishAnimation(),
            t.targetDelta = t.relativeTarget = t.target = void 0,
            t.isProjectionDirty = !0
        }
        function ez(t) {
            t.resolveTargetDelta()
        }
        function eH(t) {
            t.calcProjection()
        }
        function eX(t) {
            t.resetRotation()
        }
        function eY(t) {
            t.removeLeadSnapshot()
        }
        function eZ(t, e, n) {
            t.translate = (0,
            tk.C)(e.translate, 0, n),
            t.scale = (0,
            tk.C)(e.scale, 1, n),
            t.origin = e.origin,
            t.originPoint = e.originPoint
        }
        function eG(t, e, n, r) {
            t.min = (0,
            tk.C)(e.min, n.min, r),
            t.max = (0,
            tk.C)(e.max, n.max, r)
        }
        function eq(t) {
            return t.animationValues && void 0 !== t.animationValues.opacityExit
        }
        let eK = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        }
          , eJ = t=>"undefined" != typeof navigator && navigator.userAgent.toLowerCase().includes(t)
          , eQ = eJ("applewebkit/") && !eJ("chrome/") ? Math.round : to.Z;
        function e0(t) {
            t.min = eQ(t.min),
            t.max = eQ(t.max)
        }
        function e1(t, e, n) {
            return "position" === t || "preserve-aspect" === t && !tO(ew(e), ew(n), .2)
        }
        let e4 = eL({
            attachResizeListener: (t,e)=>X(t, "resize", e),
            measureScroll: ()=>({
                x: document.documentElement.scrollLeft || document.body.scrollLeft,
                y: document.documentElement.scrollTop || document.body.scrollTop
            }),
            checkIsScrollRoot: ()=>!0
        })
          , e5 = {
            current: void 0
        }
          , e2 = eL({
            measureScroll: t=>({
                x: t.scrollLeft,
                y: t.scrollTop
            }),
            defaultParent: ()=>{
                if (!e5.current) {
                    let t = new e4({});
                    t.mount(window),
                    t.setOptions({
                        layoutScroll: !0
                    }),
                    e5.current = t
                }
                return e5.current
            }
            ,
            resetTransform: (t,e)=>{
                t.style.transform = void 0 !== e ? e : "none"
            }
            ,
            checkIsScrollRoot: t=>"fixed" === window.getComputedStyle(t).position
        });
        var e6 = n(4547)
          , e3 = n(5794);
        let e8 = (t,e)=>P(t) ? new e3.e(e,{
            enableHardwareAcceleration: !1
        }) : new e6.W(e,{
            enableHardwareAcceleration: !0
        })
          , e9 = {
            animation: {
                Feature: class extends tr {
                    constructor(t) {
                        super(t),
                        t.animationState || (t.animationState = function(t) {
                            let e = e=>Promise.all(e.map(({animation: e, options: n})=>(function(t, e, n={}) {
                                let r;
                                if (t.notify("AnimationStart", e),
                                Array.isArray(e)) {
                                    let i = e.map(e=>ty(t, e, n));
                                    r = Promise.all(i)
                                } else if ("string" == typeof e)
                                    r = ty(t, e, n);
                                else {
                                    let i = "function" == typeof e ? (0,
                                    tm.x)(t, e, n.custom) : e;
                                    r = Promise.all((0,
                                    tg.w)(t, i, n))
                                }
                                return r.then(()=>t.notify("AnimationComplete", e))
                            }
                            )(t, e, n)))
                              , n = {
                                animate: tw(!0),
                                whileInView: tw(),
                                whileHover: tw(),
                                whileTap: tw(),
                                whileDrag: tw(),
                                whileFocus: tw(),
                                exit: tw()
                            }
                              , r = !0
                              , i = (e,n)=>{
                                let r = (0,
                                tm.x)(t, n);
                                if (r) {
                                    let {transition: t, transitionEnd: n, ...i} = r;
                                    e = {
                                        ...e,
                                        ...i,
                                        ...n
                                    }
                                }
                                return e
                            }
                            ;
                            function s(s, o) {
                                let a = t.getProps()
                                  , l = t.getVariantContext(!0) || {}
                                  , u = []
                                  , c = new Set
                                  , d = {}
                                  , f = 1 / 0;
                                for (let e = 0; e < tb; e++) {
                                    var p;
                                    let m = tP[e]
                                      , v = n[m]
                                      , g = void 0 !== a[m] ? a[m] : l[m]
                                      , y = (0,
                                    h.$)(g)
                                      , x = m === o ? v.isActive : null;
                                    !1 === x && (f = e);
                                    let P = g === l[m] && g !== a[m] && y;
                                    if (P && r && t.manuallyAnimateOnMount && (P = !1),
                                    v.protectedKeys = {
                                        ...d
                                    },
                                    !v.isActive && null === x || !g && !v.prevProp || (0,
                                    F.H)(g) || "boolean" == typeof g)
                                        continue;
                                    let b = (p = v.prevProp,
                                    "string" == typeof g ? g !== p : !!Array.isArray(g) && !tp(g, p))
                                      , w = b || m === o && v.isActive && !P && y || e > f && y
                                      , A = Array.isArray(g) ? g : [g]
                                      , C = A.reduce(i, {});
                                    !1 === x && (C = {});
                                    let {prevResolvedValues: T={}} = v
                                      , E = {
                                        ...T,
                                        ...C
                                    }
                                      , S = t=>{
                                        w = !0,
                                        c.delete(t),
                                        v.needsAnimating[t] = !0
                                    }
                                    ;
                                    for (let t in E) {
                                        let e = C[t]
                                          , n = T[t];
                                        d.hasOwnProperty(t) || (e !== n ? (0,
                                        tf.C)(e) && (0,
                                        tf.C)(n) ? !tp(e, n) || b ? S(t) : v.protectedKeys[t] = !0 : void 0 !== e ? S(t) : c.add(t) : void 0 !== e && c.has(t) ? S(t) : v.protectedKeys[t] = !0)
                                    }
                                    v.prevProp = g,
                                    v.prevResolvedValues = C,
                                    v.isActive && (d = {
                                        ...d,
                                        ...C
                                    }),
                                    r && t.blockInitialAnimation && (w = !1),
                                    w && !P && u.push(...A.map(t=>({
                                        animation: t,
                                        options: {
                                            type: m,
                                            ...s
                                        }
                                    })))
                                }
                                if (c.size) {
                                    let e = {};
                                    c.forEach(n=>{
                                        let r = t.getBaseTarget(n);
                                        void 0 !== r && (e[n] = r)
                                    }
                                    ),
                                    u.push({
                                        animation: e
                                    })
                                }
                                let m = !!u.length;
                                return r && !1 === a.initial && !t.manuallyAnimateOnMount && (m = !1),
                                r = !1,
                                m ? e(u) : Promise.resolve()
                            }
                            return {
                                animateChanges: s,
                                setActive: function(e, r, i) {
                                    var o;
                                    if (n[e].isActive === r)
                                        return Promise.resolve();
                                    null === (o = t.variantChildren) || void 0 === o || o.forEach(t=>{
                                        var n;
                                        return null === (n = t.animationState) || void 0 === n ? void 0 : n.setActive(e, r)
                                    }
                                    ),
                                    n[e].isActive = r;
                                    let a = s(i, e);
                                    for (let t in n)
                                        n[t].protectedKeys = {};
                                    return a
                                },
                                setAnimateFunction: function(n) {
                                    e = n(t)
                                },
                                getState: ()=>n
                            }
                        }(t))
                    }
                    updateAnimationControlsSubscription() {
                        let {animate: t} = this.node.getProps();
                        this.unmount(),
                        (0,
                        F.H)(t) && (this.unmount = t.subscribe(this.node))
                    }
                    mount() {
                        this.updateAnimationControlsSubscription()
                    }
                    update() {
                        let {animate: t} = this.node.getProps()
                          , {animate: e} = this.node.prevProps || {};
                        t !== e && this.updateAnimationControlsSubscription()
                    }
                    unmount() {}
                }
            },
            exit: {
                Feature: class extends tr {
                    constructor() {
                        super(...arguments),
                        this.id = tA++
                    }
                    update() {
                        if (!this.node.presenceContext)
                            return;
                        let {isPresent: t, onExitComplete: e, custom: n} = this.node.presenceContext
                          , {isPresent: r} = this.node.prevPresenceContext || {};
                        if (!this.node.animationState || t === r)
                            return;
                        let i = this.node.animationState.setActive("exit", !t, {
                            custom: null != n ? n : this.node.getProps().custom
                        });
                        e && !t && i.then(()=>e(this.id))
                    }
                    mount() {
                        let {register: t} = this.node.presenceContext || {};
                        t && (this.unmount = t(this.id))
                    }
                    unmount() {}
                }
            },
            inView: {
                Feature: class extends tr {
                    constructor() {
                        super(...arguments),
                        this.hasEnteredView = !1,
                        this.isInView = !1
                    }
                    startObserver() {
                        this.unmount();
                        let {viewport: t={}} = this.node.getProps()
                          , {root: e, margin: n, amount: r="some", once: i} = t
                          , s = {
                            root: e ? e.current : void 0,
                            rootMargin: n,
                            threshold: "number" == typeof r ? r : td[r]
                        };
                        return function(t, e, n) {
                            let r = function({root: t, ...e}) {
                                let n = t || document;
                                tu.has(n) || tu.set(n, {});
                                let r = tu.get(n)
                                  , i = JSON.stringify(e);
                                return r[i] || (r[i] = new IntersectionObserver(th,{
                                    root: t,
                                    ...e
                                })),
                                r[i]
                            }(e);
                            return tl.set(t, n),
                            r.observe(t),
                            ()=>{
                                tl.delete(t),
                                r.unobserve(t)
                            }
                        }(this.node.current, s, t=>{
                            let {isIntersecting: e} = t;
                            if (this.isInView === e || (this.isInView = e,
                            i && !e && this.hasEnteredView))
                                return;
                            e && (this.hasEnteredView = !0),
                            this.node.animationState && this.node.animationState.setActive("whileInView", e);
                            let {onViewportEnter: n, onViewportLeave: r} = this.node.getProps()
                              , s = e ? n : r;
                            s && s(t)
                        }
                        )
                    }
                    mount() {
                        this.startObserver()
                    }
                    update() {
                        if ("undefined" == typeof IntersectionObserver)
                            return;
                        let {props: t, prevProps: e} = this.node
                          , n = ["amount", "margin", "root"].some(function({viewport: t={}}, {viewport: e={}}={}) {
                            return n=>t[n] !== e[n]
                        }(t, e));
                        n && this.startObserver()
                    }
                    unmount() {}
                }
            },
            tap: {
                Feature: class extends tr {
                    constructor() {
                        super(...arguments),
                        this.removeStartListeners = to.Z,
                        this.removeEndListeners = to.Z,
                        this.removeAccessibleListeners = to.Z,
                        this.startPointerPress = (t,e)=>{
                            if (this.removeEndListeners(),
                            this.isPressing)
                                return;
                            let n = this.node.getProps()
                              , r = q(window, "pointerup", (t,e)=>{
                                if (!this.checkPressEnd())
                                    return;
                                let {onTap: n, onTapCancel: r} = this.node.getProps();
                                W.Wi.update(()=>{
                                    ts(this.node.current, t.target) ? n && n(t, e) : r && r(t, e)
                                }
                                )
                            }
                            , {
                                passive: !(n.onTap || n.onPointerUp)
                            })
                              , i = q(window, "pointercancel", (t,e)=>this.cancelPress(t, e), {
                                passive: !(n.onTapCancel || n.onPointerCancel)
                            });
                            this.removeEndListeners = (0,
                            K.z)(r, i),
                            this.startPress(t, e)
                        }
                        ,
                        this.startAccessiblePress = ()=>{
                            let t = X(this.node.current, "keydown", t=>{
                                "Enter" !== t.key || this.isPressing || (this.removeEndListeners(),
                                this.removeEndListeners = X(this.node.current, "keyup", t=>{
                                    "Enter" === t.key && this.checkPressEnd() && ta("up", (t,e)=>{
                                        let {onTap: n} = this.node.getProps();
                                        n && W.Wi.update(()=>n(t, e))
                                    }
                                    )
                                }
                                ),
                                ta("down", (t,e)=>{
                                    this.startPress(t, e)
                                }
                                ))
                            }
                            )
                              , e = X(this.node.current, "blur", ()=>{
                                this.isPressing && ta("cancel", (t,e)=>this.cancelPress(t, e))
                            }
                            );
                            this.removeAccessibleListeners = (0,
                            K.z)(t, e)
                        }
                    }
                    startPress(t, e) {
                        this.isPressing = !0;
                        let {onTapStart: n, whileTap: r} = this.node.getProps();
                        r && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
                        n && W.Wi.update(()=>n(t, e))
                    }
                    checkPressEnd() {
                        this.removeEndListeners(),
                        this.isPressing = !1;
                        let t = this.node.getProps();
                        return t.whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
                        !tn()
                    }
                    cancelPress(t, e) {
                        if (!this.checkPressEnd())
                            return;
                        let {onTapCancel: n} = this.node.getProps();
                        n && W.Wi.update(()=>n(t, e))
                    }
                    mount() {
                        let t = this.node.getProps()
                          , e = q(this.node.current, "pointerdown", this.startPointerPress, {
                            passive: !(t.onTapStart || t.onPointerStart)
                        })
                          , n = X(this.node.current, "focus", this.startAccessiblePress);
                        this.removeStartListeners = (0,
                        K.z)(e, n)
                    }
                    unmount() {
                        this.removeStartListeners(),
                        this.removeEndListeners(),
                        this.removeAccessibleListeners()
                    }
                }
            },
            focus: {
                Feature: class extends tr {
                    constructor() {
                        super(...arguments),
                        this.isActive = !1
                    }
                    onFocus() {
                        let t = !1;
                        try {
                            t = this.node.current.matches(":focus-visible")
                        } catch (e) {
                            t = !0
                        }
                        t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0),
                        this.isActive = !0)
                    }
                    onBlur() {
                        this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1),
                        this.isActive = !1)
                    }
                    mount() {
                        this.unmount = (0,
                        K.z)(X(this.node.current, "focus", ()=>this.onFocus()), X(this.node.current, "blur", ()=>this.onBlur()))
                    }
                    unmount() {}
                }
            },
            hover: {
                Feature: class extends tr {
                    mount() {
                        this.unmount = (0,
                        K.z)(ti(this.node, !0), ti(this.node, !1))
                    }
                    unmount() {}
                }
            },
            pan: {
                Feature: class extends tr {
                    constructor() {
                        super(...arguments),
                        this.removePointerDownListener = to.Z
                    }
                    onPointerDown(t) {
                        this.session = new tS(t,this.createPanHandlers(),{
                            transformPagePoint: this.node.getTransformPagePoint()
                        })
                    }
                    createPanHandlers() {
                        let {onPanSessionStart: t, onPanStart: e, onPan: n, onPanEnd: r} = this.node.getProps();
                        return {
                            onSessionStart: t1(t),
                            onStart: t1(e),
                            onMove: n,
                            onEnd: (t,e)=>{
                                delete this.session,
                                r && W.Wi.update(()=>r(t, e))
                            }
                        }
                    }
                    mount() {
                        this.removePointerDownListener = q(this.node.current, "pointerdown", t=>this.onPointerDown(t))
                    }
                    update() {
                        this.session && this.session.updateHandlers(this.createPanHandlers())
                    }
                    unmount() {
                        this.removePointerDownListener(),
                        this.session && this.session.end()
                    }
                }
            },
            drag: {
                Feature: class extends tr {
                    constructor(t) {
                        super(t),
                        this.removeGroupControls = to.Z,
                        this.removeListeners = to.Z,
                        this.controls = new tQ(t)
                    }
                    mount() {
                        let {dragControls: t} = this.node.getProps();
                        t && (this.removeGroupControls = t.subscribe(this.controls)),
                        this.removeListeners = this.controls.addListeners() || to.Z
                    }
                    unmount() {
                        this.removeGroupControls(),
                        this.removeListeners()
                    }
                }
                ,
                ProjectionNode: e2,
                MeasureLayout: t9
            },
            layout: {
                ProjectionNode: e2,
                MeasureLayout: t9
            }
        }
          , e7 = function(t) {
            function e(e, n={}) {
                return function({preloadedFeatures: t, createVisualElement: e, useRender: n, useVisualState: r, Component: x}) {
                    t && function(t) {
                        for (let e in t)
                            p.A[e] = {
                                ...p.A[e],
                                ...t[e]
                            }
                    }(t);
                    let P = (0,
                    i.forwardRef)(function(p, y) {
                        var P;
                        let b;
                        let w = {
                            ...(0,
                            i.useContext)(s),
                            ...p,
                            layoutId: function({layoutId: t}) {
                                let e = (0,
                                i.useContext)(v.p).id;
                                return e && void 0 !== t ? e + "-" + t : t
                            }(p)
                        }
                          , {isStatic: A} = w
                          , C = function(t) {
                            let {initial: e, animate: n} = function(t, e) {
                                if ((0,
                                d.G)(t)) {
                                    let {initial: e, animate: n} = t;
                                    return {
                                        initial: !1 === e || (0,
                                        h.$)(e) ? e : void 0,
                                        animate: (0,
                                        h.$)(n) ? n : void 0
                                    }
                                }
                                return !1 !== t.inherit ? e : {}
                            }(t, (0,
                            i.useContext)(o));
                            return (0,
                            i.useMemo)(()=>({
                                initial: e,
                                animate: n
                            }), [f(e), f(n)])
                        }(p)
                          , T = r(p, A);
                        if (!A && m.j) {
                            C.visualElement = function(t, e, n, r) {
                                let {visualElement: c} = (0,
                                i.useContext)(o)
                                  , h = (0,
                                i.useContext)(u)
                                  , d = (0,
                                i.useContext)(a.O)
                                  , f = (0,
                                i.useContext)(s).reducedMotion
                                  , p = (0,
                                i.useRef)();
                                r = r || h.renderer,
                                !p.current && r && (p.current = r(t, {
                                    visualState: e,
                                    parent: c,
                                    props: n,
                                    presenceContext: d,
                                    blockInitialAnimation: !!d && !1 === d.initial,
                                    reducedMotionConfig: f
                                }));
                                let m = p.current;
                                (0,
                                i.useInsertionEffect)(()=>{
                                    m && m.update(n, d)
                                }
                                );
                                let v = (0,
                                i.useRef)(!!window.HandoffAppearAnimations);
                                return (0,
                                l.L)(()=>{
                                    m && (m.render(),
                                    v.current && m.animationState && m.animationState.animateChanges())
                                }
                                ),
                                (0,
                                i.useEffect)(()=>{
                                    m && (m.updateFeatures(),
                                    !v.current && m.animationState && m.animationState.animateChanges(),
                                    window.HandoffAppearAnimations = void 0,
                                    v.current = !1)
                                }
                                ),
                                m
                            }(x, T, w, e);
                            let n = (0,
                            i.useContext)(g)
                              , r = (0,
                            i.useContext)(u).strict;
                            C.visualElement && (b = C.visualElement.loadFeatures(w, r, t, n))
                        }
                        return i.createElement(o.Provider, {
                            value: C
                        }, b && C.visualElement ? i.createElement(b, {
                            visualElement: C.visualElement,
                            ...w
                        }) : null, n(x, p, (P = C.visualElement,
                        (0,
                        i.useCallback)(t=>{
                            t && T.mount && T.mount(t),
                            P && (t ? P.mount(t) : P.unmount()),
                            y && ("function" == typeof y ? y(t) : (0,
                            c.I)(y) && (y.current = t))
                        }
                        , [P])), T, A, C.visualElement))
                    });
                    return P[y] = x,
                    P
                }(t(e, n))
            }
            if ("undefined" == typeof Proxy)
                return e;
            let n = new Map;
            return new Proxy(e,{
                get: (t,r)=>(n.has(r) || n.set(r, e(r)),
                n.get(r))
            })
        }((t,e)=>(function(t, {forwardMotionProps: e=!1}, n, r) {
            let s = P(t) ? _ : H;
            return {
                ...s,
                preloadedFeatures: n,
                useRender: function(t=!1) {
                    return (e,n,r,{latestValues: s},o)=>{
                        let a = P(e) ? k : E
                          , l = a(n, s, o, e)
                          , u = function(t, e, n) {
                            let r = {};
                            for (let i in t)
                                ("values" !== i || "object" != typeof t.values) && (M(i) || !0 === n && V(i) || !e && !V(i) || t.draggable && i.startsWith("onDrag")) && (r[i] = t[i]);
                            return r
                        }(n, "string" == typeof e, t)
                          , c = {
                            ...u,
                            ...l,
                            ref: r
                        }
                          , {children: h} = n
                          , d = (0,
                        i.useMemo)(()=>(0,
                        w.i)(h) ? h.get() : h, [h]);
                        return (0,
                        i.createElement)(e, {
                            ...c,
                            children: d
                        })
                    }
                }(e),
                createVisualElement: r,
                Component: t
            }
        }
        )(t, e, e9, e8))
    },
    3193: function(t, e, n) {
        "use strict";
        n.d(e, {
            D: function() {
                return r
            }
        });
        let r = t=>t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    },
    7630: function(t, e, n) {
        "use strict";
        n.d(e, {
            Xp: function() {
                return o
            },
            f9: function() {
                return i
            },
            tm: function() {
                return s
            }
        });
        let r = t=>e=>"string" == typeof e && e.startsWith(t)
          , i = r("--")
          , s = r("var(--")
          , o = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g
    },
    5194: function(t, e, n) {
        "use strict";
        function r(t) {
            return t instanceof SVGElement && "svg" !== t.tagName
        }
        n.d(e, {
            v: function() {
                return r
            }
        })
    },
    9135: function(t, e, n) {
        "use strict";
        n.d(e, {
            T: function() {
                return o
            }
        });
        var r = n(1550)
          , i = n(7197)
          , s = n(2728);
        function o(t, e) {
            let n = (0,
            s.A)(t);
            return n !== i.h && (n = r.P),
            n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
        }
    },
    2728: function(t, e, n) {
        "use strict";
        n.d(e, {
            A: function() {
                return a
            }
        });
        var r = n(5385)
          , i = n(7197)
          , s = n(6173);
        let o = {
            ...s.j,
            color: r.$,
            backgroundColor: r.$,
            outlineColor: r.$,
            fill: r.$,
            stroke: r.$,
            borderColor: r.$,
            borderTopColor: r.$,
            borderRightColor: r.$,
            borderBottomColor: r.$,
            borderLeftColor: r.$,
            filter: i.h,
            WebkitFilter: i.h
        }
          , a = t=>o[t]
    },
    6440: function(t, e, n) {
        "use strict";
        n.d(e, {
            $: function() {
                return o
            },
            C: function() {
                return a
            }
        });
        var r = n(1649)
          , i = n(6190)
          , s = n(8340);
        let o = [r.Rx, i.px, i.aQ, i.RW, i.vw, i.vh, {
            test: t=>"auto" === t,
            parse: t=>t
        }]
          , a = t=>o.find((0,
        s.l)(t))
    },
    6173: function(t, e, n) {
        "use strict";
        n.d(e, {
            j: function() {
                return o
            }
        });
        var r = n(1649)
          , i = n(6190);
        let s = {
            ...r.Rx,
            transform: Math.round
        }
          , o = {
            borderWidth: i.px,
            borderTopWidth: i.px,
            borderRightWidth: i.px,
            borderBottomWidth: i.px,
            borderLeftWidth: i.px,
            borderRadius: i.px,
            radius: i.px,
            borderTopLeftRadius: i.px,
            borderTopRightRadius: i.px,
            borderBottomRightRadius: i.px,
            borderBottomLeftRadius: i.px,
            width: i.px,
            maxWidth: i.px,
            height: i.px,
            maxHeight: i.px,
            size: i.px,
            top: i.px,
            right: i.px,
            bottom: i.px,
            left: i.px,
            padding: i.px,
            paddingTop: i.px,
            paddingRight: i.px,
            paddingBottom: i.px,
            paddingLeft: i.px,
            margin: i.px,
            marginTop: i.px,
            marginRight: i.px,
            marginBottom: i.px,
            marginLeft: i.px,
            rotate: i.RW,
            rotateX: i.RW,
            rotateY: i.RW,
            rotateZ: i.RW,
            scale: r.bA,
            scaleX: r.bA,
            scaleY: r.bA,
            scaleZ: r.bA,
            skew: i.RW,
            skewX: i.RW,
            skewY: i.RW,
            distance: i.px,
            translateX: i.px,
            translateY: i.px,
            translateZ: i.px,
            x: i.px,
            y: i.px,
            z: i.px,
            perspective: i.px,
            transformPerspective: i.px,
            opacity: r.Fq,
            originX: i.$C,
            originY: i.$C,
            originZ: i.px,
            zIndex: s,
            fillOpacity: r.Fq,
            strokeOpacity: r.Fq,
            numOctaves: s
        }
    },
    8340: function(t, e, n) {
        "use strict";
        n.d(e, {
            l: function() {
                return r
            }
        });
        let r = t=>e=>e.test(t)
    },
    4547: function(t, e, n) {
        "use strict";
        n.d(e, {
            W: function() {
                return d
            }
        });
        var r = n(8057)
          , i = n(7630)
          , s = n(4714)
          , o = n(189)
          , a = n(4242)
          , l = n(2728)
          , u = n(6460)
          , c = n(1760)
          , h = n(406);
        class d extends c.J {
            readValueFromInstance(t, e) {
                if (s.G.has(e)) {
                    let t = (0,
                    l.A)(e);
                    return t && t.default || 0
                }
                {
                    let n = window.getComputedStyle(t)
                      , r = ((0,
                    i.f9)(e) ? n.getPropertyValue(e) : n[e]) || 0;
                    return "string" == typeof r ? r.trim() : r
                }
            }
            measureInstanceViewportBox(t, {transformPagePoint: e}) {
                return (0,
                u.J)(t, e)
            }
            build(t, e, n, i) {
                (0,
                r.r)(t, e, n, i.transformTemplate)
            }
            scrapeMotionValuesFromProps(t, e) {
                return (0,
                o.U)(t, e)
            }
            handleChildMotionValue() {
                this.childSubscription && (this.childSubscription(),
                delete this.childSubscription);
                let {children: t} = this.props;
                (0,
                h.i)(t) && (this.childSubscription = t.on("change", t=>{
                    this.current && (this.current.textContent = `${t}`)
                }
                ))
            }
            renderInstance(t, e, n, r) {
                (0,
                a.N)(t, e, n, r)
            }
        }
    },
    8057: function(t, e, n) {
        "use strict";
        n.d(e, {
            r: function() {
                return u
            }
        });
        var r = n(4714);
        let i = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        }
          , s = r._.length;
        var o = n(7630);
        let a = (t,e)=>e && "number" == typeof t ? e.transform(t) : t;
        var l = n(6173);
        function u(t, e, n, u) {
            let {style: c, vars: h, transform: d, transformOrigin: f} = t
              , p = !1
              , m = !1
              , v = !0;
            for (let t in e) {
                let n = e[t];
                if ((0,
                o.f9)(t)) {
                    h[t] = n;
                    continue
                }
                let i = l.j[t]
                  , s = a(n, i);
                if (r.G.has(t)) {
                    if (p = !0,
                    d[t] = s,
                    !v)
                        continue;
                    n !== (i.default || 0) && (v = !1)
                } else
                    t.startsWith("origin") ? (m = !0,
                    f[t] = s) : c[t] = s
            }
            if (!e.transform && (p || u ? c.transform = function(t, {enableHardwareAcceleration: e=!0, allowTransformNone: n=!0}, o, a) {
                let l = "";
                for (let e = 0; e < s; e++) {
                    let n = r._[e];
                    if (void 0 !== t[n]) {
                        let e = i[n] || n;
                        l += `${e}(${t[n]}) `
                    }
                }
                return e && !t.z && (l += "translateZ(0)"),
                l = l.trim(),
                a ? l = a(t, o ? "" : l) : n && o && (l = "none"),
                l
            }(t.transform, n, v, u) : c.transform && (c.transform = "none")),
            m) {
                let {originX: t="50%", originY: e="50%", originZ: n=0} = f;
                c.transformOrigin = `${t} ${e} ${n}`
            }
        }
    },
    4242: function(t, e, n) {
        "use strict";
        function r(t, {style: e, vars: n}, r, i) {
            for (let s in Object.assign(t.style, e, i && i.getProjectionStyles(r)),
            n)
                t.style.setProperty(s, n[s])
        }
        n.d(e, {
            N: function() {
                return r
            }
        })
    },
    189: function(t, e, n) {
        "use strict";
        n.d(e, {
            U: function() {
                return s
            }
        });
        var r = n(6816)
          , i = n(406);
        function s(t, e) {
            let {style: n} = t
              , s = {};
            for (let o in n)
                ((0,
                i.i)(n[o]) || e.style && (0,
                i.i)(e.style[o]) || (0,
                r.j)(o, t)) && (s[o] = n[o]);
            return s
        }
    },
    4714: function(t, e, n) {
        "use strict";
        n.d(e, {
            G: function() {
                return i
            },
            _: function() {
                return r
            }
        });
        let r = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
          , i = new Set(r)
    },
    6955: function(t, e, n) {
        "use strict";
        n.d(e, {
            R: function() {
                return r
            }
        });
        let r = new WeakMap
    },
    5794: function(t, e, n) {
        "use strict";
        n.d(e, {
            e: function() {
                return f
            }
        });
        var r = n(6832)
          , i = n(1760)
          , s = n(5415)
          , o = n(3193)
          , a = n(8440)
          , l = n(4714)
          , u = n(8504)
          , c = n(2728)
          , h = n(1512)
          , d = n(9854);
        class f extends i.J {
            constructor() {
                super(...arguments),
                this.isSVGTag = !1
            }
            getBaseTargetFromProps(t, e) {
                return t[e]
            }
            readValueFromInstance(t, e) {
                if (l.G.has(e)) {
                    let t = (0,
                    c.A)(e);
                    return t && t.default || 0
                }
                return e = a.s.has(e) ? e : (0,
                o.D)(e),
                t.getAttribute(e)
            }
            measureInstanceViewportBox() {
                return (0,
                h.dO)()
            }
            scrapeMotionValuesFromProps(t, e) {
                return (0,
                r.U)(t, e)
            }
            build(t, e, n, r) {
                (0,
                s.i)(t, e, n, this.isSVGTag, r.transformTemplate)
            }
            renderInstance(t, e, n, r) {
                (0,
                u.K)(t, e, n, r)
            }
            mount(t) {
                this.isSVGTag = (0,
                d.a)(t.tagName),
                super.mount(t)
            }
        }
    },
    5415: function(t, e, n) {
        "use strict";
        n.d(e, {
            i: function() {
                return l
            }
        });
        var r = n(8057)
          , i = n(6190);
        function s(t, e, n) {
            return "string" == typeof t ? t : i.px.transform(e + n * t)
        }
        let o = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        }
          , a = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        };
        function l(t, {attrX: e, attrY: n, attrScale: l, originX: u, originY: c, pathLength: h, pathSpacing: d=1, pathOffset: f=0, ...p}, m, v, g) {
            if ((0,
            r.r)(t, p, m, g),
            v) {
                t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                return
            }
            t.attrs = t.style,
            t.style = {};
            let {attrs: y, style: x, dimensions: P} = t;
            y.transform && (P && (x.transform = y.transform),
            delete y.transform),
            P && (void 0 !== u || void 0 !== c || x.transform) && (x.transformOrigin = function(t, e, n) {
                let r = s(e, t.x, t.width)
                  , i = s(n, t.y, t.height);
                return `${r} ${i}`
            }(P, void 0 !== u ? u : .5, void 0 !== c ? c : .5)),
            void 0 !== e && (y.x = e),
            void 0 !== n && (y.y = n),
            void 0 !== l && (y.scale = l),
            void 0 !== h && function(t, e, n=1, r=0, s=!0) {
                t.pathLength = 1;
                let l = s ? o : a;
                t[l.offset] = i.px.transform(-r);
                let u = i.px.transform(e)
                  , c = i.px.transform(n);
                t[l.array] = `${u} ${c}`
            }(y, h, d, f, !1)
        }
    },
    8440: function(t, e, n) {
        "use strict";
        n.d(e, {
            s: function() {
                return r
            }
        });
        let r = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
    },
    9854: function(t, e, n) {
        "use strict";
        n.d(e, {
            a: function() {
                return r
            }
        });
        let r = t=>"string" == typeof t && "svg" === t.toLowerCase()
    },
    8504: function(t, e, n) {
        "use strict";
        n.d(e, {
            K: function() {
                return o
            }
        });
        var r = n(3193)
          , i = n(4242)
          , s = n(8440);
        function o(t, e, n, o) {
            for (let n in (0,
            i.N)(t, e, void 0, o),
            e.attrs)
                t.setAttribute(s.s.has(n) ? n : (0,
                r.D)(n), e.attrs[n])
        }
    },
    6832: function(t, e, n) {
        "use strict";
        n.d(e, {
            U: function() {
                return o
            }
        });
        var r = n(406)
          , i = n(189)
          , s = n(4714);
        function o(t, e) {
            let n = (0,
            i.U)(t, e);
            for (let i in t)
                if ((0,
                r.i)(t[i]) || (0,
                r.i)(e[i])) {
                    let e = -1 !== s._.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
                    n[e] = t[i]
                }
            return n
        }
    },
    7504: function(t, e, n) {
        "use strict";
        n.d(e, {
            G: function() {
                return o
            },
            M: function() {
                return a
            }
        });
        var r = n(2445)
          , i = n(7732)
          , s = n(2963);
        function o(t) {
            return (0,
            r.H)(t.animate) || s.V.some(e=>(0,
            i.$)(t[e]))
        }
        function a(t) {
            return !!(o(t) || t.variants)
        }
    },
    7732: function(t, e, n) {
        "use strict";
        function r(t) {
            return "string" == typeof t || Array.isArray(t)
        }
        n.d(e, {
            $: function() {
                return r
            }
        })
    },
    2248: function(t, e, n) {
        "use strict";
        n.d(e, {
            x: function() {
                return i
            }
        });
        var r = n(9432);
        function i(t, e, n) {
            let i = t.getProps();
            return (0,
            r.o)(i, e, void 0 !== n ? n : i.custom, function(t) {
                let e = {};
                return t.values.forEach((t,n)=>e[n] = t.get()),
                e
            }(t), function(t) {
                let e = {};
                return t.values.forEach((t,n)=>e[n] = t.getVelocity()),
                e
            }(t))
        }
    },
    9432: function(t, e, n) {
        "use strict";
        function r(t, e, n, r={}, i={}) {
            return "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, r, i)),
            "string" == typeof e && (e = t.variants && t.variants[e]),
            "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, r, i)),
            e
        }
        n.d(e, {
            o: function() {
                return r
            }
        })
    },
    4330: function(t, e, n) {
        "use strict";
        n.d(e, {
            GJ: function() {
                return v
            },
            P$: function() {
                return g
            },
            CD: function() {
                return m
            }
        });
        var r = n(3441)
          , i = n(681)
          , s = n(8715)
          , o = n(3234)
          , a = n(1550)
          , l = n(9135)
          , u = n(5385)
          , c = n(6440)
          , h = n(8340);
        let d = [...c.$, u.$, a.P]
          , f = t=>d.find((0,
        h.l)(t));
        var p = n(2248);
        function m(t, e) {
            let n = (0,
            p.x)(t, e)
              , {transitionEnd: r={}, transition: i={}, ...a} = n ? t.makeTargetAnimatable(n, !1) : {};
            for (let e in a = {
                ...a,
                ...r
            }) {
                let n = (0,
                s.Y)(a[e]);
                t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, (0,
                o.BX)(n))
            }
        }
        function v(t, e, n) {
            var s, u;
            let c = Object.keys(e).filter(e=>!t.hasValue(e))
              , h = c.length;
            if (h)
                for (let d = 0; d < h; d++) {
                    let h = c[d]
                      , p = e[h]
                      , m = null;
                    Array.isArray(p) && (m = p[0]),
                    null === m && (m = null !== (u = null !== (s = n[h]) && void 0 !== s ? s : t.readValue(h)) && void 0 !== u ? u : e[h]),
                    null != m && ("string" == typeof m && ((0,
                    r.P)(m) || (0,
                    i.W)(m)) ? m = parseFloat(m) : !f(m) && a.P.test(p) && (m = (0,
                    l.T)(h, p)),
                    t.addValue(h, (0,
                    o.BX)(m, {
                        owner: t
                    })),
                    void 0 === n[h] && (n[h] = m),
                    null !== m && t.setBaseTarget(h, m))
                }
        }
        function g(t, e, n) {
            let r = {};
            for (let i in t) {
                let t = function(t, e) {
                    if (!e)
                        return;
                    let n = e[t] || e.default || e;
                    return n.from
                }(i, e);
                if (void 0 !== t)
                    r[i] = t;
                else {
                    let t = n.getValue(i);
                    t && (r[i] = t.get())
                }
            }
            return r
        }
    },
    2963: function(t, e, n) {
        "use strict";
        n.d(e, {
            V: function() {
                return i
            },
            e: function() {
                return r
            }
        });
        let r = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
          , i = ["initial", ...r]
    },
    10: function(t, e, n) {
        "use strict";
        function r(t, e) {
            -1 === t.indexOf(e) && t.push(e)
        }
        function i(t, e) {
            let n = t.indexOf(e);
            n > -1 && t.splice(n, 1)
        }
        n.d(e, {
            cl: function() {
                return i
            },
            y4: function() {
                return r
            }
        })
    },
    4169: function(t, e, n) {
        "use strict";
        n.d(e, {
            u: function() {
                return r
            }
        });
        let r = (t,e,n)=>Math.min(Math.max(n, t), e)
    },
    5487: function(t, e, n) {
        "use strict";
        n.d(e, {
            K: function() {
                return i
            },
            k: function() {
                return s
            }
        });
        var r = n(1662);
        let i = r.Z
          , s = r.Z
    },
    1741: function(t, e, n) {
        "use strict";
        n.d(e, {
            j: function() {
                return r
            }
        });
        let r = "undefined" != typeof document
    },
    3441: function(t, e, n) {
        "use strict";
        n.d(e, {
            P: function() {
                return r
            }
        });
        let r = t=>/^\-?\d*\.?\d+$/.test(t)
    },
    1804: function(t, e, n) {
        "use strict";
        function r(t) {
            return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
        }
        n.d(e, {
            I: function() {
                return r
            }
        })
    },
    681: function(t, e, n) {
        "use strict";
        n.d(e, {
            W: function() {
                return r
            }
        });
        let r = t=>/^0[^.\s]+$/.test(t)
    },
    4522: function(t, e, n) {
        "use strict";
        function r(t) {
            let e;
            return ()=>(void 0 === e && (e = t()),
            e)
        }
        n.d(e, {
            X: function() {
                return r
            }
        })
    },
    22: function(t, e, n) {
        "use strict";
        n.d(e, {
            C: function() {
                return r
            }
        });
        let r = (t,e,n)=>-n * t + n * e + t
    },
    1662: function(t, e, n) {
        "use strict";
        n.d(e, {
            Z: function() {
                return r
            }
        });
        let r = t=>t
    },
    599: function(t, e, n) {
        "use strict";
        n.d(e, {
            Y: function() {
                return i
            }
        });
        var r = n(6615);
        function i(t) {
            let e = [0];
            return (0,
            r.c)(e, t.length - 1),
            e
        }
    },
    6615: function(t, e, n) {
        "use strict";
        n.d(e, {
            c: function() {
                return s
            }
        });
        var r = n(22)
          , i = n(3967);
        function s(t, e) {
            let n = t[t.length - 1];
            for (let s = 1; s <= e; s++) {
                let o = (0,
                i.Y)(0, e, s);
                t.push((0,
                r.C)(n, 1, o))
            }
        }
    },
    3624: function(t, e, n) {
        "use strict";
        n.d(e, {
            z: function() {
                return i
            }
        });
        let r = (t,e)=>n=>e(t(n))
          , i = (...t)=>t.reduce(r)
    },
    3967: function(t, e, n) {
        "use strict";
        n.d(e, {
            Y: function() {
                return r
            }
        });
        let r = (t,e,n)=>{
            let r = e - t;
            return 0 === r ? 1 : (n - t) / r
        }
    },
    8715: function(t, e, n) {
        "use strict";
        n.d(e, {
            Y: function() {
                return s
            },
            p: function() {
                return i
            }
        });
        var r = n(8488);
        let i = t=>!!(t && "object" == typeof t && t.mix && t.toValue)
          , s = t=>(0,
        r.C)(t) ? t[t.length - 1] || 0 : t
    },
    1560: function(t, e, n) {
        "use strict";
        n.d(e, {
            L: function() {
                return i
            }
        });
        var r = n(10);
        class i {
            constructor() {
                this.subscriptions = []
            }
            add(t) {
                return (0,
                r.y4)(this.subscriptions, t),
                ()=>(0,
                r.cl)(this.subscriptions, t)
            }
            notify(t, e, n) {
                let r = this.subscriptions.length;
                if (r) {
                    if (1 === r)
                        this.subscriptions[0](t, e, n);
                    else
                        for (let i = 0; i < r; i++) {
                            let r = this.subscriptions[i];
                            r && r(t, e, n)
                        }
                }
            }
            getSize() {
                return this.subscriptions.length
            }
            clear() {
                this.subscriptions.length = 0
            }
        }
    },
    6917: function(t, e, n) {
        "use strict";
        n.d(e, {
            X: function() {
                return i
            },
            w: function() {
                return r
            }
        });
        let r = t=>1e3 * t
          , i = t=>t / 1e3
    },
    6681: function(t, e, n) {
        "use strict";
        n.d(e, {
            h: function() {
                return i
            }
        });
        var r = n(7294);
        function i(t) {
            let e = (0,
            r.useRef)(null);
            return null === e.current && (e.current = t()),
            e.current
        }
    },
    8868: function(t, e, n) {
        "use strict";
        n.d(e, {
            L: function() {
                return s
            }
        });
        var r = n(7294)
          , i = n(1741);
        let s = i.j ? r.useLayoutEffect : r.useEffect
    },
    5411: function(t, e, n) {
        "use strict";
        n.d(e, {
            z: function() {
                return i
            }
        });
        var r = n(7294);
        function i(t) {
            return (0,
            r.useEffect)(()=>()=>t(), [])
        }
    },
    3038: function(t, e, n) {
        "use strict";
        function r(t, e) {
            return e ? t * (1e3 / e) : 0
        }
        n.d(e, {
            R: function() {
                return r
            }
        })
    },
    3234: function(t, e, n) {
        "use strict";
        n.d(e, {
            BX: function() {
                return u
            }
        });
        var r = n(1560)
          , i = n(3038)
          , s = n(2074);
        let o = t=>!isNaN(parseFloat(t))
          , a = {
            current: void 0
        };
        class l {
            constructor(t, e={}) {
                this.version = "10.16.4",
                this.timeDelta = 0,
                this.lastUpdated = 0,
                this.canTrackVelocity = !1,
                this.events = {},
                this.updateAndNotify = (t,e=!0)=>{
                    this.prev = this.current,
                    this.current = t;
                    let {delta: n, timestamp: r} = s.frameData;
                    this.lastUpdated !== r && (this.timeDelta = n,
                    this.lastUpdated = r,
                    s.Wi.postRender(this.scheduleVelocityCheck)),
                    this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
                    this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
                    e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                }
                ,
                this.scheduleVelocityCheck = ()=>s.Wi.postRender(this.velocityCheck),
                this.velocityCheck = ({timestamp: t})=>{
                    t !== this.lastUpdated && (this.prev = this.current,
                    this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
                }
                ,
                this.hasAnimated = !1,
                this.prev = this.current = t,
                this.canTrackVelocity = o(this.current),
                this.owner = e.owner
            }
            onChange(t) {
                return this.on("change", t)
            }
            on(t, e) {
                this.events[t] || (this.events[t] = new r.L);
                let n = this.events[t].add(e);
                return "change" === t ? ()=>{
                    n(),
                    s.Wi.read(()=>{
                        this.events.change.getSize() || this.stop()
                    }
                    )
                }
                : n
            }
            clearListeners() {
                for (let t in this.events)
                    this.events[t].clear()
            }
            attach(t, e) {
                this.passiveEffect = t,
                this.stopPassiveEffect = e
            }
            set(t, e=!0) {
                e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
            }
            setWithVelocity(t, e, n) {
                this.set(e),
                this.prev = t,
                this.timeDelta = n
            }
            jump(t) {
                this.updateAndNotify(t),
                this.prev = t,
                this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
            get() {
                return a.current && a.current.push(this),
                this.current
            }
            getPrevious() {
                return this.prev
            }
            getVelocity() {
                return this.canTrackVelocity ? (0,
                i.R)(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
            }
            start(t) {
                return this.stop(),
                new Promise(e=>{
                    this.hasAnimated = !0,
                    this.animation = t(e),
                    this.events.animationStart && this.events.animationStart.notify()
                }
                ).then(()=>{
                    this.events.animationComplete && this.events.animationComplete.notify(),
                    this.clearAnimation()
                }
                )
            }
            stop() {
                this.animation && (this.animation.stop(),
                this.events.animationCancel && this.events.animationCancel.notify()),
                this.clearAnimation()
            }
            isAnimating() {
                return !!this.animation
            }
            clearAnimation() {
                delete this.animation
            }
            destroy() {
                this.clearListeners(),
                this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
        }
        function u(t, e) {
            return new l(t,e)
        }
    },
    6382: function(t, e, n) {
        "use strict";
        n.d(e, {
            $: function() {
                return s
            }
        });
        var r = n(819)
          , i = n(8834);
        let s = {
            test: (0,
            i.i)("#"),
            parse: function(t) {
                let e = ""
                  , n = ""
                  , r = ""
                  , i = "";
                return t.length > 5 ? (e = t.substring(1, 3),
                n = t.substring(3, 5),
                r = t.substring(5, 7),
                i = t.substring(7, 9)) : (e = t.substring(1, 2),
                n = t.substring(2, 3),
                r = t.substring(3, 4),
                i = t.substring(4, 5),
                e += e,
                n += n,
                r += r,
                i += i),
                {
                    red: parseInt(e, 16),
                    green: parseInt(n, 16),
                    blue: parseInt(r, 16),
                    alpha: i ? parseInt(i, 16) / 255 : 1
                }
            },
            transform: r.m.transform
        }
    },
    3184: function(t, e, n) {
        "use strict";
        n.d(e, {
            J: function() {
                return a
            }
        });
        var r = n(1649)
          , i = n(6190)
          , s = n(6430)
          , o = n(8834);
        let a = {
            test: (0,
            o.i)("hsl", "hue"),
            parse: (0,
            o.d)("hue", "saturation", "lightness"),
            transform: ({hue: t, saturation: e, lightness: n, alpha: o=1})=>"hsla(" + Math.round(t) + ", " + i.aQ.transform((0,
            s.Nw)(e)) + ", " + i.aQ.transform((0,
            s.Nw)(n)) + ", " + (0,
            s.Nw)(r.Fq.transform(o)) + ")"
        }
    },
    5385: function(t, e, n) {
        "use strict";
        n.d(e, {
            $: function() {
                return a
            }
        });
        var r = n(6430)
          , i = n(6382)
          , s = n(3184)
          , o = n(819);
        let a = {
            test: t=>o.m.test(t) || i.$.test(t) || s.J.test(t),
            parse: t=>o.m.test(t) ? o.m.parse(t) : s.J.test(t) ? s.J.parse(t) : i.$.parse(t),
            transform: t=>(0,
            r.HD)(t) ? t : t.hasOwnProperty("red") ? o.m.transform(t) : s.J.transform(t)
        }
    },
    819: function(t, e, n) {
        "use strict";
        n.d(e, {
            m: function() {
                return u
            }
        });
        var r = n(4169)
          , i = n(1649)
          , s = n(6430)
          , o = n(8834);
        let a = t=>(0,
        r.u)(0, 255, t)
          , l = {
            ...i.Rx,
            transform: t=>Math.round(a(t))
        }
          , u = {
            test: (0,
            o.i)("rgb", "red"),
            parse: (0,
            o.d)("red", "green", "blue"),
            transform: ({red: t, green: e, blue: n, alpha: r=1})=>"rgba(" + l.transform(t) + ", " + l.transform(e) + ", " + l.transform(n) + ", " + (0,
            s.Nw)(i.Fq.transform(r)) + ")"
        }
    },
    8834: function(t, e, n) {
        "use strict";
        n.d(e, {
            d: function() {
                return s
            },
            i: function() {
                return i
            }
        });
        var r = n(6430);
        let i = (t,e)=>n=>!!((0,
        r.HD)(n) && r.mj.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e))
          , s = (t,e,n)=>i=>{
            if (!(0,
            r.HD)(i))
                return i;
            let[s,o,a,l] = i.match(r.KP);
            return {
                [t]: parseFloat(s),
                [e]: parseFloat(o),
                [n]: parseFloat(a),
                alpha: void 0 !== l ? parseFloat(l) : 1
            }
        }
    },
    7197: function(t, e, n) {
        "use strict";
        n.d(e, {
            h: function() {
                return l
            }
        });
        var r = n(1550)
          , i = n(6430);
        let s = new Set(["brightness", "contrast", "saturate", "opacity"]);
        function o(t) {
            let[e,n] = t.slice(0, -1).split("(");
            if ("drop-shadow" === e)
                return t;
            let[r] = n.match(i.KP) || [];
            if (!r)
                return t;
            let o = n.replace(r, "")
              , a = s.has(e) ? 1 : 0;
            return r !== n && (a *= 100),
            e + "(" + a + o + ")"
        }
        let a = /([a-z-]*)\(.*?\)/g
          , l = {
            ...r.P,
            getAnimatableNone: t=>{
                let e = t.match(a);
                return e ? e.map(o).join(" ") : t
            }
        }
    },
    1550: function(t, e, n) {
        "use strict";
        n.d(e, {
            P: function() {
                return v
            },
            V: function() {
                return d
            }
        });
        var r = n(7630)
          , i = n(1662)
          , s = n(5385)
          , o = n(1649)
          , a = n(6430);
        let l = {
            regex: r.Xp,
            countKey: "Vars",
            token: "${v}",
            parse: i.Z
        }
          , u = {
            regex: a.dA,
            countKey: "Colors",
            token: "${c}",
            parse: s.$.parse
        }
          , c = {
            regex: a.KP,
            countKey: "Numbers",
            token: "${n}",
            parse: o.Rx.parse
        };
        function h(t, {regex: e, countKey: n, token: r, parse: i}) {
            let s = t.tokenised.match(e);
            s && (t["num" + n] = s.length,
            t.tokenised = t.tokenised.replace(e, r),
            t.values.push(...s.map(i)))
        }
        function d(t) {
            let e = t.toString()
              , n = {
                value: e,
                tokenised: e,
                values: [],
                numVars: 0,
                numColors: 0,
                numNumbers: 0
            };
            return n.value.includes("var(--") && h(n, l),
            h(n, u),
            h(n, c),
            n
        }
        function f(t) {
            return d(t).values
        }
        function p(t) {
            let {values: e, numColors: n, numVars: r, tokenised: i} = d(t)
              , o = e.length;
            return t=>{
                let e = i;
                for (let i = 0; i < o; i++)
                    e = i < r ? e.replace(l.token, t[i]) : i < r + n ? e.replace(u.token, s.$.transform(t[i])) : e.replace(c.token, (0,
                    a.Nw)(t[i]));
                return e
            }
        }
        let m = t=>"number" == typeof t ? 0 : t
          , v = {
            test: function(t) {
                var e, n;
                return isNaN(t) && (0,
                a.HD)(t) && ((null === (e = t.match(a.KP)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (n = t.match(a.dA)) || void 0 === n ? void 0 : n.length) || 0) > 0
            },
            parse: f,
            createTransformer: p,
            getAnimatableNone: function(t) {
                let e = f(t)
                  , n = p(t);
                return n(e.map(m))
            }
        }
    },
    1649: function(t, e, n) {
        "use strict";
        n.d(e, {
            Fq: function() {
                return s
            },
            Rx: function() {
                return i
            },
            bA: function() {
                return o
            }
        });
        var r = n(4169);
        let i = {
            test: t=>"number" == typeof t,
            parse: parseFloat,
            transform: t=>t
        }
          , s = {
            ...i,
            transform: t=>(0,
            r.u)(0, 1, t)
        }
          , o = {
            ...i,
            default: 1
        }
    },
    6190: function(t, e, n) {
        "use strict";
        n.d(e, {
            $C: function() {
                return c
            },
            RW: function() {
                return s
            },
            aQ: function() {
                return o
            },
            px: function() {
                return a
            },
            vh: function() {
                return l
            },
            vw: function() {
                return u
            }
        });
        var r = n(6430);
        let i = t=>({
            test: e=>(0,
            r.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
            parse: parseFloat,
            transform: e=>`${e}${t}`
        })
          , s = i("deg")
          , o = i("%")
          , a = i("px")
          , l = i("vh")
          , u = i("vw")
          , c = {
            ...o,
            parse: t=>o.parse(t) / 100,
            transform: t=>o.transform(100 * t)
        }
    },
    6430: function(t, e, n) {
        "use strict";
        n.d(e, {
            HD: function() {
                return a
            },
            KP: function() {
                return i
            },
            Nw: function() {
                return r
            },
            dA: function() {
                return s
            },
            mj: function() {
                return o
            }
        });
        let r = t=>Math.round(1e5 * t) / 1e5
          , i = /(-)?([\d]*\.?[\d])+/g
          , s = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
          , o = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
        function a(t) {
            return "string" == typeof t
        }
    },
    2490: function(t, e, n) {
        "use strict";
        n.d(e, {
            L: function() {
                return i
            }
        });
        var r = n(406);
        function i(t) {
            return !!((0,
            r.i)(t) && t.add)
        }
    },
    406: function(t, e, n) {
        "use strict";
        n.d(e, {
            i: function() {
                return r
            }
        });
        let r = t=>!!(t && t.getVelocity)
    }
}, function(t) {
    var e = function(e) {
        return t(t.s = e)
    };
    t.O(0, [774, 179], function() {
        return e(6840),
        e(6885)
    }),
    _N_E = t.O()
}
]);
