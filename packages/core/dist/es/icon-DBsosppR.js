import { d as t, h as c, c as a, o as l, r as i, x as m, n as p, f as u } from "./vendor-DDV2DXlJ.js";
import { c as f, w as z } from "./utils-lVZsWjzZ.js";
const d = {
  color: String,
  // color 属性，类型为 String
  size: [String, Number]
  // size 属性，类型可以是 String 或 Number
}, _ = /* @__PURE__ */ t({
  name: "z-icon",
  __name: "icon",
  props: d,
  setup(e) {
    const s = f("icon"), o = e, n = c(() => !o.color && !o.size ? {} : {
      ...o.size ? { "font-size": o.size + "px" } : {},
      ...o.color ? { color: o.color } : {}
    });
    return (r, S) => (l(), a("i", {
      class: p(u(s).b()),
      style: m(n.value)
    }, [
      i(r.$slots, "default")
    ], 6));
  }
}), x = z(_);
export {
  x as I
};
