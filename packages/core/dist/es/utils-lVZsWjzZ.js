import { I as r } from "./vendor-DDV2DXlJ.js";
function z(n) {
  return (o) => r(n, (u) => o.use(u));
}
function B(n) {
  return n.install = (c) => {
    const { name: o } = n;
    c.component(o, n);
  }, n;
}
function a(n, c, o, u) {
  return c && (n += `-${c}`), o && (n += `__${o}`), u && (n += `--${u}`), n;
}
function $(n) {
  return {
    b: (t = "") => a(n, t, "", ""),
    e: (t = "") => t ? a(n, "", t, "") : "",
    m: (t = "") => t ? a(n, "", "", t) : "",
    be: (t = "", s = "") => t && s ? a(n, t, s, "") : "",
    bm: (t = "", s = "") => t && s ? a(n, t, "", s) : "",
    em: (t = "", s = "") => t && s ? a(n, "", t, s) : "",
    bem: (t = "", s = "", b = "") => t && s && b ? a(n, t, s, b) : "",
    is: (t, s) => s ? `is-${t}` : ""
  };
}
function M(n) {
  const c = `z-${n}`;
  return $(c);
}
export {
  M as c,
  z as m,
  B as w
};
