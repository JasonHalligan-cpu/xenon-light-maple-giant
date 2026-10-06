import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as cn } from "./utils-DDI7QxNU.mjs";
import { n as buttonVariants, t as Button } from "./button-BjXN1-zk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/classify-DsM1uyHo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CLASSIFIER_DEFAULT = {
	existing: null,
	firefightersRequired: null,
	needEvacuation: null,
	oneEel: null,
	secondaryPower: null,
	remote: null,
	staffed: null
};
function recommend(a) {
	if (a.existing === null || a.needEvacuation === null || a.firefightersRequired === null) return null;
	if (a.existing) return {
		headline: "This is an existing elevator. EN 81-76 is not a sticker.",
		stack: [
			"LOLER diary first — people-carrying elevators, typically every six months",
			"EN 81-80 ranked safety upgrades",
			"EN 81-82 accessibility upgrades where the shaft allows",
			"EN 81-73-style recall behaviour if you can add it",
			"A real assistance / refuge plan for anyone who cannot use stairs"
		],
		mode: "Keep the human plan. Specify 20 + 70 + 76 only when you replace the elevator.",
		caveats: ["You cannot convert a pre-2025 car into 76 with a software patch.", "If firefighters already use this shaft, talk to the fire engineer before touching controls."],
		plain: "Old metal, new eyes. Rank what can kill someone, make the car more usable, and write down who helps a wheelchair user when the alarm sounds. 76 waits for the next machine."
	};
	const stack = ["EN 81-20 + EN 81-50 (the base new elevator)", "EN 81-70 Type 2 or larger"];
	if (a.firefightersRequired) stack.push("EN 81-72 firefighters elevator — the fire brigade’s tool");
	stack.push("EN 81-73 behaviour on every standard passenger car");
	if (!a.needEvacuation) return {
		headline: "New elevator, no 76 duty in the strategy — yet.",
		stack,
		mode: "Standard cars park on alarm (73). If people who cannot use stairs occupy this building, the strategy is unfinished.",
		caveats: ["Access in (70) without a way out is a half-written building.", "A later change of use can make 76 suddenly necessary."],
		plain: "You can legally buy a quiet passenger elevator. You should still ask, out loud, how a wheelchair user leaves when the stairs are the enemy."
	};
	if (a.oneEel === null || a.secondaryPower === null || a.remote === null || a.staffed === null) return null;
	const classA = !a.firefightersRequired && a.oneEel && !a.secondaryPower && !a.remote;
	if (a.firefightersRequired) stack.push("EN 81-76 Class B evacuation elevator — complementary to 72, not a substitute");
	else if (classA) stack.push("EN 81-76 Class A — one exit floor, rescue-to-EEL on power failure, Type 2 car");
	else stack.push("EN 81-76 Class B — secondary power, larger car, optional extra EELs / remote");
	let mode = "Provide at least one 76 mode.";
	if (a.remote) mode = "Remote-assisted is a Class B feature. It needs a person, video and speech whenever the building is occupied — not only office hours.";
	else if (a.staffed) mode = "Driver-assisted can work if the roster is real. Still consider automatic: it is the only independent self-rescue mode, and staff are busy in a fire.";
	else mode = "Unstaffed or lightly staffed: automatic evacuation operation is the honest mode. It is the only one that lets a person leave without waiting for a helper.";
	return {
		headline: classA && !a.firefightersRequired ? "Class A evacuation elevator is on the table" : "Class B (and maybe 72 as well) — this is not a simple shaft",
		stack,
		mode,
		caveats: [
			"Protected landings, an EEL with a route to open air, signs, voice, water management — the building has a job.",
			"Keep a plan B for when the elevator is unavailable. 76 says so.",
			"This is training, not a design certificate. Sit the fire engineer and the elevator engineer in the same meeting."
		],
		plain: classA ? "Simple plot, one way out, no generator: Class A can be honest if automatic rescue to the exit floor is real and the landing is still a place you can breathe." : "Complicated plot. Power, size, maybe remote, maybe a firefighter elevator too. Do not let a sales sheet collapse 72 and 76 into one cheaper car."
	};
}
var STEPS = [
	{
		key: "existing",
		q: "Is this an elevator already in the shaft?",
		hint: "Existing metal lives under 80, 82 and LOLER. 76 is for new cars."
	},
	{
		key: "firefightersRequired",
		q: "Does the fire strategy require a firefighters elevator?",
		hint: "Usually a height or risk trigger in national fire guidance — not a sales choice."
	},
	{
		key: "needEvacuation",
		q: "Must people who cannot use stairs have an elevator as a way out?",
		hint: "If yes, you are in EN 81-76 territory (for a new elevator) plus a human plan B."
	},
	{
		key: "oneEel",
		q: "Is there only one evacuation exit level?",
		hint: "One way-out floor points at Class A. Several exit floors point at Class B.",
		showIf: (a) => a.existing === false && a.needEvacuation === true
	},
	{
		key: "secondaryPower",
		q: "Will the building have a secondary power supply for this elevator?",
		hint: "No generator and a simple plot can still be Class A — if rescue-to-exit on mains failure is real.",
		showIf: (a) => a.existing === false && a.needEvacuation === true
	},
	{
		key: "remote",
		q: "Do you need someone in a control room to drive the car?",
		hint: "Remote-assisted is a Class B feature. It needs a person, video and speech whenever the building is occupied.",
		showIf: (a) => a.existing === false && a.needEvacuation === true
	},
	{
		key: "staffed",
		q: "Is the building staffed whenever people might need to leave?",
		hint: "Unstaffed nights belong to automatic mode — the only independent self-rescue.",
		showIf: (a) => a.existing === false && a.needEvacuation === true
	}
];
function ClassifyPage() {
	const [answers, setAnswers] = (0, import_react.useState)(CLASSIFIER_DEFAULT);
	const visible = STEPS.filter((s) => !s.showIf || s.showIf(answers));
	const next = visible.find((s) => answers[s.key] === null);
	const rec = recommend(answers);
	function set(key, value) {
		setAnswers((prev) => {
			const nextAns = {
				...prev,
				[key]: value
			};
			if (key === "existing" && value) return {
				...nextAns,
				oneEel: null,
				secondaryPower: null,
				remote: null,
				staffed: null
			};
			if (key === "needEvacuation" && !value) return {
				...nextAns,
				oneEel: null,
				secondaryPower: null,
				remote: null,
				staffed: null
			};
			return nextAns;
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium uppercase tracking-wider text-accent",
				children: "Building classifier"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold sm:text-5xl",
				children: "Match the machine to the plot"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "Answer in ordinary language. ElevatorIQ returns the stack under EU regulations — 20, 70, 72, 73, 76 — and the mode that would survive a fire strategy meeting. Not a certificate."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
				className: "mt-8 overflow-hidden rounded-2xl shadow-[var(--shadow-border)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/graphics/shaft-floors.jpg",
					alt: "Cutaway of a UK building with three elevator cars in the shaft",
					className: "aspect-video w-full object-cover"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-8 space-y-4",
				children: visible.map((step) => {
					const value = answers[step.key];
					const isNext = next?.key === step.key;
					if (value === null && !isNext) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl font-semibold",
								children: step.q
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-base text-muted",
								children: step.hint
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex flex-wrap gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => set(step.key, true),
									className: cn("min-h-12 rounded-lg px-5 text-base", value === true ? "bg-accent text-accent-fg" : "bg-raised text-fg"),
									children: "Yes"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => set(step.key, false),
									className: cn("min-h-12 rounded-lg px-5 text-base", value === false ? "bg-accent text-accent-fg" : "bg-raised text-fg"),
									children: "No"
								})]
							})
						]
					}, step.key);
				})
			}),
			rec ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-paper p-6 text-paper-fg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium uppercase tracking-wider text-paper-muted",
								children: "What it means"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-3xl font-semibold",
								children: rec.headline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 leading-relaxed",
								children: rec.plain
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-inset p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-semibold",
								children: "The stack"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-2 text-base text-muted",
								children: rec.stack.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line }, line))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 font-display text-xl font-semibold",
								children: "Mode"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-base text-muted",
								children: rec.mode
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 font-display text-xl font-semibold",
								children: "Do not skip"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-2 text-base text-muted",
								children: rec.caveats.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line }, line))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "secondary",
								onClick: () => setAnswers(CLASSIFIER_DEFAULT),
								children: "Start over"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/library/$id",
								params: { id: "en81-76" },
								className: buttonVariants(),
								children: "Read 76"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/specs",
								className: buttonVariants({ variant: "secondary" }),
								children: "Open spec sheets"
							})
						]
					})
				]
			}) : null
		]
	});
}
//#endregion
export { ClassifyPage as component };
