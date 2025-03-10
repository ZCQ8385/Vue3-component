import { d as F, i as v, c as b, o as g, E as h, n as S, f as P, r as y, b as $, l as _, w as R, j, h as z, a as B, p as N, G as w, H as q, t as A, F as H } from "./vendor-DDV2DXlJ.js";
import { c as E, w as T } from "./utils-lVZsWjzZ.js";
const k = {
  FileList: {
    type: Array,
    default: () => []
    //默认值是一个空数组
  },
  action: {
    type: String,
    default: ""
  },
  multiple: {
    type: Boolean,
    default: !0
  },
  //input中所需的属性
  name: {
    type: String,
    default: "file"
  },
  accept: {
    type: String,
    default: ""
  },
  //上传文件调用ajax请求的时候所需要的
  method: {
    type: String,
    default: "post"
  },
  headers: {
    type: Object,
    default: () => ({})
  },
  data: {
    type: Object,
    default: () => ({})
  },
  drag: {
    type: Boolean
    // default: false
  }
}, p = () => {
}, L = {
  ...k,
  onPreview: {
    //预览的时候，可以用这个回调拿到上次的图片
    type: Function,
    default: p
  },
  beforeUpload: {
    type: Function,
    default: p
  },
  onChange: {
    type: Function,
    default: p
  },
  beforeRemove: {
    type: Function,
    default: p
  },
  onRemove: {
    type: Function,
    default: p
  },
  onProgress: {
    type: Function,
    default: p
  },
  onSuccess: {
    type: Function,
    default: p
  },
  onError: {
    type: Function,
    default: p
  },
  onStart: {
    type: Function,
    default: p
  }
};
let V = 0;
const I = () => V++, m = () => {
}, M = {
  ...k,
  beforeUpload: L.beforeUpload,
  onStart: {
    type: Function,
    default: m
  },
  onProgress: {
    type: Function,
    default: m
  },
  onRemove: {
    type: Function,
    default: m
  },
  onError: {
    type: Function,
    default: m
  },
  onSuccess: {
    type: Function,
    default: m
  }
};
function x(s) {
  const r = new XMLHttpRequest(), o = s.action;
  if (r.open(s.method, o, !0), r.upload.addEventListener("progress", (l) => {
    console.log(l);
    const n = l;
    n.percent = l.total > 0 ? l.loaded / l.total * 100 : 0, s.onProgress(n);
  }), s.headers)
    for (const [l, n] of Object.entries(s.headers))
      r.setRequestHeader(l, n);
  const c = new FormData();
  if (s.data)
    for (const [l, n] of Object.entries(s.data))
      c.append(l, n);
  return c.append(s.name, s.file), r.onload = function() {
    r.status < 300 && r.status >= 200 ? s.onSuccess(r.response) : s.onError({ status: r.status });
  }, r.addEventListener("error", function(l) {
    s.onError(l);
  }), r.send(c), r;
}
const G = /* @__PURE__ */ F({
  __name: "upload-dragger",
  emits: {},
  setup(s, { emit: r }) {
    const o = E("uploadDragger"), a = v(!1), c = r, l = (i) => {
      i.stopPropagation(), c("file", Array.from(i.dataTransfer.files)), console.log(i.dataTransfer.files);
    }, n = (i) => {
      a.value = !0;
    };
    return (i, e) => (g(), b("div", {
      class: S([P(o).b()]),
      onDragover: h(n, ["prevent"]),
      onDragleave: e[0] || (e[0] = h((t) => a.value = !1, ["prevent"])),
      onDrop: h(l, ["prevent"])
    }, [
      y(i.$slots, "default")
    ], 34));
  }
}), X = ["name", "accept", "multiple"], J = /* @__PURE__ */ F({
  name: "z-upload-content",
  __name: "upload-content",
  props: M,
  setup(s) {
    const r = E("upload"), o = s;
    async function a(e) {
      if (n.value.value = "", !await o.beforeUpload(e)) return o.onRemove(e);
      const { method: u, FileList: d, name: C, action: O, headers: D, data: U } = o;
      x({
        method: u,
        file: e,
        name: C,
        action: O,
        headers: D,
        data: U,
        onError: (f) => {
          o.onError(f, e);
        },
        onSuccess: (f) => {
          o.onSuccess(f, e);
        },
        onProgress: (f) => {
          o.onProgress(f, e);
        }
      });
    }
    function c(e) {
      for (let t = 0; t < e.length; t++) {
        const u = e[t];
        u.uid = I(), o.onStart(u), a(u);
      }
    }
    async function l(e) {
      const t = e.target.files;
      c(t);
    }
    const n = v(), i = () => {
      n.value && (n.value.value = "", n.value.click());
    };
    return (e, t) => (g(), b("div", {
      onClick: i,
      class: S([P(r).b()])
    }, [
      e.drag ? (g(), $(G, {
        key: 0,
        onFile: c
      }, {
        default: R(() => [
          y(e.$slots, "default")
        ]),
        _: 3
      })) : y(e.$slots, "default", { key: 1 }),
      _("input", {
        type: "file",
        ref_key: "inputRef",
        ref: n,
        name: e.name,
        accept: e.accept,
        multiple: e.multiple,
        onChange: l
      }, null, 40, X)
    ], 2));
  }
}), K = /* @__PURE__ */ F({
  name: "z-upload",
  inheritAttrs: !1,
  __name: "upload",
  props: L,
  setup(s, { emit: r }) {
    const o = s, a = v(o.FileList), c = v(null), l = r;
    j(a, (e) => {
      l("update:fileList", e);
    });
    const n = (e) => a.value.find((t) => t.uid === e.uid), i = z(() => ({
      ...o,
      onStart: (e) => {
        console.log("start");
        const t = {
          uid: e.uid,
          name: e.name,
          percentage: 0,
          raw: e,
          size: e.size,
          status: "start"
        };
        t.url = URL.createObjectURL(e), a.value = [...a.value, t], c.value.src = t.url, console.log(a), o.onChange(t);
      },
      onProgress: (e, t) => {
        const u = n(t);
        u.status = "uploading", u.percentage = e.percent, o.onProgress(e, u, a.value);
      },
      onRemove: async (e) => {
        const t = n(e);
        if (await o.beforeRemove(t, a.value) == !1) {
          const d = a.value;
          d.splice(d.indexOf(t), 1), o.onRemove(t, a.value);
        }
      },
      onError: (e, t) => {
        const u = n(t);
        u.status = "error";
        const d = a.value;
        d.splice(d.indexOf(u), 1), o.onError(e, u, d);
      },
      onSuccess: (e, t) => {
        const u = n(t);
        u.status = "success";
        const d = a.value;
        o.onSuccess(e, u, d);
      }
    }));
    return (e, t) => (g(), b(H, null, [
      B(J, w(q(i.value)), {
        default: R(() => [
          y(e.$slots, "default")
        ]),
        _: 3
      }, 16),
      N(" " + A(a.value) + " ", 1),
      _("img", {
        id: "image",
        ref_key: "image",
        ref: c
      }, null, 512)
    ], 64));
  }
}), Y = T(K);
export {
  Y as U
};
