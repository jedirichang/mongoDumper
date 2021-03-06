/*! jsviews.js v0.9.83 (Beta) single-file version: http://jsviews.com/ */
/*! includes JsRender, JsObservable and JsViews - see: http://jsviews.com/#download */
! function(e, t) { var n = t.jQuery; "object" == typeof exports ? module.exports = n ? e(t, n) : function(n) { return e(t, n) } : "function" == typeof define && define.amd ? define(["jquery"], function(n) { return e(t, n) }) : e(t, !1) }(function(e, t) {
    "use strict";

    function n(e, t) { return function() { var n, r = this,
                i = r.base; return r.base = e, n = t.apply(r, arguments), r.base = i, n } }

    function r(e, t) { return Ue(t) && (t = n(e ? e._d ? e : n(a, e) : a, t), t._d = 1), t }

    function i(e, t) { for (var n in t.props) vt.test(n) && (e[n] = r(e[n], t.props[n])) }

    function o(e) { return e }

    function a() { return "" }

    function s(e) { try { throw console.log("JsRender dbg breakpoint: " + e), "dbg breakpoint" } catch (t) {} return this.base ? this.baseApply(arguments) : e }

    function l(e) { this.name = (t.link ? "JsViews" : "JsRender") + " Error", this.message = e || this.name }

    function d(e, t) { for (var n in t) e[n] = t[n]; return e }

    function c(e, t, n) { return e ? Oe(e) ? c.apply(Me, e) : (ze.delimiters = [e, t, et = n ? n.charAt(0) : et], Xe = e.charAt(0), Ze = e.charAt(1), Ge = t.charAt(0), Ye = t.charAt(1), e = "\\" + Xe + "(\\" + et + ")?\\" + Ze, t = "\\" + Ge + "\\" + Ye, Be = "(?:(\\w+(?=[\\/\\s\\" + Ge + "]))|(\\w+)?(:)|(>)|(\\*))\\s*((?:[^\\" + Ge + "]|\\" + Ge + "(?!\\" + Ye + "))*?)", Je.rTag = "(?:" + Be + ")", Be = new RegExp("(?:" + e + Be + "(\\/)?|\\" + Xe + "(\\" + et + ")?\\" + Ze + "(?:(?:\\/(\\w+))\\s*|!--[\\s\\S]*?--))" + t, "g"), Je.rTmpl = new RegExp("<.*>|([^\\\\]|^)[{}]|" + e + ".*" + t), We) : ze.delimiters }

    function p(e, t) { t || e === !0 || (t = e, e = void 0); var n, r, i, o, a = this,
            s = !t || "root" === t; if (e) { if (o = t && a.type === t && a, !o)
                if (n = a.views, a._.useKey) { for (r in n)
                        if (o = t ? n[r].get(e, t) : n[r]) break } else
                    for (r = 0, i = n.length; !o && r < i; r++) o = t ? n[r].get(e, t) : n[r] } else if (s)
            for (; a.parent;) o = a, a = a.parent;
        else
            for (; a && !o;) o = a.type === t ? a : void 0, a = a.parent; return o }

    function f() { var e = this.get("item"); return e ? e.index : void 0 }

    function u() { return this.index }

    function v(t, n) { var r, i, o = this,
            a = o.ctx; if (a && (a = a[t]), void 0 === a && (a = Ke[t]), a && a._cp) { if (n) return i = Je._ceo(a[1].deps), i.unshift(a[0]), i._cp = !0, i;
            a = Me.getCtx(a) } return a && Ue(a) && !a._wrp && (r = function() { return a.apply(this && this !== e ? this : o, arguments) }, r._wrp = o, d(r, a)), r || a }

    function g(e) { return e && (e.fn ? e : this.getRsc("templates", e) || qe(e)) }

    function h(e, t, n, r) { var o, a, s = "number" == typeof n && t.tmpl.bnds[n - 1],
            l = t.linkCtx; return void 0 !== r ? n = r = { props: {}, args: [r] } : s && (n = s(t.data, t, Je)), a = n.args[0], (e || s) && (o = l && l.tag, o || (o = d(new Je._tg, { _: { inline: !l, bnd: s, unlinked: !0 }, tagName: ":", cvt: e, flow: !0, tagCtx: n }), l && (l.tag = o, o.linkCtx = l), n.ctx = D(n.ctx, (l ? l.view : t).ctx)), o._er = r && a, i(o, n), n.view = t, o.ctx = n.ctx || o.ctx || {}, n.ctx = void 0, a = o.cvtArgs("true" !== e && e)[0], a = s && t._.onRender ? t._.onRender(a, t, o) : a), void 0 != a ? a : "" }

    function _(e) { var t = this,
            n = t.tagCtx,
            r = n.view,
            i = n.args; return e = e || t.convert, e = e && ("" + e === e ? r.getRsc("converters", e) || F("Unknown converter: '" + e + "'") : e), i = i.length || n.index ? e ? i.slice() : i : [r.data], e && (e.depends && (t.depends = Je.getDeps(t.depends, t, e.depends, e)), i[0] = e.apply(t, i)), i }

    function m(e, t) { for (var n, r, i = this; void 0 === n && i;) r = i.tmpl && i.tmpl[e], n = r && r[t], i = i.parent; return n || Me[e][t] }

    function b(e, n, r, o, a, s) { n = n || Fe; var l, d, c, p, f, u, v, g, h, _, m, b, x, y, w, k, C, j, A, I, E = "",
            T = n.linkCtx || 0,
            S = n.ctx,
            V = r || n.tmpl,
            B = "number" == typeof o && n.tmpl.bnds[o - 1]; for ("tag" === e._is ? (l = e, e = l.tagName, o = l.tagCtxs, c = l.template) : (d = n.getRsc("tags", e) || F("Unknown tag: {{" + e + "}} "), c = d.template), void 0 !== s ? (E += s, o = s = [{ props: {}, args: [] }]) : B && (o = B(n.data, n, Je)), g = o.length, v = 0; v < g; v++) _ = o[v], (!T || !T.tag || v && !T.tag._.inline || l._er) && ((b = V.tmpls && _.tmpl) && (b = _.content = V.tmpls[b - 1]), _.index = v, _.tmpl = b, _.render = N, _.view = n, _.ctx = D(_.ctx, S)), (r = _.props.tmpl) && (_.tmpl = n.getTmpl(r)), l || (l = new d._ctr, x = !!l.init, l.parent = u = S && S.tag, l.tagCtxs = o, A = l.dataMap, T && (l._.inline = !1, T.tag = l, l.linkCtx = T), (l._.bnd = B || T.fn) ? l._.arrVws = {} : l.dataBoundOnly && F("{^{" + e + "}} tag must be data-bound")), o = l.tagCtxs, A = l.dataMap, _.tag = l, A && o && (_.map = o[v].map), l.flow || (m = _.ctx = _.ctx || {}, p = l.parents = m.parentTags = S && D(m.parentTags, S.parentTags) || {}, u && (p[u.tagName] = u), p[l.tagName] = m.tag = l); if (!(l._er = s)) { for (i(l, o[0]), l.rendering = {}, v = 0; v < g; v++) _ = l.tagCtx = o[v], C = _.props, k = l.cvtArgs(), (y = C.dataMap || A) && (k.length || C.dataMap) && (w = _.map, w && w.src === k[0] && !a || (w && w.src && w.unmap(), w = _.map = y.map(k[0], C, void 0, !l._.bnd)), k = [w.tgt]), l.ctx = _.ctx, v || (x && (j = l.template, l.init(_, T, l.ctx), x = void 0), T && (T.attr = l.attr = T.attr || l.attr), f = l.attr, l._.noVws = f && f !== bt), h = void 0, l.render && (h = l.render.apply(l, k), n.linked && h && l.linkedElem && !gt.test(h) && (h = L(t.templates(h), k[0], void 0, void 0, n, void 0, void 0, l))), k.length || (k = [n]), void 0 === h && (I = k[0], l.contentCtx && (I = l.contentCtx(I)), h = _.render(I, !0) || (a ? void 0 : "")), E = E ? E + (h || "") : h;
            l.rendering = void 0 } return l.tagCtx = o[0], l.ctx = l.tagCtx.ctx, l._.noVws && l._.inline && (E = "text" === f ? De.html(E) : ""), B && n._.onRender ? n._.onRender(E, n, l) : E }

    function x(e, t, n, r, i, o, a, s) { var l, d, c, p = this,
            u = "array" === t;
        p.content = s, p.views = u ? [] : {}, p.parent = n, p.type = t || "top", p.data = r, p.tmpl = i, c = p._ = { key: 0, useKey: u ? 0 : 1, id: "" + _t++, onRender: a, bnds: {} }, p.linked = !!a, n ? (l = n.views, d = n._, d.useKey ? (l[c.key = "_" + d.useKey++] = p, p.index = kt, p.getIndex = f) : l.length === (c.key = p.index = o) ? l.push(p) : l.splice(o, 0, p), p.ctx = e || n.ctx) : p.ctx = e }

    function y(e) { var t, n, r; for (t in It) n = t + "s", e[n] && (r = e[n], e[n] = {}, Me[n](r, e)) }

    function w(e, t, n) {
        function i() { var t = this;
            t._ = { inline: !0, unlinked: !0 }, t.tagName = e } var o, a, s, l = new Je._tg; if (Ue(t) ? t = { depends: t.depends, render: t } : "" + t === t && (t = { template: t }), a = t.baseTag) { t.flow = !!t.flow, t.baseTag = a = "" + a === a ? n && n.tags[a] || He[a] : a, l = d(l, a); for (s in t) l[s] = r(a[s], t[s]) } else l = d(l, t); return void 0 !== (o = l.template) && (l.template = "" + o === o ? qe[o] || qe(o) : o), l.init !== !1 && ((i.prototype = l).constructor = l._ctr = i), n && (l._parentTmpl = n), l }

    function k(e) { return this.base.apply(this, e) }

    function C(e, n, r, i) {
        function o(n) { var o, s; if ("" + n === n || n.nodeType > 0 && (a = n)) { if (!a)
                    if (/^\.\/[^\\:*?"<>]*$/.test(n))(s = qe[e = e || n]) ? n = s : a = document.getElementById(n);
                    else if (t.fn && !Je.rTmpl.test(n)) try { a = t(document).find(n)[0] } catch (l) {}
                a && (i ? n = a.innerHTML : (o = a.getAttribute(yt), o ? o !== wt ? (n = qe[o], delete qe[o]) : t.fn && (n = t.data(a)[wt]) : (e = e || (t.fn ? wt : n), n = C(e, a.innerHTML, r, i)), n.tmplName = e = e || o, e !== wt && (qe[e] = n), a.setAttribute(yt, e), t.fn && t.data(a, wt, n))), a = void 0 } else n.fn || (n = void 0); return n } var a, s, l = n = n || ""; if (0 === i && (i = void 0, l = o(l)), i = i || (n.markup ? n : {}), i.tmplName = e, r && (i._parentTmpl = r), !l && n.markup && (l = o(n.markup)) && l.fn && (l = l.markup), void 0 !== l) return l.fn || n.fn ? l.fn && (s = l) : (n = E(l, i), P(l.replace(lt, "\\$&"), n)), s || (s = d(function() { return s.render.apply(s, arguments) }, n), y(s)), e && !r && e !== wt && (Ct[e] = s), s }

    function j(e, n) { return t.isFunction(e) ? e.call(n) : e }

    function A(e) { var t, n = [],
            r = e.length; for (t = 0; t < r; t++) n.push(e[t].unmap()); return n }

    function I(e, n) {
        function r(e) { c.apply(this, e) }

        function i() { return new r(arguments) }

        function o(e, t) { var n, r, i, o, a, s = f.length; for (n = 0; n < s; n++) o = f[n], r = void 0, o + "" !== o && (r = o, o = r.getter), void 0 === (a = e[o]) && r && void 0 !== (i = r.defaultVal) && (a = j(i, e)), t(a, r && p[r.type], o) }

        function a(t) { t = t + "" === t ? JSON.parse(t) : t; var n, r, i, a = t,
                d = []; if (Oe(t)) { for (t = t || [], r = t.length, n = 0; n < r; n++) d.push(this.map(t[n])); return d._is = e, d.unmap = l, d.merge = s, d } if (t) { o(t, function(e, t) { t && (e = t.map(e)), d.push(e) }), a = this.apply(this, d); for (i in t) i === Re || x[i] || (a[i] = t[i]) } return a }

        function s(e) { e = e + "" === e ? JSON.parse(e) : e; var t, n, r, a, s, l, d, c, p, f, u = this; if (Oe(u)) { for (c = {}, f = [], r = e.length, a = u.length, t = 0; t < r; t++) { for (p = e[t], d = !1, n = 0; n < a && !d; n++) c[n] || (l = u[n], v && (c[n] = d = v + "" === v ? p[v] && (x[v] ? l[v]() : l[v]) === p[v] : v(l, p)));
                    d ? (l.merge(p), f.push(l)) : f.push(i.map(p)) } return void(b ? b(u).refresh(f, !0) : u.splice.apply(u, [0, u.length].concat(f))) }
            o(e, function(e, t, n) { t ? u[n]().merge(e) : u[n](e) }); for (s in e) s === Re || x[s] || (u[s] = e[s]) }

        function l() { var e, n, r, i, o, a, s = this; if (Oe(s)) return A(s); for (e = {}, i = f.length, r = 0; r < i; r++) n = f[r], o = void 0, n + "" !== n && (o = n, n = o.getter), a = s[n](), e[n] = o && a && p[o.type] ? Oe(a) ? A(a) : a.unmap() : a; for (n in s) "_is" === n || x[n] || n === Re || "_" === n.charAt(0) && x[n.slice(1)] || t.isFunction(s[n]) || (e[n] = s[n]); return e } var d, c, p = this,
            f = n.getters,
            u = n.extend,
            v = n.id,
            g = t.extend({ _is: e || "unnamed", unmap: l, merge: s }, u),
            h = "",
            _ = "",
            m = f ? f.length : 0,
            b = t.observable,
            x = {}; for (r.prototype = g, d = 0; d < m; d++) ! function(e) { e = e.getter || e, x[e] = d + 1; var t = "_" + e;
            h += (h ? "," : "") + e, _ += "this." + t + " = " + e + ";\n", g[e] = g[e] || function(n) { return arguments.length ? void(b ? b(this).setProperty(e, n) : this[t] = n) : this[t] }, b && (g[e].set = g[e].set || function(e) { this[t] = e }) }(f[d]); return c = new Function(h, _.slice(0, -1)), c.prototype = g, g.constructor = c, i.map = a, i.getters = f, i.extend = u, i.id = v, i }

    function E(e, n) { var r, i = Qe._wm || {},
            o = d({ tmpls: [], links: {}, bnds: [], _is: "template", render: N }, n); return o.markup = e, n.htmlTag || (r = pt.exec(e), o.htmlTag = r ? r[1].toLowerCase() : ""), r = i[o.htmlTag], r && r !== i.div && (o.markup = t.trim(o.markup)), o }

    function T(e, t) {
        function n(i, o, a) { var s, l, d, c; if (i && typeof i === xt && !i.nodeType && !i.markup && !i.getTgt && !("viewModel" === e && i.getters || i.extend)) { for (d in i) n(d, i[d], o); return o || Me } return void 0 === o && (o = i, i = void 0), i && "" + i !== i && (a = o, o = i, i = void 0), c = a ? "viewModel" === e ? a : a[r] = a[r] || {} : n, l = t.compile, null === o ? i && delete c[i] : (o = l ? l.call(c, i, o, a, 0) : o, i && (c[i] = o)), l && o && (o._is = e), o && (s = Je.onStore[e]) && s(i, o, l), o } var r = e + "s";
        Me[r] = n }

    function S(e) { We[e] = function(t) { return arguments.length ? (ze[e] = t, We) : ze[e] } }

    function V(e) {
        function t(t, n) { this.tgt = e.getTgt(t, n) } return Ue(e) && (e = { getTgt: e }), e.baseMap && (e = d(d({}, e.baseMap), e)), e.map = function(e, n) { return new t(e, n) }, e }

    function N(e, t, n, r, i, o) { var a, s, l, d, c, p, f, u, v = r,
            g = ""; if (t === !0 ? (n = t, t = void 0) : typeof t !== xt && (t = void 0), (l = this.tag) ? (c = this, v = v || c.view, d = v.getTmpl(l.template || c.tmpl), arguments.length || (e = v)) : d = this, d) { if (!r && e && "view" === e._is && (v = e), v && e === v && (e = v.data), p = !v, nt = nt || p, v || ((t = t || {}).root = e), !nt || Qe.useViews || d.useViews || v && v !== Fe) g = L(d, e, t, n, v, i, o, l);
            else { if (v ? (f = v.data, u = v.index, v.index = kt) : (v = Fe, v.data = e, v.ctx = t), Oe(e) && !n)
                    for (a = 0, s = e.length; a < s; a++) v.index = a, v.data = e[a], g += d.fn(e[a], v, Je);
                else v.data = e, g += d.fn(e, v, Je);
                v.data = f, v.index = u }
            p && (nt = void 0) } return g }

    function L(e, t, n, r, i, o, a, s) {
        function l(e) { y = d({}, n), y[b] = e } var c, p, f, u, v, g, h, _, m, b, y, w, k = ""; if (s && (m = s.tagName, w = s.tagCtx, n = n ? D(n, s.ctx) : s.ctx, e === i.content ? h = e !== i.ctx._wrp ? i.ctx._wrp : void 0 : e !== w.content ? e === s.template ? (h = w.tmpl, n._wrp = w.content) : h = w.content || i.content : h = i.content, w.props.link === !1 && (n = n || {}, n.link = !1), (b = w.props.itemVar) && ("~" !== b.charAt(0) && M("Use itemVar='~myItem'"), b = b.slice(1))), i && (a = a || i._.onRender, n = D(n, i.ctx)), o === !0 && (g = !0, o = 0), a && (n && n.link === !1 || s && s._.noVws) && (a = void 0), _ = a, a === !0 && (_ = void 0, a = i._.onRender), n = e.helpers ? D(e.helpers, n) : n, y = n, Oe(t) && !r)
            for (f = g ? i : void 0 !== o && i || new x(n, "array", i, t, e, o, a, h), i && i._.useKey && (f._.bnd = !s || s._.bnd && s), b && (f.it = b), b = f.it, c = 0, p = t.length; c < p; c++) b && l(t[c]), u = new x(y, "item", f, t[c], e, (o || 0) + c, a, f.content), v = e.fn(t[c], u, Je), k += f._.onRender ? f._.onRender(v, u) : v;
        else b && l(t), f = g ? i : new x(y, m || "data", i, t, e, o, a, h), s && !s.flow && (f.tag = s, s.view = f), k += e.fn(t, f, Je); return _ ? _(k, f) : k }

    function B(e, t, n) { var r = void 0 !== n ? Ue(n) ? n.call(t.data, e, t) : n || "" : "{Error: " + e.message + "}"; return ze.onError && void 0 !== (n = ze.onError.call(t.data, e, n && r, t)) && (r = n), t && !t.linkCtx ? De.html(r) : r }

    function F(e) { throw new Je.Err(e) }

    function M(e) { F("Syntax error\n" + e) }

    function P(e, t, n, r, i) {
        function o(t) { t -= g, t && _.push(e.substr(g, t).replace(at, "\\n")) }

        function a(t, n) { t && (t += "}}", M((n ? "{{" + n + "}} block has {{/" + t + " without {{" + t : "Unmatched or missing {{/" + t) + ", in template:\n" + e)) }

        function s(s, l, d, f, v, b, x, y, w, k, C, j) {
            (x && l || w && !d || y && ":" === y.slice(-1) || k) && M(s), b && (v = ":", f = bt), w = w || n && !i; var A = (l || n) && [
                    []
                ],
                I = "",
                E = "",
                T = "",
                S = "",
                V = "",
                N = "",
                L = "",
                B = "",
                F = !w && !v;
            d = d || (y = y || "#data", v), o(j), g = j + s.length, x ? u && _.push(["*", "\n" + y.replace(/^:/, "ret+= ").replace(st, "$1") + ";\n"]) : d ? ("else" === d && (ct.test(y) && M('for "{{else if expr}}" use "{{else expr}}"'), A = m[7] && [
                []
            ], m[8] = e.substring(m[8], j), m = h.pop(), _ = m[2], F = !0), y && O(y.replace(at, " "), A, t).replace(dt, function(e, t, n, r, i, o, a, s) { return r = "'" + i + "':", a ? (E += o + ",", S += "'" + s + "',") : n ? (T += r + "j._cp(" + o + ',"' + s + '",view),', N += r + "'" + s + "',") : t ? L += o : ("trigger" === i && (B += o), I += r + o + ",", V += r + "'" + s + "',", p = p || vt.test(i)), "" }).slice(0, -1), A && A[0] && A.pop(), c = [d, f || !!r || p || "", F && [], R(S || (":" === d ? "'#data'," : ""), V, N), R(E || (":" === d ? "data," : ""), I, T), L, B, A || 0], _.push(c), F && (h.push(m), m = c, m[8] = g)) : C && (a(C !== m[0] && "else" !== m[0] && C, m[0]), m[8] = e.substring(m[8], j), m = h.pop()), a(!m && C), _ = m[2] } var l, d, c, p, f, u = ze.allowCode || t && t.allowCode || We.allowCode === !0,
            v = [],
            g = 0,
            h = [],
            _ = v,
            m = [, , v]; if (u && t._is && (t.allowCode = u), n && (void 0 !== r && (e = e.slice(0, -r.length - 2) + Ge), e = Xe + e + Ye), a(h[0] && h[0][2].pop()[0]), e.replace(Be, s), o(e.length), (g = v[v.length - 1]) && a("" + g !== g && +g[8] === g[8] && g[0]), n) { for (d = q(v, e, n), f = [], l = v.length; l--;) f.unshift(v[l][7]);
            $(d, f) } else d = q(v, t); return d }

    function $(e, t) { var n, r, i = 0,
            o = t.length; for (e.deps = [], e.paths = []; i < o; i++) { e.paths.push(r = t[i]); for (n in r) "_jsvto" !== n && r.hasOwnProperty(n) && r[n].length && !r[n].skp && (e.deps = e.deps.concat(r[n])) } }

    function R(e, t, n) { return [e.slice(0, -1), t.slice(0, -1), n.slice(0, -1)] }

    function U(e, t) { return "\n\t" + (t ? t + ":{" : "") + "args:[" + e[0] + "]" + (e[1] || !t ? ",\n\tprops:{" + e[1] + "}" : "") + (e[2] ? ",\n\tctx:{" + e[2] + "}" : "") }

    function O(e, t, n) {
        function r(r, _, m, b, x, y, w, k, C, j, A, I, E, T, S, V, N, L, B, F) {
            function $(e, n, r, a, s, l, p, f) { var u = "." === r; if (r && (x = x.slice(n.length), /^\.?constructor$/.test(f || x) && M(e), u || (e = (a ? 'view.hlp("' + a + '")' : s ? "view" : "data") + (f ? (l ? "." + l : a ? "" : s ? "" : "." + r) + (p || "") : (f = a ? "" : s ? l || "" : r, "")), e += f ? "." + f : "", e = n + ("view.data" === e.slice(0, 9) ? e.slice(5) : e)), d)) { if (O = "linkTo" === i ? o = t._jsvto = t._jsvto || [] : c.bd, q = u && O[O.length - 1]) { if (q._jsv) { for (; q.sb;) q = q.sb;
                            q.bnd && (x = "^" + x.slice(1)), q.sb = x, q.bnd = q.bnd || "^" === x.charAt(0) } } else O.push(x);
                    h[v] = B + (u ? 1 : 0) } return e }
            b && !k && (x = b + x), y = y || "", m = m || _ || I, x = x || C, j = j || N || ""; var R, U, O, q, D, K = ")"; if ("[" === j && (j = "[j._sq(", K = ")]"), !w || l || s) { if (d && V && !l && !s && (!i || a || o) && (R = h[v - 1], F.length - 1 > B - (R || 0))) { if (R = F.slice(R, B + r.length), U !== !0)
                        if (O = o || p[v - 1].bd, q = O[O.length - 1], q && q.prm) { for (; q.sb && q.sb.prm;) q = q.sb;
                            D = q.sb = { path: q.sb, bnd: q.bnd } } else O.push(D = { path: O.pop() });
                    V = Ze + ":" + R + " onerror=''" + Ge, U = u[V], U || (u[V] = !0, u[V] = U = P(V, n, !0)), U !== !0 && D && (D._jsv = U, D.prm = c.bd, D.bnd = D.bnd || D.path && D.path.indexOf("^") >= 0) } return l ? (l = !E, l ? r : I + '"') : s ? (s = !T, s ? r : I + '"') : (m ? (h[v] = B++, c = p[++v] = { bd: [] }, m) : "") + (L ? v ? "" : (f = F.slice(f, B), (i ? (i = a = o = !1, "\b") : "\b,") + f + (f = B + r.length, d && t.push(c.bd = []), "\b")) : k ? (v && M(e), d && t.pop(), i = x, a = b, f = B + r.length, d && (d = c.bd = t[i] = [], d.skp = !b), x + ":") : x ? x.split("^").join(".").replace(it, $) + (j ? (c = p[++v] = { bd: [] }, g[v] = K, j) : y) : y ? y : S ? (S = g[v] || S, g[v] = !1, c = p[--v], S + (j ? (c = p[++v], g[v] = K, j) : "")) : A ? (g[v] || M(e), ",") : _ ? "" : (l = E, s = T, '"')) }
            M(e) } var i, o, a, s, l, d = t && t[0],
            c = { bd: d },
            p = { 0: c },
            f = 0,
            u = (n ? n.links : d && (d.links = d.links || {})) || Fe.tmpl.links,
            v = 0,
            g = {},
            h = {},
            _ = (e + (n ? " " : "")).replace(ot, r); return !v && _ || M(e) }

    function q(e, t, n) { var r, i, o, a, s, l, d, c, p, f, u, v, g, h, _, m, b, x, y, w, k, C, j, A, I, T, S, V, N, L, B = 0,
            F = Qe.useViews || t.useViews || t.tags || t.templates || t.helpers || t.converters,
            P = "",
            R = {},
            O = e.length; for ("" + t === t ? (x = n ? 'data-link="' + t.replace(at, " ").slice(1, -1) + '"' : t, t = 0) : (x = t.tmplName || "unnamed", t.allowCode && (R.allowCode = !0), t.debug && (R.debug = !0), u = t.bnds, b = t.tmpls), r = 0; r < O; r++)
            if (i = e[r], "" + i === i) P += '\n+"' + i + '"';
            else if (o = i[0], "*" === o) P += ";\n" + i[1] + "\nret=ret";
        else { if (a = i[1], k = !n && i[2], s = U(i[3], "params") + "}," + U(g = i[4]), V = i[5], L = i[6], C = i[8] && i[8].replace(st, "$1"), (I = "else" === o) ? v && v.push(i[7]) : (B = 0, u && (v = i[7]) && (v = [v], B = u.push(1))), F = F || g[1] || g[2] || v || /view.(?!index)/.test(g[0]), (T = ":" === o) ? a && (o = a === bt ? ">" : a + o) : (k && (y = E(C, R), y.tmplName = x + "/" + o, y.useViews = y.useViews || F, q(k, y), F = y.useViews, b.push(y)), I || (w = o, F = F || o && (!He[o] || !He[o].flow), A = P, P = ""), j = e[r + 1], j = j && "else" === j[0]), N = V ? ";\ntry{\nret+=" : "\n+", h = "", _ = "", T && (v || L || a && a !== bt)) { if (S = new Function("data,view,j,u", " // " + x + " " + B + " " + o + "\nreturn {" + s + "};"), S._er = V, S._tag = o, n) return S;
                $(S, v), m = 'c("' + a + '",view,', f = !0, h = m + B + ",", _ = ")" } if (P += T ? (n ? (V ? "try{\n" : "") + "return " : N) + (f ? (f = void 0, F = p = !0, m + (v ? (u[B - 1] = S, B) : "{" + s + "}") + ")") : ">" === o ? (d = !0, "h(" + g[0] + ")") : (c = !0, "((v=" + g[0] + ")!=null?v:" + (n ? "null)" : '"")'))) : (l = !0, "\n{view:view,tmpl:" + (k ? b.length : "0") + "," + s + "},"), w && !j) { if (P = "[" + P.slice(0, -1) + "]", m = 't("' + w + '",view,this,', n || v) { if (P = new Function("data,view,j,u", " // " + x + " " + B + " " + w + "\nreturn " + P + ";"), P._er = V, P._tag = w, v && $(u[B - 1] = P, v), n) return P;
                    h = m + B + ",undefined,", _ = ")" }
                P = A + N + m + (B || P) + ")", v = 0, w = 0 }
            V && (F = !0, P += ";\n}catch(e){ret" + (n ? "urn " : "+=") + h + "j._err(e,view," + V + ")" + _ + ";}" + (n ? "" : "ret=ret")) }
        P = "// " + x + "\nvar v" + (l ? ",t=j._tag" : "") + (p ? ",c=j._cnvt" : "") + (d ? ",h=j._html" : "") + (n ? ";\n" : ',ret=""\n') + (R.debug ? "debugger;" : "") + P + (n ? "\n" : ";\nreturn ret;"), ze.debugMode !== !1 && (P = "try {\n" + P + "\n}catch(e){\nreturn j._err(e, view);\n}"); try { P = new Function("data,view,j,u", P) } catch (D) { M("Compiled template code:\n\n" + P + '\n: "' + D.message + '"') } return t && (t.fn = P, t.useViews = !!F), P }

    function D(e, t) { return e && e !== t ? t ? d(d({}, t), e) : e : t && d({}, t) }

    function K(e) { return mt[e] || (mt[e] = "&#" + e.charCodeAt(0) + ";") }

    function H(e) { var t, n, r = []; if (typeof e === xt)
            for (t in e) n = e[t], t !== Re && e.hasOwnProperty(t) && !Ue(n) && r.push({ key: t, prop: n }); return r }

    function J(e, n, r) { var i = this.jquery && (this[0] || F("Unknown template")),
            o = i.getAttribute(yt); return N.call(o ? t.data(i)[wt] : qe(i), e, n, r) }

    function z(e) { return void 0 != e ? ut.test(e) && ("" + e).replace(ht, K) || e : "" }

    function Q(e, n, r) { for (var i, o, a, s, l, d, c, p, f, u, v, g, h, _, m, b, x, y, w = e.target, k = w._jsvBnd; u = zn.exec(k);)
            if ((u = $n[u[1]]) && (m = u.to)) { if (s = u.linkCtx, f = s.view, _ = s.tag || f.tag, p = t(w), g = f.hlp(vn), h = f.hlp(gn), a = te(w), i = In[a], void 0 === r && (r = Ue(a) ? a(w) : i ? p[i]() : p.attr(a)), d = m[1], m = m[0], m = m + "" === m ? [s.data, m] : m, d && (l = Ue(d) ? d : f.getRsc("converters", d)), "SELECT" === s.elem.nodeName && (s.elem._jsvSel = r = r || (s.elem.multiple ? [] : r)), l && (r = l.call(_, r)), v = f.linkCtx, f.linkCtx = s, b = { change: "change", oldValue: s._val, value: r }, !(g && (o = g.call(s, e, b) === !1) || _ && _.onBeforeChange && (o = _.onBeforeChange(e, b) === !1) || void 0 === r) && (c = m[0], void 0 !== r && c)) { if (c._jsv)
                        for (y = s._ctxCb, x = c, c = s.data, x._cpCtx && (c = x.data, y = x._cpCtx); x && x.sb;) c = y(x, c), x = x.sb;
                    _ && (_._.chging = !0), $e(c).setProperty(m[1], r), h && h.call(s, e, b), _ && (_.onAfterChange && _.onAfterChange(e, b), _._.chging = void 0), s._val = r }
                f.linkCtx = v } }

    function W(e, t, n) { var r, i, o, a, s, l, d = this,
            c = d.tag,
            p = d.data,
            f = d.elem,
            u = d.convert,
            v = f.parentNode,
            g = d.view,
            h = g.linkCtx,
            _ = g.hlp(vn); if (g.linkCtx = d, v && (!_ || !t || _.call(d, e, t) !== !1) && (!t || "*" === e.data.prop || e.data.prop === t.path)) { if (t && (d.eventArgs = t), t || d._toLk) { if (d._toLk = 0, n._er) try { i = n(p, g) } catch (m) { s = n._er, l = B(m, g, new Function("data,view", "return " + s + ";")(p, g)), i = [{ props: {}, args: [l] }] } else i = n(p, g, Je); if (r = X(i, d, c = d.tag, d.attr || te(f, !0, void 0 !== u)), c) { if (a = s || c._er, i = i[0] ? i : [i], o = !a && t && c.onUpdate && c.onUpdate(e, t, i) === !1, xe(c, i, a), o || r === xn) return he(c, e, t), ie(d, p, f), void(g.linkCtx = h); if (c._.chging) return;
                    c.onUnbind && c.onUnbind(c.tagCtx, d, c.ctx, e, t), i = ":" === c.tagName ? Je._cnvt(c.cvt, g, i[0]) : Je._tag(c, g, g.tmpl, i, !0, l) } else n._tag && (u = "" === u ? wn : u, i = u ? Je._cnvt(u, g, i[0] || i) : Je._tag(n._tag, g, g.tmpl, i, !0, l), Ie(c = d.tag, !0), r = d.attr || r);
                G(i, d, r, c) && t && (_ = g.hlp(gn)) && _.call(d, e, t), d._noUpd = 0, c && (c._er = s, he(c, e, t)) }
            ie(d, p, f), g.linkCtx = h } }

    function X(e, n, r, i) { var o, a, s, l, d = r && r.parentElem || n.elem; if (void 0 !== e) { if (l = t(d), i = r && r.attr || i, Ue(e) && F(n.expr + ": missing parens"), s = /^css-/.test(i) && i.slice(4)) o = t.style(d, s), +e === e && (o = parseInt(o));
            else if ("link" !== i) { if ("value" === i) d.type === mn && (o = l.prop(i = _n));
                else if (i === bn) { if (d.value !== "" + e) return i;
                    o = l.prop(_n) }
                void 0 === o && (a = In[i], o = a ? l[a]() : l.attr(i)) }
            n._val = o } return i }

    function Z(e, t) { e._df = t, e[(t ? "set" : "remove") + "Attribute"](jn, "") }

    function G(n, r, i, o) { var a, s, l, d, c, p, f, u, v, g, h, _, m, b, x = i !== xn && void 0 !== n && !r._noUpd,
            y = r.data,
            w = o && o.parentElem || r.elem,
            k = w.parentNode,
            C = t(w),
            j = r.view,
            A = r._val,
            I = j.linkCtx,
            E = o; if (o && (o._.unlinked = !0, o.parentElem = o.parentElem || r.expr || o._elCnt ? w : k, s = o._prv, l = o._nxt), x) return "visible" === i && (i = "css-display"), /^css-/.test(i) ? ("visible" === r.attr && (m = (w.currentStyle || Qn.call(e, w, "")).display, n ? (n = w._jsvd || m, n !== xn || (n = Pn[_ = w.nodeName]) || (h = document.createElement(_), document.body.appendChild(h), n = Pn[_] = (h.currentStyle || Qn.call(e, h, "")).display, document.body.removeChild(h))) : (w._jsvd = m, n = xn)), (E = E || A !== n) && t.style(w, i.slice(4), n)) : "link" !== i && (/^data-/.test(i) && t.data(w, i.slice(5), n), i === _n ? (p = !0, n = n && "false" !== n) : i === bn ? (p = !0, i = _n, n = w.value === "" + n) : "selected" === i || "disabled" === i || "multiple" === i || "readonly" === i ? n = n && "false" !== n ? i : null : "value" === i && "SELECT" === w.nodeName && (w._jsvSel = Oe(n) ? n : "" + n), (a = In[i]) ? i === bt ? (j.linkCtx = r, o && o._.inline ? (c = o.nodes(!0), o._elCnt && (s && s !== l ? je(s, l, w, o._tgId, "^", !0) : (f = w._df) && (u = o._tgId + "^", v = f.indexOf("#" + u) + 1, g = f.indexOf("/" + u), v && g > 0 && (v += u.length, g > v && (Z(w, f.slice(0, v) + f.slice(g)), Ae(f.slice(v, g))))), s = s ? s.previousSibling : l ? l.previousSibling : w.lastChild), t(c).remove(), d = j.link(j.data, w, s, l, n, o && { tag: o._tgId, lazyLink: o.tagCtx.props.lazyLink })) : (x = x && A !== n, x && C.empty(), x && (d = j.link(y, w, s, l, n, o && { tag: o._tgId }))), j.linkCtx = I) : ((E = E || A !== n) && ("text" === i && w.children && !w.children[0] ? void 0 !== w.textContent ? w.textContent = n : w.innerText = null === n ? "" : n : C[a](n)), !(b = k._jsvSel) || "value" !== i && C.attr("value") || (w.selected = t.inArray("" + n, Oe(b) ? b : [b]) > -1)) : (E = E || A !== n) && C[p ? "prop" : "attr"](i, void 0 !== n || p ? n : null), r._val = n), d || E }

    function Y(e, t) { var n = this,
            r = n.hlp(vn),
            i = n.hlp(gn); if (!r || r.call(this, e, t) !== !1) { if (t) { var o = t.change,
                    a = t.index,
                    s = t.items; switch (n._.srt = t.refresh, o) {
                    case "insert":
                        n.addViews(a, s); break;
                    case "remove":
                        n.removeViews(a, s.length); break;
                    case "move":
                        n.removeViews(t.oldIndex, s.length, void 0, !0), n.addViews(a, s); break;
                    case "refresh":
                        n._.srt = void 0, n.fixIndex(0) } }
            i && i.call(this, e, t) } }

    function ee(e) { var n, r, i = e.type,
            o = e.data,
            a = e._.bnd;!e._.useKey && a && ((r = e._.bndArr) && (t([r[1]]).off(Ft, r[0]), e._.bndArr = void 0), a !== !!a ? i ? a._.arrVws[e._.id] = e : delete a._.arrVws[e._.id] : i && o && (n = function(t) { t.data && t.data.off || Y.apply(e, arguments) }, t([o]).on(Ft, n), e._.bndArr = [n, o])) }

    function te(e, t, n) { var r = e.nodeName.toLowerCase(),
            i = Qe._fe[r] || e.contentEditable === wn && { to: bt, from: bt }; return i ? t ? "input" === r && e.type === bn ? bn : i.to : i.from : t ? n ? "text" : bt : "" }

    function ne(e, n, r, i, o, a, s) { var l, d, c, p, f, u = e.parentElem,
            v = e._prv,
            g = e._nxt,
            h = e._elCnt; if (v && v.parentNode !== u && F("Missing parentNode"), s) { p = e.nodes(), h && v && v !== g && je(v, g, u, e._.id, "_", !0), e.removeViews(void 0, void 0, !0), d = g, h && (v = v ? v.previousSibling : g ? g.previousSibling : u.lastChild), t(p).remove(); for (f in e._.bnds) we(f) } else { if (n) { if (c = i[n - 1], !c) return !1;
                v = c._nxt }
            h ? (d = v, v = d ? d.previousSibling : u.lastChild) : d = v.nextSibling }
        l = r.render(o, a, e._.useKey && s, e, s || n, !0), e.link(o, u, v, d, l, c) }

    function re(e, t, n) { var r, i; return n ? (i = "^`", Ie(n, !0), r = n._tgId, r || ($n[r = Rn++] = n, n._tgId = "" + r)) : (i = "_`", Ie(cn[r = t._.id] = t)), "#" + r + i + (void 0 != e ? e : "") + "/" + r + i }

    function ie(e, t, n) { var r, i, o, a, s, l, c, p, f = e.tag,
            u = e.convertBack,
            v = [],
            g = e._bndId || "" + Rn++,
            h = e._hdl; if (e._bndId = void 0, f && (v = f.depends || v, v = Ue(v) ? f.depends(f) : v, a = f.linkedElem), !e._depends || "" + e._depends != "" + v) { if (e._depends && $e._apply(!1, [t], e._depends, h, !0), s = e.fn.deps.slice(), f && f.boundProps)
                for (i = f.boundProps.length; i--;)
                    for (c = f.boundProps[i], o = f._.bnd.paths.length; o--;) p = f._.bnd.paths[o][c], p && p.skp && (s = s.concat(p)); for (i = s.length; i--;) l = s[i], l._jsv && (s[i] = d({}, l)); if (r = $e._apply(!1, [t], s, v, h, e._ctxCb), r.elem = n, r.linkCtx = e, r._tgId = g, n._jsvBnd = n._jsvBnd || "", n._jsvBnd += "&" + g, e._depends = v, e.view._.bnds[g] = g, $n[g] = r, a)
                for (i = a.length; i--;) a[i]._jsvLkEl = f, be(r, f, a[i]), a[i]._jsvBnd = "&" + r._tgId + "+";
            else void 0 !== u && be(r, f, n, u);
            f && (f.flow || f._.inline || (n.setAttribute(fn, (n.getAttribute(fn) || "") + "#" + g + "^/" + g + "^"), f._tgId = "" + g)) } }

    function oe(e, t, n, r, i, o, a) { return ae(this, e, t, n, r, i, o, a) }

    function ae(e, n, r, i, o, a, s, l) { if (i === !0 ? (o = i, i = void 0) : i = "object" != typeof i ? void 0 : d({}, i), e && n) { n = n.jquery ? n : t(n), rn || (rn = document.body, t(rn).on(un, Q).on("blur", "[contenteditable]", Q)); for (var c, p, f, u, v, g, h, _, m, b = re, x = i && "replace" === i.target, y = n.length; y--;) { if (h = n[y], a = a || an(h), (m = a === Fe) && (Fe.data = (Fe.ctx = i || {}).root = r), "" + e === e) le(e, h, a, void 0, !0, r, i);
                else { if (void 0 !== e.markup) x && (g = h.parentNode), f = e.render(r, i, o, a, void 0, b), g ? (s = h.previousSibling, l = h.nextSibling, t.cleanData([h], !0), g.removeChild(h), h = g) : (s = l = void 0, t(h).empty());
                    else { if (e !== !0 || a !== Fe) break;
                        _ = { lnk: 1 } } if (h._df && !l) { for (u = fe(h._df, !0, qn), c = 0, p = u.length; c < p; c++) v = u[c], (v = cn[v.id]) && void 0 !== v.data && v.parent.removeViews(v._.key, void 0, !0);
                        Z(h) }
                    a.link(r, h, s, l, f, _, i) }
                m && (Fe.data = Fe.ctx = void 0) } } return n }

    function se(e, n, r, i, o, a, s, l) {
        function d(e, t, n, r, i, a, s, l, d, c, p, f, v, h) { var _, m, b = ""; return h ? (u = 0, e) : (g = d || c || "", r = r || p, n = n || v, D && !n && (!e || r || g || a && !u) && (D = void 0, q = me.shift()), r = r || n, r && (u = 0, D = void 0, B && (n || v ? Mn[q] || /;svg;|;math;/.test(";" + me.join(";") + ";") || (_ = "'<" + q + ".../") : Mn[r] ? _ = "'</" + r : me.length && r === q || (_ = "Mismatch: '</" + r), _ && M(_ + ">' in:\n" + o)), Q = z, q = me.shift(), z = Bn[q], p = p ? "</" + p + ">" : "", Q && (ge += X, X = "", z ? ge += "-" : (b = p + Cn + "@" + ge + kn + (f || ""), ge = be.shift()))), z ? (a ? X += a : t = p || v || "", g && (t += g, X && (t += " " + fn + '="' + X + '"', X = ""))) : t = a ? t + b + i + (u ? "" : Cn + a + kn) + l + g : b || e, B && s && (u && M("{^{ within elem markup (" + u + ' ). Use data-link="..."'), "#" === a.charAt(0) ? me.unshift(a.slice(1)) : a.slice(1) !== (m = me.shift()) && M("Closing tag for {^{...}} under different elem: <" + m + ">")), g && (u = g, me.unshift(q), q = g.slice(1), B && me[0] && me[0] === Fn[q] && F("Parent of <tr> must be <tbody>"), D = Mn[q], (z = Bn[q]) && !Q && (be.unshift(ge), ge = ""), Q = z, ge && z && (ge += "+")), t) }

        function c(e, t) { var r, i, o, a, s, l, d, c = []; if (e) { for ("@" === e._tkns.charAt(0) && (t = y.previousSibling, y.parentNode.removeChild(y), y = void 0), b = e.length; b--;) { if (k = e[b], o = k.ch, r = k.path)
                        for (m = r.length - 1; i = r.charAt(m--);) "+" === i ? "-" === r.charAt(m) ? (m--, t = t.previousSibling) : t = t.parentNode : t = t.lastChild; "^" === o ? (g = $n[s = k.id]) && (d = t && (!y || y.parentNode !== t), y && !d || (g.parentElem = t), k.elCnt && d && Z(t, (k.open ? "#" : "/") + s + o + (t._df || "")), c.push([d ? null : y, k])) : (w = cn[s = k.id]) && (w.parentElem || (w.parentElem = t || y && y.parentNode || n, w._.onRender = re, w._.onArrayChange = Y, ee(w)), a = w.parentElem, k.open ? (w._elCnt = k.elCnt, t && !y ? Z(t, "#" + s + o + (t._df || "")) : (w._prv || Z(a, ce(a._df, "#" + s + o)), w._prv = y)) : (!t || y && y.parentNode === t ? y && (w._nxt || Z(a, ce(a._df, "/" + s + o)), w._nxt = y) : (Z(t, "/" + s + o + (t._df || "")), w._nxt = void 0), (l = w.ctx && w.ctx[hn] || xe) && l.call(w.ctx.tag, w))) } for (b = c.length; b--;) _e.push(c[b]) } return !e || e.elCnt }

        function p(e) { var t, n, r; if (e)
                for (b = e.length, m = 0; m < b; m++)
                    if (k = e[m], n = g = $n[k.id].linkCtx.tag, r = g.tagName === N, !g.flow || r) { if (!V) { for (t = 1; n = n.parent;) t++;
                            P = P || t }!V && t !== P || N && !r || S.push(g) } }

        function f() { var a, l, d = "",
                f = {},
                u = ln + (ae ? ",[" + jn + "]" : ""); for (x = Ln ? n.querySelectorAll(u) : t(u, n).get(), _ = x.length, r && r.innerHTML && (j = Ln ? r.querySelectorAll(u) : t(u, r).get(), r = j.length ? j[j.length - 1] : r), P = 0, h = 0; h < _; h++)
                if (y = x[h], r && !te) te = y === r;
                else { if (i && y === i) { ae && (d += pe(y)); break } if (y.parentNode)
                        if (ae) { if (d += pe(y), y._df) { for (a = h + 1; a < _ && y.contains(x[a]);) a++;
                                f[a - 1] = y._df }
                            f[h] && (d += f[h] || "") } else oe && (k = fe(y, void 0, Kn)) && (k = k[0]) && (ne = ne ? k.id !== ne && ne : k.open && k.id), !ne && ye(fe(y)) && y.getAttribute(sn) && _e.push([y]) }
            if (ae && (d += n._df || "", (l = d.indexOf("#" + ae.id) + 1) && (d = d.slice(l + ae.id.length)), l = d.indexOf("/" + ae.id), l + 1 && (d = d.slice(0, l)), p(fe(d, void 0, Hn))), void 0 === o && n.getAttribute(sn) && _e.push([n]), ue(r, z), ue(i, z), ae) return void(ie && ie.resolve()); for (z && ge + X && (y = i, ge && (i ? c(fe(ge + "+", !0), i) : c(fe(ge, !0), n)), c(fe(X, !0), n), i && (d = i.getAttribute(fn), (_ = d.indexOf(G) + 1) && (d = d.slice(_ + G.length - 1)), i.setAttribute(fn, X + d))), _ = _e.length, h = 0; h < _; h++) y = _e[h], C = y[1], y = y[0], C ? (g = $n[C.id]) && ((v = g.linkCtx) && (g = v.tag, g.linkCtx = v), C.open ? (y && (g.parentElem = y.parentNode, g._prv = y), g._elCnt = C.elCnt, w = g.tagCtx.view, le(void 0, g._prv, w, C.id)) : (g._nxt = y, g._.unlinked && (L = g.tagCtx, w = L.view, he(g)))) : le(y.getAttribute(sn), y, an(y), void 0, oe, e, s);
            ie && ie.resolve() } var u, v, g, h, _, m, b, x, y, w, k, C, j, A, I, E, T, S, V, N, L, B, P, $, R, U, O, q, D, K, H, J, z, Q, W, X, G, te, ne, ie, oe, ae, se = this,
            de = se._.id + "_",
            ge = "",
            _e = [],
            me = [],
            be = [],
            xe = se.hlp(hn),
            ye = c; if (a && (ie = a.lazyLink && t.Deferred(), a.tmpl ? I = "/" + a._.id + "_" : (oe = a.lnk, a.tag && (de = a.tag + "^", a = !0), (ae = a.get) && (ye = p, S = ae.tags, V = ae.deep, N = ae.name)), a = a === !0), n = n ? "" + n === n ? t(n)[0] : n.jquery ? n[0] : n : se.parentElem || document.body, B = !Qe.noValidate && n.contentEditable !== wn, q = n.tagName.toLowerCase(), z = !!Bn[q], r = r && ve(r, z), i = i && ve(i, z) || null, void 0 != o) { if (H = document.createElement("div"), K = H, G = X = "", W = "http://www.w3.org/2000/svg" === n.namespaceURI ? "svg_ns" : (O = pt.exec(o)) && O[1] || "", z) { for (T = i; T && !(E = fe(T));) T = T.nextSibling;
                (J = E ? E._tkns : n._df) && (A = I || "", !a && I || (A += "#" + de), m = J.indexOf(A), m + 1 && (m += A.length, G = X = J.slice(0, m), J = J.slice(m), E ? T.setAttribute(fn, J) : Z(n, J))) } if (D = void 0, o = ("" + o).replace(On, d), B && me.length && M("Mismatched '<" + q + "...>' in:\n" + o), l) return; for (Nn.appendChild(H), W = dn[W] || dn.div, $ = W[0], K.innerHTML = W[1] + o + W[2]; $--;) K = K.lastChild; for (Nn.removeChild(H), R = document.createDocumentFragment(); U = K.firstChild;) R.appendChild(U);
            n.insertBefore(R, i) } return ie ? setTimeout(f, 0) : f(), ie && ie.promise() }

    function le(e, t, n, r, i, o, a) { var s, l, d, c, p, f, u, v, g, h, _, m = []; if (r) v = $n[r], v = v.linkCtx ? v.linkCtx.tag : v, u = v.linkCtx || { type: "inline", data: n.data, elem: v._elCnt ? v.parentElem : t, view: n, ctx: n.ctx, attr: bt, fn: v._.bnd, tag: v, _bndId: r }, de(u, u.fn);
        else if (e && t) { for (o = i ? o : n.data, s = n.tmpl, e = ge(e, te(t)), _ = on.lastIndex = 0; l = on.exec(e);) m.push(l), _ = on.lastIndex; for (_ < e.length && M(e); l = m.shift();) { for (g = on.lastIndex, d = l[1], p = l[3]; m[0] && "else" === m[0][4];) p += Ye + Xe + m.shift()[3], h = !0;
                h && (p += Ye + Xe + Ze + "/" + l[4] + Ge), u = { type: i ? "top" : "link", data: o, elem: t, view: n, ctx: a, attr: d, isLk: i, _toLk: 1, _noUpd: l[2] }, c = void 0, l[6] && (c = l[10] || void 0, u.convert = l[5] || "", !d && void 0 !== c && te(t) && (u.convertBack = c = c.slice(1))), u.expr = d + p, f = s.links[p], f || (s.links[p] = f = Je.tmplFn(p, s, !0, c, h)), u.fn = f, de(u, f), on.lastIndex = g } } }

    function de(e, t) {
        function n(n, r) { W.call(e, n, r, t) }
        n.noArray = !0, e.isLk && Ie(e.view = new Je.View(Je.extendCtx(e.ctx, e.view.ctx), "link", e.view, e.data, e.expr, (void 0), re)), e._ctxCb = Je._gccb(e.view), e._hdl = n, n(!0) }

    function ce(e, t) { var n; return e ? (n = e.indexOf(t), n + 1 ? e.slice(0, n) + e.slice(n + t.length) : e) : "" }

    function pe(e) { return e && ("" + e === e ? e : e.tagName === yn ? e.type.slice(3) : 1 === e.nodeType && e.getAttribute(fn) || "") }

    function fe(e, t, n) {
        function r(e, t, n, r, o, s) { a.push({ elCnt: i, id: r, ch: o, open: t, close: n, path: s, token: e }) } var i, o, a = []; if (o = t ? e : pe(e)) return i = a.elCnt = e.tagName !== yn, i = "@" === o.charAt(0) || i, a._tkns = o, o.replace(n || Jn, r), a }

    function ue(e, t) { e && ("jsv" === e.type ? e.parentNode.removeChild(e) : t && "" === e.getAttribute(sn) && e.removeAttribute(sn)) }

    function ve(e, t) { for (var n = e; t && n && 1 !== n.nodeType;) n = n.previousSibling; return n && (1 !== n.nodeType ? (n = document.createElement(yn), n.type = "jsv", e.parentNode.insertBefore(n, e)) : pe(n) || n.getAttribute(sn) || n.setAttribute(sn, "")), n }

    function ge(e, n) { return e = t.trim(e).replace(lt, "\\$&"), e.slice(-1) !== Ge ? e = Ze + ":" + e + (n ? ":" : "") + Ge : e }

    function he(e, n, r) { var i, o, a, s, l, d, c = e.tagCtx,
            p = (c.view, c.props),
            f = e.linkCtx; if (e._.unlinked && (void 0 !== e.linkedElement && (e.linkedElem = e._.inline ? e.contents(!0, e.linkedElement || "*").first() : t(f.elem)), e.onBind && e.onBind(c, f, e.ctx, n, r)), e.onAfterLink && e.onAfterLink(c, f, e.ctx, n, r), i = e.targetTag ? e.targetTag.linkedElem : e.linkedElem, o = e.displayElem || i, i && i[0]) { if (s = e.cvtArgs()[0], void 0 !== s && !e._.chging)
                for (l = i.length; l--;) a = i[l], e._.unlinked && a !== f.elem && (d = a._jsvLkEl, e._.inline && (!d || d !== e && d.targetTag !== e) && (a._jsvLkEl = e, be($n[e._tgId], e, a), a._jsvBnd = "&" + e._tgId + "+")), void 0 !== s && (void 0 !== a.value ? a.type === mn ? a[_n] = s && "false" !== s : a.type === bn ? a[_n] = a.value === s : t(a).val(s) : a.contentEditable === wn && (a.innerHTML = s), f._val = s), p.name && (a.name = a.name || p.name);
            e.setSize && (p.height && o.height(p.height), p.width && o.width(p.width)), void 0 !== p.title && o.attr("title", p.title), p["class"] && (r && o.hasClass(r.oldValue) && o.removeClass(r.oldValue), o.addClass(p["class"])), p.id && (i[0].id = p.id) }
        e._.unlinked = void 0 }

    function _e(e) { setTimeout(function() { Q(e) }, 0) }

    function me(e, t, n) { t && (t = "" + t === t ? t : "keydown", e[n](t, "keydown" === t ? _e : Q)) }

    function be(e, n, r, i) {
        var o, a, s, l, d, c, p, f, u, v, g = e.linkCtx,
            h = g._ctxCb,
            _ = g.data,
            m = g.fn.paths[0];
        if (n = n || r._jsvLkEl, e && m && !e.to) {
            if (f = r._jsvTr || !1, n && (i = n.convertBack || i, p = n.tagCtx.props.trigger), p = void 0 === p ? ze.trigger : p, p = p && ("INPUT" === r.tagName && r.type !== mn && r.type !== bn || "textarea" === r.type || r.contentEditable === wn) && p || !1, f !== p && (c = t(r), me(c, f, "off"), me(c, r._jsvTr = p, "on")), m = (o = m._jsvto) || m[0], a = m && m.length) {
                if (l = m[a - 1], l._jsv) { for (d = l; l.sb && l.sb._jsv;) s = l = l.sb;
                    s = l.sb || s && s.path, l = s ? s.slice(1) : d.path }
                if (s) u = [d, l];
                else {
                    for (;
                        (u = h(s = l.split("^").join("."), _)) && (v = u.length);) {
                        if (u[0]._cp) {
                            if (u = u[0], h = Je._gccb(u[0]), l = u[1], u = [u[0].data, u[1]],
                                l._jsv) { for (d = l, d.data = u[0], d._cpCtx = h; l.sb && l.sb._jsv;) s = l = l.sb;
                                s = l.sb || s && s.path, l = s ? s.slice(1) : d.path, u = [d, l] }
                        } else u = v > 2 ? [u[v - 3], u[v - 2]] : [u[v - 2]];
                        _ = u[0], l = u[1]
                    }
                    u = u || [_, s]
                }
            } else u = [];
            e.to = [u, i]
        }
    }

    function xe(e, t, n) { var r, i, o = e.tagCtx.view,
            a = e.tagCtxs || [e.tagCtx],
            s = a.length,
            l = !t; if (t = t || e._.bnd.call(o.tmpl, (e.linkCtx || o).data, o, Je), n) a = e.tagCtxs = t, e.tagCtx = a[0];
        else
            for (; s--;) r = a[s], i = t[s], $e(r.props).setProperty(i.props), d(r.ctx, i.ctx), r.args = i.args, l && (r.tmpl = i.tmpl); return Je._ths(e, a[0]), a }

    function ye(e) { for (var t, n, r, i = [], o = e.length, a = o; a--;) i.push(e[a]); for (a = o; a--;)
            if (n = i[a], n.parentNode) { if (r = n._jsvBnd)
                    for (r = r.slice(1).split("&"), n._jsvBnd = "", t = r.length; t--;) we(r[t], n._jsvLkEl, n);
                Ae(pe(n) + (n._df || "")) } }

    function we(e, n, r) { var i, o, a, s, l, d, c, p, f, u, v, g, h = $n[e]; if (n) n = n.targetTag || n, r._jsvLkEl = void 0;
        else if (h) { delete $n[e]; for (i in h.bnd) s = h.bnd[i], l = h.cbId, Oe(s) ? t([s]).off(Ft + l).off(Bt + l) : t(s).off(Bt + l), delete h.bnd[i]; if (o = h.linkCtx) { if (a = o.tag) { if (d = a.tagCtxs)
                        for (c = d.length; c--;)(p = d[c].map) && p.unmap();
                    f = a.linkedElem, a.onUnbind && a.onUnbind(a.tagCtx, o, a.ctx, !0), a.onDispose && a.onDispose(), a._elCnt || (a._prv && a._prv.parentNode.removeChild(a._prv), a._nxt && a._nxt.parentNode.removeChild(a._nxt)) }
                u = f && f[0] || o.elem, (v = u && u._jsvTr) && (me(f || t(u), v, "off"), u._jsvTr = void 0), g = o.view, "link" === g.type ? g.parent.removeViews(g._.key, void 0, !0) : delete g._.bnds[e] }
            delete Mt[h.cbId] } }

    function ke(e) { e ? (e = e.jquery ? e : t(e), e.each(function() { for (var e;
                (e = an(this, !0)) && e.parent;) e.parent.removeViews(e._.key, void 0, !0);
            ye(this.getElementsByTagName("*")) }), ye(e)) : (rn && (t(rn).off(un, Q).off("blur", "[contenteditable]", Q), rn = void 0), Fe.removeViews(), ye(document.body.getElementsByTagName("*"))) }

    function Ce(e) { return e.type === mn ? e[_n] : e.value }

    function je(e, t, n, r, i, o) { var a, s, l, d, c, p, f, u = 0,
            v = e === t; if (e) { for (l = fe(e) || [], a = 0, s = l.length; a < s; a++) { if (d = l[a], p = d.id, p === r && d.ch === i) { if (!o) break;
                    s = 0 }
                v || (c = "_" === d.ch ? cn[p] : $n[p].linkCtx.tag, d.open ? c._prv = t : d.close && (c._nxt = t)), u += p.length + 2 }
            u && e.setAttribute(fn, e.getAttribute(fn).slice(u)), f = t ? t.getAttribute(fn) : n._df, (s = f.indexOf("/" + r + i) + 1) && (f = l._tkns.slice(0, u) + f.slice(s + (o ? -1 : r.length + 1))), f && (t ? t.setAttribute(fn, f) : Z(n, f)) } else Z(n, ce(n._df, "#" + r + i)), o || t || Z(n, ce(n._df, "/" + r + i)) }

    function Ae(e) { var t, n, r, i; if (i = fe(e, !0, Dn))
            for (t = 0, n = i.length; t < n; t++) r = i[t], "_" === r.ch ? (r = cn[r.id]) && r.type && r.parent.removeViews(r._.key, void 0, !0) : we(r.id) }

    function Ie(e, n) { e.contents = function(e, n) { e !== !!e && (n = e, e = void 0); var r, i = t(this.nodes()); return i[0] && (r = n ? i.filter(n) : i, i = e && n ? r.add(i.find(n)) : r), i }, e.nodes = function(e, t, n) { var r, i = this,
                o = i._elCnt,
                a = !t && o,
                s = []; for (t = t || i._prv, n = n || i._nxt, r = a ? t === i._nxt ? i.parentElem.lastSibling : t : i._.inline === !1 ? t || i.linkCtx.elem.firstChild : t && t.nextSibling; r && (!n || r !== n);)(e || o || r.tagName !== yn) && s.push(r), r = r.nextSibling; return s }, e.childTags = function(e, t) { e !== !!e && (t = e, e = void 0); var n = this,
                r = n.link ? n : n.tagCtx.view,
                i = n._prv,
                o = n._elCnt,
                a = []; return r.link(void 0, n.parentElem, o ? i && i.previousSibling : i, n._nxt, void 0, { get: { tags: a, deep: e, name: t, id: n.link ? n._.id + "_" : n._tgId + "^" } }), a }, e.refresh = function(e) { var t, n, r = this,
                i = r.linkCtx,
                o = r.tagCtx.view; return r.disposed && F("Removed tag"), void 0 === e && (e = Je._tag(r, o, o.tmpl, xe(r), !0)), e + "" === e && (r.onUnbind && r.onUnbind(r.tagCtx, i, r.ctx), n = r._.inline ? bt : i.attr || te(r.parentElem, !0), t = G(e, i, n, r)), he(r), t || r }, e.update = function(e) { var t = this.linkedElem;
            t && Q({ target: t[0] }, void 0, e) }, n ? e.domChange = function() { var e = this.parentElem,
                n = t.hasData(e) && t._data(e).events,
                r = "jsv-domchange";
            n && n[r] && t(e).triggerHandler(r, arguments) } : (e.addViews = function(e, t) { var n, r = this,
                i = t.length,
                o = r.views;!r._.useKey && i && (n = o.length + i, n === r.data.length && ne(r, e, r.tmpl, o, t, r.ctx) !== !1 && (r._.srt || r.fixIndex(e + i))) }, e.removeViews = function(e, n, r, i) {
            function o(e) { var n, i, o, a, s, l, d = p[e]; if (d && d.link) { if (n = d._.id, r || (l = d.nodes()), d.removeViews(void 0, void 0, !0), d.type = void 0, a = d._prv, s = d._nxt, o = d.parentElem, r || (d._elCnt && je(a, s, o, n, "_"), t(l).remove()), !d._elCnt) try { a.parentNode.removeChild(a), s.parentNode.removeChild(s) } catch (c) {}
                    ee(d); for (i in d._.bnds) we(i);
                    delete cn[n] } } var a, s, l, d = this,
                c = !d._.useKey,
                p = d.views; if (c && (l = p.length), void 0 === e)
                if (c) { for (a = l; a--;) o(a);
                    d.views = [] } else { for (s in p) o(s);
                    d.views = {} }
            else if (void 0 === n && (c ? n = 1 : (o(e), delete p[e])), c && n && (i || l - n === d.data.length)) { for (a = e + n; a-- > e;) o(a);
                p.splice(e, n), d._.sort || d.fixIndex(e) } }, e.refresh = function() { var e = this,
                t = e.parent;
            t && (ne(e, e.index, e.tmpl, t.views, e.data, void 0, !0), ee(e)) }, e.fixIndex = function(e) { for (var t = this.views, n = t.length; e < n--;) t[n].index !== n && $e(t[n]).setProperty("index", n) }, e.link = se) }

    function Ee(e) { return this.tagCtx.view }

    function Te(e, t, n) { if ("set" === n.change) { for (var r = e.tgt, i = r.length; i-- && r[i].key !== n.path;);
            i === -1 ? n.path && !n.remove && $e(r).insert({ key: n.path, prop: n.value }) : n.remove ? $e(r).remove(i) : $e(r[i]).setProperty("prop", n.value) } }

    function Se(e, t, n) { var r, i = e.src,
            o = n.change; "set" === o ? "prop" === n.path ? $e(i).setProperty(t.target.key, n.value) : ($e(i).removeProperty(n.oldValue), $e(i).setProperty(n.value, t.target.prop)) : "remove" === o ? (r = n.items[0], $e(i).removeProperty(r.key), delete i[r.key]) : "insert" === o && (r = n.items[0], r.key && $e(i).setProperty(r.key, r.prop)) }

    function Ve(e) { return e.indexOf(".") < 0 }
    var Ne = t === !1;
    if (t = t || e.jQuery, !t || !t.fn) throw "JsViews requires jQuery";
    var Le, Be, Fe, Me, Pe, $e, Re, Ue, Oe, qe, De, Ke, He, Je, ze, Qe, We, Xe, Ze, Ge, Ye, et, tt, nt, rt = "v0.9.83",
        it = /^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,
        ot = /(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(!*?[#~]?[\w$.^]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?[#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=\s*[.^]|\s*$|[^([])|[)\]])([([]?))|(\s+)/g,
        at = /[ \t]*(\r\n|\n|\r)/g,
        st = /\\(['"])/g,
        lt = /['"\\]/g,
        dt = /(?:\x08|^)(onerror:)?(?:(~?)(([\w$_\.]+):)?([^\x08]+))\x08(,)?([^\x08]+)/gi,
        ct = /^if\s/,
        pt = /<(\w+)[>\s]/,
        ft = /[\x00`><"'&=]/g,
        ut = /[\x00`><\"'&=]/,
        vt = /^on[A-Z]|^convert(Back)?$/,
        gt = /^\#\d+_`[\s\S]*\/\d+_`$/,
        ht = ft,
        _t = 0,
        mt = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\0": "&#0;", "'": "&#39;", '"': "&#34;", "`": "&#96;", "=": "&#61;" },
        bt = "html",
        xt = "object",
        yt = "data-jsv-tmpl",
        wt = "jsvTmpl",
        kt = "For #index in nested block use #getIndex().",
        Ct = {},
        jt = e.jsrender,
        At = jt && t && !t.render,
        It = { template: { compile: C }, tag: { compile: w }, viewModel: { compile: I }, helper: {}, converter: {} };
    if (Me = { jsviews: rt, sub: { View: x, Err: l, tmplFn: P, parse: O, extend: d, extendCtx: D, syntaxErr: M, onStore: {}, addSetting: S, settings: { allowCode: !1 }, advSet: a, _ths: i, _tg: function() {}, _cnvt: h, _tag: b, _er: F, _err: B, _html: z, _cp: o, _sq: function(e) { return "constructor" === e && M(""), e } }, settings: { delimiters: c, advanced: function(e) { return e ? (d(Qe, e), Je.advSet(), We) : Qe } }, getCtx: o, map: V }, (l.prototype = new Error).constructor = l, f.depends = function() { return [this.get("item"), "index"] }, u.depends = "index", x.prototype = { get: p, getIndex: u, getRsc: m, getTmpl: g, hlp: v, _is: "view" }, Je = Me.sub, We = Me.settings, !(jt || t && t.render)) { for (Le in It) T(Le, It[Le]);
        De = Me.converters, Ke = Me.helpers, He = Me.tags, Je._tg.prototype = { baseApply: k, cvtArgs: _ }, Fe = Je.topView = new x, t ? (t.fn.render = J, Re = t.expando, t.observable && (d(Je, t.views.sub), Me.map = t.views.map)) : (t = {}, Ne && (e.jsrender = t), t.renderFile = t.__express = t.compile = function() { throw "Node.js: use npm jsrender, or jsrender-node.js" }, t.isFunction = function(e) { return "function" == typeof e }, t.isArray = Array.isArray || function(e) { return "[object Array]" === {}.toString.call(e) }, Je._jq = function(e) { e !== t && (d(e, t), t = e, t.fn.render = J, delete t.jsrender, Re = t.expando) }, t.jsrender = rt), ze = Je.settings, ze.allowCode = !1, Ue = t.isFunction, t.render = Ct, t.views = Me, t.templates = qe = Me.templates; for (tt in ze) S(tt);
        (We.debugMode = function(e) { return void 0 === e ? ze.debugMode : (ze.debugMode = e, ze.onError = e + "" === e ? new Function("", "return '" + e + "';") : Ue(e) ? e : void 0, We) })(!1), Qe = ze.advanced = { useViews: !1, _jsv: !1 }, He({ "if": { render: function(e) { var t = this,
                        n = t.tagCtx,
                        r = t.rendering.done || !e && (arguments.length || !n.index) ? "" : (t.rendering.done = !0, t.selected = n.index, n.render(n.view, !0)); return r }, flow: !0 }, "for": { render: function(e) { var t, n = !arguments.length,
                        r = this,
                        i = r.tagCtx,
                        o = "",
                        a = 0; return r.rendering.done || (t = n ? i.view.data : e, void 0 !== t && (o += i.render(t, n), a += Oe(t) ? t.length : 1), (r.rendering.done = a) && (r.selected = i.index)), o }, flow: !0 }, props: { baseTag: "for", dataMap: V(H), flow: !0 }, include: { flow: !0 }, "*": { render: o, flow: !0 }, ":*": { render: o, flow: !0 }, dbg: Ke.dbg = De.dbg = s }), De({ html: z, attr: z, url: function(e) { return void 0 != e ? encodeURI("" + e) : null === e ? e : "" } }) }
    if (ze = Je.settings, Oe = (t || jt).isArray, We.delimiters("{{", "}}", "^"), At && jt.views.sub._jq(t), Me = t.views, Je = Me.sub, Ue = t.isFunction, Oe = t.isArray, Re = t.expando, !t.observe) { var Et = t.event.special,
            Tt = [].slice,
            St = [].splice,
            Vt = [].concat,
            Nt = parseInt,
            Lt = /\S+/g,
            Bt = Je.propChng = Je.propChng || "propertyChange",
            Ft = Je.arrChng = Je.arrChng || "arrayChange",
            Mt = {},
            Pt = Bt + ".observe",
            $t = 1,
            Rt = 1,
            Ut = 1,
            Ot = t.hasData,
            qt = t.data,
            Dt = {},
            Kt = function(e) { return e._cId = e._cId || ".obs" + Rt++ },
            Ht = function(e, t) { return this._data = t, this._ns = e, this },
            Jt = function(e, t) { return this._data = t, this._ns = e, this },
            zt = function(e) { return Oe(e) ? [e] : e },
            Qt = function(e, t, n) { e = e ? Oe(e) ? e : [e] : []; var r, i, o = t,
                    a = o,
                    s = e && e.length,
                    l = []; for (r = 0; r < s; r++) i = e[r], Ue(i) ? l = l.concat(Qt(i.call(t, t, n), t)) : "" + i === i ? (a !== o && l.push(o = a), l.push(i)) : (t = a = i, a !== o && l.push(o = a)); return l },
            Wt = function(e, t) { for (var n in e) return;
                delete Mt[t] },
            Xt = function(e, t) {
                function n(e) { return typeof e === xt && (f[0] || p && Oe(e)) } if (!e.data || !e.data.off) { var r, i, o, a = t.oldValue,
                        s = t.value,
                        l = e.data,
                        d = l.observeAll,
                        c = l.cb,
                        p = !c.noArray,
                        f = l.paths,
                        u = l.ns;
                    e.type === Ft ? (c.array || c).call(l, e, t) : l.prop !== t.path && "*" !== l.prop || (d ? (r = d._path + "." + t.path, i = d.filter, o = [e.target].concat(d.parents()), n(a) && Zt(p, u, [a], f, c, !0, i, [o], r), n(s) && Zt(p, u, [s], f, c, void 0, i, [o], r)) : (n(a) && Zt(p, u, [a], f, c, !0), n(s) && Zt(p, u, [s], f, c)), l.cb(e, t)) } },
            Zt = function() { var e = Vt.apply([], arguments); return Pe.apply(e.shift(), e) },
            Gt = function(e, t, n) { en(this._ns, this._data, e, t, [], "root", n) },
            Yt = function(e, t) { Gt.call(this, e, t, !0) },
            en = function(e, t, n, r, i, o, a, s) {
                function l(e, t) { for (p = e.length, u = o + "[]"; p--;) d(e, p, t, 1) }

                function d(t, i, o, a) { var l, d;
                    i !== Re && (l = $e._fltr(u, t[i], v, r)) && (d = v.slice(), a && g && d[0] !== g && d.unshift(g), en(e, l, n, r || (a ? void 0 : 0), d, u, o, s)) }

                function c(e, t) { switch (o = e.data.observeAll._path, g = e.target, t.change) {
                        case "insert":
                            l(t.items); break;
                        case "remove":
                            l(t.items, !0); break;
                        case "set":
                            u = o + "." + t.path, d(t, "oldValue", !0), d(t, "value") }
                    g = void 0, n.apply(this, arguments) } var p, f, u, v, g, h, _ = !s || s.un || !a; if (t && typeof t === xt) { if (v = [t].concat(i), f = Oe(t) ? "" : "*", s && _ && Ot(t) && s[h = qt(t).obId]) return void s[h]++; if (s || (s = { un: a }), n) { if (f || 0 !== r)
                            if (c._cId = Kt(n), _) Pe(e, t, f, c, a, r, v, o), h = qt(t).obId, s[h] = (s[h] || 0) + 1;
                            else { if (--s[qt(t).obId]) return;
                                Pe(e, t, f, c, a, r, v, o) } } else s && (s[qt(t).obId] = 1), Pe(e, t, f, void 0, a, r, v, o); if (f)
                        for (p in t) u = o + "." + p, d(t, p, a);
                    else l(t, a) } },
            tn = function(e) { return e.indexOf(".") < 0 && e.indexOf("[") < 0 },
            nn = function() { return [].push.call(arguments, !0), Pe.apply(this, arguments) };
        Pe = function() {
            function e() {
                function i(e, r, i, o) { var a, s, l = Ot(P),
                        d = zt(P),
                        c = E,
                        p = T; if (e = n ? e + "." + n : e, !g && (o || i))
                        for (y = l && t._data(P), y = y && y.events, y = y && y[i ? Ft : Bt], b = y && y.length; b--;)
                            if (x = y[b] && y[b].data, x && (o && x.ns !== n || !o && x.ns === n && x.cb && x.cb._cId === h._cId)) return;
                    g || o ? t(d).off(e, Xt) : (s = i ? {} : { fullPath: u, paths: r ? [r] : [], prop: f }, s.ns = n, s.cb = h, T && (s.observeAll = { _path: p, path: function() { return a = c.length, p.replace(/[[.]/g, function(e) { return a--, "[" === e ? "[" + t.inArray(c[a - 1], c[a]) : "." }) }, parents: function() { return c }, filter: S }), t(d).on(e, null, s, Xt), j && (j[qt(P).obId || qt(P, "obId", $t++)] = P)) }

                function a(t) { var n = M; return t.ob = w(t, n), t.cb = function(i, o) { var a = t.ob,
                            l = t.sb,
                            d = w(t, n);
                        d !== a && (typeof a === xt && (s(a, !0), (l || r && Oe(a)) && e([a], l, h, w, !0)), t.ob = d, typeof d === xt && (s(d), (l || r && Oe(d)) && e([d], l, h, w))), h(i, o) } }

                function s(e, t, n, o) { if (r) { var a = P,
                            s = T;
                        P = e, o && (P = e[o], T += "." + o), S && P && (P = $e._fltr(T, P, o ? [e].concat(E) : E, S)), P && (n || Oe(P)) && i(Ft + ".observe" + (h ? Kt(h) : ""), void 0, !0, t), P = a, T = s } } var l, d, c, p, f, u, v, g, h, _, m, b, x, y, w, k, C, j, A, I, E, T, S, V, N, L = Pt,
                    B = 1 != this ? Vt.apply([], arguments) : Tt.call(arguments),
                    F = B.pop() || !1,
                    M = B.shift(),
                    P = M,
                    $ = B.length; if (F + "" === F && (T = F, E = B.pop(), S = B.pop(), F = !!B.pop(), $ -= 3), F === !!F && (g = F, F = B[$ - 1], F = !$ || F + "" === F || F && !Ue(F) ? void 0 : ($--, B.pop()), g && !$ && Ue(M) && (F = M, M = void 0)), h = F, $ && Ue(B[$ - 1]) && (k = w = h, h = B.pop(), $--), !g || !h || h._cId) { for (L += h ? (m = h._inId || "", g ? h._cId + m : (_ = Kt(h)) + m) : "", _ && !g && (j = Mt[_] = Mt[_] || {}), V = n && n.match(Lt) || [""], N = V.length; N--;) { if (n = V[N], M && (u = B[0], !u || u + "" !== u) && (Oe(M) ? s(M, g, !0) : g && i(L, "")), g && !$ && !M)
                            for (d in Mt) { d = Mt[d]; for (x in d) P = d[x], Oe(P) ? s(P, g, g) : i(L, "") }
                        for (A = 0, l = 0; l < $; l++)
                            if (u = B[l], "" !== u) { if (u && u._cp && (w = Je._gccb(u[0]), o = M = u[0].data, u = u[1]), P = M, "" + u === u) { if (p = u.split("^"), p[1] && (A = p[0].split(".").length, u = p.join("."), A = u.split(".").length - A), w && (C = w(u, M, A), w = k), C) { $ += C.length - 1, St.apply(B, [l--, 1].concat(C)); continue }
                                    p = u.split(".") } else Ue(u) || (u && u._jsv ? (I = g ? u.cb : a(u), I.noArray = !r, I._cId = h._cId, I._inId = I._inId || ".obIn" + Ut++, (u.bnd || u.prm && u.prm.length || !u.sb) && e([P], u.path, [o], u.prm, I, w, g), u.sb && e([u.ob], u.sb, h, w, g), u = o, P = void 0) : P = u), p = [M = u]; for (; P && void 0 !== (f = p.shift());)
                                    if (typeof P === xt) { if ("" + f === f) { if ("" === f) continue; if (p.length < A + 1 && !P.nodeType) { if (!g && (y = Ot(P) && t._data(P))) { for (y = y.events, y = y && y[Bt], b = y && y.length, c = 0; b--;) x = y[b].data, !x || x.ns !== n || x.cb._cId !== h._cId || x.cb._inId !== h._inId || x.prop !== f && "*" !== x.prop && "**" !== x.prop || ((d = p.join(".")) && x.paths.push(d), c++); if (c) { P = P[f]; continue } } if ("*" === f || "**" === f) { if (!g && y && y.length && i(L, "", !1, !0), "*" === f) { i(L, ""); for (d in P) d !== Re && s(P, g, void 0, d) } else t.observable(n, P)[(g ? "un" : "") + "observeAll"](h); break }
                                                f && i(L + ".p_" + f, p.join("^")) }
                                            T && (T += "." + f), f = P[f] } if (Ue(f)) {
                                            (v = f.depends) && e([P], Qt(v, P, h), h, w, g); break }
                                        P = f, g && P === M && (l > $ - 2 || B[l + 1] + "" !== B[l + 1]) && i(L, "") }
                                s(P, g) } } return _ && Wt(j, _), { cbId: _, bnd: j } } } var n, r = 0 != this,
                i = Tt.call(arguments),
                o = i[0]; return o + "" === o && r && (n = o, i.shift(), o = i[0]), e.apply(1, i) }, $e = function(e, t) { return 1 === arguments.length && (t = e, e = ""), Oe(t) ? new Jt(e, t) : new Ht(e, t) }, Je.getDeps = function() { var e = arguments; return function() { for (var t, n, r = [], i = e.length; i--;) t = e[i--], n = e[i], n && (r = r.concat(Ue(n) ? n(t, t) : n)); return r } }, t.observable = $e, $e._fltr = function(e, t, n, r) { if (!r || !Ue(r) || r(e, t, n)) return t = Ue(t) ? t.set && t.call(n[0]) : t, typeof t === xt && t }, $e.Object = Ht, $e.Array = Jt, t.observe = $e.observe = Pe, t.unobserve = $e.unobserve = nn, $e._apply = Zt, Ht.prototype = { _data: null, observeAll: Gt, unobserveAll: Yt, data: function() { return this._data }, setProperty: function(e, t, n) { e = e || ""; var r, i, o, a = e + "" !== e,
                    s = this,
                    l = s._data; if (l)
                    if (a)
                        if (n = t, Oe(e))
                            for (r = e.length; r--;) i = e[r], s.setProperty(i.name, i.value, void 0 === n || n);
                        else
                            for (r in e) s.setProperty(r, e[r], n);
                else if (e !== Re) { for (o = e.split(/[.^]/); l && o.length > 1;) l = l[o.shift()];
                    l && s._setProperty(l, o[0], t, n) } return s }, removeProperty: function(e) { return this.setProperty(e, Dt), this }, _setProperty: function(e, t, n, r) { var i, o, a, s = t ? e[t] : e;
                Ue(s) && s.set && (e = e._wrp || e, o = s, i = o.set === !0 ? o : o.set, s = o.call(e)), (s !== n || r && s != n) && (!(s instanceof Date) || s > n || s < n) && (i ? (i.call(e, n), n = o.call(e)) : (a = n === Dt) ? void 0 !== s ? (delete e[t], n = void 0) : t = void 0 : t && (e[t] = n), t && this._trigger(e, { change: "set", path: t, value: n, oldValue: s, remove: a })) }, _trigger: function(e, n) { t(e).triggerHandler(Bt + (this._ns ? "." + /^\S+/.exec(this._ns)[0] : ""), n) } }, Jt.prototype = { _data: null, observeAll: Gt, unobserveAll: Yt, data: function() { return this._data }, insert: function(e, t) { var n = this._data; return 1 === arguments.length && (t = e, e = n.length), e = Nt(e), e > -1 && (t = Oe(t) ? t : [t], t.length && this._insert(e, t)), this }, _insert: function(e, t) { var n = this._data,
                    r = n.length;
                e > r && (e = r), St.apply(n, [e, 0].concat(t)), this._trigger({ change: "insert", index: e, items: t }, r) }, remove: function(e, t) { var n, r = this._data; return void 0 === e && (e = r.length - 1), e = Nt(e), t = t ? Nt(t) : 0 === t ? 0 : 1, t > 0 && e > -1 && (n = r.slice(e, e + t), (t = n.length) && this._remove(e, t, n)), this }, _remove: function(e, t, n) { var r = this._data,
                    i = r.length;
                r.splice(e, t), this._trigger({ change: "remove", index: e, items: n }, i) }, move: function(e, t, n) { return n = n ? Nt(n) : 0 === n ? 0 : 1, e = Nt(e), t = Nt(t), n > 0 && e > -1 && t > -1 && e !== t && this._move(e, t, n), this }, _move: function(e, t, n) { var r, i = this._data,
                    o = i.length,
                    a = e + n - o;
                a > 0 && (n -= a), n && (r = i.splice(e, n), t > i.length && (t = i.length), St.apply(i, [t, 0].concat(r)), this._trigger({ change: "move", oldIndex: e, index: t, items: r }, o)) }, refresh: function(e, t) {
                function n() { o && (l.insert(i - o, d), u += o, r += o, o = 0, d = []) } var r, i, o, a, s, l = this,
                    d = [],
                    c = l._data,
                    p = c.slice(),
                    f = c.length,
                    u = f,
                    v = e.length; for (l._srt = !0, i = o = 0; i < v; i++)
                    if ((a = e[i]) === c[i - o]) n();
                    else { for (r = i - o; r < u && a !== c[r]; r++); if (r < u) { for (n(), s = 0; s++ < v - r && e[i + s] === c[r + s];);
                            l.move(r, i, s), i += s - 1 } else o++, d.push(a) }
                return n(), u > i && l.remove(i, u - i), l._srt = void 0, l._trigger({ change: "refresh", oldItems: p }, f), l }, _trigger: function(e, n) { var r = this,
                    i = r._data,
                    o = i.length,
                    a = t([i]);
                r._srt ? e.refresh = !0 : o !== n && a.triggerHandler(Bt, { change: "set", path: "length", value: o, oldValue: n }), a.triggerHandler(Ft + (r._ns ? "." + /^\S+/.exec(r._ns)[0] : ""), e) } }, Et[Bt] = Et[Ft] = { remove: function(e) { var n, r, i, o, a, s = e.data; if (s && (s.off = !0, s = s.cb) && (n = Mt[s._cId])) { for (i = t._data(this).events[e.type], o = i.length; o-- && !r;) r = (a = i[o].data) && a.cb && a.cb._cId === s._cId;
                    r || (delete n[qt(this).obId], Wt(n, s._cId)) } } }, Me.map = function(e) {
            function n(t, n, r, i) { var o, a = this;
                this.src && this.unmap(), typeof t === xt && (a.src = t, a.tgt = r || a.tgt || [], a.options = n || a.options, a.update(), i || (e.obsSrc && $e(a.src).observeAll(a.obs = function(t, n) { o || (o = !0, e.obsSrc(a, t, n), o = void 0) }, a.srcFlt), e.obsTgt && $e(a.tgt).observeAll(a.obt = function(t, n) { o || (o = !0, e.obsTgt(a, t, n), o = void 0) }, a.tgtFlt))) } return Ue(e) && (e = { getTgt: e }), e.baseMap && (e = t.extend({}, e.baseMap, e)), e.map = function(e, t, r, i) { return new n(e, t, r, i) }, (n.prototype = { srcFlt: e.srcFlt || tn, tgtFlt: e.tgtFlt || tn, update: function(t) { var n = this;
                    $e(n.tgt).refresh(e.getTgt(n.src, n.options = t || n.options)) }, unmap: function() { var e = this;
                    e.src && (e.obs && $e(e.src).unobserveAll(e.obs, e.srcFlt), e.obt && $e(e.tgt).unobserveAll(e.obt, e.tgtFlt), e.src = void 0) }, map: n, _def: e }).constructor = n, e }, Je.advSet = function() { Je._gccb = this._gccb, e._jsv = ze.advanced._jsv ? { cbBindings: Mt } : void 0 } }
    if (We = Me.settings, ze = Je.settings, Qe = ze.advanced, De = Me.converters, t.templates = qe = Me.templates, He = Me.tags, pt = /<(?!script)(\w+)[>\s]/, t.link) return t;
    ze.trigger = !0;
    var rn, on, an, sn, ln, dn, cn, pn, fn = "data-jsv",
        un = "change.jsv",
        vn = "onBeforeChange",
        gn = "onAfterChange",
        hn = "onAfterCreate",
        _n = "checked",
        mn = "checkbox",
        bn = "radio",
        xn = "none",
        yn = "SCRIPT",
        wn = "true",
        kn = '"></script>',
        Cn = '<script type="jsv',
        jn = fn + "-df",
        An = "script,[" + fn + "]",
        In = { value: "val", input: "val", html: bt, text: "text" },
        En = { from: "value", to: "value" },
        Tn = 0,
        Sn = t.cleanData,
        Vn = We.delimiters,
        Nn = document.createDocumentFragment(),
        Ln = document.querySelector,
        Bn = { ol: 1, ul: 1, table: 1, tbody: 1, thead: 1, tfoot: 1, tr: 1, colgroup: 1, dl: 1, select: 1, optgroup: 1, svg: 1, svg_ns: 1 },
        Fn = { tr: "table" },
        Mn = { br: 1, img: 1, input: 1, hr: 1, area: 1, base: 1, col: 1, link: 1, meta: 1, command: 1, embed: 1, keygen: 1, param: 1, source: 1, track: 1, wbr: 1 },
        Pn = {},
        $n = {},
        Rn = 1,
        Un = /^#(view\.?)?/,
        On = /((\/>)|<\/(\w+)>|)(\s*)([#\/]\d+(?:_|(\^)))`(\s*)(<\w+(?=[\s\/>]))?|\s*(?:(<\w+(?=[\s\/>]))|<\/(\w+)>(\s*)|(\/>)\s*|(>)|$)/g,
        qn = /(#)()(\d+)(_)/g,
        Dn = /(#)()(\d+)([_^])/g,
        Kn = /(?:(#)|(\/))(\d+)(_)/g,
        Hn = /(#)()(\d+)(\^)/g,
        Jn = /(?:(#)|(\/))(\d+)([_^])([-+@\d]+)?/g,
        zn = /&(\d+)\+?/g,
        Qn = e.getComputedStyle;
    if ($e = t.observable, !$e) throw requiresStr + "JsObservable";
    return Pe = $e.observe, Je.onStore.template = function(e, n) { n.link = oe, e && (t.link[e] = function() { return oe.apply(n, arguments) }) }, Je.viewInfos = fe, (We.delimiters = function() { var e = Vn.apply(0, arguments); return Vn !== c && (e = c.apply(0, arguments)), on = new RegExp("(?:^|\\s*)([\\w-]*)(\\" + et + ")?(\\" + Ze + Je.rTag + "(:\\w*)?\\" + Ge + ")", "g"), e })(), Je.addSetting("trigger"), De.merge = function(e) { var t, n = this.linkCtx._val || "",
            r = this.tagCtx.props.toggle; return r && (t = r.replace(/[\\^$.|?*+()[{]/g, "\\$&"), t = "(\\s(?=" + t + "$)|(\\s)|^)(" + t + "(\\s|$))", n = n.replace(new RegExp(t), "$2"), e = n + (e ? (n && " ") + r : "")), e }, He({ on: { attr: xn, init: function(e) { for (var n, r = this, i = 0, o = e.args, a = o.length; i < a && !Ue(o[i]); i++);
                r._hi = a > i && i + 1, r._.inline && (Je.rTmpl.exec(n = e.tmpl.markup) || (r.template = "<button>" + (t.trim(n) || e.params.args[i] || "noop") + "</button>"), r.attr = bt) }, onAfterLink: function(e, n) { var r, i, o, a = this,
                    s = a._hi,
                    l = e.args,
                    d = l.length,
                    c = e.props,
                    p = c.data,
                    f = e.view,
                    u = c.context;
                s && (r = l[s - 1], i = l.slice(s), l = l.slice(0, s - 1), a._sel = l[1], o = a.activeElem = a.activeElem || t(a._.inline ? (a._sel = l[1] || "*", a.parentElem) : n.elem), u || (u = /^(.*)[\.^][\w$]+$/.exec(e.params.args.slice(-i.length - 1)[0]), u = u && Je.tmplFn(Ze + ":" + u[1] + Ge, f.tmpl, !0)(n.data, f)), a._evs && a.onUnbind(), o.on(a._evs = l[0] || "click", a._sel, void 0 == p ? null : p, a._hlr = function(e) { var t, o = !a._.inline; if (!o)
                        for (t = a.contents("*"), d = t.length; !o && d--;) t[d].contains(e.target) && (o = !0); if (o) return r.apply(u || n.data, [].concat(i, e, { change: e.type, view: f, linkCtx: n }, i.slice.call(arguments, 1))) })) }, onUpdate: function() { return !1 }, onUnbind: function() { var e = this;
                e.activeElem && e.activeElem.off(e._evs, e._sel, e._hlr) }, flow: !0, contentCtx: Ee, dataBoundOnly: !0 }, radiogroup: { init: function(e) { this.name = e.props.name || "jsv" + Math.random() }, onBind: function(e, n) { var r, i = this,
                    o = i.linkedElem = i._.inline ? i.contents(!0, "input[type=radio]") : t(n.elem).find("input[type=radio]"),
                    a = o.length; for (i._.inline ? (r = i.contents("*")[0], r = r && t.view(r).ctx.tag === i.parent ? r : i.parentElem) : r = n.elem; a--;) o[a].name = o[a].name || i.name;
                t(r).on("jsv-domchange", function(e, t) { var n, s = t.ctx.parentTags; if (!i._.inline || r !== i.parentElem || s && s[i.tagName] === i)
                        for (o = i.linkedElem = i.contents(!0, "input[type=radio]"), a = o.length; a--;) n = o[a], n._jsvLkEl = i, n.name = n.name || i.name, be($n[i._tgId], i, n), n._jsvBnd = "&" + i._tgId + "+", n.checked = i.cvtArgs()[0] === n.value }) }, onUpdate: function(e, t, n) { return !1 }, contentCtx: Ee, dataBoundOnly: !0 } }), d(He["for"], { onArrayChange: function(e, t, n, r) { var i, o = e.target,
                a = o.length,
                s = this,
                l = t.change; if (s._.noVws || s.tagCtxs[1] && ("insert" === l && a === t.items.length || "remove" === l && !a)) s.refresh();
            else
                for (i in s._.arrVws) i = s._.arrVws[i], i.data === o && i._.onArrayChange.apply(i, arguments);
            s.domChange(n, r, t), e.done = !0 }, onAfterLink: function(e, t) { var n, r, i, o, a = this,
                s = a._ars || {},
                l = a.tagCtxs,
                d = l.length,
                c = a.selected || 0; for (n = 0; n <= c; n++) e = l[n], o = e.map ? e.map.tgt : e.args.length ? e.args[0] : e.view.data, (i = s[n]) && o !== i[0] && (Pe(i[0], i[1], !0), delete s[n]), !s[n] && Oe(o) && (Pe(o, r = function(n, r) { var i = e;
                a.onArrayChange(n, r, i, t) }), s[n] = [o, r]); for (n = c + 1; n < d; n++)(i = s[n]) && (Pe(i[0], i[1], !0), delete s[n]);
            a._ars = s }, onDispose: function() { var e, t = this; for (e in t._ars) Pe(t._ars[e][0], t._ars[e][1], !0) } }), d(He["if"], { onUpdate: function(e, t, n) { var r, i, o; for (r = 0; i = this.tagCtxs[r]; r++)
                if (o = i.props.tmpl !== n[r].props.tmpl || i.args.length && !(i = i.args[0]) != !n[r].args[0], !this.convert && i || o) return o;
            return !1 }, onAfterLink: function(e, t, n, r, i) { i && this.domChange(e, t, i) } }), He("props", { baseTag: "for", dataMap: Me.map({ getTgt: He.props.dataMap.getTgt, obsSrc: Te, obsTgt: Se, tgtFlt: Ve }), flow: !0 }), d(t, { view: an = function(e, n, r) {
            function i(e, t) { if (e)
                    for (a = fe(e, t, qn), l = 0, d = a.length; l < d && (!(o = cn[a[l].id]) || !(o = o && r ? o.get(!0, r) : o)); l++); }
            n !== !!n && (r = n, n = void 0); var o, a, s, l, d, c, p, f = 0,
                u = document.body; if (e && e !== u && Fe._.useKey > 1 && (e = "" + e === e ? t(e)[0] : e.jquery ? e[0] : e)) { if (n) { if (i(e._df, !0), !o)
                        for (p = Ln ? e.querySelectorAll(An) : t(An, e).get(), c = p.length, s = 0; !o && s < c; s++) i(p[s]); return o } for (; e;) { if (a = fe(e, void 0, Kn))
                        for (c = a.length; c--;)
                            if (o = a[c], o.open) { if (f < 1) return o = cn[o.id], o && r ? o.get(r) : o || Fe;
                                f-- } else f++;
                    e = e.previousSibling || e.parentNode } } return Fe }, link: ae, unlink: ke, cleanData: function(e) { e.length && Tn && ye(e), Sn.apply(t, arguments) } }), d(t.fn, { link: function(e, t, n, r, i, o, a) { return ae(e, this, t, n, r, i, o, a) }, unlink: function() { return ke(this) }, view: function(e, t) { return an(this[0], e, t) } }), t.each([bt, "replaceWith", "empty", "remove"], function(e, n) { var r = t.fn[n];
        t.fn[n] = function() { var e;
            Tn = 1; try { e = r.apply(this, arguments) } finally { Tn = 0 } return e } }), Ie(d(Fe = Je.topView, { tmpl: { links: {} } })), cn = { 0: Fe }, Me.getCtx = function(e) { return e && e._cp && (e = e[1](e[0].data, e[0], Je)), e }, Je._cp = function(e, t, n) { if (n.linked) { t = Ze + ":" + t + Ge; var r = n.tmpl,
                i = Fe.tmpl.links,
                o = i[t];
            o || (i[t] = o = Je.tmplFn(t, r, !0)), e = [n, o], e._cp = !0 } return e }, Je._ceo = function Wn(e) { var t, n = e,
            r = e.length; if (r)
            for (n = []; r--;) t = e[r], t._jsv && (t = d({}, t), t.prm = Wn(t.prm)), n.unshift(t); return n }, Je._gccb = function(e) { return function(t, n, r) { var i, o, a, s, l, d, c; if (e && t) { if (t._jsv) return t._jsv.call(e.tmpl, n, e, Je); if ("~" === t.charAt(0)) return "~tag" === t.slice(0, 4) && (o = e.ctx, "." === t.charAt(4) && (i = t.slice(5).split("."), o = o.tag), i) ? o ? [o, i.join("."), n] : [] : (t = t.slice(1).split("."), (s = e.hlp(l = t.shift(), !0)) && (s._cp ? (t.length && (d = "." + t.join("."), l = s[c = s.length - 1], l._jsv ? (l.sb = d, l.bnd = !!r) : (s[c] = (l + d).replace("#data.", ""), "#view" === l.slice(0, 5) && (s[c] = s[c].slice(6), s.splice(c, 0, e)))), a = [s]) : (t.length || Ue(s)) && (a = [s, t.join("."), n])), a || []); if ("#" === t.charAt(0)) return "#data" === t ? [] : [e, t.replace(Un, ""), n] } } }, pn = Je.advSet, Je.advSet = function() { pn.call(Je), e._jsv = Qe._jsv ? d(e._jsv || {}, { views: cn, bindings: $n }) : void 0, sn = Qe.linkAttr, ln = An + ",[" + sn + "]", dn = Qe._wm, dn.optgroup = dn.option, dn.tbody = dn.tfoot = dn.colgroup = dn.caption = dn.thead, dn.th = dn.td }, We.advanced({ linkAttr: "data-link", useViews: !1, noValidate: !1, _wm: { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], svg_ns: [1, "<svg>", "</svg>"], div: t.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] }, _fe: { input: { from: Ce, to: "value" }, textarea: En, select: En, optgroup: { to: "label" } } }), t
}, window);
//# sourceMappingURL=jsviews.min.js.map