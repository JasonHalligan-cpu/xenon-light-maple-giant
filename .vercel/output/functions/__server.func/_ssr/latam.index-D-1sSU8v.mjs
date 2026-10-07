import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Y as LATAM_COUNTRIES } from "./router-B4HJ06iu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/latam.index-D-1sSU8v.js
var import_jsx_runtime = require_jsx_runtime();
function LatamHome() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-5xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium uppercase tracking-wider text-accent",
				children: "Latin America"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold text-pretty sm:text-5xl",
				children: "One sub-tab for each country"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-lg text-muted",
				children: "There is no single Latin American elevator code. Open a country. Lessons, practice, the test, and the codes stay inside that sub-tab, and they teach that country’s own book."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: LATAM_COUNTRIES.map((country) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/latam/$country",
					params: { country: country.slug },
					className: "block min-h-28 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] hover:bg-raised",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl font-semibold",
						children: country.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-2 block text-base text-muted",
						children: country.body
					})]
				}) }, country.slug))
			})
		]
	});
}
//#endregion
export { LatamHome as component };
