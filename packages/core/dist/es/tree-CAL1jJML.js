import { d as N, q as Y, h as K, c as q, o as L, n as S, f as i, l as $, b as D, e as ee, a as z, w as O, p as te, t as ne, x as le, i as v, D as ae, j, k as P, s as se, u as ie } from "./vendor-DDV2DXlJ.js";
import { c as I, w as Z } from "./utils-lVZsWjzZ.js";
import { I as re } from "./icon-DBsosppR.js";
import { C as de } from "./checkbox-C0qSkuYR.js";
const oe = {
  data: {
    type: Array,
    default: () => []
  },
  // 默认展开的节点
  defaultExpandedKeys: {
    type: Array,
    default: () => []
  },
  labelField: {
    type: String,
    default: "label"
  },
  keyField: {
    type: String,
    default: "key"
  },
  childrenField: {
    type: String,
    default: "children"
  },
  onLoad: Function,
  selectedKeys: {
    type: Array
  },
  selectable: {
    type: Boolean,
    default: !0
  },
  multiple: {
    type: Boolean,
    default: !1
  },
  defaultCheckedKeys: {
    type: Array,
    default: () => []
  },
  showCheckbox: {
    type: Boolean,
    default: !0
  },
  checked: Boolean,
  disabled: Boolean,
  indeterminate: Boolean
}, ce = {
  node: {
    type: Object,
    required: !0
  },
  expanded: {
    type: Boolean,
    required: !0
  },
  selectedKeys: {
    type: Array,
    default: () => []
  },
  showCheckbox: Boolean,
  checked: Boolean,
  disabled: Boolean,
  indeterminate: Boolean
}, ue = {
  toggle: (n) => n,
  select: (n) => n,
  check: (n, o) => o
}, fe = {
  //内部发射的事件用来同步响应数据
  "update:selectedKeys": (n) => n
}, G = Symbol("tree"), he = {
  node: {
    type: Object,
    required: !0
  }
}, ye = N({
  name: "Switcher",
  render() {
    return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32" }, /* @__PURE__ */ React.createElement("path", { d: "M12 8l10 8-10 8z" }));
  }
}), me = N({
  name: "TreeNodeContent",
  props: he,
  setup(n) {
    const o = Y(G), d = K(() => n.node);
    return () => o != null && o.slots.default ? o == null ? void 0 : o.slots.default({ node: d.value }) : d.value.label;
  }
}), ke = /* @__PURE__ */ N({
  __name: "treeNode",
  props: ce,
  emits: ue,
  setup(n, { emit: o }) {
    const d = I("tree-node"), l = n, { node: f } = l, c = o;
    function p() {
      l.node && c("toggle", l.node);
    }
    const g = K(() => {
      var u;
      return ((u = l.node) == null ? void 0 : u.key) !== void 0 && l.selectedKeys.includes(l.node.key);
    });
    function m() {
      if (l.node) {
        if (l.node.disabled) return;
        c("select", l.node);
      }
    }
    function b(u) {
      l.node && c("check", l.node, u);
    }
    return (u, h) => {
      var x, B, E;
      return L(), q("div", {
        class: S([
          i(d).b(),
          i(d).is("selected", g.value),
          i(d).is("disabled", i(f).disabled)
        ])
      }, [
        $("div", {
          class: S([i(d).e("content")]),
          style: le({ paddingLeft: `${i(f).level * 16}px` })
        }, [
          $("span", {
            class: S([
              i(d).e("expand-icon"),
              i(d).is("Leaf", (x = i(f)) == null ? void 0 : x.isLeaf),
              { expanded: u.expanded && !((B = i(f)) != null && B.isLeaf) }
            ]),
            onClick: h[0] || (h[0] = (T) => p())
          }, [
            z(i(re), {
              size: "25",
              color: "pink"
            }, {
              default: O(() => [
                z(i(ye))
              ]),
              _: 1
            })
          ], 2),
          u.showCheckbox ? (L(), D(i(de), {
            key: 0,
            "model-value": u.checked,
            disabled: u.disabled,
            indeterminate: u.indeterminate,
            onChange: b
          }, null, 8, ["model-value", "disabled", "indeterminate"])) : ee("", !0),
          $("span", {
            onClick: h[1] || (h[1] = (T) => m()),
            class: S(i(d).e("label"))
          }, [
            z(i(me), { node: i(f) }, null, 8, ["node"]),
            te(" " + ne((E = i(f)) == null ? void 0 : E.label), 1)
          ], 2)
        ], 6)
      ], 2);
    };
  }
}), ve = N({
  name: "ZVirtualList",
  props: {
    size: {
      type: Number,
      default: 35
    },
    remain: {
      default: 8,
      type: Number
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  setup(n, { slots: o }) {
    const d = I("vl"), l = v(), f = v(), c = ae({
      // 滚动条的高度
      start: 0,
      end: n.remain
    }), p = K(() => Math.min(c.start, n.remain)), g = K(() => Math.min(n.remain, n.items.length - c.end)), m = K(() => n.items.slice(c.start - p.value, c.end + g.value)), b = v(0), u = () => {
      const h = l.value.scrollTop;
      c.start = Math.floor(h / n.size), c.end = c.start + n.remain, b.value = c.start * n.size - n.size * p.value;
    };
    return j(
      () => n.items,
      () => {
        l.value.style.height = n.remain * n.size + "px", f.value.style.height = n.items.length * n.size + "px";
      }
    ), P(() => {
      l.value.style.height = n.remain * n.size + "px", f.value.style.height = n.items.length * n.size + "px";
    }), () => /* @__PURE__ */ React.createElement("div", { class: d.b(), ref: l, onScroll: u }, /* @__PURE__ */ React.createElement("div", { class: d.e("scroll-bar"), ref: f }), /* @__PURE__ */ React.createElement(
      "div",
      {
        class: d.e("scroll-list"),
        style: { transform: `translate3d(0,${b.value}px,0)` }
      },
      m.value.map((h, x) => o.default({ node: h }))
    ));
  }
}), pe = Z(ve), be = /* @__PURE__ */ N({
  name: "z-tree",
  __name: "tree",
  props: oe,
  emits: fe,
  setup(n, { emit: o }) {
    const d = I("tree"), l = n, f = v([]);
    function c(e, t, a) {
      return {
        getkey(s) {
          return s[e];
        },
        getLabel(s) {
          return s[t];
        },
        getChildren(s) {
          return s[a];
        }
      };
    }
    const p = c(
      l.keyField,
      l.labelField,
      l.childrenField
    );
    function g(e, t = null) {
      function a(r, k = null) {
        return r.map((y) => {
          const F = p.getChildren(y) || [], V = {
            key: p.getkey(y),
            label: p.getLabel(y),
            children: [],
            rewNode: y,
            level: k ? k.level + 1 : 0,
            disabled: !!y.disabled,
            //判断节点是否禁用
            //判断节点是否自带isLeaf属性，如果没有孩子节点则为叶子节点
            isLeaf: y.isLeaf ?? F.length === 0,
            parentKey: k == null ? void 0 : k.key
          };
          return F.length > 0 && (V.children = a(F, V)), V;
        });
      }
      return a(e, t);
    }
    j(
      () => l.data,
      (e) => {
        f.value = g(e);
      },
      { immediate: !0 }
    );
    const m = v(new Set(l.defaultExpandedKeys)), b = K(() => {
      const e = m.value, t = [], a = f.value || [], s = [];
      for (let r = a.length - 1; r >= 0; r--)
        s.push(a[r]);
      for (; s.length; ) {
        const r = s.pop();
        if (r && (t.push(r), e.has(r.key) && r.children))
          for (let y = r.children.length - 1; y >= 0; y--)
            s.push(r.children[y]);
      }
      return t;
    });
    function u(e) {
      return m.value.has(e.key);
    }
    function h(e) {
      m.value.delete(e.key);
    }
    const x = v(/* @__PURE__ */ new Set());
    function B(e) {
      if (!e.children.length && !e.isLeaf) {
        const t = x.value;
        if (!t.has(e.key)) {
          t.add(e.key);
          const a = l.onLoad;
          a && a(e.rewNode).then((s) => {
            e.rewNode.children = s, e.children = g(s, e), t.delete(e.key);
          });
        }
      }
    }
    function E(e) {
      m.value.add(e.key), B(e);
    }
    function T(e) {
      m.value.has(e.key) && !x.value.has(e.key) ? h(e) : E(e);
    }
    const H = o, R = v([]);
    j(
      () => l.selectedKeys,
      (e) => {
        e && (R.value = e);
      },
      {
        immediate: !0
      }
    );
    function J(e) {
      let t = Array.from(R.value);
      if (l.selectable) {
        if (l.multiple) {
          const a = t.findIndex((s) => s === e.key);
          a > -1 ? t.splice(a, 1) : t.push(e.key);
        } else
          t.includes(e.key) ? t = [] : t = [e.key];
        H("update:selectedKeys", t);
      }
    }
    se(G, {
      slots: ie()
    });
    const w = v(new Set(l.defaultCheckedKeys));
    function Q(e) {
      return w.value.has(e.key);
    }
    function U(e) {
      return !!e.disabled;
    }
    const C = v(new Set(l.defaultCheckedKeys));
    function W(e) {
      return C.value.has(e.key);
    }
    function X(e, t) {
      const a = w.value;
      t && C.value.delete(e.key), a[t ? "add" : "delete"](e.key);
      const s = e.children;
      s && s.forEach((r) => {
        r.disabled || A(r, t);
      });
    }
    function M(e) {
      return b.value.find((t) => t.key === e);
    }
    function _(e) {
      if (e.parentKey) {
        const t = M(e.parentKey);
        if (t) {
          let a = !0, s = !1, r = t.children;
          for (const k of r)
            w.value.has(k.key) ? s = !0 : C.value.has(k.key) ? (a = !1, s = !0) : a = !1;
          a ? (w.value.add(t.key), C.value.delete(t.key)) : s && (w.value.delete(t.key), C.value.add(t.key)), _(t);
        }
      }
    }
    function A(e, t) {
      X(e, t), _(e);
    }
    return P(() => {
      w.value.forEach((e) => {
        const t = M(e);
        t && A(t, !0);
      });
    }), (e, t) => (L(), q("div", {
      class: S(i(d).b())
    }, [
      z(i(pe), {
        items: b.value,
        remain: 8,
        size: 35
      }, {
        default: O(({ node: a }) => [
          (L(), D(ke, {
            key: a.key,
            node: a,
            expanded: u(a),
            onToggle: (s) => T(a),
            selectedKeys: R.value,
            onSelect: (s) => J(a),
            "show-checkbox": e.showCheckbox,
            checked: Q(a),
            disabled: U(a),
            indeterminate: W(a),
            onCheck: A
          }, null, 8, ["node", "expanded", "onToggle", "selectedKeys", "onSelect", "show-checkbox", "checked", "disabled", "indeterminate"]))
        ]),
        _: 1
      }, 8, ["items"])
    ], 2));
  }
}), Ce = Z(be);
export {
  Ce as T
};
