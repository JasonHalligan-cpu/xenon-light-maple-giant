import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as cn } from "./utils-DDI7QxNU.mjs";
import { n as buttonVariants, t as Button } from "./button-BjXN1-zk.mjs";
import { D as Progress, o as Route$8, z as useProgress } from "./router-Dvuz30ij.mjs";
import { n as SCENARIO_BY_ID } from "./scenarios-zjwCpJXj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/scenarios._id-BFDN7ljp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ScenarioPage() {
	const { id } = Route$8.useParams();
	const scenario = SCENARIO_BY_ID[id];
	const completeScenario = useProgress((s) => s.completeScenario);
	const [beat, setBeat] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [hits, setHits] = (0, import_react.useState)(0);
	const [finished, setFinished] = (0, import_react.useState)(false);
	if (!scenario) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-2xl px-4 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Unknown scenario." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/scenarios",
			className: "mt-4 inline-block text-accent",
			children: "All scenarios"
		})]
	});
	const current = scenario.beats[beat];
	const totalBeats = scenario.beats.length;
	function advance(correct) {
		const nextHits = hits + (correct ? 1 : 0);
		if (beat + 1 >= totalBeats) {
			completeScenario(scenario.id, scenario.skillIds, nextHits / totalBeats);
			setHits(nextHits);
			setFinished(true);
			return;
		}
		setHits(nextHits);
		setBeat((b) => b + 1);
		setPicked(null);
	}
	if (finished) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium uppercase tracking-wider text-accent",
				children: "Debrief"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold",
				children: scenario.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg text-muted",
				children: scenario.debrief
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 font-mono text-sm tabular-nums text-faint",
				children: [
					hits,
					" / ",
					totalBeats,
					" calls that would survive a meeting"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/scenarios",
					className: buttonVariants(),
					children: "More landings"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/classify",
					className: buttonVariants({ variant: "secondary" }),
					children: "Specify a building"
				})]
			})
		]
	});
	const revealed = picked !== null;
	const choice = revealed ? current.choices[picked] : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium uppercase tracking-wider text-accent",
				children: scenario.role
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold",
				children: scenario.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: scenario.setting
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
				value: (beat + 1) / totalBeats,
				className: "mt-6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-8 font-display text-2xl font-semibold text-pretty",
				children: current.prompt
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 space-y-2",
				children: current.choices.map((c, i) => {
					const show = revealed && picked === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: revealed,
						onClick: () => setPicked(i),
						className: cn("w-full rounded-xl px-4 py-3 text-left text-base min-h-14 shadow-[var(--shadow-border)]", !show && "bg-raised hover:bg-surface", show && c.correct && "bg-ok/20", show && !c.correct && "bg-accent/20"),
						children: c.text
					}) }, c.text);
				})
			}),
			choice ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 rounded-2xl bg-paper p-5 text-paper-fg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium uppercase tracking-wider text-paper-muted",
						children: "What it means"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-lg leading-relaxed",
						children: choice.feedback
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-5",
						onClick: () => advance(choice.correct),
						children: beat + 1 >= totalBeats ? "Debrief" : "Next beat"
					})
				]
			}) : null
		]
	});
}
//#endregion
export { ScenarioPage as component };
