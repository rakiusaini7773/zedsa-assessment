// /*!
//  * Webflow: Front-end site library
//  * @license MIT
//  * Inline scripts may access the api using an async handler:
//  *   var Webflow = Webflow || [];
//  *   Webflow.push(readyFunction);
//  */
// ! function(t) {
//     var e = {};

//     function n(r) {
//         if (e[r]) return e[r].exports;
//         var i = e[r] = {
//             i: r,
//             l: !1,
//             exports: {}
//         };
//         return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
//     }
//     n.m = t, n.c = e, n.d = function(t, e, r) {
//         n.o(t, e) || Object.defineProperty(t, e, {
//             enumerable: !0,
//             get: r
//         })
//     }, n.r = function(t) {
//         "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
//             value: "Module"
//         }), Object.defineProperty(t, "__esModule", {
//             value: !0
//         })
//     }, n.t = function(t, e) {
//         if (1 & e && (t = n(t)), 8 & e) return t;
//         if (4 & e && "object" == typeof t && t && t.__esModule) return t;
//         var r = Object.create(null);
//         if (n.r(r), Object.defineProperty(r, "default", {
//                 enumerable: !0,
//                 value: t
//             }), 2 & e && "string" != typeof t)
//             for (var i in t) n.d(r, i, function(e) {
//                 return t[e]
//             }.bind(null, i));
//         return r
//     }, n.n = function(t) {
//         var e = t && t.__esModule ? function() {
//             return t.default
//         } : function() {
//             return t
//         };
//         return n.d(e, "a", e), e
//     }, n.o = function(t, e) {
//         return Object.prototype.hasOwnProperty.call(t, e)
//     }, n.p = "", n(n.s = 98)
// }([function(t, e) {
//     t.exports = function(t) {
//         return t && t.__esModule ? t : {
//             default: t
//         }
//     }
// }, function(t, e) {
//     var n = Array.isArray;
//     t.exports = n
// }, function(t, e, n) {
//     "use strict";
//     var r = n(16);
//     Object.defineProperty(e, "__esModule", {
//         value: !0
//     }), e.IX2VanillaUtils = e.IX2VanillaPlugins = e.IX2ElementsReducer = e.IX2EngineConstants = e.IX2EngineItemTypes = e.IX2EngineEventTypes = e.IX2EngineActionTypes = e.IX2EasingUtils = e.IX2Easings = e.IX2BrowserSupport = void 0;
//     var i = r(n(30));
//     e.IX2BrowserSupport = i;
//     var o = r(n(83));
//     e.IX2Easings = o;
//     var a = r(n(84));
//     e.IX2EasingUtils = a;
//     var u = r(n(85));
//     e.IX2EngineActionTypes = u;
//     var c = r(n(86));
//     e.IX2EngineEventTypes = c;
//     var s = r(n(47));
//     e.IX2EngineItemTypes = s;
//     var f = r(n(48));
//     e.IX2EngineConstants = f;
//     var l = r(n(185));
//     e.IX2ElementsReducer = l;
//     var d = r(n(87));
//     e.IX2VanillaPlugins = d;
//     var p = r(n(187));
//     e.IX2VanillaUtils = p
// }, function(t, e, n) {
//     var r = n(65),
//         i = "object" == typeof self && self && self.Object === Object && self,
//         o = r || i || Function("return this")();
//     t.exports = o
// }, function(t, e) {
//     t.exports = function(t) {
//         var e = typeof t;
//         return null != t && ("object" == e || "function" == e)
//     }
// }, function(t, e, n) {
//     var r = n(119),
//         i = n(173),
//         o = n(44),
//         a = n(1),
//         u = n(180);
//     t.exports = function(t) {
//         return "function" == typeof t ? t : null == t ? o : "object" == typeof t ? a(t) ? i(t[0], t[1]) : r(t) : u(t)
//     }
// }, function(t, e, n) {
//     var r = n(131),
//         i = n(136);
//     t.exports = function(t, e) {
//         var n = i(t, e);
//         return r(n) ? n : void 0
//     }
// }, function(t, e) {
//     t.exports = function(t) {
//         return null != t && "object" == typeof t
//     }
// }, function(t, e, n) {
//     "use strict";
//     var r = {},
//         i = {},
//         o = [],
//         a = window.Webflow || [],
//         u = window.jQuery,
//         c = u(window),
//         s = u(document),
//         f = u.isFunction,
//         l = r._ = n(100),
//         d = r.tram = n(53) && u.tram,
//         p = !1,
//         v = !1;

//     function E(t) {
//         r.env() && (f(t.design) && c.on("__wf_design", t.design), f(t.preview) && c.on("__wf_preview", t.preview)), f(t.destroy) && c.on("__wf_destroy", t.destroy), t.ready && f(t.ready) && function(t) {
//             if (p) return void t.ready();
//             if (l.contains(o, t.ready)) return;
//             o.push(t.ready)
//         }(t)
//     }

//     function h(t) {
//         f(t.design) && c.off("__wf_design", t.design), f(t.preview) && c.off("__wf_preview", t.preview), f(t.destroy) && c.off("__wf_destroy", t.destroy), t.ready && f(t.ready) && function(t) {
//             o = l.filter(o, function(e) {
//                 return e !== t.ready
//             })
//         }(t)
//     }
//     d.config.hideBackface = !1, d.config.keepInherited = !0, r.define = function(t, e, n) {
//         i[t] && h(i[t]);
//         var r = i[t] = e(u, l, n) || {};
//         return E(r), r
//     }, r.require = function(t) {
//         return i[t]
//     }, r.push = function(t) {
//         p ? f(t) && t() : a.push(t)
//     }, r.env = function(t) {
//         var e = window.__wf_design,
//             n = void 0 !== e;
//         return t ? "design" === t ? n && e : "preview" === t ? n && !e : "slug" === t ? n && window.__wf_slug : "editor" === t ? window.WebflowEditor : "test" === t ? window.__wf_test : "frame" === t ? window !== window.top : void 0 : n
//     };
//     var _, g = navigator.userAgent.toLowerCase(),
//         I = r.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
//         y = r.env.chrome = /chrome/.test(g) && /Google/.test(navigator.vendor) && parseInt(g.match(/chrome\/(\d+)\./)[1], 10),
//         T = r.env.ios = /(ipod|iphone|ipad)/.test(g);
//     r.env.safari = /safari/.test(g) && !y && !T, I && s.on("touchstart mousedown", function(t) {
//         _ = t.target
//     }), r.validClick = I ? function(t) {
//         return t === _ || u.contains(t, _)
//     } : function() {
//         return !0
//     };
//     var m, O = "resize.webflow orientationchange.webflow load.webflow";

//     function S(t, e) {
//         var n = [],
//             r = {};
//         return r.up = l.throttle(function(t) {
//             l.each(n, function(e) {
//                 e(t)
//             })
//         }), t && e && t.on(e, r.up), r.on = function(t) {
//             "function" == typeof t && (l.contains(n, t) || n.push(t))
//         }, r.off = function(t) {
//             n = arguments.length ? l.filter(n, function(e) {
//                 return e !== t
//             }) : []
//         }, r
//     }

//     function A(t) {
//         f(t) && t()
//     }

//     function b() {
//         m && (m.reject(), c.off("load", m.resolve)), m = new u.Deferred, c.on("load", m.resolve)
//     }
//     r.resize = S(c, O), r.scroll = S(c, "scroll.webflow resize.webflow orientationchange.webflow load.webflow"), r.redraw = S(), r.location = function(t) {
//         window.location = t
//     }, r.env() && (r.location = function() {}), r.ready = function() {
//         p = !0, v ? (v = !1, l.each(i, E)) : l.each(o, A), l.each(a, A), r.resize.up()
//     }, r.load = function(t) {
//         m.then(t)
//     }, r.destroy = function(t) {
//         t = t || {}, v = !0, c.triggerHandler("__wf_destroy"), null != t.domready && (p = t.domready), l.each(i, h), r.resize.off(), r.scroll.off(), r.redraw.off(), o = [], a = [], "pending" === m.state() && b()
//     }, u(r.ready), b(), t.exports = window.Webflow = r
// }, function(t, e, n) {
//     var r = n(11),
//         i = n(132),
//         o = n(133),
//         a = "[object Null]",
//         u = "[object Undefined]",
//         c = r ? r.toStringTag : void 0;
//     t.exports = function(t) {
//         return null == t ? void 0 === t ? u : a : c && c in Object(t) ? i(t) : o(t)
//     }
// }, function(t, e, n) {
//     var r = n(64),
//         i = n(38);
//     t.exports = function(t) {
//         return null != t && i(t.length) && !r(t)
//     }
// }, function(t, e, n) {
//     var r = n(3).Symbol;
//     t.exports = r
// }, function(t, e, n) {
//     var r = n(25),
//         i = 1 / 0;
//     t.exports = function(t) {
//         if ("string" == typeof t || r(t)) return t;
//         var e = t + "";
//         return "0" == e && 1 / t == -i ? "-0" : e
//     }
// }, function(t, e, n) {
//     "use strict";
//     Object.defineProperty(e, "__esModule", {
//         value: !0
//     });
//     var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
//         return typeof t
//     } : function(t) {
//         return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
//     };
//     e.clone = c, e.addLast = l, e.addFirst = d, e.removeLast = p, e.removeFirst = v, e.insert = E, e.removeAt = h, e.replaceAt = _, e.getIn = g, e.set = I, e.setIn = y, e.update = T, e.updateIn = m, e.merge = O, e.mergeDeep = S, e.mergeIn = A, e.omit = b, e.addDefaults = R;
//     /*!
//      * Timm
//      *
//      * Immutability helpers with fast reads and acceptable writes.
//      *
//      * @copyright Guillermo Grau Panea 2016
//      * @license MIT
//      */
//     var i = "INVALID_ARGS";

//     function o(t) {
//         throw new Error(t)
//     }

//     function a(t) {
//         var e = Object.keys(t);
//         return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e
//     }
//     var u = {}.hasOwnProperty;

//     function c(t) {
//         if (Array.isArray(t)) return t.slice();
//         for (var e = a(t), n = {}, r = 0; r < e.length; r++) {
//             var i = e[r];
//             n[i] = t[i]
//         }
//         return n
//     }

//     function s(t, e, n) {
//         var r = n;
//         null == r && o(i);
//         for (var u = !1, l = arguments.length, d = Array(l > 3 ? l - 3 : 0), p = 3; p < l; p++) d[p - 3] = arguments[p];
//         for (var v = 0; v < d.length; v++) {
//             var E = d[v];
//             if (null != E) {
//                 var h = a(E);
//                 if (h.length)
//                     for (var _ = 0; _ <= h.length; _++) {
//                         var g = h[_];
//                         if (!t || void 0 === r[g]) {
//                             var I = E[g];
//                             e && f(r[g]) && f(I) && (I = s(t, e, r[g], I)), void 0 !== I && I !== r[g] && (u || (u = !0, r = c(r)), r[g] = I)
//                         }
//                     }
//             }
//         }
//         return r
//     }

//     function f(t) {
//         var e = void 0 === t ? "undefined" : r(t);
//         return null != t && ("object" === e || "function" === e)
//     }

//     function l(t, e) {
//         return Array.isArray(e) ? t.concat(e) : t.concat([e])
//     }

//     function d(t, e) {
//         return Array.isArray(e) ? e.concat(t) : [e].concat(t)
//     }

//     function p(t) {
//         return t.length ? t.slice(0, t.length - 1) : t
//     }

//     function v(t) {
//         return t.length ? t.slice(1) : t
//     }

//     function E(t, e, n) {
//         return t.slice(0, e).concat(Array.isArray(n) ? n : [n]).concat(t.slice(e))
//     }

//     function h(t, e) {
//         return e >= t.length || e < 0 ? t : t.slice(0, e).concat(t.slice(e + 1))
//     }

//     function _(t, e, n) {
//         if (t[e] === n) return t;
//         for (var r = t.length, i = Array(r), o = 0; o < r; o++) i[o] = t[o];
//         return i[e] = n, i
//     }

//     function g(t, e) {
//         if (!Array.isArray(e) && o(i), null != t) {
//             for (var n = t, r = 0; r < e.length; r++) {
//                 var a = e[r];
//                 if (void 0 === (n = null != n ? n[a] : void 0)) return n
//             }
//             return n
//         }
//     }

//     function I(t, e, n) {
//         var r = null == t ? "number" == typeof e ? [] : {} : t;
//         if (r[e] === n) return r;
//         var i = c(r);
//         return i[e] = n, i
//     }

//     function y(t, e, n) {
//         return e.length ? function t(e, n, r, i) {
//             var o = void 0,
//                 a = n[i];
//             o = i === n.length - 1 ? r : t(f(e) && f(e[a]) ? e[a] : "number" == typeof n[i + 1] ? [] : {}, n, r, i + 1);
//             return I(e, a, o)
//         }(t, e, n, 0) : n
//     }

//     function T(t, e, n) {
//         return I(t, e, n(null == t ? void 0 : t[e]))
//     }

//     function m(t, e, n) {
//         return y(t, e, n(g(t, e)))
//     }

//     function O(t, e, n, r, i, o) {
//         for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
//         return u.length ? s.call.apply(s, [null, !1, !1, t, e, n, r, i, o].concat(u)) : s(!1, !1, t, e, n, r, i, o)
//     }

//     function S(t, e, n, r, i, o) {
//         for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
//         return u.length ? s.call.apply(s, [null, !1, !0, t, e, n, r, i, o].concat(u)) : s(!1, !0, t, e, n, r, i, o)
//     }

//     function A(t, e, n, r, i, o, a) {
//         var u = g(t, e);
//         null == u && (u = {});
//         for (var c = arguments.length, f = Array(c > 7 ? c - 7 : 0), l = 7; l < c; l++) f[l - 7] = arguments[l];
//         return y(t, e, f.length ? s.call.apply(s, [null, !1, !1, u, n, r, i, o, a].concat(f)) : s(!1, !1, u, n, r, i, o, a))
//     }

//     function b(t, e) {
//         for (var n = Array.isArray(e) ? e : [e], r = !1, i = 0; i < n.length; i++)
//             if (u.call(t, n[i])) {
//                 r = !0;
//                 break
//             }
//         if (!r) return t;
//         for (var o = {}, c = a(t), s = 0; s < c.length; s++) {
//             var f = c[s];
//             n.indexOf(f) >= 0 || (o[f] = t[f])
//         }
//         return o
//     }

//     function R(t, e, n, r, i, o) {
//         for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
//         return u.length ? s.call.apply(s, [null, !0, !1, t, e, n, r, i, o].concat(u)) : s(!0, !1, t, e, n, r, i, o)
//     }
//     var w = {
//         clone: c,
//         addLast: l,
//         addFirst: d,
//         removeLast: p,
//         removeFirst: v,
//         insert: E,
//         removeAt: h,
//         replaceAt: _,
//         getIn: g,
//         set: I,
//         setIn: y,
//         update: T,
//         updateIn: m,
//         merge: O,
//         mergeDeep: S,
//         mergeIn: A,
//         omit: b,
//         addDefaults: R
//     };
//     e.default = w
// }, function(t, e) {
//     t.exports = function(t, e, n) {
//         return e in t ? Object.defineProperty(t, e, {
//             value: n,
//             enumerable: !0,
//             configurable: !0,
//             writable: !0
//         }) : t[e] = n, t
//     }
// }, function(t, e) {
//     function n(t) {
//         return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
//             return typeof t
//         } : function(t) {
//             return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
//         })(t)
//     }

//     function r(e) {
//         return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? t.exports = r = function(t) {
//             return n(t)
//         } : t.exports = r = function(t) {
//             return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t)
//         }, r(e)
//     }
//     t.exports = r
// }, function(t, e) {
//     t.exports = function(t) {
//         if (t && t.__esModule) return t;
//         var e = {};
//         if (null != t)
//             for (var n in t)
//                 if (Object.prototype.hasOwnProperty.call(t, n)) {
//                     var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
//                     r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n]
//                 }
//         return e.default = t, e
//     }
// }, function(t, e, n) {
//     var r = n(121),
//         i = n(122),
//         o = n(123),
//         a = n(124),
//         u = n(125);

//     function c(t) {
//         var e = -1,
//             n = null == t ? 0 : t.length;
//         for (this.clear(); ++e < n;) {
//             var r = t[e];
//             this.set(r[0], r[1])
//         }
//     }
//     c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
// }, function(t, e, n) {
//     var r = n(31);
//     t.exports = function(t, e) {
//         for (var n = t.length; n--;)
//             if (r(t[n][0], e)) return n;
//         return -1
//     }
// }, function(t, e, n) {
//     var r = n(6)(Object, "create");
//     t.exports = r
// }, function(t, e, n) {
//     var r = n(145);
//     t.exports = function(t, e) {
//         var n = t.__data__;
//         return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
//     }
// }, function(t, e, n) {
//     var r = n(72),
//         i = n(39),
//         o = n(10);
//     t.exports = function(t) {
//         return o(t) ? r(t) : i(t)
//     }
// }, function(t, e, n) {
//     var r = n(163),
//         i = n(7),
//         o = Object.prototype,
//         a = o.hasOwnProperty,
//         u = o.propertyIsEnumerable,
//         c = r(function() {
//             return arguments
//         }()) ? r : function(t) {
//             return i(t) && a.call(t, "callee") && !u.call(t, "callee")
//         };
//     t.exports = c
// }, function(t, e, n) {
//     var r = n(42);
//     t.exports = function(t, e, n) {
//         var i = null == t ? void 0 : r(t, e);
//         return void 0 === i ? n : i
//     }
// }, function(t, e, n) {
//     var r = n(1),
//         i = n(43),
//         o = n(174),
//         a = n(78);
//     t.exports = function(t, e) {
//         return r(t) ? t : i(t, e) ? [t] : o(a(t))
//     }
// }, function(t, e, n) {
//     var r = n(9),
//         i = n(7),
//         o = "[object Symbol]";
//     t.exports = function(t) {
//         return "symbol" == typeof t || i(t) && r(t) == o
//     }
// }, function(t, e, n) {
//     var r = n(14);
//     t.exports = function(t) {
//         for (var e = 1; e < arguments.length; e++) {
//             var n = null != arguments[e] ? arguments[e] : {},
//                 i = Object.keys(n);
//             "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
//                 return Object.getOwnPropertyDescriptor(n, t).enumerable
//             }))), i.forEach(function(e) {
//                 r(t, e, n[e])
//             })
//         }
//         return t
//     }
// }, function(t, e, n) {
//     "use strict";
//     n.r(e), n.d(e, "ActionTypes", function() {
//         return o
//     }), n.d(e, "default", function() {
//         return a
//     });
//     var r = n(55),
//         i = n(114),
//         o = {
//             INIT: "@@redux/INIT"
//         };

//     function a(t, e, n) {
//         var u;
//         if ("function" == typeof e && void 0 === n && (n = e, e = void 0), void 0 !== n) {
//             if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
//             return n(a)(t, e)
//         }
//         if ("function" != typeof t) throw new Error("Expected the reducer to be a function.");
//         var c = t,
//             s = e,
//             f = [],
//             l = f,
//             d = !1;

//         function p() {
//             l === f && (l = f.slice())
//         }

//         function v() {
//             return s
//         }

//         function E(t) {
//             if ("function" != typeof t) throw new Error("Expected listener to be a function.");
//             var e = !0;
//             return p(), l.push(t),
//                 function() {
//                     if (e) {
//                         e = !1, p();
//                         var n = l.indexOf(t);
//                         l.splice(n, 1)
//                     }
//                 }
//         }

//         function h(t) {
//             if (!Object(r.default)(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
//             if (void 0 === t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
//             if (d) throw new Error("Reducers may not dispatch actions.");
//             try {
//                 d = !0, s = c(s, t)
//             } finally {
//                 d = !1
//             }
//             for (var e = f = l, n = 0; n < e.length; n++) e[n]();
//             return t
//         }
//         return h({
//             type: o.INIT
//         }), (u = {
//             dispatch: h,
//             subscribe: E,
//             getState: v,
//             replaceReducer: function(t) {
//                 if ("function" != typeof t) throw new Error("Expected the nextReducer to be a function.");
//                 c = t, h({
//                     type: o.INIT
//                 })
//             }
//         })[i.default] = function() {
//             var t, e = E;
//             return (t = {
//                 subscribe: function(t) {
//                     if ("object" != typeof t) throw new TypeError("Expected the observer to be an object.");

//                     function n() {
//                         t.next && t.next(v())
//                     }
//                     return n(), {
//                         unsubscribe: e(n)
//                     }
//                 }
//             })[i.default] = function() {
//                 return this
//             }, t
//         }, u
//     }
// }, function(t, e) {
//     var n;
//     n = function() {
//         return this
//     }();
//     try {
//         n = n || new Function("return this")()
//     } catch (t) {
//         "object" == typeof window && (n = window)
//     }
//     t.exports = n
// }, function(t, e, n) {
//     "use strict";

//     function r() {
//         for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
//         if (0 === e.length) return function(t) {
//             return t
//         };
//         if (1 === e.length) return e[0];
//         var r = e[e.length - 1],
//             i = e.slice(0, -1);
//         return function() {
//             return i.reduceRight(function(t, e) {
//                 return e(t)
//             }, r.apply(void 0, arguments))
//         }
//     }
//     n.r(e), n.d(e, "default", function() {
//         return r
//     })
// }, function(t, e, n) {
//     "use strict";
//     var r = n(0);
//     Object.defineProperty(e, "__esModule", {
//         value: !0
//     }), e.TRANSFORM_STYLE_PREFIXED = e.TRANSFORM_PREFIXED = e.FLEX_PREFIXED = e.ELEMENT_MATCHES = e.withBrowser = e.IS_BROWSER_ENV = void 0;
//     var i = r(n(61)),
//         o = "undefined" != typeof window;
//     e.IS_BROWSER_ENV = o;
//     var a = function(t, e) {
//         return o ? t() : e
//     };
//     e.withBrowser = a;
//     var u = a(function() {
//         return (0, i.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], function(t) {
//             return t in Element.prototype
//         })
//     });
//     e.ELEMENT_MATCHES = u;
//     var c = a(function() {
//         var t = document.createElement("i"),
//             e = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
//         try {
//             for (var n = e.length, r = 0; r < n; r++) {
//                 var i = e[r];
//                 if (t.style.display = i, t.style.display === i) return i
//             }
//             return ""
//         } catch (t) {
//             return ""
//         }
//     }, "flex");
//     e.FLEX_PREFIXED = c;
//     var s = a(function() {
//         var t = document.createElement("i");
//         if (null == t.style.transform)
//             for (var e = ["Webkit", "Moz", "ms"], n = e.length, r = 0; r < n; r++) {
//                 var i = e[r] + "Transform";
//                 if (void 0 !== t.style[i]) return i
//             }
//         return "transform"
//     }, "transform");
//     e.TRANSFORM_PREFIXED = s;
//     var f = s.split("transform")[0],
//         l = f ? f + "TransformStyle" : "transformStyle";
//     e.TRANSFORM_STYLE_PREFIXED = l
// }, function(t, e) {
//     t.exports = function(t, e) {
//         return t === e || t != t && e != e
//     }
// }, function(t, e, n) {
//     var r = n(6)(n(3), "Map");
//     t.exports = r
// }, function(t, e, n) {
//     var r = n(137),
//         i = n(144),
//         o = n(146),
//         a = n(147),
//         u = n(148);

//     function c(t) {
//         var e = -1,
//             n = null == t ? 0 : t.length;
//         for (this.clear(); ++e < n;) {
//             var r = t[e];
//             this.set(r[0], r[1])
//         }
//     }
//     c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
// }, function(t, e) {
//     t.exports = function(t, e) {
//         for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
//         return t
//     }
// }, function(t, e, n) {
//     (function(t) {
//         var r = n(3),
//             i = n(164),
//             o = e && !e.nodeType && e,
//             a = o && "object" == typeof t && t && !t.nodeType && t,
//             u = a && a.exports === o ? r.Buffer : void 0,
//             c = (u ? u.isBuffer : void 0) || i;
//         t.exports = c
//     }).call(this, n(73)(t))
// }, function(t, e) {
//     var n = 9007199254740991,
//         r = /^(?:0|[1-9]\d*)$/;
//     t.exports = function(t, e) {
//         var i = typeof t;
//         return !!(e = null == e ? n : e) && ("number" == i || "symbol" != i && r.test(t)) && t > -1 && t % 1 == 0 && t < e
//     }
// }, function(t, e, n) {
//     var r = n(165),
//         i = n(166),
//         o = n(167),
//         a = o && o.isTypedArray,
//         u = a ? i(a) : r;
//     t.exports = u
// }, function(t, e) {
//     var n = 9007199254740991;
//     t.exports = function(t) {
//         return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n
//     }
// }, function(t, e, n) {
//     var r = n(40),
//         i = n(168),
//         o = Object.prototype.hasOwnProperty;
//     t.exports = function(t) {
//         if (!r(t)) return i(t);
//         var e = [];
//         for (var n in Object(t)) o.call(t, n) && "constructor" != n && e.push(n);
//         return e
//     }
// }, function(t, e) {
//     var n = Object.prototype;
//     t.exports = function(t) {
//         var e = t && t.constructor;
//         return t === ("function" == typeof e && e.prototype || n)
//     }
// }, function(t, e, n) {
//     var r = n(169),
//         i = n(32),
//         o = n(170),
//         a = n(171),
//         u = n(75),
//         c = n(9),
//         s = n(66),
//         f = s(r),
//         l = s(i),
//         d = s(o),
//         p = s(a),
//         v = s(u),
//         E = c;
//     (r && "[object DataView]" != E(new r(new ArrayBuffer(1))) || i && "[object Map]" != E(new i) || o && "[object Promise]" != E(o.resolve()) || a && "[object Set]" != E(new a) || u && "[object WeakMap]" != E(new u)) && (E = function(t) {
//         var e = c(t),
//             n = "[object Object]" == e ? t.constructor : void 0,
//             r = n ? s(n) : "";
//         if (r) switch (r) {
//             case f:
//                 return "[object DataView]";
//             case l:
//                 return "[object Map]";
//             case d:
//                 return "[object Promise]";
//             case p:
//                 return "[object Set]";
//             case v:
//                 return "[object WeakMap]"
//         }
//         return e
//     }), t.exports = E
// }, function(t, e, n) {
//     var r = n(24),
//         i = n(12);
//     t.exports = function(t, e) {
//         for (var n = 0, o = (e = r(e, t)).length; null != t && n < o;) t = t[i(e[n++])];
//         return n && n == o ? t : void 0
//     }
// }, function(t, e, n) {
//     var r = n(1),
//         i = n(25),
//         o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
//         a = /^\w*$/;
//     t.exports = function(t, e) {
//         if (r(t)) return !1;
//         var n = typeof t;
//         return !("number" != n && "symbol" != n && "boolean" != n && null != t && !i(t)) || a.test(t) || !o.test(t) || null != e && t in Object(e)
//     }
// }, function(t, e) {
//     t.exports = function(t) {
//         return t
//     }
// }, function(t, e, n) {
//     var r = n(183);
//     t.exports = function(t) {
//         var e = r(t),
//             n = e % 1;
//         return e == e ? n ? e - n : e : 0
//     }
// }, function(t, e, n) {
//     var r = n(4),
//         i = n(25),
//         o = NaN,
//         a = /^\s+|\s+$/g,
//         u = /^[-+]0x[0-9a-f]+$/i,
//         c = /^0b[01]+$/i,
//         s = /^0o[0-7]+$/i,
//         f = parseInt;
//     t.exports = function(t) {
//         if ("number" == typeof t) return t;
//         if (i(t)) return o;
//         if (r(t)) {
//             var e = "function" == typeof t.valueOf ? t.valueOf() : t;
//             t = r(e) ? e + "" : e
//         }
//         if ("string" != typeof t) return 0 === t ? t : +t;
//         t = t.replace(a, "");
//         var n = c.test(t);
//         return n || s.test(t) ? f(t.slice(2), n ? 2 : 8) : u.test(t) ? o : +t
//     }
// }, function(t, e, n) {
//     "use strict";
//     Object.defineProperty(e, "__esModule", {
//         value: !0
//     }), e.PLUGIN_LOTTIE = e.PLUGIN_LOTTIE_EFFECT = e.JELLO_EFFECT = e.RUBBER_BAND_EFFECT = e.FLIP_RIGHT_TO_LEFT_EFFECT = e.FLIP_LEFT_TO_RIGHT_EFFECT = e.BOUNCE_EFFECT = e.BLINK_EFFECT = e.DROP_EFFECT = e.PULSE_EFFECT = e.JIGGLE_EFFECT = e.FLIP_EFFECT = e.POP_EFFECT = e.FLY_EFFECT = e.SPIN_EFFECT = e.SHRINK_BIG_EFFECT = e.SHRINK_EFFECT = e.GROW_BIG_EFFECT = e.GROW_EFFECT = e.BLUR_EFFECT = e.SLIDE_EFFECT = e.FADE_EFFECT = e.OBJECT_VALUE = e.GENERAL_LOOP = e.GENERAL_STOP_ACTION = e.GENERAL_START_ACTION = e.GENERAL_CONTINUOUS_ACTION = e.GENERAL_DISPLAY = e.GENERAL_COMBO_CLASS = e.STYLE_TEXT_COLOR = e.STYLE_BORDER = e.STYLE_BACKGROUND_COLOR = e.STYLE_FILTER = e.STYLE_BOX_SHADOW = e.STYLE_SIZE = e.STYLE_OPACITY = e.TRANSFORM_SKEW = e.TRANSFORM_ROTATE = e.TRANSFORM_SCALE = e.TRANSFORM_MOVE = void 0;
//     e.TRANSFORM_MOVE = "TRANSFORM_MOVE";
//     e.TRANSFORM_SCALE = "TRANSFORM_SCALE";
//     e.TRANSFORM_ROTATE = "TRANSFORM_ROTATE";
//     e.TRANSFORM_SKEW = "TRANSFORM_SKEW";
//     e.STYLE_OPACITY = "STYLE_OPACITY";
//     e.STYLE_SIZE = "STYLE_SIZE";
//     e.STYLE_BOX_SHADOW = "STYLE_BOX_SHADOW";
//     e.STYLE_FILTER = "STYLE_FILTER";
//     e.STYLE_BACKGROUND_COLOR = "STYLE_BACKGROUND_COLOR";
//     e.STYLE_BORDER = "STYLE_BORDER";
//     e.STYLE_TEXT_COLOR = "STYLE_TEXT_COLOR";
//     e.GENERAL_COMBO_CLASS = "GENERAL_COMBO_CLASS";
//     e.GENERAL_DISPLAY = "GENERAL_DISPLAY";
//     e.GENERAL_CONTINUOUS_ACTION = "GENERAL_CONTINUOUS_ACTION";
//     e.GENERAL_START_ACTION = "GENERAL_START_ACTION";
//     e.GENERAL_STOP_ACTION = "GENERAL_STOP_ACTION";
//     e.GENERAL_LOOP = "GENERAL_LOOP";
//     e.OBJECT_VALUE = "OBJECT_VALUE";
//     e.FADE_EFFECT = "FADE_EFFECT";
//     e.SLIDE_EFFECT = "SLIDE_EFFECT";
//     e.BLUR_EFFECT = "BLUR_EFFECT";
//     e.GROW_EFFECT = "GROW_EFFECT";
//     e.GROW_BIG_EFFECT = "GROW_BIG_EFFECT";
//     e.SHRINK_EFFECT = "SHRINK_EFFECT";
//     e.SHRINK_BIG_EFFECT = "SHRINK_BIG_EFFECT";
//     e.SPIN_EFFECT = "SPIN_EFFECT";
//     e.FLY_EFFECT = "FLY_EFFECT";
//     e.POP_EFFECT = "POP_EFFECT";
//     e.FLIP_EFFECT = "FLIP_EFFECT";
//     e.JIGGLE_EFFECT = "JIGGLE_EFFECT";
//     e.PULSE_EFFECT = "PULSE_EFFECT";
//     e.DROP_EFFECT = "DROP_EFFECT";
//     e.BLINK_EFFECT = "BLINK_EFFECT";
//     e.BOUNCE_EFFECT = "BOUNCE_EFFECT";
//     e.FLIP_LEFT_TO_RIGHT_EFFECT = "FLIP_LEFT_TO_RIGHT_EFFECT";
//     e.FLIP_RIGHT_TO_LEFT_EFFECT = "FLIP_RIGHT_TO_LEFT_EFFECT";
//     e.RUBBER_BAND_EFFECT = "RUBBER_BAND_EFFECT";
//     e.JELLO_EFFECT = "JELLO_EFFECT";
//     e.PLUGIN_LOTTIE_EFFECT = "PLUGIN_LOTTIE_EFFECT";
//     e.PLUGIN_LOTTIE = "PLUGIN_LOTTIE"
// }, function(t, e, n) {
//     "use strict";
//     Object.defineProperty(e, "__esModule", {
//         value: !0
//     }), e.RENDER_PLUGIN = e.RENDER_STYLE = e.RENDER_GENERAL = e.RENDER_TRANSFORM = e.ABSTRACT_NODE = e.PLAIN_OBJECT = e.HTML_ELEMENT = e.PRESERVE_3D = e.PARENT = e.SIBLINGS = e.IMMEDIATE_CHILDREN = e.CHILDREN = e.BAR_DELIMITER = e.COLON_DELIMITER = e.COMMA_DELIMITER = e.AUTO = e.WILL_CHANGE = e.FLEX = e.DISPLAY = e.COLOR = e.BORDER_COLOR = e.BACKGROUND = e.BACKGROUND_COLOR = e.HEIGHT = e.WIDTH = e.FILTER = e.OPACITY = e.SKEW_Y = e.SKEW_X = e.SKEW = e.ROTATE_Z = e.ROTATE_Y = e.ROTATE_X = e.SCALE_3D = e.SCALE_Z = e.SCALE_Y = e.SCALE_X = e.TRANSLATE_3D = e.TRANSLATE_Z = e.TRANSLATE_Y = e.TRANSLATE_X = e.TRANSFORM = e.CONFIG_UNIT = e.CONFIG_Z_UNIT = e.CONFIG_Y_UNIT = e.CONFIG_X_UNIT = e.CONFIG_VALUE = e.CONFIG_Z_VALUE = e.CONFIG_Y_VALUE = e.CONFIG_X_VALUE = e.BOUNDARY_SELECTOR = e.W_MOD_IX = e.W_MOD_JS = e.WF_PAGE = e.IX2_ID_DELIMITER = void 0;
//     e.IX2_ID_DELIMITER = "|";
//     e.WF_PAGE = "data-wf-page";
//     e.W_MOD_JS = "w-mod-js";
//     e.W_MOD_IX = "w-mod-ix";
//     e.BOUNDARY_SELECTOR = ".w-dyn-item";
//     e.CONFIG_X_VALUE = "xValue";
//     e.CONFIG_Y_VALUE = "yValue";
//     e.CONFIG_Z_VALUE = "zValue";
//     e.CONFIG_VALUE = "value";
//     e.CONFIG_X_UNIT = "xUnit";
//     e.CONFIG_Y_UNIT = "yUnit";
//     e.CONFIG_Z_UNIT = "zUnit";
//     e.CONFIG_UNIT = "unit";
//     e.TRANSFORM = "transform";
//     e.TRANSLATE_X = "translateX";
//     e.TRANSLATE_Y = "translateY";
//     e.TRANSLATE_Z = "translateZ";
//     e.TRANSLATE_3D = "translate3d";
//     e.SCALE_X = "scaleX";
//     e.SCALE_Y = "scaleY";
//     e.SCALE_Z = "scaleZ";
//     e.SCALE_3D = "scale3d";
//     e.ROTATE_X = "rotateX";
//     e.ROTATE_Y = "rotateY";
//     e.ROTATE_Z = "rotateZ";
//     e.SKEW = "skew";
//     e.SKEW_X = "skewX";
//     e.SKEW_Y = "skewY";
//     e.OPACITY = "opacity";
//     e.FILTER = "filter";
//     e.WIDTH = "width";
//     e.HEIGHT = "height";
//     e.BACKGROUND_COLOR = "backgroundColor";
//     e.BACKGROUND = "background";
//     e.BORDER_COLOR = "borderColor";
//     e.COLOR = "color";
//     e.DISPLAY = "display";
//     e.FLEX = "flex";
//     e.WILL_CHANGE = "willChange";
//     e.AUTO = "AUTO";
//     e.COMMA_DELIMITER = ",";
//     e.COLON_DELIMITER = ":";
//     e.BAR_DELIMITER = "|";
//     e.CHILDREN = "CHILDREN";
//     e.IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN";
//     e.SIBLINGS = "SIBLINGS";
//     e.PARENT = "PARENT";
//     e.PRESERVE_3D = "preserve-3d";
//     e.HTML_ELEMENT = "HTML_ELEMENT";
//     e.PLAIN_OBJECT = "PLAIN_OBJECT";
//     e.ABSTRACT_NODE = "ABSTRACT_NODE";
//     e.RENDER_TRANSFORM = "RENDER_TRANSFORM";
//     e.RENDER_GENERAL = "RENDER_GENERAL";
//     e.RENDER_STYLE = "RENDER_STYLE";
//     e.RENDER_PLUGIN = "RENDER_PLUGIN"
// }, function(t, e, n) {
//     "use strict";
//     var r = n(0);
//     Object.defineProperty(e, "__esModule", {
//         value: !0
//     }), e.mediaQueriesDefined = e.viewportWidthChanged = e.actionListPlaybackChanged = e.elementStateChanged = e.instanceRemoved = e.instanceStarted = e.instanceAdded = e.parameterChanged = e.animationFrameChanged = e.eventStateChanged = e.testFrameRendered = e.eventListenerAdded = e.clearRequested = e.stopRequested = e.playbackRequested = e.previewRequested = e.sessionStopped = e.sessionStarted = e.sessionInitialized = e.rawDataImported = void 0;
//     var i = r(n(26)),
//         o = n(2),
//         a = o.IX2EngineActionTypes,
//         u = a.IX2_RAW_DATA_IMPORTED,
//         c = a.IX2_SESSION_INITIALIZED,
//         s = a.IX2_SESSION_STARTED,
//         f = a.IX2_SESSION_STOPPED,
//         l = a.IX2_PREVIEW_REQUESTED,
//         d = a.IX2_PLAYBACK_REQUESTED,
//         p = a.IX2_STOP_REQUESTED,
//         v = a.IX2_CLEAR_REQUESTED,
//         E = a.IX2_EVENT_LISTENER_ADDED,
//         h = a.IX2_TEST_FRAME_RENDERED,
//         _ = a.IX2_EVENT_STATE_CHANGED,
//         g = a.IX2_ANIMATION_FRAME_CHANGED,
//         I = a.IX2_PARAMETER_CHANGED,
//         y = a.IX2_INSTANCE_ADDED,
//         T = a.IX2_INSTANCE_STARTED,
//         m = a.IX2_INSTANCE_REMOVED,
//         O = a.IX2_ELEMENT_STATE_CHANGED,
//         S = a.IX2_ACTION_LIST_PLAYBACK_CHANGED,
//         A = a.IX2_VIEWPORT_WIDTH_CHANGED,
//         b = a.IX2_MEDIA_QUERIES_DEFINED,
//         R = o.IX2EngineItemTypes.GENERAL_START_ACTION,
//         w = o.IX2VanillaUtils.reifyState;
//     e.rawDataImported = function(t) {
//         return {
//             type: u,
//             payload: (0, i.default)({}, w(t))
//         }
//     };
//     e.sessionInitialized = function(t) {
//         var e = t.hasBoundaryNodes;
//         return {
//             type: c,
//             payload: {
//                 hasBoundaryNodes: e
//             }
//         }
//     };
//     e.sessionStarted = function() {
//         return {
//             type: s,
//             payload: {}
//         }
//     };
//     e.sessionStopped = function() {
//         return {
//             type: f,
//             payload: {}
//         }
//     };
//     e.previewRequested = function(t) {
//         var e = t.rawData;
//         return {
//             type: l,
//             payload: {
//                 rawData: e
//             }
//         }
//     };
//     e.playbackRequested = function(t) {
//         var e = t.actionTypeId,
//             n = void 0 === e ? R : e,
//             r = t.actionListId,
//             i = t.actionItemId,
//             o = t.eventId,
//             a = t.allowEvents,
//             u = t.immediate,
//             c = t.testManual,
//             s = t.verbose,
//             f = t.rawData;
//         return {
//             type: d,
//             payload: {
//                 actionTypeId: n,
//                 actionListId: r,
//                 actionItemId: i,
//                 testManual: c,
//                 eventId: o,
//                 allowEvents: a,
//                 immediate: u,
//                 verbose: s,
//                 rawData: f
//             }
//         }
//     };
//     e.stopRequested = function(t) {
//         return {
//             type: p,
//             payload: {
//                 actionListId: t
//             }
//         }
//     };
//     e.clearRequested = function() {
//         return {
//             type: v,
//             payload: {}
//         }
//     };
//     e.eventListenerAdded = function(t, e) {
//         return {
//             type: E,
//             payload: {
//                 target: t,
//                 listenerParams: e
//             }
//         }
//     };
//     e.testFrameRendered = function() {
//         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
//         return {
//             type: h,
//             payload: {
//                 step: t
//             }
//         }
//     };
//     e.eventStateChanged = function(t, e) {
//         return {
//             type: _,
//             payload: {
//                 stateKey: t,
//                 newState: e
//             }
//         }
//     };
//     e.animationFrameChanged = function(t, e) {
//         return {
//             type: g,
//             payload: {
//                 now: t,
//                 parameters: e
//             }
//         }
//     };
//     e.parameterChanged = function(t, e) {
//         return {
//             type: I,
//             payload: {
//                 key: t,
//                 value: e
//             }
//         }
//     };
//     e.instanceAdded = function(t) {
//         return {
//             type: y,
//             payload: (0, i.default)({}, t)
//         }
//     };
//     e.instanceStarted = function(t, e) {
//         return {
//             type: T,
//             payload: {
//                 instanceId: t,
//                 time: e
//             }
//         }
//     };
//     e.instanceRemoved = function(t) {
//         return {
//             type: m,
//             payload: {
//                 instanceId: t
//             }
//         }
//     };
//     e.elementStateChanged = function(t, e, n, r) {
//         return {
//             type: O,
//             payload: {
//                 elementId: t,
//                 actionTypeId: e,
//                 current: n,
//                 actionItem: r
//             }
//         }
//     };
//     e.actionListPlaybackChanged = function(t) {
//         var e = t.actionListId,
//             n = t.isPlaying;
//         return {
//             type: S,
//             payload: {
//                 actionListId: e,
//                 isPlaying: n
//             }
//         }
//     };
//     e.viewportWidthChanged = function(t) {
//         var e = t.width,
//             n = t.mediaQueries;
//         return {
//             type: A,
//             payload: {
//                 width: e,
//                 mediaQueries: n
//             }
//         }
//     };
//     e.mediaQueriesDefined = function() {
//         return {
//             type: b,
//             payload: {}
//         }
//     }
// }, function(t, e, n) {
//     var r = n(95),
//         i = n(51);

//     function o(t, e) {
//         this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = void 0
//     }
//     o.prototype = r(i.prototype), o.prototype.constructor = o, t.exports = o
// }, function(t, e) {
//     t.exports = function() {}
// }, function(t, e, n) {
//     var r = n(95),
//         i = n(51),
//         o = 4294967295;

//     function a(t) {
//         this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = o, this.__views__ = []
//     }
//     a.prototype = r(i.prototype), a.prototype.constructor = a, t.exports = a
// }, function(t, e, n) {
//     "use strict";
//     var r = n(0)(n(15));
//     window.tram = function(t) {
//         function e(t, e) {
//             return (new j.Bare).init(t, e)
//         }

//         function n(t) {
//             return t.replace(/[A-Z]/g, function(t) {
//                 return "-" + t.toLowerCase()
//             })
//         }

//         function i(t) {
//             var e = parseInt(t.slice(1), 16);
//             return [e >> 16 & 255, e >> 8 & 255, 255 & e]
//         }

//         function o(t, e, n) {
//             return "#" + (1 << 24 | t << 16 | e << 8 | n).toString(16).slice(1)
//         }

//         function a() {}

//         function u(t, e, n) {
//             s("Units do not match [" + t + "]: " + e + ", " + n)
//         }

//         function c(t, e, n) {
//             if (void 0 !== e && (n = e), void 0 === t) return n;
//             var r = n;
//             return $.test(t) || !Z.test(t) ? r = parseInt(t, 10) : Z.test(t) && (r = 1e3 * parseFloat(t)), 0 > r && (r = 0), r == r ? r : n
//         }

//         function s(t) {
//             W.debug && window && window.console.warn(t)
//         }
//         var f = function(t, e, n) {
//                 function i(t) {
//                     return "object" == (0, r.default)(t)
//                 }

//                 function o(t) {
//                     return "function" == typeof t
//                 }

//                 function a() {}
//                 return function r(u, c) {
//                     function s() {
//                         var t = new f;
//                         return o(t.init) && t.init.apply(t, arguments), t
//                     }

//                     function f() {}
//                     c === n && (c = u, u = Object), s.Bare = f;
//                     var l, d = a[t] = u[t],
//                         p = f[t] = s[t] = new a;
//                     return p.constructor = s, s.mixin = function(e) {
//                         return f[t] = s[t] = r(s, e)[t], s
//                     }, s.open = function(t) {
//                         if (l = {}, o(t) ? l = t.call(s, p, d, s, u) : i(t) && (l = t), i(l))
//                             for (var n in l) e.call(l, n) && (p[n] = l[n]);
//                         return o(p.init) || (p.init = u), s
//                     }, s.open(c)
//                 }
//             }("prototype", {}.hasOwnProperty),
//             l = {
//                 ease: ["ease", function(t, e, n, r) {
//                     var i = (t /= r) * t,
//                         o = i * t;
//                     return e + n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + .25 * t)
//                 }],
//                 "ease-in": ["ease-in", function(t, e, n, r) {
//                     var i = (t /= r) * t,
//                         o = i * t;
//                     return e + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i)
//                 }],
//                 "ease-out": ["ease-out", function(t, e, n, r) {
//                     var i = (t /= r) * t,
//                         o = i * t;
//                     return e + n * (.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * t)
//                 }],
//                 "ease-in-out": ["ease-in-out", function(t, e, n, r) {
//                     var i = (t /= r) * t,
//                         o = i * t;
//                     return e + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i)
//                 }],
//                 linear: ["linear", function(t, e, n, r) {
//                     return n * t / r + e
//                 }],
//                 "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(t, e, n, r) {
//                     return n * (t /= r) * t + e
//                 }],
//                 "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(t, e, n, r) {
//                     return -n * (t /= r) * (t - 2) + e
//                 }],
//                 "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(t, e, n, r) {
//                     return (t /= r / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
//                 }],
//                 "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(t, e, n, r) {
//                     return n * (t /= r) * t * t + e
//                 }],
//                 "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(t, e, n, r) {
//                     return n * ((t = t / r - 1) * t * t + 1) + e
//                 }],
//                 "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(t, e, n, r) {
//                     return (t /= r / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e
//                 }],
//                 "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(t, e, n, r) {
//                     return n * (t /= r) * t * t * t + e
//                 }],
//                 "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(t, e, n, r) {
//                     return -n * ((t = t / r - 1) * t * t * t - 1) + e
//                 }],
//                 "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(t, e, n, r) {
//                     return (t /= r / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e
//                 }],
//                 "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(t, e, n, r) {
//                     return n * (t /= r) * t * t * t * t + e
//                 }],
//                 "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(t, e, n, r) {
//                     return n * ((t = t / r - 1) * t * t * t * t + 1) + e
//                 }],
//                 "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(t, e, n, r) {
//                     return (t /= r / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e
//                 }],
//                 "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(t, e, n, r) {
//                     return -n * Math.cos(t / r * (Math.PI / 2)) + n + e
//                 }],
//                 "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(t, e, n, r) {
//                     return n * Math.sin(t / r * (Math.PI / 2)) + e
//                 }],
//                 "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(t, e, n, r) {
//                     return -n / 2 * (Math.cos(Math.PI * t / r) - 1) + e
//                 }],
//                 "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(t, e, n, r) {
//                     return 0 === t ? e : n * Math.pow(2, 10 * (t / r - 1)) + e
//                 }],
//                 "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(t, e, n, r) {
//                     return t === r ? e + n : n * (1 - Math.pow(2, -10 * t / r)) + e
//                 }],
//                 "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(t, e, n, r) {
//                     return 0 === t ? e : t === r ? e + n : (t /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : n / 2 * (2 - Math.pow(2, -10 * --t)) + e
//                 }],
//                 "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(t, e, n, r) {
//                     return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + e
//                 }],
//                 "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(t, e, n, r) {
//                     return n * Math.sqrt(1 - (t = t / r - 1) * t) + e
//                 }],
//                 "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(t, e, n, r) {
//                     return (t /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
//                 }],
//                 "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(t, e, n, r, i) {
//                     return void 0 === i && (i = 1.70158), n * (t /= r) * t * ((i + 1) * t - i) + e
//                 }],
//                 "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(t, e, n, r, i) {
//                     return void 0 === i && (i = 1.70158), n * ((t = t / r - 1) * t * ((i + 1) * t + i) + 1) + e
//                 }],
//                 "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(t, e, n, r, i) {
//                     return void 0 === i && (i = 1.70158), (t /= r / 2) < 1 ? n / 2 * t * t * ((1 + (i *= 1.525)) * t - i) + e : n / 2 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) + e
//                 }]
//             },
//             d = {
//                 "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
//                 "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
//                 "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
//             },
//             p = document,
//             v = window,
//             E = "bkwld-tram",
//             h = /[\-\.0-9]/g,
//             _ = /[A-Z]/,
//             g = "number",
//             I = /^(rgb|#)/,
//             y = /(em|cm|mm|in|pt|pc|px)$/,
//             T = /(em|cm|mm|in|pt|pc|px|%)$/,
//             m = /(deg|rad|turn)$/,
//             O = "unitless",
//             S = /(all|none) 0s ease 0s/,
//             A = /^(width|height)$/,
//             b = " ",
//             R = p.createElement("a"),
//             w = ["Webkit", "Moz", "O", "ms"],
//             L = ["-webkit-", "-moz-", "-o-", "-ms-"],
//             N = function(t) {
//                 if (t in R.style) return {
//                     dom: t,
//                     css: t
//                 };
//                 var e, n, r = "",
//                     i = t.split("-");
//                 for (e = 0; e < i.length; e++) r += i[e].charAt(0).toUpperCase() + i[e].slice(1);
//                 for (e = 0; e < w.length; e++)
//                     if ((n = w[e] + r) in R.style) return {
//                         dom: n,
//                         css: L[e] + t
//                     }
//             },
//             C = e.support = {
//                 bind: Function.prototype.bind,
//                 transform: N("transform"),
//                 transition: N("transition"),
//                 backface: N("backface-visibility"),
//                 timing: N("transition-timing-function")
//             };
//         if (C.transition) {
//             var x = C.timing.dom;
//             if (R.style[x] = l["ease-in-back"][0], !R.style[x])
//                 for (var D in d) l[D][0] = d[D]
//         }
//         var P = e.frame = function() {
//                 var t = v.requestAnimationFrame || v.webkitRequestAnimationFrame || v.mozRequestAnimationFrame || v.oRequestAnimationFrame || v.msRequestAnimationFrame;
//                 return t && C.bind ? t.bind(v) : function(t) {
//                     v.setTimeout(t, 16)
//                 }
//             }(),
//             M = e.now = function() {
//                 var t = v.performance,
//                     e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
//                 return e && C.bind ? e.bind(t) : Date.now || function() {
//                     return +new Date
//                 }
//             }(),
//             F = f(function(e) {
//                 function i(t, e) {
//                     var n = function(t) {
//                             for (var e = -1, n = t ? t.length : 0, r = []; ++e < n;) {
//                                 var i = t[e];
//                                 i && r.push(i)
//                             }
//                             return r
//                         }(("" + t).split(b)),
//                         r = n[0];
//                     e = e || {};
//                     var i = Q[r];
//                     if (!i) return s("Unsupported property: " + r);
//                     if (!e.weak || !this.props[r]) {
//                         var o = i[0],
//                             a = this.props[r];
//                         return a || (a = this.props[r] = new o.Bare), a.init(this.$el, n, i, e), a
//                     }
//                 }

//                 function o(t, e, n) {
//                     if (t) {
//                         var o = (0, r.default)(t);
//                         if (e || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == o && e) return this.timer = new B({
//                             duration: t,
//                             context: this,
//                             complete: a
//                         }), void(this.active = !0);
//                         if ("string" == o && e) {
//                             switch (t) {
//                                 case "hide":
//                                     f.call(this);
//                                     break;
//                                 case "stop":
//                                     u.call(this);
//                                     break;
//                                 case "redraw":
//                                     l.call(this);
//                                     break;
//                                 default:
//                                     i.call(this, t, n && n[1])
//                             }
//                             return a.call(this)
//                         }
//                         if ("function" == o) return void t.call(this, this);
//                         if ("object" == o) {
//                             var s = 0;
//                             p.call(this, t, function(t, e) {
//                                 t.span > s && (s = t.span), t.stop(), t.animate(e)
//                             }, function(t) {
//                                 "wait" in t && (s = c(t.wait, 0))
//                             }), d.call(this), s > 0 && (this.timer = new B({
//                                 duration: s,
//                                 context: this
//                             }), this.active = !0, e && (this.timer.complete = a));
//                             var v = this,
//                                 E = !1,
//                                 h = {};
//                             P(function() {
//                                 p.call(v, t, function(t) {
//                                     t.active && (E = !0, h[t.name] = t.nextStyle)
//                                 }), E && v.$el.css(h)
//                             })
//                         }
//                     }
//                 }

//                 function a() {
//                     if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
//                         var t = this.queue.shift();
//                         o.call(this, t.options, !0, t.args)
//                     }
//                 }

//                 function u(t) {
//                     var e;
//                     this.timer && this.timer.destroy(), this.queue = [], this.active = !1, "string" == typeof t ? (e = {})[t] = 1 : e = "object" == (0, r.default)(t) && null != t ? t : this.props, p.call(this, e, v), d.call(this)
//                 }

//                 function f() {
//                     u.call(this), this.el.style.display = "none"
//                 }

//                 function l() {
//                     this.el.offsetHeight
//                 }

//                 function d() {
//                     var t, e, n = [];
//                     for (t in this.upstream && n.push(this.upstream), this.props)(e = this.props[t]).active && n.push(e.string);
//                     n = n.join(","), this.style !== n && (this.style = n, this.el.style[C.transition.dom] = n)
//                 }

//                 function p(t, e, r) {
//                     var o, a, u, c, s = e !== v,
//                         f = {};
//                     for (o in t) u = t[o], o in q ? (f.transform || (f.transform = {}), f.transform[o] = u) : (_.test(o) && (o = n(o)), o in Q ? f[o] = u : (c || (c = {}), c[o] = u));
//                     for (o in f) {
//                         if (u = f[o], !(a = this.props[o])) {
//                             if (!s) continue;
//                             a = i.call(this, o)
//                         }
//                         e.call(this, a, u)
//                     }
//                     r && c && r.call(this, c)
//                 }

//                 function v(t) {
//                     t.stop()
//                 }

//                 function h(t, e) {
//                     t.set(e)
//                 }

//                 function g(t) {
//                     this.$el.css(t)
//                 }

//                 function I(t, n) {
//                     e[t] = function() {
//                         return this.children ? function(t, e) {
//                             var n, r = this.children.length;
//                             for (n = 0; r > n; n++) t.apply(this.children[n], e);
//                             return this
//                         }.call(this, n, arguments) : (this.el && n.apply(this, arguments), this)
//                     }
//                 }
//                 e.init = function(e) {
//                     if (this.$el = t(e), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, W.keepInherited && !W.fallback) {
//                         var n = z(this.el, "transition");
//                         n && !S.test(n) && (this.upstream = n)
//                     }
//                     C.backface && W.hideBackface && Y(this.el, C.backface.css, "hidden")
//                 }, I("add", i), I("start", o), I("wait", function(t) {
//                     t = c(t, 0), this.active ? this.queue.push({
//                         options: t
//                     }) : (this.timer = new B({
//                         duration: t,
//                         context: this,
//                         complete: a
//                     }), this.active = !0)
//                 }), I("then", function(t) {
//                     return this.active ? (this.queue.push({
//                         options: t,
//                         args: arguments
//                     }), void(this.timer.complete = a)) : s("No active transition timer. Use start() or wait() before then().")
//                 }), I("next", a), I("stop", u), I("set", function(t) {
//                     u.call(this, t), p.call(this, t, h, g)
//                 }), I("show", function(t) {
//                     "string" != typeof t && (t = "block"), this.el.style.display = t
//                 }), I("hide", f), I("redraw", l), I("destroy", function() {
//                     u.call(this), t.removeData(this.el, E), this.$el = this.el = null
//                 })
//             }),
//             j = f(F, function(e) {
//                 function n(e, n) {
//                     var r = t.data(e, E) || t.data(e, E, new F.Bare);
//                     return r.el || r.init(e), n ? r.start(n) : r
//                 }
//                 e.init = function(e, r) {
//                     var i = t(e);
//                     if (!i.length) return this;
//                     if (1 === i.length) return n(i[0], r);
//                     var o = [];
//                     return i.each(function(t, e) {
//                         o.push(n(e, r))
//                     }), this.children = o, this
//                 }
//             }),
//             G = f(function(t) {
//                 function e() {
//                     var t = this.get();
//                     this.update("auto");
//                     var e = this.get();
//                     return this.update(t), e
//                 }

//                 function n(t) {
//                     var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
//                     return (e ? o(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
//                 }
//                 var i = 500,
//                     a = "ease",
//                     u = 0;
//                 t.init = function(t, e, n, r) {
//                     this.$el = t, this.el = t[0];
//                     var o = e[0];
//                     n[2] && (o = n[2]), K[o] && (o = K[o]), this.name = o, this.type = n[1], this.duration = c(e[1], this.duration, i), this.ease = function(t, e, n) {
//                         return void 0 !== e && (n = e), t in l ? t : n
//                     }(e[2], this.ease, a), this.delay = c(e[3], this.delay, u), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = A.test(this.name), this.unit = r.unit || this.unit || W.defaultUnit, this.angle = r.angle || this.angle || W.defaultAngle, W.fallback || r.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + b + this.duration + "ms" + ("ease" != this.ease ? b + l[this.ease][0] : "") + (this.delay ? b + this.delay + "ms" : ""))
//                 }, t.set = function(t) {
//                     t = this.convert(t, this.type), this.update(t), this.redraw()
//                 }, t.transition = function(t) {
//                     this.active = !0, t = this.convert(t, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == t && (t = e.call(this))), this.nextStyle = t
//                 }, t.fallback = function(t) {
//                     var n = this.el.style[this.name] || this.convert(this.get(), this.type);
//                     t = this.convert(t, this.type), this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == t && (t = e.call(this))), this.tween = new k({
//                         from: n,
//                         to: t,
//                         duration: this.duration,
//                         delay: this.delay,
//                         ease: this.ease,
//                         update: this.update,
//                         context: this
//                     })
//                 }, t.get = function() {
//                     return z(this.el, this.name)
//                 }, t.update = function(t) {
//                     Y(this.el, this.name, t)
//                 }, t.stop = function() {
//                     (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, Y(this.el, this.name, this.get()));
//                     var t = this.tween;
//                     t && t.context && t.destroy()
//                 }, t.convert = function(t, e) {
//                     if ("auto" == t && this.auto) return t;
//                     var i, o = "number" == typeof t,
//                         a = "string" == typeof t;
//                     switch (e) {
//                         case g:
//                             if (o) return t;
//                             if (a && "" === t.replace(h, "")) return +t;
//                             i = "number(unitless)";
//                             break;
//                         case I:
//                             if (a) {
//                                 if ("" === t && this.original) return this.original;
//                                 if (e.test(t)) return "#" == t.charAt(0) && 7 == t.length ? t : n(t)
//                             }
//                             i = "hex or rgb string";
//                             break;
//                         case y:
//                             if (o) return t + this.unit;
//                             if (a && e.test(t)) return t;
//                             i = "number(px) or string(unit)";
//                             break;
//                         case T:
//                             if (o) return t + this.unit;
//                             if (a && e.test(t)) return t;
//                             i = "number(px) or string(unit or %)";
//                             break;
//                         case m:
//                             if (o) return t + this.angle;
//                             if (a && e.test(t)) return t;
//                             i = "number(deg) or string(angle)";
//                             break;
//                         case O:
//                             if (o) return t;
//                             if (a && T.test(t)) return t;
//                             i = "number(unitless) or string(unit or %)"
//                     }
//                     return function(t, e) {
//                         s("Type warning: Expected: [" + t + "] Got: [" + (0, r.default)(e) + "] " + e)
//                     }(i, t), t
//                 }, t.redraw = function() {
//                     this.el.offsetHeight
//                 }
//             }),
//             X = f(G, function(t, e) {
//                 t.init = function() {
//                     e.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), I))
//                 }
//             }),
//             V = f(G, function(t, e) {
//                 t.init = function() {
//                     e.init.apply(this, arguments), this.animate = this.fallback
//                 }, t.get = function() {
//                     return this.$el[this.name]()
//                 }, t.update = function(t) {
//                     this.$el[this.name](t)
//                 }
//             }),
//             U = f(G, function(t, e) {
//                 function n(t, e) {
//                     var n, r, i, o, a;
//                     for (n in t) i = (o = q[n])[0], r = o[1] || n, a = this.convert(t[n], i), e.call(this, r, a, i)
//                 }
//                 t.init = function() {
//                     e.init.apply(this, arguments), this.current || (this.current = {}, q.perspective && W.perspective && (this.current.perspective = W.perspective, Y(this.el, this.name, this.style(this.current)), this.redraw()))
//                 }, t.set = function(t) {
//                     n.call(this, t, function(t, e) {
//                         this.current[t] = e
//                     }), Y(this.el, this.name, this.style(this.current)), this.redraw()
//                 }, t.transition = function(t) {
//                     var e = this.values(t);
//                     this.tween = new H({
//                         current: this.current,
//                         values: e,
//                         duration: this.duration,
//                         delay: this.delay,
//                         ease: this.ease
//                     });
//                     var n, r = {};
//                     for (n in this.current) r[n] = n in e ? e[n] : this.current[n];
//                     this.active = !0, this.nextStyle = this.style(r)
//                 }, t.fallback = function(t) {
//                     var e = this.values(t);
//                     this.tween = new H({
//                         current: this.current,
//                         values: e,
//                         duration: this.duration,
//                         delay: this.delay,
//                         ease: this.ease,
//                         update: this.update,
//                         context: this
//                     })
//                 }, t.update = function() {
//                     Y(this.el, this.name, this.style(this.current))
//                 }, t.style = function(t) {
//                     var e, n = "";
//                     for (e in t) n += e + "(" + t[e] + ") ";
//                     return n
//                 }, t.values = function(t) {
//                     var e, r = {};
//                     return n.call(this, t, function(t, n, i) {
//                         r[t] = n, void 0 === this.current[t] && (e = 0, ~t.indexOf("scale") && (e = 1), this.current[t] = this.convert(e, i))
//                     }), r
//                 }
//             }),
//             k = f(function(e) {
//                 function n() {
//                     var t, e, r, i = c.length;
//                     if (i)
//                         for (P(n), e = M(), t = i; t--;)(r = c[t]) && r.render(e)
//                 }
//                 var r = {
//                     ease: l.ease[1],
//                     from: 0,
//                     to: 1
//                 };
//                 e.init = function(t) {
//                     this.duration = t.duration || 0, this.delay = t.delay || 0;
//                     var e = t.ease || r.ease;
//                     l[e] && (e = l[e][1]), "function" != typeof e && (e = r.ease), this.ease = e, this.update = t.update || a, this.complete = t.complete || a, this.context = t.context || this, this.name = t.name;
//                     var n = t.from,
//                         i = t.to;
//                     void 0 === n && (n = r.from), void 0 === i && (i = r.to), this.unit = t.unit || "", "number" == typeof n && "number" == typeof i ? (this.begin = n, this.change = i - n) : this.format(i, n), this.value = this.begin + this.unit, this.start = M(), !1 !== t.autoplay && this.play()
//                 }, e.play = function() {
//                     var t;
//                     this.active || (this.start || (this.start = M()), this.active = !0, t = this, 1 === c.push(t) && P(n))
//                 }, e.stop = function() {
//                     var e, n, r;
//                     this.active && (this.active = !1, e = this, (r = t.inArray(e, c)) >= 0 && (n = c.slice(r + 1), c.length = r, n.length && (c = c.concat(n))))
//                 }, e.render = function(t) {
//                     var e, n = t - this.start;
//                     if (this.delay) {
//                         if (n <= this.delay) return;
//                         n -= this.delay
//                     }
//                     if (n < this.duration) {
//                         var r = this.ease(n, 0, 1, this.duration);
//                         return e = this.startRGB ? function(t, e, n) {
//                             return o(t[0] + n * (e[0] - t[0]), t[1] + n * (e[1] - t[1]), t[2] + n * (e[2] - t[2]))
//                         }(this.startRGB, this.endRGB, r) : function(t) {
//                             return Math.round(t * s) / s
//                         }(this.begin + r * this.change), this.value = e + this.unit, void this.update.call(this.context, this.value)
//                     }
//                     e = this.endHex || this.begin + this.change, this.value = e + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
//                 }, e.format = function(t, e) {
//                     if (e += "", "#" == (t += "").charAt(0)) return this.startRGB = i(e), this.endRGB = i(t), this.endHex = t, this.begin = 0, void(this.change = 1);
//                     if (!this.unit) {
//                         var n = e.replace(h, "");
//                         n !== t.replace(h, "") && u("tween", e, t), this.unit = n
//                     }
//                     e = parseFloat(e), t = parseFloat(t), this.begin = this.value = e, this.change = t - e
//                 }, e.destroy = function() {
//                     this.stop(), this.context = null, this.ease = this.update = this.complete = a
//                 };
//                 var c = [],
//                     s = 1e3
//             }),
//             B = f(k, function(t) {
//                 t.init = function(t) {
//                     this.duration = t.duration || 0, this.complete = t.complete || a, this.context = t.context, this.play()
//                 }, t.render = function(t) {
//                     t - this.start < this.duration || (this.complete.call(this.context), this.destroy())
//                 }
//             }),
//             H = f(k, function(t, e) {
//                 t.init = function(t) {
//                     var e, n;
//                     for (e in this.context = t.context, this.update = t.update, this.tweens = [], this.current = t.current, t.values) n = t.values[e], this.current[e] !== n && this.tweens.push(new k({
//                         name: e,
//                         from: this.current[e],
//                         to: n,
//                         duration: t.duration,
//                         delay: t.delay,
//                         ease: t.ease,
//                         autoplay: !1
//                     }));
//                     this.play()
//                 }, t.render = function(t) {
//                     var e, n, r = !1;
//                     for (e = this.tweens.length; e--;)(n = this.tweens[e]).context && (n.render(t), this.current[n.name] = n.value, r = !0);
//                     return r ? void(this.update && this.update.call(this.context)) : this.destroy()
//                 }, t.destroy = function() {
//                     if (e.destroy.call(this), this.tweens) {
//                         var t;
//                         for (t = this.tweens.length; t--;) this.tweens[t].destroy();
//                         this.tweens = null, this.current = null
//                     }
//                 }
//             }),
//             W = e.config = {
//                 debug: !1,
//                 defaultUnit: "px",
//                 defaultAngle: "deg",
//                 keepInherited: !1,
//                 hideBackface: !1,
//                 perspective: "",
//                 fallback: !C.transition,
//                 agentTests: []
//             };
//         e.fallback = function(t) {
//             if (!C.transition) return W.fallback = !0;
//             W.agentTests.push("(" + t + ")");
//             var e = new RegExp(W.agentTests.join("|"), "i");
//             W.fallback = e.test(navigator.userAgent)
//         }, e.fallback("6.0.[2-5] Safari"), e.tween = function(t) {
//             return new k(t)
//         }, e.delay = function(t, e, n) {
//             return new B({
//                 complete: e,
//                 duration: t,
//                 context: n
//             })
//         }, t.fn.tram = function(t) {
//             return e.call(null, this, t)
//         };
//         var Y = t.style,
//             z = t.css,
//             K = {
//                 transform: C.transform && C.transform.css
//             },
//             Q = {
//                 color: [X, I],
//                 background: [X, I, "background-color"],
//                 "outline-color": [X, I],
//                 "border-color": [X, I],
//                 "border-top-color": [X, I],
//                 "border-right-color": [X, I],
//                 "border-bottom-color": [X, I],
//                 "border-left-color": [X, I],
//                 "border-width": [G, y],
//                 "border-top-width": [G, y],
//                 "border-right-width": [G, y],
//                 "border-bottom-width": [G, y],
//                 "border-left-width": [G, y],
//                 "border-spacing": [G, y],
//                 "letter-spacing": [G, y],
//                 margin: [G, y],
//                 "margin-top": [G, y],
//                 "margin-right": [G, y],
//                 "margin-bottom": [G, y],
//                 "margin-left": [G, y],
//                 padding: [G, y],
//                 "padding-top": [G, y],
//                 "padding-right": [G, y],
//                 "padding-bottom": [G, y],
//                 "padding-left": [G, y],
//                 "outline-width": [G, y],
//                 opacity: [G, g],
//                 top: [G, T],
//                 right: [G, T],
//                 bottom: [G, T],
//                 left: [G, T],
//                 "font-size": [G, T],
//                 "text-indent": [G, T],
//                 "word-spacing": [G, T],
//                 width: [G, T],
//                 "min-width": [G, T],
//                 "max-width": [G, T],
//                 height: [G, T],
//                 "min-height": [G, T],
//                 "max-height": [G, T],
//                 "line-height": [G, O],
//                 "scroll-top": [V, g, "scrollTop"],
//                 "scroll-left": [V, g, "scrollLeft"]
//             },
//             q = {};
//         C.transform && (Q.transform = [U], q = {
//             x: [T, "translateX"],
//             y: [T, "translateY"],
//             rotate: [m],
//             rotateX: [m],
//             rotateY: [m],
//             scale: [g],
//             scaleX: [g],
//             scaleY: [g],
//             skew: [m],
//             skewX: [m],
//             skewY: [m]
//         }), C.transform && C.backface && (q.z = [T, "translateZ"], q.rotateZ = [m], q.scaleZ = [g], q.perspective = [y]);
//         var $ = /ms/,
//             Z = /s|\./;
//         return t.tram = e
//     }(window.jQuery)
// }, function(t, e, n) {
//     "use strict";
//     n.r(e);
//     var r = n(27);
//     n.d(e, "createStore", function() {
//         return r.default
//     });
//     var i = n(57);
//     n.d(e, "combineReducers", function() {
//         return i.default
//     });
//     var o = n(59);
//     n.d(e, "bindActionCreators", function() {
//         return o.default
//     });
//     var a = n(60);
//     n.d(e, "applyMiddleware", function() {
//         return a.default
//     });
//     var u = n(29);
//     n.d(e, "compose", function() {
//         return u.default
//     });
//     n(58)
// }, function(t, e, n) {
//     "use strict";
//     n.r(e);
//     var r = n(106),
//         i = n(111),
//         o = n(113),
//         a = "[object Object]",
//         u = Function.prototype,
//         c = Object.prototype,
//         s = u.toString,
//         f = c.hasOwnProperty,
//         l = s.call(Object);
//     e.default = function(t) {
//         if (!Object(o.default)(t) || Object(r.default)(t) != a) return !1;
//         var e = Object(i.default)(t);
//         if (null === e) return !0;
//         var n = f.call(e, "constructor") && e.constructor;
//         return "function" == typeof n && n instanceof n && s.call(n) == l
//     }
// }, function(t, e, n) {
//     "use strict";
//     n.r(e);
//     var r = n(107).default.Symbol;
//     e.default = r
// }, function(t, e, n) {
//     "use strict";
//     n.r(e), n.d(e, "default", function() {
//         return o
//     });
//     var r = n(27);
//     n(55), n(58);

//     function i(t, e) {
//         var n = e && e.type;
//         return "Given action " + (n && '"' + n.toString() + '"' || "an action") + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
//     }

//     function o(t) {
//         for (var e = Object.keys(t), n = {}, o = 0; o < e.length; o++) {
//             var a = e[o];
//             0, "function" == typeof t[a] && (n[a] = t[a])
//         }
//         var u, c = Object.keys(n);
//         try {
//             ! function(t) {
//                 Object.keys(t).forEach(function(e) {
//                     var n = t[e];
//                     if (void 0 === n(void 0, {
//                             type: r.ActionTypes.INIT
//                         })) throw new Error('Reducer "' + e + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
//                     if (void 0 === n(void 0, {
//                             type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
//                         })) throw new Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + r.ActionTypes.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')
//                 })
//             }(n)
//         } catch (t) {
//             u = t
//         }
//         return function() {
//             var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
//                 e = arguments[1];
//             if (u) throw u;
//             for (var r = !1, o = {}, a = 0; a < c.length; a++) {
//                 var s = c[a],
//                     f = n[s],
//                     l = t[s],
//                     d = f(l, e);
//                 if (void 0 === d) {
//                     var p = i(s, e);
//                     throw new Error(p)
//                 }
//                 o[s] = d, r = r || d !== l
//             }
//             return r ? o : t
//         }
//     }
// }, function(t, e, n) {
//     "use strict";

//     function r(t) {
//         "undefined" != typeof console && "function" == typeof console.error && console.error(t);
//         try {
//             throw new Error(t)
//         } catch (t) {}
//     }
//     n.r(e), n.d(e, "default", function() {
//         return r
//     })
// }, function(t, e, n) {
//     "use strict";

//     function r(t, e) {
//         return function() {
//             return e(t.apply(void 0, arguments))
//         }
//     }

//     function i(t, e) {
//         if ("function" == typeof t) return r(t, e);
//         if ("object" != typeof t || null === t) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : typeof t) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
//         for (var n = Object.keys(t), i = {}, o = 0; o < n.length; o++) {
//             var a = n[o],
//                 u = t[a];
//             "function" == typeof u && (i[a] = r(u, e))
//         }
//         return i
//     }
//     n.r(e), n.d(e, "default", function() {
//         return i
//     })
// }, function(t, e, n) {
//     "use strict";
//     n.r(e), n.d(e, "default", function() {
//         return o
//     });
//     var r = n(29),
//         i = Object.assign || function(t) {
//             for (var e = 1; e < arguments.length; e++) {
//                 var n = arguments[e];
//                 for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
//             }
//             return t
//         };

//     function o() {
//         for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
//         return function(t) {
//             return function(n, o, a) {
//                 var u, c = t(n, o, a),
//                     s = c.dispatch,
//                     f = {
//                         getState: c.getState,
//                         dispatch: function(t) {
//                             return s(t)
//                         }
//                     };
//                 return u = e.map(function(t) {
//                     return t(f)
//                 }), s = r.default.apply(void 0, u)(c.dispatch), i({}, c, {
//                     dispatch: s
//                 })
//             }
//         }
//     }
// }, function(t, e, n) {
//     var r = n(62)(n(182));
//     t.exports = r
// }, function(t, e, n) {
//     var r = n(5),
//         i = n(10),
//         o = n(21);
//     t.exports = function(t) {
//         return function(e, n, a) {
//             var u = Object(e);
//             if (!i(e)) {
//                 var c = r(n, 3);
//                 e = o(e), n = function(t) {
//                     return c(u[t], t, u)
//                 }
//             }
//             var s = t(e, n, a);
//             return s > -1 ? u[c ? e[s] : s] : void 0
//         }
//     }
// }, function(t, e, n) {
//     var r = n(17),
//         i = n(126),
//         o = n(127),
//         a = n(128),
//         u = n(129),
//         c = n(130);

//     function s(t) {
//         var e = this.__data__ = new r(t);
//         this.size = e.size
//     }
//     s.prototype.clear = i, s.prototype.delete = o, s.prototype.get = a, s.prototype.has = u, s.prototype.set = c, t.exports = s
// }, function(t, e, n) {
//     var r = n(9),
//         i = n(4),
//         o = "[object AsyncFunction]",
//         a = "[object Function]",
//         u = "[object GeneratorFunction]",
//         c = "[object Proxy]";
//     t.exports = function(t) {
//         if (!i(t)) return !1;
//         var e = r(t);
//         return e == a || e == u || e == o || e == c
//     }
// }, function(t, e, n) {
//     (function(e) {
//         var n = "object" == typeof e && e && e.Object === Object && e;
//         t.exports = n
//     }).call(this, n(28))
// }, function(t, e) {
//     var n = Function.prototype.toString;
//     t.exports = function(t) {
//         if (null != t) {
//             try {
//                 return n.call(t)
//             } catch (t) {}
//             try {
//                 return t + ""
//             } catch (t) {}
//         }
//         return ""
//     }
// }, function(t, e, n) {
//     var r = n(149),
//         i = n(7);
//     t.exports = function t(e, n, o, a, u) {
//         return e === n || (null == e || null == n || !i(e) && !i(n) ? e != e && n != n : r(e, n, o, a, t, u))
//     }
// }, function(t, e, n) {
//     var r = n(150),
//         i = n(153),
//         o = n(154),
//         a = 1,
//         u = 2;
//     t.exports = function(t, e, n, c, s, f) {
//         var l = n & a,
//             d = t.length,
//             p = e.length;
//         if (d != p && !(l && p > d)) return !1;
//         var v = f.get(t);
//         if (v && f.get(e)) return v == e;
//         var E = -1,
//             h = !0,
//             _ = n & u ? new r : void 0;
//         for (f.set(t, e), f.set(e, t); ++E < d;) {
//             var g = t[E],
//                 I = e[E];
//             if (c) var y = l ? c(I, g, E, e, t, f) : c(g, I, E, t, e, f);
//             if (void 0 !== y) {
//                 if (y) continue;
//                 h = !1;
//                 break
//             }
//             if (_) {
//                 if (!i(e, function(t, e) {
//                         if (!o(_, e) && (g === t || s(g, t, n, c, f))) return _.push(e)
//                     })) {
//                     h = !1;
//                     break
//                 }
//             } else if (g !== I && !s(g, I, n, c, f)) {
//                 h = !1;
//                 break
//             }
//         }
//         return f.delete(t), f.delete(e), h
//     }
// }, function(t, e, n) {
//     var r = n(34),
//         i = n(1);
//     t.exports = function(t, e, n) {
//         var o = e(t);
//         return i(t) ? o : r(o, n(t))
//     }
// }, function(t, e, n) {
//     var r = n(161),
//         i = n(71),
//         o = Object.prototype.propertyIsEnumerable,
//         a = Object.getOwnPropertySymbols,
//         u = a ? function(t) {
//             return null == t ? [] : (t = Object(t), r(a(t), function(e) {
//                 return o.call(t, e)
//             }))
//         } : i;
//     t.exports = u
// }, function(t, e) {
//     t.exports = function() {
//         return []
//     }
// }, function(t, e, n) {
//     var r = n(162),
//         i = n(22),
//         o = n(1),
//         a = n(35),
//         u = n(36),
//         c = n(37),
//         s = Object.prototype.hasOwnProperty;
//     t.exports = function(t, e) {
//         var n = o(t),
//             f = !n && i(t),
//             l = !n && !f && a(t),
//             d = !n && !f && !l && c(t),
//             p = n || f || l || d,
//             v = p ? r(t.length, String) : [],
//             E = v.length;
//         for (var h in t) !e && !s.call(t, h) || p && ("length" == h || l && ("offset" == h || "parent" == h) || d && ("buffer" == h || "byteLength" == h || "byteOffset" == h) || u(h, E)) || v.push(h);
//         return v
//     }
// }, function(t, e) {
//     t.exports = function(t) {
//         return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
//             enumerable: !0,
//             get: function() {
//                 return t.l
//             }
//         }), Object.defineProperty(t, "id", {
//             enumerable: !0,
//             get: function() {
//                 return t.i
//             }
//         }), t.webpackPolyfill = 1), t
//     }
// }, function(t, e) {
//     t.exports = function(t, e) {
//         return function(n) {
//             return t(e(n))
//         }
//     }
// }, function(t, e, n) {
//     var r = n(6)(n(3), "WeakMap");
//     t.exports = r
// }, function(t, e, n) {
//     var r = n(4);
//     t.exports = function(t) {
//         return t == t && !r(t)
//     }
// }, function(t, e) {
//     t.exports = function(t, e) {
//         return function(n) {
//             return null != n && n[t] === e && (void 0 !== e || t in Object(n))
//         }
//     }
// }, function(t, e, n) {
//     var r = n(79);
//     t.exports = function(t) {
//         return null == t ? "" : r(t)
//     }
// }, function(t, e, n) {
//     var r = n(11),
//         i = n(80),
//         o = n(1),
//         a = n(25),
//         u = 1 / 0,
//         c = r ? r.prototype : void 0,
//         s = c ? c.toString : void 0;
//     t.exports = function t(e) {
//         if ("string" == typeof e) return e;
//         if (o(e)) return i(e, t) + "";
//         if (a(e)) return s ? s.call(e) : "";
//         var n = e + "";
//         return "0" == n && 1 / e == -u ? "-0" : n
//     }
// }, function(t, e) {
//     t.exports = function(t, e) {
//         for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t);
//         return i
//     }
// }, function(t, e) {
//     t.exports = function(t) {
//         return function(e) {
//             return null == e ? void 0 : e[t]
//         }
//     }
// }, function(t, e) {
//     t.exports = function(t, e, n, r) {
//         for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
//             if (e(t[o], o, t)) return o;
//         return -1
//     }
// }, function(t, e, n) {
//     "use strict";
//     var r = n(0);
//     Object.defineProperty(e, "__esModule", {
//         value: !0
//     }), e.inQuad = function(t) {
//         return Math.pow(t, 2)
//     }, e.outQuad = function(t) {
//         return -(Math.pow(t - 1, 2) - 1)
//     }, e.inOutQuad = function(t) {
//         if ((t /= .5) < 1) return .5 * Math.pow(t, 2);
//         return -.5 * ((t -= 2) * t - 2)
//     }, e.inCubic = function(t) {
//         return Math.pow(t, 3)
//     }, e.outCubic = function(t) {
//         return Math.pow(t - 1, 3) + 1
//     }, e.inOutCubic = function(t) {
//         if ((t /= .5) < 1) return .5 * Math.pow(t, 3);
//         return .5 * (Math.pow(t - 2, 3) + 2)
//     }, e.inQuart = function(t) {
//         return Math.pow(t, 4)
//     }, e.outQuart = function(t) {
//         return -(Math.pow(t - 1, 4) - 1)
//     }, e.inOutQuart = function(t) {
//         if ((t /= .5) < 1) return .5 * Math.pow(t, 4);
//         return -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
//     }, e.inQuint = function(t) {
//         return Math.pow(t, 5)
//     }, e.outQuint = function(t) {
//         return Math.pow(t - 1, 5) + 1
//     }, e.inOutQuint = function(t) {
//         if ((t /= .5) < 1) return .5 * Math.pow(t, 5);
//         return .5 * (Math.pow(t - 2, 5) + 2)
//     }, e.inSine = function(t) {
//         return 1 - Math.cos(t * (Math.PI / 2))
//     }, e.outSine = function(t) {
//         return Math.sin(t * (Math.PI / 2))
//     }, e.inOutSine = function(t) {
//         return -.5 * (Math.cos(Math.PI * t) - 1)
//     }, e.inExpo = function(t) {
//         return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
//     }, e.outExpo = function(t) {
//         return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
//     }, e.inOutExpo = function(t) {
//         if (0 === t) return 0;
//         if (1 === t) return 1;
//         if ((t /= .5) < 1) return .5 * Math.pow(2, 10 * (t - 1));
//         return .5 * (2 - Math.pow(2, -10 * --t))
//     }, e.inCirc = function(t) {
//         return -(Math.sqrt(1 - t * t) - 1)
//     }, e.outCirc = function(t) {
//         return Math.sqrt(1 - Math.pow(t - 1, 2))
//     }, e.inOutCirc = function(t) {
//         if ((t /= .5) < 1) return -.5 * (Math.sqrt(1 - t * t) - 1);
//         return .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
//     }, e.outBounce = function(t) {
//         return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
//     }, e.inBack = function(t) {
//         return t * t * ((o + 1) * t - o)
//     }, e.outBack = function(t) {
//         return (t -= 1) * t * ((o + 1) * t + o) + 1
//     }, e.inOutBack = function(t) {
//         var e = o;
//         if ((t /= .5) < 1) return t * t * ((1 + (e *= 1.525)) * t - e) * .5;
//         return .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
//     }, e.inElastic = function(t) {
//         var e = o,
//             n = 0,
//             r = 1;
//         if (0 === t) return 0;
//         if (1 === t) return 1;
//         n || (n = .3);
//         r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
//         return -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)
//     }, e.outElastic = function(t) {
//         var e = o,
//             n = 0,
//             r = 1;
//         if (0 === t) return 0;
//         if (1 === t) return 1;
//         n || (n = .3);
//         r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
//         return r * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1
//     }, e.inOutElastic = function(t) {
//         var e = o,
//             n = 0,
//             r = 1;
//         if (0 === t) return 0;
//         if (2 == (t /= .5)) return 1;
//         n || (n = .3 * 1.5);
//         r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
//         if (t < 1) return r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5;
//         return r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1
//     }, e.swingFromTo = function(t) {
//         var e = o;
//         return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
//     }, e.swingFrom = function(t) {
//         return t * t * ((o + 1) * t - o)
//     }, e.swingTo = function(t) {
//         return (t -= 1) * t * ((o + 1) * t + o) + 1
//     }, e.bounce = function(t) {
//         return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
//     }, e.bouncePast = function(t) {
//         return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
//     }, e.easeInOut = e.easeOut = e.easeIn = e.ease = void 0;
//     var i = r(n(184)),
//         o = 1.70158,
//         a = (0, i.default)(.25, .1, .25, 1);
//     e.ease = a;
//     var u = (0, i.default)(.42, 0, 1, 1);
//     e.easeIn = u;
//     var c = (0, i.default)(0, 0, .58, 1);
//     e.easeOut = c;
//     var s = (0, i.default)(.42, 0, .58, 1);
//     e.easeInOut = s
// }, function(t, e, n) {
//     "use strict";
//     var r = n(16);
//     Object.defineProperty(e, "__esModule", {
//         value: !0
//     }), e.optimizeFloat = o, e.applyEasing = function(t, e) {
//         if (0 === e) return 0;
//         if (1 === e) return 1;
//         return o(e > 0 && t && i[t] ? i[t](e) : e)
//     };
//     var i = r(n(83));

//     function o(t) {
//         var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
//             n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
//             r = Math.pow(n, e),
//             i = Number(Math.round(t * r) / r);
//         return Math.abs(i) > 1e-4 ? i : 0
//     }
// }, function(t, e, n) {
//     "use strict";
//     Object.defineProperty(e, "__esModule", {
//         value: !0
//     }), e.IX2_TEST_FRAME_RENDERED = e.IX2_MEDIA_QUERIES_DEFINED = e.IX2_VIEWPORT_WIDTH_CHANGED = e.IX2_ACTION_LIST_PLAYBACK_CHANGED = e.IX2_ELEMENT_STATE_CHANGED = e.IX2_INSTANCE_REMOVED = e.IX2_INSTANCE_STARTED = e.IX2_INSTANCE_ADDED = e.IX2_PARAMETER_CHANGED = e.IX2_ANIMATION_FRAME_CHANGED = e.IX2_EVENT_STATE_CHANGED = e.IX2_EVENT_LISTENER_ADDED = e.IX2_CLEAR_REQUESTED = e.IX2_STOP_REQUESTED = e.IX2_PLAYBACK_REQUESTED = e.IX2_PREVIEW_REQUESTED = e.IX2_SESSION_STOPPED = e.IX2_SESSION_STARTED = e.IX2_SESSION_INITIALIZED = e.IX2_RAW_DATA_IMPORTED = void 0;
//     e.IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED";
//     e.IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED";
//     e.IX2_SESSION_STARTED = "IX2_SESSION_STARTED";
//     e.IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED";
//     e.IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED";
//     e.IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED";
//     e.IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED";
//     e.IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED";
//     e.IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED";
//     e.IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED";
//     e.IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED";
//     e.IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED";
//     e.IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED";
//     e.IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED";
//     e.IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED";
//     e.IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED";
//     e.IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
//     e.IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED";
//     e.IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED";
//     e.IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED"
// }, function(t, e, n) {
//     "use strict";
//     Object.defineProperty(e, "__esModule", {
//         value: !0
//     }), e.ECOMMERCE_CART_CLOSE = e.ECOMMERCE_CART_OPEN = e.PAGE = e.VIEWPORT = e.ELEMENT = e.PAGE_SCROLL = e.PAGE_SCROLL_DOWN = e.PAGE_SCROLL_UP = e.PAGE_FINISH = e.PAGE_START = e.COMPONENT_INACTIVE = e.COMPONENT_ACTIVE = e.DROPDOWN_CLOSE = e.DROPDOWN_OPEN = e.SLIDER_INACTIVE = e.SLIDER_ACTIVE = e.NAVBAR_CLOSE = e.NAVBAR_OPEN = e.TAB_INACTIVE = e.TAB_ACTIVE = e.SCROLLING_IN_VIEW = e.SCROLL_OUT_OF_VIEW = e.SCROLL_INTO_VIEW = e.MOUSE_MOVE = e.MOUSE_OUT = e.MOUSE_OVER = e.MOUSE_UP = e.MOUSE_DOWN = e.MOUSE_SECOND_CLICK = e.MOUSE_CLICK = void 0;
//     e.MOUSE_CLICK = "MOUSE_CLICK";
//     e.MOUSE_SECOND_CLICK = "MOUSE_SECOND_CLICK";
//     e.MOUSE_DOWN = "MOUSE_DOWN";
//     e.MOUSE_UP = "MOUSE_UP";
//     e.MOUSE_OVER = "MOUSE_OVER";
//     e.MOUSE_OUT = "MOUSE_OUT";
//     e.MOUSE_MOVE = "MOUSE_MOVE";
//     e.SCROLL_INTO_VIEW = "SCROLL_INTO_VIEW";
//     e.SCROLL_OUT_OF_VIEW = "SCROLL_OUT_OF_VIEW";
//     e.SCROLLING_IN_VIEW = "SCROLLING_IN_VIEW";
//     e.TAB_ACTIVE = "TAB_ACTIVE";
//     e.TAB_INACTIVE = "TAB_INACTIVE";
//     e.NAVBAR_OPEN = "NAVBAR_OPEN";
//     e.NAVBAR_CLOSE = "NAVBAR_CLOSE";
//     e.SLIDER_ACTIVE = "SLIDER_ACTIVE";
//     e.SLIDER_INACTIVE = "SLIDER_INACTIVE";
//     e.DROPDOWN_OPEN = "DROPDOWN_OPEN";
//     e.DROPDOWN_CLOSE = "DROPDOWN_CLOSE";
//     e.COMPONENT_ACTIVE = "COMPONENT_ACTIVE";
//     e.COMPONENT_INACTIVE = "COMPONENT_INACTIVE";
//     e.PAGE_START = "PAGE_START";
//     e.PAGE_FINISH = "PAGE_FINISH";
//     e.PAGE_SCROLL_UP = "PAGE_SCROLL_UP";
//     e.PAGE_SCROLL_DOWN = "PAGE_SCROLL_DOWN";
//     e.PAGE_SCROLL = "PAGE_SCROLL";
//     e.ELEMENT = "ELEMENT";
//     e.VIEWPORT = "VIEWPORT";
//     e.PAGE = "PAGE";
//     e.ECOMMERCE_CART_OPEN = "ECOMMERCE_CART_OPEN";
//     e.ECOMMERCE_CART_CLOSE = "ECOMMERCE_CART_CLOSE"
// }, function(t, e, n) {
//     "use strict";
//     var r = n(0)(n(14));
//     Object.defineProperty(e, "__esModule", {
//         value: !0
//     }), e.isPluginType = function(t) {
//         return t === o.PLUGIN_LOTTIE
//     }, e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginDuration = e.getPluginOrigin = e.getPluginConfig = void 0;
//     var i = n(186),
//         o = n(47),
//         a = n(30),
//         u = (0, r.default)({}, o.PLUGIN_LOTTIE, {
//             getConfig: i.getPluginConfig,
//             getOrigin: i.getPluginOrigin,
//             getDuration: i.getPluginDuration,
//             getDestination: i.getPluginDestination,
//             createInstance: i.createPluginInstance,
//             render: i.renderPlugin,
//             clear: i.clearPlugin
//         });
//     var c = function(t) {
//             return function(e) {
//                 if (!a.IS_BROWSER_ENV) return function() {
//                     return null
//                 };
//                 var n = u[e];
//                 if (!n) throw new Error("IX2 no plugin configured for: ".concat(e));
//                 var r = n[t];
//                 if (!r) throw new Error("IX2 invalid plugin method: ".concat(t));
//                 return r
//             }
//         },
//         s = c("getConfig");
//     e.getPluginConfig = s;
//     var f = c("getOrigin");
//     e.getPluginOrigin = f;
//     var l = c("getDuration");
//     e.getPluginDuration = l;
//     var d = c("getDestination");
//     e.getPluginDestination = d;
//     var p = c("createInstance");
//     e.createPluginInstance = p;
//     var v = c("render");
//     e.renderPlugin = v;
//     var E = c("clear");
//     e.clearPlugin = E
// }, function(t, e, n) {
//     var r = n(89),
//         i = n(193)(r);
//     t.exports = i
// }, function(t, e, n) {
//     var r = n(191),
//         i = n(21);
//     t.exports = function(t, e) {
//         return t && r(t, e, i)
//     }
// }, function(t, e, n) {
//     "use strict";
//     e.__esModule = !0;
//     var r, i = n(197),
//         o = (r = i) && r.__esModule ? r : {
//             default: r
//         };
//     e.default = o.default
// }, function(t, e, n) {
//     "use strict";
//     var r = n(0)(n(202)),
//         i = n(16),
//         o = n(0);
//     Object.defineProperty(e, "__esModule", {
//         value: !0
//     }), e.observeRequests = function(t) {
//         G({
//             store: t,
//             select: function(t) {
//                 var e = t.ixRequest;
//                 return e.preview
//             },
//             onChange: ot
//         }), G({
//             store: t,
//             select: function(t) {
//                 var e = t.ixRequest;
//                 return e.playback
//             },
//             onChange: ct
//         }), G({
//             store: t,
//             select: function(t) {
//                 var e = t.ixRequest;
//                 return e.stop
//             },
//             onChange: st
//         }), G({
//             store: t,
//             select: function(t) {
//                 var e = t.ixRequest;
//                 return e.clear
//             },
//             onChange: ft
//         })
//     }, e.startEngine = lt, e.stopEngine = dt, e.stopAllActionGroups = yt, e.stopActionGroup = Tt, e.startActionGroup = mt;
//     var a = o(n(26)),
//         u = o(n(206)),
//         c = o(n(61)),
//         s = o(n(23)),
//         f = o(n(208)),
//         l = o(n(214)),
//         d = o(n(226)),
//         p = o(n(227)),
//         v = o(n(228)),
//         E = o(n(231)),
//         h = o(n(232)),
//         _ = o(n(90)),
//         g = n(2),
//         I = n(49),
//         y = i(n(235)),
//         T = o(n(236)),
//         m = g.IX2EngineEventTypes,
//         O = m.MOUSE_CLICK,
//         S = m.MOUSE_SECOND_CLICK,
//         A = g.IX2EngineConstants,
//         b = A.COLON_DELIMITER,
//         R = A.BOUNDARY_SELECTOR,
//         w = A.HTML_ELEMENT,
//         L = A.RENDER_GENERAL,
//         N = A.W_MOD_IX,
//         C = g.IX2EngineItemTypes,
//         x = C.GENERAL_START_ACTION,
//         D = C.GENERAL_CONTINUOUS_ACTION,
//         P = g.IX2VanillaUtils,
//         M = P.getAffectedElements,
//         F = P.getElementId,
//         j = P.getDestinationValues,
//         G = P.observeStore,
//         X = P.getInstanceId,
//         V = P.renderHTMLElement,
//         U = P.clearAllStyles,
//         k = P.getMaxDurationItemIndex,
//         B = P.getComputedStyle,
//         H = P.getInstanceOrigin,
//         W = P.reduceListToGroup,
//         Y = P.shouldNamespaceEventParameter,
//         z = P.getNamespacedParameterId,
//         K = P.shouldAllowMediaQuery,
//         Q = P.cleanupHTMLElement,
//         q = P.stringifyTarget,
//         $ = P.mediaQueriesEqual,
//         Z = g.IX2VanillaPlugins,
//         J = Z.isPluginType,
//         tt = Z.createPluginInstance,
//         et = Z.getPluginDuration,
//         nt = navigator.userAgent,
//         rt = nt.match(/iPad/i) || nt.match(/iPhone/),
//         it = 12;

//     function ot(t, e) {
//         lt({
//             store: e,
//             rawData: t.rawData,
//             allowEvents: !0
//         }), at()
//     }

//     function at() {
//         document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
//     }

//     function ut(t) {
//         return t && (0, E.default)(t, "_EFFECT")
//     }

//     function ct(t, e) {
//         var n = t.actionTypeId,
//             r = t.actionListId,
//             i = t.actionItemId,
//             o = t.eventId,
//             a = t.allowEvents,
//             u = t.immediate,
//             c = t.testManual,
//             s = t.verbose,
//             f = void 0 === s || s,
//             l = t.rawData;
//         if (r && i && l && u && (l = W({
//                 actionListId: r,
//                 actionItemId: i,
//                 rawData: l
//             })), lt({
//                 store: e,
//                 rawData: l,
//                 allowEvents: a,
//                 testManual: c
//             }), r && n === x || ut(n)) {
//             Tt({
//                 store: e,
//                 actionListId: r
//             }), It({
//                 store: e,
//                 actionListId: r,
//                 eventId: o
//             });
//             var d = mt({
//                 store: e,
//                 eventId: o,
//                 actionListId: r,
//                 immediate: u,
//                 verbose: f
//             });
//             f && d && e.dispatch((0, I.actionListPlaybackChanged)({
//                 actionListId: r,
//                 isPlaying: !u
//             }))
//         }
//     }

//     function st(t, e) {
//         var n = t.actionListId;
//         n ? Tt({
//             store: e,
//             actionListId: n
//         }) : yt({
//             store: e
//         }), dt(e)
//     }

//     function ft(t, e) {
//         dt(e), U({
//             store: e,
//             elementApi: y
//         })
//     }

//     function lt(t) {
//         var e, n = t.store,
//             i = t.rawData,
//             o = t.allowEvents,
//             a = t.testManual,
//             u = n.getState().ixSession;
//         i && n.dispatch((0, I.rawDataImported)(i)), u.active || (n.dispatch((0, I.sessionInitialized)({
//             hasBoundaryNodes: Boolean(document.querySelector(R))
//         })), o && (function(t) {
//             var e = t.getState().ixData.eventTypeMap;
//             Et(t), (0, v.default)(e, function(e, n) {
//                 var i = T.default[n];
//                 i ? function(t) {
//                     var e = t.logic,
//                         n = t.store,
//                         i = t.events;
//                     ! function(t) {
//                         if (rt) {
//                             var e = {},
//                                 n = "";
//                             for (var r in t) {
//                                 var i = t[r],
//                                     o = i.eventTypeId,
//                                     a = i.target,
//                                     u = y.getQuerySelector(a);
//                                 e[u] || o !== O && o !== S || (e[u] = !0, n += u + "{cursor: pointer;touch-action: manipulation;}")
//                             }
//                             if (n) {
//                                 var c = document.createElement("style");
//                                 c.textContent = n, document.body.appendChild(c)
//                             }
//                         }
//                     }(i);
//                     var o = e.types,
//                         a = e.handler,
//                         u = n.getState().ixData,
//                         l = u.actionLists,
//                         d = ht(i, gt);
//                     if ((0, f.default)(d)) {
//                         (0, v.default)(d, function(t, e) {
//                             var o = i[e],
//                                 a = o.action,
//                                 f = o.id,
//                                 d = o.mediaQueries,
//                                 p = void 0 === d ? u.mediaQueryKeys : d,
//                                 v = a.config.actionListId;
//                             if ($(p, u.mediaQueryKeys) || n.dispatch((0, I.mediaQueriesDefined)()), a.actionTypeId === D) {
//                                 var E = Array.isArray(o.config) ? o.config : [o.config];
//                                 E.forEach(function(e) {
//                                     var i = e.continuousParameterGroupId,
//                                         o = (0, s.default)(l, "".concat(v, ".continuousParameterGroups"), []),
//                                         a = (0, c.default)(o, function(t) {
//                                             var e = t.id;
//                                             return e === i
//                                         }),
//                                         u = (e.smoothing || 0) / 100,
//                                         d = (e.restingState || 0) / 100;
//                                     a && t.forEach(function(t, i) {
//                                         var o = f + b + i;
//                                         ! function(t) {
//                                             var e = t.store,
//                                                 n = t.eventStateKey,
//                                                 i = t.eventTarget,
//                                                 o = t.eventId,
//                                                 a = t.eventConfig,
//                                                 u = t.actionListId,
//                                                 c = t.parameterGroup,
//                                                 f = t.smoothing,
//                                                 l = t.restingValue,
//                                                 d = e.getState(),
//                                                 p = d.ixData,
//                                                 v = d.ixSession,
//                                                 E = p.events[o],
//                                                 h = E.eventTypeId,
//                                                 _ = {},
//                                                 g = {},
//                                                 I = [],
//                                                 T = c.continuousActionGroups,
//                                                 m = c.id;
//                                             Y(h, a) && (m = z(n, m));
//                                             var O = v.hasBoundaryNodes && i ? y.getClosestElement(i, R) : null;
//                                             T.forEach(function(t) {
//                                                 var e = t.keyframe,
//                                                     n = t.actionItems;
//                                                 n.forEach(function(t) {
//                                                     var n = t.actionTypeId,
//                                                         o = t.config.target;
//                                                     if (o) {
//                                                         var a = o.boundaryMode ? O : null,
//                                                             u = q(o) + b + n;
//                                                         if (g[u] = function() {
//                                                                 var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
//                                                                     n = arguments.length > 1 ? arguments[1] : void 0,
//                                                                     i = arguments.length > 2 ? arguments[2] : void 0,
//                                                                     o = (0, r.default)(e);
//                                                                 return o.some(function(e, r) {
//                                                                     return e.keyframe === n && (t = r, !0)
//                                                                 }), null == t && (t = o.length, o.push({
//                                                                     keyframe: n,
//                                                                     actionItems: []
//                                                                 })), o[t].actionItems.push(i), o
//                                                             }(g[u], e, t), !_[u]) {
//                                                             _[u] = !0;
//                                                             var c = t.config;
//                                                             M({
//                                                                 config: c,
//                                                                 event: E,
//                                                                 eventTarget: i,
//                                                                 elementRoot: a,
//                                                                 elementApi: y
//                                                             }).forEach(function(t) {
//                                                                 I.push({
//                                                                     element: t,
//                                                                     key: u
//                                                                 })
//                                                             })
//                                                         }
//                                                     }
//                                                 })
//                                             }), I.forEach(function(t) {
//                                                 var n = t.element,
//                                                     r = t.key,
//                                                     i = g[r],
//                                                     a = (0, s.default)(i, "[0].actionItems[0]", {}),
//                                                     c = a.actionTypeId,
//                                                     d = J(c) ? tt(c)(n, a) : null,
//                                                     p = j({
//                                                         element: n,
//                                                         actionItem: a,
//                                                         elementApi: y
//                                                     }, d);
//                                                 Ot({
//                                                     store: e,
//                                                     element: n,
//                                                     eventId: o,
//                                                     actionListId: u,
//                                                     actionItem: a,
//                                                     destination: p,
//                                                     continuous: !0,
//                                                     parameterId: m,
//                                                     actionGroups: i,
//                                                     smoothing: f,
//                                                     restingValue: l,
//                                                     pluginInstance: d
//                                                 })
//                                             })
//                                         }({
//                                             store: n,
//                                             eventStateKey: o,
//                                             eventTarget: t,
//                                             eventId: f,
//                                             eventConfig: e,
//                                             actionListId: v,
//                                             parameterGroup: a,
//                                             smoothing: u,
//                                             restingValue: d
//                                         })
//                                     })
//                                 })
//                             }(a.actionTypeId === x || ut(a.actionTypeId)) && It({
//                                 store: n,
//                                 actionListId: v,
//                                 eventId: f
//                             })
//                         });
//                         var p = function(t) {
//                                 var e = n.getState(),
//                                     r = e.ixSession;
//                                 _t(d, function(e, o, c) {
//                                     var s = i[o],
//                                         f = r.eventState[c],
//                                         l = s.action,
//                                         d = s.mediaQueries,
//                                         p = void 0 === d ? u.mediaQueryKeys : d;
//                                     if (K(p, r.mediaQueryKey)) {
//                                         var v = function() {
//                                             var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
//                                                 i = a({
//                                                     store: n,
//                                                     element: e,
//                                                     event: s,
//                                                     eventConfig: r,
//                                                     nativeEvent: t,
//                                                     eventStateKey: c
//                                                 }, f);
//                                             (0, _.default)(i, f) || n.dispatch((0, I.eventStateChanged)(c, i))
//                                         };
//                                         if (l.actionTypeId === D) {
//                                             var E = Array.isArray(s.config) ? s.config : [s.config];
//                                             E.forEach(v)
//                                         } else v()
//                                     }
//                                 })
//                             },
//                             E = (0, h.default)(p, it),
//                             g = function(t) {
//                                 var e = t.target,
//                                     r = void 0 === e ? document : e,
//                                     i = t.types,
//                                     o = t.throttle;
//                                 i.split(" ").filter(Boolean).forEach(function(t) {
//                                     var e = o ? E : p;
//                                     r.addEventListener(t, e), n.dispatch((0, I.eventListenerAdded)(r, [t, e]))
//                                 })
//                             };
//                         Array.isArray(o) ? o.forEach(g) : "string" == typeof o && g(e)
//                     }
//                 }({
//                     logic: i,
//                     store: t,
//                     events: e
//                 }) : console.warn("IX2 event type not configured: ".concat(n))
//             }), t.getState().ixSession.eventListeners.length && function(t) {
//                 var e = function() {
//                     Et(t)
//                 };
//                 vt.forEach(function(n) {
//                     window.addEventListener(n, e), t.dispatch((0, I.eventListenerAdded)(window, [n, e]))
//                 }), e()
//             }(t)
//         }(n), -1 === (e = document.documentElement).className.indexOf(N) && (e.className += " ".concat(N)), n.getState().ixSession.hasDefinedMediaQueries && function(t) {
//             G({
//                 store: t,
//                 select: function(t) {
//                     return t.ixSession.mediaQueryKey
//                 },
//                 onChange: function() {
//                     dt(t), U({
//                         store: t,
//                         elementApi: y
//                     }), lt({
//                         store: t,
//                         allowEvents: !0
//                     }), at()
//                 }
//             })
//         }(n)), n.dispatch((0, I.sessionStarted)()), function(t, e) {
//             ! function n(r) {
//                 var i = t.getState(),
//                     o = i.ixSession,
//                     a = i.ixParameters;
//                 o.active && (t.dispatch((0, I.animationFrameChanged)(r, a)), e ? function(t, e) {
//                     var n = G({
//                         store: t,
//                         select: function(t) {
//                             return t.ixSession.tick
//                         },
//                         onChange: function(t) {
//                             e(t), n()
//                         }
//                     })
//                 }(t, n) : requestAnimationFrame(n))
//             }(window.performance.now())
//         }(n, a))
//     }

//     function dt(t) {
//         var e = t.getState().ixSession;
//         e.active && (e.eventListeners.forEach(pt), t.dispatch((0, I.sessionStopped)()))
//     }

//     function pt(t) {
//         var e = t.target,
//             n = t.listenerParams;
//         e.removeEventListener.apply(e, n)
//     }
//     var vt = ["resize", "orientationchange"];

//     function Et(t) {
//         var e = t.getState(),
//             n = e.ixSession,
//             r = e.ixData,
//             i = window.innerWidth;
//         if (i !== n.viewportWidth) {
//             var o = r.mediaQueries;
//             t.dispatch((0, I.viewportWidthChanged)({
//                 width: i,
//                 mediaQueries: o
//             }))
//         }
//     }
//     var ht = function(t, e) {
//             return (0, l.default)((0, p.default)(t, e), d.default)
//         },
//         _t = function(t, e) {
//             (0, v.default)(t, function(t, n) {
//                 t.forEach(function(t, r) {
//                     e(t, n, n + b + r)
//                 })
//             })
//         },
//         gt = function(t) {
//             var e = {
//                 target: t.target
//             };
//             return M({
//                 config: e,
//                 elementApi: y
//             })
//         };

//     function It(t) {
//         var e = t.store,
//             n = t.actionListId,
//             r = t.eventId,
//             i = e.getState(),
//             o = i.ixData,
//             a = i.ixSession,
//             u = o.actionLists,
//             c = o.events[r],
//             f = u[n];
//         if (f && f.useFirstGroupAsInitialState) {
//             var l = (0, s.default)(f, "actionItemGroups[0].actionItems", []),
//                 d = (0, s.default)(c, "mediaQueries", o.mediaQueryKeys);
//             if (!K(d, a.mediaQueryKey)) return;
//             l.forEach(function(t) {
//                 var i = t.config,
//                     o = t.actionTypeId,
//                     a = M({
//                         config: i,
//                         event: c,
//                         elementApi: y
//                     }),
//                     u = J(o);
//                 a.forEach(function(i) {
//                     var a = u ? tt(o)(i, t) : null;
//                     Ot({
//                         destination: j({
//                             element: i,
//                             actionItem: t,
//                             elementApi: y
//                         }, a),
//                         immediate: !0,
//                         store: e,
//                         element: i,
//                         eventId: r,
//                         actionItem: t,
//                         actionListId: n,
//                         pluginInstance: a
//                     })
//                 })
//             })
//         }
//     }

//     function yt(t) {
//         var e = t.store,
//             n = e.getState().ixInstances;
//         (0, v.default)(n, function(t) {
//             if (!t.continuous) {
//                 var n = t.actionListId,
//                     r = t.verbose;
//                 St(t, e), r && e.dispatch((0, I.actionListPlaybackChanged)({
//                     actionListId: n,
//                     isPlaying: !1
//                 }))
//             }
//         })
//     }

//     function Tt(t) {
//         var e = t.store,
//             n = t.eventId,
//             r = t.eventTarget,
//             i = t.eventStateKey,
//             o = t.actionListId,
//             a = e.getState(),
//             u = a.ixInstances,
//             c = a.ixSession.hasBoundaryNodes && r ? y.getClosestElement(r, R) : null;
//         (0, v.default)(u, function(t) {
//             var r = (0, s.default)(t, "actionItem.config.target.boundaryMode"),
//                 a = !i || t.eventStateKey === i;
//             if (t.actionListId === o && t.eventId === n && a) {
//                 if (c && r && !y.elementContains(c, t.element)) return;
//                 St(t, e), t.verbose && e.dispatch((0, I.actionListPlaybackChanged)({
//                     actionListId: o,
//                     isPlaying: !1
//                 }))
//             }
//         })
//     }

//     function mt(t) {
//         var e = t.store,
//             n = t.eventId,
//             r = t.eventTarget,
//             i = t.eventStateKey,
//             o = t.actionListId,
//             a = t.groupIndex,
//             u = void 0 === a ? 0 : a,
//             c = t.immediate,
//             f = t.verbose,
//             l = e.getState(),
//             d = l.ixData,
//             p = l.ixSession,
//             v = d.events[n] || {},
//             E = v.mediaQueries,
//             h = void 0 === E ? d.mediaQueryKeys : E,
//             _ = (0, s.default)(d, "actionLists.".concat(o), {}),
//             g = _.actionItemGroups,
//             I = _.useFirstGroupAsInitialState;
//         u >= g.length && (0, s.default)(v, "config.loop") && (u = 0), 0 === u && I && u++;
//         var T = (0 === u || 1 === u && I) && ut(v.action && v.action.actionTypeId) ? v.config.delay : void 0,
//             m = (0, s.default)(g, [u, "actionItems"], []);
//         if (!m.length) return !1;
//         if (!K(h, p.mediaQueryKey)) return !1;
//         var O = p.hasBoundaryNodes && r ? y.getClosestElement(r, R) : null,
//             S = k(m),
//             A = !1;
//         return m.forEach(function(t, a) {
//             var s = t.config,
//                 l = t.actionTypeId,
//                 d = J(l),
//                 p = s.target;
//             if (p) {
//                 var E = p.boundaryMode ? O : null;
//                 M({
//                     config: s,
//                     event: v,
//                     eventTarget: r,
//                     elementRoot: E,
//                     elementApi: y
//                 }).forEach(function(s, p) {
//                     var v = d ? tt(l)(s, t) : null,
//                         E = d ? et(l)(s, t) : null;
//                     A = !0;
//                     var h = S === a && 0 === p,
//                         _ = B({
//                             element: s,
//                             actionItem: t
//                         }),
//                         g = j({
//                             element: s,
//                             actionItem: t,
//                             elementApi: y
//                         }, v);
//                     Ot({
//                         store: e,
//                         element: s,
//                         actionItem: t,
//                         eventId: n,
//                         eventTarget: r,
//                         eventStateKey: i,
//                         actionListId: o,
//                         groupIndex: u,
//                         isCarrier: h,
//                         computedStyle: _,
//                         destination: g,
//                         immediate: c,
//                         verbose: f,
//                         pluginInstance: v,
//                         pluginDuration: E,
//                         instanceDelay: T
//                     })
//                 })
//             }
//         }), A
//     }

//     function Ot(t) {
//         var e = t.store,
//             n = t.computedStyle,
//             r = (0, u.default)(t, ["store", "computedStyle"]),
//             i = !r.continuous,
//             o = r.element,
//             c = r.actionItem,
//             s = r.immediate,
//             f = r.pluginInstance,
//             l = X(),
//             d = e.getState(),
//             p = d.ixElements,
//             v = d.ixSession,
//             E = F(p, o),
//             h = (p[E] || {}).refState,
//             _ = y.getRefType(o),
//             g = H(o, h, n, c, y, f);
//         e.dispatch((0, I.instanceAdded)((0, a.default)({
//             instanceId: l,
//             elementId: E,
//             origin: g,
//             refType: _
//         }, r))), At(document.body, "ix2-animation-started", l), s ? function(t, e) {
//             var n = t.getState().ixParameters;
//             t.dispatch((0, I.instanceStarted)(e, 0)), t.dispatch((0, I.animationFrameChanged)(performance.now(), n)), bt(t.getState().ixInstances[e], t)
//         }(e, l) : (G({
//             store: e,
//             select: function(t) {
//                 return t.ixInstances[l]
//             },
//             onChange: bt
//         }), i && e.dispatch((0, I.instanceStarted)(l, v.tick)))
//     }

//     function St(t, e) {
//         At(document.body, "ix2-animation-stopping", {
//             instanceId: t.id,
//             state: e.getState()
//         });
//         var n = t.elementId,
//             r = t.actionItem,
//             i = e.getState().ixElements[n] || {},
//             o = i.ref;
//         i.refType === w && Q(o, r, y), e.dispatch((0, I.instanceRemoved)(t.id))
//     }

//     function At(t, e, n) {
//         var r = document.createEvent("CustomEvent");
//         r.initCustomEvent(e, !0, !0, n), t.dispatchEvent(r)
//     }

//     function bt(t, e) {
//         var n = t.active,
//             r = t.continuous,
//             i = t.complete,
//             o = t.elementId,
//             a = t.actionItem,
//             u = t.actionTypeId,
//             c = t.renderType,
//             s = t.current,
//             f = t.groupIndex,
//             l = t.eventId,
//             d = t.eventTarget,
//             p = t.eventStateKey,
//             v = t.actionListId,
//             E = t.isCarrier,
//             h = t.styleProp,
//             _ = t.verbose,
//             g = t.pluginInstance,
//             T = e.getState(),
//             m = T.ixData,
//             O = T.ixSession,
//             S = (m.events[l] || {}).mediaQueries,
//             A = void 0 === S ? m.mediaQueryKeys : S;
//         if (K(A, O.mediaQueryKey) && (r || n || i)) {
//             if (s || c === L && i) {
//                 e.dispatch((0, I.elementStateChanged)(o, u, s, a));
//                 var b = e.getState().ixElements[o] || {},
//                     R = b.ref,
//                     N = b.refType,
//                     C = b.refState,
//                     x = C && C[u];
//                 switch (N) {
//                     case w:
//                         V(R, C, x, l, a, h, y, c, g)
//                 }
//             }
//             if (i) {
//                 if (E) {
//                     var D = mt({
//                         store: e,
//                         eventId: l,
//                         eventTarget: d,
//                         eventStateKey: p,
//                         actionListId: v,
//                         groupIndex: f + 1,
//                         verbose: _
//                     });
//                     _ && !D && e.dispatch((0, I.actionListPlaybackChanged)({
//                         actionListId: v,
//                         isPlaying: !1
//                     }))
//                 }
//                 St(t, e)
//             }
//         }
//     }
// }, function(t, e, n) {
//     var r = n(93);
//     t.exports = function(t, e, n) {
//         "__proto__" == e && r ? r(t, e, {
//             configurable: !0,
//             enumerable: !0,
//             value: n,
//             writable: !0
//         }) : t[e] = n
//     }
// }, function(t, e, n) {
//     var r = n(6),
//         i = function() {
//             try {
//                 var t = r(Object, "defineProperty");
//                 return t({}, "", {}), t
//             } catch (t) {}
//         }();
//     t.exports = i
// }, function(t, e) {
//     t.exports = function(t, e, n) {
//         return t == t && (void 0 !== n && (t = t <= n ? t : n), void 0 !== e && (t = t >= e ? t : e)), t
//     }
// }, function(t, e, n) {
//     var r = n(4),
//         i = Object.create,
//         o = function() {
//             function t() {}
//             return function(e) {
//                 if (!r(e)) return {};
//                 if (i) return i(e);
//                 t.prototype = e;
//                 var n = new t;
//                 return t.prototype = void 0, n
//             }
//         }();
//     t.exports = o
// }, function(t, e, n) {
//     var r = n(249),
//         i = n(250),
//         o = r ? function(t) {
//             return r.get(t)
//         } : i;
//     t.exports = o
// }, function(t, e, n) {
//     var r = n(251),
//         i = Object.prototype.hasOwnProperty;
//     t.exports = function(t) {
//         for (var e = t.name + "", n = r[e], o = i.call(r, e) ? n.length : 0; o--;) {
//             var a = n[o],
//                 u = a.func;
//             if (null == u || u == t) return a.name
//         }
//         return e
//     }
// }, function(t, e, n) {
//     n(99), n(101), n(102), n(104), n(257), n(258), t.exports = n(259)
// }, function(t, e, n) {
//     "use strict";
//     var r = n(8);
//     r.define("brand", t.exports = function(t) {
//         var e, n = {},
//             i = document,
//             o = t("html"),
//             a = t("body"),
//             u = ".w-webflow-badge",
//             c = window.location,
//             s = /PhantomJS/i.test(navigator.userAgent),
//             f = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";

//         function l() {
//             var n = i.fullScreen || i.mozFullScreen || i.webkitIsFullScreen || i.msFullscreenElement || Boolean(i.webkitFullscreenElement);
//             t(e).attr("style", n ? "display: none !important;" : "")
//         }

//         function d() {
//             var t = a.children(u),
//                 n = t.length && t.get(0) === e,
//                 i = r.env("editor");
//             n ? i && t.remove() : (t.length && t.remove(), i || a.append(e))
//         }
//         return n.ready = function() {
//             var n, r, a, u = o.attr("data-wf-status"),
//                 p = o.attr("data-wf-domain") || "";
//             /\.webflow\.io$/i.test(p) && c.hostname !== p && (u = !0), u && !s && (e = e || (n = t('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"), r = t("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt", "").css({
//                 marginRight: "8px",
//                 width: "16px"
//             }), a = t("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt", "Made in Webflow"), n.append(r, a), n[0]), d(), setTimeout(d, 500), t(i).off(f, l).on(f, l))
//         }, n
//     })
// }, function(t, e, n) {
//     "use strict";
//     var r = window.$,
//         i = n(53) && r.tram;
//     /*!
//      * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
//      * _.each
//      * _.map
//      * _.find
//      * _.filter
//      * _.any
//      * _.contains
//      * _.delay
//      * _.defer
//      * _.throttle (webflow)
//      * _.debounce
//      * _.keys
//      * _.has
//      * _.now
//      *
//      * http://underscorejs.org
//      * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//      * Underscore may be freely distributed under the MIT license.
//      * @license MIT
//      */
//     t.exports = function() {
//         var t = {
//                 VERSION: "1.6.0-Webflow"
//             },
//             e = {},
//             n = Array.prototype,
//             r = Object.prototype,
//             o = Function.prototype,
//             a = (n.push, n.slice),
//             u = (n.concat, r.toString, r.hasOwnProperty),
//             c = n.forEach,
//             s = n.map,
//             f = (n.reduce, n.reduceRight, n.filter),
//             l = (n.every, n.some),
//             d = n.indexOf,
//             p = (n.lastIndexOf, Array.isArray, Object.keys),
//             v = (o.bind, t.each = t.forEach = function(n, r, i) {
//                 if (null == n) return n;
//                 if (c && n.forEach === c) n.forEach(r, i);
//                 else if (n.length === +n.length) {
//                     for (var o = 0, a = n.length; o < a; o++)
//                         if (r.call(i, n[o], o, n) === e) return
//                 } else {
//                     var u = t.keys(n);
//                     for (o = 0, a = u.length; o < a; o++)
//                         if (r.call(i, n[u[o]], u[o], n) === e) return
//                 }
//                 return n
//             });
//         t.map = t.collect = function(t, e, n) {
//             var r = [];
//             return null == t ? r : s && t.map === s ? t.map(e, n) : (v(t, function(t, i, o) {
//                 r.push(e.call(n, t, i, o))
//             }), r)
//         }, t.find = t.detect = function(t, e, n) {
//             var r;
//             return E(t, function(t, i, o) {
//                 if (e.call(n, t, i, o)) return r = t, !0
//             }), r
//         }, t.filter = t.select = function(t, e, n) {
//             var r = [];
//             return null == t ? r : f && t.filter === f ? t.filter(e, n) : (v(t, function(t, i, o) {
//                 e.call(n, t, i, o) && r.push(t)
//             }), r)
//         };
//         var E = t.some = t.any = function(n, r, i) {
//             r || (r = t.identity);
//             var o = !1;
//             return null == n ? o : l && n.some === l ? n.some(r, i) : (v(n, function(t, n, a) {
//                 if (o || (o = r.call(i, t, n, a))) return e
//             }), !!o)
//         };
//         t.contains = t.include = function(t, e) {
//             return null != t && (d && t.indexOf === d ? -1 != t.indexOf(e) : E(t, function(t) {
//                 return t === e
//             }))
//         }, t.delay = function(t, e) {
//             var n = a.call(arguments, 2);
//             return setTimeout(function() {
//                 return t.apply(null, n)
//             }, e)
//         }, t.defer = function(e) {
//             return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)))
//         }, t.throttle = function(t) {
//             var e, n, r;
//             return function() {
//                 e || (e = !0, n = arguments, r = this, i.frame(function() {
//                     e = !1, t.apply(r, n)
//                 }))
//             }
//         }, t.debounce = function(e, n, r) {
//             var i, o, a, u, c, s = function s() {
//                 var f = t.now() - u;
//                 f < n ? i = setTimeout(s, n - f) : (i = null, r || (c = e.apply(a, o), a = o = null))
//             };
//             return function() {
//                 a = this, o = arguments, u = t.now();
//                 var f = r && !i;
//                 return i || (i = setTimeout(s, n)), f && (c = e.apply(a, o), a = o = null), c
//             }
//         }, t.defaults = function(e) {
//             if (!t.isObject(e)) return e;
//             for (var n = 1, r = arguments.length; n < r; n++) {
//                 var i = arguments[n];
//                 for (var o in i) void 0 === e[o] && (e[o] = i[o])
//             }
//             return e
//         }, t.keys = function(e) {
//             if (!t.isObject(e)) return [];
//             if (p) return p(e);
//             var n = [];
//             for (var r in e) t.has(e, r) && n.push(r);
//             return n
//         }, t.has = function(t, e) {
//             return u.call(t, e)
//         }, t.isObject = function(t) {
//             return t === Object(t)
//         }, t.now = Date.now || function() {
//             return (new Date).getTime()
//         }, t.templateSettings = {
//             evaluate: /<%([\s\S]+?)%>/g,
//             interpolate: /<%=([\s\S]+?)%>/g,
//             escape: /<%-([\s\S]+?)%>/g
//         };
//         var h = /(.)^/,
//             _ = {
//                 "'": "'",
//                 "\\": "\\",
//                 "\r": "r",
//                 "\n": "n",
//                 "\u2028": "u2028",
//                 "\u2029": "u2029"
//             },
//             g = /\\|'|\r|\n|\u2028|\u2029/g,
//             I = function(t) {
//                 return "\\" + _[t]
//             };
//         return t.template = function(e, n, r) {
//             !n && r && (n = r), n = t.defaults({}, n, t.templateSettings);
//             var i = RegExp([(n.escape || h).source, (n.interpolate || h).source, (n.evaluate || h).source].join("|") + "|$", "g"),
//                 o = 0,
//                 a = "__p+='";
//             e.replace(i, function(t, n, r, i, u) {
//                 return a += e.slice(o, u).replace(g, I), o = u + t.length, n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : i && (a += "';\n" + i + "\n__p+='"), t
//             }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
//             try {
//                 var u = new Function(n.variable || "obj", "_", a)
//             } catch (t) {
//                 throw t.source = a, t
//             }
//             var c = function(e) {
//                     return u.call(this, e, t)
//                 },
//                 s = n.variable || "obj";
//             return c.source = "function(" + s + "){\n" + a + "}", c
//         }, t
//     }()
// }, function(t, e, n) {
//     "use strict";
//     var r = n(8);
//     r.define("edit", t.exports = function(t, e, n) {
//         if (n = n || {}, (r.env("test") || r.env("frame")) && !n.fixture) return {
//             exit: 1
//         };
//         var i, o = t(window),
//             a = t(document.documentElement),
//             u = document.location,
//             c = "hashchange",
//             s = n.load || function() {
//                 i = !0, window.WebflowEditor = !0, o.off(c, l),
//                     function(t) {
//                         var e = window.document.createElement("iframe");
//                         e.src = "https://webflow.com/site/third-party-cookie-check.html", e.style.display = "none", e.sandbox = "allow-scripts allow-same-origin";
//                         var n = function n(r) {
//                             "WF_third_party_cookies_unsupported" === r.data ? (_(e, n), t(!1)) : "WF_third_party_cookies_supported" === r.data && (_(e, n), t(!0))
//                         };
//                         e.onerror = function() {
//                             _(e, n), t(!1)
//                         }, window.addEventListener("message", n, !1), window.document.body.appendChild(e)
//                     }(function(e) {
//                         t.ajax({
//                             url: h("https://editor-api.webflow.com/api/editor/view"),
//                             data: {
//                                 siteId: a.attr("data-wf-site")
//                             },
//                             xhrFields: {
//                                 withCredentials: !0
//                             },
//                             dataType: "json",
//                             crossDomain: !0,
//                             success: d(e)
//                         })
//                     })
//             },
//             f = !1;
//         try {
//             f = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
//         } catch (t) {}

//         function l() {
//             i || /\?edit/.test(u.hash) && s()
//         }

//         function d(t) {
//             return function(e) {
//                 e ? (e.thirdPartyCookiesSupported = t, p(E(e.bugReporterScriptPath), function() {
//                     p(E(e.scriptPath), function() {
//                         window.WebflowEditor(e)
//                     })
//                 })) : console.error("Could not load editor data")
//             }
//         }

//         function p(e, n) {
//             t.ajax({
//                 type: "GET",
//                 url: e,
//                 dataType: "script",
//                 cache: !0
//             }).then(n, v)
//         }

//         function v(t, e, n) {
//             throw console.error("Could not load editor script: " + e), n
//         }

//         function E(t) {
//             return t.indexOf("//") >= 0 ? t : h("https://editor-api.webflow.com" + t)
//         }

//         function h(t) {
//             return t.replace(/([^:])\/\//g, "$1/")
//         }

//         function _(t, e) {
//             window.removeEventListener("message", e, !1), t.remove()
//         }
//         return f ? s() : u.search ? (/[?&](edit)(?:[=&?]|$)/.test(u.search) || /\?edit$/.test(u.href)) && s() : o.on(c, l).triggerHandler(c), {}
//     })
// }, function(t, e, n) {
//     "use strict";
//     var r = n(103);

//     function i(t, e) {
//         var n = document.createEvent("CustomEvent");
//         n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n)
//     }
//     var o = window.jQuery,
//         a = {},
//         u = {
//             reset: function(t, e) {
//                 r.triggers.reset(t, e)
//             },
//             intro: function(t, e) {
//                 r.triggers.intro(t, e), i(e, "COMPONENT_ACTIVE")
//             },
//             outro: function(t, e) {
//                 r.triggers.outro(t, e), i(e, "COMPONENT_INACTIVE")
//             }
//         };
//     a.triggers = {}, a.types = {
//         INTRO: "w-ix-intro.w-ix",
//         OUTRO: "w-ix-outro.w-ix"
//     }, o.extend(a.triggers, u), t.exports = a
// }, function(t, e, n) {
//     "use strict";
//     var r = window.jQuery,
//         i = {},
//         o = [],
//         a = {
//             reset: function(t, e) {
//                 e.__wf_intro = null
//             },
//             intro: function(t, e) {
//                 e.__wf_intro || (e.__wf_intro = !0, r(e).triggerHandler(i.types.INTRO))
//             },
//             outro: function(t, e) {
//                 e.__wf_intro && (e.__wf_intro = null, r(e).triggerHandler(i.types.OUTRO))
//             }
//         };
//     i.triggers = {}, i.types = {
//         INTRO: "w-ix-intro.w-ix",
//         OUTRO: "w-ix-outro.w-ix"
//     }, i.init = function() {
//         for (var t = o.length, e = 0; e < t; e++) {
//             var n = o[e];
//             n[0](0, n[1])
//         }
//         o = [], r.extend(i.triggers, a)
//     }, i.async = function() {
//         for (var t in a) {
//             var e = a[t];
//             a.hasOwnProperty(t) && (i.triggers[t] = function(t, n) {
//                 o.push([e, n])
//             })
//         }
//     }, i.async(), t.exports = i
// }, function(t, e, n) {
//     "use strict";
//     var r = n(8),
//         i = n(105);
//     i.setEnv(r.env), r.define("ix2", t.exports = function() {
//         return i
//     })
// }, function(t, e, n) {
//     "use strict";
//     var r = n(16),
//         i = n(0);
//     Object.defineProperty(e, "__esModule", {
//         value: !0
//     }), e.setEnv = function(t) {
//         t() && (0, u.observeRequests)(s)
//     }, e.init = function(t) {
//         f(), (0, u.startEngine)({
//             store: s,
//             rawData: t,
//             allowEvents: !0
//         })
//     }, e.destroy = f, e.actions = e.store = void 0;
//     var o = n(54),
//         a = i(n(117)),
//         u = n(91),
//         c = r(n(49));
//     e.actions = c;
//     var s = (0, o.createStore)(a.default);

//     function f() {
//         (0, u.stopEngine)(s)
//     }
//     e.store = s
// }, function(t, e, n) {
//     "use strict";
//     n.r(e);
//     var r = n(56),
//         i = n(109),
//         o = n(110),
//         a = "[object Null]",
//         u = "[object Undefined]",
//         c = r.default ? r.default.toStringTag : void 0;
//     e.default = function(t) {
//         return null == t ? void 0 === t ? u : a : c && c in Object(t) ? Object(i.default)(t) : Object(o.default)(t)
//     }
// }, function(t, e, n) {
//     "use strict";
//     n.r(e);
//     var r = n(108),
//         i = "object" == typeof self && self && self.Object === Object && self,
//         o = r.default || i || Function("return this")();
//     e.default = o
// }, function(t, e, n) {
//     "use strict";
//     n.r(e),
//         function(t) {
//             var n = "object" == typeof t && t && t.Object === Object && t;
//             e.default = n
//         }.call(this, n(28))
// }, function(t, e, n) {
//     "use strict";
//     n.r(e);
//     var r = n(56),
//         i = Object.prototype,
//         o = i.hasOwnProperty,
//         a = i.toString,
//         u = r.default ? r.default.toStringTag : void 0;
//     e.default = function(t) {
//         var e = o.call(t, u),
//             n = t[u];
//         try {
//             t[u] = void 0;
//             var r = !0
//         } catch (t) {}
//         var i = a.call(t);
//         return r && (e ? t[u] = n : delete t[u]), i
//     }
// }, function(t, e, n) {
//     "use strict";
//     n.r(e);
//     var r = Object.prototype.toString;
//     e.default = function(t) {
//         return r.call(t)
//     }
// }, function(t, e, n) {
//     "use strict";
//     n.r(e);
//     var r = n(112),
//         i = Object(r.default)(Object.getPrototypeOf, Object);
//     e.default = i
// }, function(t, e, n) {
//     "use strict";
//     n.r(e), e.default = function(t, e) {
//         return function(n) {
//             return t(e(n))
//         }
//     }
// }, function(t, e, n) {
//     "use strict";
//     n.r(e), e.default = function(t) {
//         return null != t && "object" == typeof t
//     }
// }, function(t, e, n) {
//     "use strict";
//     n.r(e),
//         function(t, r) {
//             var i, o = n(116);
//             i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : r;
//             var a = Object(o.default)(i);
//             e.default = a
//         }.call(this, n(28), n(115)(t))
// }, function(t, e) {
//     t.exports = function(t) {
//         if (!t.webpackPolyfill) {
//             var e = Object.create(t);
//             e.children || (e.children = []), Object.defineProperty(e, "loaded", {
//                 enumerable: !0,
//                 get: function() {
//                     return e.l
//                 }
//             }), Object.defineProperty(e, "id", {
//                 enumerable: !0,
//                 get: function() {
//                     return e.i
//                 }
//             }), Object.defineProperty(e, "exports", {
//                 enumerable: !0
//             }), e.webpackPolyfill = 1
//         }
//         return e
//     }
// }, function(t, e, n) {
//     "use strict";

//     function r(t) {
//         var e, n = t.Symbol;
//         return "function" == typeof n ? n.observable ? e = n.observable : (e = n("observable"), n.observable = e) : e = "@@observable", e
//     }
//     n.r(e), n.d(e, "default", function() {
//         return r
//     })
// }, function(t, e, n) {
//     "use strict";
//     Object.defineProperty(e, "__esModule", {
//         value: !0
//     }), e.default = void 0;
//     var r = n(54),
//         i = n(118),
//         o = n(198),
//         a = n(199),
//         u = n(2),
//         c = n(200),
//         s = n(201),
//         f = u.IX2ElementsReducer.ixElements,
//         l = (0, r.combineReducers)({
//             ixData: i.ixData,
//             ixRequest: o.ixRequest,
//             ixSession: a.ixSession,
//             ixElements: f,
//             ixInstances: c.ixInstances,
//             ixParameters: s.ixParameters
//         });
//     e.default = l
// }, function(t, e, n) {
//     "use strict";
//     Object.defineProperty(e, "__esModule", {
//         value: !0
//     }), e.ixData = void 0;
//     var r = n(2).IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED;
//     e.ixData = function() {
//         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
//             e = arguments.length > 1 ? arguments[1] : void 0;
//         switch (e.type) {
//             case r:
//                 return e.payload.ixData || Object.freeze({});
//             default:
//                 return t
//         }
//     }
// }, function(t, e, n) {
//     var r = n(120),
//         i = n(172),
//         o = n(77);
//     t.exports = function(t) {
//         var e = i(t);
//         return 1 == e.length && e[0][2] ? o(e[0][0], e[0][1]) : function(n) {
//             return n === t || r(n, t, e)
//         }
//     }
// }, function(t, e, n) {
//     var r = n(63),
//         i = n(67),
//         o = 1,
//         a = 2;
//     t.exports = function(t, e, n, u) {
//         var c = n.length,
//             s = c,
//             f = !u;
//         if (null == t) return !s;
//         for (t = Object(t); c--;) {
//             var l = n[c];
//             if (f && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1
//         }
//         for (; ++c < s;) {
//             var d = (l = n[c])[0],
//                 p = t[d],
//                 v = l[1];
//             if (f && l[2]) {
//                 if (void 0 === p && !(d in t)) return !1
//             } else {
//                 var E = new r;
//                 if (u) var h = u(p, v, d, t, e, E);
//                 if (!(void 0 === h ? i(v, p, o | a, u, E) : h)) return !1
//             }
//         }
//         return !0
//     }
// }, function(t, e) {
//     t.exports = function() {
//         this.__data__ = [], this.size = 0
//     }
// }, function(t, e, n) {
//     var r = n(18),
//         i = Array.prototype.splice;
//     t.exports = function(t) {
//         var e = this.__data__,
//             n = r(e, t);
//         return !(n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0))
//     }
// }, function(t, e, n) {
//     var r = n(18);
//     t.exports = function(t) {
//         var e = this.__data__,
//             n = r(e, t);
//         return n < 0 ? void 0 : e[n][1]
//     }
// }, function(t, e, n) {
//     var r = n(18);
//     t.exports = function(t) {
//         return r(this.__data__, t) > -1
//     }
// }, function(t, e, n) {
//     var r = n(18);
//     t.exports = function(t, e) {
//         var n = this.__data__,
//             i = r(n, t);
//         return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
//     }
// }, function(t, e, n) {
//     var r = n(17);
//     t.exports = function() {
//         this.__data__ = new r, this.size = 0
//     }
// }, function(t, e) {
//     t.exports = function(t) {
//         var e = this.__data__,
//             n = e.delete(t);
//         return this.size = e.size, n
//     }
// }, function(t, e) {
//     t.exports = function(t) {
//         return this.__data__.get(t)
//     }
// }, function(t, e) {
//     t.exports = function(t) {
//         return this.__data__.has(t)
//     }
// }, function(t, e, n) {
//     var r = n(17),
//         i = n(32),
//         o = n(33),
//         a = 200;
//     t.exports = function(t, e) {
//         var n = this.__data__;
//         if (n instanceof r) {
//             var u = n.__data__;
//             if (!i || u.length < a - 1) return u.push([t, e]), this.size = ++n.size, this;
//             n = this.__data__ = new o(u)
//         }
//         return n.set(t, e), this.size = n.size, this
//     }
// }, function(t, e, n) {
//     var r = n(64),
//         i = n(134),
//         o = n(4),
//         a = n(66),
//         u = /^\[object .+?Constructor\]$/,
//         c = Function.prototype,
//         s = Object.prototype,
//         f = c.toString,
//         l = s.hasOwnProperty,
//         d = RegExp("^" + f.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
//     t.exports = function(t) {
//         return !(!o(t) || i(t)) && (r(t) ? d : u).test(a(t))
//     }
// }, function(t, e, n) {
//     var r = n(11),
//         i = Object.prototype,
//         o = i.hasOwnProperty,
//         a = i.toString,
//         u = r ? r.toStringTag : void 0;
//     t.exports = function(t) {
//         var e = o.call(t, u),
//             n = t[u];
//         try {
//             t[u] = void 0;
//             var r = !0
//         } catch (t) {}
//         var i = a.call(t);
//         return r && (e ? t[u] = n : delete t[u]), i
//     }
// }, function(t, e) {
//     var n = Object.prototype.toString;
//     t.exports = function(t) {
//         return n.call(t)
//     }
// }, function(t, e, n) {
//     var r, i = n(135),
//         o = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
//     t.exports = function(t) {
//         return !!o && o in t
//     }
// }, function(t, e, n) {
//     var r = n(3)["__core-js_shared__"];
//     t.exports = r
// }, function(t, e) {
//     t.exports = function(t, e) {
//         return null == t ? void 0 : t[e]
//     }
// }, function(t, e, n) {
//     var r = n(138),
//         i = n(17),
//         o = n(32);
//     t.exports = function() {
//         this.size = 0, this.__data__ = {
//             hash: new r,
//             map: new(o || i),
//             string: new r
//         }
//     }
// }, function(t, e, n) {
//     var r = n(139),
//         i = n(140),
//         o = n(141),
//         a = n(142),
//         u = n(143);

//     function c(t) {
//         var e = -1,
//             n = null == t ? 0 : t.length;
//         for (this.clear(); ++e < n;) {
//             var r = t[e];
//             this.set(r[0], r[1])
//         }
//     }
//     c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
// }, function(t, e, n) {
//     var r = n(19);
//     t.exports = function() {
//         this.__data__ = r ? r(null) : {}, this.size = 0
//     }
// }, function(t, e) {
//     t.exports = function(t) {
//         var e = this.has(t) && delete this.__data__[t];
//         return this.size -= e ? 1 : 0, e
//     }
// }, function(t, e, n) {
//     var r = n(19),
//         i = "__lodash_hash_undefined__",
//         o = Object.prototype.hasOwnProperty;
//     t.exports = function(t) {
//         var e = this.__data__;
//         if (r) {
//             var n = e[t];
//             return n === i ? void 0 : n
//         }
//         return o.call(e, t) ? e[t] : void 0
//     }
// }, function(t, e, n) {
//     var r = n(19),
//         i = Object.prototype.hasOwnProperty;
//     t.exports = function(t) {
//         var e = this.__data__;
//         return r ? void 0 !== e[t] : i.call(e, t)
//     }
// }, function(t, e, n) {
//     var r = n(19),
//         i = "__lodash_hash_undefined__";
//     t.exports = function(t, e) {
//         var n = this.__data__;
//         return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? i : e, this
//     }
// }, function(t, e, n) {
//     var r = n(20);
//     t.exports = function(t) {
//         var e = r(this, t).delete(t);
//         return this.size -= e ? 1 : 0, e
//     }
// }, function(t, e) {
//     t.exports = function(t) {
//         var e = typeof t;
//         return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
//     }
// }, function(t, e, n) {
//     var r = n(20);
//     t.exports = function(t) {
//         return r(this, t).get(t)
//     }
// }, function(t, e, n) {
//     var r = n(20);
//     t.exports = function(t) {
//         return r(this, t).has(t)
//     }
// }, function(t, e, n) {
//     var r = n(20);
//     t.exports = function(t, e) {
//         var n = r(this, t),
//             i = n.size;
//         return n.set(t, e), this.size += n.size == i ? 0 : 1, this
//     }
// }, function(t, e, n) {
//     var r = n(63),
//         i = n(68),
//         o = n(155),
//         a = n(159),
//         u = n(41),
//         c = n(1),
//         s = n(35),
//         f = n(37),
//         l = 1,
//         d = "[object Arguments]",
//         p = "[object Array]",
//         v = "[object Object]",
//         E = Object.prototype.hasOwnProperty;
//     t.exports = function(t, e, n, h, _, g) {
//         var I = c(t),
//             y = c(e),
//             T = I ? p : u(t),
//             m = y ? p : u(e),
//             O = (T = T == d ? v : T) == v,
//             S = (m = m == d ? v : m) == v,
//             A = T == m;
//         if (A && s(t)) {
//             if (!s(e)) return !1;
//             I = !0, O = !1
//         }
//         if (A && !O) return g || (g = new r), I || f(t) ? i(t, e, n, h, _, g) : o(t, e, T, n, h, _, g);
//         if (!(n & l)) {
//             var b = O && E.call(t, "__wrapped__"),
//                 R = S && E.call(e, "__wrapped__");
//             if (b || R) {
//                 var w = b ? t.value() : t,
//                     L = R ? e.value() : e;
//                 return g || (g = new r), _(w, L, n, h, g)
//             }
//         }
//         return !!A && (g || (g = new r), a(t, e, n, h, _, g))
//     }
// }, function(t, e, n) {
//     var r = n(33),
//         i = n(151),
//         o = n(152);

//     function a(t) {
//         var e = -1,
//             n = null == t ? 0 : t.length;
//         for (this.__data__ = new r; ++e < n;) this.add(t[e])
//     }
//     a.prototype.add = a.prototype.push = i, a.prototype.has = o, t.exports = a
// }, function(t, e) {
//     var n = "__lodash_hash_undefined__";
//     t.exports = function(t) {
//         return this.__data__.set(t, n), this
//     }
// }, function(t, e) {
//     t.exports = function(t) {
//         return this.__data__.has(t)
//     }
// }, function(t, e) {
//     t.exports = function(t, e) {
//         for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
//             if (e(t[n], n, t)) return !0;
//         return !1
//     }
// }, function(t, e) {
//     t.exports = function(t, e) {
//         return t.has(e)
//     }
// }, function(t, e, n) {
//     var r = n(11),
//         i = n(156),
//         o = n(31),
//         a = n(68),
//         u = n(157),
//         c = n(158),
//         s = 1,
//         f = 2,
//         l = "[object Boolean]",
//         d = "[object Date]",
//         p = "[object Error]",
//         v = "[object Map]",
//         E = "[object Number]",
//         h = "[object RegExp]",
//         _ = "[object Set]",
//         g = "[object String]",
//         I = "[object Symbol]",
//         y = "[object ArrayBuffer]",
//         T = "[object DataView]",
//         m = r ? r.prototype : void 0,
//         O = m ? m.valueOf : void 0;
//     t.exports = function(t, e, n, r, m, S, A) {
//         switch (n) {
//             case T:
//                 if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
//                 t = t.buffer, e = e.buffer;
//             case y:
//                 return !(t.byteLength != e.byteLength || !S(new i(t), new i(e)));
//             case l:
//             case d:
//             case E:
//                 return o(+t, +e);
//             case p:
//                 return t.name == e.name && t.message == e.message;
//             case h:
//             case g:
//                 return t == e + "";
//             case v:
//                 var b = u;
//             case _:
//                 var R = r & s;
//                 if (b || (b = c), t.size != e.size && !R) return !1;
//                 var w = A.get(t);
//                 if (w) return w == e;
//                 r |= f, A.set(t, e);
//                 var L = a(b(t), b(e), r, m, S, A);
//                 return A.delete(t), L;
//             case I:
//                 if (O) return O.call(t) == O.call(e)
//         }
//         return !1
//     }
// }, function(t, e, n) {
//     var r = n(3).Uint8Array;
//     t.exports = r
// }, function(t, e) {
//     t.exports = function(t) {
//         var e = -1,
//             n = Array(t.size);
//         return t.forEach(function(t, r) {
//             n[++e] = [r, t]
//         }), n
//     }
// }, function(t, e) {
//     t.exports = function(t) {
//         var e = -1,
//             n = Array(t.size);
//         return t.forEach(function(t) {
//             n[++e] = t
//         }), n
//     }
// }, function(t, e, n) {
//     var r = n(160),
//         i = 1,
//         o = Object.prototype.hasOwnProperty;
//     t.exports = function(t, e, n, a, u, c) {
//         var s = n & i,
//             f = r(t),
//             l = f.length;
//         if (l != r(e).length && !s) return !1;
//         for (var d = l; d--;) {
//             var p = f[d];
//             if (!(s ? p in e : o.call(e, p))) return !1
//         }
//         var v = c.get(t);
//         if (v && c.get(e)) return v == e;
//         var E = !0;
//         c.set(t, e), c.set(e, t);
//         for (var h = s; ++d < l;) {
//             var _ = t[p = f[d]],
//                 g = e[p];
//             if (a) var I = s ? a(g, _, p, e, t, c) : a(_, g, p, t, e, c);
//             if (!(void 0 === I ? _ === g || u(_, g, n, a, c) : I)) {
//                 E = !1;
//                 break
//             }
//             h || (h = "constructor" == p)
//         }
//         if (E && !h) {
//             var y = t.constructor,
//                 T = e.constructor;
//             y != T && "constructor" in t && "constructor" in e && !("function" == typeof y && y instanceof y && "function" == typeof T && T instanceof T) && (E = !1)
//         }
//         return c.delete(t), c.delete(e), E
//     }
// }, function(t, e, n) {
//     var r = n(69),
//         i = n(70),
//         o = n(21);
//     t.exports = function(t) {
//         return r(t, o, i)
//     }
// }, function(t, e) {
//     t.exports = function(t, e) {
//         for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r;) {
//             var a = t[n];
//             e(a, n, t) && (o[i++] = a)
//         }
//         return o
//     }
// }, function(t, e) {
//     t.exports = function(t, e) {
//         for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
//         return r
//     }
// }, function(t, e, n) {
//     var r = n(9),
//         i = n(7),
//         o = "[object Arguments]";
//     t.exports = function(t) {
//         return i(t) && r(t) == o
//     }
// }, function(t, e) {
//     t.exports = function() {
//         return !1
//     }
// }, function(t, e, n) {
//     var r = n(9),
//         i = n(38),
//         o = n(7),
//         a = {};
//     a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = function(t) {
//         return o(t) && i(t.length) && !!a[r(t)]
//     }
// }, function(t, e) {
//     t.exports = function(t) {
//         return function(e) {
//             return t(e)
//         }
//     }
// }, function(t, e, n) {
//     (function(t) {
//         var r = n(65),
//             i = e && !e.nodeType && e,
//             o = i && "object" == typeof t && t && !t.nodeType && t,
//             a = o && o.exports === i && r.process,
//             u = function() {
//                 try {
//                     var t = o && o.require && o.require("util").types;
//                     return t || a && a.binding && a.binding("util")
//                 } catch (t) {}
//             }();
//         t.exports = u
//     }).call(this, n(73)(t))
// }, function(t, e, n) {
//     var r = n(74)(Object.keys, Object);
//     t.exports = r
// }, function(t, e, n) {
//     var r = n(6)(n(3), "DataView");
//     t.exports = r
// }, function(t, e, n) {
//     var r = n(6)(n(3), "Promise");
//     t.exports = r
// }, function(t, e, n) {
//     var r = n(6)(n(3), "Set");
//     t.exports = r
// }, function(t, e, n) {
//     var r = n(76),
//         i = n(21);
//     t.exports = function(t) {
//         for (var e = i(t), n = e.length; n--;) {
//             var o = e[n],
//                 a = t[o];
//             e[n] = [o, a, r(a)]
//         }
//         return e
//     }
// }, function(t, e, n) {
//     var r = n(67),
//         i = n(23),
//         o = n(177),
//         a = n(43),
//         u = n(76),
//         c = n(77),
//         s = n(12),
//         f = 1,
//         l = 2;
//     t.exports = function(t, e) {
//         return a(t) && u(e) ? c(s(t), e) : function(n) {
//             var a = i(n, t);
//             return void 0 === a && a === e ? o(n, t) : r(e, a, f | l)
//         }
//     }
// }, function(t, e, n) {
//     var r = n(175),
//         i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
//         o = /\\(\\)?/g,
//         a = r(function(t) {
//             var e = [];
//             return 46 === t.charCodeAt(0) && e.push(""), t.replace(i, function(t, n, r, i) {
//                 e.push(r ? i.replace(o, "$1") : n || t)
//             }), e
//         });
//     t.exports = a
// }, function(t, e, n) {
//     var r = n(176),
//         i = 500;
//     t.exports = function(t) {
//         var e = r(t, function(t) {
//                 return n.size === i && n.clear(), t
//             }),
//             n = e.cache;
//         return e
//     }
// }, function(t, e, n) {
//     var r = n(33),
//         i = "Expected a function";

//     function o(t, e) {
//         if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(i);
//         var n = function() {
//             var r = arguments,
//                 i = e ? e.apply(this, r) : r[0],
//                 o = n.cache;
//             if (o.has(i)) return o.get(i);
//             var a = t.apply(this, r);
//             return n.cache = o.set(i, a) || o, a
//         };
//         return n.cache = new(o.Cache || r), n
//     }
//     o.Cache = r, t.exports = o
// }, function(t, e, n) {
//     var r = n(178),
//         i = n(179);
//     t.exports = function(t, e) {
//         return null != t && i(t, e, r)
//     }
// }, function(t, e) {
//     t.exports = function(t, e) {
//         return null != t && e in Object(t)
//     }
// }, function(t, e, n) {
//     var r = n(24),
//         i = n(22),
//         o = n(1),
//         a = n(36),
//         u = n(38),
//         c = n(12);
//     t.exports = function(t, e, n) {
//         for (var s = -1, f = (e = r(e, t)).length, l = !1; ++s < f;) {
//             var d = c(e[s]);
//             if (!(l = null != t && n(t, d))) break;
//             t = t[d]
//         }
//         return l || ++s != f ? l : !!(f = null == t ? 0 : t.length) && u(f) && a(d, f) && (o(t) || i(t))
//     }
// }, function(t, e, n) {
//     var r = n(81),
//         i = n(181),
//         o = n(43),
//         a = n(12);
//     t.exports = function(t) {
//         return o(t) ? r(a(t)) : i(t)
//     }
// }, function(t, e, n) {
//     var r = n(42);
//     t.exports = function(t) {
//         return function(e) {
//             return r(e, t)
//         }
//     }
// }, function(t, e, n) {
//     var r = n(82),
//         i = n(5),
//         o = n(45),
//         a = Math.max;
//     t.exports = function(t, e, n) {
//         var u = null == t ? 0 : t.length;
//         if (!u) return -1;
//         var c = null == n ? 0 : o(n);
//         return c < 0 && (c = a(u + c, 0)), r(t, i(e, 3), c)
//     }
// }, function(t, e, n) {
//     var r = n(46),
//         i = 1 / 0,
//         o = 1.7976931348623157e308;
//     t.exports = function(t) {
//         return t ? (t = r(t)) === i || t === -i ? (t < 0 ? -1 : 1) * o : t == t ? t : 0 : 0 === t ? t : 0
//     }
// }, function(t, e) {
//     var n = 4,
//         r = .001,
//         i = 1e-7,
//         o = 10,
//         a = 11,
//         u = 1 / (a - 1),
//         c = "function" == typeof Float32Array;

//     function s(t, e) {
//         return 1 - 3 * e + 3 * t
//     }

//     function f(t, e) {
//         return 3 * e - 6 * t
//     }

//     function l(t) {
//         return 3 * t
//     }

//     function d(t, e, n) {
//         return ((s(e, n) * t + f(e, n)) * t + l(e)) * t
//     }

//     function p(t, e, n) {
//         return 3 * s(e, n) * t * t + 2 * f(e, n) * t + l(e)
//     }
//     t.exports = function(t, e, s, f) {
//         if (!(0 <= t && t <= 1 && 0 <= s && s <= 1)) throw new Error("bezier x values must be in [0, 1] range");
//         var l = c ? new Float32Array(a) : new Array(a);
//         if (t !== e || s !== f)
//             for (var v = 0; v < a; ++v) l[v] = d(v * u, t, s);

//         function E(e) {
//             for (var c = 0, f = 1, v = a - 1; f !== v && l[f] <= e; ++f) c += u;
//             var E = c + (e - l[--f]) / (l[f + 1] - l[f]) * u,
//                 h = p(E, t, s);
//             return h >= r ? function(t, e, r, i) {
//                 for (var o = 0; o < n; ++o) {
//                     var a = p(e, r, i);
//                     if (0 === a) return e;
//                     e -= (d(e, r, i) - t) / a
//                 }
//                 return e
//             }(e, E, t, s) : 0 === h ? E : function(t, e, n, r, a) {
//                 var u, c, s = 0;
//                 do {
//                     (u = d(c = e + (n - e) / 2, r, a) - t) > 0 ? n = c : e = c
//                 } while (Math.abs(u) > i && ++s < o);
//                 return c
//             }(e, c, c + u, t, s)
//         }
//         return function(n) {
//             return t === e && s === f ? n : 0 === n ? 0 : 1 === n ? 1 : d(E(n), e, f)
//         }
//     }
// }, function(t, e, n) {
//     "use strict";
//     Object.defineProperty(e, "__esModule", {
//         value: !0
//     }), e.createElementState = c, e.mergeActionState = s, e.ixElements = void 0;
//     var r = n(13),
//         i = n(48),
//         o = n(85),
//         a = {},
//         u = "refState";

//     function c(t, e, n, o, a) {
//         var u = n === i.PLAIN_OBJECT ? (0, r.getIn)(a, ["config", "target", "objectId"]) : null;
//         return (0, r.mergeIn)(t, [o], {
//             id: o,
//             ref: e,
//             refId: u,
//             refType: n
//         })
//     }

//     function s(t, e, n, i, o) {
//         var a = function(t) {
//                 var e = t.config;
//                 return f.reduce(function(t, n) {
//                     var r = n[0],
//                         i = n[1],
//                         o = e[r],
//                         a = e[i];
//                     return null != o && null != a && (t[i] = a), t
//                 }, {})
//             }(o),
//             c = [e, u, n];
//         return (0, r.mergeIn)(t, c, i, a)
//     }
//     e.ixElements = function() {
//         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
//             e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
//         switch (e.type) {
//             case o.IX2_SESSION_STOPPED:
//                 return a;
//             case o.IX2_INSTANCE_ADDED:
//                 var n = e.payload,
//                     i = n.elementId,
//                     u = n.element,
//                     f = n.origin,
//                     l = n.actionItem,
//                     d = n.refType,
//                     p = l.actionTypeId,
//                     v = t;
//                 return (0, r.getIn)(v, [i, u]) !== u && (v = c(v, u, d, i, l)), s(v, i, p, f, l);
//             case o.IX2_ELEMENT_STATE_CHANGED:
//                 var E = e.payload;
//                 return s(t, E.elementId, E.actionTypeId, E.current, E.actionItem);
//             default:
//                 return t
//         }
//     };
//     var f = [
//         [i.CONFIG_X_VALUE, i.CONFIG_X_UNIT],
//         [i.CONFIG_Y_VALUE, i.CONFIG_Y_UNIT],
//         [i.CONFIG_Z_VALUE, i.CONFIG_Z_UNIT],
//         [i.CONFIG_VALUE, i.CONFIG_UNIT]
//     ]
// }, function(t, e, n) {
//     "use strict";
//     Object.defineProperty(e, "__esModule", {
//         value: !0
//     }), e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginOrigin = e.getPluginDuration = e.getPluginConfig = void 0;
//     e.getPluginConfig = function(t) {
//         return t.value
//     };
//     e.getPluginDuration = function(t, e) {
//         if ("auto" !== e.config.duration) return null;
//         var n = parseFloat(t.getAttribute("data-duration"));
//         return n > 0 ? 1e3 * n : 1e3 * parseFloat(t.getAttribute("data-default-duration"))
//     };
//     e.getPluginOrigin = function(t) {
//         return t || {
//             value: 0
//         }
//     };
//     e.getPluginDestination = function(t) {
//         return {
//             value: t.value
//         }
//     };
//     e.createPluginInstance = function(t) {
//         var e = window.Webflow.require("lottie").createInstance(t);
//         return e.pause(), e.setSubframe(!0), e
//     };
//     e.renderPlugin = function(t, e, n) {
//         if (t) {
//             var r = e[n.actionTypeId].value / 100;
//             t.setCurrentRawFrameValue(t.totalFrames * r)
//         }
//     };
//     e.clearPlugin = function(t) {
//         window.Webflow.require("lottie").createInstance(t).stop()
//     }
// }, function(t, e, n) {
//     "use strict";
//     var r, i, o, a = n(0),
//         u = a(n(15)),
//         c = a(n(14)),
//         s = n(0);
//     Object.defineProperty(e, "__esModule", {
//         value: !0
//     }), e.getInstanceId = function() {
//         return "i" + b++
//     }, e.getElementId = function(t, e) {
//         for (var n in t) {
//             var r = t[n];
//             if (r && r.ref === e) return r.id
//         }
//         return "e" + R++
//     }, e.reifyState = function() {
//         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
//             e = t.events,
//             n = t.actionLists,
//             r = t.site,
//             i = (0, l.default)(e, function(t, e) {
//                 var n = e.eventTypeId;
//                 return t[n] || (t[n] = {}), t[n][e.id] = e, t
//             }, {}),
//             o = r && r.mediaQueries,
//             a = [];
//         o ? a = o.map(function(t) {
//             return t.key
//         }) : (o = [], console.warn("IX2 missing mediaQueries in site data"));
//         return {
//             ixData: {
//                 events: e,
//                 actionLists: n,
//                 eventTypeMap: i,
//                 mediaQueries: o,
//                 mediaQueryKeys: a
//             }
//         }
//     }, e.observeStore = function(t) {
//         var e = t.store,
//             n = t.select,
//             r = t.onChange,
//             i = t.comparator,
//             o = void 0 === i ? w : i,
//             a = e.getState,
//             u = (0, e.subscribe)(function() {
//                 var t = n(a());
//                 if (null == t) return void u();
//                 o(t, c) || r(c = t, e)
//             }),
//             c = n(a());
//         return u
//     }, e.getAffectedElements = N, e.getComputedStyle = function(t) {
//         var e = t.element,
//             n = t.actionItem;
//         if (!T.IS_BROWSER_ENV) return {};
//         switch (n.actionTypeId) {
//             case y.STYLE_SIZE:
//             case y.STYLE_BACKGROUND_COLOR:
//             case y.STYLE_BORDER:
//             case y.STYLE_TEXT_COLOR:
//             case y.GENERAL_DISPLAY:
//                 return window.getComputedStyle(e);
//             default:
//                 return {}
//         }
//     }, e.getInstanceOrigin = function(t) {
//         var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
//             n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
//             r = arguments.length > 3 ? arguments[3] : void 0,
//             i = (arguments.length > 4 ? arguments[4] : void 0).getStyle,
//             o = r.actionTypeId,
//             a = r.config;
//         if ((0, _.isPluginType)(o)) return (0, _.getPluginOrigin)(o)(e[o]);
//         switch (o) {
//             case y.TRANSFORM_MOVE:
//             case y.TRANSFORM_SCALE:
//             case y.TRANSFORM_ROTATE:
//             case y.TRANSFORM_SKEW:
//                 return e[o] || M[o];
//             case y.STYLE_FILTER:
//                 return x(e[o], r.config.filters);
//             case y.STYLE_OPACITY:
//                 return {
//                     value: (0, f.default)(parseFloat(i(t, g.OPACITY)), 1)
//                 };
//             case y.STYLE_SIZE:
//                 var u, c, s = i(t, g.WIDTH),
//                     l = i(t, g.HEIGHT);
//                 return u = a.widthUnit === g.AUTO ? C.test(s) ? parseFloat(s) : parseFloat(n.width) : (0, f.default)(parseFloat(s), parseFloat(n.width)), c = a.heightUnit === g.AUTO ? C.test(l) ? parseFloat(l) : parseFloat(n.height) : (0, f.default)(parseFloat(l), parseFloat(n.height)), {
//                     widthValue: u,
//                     heightValue: c
//                 };
//             case y.STYLE_BACKGROUND_COLOR:
//             case y.STYLE_BORDER:
//             case y.STYLE_TEXT_COLOR:
//                 return function(t) {
//                     var e = t.element,
//                         n = t.actionTypeId,
//                         r = t.computedStyle,
//                         i = t.getStyle,
//                         o = O[n],
//                         a = i(e, o),
//                         u = X.test(a) ? a : r[o],
//                         c = function(t, e) {
//                             var n = t.exec(e);
//                             return n ? n[1] : ""
//                         }(V, u).split(g.COMMA_DELIMITER);
//                     return {
//                         rValue: (0, f.default)(parseInt(c[0], 10), 255),
//                         gValue: (0, f.default)(parseInt(c[1], 10), 255),
//                         bValue: (0, f.default)(parseInt(c[2], 10), 255),
//                         aValue: (0, f.default)(parseFloat(c[3]), 1)
//                     }
//                 }({
//                     element: t,
//                     actionTypeId: o,
//                     computedStyle: n,
//                     getStyle: i
//                 });
//             case y.GENERAL_DISPLAY:
//                 return {
//                     value: (0, f.default)(i(t, g.DISPLAY), n.display)
//                 };
//             case y.OBJECT_VALUE:
//                 return e[o] || {
//                     value: 0
//                 };
//             default:
//                 return
//         }
//     }, e.getDestinationValues = function(t) {
//         var e = t.element,
//             n = t.actionItem,
//             r = t.elementApi,
//             i = n.actionTypeId;
//         if ((0, _.isPluginType)(i)) return (0, _.getPluginDestination)(i)(n.config);
//         switch (i) {
//             case y.TRANSFORM_MOVE:
//             case y.TRANSFORM_SCALE:
//             case y.TRANSFORM_ROTATE:
//             case y.TRANSFORM_SKEW:
//                 var o = n.config,
//                     a = o.xValue,
//                     u = o.yValue,
//                     c = o.zValue;
//                 return {
//                     xValue: a,
//                     yValue: u,
//                     zValue: c
//                 };
//             case y.STYLE_SIZE:
//                 var s = r.getStyle,
//                     f = r.setStyle,
//                     l = r.getProperty,
//                     d = n.config,
//                     p = d.widthUnit,
//                     v = d.heightUnit,
//                     E = n.config,
//                     h = E.widthValue,
//                     I = E.heightValue;
//                 if (!T.IS_BROWSER_ENV) return {
//                     widthValue: h,
//                     heightValue: I
//                 };
//                 if (p === g.AUTO) {
//                     var m = s(e, g.WIDTH);
//                     f(e, g.WIDTH, ""), h = l(e, "offsetWidth"), f(e, g.WIDTH, m)
//                 }
//                 if (v === g.AUTO) {
//                     var O = s(e, g.HEIGHT);
//                     f(e, g.HEIGHT, ""), I = l(e, "offsetHeight"), f(e, g.HEIGHT, O)
//                 }
//                 return {
//                     widthValue: h,
//                     heightValue: I
//                 };
//             case y.STYLE_BACKGROUND_COLOR:
//             case y.STYLE_BORDER:
//             case y.STYLE_TEXT_COLOR:
//                 var S = n.config,
//                     A = S.rValue,
//                     b = S.gValue,
//                     R = S.bValue,
//                     w = S.aValue;
//                 return {
//                     rValue: A,
//                     gValue: b,
//                     bValue: R,
//                     aValue: w
//                 };
//             case y.STYLE_FILTER:
//                 return n.config.filters.reduce(D, {});
//             default:
//                 var L = n.config.value;
//                 return {
//                     value: L
//                 }
//         }
//     }, e.getRenderType = P, e.getStyleProp = function(t, e) {
//         return t === g.RENDER_STYLE ? e.replace("STYLE_", "").toLowerCase() : null
//     }, e.renderHTMLElement = function(t, e, n, r, i, o, a, u, c) {
//         switch (u) {
//             case g.RENDER_TRANSFORM:
//                 return function(t, e, n, r, i) {
//                     var o = G.map(function(t) {
//                             var n = M[t],
//                                 r = e[t] || {},
//                                 i = r.xValue,
//                                 o = void 0 === i ? n.xValue : i,
//                                 a = r.yValue,
//                                 u = void 0 === a ? n.yValue : a,
//                                 c = r.zValue,
//                                 s = void 0 === c ? n.zValue : c,
//                                 f = r.xUnit,
//                                 l = void 0 === f ? "" : f,
//                                 d = r.yUnit,
//                                 p = void 0 === d ? "" : d,
//                                 v = r.zUnit,
//                                 E = void 0 === v ? "" : v;
//                             switch (t) {
//                                 case y.TRANSFORM_MOVE:
//                                     return "".concat(g.TRANSLATE_3D, "(").concat(o).concat(l, ", ").concat(u).concat(p, ", ").concat(s).concat(E, ")");
//                                 case y.TRANSFORM_SCALE:
//                                     return "".concat(g.SCALE_3D, "(").concat(o).concat(l, ", ").concat(u).concat(p, ", ").concat(s).concat(E, ")");
//                                 case y.TRANSFORM_ROTATE:
//                                     return "".concat(g.ROTATE_X, "(").concat(o).concat(l, ") ").concat(g.ROTATE_Y, "(").concat(u).concat(p, ") ").concat(g.ROTATE_Z, "(").concat(s).concat(E, ")");
//                                 case y.TRANSFORM_SKEW:
//                                     return "".concat(g.SKEW, "(").concat(o).concat(l, ", ").concat(u).concat(p, ")");
//                                 default:
//                                     return ""
//                             }
//                         }).join(" "),
//                         a = i.setStyle;
//                     U(t, T.TRANSFORM_PREFIXED, i), a(t, T.TRANSFORM_PREFIXED, o), u = r, c = n, s = u.actionTypeId, f = c.xValue, l = c.yValue, d = c.zValue, (s === y.TRANSFORM_MOVE && void 0 !== d || s === y.TRANSFORM_SCALE && void 0 !== d || s === y.TRANSFORM_ROTATE && (void 0 !== f || void 0 !== l)) && a(t, T.TRANSFORM_STYLE_PREFIXED, g.PRESERVE_3D);
//                     var u, c, s, f, l, d
//                 }(t, e, n, i, a);
//             case g.RENDER_STYLE:
//                 return function(t, e, n, r, i, o) {
//                     var a = o.setStyle,
//                         u = r.actionTypeId,
//                         c = r.config;
//                     switch (u) {
//                         case y.STYLE_SIZE:
//                             var s = r.config,
//                                 f = s.widthUnit,
//                                 d = void 0 === f ? "" : f,
//                                 p = s.heightUnit,
//                                 v = void 0 === p ? "" : p,
//                                 E = n.widthValue,
//                                 h = n.heightValue;
//                             void 0 !== E && (d === g.AUTO && (d = "px"), U(t, g.WIDTH, o), a(t, g.WIDTH, E + d)), void 0 !== h && (v === g.AUTO && (v = "px"), U(t, g.HEIGHT, o), a(t, g.HEIGHT, h + v));
//                             break;
//                         case y.STYLE_FILTER:
//                             ! function(t, e, n, r) {
//                                 var i = (0, l.default)(e, function(t, e, r) {
//                                         return "".concat(t, " ").concat(r, "(").concat(e).concat(j(r, n), ")")
//                                     }, ""),
//                                     o = r.setStyle;
//                                 U(t, g.FILTER, r), o(t, g.FILTER, i)
//                             }(t, n, c, o);
//                             break;
//                         case y.STYLE_BACKGROUND_COLOR:
//                         case y.STYLE_BORDER:
//                         case y.STYLE_TEXT_COLOR:
//                             var _ = O[u],
//                                 I = Math.round(n.rValue),
//                                 T = Math.round(n.gValue),
//                                 m = Math.round(n.bValue),
//                                 S = n.aValue;
//                             U(t, _, o), a(t, _, S >= 1 ? "rgb(".concat(I, ",").concat(T, ",").concat(m, ")") : "rgba(".concat(I, ",").concat(T, ",").concat(m, ",").concat(S, ")"));
//                             break;
//                         default:
//                             var A = c.unit,
//                                 b = void 0 === A ? "" : A;
//                             U(t, i, o), a(t, i, n.value + b)
//                     }
//                 }(t, 0, n, i, o, a);
//             case g.RENDER_GENERAL:
//                 return function(t, e, n) {
//                     var r = n.setStyle;
//                     switch (e.actionTypeId) {
//                         case y.GENERAL_DISPLAY:
//                             var i = e.config.value;
//                             return void(i === g.FLEX && T.IS_BROWSER_ENV ? r(t, g.DISPLAY, T.FLEX_PREFIXED) : r(t, g.DISPLAY, i))
//                     }
//                 }(t, i, a);
//             case g.RENDER_PLUGIN:
//                 var s = i.actionTypeId;
//                 if ((0, _.isPluginType)(s)) return (0, _.renderPlugin)(s)(c, e, i)
//         }
//     }, e.clearAllStyles = function(t) {
//         var e = t.store,
//             n = t.elementApi,
//             r = e.getState().ixData,
//             i = r.events,
//             o = void 0 === i ? {} : i,
//             a = r.actionLists,
//             u = void 0 === a ? {} : a;
//         Object.keys(o).forEach(function(t) {
//             var e = o[t],
//                 r = e.action.config,
//                 i = r.actionListId,
//                 a = u[i];
//             a && B({
//                 actionList: a,
//                 event: e,
//                 elementApi: n
//             })
//         }), Object.keys(u).forEach(function(t) {
//             B({
//                 actionList: u[t],
//                 elementApi: n
//             })
//         })
//     }, e.cleanupHTMLElement = function(t, e, n) {
//         var r = n.setStyle,
//             i = n.getStyle,
//             o = e.actionTypeId;
//         if (o === y.STYLE_SIZE) {
//             var a = e.config;
//             a.widthUnit === g.AUTO && r(t, g.WIDTH, ""), a.heightUnit === g.AUTO && r(t, g.HEIGHT, "")
//         }
//         i(t, g.WILL_CHANGE) && W({
//             effect: k,
//             actionTypeId: o,
//             elementApi: n
//         })(t)
//     }, e.getMaxDurationItemIndex = z, e.getActionListProgress = function(t, e) {
//         var n = t.actionItemGroups,
//             r = t.useFirstGroupAsInitialState,
//             i = e.actionItem,
//             o = e.verboseTimeElapsed,
//             a = void 0 === o ? 0 : o,
//             u = 0,
//             c = 0;
//         return n.forEach(function(t, e) {
//             if (!r || 0 !== e) {
//                 var n = t.actionItems,
//                     o = n[z(n)],
//                     s = o.config,
//                     f = o.actionTypeId;
//                 i.id === o.id && (c = u + a);
//                 var l = P(f) === g.RENDER_GENERAL ? 0 : s.duration;
//                 u += s.delay + l
//             }
//         }), u > 0 ? (0, h.optimizeFloat)(c / u) : 0
//     }, e.reduceListToGroup = function(t) {
//         var e = t.actionListId,
//             n = t.actionItemId,
//             r = t.rawData,
//             i = r.actionLists[e],
//             o = i.actionItemGroups,
//             a = i.continuousParameterGroups,
//             u = [],
//             s = function(t) {
//                 return u.push((0, v.mergeIn)(t, ["config"], {
//                     delay: 0,
//                     duration: 0
//                 })), t.id === n
//             };
//         return o && o.some(function(t) {
//             return t.actionItems.some(s)
//         }), a && a.some(function(t) {
//             return t.continuousActionGroups.some(function(t) {
//                 return t.actionItems.some(s)
//             })
//         }), (0, v.setIn)(r, ["actionLists"], (0, c.default)({}, e, {
//             id: e,
//             actionItemGroups: [{
//                 actionItems: u
//             }]
//         }))
//     }, e.shouldNamespaceEventParameter = function(t, e) {
//         var n = e.basedOn;
//         return t === I.SCROLLING_IN_VIEW && (n === I.ELEMENT || null == n) || t === I.MOUSE_MOVE && n === I.ELEMENT
//     }, e.getNamespacedParameterId = function(t, e) {
//         return t + g.COLON_DELIMITER + e
//     }, e.shouldAllowMediaQuery = function(t, e) {
//         if (null == e) return !0;
//         return -1 !== t.indexOf(e)
//     }, e.mediaQueriesEqual = function(t, e) {
//         return (0, E.default)(t && t.sort(), e && e.sort())
//     }, e.stringifyTarget = function(t) {
//         if ("string" == typeof t) return t;
//         var e = t.id,
//             n = void 0 === e ? "" : e,
//             r = t.selector,
//             i = void 0 === r ? "" : r,
//             o = t.useEventTarget,
//             a = void 0 === o ? "" : o;
//         return n + g.BAR_DELIMITER + i + g.BAR_DELIMITER + a
//     }, e.getItemConfigByKey = void 0;
//     var f = s(n(188)),
//         l = s(n(189)),
//         d = s(n(195)),
//         p = s(n(23)),
//         v = n(13),
//         E = s(n(90)),
//         h = n(84),
//         _ = n(87),
//         g = n(48),
//         I = n(86),
//         y = n(47),
//         T = n(30),
//         m = function(t) {
//             return t.trim()
//         },
//         O = Object.freeze((r = {}, (0, c.default)(r, y.STYLE_BACKGROUND_COLOR, g.BACKGROUND_COLOR), (0, c.default)(r, y.STYLE_BORDER, g.BORDER_COLOR), (0, c.default)(r, y.STYLE_TEXT_COLOR, g.COLOR), r)),
//         S = Object.freeze((i = {}, (0, c.default)(i, T.TRANSFORM_PREFIXED, g.TRANSFORM), (0, c.default)(i, g.BACKGROUND_COLOR, g.BACKGROUND), (0, c.default)(i, g.OPACITY, g.OPACITY), (0, c.default)(i, g.FILTER, g.FILTER), (0, c.default)(i, g.WIDTH, g.WIDTH), (0, c.default)(i, g.HEIGHT, g.HEIGHT), i)),
//         A = {},
//         b = 1;
//     var R = 1;
//     var w = function(t, e) {
//         return t === e
//     };

//     function L(t) {
//         var e = (0, u.default)(t);
//         return "string" === e ? {
//             id: t
//         } : null != t && "object" === e ? {
//             id: t.id,
//             objectId: t.objectId,
//             selector: t.selector,
//             selectorGuids: t.selectorGuids,
//             appliesTo: t.appliesTo,
//             useEventTarget: t.useEventTarget
//         } : {}
//     }

//     function N(t) {
//         var e = t.config,
//             n = t.event,
//             r = t.eventTarget,
//             i = t.elementRoot,
//             o = t.elementApi;
//         if (!o) throw new Error("IX2 missing elementApi");
//         var a = o.getValidDocument,
//             u = o.getQuerySelector,
//             c = o.queryDocument,
//             s = o.getChildElements,
//             f = o.getSiblingElements,
//             l = o.matchSelector,
//             d = o.elementContains,
//             v = o.isSiblingNode,
//             E = e.target;
//         if (!E) return [];
//         var h = L(E),
//             _ = h.id,
//             y = h.objectId,
//             m = h.selector,
//             O = h.selectorGuids,
//             S = h.appliesTo,
//             b = h.useEventTarget;
//         if (y) return [A[y] || (A[y] = {})];
//         if (S === I.PAGE) {
//             var R = a(_);
//             return R ? [R] : []
//         }
//         var w, N, C, x = (0, p.default)(n, "action.config.affectedElements", {})[_ || m] || {},
//             D = Boolean(x.id || x.selector),
//             P = n && u(L(n.target));
//         if (D ? (w = x.limitAffectedElements, N = P, C = u(x)) : N = C = u({
//                 id: _,
//                 selector: m,
//                 selectorGuids: O
//             }), n && b) {
//             var M = r && (C || !0 === b) ? [r] : c(P);
//             if (C) {
//                 if (b === g.PARENT) return c(C).filter(function(t) {
//                     return M.some(function(e) {
//                         return d(t, e)
//                     })
//                 });
//                 if (b === g.CHILDREN) return c(C).filter(function(t) {
//                     return M.some(function(e) {
//                         return d(e, t)
//                     })
//                 });
//                 if (b === g.SIBLINGS) return c(C).filter(function(t) {
//                     return M.some(function(e) {
//                         return v(e, t)
//                     })
//                 })
//             }
//             return M
//         }
//         return null == N || null == C ? [] : T.IS_BROWSER_ENV && i ? c(C).filter(function(t) {
//             return i.contains(t)
//         }) : w === g.CHILDREN ? c(N, C) : w === g.IMMEDIATE_CHILDREN ? s(c(N)).filter(l(C)) : w === g.SIBLINGS ? f(c(N)).filter(l(C)) : c(C)
//     }
//     var C = /px/,
//         x = function(t, e) {
//             return e.reduce(function(t, e) {
//                 return null == t[e.type] && (t[e.type] = F[e.type]), t
//             }, t || {})
//         };
//     var D = function(t, e) {
//         return e && (t[e.type] = e.value || 0), t
//     };

//     function P(t) {
//         return /^TRANSFORM_/.test(t) ? g.RENDER_TRANSFORM : /^STYLE_/.test(t) ? g.RENDER_STYLE : /^GENERAL_/.test(t) ? g.RENDER_GENERAL : /^PLUGIN_/.test(t) ? g.RENDER_PLUGIN : void 0
//     }
//     e.getItemConfigByKey = function(t, e, n) {
//         if ((0, _.isPluginType)(t)) return (0, _.getPluginConfig)(t)(n, e);
//         switch (t) {
//             case y.STYLE_FILTER:
//                 var r = (0, d.default)(n.filters, function(t) {
//                     return t.type === e
//                 });
//                 return r ? r.value : 0;
//             default:
//                 return n[e]
//         }
//     };
//     var M = (o = {}, (0, c.default)(o, y.TRANSFORM_MOVE, Object.freeze({
//             xValue: 0,
//             yValue: 0,
//             zValue: 0
//         })), (0, c.default)(o, y.TRANSFORM_SCALE, Object.freeze({
//             xValue: 1,
//             yValue: 1,
//             zValue: 1
//         })), (0, c.default)(o, y.TRANSFORM_ROTATE, Object.freeze({
//             xValue: 0,
//             yValue: 0,
//             zValue: 0
//         })), (0, c.default)(o, y.TRANSFORM_SKEW, Object.freeze({
//             xValue: 0,
//             yValue: 0
//         })), o),
//         F = Object.freeze({
//             blur: 0,
//             "hue-rotate": 0,
//             invert: 0,
//             grayscale: 0,
//             saturate: 100,
//             sepia: 0,
//             contrast: 100,
//             brightness: 100
//         }),
//         j = function(t, e) {
//             var n = (0, d.default)(e.filters, function(e) {
//                 return e.type === t
//             });
//             if (n && n.unit) return n.unit;
//             switch (t) {
//                 case "blur":
//                     return "px";
//                 case "hue-rotate":
//                     return "deg";
//                 default:
//                     return "%"
//             }
//         },
//         G = Object.keys(M);
//     var X = /^rgb/,
//         V = RegExp("rgba?".concat("\\(([^)]+)\\)"));

//     function U(t, e, n) {
//         if (T.IS_BROWSER_ENV) {
//             var r = S[e];
//             if (r) {
//                 var i = n.getStyle,
//                     o = n.setStyle,
//                     a = i(t, g.WILL_CHANGE);
//                 if (a) {
//                     var u = a.split(g.COMMA_DELIMITER).map(m); - 1 === u.indexOf(r) && o(t, g.WILL_CHANGE, u.concat(r).join(g.COMMA_DELIMITER))
//                 } else o(t, g.WILL_CHANGE, r)
//             }
//         }
//     }

//     function k(t, e, n) {
//         if (T.IS_BROWSER_ENV) {
//             var r = S[e];
//             if (r) {
//                 var i = n.getStyle,
//                     o = n.setStyle,
//                     a = i(t, g.WILL_CHANGE);
//                 a && -1 !== a.indexOf(r) && o(t, g.WILL_CHANGE, a.split(g.COMMA_DELIMITER).map(m).filter(function(t) {
//                     return t !== r
//                 }).join(g.COMMA_DELIMITER))
//             }
//         }
//     }

//     function B(t) {
//         var e = t.actionList,
//             n = void 0 === e ? {} : e,
//             r = t.event,
//             i = t.elementApi,
//             o = n.actionItemGroups,
//             a = n.continuousParameterGroups;
//         o && o.forEach(function(t) {
//             H({
//                 actionGroup: t,
//                 event: r,
//                 elementApi: i
//             })
//         }), a && a.forEach(function(t) {
//             t.continuousActionGroups.forEach(function(t) {
//                 H({
//                     actionGroup: t,
//                     event: r,
//                     elementApi: i
//                 })
//             })
//         })
//     }

//     function H(t) {
//         var e = t.actionGroup,
//             n = t.event,
//             r = t.elementApi;
//         e.actionItems.forEach(function(t) {
//             var e, i = t.actionTypeId,
//                 o = t.config;
//             e = (0, _.isPluginType)(i) ? (0, _.clearPlugin)(i) : W({
//                 effect: Y,
//                 actionTypeId: i,
//                 elementApi: r
//             }), N({
//                 config: o,
//                 event: n,
//                 elementApi: r
//             }).forEach(e)
//         })
//     }
//     var W = function(t) {
//         var e = t.effect,
//             n = t.actionTypeId,
//             r = t.elementApi;
//         return function(t) {
//             switch (n) {
//                 case y.TRANSFORM_MOVE:
//                 case y.TRANSFORM_SCALE:
//                 case y.TRANSFORM_ROTATE:
//                 case y.TRANSFORM_SKEW:
//                     e(t, T.TRANSFORM_PREFIXED, r);
//                     break;
//                 case y.STYLE_FILTER:
//                     e(t, g.FILTER, r);
//                     break;
//                 case y.STYLE_OPACITY:
//                     e(t, g.OPACITY, r);
//                     break;
//                 case y.STYLE_SIZE:
//                     e(t, g.WIDTH, r), e(t, g.HEIGHT, r);
//                     break;
//                 case y.STYLE_BACKGROUND_COLOR:
//                 case y.STYLE_BORDER:
//                 case y.STYLE_TEXT_COLOR:
//                     e(t, O[n], r);
//                     break;
//                 case y.GENERAL_DISPLAY:
//                     e(t, g.DISPLAY, r)
//             }
//         }
//     };

//     function Y(t, e, n) {
//         var r = n.setStyle;
//         k(t, e, n), r(t, e, ""), e === T.TRANSFORM_PREFIXED && r(t, T.TRANSFORM_STYLE_PREFIXED, "")
//     }

//     function z(t) {
//         var e = 0,
//             n = 0;
//         return t.forEach(function(t, r) {
//             var i = t.config,
//                 o = i.delay + i.duration;
//             o >= e && (e = o, n = r)
//         }), n
//     }
// }, function(t, e) {
//     t.exports = function(t, e) {
//         return null == t || t != t ? e : t
//     }
// }, function(t, e, n) {
//     var r = n(190),
//         i = n(88),
//         o = n(5),
//         a = n(194),
//         u = n(1);
//     t.exports = function(t, e, n) {
//         var c = u(t) ? r : a,
//             s = arguments.length < 3;
//         return c(t, o(e, 4), n, s, i)
//     }
// }, function(t, e) {
//     t.exports = function(t, e, n, r) {
//         var i = -1,
//             o = null == t ? 0 : t.length;
//         for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t);
//         return n
//     }
// }, function(t, e, n) {
//     var r = n(192)();
//     t.exports = r
// }, function(t, e) {
//     t.exports = function(t) {
//         return function(e, n, r) {
//             for (var i = -1, o = Object(e), a = r(e), u = a.length; u--;) {
//                 var c = a[t ? u : ++i];
//                 if (!1 === n(o[c], c, o)) break
//             }
//             return e
//         }
//     }
// }, function(t, e, n) {
//     var r = n(10);
//     t.exports = function(t, e) {
//         return function(n, i) {
//             if (null == n) return n;
//             if (!r(n)) return t(n, i);
//             for (var o = n.length, a = e ? o : -1, u = Object(n);
//                 (e ? a-- : ++a < o) && !1 !== i(u[a], a, u););
//             return n
//         }
//     }
// }, function(t, e) {
//     t.exports = function(t, e, n, r, i) {
//         return i(t, function(t, i, o) {
//             n = r ? (r = !1, t) : e(n, t, i, o)
//         }), n
//     }
// }, function(t, e, n) {
//     var r = n(62)(n(196));
//     t.exports = r
// }, function(t, e, n) {
//     var r = n(82),
//         i = n(5),
//         o = n(45),
//         a = Math.max,
//         u = Math.min;
//     t.exports = function(t, e, n) {
//         var c = null == t ? 0 : t.length;
//         if (!c) return -1;
//         var s = c - 1;
//         return void 0 !== n && (s = o(n), s = n < 0 ? a(c + s, 0) : u(s, c - 1)), r(t, i(e, 3), s, !0)
//     }
// }, function(t, e, n) {
//     "use strict";
//     var r = Object.prototype.hasOwnProperty;

//     function i(t, e) {
//         return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e
//     }
//     t.exports = function(t, e) {
//         if (i(t, e)) return !0;
//         if ("object" != typeof t || null === t || "object" != typeof e || null === e) return !1;
//         var n = Object.keys(t),
//             o = Object.keys(e);
//         if (n.length !== o.length) return !1;
//         for (var a = 0; a < n.length; a++)
//             if (!r.call(e, n[a]) || !i(t[n[a]], e[n[a]])) return !1;
//         return !0
//     }
// }, function(t, e, n) {
//     "use strict";
//     var r, i = n(0)(n(14)),
//         o = n(0);
//     Object.defineProperty(e, "__esModule", {
//         value: !0
//     }), e.ixRequest = void 0;
//     var a = o(n(26)),
//         u = n(2),
//         c = n(13),
//         s = u.IX2EngineActionTypes,
//         f = s.IX2_PREVIEW_REQUESTED,
//         l = s.IX2_PLAYBACK_REQUESTED,
//         d = s.IX2_STOP_REQUESTED,
//         p = s.IX2_CLEAR_REQUESTED,
//         v = {
//             preview: {},
//             playback: {},
//             stop: {},
//             clear: {}
//         },
//         E = Object.create(null, (r = {}, (0, i.default)(r, f, {
//             value: "preview"
//         }), (0, i.default)(r, l, {
//             value: "playback"
//         }), (0, i.default)(r, d, {
//             value: "stop"
//         }), (0, i.default)(r, p, {
//             value: "clear"
//         }), r));
//     e.ixRequest = function() {
//         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
//             e = arguments.length > 1 ? arguments[1] : void 0;
//         if (e.type in E) {
//             var n = [E[e.type]];
//             return (0, c.setIn)(t, [n], (0, a.default)({}, e.payload))
//         }
//         return t
//     }
// }, function(t, e, n) {
//     "use strict";
//     Object.defineProperty(e, "__esModule", {
//         value: !0
//     }), e.ixSession = void 0;
//     var r = n(2),
//         i = n(13),
//         o = r.IX2EngineActionTypes,
//         a = o.IX2_SESSION_INITIALIZED,
//         u = o.IX2_SESSION_STARTED,
//         c = o.IX2_TEST_FRAME_RENDERED,
//         s = o.IX2_SESSION_STOPPED,
//         f = o.IX2_EVENT_LISTENER_ADDED,
//         l = o.IX2_EVENT_STATE_CHANGED,
//         d = o.IX2_ANIMATION_FRAME_CHANGED,
//         p = o.IX2_ACTION_LIST_PLAYBACK_CHANGED,
//         v = o.IX2_VIEWPORT_WIDTH_CHANGED,
//         E = o.IX2_MEDIA_QUERIES_DEFINED,
//         h = {
//             active: !1,
//             tick: 0,
//             eventListeners: [],
//             eventState: {},
//             playbackState: {},
//             viewportWidth: 0,
//             mediaQueryKey: null,
//             hasBoundaryNodes: !1,
//             hasDefinedMediaQueries: !1
//         };
//     e.ixSession = function() {
//         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
//             e = arguments.length > 1 ? arguments[1] : void 0;
//         switch (e.type) {
//             case a:
//                 var n = e.payload.hasBoundaryNodes;
//                 return (0, i.set)(t, "hasBoundaryNodes", n);
//             case u:
//                 return (0, i.set)(t, "active", !0);
//             case c:
//                 var r = e.payload.step,
//                     o = void 0 === r ? 20 : r;
//                 return (0, i.set)(t, "tick", t.tick + o);
//             case s:
//                 return h;
//             case d:
//                 var _ = e.payload.now;
//                 return (0, i.set)(t, "tick", _);
//             case f:
//                 var g = (0, i.addLast)(t.eventListeners, e.payload);
//                 return (0, i.set)(t, "eventListeners", g);
//             case l:
//                 var I = e.payload,
//                     y = I.stateKey,
//                     T = I.newState;
//                 return (0, i.setIn)(t, ["eventState", y], T);
//             case p:
//                 var m = e.payload,
//                     O = m.actionListId,
//                     S = m.isPlaying;
//                 return (0, i.setIn)(t, ["playbackState", O], S);
//             case v:
//                 for (var A = e.payload, b = A.width, R = A.mediaQueries, w = R.length, L = null, N = 0; N < w; N++) {
//                     var C = R[N],
//                         x = C.key,
//                         D = C.min,
//                         P = C.max;
//                     if (b >= D && b <= P) {
//                         L = x;
//                         break
//                     }
//                 }
//                 return (0, i.merge)(t, {
//                     viewportWidth: b,
//                     mediaQueryKey: L
//                 });
//             case E:
//                 return (0, i.set)(t, "hasDefinedMediaQueries", !0);
//             default:
//                 return t
//         }
//     }
// }, function(t, e, n) {
//     "use strict";
//     Object.defineProperty(e, "__esModule", {
//         value: !0
//     }), e.ixInstances = void 0;
//     var r = n(2),
//         i = n(13),
//         o = r.IX2EngineActionTypes,
//         a = o.IX2_RAW_DATA_IMPORTED,
//         u = o.IX2_SESSION_STOPPED,
//         c = o.IX2_INSTANCE_ADDED,
//         s = o.IX2_INSTANCE_STARTED,
//         f = o.IX2_INSTANCE_REMOVED,
//         l = o.IX2_ANIMATION_FRAME_CHANGED,
//         d = r.IX2EasingUtils,
//         p = d.optimizeFloat,
//         v = d.applyEasing,
//         E = r.IX2EngineConstants.RENDER_GENERAL,
//         h = r.IX2VanillaUtils,
//         _ = h.getItemConfigByKey,
//         g = h.getRenderType,
//         I = h.getStyleProp,
//         y = function(t, e) {
//             var n = t.position,
//                 r = t.parameterId,
//                 o = t.actionGroups,
//                 a = t.destinationKeys,
//                 u = t.smoothing,
//                 c = t.restingValue,
//                 s = t.actionTypeId,
//                 f = e.payload.parameters,
//                 l = Math.max(1 - u, .01),
//                 d = f[r];
//             null == d && (l = 1, d = c);
//             var E, h, g, I, y = Math.max(d, 0) || 0,
//                 T = p(y - n),
//                 m = p(n + T * l),
//                 O = 100 * m;
//             if (m === n && t.current) return t;
//             for (var S = 0, A = o.length; S < A; S++) {
//                 var b = o[S],
//                     R = b.keyframe,
//                     w = b.actionItems;
//                 if (0 === S && (E = w[0]), O >= R) {
//                     E = w[0];
//                     var L = o[S + 1],
//                         N = L && O !== R;
//                     h = N ? L.actionItems[0] : null, N && (g = R / 100, I = (L.keyframe - R) / 100)
//                 }
//             }
//             var C = {};
//             if (E && !h)
//                 for (var x = 0, D = a.length; x < D; x++) {
//                     var P = a[x];
//                     C[P] = _(s, P, E.config)
//                 } else if (E && h)
//                     for (var M = (m - g) / I, F = E.config.easing, j = v(F, M), G = 0, X = a.length; G < X; G++) {
//                         var V = a[G],
//                             U = _(s, V, E.config),
//                             k = (_(s, V, h.config) - U) * j + U;
//                         C[V] = k
//                     }
//             return (0, i.merge)(t, {
//                 position: m,
//                 current: C
//             })
//         },
//         T = function(t, e) {
//             var n = t,
//                 r = n.active,
//                 o = n.origin,
//                 a = n.start,
//                 u = n.immediate,
//                 c = n.renderType,
//                 s = n.verbose,
//                 f = n.actionItem,
//                 l = n.destination,
//                 d = n.destinationKeys,
//                 h = n.pluginDuration,
//                 _ = n.instanceDelay,
//                 g = f.config.easing,
//                 I = f.config,
//                 y = I.duration,
//                 T = I.delay;
//             null != h && (y = h), T = null != _ ? _ : T, c === E ? y = 0 : u && (y = T = 0);
//             var m = e.payload.now;
//             if (r && o) {
//                 var O = m - (a + T);
//                 if (s) {
//                     var S = m - a,
//                         A = y + T,
//                         b = p(Math.min(Math.max(0, S / A), 1));
//                     t = (0, i.set)(t, "verboseTimeElapsed", A * b)
//                 }
//                 if (O < 0) return t;
//                 var R = p(Math.min(Math.max(0, O / y), 1)),
//                     w = v(g, R),
//                     L = {},
//                     N = null;
//                 return d.length && (N = d.reduce(function(t, e) {
//                     var n = l[e],
//                         r = parseFloat(o[e]) || 0,
//                         i = (parseFloat(n) - r) * w + r;
//                     return t[e] = i, t
//                 }, {})), L.current = N, L.position = R, 1 === R && (L.active = !1, L.complete = !0), (0, i.merge)(t, L)
//             }
//             return t
//         };
//     e.ixInstances = function() {
//         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
//             e = arguments.length > 1 ? arguments[1] : void 0;
//         switch (e.type) {
//             case a:
//                 return e.payload.ixInstances || Object.freeze({});
//             case u:
//                 return Object.freeze({});
//             case c:
//                 var n = e.payload,
//                     r = n.instanceId,
//                     o = n.elementId,
//                     d = n.actionItem,
//                     p = n.eventId,
//                     v = n.eventTarget,
//                     E = n.eventStateKey,
//                     h = n.actionListId,
//                     _ = n.groupIndex,
//                     m = n.isCarrier,
//                     O = n.origin,
//                     S = n.destination,
//                     A = n.immediate,
//                     b = n.verbose,
//                     R = n.continuous,
//                     w = n.parameterId,
//                     L = n.actionGroups,
//                     N = n.smoothing,
//                     C = n.restingValue,
//                     x = n.pluginInstance,
//                     D = n.pluginDuration,
//                     P = n.instanceDelay,
//                     M = d.actionTypeId,
//                     F = g(M),
//                     j = I(F, M),
//                     G = Object.keys(S).filter(function(t) {
//                         return null != S[t]
//                     });
//                 return (0, i.set)(t, r, {
//                     id: r,
//                     elementId: o,
//                     active: !1,
//                     position: 0,
//                     start: 0,
//                     origin: O,
//                     destination: S,
//                     destinationKeys: G,
//                     immediate: A,
//                     verbose: b,
//                     current: null,
//                     actionItem: d,
//                     actionTypeId: M,
//                     eventId: p,
//                     eventTarget: v,
//                     eventStateKey: E,
//                     actionListId: h,
//                     groupIndex: _,
//                     renderType: F,
//                     isCarrier: m,
//                     styleProp: j,
//                     continuous: R,
//                     parameterId: w,
//                     actionGroups: L,
//                     smoothing: N,
//                     restingValue: C,
//                     pluginInstance: x,
//                     pluginDuration: D,
//                     instanceDelay: P
//                 });
//             case s:
//                 var X = e.payload,
//                     V = X.instanceId,
//                     U = X.time;
//                 return (0, i.mergeIn)(t, [V], {
//                     active: !0,
//                     complete: !1,
//                     start: U
//                 });
//             case f:
//                 var k = e.payload.instanceId;
//                 if (!t[k]) return t;
//                 for (var B = {}, H = Object.keys(t), W = H.length, Y = 0; Y < W; Y++) {
//                     var z = H[Y];
//                     z !== k && (B[z] = t[z])
//                 }
//                 return B;
//             case l:
//                 for (var K = t, Q = Object.keys(t), q = Q.length, $ = 0; $ < q; $++) {
//                     var Z = Q[$],
//                         J = t[Z],
//                         tt = J.continuous ? y : T;
//                     K = (0, i.set)(K, Z, tt(J, e))
//                 }
//                 return K;
//             default:
//                 return t
//         }
//     }
// }, function(t, e, n) {
//     "use strict";
//     Object.defineProperty(e, "__esModule", {
//         value: !0
//     }), e.ixParameters = void 0;
//     var r = n(2).IX2EngineActionTypes,
//         i = r.IX2_RAW_DATA_IMPORTED,
//         o = r.IX2_SESSION_STOPPED,
//         a = r.IX2_PARAMETER_CHANGED;
//     e.ixParameters = function() {
//         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
//             e = arguments.length > 1 ? arguments[1] : void 0;
//         switch (e.type) {
//             case i:
//                 return e.payload.ixParameters || {};
//             case o:
//                 return {};
//             case a:
//                 var n = e.payload,
//                     r = n.key,
//                     u = n.value;
//                 return t[r] = u, t;
//             default:
//                 return t
//         }
//     }
// }, function(t, e, n) {
//     var r = n(203),
//         i = n(204),
//         o = n(205);
//     t.exports = function(t) {
//         return r(t) || i(t) || o()
//     }
// }, function(t, e) {
//     t.exports = function(t) {
//         if (Array.isArray(t)) {
//             for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
//             return n
//         }
//     }
// }, function(t, e) {
//     t.exports = function(t) {
//         if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
//     }
// }, function(t, e) {
//     t.exports = function() {
//         throw new TypeError("Invalid attempt to spread non-iterable instance")
//     }
// }, function(t, e, n) {
//     var r = n(207);
//     t.exports = function(t, e) {
//         if (null == t) return {};
//         var n, i, o = r(t, e);
//         if (Object.getOwnPropertySymbols) {
//             var a = Object.getOwnPropertySymbols(t);
//             for (i = 0; i < a.length; i++) n = a[i], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
//         }
//         return o
//     }
// }, function(t, e) {
//     t.exports = function(t, e) {
//         if (null == t) return {};
//         var n, r, i = {},
//             o = Object.keys(t);
//         for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
//         return i
//     }
// }, function(t, e, n) {
//     var r = n(39),
//         i = n(41),
//         o = n(10),
//         a = n(209),
//         u = n(210),
//         c = "[object Map]",
//         s = "[object Set]";
//     t.exports = function(t) {
//         if (null == t) return 0;
//         if (o(t)) return a(t) ? u(t) : t.length;
//         var e = i(t);
//         return e == c || e == s ? t.size : r(t).length
//     }
// }, function(t, e, n) {
//     var r = n(9),
//         i = n(1),
//         o = n(7),
//         a = "[object String]";
//     t.exports = function(t) {
//         return "string" == typeof t || !i(t) && o(t) && r(t) == a
//     }
// }, function(t, e, n) {
//     var r = n(211),
//         i = n(212),
//         o = n(213);
//     t.exports = function(t) {
//         return i(t) ? o(t) : r(t)
//     }
// }, function(t, e, n) {
//     var r = n(81)("length");
//     t.exports = r
// }, function(t, e) {
//     var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
//     t.exports = function(t) {
//         return n.test(t)
//     }
// }, function(t, e) {
//     var n = "[\\ud800-\\udfff]",
//         r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
//         i = "\\ud83c[\\udffb-\\udfff]",
//         o = "[^\\ud800-\\udfff]",
//         a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
//         u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
//         c = "(?:" + r + "|" + i + ")" + "?",
//         s = "[\\ufe0e\\ufe0f]?" + c + ("(?:\\u200d(?:" + [o, a, u].join("|") + ")[\\ufe0e\\ufe0f]?" + c + ")*"),
//         f = "(?:" + [o + r + "?", r, a, u, n].join("|") + ")",
//         l = RegExp(i + "(?=" + i + ")|" + f + s, "g");
//     t.exports = function(t) {
//         for (var e = l.lastIndex = 0; l.test(t);) ++e;
//         return e
//     }
// }, function(t, e, n) {
//     var r = n(5),
//         i = n(215),
//         o = n(216);
//     t.exports = function(t, e) {
//         return o(t, i(r(e)))
//     }
// }, function(t, e) {
//     var n = "Expected a function";
//     t.exports = function(t) {
//         if ("function" != typeof t) throw new TypeError(n);
//         return function() {
//             var e = arguments;
//             switch (e.length) {
//                 case 0:
//                     return !t.call(this);
//                 case 1:
//                     return !t.call(this, e[0]);
//                 case 2:
//                     return !t.call(this, e[0], e[1]);
//                 case 3:
//                     return !t.call(this, e[0], e[1], e[2])
//             }
//             return !t.apply(this, e)
//         }
//     }
// }, function(t, e, n) {
//     var r = n(80),
//         i = n(5),
//         o = n(217),
//         a = n(220);
//     t.exports = function(t, e) {
//         if (null == t) return {};
//         var n = r(a(t), function(t) {
//             return [t]
//         });
//         return e = i(e), o(t, n, function(t, n) {
//             return e(t, n[0])
//         })
//     }
// }, function(t, e, n) {
//     var r = n(42),
//         i = n(218),
//         o = n(24);
//     t.exports = function(t, e, n) {
//         for (var a = -1, u = e.length, c = {}; ++a < u;) {
//             var s = e[a],
//                 f = r(t, s);
//             n(f, s) && i(c, o(s, t), f)
//         }
//         return c
//     }
// }, function(t, e, n) {
//     var r = n(219),
//         i = n(24),
//         o = n(36),
//         a = n(4),
//         u = n(12);
//     t.exports = function(t, e, n, c) {
//         if (!a(t)) return t;
//         for (var s = -1, f = (e = i(e, t)).length, l = f - 1, d = t; null != d && ++s < f;) {
//             var p = u(e[s]),
//                 v = n;
//             if (s != l) {
//                 var E = d[p];
//                 void 0 === (v = c ? c(E, p, d) : void 0) && (v = a(E) ? E : o(e[s + 1]) ? [] : {})
//             }
//             r(d, p, v), d = d[p]
//         }
//         return t
//     }
// }, function(t, e, n) {
//     var r = n(92),
//         i = n(31),
//         o = Object.prototype.hasOwnProperty;
//     t.exports = function(t, e, n) {
//         var a = t[e];
//         o.call(t, e) && i(a, n) && (void 0 !== n || e in t) || r(t, e, n)
//     }
// }, function(t, e, n) {
//     var r = n(69),
//         i = n(221),
//         o = n(223);
//     t.exports = function(t) {
//         return r(t, o, i)
//     }
// }, function(t, e, n) {
//     var r = n(34),
//         i = n(222),
//         o = n(70),
//         a = n(71),
//         u = Object.getOwnPropertySymbols ? function(t) {
//             for (var e = []; t;) r(e, o(t)), t = i(t);
//             return e
//         } : a;
//     t.exports = u
// }, function(t, e, n) {
//     var r = n(74)(Object.getPrototypeOf, Object);
//     t.exports = r
// }, function(t, e, n) {
//     var r = n(72),
//         i = n(224),
//         o = n(10);
//     t.exports = function(t) {
//         return o(t) ? r(t, !0) : i(t)
//     }
// }, function(t, e, n) {
//     var r = n(4),
//         i = n(40),
//         o = n(225),
//         a = Object.prototype.hasOwnProperty;
//     t.exports = function(t) {
//         if (!r(t)) return o(t);
//         var e = i(t),
//             n = [];
//         for (var u in t)("constructor" != u || !e && a.call(t, u)) && n.push(u);
//         return n
//     }
// }, function(t, e) {
//     t.exports = function(t) {
//         var e = [];
//         if (null != t)
//             for (var n in Object(t)) e.push(n);
//         return e
//     }
// }, function(t, e, n) {
//     var r = n(39),
//         i = n(41),
//         o = n(22),
//         a = n(1),
//         u = n(10),
//         c = n(35),
//         s = n(40),
//         f = n(37),
//         l = "[object Map]",
//         d = "[object Set]",
//         p = Object.prototype.hasOwnProperty;
//     t.exports = function(t) {
//         if (null == t) return !0;
//         if (u(t) && (a(t) || "string" == typeof t || "function" == typeof t.splice || c(t) || f(t) || o(t))) return !t.length;
//         var e = i(t);
//         if (e == l || e == d) return !t.size;
//         if (s(t)) return !r(t).length;
//         for (var n in t)
//             if (p.call(t, n)) return !1;
//         return !0
//     }
// }, function(t, e, n) {
//     var r = n(92),
//         i = n(89),
//         o = n(5);
//     t.exports = function(t, e) {
//         var n = {};
//         return e = o(e, 3), i(t, function(t, i, o) {
//             r(n, i, e(t, i, o))
//         }), n
//     }
// }, function(t, e, n) {
//     var r = n(229),
//         i = n(88),
//         o = n(230),
//         a = n(1);
//     t.exports = function(t, e) {
//         return (a(t) ? r : i)(t, o(e))
//     }
// }, function(t, e) {
//     t.exports = function(t, e) {
//         for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t););
//         return t
//     }
// }, function(t, e, n) {
//     var r = n(44);
//     t.exports = function(t) {
//         return "function" == typeof t ? t : r
//     }
// }, function(t, e, n) {
//     var r = n(94),
//         i = n(79),
//         o = n(45),
//         a = n(78);
//     t.exports = function(t, e, n) {
//         t = a(t), e = i(e);
//         var u = t.length,
//             c = n = void 0 === n ? u : r(o(n), 0, u);
//         return (n -= e.length) >= 0 && t.slice(n, c) == e
//     }
// }, function(t, e, n) {
//     var r = n(233),
//         i = n(4),
//         o = "Expected a function";
//     t.exports = function(t, e, n) {
//         var a = !0,
//             u = !0;
//         if ("function" != typeof t) throw new TypeError(o);
//         return i(n) && (a = "leading" in n ? !!n.leading : a, u = "trailing" in n ? !!n.trailing : u), r(t, e, {
//             leading: a,
//             maxWait: e,
//             trailing: u
//         })
//     }
// }, function(t, e, n) {
//     var r = n(4),
//         i = n(234),
//         o = n(46),
//         a = "Expected a function",
//         u = Math.max,
//         c = Math.min;
//     t.exports = function(t, e, n) {
//         var s, f, l, d, p, v, E = 0,
//             h = !1,
//             _ = !1,
//             g = !0;
//         if ("function" != typeof t) throw new TypeError(a);

//         function I(e) {
//             var n = s,
//                 r = f;
//             return s = f = void 0, E = e, d = t.apply(r, n)
//         }

//         function y(t) {
//             var n = t - v;
//             return void 0 === v || n >= e || n < 0 || _ && t - E >= l
//         }

//         function T() {
//             var t = i();
//             if (y(t)) return m(t);
//             p = setTimeout(T, function(t) {
//                 var n = e - (t - v);
//                 return _ ? c(n, l - (t - E)) : n
//             }(t))
//         }

//         function m(t) {
//             return p = void 0, g && s ? I(t) : (s = f = void 0, d)
//         }

//         function O() {
//             var t = i(),
//                 n = y(t);
//             if (s = arguments, f = this, v = t, n) {
//                 if (void 0 === p) return function(t) {
//                     return E = t, p = setTimeout(T, e), h ? I(t) : d
//                 }(v);
//                 if (_) return clearTimeout(p), p = setTimeout(T, e), I(v)
//             }
//             return void 0 === p && (p = setTimeout(T, e)), d
//         }
//         return e = o(e) || 0, r(n) && (h = !!n.leading, l = (_ = "maxWait" in n) ? u(o(n.maxWait) || 0, e) : l, g = "trailing" in n ? !!n.trailing : g), O.cancel = function() {
//             void 0 !== p && clearTimeout(p), E = 0, s = v = f = p = void 0
//         }, O.flush = function() {
//             return void 0 === p ? d : m(i())
//         }, O
//     }
// }, function(t, e, n) {
//     var r = n(3);
//     t.exports = function() {
//         return r.Date.now()
//     }
// }, function(t, e, n) {
//     "use strict";
//     var r = n(0)(n(15));
//     Object.defineProperty(e, "__esModule", {
//         value: !0
//     }), e.setStyle = function(t, e, n) {
//         t.style[e] = n
//     }, e.getStyle = function(t, e) {
//         return t.style[e]
//     }, e.getProperty = function(t, e) {
//         return t[e]
//     }, e.matchSelector = function(t) {
//         return function(e) {
//             return e[o](t)
//         }
//     }, e.getQuerySelector = function(t) {
//         var e = t.id,
//             n = t.selector;
//         if (e) {
//             var r = e;
//             if (-1 !== e.indexOf(u)) {
//                 var i = e.split(u),
//                     o = i[0];
//                 if (r = i[1], o !== document.documentElement.getAttribute(f)) return null
//             }
//             return '[data-w-id^="'.concat(r, '"]')
//         }
//         return n
//     }, e.getValidDocument = function(t) {
//         if (null == t || t === document.documentElement.getAttribute(f)) return document;
//         return null
//     }, e.queryDocument = function(t, e) {
//         return Array.prototype.slice.call(document.querySelectorAll(e ? t + " " + e : t))
//     }, e.elementContains = function(t, e) {
//         return t.contains(e)
//     }, e.isSiblingNode = function(t, e) {
//         return t !== e && t.parentNode === e.parentNode
//     }, e.getChildElements = function() {
//         for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [], n = 0, r = t.length; n < r; n++) {
//             var i = t[n].children,
//                 o = i.length;
//             if (o)
//                 for (var a = 0; a < o; a++) e.push(i[a])
//         }
//         return e
//     }, e.getSiblingElements = function() {
//         for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [], n = [], r = 0, i = t.length; r < i; r++) {
//             var o = t[r].parentNode;
//             if (o && o.children && o.children.length && -1 === n.indexOf(o)) {
//                 n.push(o);
//                 for (var a = o.firstElementChild; null != a;) - 1 === t.indexOf(a) && e.push(a), a = a.nextElementSibling
//             }
//         }
//         return e
//     }, e.getRefType = function(t) {
//         if (null != t && "object" == (0, r.default)(t)) return t instanceof Element ? c : s;
//         return null
//     }, e.getClosestElement = void 0;
//     var i = n(2),
//         o = i.IX2BrowserSupport.ELEMENT_MATCHES,
//         a = i.IX2EngineConstants,
//         u = a.IX2_ID_DELIMITER,
//         c = a.HTML_ELEMENT,
//         s = a.PLAIN_OBJECT,
//         f = a.WF_PAGE;
//     var l = Element.prototype.closest ? function(t, e) {
//         return document.documentElement.contains(t) ? t.closest(e) : null
//     } : function(t, e) {
//         if (!document.documentElement.contains(t)) return null;
//         var n = t;
//         do {
//             if (n[o] && n[o](e)) return n;
//             n = n.parentNode
//         } while (null != n);
//         return null
//     };
//     e.getClosestElement = l
// }, function(t, e, n) {
//     "use strict";
//     var r, i = n(0),
//         o = i(n(14)),
//         a = i(n(15)),
//         u = n(0);
//     Object.defineProperty(e, "__esModule", {
//         value: !0
//     }), e.default = void 0;
//     var c, s, f, l = u(n(26)),
//         d = u(n(237)),
//         p = u(n(23)),
//         v = u(n(256)),
//         E = n(91),
//         h = n(49),
//         _ = n(2),
//         g = _.IX2EngineEventTypes,
//         I = g.MOUSE_CLICK,
//         y = g.MOUSE_SECOND_CLICK,
//         T = g.MOUSE_DOWN,
//         m = g.MOUSE_UP,
//         O = g.MOUSE_OVER,
//         S = g.MOUSE_OUT,
//         A = g.DROPDOWN_CLOSE,
//         b = g.DROPDOWN_OPEN,
//         R = g.SLIDER_ACTIVE,
//         w = g.SLIDER_INACTIVE,
//         L = g.TAB_ACTIVE,
//         N = g.TAB_INACTIVE,
//         C = g.NAVBAR_CLOSE,
//         x = g.NAVBAR_OPEN,
//         D = g.MOUSE_MOVE,
//         P = g.PAGE_SCROLL_DOWN,
//         M = g.SCROLL_INTO_VIEW,
//         F = g.COMPONENT_ACTIVE,
//         j = g.COMPONENT_INACTIVE,
//         G = g.SCROLL_OUT_OF_VIEW,
//         X = g.PAGE_SCROLL_UP,
//         V = g.SCROLLING_IN_VIEW,
//         U = g.PAGE_FINISH,
//         k = g.ECOMMERCE_CART_CLOSE,
//         B = g.ECOMMERCE_CART_OPEN,
//         H = g.PAGE_START,
//         W = g.PAGE_SCROLL,
//         Y = g.ELEMENT,
//         z = g.VIEWPORT,
//         K = g.PAGE,
//         Q = _.IX2EngineConstants.COLON_DELIMITER,
//         q = _.IX2VanillaUtils.getNamespacedParameterId,
//         $ = function(t) {
//             return function(e) {
//                 return !("object" !== (0, a.default)(e) || !t(e)) || e
//             }
//         },
//         Z = $(function(t) {
//             return t.element === t.nativeEvent.target
//         }),
//         J = $(function(t) {
//             var e = t.element,
//                 n = t.nativeEvent;
//             return e.contains(n.target)
//         }),
//         tt = (0, d.default)([Z, J]),
//         et = function(t, e) {
//             if (e) {
//                 var n = t.getState().ixData.events[e];
//                 if (n && !ct[n.eventTypeId]) return n
//             }
//             return null
//         },
//         nt = function(t, e) {
//             var n = t.store,
//                 r = t.event,
//                 i = t.element,
//                 o = t.eventStateKey,
//                 a = r.action,
//                 u = r.id,
//                 c = a.config,
//                 s = c.actionListId,
//                 f = c.autoStopEventId,
//                 l = et(n, f);
//             return l && (0, E.stopActionGroup)({
//                 store: n,
//                 eventId: f,
//                 eventTarget: i,
//                 eventStateKey: f + Q + o.split(Q)[1],
//                 actionListId: (0, p.default)(l, "action.config.actionListId")
//             }), (0, E.stopActionGroup)({
//                 store: n,
//                 eventId: u,
//                 eventTarget: i,
//                 eventStateKey: o,
//                 actionListId: s
//             }), (0, E.startActionGroup)({
//                 store: n,
//                 eventId: u,
//                 eventTarget: i,
//                 eventStateKey: o,
//                 actionListId: s
//             }), e
//         },
//         rt = function(t, e) {
//             return function(n, r) {
//                 return !0 === t(n, r) ? e(n, r) : r
//             }
//         },
//         it = {
//             handler: rt(tt, nt)
//         },
//         ot = (0, l.default)({}, it, {
//             types: [F, j].join(" ")
//         }),
//         at = [{
//             target: window,
//             types: "resize orientationchange",
//             throttle: !0
//         }, {
//             target: document,
//             types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
//             throttle: !0
//         }],
//         ut = {
//             types: [{
//                 target: document,
//                 types: "scroll wheel",
//                 throttle: !0
//             }]
//         },
//         ct = {
//             PAGE_START: H,
//             PAGE_FINISH: U
//         },
//         st = (c = void 0 !== window.pageXOffset, s = "CSS1Compat" === document.compatMode ? document.documentElement : document.body, function() {
//             return {
//                 scrollLeft: c ? window.pageXOffset : s.scrollLeft,
//                 scrollTop: c ? window.pageYOffset : s.scrollTop,
//                 stiffScrollTop: (0, v.default)(c ? window.pageYOffset : s.scrollTop, 0, s.scrollHeight - window.innerHeight),
//                 scrollWidth: s.scrollWidth,
//                 scrollHeight: s.scrollHeight,
//                 clientWidth: s.clientWidth,
//                 clientHeight: s.clientHeight,
//                 innerWidth: window.innerWidth,
//                 innerHeight: window.innerHeight
//             }
//         }),
//         ft = function(t) {
//             var e = t.element,
//                 n = t.nativeEvent,
//                 r = n.type,
//                 i = n.target,
//                 o = n.relatedTarget,
//                 a = e.contains(i);
//             if ("mouseover" === r && a) return !0;
//             var u = e.contains(o);
//             return !("mouseout" !== r || !a || !u)
//         },
//         lt = function(t) {
//             var e, n, r = t.element,
//                 i = t.event.config,
//                 o = st(),
//                 a = o.clientWidth,
//                 u = o.clientHeight,
//                 c = i.scrollOffsetValue,
//                 s = "PX" === i.scrollOffsetUnit ? c : u * (c || 0) / 100;
//             return e = r.getBoundingClientRect(), n = {
//                 left: 0,
//                 top: s,
//                 right: a,
//                 bottom: u - s
//             }, !(e.left > n.right || e.right < n.left || e.top > n.bottom || e.bottom < n.top)
//         },
//         dt = function(t) {
//             return function(e, n) {
//                 var r = e.nativeEvent.type,
//                     i = -1 !== [F, j].indexOf(r) ? r === F : n.isActive,
//                     o = (0, l.default)({}, n, {
//                         isActive: i
//                     });
//                 return n && o.isActive === n.isActive ? o : t(e, o) || o
//             }
//         },
//         pt = function(t) {
//             return function(e, n) {
//                 var r = {
//                     elementHovered: ft(e)
//                 };
//                 return (n ? r.elementHovered !== n.elementHovered : r.elementHovered) && t(e, r) || r
//             }
//         },
//         vt = function(t) {
//             return function(e) {
//                 var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
//                     r = st(),
//                     i = r.stiffScrollTop,
//                     o = r.scrollHeight,
//                     a = r.innerHeight,
//                     u = e.event,
//                     c = u.config,
//                     s = u.eventTypeId,
//                     f = c.scrollOffsetValue,
//                     d = "PX" === c.scrollOffsetUnit,
//                     p = o - a,
//                     v = Number((i / p).toFixed(2));
//                 if (n && n.percentTop === v) return n;
//                 var E, h, _ = (d ? f : a * (f || 0) / 100) / p,
//                     g = 0;
//                 n && (E = v > n.percentTop, g = (h = n.scrollingDown !== E) ? v : n.anchorTop);
//                 var I = s === P ? v >= g + _ : v <= g - _,
//                     y = (0, l.default)({}, n, {
//                         percentTop: v,
//                         inBounds: I,
//                         anchorTop: g,
//                         scrollingDown: E
//                     });
//                 return n && I && (h || y.inBounds !== n.inBounds) && t(e, y) || y
//             }
//         },
//         Et = function(t) {
//             return function(e) {
//                 var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
//                         clickCount: 0
//                     },
//                     r = {
//                         clickCount: n.clickCount % 2 + 1
//                     };
//                 return r.clickCount !== n.clickCount && t(e, r) || r
//             }
//         },
//         ht = function() {
//             var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
//             return (0, l.default)({}, ot, {
//                 handler: rt(t ? tt : Z, dt(function(t, e) {
//                     return e.isActive ? it.handler(t, e) : e
//                 }))
//             })
//         },
//         _t = function() {
//             var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
//             return (0, l.default)({}, ot, {
//                 handler: rt(t ? tt : Z, dt(function(t, e) {
//                     return e.isActive ? e : it.handler(t, e)
//                 }))
//             })
//         },
//         gt = (0, l.default)({}, ut, {
//             handler: (f = function(t, e) {
//                 var n = e.elementVisible,
//                     r = t.event;
//                 return !t.store.getState().ixData.events[r.action.config.autoStopEventId] && e.triggered ? e : r.eventTypeId === M === n ? (nt(t), (0, l.default)({}, e, {
//                     triggered: !0
//                 })) : e
//             }, function(t, e) {
//                 var n = (0, l.default)({}, e, {
//                     elementVisible: lt(t)
//                 });
//                 return (e ? n.elementVisible !== e.elementVisible : n.elementVisible) && f(t, n) || n
//             })
//         }),
//         It = (r = {}, (0, o.default)(r, R, ht()), (0, o.default)(r, w, _t()), (0, o.default)(r, b, ht()), (0, o.default)(r, A, _t()), (0, o.default)(r, x, ht(!1)), (0, o.default)(r, C, _t(!1)), (0, o.default)(r, L, ht()), (0, o.default)(r, N, _t()), (0, o.default)(r, B, {
//             types: "ecommerce-cart-open",
//             handler: rt(tt, nt)
//         }), (0, o.default)(r, k, {
//             types: "ecommerce-cart-close",
//             handler: rt(tt, nt)
//         }), (0, o.default)(r, I, {
//             types: "click",
//             handler: rt(tt, Et(function(t, e) {
//                 var n, r, i, o = e.clickCount;
//                 r = (n = t).store, i = n.event.action.config.autoStopEventId, Boolean(et(r, i)) ? 1 === o && nt(t) : nt(t)
//             }))
//         }), (0, o.default)(r, y, {
//             types: "click",
//             handler: rt(tt, Et(function(t, e) {
//                 2 === e.clickCount && nt(t)
//             }))
//         }), (0, o.default)(r, T, (0, l.default)({}, it, {
//             types: "mousedown"
//         })), (0, o.default)(r, m, (0, l.default)({}, it, {
//             types: "mouseup"
//         })), (0, o.default)(r, O, {
//             types: "mouseover mouseout",
//             handler: rt(tt, pt(function(t, e) {
//                 e.elementHovered && nt(t)
//             }))
//         }), (0, o.default)(r, S, {
//             types: "mouseover mouseout",
//             handler: rt(tt, pt(function(t, e) {
//                 e.elementHovered || nt(t)
//             }))
//         }), (0, o.default)(r, D, {
//             types: "mousemove mouseout scroll",
//             handler: function(t) {
//                 var e = t.store,
//                     n = t.element,
//                     r = t.eventConfig,
//                     i = t.nativeEvent,
//                     o = t.eventStateKey,
//                     a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
//                         clientX: 0,
//                         clientY: 0,
//                         pageX: 0,
//                         pageY: 0
//                     },
//                     u = r.basedOn,
//                     c = r.selectedAxis,
//                     s = r.continuousParameterGroupId,
//                     f = r.reverse,
//                     l = r.restingState,
//                     d = void 0 === l ? 0 : l,
//                     p = i.clientX,
//                     v = void 0 === p ? a.clientX : p,
//                     E = i.clientY,
//                     _ = void 0 === E ? a.clientY : E,
//                     g = i.pageX,
//                     I = void 0 === g ? a.pageX : g,
//                     y = i.pageY,
//                     T = void 0 === y ? a.pageY : y,
//                     m = "X_AXIS" === c,
//                     O = "mouseout" === i.type,
//                     S = d / 100,
//                     A = s,
//                     b = !1;
//                 switch (u) {
//                     case z:
//                         S = m ? Math.min(v, window.innerWidth) / window.innerWidth : Math.min(_, window.innerHeight) / window.innerHeight;
//                         break;
//                     case K:
//                         var R = st(),
//                             w = R.scrollLeft,
//                             L = R.scrollTop,
//                             N = R.scrollWidth,
//                             C = R.scrollHeight;
//                         S = m ? Math.min(w + I, N) / N : Math.min(L + T, C) / C;
//                         break;
//                     case Y:
//                     default:
//                         A = q(o, s);
//                         var x = 0 === i.type.indexOf("mouse");
//                         if (x && !0 !== tt({
//                                 element: n,
//                                 nativeEvent: i
//                             })) break;
//                         var D = n.getBoundingClientRect(),
//                             P = D.left,
//                             M = D.top,
//                             F = D.width,
//                             j = D.height;
//                         if (!x && ! function(t, e) {
//                                 return t.left > e.left && t.left < e.right && t.top > e.top && t.top < e.bottom
//                             }({
//                                 left: v,
//                                 top: _
//                             }, D)) break;
//                         b = !0, S = m ? (v - P) / F : (_ - M) / j
//                 }
//                 return O && (S > .95 || S < .05) && (S = Math.round(S)), (u !== Y || b || b !== a.elementHovered) && (S = f ? 1 - S : S, e.dispatch((0, h.parameterChanged)(A, S))), {
//                     elementHovered: b,
//                     clientX: v,
//                     clientY: _,
//                     pageX: I,
//                     pageY: T
//                 }
//             }
//         }), (0, o.default)(r, W, {
//             types: at,
//             handler: function(t) {
//                 var e = t.store,
//                     n = t.eventConfig,
//                     r = n.continuousParameterGroupId,
//                     i = n.reverse,
//                     o = st(),
//                     a = o.scrollTop / (o.scrollHeight - o.clientHeight);
//                 a = i ? 1 - a : a, e.dispatch((0, h.parameterChanged)(r, a))
//             }
//         }), (0, o.default)(r, V, {
//             types: at,
//             handler: function(t) {
//                 var e = t.element,
//                     n = t.store,
//                     r = t.eventConfig,
//                     i = t.eventStateKey,
//                     o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
//                         scrollPercent: 0
//                     },
//                     a = st(),
//                     u = a.scrollLeft,
//                     c = a.scrollTop,
//                     s = a.scrollWidth,
//                     f = a.scrollHeight,
//                     l = a.clientHeight,
//                     d = r.basedOn,
//                     p = r.selectedAxis,
//                     v = r.continuousParameterGroupId,
//                     E = r.startsEntering,
//                     _ = r.startsExiting,
//                     g = r.addEndOffset,
//                     I = r.addStartOffset,
//                     y = r.addOffsetValue,
//                     T = void 0 === y ? 0 : y,
//                     m = r.endOffsetValue,
//                     O = void 0 === m ? 0 : m;
//                 if (d === z) {
//                     var S = "X_AXIS" === p ? u / s : c / f;
//                     return S !== o.scrollPercent && n.dispatch((0, h.parameterChanged)(v, S)), {
//                         scrollPercent: S
//                     }
//                 }
//                 var A = q(i, v),
//                     b = e.getBoundingClientRect(),
//                     R = (I ? T : 0) / 100,
//                     w = (g ? O : 0) / 100;
//                 R = E ? R : 1 - R, w = _ ? w : 1 - w;
//                 var L = b.top + Math.min(b.height * R, l),
//                     N = b.top + b.height * w - L,
//                     C = Math.min(l + N, f),
//                     x = Math.min(Math.max(0, l - L), C) / C;
//                 return x !== o.scrollPercent && n.dispatch((0, h.parameterChanged)(A, x)), {
//                     scrollPercent: x
//                 }
//             }
//         }), (0, o.default)(r, M, gt), (0, o.default)(r, G, gt), (0, o.default)(r, P, (0, l.default)({}, ut, {
//             handler: vt(function(t, e) {
//                 e.scrollingDown && nt(t)
//             })
//         })), (0, o.default)(r, X, (0, l.default)({}, ut, {
//             handler: vt(function(t, e) {
//                 e.scrollingDown || nt(t)
//             })
//         })), (0, o.default)(r, U, {
//             types: "readystatechange IX2_PAGE_UPDATE",
//             handler: rt(Z, function(t) {
//                 return function(e, n) {
//                     var r = {
//                         finished: "complete" === document.readyState
//                     };
//                     return !r.finished || n && n.finshed || t(e), r
//                 }
//             }(nt))
//         }), (0, o.default)(r, H, {
//             types: "readystatechange IX2_PAGE_UPDATE",
//             handler: rt(Z, function(t) {
//                 return function(e, n) {
//                     return n || t(e), {
//                         started: !0
//                     }
//                 }
//             }(nt))
//         }), r);
//     e.default = It
// }, function(t, e, n) {
//     var r = n(238)();
//     t.exports = r
// }, function(t, e, n) {
//     var r = n(50),
//         i = n(239),
//         o = n(96),
//         a = n(97),
//         u = n(1),
//         c = n(252),
//         s = "Expected a function",
//         f = 8,
//         l = 32,
//         d = 128,
//         p = 256;
//     t.exports = function(t) {
//         return i(function(e) {
//             var n = e.length,
//                 i = n,
//                 v = r.prototype.thru;
//             for (t && e.reverse(); i--;) {
//                 var E = e[i];
//                 if ("function" != typeof E) throw new TypeError(s);
//                 if (v && !h && "wrapper" == a(E)) var h = new r([], !0)
//             }
//             for (i = h ? i : n; ++i < n;) {
//                 E = e[i];
//                 var _ = a(E),
//                     g = "wrapper" == _ ? o(E) : void 0;
//                 h = g && c(g[0]) && g[1] == (d | f | l | p) && !g[4].length && 1 == g[9] ? h[a(g[0])].apply(h, g[3]) : 1 == E.length && c(E) ? h[_]() : h.thru(E)
//             }
//             return function() {
//                 var t = arguments,
//                     r = t[0];
//                 if (h && 1 == t.length && u(r)) return h.plant(r).value();
//                 for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n;) o = e[i].call(this, o);
//                 return o
//             }
//         })
//     }
// }, function(t, e, n) {
//     var r = n(240),
//         i = n(243),
//         o = n(245);
//     t.exports = function(t) {
//         return o(i(t, void 0, r), t + "")
//     }
// }, function(t, e, n) {
//     var r = n(241);
//     t.exports = function(t) {
//         return null != t && t.length ? r(t, 1) : []
//     }
// }, function(t, e, n) {
//     var r = n(34),
//         i = n(242);
//     t.exports = function t(e, n, o, a, u) {
//         var c = -1,
//             s = e.length;
//         for (o || (o = i), u || (u = []); ++c < s;) {
//             var f = e[c];
//             n > 0 && o(f) ? n > 1 ? t(f, n - 1, o, a, u) : r(u, f) : a || (u[u.length] = f)
//         }
//         return u
//     }
// }, function(t, e, n) {
//     var r = n(11),
//         i = n(22),
//         o = n(1),
//         a = r ? r.isConcatSpreadable : void 0;
//     t.exports = function(t) {
//         return o(t) || i(t) || !!(a && t && t[a])
//     }
// }, function(t, e, n) {
//     var r = n(244),
//         i = Math.max;
//     t.exports = function(t, e, n) {
//         return e = i(void 0 === e ? t.length - 1 : e, 0),
//             function() {
//                 for (var o = arguments, a = -1, u = i(o.length - e, 0), c = Array(u); ++a < u;) c[a] = o[e + a];
//                 a = -1;
//                 for (var s = Array(e + 1); ++a < e;) s[a] = o[a];
//                 return s[e] = n(c), r(t, this, s)
//             }
//     }
// }, function(t, e) {
//     t.exports = function(t, e, n) {
//         switch (n.length) {
//             case 0:
//                 return t.call(e);
//             case 1:
//                 return t.call(e, n[0]);
//             case 2:
//                 return t.call(e, n[0], n[1]);
//             case 3:
//                 return t.call(e, n[0], n[1], n[2])
//         }
//         return t.apply(e, n)
//     }
// }, function(t, e, n) {
//     var r = n(246),
//         i = n(248)(r);
//     t.exports = i
// }, function(t, e, n) {
//     var r = n(247),
//         i = n(93),
//         o = n(44),
//         a = i ? function(t, e) {
//             return i(t, "toString", {
//                 configurable: !0,
//                 enumerable: !1,
//                 value: r(e),
//                 writable: !0
//             })
//         } : o;
//     t.exports = a
// }, function(t, e) {
//     t.exports = function(t) {
//         return function() {
//             return t
//         }
//     }
// }, function(t, e) {
//     var n = 800,
//         r = 16,
//         i = Date.now;
//     t.exports = function(t) {
//         var e = 0,
//             o = 0;
//         return function() {
//             var a = i(),
//                 u = r - (a - o);
//             if (o = a, u > 0) {
//                 if (++e >= n) return arguments[0]
//             } else e = 0;
//             return t.apply(void 0, arguments)
//         }
//     }
// }, function(t, e, n) {
//     var r = n(75),
//         i = r && new r;
//     t.exports = i
// }, function(t, e) {
//     t.exports = function() {}
// }, function(t, e) {
//     t.exports = {}
// }, function(t, e, n) {
//     var r = n(52),
//         i = n(96),
//         o = n(97),
//         a = n(253);
//     t.exports = function(t) {
//         var e = o(t),
//             n = a[e];
//         if ("function" != typeof n || !(e in r.prototype)) return !1;
//         if (t === n) return !0;
//         var u = i(n);
//         return !!u && t === u[0]
//     }
// }, function(t, e, n) {
//     var r = n(52),
//         i = n(50),
//         o = n(51),
//         a = n(1),
//         u = n(7),
//         c = n(254),
//         s = Object.prototype.hasOwnProperty;

//     function f(t) {
//         if (u(t) && !a(t) && !(t instanceof r)) {
//             if (t instanceof i) return t;
//             if (s.call(t, "__wrapped__")) return c(t)
//         }
//         return new i(t)
//     }
//     f.prototype = o.prototype, f.prototype.constructor = f, t.exports = f
// }, function(t, e, n) {
//     var r = n(52),
//         i = n(50),
//         o = n(255);
//     t.exports = function(t) {
//         if (t instanceof r) return t.clone();
//         var e = new i(t.__wrapped__, t.__chain__);
//         return e.__actions__ = o(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
//     }
// }, function(t, e) {
//     t.exports = function(t, e) {
//         var n = -1,
//             r = t.length;
//         for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
//         return e
//     }
// }, function(t, e, n) {
//     var r = n(94),
//         i = n(46);
//     t.exports = function(t, e, n) {
//         return void 0 === n && (n = e, e = void 0), void 0 !== n && (n = (n = i(n)) == n ? n : 0), void 0 !== e && (e = (e = i(e)) == e ? e : 0), r(i(t), e, n)
//     }
// }, function(t, e, n) {
//     "use strict";
//     var r = n(8);
//     r.define("links", t.exports = function(t, e) {
//         var n, i, o, a = {},
//             u = t(window),
//             c = r.env(),
//             s = window.location,
//             f = document.createElement("a"),
//             l = "w--current",
//             d = /index\.(html|php)$/,
//             p = /\/$/;

//         function v(e) {
//             var r = n && e.getAttribute("href-disabled") || e.getAttribute("href");
//             if (f.href = r, !(r.indexOf(":") >= 0)) {
//                 var a = t(e);
//                 if (f.hash.length > 1 && f.host + f.pathname === s.host + s.pathname) {
//                     if (!/^#[a-zA-Z0-9\-\_]+$/.test(f.hash)) return;
//                     var u = t(f.hash);
//                     u.length && i.push({
//                         link: a,
//                         sec: u,
//                         active: !1
//                     })
//                 } else if ("#" !== r && "" !== r) {
//                     var c = f.href === s.href || r === o || d.test(r) && p.test(o);
//                     h(a, l, c)
//                 }
//             }
//         }

//         function E() {
//             var t = u.scrollTop(),
//                 n = u.height();
//             e.each(i, function(e) {
//                 var r = e.link,
//                     i = e.sec,
//                     o = i.offset().top,
//                     a = i.outerHeight(),
//                     u = .5 * n,
//                     c = i.is(":visible") && o + a - u >= t && o + u <= t + n;
//                 e.active !== c && (e.active = c, h(r, l, c))
//             })
//         }

//         function h(t, e, n) {
//             var r = t.hasClass(e);
//             n && r || (n || r) && (n ? t.addClass(e) : t.removeClass(e))
//         }
//         return a.ready = a.design = a.preview = function() {
//             n = c && r.env("design"), o = r.env("slug") || s.pathname || "", r.scroll.off(E), i = [];
//             for (var t = document.links, e = 0; e < t.length; ++e) v(t[e]);
//             i.length && (r.scroll.on(E), E())
//         }, a
//     })
// }, function(t, e, n) {
//     "use strict";
//     var r = n(8);
//     r.define("scroll", t.exports = function(t) {
//         var e = t(document),
//             n = window,
//             i = n.location,
//             o = function() {
//                 try {
//                     return Boolean(n.frameElement)
//                 } catch (t) {
//                     return !0
//                 }
//             }() ? null : n.history,
//             a = /^[a-zA-Z0-9][\w:.-]*$/;
//         return {
//             ready: function() {
//                 var u = i.href.split("#")[0];
//                 e.on("click", "a", function(e) {
//                     if (!(r.env("design") || window.$.mobile && t(e.currentTarget).hasClass("ui-link")))
//                         if ("#" !== this.getAttribute("href")) {
//                             var c = this.href.split("#"),
//                                 s = c[0] === u ? c[1] : null;
//                             s && function(e, u) {
//                                 if (a.test(e)) {
//                                     var c = t("#" + e);
//                                     if (c.length) {
//                                         if (u && (u.preventDefault(), u.stopPropagation()), i.hash !== e && o && o.pushState && (!r.env.chrome || "file:" !== i.protocol)) {
//                                             var s = o.state && o.state.hash;
//                                             s !== e && o.pushState({
//                                                 hash: e
//                                             }, "", "#" + e)
//                                         }
//                                         var f = r.env("editor") ? ".w-editor-body" : "body",
//                                             l = t("header, " + f + " > .header, " + f + " > .w-nav:not([data-no-scroll])"),
//                                             d = "fixed" === l.css("position") ? l.outerHeight() : 0;
//                                         n.setTimeout(function() {
//                                             ! function(e, r) {
//                                                 var i = t(n).scrollTop(),
//                                                     o = e.offset().top - r;
//                                                 if ("mid" === e.data("scroll")) {
//                                                     var a = t(n).height() - r,
//                                                         u = e.outerHeight();
//                                                     u < a && (o -= Math.round((a - u) / 2))
//                                                 }
//                                                 var c = 1;
//                                                 t("body").add(e).each(function() {
//                                                     var e = parseFloat(t(this).attr("data-scroll-time"), 10);
//                                                     !isNaN(e) && (0 === e || e > 0) && (c = e)
//                                                 }), Date.now || (Date.now = function() {
//                                                     return (new Date).getTime()
//                                                 });
//                                                 var s = Date.now(),
//                                                     f = n.requestAnimationFrame || n.mozRequestAnimationFrame || n.webkitRequestAnimationFrame || function(t) {
//                                                         n.setTimeout(t, 15)
//                                                     },
//                                                     l = (472.143 * Math.log(Math.abs(i - o) + 125) - 2e3) * c;
//                                                 ! function t() {
//                                                     var e = Date.now() - s;
//                                                     n.scroll(0, function(t, e, n, r) {
//                                                         return n > r ? e : t + (e - t) * ((i = n / r) < .5 ? 4 * i * i * i : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1);
//                                                         var i
//                                                     }(i, o, e, l)), e <= l && f(t)
//                                                 }()
//                                             }(c, d)
//                                         }, u ? 0 : 300)
//                                     }
//                                 }
//                             }(s, e)
//                         } else e.preventDefault()
//                 })
//             }
//         }
//     })
// }, function(t, e, n) {
//     "use strict";
//     n(8).define("touch", t.exports = function(t) {
//         var e = {},
//             n = !document.addEventListener,
//             r = window.getSelection;

//         function i(t) {
//             var e, n, i, a = !1,
//                 u = !1,
//                 c = !1,
//                 s = Math.min(Math.round(.04 * window.innerWidth), 40);

//             function f(t) {
//                 var r = t.touches;
//                 r && r.length > 1 || (a = !0, u = !1, r ? (c = !0, e = r[0].clientX, n = r[0].clientY) : (e = t.clientX, n = t.clientY), i = e)
//             }

//             function l(t) {
//                 if (a) {
//                     if (c && "mousemove" === t.type) return t.preventDefault(), void t.stopPropagation();
//                     var f = t.touches,
//                         l = f ? f[0].clientX : t.clientX,
//                         d = f ? f[0].clientY : t.clientY,
//                         v = l - i;
//                     i = l, Math.abs(v) > s && r && "" === String(r()) && (o("swipe", t, {
//                         direction: v > 0 ? "right" : "left"
//                     }), p()), (Math.abs(l - e) > 10 || Math.abs(d - n) > 10) && (u = !0)
//                 }
//             }

//             function d(t) {
//                 if (a) {
//                     if (a = !1, c && "mouseup" === t.type) return t.preventDefault(), t.stopPropagation(), void(c = !1);
//                     u || o("tap", t)
//                 }
//             }

//             function p() {
//                 a = !1
//             }
//             t.addEventListener("touchstart", f, !1), t.addEventListener("touchmove", l, !1), t.addEventListener("touchend", d, !1), t.addEventListener("touchcancel", p, !1), t.addEventListener("mousedown", f, !1), t.addEventListener("mousemove", l, !1), t.addEventListener("mouseup", d, !1), t.addEventListener("mouseout", p, !1), this.destroy = function() {
//                 t.removeEventListener("touchstart", f, !1), t.removeEventListener("touchmove", l, !1), t.removeEventListener("touchend", d, !1), t.removeEventListener("touchcancel", p, !1), t.removeEventListener("mousedown", f, !1), t.removeEventListener("mousemove", l, !1), t.removeEventListener("mouseup", d, !1), t.removeEventListener("mouseout", p, !1), t = null
//             }
//         }

//         function o(e, n, r) {
//             var i = t.Event(e, {
//                 originalEvent: n
//             });
//             t(n.target).trigger(i, r)
//         }
//         return n && (t.event.special.tap = {
//             bindType: "click",
//             delegateType: "click"
//         }), e.init = function(e) {
//             return n ? null : (e = "string" == typeof e ? t(e).get(0) : e) ? new i(e) : null
//         }, e.instance = e.init(document), e
//     })
// }]);
// /**
//  * ----------------------------------------------------------------------
//  * Webflow: Interactions 2.0: Init
//  */
// Webflow.require('ix2').init({
//     "events": {
//         "e-29": {
//             "id": "e-29",
//             "eventTypeId": "MOUSE_MOVE",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
//                 "config": {
//                     "actionListId": "a-7",
//                     "affectedElements": {},
//                     "duration": 0
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f47102aa9d5d1|18b73379-d3b8-4796-872c-85403f8fe7fc"
//             },
//             "config": [{
//                 "continuousParameterGroupId": "a-7-p",
//                 "selectedAxis": "X_AXIS",
//                 "basedOn": "ELEMENT",
//                 "reverse": false,
//                 "smoothing": 85,
//                 "restingState": 50
//             }, {
//                 "continuousParameterGroupId": "a-7-p-2",
//                 "selectedAxis": "Y_AXIS",
//                 "basedOn": "ELEMENT",
//                 "reverse": false,
//                 "smoothing": 85,
//                 "restingState": 50
//             }],
//             "createdOn": 1560337138021
//         },
//         "e-52": {
//             "id": "e-52",
//             "eventTypeId": "PAGE_SCROLL",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
//                 "config": {
//                     "actionListId": "a-8",
//                     "affectedElements": {},
//                     "duration": 0
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "PAGE",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f47102aa9d5d1"
//             },
//             "config": [{
//                 "continuousParameterGroupId": "a-8-p",
//                 "smoothing": 50,
//                 "startsEntering": true,
//                 "addStartOffset": false,
//                 "addOffsetValue": 50,
//                 "startsExiting": false,
//                 "addEndOffset": false,
//                 "endOffsetValue": 50
//             }],
//             "createdOn": 1560374291756
//         },
//         "e-54": {
//             "id": "e-54",
//             "eventTypeId": "SCROLLING_IN_VIEW",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
//                 "config": {
//                     "actionListId": "a-9",
//                     "affectedElements": {},
//                     "duration": 0
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|e8bad840-8fd1-63af-7b85-b9eb171d9a31"
//             },
//             "config": [{
//                 "continuousParameterGroupId": "a-9-p",
//                 "smoothing": 80,
//                 "startsEntering": true,
//                 "addStartOffset": false,
//                 "addOffsetValue": 50,
//                 "startsExiting": false,
//                 "addEndOffset": false,
//                 "endOffsetValue": 50
//             }],
//             "createdOn": 1560429303146
//         },
//         "e-181": {
//             "id": "e-181",
//             "eventTypeId": "MOUSE_OVER",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-11",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-182"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|34b36b12-584f-4f70-d05b-54e685b2cf2e"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1560639003456
//         },
//         "e-182": {
//             "id": "e-182",
//             "eventTypeId": "MOUSE_OUT",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-12",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-181"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|34b36b12-584f-4f70-d05b-54e685b2cf2e"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1560639003457
//         },
//         "e-183": {
//             "id": "e-183",
//             "eventTypeId": "MOUSE_CLICK",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-13",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-184"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|34b36b12-584f-4f70-d05b-54e685b2cf2e"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1560639299594
//         },
//         "e-185": {
//             "id": "e-185",
//             "eventTypeId": "MOUSE_CLICK",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-14",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-186"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|4e9d6419-3f2a-0405-3947-e49d986bef2e"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1560639630776
//         },
//         "e-187": {
//             "id": "e-187",
//             "eventTypeId": "MOUSE_OVER",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-15",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-188"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|79094ce1-7308-6f1a-1195-92d44a0ac751"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1560639968879
//         },
//         "e-188": {
//             "id": "e-188",
//             "eventTypeId": "MOUSE_OUT",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-16",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-187"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|79094ce1-7308-6f1a-1195-92d44a0ac751"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1560639968880
//         },
//         "e-189": {
//             "id": "e-189",
//             "eventTypeId": "MOUSE_CLICK",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-17",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-190"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|79094ce1-7308-6f1a-1195-92d44a0ac751"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1560640333207
//         },
//         "e-191": {
//             "id": "e-191",
//             "eventTypeId": "SCROLL_INTO_VIEW",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-18",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-192"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|bdd0030d-c334-dfdc-08e0-2230f0ed544d"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": 10,
//                 "scrollOffsetUnit": "%",
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1560640948601
//         },
//         "e-196": {
//             "id": "e-196",
//             "eventTypeId": "PAGE_START",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-24",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-197"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "PAGE",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1560674257730
//         },
//         "e-202": {
//             "id": "e-202",
//             "eventTypeId": "MOUSE_OVER",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-29",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-203"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|9919f10a-0cf1-d01b-2179-0e43b89a145d"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1560718756581
//         },
//         "e-203": {
//             "id": "e-203",
//             "eventTypeId": "MOUSE_OUT",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-28",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-202"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|9919f10a-0cf1-d01b-2179-0e43b89a145d"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1560718756583
//         },
//         "e-204": {
//             "id": "e-204",
//             "eventTypeId": "MOUSE_CLICK",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-30",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-205"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|9919f10a-0cf1-d01b-2179-0e43b89a145d"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1560719024699
//         },
//         "e-206": {
//             "id": "e-206",
//             "eventTypeId": "MOUSE_OVER",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-31",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-207"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|2ff84a05-2905-9869-b0e9-ee8f9c2991c1"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1560720499232
//         },
//         "e-207": {
//             "id": "e-207",
//             "eventTypeId": "MOUSE_OUT",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-32",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-206"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|2ff84a05-2905-9869-b0e9-ee8f9c2991c1"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1560720499234
//         },
//         "e-208": {
//             "id": "e-208",
//             "eventTypeId": "MOUSE_CLICK",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-33",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-209"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|2ff84a05-2905-9869-b0e9-ee8f9c2991c1"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1560720626204
//         },
//         "e-210": {
//             "id": "e-210",
//             "eventTypeId": "MOUSE_OVER",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-34",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-211"
//                 }
//             },
//             "mediaQueries": ["main", "medium"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|277df8dc-d453-46b6-b4ea-27a6412478c8"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1560807144889
//         },
//         "e-211": {
//             "id": "e-211",
//             "eventTypeId": "MOUSE_OUT",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-37",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-210"
//                 }
//             },
//             "mediaQueries": ["main", "medium"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|277df8dc-d453-46b6-b4ea-27a6412478c8"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1560807144890
//         },
//         "e-212": {
//             "id": "e-212",
//             "eventTypeId": "MOUSE_OVER",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-35",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-213"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|1c1af68e-cb3c-ff7a-10a9-76837d60a4a5"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1560807484997
//         },
//         "e-213": {
//             "id": "e-213",
//             "eventTypeId": "MOUSE_OUT",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-36",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-212"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|1c1af68e-cb3c-ff7a-10a9-76837d60a4a5"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1560807484998
//         },
//         "e-214": {
//             "id": "e-214",
//             "eventTypeId": "MOUSE_MOVE",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
//                 "config": {
//                     "actionListId": "a-38",
//                     "affectedElements": {},
//                     "duration": 0
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|1c167c3d-709a-4095-70e4-61bf2a7e7cdd"
//             },
//             "config": [{
//                 "continuousParameterGroupId": "a-38-p",
//                 "selectedAxis": "X_AXIS",
//                 "basedOn": "ELEMENT",
//                 "reverse": false,
//                 "smoothing": 90,
//                 "restingState": 50
//             }, {
//                 "continuousParameterGroupId": "a-38-p-2",
//                 "selectedAxis": "Y_AXIS",
//                 "basedOn": "ELEMENT",
//                 "reverse": false,
//                 "smoothing": 90,
//                 "restingState": 50
//             }],
//             "createdOn": 1560807719871
//         },
//         "e-215": {
//             "id": "e-215",
//             "eventTypeId": "MOUSE_OVER",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-39",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-216"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|1c167c3d-709a-4095-70e4-61bf2a7e7cdd"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1560807803092
//         },
//         "e-216": {
//             "id": "e-216",
//             "eventTypeId": "MOUSE_OUT",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-40",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-215"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|1c167c3d-709a-4095-70e4-61bf2a7e7cdd"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1560807803094
//         },
//         "e-217": {
//             "id": "e-217",
//             "eventTypeId": "SCROLL_INTO_VIEW",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-41",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-218"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|bf6902db-7dcd-0a5e-5dc4-93fc6d261904"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": 60,
//                 "scrollOffsetUnit": "%",
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1560808013698
//         },
//         "e-219": {
//             "id": "e-219",
//             "eventTypeId": "MOUSE_OVER",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-35",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-220"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|ee9860da-b6ce-796b-b682-14687a4002a2"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1561036719914
//         },
//         "e-220": {
//             "id": "e-220",
//             "eventTypeId": "MOUSE_OUT",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-36",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-219"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|ee9860da-b6ce-796b-b682-14687a4002a2"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1561036719916
//         },
//         "e-224": {
//             "id": "e-224",
//             "eventTypeId": "MOUSE_CLICK",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-42",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-225"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|e7525588-6df0-283f-6520-62935286f372"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1561041512944
//         },
//         "e-226": {
//             "id": "e-226",
//             "eventTypeId": "SCROLL_INTO_VIEW",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-43",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-227"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|d94b74cc-b7e0-89d2-0bb5-445beb26e074"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": 50,
//                 "scrollOffsetUnit": "%",
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1561053107377
//         },
//         "e-230": {
//             "id": "e-230",
//             "eventTypeId": "PAGE_SCROLL",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
//                 "config": {
//                     "actionListId": "a-44",
//                     "affectedElements": {},
//                     "duration": 0
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "PAGE",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce"
//             },
//             "config": [{
//                 "continuousParameterGroupId": "a-44-p",
//                 "smoothing": 90,
//                 "startsEntering": true,
//                 "addStartOffset": false,
//                 "addOffsetValue": 50,
//                 "startsExiting": false,
//                 "addEndOffset": false,
//                 "endOffsetValue": 50
//             }],
//             "createdOn": 1561401798292
//         },
//         "e-231": {
//             "id": "e-231",
//             "eventTypeId": "MOUSE_OVER",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-35",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-232"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|5ac5c219-dec1-91bc-c704-05aac12a85e1"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1561403545220
//         },
//         "e-232": {
//             "id": "e-232",
//             "eventTypeId": "MOUSE_OUT",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-36",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-231"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|5ac5c219-dec1-91bc-c704-05aac12a85e1"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1561403545222
//         },
//         "e-233": {
//             "id": "e-233",
//             "eventTypeId": "PAGE_START",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-25",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-234"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "PAGE",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce"
//             },
//             "config": {
//                 "loop": true,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1561405479841
//         },
//         "e-235": {
//             "id": "e-235",
//             "eventTypeId": "MOUSE_CLICK",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-45",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-236"
//                 }
//             },
//             "mediaQueries": ["tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|34b36b12-584f-4f70-d05b-54e685b2cf31"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1561409220722
//         },
//         "e-238": {
//             "id": "e-238",
//             "eventTypeId": "MOUSE_OVER",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-47",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-239"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|0a951ad5-7c67-5931-b624-57b857f37702"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1561842663076
//         },
//         "e-239": {
//             "id": "e-239",
//             "eventTypeId": "MOUSE_OUT",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-48",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-238"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|0a951ad5-7c67-5931-b624-57b857f37702"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1561842663079
//         },
//         "e-243": {
//             "id": "e-243",
//             "eventTypeId": "MOUSE_CLICK",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-52",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-244"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|1230903e-5606-deac-9782-e0e9e00418ce"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1562342159158
//         },
//         "e-245": {
//             "id": "e-245",
//             "eventTypeId": "MOUSE_MOVE",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
//                 "config": {
//                     "actionListId": "a-50",
//                     "affectedElements": {},
//                     "duration": 0
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|3adb6ece-45ee-1adb-6e9c-f4544412d9fb"
//             },
//             "config": [{
//                 "continuousParameterGroupId": "a-50-p",
//                 "selectedAxis": "X_AXIS",
//                 "basedOn": "ELEMENT",
//                 "reverse": false,
//                 "smoothing": 94,
//                 "restingState": 50
//             }, {
//                 "continuousParameterGroupId": "a-50-p-2",
//                 "selectedAxis": "Y_AXIS",
//                 "basedOn": "ELEMENT",
//                 "reverse": false,
//                 "smoothing": 94,
//                 "restingState": 50
//             }],
//             "createdOn": 1562342593977
//         },
//         "e-246": {
//             "id": "e-246",
//             "eventTypeId": "MOUSE_MOVE",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
//                 "config": {
//                     "actionListId": "a-53",
//                     "affectedElements": {},
//                     "duration": 0
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|8711db79-a234-bf26-5b82-cad62457d38f"
//             },
//             "config": [{
//                 "continuousParameterGroupId": "a-53-p",
//                 "selectedAxis": "X_AXIS",
//                 "basedOn": "ELEMENT",
//                 "reverse": false,
//                 "smoothing": 90,
//                 "restingState": 50
//             }, {
//                 "continuousParameterGroupId": "a-53-p-2",
//                 "selectedAxis": "Y_AXIS",
//                 "basedOn": "ELEMENT",
//                 "reverse": false,
//                 "smoothing": 90,
//                 "restingState": 50
//             }],
//             "createdOn": 1562343402453
//         },
//         "e-249": {
//             "id": "e-249",
//             "eventTypeId": "MOUSE_OVER",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-55",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-250"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|9c44e59b-c426-b4c7-8d46-844072810930"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1562530065117
//         },
//         "e-250": {
//             "id": "e-250",
//             "eventTypeId": "MOUSE_OUT",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-56",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-249"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|9c44e59b-c426-b4c7-8d46-844072810930"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1562530065121
//         },
//         "e-251": {
//             "id": "e-251",
//             "eventTypeId": "MOUSE_OVER",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-57",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-252"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|30d4821d-3a78-3a44-889f-73167c3d3cc4"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1562532647088
//         },
//         "e-252": {
//             "id": "e-252",
//             "eventTypeId": "MOUSE_OUT",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-58",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-251"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|30d4821d-3a78-3a44-889f-73167c3d3cc4"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1562532647090
//         },
//         "e-253": {
//             "id": "e-253",
//             "eventTypeId": "MOUSE_OVER",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-59",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-254"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|051a6306-bcc9-338e-85c7-0f5bb752000d"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1562533826025
//         },
//         "e-254": {
//             "id": "e-254",
//             "eventTypeId": "MOUSE_OUT",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-60",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-253"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|051a6306-bcc9-338e-85c7-0f5bb752000d"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1562533826028
//         },
//         "e-255": {
//             "id": "e-255",
//             "eventTypeId": "MOUSE_CLICK",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-61",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-256"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|5dd477fe-e262-154d-dffd-801ac89392e7"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1562579704100
//         },
//         "e-257": {
//             "id": "e-257",
//             "eventTypeId": "MOUSE_CLICK",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-62",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-258"
//                 }
//             },
//             "mediaQueries": ["tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|79094ce1-7308-6f1a-1195-92d44a0ac755"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1562581223705
//         },
//         "e-259": {
//             "id": "e-259",
//             "eventTypeId": "MOUSE_CLICK",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-63",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-260"
//                 }
//             },
//             "mediaQueries": ["tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|9919f10a-0cf1-d01b-2179-0e43b89a1461"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1562582967994
//         },
//         "e-261": {
//             "id": "e-261",
//             "eventTypeId": "MOUSE_CLICK",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-64",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-262"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|2ff84a05-2905-9869-b0e9-ee8f9c2991c5"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1562583305965
//         },
//         "e-263": {
//             "id": "e-263",
//             "eventTypeId": "MOUSE_CLICK",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-65",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-264"
//                 }
//             },
//             "mediaQueries": ["tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|1b88a246-cf95-94ee-3710-0294d1253315"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1562583984414
//         },
//         "e-265": {
//             "id": "e-265",
//             "eventTypeId": "MOUSE_CLICK",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-66",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-266"
//                 }
//             },
//             "mediaQueries": ["tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|602cc19b-fb96-91cd-ea93-7e2ca08404fc"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1562584693852
//         },
//         "e-267": {
//             "id": "e-267",
//             "eventTypeId": "MOUSE_CLICK",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-67",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-268"
//                 }
//             },
//             "mediaQueries": ["tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|a7d4b4bc-6acd-6d44-8c84-e6954ddaa24e"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1562584871983
//         },
//         "e-269": {
//             "id": "e-269",
//             "eventTypeId": "MOUSE_CLICK",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-68",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-270"
//                 }
//             },
//             "mediaQueries": ["tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|cee2d40d-00b3-df63-99a1-8984a30d2029"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1562585202681
//         },
//         "e-271": {
//             "id": "e-271",
//             "eventTypeId": "MOUSE_CLICK",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-69",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-272"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|5e930df9-6f78-f909-8dd9-e6258927e1c1"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1562585450366
//         },
//         "e-275": {
//             "id": "e-275",
//             "eventTypeId": "SCROLLING_IN_VIEW",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
//                 "config": {
//                     "actionListId": "a-70",
//                     "affectedElements": {},
//                     "duration": 0
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|e40cd887-efbb-e533-6d53-9cf55e3f5f95"
//             },
//             "config": [{
//                 "continuousParameterGroupId": "a-70-p",
//                 "smoothing": 90,
//                 "startsEntering": true,
//                 "addStartOffset": false,
//                 "addOffsetValue": 50,
//                 "startsExiting": false,
//                 "addEndOffset": false,
//                 "endOffsetValue": 50
//             }],
//             "createdOn": 1562759101981
//         },
//         "e-279": {
//             "id": "e-279",
//             "eventTypeId": "SCROLLING_IN_VIEW",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
//                 "config": {
//                     "actionListId": "a-71",
//                     "affectedElements": {},
//                     "duration": 0
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|606a0e05-a512-3e03-745e-8123ddf930c1"
//             },
//             "config": [{
//                 "continuousParameterGroupId": "a-71-p",
//                 "smoothing": 50,
//                 "startsEntering": true,
//                 "addStartOffset": false,
//                 "addOffsetValue": 50,
//                 "startsExiting": false,
//                 "addEndOffset": false,
//                 "endOffsetValue": 50
//             }],
//             "createdOn": 1562760886501
//         },
//         "e-280": {
//             "id": "e-280",
//             "eventTypeId": "MOUSE_OVER",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-73",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-281"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|1230903e-5606-deac-9782-e0e9e00418ce"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1563716568202
//         },
//         "e-281": {
//             "id": "e-281",
//             "eventTypeId": "MOUSE_OUT",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-74",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-280"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|1230903e-5606-deac-9782-e0e9e00418ce"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1563716568205
//         },
//         "e-282": {
//             "id": "e-282",
//             "eventTypeId": "MOUSE_OVER",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-75",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-283"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|5dd477fe-e262-154d-dffd-801ac89392e7"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1563727292324
//         },
//         "e-283": {
//             "id": "e-283",
//             "eventTypeId": "MOUSE_OUT",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-78",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-282"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|5dd477fe-e262-154d-dffd-801ac89392e7"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1563727292327
//         },
//         "e-284": {
//             "id": "e-284",
//             "eventTypeId": "MOUSE_OVER",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-76",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-285"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|5e930df9-6f78-f909-8dd9-e6258927e1c1"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1563727565231
//         },
//         "e-285": {
//             "id": "e-285",
//             "eventTypeId": "MOUSE_OUT",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-77",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-284"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|5e930df9-6f78-f909-8dd9-e6258927e1c1"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1563727565234
//         },
//         "e-286": {
//             "id": "e-286",
//             "eventTypeId": "MOUSE_CLICK",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-26",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-287"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|c90dcca4-13c3-da70-91ba-e80df6a3360d"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1563727980519
//         },
//         "e-287": {
//             "id": "e-287",
//             "eventTypeId": "MOUSE_SECOND_CLICK",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-27",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-286"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|c90dcca4-13c3-da70-91ba-e80df6a3360d"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1563727980522
//         },
//         "e-288": {
//             "id": "e-288",
//             "eventTypeId": "MOUSE_OVER",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-79",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-289"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|c90dcca4-13c3-da70-91ba-e80df6a3360d"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1563728134493
//         },
//         "e-289": {
//             "id": "e-289",
//             "eventTypeId": "MOUSE_OUT",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-80",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-288"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "ELEMENT",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce|c90dcca4-13c3-da70-91ba-e80df6a3360d"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1563728134496
//         },
//         "e-290": {
//             "id": "e-290",
//             "eventTypeId": "PAGE_START",
//             "action": {
//                 "id": "",
//                 "actionTypeId": "GENERAL_START_ACTION",
//                 "config": {
//                     "delay": 0,
//                     "easing": "",
//                     "duration": 0,
//                     "actionListId": "a-81",
//                     "affectedElements": {},
//                     "playInReverse": false,
//                     "autoStopEventId": "e-291"
//                 }
//             },
//             "mediaQueries": ["main", "medium", "small", "tiny"],
//             "target": {
//                 "appliesTo": "PAGE",
//                 "styleBlockIds": [],
//                 "id": "5d547d82782f476bb4a9d5ce"
//             },
//             "config": {
//                 "loop": false,
//                 "playInReverse": false,
//                 "scrollOffsetValue": null,
//                 "scrollOffsetUnit": null,
//                 "delay": null,
//                 "direction": null,
//                 "effectIn": null
//             },
//             "createdOn": 1563729313248
//         }
//     },
//     "actionLists": {
//         "a-7": {
//             "id": "a-7",
//             "title": "mover-over-interaction",
//             "continuousParameterGroups": [{
//                 "id": "a-7-p",
//                 "type": "MOUSE_X",
//                 "parameterLabel": "Mouse X",
//                 "continuousActionGroups": [{
//                     "keyframe": 0,
//                     "actionItems": [{
//                         "id": "a-7-n",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".bg-scroll",
//                                 "selectorGuids": ["cab5e1b3-aea5-6317-7e84-c6fe82685ddb"]
//                             },
//                             "xValue": -10,
//                             "xUnit": "PX",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }]
//                 }, {
//                     "keyframe": 100,
//                     "actionItems": [{
//                         "id": "a-7-n-2",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".bg-scroll",
//                                 "selectorGuids": ["cab5e1b3-aea5-6317-7e84-c6fe82685ddb"]
//                             },
//                             "xValue": 10,
//                             "xUnit": "PX",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }]
//                 }]
//             }, {
//                 "id": "a-7-p-2",
//                 "type": "MOUSE_Y",
//                 "parameterLabel": "Mouse Y",
//                 "continuousActionGroups": [{
//                     "keyframe": 0,
//                     "actionItems": [{
//                         "id": "a-7-n-3",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".bg-scroll",
//                                 "selectorGuids": ["cab5e1b3-aea5-6317-7e84-c6fe82685ddb"]
//                             },
//                             "yValue": -10,
//                             "xUnit": "PX",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }]
//                 }, {
//                     "keyframe": 100,
//                     "actionItems": [{
//                         "id": "a-7-n-4",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".bg-scroll",
//                                 "selectorGuids": ["cab5e1b3-aea5-6317-7e84-c6fe82685ddb"]
//                             },
//                             "yValue": 10,
//                             "xUnit": "PX",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }]
//                 }]
//             }],
//             "createdOn": 1560337142173
//         },
//         "a-8": {
//             "id": "a-8",
//             "title": "side-nav",
//             "continuousParameterGroups": [{
//                 "id": "a-8-p",
//                 "type": "SCROLL_PROGRESS",
//                 "parameterLabel": "Scroll",
//                 "continuousActionGroups": [{
//                     "keyframe": 0,
//                     "actionItems": [{
//                         "id": "a-8-n",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f47102aa9d5d1|1d1975cb-14fd-88ba-e4bf-53668df003aa"
//                             },
//                             "xValue": 10,
//                             "xUnit": "PX",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }]
//                 }, {
//                     "keyframe": 18,
//                     "actionItems": [{
//                         "id": "a-8-n-5",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f47102aa9d5d1|1d1975cb-14fd-88ba-e4bf-53668df003aa"
//                             },
//                             "xValue": 10,
//                             "xUnit": "PX",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }, {
//                         "id": "a-8-n-6",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f47102aa9d5d1|57d749b9-e53e-40ca-eb34-5c5820454e1d"
//                             },
//                             "xValue": 0,
//                             "xUnit": "PX",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }]
//                 }, {
//                     "keyframe": 20,
//                     "actionItems": [{
//                         "id": "a-8-n-2",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f47102aa9d5d1|1d1975cb-14fd-88ba-e4bf-53668df003aa"
//                             },
//                             "xValue": 0,
//                             "xUnit": "PX",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }, {
//                         "id": "a-8-n-7",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f47102aa9d5d1|57d749b9-e53e-40ca-eb34-5c5820454e1d"
//                             },
//                             "xValue": 10,
//                             "xUnit": "PX",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }]
//                 }]
//             }],
//             "createdOn": 1560374294640
//         },
//         "a-9": {
//             "id": "a-9",
//             "title": "scroll-section-1",
//             "continuousParameterGroups": [{
//                 "id": "a-9-p",
//                 "type": "SCROLL_PROGRESS",
//                 "parameterLabel": "Scroll",
//                 "continuousActionGroups": [{
//                     "keyframe": 30,
//                     "actionItems": [{
//                         "id": "a-9-n-13",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".hero-parent",
//                                 "selectorGuids": ["dab445a4-1d14-d7ea-d6fc-5b68eba3edb1"]
//                             },
//                             "value": 1,
//                             "unit": ""
//                         }
//                     }, {
//                         "id": "a-9-n-29",
//                         "actionTypeId": "TRANSFORM_SCALE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".bg-main",
//                                 "selectorGuids": ["2e674f4d-693e-bf2d-2975-255f0f388fa6"]
//                             },
//                             "xValue": 1,
//                             "yValue": 1,
//                             "locked": true
//                         }
//                     }, {
//                         "id": "a-9-n-37",
//                         "actionTypeId": "TRANSFORM_SCALE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "id": "5d547d82782f476bb4a9d5ce|a46d1827-5165-1246-fde5-5a8b3a359089"
//                             },
//                             "xValue": 1,
//                             "yValue": 1,
//                             "locked": true
//                         }
//                     }]
//                 }, {
//                     "keyframe": 40,
//                     "actionItems": [{
//                         "id": "a-9-n-9",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".intro-parent",
//                                 "selectorGuids": ["b1fee5cb-9efe-35cd-425a-ec3cd7f1282a"]
//                             },
//                             "value": 0,
//                             "unit": ""
//                         }
//                     }, {
//                         "id": "a-9-n-11",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".text-a-1",
//                                 "selectorGuids": ["76a58e80-0330-5342-1c23-53dc6a92a5e5"]
//                             },
//                             "yValue": 80,
//                             "xUnit": "PX",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }, {
//                         "id": "a-9-n-19",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f476bb4a9d5ce|dcf28854-c021-68b1-26d8-0a4a2d0891e9"
//                             },
//                             "value": 1,
//                             "unit": ""
//                         }
//                     }, {
//                         "id": "a-9-n-14",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".hero-parent",
//                                 "selectorGuids": ["dab445a4-1d14-d7ea-d6fc-5b68eba3edb1"]
//                             },
//                             "value": 0,
//                             "unit": ""
//                         }
//                     }]
//                 }, {
//                     "keyframe": 45,
//                     "actionItems": [{
//                         "id": "a-9-n-15",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".draw-line-inner",
//                                 "selectorGuids": ["449be3d3-0d10-f389-d0d1-2a834d3841e9"]
//                             },
//                             "yValue": -100,
//                             "xUnit": "PX",
//                             "yUnit": "%",
//                             "zUnit": "PX"
//                         }
//                     }, {
//                         "id": "a-9-n-20",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f476bb4a9d5ce|dcf28854-c021-68b1-26d8-0a4a2d0891e9"
//                             },
//                             "value": 0,
//                             "unit": ""
//                         }
//                     }]
//                 }, {
//                     "keyframe": 50,
//                     "actionItems": [{
//                         "id": "a-9-n-10",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".intro-parent",
//                                 "selectorGuids": ["b1fee5cb-9efe-35cd-425a-ec3cd7f1282a"]
//                             },
//                             "value": 1,
//                             "unit": ""
//                         }
//                     }, {
//                         "id": "a-9-n-7",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f476bb4a9d5ce|d4634e5a-5139-cd2e-7c8d-125f52d7d88f"
//                             },
//                             "value": 0,
//                             "unit": ""
//                         }
//                     }]
//                 }, {
//                     "keyframe": 55,
//                     "actionItems": [{
//                         "id": "a-9-n-12",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".text-a-1",
//                                 "selectorGuids": ["76a58e80-0330-5342-1c23-53dc6a92a5e5"]
//                             },
//                             "yValue": 0,
//                             "xUnit": "PX",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }, {
//                         "id": "a-9-n-18",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".intro-parent",
//                                 "selectorGuids": ["b1fee5cb-9efe-35cd-425a-ec3cd7f1282a"]
//                             },
//                             "value": 1,
//                             "unit": ""
//                         }
//                     }, {
//                         "id": "a-9-n-27",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {},
//                             "value": 0,
//                             "unit": ""
//                         }
//                     }, {
//                         "id": "a-9-n-38",
//                         "actionTypeId": "TRANSFORM_SCALE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "id": "5d547d82782f476bb4a9d5ce|a46d1827-5165-1246-fde5-5a8b3a359089"
//                             },
//                             "xValue": 1.7000000000000004,
//                             "yValue": 1.7000000000000004,
//                             "locked": true
//                         }
//                     }]
//                 }, {
//                     "keyframe": 60,
//                     "actionItems": [{
//                         "id": "a-9-n-31",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "id": "5d547d82782f476bb4a9d5ce|a46d1827-5165-1246-fde5-5a8b3a359089"
//                             },
//                             "yValue": 0,
//                             "xUnit": "PX",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }]
//                 }, {
//                     "keyframe": 65,
//                     "actionItems": [{
//                         "id": "a-9-n-23",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".text-a-1",
//                                 "selectorGuids": ["76a58e80-0330-5342-1c23-53dc6a92a5e5"]
//                             },
//                             "value": 1,
//                             "unit": ""
//                         }
//                     }, {
//                         "id": "a-9-n-21",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".head",
//                                 "selectorGuids": ["7177a8b5-bc18-679a-c2f9-0b890bd5b7a0"]
//                             },
//                             "value": 1,
//                             "unit": ""
//                         }
//                     }, {
//                         "id": "a-9-n-34",
//                         "actionTypeId": "TRANSFORM_SCALE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".bg-main",
//                                 "selectorGuids": ["2e674f4d-693e-bf2d-2975-255f0f388fa6"]
//                             },
//                             "xValue": 1.3,
//                             "yValue": 1.3,
//                             "locked": true
//                         }
//                     }]
//                 }, {
//                     "keyframe": 70,
//                     "actionItems": [{
//                         "id": "a-9-n-16",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".draw-line-inner",
//                                 "selectorGuids": ["449be3d3-0d10-f389-d0d1-2a834d3841e9"]
//                             },
//                             "yValue": 0,
//                             "xUnit": "PX",
//                             "yUnit": "%",
//                             "zUnit": "PX"
//                         }
//                     }, {
//                         "id": "a-9-n-25",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {},
//                             "value": 0,
//                             "unit": ""
//                         }
//                     }]
//                 }, {
//                     "keyframe": 75,
//                     "actionItems": [{
//                         "id": "a-9-n-22",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".head",
//                                 "selectorGuids": ["7177a8b5-bc18-679a-c2f9-0b890bd5b7a0"]
//                             },
//                             "value": 0,
//                             "unit": ""
//                         }
//                     }, {
//                         "id": "a-9-n-24",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".text-a-1",
//                                 "selectorGuids": ["76a58e80-0330-5342-1c23-53dc6a92a5e5"]
//                             },
//                             "value": 0,
//                             "unit": ""
//                         }
//                     }, {
//                         "id": "a-9-n-8",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f476bb4a9d5ce|d4634e5a-5139-cd2e-7c8d-125f52d7d88f"
//                             },
//                             "value": 1,
//                             "unit": ""
//                         }
//                     }]
//                 }, {
//                     "keyframe": 80,
//                     "actionItems": [{
//                         "id": "a-9-n-17",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".draw-line-inner",
//                                 "selectorGuids": ["449be3d3-0d10-f389-d0d1-2a834d3841e9"]
//                             },
//                             "yValue": 100,
//                             "xUnit": "PX",
//                             "yUnit": "%",
//                             "zUnit": "PX"
//                         }
//                     }, {
//                         "id": "a-9-n-26",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {},
//                             "value": 1,
//                             "unit": ""
//                         }
//                     }, {
//                         "id": "a-9-n-32",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "id": "5d547d82782f476bb4a9d5ce|a46d1827-5165-1246-fde5-5a8b3a359089"
//                             },
//                             "yValue": -400,
//                             "xUnit": "PX",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }]
//                 }, {
//                     "keyframe": 100,
//                     "actionItems": [{
//                         "id": "a-9-n-28",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {},
//                             "value": 0.6,
//                             "unit": ""
//                         }
//                     }]
//                 }]
//             }],
//             "createdOn": 1560410368126
//         },
//         "a-11": {
//             "id": "a-11",
//             "title": "hover-section-1",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-11-n",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".overlay-img-1",
//                             "selectorGuids": ["e39f26b1-604b-aee2-7a30-e362ccec49ba"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-11-n-5",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-cast-1",
//                             "selectorGuids": ["ee247d03-8cbc-54fd-90f7-abb009738fdc"]
//                         },
//                         "xValue": 1,
//                         "yValue": 1,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-11-n-3",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-content-parent",
//                             "selectorGuids": ["77b59d40-18f3-6dcf-3c90-1e5fc4d8c1f1"]
//                         },
//                         "yValue": 120,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-11-n-2",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".overlay-img-1",
//                             "selectorGuids": ["e39f26b1-604b-aee2-7a30-e362ccec49ba"]
//                         },
//                         "value": 0.1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-11-n-6",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 5000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-cast-1",
//                             "selectorGuids": ["ee247d03-8cbc-54fd-90f7-abb009738fdc"]
//                         },
//                         "xValue": 1.1,
//                         "yValue": 1.1,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-11-n-4",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 400,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-content-parent",
//                             "selectorGuids": ["77b59d40-18f3-6dcf-3c90-1e5fc4d8c1f1"]
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }],
//             "createdOn": 1560639006154,
//             "useFirstGroupAsInitialState": true
//         },
//         "a-12": {
//             "id": "a-12",
//             "title": "hover-out-section-1",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-12-n",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".overlay-img-1",
//                             "selectorGuids": ["e39f26b1-604b-aee2-7a30-e362ccec49ba"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-12-n-2",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-cast-1",
//                             "selectorGuids": ["ee247d03-8cbc-54fd-90f7-abb009738fdc"]
//                         },
//                         "xValue": 1,
//                         "yValue": 1,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-12-n-3",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 400,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-content-parent",
//                             "selectorGuids": ["77b59d40-18f3-6dcf-3c90-1e5fc4d8c1f1"]
//                         },
//                         "yValue": 120,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }],
//             "createdOn": 1560639006154,
//             "useFirstGroupAsInitialState": false
//         },
//         "a-13": {
//             "id": "a-13",
//             "title": "section-1-main-click",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-13-n",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-cast-1",
//                             "selectorGuids": ["ee247d03-8cbc-54fd-90f7-abb009738fdc"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-13-n-19",
//                     "actionTypeId": "GENERAL_DISPLAY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 0,
//                         "value": "none",
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".info-parent-1",
//                             "selectorGuids": ["e68e80d0-7e76-8b67-5db5-0d94275bb4f2"]
//                         }
//                     }
//                 }, {
//                     "id": "a-13-n-17",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|e665a47e-03df-db32-28f5-b1ac2eaa5067"
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-13-n-15",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|be85670b-7820-585c-b9d0-d04cf41f0417"
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-13-n-13",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".info-parent-1",
//                             "selectorGuids": ["e68e80d0-7e76-8b67-5db5-0d94275bb4f2"]
//                         },
//                         "value": 0.01,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-13-n-11",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "locked": false,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".info-parent-1",
//                             "selectorGuids": ["e68e80d0-7e76-8b67-5db5-0d94275bb4f2"]
//                         },
//                         "widthValue": 0,
//                         "widthUnit": "%",
//                         "heightUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-13-n-9",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "locked": false,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|34b36b12-584f-4f70-d05b-54e685b2cf2e"
//                         },
//                         "widthValue": 25,
//                         "widthUnit": "%",
//                         "heightUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-13-n-7",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".close-video",
//                             "selectorGuids": ["a69a5c76-ae43-3d51-6111-2ac7b2ad1553"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-13-n-5",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {},
//                         "xValue": 0,
//                         "xUnit": "%",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-13-n-3",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".nav-bar",
//                             "selectorGuids": ["059bde91-074b-8d03-3214-1e4d82bc87a2"]
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-13-n-2",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-cast-1",
//                             "selectorGuids": ["ee247d03-8cbc-54fd-90f7-abb009738fdc"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-13-n-10",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 800,
//                         "locked": false,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|34b36b12-584f-4f70-d05b-54e685b2cf2e"
//                         },
//                         "widthValue": 100,
//                         "widthUnit": "%",
//                         "heightUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-13-n-6",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 400,
//                         "target": {},
//                         "xValue": 140,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-13-n-4",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 400,
//                         "target": {
//                             "selector": ".nav-bar",
//                             "selectorGuids": ["059bde91-074b-8d03-3214-1e4d82bc87a2"]
//                         },
//                         "yValue": -100,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-13-n-20",
//                     "actionTypeId": "GENERAL_DISPLAY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 0,
//                         "value": "inline-block",
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".info-parent-1",
//                             "selectorGuids": ["e68e80d0-7e76-8b67-5db5-0d94275bb4f2"]
//                         }
//                     }
//                 }, {
//                     "id": "a-13-n-8",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 200,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".close-video",
//                             "selectorGuids": ["a69a5c76-ae43-3d51-6111-2ac7b2ad1553"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-13-n-14",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 400,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".info-parent-1",
//                             "selectorGuids": ["e68e80d0-7e76-8b67-5db5-0d94275bb4f2"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-13-n-18",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 400,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|e665a47e-03df-db32-28f5-b1ac2eaa5067"
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-13-n-16",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 800,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|be85670b-7820-585c-b9d0-d04cf41f0417"
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }]
//             }],
//             "createdOn": 1560639302624,
//             "useFirstGroupAsInitialState": true
//         },
//         "a-14": {
//             "id": "a-14",
//             "title": "section-1-close",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-14-n-5",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|4e9d6419-3f2a-0405-3947-e49d986bef2e"
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-14-n-15",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".img-parent-3",
//                             "selectorGuids": ["533159de-b7bc-b59f-e24b-9b2c3e773f06"]
//                         },
//                         "xValue": 0,
//                         "xUnit": "%",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-14-n-13",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|be85670b-7820-585c-b9d0-d04cf41f0417"
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-14-n-4",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 400,
//                         "target": {},
//                         "xValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-14-n-10",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 400,
//                         "target": {
//                             "selector": ".img-parent-2",
//                             "selectorGuids": ["a3b37549-9191-a7d5-4ad3-d4b5862f1225"]
//                         },
//                         "xValue": 0,
//                         "xUnit": "%",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-14-n-19",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".img-parent-4",
//                             "selectorGuids": ["0a97fa1a-3db7-27e0-6db4-a67ce7548ce1"]
//                         },
//                         "xValue": 0,
//                         "xUnit": "%",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-14-n-3",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 200,
//                         "easing": "inOutCirc",
//                         "duration": 400,
//                         "target": {
//                             "selector": ".nav-bar",
//                             "selectorGuids": ["059bde91-074b-8d03-3214-1e4d82bc87a2"]
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-14-n-17",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 200,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".img-cast-3",
//                             "selectorGuids": ["926e1b2c-1d6c-b098-0110-4a17fc0ba880"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-14-n-14",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 200,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".info-parent-2",
//                             "selectorGuids": ["b9bb7def-52c4-afbc-0dee-360dff957849"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-14-n",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 200,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".img-cast-1",
//                             "selectorGuids": ["ee247d03-8cbc-54fd-90f7-abb009738fdc"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-14-n-12",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 200,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".info-parent-1",
//                             "selectorGuids": ["e68e80d0-7e76-8b67-5db5-0d94275bb4f2"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-14-n-8",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 200,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".img-cast-2",
//                             "selectorGuids": ["f9883cf5-9e13-a1d1-5b29-07f4290e6658"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-14-n-18",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 200,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".info-parent-3",
//                             "selectorGuids": ["36e0cd98-432b-0f67-4563-53fc1552f1dd"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-14-n-20",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 200,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".img-cast-4",
//                             "selectorGuids": ["09936f8d-1b55-41d4-27e1-d0cc2ee6229d"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-14-n-21",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 200,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".info-parent-4",
//                             "selectorGuids": ["5f394821-be97-7538-7ac0-e86f07f87f25"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-14-n-2",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 400,
//                         "easing": "inOutCirc",
//                         "duration": 500,
//                         "locked": false,
//                         "target": {
//                             "selector": ".img-parent-1",
//                             "selectorGuids": ["1133f035-bfea-cfac-7454-1e566a527f8d"]
//                         },
//                         "widthValue": 25,
//                         "widthUnit": "%",
//                         "heightUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-14-n-9",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 600,
//                         "easing": "inOutCirc",
//                         "duration": 500,
//                         "locked": false,
//                         "target": {
//                             "selector": ".img-parent-2",
//                             "selectorGuids": ["a3b37549-9191-a7d5-4ad3-d4b5862f1225"]
//                         },
//                         "widthValue": 25,
//                         "widthUnit": "%",
//                         "heightUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-14-n-16",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 600,
//                         "easing": "inOutCirc",
//                         "duration": 500,
//                         "locked": false,
//                         "target": {
//                             "selector": ".img-parent-3",
//                             "selectorGuids": ["533159de-b7bc-b59f-e24b-9b2c3e773f06"]
//                         },
//                         "widthValue": 25,
//                         "widthUnit": "%",
//                         "heightUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-14-n-22",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 600,
//                         "easing": "inOutCirc",
//                         "duration": 500,
//                         "locked": false,
//                         "target": {
//                             "selector": ".img-parent-4",
//                             "selectorGuids": ["0a97fa1a-3db7-27e0-6db4-a67ce7548ce1"]
//                         },
//                         "widthValue": 25,
//                         "widthUnit": "%",
//                         "heightUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-14-n-23",
//                     "actionTypeId": "GENERAL_DISPLAY",
//                     "config": {
//                         "delay": 800,
//                         "easing": "",
//                         "duration": 0,
//                         "value": "none",
//                         "target": {
//                             "selector": ".info-parent-1",
//                             "selectorGuids": ["e68e80d0-7e76-8b67-5db5-0d94275bb4f2"]
//                         }
//                     }
//                 }, {
//                     "id": "a-14-n-26",
//                     "actionTypeId": "GENERAL_DISPLAY",
//                     "config": {
//                         "delay": 800,
//                         "easing": "",
//                         "duration": 0,
//                         "value": "none",
//                         "target": {
//                             "selector": ".info-parent-4",
//                             "selectorGuids": ["5f394821-be97-7538-7ac0-e86f07f87f25"]
//                         }
//                     }
//                 }, {
//                     "id": "a-14-n-25",
//                     "actionTypeId": "GENERAL_DISPLAY",
//                     "config": {
//                         "delay": 800,
//                         "easing": "",
//                         "duration": 0,
//                         "value": "none",
//                         "target": {
//                             "selector": ".info-parent-3",
//                             "selectorGuids": ["36e0cd98-432b-0f67-4563-53fc1552f1dd"]
//                         }
//                     }
//                 }, {
//                     "id": "a-14-n-24",
//                     "actionTypeId": "GENERAL_DISPLAY",
//                     "config": {
//                         "delay": 800,
//                         "easing": "",
//                         "duration": 0,
//                         "value": "none",
//                         "target": {
//                             "selector": ".info-parent-2",
//                             "selectorGuids": ["b9bb7def-52c4-afbc-0dee-360dff957849"]
//                         }
//                     }
//                 }]
//             }],
//             "createdOn": 1560639678898,
//             "useFirstGroupAsInitialState": false
//         },
//         "a-15": {
//             "id": "a-15",
//             "title": "hover-section-2",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-15-n",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".overlay-img-2",
//                             "selectorGuids": ["91471cdb-d3d1-c1f8-da00-0fdc53f04a52"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-15-n-2",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-cast-2",
//                             "selectorGuids": ["f9883cf5-9e13-a1d1-5b29-07f4290e6658"]
//                         },
//                         "xValue": 1,
//                         "yValue": 1,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-15-n-3",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-content-parent",
//                             "selectorGuids": ["77b59d40-18f3-6dcf-3c90-1e5fc4d8c1f1"]
//                         },
//                         "yValue": 100,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-15-n-4",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".overlay-img-2",
//                             "selectorGuids": ["91471cdb-d3d1-c1f8-da00-0fdc53f04a52"]
//                         },
//                         "value": 0.1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-15-n-5",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 5000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-cast-2",
//                             "selectorGuids": ["f9883cf5-9e13-a1d1-5b29-07f4290e6658"]
//                         },
//                         "xValue": 1.1,
//                         "yValue": 1.1,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-15-n-6",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 400,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-content-parent",
//                             "selectorGuids": ["77b59d40-18f3-6dcf-3c90-1e5fc4d8c1f1"]
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }],
//             "createdOn": 1560639006154,
//             "useFirstGroupAsInitialState": true
//         },
//         "a-16": {
//             "id": "a-16",
//             "title": "hover-out-section-2",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-16-n",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".overlay-img-2",
//                             "selectorGuids": ["91471cdb-d3d1-c1f8-da00-0fdc53f04a52"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-16-n-2",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-cast-2",
//                             "selectorGuids": ["f9883cf5-9e13-a1d1-5b29-07f4290e6658"]
//                         },
//                         "xValue": 1,
//                         "yValue": 1,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-16-n-3",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 400,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-content-parent",
//                             "selectorGuids": ["77b59d40-18f3-6dcf-3c90-1e5fc4d8c1f1"]
//                         },
//                         "yValue": 100,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }],
//             "createdOn": 1560639006154,
//             "useFirstGroupAsInitialState": false
//         },
//         "a-17": {
//             "id": "a-17",
//             "title": "section-2-main-click",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-17-n",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-cast-2",
//                             "selectorGuids": ["f9883cf5-9e13-a1d1-5b29-07f4290e6658"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-17-n-21",
//                     "actionTypeId": "GENERAL_DISPLAY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 0,
//                         "value": "none",
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".info-parent-2",
//                             "selectorGuids": ["b9bb7def-52c4-afbc-0dee-360dff957849"]
//                         }
//                     }
//                 }, {
//                     "id": "a-17-n-19",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|602cc19b-fb96-91cd-ea93-7e2ca08404ff"
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-17-n-17",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|602cc19b-fb96-91cd-ea93-7e2ca08404fe"
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-17-n-15",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".info-parent-2",
//                             "selectorGuids": ["b9bb7def-52c4-afbc-0dee-360dff957849"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-17-n-13",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|34b36b12-584f-4f70-d05b-54e685b2cf2e"
//                         },
//                         "xValue": 0,
//                         "xUnit": "%",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-17-n-3",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "locked": false,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|34b36b12-584f-4f70-d05b-54e685b2cf2e"
//                         },
//                         "widthValue": 25,
//                         "widthUnit": "%",
//                         "heightUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-17-n-4",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".close-video",
//                             "selectorGuids": ["a69a5c76-ae43-3d51-6111-2ac7b2ad1553"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-17-n-5",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {},
//                         "xValue": 0,
//                         "xUnit": "%",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-17-n-6",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".nav-bar",
//                             "selectorGuids": ["059bde91-074b-8d03-3214-1e4d82bc87a2"]
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-17-n-7",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-cast-2",
//                             "selectorGuids": ["f9883cf5-9e13-a1d1-5b29-07f4290e6658"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-17-n-22",
//                     "actionTypeId": "GENERAL_DISPLAY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 0,
//                         "value": "inline-block",
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".info-parent-2",
//                             "selectorGuids": ["b9bb7def-52c4-afbc-0dee-360dff957849"]
//                         }
//                     }
//                 }, {
//                     "id": "a-17-n-9",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 800,
//                         "locked": false,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|34b36b12-584f-4f70-d05b-54e685b2cf2e"
//                         },
//                         "widthValue": 100,
//                         "widthUnit": "%",
//                         "heightUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-17-n-10",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 400,
//                         "target": {},
//                         "xValue": 140,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-17-n-11",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 400,
//                         "target": {
//                             "selector": ".nav-bar",
//                             "selectorGuids": ["059bde91-074b-8d03-3214-1e4d82bc87a2"]
//                         },
//                         "yValue": -100,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-17-n-12",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 200,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".close-video",
//                             "selectorGuids": ["a69a5c76-ae43-3d51-6111-2ac7b2ad1553"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-17-n-18",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 200,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|602cc19b-fb96-91cd-ea93-7e2ca08404fe"
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-17-n-20",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 400,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|602cc19b-fb96-91cd-ea93-7e2ca08404ff"
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-17-n-16",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 400,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".info-parent-2",
//                             "selectorGuids": ["b9bb7def-52c4-afbc-0dee-360dff957849"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-17-n-14",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 800,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|34b36b12-584f-4f70-d05b-54e685b2cf2e"
//                         },
//                         "xValue": -25,
//                         "xUnit": "%",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }],
//             "createdOn": 1560639302624,
//             "useFirstGroupAsInitialState": true
//         },
//         "a-18": {
//             "id": "a-18",
//             "title": "section-1-cast-scroll-in",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-18-n",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-parent-1",
//                             "selectorGuids": ["1133f035-bfea-cfac-7454-1e566a527f8d"]
//                         },
//                         "yValue": 100,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-18-n-9",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|bdd0030d-c334-dfdc-08e0-2230f0ed544d"
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-18-n-7",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-parent-4",
//                             "selectorGuids": ["0a97fa1a-3db7-27e0-6db4-a67ce7548ce1"]
//                         },
//                         "yValue": 100,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-18-n-5",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-parent-3",
//                             "selectorGuids": ["533159de-b7bc-b59f-e24b-9b2c3e773f06"]
//                         },
//                         "yValue": 100,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-18-n-3",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-parent-2",
//                             "selectorGuids": ["a3b37549-9191-a7d5-4ad3-d4b5862f1225"]
//                         },
//                         "yValue": 100,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-18-n-2",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 800,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-parent-1",
//                             "selectorGuids": ["1133f035-bfea-cfac-7454-1e566a527f8d"]
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-18-n-10",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 4000,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|bdd0030d-c334-dfdc-08e0-2230f0ed544d"
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-18-n-4",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 200,
//                         "easing": "ease",
//                         "duration": 800,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-parent-2",
//                             "selectorGuids": ["a3b37549-9191-a7d5-4ad3-d4b5862f1225"]
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-18-n-6",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 400,
//                         "easing": "ease",
//                         "duration": 800,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-parent-3",
//                             "selectorGuids": ["533159de-b7bc-b59f-e24b-9b2c3e773f06"]
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-18-n-8",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 600,
//                         "easing": "ease",
//                         "duration": 800,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-parent-4",
//                             "selectorGuids": ["0a97fa1a-3db7-27e0-6db4-a67ce7548ce1"]
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }],
//             "createdOn": 1560640955164,
//             "useFirstGroupAsInitialState": true
//         },
//         "a-24": {
//             "id": "a-24",
//             "title": "page-load",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-24-n-32",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|40858084-7b9e-eee7-cf39-12c5b1e7540c"
//                         },
//                         "yValue": 100,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-24-n-19",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|f2c78e0f-81cb-fec5-246c-07f792b851ef"
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-24-n-18",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|3cc2435c-503b-460c-bdf4-5f3c9a848281"
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-24-n-33",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 6000,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|40858084-7b9e-eee7-cf39-12c5b1e7540c"
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-24-n-5",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 600,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|3cc2435c-503b-460c-bdf4-5f3c9a848281"
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-24-n-34",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 2600,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|40858084-7b9e-eee7-cf39-12c5b1e7540c"
//                         },
//                         "yValue": -100,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-24-n-4",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 3000,
//                         "easing": "ease",
//                         "duration": 400,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|f2c78e0f-81cb-fec5-246c-07f792b851ef"
//                         },
//                         "yValue": -100,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }],
//             "createdOn": 1560674261835,
//             "useFirstGroupAsInitialState": true
//         },
//         "a-29": {
//             "id": "a-29",
//             "title": "hover-section-3",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-29-n",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".overlay-img-3",
//                             "selectorGuids": ["bf0c2770-334e-4c98-e02b-3de333db22c8"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-29-n-2",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-cast-3",
//                             "selectorGuids": ["926e1b2c-1d6c-b098-0110-4a17fc0ba880"]
//                         },
//                         "xValue": 1,
//                         "yValue": 1,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-29-n-3",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-content-parent",
//                             "selectorGuids": ["77b59d40-18f3-6dcf-3c90-1e5fc4d8c1f1"]
//                         },
//                         "yValue": 100,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-29-n-4",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".overlay-img-3",
//                             "selectorGuids": ["bf0c2770-334e-4c98-e02b-3de333db22c8"]
//                         },
//                         "value": 0.1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-29-n-5",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 5000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-cast-3",
//                             "selectorGuids": ["926e1b2c-1d6c-b098-0110-4a17fc0ba880"]
//                         },
//                         "xValue": 1.1,
//                         "yValue": 1.1,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-29-n-6",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 400,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-content-parent",
//                             "selectorGuids": ["77b59d40-18f3-6dcf-3c90-1e5fc4d8c1f1"]
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }],
//             "createdOn": 1560639006154,
//             "useFirstGroupAsInitialState": true
//         },
//         "a-28": {
//             "id": "a-28",
//             "title": "hover-out-section-3",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-28-n",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".overlay-img-3",
//                             "selectorGuids": ["bf0c2770-334e-4c98-e02b-3de333db22c8"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-28-n-2",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-cast-3",
//                             "selectorGuids": ["926e1b2c-1d6c-b098-0110-4a17fc0ba880"]
//                         },
//                         "xValue": 1,
//                         "yValue": 1,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-28-n-3",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 400,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-content-parent",
//                             "selectorGuids": ["77b59d40-18f3-6dcf-3c90-1e5fc4d8c1f1"]
//                         },
//                         "yValue": 100,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }],
//             "createdOn": 1560639006154,
//             "useFirstGroupAsInitialState": false
//         },
//         "a-30": {
//             "id": "a-30",
//             "title": "section-3-main-click",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-30-n",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-cast-3",
//                             "selectorGuids": ["926e1b2c-1d6c-b098-0110-4a17fc0ba880"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-30-n-19",
//                     "actionTypeId": "GENERAL_DISPLAY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 0,
//                         "value": "none",
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".info-parent-3",
//                             "selectorGuids": ["36e0cd98-432b-0f67-4563-53fc1552f1dd"]
//                         }
//                     }
//                 }, {
//                     "id": "a-30-n-2",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|a7d4b4bc-6acd-6d44-8c84-e6954ddaa251"
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-30-n-3",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|a7d4b4bc-6acd-6d44-8c84-e6954ddaa250"
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-30-n-4",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".info-parent-3",
//                             "selectorGuids": ["36e0cd98-432b-0f67-4563-53fc1552f1dd"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-30-n-5",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|34b36b12-584f-4f70-d05b-54e685b2cf2e"
//                         },
//                         "xValue": 0,
//                         "xUnit": "%",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-30-n-6",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "locked": false,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|34b36b12-584f-4f70-d05b-54e685b2cf2e"
//                         },
//                         "widthValue": 25,
//                         "widthUnit": "%",
//                         "heightUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-30-n-7",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".close-video",
//                             "selectorGuids": ["a69a5c76-ae43-3d51-6111-2ac7b2ad1553"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-30-n-8",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {},
//                         "xValue": 0,
//                         "xUnit": "%",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-30-n-9",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".nav-bar",
//                             "selectorGuids": ["059bde91-074b-8d03-3214-1e4d82bc87a2"]
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-30-n-10",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-cast-3",
//                             "selectorGuids": ["926e1b2c-1d6c-b098-0110-4a17fc0ba880"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-30-n-20",
//                     "actionTypeId": "GENERAL_DISPLAY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 0,
//                         "value": "inline-block",
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".info-parent-3",
//                             "selectorGuids": ["36e0cd98-432b-0f67-4563-53fc1552f1dd"]
//                         }
//                     }
//                 }, {
//                     "id": "a-30-n-12",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 800,
//                         "locked": false,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|34b36b12-584f-4f70-d05b-54e685b2cf2e"
//                         },
//                         "widthValue": 100,
//                         "widthUnit": "%",
//                         "heightUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-30-n-13",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 400,
//                         "target": {},
//                         "xValue": 140,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-30-n-14",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 400,
//                         "target": {
//                             "selector": ".nav-bar",
//                             "selectorGuids": ["059bde91-074b-8d03-3214-1e4d82bc87a2"]
//                         },
//                         "yValue": -100,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-30-n-15",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 200,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".close-video",
//                             "selectorGuids": ["a69a5c76-ae43-3d51-6111-2ac7b2ad1553"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-30-n-16",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 200,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|a7d4b4bc-6acd-6d44-8c84-e6954ddaa250"
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-30-n-17",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 400,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|a7d4b4bc-6acd-6d44-8c84-e6954ddaa251"
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-30-n-11",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 400,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".info-parent-3",
//                             "selectorGuids": ["36e0cd98-432b-0f67-4563-53fc1552f1dd"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-30-n-18",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 800,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|34b36b12-584f-4f70-d05b-54e685b2cf2e"
//                         },
//                         "xValue": -50,
//                         "xUnit": "%",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }],
//             "createdOn": 1560639302624,
//             "useFirstGroupAsInitialState": true
//         },
//         "a-31": {
//             "id": "a-31",
//             "title": "hover-section-4",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-31-n",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".overlay-img-4",
//                             "selectorGuids": ["d95b26ae-9630-0e99-11b5-17501ffab7a1"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-31-n-2",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-cast-4",
//                             "selectorGuids": ["09936f8d-1b55-41d4-27e1-d0cc2ee6229d"]
//                         },
//                         "xValue": 1,
//                         "yValue": 1,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-31-n-3",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-content-parent",
//                             "selectorGuids": ["77b59d40-18f3-6dcf-3c90-1e5fc4d8c1f1"]
//                         },
//                         "yValue": 100,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-31-n-4",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".overlay-img-4",
//                             "selectorGuids": ["d95b26ae-9630-0e99-11b5-17501ffab7a1"]
//                         },
//                         "value": 0.1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-31-n-5",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 5000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-cast-4",
//                             "selectorGuids": ["09936f8d-1b55-41d4-27e1-d0cc2ee6229d"]
//                         },
//                         "xValue": 1.1,
//                         "yValue": 1.1,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-31-n-6",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 400,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-content-parent",
//                             "selectorGuids": ["77b59d40-18f3-6dcf-3c90-1e5fc4d8c1f1"]
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }],
//             "createdOn": 1560639006154,
//             "useFirstGroupAsInitialState": true
//         },
//         "a-32": {
//             "id": "a-32",
//             "title": "hover-out-section-4",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-32-n",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".overlay-img-4",
//                             "selectorGuids": ["d95b26ae-9630-0e99-11b5-17501ffab7a1"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-32-n-2",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-cast-4",
//                             "selectorGuids": ["09936f8d-1b55-41d4-27e1-d0cc2ee6229d"]
//                         },
//                         "xValue": 1,
//                         "yValue": 1,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-32-n-3",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 400,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-content-parent",
//                             "selectorGuids": ["77b59d40-18f3-6dcf-3c90-1e5fc4d8c1f1"]
//                         },
//                         "yValue": 100,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }],
//             "createdOn": 1560639006154,
//             "useFirstGroupAsInitialState": false
//         },
//         "a-33": {
//             "id": "a-33",
//             "title": "section-4-main-click",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-33-n",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-cast-4",
//                             "selectorGuids": ["09936f8d-1b55-41d4-27e1-d0cc2ee6229d"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-33-n-19",
//                     "actionTypeId": "GENERAL_DISPLAY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 0,
//                         "value": "none",
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".info-parent-4",
//                             "selectorGuids": ["5f394821-be97-7538-7ac0-e86f07f87f25"]
//                         }
//                     }
//                 }, {
//                     "id": "a-33-n-2",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|cee2d40d-00b3-df63-99a1-8984a30d202c"
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-33-n-3",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|cee2d40d-00b3-df63-99a1-8984a30d202b"
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-33-n-4",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".info-parent-4",
//                             "selectorGuids": ["5f394821-be97-7538-7ac0-e86f07f87f25"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-33-n-5",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|34b36b12-584f-4f70-d05b-54e685b2cf2e"
//                         },
//                         "xValue": 0,
//                         "xUnit": "%",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-33-n-6",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "locked": false,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|34b36b12-584f-4f70-d05b-54e685b2cf2e"
//                         },
//                         "widthValue": 25,
//                         "widthUnit": "%",
//                         "heightUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-33-n-7",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".close-video",
//                             "selectorGuids": ["a69a5c76-ae43-3d51-6111-2ac7b2ad1553"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-33-n-8",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {},
//                         "xValue": 0,
//                         "xUnit": "%",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-33-n-9",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".nav-bar",
//                             "selectorGuids": ["059bde91-074b-8d03-3214-1e4d82bc87a2"]
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-33-n-10",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-cast-4",
//                             "selectorGuids": ["09936f8d-1b55-41d4-27e1-d0cc2ee6229d"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-33-n-20",
//                     "actionTypeId": "GENERAL_DISPLAY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 0,
//                         "value": "inline-block",
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".info-parent-4",
//                             "selectorGuids": ["5f394821-be97-7538-7ac0-e86f07f87f25"]
//                         }
//                     }
//                 }, {
//                     "id": "a-33-n-12",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 800,
//                         "locked": false,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|34b36b12-584f-4f70-d05b-54e685b2cf2e"
//                         },
//                         "widthValue": 100,
//                         "widthUnit": "%",
//                         "heightUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-33-n-13",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 400,
//                         "target": {},
//                         "xValue": 140,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-33-n-14",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 400,
//                         "target": {
//                             "selector": ".nav-bar",
//                             "selectorGuids": ["059bde91-074b-8d03-3214-1e4d82bc87a2"]
//                         },
//                         "yValue": -100,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-33-n-15",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 200,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".close-video",
//                             "selectorGuids": ["a69a5c76-ae43-3d51-6111-2ac7b2ad1553"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-33-n-16",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 200,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|cee2d40d-00b3-df63-99a1-8984a30d202b"
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-33-n-17",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 400,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|cee2d40d-00b3-df63-99a1-8984a30d202c"
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-33-n-11",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 400,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".info-parent-4",
//                             "selectorGuids": ["5f394821-be97-7538-7ac0-e86f07f87f25"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-33-n-18",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 800,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|34b36b12-584f-4f70-d05b-54e685b2cf2e"
//                         },
//                         "xValue": -75,
//                         "xUnit": "%",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }],
//             "createdOn": 1560639302624,
//             "useFirstGroupAsInitialState": true
//         },
//         "a-34": {
//             "id": "a-34",
//             "title": "grid-parent-1-hover",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-34-n",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".grid-bg-img._1",
//                             "selectorGuids": ["04a90f1f-1bdd-28b4-c796-d297e23b2a0e", "7c70f3fe-2ef7-ba1b-0aa6-b007927c8e18"]
//                         },
//                         "value": 0.3,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-34-n-3",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".grid-bg-img._1",
//                             "selectorGuids": ["04a90f1f-1bdd-28b4-c796-d297e23b2a0e", "7c70f3fe-2ef7-ba1b-0aa6-b007927c8e18"]
//                         },
//                         "xValue": 1,
//                         "yValue": 1,
//                         "locked": true
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-34-n-2",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".grid-bg-img._1",
//                             "selectorGuids": ["04a90f1f-1bdd-28b4-c796-d297e23b2a0e", "7c70f3fe-2ef7-ba1b-0aa6-b007927c8e18"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-34-n-4",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 5000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".grid-bg-img._1",
//                             "selectorGuids": ["04a90f1f-1bdd-28b4-c796-d297e23b2a0e", "7c70f3fe-2ef7-ba1b-0aa6-b007927c8e18"]
//                         },
//                         "xValue": 1.1,
//                         "yValue": 1.1,
//                         "locked": true
//                     }
//                 }]
//             }],
//             "createdOn": 1560807147696,
//             "useFirstGroupAsInitialState": true
//         },
//         "a-37": {
//             "id": "a-37",
//             "title": "grid-parent-1-out",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-37-n",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".grid-bg-img._1",
//                             "selectorGuids": ["04a90f1f-1bdd-28b4-c796-d297e23b2a0e", "7c70f3fe-2ef7-ba1b-0aa6-b007927c8e18"]
//                         },
//                         "value": 0.3,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-37-n-2",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 5000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".grid-bg-img._1",
//                             "selectorGuids": ["04a90f1f-1bdd-28b4-c796-d297e23b2a0e", "7c70f3fe-2ef7-ba1b-0aa6-b007927c8e18"]
//                         },
//                         "xValue": 1,
//                         "yValue": 1,
//                         "locked": true
//                     }
//                 }]
//             }],
//             "createdOn": 1560807147696,
//             "useFirstGroupAsInitialState": false
//         },
//         "a-35": {
//             "id": "a-35",
//             "title": "grid-parent-2-hover",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-35-n",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-head-3.a-p",
//                             "selectorGuids": ["47c729cd-3984-2932-2609-2060ae089aa2", "7345e75f-f190-e08f-c1ff-315e52ea5795"]
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-35-n-3",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-head-3",
//                             "selectorGuids": ["47c729cd-3984-2932-2609-2060ae089aa2"]
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-35-n-2",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 300,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-head-3.a-p",
//                             "selectorGuids": ["47c729cd-3984-2932-2609-2060ae089aa2", "7345e75f-f190-e08f-c1ff-315e52ea5795"]
//                         },
//                         "yValue": -100,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-35-n-4",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 300,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-head-3",
//                             "selectorGuids": ["47c729cd-3984-2932-2609-2060ae089aa2"]
//                         },
//                         "yValue": -100,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }],
//             "createdOn": 1560807495857,
//             "useFirstGroupAsInitialState": true
//         },
//         "a-36": {
//             "id": "a-36",
//             "title": "grid-parent-2-out",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-36-n",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 300,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-head-3.a-p",
//                             "selectorGuids": ["47c729cd-3984-2932-2609-2060ae089aa2", "7345e75f-f190-e08f-c1ff-315e52ea5795"]
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-36-n-2",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 300,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-head-3",
//                             "selectorGuids": ["47c729cd-3984-2932-2609-2060ae089aa2"]
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }],
//             "createdOn": 1560807495857,
//             "useFirstGroupAsInitialState": false
//         },
//         "a-38": {
//             "id": "a-38",
//             "title": "move-sloth",
//             "continuousParameterGroups": [{
//                 "id": "a-38-p",
//                 "type": "MOUSE_X",
//                 "parameterLabel": "Mouse X",
//                 "continuousActionGroups": [{
//                     "keyframe": 0,
//                     "actionItems": [{
//                         "id": "a-38-n",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".sloth",
//                                 "selectorGuids": ["00cf81ca-d065-56b3-91cf-b0558b178ab1"]
//                             },
//                             "xValue": 80,
//                             "xUnit": "PX",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }]
//                 }, {
//                     "keyframe": 100,
//                     "actionItems": [{
//                         "id": "a-38-n-2",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".sloth",
//                                 "selectorGuids": ["00cf81ca-d065-56b3-91cf-b0558b178ab1"]
//                             },
//                             "xValue": -80,
//                             "xUnit": "PX",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }]
//                 }]
//             }, {
//                 "id": "a-38-p-2",
//                 "type": "MOUSE_Y",
//                 "parameterLabel": "Mouse Y",
//                 "continuousActionGroups": []
//             }],
//             "createdOn": 1560807722857
//         },
//         "a-39": {
//             "id": "a-39",
//             "title": "sloth-hover",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-39-n",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".sloth",
//                             "selectorGuids": ["00cf81ca-d065-56b3-91cf-b0558b178ab1"]
//                         },
//                         "value": 0.3,
//                         "unit": ""
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-39-n-2",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".sloth",
//                             "selectorGuids": ["00cf81ca-d065-56b3-91cf-b0558b178ab1"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }]
//             }],
//             "createdOn": 1560807805470,
//             "useFirstGroupAsInitialState": true
//         },
//         "a-40": {
//             "id": "a-40",
//             "title": "sloth-hover-out",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-40-n",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".sloth",
//                             "selectorGuids": ["00cf81ca-d065-56b3-91cf-b0558b178ab1"]
//                         },
//                         "value": 0.3,
//                         "unit": ""
//                     }
//                 }]
//             }],
//             "createdOn": 1560807805470,
//             "useFirstGroupAsInitialState": false
//         },
//         "a-41": {
//             "id": "a-41",
//             "title": "grid-scroll",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-41-n",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|f540ca25-bbc6-ed3a-dab9-eaa443e4c06a"
//                         },
//                         "yValue": 150,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-43",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|1c40a8e6-5075-738a-3a3b-1cabe12f408c"
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-41-n-41",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|5ac5c219-dec1-91bc-c704-05aac12a85e7"
//                         },
//                         "yValue": 150,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-39",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|5ac5c219-dec1-91bc-c704-05aac12a85e5"
//                         },
//                         "yValue": 150,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-37",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|a4546784-58d6-9782-baf0-a634206749de"
//                         },
//                         "yValue": 100,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-35",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|ee9860da-b6ce-796b-b682-14687a4002a8"
//                         },
//                         "yValue": 150,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-33",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|ee9860da-b6ce-796b-b682-14687a4002a6"
//                         },
//                         "yValue": 150,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-31",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|4c5e52a5-ee6b-7dd9-4979-1af244309703"
//                         },
//                         "yValue": 100,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-29",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".dave",
//                             "selectorGuids": ["df8197d1-56cf-081a-343d-489eaf5fc9bc"]
//                         },
//                         "yValue": -100,
//                         "xUnit": "PX",
//                         "yUnit": "VH",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-26",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|0a951ad5-7c67-5931-b624-57b857f37707"
//                         },
//                         "yValue": 150,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-25",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|0a951ad5-7c67-5931-b624-57b857f37705"
//                         },
//                         "yValue": 150,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-23",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {},
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-41-n-21",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|bde65c49-3eeb-3873-bb0b-461dac42d3dd"
//                         },
//                         "yValue": 150,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-19",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|bde65c49-3eeb-3873-bb0b-461dac42d3df"
//                         },
//                         "yValue": 150,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-17",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".sloth",
//                             "selectorGuids": ["00cf81ca-d065-56b3-91cf-b0558b178ab1"]
//                         },
//                         "yValue": 101,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-11",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|c47a18e0-9c5b-eacb-8b49-87af0e05b818"
//                         },
//                         "yValue": 100,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-5",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".grid-bg-img._1",
//                             "selectorGuids": ["04a90f1f-1bdd-28b4-c796-d297e23b2a0e", "7c70f3fe-2ef7-ba1b-0aa6-b007927c8e18"]
//                         },
//                         "xValue": -100,
//                         "xUnit": "%",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-3",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|419edb42-8bf2-11ac-e795-58f688f2def2"
//                         },
//                         "yValue": 150,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-7",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|1c1af68e-cb3c-ff7a-10a9-76837d60a4a9"
//                         },
//                         "yValue": 150,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-8",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|1c1af68e-cb3c-ff7a-10a9-76837d60a4a7"
//                         },
//                         "yValue": 150,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-13",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|1c167c3d-709a-4095-70e4-61bf2a7e7ce3"
//                         },
//                         "yValue": 150,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-14",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|1c167c3d-709a-4095-70e4-61bf2a7e7ce1"
//                         },
//                         "yValue": 150,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-41-n-2",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|f540ca25-bbc6-ed3a-dab9-eaa443e4c06a"
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-4",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|419edb42-8bf2-11ac-e795-58f688f2def2"
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-9",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 200,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|1c1af68e-cb3c-ff7a-10a9-76837d60a4a9"
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-12",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 200,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|c47a18e0-9c5b-eacb-8b49-87af0e05b818"
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-10",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 200,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|1c1af68e-cb3c-ff7a-10a9-76837d60a4a7"
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-6",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 200,
//                         "easing": "ease",
//                         "duration": 1200,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".grid-bg-img._1",
//                             "selectorGuids": ["04a90f1f-1bdd-28b4-c796-d297e23b2a0e", "7c70f3fe-2ef7-ba1b-0aa6-b007927c8e18"]
//                         },
//                         "xValue": 0,
//                         "xUnit": "%",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-16",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 400,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|1c167c3d-709a-4095-70e4-61bf2a7e7ce1"
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-18",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 400,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".sloth",
//                             "selectorGuids": ["00cf81ca-d065-56b3-91cf-b0558b178ab1"]
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-15",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 400,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|1c167c3d-709a-4095-70e4-61bf2a7e7ce3"
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-20",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 600,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|bde65c49-3eeb-3873-bb0b-461dac42d3df"
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-44",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 600,
//                         "easing": "ease",
//                         "duration": 2000,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|1c40a8e6-5075-738a-3a3b-1cabe12f408c"
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-41-n-24",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 600,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {},
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-41-n-22",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 600,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|bde65c49-3eeb-3873-bb0b-461dac42d3dd"
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-27",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 800,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|0a951ad5-7c67-5931-b624-57b857f37707"
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-30",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 800,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".dave",
//                             "selectorGuids": ["df8197d1-56cf-081a-343d-489eaf5fc9bc"]
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "VH",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-28",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 800,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|0a951ad5-7c67-5931-b624-57b857f37705"
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-32",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 1000,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|4c5e52a5-ee6b-7dd9-4979-1af244309703"
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-36",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 1000,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|ee9860da-b6ce-796b-b682-14687a4002a8"
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-34",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 1000,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|ee9860da-b6ce-796b-b682-14687a4002a6"
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-38",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 1200,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|a4546784-58d6-9782-baf0-a634206749de"
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-42",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 1200,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|5ac5c219-dec1-91bc-c704-05aac12a85e7"
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-41-n-40",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 1200,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|5ac5c219-dec1-91bc-c704-05aac12a85e5"
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }],
//             "createdOn": 1560808017177,
//             "useFirstGroupAsInitialState": true
//         },
//         "a-42": {
//             "id": "a-42",
//             "title": "gallery-click-zoom",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-42-n",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".g-3",
//                             "selectorGuids": ["14b1d6be-138a-9170-9c33-8f34e075c23f"]
//                         },
//                         "xValue": 0.2,
//                         "yValue": 0.2,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-42-n-43",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".g-11",
//                             "selectorGuids": ["150a6834-ad40-3e61-af94-c3beda524b9d"]
//                         },
//                         "xValue": 0.6000000000000006,
//                         "yValue": 0.6000000000000006,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-42-n-37",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "locked": false,
//                         "target": {
//                             "selector": ".gird-line.m-l",
//                             "selectorGuids": ["804a9fbe-4f78-1387-223d-f7359968089a", "c406171d-a2e1-f98f-a93e-6b2f4848bc06"]
//                         },
//                         "heightValue": 100,
//                         "widthUnit": "PX",
//                         "heightUnit": "%"
//                     }
//                 }, {
//                     "id": "a-42-n-35",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".close-gallery",
//                             "selectorGuids": ["32e91474-7f7f-3c65-59b0-61cc06c6b426"]
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "VH",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-42-n-33",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".close-g",
//                             "selectorGuids": ["110674e9-1211-7c21-91af-1d9a58570774"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-42-n-31",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-head-4",
//                             "selectorGuids": ["cc9066db-ae5c-0f7c-3441-df7c16b53339"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-42-n-29",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".close-gallery",
//                             "selectorGuids": ["32e91474-7f7f-3c65-59b0-61cc06c6b426"]
//                         },
//                         "xValue": 0,
//                         "yValue": 0,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-42-n-27",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".g-5",
//                             "selectorGuids": ["c7bfdc22-b714-a716-bc82-b57ccad0bb36"]
//                         },
//                         "yValue": 140,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-42-n-25",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".g-2",
//                             "selectorGuids": ["7b412465-4d0f-ef5f-31ac-f5fc23f0cd8a"]
//                         },
//                         "xValue": 230,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-42-n-22",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".g-10",
//                             "selectorGuids": ["34481576-0663-87d3-0f7a-b80cca2312ad"]
//                         },
//                         "yValue": -80,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-42-n-20",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".g-9",
//                             "selectorGuids": ["cb8dcf94-aa2e-3bab-fdba-6ae10e6de3df"]
//                         },
//                         "xValue": 0.8,
//                         "yValue": 0.8,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-42-n-18",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".g-9",
//                             "selectorGuids": ["cb8dcf94-aa2e-3bab-fdba-6ae10e6de3df"]
//                         },
//                         "xValue": -80,
//                         "yValue": -50,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-42-n-17",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".g-1",
//                             "selectorGuids": ["30716ca5-6354-4d98-f918-2b277274b156"]
//                         },
//                         "xValue": 0.7000000000000006,
//                         "yValue": 0.7000000000000006,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-42-n-15",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".g-1",
//                             "selectorGuids": ["30716ca5-6354-4d98-f918-2b277274b156"]
//                         },
//                         "yValue": 130,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-42-n-13",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".g-7",
//                             "selectorGuids": ["bff374c8-5890-9439-216d-10d3af981fd6"]
//                         },
//                         "xValue": 0.4,
//                         "yValue": 0.4,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-42-n-11",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".g-6",
//                             "selectorGuids": ["7ef4f06e-d67e-12c1-dbb1-7dbab46d6176"]
//                         },
//                         "xValue": 0.5,
//                         "yValue": 0.5,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-42-n-9",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".g-8",
//                             "selectorGuids": ["49a68822-ef8d-d13a-2386-c11ffddfb256"]
//                         },
//                         "xValue": 0.2,
//                         "yValue": 0.2,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-42-n-7",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".g-2",
//                             "selectorGuids": ["7b412465-4d0f-ef5f-31ac-f5fc23f0cd8a"]
//                         },
//                         "xValue": 0.6000000000000006,
//                         "yValue": 0.6000000000000006,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-42-n-5",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".g-4",
//                             "selectorGuids": ["8cc48e69-b257-72be-5f6e-721070f38b02"]
//                         },
//                         "xValue": -236,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-42-n-3",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".g-4",
//                             "selectorGuids": ["8cc48e69-b257-72be-5f6e-721070f38b02"]
//                         },
//                         "xValue": 0.4,
//                         "yValue": 0.4,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-42-n-39",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "locked": false,
//                         "target": {
//                             "selector": ".gird-line",
//                             "selectorGuids": ["804a9fbe-4f78-1387-223d-f7359968089a"]
//                         },
//                         "heightValue": 100,
//                         "widthUnit": "PX",
//                         "heightUnit": "%"
//                     }
//                 }, {
//                     "id": "a-42-n-41",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "locked": false,
//                         "target": {
//                             "selector": ".gird-line.m-r",
//                             "selectorGuids": ["804a9fbe-4f78-1387-223d-f7359968089a", "82607b6c-0084-4a53-5433-6fdc7bec1a7e"]
//                         },
//                         "heightValue": 100,
//                         "widthUnit": "PX",
//                         "heightUnit": "%"
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-42-n-2",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 1000,
//                         "target": {
//                             "selector": ".g-3",
//                             "selectorGuids": ["14b1d6be-138a-9170-9c33-8f34e075c23f"]
//                         },
//                         "xValue": 1,
//                         "yValue": 1,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-42-n-44",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 1000,
//                         "target": {
//                             "selector": ".g-11",
//                             "selectorGuids": ["150a6834-ad40-3e61-af94-c3beda524b9d"]
//                         },
//                         "xValue": 1,
//                         "yValue": 1,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-42-n-38",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "locked": false,
//                         "target": {
//                             "selector": ".gird-line.m-l",
//                             "selectorGuids": ["804a9fbe-4f78-1387-223d-f7359968089a", "c406171d-a2e1-f98f-a93e-6b2f4848bc06"]
//                         },
//                         "heightValue": 0,
//                         "widthUnit": "PX",
//                         "heightUnit": "%"
//                     }
//                 }, {
//                     "id": "a-42-n-34",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".close-g",
//                             "selectorGuids": ["110674e9-1211-7c21-91af-1d9a58570774"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-42-n-32",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".img-head-4",
//                             "selectorGuids": ["cc9066db-ae5c-0f7c-3441-df7c16b53339"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-42-n-28",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 1000,
//                         "target": {
//                             "selector": ".g-5",
//                             "selectorGuids": ["c7bfdc22-b714-a716-bc82-b57ccad0bb36"]
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-42-n-26",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 1000,
//                         "target": {
//                             "selector": ".g-2",
//                             "selectorGuids": ["7b412465-4d0f-ef5f-31ac-f5fc23f0cd8a"]
//                         },
//                         "xValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-42-n-24",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 1000,
//                         "target": {
//                             "selector": ".g-1",
//                             "selectorGuids": ["30716ca5-6354-4d98-f918-2b277274b156"]
//                         },
//                         "xValue": 1,
//                         "yValue": 1,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-42-n-6",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 1000,
//                         "target": {
//                             "selector": ".g-4",
//                             "selectorGuids": ["8cc48e69-b257-72be-5f6e-721070f38b02"]
//                         },
//                         "xValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-42-n-23",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 1000,
//                         "target": {
//                             "selector": ".g-10",
//                             "selectorGuids": ["34481576-0663-87d3-0f7a-b80cca2312ad"]
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-42-n-21",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 1000,
//                         "target": {
//                             "selector": ".g-9",
//                             "selectorGuids": ["cb8dcf94-aa2e-3bab-fdba-6ae10e6de3df"]
//                         },
//                         "xValue": 1,
//                         "yValue": 1,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-42-n-19",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 1000,
//                         "target": {
//                             "selector": ".g-9",
//                             "selectorGuids": ["cb8dcf94-aa2e-3bab-fdba-6ae10e6de3df"]
//                         },
//                         "xValue": 0,
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-42-n-16",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 1000,
//                         "target": {
//                             "selector": ".g-1",
//                             "selectorGuids": ["30716ca5-6354-4d98-f918-2b277274b156"]
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-42-n-14",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 1000,
//                         "target": {
//                             "selector": ".g-7",
//                             "selectorGuids": ["bff374c8-5890-9439-216d-10d3af981fd6"]
//                         },
//                         "xValue": 1,
//                         "yValue": 1,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-42-n-12",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 1000,
//                         "target": {
//                             "selector": ".g-6",
//                             "selectorGuids": ["7ef4f06e-d67e-12c1-dbb1-7dbab46d6176"]
//                         },
//                         "xValue": 1,
//                         "yValue": 1,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-42-n-10",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 1000,
//                         "target": {
//                             "selector": ".g-8",
//                             "selectorGuids": ["49a68822-ef8d-d13a-2386-c11ffddfb256"]
//                         },
//                         "xValue": 1,
//                         "yValue": 1,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-42-n-8",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 1000,
//                         "target": {
//                             "selector": ".g-2",
//                             "selectorGuids": ["7b412465-4d0f-ef5f-31ac-f5fc23f0cd8a"]
//                         },
//                         "xValue": 1,
//                         "yValue": 1,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-42-n-4",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 1000,
//                         "target": {
//                             "selector": ".g-4",
//                             "selectorGuids": ["8cc48e69-b257-72be-5f6e-721070f38b02"]
//                         },
//                         "xValue": 1,
//                         "yValue": 1,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-42-n-40",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "locked": false,
//                         "target": {
//                             "selector": ".gird-line",
//                             "selectorGuids": ["804a9fbe-4f78-1387-223d-f7359968089a"]
//                         },
//                         "heightValue": 0,
//                         "widthUnit": "PX",
//                         "heightUnit": "%"
//                     }
//                 }, {
//                     "id": "a-42-n-42",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "locked": false,
//                         "target": {
//                             "selector": ".gird-line.m-r",
//                             "selectorGuids": ["804a9fbe-4f78-1387-223d-f7359968089a", "82607b6c-0084-4a53-5433-6fdc7bec1a7e"]
//                         },
//                         "heightValue": 0,
//                         "widthUnit": "PX",
//                         "heightUnit": "%"
//                     }
//                 }, {
//                     "id": "a-42-n-30",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 600,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".close-gallery",
//                             "selectorGuids": ["32e91474-7f7f-3c65-59b0-61cc06c6b426"]
//                         },
//                         "xValue": 1,
//                         "yValue": 1,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-42-n-36",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 1400,
//                         "easing": "inOutCirc",
//                         "duration": 600,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".close-gallery",
//                             "selectorGuids": ["32e91474-7f7f-3c65-59b0-61cc06c6b426"]
//                         },
//                         "yValue": 34,
//                         "xUnit": "VW",
//                         "yUnit": "VH",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }],
//             "createdOn": 1561040192569,
//             "useFirstGroupAsInitialState": true
//         },
//         "a-43": {
//             "id": "a-43",
//             "title": "section-3-animation",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-43-n",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".g-3",
//                             "selectorGuids": ["14b1d6be-138a-9170-9c33-8f34e075c23f"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-43-n-25",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".share-btn",
//                             "selectorGuids": ["129d810b-61dd-a8a7-6520-3bff4eff9a92"]
//                         },
//                         "yValue": 100,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-43-n-23",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".g-11",
//                             "selectorGuids": ["150a6834-ad40-3e61-af94-c3beda524b9d"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-43-n-21",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".gallery-parent",
//                             "selectorGuids": ["bae75d14-a0dc-8292-e378-8d4f87a95da6"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-43-n-19",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".g-7",
//                             "selectorGuids": ["bff374c8-5890-9439-216d-10d3af981fd6"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-43-n-17",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".g-9",
//                             "selectorGuids": ["cb8dcf94-aa2e-3bab-fdba-6ae10e6de3df"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-43-n-15",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".g-10",
//                             "selectorGuids": ["34481576-0663-87d3-0f7a-b80cca2312ad"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-43-n-13",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".g-8",
//                             "selectorGuids": ["49a68822-ef8d-d13a-2386-c11ffddfb256"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-43-n-11",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".g-6",
//                             "selectorGuids": ["7ef4f06e-d67e-12c1-dbb1-7dbab46d6176"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-43-n-9",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".g-5",
//                             "selectorGuids": ["c7bfdc22-b714-a716-bc82-b57ccad0bb36"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-43-n-7",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".g-1",
//                             "selectorGuids": ["30716ca5-6354-4d98-f918-2b277274b156"]
//                         },
//                         "value": 0.01,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-43-n-5",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".g-2",
//                             "selectorGuids": ["7b412465-4d0f-ef5f-31ac-f5fc23f0cd8a"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-43-n-3",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".g-4",
//                             "selectorGuids": ["8cc48e69-b257-72be-5f6e-721070f38b02"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-43-n-2",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 2000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".g-3",
//                             "selectorGuids": ["14b1d6be-138a-9170-9c33-8f34e075c23f"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-43-n-22",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 2000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".gallery-parent",
//                             "selectorGuids": ["bae75d14-a0dc-8292-e378-8d4f87a95da6"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-43-n-4",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 200,
//                         "easing": "ease",
//                         "duration": 2000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".g-4",
//                             "selectorGuids": ["8cc48e69-b257-72be-5f6e-721070f38b02"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-43-n-6",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 400,
//                         "easing": "ease",
//                         "duration": 2000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".g-2",
//                             "selectorGuids": ["7b412465-4d0f-ef5f-31ac-f5fc23f0cd8a"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-43-n-8",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 600,
//                         "easing": "ease",
//                         "duration": 2000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".g-1",
//                             "selectorGuids": ["30716ca5-6354-4d98-f918-2b277274b156"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-43-n-10",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 800,
//                         "easing": "ease",
//                         "duration": 2000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".g-5",
//                             "selectorGuids": ["c7bfdc22-b714-a716-bc82-b57ccad0bb36"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-43-n-12",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 1000,
//                         "easing": "ease",
//                         "duration": 2000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".g-6",
//                             "selectorGuids": ["7ef4f06e-d67e-12c1-dbb1-7dbab46d6176"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-43-n-14",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 1200,
//                         "easing": "ease",
//                         "duration": 2000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".g-8",
//                             "selectorGuids": ["49a68822-ef8d-d13a-2386-c11ffddfb256"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-43-n-16",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 1400,
//                         "easing": "ease",
//                         "duration": 2000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".g-10",
//                             "selectorGuids": ["34481576-0663-87d3-0f7a-b80cca2312ad"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-43-n-18",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 1600,
//                         "easing": "ease",
//                         "duration": 2000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".g-9",
//                             "selectorGuids": ["cb8dcf94-aa2e-3bab-fdba-6ae10e6de3df"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-43-n-20",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 1800,
//                         "easing": "ease",
//                         "duration": 2000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".g-7",
//                             "selectorGuids": ["bff374c8-5890-9439-216d-10d3af981fd6"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-43-n-24",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 2000,
//                         "easing": "ease",
//                         "duration": 2000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".g-11",
//                             "selectorGuids": ["150a6834-ad40-3e61-af94-c3beda524b9d"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-43-n-26",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 2000,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".share-btn",
//                             "selectorGuids": ["129d810b-61dd-a8a7-6520-3bff4eff9a92"]
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }],
//             "createdOn": 1561053112238,
//             "useFirstGroupAsInitialState": true
//         },
//         "a-44": {
//             "id": "a-44",
//             "title": "dot-scroll",
//             "continuousParameterGroups": [{
//                 "id": "a-44-p",
//                 "type": "SCROLL_PROGRESS",
//                 "parameterLabel": "Scroll",
//                 "continuousActionGroups": [{
//                     "keyframe": 0,
//                     "actionItems": [{
//                         "id": "a-44-n",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f476bb4a9d5ce|380458e8-6729-dc53-c2a0-baaea17db24c"
//                             },
//                             "xValue": 0,
//                             "xUnit": "VW",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }, {
//                         "id": "a-44-n-20",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f476bb4a9d5ce|1230903e-5606-deac-9782-e0e9e00418ce"
//                             },
//                             "xValue": 0,
//                             "xUnit": "VW",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }, {
//                         "id": "a-44-n-29",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f476bb4a9d5ce|380458e8-6729-dc53-c2a0-baaea17db24c"
//                             },
//                             "value": 0,
//                             "unit": ""
//                         }
//                     }]
//                 }, {
//                     "keyframe": 25,
//                     "actionItems": [{
//                         "id": "a-44-n-21",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f476bb4a9d5ce|1230903e-5606-deac-9782-e0e9e00418ce"
//                             },
//                             "xValue": 0,
//                             "xUnit": "VW",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }]
//                 }, {
//                     "keyframe": 30,
//                     "actionItems": [{
//                         "id": "a-44-n-2",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f476bb4a9d5ce|380458e8-6729-dc53-c2a0-baaea17db24c"
//                             },
//                             "xValue": 0,
//                             "xUnit": "VW",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }, {
//                         "id": "a-44-n-30",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f476bb4a9d5ce|380458e8-6729-dc53-c2a0-baaea17db24c"
//                             },
//                             "value": 1,
//                             "unit": ""
//                         }
//                     }]
//                 }, {
//                     "keyframe": 34,
//                     "actionItems": [{
//                         "id": "a-44-n-3",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f476bb4a9d5ce|380458e8-6729-dc53-c2a0-baaea17db24c"
//                             },
//                             "xValue": 25,
//                             "xUnit": "VW",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }]
//                 }, {
//                     "keyframe": 40,
//                     "actionItems": [{
//                         "id": "a-44-n-22",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f476bb4a9d5ce|1230903e-5606-deac-9782-e0e9e00418ce"
//                             },
//                             "xValue": -100,
//                             "xUnit": "VW",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }, {
//                         "id": "a-44-n-23",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f476bb4a9d5ce|1230903e-5606-deac-9782-e0e9e00418ce"
//                             },
//                             "xValue": -100,
//                             "xUnit": "VW",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }]
//                 }, {
//                     "keyframe": 42,
//                     "actionItems": [{
//                         "id": "a-44-n-24",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f476bb4a9d5ce|1230903e-5606-deac-9782-e0e9e00418ce"
//                             },
//                             "xValue": 0,
//                             "xUnit": "VW",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }]
//                 }, {
//                     "keyframe": 50,
//                     "actionItems": [{
//                         "id": "a-44-n-4",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f476bb4a9d5ce|380458e8-6729-dc53-c2a0-baaea17db24c"
//                             },
//                             "xValue": 25,
//                             "xUnit": "VW",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }]
//                 }, {
//                     "keyframe": 60,
//                     "actionItems": [{
//                         "id": "a-44-n-5",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f476bb4a9d5ce|380458e8-6729-dc53-c2a0-baaea17db24c"
//                             },
//                             "xValue": 50,
//                             "xUnit": "VW",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }]
//                 }, {
//                     "keyframe": 80,
//                     "actionItems": [{
//                         "id": "a-44-n-8",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f476bb4a9d5ce|d94b74cc-b7e0-89d2-0bb5-445beb26e074"
//                             },
//                             "value": 1,
//                             "unit": ""
//                         }
//                     }]
//                 }, {
//                     "keyframe": 83,
//                     "actionItems": [{
//                         "id": "a-44-n-6",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f476bb4a9d5ce|380458e8-6729-dc53-c2a0-baaea17db24c"
//                             },
//                             "xValue": 50,
//                             "xUnit": "VW",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }]
//                 }, {
//                     "keyframe": 85,
//                     "actionItems": [{
//                         "id": "a-44-n-11",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f476bb4a9d5ce|916d8442-7cf9-a89a-c568-5a1f5828ee09"
//                             },
//                             "yValue": -100,
//                             "xUnit": "PX",
//                             "yUnit": "%",
//                             "zUnit": "PX"
//                         }
//                     }]
//                 }, {
//                     "keyframe": 86,
//                     "actionItems": [{
//                         "id": "a-44-n-7",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f476bb4a9d5ce|380458e8-6729-dc53-c2a0-baaea17db24c"
//                             },
//                             "xValue": 75,
//                             "xUnit": "VW",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }]
//                 }, {
//                     "keyframe": 90,
//                     "actionItems": [{
//                         "id": "a-44-n-12",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f476bb4a9d5ce|916d8442-7cf9-a89a-c568-5a1f5828ee09"
//                             },
//                             "yValue": 0,
//                             "xUnit": "PX",
//                             "yUnit": "%",
//                             "zUnit": "PX"
//                         }
//                     }]
//                 }, {
//                     "keyframe": 94,
//                     "actionItems": [{
//                         "id": "a-44-n-14",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f476bb4a9d5ce|69f8d244-cd04-10ba-5df4-1dd3ff46c661"
//                             },
//                             "value": 0,
//                             "unit": ""
//                         }
//                     }, {
//                         "id": "a-44-n-16",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f476bb4a9d5ce|5e5e98cd-ac0b-2ab3-b65f-502967be1a7c"
//                             },
//                             "yValue": 130,
//                             "xUnit": "PX",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }, {
//                         "id": "a-44-n-18",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f476bb4a9d5ce|5e5e98cd-ac0b-2ab3-b65f-502967be1a7c"
//                             },
//                             "value": 0,
//                             "unit": ""
//                         }
//                     }, {
//                         "id": "a-44-n-25",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f476bb4a9d5ce|67a401a0-b89d-e5b3-7545-b95d69ab726c"
//                             },
//                             "yValue": 70,
//                             "xUnit": "PX",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }, {
//                         "id": "a-44-n-27",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f476bb4a9d5ce|67a401a0-b89d-e5b3-7545-b95d69ab726c"
//                             },
//                             "value": 0.03,
//                             "unit": ""
//                         }
//                     }, {
//                         "id": "a-44-n-9",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f476bb4a9d5ce|d94b74cc-b7e0-89d2-0bb5-445beb26e074"
//                             },
//                             "value": 1,
//                             "unit": ""
//                         }
//                     }]
//                 }, {
//                     "keyframe": 98,
//                     "actionItems": [{
//                         "id": "a-44-n-13",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f476bb4a9d5ce|916d8442-7cf9-a89a-c568-5a1f5828ee09"
//                             },
//                             "yValue": 100,
//                             "xUnit": "PX",
//                             "yUnit": "%",
//                             "zUnit": "PX"
//                         }
//                     }]
//                 }, {
//                     "keyframe": 100,
//                     "actionItems": [{
//                         "id": "a-44-n-17",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f476bb4a9d5ce|5e5e98cd-ac0b-2ab3-b65f-502967be1a7c"
//                             },
//                             "yValue": 0,
//                             "xUnit": "PX",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }, {
//                         "id": "a-44-n-19",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f476bb4a9d5ce|5e5e98cd-ac0b-2ab3-b65f-502967be1a7c"
//                             },
//                             "value": 1,
//                             "unit": ""
//                         }
//                     }, {
//                         "id": "a-44-n-15",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f476bb4a9d5ce|69f8d244-cd04-10ba-5df4-1dd3ff46c661"
//                             },
//                             "value": 1,
//                             "unit": ""
//                         }
//                     }, {
//                         "id": "a-44-n-26",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f476bb4a9d5ce|67a401a0-b89d-e5b3-7545-b95d69ab726c"
//                             },
//                             "yValue": 0,
//                             "xUnit": "PX",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }, {
//                         "id": "a-44-n-28",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f476bb4a9d5ce|67a401a0-b89d-e5b3-7545-b95d69ab726c"
//                             },
//                             "value": 1,
//                             "unit": ""
//                         }
//                     }, {
//                         "id": "a-44-n-10",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "id": "5d547d82782f476bb4a9d5ce|d94b74cc-b7e0-89d2-0bb5-445beb26e074"
//                             },
//                             "value": 0,
//                             "unit": ""
//                         }
//                     }]
//                 }]
//             }],
//             "createdOn": 1561401801614
//         },
//         "a-25": {
//             "id": "a-25",
//             "title": "pulse-dot",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-25-n",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".pulse-dot",
//                             "selectorGuids": ["9589432a-750c-dc8c-22e7-c0754edc3f8d"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-25-n-6",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".pulse-ring",
//                             "selectorGuids": ["1c77c3ea-3206-37ea-8492-a90a8010bf8c"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-25-n-4",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "locked": false,
//                         "target": {
//                             "selector": ".pulse-ring",
//                             "selectorGuids": ["1c77c3ea-3206-37ea-8492-a90a8010bf8c"]
//                         },
//                         "widthValue": 0,
//                         "heightValue": 0,
//                         "widthUnit": "PX",
//                         "heightUnit": "PX"
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-25-n-2",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 1500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".pulse-dot",
//                             "selectorGuids": ["9589432a-750c-dc8c-22e7-c0754edc3f8d"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-25-n-7",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 1500,
//                         "target": {
//                             "selector": ".pulse-ring",
//                             "selectorGuids": ["1c77c3ea-3206-37ea-8492-a90a8010bf8c"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-25-n-5",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 1500,
//                         "locked": false,
//                         "target": {
//                             "selector": ".pulse-ring",
//                             "selectorGuids": ["1c77c3ea-3206-37ea-8492-a90a8010bf8c"]
//                         },
//                         "widthValue": 40,
//                         "heightValue": 40,
//                         "widthUnit": "PX",
//                         "heightUnit": "PX"
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-25-n-3",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 1500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".pulse-dot",
//                             "selectorGuids": ["9589432a-750c-dc8c-22e7-c0754edc3f8d"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-25-n-8",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 0,
//                         "locked": false,
//                         "target": {
//                             "selector": ".pulse-ring",
//                             "selectorGuids": ["1c77c3ea-3206-37ea-8492-a90a8010bf8c"]
//                         },
//                         "widthValue": 0,
//                         "heightValue": 0,
//                         "widthUnit": "PX",
//                         "heightUnit": "PX"
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-25-n-9",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 0,
//                         "target": {
//                             "selector": ".pulse-ring",
//                             "selectorGuids": ["1c77c3ea-3206-37ea-8492-a90a8010bf8c"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }]
//             }],
//             "createdOn": 1560691763132,
//             "useFirstGroupAsInitialState": true
//         },
//         "a-45": {
//             "id": "a-45",
//             "title": "img-mobile-activate",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-45-n",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".info-parent-1",
//                             "selectorGuids": ["e68e80d0-7e76-8b67-5db5-0d94275bb4f2"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-45-n-7",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|34b36b12-584f-4f70-d05b-54e685b2cf31"
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-45-n-5",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".img-cast-1",
//                             "selectorGuids": ["ee247d03-8cbc-54fd-90f7-abb009738fdc"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-45-n-3",
//                     "actionTypeId": "GENERAL_DISPLAY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 0,
//                         "value": "none",
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".info-parent-1",
//                             "selectorGuids": ["e68e80d0-7e76-8b67-5db5-0d94275bb4f2"]
//                         }
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-45-n-4",
//                     "actionTypeId": "GENERAL_DISPLAY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 0,
//                         "value": "inline-block",
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".info-parent-1",
//                             "selectorGuids": ["e68e80d0-7e76-8b67-5db5-0d94275bb4f2"]
//                         }
//                     }
//                 }, {
//                     "id": "a-45-n-8",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|34b36b12-584f-4f70-d05b-54e685b2cf31"
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-45-n-6",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".img-cast-1",
//                             "selectorGuids": ["ee247d03-8cbc-54fd-90f7-abb009738fdc"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-45-n-2",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".info-parent-1",
//                             "selectorGuids": ["e68e80d0-7e76-8b67-5db5-0d94275bb4f2"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }]
//             }],
//             "createdOn": 1561408960617,
//             "useFirstGroupAsInitialState": true
//         },
//         "a-47": {
//             "id": "a-47",
//             "title": "grid-parent-2-hover",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-47-n",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".dave",
//                             "selectorGuids": ["df8197d1-56cf-081a-343d-489eaf5fc9bc"]
//                         },
//                         "value": 0.3,
//                         "unit": ""
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-47-n-3",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".dave",
//                             "selectorGuids": ["df8197d1-56cf-081a-343d-489eaf5fc9bc"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }]
//             }],
//             "createdOn": 1560807147696,
//             "useFirstGroupAsInitialState": true
//         },
//         "a-48": {
//             "id": "a-48",
//             "title": "grid-parent-2-out",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-48-n",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "selector": ".dave",
//                             "selectorGuids": ["df8197d1-56cf-081a-343d-489eaf5fc9bc"]
//                         },
//                         "value": 0.3,
//                         "unit": ""
//                     }
//                 }]
//             }],
//             "createdOn": 1560807147696,
//             "useFirstGroupAsInitialState": false
//         },
//         "a-52": {
//             "id": "a-52",
//             "title": "map-click-open",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-52-n-11",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "locked": false,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".map-child",
//                             "selectorGuids": ["65b43112-67d6-d9aa-d3cc-df07a7d76f30"]
//                         },
//                         "widthValue": 0,
//                         "heightValue": 100,
//                         "widthUnit": "%",
//                         "heightUnit": "%"
//                     }
//                 }, {
//                     "id": "a-52-n-19",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".close-map",
//                             "selectorGuids": ["7e7ad0af-0978-bc9f-2f2d-7cf9d19a0415"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-52-n-15",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".number-count",
//                             "selectorGuids": ["74dadc11-f8c3-0a2d-8cfb-7be55f1df615"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-52-n-13",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".message",
//                             "selectorGuids": ["fa510099-46cc-eae0-0c66-c7737bfd66c5"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-52-n-9",
//                     "actionTypeId": "STYLE_BACKGROUND_COLOR",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".map-child",
//                             "selectorGuids": ["65b43112-67d6-d9aa-d3cc-df07a7d76f30"]
//                         },
//                         "rValue": 0,
//                         "gValue": 0,
//                         "bValue": 0,
//                         "aValue": 0
//                     }
//                 }, {
//                     "id": "a-52-n-7",
//                     "actionTypeId": "GENERAL_DISPLAY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 0,
//                         "value": "none",
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".map-child",
//                             "selectorGuids": ["65b43112-67d6-d9aa-d3cc-df07a7d76f30"]
//                         }
//                     }
//                 }, {
//                     "id": "a-52-n-5",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".map-bg",
//                             "selectorGuids": ["b9af9b3c-d4f7-5758-cd44-93be65a18175"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-52-n-8",
//                     "actionTypeId": "GENERAL_DISPLAY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 0,
//                         "value": "block",
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".map-child",
//                             "selectorGuids": ["65b43112-67d6-d9aa-d3cc-df07a7d76f30"]
//                         }
//                     }
//                 }, {
//                     "id": "a-52-n-10",
//                     "actionTypeId": "STYLE_BACKGROUND_COLOR",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".map-child",
//                             "selectorGuids": ["65b43112-67d6-d9aa-d3cc-df07a7d76f30"]
//                         },
//                         "rValue": 0,
//                         "gValue": 0,
//                         "bValue": 0,
//                         "aValue": 1
//                     }
//                 }, {
//                     "id": "a-52-n-12",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 200,
//                         "easing": "inOutQuart",
//                         "duration": 1000,
//                         "locked": false,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".map-child",
//                             "selectorGuids": ["65b43112-67d6-d9aa-d3cc-df07a7d76f30"]
//                         },
//                         "widthValue": 100,
//                         "heightValue": 100,
//                         "widthUnit": "%",
//                         "heightUnit": "%"
//                     }
//                 }, {
//                     "id": "a-52-n-16",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 800,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "selector": ".number-count",
//                             "selectorGuids": ["74dadc11-f8c3-0a2d-8cfb-7be55f1df615"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-52-n-14",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 800,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "selector": ".message",
//                             "selectorGuids": ["fa510099-46cc-eae0-0c66-c7737bfd66c5"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-52-n-6",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 1000,
//                         "easing": "ease",
//                         "duration": 2000,
//                         "target": {
//                             "selector": ".map-bg",
//                             "selectorGuids": ["b9af9b3c-d4f7-5758-cd44-93be65a18175"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-52-n-20",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 1000,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "selector": ".close-map",
//                             "selectorGuids": ["7e7ad0af-0978-bc9f-2f2d-7cf9d19a0415"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }]
//             }],
//             "createdOn": 1562342162192,
//             "useFirstGroupAsInitialState": true
//         },
//         "a-50": {
//             "id": "a-50",
//             "title": "map-move",
//             "continuousParameterGroups": [{
//                 "id": "a-50-p",
//                 "type": "MOUSE_X",
//                 "parameterLabel": "Mouse X",
//                 "continuousActionGroups": [{
//                     "keyframe": 0,
//                     "actionItems": [{
//                         "id": "a-50-n",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".map-bg",
//                                 "selectorGuids": ["b9af9b3c-d4f7-5758-cd44-93be65a18175"]
//                             },
//                             "xValue": 13,
//                             "xUnit": "%",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }]
//                 }, {
//                     "keyframe": 100,
//                     "actionItems": [{
//                         "id": "a-50-n-2",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".map-bg",
//                                 "selectorGuids": ["b9af9b3c-d4f7-5758-cd44-93be65a18175"]
//                             },
//                             "xValue": -6,
//                             "xUnit": "%",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }]
//                 }]
//             }, {
//                 "id": "a-50-p-2",
//                 "type": "MOUSE_Y",
//                 "parameterLabel": "Mouse Y",
//                 "continuousActionGroups": [{
//                     "keyframe": 0,
//                     "actionItems": [{
//                         "id": "a-50-n-3",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".map-bg",
//                                 "selectorGuids": ["b9af9b3c-d4f7-5758-cd44-93be65a18175"]
//                             },
//                             "yValue": 15,
//                             "xUnit": "PX",
//                             "yUnit": "%",
//                             "zUnit": "PX"
//                         }
//                     }]
//                 }, {
//                     "keyframe": 100,
//                     "actionItems": [{
//                         "id": "a-50-n-4",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".map-bg",
//                                 "selectorGuids": ["b9af9b3c-d4f7-5758-cd44-93be65a18175"]
//                             },
//                             "yValue": -14,
//                             "xUnit": "PX",
//                             "yUnit": "%",
//                             "zUnit": "PX"
//                         }
//                     }]
//                 }]
//             }],
//             "createdOn": 1561844295944
//         },
//         "a-53": {
//             "id": "a-53",
//             "title": "map-move 2",
//             "continuousParameterGroups": [{
//                 "id": "a-53-p",
//                 "type": "MOUSE_X",
//                 "parameterLabel": "Mouse X",
//                 "continuousActionGroups": [{
//                     "keyframe": 0,
//                     "actionItems": [{
//                         "id": "a-53-n",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".map-container",
//                                 "selectorGuids": ["f1320278-793e-6e4b-deb6-d66d00b4304f"]
//                             },
//                             "xValue": 3,
//                             "xUnit": "%",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }]
//                 }, {
//                     "keyframe": 100,
//                     "actionItems": [{
//                         "id": "a-53-n-2",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".map-container",
//                                 "selectorGuids": ["f1320278-793e-6e4b-deb6-d66d00b4304f"]
//                             },
//                             "xValue": -3,
//                             "xUnit": "%",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }]
//                 }]
//             }, {
//                 "id": "a-53-p-2",
//                 "type": "MOUSE_Y",
//                 "parameterLabel": "Mouse Y",
//                 "continuousActionGroups": [{
//                     "keyframe": 0,
//                     "actionItems": [{
//                         "id": "a-53-n-3",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".map-container",
//                                 "selectorGuids": ["f1320278-793e-6e4b-deb6-d66d00b4304f"]
//                             },
//                             "yValue": 3,
//                             "xUnit": "PX",
//                             "yUnit": "%",
//                             "zUnit": "PX"
//                         }
//                     }]
//                 }, {
//                     "keyframe": 100,
//                     "actionItems": [{
//                         "id": "a-53-n-4",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".map-container",
//                                 "selectorGuids": ["f1320278-793e-6e4b-deb6-d66d00b4304f"]
//                             },
//                             "yValue": -3,
//                             "xUnit": "PX",
//                             "yUnit": "%",
//                             "zUnit": "PX"
//                         }
//                     }]
//                 }]
//             }],
//             "createdOn": 1561844295944
//         },
//         "a-55": {
//             "id": "a-55",
//             "title": "map-dot-hover-1",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-55-n",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".map-bg-img",
//                             "selectorGuids": ["47917e9e-2f7d-b534-1b5a-f0ef6f25c08d"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-55-n-9",
//                     "actionTypeId": "STYLE_TEXT_COLOR",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|686ff4a8-3d63-b5d2-efa6-1ed12f8780c8"
//                         },
//                         "rValue": 255,
//                         "gValue": 255,
//                         "bValue": 255,
//                         "aValue": 1
//                     }
//                 }, {
//                     "id": "a-55-n-7",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "id": "5d547d82782f476bb4a9d5ce|30d4821d-3a78-3a44-889f-73167c3d3cc4"
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-55-n-5",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|33c53cb1-a1d4-a619-6bdd-611e4c09aa4d"
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-55-n-3",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "locked": false,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "id": "5d547d82782f476bb4a9d5ce|33c53cb1-a1d4-a619-6bdd-611e4c09aa4c"
//                         },
//                         "widthValue": 0,
//                         "widthUnit": "PX",
//                         "heightUnit": "PX"
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-55-n-2",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".map-bg-img",
//                             "selectorGuids": ["47917e9e-2f7d-b534-1b5a-f0ef6f25c08d"]
//                         },
//                         "value": 0.3,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-55-n-10",
//                     "actionTypeId": "STYLE_TEXT_COLOR",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|686ff4a8-3d63-b5d2-efa6-1ed12f8780c8"
//                         },
//                         "rValue": 108,
//                         "gValue": 14,
//                         "bValue": 17,
//                         "aValue": 1
//                     }
//                 }, {
//                     "id": "a-55-n-6",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|33c53cb1-a1d4-a619-6bdd-611e4c09aa4d"
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-55-n-4",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutQuart",
//                         "duration": 500,
//                         "locked": false,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "id": "5d547d82782f476bb4a9d5ce|33c53cb1-a1d4-a619-6bdd-611e4c09aa4c"
//                         },
//                         "widthValue": 200,
//                         "widthUnit": "PX",
//                         "heightUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-55-n-8",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 600,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "id": "5d547d82782f476bb4a9d5ce|30d4821d-3a78-3a44-889f-73167c3d3cc4"
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }]
//             }],
//             "createdOn": 1562530067942,
//             "useFirstGroupAsInitialState": true
//         },
//         "a-56": {
//             "id": "a-56",
//             "title": "map-dot-hover-1-out",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-56-n",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".map-bg-img",
//                             "selectorGuids": ["47917e9e-2f7d-b534-1b5a-f0ef6f25c08d"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-56-n-3",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|33c53cb1-a1d4-a619-6bdd-611e4c09aa4d"
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-56-n-2",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutQuint",
//                         "duration": 500,
//                         "locked": false,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "id": "5d547d82782f476bb4a9d5ce|33c53cb1-a1d4-a619-6bdd-611e4c09aa4c"
//                         },
//                         "widthValue": 0,
//                         "widthUnit": "PX",
//                         "heightUnit": "PX"
//                     }
//                 }]
//             }],
//             "createdOn": 1562530067942,
//             "useFirstGroupAsInitialState": false
//         },
//         "a-57": {
//             "id": "a-57",
//             "title": "map-hover-dot-2",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-57-n",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "locked": false,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "id": "5d547d82782f476bb4a9d5ce|721e3e8c-8f5b-df32-b941-bb0fc59c4e23"
//                         },
//                         "widthValue": 0,
//                         "widthUnit": "PX",
//                         "heightUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-57-n-9",
//                     "actionTypeId": "STYLE_TEXT_COLOR",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|ec092335-177f-017b-77f5-561a5ab129c3"
//                         },
//                         "rValue": 255,
//                         "gValue": 255,
//                         "bValue": 255,
//                         "aValue": 1
//                     }
//                 }, {
//                     "id": "a-57-n-7",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".map-bg-img",
//                             "selectorGuids": ["47917e9e-2f7d-b534-1b5a-f0ef6f25c08d"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-57-n-5",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "id": "5d547d82782f476bb4a9d5ce|051a6306-bcc9-338e-85c7-0f5bb752000d"
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-57-n-3",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|721e3e8c-8f5b-df32-b941-bb0fc59c4e24"
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-57-n-2",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutQuart",
//                         "duration": 600,
//                         "locked": false,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "id": "5d547d82782f476bb4a9d5ce|721e3e8c-8f5b-df32-b941-bb0fc59c4e23"
//                         },
//                         "widthValue": 200,
//                         "widthUnit": "PX",
//                         "heightUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-57-n-10",
//                     "actionTypeId": "STYLE_TEXT_COLOR",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|ec092335-177f-017b-77f5-561a5ab129c3"
//                         },
//                         "rValue": 108,
//                         "gValue": 14,
//                         "bValue": 17,
//                         "aValue": 1
//                     }
//                 }, {
//                     "id": "a-57-n-4",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|721e3e8c-8f5b-df32-b941-bb0fc59c4e24"
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-57-n-8",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".map-bg-img",
//                             "selectorGuids": ["47917e9e-2f7d-b534-1b5a-f0ef6f25c08d"]
//                         },
//                         "value": 0.3,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-57-n-6",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 600,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "id": "5d547d82782f476bb4a9d5ce|051a6306-bcc9-338e-85c7-0f5bb752000d"
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }]
//             }],
//             "createdOn": 1562532649816,
//             "useFirstGroupAsInitialState": true
//         },
//         "a-58": {
//             "id": "a-58",
//             "title": "map-hover-dot-2-out",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-58-n",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutQuart",
//                         "duration": 600,
//                         "locked": false,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "id": "5d547d82782f476bb4a9d5ce|721e3e8c-8f5b-df32-b941-bb0fc59c4e23"
//                         },
//                         "widthValue": 0,
//                         "widthUnit": "PX",
//                         "heightUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-58-n-4",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".map-bg-img",
//                             "selectorGuids": ["47917e9e-2f7d-b534-1b5a-f0ef6f25c08d"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-58-n-3",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|721e3e8c-8f5b-df32-b941-bb0fc59c4e24"
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }]
//             }],
//             "createdOn": 1562532649816,
//             "useFirstGroupAsInitialState": false
//         },
//         "a-59": {
//             "id": "a-59",
//             "title": "map-hover-dot-3",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-59-n",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "locked": false,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "id": "5d547d82782f476bb4a9d5ce|606051ef-7128-2b45-ca00-500e30e3b976"
//                         },
//                         "widthValue": 0,
//                         "widthUnit": "PX",
//                         "heightUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-59-n-9",
//                     "actionTypeId": "STYLE_TEXT_COLOR",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|f1d3f4a9-0ee7-3f29-340d-e1402cf43efa"
//                         },
//                         "rValue": 255,
//                         "gValue": 255,
//                         "bValue": 255,
//                         "aValue": 1
//                     }
//                 }, {
//                     "id": "a-59-n-7",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".map-bg-img",
//                             "selectorGuids": ["47917e9e-2f7d-b534-1b5a-f0ef6f25c08d"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-59-n-5",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|95f61c50-29a1-4b7e-756b-e2c8f282e52c"
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-59-n-3",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|21c7eec7-460d-42dd-a321-d42ba87c010f"
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-59-n-2",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutQuart",
//                         "duration": 600,
//                         "locked": false,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "id": "5d547d82782f476bb4a9d5ce|606051ef-7128-2b45-ca00-500e30e3b976"
//                         },
//                         "widthValue": 200,
//                         "widthUnit": "PX",
//                         "heightUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-59-n-10",
//                     "actionTypeId": "STYLE_TEXT_COLOR",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|f1d3f4a9-0ee7-3f29-340d-e1402cf43efa"
//                         },
//                         "rValue": 108,
//                         "gValue": 14,
//                         "bValue": 17,
//                         "aValue": 1
//                     }
//                 }, {
//                     "id": "a-59-n-8",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".map-bg-img",
//                             "selectorGuids": ["47917e9e-2f7d-b534-1b5a-f0ef6f25c08d"]
//                         },
//                         "value": 0.3,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-59-n-6",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|95f61c50-29a1-4b7e-756b-e2c8f282e52c"
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-59-n-4",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|21c7eec7-460d-42dd-a321-d42ba87c010f"
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }]
//             }],
//             "createdOn": 1562533833340,
//             "useFirstGroupAsInitialState": true
//         },
//         "a-60": {
//             "id": "a-60",
//             "title": "map-hover-dot-3-out",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-60-n",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutQuart",
//                         "duration": 600,
//                         "locked": false,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "id": "5d547d82782f476bb4a9d5ce|606051ef-7128-2b45-ca00-500e30e3b976"
//                         },
//                         "widthValue": 0,
//                         "widthUnit": "PX",
//                         "heightUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-60-n-2",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".map-bg-img",
//                             "selectorGuids": ["47917e9e-2f7d-b534-1b5a-f0ef6f25c08d"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-60-n-3",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|95f61c50-29a1-4b7e-756b-e2c8f282e52c"
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-60-n-4",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|21c7eec7-460d-42dd-a321-d42ba87c010f"
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }]
//             }],
//             "createdOn": 1562533833340,
//             "useFirstGroupAsInitialState": false
//         },
//         "a-61": {
//             "id": "a-61",
//             "title": "map-click-close",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-61-n",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutQuart",
//                         "duration": 500,
//                         "locked": false,
//                         "target": {
//                             "useEventTarget": "PARENT",
//                             "selector": ".map-child",
//                             "selectorGuids": ["65b43112-67d6-d9aa-d3cc-df07a7d76f30"]
//                         },
//                         "widthValue": 0,
//                         "heightValue": 100,
//                         "widthUnit": "%",
//                         "heightUnit": "%"
//                     }
//                 }, {
//                     "id": "a-61-n-2",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 400,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".number-count",
//                             "selectorGuids": ["74dadc11-f8c3-0a2d-8cfb-7be55f1df615"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-61-n-8",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 400,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".close-map",
//                             "selectorGuids": ["7e7ad0af-0978-bc9f-2f2d-7cf9d19a0415"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-61-n-3",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 400,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".message",
//                             "selectorGuids": ["fa510099-46cc-eae0-0c66-c7737bfd66c5"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-61-n-4",
//                     "actionTypeId": "STYLE_BACKGROUND_COLOR",
//                     "config": {
//                         "delay": 400,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".map-child",
//                             "selectorGuids": ["65b43112-67d6-d9aa-d3cc-df07a7d76f30"]
//                         },
//                         "rValue": 0,
//                         "gValue": 0,
//                         "bValue": 0,
//                         "aValue": 0
//                     }
//                 }, {
//                     "id": "a-61-n-5",
//                     "actionTypeId": "GENERAL_DISPLAY",
//                     "config": {
//                         "delay": 400,
//                         "easing": "ease",
//                         "duration": 0,
//                         "value": "none",
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".map-child",
//                             "selectorGuids": ["65b43112-67d6-d9aa-d3cc-df07a7d76f30"]
//                         }
//                     }
//                 }, {
//                     "id": "a-61-n-6",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 400,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".map-bg",
//                             "selectorGuids": ["b9af9b3c-d4f7-5758-cd44-93be65a18175"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }]
//             }],
//             "createdOn": 1562342162192,
//             "useFirstGroupAsInitialState": false
//         },
//         "a-62": {
//             "id": "a-62",
//             "title": "img-mobile-activate 2",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-62-n",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".info-parent-2",
//                             "selectorGuids": ["b9bb7def-52c4-afbc-0dee-360dff957849"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-62-n-2",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|34b36b12-584f-4f70-d05b-54e685b2cf31"
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-62-n-3",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".img-cast-2",
//                             "selectorGuids": ["f9883cf5-9e13-a1d1-5b29-07f4290e6658"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-62-n-4",
//                     "actionTypeId": "GENERAL_DISPLAY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 0,
//                         "value": "none",
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".info-parent-2",
//                             "selectorGuids": ["b9bb7def-52c4-afbc-0dee-360dff957849"]
//                         }
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-62-n-6",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|34b36b12-584f-4f70-d05b-54e685b2cf31"
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-62-n-7",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".img-cast-2",
//                             "selectorGuids": ["f9883cf5-9e13-a1d1-5b29-07f4290e6658"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-62-n-8",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".info-parent-2",
//                             "selectorGuids": ["b9bb7def-52c4-afbc-0dee-360dff957849"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-62-n-5",
//                     "actionTypeId": "GENERAL_DISPLAY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 0,
//                         "value": "inline-block",
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".info-parent-2",
//                             "selectorGuids": ["b9bb7def-52c4-afbc-0dee-360dff957849"]
//                         }
//                     }
//                 }]
//             }],
//             "createdOn": 1561408960617,
//             "useFirstGroupAsInitialState": true
//         },
//         "a-63": {
//             "id": "a-63",
//             "title": "img-mobile-activate 3",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-63-n",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".info-parent-3",
//                             "selectorGuids": ["36e0cd98-432b-0f67-4563-53fc1552f1dd"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-63-n-2",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|34b36b12-584f-4f70-d05b-54e685b2cf31"
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-63-n-3",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".img-cast-3",
//                             "selectorGuids": ["926e1b2c-1d6c-b098-0110-4a17fc0ba880"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-63-n-4",
//                     "actionTypeId": "GENERAL_DISPLAY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 0,
//                         "value": "none",
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".info-parent-3",
//                             "selectorGuids": ["36e0cd98-432b-0f67-4563-53fc1552f1dd"]
//                         }
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-63-n-5",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|34b36b12-584f-4f70-d05b-54e685b2cf31"
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-63-n-6",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".img-cast-3",
//                             "selectorGuids": ["926e1b2c-1d6c-b098-0110-4a17fc0ba880"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-63-n-7",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".info-parent-3",
//                             "selectorGuids": ["36e0cd98-432b-0f67-4563-53fc1552f1dd"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-63-n-8",
//                     "actionTypeId": "GENERAL_DISPLAY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 0,
//                         "value": "inline-block",
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".info-parent-3",
//                             "selectorGuids": ["36e0cd98-432b-0f67-4563-53fc1552f1dd"]
//                         }
//                     }
//                 }]
//             }],
//             "createdOn": 1561408960617,
//             "useFirstGroupAsInitialState": true
//         },
//         "a-64": {
//             "id": "a-64",
//             "title": "img-mobile-activate 4",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-64-n",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".info-parent-4",
//                             "selectorGuids": ["5f394821-be97-7538-7ac0-e86f07f87f25"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-64-n-2",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|34b36b12-584f-4f70-d05b-54e685b2cf31"
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-64-n-3",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".img-cast-4",
//                             "selectorGuids": ["09936f8d-1b55-41d4-27e1-d0cc2ee6229d"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-64-n-4",
//                     "actionTypeId": "GENERAL_DISPLAY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 0,
//                         "value": "none",
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".info-parent-4",
//                             "selectorGuids": ["5f394821-be97-7538-7ac0-e86f07f87f25"]
//                         }
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-64-n-5",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|34b36b12-584f-4f70-d05b-54e685b2cf31"
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-64-n-6",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".img-cast-4",
//                             "selectorGuids": ["09936f8d-1b55-41d4-27e1-d0cc2ee6229d"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-64-n-7",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".info-parent-4",
//                             "selectorGuids": ["5f394821-be97-7538-7ac0-e86f07f87f25"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-64-n-8",
//                     "actionTypeId": "GENERAL_DISPLAY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 0,
//                         "value": "inline-block",
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".info-parent-4",
//                             "selectorGuids": ["5f394821-be97-7538-7ac0-e86f07f87f25"]
//                         }
//                     }
//                 }]
//             }],
//             "createdOn": 1561408960617,
//             "useFirstGroupAsInitialState": true
//         },
//         "a-65": {
//             "id": "a-65",
//             "title": "img-mobile-activate-close",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-65-n",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|1b88a246-cf95-94ee-3710-0294d1253315"
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-65-n-5",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".img-content-parent",
//                             "selectorGuids": ["77b59d40-18f3-6dcf-3c90-1e5fc4d8c1f1"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-65-n-2",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|34b36b12-584f-4f70-d05b-54e685b2cf31"
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-65-n-3",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".img-cast-1",
//                             "selectorGuids": ["ee247d03-8cbc-54fd-90f7-abb009738fdc"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-65-n-4",
//                     "actionTypeId": "GENERAL_DISPLAY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 0,
//                         "value": "none",
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|1b88a246-cf95-94ee-3710-0294d1253315"
//                         }
//                     }
//                 }]
//             }],
//             "createdOn": 1561408960617,
//             "useFirstGroupAsInitialState": false
//         },
//         "a-66": {
//             "id": "a-66",
//             "title": "img-mobile-activate-close-2",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-66-n",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|602cc19b-fb96-91cd-ea93-7e2ca08404fc"
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-66-n-5",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".img-content-parent",
//                             "selectorGuids": ["77b59d40-18f3-6dcf-3c90-1e5fc4d8c1f1"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-66-n-2",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|34b36b12-584f-4f70-d05b-54e685b2cf31"
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-66-n-3",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".img-cast-2",
//                             "selectorGuids": ["f9883cf5-9e13-a1d1-5b29-07f4290e6658"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-66-n-4",
//                     "actionTypeId": "GENERAL_DISPLAY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 0,
//                         "value": "none",
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|602cc19b-fb96-91cd-ea93-7e2ca08404fc"
//                         }
//                     }
//                 }]
//             }],
//             "createdOn": 1561408960617,
//             "useFirstGroupAsInitialState": false
//         },
//         "a-67": {
//             "id": "a-67",
//             "title": "img-mobile-activate-close-3",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-67-n",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|a7d4b4bc-6acd-6d44-8c84-e6954ddaa24e"
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-67-n-5",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".img-content-parent",
//                             "selectorGuids": ["77b59d40-18f3-6dcf-3c90-1e5fc4d8c1f1"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-67-n-2",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|34b36b12-584f-4f70-d05b-54e685b2cf31"
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-67-n-3",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".img-cast-3",
//                             "selectorGuids": ["926e1b2c-1d6c-b098-0110-4a17fc0ba880"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-67-n-4",
//                     "actionTypeId": "GENERAL_DISPLAY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 0,
//                         "value": "none",
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|a7d4b4bc-6acd-6d44-8c84-e6954ddaa24e"
//                         }
//                     }
//                 }]
//             }],
//             "createdOn": 1561408960617,
//             "useFirstGroupAsInitialState": false
//         },
//         "a-68": {
//             "id": "a-68",
//             "title": "img-mobile-activate-close-4",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-68-n",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|cee2d40d-00b3-df63-99a1-8984a30d2029"
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-68-n-5",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".img-content-parent",
//                             "selectorGuids": ["77b59d40-18f3-6dcf-3c90-1e5fc4d8c1f1"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-68-n-2",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|34b36b12-584f-4f70-d05b-54e685b2cf31"
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-68-n-3",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".img-cast-4",
//                             "selectorGuids": ["09936f8d-1b55-41d4-27e1-d0cc2ee6229d"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-68-n-4",
//                     "actionTypeId": "GENERAL_DISPLAY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 0,
//                         "value": "none",
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|cee2d40d-00b3-df63-99a1-8984a30d2029"
//                         }
//                     }
//                 }]
//             }],
//             "createdOn": 1561408960617,
//             "useFirstGroupAsInitialState": false
//         },
//         "a-69": {
//             "id": "a-69",
//             "title": "gallery-click-zoom-close",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-69-n",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".g-3",
//                             "selectorGuids": ["14b1d6be-138a-9170-9c33-8f34e075c23f"]
//                         },
//                         "xValue": 0.2,
//                         "yValue": 0.2,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-69-n-2",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".g-11",
//                             "selectorGuids": ["150a6834-ad40-3e61-af94-c3beda524b9d"]
//                         },
//                         "xValue": 0.6000000000000006,
//                         "yValue": 0.6000000000000006,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-69-n-3",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "locked": false,
//                         "target": {
//                             "selector": ".gird-line.m-l",
//                             "selectorGuids": ["804a9fbe-4f78-1387-223d-f7359968089a", "c406171d-a2e1-f98f-a93e-6b2f4848bc06"]
//                         },
//                         "heightValue": 100,
//                         "widthUnit": "PX",
//                         "heightUnit": "%"
//                     }
//                 }, {
//                     "id": "a-69-n-4",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|5e930df9-6f78-f909-8dd9-e6258927e1c1"
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "VH",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-69-n-8",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".g-5",
//                             "selectorGuids": ["c7bfdc22-b714-a716-bc82-b57ccad0bb36"]
//                         },
//                         "yValue": 140,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-69-n-9",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".g-2",
//                             "selectorGuids": ["7b412465-4d0f-ef5f-31ac-f5fc23f0cd8a"]
//                         },
//                         "xValue": 230,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-69-n-10",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".g-10",
//                             "selectorGuids": ["34481576-0663-87d3-0f7a-b80cca2312ad"]
//                         },
//                         "yValue": -80,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-69-n-11",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".g-9",
//                             "selectorGuids": ["cb8dcf94-aa2e-3bab-fdba-6ae10e6de3df"]
//                         },
//                         "xValue": 0.8,
//                         "yValue": 0.8,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-69-n-12",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".g-9",
//                             "selectorGuids": ["cb8dcf94-aa2e-3bab-fdba-6ae10e6de3df"]
//                         },
//                         "xValue": -80,
//                         "yValue": -50,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-69-n-13",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".g-1",
//                             "selectorGuids": ["30716ca5-6354-4d98-f918-2b277274b156"]
//                         },
//                         "xValue": 0.7000000000000006,
//                         "yValue": 0.7000000000000006,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-69-n-14",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".g-1",
//                             "selectorGuids": ["30716ca5-6354-4d98-f918-2b277274b156"]
//                         },
//                         "yValue": 130,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-69-n-15",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".g-7",
//                             "selectorGuids": ["bff374c8-5890-9439-216d-10d3af981fd6"]
//                         },
//                         "xValue": 0.4,
//                         "yValue": 0.4,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-69-n-16",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".g-6",
//                             "selectorGuids": ["7ef4f06e-d67e-12c1-dbb1-7dbab46d6176"]
//                         },
//                         "xValue": 0.5,
//                         "yValue": 0.5,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-69-n-17",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".g-8",
//                             "selectorGuids": ["49a68822-ef8d-d13a-2386-c11ffddfb256"]
//                         },
//                         "xValue": 0.2,
//                         "yValue": 0.2,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-69-n-18",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".g-2",
//                             "selectorGuids": ["7b412465-4d0f-ef5f-31ac-f5fc23f0cd8a"]
//                         },
//                         "xValue": 0.6000000000000006,
//                         "yValue": 0.6000000000000006,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-69-n-19",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".g-4",
//                             "selectorGuids": ["8cc48e69-b257-72be-5f6e-721070f38b02"]
//                         },
//                         "xValue": -236,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-69-n-20",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".g-4",
//                             "selectorGuids": ["8cc48e69-b257-72be-5f6e-721070f38b02"]
//                         },
//                         "xValue": 0.4,
//                         "yValue": 0.4,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-69-n-21",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "locked": false,
//                         "target": {
//                             "selector": ".gird-line",
//                             "selectorGuids": ["804a9fbe-4f78-1387-223d-f7359968089a"]
//                         },
//                         "heightValue": 100,
//                         "widthUnit": "PX",
//                         "heightUnit": "%"
//                     }
//                 }, {
//                     "id": "a-69-n-22",
//                     "actionTypeId": "STYLE_SIZE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 500,
//                         "locked": false,
//                         "target": {
//                             "selector": ".gird-line.m-r",
//                             "selectorGuids": ["804a9fbe-4f78-1387-223d-f7359968089a", "82607b6c-0084-4a53-5433-6fdc7bec1a7e"]
//                         },
//                         "heightValue": 100,
//                         "widthUnit": "PX",
//                         "heightUnit": "%"
//                     }
//                 }, {
//                     "id": "a-69-n-7",
//                     "actionTypeId": "TRANSFORM_SCALE",
//                     "config": {
//                         "delay": 600,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": true,
//                             "id": "5d547d82782f476bb4a9d5ce|5e930df9-6f78-f909-8dd9-e6258927e1c1"
//                         },
//                         "xValue": 0,
//                         "yValue": 0,
//                         "locked": true
//                     }
//                 }, {
//                     "id": "a-69-n-6",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 800,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".img-head-4",
//                             "selectorGuids": ["cc9066db-ae5c-0f7c-3441-df7c16b53339"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-69-n-5",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 800,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "selector": ".close-g",
//                             "selectorGuids": ["110674e9-1211-7c21-91af-1d9a58570774"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }]
//             }],
//             "createdOn": 1561040192569,
//             "useFirstGroupAsInitialState": false
//         },
//         "a-70": {
//             "id": "a-70",
//             "title": "never-die",
//             "continuousParameterGroups": [{
//                 "id": "a-70-p",
//                 "type": "SCROLL_PROGRESS",
//                 "parameterLabel": "Scroll",
//                 "continuousActionGroups": [{
//                     "keyframe": 0,
//                     "actionItems": [{
//                         "id": "a-70-n",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".coin-1",
//                                 "selectorGuids": ["103e38a4-05e3-cf4f-38f0-52ef6fe80f63"]
//                             },
//                             "yValue": 310,
//                             "xUnit": "PX",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }, {
//                         "id": "a-70-n-3",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".coin-2",
//                                 "selectorGuids": ["281dd019-bb7c-1979-cee6-ff68091f01ee"]
//                             },
//                             "yValue": -440,
//                             "xUnit": "PX",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }, {
//                         "id": "a-70-n-5",
//                         "actionTypeId": "TRANSFORM_ROTATE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".key",
//                                 "selectorGuids": ["cfd02d25-81b9-93bc-bb79-bc35c6218824"]
//                             },
//                             "zValue": 40,
//                             "xUnit": "DEG",
//                             "yUnit": "DEG",
//                             "zUnit": "DEG"
//                         }
//                     }, {
//                         "id": "a-70-n-7",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".coin",
//                                 "selectorGuids": ["6dc8c0b9-02a6-a1e8-b257-d2e8c9d665f8"]
//                             },
//                             "yValue": 50,
//                             "xUnit": "PX",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }, {
//                         "id": "a-70-n-11",
//                         "actionTypeId": "TRANSFORM_ROTATE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".coin",
//                                 "selectorGuids": ["6dc8c0b9-02a6-a1e8-b257-d2e8c9d665f8"]
//                             },
//                             "zValue": 0,
//                             "xUnit": "DEG",
//                             "yUnit": "DEG",
//                             "zUnit": "DEG"
//                         }
//                     }, {
//                         "id": "a-70-n-13",
//                         "actionTypeId": "TRANSFORM_ROTATE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".coin-2",
//                                 "selectorGuids": ["281dd019-bb7c-1979-cee6-ff68091f01ee"]
//                             },
//                             "zValue": 0,
//                             "xUnit": "DEG",
//                             "yUnit": "DEG",
//                             "zUnit": "DEG"
//                         }
//                     }, {
//                         "id": "a-70-n-17",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".coin-2",
//                                 "selectorGuids": ["281dd019-bb7c-1979-cee6-ff68091f01ee"]
//                             },
//                             "value": 1,
//                             "unit": ""
//                         }
//                     }]
//                 }, {
//                     "keyframe": 20,
//                     "actionItems": [{
//                         "id": "a-70-n-9",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".coin-3",
//                                 "selectorGuids": ["1ab96087-a5f2-c056-c158-0e3187564073"]
//                             },
//                             "yValue": -70,
//                             "xUnit": "PX",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }, {
//                         "id": "a-70-n-19",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".head",
//                                 "selectorGuids": ["7177a8b5-bc18-679a-c2f9-0b890bd5b7a0"]
//                             },
//                             "yValue": 100,
//                             "xUnit": "PX",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }, {
//                         "id": "a-70-n-21",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".head",
//                                 "selectorGuids": ["7177a8b5-bc18-679a-c2f9-0b890bd5b7a0"]
//                             },
//                             "value": 0,
//                             "unit": ""
//                         }
//                     }, {
//                         "id": "a-70-n-25",
//                         "actionTypeId": "TRANSFORM_ROTATE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".coin-3",
//                                 "selectorGuids": ["1ab96087-a5f2-c056-c158-0e3187564073"]
//                             },
//                             "zValue": 0,
//                             "xUnit": "DEG",
//                             "yUnit": "DEG",
//                             "zUnit": "DEG"
//                         }
//                     }, {
//                         "id": "a-70-n-27",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "SIBLINGS",
//                                 "selector": ".scroll-container-1",
//                                 "selectorGuids": ["2c0b810f-009b-8a7d-eaf0-ff8721f0aa86"]
//                             },
//                             "value": 1,
//                             "unit": ""
//                         }
//                     }]
//                 }, {
//                     "keyframe": 50,
//                     "actionItems": [{
//                         "id": "a-70-n-28",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "SIBLINGS",
//                                 "selector": ".scroll-container-1",
//                                 "selectorGuids": ["2c0b810f-009b-8a7d-eaf0-ff8721f0aa86"]
//                             },
//                             "value": 0,
//                             "unit": ""
//                         }
//                     }]
//                 }, {
//                     "keyframe": 94,
//                     "actionItems": [{
//                         "id": "a-70-n-6",
//                         "actionTypeId": "TRANSFORM_ROTATE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".key",
//                                 "selectorGuids": ["cfd02d25-81b9-93bc-bb79-bc35c6218824"]
//                             },
//                             "zValue": 0,
//                             "xUnit": "DEG",
//                             "yUnit": "DEG",
//                             "zUnit": "DEG"
//                         }
//                     }, {
//                         "id": "a-70-n-4",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".coin-2",
//                                 "selectorGuids": ["281dd019-bb7c-1979-cee6-ff68091f01ee"]
//                             },
//                             "yValue": 130,
//                             "xUnit": "PX",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }, {
//                         "id": "a-70-n-14",
//                         "actionTypeId": "TRANSFORM_ROTATE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".coin-2",
//                                 "selectorGuids": ["281dd019-bb7c-1979-cee6-ff68091f01ee"]
//                             },
//                             "zValue": 360,
//                             "xUnit": "DEG",
//                             "yUnit": "DEG",
//                             "zUnit": "DEG"
//                         }
//                     }, {
//                         "id": "a-70-n-18",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".coin-2",
//                                 "selectorGuids": ["281dd019-bb7c-1979-cee6-ff68091f01ee"]
//                             },
//                             "value": 0.2,
//                             "unit": ""
//                         }
//                     }]
//                 }, {
//                     "keyframe": 100,
//                     "actionItems": [{
//                         "id": "a-70-n-2",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".coin-1",
//                                 "selectorGuids": ["103e38a4-05e3-cf4f-38f0-52ef6fe80f63"]
//                             },
//                             "yValue": -330,
//                             "xUnit": "PX",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }, {
//                         "id": "a-70-n-8",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".coin",
//                                 "selectorGuids": ["6dc8c0b9-02a6-a1e8-b257-d2e8c9d665f8"]
//                             },
//                             "yValue": -440,
//                             "xUnit": "PX",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }, {
//                         "id": "a-70-n-12",
//                         "actionTypeId": "TRANSFORM_ROTATE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".coin",
//                                 "selectorGuids": ["6dc8c0b9-02a6-a1e8-b257-d2e8c9d665f8"]
//                             },
//                             "zValue": 360,
//                             "xUnit": "DEG",
//                             "yUnit": "DEG",
//                             "zUnit": "DEG"
//                         }
//                     }, {
//                         "id": "a-70-n-20",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".head",
//                                 "selectorGuids": ["7177a8b5-bc18-679a-c2f9-0b890bd5b7a0"]
//                             },
//                             "yValue": 0,
//                             "xUnit": "PX",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }, {
//                         "id": "a-70-n-22",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".head",
//                                 "selectorGuids": ["7177a8b5-bc18-679a-c2f9-0b890bd5b7a0"]
//                             },
//                             "value": 1,
//                             "unit": ""
//                         }
//                     }, {
//                         "id": "a-70-n-10",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".coin-3",
//                                 "selectorGuids": ["1ab96087-a5f2-c056-c158-0e3187564073"]
//                             },
//                             "yValue": 350,
//                             "xUnit": "PX",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }, {
//                         "id": "a-70-n-26",
//                         "actionTypeId": "TRANSFORM_ROTATE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".coin-3",
//                                 "selectorGuids": ["1ab96087-a5f2-c056-c158-0e3187564073"]
//                             },
//                             "zValue": -180,
//                             "xUnit": "DEG",
//                             "yUnit": "DEG",
//                             "zUnit": "DEG"
//                         }
//                     }]
//                 }]
//             }],
//             "createdOn": 1562759105642
//         },
//         "a-71": {
//             "id": "a-71",
//             "title": "last-part",
//             "continuousParameterGroups": [{
//                 "id": "a-71-p",
//                 "type": "SCROLL_PROGRESS",
//                 "parameterLabel": "Scroll",
//                 "continuousActionGroups": [{
//                     "keyframe": 0,
//                     "actionItems": [{
//                         "id": "a-71-n",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "id": "5d547d82782f476bb4a9d5ce|d927dd04-0c72-948e-6fa1-5a00951da241"
//                             },
//                             "yValue": 490,
//                             "xUnit": "PX",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }, {
//                         "id": "a-71-n-3",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "id": "5d547d82782f476bb4a9d5ce|d927dd04-0c72-948e-6fa1-5a00951da241"
//                             },
//                             "value": 0,
//                             "unit": ""
//                         }
//                     }, {
//                         "id": "a-71-n-5",
//                         "actionTypeId": "TRANSFORM_SCALE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".skull",
//                                 "selectorGuids": ["f1022659-6d40-925b-fbfc-60ea9c568bcf"]
//                             },
//                             "xValue": 0,
//                             "yValue": 0,
//                             "locked": true
//                         }
//                     }]
//                 }, {
//                     "keyframe": 20,
//                     "actionItems": [{
//                         "id": "a-71-n-9",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".g-logo",
//                                 "selectorGuids": ["54e7e32a-1bcb-ae5b-afe3-c56dded06a64"]
//                             },
//                             "yValue": 100,
//                             "xUnit": "PX",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }, {
//                         "id": "a-71-n-11",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".g-logo",
//                                 "selectorGuids": ["54e7e32a-1bcb-ae5b-afe3-c56dded06a64"]
//                             },
//                             "value": 0,
//                             "unit": ""
//                         }
//                     }]
//                 }, {
//                     "keyframe": 55,
//                     "actionItems": [{
//                         "id": "a-71-n-6",
//                         "actionTypeId": "TRANSFORM_SCALE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".skull",
//                                 "selectorGuids": ["f1022659-6d40-925b-fbfc-60ea9c568bcf"]
//                             },
//                             "xValue": 1,
//                             "yValue": 1,
//                             "locked": true
//                         }
//                     }]
//                 }, {
//                     "keyframe": 90,
//                     "actionItems": [{
//                         "id": "a-71-n-2",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "id": "5d547d82782f476bb4a9d5ce|d927dd04-0c72-948e-6fa1-5a00951da241"
//                             },
//                             "yValue": 0,
//                             "xUnit": "PX",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }, {
//                         "id": "a-71-n-4",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "id": "5d547d82782f476bb4a9d5ce|d927dd04-0c72-948e-6fa1-5a00951da241"
//                             },
//                             "value": 1,
//                             "unit": ""
//                         }
//                     }]
//                 }, {
//                     "keyframe": 95,
//                     "actionItems": [{
//                         "id": "a-71-n-10",
//                         "actionTypeId": "TRANSFORM_MOVE",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".g-logo",
//                                 "selectorGuids": ["54e7e32a-1bcb-ae5b-afe3-c56dded06a64"]
//                             },
//                             "yValue": 0,
//                             "xUnit": "PX",
//                             "yUnit": "PX",
//                             "zUnit": "PX"
//                         }
//                     }, {
//                         "id": "a-71-n-12",
//                         "actionTypeId": "STYLE_OPACITY",
//                         "config": {
//                             "delay": 0,
//                             "easing": "ease",
//                             "duration": 500,
//                             "target": {
//                                 "useEventTarget": "CHILDREN",
//                                 "selector": ".g-logo",
//                                 "selectorGuids": ["54e7e32a-1bcb-ae5b-afe3-c56dded06a64"]
//                             },
//                             "value": 0.7,
//                             "unit": ""
//                         }
//                     }]
//                 }]
//             }],
//             "createdOn": 1562760889321
//         },
//         "a-73": {
//             "id": "a-73",
//             "title": "icon-spin",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-73-n",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|f0f22cfb-6560-c613-caf4-537d1d147397"
//                         },
//                         "yValue": 40,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-73-n-3",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|dfafacd6-40e0-6eac-bb3a-d188f6d476ef"
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-73-n-2",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 300,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|f0f22cfb-6560-c613-caf4-537d1d147397"
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-73-n-4",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 300,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|dfafacd6-40e0-6eac-bb3a-d188f6d476ef"
//                         },
//                         "yValue": -40,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }],
//             "createdOn": 1563716435401,
//             "useFirstGroupAsInitialState": true
//         },
//         "a-74": {
//             "id": "a-74",
//             "title": "icon-spin 2",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-74-n",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 300,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|f0f22cfb-6560-c613-caf4-537d1d147397"
//                         },
//                         "yValue": 40,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-74-n-2",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 300,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|dfafacd6-40e0-6eac-bb3a-d188f6d476ef"
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }],
//             "createdOn": 1563716435401,
//             "useFirstGroupAsInitialState": false
//         },
//         "a-75": {
//             "id": "a-75",
//             "title": "close-map-hover",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-75-n",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|0cf66ea5-786f-24c6-5dbb-de098408364f"
//                         },
//                         "yValue": 40,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-75-n-3",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|5dd477fe-e262-154d-dffd-801ac89392e8"
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-75-n-2",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 300,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|0cf66ea5-786f-24c6-5dbb-de098408364f"
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-75-n-4",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 300,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|5dd477fe-e262-154d-dffd-801ac89392e8"
//                         },
//                         "yValue": -40,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }],
//             "createdOn": 1563727295234,
//             "useFirstGroupAsInitialState": true
//         },
//         "a-78": {
//             "id": "a-78",
//             "title": "close-map-hover-out",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-78-n",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 300,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|0cf66ea5-786f-24c6-5dbb-de098408364f"
//                         },
//                         "yValue": 40,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-78-n-2",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 300,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|5dd477fe-e262-154d-dffd-801ac89392e8"
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }],
//             "createdOn": 1563727295234,
//             "useFirstGroupAsInitialState": false
//         },
//         "a-76": {
//             "id": "a-76",
//             "title": "close-map-hover 2",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-76-n",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|401e26bd-b132-6ae1-da21-b69ff2e013ae"
//                         },
//                         "yValue": 40,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-76-n-2",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|1dfe07e1-737a-5b1c-80ba-736f8602efb4"
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-76-n-3",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 300,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|401e26bd-b132-6ae1-da21-b69ff2e013ae"
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-76-n-4",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 300,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|1dfe07e1-737a-5b1c-80ba-736f8602efb4"
//                         },
//                         "yValue": -40,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }],
//             "createdOn": 1563727295234,
//             "useFirstGroupAsInitialState": true
//         },
//         "a-77": {
//             "id": "a-77",
//             "title": "close-map-hover-out-2",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-77-n",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 300,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|401e26bd-b132-6ae1-da21-b69ff2e013ae"
//                         },
//                         "yValue": 40,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-77-n-2",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 300,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|1dfe07e1-737a-5b1c-80ba-736f8602efb4"
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }],
//             "createdOn": 1563727295234,
//             "useFirstGroupAsInitialState": false
//         },
//         "a-26": {
//             "id": "a-26",
//             "title": "show-music-player",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-26-n",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".music-player",
//                             "selectorGuids": ["e18bfaf8-9d77-fcc8-3722-2da42124422a"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-26-n-5",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".music-player",
//                             "selectorGuids": ["e18bfaf8-9d77-fcc8-3722-2da42124422a"]
//                         },
//                         "xValue": 100,
//                         "xUnit": "%",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-26-n-6",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 400,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".music-player",
//                             "selectorGuids": ["e18bfaf8-9d77-fcc8-3722-2da42124422a"]
//                         },
//                         "xValue": 0,
//                         "xUnit": "%",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-26-n-4",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".music-player",
//                             "selectorGuids": ["e18bfaf8-9d77-fcc8-3722-2da42124422a"]
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }]
//             }],
//             "createdOn": 1560699697000,
//             "useFirstGroupAsInitialState": true
//         },
//         "a-27": {
//             "id": "a-27",
//             "title": "show-music-player 2",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-27-n",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".music-player",
//                             "selectorGuids": ["e18bfaf8-9d77-fcc8-3722-2da42124422a"]
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-27-n-2",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "inOutCirc",
//                         "duration": 400,
//                         "target": {
//                             "useEventTarget": "SIBLINGS",
//                             "selector": ".music-player",
//                             "selectorGuids": ["e18bfaf8-9d77-fcc8-3722-2da42124422a"]
//                         },
//                         "xValue": 100,
//                         "xUnit": "%",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }],
//             "createdOn": 1560699697000,
//             "useFirstGroupAsInitialState": false
//         },
//         "a-79": {
//             "id": "a-79",
//             "title": "icon-spin 3",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-79-n",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|64cb4a23-ad99-7720-aa6d-30f657d2d6c2"
//                         },
//                         "yValue": 40,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-79-n-2",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|2ef35496-c97b-1ecd-bdb7-ee1d9aca8cd7"
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-79-n-3",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 300,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|64cb4a23-ad99-7720-aa6d-30f657d2d6c2"
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-79-n-4",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 300,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|2ef35496-c97b-1ecd-bdb7-ee1d9aca8cd7"
//                         },
//                         "yValue": -40,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }],
//             "createdOn": 1563716435401,
//             "useFirstGroupAsInitialState": true
//         },
//         "a-80": {
//             "id": "a-80",
//             "title": "icon-spin 3",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-80-n",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 300,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|64cb4a23-ad99-7720-aa6d-30f657d2d6c2"
//                         },
//                         "yValue": 40,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-80-n-2",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "ease",
//                         "duration": 300,
//                         "target": {
//                             "useEventTarget": "CHILDREN",
//                             "id": "5d547d82782f476bb4a9d5ce|2ef35496-c97b-1ecd-bdb7-ee1d9aca8cd7"
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }]
//             }],
//             "createdOn": 1563716435401,
//             "useFirstGroupAsInitialState": false
//         },
//         "a-81": {
//             "id": "a-81",
//             "title": "elements-load-in",
//             "actionItemGroups": [{
//                 "actionItems": [{
//                     "id": "a-81-n",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|4a31b02d-fc53-ebc1-17d8-b14705020607"
//                         },
//                         "yValue": -100,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-81-n-11",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|1230903e-5606-deac-9782-e0e9e00418ce"
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-81-n-9",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|c90dcca4-13c3-da70-91ba-e80df6a3360d"
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-81-n-7",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|ca84ad73-51dc-7491-b9e2-9fc26309c49d"
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-81-n-5",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|ca84ad73-51dc-7491-b9e2-9fc26309c49d"
//                         },
//                         "yValue": 50,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-81-n-3",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 0,
//                         "easing": "",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|d71726fa-8aba-407f-0581-2d6e6f566dc1"
//                         },
//                         "value": 0,
//                         "unit": ""
//                     }
//                 }]
//             }, {
//                 "actionItems": [{
//                     "id": "a-81-n-4",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 9200,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|d71726fa-8aba-407f-0581-2d6e6f566dc1"
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-81-n-12",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 9200,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|1230903e-5606-deac-9782-e0e9e00418ce"
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-81-n-10",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 9200,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|c90dcca4-13c3-da70-91ba-e80df6a3360d"
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }, {
//                     "id": "a-81-n-2",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 9200,
//                         "easing": "ease",
//                         "duration": 500,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|4a31b02d-fc53-ebc1-17d8-b14705020607"
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "%",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-81-n-6",
//                     "actionTypeId": "TRANSFORM_MOVE",
//                     "config": {
//                         "delay": 9200,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|ca84ad73-51dc-7491-b9e2-9fc26309c49d"
//                         },
//                         "yValue": 0,
//                         "xUnit": "PX",
//                         "yUnit": "PX",
//                         "zUnit": "PX"
//                     }
//                 }, {
//                     "id": "a-81-n-8",
//                     "actionTypeId": "STYLE_OPACITY",
//                     "config": {
//                         "delay": 9200,
//                         "easing": "ease",
//                         "duration": 1000,
//                         "target": {
//                             "id": "5d547d82782f476bb4a9d5ce|ca84ad73-51dc-7491-b9e2-9fc26309c49d"
//                         },
//                         "value": 1,
//                         "unit": ""
//                     }
//                 }]
//             }],
//             "createdOn": 1563729317040,
//             "useFirstGroupAsInitialState": true
//         }
//     },
//     "site": {
//         "mediaQueries": [{
//             "key": "main",
//             "min": 992,
//             "max": 10000
//         }, {
//             "key": "medium",
//             "min": 768,
//             "max": 991
//         }, {
//             "key": "small",
//             "min": 480,
//             "max": 767
//         }, {
//             "key": "tiny",
//             "min": 0,
//             "max": 479
//         }]
//     }
// });