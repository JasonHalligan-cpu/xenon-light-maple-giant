import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as formatPct } from "./utils-DDI7QxNU.mjs";
import { n as buttonVariants, t as Button } from "./button-BjXN1-zk.mjs";
import { a as ASME_TEST_IDS } from "./asme-CKED6CLd.mjs";
import { C as TEST_IDS, D as Progress, N as QUESTION_BY_ID, O as QuestionCard, z as useProgress } from "./router-2O5coh7U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/test-BPJ7tT2U.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EU_PAPER = TEST_IDS.map((id) => QUESTION_BY_ID[id]);
var ASME_PAPER = ASME_TEST_IDS.map((id) => QUESTION_BY_ID[id]);
function EuTest() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestSession, { region: "eu" });
}
function TestSession({ region }) {
	const markAnswer = useProgress((s) => s.markAnswer);
	const paper = region === "asme" ? ASME_PAPER : EU_PAPER;
	const passMark = region === "asme" ? 10 : 10;
	const [index, setIndex] = (0, import_react.useState)(0);
	const [hits, setHits] = (0, import_react.useState)(0);
	const [misses, setMisses] = (0, import_react.useState)([]);
	const [done, setDone] = (0, import_react.useState)(false);
	const current = paper[index];
	const passed = hits >= passMark;
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium uppercase tracking-wider text-accent",
				children: region === "asme" ? "ASME test" : "Test"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold",
				children: passed ? "Pass" : "Not yet"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-lg text-muted",
				children: [
					hits,
					" of ",
					paper.length,
					" correct. The pass mark is ",
					passMark,
					". One attempt each. No second chance on the same question."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 font-display text-5xl tabular-nums",
				children: formatPct(hits / paper.length)
			}),
			misses.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold",
					children: "What to look at again"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-3",
					children: misses.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl bg-paper p-5 text-paper-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: q.prompt
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-base leading-relaxed",
							children: q.plain
						})]
					}, q.id))
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						setIndex(0);
						setHits(0);
						setMisses([]);
						setDone(false);
					},
					children: "Sit it again"
				}), region === "asme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/asme/practice",
					className: buttonVariants({ variant: "secondary" }),
					children: "Back to practice"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/practice",
					className: buttonVariants({ variant: "secondary" }),
					children: "Back to practice"
				})]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-baseline justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm font-medium uppercase tracking-wider text-accent",
					children: [
						"Test · question ",
						index + 1,
						" of ",
						paper.length
					]
				}), region === "asme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/asme/practice",
					className: "text-sm text-muted hover:text-fg",
					children: "Practice instead"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/practice",
					className: "text-sm text-muted hover:text-fg",
					children: "Practice instead"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-base text-muted",
				children: "One answer. The page does not teach you until the score."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
				value: (index + 1) / paper.length,
				className: "mt-4 mb-8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuestionCard, {
				question: current,
				index,
				total: paper.length,
				exam: true,
				onResolved: (correct) => {
					markAnswer({
						questionId: current.id,
						skillId: current.skillId,
						correct,
						firstTry: correct
					});
					if (correct) setHits((n) => n + 1);
					else setMisses((list) => [...list, current]);
					if (index + 1 >= paper.length) setDone(true);
					else setIndex((i) => i + 1);
				}
			}, current.id)
		]
	});
}
//#endregion
export { TestSession, EuTest as component };
