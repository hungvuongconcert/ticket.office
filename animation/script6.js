(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
  8312: function(e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
          return a(2545)
      }
      ])
  },
  1221: function(e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      function(e, t) {
          for (var a in t)
              Object.defineProperty(e, a, {
                  enumerable: !0,
                  get: t[a]
              })
      }(t, {
          noSSR: function() {
              return i
          },
          default: function() {
              return n
          }
      });
      let s = a(8754)
        , r = (a(7294),
      s._(a(177)));
      function l(e) {
          return {
              default: (null == e ? void 0 : e.default) || e
          }
      }
      function i(e, t) {
          return delete t.webpack,
          delete t.modules,
          e(t)
      }
      function n(e, t) {
          let a = r.default
            , s = {
              loading: e=>{
                  let {error: t, isLoading: a, pastDelay: s} = e;
                  return null
              }
          };
          e instanceof Promise ? s.loader = ()=>e : "function" == typeof e ? s.loader = e : "object" == typeof e && (s = {
              ...s,
              ...e
          }),
          s = {
              ...s,
              ...t
          };
          let n = s.loader;
          return (s.loadableGenerated && (s = {
              ...s,
              ...s.loadableGenerated
          },
          delete s.loadableGenerated),
          "boolean" != typeof s.ssr || s.ssr) ? a({
              ...s,
              loader: ()=>null != n ? n().then(l) : Promise.resolve(l(()=>null))
          }) : (delete s.webpack,
          delete s.modules,
          i(a, s))
      }
      ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
          value: !0
      }),
      Object.assign(t.default, t),
      e.exports = t.default)
  },
  7747: function(e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      Object.defineProperty(t, "LoadableContext", {
          enumerable: !0,
          get: function() {
              return l
          }
      });
      let s = a(8754)
        , r = s._(a(7294))
        , l = r.default.createContext(null)
  },
  177: function(e, t, a) {
      "use strict";
      /**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
MIT License
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function() {
              return h
          }
      });
      let s = a(8754)
        , r = s._(a(7294))
        , l = a(7747)
        , i = []
        , n = []
        , o = !1;
      function d(e) {
          let t = e()
            , a = {
              loading: !0,
              loaded: null,
              error: null
          };
          return a.promise = t.then(e=>(a.loading = !1,
          a.loaded = e,
          e)).catch(e=>{
              throw a.loading = !1,
              a.error = e,
              e
          }
          ),
          a
      }
      class c {
          promise() {
              return this._res.promise
          }
          retry() {
              this._clearTimeouts(),
              this._res = this._loadFn(this._opts.loader),
              this._state = {
                  pastDelay: !1,
                  timedOut: !1
              };
              let {_res: e, _opts: t} = this;
              e.loading && ("number" == typeof t.delay && (0 === t.delay ? this._state.pastDelay = !0 : this._delay = setTimeout(()=>{
                  this._update({
                      pastDelay: !0
                  })
              }
              , t.delay)),
              "number" == typeof t.timeout && (this._timeout = setTimeout(()=>{
                  this._update({
                      timedOut: !0
                  })
              }
              , t.timeout))),
              this._res.promise.then(()=>{
                  this._update({}),
                  this._clearTimeouts()
              }
              ).catch(e=>{
                  this._update({}),
                  this._clearTimeouts()
              }
              ),
              this._update({})
          }
          _update(e) {
              this._state = {
                  ...this._state,
                  error: this._res.error,
                  loaded: this._res.loaded,
                  loading: this._res.loading,
                  ...e
              },
              this._callbacks.forEach(e=>e())
          }
          _clearTimeouts() {
              clearTimeout(this._delay),
              clearTimeout(this._timeout)
          }
          getCurrentValue() {
              return this._state
          }
          subscribe(e) {
              return this._callbacks.add(e),
              ()=>{
                  this._callbacks.delete(e)
              }
          }
          constructor(e, t) {
              this._loadFn = e,
              this._opts = t,
              this._callbacks = new Set,
              this._delay = null,
              this._timeout = null,
              this.retry()
          }
      }
      function A(e) {
          return function(e, t) {
              let a = Object.assign({
                  loader: null,
                  loading: null,
                  delay: 200,
                  timeout: null,
                  webpack: null,
                  modules: null
              }, t)
                , s = null;
              function i() {
                  if (!s) {
                      let t = new c(e,a);
                      s = {
                          getCurrentValue: t.getCurrentValue.bind(t),
                          subscribe: t.subscribe.bind(t),
                          retry: t.retry.bind(t),
                          promise: t.promise.bind(t)
                      }
                  }
                  return s.promise()
              }
              if (!o) {
                  let e = a.webpack ? a.webpack() : a.modules;
                  e && n.push(t=>{
                      for (let a of e)
                          if (t.includes(a))
                              return i()
                  }
                  )
              }
              function d(e, t) {
                  !function() {
                      i();
                      let e = r.default.useContext(l.LoadableContext);
                      e && Array.isArray(a.modules) && a.modules.forEach(t=>{
                          e(t)
                      }
                      )
                  }();
                  let n = r.default.useSyncExternalStore(s.subscribe, s.getCurrentValue, s.getCurrentValue);
                  return r.default.useImperativeHandle(t, ()=>({
                      retry: s.retry
                  }), []),
                  r.default.useMemo(()=>{
                      var t;
                      return n.loading || n.error ? r.default.createElement(a.loading, {
                          isLoading: n.loading,
                          pastDelay: n.pastDelay,
                          timedOut: n.timedOut,
                          error: n.error,
                          retry: s.retry
                      }) : n.loaded ? r.default.createElement((t = n.loaded) && t.default ? t.default : t, e) : null
                  }
                  , [e, n])
              }
              return d.preload = ()=>i(),
              d.displayName = "LoadableComponent",
              r.default.forwardRef(d)
          }(d, e)
      }
      function u(e, t) {
          let a = [];
          for (; e.length; ) {
              let s = e.pop();
              a.push(s(t))
          }
          return Promise.all(a).then(()=>{
              if (e.length)
                  return u(e, t)
          }
          )
      }
      A.preloadAll = ()=>new Promise((e,t)=>{
          u(i).then(e, t)
      }
      ),
      A.preloadReady = e=>(void 0 === e && (e = []),
      new Promise(t=>{
          let a = ()=>(o = !0,
          t());
          u(n, e).then(a, a)
      }
      )),
      window.__NEXT_PRELOADREADY = A.preloadReady;
      let h = A
  },
  9337: function(e, t, a) {
      "use strict";
      var s = a(5893)
        , r = a(2769);
      t.Z = e=>{
          let {children: t, className: a, innerClassName: l} = e;
          return (0,
          s.jsx)("section", {
              className: (0,
              r.cn)("w-full gap-10 px-4 py-2 md:px-10 md:py-20", a),
              children: (0,
              s.jsx)("div", {
                  className: (0,
                  r.cn)("mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-[inherit]", l),
                  children: t
              })
          })
      }
  },
  2545: function(e, t, a) {
      "use strict";
      a.r(t),
      a.d(t, {
          default: function() {
              return $
          }
      });
      var s = a(5893)
        , r = a(5675)
        , l = a.n(r)
        , i = a(1664)
        , n = a.n(i)
        , o = a(7294)
        , d = a(9337)
        , c = a(2769)
        , A = a(7292)
        , u = a(5529)
        , h = {
          src: "/_next/static/media/aha.1acbabeb.svg",
          height: 12,
          width: 28,
          blurWidth: 0,
          blurHeight: 0
      }
        , x = {
          src: "/_next/static/media/asana.dfae0890.svg",
          height: 28,
          width: 28,
          blurWidth: 0,
          blurHeight: 0
      }
        , m = {
          src: "/_next/static/media/github.f0164293.svg",
          height: 28,
          width: 28,
          blurWidth: 0,
          blurHeight: 0
      }
        , f = {
          src: "/_next/static/media/jira.a5428d54.svg",
          height: 28,
          width: 28,
          blurWidth: 0,
          blurHeight: 0
      }
        , g = {
          height: 28,
          width: 28,
          blurWidth: 0,
          blurHeight: 0
      }
        , p = {
          src: "/_next/static/media/linear.2acfa0c7.svg",
          height: 28,
          width: 28,
          blurWidth: 0,
          blurHeight: 0
      }
        , b = {
          src: "/_next/static/media/shortcut.bdc2153d.svg",
          height: 28,
          width: 28,
          blurWidth: 0,
          blurHeight: 0
      }
        , w = {
          src: "/_next/static/media/slack.db326220.svg",
          height: 28,
          width: 28,
          blurWidth: 0,
          blurHeight: 0
      };
      let j = e=>(0,
      s.jsxs)("div", {
          className: "flex h-max w-max animate-[bounceAround_1s_alternate_infinite] gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-800 shadow-lg shadow-blue-500/50 motion-reduce:animate-none",
          style: {
              animationDelay: "".concat(e.delay, "s")
          },
          children: [(0,
          s.jsx)(l(), {
              src: e.src,
              alt: e.company + " logo",
              width: 28,
              height: 28
          }), (0,
          s.jsx)("p", {
              className: "text-xl font-bold",
              children: e.company
          })]
      })
        , v = e=>(0,
      s.jsx)("div", {
          className: (0,
          c.cn)("relative w-full cursor-default text-base transition  after:absolute after:opacity-0 md:w-1/3", {
              "after:-top-10 after:left-1/2 after:w-max after:-translate-x-1/2 after:rounded-lg after:bg-slate-700 after:px-3 after:py-1 after:font-bold after:text-white after:transition-opacity hover:after:opacity-100": e.id === e.state.toString()
          }, {
              'after:content-["In-Progress_→_Dev"]': "1" === e.id
          }, {
              'after:content-["Dev_→_Stage"]': "2" === e.id
          }, {
              'after:content-["Stage_→_Prod"]': "3" === e.id
          }),
          children: (0,
          s.jsxs)("div", {
              className: (0,
              c.cn)("relative flex gap-2 rounded-2xl border border-transparent p-4 text-indigo-950 transition duration-500", {
                  "scale-105 border-slate-200 bg-white": e.id === e.state.toString()
              }),
              children: [(0,
              s.jsx)("svg", {
                  width: "29",
                  height: "29",
                  viewBox: "0 0 29 29",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "z-10 shrink-0",
                  children: (0,
                  s.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M17.6228 10.5529C17.5935 10.5233 17.564 10.4938 17.5345 10.4643C14.9728 7.90254 12.2013 6.17544 9.8665 5.39718C7.87892 4.73465 6.61699 4.86477 5.91904 5.22506C5.79891 5.33589 5.68049 5.44963 5.56386 5.56626C5.44782 5.6823 5.33464 5.80011 5.22434 5.91961C4.86393 6.6175 4.73369 7.87949 5.39631 9.86734C6.17458 12.2021 7.90169 14.9736 10.4634 17.5353C10.493 17.5648 10.5225 17.5942 10.5521 17.6235L17.6228 10.5529ZM18.9761 12.028L12.0271 18.9769C14.1208 20.7525 16.2656 21.9804 18.1314 22.6024C20.5399 23.4052 21.8828 23.0442 22.448 22.52L22.4829 22.4852L22.5194 22.4485C23.0435 21.8833 23.4044 20.5404 22.6016 18.1322C21.9797 16.2664 20.7518 14.1216 18.9761 12.028ZM9.13785 19.0378C9.10827 19.0084 9.07872 18.979 9.04921 18.9495C5.82487 15.7252 3.73132 12.0902 3.11693 9.08957C1.10663 13.5092 1.91555 18.8885 5.53808 22.511C5.55918 22.5321 5.58035 22.5531 5.60158 22.574L9.13785 19.0378ZM7.14459 23.8594L10.6085 20.3955C13.4509 22.8356 16.472 24.4108 19.0209 24.904C15.2033 26.6665 10.6575 26.3171 7.14459 23.8594ZM20.3947 10.6094L23.8572 7.14698C26.3143 10.659 26.6641 15.2035 24.903 19.0204C24.4095 16.4718 22.8345 13.4512 20.3947 10.6094ZM22.5717 5.60398L19.037 9.13869C19.0077 9.10911 18.9782 9.07957 18.9487 9.05005C15.7249 5.8262 12.0904 3.73279 9.09 3.11807C13.5092 1.10941 18.8869 1.91874 22.5087 5.54048C22.5298 5.56158 22.5508 5.58275 22.5717 5.60398ZM23.8985 23.8992C23.8773 23.9205 23.8558 23.9414 23.8341 23.962C18.362 29.3667 9.55607 29.3574 4.12386 23.9252C-1.13468 18.6667 -1.31159 10.2468 3.58522 4.74993C3.73138 4.51436 3.90258 4.29719 4.09944 4.10032C4.29649 3.90328 4.51387 3.73196 4.74968 3.58571C10.2466 -1.30909 18.6651 -1.13155 23.9229 4.12627C29.3545 9.55777 29.3645 18.3621 23.9618 23.8343C23.941 23.8562 23.9199 23.8778 23.8985 23.8992Z",
                      fill: "currentColor"
                  })
              }), (0,
              s.jsx)("p", {
                  className: (0,
                  c.cn)("relative z-10 w-min text-xl font-bold before:absolute before:-right-5 before:z-10 before:hidden before:h-4 before:w-4 before:rounded-full before:bg-emerald-400 after:absolute after:-right-5 after:hidden after:h-4 after:w-4 after:animate-ping after:rounded-full after:bg-emerald-300", {
                      "transition before:inline after:inline": e.id === e.state.toString()
                  }),
                  children: e.type
              })]
          })
      })
        , y = ()=>(0,
      s.jsxs)("div", {
          className: "absolute bottom-4 right-4 h-12 w-12 overflow-hidden rounded-full bg-pink-50 text-slate-900 opacity-25 transition-opacity group-hover:opacity-50",
          children: [(0,
          s.jsx)(A.Z, {
              className: "absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:translate-x-[150%]"
          }), (0,
          s.jsx)(A.Z, {
              className: "absolute -left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:translate-x-[150%]"
          })]
      })
        , _ = e=>(0,
      s.jsxs)("button", {
          className: "group relative flex w-full items-center justify-between gap-2 rounded-2xl border border-slate-200 bg-white p-5 text-left text-sm font-bold text-slate-800 shadow-lg shadow-fuchsia-500/30 transition-transform hover:scale-[0.98] active:scale-[0.96] md:text-xl",
          onClick: e.onClick,
          children: [(0,
          s.jsxs)("div", {
              className: "pointer-events-none absolute left-0 h-full w-4",
              children: [(0,
              s.jsxs)("svg", {
                  width: "24",
                  height: "22",
                  viewBox: "0 0 24 22",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: (0,
                  c.cn)("absolute -left-2 -top-2 text-yellow-400 opacity-0", {
                      "animate-[confetti_1s_forwards]": !0 === e.state
                  }),
                  children: [(0,
                  s.jsx)("ellipse", {
                      cx: "12",
                      cy: "11",
                      rx: "6",
                      ry: "11",
                      fill: "currentColor"
                  }), (0,
                  s.jsx)("ellipse", {
                      cx: "12",
                      cy: "11",
                      rx: "5",
                      ry: "12",
                      transform: "rotate(90 12 11)",
                      fill: "currentColor"
                  })]
              }), (0,
              s.jsxs)("svg", {
                  width: "24",
                  height: "22",
                  viewBox: "0 0 24 22",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: (0,
                  c.cn)("absolute left-4 top-4 text-yellow-400 opacity-0 ", {
                      "animate-[confetti_0.6s_forwards]": !0 === e.state
                  }),
                  children: [(0,
                  s.jsx)("ellipse", {
                      cx: "12",
                      cy: "11",
                      rx: "6",
                      ry: "11",
                      fill: "currentColor"
                  }), (0,
                  s.jsx)("ellipse", {
                      cx: "12",
                      cy: "11",
                      rx: "5",
                      ry: "12",
                      transform: "rotate(90 12 11)",
                      fill: "currentColor"
                  })]
              })]
          }), !0 === e.state ? (0,
          s.jsx)("span", {
              children: (0,
              s.jsx)(u.Z, {
                  text: e.aiText,
                  className: "inline-block animate-loadIn text-indigo-500 motion-reduce:animate-none",
                  speed: .2,
                  offset: .02,
                  ease: "cubic-bezier(0.5,0.5,.2,1.5)"
              })
          }) : (0,
          s.jsx)("span", {
              children: e.boringText
          }), (0,
          s.jsx)("div", {
              className: (0,
              c.cn)('relative text-base transition after:absolute after:-top-10 after:left-1/2 after:w-max after:-translate-x-1/2 after:rounded-lg after:bg-slate-700 after:px-3 after:py-1 after:font-bold after:text-white after:opacity-0 after:transition-opacity after:content-["Enhance_\uD83E\uDE84"] hover:scale-110 hover:after:opacity-100', {
                  'after:content-["AI_enhanced_✨"]': !0 === e.state
              }),
              children: (0,
              s.jsxs)("svg", {
                  width: "24",
                  height: "22",
                  viewBox: "0 0 24 22",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: (0,
                  c.cn)("relative text-indigo-400 opacity-0 transition group-hover:animate-[shaker_0.35s_alternate_infinite] group-hover:opacity-50", {
                      "opacity-100 group-hover:animate-none group-hover:opacity-100": !0 === e.state
                  }),
                  children: [(0,
                  s.jsx)("ellipse", {
                      cx: "12",
                      cy: "11",
                      rx: "6",
                      ry: "11",
                      fill: "currentColor"
                  }), (0,
                  s.jsx)("ellipse", {
                      cx: "12",
                      cy: "11",
                      rx: "5",
                      ry: "12",
                      transform: "rotate(90 12 11)",
                      fill: "currentColor"
                  })]
              })
          })]
      })
        , C = e=>(0,
      s.jsx)("div", {
          className: (0,
          c.cn)("relative flex h-full w-full flex-col gap-8 rounded-3xl p-6 md:p-10", e.className),
          children: e.children
      });
      var E = ()=>{
          let[e,t] = (0,
          o.useState)(1)
            , a = ()=>{
              t(e=>3 === e ? 1 : e + 1)
          }
          ;
          (0,
          o.useEffect)(()=>{
              let e = setInterval(a, 4e3);
              return ()=>clearInterval(e)
          }
          , []);
          let[r,l] = (0,
          o.useState)(!1)
            , [i,c] = (0,
          o.useState)(!1)
            , A = e=>{
              1 === e ? l(!r) : 2 === e && c(!i)
          }
          ;
          return (0,
          s.jsx)(d.Z, {})
      }
        , O = {
          src: "media/image.jpg",
          height: 240,
          width: 240,
          blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAAAP/EAB8QAAEEAgIDAAAAAAAAAAAAAAEAAgMRBAUGEiExgf/EABQBAQAAAAAAAAAAAAAAAAAAAAL/xAAYEQEAAwEAAAAAAAAAAAAAAAABAAIRE//aAAwDAQACEQMRAD8AHmWnG7gjx5gYm5Jx3tDa7sI8ECvV19CIiPM2JuuT/9k=",
          blurWidth: 8,
          blurHeight: 8
      }
        , N = {
          src: "/_next/static/media/jake.3d84e83d.jpg",
          height: 240,
          width: 240,
          blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAeEAACAgEFAQAAAAAAAAAAAAABAgAEAxITFCExgf/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAYEQADAQEAAAAAAAAAAAAAAAAAAQIxUf/aAAwDAQACEQMRAD8AlWs3jibLzbKsp0KqqQu2R2APPsREHaT0Upnh/9k=",
          blurWidth: 8,
          blurHeight: 8
      }
        , z = {
          src: "/_next/static/media/mei.48609aea.jpg",
          height: 240,
          width: 240,
          blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAdEAACAgMAAwAAAAAAAAAAAAACAwABBBEhFDFB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAYEQADAQEAAAAAAAAAAAAAAAAAAQMRIf/aAAwDAQACEQMRAD8AmJuOWWbFm5rfOPHIl7JdLoeVeuV8vfvcREMm8KV4z//Z",
          blurWidth: 8,
          blurHeight: 8
      }
        , D = {
          src: "/_next/static/media/nick.de0564af.jpg",
          height: 240,
          width: 240,
          blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAgEAABAgUFAAAAAAAAAAAAAAABAAIDBAUUUQYREjJB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAZEQACAwEAAAAAAAAAAAAAAAAAAQIRcTH/2gAMAwEAAhEDEQA/ALeoTjIeo5IXUFguA3nvkdCQfcHIRERgu6Um7rD/2Q==",
          blurWidth: 8,
          blurHeight: 8
      }
        , k = {
          src: "/_next/static/media/stephen.f919de32.jpg",
          height: 240,
          width: 240,
          blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAAAP/EAB0QAAICAwADAAAAAAAAAAAAAAEDAhEABQYhQWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAh/9oADAMBAAIRAxEAPwBq+p2B7Cbo9YpqCyQIdZVKF2FxFCjXi/nvGMYGO3//2Q==",
          blurWidth: 8,
          blurHeight: 8
      };
      let B = [["text-sky-500"], ["text-blue-500"], ["text-indigo-500"], [], ["text-violet-500"], ["text-purple-500"], ["text-fuchsia-500"], ["text-pink-500"], ["text-fuchsia-500"], ["text-purple-500"], ["text-violet-500"], ["text-indigo-500"], ["text-blue-500"]]
        , Q = e=>(0,
      s.jsxs)("div", {
          className: (0,
          c.cn)("flex w-full rotate-0 flex-col gap-4 rounded-3xl p-6 md:p-8 lg:max-w-md", e.className),
          children: [(0,
          s.jsxs)("div", {
              className: "flex items-center gap-4 border-inherit text-inherit",
              children: [(0,
              s.jsx)("div", {
                  className: (0,
                  c.cn)("relative border-inherit transition", {
                      "after:absolute after:-top-10 after:hidden after:w-max after:rounded-lg after:bg-slate-700 after:px-3 after:py-1 after:font-bold after:text-white after:opacity-0 after:transition-opacity hover:after:opacity-100 md:after:block md:hover:scale-110 lg:after:left-1/2 lg:after:-translate-x-1/2": e.easterEgg
                  }, e.easterEgg),
                  children: (0,
                  s.jsx)("div", {
                      className: "relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-[3px] border-inherit",
                      children: (0,
                      s.jsx)(l(), {
                          src: e.image,
                          alt: e.customer,
                          fill: !0
                      })
                  })
              }), (0,
              s.jsxs)("div", {
                  children: [(0,
                  s.jsx)("h3", {
                      className: "text-2xl font-bold text-inherit",
                      children: e.customer
                  }), (0,
                  s.jsx)("h4", {
                      className: "text-xl font-medium text-inherit opacity-80",
                      children: e.company
                  })]
              })]
          }), (0,
          s.jsx)("p", {
              className: 'relative text-xl font-medium opacity-80 before:absolute before:-left-2  before:content-["“"] after:content-["”"]',
              children: e.quote
          })]
      });
      var I = ()=>(0,
      s.jsxs)(d.Z, {});
      let S = e=>(0,
      s.jsx)("svg", {
          width: "52",
          height: "52",
          viewBox: "0 0 52 52",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: e.className,
          children: (0,
          s.jsx)("path", {
              d: "M12.9683 16.4794C5.21439 18.3832 0 21.934 0 26C0 30.066 5.21439 33.6168 12.9683 35.5206C15.014 45.1704 20.0776 52 26 52C31.9224 52 36.986 45.1704 39.0317 35.5206C46.7856 33.6168 52 30.066 52 26C52 21.934 46.7856 18.3832 39.0317 16.4794C36.986 6.8296 31.9224 0 26 0C20.0776 0 15.014 6.82959 12.9683 16.4794Z",
              fill: "currentColor"
          })
      });
      var M = ()=>(0,
      s.jsxs)("section", {
          className: "relative -mt-24 flex w-full items-center justify-center overflow-hidden bg-blue-600 px-4 pb-[400px] pt-52 before:absolute before:top-1/3 before:h-[140%] before:w-[140%] before:rounded-[100%] before:bg-radial before:blur-xl before:content-[''] after:absolute after:bottom-0 after:h-52 after:w-full after:bg-gradient-to-t after:from-white md:px-10",
          children: [(0,
          s.jsx)("div", {
              className: "absolute h-full w-full bg-grain"
          }), (0,
          s.jsxs)("div", {
              className: "relative w-full max-w-4xl text-center text-white",
              children: [(0,
              s.jsx)("div", {
                  className: "absolute -top-10 left-0 animate-loadIn motion-reduce:animate-none",
                  children: (0,
                  s.jsx)(S, {
                      className: "w-11 animate-[shaker_0.8s_infinite_alternate] text-amber-300 md:w-auto"
                  })
              }), (0,
              s.jsx)("div", {
                  className: "absolute -top-16 right-0 animate-loadIn motion-reduce:animate-none md:-top-14",
                  children: (0,
                  s.jsx)(S, {
                      className: "animate-[shaker_0.8s_infinite_alternate-reverse] text-amber-300"
                  })
              }), (0,
              s.jsx)("div", {
                  className: "absolute -left-2 top-0 animate-[loadIn_0.3s_forwards] motion-reduce:animate-none md:top-4",
                  children: (0,
                  s.jsx)(S, {
                      className: "w-6 animate-[shaker_1.2s_infinite_alternate-reverse] text-amber-300"
                  })
              }), (0,
              s.jsx)("div", {
                  className: "absolute -right-2 -top-2 animate-[loadIn_0.3s_forwards] motion-reduce:animate-none md:top-4",
                  children: (0,
                  s.jsx)(S, {
                      className: "w-6 animate-[shaker_1.4s_infinite_alternate] text-amber-300"
                  })
              }), (0,
              s.jsxs)("h1", {
                  className: "font-display text-5xl font-black uppercase md:text-5xl",
                  children: [(0,
                  s.jsx)(u.Z, {
                      text: "Hung",
                      className: "inline-block animate-loadIn text-7xl motion-reduce:animate-none md:hidden md:animate-none",
                      speed: .2,
                      offset: .05,
                      ease: "cubic-bezier(0.5,0.5,.2,1.5)"
                  }), (0,
                  s.jsx)("span", {
                      className: "block text-5xl",
                      children: (0,
                      s.jsx)(u.Z, {
                          text: "Vuong Concert",
                          className: "inline-block animate-loadIn text-5xl motion-reduce:animate-none md:hidden md:animate-none",
                          speed: .2,
                          offset: .05,
                          ease: "cubic-bezier(0.5,0.5,.2,1.5)"
                      })
                  }), (0,
                  s.jsx)(u.Z, {
                      text: "Hung Vuong Concert",
                      className: "hidden md:inline-block md:animate-loadIn md:motion-reduce:animate-none",
                      speed: .2,
                      offset: .05,
                      ease: "cubic-bezier(0.5,0.5,.2,1.5)"
                  }), (0,
                  s.jsx)("span", {
                      className: "block break-words text-6xl md:text-8xl lg:-mt-4 lg:text-[144px]",
                      children: (0,
                      s.jsx)(u.Z, {
                          text: "Delight",
                          className: "inline-block animate-loadIn motion-reduce:animate-none",
                          speed: .2,
                          offset: .08,
                          ease: "cubic-bezier(0.5,0.5,.2,1.5)"
                      })
                  })]
              }), (0,
              s.jsx)("p", {
                  className: "mx-auto mt-4 w-full max-w-sm animate-loadIn text-base font-bold motion-reduce:animate-none md:max-w-none lg:text-xl",
                  children: "Hùng Vương Concert là chương trình ca nhạc và một chuỗi các hoạt động tình nguyện với mục đích vận động, quyên góp từ thiện, được tổ chức hằng năm tại trường THPT chuyên Hùng Vương, tỉnh Bình Dương."
              })]
          })]
      })
        , P = {
          src: "material/armory-logo.ec67c5e6.svg",
          height: 40,
          width: 148,
          blurWidth: 0,
          blurHeight: 0
      }
        , L = {
          src: "material/code-combat-logo.17cb9da5.svg",
          height: 34,
          width: 153,
          blurWidth: 0,
          blurHeight: 0
      }
        , H = {
          src: "material/jam.8d925373.svg",
          height: 48,
          width: 117,
          blurWidth: 0,
          blurHeight: 0
      }
        , R = {
          src: "material/kong.44ea9500.svg",
          height: 46,
          width: 138,
          blurWidth: 0,
          blurHeight: 0
      }
        , T = {
          src: "material/monte-carlo-logo.d856ff4f.svg",
          height: 32,
          width: 211,
          blurWidth: 0,
          blurHeight: 0
      }
        , W = {
          src: "material/orb.c2a0ba4d.svg",
          height: 46,
          width: 113,
          blurWidth: 0,
          blurHeight: 0
      }
        , F = {
          src: "material/patch-logo.4b3a2850.svg",
          height: 36,
          width: 142,
          blurWidth: 0,
          blurHeight: 0
      }
        , J = {
          src: "material/popsql-logo.11388509.svg",
          height: 32,
          width: 136,
          blurWidth: 0,
          blurHeight: 0
      };
      let Z = e=>{
          let {children: t} = e;
          return (0,
          s.jsx)("li", {
              className: "leading-[0px] !text-slate-200",
              children: t
          })
      }
        , U = ()=>(0,
      s.jsxs)("ul", {
          className: "flex min-w-full flex-shrink-0 animate-[marqueeScroll_30s_linear_infinite_forwards] content-around items-center gap-20 md:animate-[marqueeScroll_60s_linear_infinite_forwards]",
          children: [(0,
          s.jsx)(Z, {
              children: (0,
              s.jsx)(l(), {
                  src: P,
                  alt: "Armory"
              })
          }), (0,
          s.jsx)(Z, {
              children: (0,
              s.jsx)(l(), {
                  src: L,
                  alt: "Code Combat"
              })
          }), (0,
          s.jsx)(Z, {
              children: (0,
              s.jsx)(l(), {
                  src: W,
                  alt: "Orb"
              })
          }), (0,
          s.jsx)(Z, {
              children: (0,
              s.jsx)(l(), {
                  src: R,
                  alt: "Kong"
              })
          }), (0,
          s.jsx)(Z, {
              children: (0,
              s.jsx)(l(), {
                  src: J,
                  alt: "PopSQL"
              })
          }), (0,
          s.jsx)(Z, {
              children: (0,
              s.jsx)(l(), {
                  src: H,
                  alt: "Jam"
              })
          }), (0,
          s.jsx)(Z, {
              children: (0,
              s.jsx)(l(), {
                  src: F,
                  alt: "Patch"
              })
          }), (0,
          s.jsx)(Z, {
              children: (0,
              s.jsx)(l(), {
                  src: T,
                  alt: "Monte Carlo"
              })
          })]
      });
      var K = ()=>(0,
      s.jsx)("section", {
          className: "-mt-64 w-full px-4 md:px-10",
          children: (0,
          s.jsxs)("div", {
              className: "marquee mx-auto flex max-w-5xl select-none gap-20 overflow-x-hidden",
              children: [(0,
              s.jsx)(U, {}), (0,
              s.jsx)(U, {
                  "aria-hidden": "true"
              })]
          })
      })
        , V = a(5152)
        , q = a.n(V);
      let Y = q()(()=>Promise.all([a.e(4), a.e(676)]).then(a.bind(a, 2676)), {
          loadableGenerated: {
              webpack: ()=>[2676]
          },
          ssr: !1
      })
        , G = e=>(0,
      s.jsxs)("button", {
          className: (0,
          c.cn)("w-full rounded-3xl px-8 py-6 text-left transition hover:bg-slate-100", {
              "bg-slate-100": e.active === e.id
          }),
          onClick: e.onClick,
          id: e.id.toString(),
          children: [(0,
          s.jsx)("h2", {
              className: "mb-2 text-xl font-bold text-slate-800",
              children: e.title
          }), (0,
          s.jsx)("p", {
              className: "text-slate-600",
              children: e.body
          })]
      });
      var X = ()=>{
          let e = [0, 9, 26]
            , t = (0,
          o.useRef)(null)
            , [a,r] = (0,
          o.useState)(0)
            , l = a=>{
              var s, l, i;
              null === (l = t.current) || void 0 === l || null === (s = l.seekTo) || void 0 === s || s.call(l, null !== (i = e[a]) && void 0 !== i ? i : 0, "seconds"),
              r(a)
          }
          ;
          return (0,
          s.jsxs)(d.Z, {})
      }
        , $ = ()=>(0,
      s.jsxs)("main", {
          children: [(0,
          s.jsx)(M, {}), (0,
          s.jsx)(K, {}), (0,
          s.jsx)(X, {}), (0,
          s.jsx)(E, {}), (0,
          s.jsx)(I, {})]
      })
  },
  5152: function(e, t, a) {
      e.exports = a(1221)
  }
}, function(e) {
  e.O(0, [675, 774, 888, 179], function() {
      return e(e.s = 8312)
  }),
  _N_E = e.O()
}
]);
