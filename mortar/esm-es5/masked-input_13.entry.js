var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-96277151.js';
import { c as createCommonjsModule, u as unwrapExports, a as commonjsGlobal, b as classnames } from './index-36f9bcb5.js';
import { f as focusLock } from './index.esm-267e7bcc.js';
var vanillaTextMask = createCommonjsModule(function (module, exports) {
    !function (e, r) { module.exports = r(); }(commonjsGlobal, function () { return function (e) { function r(n) { if (t[n])
        return t[n].exports; var o = t[n] = { exports: {}, id: n, loaded: !1 }; return e[n].call(o.exports, o, o.exports, r), o.loaded = !0, o.exports; } var t = {}; return r.m = e, r.c = t, r.p = "", r(0); }([function (e, r, t) { function n(e) { return e && e.__esModule ? e : { default: e }; } function o(e) { var r = e.inputElement, t = (0, u.default)(e), n = function (e) { var r = e.target.value; return t.update(r); }; return r.addEventListener("input", n), t.update(r.value), { textMaskInputElement: t, destroy: function () { r.removeEventListener("input", n); } }; } Object.defineProperty(r, "__esModule", { value: !0 }), r.conformToMask = void 0, r.maskInput = o; var i = t(2); Object.defineProperty(r, "conformToMask", { enumerable: !0, get: function () { return n(i).default; } }); var a = t(5), u = n(a); r.default = o; }, function (e, r) { Object.defineProperty(r, "__esModule", { value: !0 }), r.placeholderChar = "_", r.strFunction = "function"; }, function (e, r, t) { function n() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u, t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; if (!(0, i.isArray)(r)) {
            if (("undefined" == typeof r ? "undefined" : o(r)) !== a.strFunction)
                throw new Error("Text-mask:conformToMask; The mask property must be an array.");
            r = r(e, t), r = (0, i.processCaretTraps)(r).maskWithoutCaretTraps;
        } var n = t.guide, s = void 0 === n || n, f = t.previousConformedValue, d = void 0 === f ? l : f, c = t.placeholderChar, p = void 0 === c ? a.placeholderChar : c, v = t.placeholder, h = void 0 === v ? (0, i.convertMaskToPlaceholder)(r, p) : v, m = t.currentCaretPosition, y = t.keepCharPositions, g = s === !1 && void 0 !== d, b = e.length, C = d.length, k = h.length, x = r.length, P = b - C, T = P > 0, O = m + (T ? -P : 0), M = O + Math.abs(P); if (y === !0 && !T) {
            for (var w = l, S = O; S < M; S++)
                h[S] === p && (w += p);
            e = e.slice(0, O) + w + e.slice(O, b);
        } for (var _ = e.split(l).map(function (e, r) { return { char: e, isNew: r >= O && r < M }; }), j = b - 1; j >= 0; j--) {
            var V = _[j].char;
            if (V !== p) {
                var A = j >= O && C === x;
                V === h[A ? j - P : j] && _.splice(j, 1);
            }
        } var E = l, N = !1; e: for (var F = 0; F < k; F++) {
            var I = h[F];
            if (I === p) {
                if (_.length > 0)
                    for (; _.length > 0;) {
                        var L = _.shift(), R = L.char, J = L.isNew;
                        if (R === p && g !== !0) {
                            E += p;
                            continue e;
                        }
                        if (r[F].test(R)) {
                            if (y === !0 && J !== !1 && d !== l && s !== !1 && T) {
                                for (var W = _.length, q = null, z = 0; z < W; z++) {
                                    var B = _[z];
                                    if (B.char !== p && B.isNew === !1)
                                        break;
                                    if (B.char === p) {
                                        q = z;
                                        break;
                                    }
                                }
                                null !== q ? (E += R, _.splice(q, 1)) : F--;
                            }
                            else
                                E += R;
                            continue e;
                        }
                        N = !0;
                    }
                g === !1 && (E += h.substr(F, k));
                break;
            }
            E += I;
        } if (g && T === !1) {
            for (var D = null, G = 0; G < E.length; G++)
                h[G] === p && (D = G);
            E = null !== D ? E.substr(0, D + 1) : l;
        } return { conformedValue: E, meta: { someCharsRejected: N } }; } Object.defineProperty(r, "__esModule", { value: !0 }); var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e; } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; }; r.default = n; var i = t(3), a = t(1), u = [], l = ""; }, function (e, r, t) { function n() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.placeholderChar; if (!o(e))
            throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array."); if (e.indexOf(r) !== -1)
            throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n" + ("The placeholder character that was received is: " + JSON.stringify(r) + "\n\n") + ("The mask that was received is: " + JSON.stringify(e))); return e.map(function (e) { return e instanceof RegExp ? r : e; }).join(""); } function o(e) { return Array.isArray && Array.isArray(e) || e instanceof Array; } function i(e) { return "string" == typeof e || e instanceof String; } function a(e) { return "number" == typeof e && void 0 === e.length && !isNaN(e); } function u(e) { for (var r = [], t = void 0; t = e.indexOf(f), t !== -1;)
            r.push(t), e.splice(t, 1); return { maskWithoutCaretTraps: e, indexes: r }; } Object.defineProperty(r, "__esModule", { value: !0 }), r.convertMaskToPlaceholder = n, r.isArray = o, r.isString = i, r.isNumber = a, r.processCaretTraps = u; var l = t(1), s = [], f = "[]"; }, function (e, r) { function t(e) { var r = e.previousConformedValue, t = void 0 === r ? o : r, i = e.previousPlaceholder, a = void 0 === i ? o : i, u = e.currentCaretPosition, l = void 0 === u ? 0 : u, s = e.conformedValue, f = e.rawValue, d = e.placeholderChar, c = e.placeholder, p = e.indexesOfPipedChars, v = void 0 === p ? n : p, h = e.caretTrapIndexes, m = void 0 === h ? n : h; if (0 === l || !f.length)
            return 0; var y = f.length, g = t.length, b = c.length, C = s.length, k = y - g, x = k > 0, P = 0 === g, T = k > 1 && !x && !P; if (T)
            return l; var O = x && (t === s || s === c), M = 0, w = void 0, S = void 0; if (O)
            M = l - k;
        else {
            var _ = s.toLowerCase(), j = f.toLowerCase(), V = j.substr(0, l).split(o), A = V.filter(function (e) { return _.indexOf(e) !== -1; });
            S = A[A.length - 1];
            var E = a.substr(0, A.length).split(o).filter(function (e) { return e !== d; }).length, N = c.substr(0, A.length).split(o).filter(function (e) { return e !== d; }).length, F = N !== E, I = void 0 !== a[A.length - 1] && void 0 !== c[A.length - 2] && a[A.length - 1] !== d && a[A.length - 1] !== c[A.length - 1] && a[A.length - 1] === c[A.length - 2];
            !x && (F || I) && E > 0 && c.indexOf(S) > -1 && void 0 !== f[l] && (w = !0, S = f[l]);
            for (var L = v.map(function (e) { return _[e]; }), R = L.filter(function (e) { return e === S; }).length, J = A.filter(function (e) { return e === S; }).length, W = c.substr(0, c.indexOf(d)).split(o).filter(function (e, r) { return e === S && f[r] !== e; }).length, q = W + J + R + (w ? 1 : 0), z = 0, B = 0; B < C; B++) {
                var D = _[B];
                if (M = B + 1, D === S && z++, z >= q)
                    break;
            }
        } if (x) {
            for (var G = M, H = M; H <= b; H++)
                if (c[H] === d && (G = H), c[H] === d || m.indexOf(H) !== -1 || H === b)
                    return G;
        }
        else if (w) {
            for (var K = M - 1; K >= 0; K--)
                if (s[K] === S || m.indexOf(K) !== -1 || 0 === K)
                    return K;
        }
        else
            for (var Q = M; Q >= 0; Q--)
                if (c[Q - 1] === d || m.indexOf(Q) !== -1 || 0 === Q)
                    return Q; } Object.defineProperty(r, "__esModule", { value: !0 }), r.default = t; var n = [], o = ""; }, function (e, r, t) { function n(e) { return e && e.__esModule ? e : { default: e }; } function o(e) { var r = { previousConformedValue: void 0, previousPlaceholder: void 0 }; return { state: r, update: function (t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e, o = n.inputElement, s = n.mask, d = n.guide, m = n.pipe, g = n.placeholderChar, b = void 0 === g ? v.placeholderChar : g, C = n.keepCharPositions, k = void 0 !== C && C, x = n.showMask, P = void 0 !== x && x; if ("undefined" == typeof t && (t = o.value), t !== r.previousConformedValue) {
                ("undefined" == typeof s ? "undefined" : l(s)) === y && void 0 !== s.pipe && void 0 !== s.mask && (m = s.pipe, s = s.mask);
                var T = void 0, O = void 0;
                if (s instanceof Array && (T = (0, p.convertMaskToPlaceholder)(s, b)), s !== !1) {
                    var M = a(t), w = o.selectionEnd, S = r.previousConformedValue, _ = r.previousPlaceholder, j = void 0;
                    if (("undefined" == typeof s ? "undefined" : l(s)) === v.strFunction) {
                        if (O = s(M, { currentCaretPosition: w, previousConformedValue: S, placeholderChar: b }), O === !1)
                            return;
                        var V = (0, p.processCaretTraps)(O), A = V.maskWithoutCaretTraps, E = V.indexes;
                        O = A, j = E, T = (0, p.convertMaskToPlaceholder)(O, b);
                    }
                    else
                        O = s;
                    var N = { previousConformedValue: S, guide: d, placeholderChar: b, pipe: m, placeholder: T, currentCaretPosition: w, keepCharPositions: k }, F = (0, c.default)(M, O, N), I = F.conformedValue, L = ("undefined" == typeof m ? "undefined" : l(m)) === v.strFunction, R = {};
                    L && (R = m(I, u({ rawValue: M }, N)), R === !1 ? R = { value: S, rejected: !0 } : (0, p.isString)(R) && (R = { value: R }));
                    var J = L ? R.value : I, W = (0, f.default)({ previousConformedValue: S, previousPlaceholder: _, conformedValue: J, placeholder: T, rawValue: M, currentCaretPosition: w, placeholderChar: b, indexesOfPipedChars: R.indexesOfPipedChars, caretTrapIndexes: j }), q = J === T && 0 === W, z = P ? T : h, B = q ? z : J;
                    r.previousConformedValue = B, r.previousPlaceholder = T, o.value !== B && (o.value = B, i(o, W));
                }
            } } }; } function i(e, r) { document.activeElement === e && (g ? b(function () { return e.setSelectionRange(r, r, m); }, 0) : e.setSelectionRange(r, r, m)); } function a(e) { if ((0, p.isString)(e))
            return e; if ((0, p.isNumber)(e))
            return String(e); if (void 0 === e || null === e)
            return h; throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n " + JSON.stringify(e)); } Object.defineProperty(r, "__esModule", { value: !0 }); var u = Object.assign || function (e) { for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        } return e; }, l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e; } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; }; r.default = o; var s = t(4), f = n(s), d = t(2), c = n(d), p = t(3), v = t(1), h = "", m = "none", y = "object", g = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent), b = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : setTimeout; }]); });
});
var textMask = unwrapExports(vanillaTextMask);
var createAutoCorrectedDatePipe = createCommonjsModule(function (module, exports) {
    !function (e, t) { module.exports = t(); }(commonjsGlobal, function () { return function (e) { function t(n) { if (r[n])
        return r[n].exports; var o = r[n] = { exports: {}, id: n, loaded: !1 }; return e[n].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports; } var r = {}; return t.m = e, t.c = r, t.p = "", t(0); }([function (e, t, r) { e.exports = r(1); }, function (e, t) { function r() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "mm dd yyyy", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = t.minYear, i = void 0 === r ? 1 : r, d = t.maxYear, u = void 0 === d ? 9999 : d, s = e.split(/[^dmyHMS]+/).sort(function (e, t) { return o.indexOf(e) - o.indexOf(t); }); return function (t) { var r = [], o = { dd: 31, mm: 12, yy: 99, yyyy: u, HH: 23, MM: 59, SS: 59 }, d = { dd: 1, mm: 1, yy: 0, yyyy: i, HH: 0, MM: 0, SS: 0 }, a = t.split(""); s.forEach(function (t) { var n = e.indexOf(t), i = parseInt(o[t].toString().substr(0, 1), 10); parseInt(a[n], 10) > i && (a[n + 1] = a[n], a[n] = 0, r.push(n)); }); var y = 0, f = s.some(function (r) { var s = e.indexOf(r), a = r.length, f = t.substr(s, a).replace(/\D/g, ""), p = parseInt(f, 10); "mm" === r && (y = p || 0); var c = "dd" === r ? n[y] : o[r]; if ("yyyy" === r && (1 !== i || 9999 !== u)) {
            var l = parseInt(o[r].toString().substring(0, f.length), 10), m = parseInt(d[r].toString().substring(0, f.length), 10);
            return p < m || p > l;
        } return p > c || f.length === a && p < d[r]; }); return !f && { value: a.join(""), indexesOfPipedChars: r }; }; } Object.defineProperty(t, "__esModule", { value: !0 }), t.default = r; var n = [31, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], o = ["yyyy", "yy", "mm", "dd", "HH", "MM", "SS"]; }]); });
});
var createAutoCorrectedDatePipe$1 = unwrapExports(createAutoCorrectedDatePipe);
var createNumberMask = createCommonjsModule(function (module, exports) {
    !function (e, t) { module.exports = t(); }(commonjsGlobal, function () { return function (e) { function t(n) { if (o[n])
        return o[n].exports; var i = o[n] = { exports: {}, id: n, loaded: !1 }; return e[n].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports; } var o = {}; return t.m = e, t.c = o, t.p = "", t(0); }([function (e, t, o) { e.exports = o(2); }, , function (e, t) { function o() { function e() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l, t = e.length; if (e === l || e[0] === y[0] && 1 === t)
            return y.split(l).concat([v]).concat(g.split(l)); if (e === k && M)
            return y.split(l).concat(["0", k, v]).concat(g.split(l)); var o = e[0] === s && q; o && (e = e.toString().substr(1)); var c = e.lastIndexOf(k), u = c !== -1, a = void 0, b = void 0, h = void 0; if (e.slice(T * -1) === g && (e = e.slice(0, T * -1)), u && (M || $) ? (a = e.slice(e.slice(0, R) === y ? R : 0, c), b = e.slice(c + 1, t), b = n(b.replace(f, l))) : a = e.slice(0, R) === y ? e.slice(R) : e, P && ("undefined" == typeof P ? "undefined" : r(P)) === p) {
            var S = "." === j ? "[.]" : "" + j, w = (a.match(new RegExp(S, "g")) || []).length;
            a = a.slice(0, P + w * Z);
        } return a = a.replace(f, l), E || (a = a.replace(/^0+(0$|[^0])/, "$1")), a = x ? i(a, j) : a, h = n(a), (u && M || $ === !0) && (e[c - 1] !== k && h.push(m), h.push(k, m), b && (("undefined" == typeof L ? "undefined" : r(L)) === p && (b = b.slice(0, L)), h = h.concat(b)), $ === !0 && e[c - 1] === k && h.push(v)), R > 0 && (h = y.split(l).concat(h)), o && (h.length === R && h.push(v), h = [d].concat(h)), g.length > 0 && (h = h.concat(g.split(l))), h; } var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = t.prefix, y = void 0 === o ? c : o, b = t.suffix, g = void 0 === b ? l : b, h = t.includeThousandsSeparator, x = void 0 === h || h, S = t.thousandsSeparatorSymbol, j = void 0 === S ? u : S, w = t.allowDecimal, M = void 0 !== w && w, N = t.decimalSymbol, k = void 0 === N ? a : N, D = t.decimalLimit, L = void 0 === D ? 2 : D, O = t.requireDecimal, $ = void 0 !== O && O, _ = t.allowNegative, q = void 0 !== _ && _, B = t.allowLeadingZeroes, E = void 0 !== B && B, I = t.integerLimit, P = void 0 === I ? null : I, R = y && y.length || 0, T = g && g.length || 0, Z = j && j.length || 0; return e.instanceOf = "createNumberMask", e; } function n(e) { return e.split(l).map(function (e) { return v.test(e) ? v : e; }); } function i(e, t) { return e.replace(/\B(?=(\d{3})+(?!\d))/g, t); } Object.defineProperty(t, "__esModule", { value: !0 }); var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e; } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; }; t.default = o; var c = "$", l = "", u = ",", a = ".", s = "-", d = /-/, f = /\D+/g, p = "number", v = /\d/, m = "[]"; }]); });
});
var createNumberMask$1 = unwrapExports(createNumberMask);
var emailMask = createCommonjsModule(function (module, exports) {
    !function (e, t) { module.exports = t(); }(commonjsGlobal, function () { return function (e) { function t(r) { if (n[r])
        return n[r].exports; var u = n[r] = { exports: {}, id: r, loaded: !1 }; return e[r].call(u.exports, u, u.exports, t), u.loaded = !0, u.exports; } var n = {}; return t.m = e, t.c = n, t.p = "", t(0); }([function (e, t, n) { e.exports = n(3); }, , , function (e, t, n) { function r(e) { return e && e.__esModule ? e : { default: e }; } function u(e, t) { e = e.replace(y, h); var n = t.placeholderChar, r = t.currentCaretPosition, u = e.indexOf(x), s = e.lastIndexOf(d), f = s < u ? -1 : s, p = o(e, u + 1, x), g = o(e, f - 1, d), v = c(e, u), m = i(e, u, f, n), O = a(e, f, n, r); v = l(v), m = l(m), O = l(O, !0); var b = v.concat(p).concat(m).concat(g).concat(O); return b; } function o(e, t, n) { var r = []; return e[t] === n ? r.push(n) : r.push(g, n), r.push(g), r; } function c(e, t) { return t === -1 ? e : e.slice(0, t); } function i(e, t, n, r) { var u = h; return t !== -1 && (u = n === -1 ? e.slice(t + 1, e.length) : e.slice(t + 1, n)), u = u.replace(new RegExp("[\\s" + r + "]", m), h), u === x ? p : u.length < 1 ? v : u[u.length - 1] === d ? u.slice(0, u.length - 1) : u; } function a(e, t, n, r) { var u = h; return t !== -1 && (u = e.slice(t + 1, e.length)), u = u.replace(new RegExp("[\\s" + n + ".]", m), h), 0 === u.length ? e[t - 1] === d && r !== e.length ? p : h : u; } function l(e, t) { return e.split(h).map(function (e) { return e === v ? e : t ? b : O; }); } Object.defineProperty(t, "__esModule", { value: !0 }); var s = n(4), f = r(s), p = "*", d = ".", h = "", x = "@", g = "[]", v = " ", m = "g", O = /[^\s]/, b = /[^.\s]/, y = /\s/g; t.default = { mask: u, pipe: f.default }; }, function (e, t) { function n(e, t) { var n = t.currentCaretPosition, o = t.rawValue, p = t.previousConformedValue, d = t.placeholderChar, h = e; h = r(h); var x = h.indexOf(i), g = null === o.match(new RegExp("[^@\\s." + d + "]")); if (g)
            return c; if (h.indexOf(l) !== -1 || x !== -1 && n !== x + 1 || o.indexOf(u) === -1 && p !== c && o.indexOf(a) !== -1)
            return !1; var v = h.indexOf(u), m = h.slice(v + 1, h.length); return (m.match(f) || s).length > 1 && h.substr(-1) === a && n !== o.length && (h = h.slice(0, h.length - 1)), h; } function r(e) { var t = 0; return e.replace(o, function () { return t++, 1 === t ? u : c; }); } Object.defineProperty(t, "__esModule", { value: !0 }), t.default = n; var u = "@", o = /@/g, c = "", i = "@.", a = ".", l = "..", s = [], f = /\./g; }]); });
});
var emailMask$1 = unwrapExports(emailMask);
var types = {
    'Date': {
        mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
        pipe: createAutoCorrectedDatePipe$1('mm/dd/yyyy'),
        guide: true,
        keepCharPositions: true,
        showMask: false
    },
    'Phone': {
        mask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
        guide: true,
        keepCharPositions: false,
        showMask: false
    },
    'Money': {
        mask: createNumberMask$1({
            allowDecimal: true
        }),
        guide: true,
        keepCharPositions: false,
        showMask: false
    },
    'Percent': {
        mask: createNumberMask$1({
            integerLimit: 3,
            prefix: '',
            suffix: '%'
        }),
        guide: true,
        keepCharPositions: false,
        showMask: false
    },
    'Email': {
        mask: emailMask$1,
        guide: true,
        keepCharPositions: false,
        showMask: false
    },
    'Zipcode': {
        mask: [/\d/, /\d/, /\d/, /\d/, /\d/],
        guide: false,
        keepCharPositions: false,
        showMask: false
    },
    'CreditCard': {
        mask: [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/],
        guide: false,
        keepCharPositions: false,
        showMask: false
    }
};
var MaskedInput = /** @class */ (function () {
    function MaskedInput(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.placeholder = '';
        this.elementclass = '';
        this.value = '';
        this.type = '';
        this.inputmode = 'text';
        this.name = 'input';
        this.pattern = '';
        this.handleBlur = function () {
            if (_this.mask) {
                _this.maskedBlur.emit(_this.mask.textMaskInputElement.state.previousConformedValue);
            }
        };
        this.handleInput = function (evt) {
            _this.inputChange.emit(evt.target.value);
        };
        this.maskedBlur = createEvent(this, "maskedBlur", 7);
        this.inputChange = createEvent(this, "inputChange", 7);
    }
    MaskedInput.prototype.componentDidLoad = function () {
        if (this.type && types[this.type]) {
            this.createTextMask(Object.assign(Object.assign({}, types[this.type]), this.options));
        }
        else if (this.options) {
            this.createTextMask(this.options);
        }
    };
    MaskedInput.prototype.createTextMask = function (options) {
        var inputElement = this.root.querySelector('input');
        this.mask = textMask(Object.assign({ inputElement: inputElement }, options));
    };
    MaskedInput.prototype.handleValue = function (v) {
        if (this.mask) {
            this.mask.textMaskInputElement.update(v);
        }
        else {
            var inputElement = this.root.querySelector('input');
            inputElement.value = v;
        }
    };
    MaskedInput.prototype.render = function () {
        return (h(Host, null, h("input", { class: this.elementclass, placeholder: this.placeholder, type: "text", onBlur: this.handleBlur, onInput: this.handleInput, pattern: this.pattern, inputmode: this.inputmode, id: this.name })));
    };
    Object.defineProperty(MaskedInput.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskedInput, "watchers", {
        get: function () {
            return {
                "value": ["handleValue"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return MaskedInput;
}());
var MortarAlert = /** @class */ (function () {
    function MortarAlert(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.kind = 'success';
        this.open = false;
        this.headline = '';
        this.btnlabel = 'Close Window';
        this.btnkind = 'text';
        this.overlay = true;
        this.className = function () {
            return classnames('alert', "alert-" + _this.kind, {
                'show': _this.open === true
            });
        };
        this.iconKind = function () {
            switch (_this.kind) {
                case "error":
                    return "close";
                case "warning":
                    return "warning";
                case "success":
                    return "check";
                default:
                    return "close";
            }
        };
        this.overlayClassName = function () {
            return classnames('alert-overlay', {
                'show': _this.open === true && _this.overlay === true
            });
        };
        this.handleClose = function () {
            _this.open = false;
        };
    }
    MortarAlert.prototype.handleOpen = function (openVal) {
        var el = this.root.querySelector('.alert');
        if (!openVal) {
            focusLock.off(el);
        }
        else {
            focusLock.on(el);
            var btn_1 = el.querySelector('.alert-close');
            setTimeout(function () {
                if (btn_1)
                    btn_1.focus();
            }, 10);
        }
    };
    MortarAlert.prototype.render = function () {
        return (h(Host, null, h("div", { class: this.className(), role: "dialog", "aria-modal": "true", "aria-labelledby": "alert-header", "aria-describedby": "alert-description" }, h("mortar-icon", { kind: this.iconKind() }), h("div", { id: "alert-header", class: "header3" }, h("slot", { name: "headline" })), h("div", { id: "alert-description" }, h("slot", { name: "copy" })), this.btnlabel && h("mortar-button", { elementclass: "alert-close", kind: this.btnkind, onClick: this.handleClose }, this.btnlabel), h("slot", { name: "action" })), h("div", { class: this.overlayClassName(), onClick: this.handleClose })));
    };
    Object.defineProperty(MortarAlert.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MortarAlert, "watchers", {
        get: function () {
            return {
                "open": ["handleOpen"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return MortarAlert;
}());
var MortarButton = /** @class */ (function () {
    function MortarButton(hostRef) {
        registerInstance(this, hostRef);
        this.kind = 'primary';
        this.size = 'md';
        this.disabled = false;
        this.href = '';
        this.target = '_self';
        this.elementclass = '';
    }
    MortarButton.prototype.className = function () {
        return classnames('btn', "btn-" + this.kind, "btn-" + this.size, this.elementclass, {
            'disabled': this.disabled === true
        });
    };
    MortarButton.prototype.render = function () {
        return (h(Host, null, !this.href &&
            h("button", { class: this.className(), disabled: this.disabled === true }, h("slot", null)), this.href &&
            h("a", { class: this.className(), href: this.href, target: this.target }, h("slot", null))));
    };
    return MortarButton;
}());
var MortarCheckbox = /** @class */ (function () {
    function MortarCheckbox(hostRef) {
        registerInstance(this, hostRef);
        this.label = '';
        this.haserror = false;
        this.error = '';
    }
    MortarCheckbox.prototype.render = function () {
        return (h("mortar-form-element", { legend: this.label, haserror: this.haserror, error: this.error, elementclass: "checkbox" }, h("slot", null)));
    };
    return MortarCheckbox;
}());
var MortarCheckboxItem = /** @class */ (function () {
    function MortarCheckboxItem(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.label = '';
        this.value = '';
        this.disabled = false;
        this.required = true;
        this.group = '';
        this.name = '';
        this.checked = false;
        this.indeterminate = false;
        this.haserror = false;
        this.className = function () {
            return classnames({
                'checkbox-default': _this.indeterminate !== true,
                'checkbox-indeterminate': _this.indeterminate === true,
                'error': _this.haserror === true
            });
        };
    }
    MortarCheckboxItem.prototype.render = function () {
        return (h(Host, null, h("input", { type: "checkbox", id: this.name, class: this.className(), disabled: this.disabled === true, required: this.required === true, checked: this.checked === true }), h("label", { htmlFor: this.name }, this.label)));
    };
    return MortarCheckboxItem;
}());
var MortarDatepicker = /** @class */ (function () {
    function MortarDatepicker(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.label = '';
        this.error = '';
        this.haserror = false;
        this.open = false;
        this.min = new Date(1900, 0, 1);
        this.max = new Date(2100, 11, 31);
        this.dateToString = function (date) {
            if (!date)
                return '';
            var m = date.getMonth() + 1;
            var ms = (m >= 10) ? m : '0' + m;
            var d = date.getDate();
            var ds = (d >= 10) ? d : '0' + d;
            return ms + "/" + ds + "/" + date.getFullYear();
        };
        this.valueString = '';
        this.mask = 'Date';
        this.required = true;
        this.disabled = false;
        this.placeholder = "mm/dd/yyyy";
        this.name = '';
        this.header = true;
        this.handleOpen = function () {
            _this.open = !_this.open;
        };
        this.handleSelect = function (evt) {
            _this.value = evt.detail;
            _this.selectDate.emit(evt.detail);
        };
        this.handleClear = function () {
            _this.value = null;
            _this.open = false;
            _this.clearDate.emit();
            _this.setToggleFocus();
        };
        this.handleCalendarRef = function (ref) {
            _this.calendarElement = ref;
        };
        this.handleToggleRef = function (ref) {
            _this.toggleElement = ref;
        };
        this.handleClickDate = function () {
            _this.open = false;
        };
        this.handleKeyboardSelect = function () {
            _this.open = false;
            _this.setToggleFocus();
        };
        this.handleKeyboardExit = function () {
            _this.open = false;
            _this.setToggleFocus();
        };
        this.setToggleFocus = function () {
            var el = _this.toggleElement;
            setTimeout(function () {
                el.focus();
            }, 10);
        };
        this.handleBlur = function (evt) {
            var os = _this.valueString;
            _this.valueString = evt.detail;
            setTimeout(function () {
                _this.updateValueFromInput(evt.detail, os);
            }, 10);
        };
        this.updateValueFromInput = function (val, os) {
            if (val) {
                var d = val.split("/").map(function (v) {
                    if (v) {
                        if (Number(v)) {
                            return v;
                        }
                        else if (Number(v.slice(1))) {
                            return v.slice(1);
                        }
                        else if (Number(v.slice(0, -1))) {
                            return v.slice(0, -1);
                        }
                        else {
                            return v;
                        }
                    }
                    return v;
                }).join("/");
                var nd = new Date(d);
                if (nd.getTime() && nd > _this.min && nd < _this.max) {
                    _this.valueString = _this.dateToString(nd);
                    _this.value = nd;
                    _this.selectDate.emit(nd);
                }
                else {
                    _this.valueString = os;
                }
            }
        };
        this.selectDate = createEvent(this, "selectDate", 7);
        this.clearDate = createEvent(this, "clearDate", 7);
        this.inputChange = createEvent(this, "inputChange", 7);
        this.dateOutOfRange = createEvent(this, "dateOutOfRange", 7);
    }
    MortarDatepicker.prototype.handleOutsideClick = function (evt) {
        if (this.open) {
            if (!(evt.target === this.toggleElement || this.toggleElement.contains(evt.target)) && !(evt.target === this.calendarElement || this.calendarElement.contains(evt.target))) {
                this.open = false;
            }
        }
    };
    MortarDatepicker.prototype.componentWillLoad = function () {
        if (this.value) {
            this.valueString = this.dateToString(this.value);
        }
    };
    MortarDatepicker.prototype.handleValue = function (v) {
        this.valueString = this.dateToString(v);
    };
    MortarDatepicker.prototype.render = function () {
        return (h("mortar-form-element", { label: this.label, haserror: this.haserror, error: this.error, elementclass: "datepicker", name: this.name }, h("div", { class: "datepicker-outer" }, h("div", { class: "datepicker-inner" }, h("masked-input", { placeholder: this.placeholder, value: this.valueString, elementclass: "datepicker-input", type: this.mask, onMaskedBlur: this.handleBlur, pattern: "[0-9]*", inputmode: "numeric", name: this.name }), h("button", { class: "datepicker-toggle", onClick: this.handleOpen, ref: this.handleToggleRef }, h("mortar-icon", { kind: "calendar" }))), h("mortar-datepicker-calendar", { ref: this.handleCalendarRef, minDate: this.min, maxDate: this.max, onSelectDate: this.handleSelect, onClearDate: this.handleClear, onClickDate: this.handleClickDate, onKeyboardSelect: this.handleKeyboardSelect, onKeyboardExit: this.handleKeyboardExit, selected: this.value, open: this.open, header: this.header }))));
    };
    Object.defineProperty(MortarDatepicker, "watchers", {
        get: function () {
            return {
                "value": ["handleValue"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return MortarDatepicker;
}());
var MortarDatepicker$1 = /** @class */ (function () {
    function MortarDatepicker$1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.days = ['S', 'M', 'T', 'W', 'R', 'F', 'S'];
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.monthPlaceholder = 'Month';
        this.yearPlaceholder = 'Year';
        this.open = false;
        this.focused = false;
        this.highlight = -1;
        this.header = true;
        this.embed = false;
        this.customClass = function (_year, _month, _date) { return ''; };
        /***
         * Dropdowns
         * ***/
        this.getAvailableMonths = function () {
            return _this.months.map(function (v, k) { return (h("mortar-dropdown-item", { value: "" + k, label: v })); });
        };
        this.getAvailableYears = function () {
            var today = new Date();
            var min = _this.minDate || new Date(today.getFullYear() - 5, today.getMonth(), today.getDate());
            var max = _this.maxDate || new Date(today.getFullYear() + 5, today.getMonth(), today.getDate());
            var minYear = min.getFullYear();
            var maxYear = max.getFullYear();
            var range = maxYear - minYear;
            var arr = Array.apply(null, Array(range + 1));
            return arr.map(function (_v, k) {
                var s = "" + (minYear + k);
                return (h("mortar-dropdown-item", { value: s, label: s }));
            });
        };
        this.getMonthValue = function () {
            var v = _this.current || _this.selected || _this.getDefaultDate();
            return "" + v.getMonth();
        };
        this.getYearValue = function () {
            var v = _this.current || _this.selected || _this.getDefaultDate();
            return "" + v.getFullYear();
        };
        /***
         * Clear Value
         * ***/
        this.handleClear = function () {
            _this.current = null;
            _this.selected = null;
            _this.clearDate.emit();
        };
        /***
        * Change Current Month
        * ***/
        this.changeCurrent = function (month, year, highlight) {
            if (highlight === void 0) { highlight = -1; }
            var c = new Date(year, month);
            if (_this.minDate) {
                var min = new Date(_this.minDate.getFullYear(), _this.minDate.getMonth());
                if (c < min) {
                    c = min;
                }
            }
            if (_this.maxDate) {
                var max = new Date(_this.maxDate.getFullYear(), _this.maxDate.getMonth());
                if (c > max) {
                    c = max;
                }
            }
            _this.current = c;
            _this.highlight = highlight;
        };
        //Next & Previous Buttons, change current by val
        this.handleChangeMonth = function (val) {
            var v = _this.current || _this.selected || _this.getDefaultDate();
            var m = v.getMonth() + val;
            var y = v.getFullYear();
            if (m === -1) {
                m = 11;
                y--;
            }
            if (m === 12) {
                m = 0;
                y++;
            }
            _this.changeCurrent(m, y);
        };
        //Month Dropdown Select Month
        this.handleChangeCurrentMonth = function (evt) {
            var v = _this.current || _this.selected || _this.getDefaultDate();
            _this.changeCurrent(evt.detail.value, v.getFullYear());
        };
        //Year Dropdown Select Year
        this.handleChangeCurrentYear = function (evt) {
            var v = _this.current || _this.selected || _this.getDefaultDate();
            _this.changeCurrent(v.getMonth(), evt.detail.value);
        };
        //Display Current Month
        this.getCurrentMonth = function () {
            var v = _this.current || _this.selected || _this.getDefaultDate();
            return _this.months[v.getMonth()] + " " + v.getFullYear();
        };
        //Get Default Date if Today is
        this.getDefaultDate = function () {
            var d = new Date();
            if (_this.minDate && d < _this.minDate) {
                d = _this.minDate;
            }
            if (_this.maxDate && d > _this.maxDate) {
                d = _this.maxDate;
            }
            return d;
        };
        /***
         * Select A Day
         * ***/
        this.handleClickDay = function (y, m, d) {
            var s = new Date(y, m, d);
            _this.selected = s;
            _this.selectDate.emit(s);
            _this.clickDate.emit(s);
        };
        //Keyboard Select - Doesn't fire click event (used to close)
        this.handleSelectDay = function (y, m, d, evt) {
            var s = new Date(y, m, d);
            _this.selected = s;
            _this.selectDate.emit(s);
            _this.keyboardSelect.emit(evt);
        };
        /***
         * Focus Trap
         */
        this.handleCalendarFocus = function () {
            _this.focused = true;
        };
        this.handleCalendarBlur = function () {
            _this.focused = false;
        };
        this.getDaysInMonth = function (d) {
            var first = new Date(d.getFullYear(), d.getMonth()).getDay();
            var length = 40 - new Date(d.getFullYear(), d.getMonth(), 40).getDate();
            var total = first + length;
            var rows = 6;
            var year = d.getFullYear();
            var month = d.getMonth();
            var previous = {
                month: (month > 0) ? month - 1 : 11,
                year: (month > 0) ? year : year - 1,
                length: 0
            };
            previous.length = 40 - new Date(previous.year, previous.month, 40).getDate();
            var next = {
                month: (month < 11) ? month + 1 : 0,
                year: (month < 11) ? year : year + 1,
                length: 0
            };
            next.length = 40 - new Date(next.year, next.month, 40).getDate();
            return {
                first: first,
                length: length,
                total: total,
                rows: rows,
                year: year,
                month: month,
                previous: previous,
                next: next
            };
        };
        /***
         * Month Display
         * ***/
        this.getCalendarDays = function () {
            var v = _this.current || _this.selected || _this.getDefaultDate();
            var cm = _this.getDaysInMonth(v);
            var arr = Array.apply(null, Array(cm.rows));
            var current = 0;
            var next = 0;
            return arr.map(function (_r, r) {
                var rArr = Array.apply(null, Array(7));
                return (h("div", { class: "datepicker-content-row" }, rArr.map(function (_c, c) {
                    if (r === 0 && c < cm.first) {
                        var pD = cm.previous.length - (cm.first - 1 - c);
                        return (h("div", { class: "datepicker-content-item datepicker-content-out " + _this.customClass(cm.previous.year, cm.previous.month, pD) }, h("div", { class: "datepicker-content-display" }, h("span", null, pD))));
                    }
                    else if (current < cm.length) {
                        current++;
                        var cd_1 = current;
                        if (_this.isAvailable(cm.year, cm.month, cd_1)) {
                            var cn = _this.customClass(cm.year, cm.month, cd_1);
                            if (_this.isToday(cm.year, cm.month, cd_1)) {
                                cn += ' datepicker-today';
                            }
                            if (_this.isSelected(cm.year, cm.month, cd_1)) {
                                cn += ' datepicker-selected';
                            }
                            if (_this.highlight === cd_1 && _this.focused) {
                                cn += ' datepicker-highlight';
                            }
                            return (h("div", { class: "datepicker-content-item " + cn, onClick: function () { return _this.handleClickDay(cm.year, cm.month, cd_1); } }, h("div", { class: "datepicker-content-display" }, h("span", null, cd_1))));
                        }
                        else {
                            return (h("div", { class: "datepicker-content-item datepicker-content-out " + _this.customClass(cm.year, cm.month, cd_1) }, h("div", { class: "datepicker-content-display" }, h("span", null, cd_1))));
                        }
                    }
                    else {
                        next++;
                        return (h("div", { class: "datepicker-content-item datepicker-content-out " + _this.customClass(cm.next.year, cm.next.month, next) }, h("div", { class: "datepicker-content-display" }, h("span", null, next))));
                    }
                })));
            });
        };
        this.isToday = function (y, m, d) {
            var today = new Date();
            return (y === today.getFullYear() && m === today.getMonth() && d === today.getDate());
        };
        this.isSelected = function (y, m, d) {
            return (_this.selected && y === _this.selected.getFullYear() && m === _this.selected.getMonth() && d === _this.selected.getDate());
        };
        this.isAvailable = function (y, m, d) {
            var v = new Date(y, m, d);
            if (_this.minDate && _this.maxDate) {
                return (v >= _this.minDate && v <= _this.maxDate);
            }
            else if (_this.minDate) {
                return v >= _this.minDate;
            }
            else if (_this.maxDate) {
                return v <= _this.maxDate;
            }
            else {
                return true;
            }
        };
        /***
         * Render
         * ***/
        this.className = function () {
            return classnames('datepicker-list-outer', {
                'show': _this.open,
                'no-header': !_this.header && _this.embed,
                'embed': _this.embed
            });
        };
        this.clearDate = createEvent(this, "clearDate", 7);
        this.selectDate = createEvent(this, "selectDate", 7);
        this.clickDate = createEvent(this, "clickDate", 7);
        this.keyboardSelect = createEvent(this, "keyboardSelect", 7);
        this.keyboardExit = createEvent(this, "keyboardExit", 7);
    }
    MortarDatepicker$1.prototype.handleSelected = function (val) {
        if (!val) {
            this.current = null;
        }
    };
    MortarDatepicker$1.prototype.handleClose = function (openVal) {
        if (!openVal) {
            this.current = null;
            this.focused = false;
            focusLock.off(this.root);
        }
        else {
            focusLock.on(this.root);
            var r_1 = this.root;
            console.log("here", this.root, focusLock);
            setTimeout(function () {
                var el = r_1.querySelector('.datepicker-body');
                el.focus();
            }, 1);
        }
    };
    MortarDatepicker$1.prototype.handleFocused = function () {
        this.highlight = -1;
    };
    /***
     * Keyboard Navigate
     */
    MortarDatepicker$1.prototype.handleKeySelect = function (evt) {
        if (this.open && this.focused) {
            switch (evt.keyCode) {
                case 37:
                    this.changeHighlight(-1);
                    evt.preventDefault();
                    break;
                case 38:
                    this.changeHighlight(-7);
                    evt.preventDefault();
                    break;
                case 39:
                    this.changeHighlight(1);
                    evt.preventDefault();
                    break;
                case 40:
                    this.changeHighlight(7);
                    evt.preventDefault();
                    break;
                case 13:
                    this.selectHighlight(evt);
                    evt.preventDefault();
                    break;
                case 32:
                    this.selectHighlight(evt);
                    evt.preventDefault();
                    break;
            }
        }
        if (this.open && evt.keyCode === 27) {
            var dd = Array.prototype.slice.call(this.root.querySelectorAll('mortar-dropdown'));
            var e = dd.find(function (v) {
                var d = v.querySelector('.dropdown-outer');
                return d === document.activeElement;
            });
            if ((!e || !e.open) && !this.embed) {
                this.open = false;
                this.keyboardExit.emit();
            }
        }
    };
    MortarDatepicker$1.prototype.changeHighlight = function (amt) {
        var d = this.current || this.selected || this.getDefaultDate();
        var cm = this.getDaysInMonth(d);
        if (this.highlight === -1) {
            var today = new Date();
            if (this.selected && this.selected.getMonth() === cm.month && this.selected.getFullYear() === cm.year) {
                this.highlight = this.selected.getDate();
            }
            else if (today.getMonth() === cm.month && today.getFullYear() === cm.year) {
                this.highlight = today.getDate();
            }
            else {
                this.highlight = Math.floor(cm.length / 2);
            }
        }
        this.highlight += amt;
        if (this.highlight <= 0) {
            this.changeCurrent(cm.previous.month, cm.previous.year, cm.previous.length + this.highlight);
        }
        else if (this.highlight > cm.length) {
            this.changeCurrent(cm.next.month, cm.next.year, this.highlight - cm.length);
        }
    };
    MortarDatepicker$1.prototype.selectHighlight = function (evt) {
        if (this.highlight >= 0) {
            var d = this.current || this.selected || this.getDefaultDate();
            this.handleSelectDay(d.getFullYear(), d.getMonth(), this.highlight, evt);
        }
    };
    MortarDatepicker$1.prototype.render = function () {
        if (this.embed) {
            return h("fieldset", { class: "datepicker" }, this.renderEl());
        }
        else {
            return this.renderEl();
        }
    };
    MortarDatepicker$1.prototype.renderEl = function () {
        var _this = this;
        return (h("div", { class: this.className() }, this.header &&
            h("div", { class: "datepicker-selector" }, h("div", { class: "datepicker-select-dropdown" }, h("mortar-dropdown", { value: this.getMonthValue(), placeholder: this.monthPlaceholder, onItemSelect: this.handleChangeCurrentMonth }, this.getAvailableMonths())), h("div", { class: "datepicker-select-dropdown" }, h("mortar-dropdown", { value: this.getYearValue(), placeholder: this.yearPlaceholder, onItemSelect: this.handleChangeCurrentYear }, this.getAvailableYears())), h("div", { class: "datepicker-select-clear" }, h("button", { onClick: this.handleClear }, h("mortar-icon", { kind: "close", arialabel: "close" })))), h("div", { class: "datepicker-header" }, h("div", { class: "datepicker-header-previous" }, h("button", { onClick: function () { return _this.handleChangeMonth(-1); } }, h("mortar-icon", { kind: "back", arialabel: "Previous Month" }))), h("div", { class: "datepicker-header-display" }, h("span", null, this.getCurrentMonth())), h("div", { class: "datepicker-header-next" }, h("button", { onClick: function () { return _this.handleChangeMonth(1); } }, h("mortar-icon", { kind: "next", arialabel: "Next Month" })))), h("div", { class: "datepicker-body", tabindex: "0", onFocus: this.handleCalendarFocus, onBlur: this.handleCalendarBlur }, h("div", { class: "datepicker-days" }, this.days.map(function (v) {
            return (h("div", { class: "datepicker-day" }, h("div", { class: "datepicker-day-display" }, h("span", null, v))));
        })), h("div", { class: "datepicker-content" }, this.getCalendarDays()))));
    };
    Object.defineProperty(MortarDatepicker$1.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MortarDatepicker$1, "watchers", {
        get: function () {
            return {
                "selected": ["handleSelected"],
                "open": ["handleClose"],
                "focused": ["handleFocused"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return MortarDatepicker$1;
}());
var MortarDropdown = /** @class */ (function () {
    function MortarDropdown(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.size = 'md';
        this.label = '';
        this.help = '';
        this.haserror = false;
        this.error = '';
        this.placeholder = '';
        this.disabled = false;
        this.open = false;
        this.focused = false;
        this.highlight = -1;
        this.value = '';
        this.className = function () {
            return classnames('dropdown-outer', "" + _this.size, {
                'is-open': _this.open === true,
                'is-focused': _this.focused === true,
                'is-disabled': _this.disabled === true,
                'has-error': _this.haserror === true
            });
        };
        this.dropClassName = function () {
            return classnames('dropdown-list', 'dropdown-list-dropdown', {
                'is-active': _this.open === true
            });
        };
        this.displayClassName = function () {
            return classnames('dropdown-item', 'dropdown-item-selectable', {
                'dropdown-placeholder': !_this.value
            });
        };
        this.handleClick = function () {
            if (!_this.disabled) {
                _this.open = !_this.open;
            }
        };
        this.handleFocus = function () {
            if (!_this.disabled) {
                _this.focused = true;
            }
        };
        this.handleBlur = function () {
            if (!_this.disabled) {
                _this.focused = false;
                _this.open = false;
            }
        };
        this.handleListClick = function (evt) {
            var el = evt.target;
            var val = el.getAttribute('data-value');
            var disabled = el.getAttribute('data-disabled');
            if (disabled === null) {
                var o = _this.options.find(function (o) { return o.value === val; });
                if (o) {
                    _this.handleItemSelect(o);
                }
            }
        };
        this.handleItemSelect = function (option) {
            if (option.disabled !== true) {
                var c = _this.getCurrent();
                if (c) {
                    c.selected = false;
                }
                option.selected = true;
                _this.value = option.value;
                _this.itemSelect.emit(option);
                _this.open = false;
            }
        };
        this.handleDropdownRef = function (ref) {
            _this.dropdownEl = ref;
        };
        this.loadOptions = function () {
            _this.options = Array.prototype.slice.call(_this.el.querySelectorAll('mortar-dropdown-item'));
            var current = _this.options.find(function (o) { return o.selected === true; });
            if (current) {
                _this.value = current.value;
            }
        };
        this.getAvailable = function () {
            return _this.options.reduce(function (t, o, k) {
                if (!o.disabled) {
                    t.push({
                        o: o,
                        k: k
                    });
                }
                return t;
            }, []);
        };
        this.getCurrent = function () {
            if (_this.value && _this.options) {
                var o = _this.options.find(function (o) { return o.value === _this.value; });
                return o || null;
            }
            else {
                return null;
            }
        };
        this.clearHighlight = function () {
            var el = _this.options[_this.highlight];
            if (el) {
                el.highlighted = false;
            }
            _this.highlight = -1;
        };
        this.setHighlight = function (next) {
            var arr = _this.getAvailable();
            if (next) {
                if (_this.highlight === -1) {
                    var k = 0;
                    if (_this.value) {
                        var i = arr.find(function (o) { return o.o.value === _this.value; });
                        k = i.k;
                    }
                    _this.highlight = k;
                    _this.options[k].highlighted = true;
                }
                else {
                    _this.options[_this.highlight].highlighted = false;
                    var n = arr.find(function (v) { return v.k > _this.highlight; });
                    _this.highlight = (n) ? n.k : arr[0].k;
                    _this.options[_this.highlight].highlighted = true;
                }
            }
            else {
                var rArr = arr.reverse();
                if (_this.highlight === -1) {
                    var k = 0;
                    if (_this.value) {
                        var i = rArr.find(function (o) { return o.o.value === _this.value; });
                        k = i.k;
                    }
                    _this.highlight = k;
                    _this.options[k].highlighted = true;
                }
                else {
                    _this.options[_this.highlight].highlighted = false;
                    var n = rArr.find(function (v) { return v.k < _this.highlight; });
                    _this.highlight = (n) ? n.k : rArr[0].k;
                    _this.options[_this.highlight].highlighted = true;
                }
            }
            if (_this.highlight > -1) {
                _this.options[_this.highlight].getEl().then(function (v) {
                    var listEl = _this.el.querySelector('.dropdown-list[role="listbox"]');
                    listEl.scrollTop = v.offsetTop;
                });
            }
        };
        this.selectHighlight = function () {
            if (_this.highlight > -1) {
                _this.handleItemSelect(_this.options[_this.highlight]);
            }
        };
        this.itemSelect = createEvent(this, "itemSelect", 7);
    }
    MortarDropdown.prototype.handleOutsideClick = function (evt) {
        if (this.open === true && !(evt.target === this.dropdownEl || this.dropdownEl.contains(evt.target))) {
            this.open = false;
        }
    };
    MortarDropdown.prototype.componentWillLoad = function () {
        this.loadOptions();
    };
    MortarDropdown.prototype.handleOpen = function (openValue) {
        var _this = this;
        if (!openValue) {
            this.clearHighlight();
        }
        else {
            if (this.value) {
                var c = this.getCurrent();
                if (c) {
                    c.getEl().then(function (el) {
                        var listEl = _this.el.querySelector('.dropdown-list[role="listbox"]');
                        listEl.scrollTop = el.offsetTop;
                    });
                }
            }
        }
    };
    MortarDropdown.prototype.handleKeySelect = function (evt) {
        if (this.open) {
            //UP
            if (evt.keyCode === 38) {
                evt.preventDefault();
                this.setHighlight(false);
            }
            //DOWN 
            if (evt.keyCode === 40) {
                evt.preventDefault();
                this.setHighlight(true);
            }
            //SPACE OR ENTER SELECT
            if (evt.keyCode === 13 || evt.keyCode === 32) {
                evt.preventDefault();
                this.selectHighlight();
                this.open = false;
            }
            if (evt.keyCode === 27) {
                evt.preventDefault();
                this.open = false;
            }
        }
        else if (this.focused) {
            //SPACE OR ENTER OPEN SELECT MENU WHEN FOCUSED
            if (evt.keyCode === 13 || evt.keyCode === 32) {
                evt.preventDefault();
                this.open = true;
            }
        }
    };
    MortarDropdown.prototype.render = function () {
        var current = this.getCurrent();
        return (h("mortar-form-element", { label: this.label, help: this.help, haserror: this.haserror, error: this.error, elementclass: "dropdown", ref: this.handleDropdownRef }, h("div", { class: this.className(), tabindex: "0", role: "listbox", "aria-haspopup": "true", "aria-expanded": this.open, onFocus: this.handleFocus, onBlur: this.handleBlur }, h("div", { class: "dropdown-inner", onClick: this.handleClick }, h("div", { class: "dropdown-list dropdown-list-single" }, h("div", { class: this.displayClassName(), "aria-selected": "true" }, (current) ? current.label : this.placeholder))), h("div", { class: this.dropClassName(), "aria-expanded": this.open }, h("div", { class: "dropdown-list", role: "listbox", onClick: this.handleListClick }, h("slot", null))))));
    };
    Object.defineProperty(MortarDropdown.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MortarDropdown, "watchers", {
        get: function () {
            return {
                "open": ["handleOpen"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return MortarDropdown;
}());
var MortarDropdownItem = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.disabled = false;
        this.highlighted = false;
        this.selected = false;
        this.label = '';
        this.value = '';
        this.className = function () {
            return classnames('dropdown-item', 'dropdown-item-choice', {
                'dropdown-item-selectable': !_this.disabled,
                'dropdown-item-disabled': _this.disabled,
                'is-highlighted': !_this.disabled && _this.highlighted
            });
        };
    }
    class_1.prototype.getEl = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.root];
            });
        });
    };
    class_1.prototype.render = function () {
        return (h("div", { class: this.className(), role: "option", "aria-selected": this.selected, "data-value": this.value, "data-disabled": this.disabled }, this.label));
    };
    Object.defineProperty(class_1.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var MortarFormElement = /** @class */ (function () {
    function MortarFormElement(hostRef) {
        registerInstance(this, hostRef);
        this.elementclass = '';
        this.label = '';
        this.haserror = false;
        this.error = '';
        this.help = '';
        this.legend = '';
        this.disabled = false;
        this.legendId = '';
        this.name = '';
    }
    MortarFormElement.prototype.render = function () {
        return (h("fieldset", { class: this.elementclass, disabled: this.disabled === true }, this.label && h("label", { htmlFor: this.name }, this.label), this.legend && h("legend", { id: this.legendId }, this.legend), h("slot", null), this.help && h("div", { class: "helper-message show" }, this.help), this.haserror === true && h("div", { class: "error-message show", role: "alert" }, this.error)));
    };
    return MortarFormElement;
}());
var MortarIcon = /** @class */ (function () {
    function MortarIcon(hostRef) {
        registerInstance(this, hostRef);
        this.kind = "";
        this.arialabel = "";
        this.class = "";
    }
    MortarIcon.prototype.className = function () {
        return "storyicon " + this.kind + "StoryIcon " + this.class;
    };
    MortarIcon.prototype.render = function () {
        return (h(Host, null, h("i", { class: this.className(), "aria-label": this.arialabel })));
    };
    return MortarIcon;
}());
var MortarRadio = /** @class */ (function () {
    function MortarRadio(hostRef) {
        registerInstance(this, hostRef);
        this.error = '';
        this.haserror = false;
        this.label = '';
    }
    MortarRadio.prototype.render = function () {
        return (h("mortar-form-element", { legend: this.label, error: this.error, haserror: this.haserror, elementclass: "radio-group" }, h("slot", null)));
    };
    return MortarRadio;
}());
var MortarRadioItem = /** @class */ (function () {
    function MortarRadioItem(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.label = '';
        this.value = '';
        this.disabled = false;
        this.required = true;
        this.group = '';
        this.name = '';
        this.checked = false;
        this.light = true;
        this.haserror = false;
        this.className = function () {
            return classnames('radio-default', {
                'error': _this.haserror
            });
        };
    }
    MortarRadioItem.prototype.render = function () {
        return (h(Host, null, h("input", { type: "radio", id: this.name, class: this.className(), name: this.group, disabled: this.disabled === true, required: this.required === true, checked: this.checked === true, value: this.value }), h("label", { htmlFor: this.name }, !this.light && this.label, this.light &&
            h("span", { class: "light-text" }, this.label))));
    };
    return MortarRadioItem;
}());
export { MaskedInput as masked_input, MortarAlert as mortar_alert, MortarButton as mortar_button, MortarCheckbox as mortar_checkbox, MortarCheckboxItem as mortar_checkbox_item, MortarDatepicker as mortar_datepicker, MortarDatepicker$1 as mortar_datepicker_calendar, MortarDropdown as mortar_dropdown, MortarDropdownItem as mortar_dropdown_item, MortarFormElement as mortar_form_element, MortarIcon as mortar_icon, MortarRadio as mortar_radio, MortarRadioItem as mortar_radio_item };
