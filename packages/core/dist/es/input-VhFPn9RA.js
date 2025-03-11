import { y as m, d as T, q, u as K, z as M, i as V, j as _, h as k, k as D, A as G, c as d, o as n, l as b, e as p, f as s, n as l, r as f, B as H, b as B, w as C, p as I, C as J } from "./vendor-DDV2DXlJ.js";
import { c as L, w as O } from "./utils-lVZsWjzZ.js";
import { F as Q } from "./form-WIVlB0c3.js";
const R = {
  type: {
    type: String,
    default: "text"
  },
  modelValue: {
    type: [String, Number],
    default: ""
  },
  placeholder: {
    type: String
  },
  clearable: {
    type: Boolean
  },
  showPassword: { type: Boolean, default: !1 },
  disabled: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 },
  label: { type: String }
}, U = {
  "update:modelValue": (a) => m(a),
  input: (a) => m(a),
  change: (a) => m(a),
  focus: (a) => a instanceof FocusEvent,
  blur: (a) => a instanceof FocusEvent,
  clear: () => !0
}, W = ["type", "placeholder", "disabled", "readonly"], X = /* @__PURE__ */ T({
  name: "z-input",
  inheritAttrs: !1,
  __name: "input",
  props: R,
  emits: U,
  setup(a, { emit: S }) {
    const r = q(Q), o = L("input"), t = a, u = S, c = K(), P = M(), h = V(null), y = V(!1);
    _(
      () => t.modelValue,
      () => {
        r == null || r.validate("change").catch(() => {
        }), g();
      }
    );
    const v = async () => {
      var e;
      await J(), (e = h.value) == null || e.focus();
    }, F = () => {
      y.value = !y.value, v();
    }, g = () => {
      const e = h.value;
      e && (e.value = String(t.modelValue));
    }, N = k(
      () => t.modelValue && t.showPassword && !t.disabled && !t.readonly
    ), x = k(() => t.clearable && t.modelValue && !t.disabled && !t.readonly), z = () => {
      u("update:modelValue", ""), u("clear"), v();
    };
    D(() => {
      g();
    });
    function E(e) {
      const i = e.target.value;
      u("update:modelValue", i);
    }
    function $(e) {
      u("change", e.target.value);
    }
    function A(e) {
      u("focus", e);
    }
    function j(e) {
      r == null || r.validate("blur").catch(() => {
      }), u("blur", e);
    }
    return (e, i) => {
      const w = G("z-icon");
      return n(), d("div", {
        class: l([s(o).b()])
      }, [
        b("div", {
          class: l(s(o).e("group"))
        }, [
          s(c).prepend ? (n(), d("div", {
            key: 0,
            class: l(s(o).be("group", "prepend"))
          }, [
            f(e.$slots, "prepend")
          ], 2)) : p("", !0),
          b("div", {
            class: l([s(o).e("wrapper")])
          }, [
            s(c).prefixIcon ? (n(), d("span", {
              key: 0,
              class: l(s(o).e("prefix"))
            }, [
              f(e.$slots, "prefixIcon")
            ], 2)) : p("", !0),
            b("input", H({
              type: e.showPassword ? y.value ? "text" : "password" : e.type
            }, s(P), {
              class: s(o).e("inner"),
              ref_key: "input",
              ref: h,
              onInput: E,
              onChange: $,
              onFocus: A,
              onBlur: j,
              placeholder: e.placeholder,
              disabled: e.disabled,
              readonly: e.readonly
            }), null, 16, W),
            s(c).suffixIcon ? (n(), d("span", {
              key: 1,
              class: l(s(o).e("suffix"))
            }, [
              f(e.$slots, "suffixIcon"),
              N.value ? (n(), B(w, {
                key: 0,
                onClick: F,
                style: { cursor: "pointer", "line-height": "13px", "font-weight": "bold" }
              }, {
                default: C(() => i[0] || (i[0] = [
                  I("e")
                ])),
                _: 1
              })) : p("", !0),
              x.value ? (n(), B(w, {
                key: 1,
                onClick: z,
                style: { cursor: "pointer", "line-height": "13px", "font-weight": "bold" }
              }, {
                default: C(() => i[1] || (i[1] = [
                  I("x")
                ])),
                _: 1
              })) : p("", !0)
            ], 2)) : p("", !0)
          ], 2),
          s(c).append ? (n(), d("div", {
            key: 1,
            class: l(s(o).be("group", "append"))
          }, [
            f(e.$slots, "prepend")
          ], 2)) : p("", !0)
        ], 2)
      ], 2);
    };
  }
}), se = O(X);
export {
  se as I
};
