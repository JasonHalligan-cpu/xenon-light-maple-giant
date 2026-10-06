import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { w as AdSlot } from "./router-2O5coh7U.mjs";
import { t as LIFT_SPECS } from "./specs-TqgmfoV3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/specs.index-CXlZV5wr.js
var import_jsx_runtime = require_jsx_runtime();
function SpecsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-5xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium uppercase tracking-wider text-accent",
				children: "Specification sheets"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold sm:text-5xl",
				children: "Write the machine, not the brochure."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-lg text-muted",
				children: "Typical UK numbers, the line from the standard, and the landing version. Teaching sheets — not a certificate, not a substitute for BS EN 81. Click on the cars below."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 grid gap-4 sm:grid-cols-2",
				children: LIFT_SPECS.map((spec) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/specs/$id",
					params: { id: spec.id },
					className: "block overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-border)] transition-colors hover:bg-raised",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: spec.img,
						alt: spec.alt,
						className: "aspect-video w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "block p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-sm uppercase tracking-wider text-accent",
								children: spec.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 block font-display text-2xl font-semibold",
								children: spec.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 block text-base text-muted",
								children: spec.who
							})
						]
					})]
				}) }, spec.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-sm text-faint",
				children: "Figures are typical UK teaching values (Type 2 630 kg, 1.0 m/s, six-month LOLER). Always check the current BS EN 81 part and the fire strategy."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdSlot, {
					slot: "codes",
					size: "strip"
				})
			})
		]
	});
}
//#endregion
export { SpecsPage as component };
