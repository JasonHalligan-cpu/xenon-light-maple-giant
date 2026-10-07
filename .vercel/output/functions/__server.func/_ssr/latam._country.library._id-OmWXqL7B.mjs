import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as StatuteSplit } from "./statute-split-D_ikWagS.mjs";
import { J as LATAM_BY_SLUG, n as Route } from "./router-B4HJ06iu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/latam._country.library._id-OmWXqL7B.js
var import_jsx_runtime = require_jsx_runtime();
function CountryCode() {
	const { country: slug, id } = Route.useParams();
	const country = LATAM_BY_SLUG[slug];
	const code = country?.codes.find((item) => item.id === id);
	if (!country || !code) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "mx-auto max-w-3xl px-4 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "That code is not on this sub-tab." })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-5xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium uppercase tracking-wider text-accent",
				children: country.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-mono text-sm text-yellow",
				children: code.code
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold",
				children: code.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatuteSplit, {
					statute: code.statute,
					plain: code.plain,
					why: code.why
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/latam/$country/library",
				params: { country: slug },
				className: "mt-8 inline-flex min-h-11 items-center text-accent",
				children: "All codes"
			})
		]
	});
}
//#endregion
export { CountryCode as component };
