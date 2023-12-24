(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[908], {
    5908: function(e, a, i) {
        "use strict";
        i.r(a),
        i.d(a, {
            default: function() {
                return el
            }
        });
        var t = i(5893);
        let s = ()=>(0,
        t.jsx)("img", {
            src: "/_next/static/media/aave.d61729b9.png",
            alt: "Aave",
            width: 410
        })
          , n = ()=>(0,
        t.jsx)("img", {
            src: "/_next/static/media/bean.512cb3ca.png",
            alt: "Bean",
            width: 508
        })
          , l = ()=>(0,
        t.jsx)("img", {
            src: "/_next/static/media/family.74707479.png",
            alt: "Family",
            width: 392
        })
          , r = ()=>(0,
        t.jsx)("img", {
            src: "/_next/static/media/gho.9fa10cb7.png",
            alt: "Gho",
            width: 438
        })
          , o = ()=>(0,
        t.jsx)("img", {
            src: "/_next/static/media/lens.bb15a94c.png",
            alt: "Lens",
            width: 512
        })
          , x = ()=>(0,
        t.jsx)("img", {
            src: "/_next/static/media/sonar.4381a9cb.png",
            alt: "Sonar",
            width: 386
        })
          , c = e=>{
            switch (e) {
            case "aave":
                return (0,
                t.jsx)(s, {});
            case "lens":
                return (0,
                t.jsx)(o, {});
            case "gho":
                return (0,
                t.jsx)(r, {});
            case "family":
                return (0,
                t.jsx)(l, {});
            case "bean":
                return (0,
                t.jsx)(n, {});
            case "sonar":
                return (0,
                t.jsx)(x, {});
            default:
                return null
            }
        }
          , d = [{
            label: "Ban Nhan Su",
            slug: "aave",
            description: (0,
            t.jsx)(t.Fragment, {
                children: "Với châm ngôn hoạt động Lo cho 2 - 3 chục người cùng lúc cũng được, miễn mình thật lòng, Nhân Sự luôn là chỗ dựa và nhân tố gắn kết những thành viên của HVC với nhau. Nghe zậy chứ không phải 🚩red flag🚩 đâu à nha, tại thành viên Nhân Sự nào cũng có trái tim to bự hết đó."
            }),
            color: "var(--purple)",
           
            links: [{
                label: "",
                href: ""
            }, {
                label: "",
                href: ""
            }, {
                label: "",
                href: ""
            }, {
                label: "",
                href: ""
            }],
            details: [{
                
            }]
        }, {
            label: " Ban Truyen Thong",
            slug: "family",
            description: (0,
            t.jsx)(t.Fragment, {
                children: "Cần bao lâu để Truyền Thông tìm kiếm Cần bao nhiêu tiền đổi một mớ content? 🎶 Nhà có đứa con làm Truyền Thông, xin đừng hỏi Có idea chưa?. Nó buồn nó khóc, gia chủ không cản được."
            }),
            color: "var(--orange)",
            links: [{
                label: "",
                href: ""
            }, {
                label: "",
                href: ""
            }],
            details: [{}]
        }, {
            slug: "lens",
            label: "Ban Doi Ngoai",
            description: "Lens is a decentralized protocol for social platforms that offers builders an expansive suite of fully composable social primitives and powerful features they can effortlessly integrate into their products.",
            color: "var(--green)",
            links: [{
                label: "",
                href: ""
            }, {
                label: "",
                href: ""
            }, {
                label: "",
                href: ""
            }, {
                label: "",
                href: ""
            }],
            details: [{
                
            }]
        }, {
            label: " Ban Tai Chinh Chien Luoc",
            slug: "sonar",
            description: "Sonar is a mobile-first metaverse where users can listen to music, play games, and talk with their friends in spaces the community creates. They can use text, sound bites, and custom emojis as themselves or as their ”Moji.”",
            color: "var(--orange)",
            links: [{
                label: "",
                href: ""
            }, {
                label: "",
                href: ""
            }],
            details: [{
                
            }]
        }, {
            label: "Dao Dien Nghe Thuat",
            slug: "gho",
            description: "GHO, developed by Aave Labs, is a decentralized, over-collateralized stablecoin that’s native to the Aave Protocol. It serves as an internet payment layer and as a reliable digital asset for storing value over time.",
            color: "var(--purple)",
            links: [{
                label: "",
                href: ""
            }, {
                label: "Twitter",
                href: ""
            }, {
                label: "",
                href: ""
            }],
            details: [{
                
            }]
        }, {
            disabled: !0,
            label: "Coming Soon",
            slug: "bean",
            description: "Bean is a social app built on the Lens Protocol, powering beautiful discovery of something something and other somethings. Lots of fun.",
            color: "var(--yellow)",
            details: [{
                label: "Category",
                value: "Social App",
                highlight: !0
            }, {
                label: "Launch Date",
                value: "2017"
            }, {
                label: "Chains",
                value: ["Ethereum", "Polygon"]
            }]
        }];
        var h = i(3769)
          , k = i(5882)
          , p = i.n(k)
          , m = i(4563)
          , u = i(7294);
        function y() {
            let[e,a] = (0,
            u.useState)({
                width: 0,
                height: 0
            });
            return (0,
            u.useEffect)(()=>{
                let e = ()=>{
                    a(e=>({
                        width: window.innerWidth,
                        height: !e.height || window.innerWidth > 920 ? window.innerHeight : e.height
                    }))
                }
                ;
                return e(),
                window.addEventListener("resize", e),
                ()=>window.removeEventListener("resize", e)
            }
            , []),
            e
        }
        var f = i(7834)
          , b = i.n(f)
          , g = i(619);
        let v = ()=>{
            let {muted: e, setMuted: a} = (0,
            h.b)()
              , [i] = (0,
            g.Z)("/sounds/click.wav", {
                soundEnabled: !e,
                volume: 1
            })
              , [t] = (0,
            g.Z)("/sounds/release.wav", {
                soundEnabled: !e,
                volume: 1
            })
              , [s] = (0,
            g.Z)("/sounds/open.wav", {
                soundEnabled: !e,
                volume: 1
            })
              , [n] = (0,
            g.Z)("/sounds/close.wav", {
                soundEnabled: !e,
                volume: 1
            })
              , [l] = (0,
            g.Z)("/sounds/tap.wav", {
                soundEnabled: !e,
                volume: 1
            })
              , [r] = (0,
            g.Z)("/sounds/back.wav", {
                soundEnabled: !e,
                volume: 1
            })
              , [o] = (0,
            g.Z)("/sounds/forward.wav", {
                soundEnabled: !e,
                volume: 1
            })
              , [x] = (0,
            g.Z)("/sounds/error.wav", {
                soundEnabled: !e,
                volume: 1
            });
            return {
                muted: e,
                setMuted: a,
                clickSfx: i,
                releaseSfx: t,
                tapSfx: l,
                openSfx: s,
                closeSfx: n,
                backSfx: r,
                forwardSfx: o,
                errorSfx: x
            }
        }
          , C = ()=>{
            let {setCurrentProperty: e} = (0,
            h.b)()
              , {closeSfx: a} = v()
              , {width: i, height: s} = y();
            return (0,
            t.jsx)("button", {
                className: b().closeButton,
                onClick: i=>{
                    i.stopPropagation(),
                    a(),
                    e(null)
                }
                ,
                children: (0,
                t.jsxs)("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0,
                    t.jsx)("path", {
                        d: "M1 19L19 1",
                        stroke: "currentColor",
                        strokeWidth: "2"
                    }), (0,
                    t.jsx)("path", {
                        d: "M0.999999 0.999999L19 19",
                        stroke: "currentColor",
                        strokeWidth: "2"
                    })]
                })
            })
        }
        ;
        var w = i(5820)
          , j = i(4876)
          , E = i(5675)
          , L = i.n(E)
          , A = i(4949)
          , _ = i.n(A);
        let S = e=>{
            let {name: a} = e
              , [i,s] = (0,
            u.useState)(!1);
            return (0,
            t.jsxs)("div", {
                className: _().container,
                children: [(0,
                t.jsx)("div", {
                    className: _().label,
                    children: a
                }), (0,
                t.jsx)("div", {
                    className: _().icon,
                    children: (0,
                    t.jsx)(L(), {
                        src: "/icons/".concat(a.toLowerCase(), ".svg"),
                        alt: a,
                        width: 64,
                        height: 64,
                        unoptimized: !0,
                        priority: !0,
                        onLoadingComplete: ()=>s(!0),
                        style: {
                            opacity: i ? 1 : 0
                        }
                    })
                })]
            })
        }
          , B = e=>{
            let {property: a} = e
              , {setCurrentProperty: i} = (0,
            h.b)()
              , {closeSfx: s} = v()
              , n = {
                "--color": null == a ? void 0 : a.color,
                "--selection-color": "#000",
                "--selection-bg": null == a ? void 0 : a.color
            }
              , l = u.useCallback(e=>{
                e.stopPropagation();
                let a = e.currentTarget
                  , i = a.parentElement;
                i.scrollTop < 30 && i.scrollTo({
                    top: i.clientHeight,
                    behavior: "smooth"
                })
            }
            , [])
              , {width: r} = y()
              , o = r && r < 920;
            return r ? (0,
            t.jsx)(w.M, {
                children: a && (0,
                t.jsx)(j.E.div, {
                    className: p().container,
                    initial: o ? {
                        y: "100%"
                    } : {
                        opacity: 0,
                        scale: .95
                    },
                    animate: o ? {
                        y: 0
                    } : {
                        opacity: 1,
                        scale: 1
                    },
                    exit: o ? {
                        y: "100%",
                        transition: {
                            duration: .4,
                            ease: "easeInOut"
                        }
                    } : {
                        opacity: 0,
                        scale: .95,
                        transition: {
                            duration: .1
                        }
                    },
                    transition: o ? {
                        duration: .6,
                        ease: [.19, 1, .22, 1]
                    } : {
                        duration: .1
                    },
                    onClick: ()=>{
                        s(),
                        i(null)
                    }
                    ,
                    children: (0,
                    t.jsxs)("div", {
                        className: p().content,
                        onClick: l,
                        children: [(0,
                        t.jsx)(C, {}), (0,
                        t.jsx)(w.M, {
                            mode: "popLayout",
                            children: (0,
                            t.jsxs)(j.E.div, {
                                exit: {
                                    opacity: 0
                                },
                                transition: {
                                    duration: .2
                                },
                                className: p().innerContent,
                                children: [(0,
                                t.jsxs)(j.E.div, {
                                    style: n,
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    className: p().bio,
                                    transition: {
                                        duration: .2,
                                        delay: .1
                                    },
                                    children: [(0,
                                    t.jsx)("h1", {
                                        children: a.label
                                    }), (0,
                                    t.jsx)("p", {
                                        children: a.description
                                    })]
                                }, "".concat(a.label, "-bio")), a.details && (0,
                                t.jsx)(j.E.dl, {
                                    style: n,
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        duration: .2,
                                        delay: .2
                                    },
                                    className: p().details,
                                    children: a.details.map(e=>(0,
                                    t.jsxs)("div", {
                                        children: [(0,
                                        t.jsx)("dt", {
                                            children: e.label
                                        }), (0,
                                        t.jsx)("dd", {
                                            children: Array.isArray(e.value) ? (0,
                                            t.jsx)("ul", {
                                                className: "Chains" === e.label ? p().chains : "",
                                                children: "Chains" === e.label ? [...e.value].reverse().map((a,i)=>(0,
                                                t.jsx)("li", {
                                                    "data-highlight": e.highlight,
                                                    children: (0,
                                                    t.jsx)(S, {
                                                        name: a
                                                    })
                                                }, a)) : e.value.map(a=>(0,
                                                t.jsx)("li", {
                                                    "data-highlight": e.highlight,
                                                    children: a
                                                }, a))
                                            }) : (0,
                                            t.jsx)("span", {
                                                "data-highlight": e.highlight,
                                                children: e.value
                                            })
                                        })]
                                    }, "".concat(e.label, "-").concat(e.value)))
                                }, "".concat(a.label, "-details")), (0,
                                t.jsxs)(j.E.footer, {
                                    initial: {
                                        opacity: 0,
                                        translateY: "-0.5rem"
                                    },
                                    animate: {
                                        opacity: 1,
                                        translateY: "0"
                                    },
                                    transition: {
                                        duration: .2,
                                        delay: .3
                                    },
                                    className: p().footer,
                                    children: [(0,
                                    t.jsx)("div", {
                                        className: p().links,
                                        children: a.links && (0,
                                        t.jsx)("ul", {
                                            children: a.links.map(e=>(0,
                                            t.jsx)("li", {
                                                children: (0,
                                                t.jsx)("a", {
                                                    href: e.href,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: (0,
                                                    m.uI)(e.label.toLowerCase())
                                                })
                                            }, e.href))
                                        })
                                    }), a.disclaimer && (0,
                                    t.jsx)("p", {
                                        children: (0,
                                        t.jsx)("small", {
                                            className: "muted",
                                            children: a.disclaimer
                                        })
                                    })]
                                }, a.label)]
                            }, a.label)
                        })]
                    })
                })
            }) : null
        }
        ;
        var D = i(7199)
          , G = i.n(D)
          , V = i(3104);
        let M = ()=>(0,
        t.jsx)("svg", {
            width: "21",
            height: "20",
            viewBox: "0 0 21 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0,
            t.jsx)("path", {
                d: "M4.90901 18.416L15.252 12.448L15.252 11.0689L15.252 9.34707L15.252 7.96764L4.90901 2L4.90901 5.10096L13.7598 10.208L4.90901 15.3147L4.90901 18.416Z",
                fill: "currentColor"
            })
        })
          , H = {
            desktop: {
                aave: {
                    zIndex: 5,
                    x: -396,
                    y: -15,
                    rotate: -9.43
                },
                family: {
                    zIndex: 4,
                    x: -222,
                    y: -36,
                    rotate: 2.19
                },
                lens: {
                    zIndex: 3,
                    x: -53,
                    y: 7,
                    rotate: 6.19
                },
                sonar: {
                    zIndex: 2,
                    x: 98,
                    y: -55,
                    rotate: 0
                },
                gho: {
                    zIndex: 1,
                    x: 258,
                    y: 12,
                    rotate: 7.67
                },
                bean: {
                    zIndex: 2,
                    x: 426,
                    y: -5,
                    rotate: 1.28
                }
            },
            mobile: {
                aave: {
                    zIndex: 3,
                    x: -90,
                    y: -160,
                    rotate: -4.12
                },
                family: {
                    zIndex: 2,
                    x: 90,
                    y: -160,
                    rotate: 2.91
                },
                lens: {
                    zIndex: 1,
                    x: -90,
                    y: 0,
                    rotate: 6.19
                },
                sonar: {
                    zIndex: 1,
                    x: 90,
                    y: 0,
                    rotate: 0
                },
                gho: {
                    zIndex: 3,
                    x: -90,
                    y: 160,
                    rotate: 7.67
                },
                bean: {
                    zIndex: 2,
                    x: 90,
                    y: 160,
                    rotate: 0
                }
            }
        }
          , F = e=>{
            let {children: a, disabled: i, onClick: s, onDragStart: n, onDragEnd: l, onTap: r} = e
              , {currentProperty: o} = (0,
            h.b)()
              , [x,c] = (0,
            u.useState)(!1)
              , {clickSfx: d, tapSfx: k, releaseSfx: p} = v()
              , [m,y] = (0,
            V.H)();
            return (0,
            t.jsx)(j.E.button, {
                className: G().draggable,
                disabled: i,
                tabIndex: i ? -1 : 0,
                drag: !0,
                dragSnapToOrigin: !0,
                dragTransition: {
                    bounceStiffness: 600,
                    bounceDamping: 20
                },
                onTapStart: ()=>d(),
                onClick: ()=>{
                    x || (null == r || r(),
                    null == s || s())
                }
                ,
                onDrag: (e,a)=>{}
                ,
                onDragStart: (e,a)=>{
                    null == n || n(),
                    c(!0),
                    k()
                }
                ,
                onDragEnd: ()=>{
                    null == l || l(),
                    c(!1),
                    p(),
                    y(m.current, {
                        rotate: 0
                    }, {
                        duration: .15
                    })
                }
                ,
                whileHover: o ? {} : {
                    scale: 1.075
                },
                whileTap: o ? {} : {
                    scale: 1.05
                },
                whileDrag: {
                    rotate: 10,
                    scale: 1.05
                },
                transition: {
                    duration: .1
                },
                children: (0,
                t.jsx)("div", {
                    ref: m,
                    children: a
                })
            })
        }
          , I = ()=>{
            let[e,a] = (0,
            u.useState)(!1)
              , [i,s] = (0,
            u.useState)(!1)
              , [n,l] = (0,
            u.useState)(-1)
              , [r,o] = (0,
            u.useState)(-1);
            (0,
            u.useEffect)(()=>{
                if (-1 === r)
                    return;
                let e = setTimeout(()=>{
                    o(-1)
                }
                , 1500);
                return ()=>clearTimeout(e)
            }
            , [r]);
            let {currentProperty: x, setCurrentProperty: k} = (0,
            h.b)()
              , p = d.findIndex(e=>e.slug === x)
              , {width: m, height: f} = y()
              , b = m && m <= 920
              , g = (0,
            u.useRef)(null)
              , {clickSfx: C, closeSfx: E, openSfx: L, backSfx: A, forwardSfx: _, errorSfx: S} = v()
              , B = (0,
            u.useCallback)(async()=>{
                E(),
                k(null)
            }
            , [E, b, k])
              , D = (0,
            u.useCallback)(e=>{
                L(),
                k(e)
            }
            , [L, k])
              , V = (0,
            u.useCallback)(()=>{
                _(),
                p < d.length - 1 && !d[p + 1].disabled ? k(d[p + 1].slug) : d[0].disabled || k(d[0].slug)
            }
            , [C, p, k])
              , I = (0,
            u.useCallback)(()=>{
                A(),
                p > 0 ? k(d[p - 1].slug) : k(d[d.length - 1].disabled ? d[d.length - 2].slug : d[d.length - 1].slug)
            }
            , [C, p, k]);
            return !function(e, a) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                u.useEffect(()=>(window.addEventListener(e, a),
                ()=>{
                    window.removeEventListener(e, a)
                }
                ), [e, a, ...i])
            }("keydown", e=>{
                x && (e.repeat || ("Escape" === e.key && B(),
                "ArrowRight" === e.key && V(),
                "ArrowLeft" === e.key && I()))
            }
            ),
            (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsx)(w.M, {
                    children: x ? (0,
                    t.jsx)(j.E.div, {
                        className: G().controlsContainer,
                        initial: {
                            opacity: 0,
                            y: "1rem"
                        },
                        animate: {
                            opacity: 1,
                            y: "0"
                        },
                        exit: {
                            opacity: 0,
                            y: "1rem"
                        },
                        transition: {
                            duration: .2
                        },
                        children: (0,
                        t.jsxs)("div", {
                            className: G().controls,
                            children: [(0,
                            t.jsx)("button", {
                                onClick: I,
                                className: G().prev,
                                children: (0,
                                t.jsx)(M, {})
                            }), (0,
                            t.jsx)("button", {
                                onClick: V,
                                className: G().next,
                                children: (0,
                                t.jsx)(M, {})
                            })]
                        })
                    }, "controls") : null
                }), (0,
                t.jsx)("div", {
                    className: G().container,
                    children: (0,
                    t.jsx)("ul", {
                        ref: g,
                        children: d.map((d,h)=>{
                            let k = x === d.slug
                              , m = r === h
                              , u = b ? H.mobile[d.slug] : H.desktop[d.slug]
                              , y = b ? .5 * f : 500
                              , g = b ? 0 : y / 2.15
                              , v = {
                                offsetX: -y * p,
                                x: y * h,
                                y: b ? -y / 2 : 0
                            }
                              , C = {
                                "--bg": d.color
                            };
                            return (0,
                            t.jsx)("li", {
                                children: (0,
                                t.jsxs)(j.E.div, {
                                    style: C,
                                    className: G().anchor,
                                    "data-dragging": i,
                                    "data-disabled": d.disabled,
                                    "data-toggled": m,
                                    initial: !1,
                                    animate: x ? k ? {
                                        zIndex: u.zIndex,
                                        x: -g,
                                        y: b ? -(.25 * y) : 0
                                    } : {
                                        ...b ? {
                                            zIndex: u.zIndex,
                                            x: u.x,
                                            y: u.y,
                                            opacity: 0,
                                            transition: {
                                                duration: 1,
                                                ease: [.19, 1, .22, 1],
                                                opacity: {
                                                    duration: .1
                                                }
                                            }
                                        } : {
                                            zIndex: u.zIndex,
                                            x: v.x + v.offsetX + -g,
                                            y: v.y
                                        }
                                    } : {
                                        zIndex: n === h && b ? 10 : u.zIndex,
                                        x: u.x,
                                        y: u.y,
                                        willChange: "transform,opacity,z-index"
                                    },
                                    transition: {
                                        duration: b ? .4 : 1,
                                        ease: [.19, 1, .22, 1]
                                    },
                                    children: [(0,
                                    t.jsx)("div", {
                                        children: (0,
                                        t.jsx)(F, {
                                            disabled: !!x,
                                            onDragStart: ()=>{
                                                s(!0),
                                                l(h)
                                            }
                                            ,
                                            onDragEnd: ()=>{
                                                s(!1)
                                            }
                                            ,
                                            onClick: ()=>{
                                                x || (d.disabled ? S() : (D(d.slug),
                                                l(h)))
                                            }
                                            ,
                                            onTap: ()=>{
                                                d.disabled && (o(-1),
                                                setTimeout(()=>{
                                                    o(h)
                                                }
                                                , 10))
                                            }
                                            ,
                                            children: (0,
                                            t.jsx)(j.E.div, {
                                                initial: !1,
                                                animate: {
                                                    scale: b ? k ? .55 : .33 : k ? 1 : .5,
                                                    opacity: x ? k ? 1 : d.disabled ? .05 : .2 : 1
                                                },
                                                transition: {
                                                    duration: .5,
                                                    ease: [.19, 1, .22, 1],
                                                    opacity: {
                                                        delay: .05
                                                    }
                                                },
                                                children: (0,
                                                t.jsx)(j.E.div, {
                                                    className: G().logo,
                                                    initial: {
                                                        opacity: .01,
                                                        scale: .5,
                                                        y: 400
                                                    },
                                                    animate: m ? {
                                                        opacity: b ? .1 : 1,
                                                        scale: b ? 1.05 : 1,
                                                        y: 0,
                                                        x: [0, 10, -10, 5, -5, 0],
                                                        rotate: u.rotate
                                                    } : {
                                                        opacity: 1,
                                                        scale: 1,
                                                        y: 0,
                                                        rotate: u.rotate
                                                    },
                                                    transition: m ? {
                                                        duration: .2
                                                    } : {
                                                        delay: e ? 0 : .25 + .075 * h,
                                                        duration: 1,
                                                        ease: [.19, 1, .22, 1],
                                                        opacity: {
                                                            delay: e ? 0 : .25 + .075 * h,
                                                            duration: .3,
                                                            ease: [.19, 1, .22, 1]
                                                        }
                                                    },
                                                    onAnimationComplete: ()=>a(!0),
                                                    children: (0,
                                                    t.jsx)(j.E.div, {
                                                        initial: {
                                                            originX: .5,
                                                            originY: .5
                                                        },
                                                        animate: {
                                                            y: [0, -10, 0],
                                                            transition: {
                                                                delay: .5 * h,
                                                                duration: 2.5,
                                                                ease: "easeInOut",
                                                                repeat: 1 / 0,
                                                                repeatType: "reverse"
                                                            }
                                                        },
                                                        children: (0,
                                                        t.jsx)(j.E.div, {
                                                            initial: {
                                                                originX: .5,
                                                                originY: .5
                                                            },
                                                            animate: k ? {
                                                                rotate: [0, -(2 * (u.rotate || 2))],
                                                                transition: {
                                                                    duration: 2.5,
                                                                    ease: "easeInOut",
                                                                    repeat: 1 / 0,
                                                                    repeatType: "reverse"
                                                                }
                                                            } : {
                                                                rotate: 0
                                                            },
                                                            children: c(d.slug)
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    }), (0,
                                    t.jsx)("div", {
                                        className: G().label,
                                        children: (0,
                                        t.jsx)("span", {
                                            children: d.label
                                        })
                                    })]
                                })
                            }, d.slug)
                        }
                        )
                    })
                })]
            })
        }
        ;
        var T = i(6571)
          , Z = i.n(T)
          , z = i(780)
          , N = i(9185)
          , P = JSON.parse('{"v":"5.8.1","fr":60,"ip":0,"op":120,"w":1000,"h":270,"nm":"9","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":2,"ty":3,"nm":"Logo 2","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[497,135.25,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[130,130,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":933,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Shape Layer 11","parent":4,"td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.15,"y":1},"o":{"x":0.756,"y":0},"t":5,"s":[279.093,49.125,0],"to":[0,-16,0],"ti":[0,16,0]},{"t":25,"s":[279.093,-46.875,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[126,201],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.301960993748,0.686274988511,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.301960993748,0.686274988511,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-227.5,147.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":933,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"A 7","tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.273,"y":0},"t":19,"s":[435.105,134.806,0],"to":[-44.099,-0.03,0],"ti":[44.099,0.03,0]},{"t":79,"s":[170.509,134.628,0]}],"ix":2,"l":2},"a":{"a":0,"k":[74.485,47.021,0],"ix":1,"l":2},"s":{"a":0,"k":[130,130,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-20.263,-46.771],[-74.235,46.771],[-46.189,46.771],[0,-33.277],[7.322,-46.773]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[100,100,100,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[74.485,47.021],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":933,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"L","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[500,135,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-48.25,-72.5],[-132.25,73],[-466,72.5],[-386,-73]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.63529399797,0.407842987659,0.384313994763,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":933,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"A 6","parent":4,"tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[74.1,47.022,0],"ix":2,"l":2},"a":{"a":0,"k":[74.485,47.021,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-8.388,-46.793],[0,-33.277],[46.186,46.771],[74.235,46.771],[20.259,-46.771]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[100,100,100,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[74.485,47.021],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":24,"op":933,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"L 2","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[500,135,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-48.25,-72.5],[-132.25,73],[-466,72.5],[-386,-73]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.63529399797,0.407842987659,0.384313994763,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":933,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"V 3","parent":10,"tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[74.483,47.021,0],"ix":2,"l":2},"a":{"a":0,"k":[74.483,47.021,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[0.001,33.277],[-46.188,-46.771],[-74.234,-46.771],[-20.26,46.771],[-7.786,46.771],[7.785,46.771]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[100,100,100,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[74.484,47.021],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":933,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"L 3","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[500,135,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-48.25,-72.5],[-132.25,73],[-466,72.5],[-386,-73]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.63529399797,0.407842987659,0.384313994763,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":933,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"V 2","parent":4,"tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[199.853,47.021,0],"ix":2,"l":2},"a":{"a":0,"k":[74.483,47.021,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[46.188,-46.771],[0.001,33.277],[-7.786,46.771],[7.785,46.771],[20.26,46.771],[74.233,-46.771]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[100,100,100,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[74.484,47.021],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":41,"op":933,"st":0,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"Shape Layer 12","parent":14,"td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.15,"y":1},"o":{"x":0.756,"y":0},"t":8,"s":[272.863,-248.385,0],"to":[0,16.603,0],"ti":[0,-16.603,0]},{"t":28,"s":[272.863,-148.769,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[126,201],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.301960993748,0.686274988511,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.301960993748,0.686274988511,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-227.5,147.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":933,"st":0,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"A 5","parent":14,"tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[74.485,47.021,0],"ix":2,"l":2},"a":{"a":0,"k":[74.485,47.021,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-20.263,-46.771],[-74.235,46.771],[-46.189,46.771],[0,-33.277],[7.322,-46.773]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[100,100,100,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[74.485,47.021],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":933,"st":0,"bm":0},{"ddd":0,"ind":13,"ty":4,"nm":"Shape Layer 7","parent":14,"td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":1},"o":{"x":0.167,"y":0},"t":0,"s":[332.093,47.231,0],"to":[0,-33.497,0],"ti":[0,33.497,0]},{"t":19,"s":[332.093,-153.75,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[126,201],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.301960993748,0.686274988511,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.301960993748,0.686274988511,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-227.5,147.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":933,"st":0,"bm":0},{"ddd":0,"ind":14,"ty":4,"nm":"A 4","parent":2,"tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":0},"o":{"x":0.273,"y":0.273},"t":19,"s":[-0.108,-0.479,0],"to":[0,0,0],"ti":[0,0,0]},{"t":79,"s":[-0.108,-0.479,0]}],"ix":2,"l":2},"a":{"a":0,"k":[74.485,47.021,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-8.388,-46.793],[0,-33.277],[46.186,46.771],[74.235,46.771],[20.259,-46.771]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[100,100,100,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[74.485,47.021],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":933,"st":0,"bm":0},{"ddd":0,"ind":15,"ty":4,"nm":"R 2","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[500,135,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[39.25,-72.75],[385.75,-71],[467.5,71.5],[123.5,70.75]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.63529399797,0.407842987659,0.384313994763,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":933,"st":0,"bm":0},{"ddd":0,"ind":16,"ty":4,"nm":"A 3","parent":2,"tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.273,"y":0},"t":19,"s":[14.199,-0.342,0],"to":[39.436,0,0],"ti":[-39.436,0,0]},{"t":79,"s":[250.815,-0.342,0]}],"ix":2,"l":2},"a":{"a":0,"k":[74.485,47.021,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-20.263,-46.771],[-74.235,46.771],[-46.189,46.771],[0,-33.277],[7.322,-46.773]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[100,100,100,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[74.485,47.021],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":933,"st":0,"bm":0},{"ddd":0,"ind":17,"ty":4,"nm":"Shape Layer 8","parent":16,"td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.273,"y":0},"t":38,"s":[333.093,-248.75,0],"to":[0,15.833,0],"ti":[0,-15.833,0]},{"t":84,"s":[333.093,-153.75,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[126,201],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.301960993748,0.686274988511,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.301960993748,0.686274988511,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-227.5,147.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":933,"st":0,"bm":0},{"ddd":0,"ind":18,"ty":4,"nm":"A 2","parent":16,"tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[74.485,47.021,0],"ix":2,"l":2},"a":{"a":0,"k":[74.485,47.021,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-8.388,-46.793],[0,-33.277],[46.186,46.771],[74.235,46.771],[20.259,-46.771]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[100,100,100,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[74.485,47.021],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":933,"st":0,"bm":0},{"ddd":0,"ind":19,"ty":3,"nm":"Logo","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[500,135.25,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[130,130,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":933,"st":0,"bm":0},{"ddd":0,"ind":20,"ty":4,"nm":"R 3","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[500,135,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[39.25,-72.75],[385.75,-71],[467.5,71.5],[123.5,70.75]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.63529399797,0.407842987659,0.384313994763,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":933,"st":0,"bm":0},{"ddd":0,"ind":21,"ty":4,"nm":"R","parent":16,"tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-41.603,47.02,0],"ix":2,"l":2},"a":{"a":0,"k":[64.47,47.021,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-44.659,-46.771],[-64.22,-12.868],[-29.805,46.771],[-1.761,46.771],[-41.702,-22.451],[50.188,-22.451],[64.22,-46.771]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[100,100,100,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[64.47,47.021],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":933,"st":0,"bm":0}],"markers":[]}')
          , R = i(3563)
          , W = i.n(R)
          , O = i(6847)
          , X = i.n(O)
          , Y = i(2066);
        let K = e=>{
            let {options: a, children: i, open: s, onOpenChange: n, closeOnMouseOut: l} = e
              , [r,o] = (0,
            u.useState)(!1)
              , x = void 0 !== s
              , c = x ? s : r
              , d = x ? n : o;
            return (0,
            t.jsxs)(Y.fC, {
                onOpenChange: e=>{
                    null == n || n(e),
                    null == d || d(e)
                }
                ,
                children: [(0,
                t.jsx)(Y.xz, {
                    asChild: !0,
                    children: i
                }), (0,
                t.jsx)(Y.Uv, {
                    children: (0,
                    t.jsx)(Y.VY, {
                        onMouseLeave: ()=>{
                            l && (null == n || n(!1),
                            null == d || d(!1))
                        }
                        ,
                        className: "".concat(W().content, " ").concat(c ? X().contentAnimEnter : X().contentAnimExit),
                        children: a.map(e=>(0,
                        t.jsxs)(Y.ck, {
                            onClick: e.onClick,
                            children: [(0,
                            t.jsx)(w.M, {
                                initial: !1,
                                children: (0,
                                t.jsx)(j.E.span, {
                                    initial: {
                                        opacity: 0,
                                        scale: .6
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    exit: {
                                        opacity: 0,
                                        scale: .6,
                                        position: "absolute"
                                    },
                                    transition: {
                                        duration: .2,
                                        ease: "easeInOut"
                                    },
                                    children: e.icon
                                }, "".concat(e.label, "-icon"))
                            }), (0,
                            t.jsx)("div", {
                                className: W().label,
                                children: (0,
                                t.jsx)(w.M, {
                                    initial: !1,
                                    children: (0,
                                    t.jsx)(j.E.span, {
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1
                                        },
                                        exit: {
                                            opacity: 0,
                                            position: "absolute"
                                        },
                                        transition: {
                                            duration: .1,
                                            ease: "easeInOut"
                                        },
                                        children: e.label
                                    }, e.label)
                                })
                            })]
                        }, e.id))
                    })
                })]
            })
        }
          , U = ()=>(0,
        t.jsx)("svg", {
        })
          , J = ()=>(0,
        t.jsx)("svg", {
        })
          , q = ()=>(0,
        t.jsxs)("svg", {
        });
        var Q = i(1664)
          , $ = i.n(Q);
        let ee = ()=>{
            let {currentProperty: e} = (0,
            h.b)()
              , [a,i] = (0,
            u.useState)(!1)
              , [s,n] = (0,
            u.useState)(!1)
              , [l,r] = (0,
            u.useState)(!1);
            return ((0,
            u.useEffect)(()=>{
                setTimeout(()=>{
                    i(!0)
                }
                , 1e3)
            }
            , []),
            a) ? (0,
            t.jsxs)("div", {
                className: Z().container,
                "data-hidden": e,
                children: [(0,
                t.jsx)("header", {
                    children: (0,
                    t.jsx)(K, {
                        closeOnMouseOut: s,
                        onOpenChange: e=>{
                        }
                        ,
                        options: [{
                            
                        }, {
                        }],
                        children: (0,
                        t.jsx)("div", {
                            children: (0,
                            t.jsx)(N.Z, {
                                play: !0,
                                loop: !1,
                                animationData: P,
                                rendererSettings: {
                                    preserveAspectRatio: "xMidYMid slice"
                                }
                            })
                        })
                    })
                }), (0,
                t.jsx)("footer", {})]
            }) : null
        }
          , ea = {
            duration: .2,
            ease: "easeInOut"
        }
          , ei = e=>{
            let {enabled: a} = e;
            return (0,
            t.jsxs)("svg", {})
        }
        ;
        var et = i(6381)
          , es = i.n(et);
        let en = ()=>{
            let {muted: e, setMuted: a, clickSfx: i} = v();
            return (0,
            t.jsx)("div", {
                className: es().container,
                children: (0,
                t.jsx)("button", {
                    onClick: ()=>{
                        a(!e)
                    }
                    ,
                    children: (0,
                    t.jsx)(ei, {
                        enabled: !e
                    })
                })
            })
        }
        ;
        function el() {
            let {currentProperty: e} = (0,
            h.b)()
              , a = d.find(a=>a.slug === e);
            return (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsx)(ee, {}), (0,
                t.jsx)(en, {}), (0,
                t.jsx)(I, {}), (0,
                t.jsx)("section", {
                    children: (0,
                    t.jsx)(B, {
                        property: a
                    })
                })]
            })
        }
    },
    4563: function(e, a, i) {
        "use strict";
        i.d(a, {
            uI: function() {
                return s
            }
        });
        var t = i(5893);
        let s = e=>{
            switch (e.toLowerCase()) {
            case "twitter":
            case "x":
                return (0,
                t.jsx)(l, {});
            case "lenster":
                return (0,
                t.jsx)(r, {});
            case "discord":
                return (0,
                t.jsx)(o, {});
            case "lever":
            case "jobs":
                return (0,
                t.jsx)(x, {});
            case "hey":
                return (0,
                t.jsx)(c, {});
            default:
                return (0,
                t.jsx)(n, {})
            }
        }
          , n = ()=>(0,
        t.jsxs)("svg", {})
          , l = ()=>(0,
        t.jsx)("svg", {})
          , r = ()=>(0,
        t.jsxs)("svg", {})
          , o = ()=>(0,
        t.jsx)("svg", {})
          , x = ()=>(0,
        t.jsxs)("svg", {})
          , c = ()=>(0,
        t.jsx)("svg", {})
    },
    780: function(e, a, i) {
        "use strict";
        i.d(a, {
            G: function() {
                return s
            },
            U: function() {
                return t
            }
        });
        let t = [{}]
          , s = [{
            label: "",
            href: ""
        }, {
            label: "",
            href: ""
        }, {
            label: "",
            href: ""
        }, {
            label: "",
            href: ""
        }]
    },
    4949: function(e) {
        e.exports = {
            container: "styles_container__AKGKk",
            label: "styles_label___vMHi",
            icon: "styles_icon__t80S5"
        }
    },
    7834: function(e) {
        e.exports = {
            closeButton: "styles_closeButton__2CERh"
        }
    },
    6847: function(e) {
        e.exports = {
            contentAnimEnter: "animation_contentAnimEnter__wlTW9",
            enterPop: "animation_enterPop__tCQZu",
            contentAnimExit: "animation_contentAnimExit__xPrvD",
            exit: "animation_exit__Kp0ha"
        }
    },
    3563: function(e) {
        e.exports = {
            content: "styles_content__URj10",
            label: "styles_label__nZ0E0"
        }
    },
    6571: function(e) {
        e.exports = {
            container: "styles_container__CZwiU",
            fadeIn: "styles_fadeIn__5YyCS",
            links: "styles_links__5qJaS"
        }
    },
    7199: function(e) {
        e.exports = {
            draggable: "styles_draggable__UHZii",
            container: "styles_container__m7iLQ",
            anchor: "styles_anchor__JuNd_",
            label: "styles_label__xIgIr",
            logo: "styles_logo__gSepY",
            controlsContainer: "styles_controlsContainer__Lh2Ap",
            controls: "styles_controls__dcFXB",
            textIn: "styles_textIn__jlU7M"
        }
    },
    5882: function(e) {
        e.exports = {
            container: "styles_container__hqm4Z",
            content: "styles_content__zXdy_",
            innerContent: "styles_innerContent__RMK_k",
            bio: "styles_bio__1MIxw",
            footer: "styles_footer__OmqYC",
            links: "styles_links__3AvSP",
            details: "styles_details__0ByWX",
            chains: "styles_chains__l7o9t"
        }
    },
    6381: function(e) {
        e.exports = {
            container: "styles_container__oBv0S"
        }
    }
}]);
