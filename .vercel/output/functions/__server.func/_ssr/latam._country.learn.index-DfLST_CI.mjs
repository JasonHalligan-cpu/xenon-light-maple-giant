import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { J as LATAM_BY_SLUG, a as Route$3 } from "./router-B4HJ06iu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/latam._country.learn.index-DfLST_CI.js
var import_jsx_runtime = require_jsx_runtime();
function CountryLessons() {
	const { country: slug } = Route$3.useParams();
	const country = LATAM_BY_SLUG[slug];
	if (!country) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium uppercase tracking-wider text-accent",
				children: country.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold",
				children: "Lessons"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 space-y-3",
				children: country.codes.map((code, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/latam/$country/learn/$id",
					params: {
						country: slug,
						id: code.id
					},
					className: "block rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] hover:bg-raised",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: ["Floor ", index + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-2xl font-semibold",
							children: code.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-mono text-sm text-yellow",
							children: code.code
						})
					]
				}) }, code.id))
			})
		]
	});
}
//#endregion
export { CountryLessons as component };
