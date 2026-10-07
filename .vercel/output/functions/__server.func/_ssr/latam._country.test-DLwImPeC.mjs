import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as cn } from "./utils-DDI7QxNU.mjs";
import { J as LATAM_BY_SLUG, o as Route$4 } from "./router-B4HJ06iu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/latam._country.test-DLwImPeC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CountryTest() {
	const { country: slug } = Route$4.useParams();
	const country = LATAM_BY_SLUG[slug];
	const [index, setIndex] = (0, import_react.useState)(0);
	const [picks, setPicks] = (0, import_react.useState)([]);
	const [locked, setLocked] = (0, import_react.useState)(false);
	if (!country) return null;
	if (picks.length >= country.questions.length) {
		const score = picks.filter((pick, i) => pick === country.questions[i].answer).length;
		const passed = score >= 3;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-3xl px-4 py-10 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium uppercase tracking-wider text-accent",
					children: country.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl font-semibold",
					children: passed ? "Pass" : "Not yet"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-lg text-muted",
					children: [
						score,
						" of ",
						country.questions.length,
						". The pass mark is 3."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-4",
					children: country.questions.map((question) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-2xl bg-surface p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl font-semibold",
							children: question.prompt
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-base text-muted",
							children: question.plain
						})]
					}, question.id))
				})
			]
		});
	}
	const question = country.questions[index];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm font-medium uppercase tracking-wider text-accent",
				children: [
					country.name,
					" · Test · ",
					index + 1,
					" of ",
					country.questions.length
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-3xl font-semibold text-pretty",
				children: question.prompt
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "One sitting. You cannot change an answer."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-3",
				children: question.choices.map((choice, choiceIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: locked,
					onClick: () => {
						setLocked(true);
						setPicks((current) => [...current, choiceIndex]);
					},
					className: cn("w-full rounded-2xl bg-surface p-4 text-left text-base shadow-[var(--shadow-border)]", locked && "opacity-70"),
					children: choice
				}) }, choice))
			}),
			locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-6 inline-flex min-h-11 items-center rounded-full bg-orange px-5 text-accent-fg",
				onClick: () => {
					setIndex((value) => value + 1);
					setLocked(false);
				},
				children: "Next"
			}) : null
		]
	});
}
//#endregion
export { CountryTest as component };
