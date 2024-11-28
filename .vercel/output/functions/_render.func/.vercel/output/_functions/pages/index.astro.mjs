import { c as createComponent, r as renderTemplate, f as renderComponent, e as createAstro, m as maybeRenderHead } from '../chunks/astro/server_CMaWSPCt.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BSdjr8gt.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
export { renderers } from '../renderers.mjs';

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main = {
  data() {
    return {
      angka: 0,
    };
  },
  methods: {
    tambahAngka() {
      this.angka++;
    },
  },
};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    ssrRenderAttrs(mergeProps({ id: "app" }, _attrs))
  }><p>Angka: ${
    ssrInterpolate($data.angka)
  }</p><button>Tambah</button></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const Test = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>main page</h1> <a href="/about">about</a> ${renderComponent($$result2, "Test", Test, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/project/astro-speed/astro-vue/src/components/Test.vue", "client:component-export": "default" })} ` })}`;
}, "C:/project/astro-speed/astro-vue/src/pages/index.astro", void 0);

const $$file = "C:/project/astro-speed/astro-vue/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
