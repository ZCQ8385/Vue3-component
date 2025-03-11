import { d, u as c, c as u, o as a, a as m, r as p, w as f, b, e as y, f as t, g, n as k } from "./vendor-DDV2DXlJ.js";
import { c as B, w as C } from "./utils-lVZsWjzZ.js";
import { I as v } from "./icon-DBsosppR.js";
const w = {
  size: String,
  type: {
    type: String,
    //自定义校验规则
    validator: (n) => [
      "primary",
      "success",
      "warning",
      "danger",
      "info",
      "default",
      ""
    ].includes(n),
    default: ""
  },
  disabled: Boolean,
  loading: Boolean,
  round: Boolean,
  nativeType: {
    type: String,
    default: "button"
  },
  iconPlacement: {
    type: String,
    default: "left"
  }
}, S = {
  click: (n) => n instanceof MouseEvent,
  mousedown: (n) => n instanceof MouseEvent
}, h = ["type", "disabled"], z = /* @__PURE__ */ d({
  name: "z-button",
  inheritAttrs: !1,
  __name: "button",
  props: w,
  emits: S,
  setup(n, { emit: i }) {
    const o = B("button"), l = i, s = c(), r = (e) => {
      l("click", e);
    };
    return (e, E) => (a(), u("button", {
      class: k([
        t(o).b(),
        t(o).m(e.type),
        t(o).m(e.size),
        t(o).is("round", e.round),
        t(o).is("loading", e.loading),
        t(o).is("disabled", e.disabled)
      ]),
      type: e.nativeType,
      disabled: e.disabled || e.loading,
      onClick: r
    }, [
      m(t(v), null, {
        default: f(() => [
          t(s).icon ? (a(), b(g(t(s).icon), { key: 0 })) : y("", !0)
        ]),
        _: 1
      }),
      p(e.$slots, "default")
    ], 10, h));
  }
}), P = C(z);
export {
  P as B
};
