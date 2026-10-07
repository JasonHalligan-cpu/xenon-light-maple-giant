import { S as require_jsx_runtime, b as Link, g as Outlet, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { J as LATAM_BY_SLUG } from "./router-B4HJ06iu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/latam-RXiBwJC2.js
var import_jsx_runtime = require_jsx_runtime();
function LatamLayout() {
	const slug = useRouterState({ select: (s) => s.location.pathname }).split("/")[2];
	const current = slug ? LATAM_BY_SLUG[slug] : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "border-b border-border bg-surface px-4 py-3 text-base text-muted sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium text-fg",
				children: "Latin America."
			}), " Pick a country. Lessons, practice, the test, and the codes on that page follow that country’s own book."]
		}),
		current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			"aria-label": "Countries",
			className: "border-b border-border bg-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl items-center gap-4 px-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/latam",
					className: "inline-flex min-h-12 items-center text-base text-accent",
					children: "All countries"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-flex min-h-12 items-center border-b-2 border-orange text-base text-yellow",
					children: current.name
				})]
			})
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	] });
}
//#endregion
export { LatamLayout as component };
