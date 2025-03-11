import { d as w, q as O, i as _, h as P, s as b, k as z, c as B, o as V, l as h, r as p, p as S, t as j, n as m, f as i } from "./vendor-DDV2DXlJ.js";
import { c as R, w as $ } from "./utils-lVZsWjzZ.js";
import K from "async-validator";
const q = {
  prop: String,
  label: String,
  rules: [Array, Object],
  showMessage: {
    type: Boolean,
    default: !0
  }
}, D = Symbol(""), E = {
  model: Object,
  rules: {
    type: Object
  },
  showMessage: {
    type: Boolean,
    default: !0
  }
}, I = Symbol(), T = /* @__PURE__ */ w({
  name: "z-form-item",
  inheritAttrs: !1,
  __name: "form-item",
  props: q,
  setup(f) {
    const t = O(I), o = R("form-item"), a = f, l = _(""), u = _(""), d = (e) => e ? Array.isArray(e) ? e : [e] : [], s = P(() => {
      const e = d(a.rules), c = t == null ? void 0 : t.rules;
      if (c && a.prop) {
        const r = c[a.prop];
        if (r)
          return e.concat(d(r));
      }
      return e;
    }), n = (e) => s.value.filter((r) => !r.trigger || !e ? !0 : Array.isArray(r.trigger) ? r.trigger.includes(e) : r.trigger === e), v = () => {
      l.value = "success", u.value = "";
    }, y = (e) => {
      l.value = "error", u.value = e ? e.errors[0].message : "";
    }, F = {
      ...a,
      validate: async (e, c) => {
        const r = n(e), g = a.prop, M = new K({
          [g]: r
        }), N = t == null ? void 0 : t.model;
        return M.validate({
          [g]: N[g]
        }).then(() => {
          v();
        }).catch((A) => (y(A), Promise.reject(A)));
      }
    };
    return b(D, F), z(() => {
      t == null || t.addField(F);
    }), (e, c) => (V(), B("div", {
      class: m([
        i(o).b(),
        i(o).is("success", l.value === "success"),
        i(o).is("error", l.value === "error")
      ])
    }, [
      h("label", {
        class: m(i(o).e("label"))
      }, [
        p(e.$slots, "label", {}, () => [
          S(j(e.label), 1)
        ])
      ], 2),
      h("div", {
        class: m(i(o).e("content"))
      }, [
        p(e.$slots, "default"),
        h("div", {
          class: m(i(o).e("error"))
        }, [
          p(e.$slots, "error", {}, () => [
            S(j(u.value), 1)
          ])
        ], 2)
      ], 2)
    ], 2));
  }
}), G = /* @__PURE__ */ w({
  name: "z-form",
  inheritAttrs: !1,
  __name: "form",
  props: E,
  setup(f, { expose: t }) {
    const o = f, a = [], l = async (s) => {
      let n = {};
      for (const v of a)
        try {
          await v.validate("");
        } catch (y) {
          n = {
            ...n,
            ...y.fields
          };
        }
      if (Object.keys(n).length === 0) return s == null ? void 0 : s(!0);
      if (s)
        s == null || s(!1, n);
      else
        return Promise.reject(n);
    }, d = {
      ...o,
      addField: (s) => {
        a.push(s);
      }
    };
    return b(I, d), t({
      validate: l
    }), (s, n) => (V(), B("form", null, [
      p(s.$slots, "default")
    ]));
  }
}), U = $(T), W = $(G);
export {
  D as F,
  U as a,
  W as b
};
