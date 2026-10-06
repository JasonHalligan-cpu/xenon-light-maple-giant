import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as buttonVariants } from "./button-BjXN1-zk.mjs";
import { B as weakSkills, D as Progress, F as SKILL_BY_ID, N as QUESTION_BY_ID, O as QuestionCard, j as PLACEMENT_IDS, x as LESSONS, z as useProgress } from "./router-2O5coh7U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/placement-cNCpJ2oE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PlacementPage() {
	const deck = (0, import_react.useMemo)(() => PLACEMENT_IDS.map((id) => QUESTION_BY_ID[id]).filter(Boolean), []);
	const markAnswer = useProgress((s) => s.markAnswer);
	const finishPlacement = useProgress((s) => s.finishPlacement);
	const mastery = useProgress((s) => s.mastery);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)(false);
	const current = deck[index];
	const weak = done ? weakSkills(mastery, 3) : [];
	const next = LESSONS.filter((l) => (l.region ?? "eu") === "eu").find((l) => weak.includes(l.skillIds[0])) ?? LESSONS[0];
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium uppercase tracking-wider text-accent",
				children: "Placement"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold sm:text-5xl",
				children: "Your first lessons"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "ElevatorIQ now knows where you are solid and where the language still slips. Start on a weak floor — not at the beginning of the book."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-2",
				children: weak.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-xl bg-raised px-4 py-3 text-sm",
					children: SKILL_BY_ID[id].name
				}, id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/learn/$id",
					params: { id: next.id },
					className: buttonVariants(),
					children: "Start there"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/practice",
					className: buttonVariants({ variant: "secondary" }),
					children: "Jump to practice"
				})]
			})
		]
	});
	if (!current) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "mx-auto max-w-3xl px-4 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Placement bank is empty." })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium uppercase tracking-wider text-accent",
				children: "Diagnostic · eight questions"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-3xl font-semibold",
				children: "Show us the landing"
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
					if (index + 1 >= deck.length) {
						finishPlacement();
						setDone(true);
					} else setIndex((i) => i + 1);
				}
			}, current.id)
		]
	});
}
//#endregion
export { PlacementPage as component };
