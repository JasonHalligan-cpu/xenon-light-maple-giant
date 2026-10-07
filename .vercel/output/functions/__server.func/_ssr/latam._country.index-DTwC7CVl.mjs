import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as StatuteSplit } from "./statute-split-D_ikWagS.mjs";
import { J as LATAM_BY_SLUG, c as Route$8 } from "./router-B4HJ06iu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/latam._country.index-DTwC7CVl.js
var import_jsx_runtime = require_jsx_runtime();
function CountryOverview() {
	const { country: slug } = Route$8.useParams();
	const country = LATAM_BY_SLUG[slug];
	if (!country) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "That country is not on this tab." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/latam",
			className: "mt-4 inline-block text-accent",
			children: "All countries"
		})]
	});
	const doors = [
		{
			to: "/latam/$country/learn",
			title: "Lessons",
			line: `${country.codes.length} floors. They stay in ${country.name}.`
		},
		{
			to: "/latam/$country/practice",
			title: "Practice",
			line: `${country.name} questions only.`
		},
		{
			to: "/latam/$country/test",
			title: "Test",
			line: "Four questions. Pass mark 3. One sitting."
		},
		{
			to: "/latam/$country/library",
			title: "Codes",
			line: `The books named for ${country.name}.`
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-5xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium uppercase tracking-wider text-accent",
				children: country.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold text-pretty sm:text-5xl",
				children: `${country.name}, in simpler terms`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 max-w-2xl text-lg text-muted",
				children: [
					"The standards body is ",
					country.body,
					". These pages are a guide to that book, not the published standard, and not legal advice."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-3 sm:grid-cols-2",
				children: doors.map((door) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: door.to,
					params: { country: slug },
					className: "block min-h-28 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] hover:bg-raised",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl font-semibold",
						children: door.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-2 block text-base text-muted",
						children: door.line
					})]
				}) }, door.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 space-y-8",
				children: country.codes.map((part) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 font-display text-2xl font-semibold",
					children: part.code
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatuteSplit, {
					statute: part.statute,
					plain: part.plain,
					why: part.why
				})] }, part.id))
			})
		]
	});
}
//#endregion
export { CountryOverview as component };
