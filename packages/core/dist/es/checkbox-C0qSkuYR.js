import { d as g, h as v, i as C, j as V, k as y, c as l, o as r, l as b, e as h, m as B, v as N, n as c, f as i, r as w, F as x, p as S, t as $ } from "./vendor-DDV2DXlJ.js";
import { c as z, w as D } from "./utils-lVZsWjzZ.js";
const E = {
  modelValue: {
    type: [Boolean, String, Number]
  },
  indeterminate: Boolean,
  disabled: Boolean,
  label: {
    type: String
  }
}, F = {
  "update:modelValue": (a) => !0,
  change: (a) => !0
}, M = ["disabled", "value"], R = /* @__PURE__ */ g({
  name: "z-checkbox",
  __name: "checkbox",
  props: E,
  emits: F,
  setup(a, { emit: f }) {
    const t = z("checkbox"), n = a, u = f, d = v({
      get() {
        return n.modelValue;
      },
      set(e) {
        u("update:modelValue", e);
      }
    });
    function k(e) {
      const o = !!e.target.checked;
      u("change", o);
    }
    const m = C(null);
    function p(e) {
      m.value.indeterminate = e;
    }
    return V(() => n.indeterminate, p), y(() => {
      p(n.indeterminate);
    }), (e, s) => (r(), l("label", {
      class: c(i(t).b())
    }, [
      b("span", {
        class: c(i(t).e("input"))
      }, [
        B(b("input", {
          type: "checkbox",
          "onUpdate:modelValue": s[0] || (s[0] = (o) => d.value = o),
          ref_key: "inputRef",
          ref: m,
          disabled: e.disabled,
          value: e.label,
          onChange: k
        }, null, 40, M), [
          [N, d.value]
        ])
      ], 2),
      e.$slots.default || e.label ? (r(), l("span", {
        key: 0,
        class: c(i(t).e("label"))
      }, [
        w(e.$slots, "default"),
        e.$slots.default ? h("", !0) : (r(), l(x, { key: 0 }, [
          S($(e.label), 1)
        ], 64))
      ], 2)) : h("", !0)
    ], 2));
  }
}), P = D(R);
export {
  P as C
};
