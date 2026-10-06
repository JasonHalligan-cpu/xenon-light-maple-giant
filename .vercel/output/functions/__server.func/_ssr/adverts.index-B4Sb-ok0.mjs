import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { V as ADVERTS, W as SPONSOR_BY_ID, w as AdSlot } from "./router-2O5coh7U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/adverts.index-B4Sb-ok0.js
var import_jsx_runtime = require_jsx_runtime();
function AdvertsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-5xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium uppercase tracking-wider text-accent",
				children: "Simulated adverts"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold sm:text-5xl",
				children: "Pretend brands, real slots."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-lg text-muted",
				children: "These five campaigns are fiction — so you can see how ElevatorIQ will look with partners in. None of them is a real company. Tap an advert to open its landing page."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 grid gap-6",
				children: ADVERTS.map((ad) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdSlot, {
					slot: ad.slot,
					size: SPONSOR_BY_ID[ad.slot].size
				}) }, ad.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-10 text-sm text-faint",
				children: [
					"Want the slot for a real name?",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/sponsors",
						className: "text-accent hover:underline",
						children: "Hold a place"
					}),
					"."
				]
			})
		]
	});
}
//#endregion
export { AdvertsPage as component };
