import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as cn, r as formatPct } from "./utils-DDI7QxNU.mjs";
import { n as buttonVariants, t as Button } from "./button-BjXN1-zk.mjs";
import { D as Progress, E as reteachFor, F as SKILL_BY_ID, O as QuestionCard, R as pickQuestions, T as PlainSketch, w as AdSlot, z as useProgress } from "./router-Dvuz30ij.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/practice-OkByhhpX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EuPractice() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PracticeSession, { region: "eu" });
}
function snapshotDeck(region) {
	const s = useProgress.getState();
	return pickQuestions({
		mastery: s.mastery,
		sm2: s.sm2,
		recentIds: s.recentQuestionIds,
		n: 8,
		region
	});
}
function PracticeSession({ region }) {
	const markAnswer = useProgress((s) => s.markAnswer);
	const hydrated = useProgress((s) => s.hydrated);
	const [deck, setDeck] = (0, import_react.useState)(null);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [hits, setHits] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)(false);
	const [phase, setPhase] = (0, import_react.useState)("ask");
	const [anglePick, setAnglePick] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!hydrated || deck !== null) return;
		setDeck(snapshotDeck(region));
	}, [
		hydrated,
		deck,
		region
	]);
	const current = deck?.[index];
	if (!hydrated || deck === null) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "mx-auto max-w-3xl px-4 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted",
			children: "Loading your questions…"
		})
	});
	if (done && deck.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium uppercase tracking-wider text-accent",
				children: region === "asme" ? "ASME questions" : "Questions only"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold",
				children: "Set closed"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-lg text-muted",
				children: [
					hits,
					" of ",
					deck.length,
					" were clear the first time. The others were translated into ordinary words. A miss is not a mark against you. It is how the jargon gets explained."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 font-display text-5xl tabular-nums",
				children: formatPct(hits / deck.length)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => {
							setDeck(snapshotDeck(region));
							setIndex(0);
							setHits(0);
							setDone(false);
							setPhase("ask");
							setAnglePick(null);
						},
						children: "Another set"
					}),
					region === "asme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/asme/test",
						className: buttonVariants({ variant: "secondary" }),
						children: "Sit the test"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/test",
						className: buttonVariants({ variant: "secondary" }),
						children: "Sit the test"
					}),
					region === "asme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/asme/learn",
						className: buttonVariants({ variant: "secondary" }),
						children: "Back to lessons"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/learn",
						className: buttonVariants({ variant: "secondary" }),
						children: "Back to lessons"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdSlot, {
					slot: "drill",
					size: "card"
				})
			})
		]
	});
	if (!deck.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-12 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl font-semibold",
			children: "No questions in the bank."
		}), region === "asme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/asme/test",
			className: cn(buttonVariants(), "mt-6"),
			children: "Sit the test"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/test",
			className: cn(buttonVariants(), "mt-6"),
			children: "Sit the test"
		})]
	});
	if (!current) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "mx-auto max-w-3xl px-4 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No questions in the bank." })
	});
	const question = current;
	const total = deck.length;
	const reteach = reteachFor(question);
	function leaveQuestion(firstTryCorrect) {
		markAnswer({
			questionId: question.id,
			skillId: question.skillId,
			correct: firstTryCorrect,
			firstTry: firstTryCorrect
		});
		if (firstTryCorrect) setHits((h) => h + 1);
		setPhase("ask");
		setAnglePick(null);
		if (index + 1 >= total) setDone(true);
		else setIndex((i) => i + 1);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-baseline justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm font-medium uppercase tracking-wider text-faint",
					children: [
						"Question ",
						index + 1,
						" of ",
						total,
						" · ",
						SKILL_BY_ID[question.skillId].name
					]
				}), region === "asme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/asme/test",
					className: "text-sm text-yellow hover:underline",
					children: "Sit the test"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/test",
					className: "text-sm text-yellow hover:underline",
					children: "Sit the test"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
				value: (index + 1) / total,
				className: "mt-4 mb-3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-8 mt-4 text-base text-muted",
				children: "These questions translate legal words. If you do not know yet, that is the point of the page. Bayesian Knowledge Tracing updates how likely it is you already know this rule. A low likelihood brings the rule back, with a simpler explanation. It is not a mark."
			}),
			phase === "ask" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuestionCard, {
				question,
				index,
				total,
				holdOnMiss: true,
				onMiss: () => {
					setPhase("teach");
				},
				onResolved: (correct, firstTry) => {
					leaveQuestion(correct && firstTry);
				}
			}, question.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium uppercase tracking-wider text-accent",
						children: "Plainer words"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-semibold text-pretty sm:text-3xl",
						children: "A miss is not a mark against you."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg text-muted",
						children: "The standard uses dense words. Here is the same rule, drawn and said so anyone can follow it."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlainSketch, {
						questionId: question.id,
						skillId: question.skillId
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl border-l-4 border-green bg-paper p-5 text-paper-fg shadow-[var(--shadow-border)] sm:p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium uppercase tracking-wider text-paper-muted",
							children: "What it means"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-lg leading-relaxed",
							children: question.plain
						})]
					}),
					reteach.teach !== question.plain ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg leading-relaxed text-muted",
						children: reteach.teach
					}) : null,
					phase === "teach" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => setPhase("check"),
						children: "Check it in these words"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-semibold",
								children: reteach.prompt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-2",
								children: reteach.choices.map((choice, i) => {
									const revealed = anglePick !== null;
									const isAnswer = i === reteach.answer;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										disabled: revealed,
										onClick: () => setAnglePick(i),
										className: cn("flex min-h-14 w-full items-start rounded-xl px-4 py-3 text-left text-base shadow-[var(--shadow-border)]", !revealed && "bg-surface hover:bg-inset", revealed && isAnswer && "bg-green text-ok-fg", revealed && anglePick === i && !isAnswer && "bg-orange text-accent-fg"),
										children: choice
									}) }, choice);
								})
							}),
							anglePick !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-base text-muted",
									children: anglePick === reteach.answer ? "Yes. That is the rule, in ordinary words." : "That is all right. The highlighted line is the plain version. Take that with you."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									onClick: () => leaveQuestion(false),
									children: "Continue"
								})]
							}) : null
						]
					})
				]
			})
		]
	});
}
//#endregion
export { PracticeSession, EuPractice as component };
