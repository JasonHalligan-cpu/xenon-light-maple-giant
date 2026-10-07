import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as cn } from "./utils-DDI7QxNU.mjs";
import { J as LATAM_BY_SLUG, s as Route$5 } from "./router-B4HJ06iu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/latam._country.practice-MURpNZBJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CountryPractice() {
	const { country: slug } = Route$5.useParams();
	const country = LATAM_BY_SLUG[slug];
	const [index, setIndex] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	if (!country) return null;
	const question = country.questions[index];
	if (!question) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-semibold",
				children: "That is the set"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-lg text-muted",
				children: `These questions stay on the ${country.name} sub-tab.`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-6 inline-flex min-h-11 items-center rounded-full bg-orange px-5 text-accent-fg",
				onClick: () => {
					setIndex(0);
					setPicked(null);
				},
				children: "Start again"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm font-medium uppercase tracking-wider text-accent",
				children: [
					country.name,
					" · Question ",
					index + 1,
					" of ",
					country.questions.length
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-3xl font-semibold text-pretty",
				children: question.prompt
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-3",
				children: question.choices.map((choice, choiceIndex) => {
					const show = picked !== null;
					const right = choiceIndex === question.answer;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: show,
						onClick: () => setPicked(choiceIndex),
						className: cn("w-full rounded-2xl bg-surface p-4 text-left text-base shadow-[var(--shadow-border)]", show && right && "bg-paper text-paper-fg", show && picked === choiceIndex && !right && "opacity-60"),
						children: choice
					}) }, choice);
				})
			}),
			picked !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg",
					children: question.plain
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mt-4 inline-flex min-h-11 items-center rounded-full bg-orange px-5 text-accent-fg",
					onClick: () => {
						setIndex((value) => value + 1);
						setPicked(null);
					},
					children: "Next"
				})]
			}) : null
		]
	});
}
//#endregion
export { CountryPractice as component };
