import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as cn } from "./utils-DDI7QxNU.mjs";
import { w as AdSlot, z as useProgress } from "./router-Dvuz30ij.mjs";
import { t as SCENARIOS } from "./scenarios-zjwCpJXj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/scenarios.index-DMbdXoBb.js
var import_jsx_runtime = require_jsx_runtime();
function ScenariosPage() {
	const done = useProgress((s) => s.scenariosDone);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-5xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium uppercase tracking-wider text-accent",
				children: "Worked cases"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold sm:text-5xl",
				children: "A real landing, a real choice"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-muted",
				children: "Retrieval beats rereading. These are the meetings and midnights the standards were written for — with feedback in everyday language."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-3 sm:grid-cols-2",
				children: SCENARIOS.map((s) => {
					const complete = done.includes(s.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/scenarios/$id",
						params: { id: s.id },
						className: cn("block min-h-36 rounded-2xl p-5 shadow-[var(--shadow-border)] transition-colors", complete ? "bg-ok/10" : "bg-surface hover:bg-raised"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium uppercase tracking-wider text-faint",
								children: s.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 block font-display text-2xl font-semibold",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 block text-base text-muted",
								children: s.setting
							})
						]
					}) }, s.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdSlot, {
					slot: "scenario",
					size: "card"
				})
			})
		]
	});
}
//#endregion
export { ScenariosPage as component };
