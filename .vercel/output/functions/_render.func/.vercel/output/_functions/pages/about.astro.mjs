import { c as createComponent, r as renderTemplate, f as renderComponent, e as createAstro, m as maybeRenderHead } from '../chunks/astro/server_CMaWSPCt.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BSdjr8gt.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>about page</h1> ` })}`;
}, "C:/project/astro-speed/astro-vue/src/pages/about.astro", void 0);

const $$file = "C:/project/astro-speed/astro-vue/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
