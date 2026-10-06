import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as cn } from "./utils-DDI7QxNU.mjs";
import { n as buttonVariants, t as Button } from "./button-BjXN1-zk.mjs";
import { D as Progress, F as SKILL_BY_ID, M as QUESTIONS, O as QuestionCard, R as pickQuestions, z as useProgress } from "./router-Dvuz30ij.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/drill-DWakaM0C.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function snapshotDue() {
	const s = useProgress.getState();
	const region = "eu";
	const now = Date.now();
	const dueIds = Object.entries(s.sm2).filter(([, card]) => card.due <= now).map(([id]) => id);
	const dueQs = QUESTIONS.filter((q) => dueIds.includes(q.id) && (q.region ?? "eu") === region).slice(0, 8);
	if (dueQs.length >= 6) return dueQs;
	return pickQuestions({
		mastery: s.mastery,
		sm2: s.sm2,
		recentIds: s.recentQuestionIds,
		n: 8,
		region
	});
}
function DrillPage() {
	const markAnswer = useProgress((s) => s.markAnswer);
	const hydrated = useProgress((s) => s.hydrated);
	const sm2 = useProgress((s) => s.sm2);
	const [deck, setDeck] = (0, import_react.useState)(null);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)(false);
	const dueCount = Object.values(sm2).filter((c) => c.due <= Date.now()).length;
	const current = deck?.[index];
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "mx-auto max-w-3xl px-4 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted",
			children: "Loading diary…"
		})
	});
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-semibold",
				children: "Filed for later"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "Correct cards stretch their interval. Missed ones come back in minutes."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/practice",
					className: buttonVariants(),
					children: "Adaptive practice"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: buttonVariants({ variant: "secondary" }),
					children: "Lobby"
				})]
			})
		]
	});
	if (deck === null) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm font-medium uppercase tracking-wider text-accent",
				children: [
					"Spaced drill · ",
					dueCount,
					" due"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold sm:text-5xl",
				children: "Come back just as you forget"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted",
				children: "SM-2 spaced repetition. If nothing is due yet, ElevatorIQ will still drill the weakest floors so the diary has something to work with."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-8",
				size: "lg",
				onClick: () => setDeck(snapshotDue()),
				children: "Start drill"
			})
		]
	});
	if (!current) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-semibold",
				children: "Nothing is due"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "Answer a few in practice first. The spaced-repetition diary fills itself."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/practice",
				className: cn(buttonVariants(), "mt-6"),
				children: "Practice instead"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm font-medium uppercase tracking-wider text-accent",
				children: [
					"Spaced drill · ",
					dueCount,
					" due"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-3xl font-semibold",
				children: SKILL_BY_ID[current.skillId].name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
				value: (index + 1) / deck.length,
				className: "mt-4 mb-8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuestionCard, {
				question: current,
				index,
				total: deck.length,
				onResolved: (correct, firstTry) => {
					markAnswer({
						questionId: current.id,
						skillId: current.skillId,
						correct,
						firstTry
					});
					if (index + 1 >= deck.length) setDone(true);
					else setIndex((i) => i + 1);
				}
			}, current.id)
		]
	});
}
//#endregion
export { DrillPage as component };
