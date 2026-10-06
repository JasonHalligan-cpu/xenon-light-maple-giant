import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as cn } from "./utils-DDI7QxNU.mjs";
import { n as buttonVariants } from "./button-BjXN1-zk.mjs";
import { t as StatuteSplit } from "./statute-split-D_ikWagS.mjs";
import { _ as UkLayers } from "./router-2O5coh7U.mjs";
import { n as UkShaft, t as ThreeLifts } from "./uk-shaft-NPwq2iie.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/uk-BYGPKGqQ.js
var import_jsx_runtime = require_jsx_runtime();
function UkPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-5xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium uppercase tracking-wider text-accent",
				children: "EU regulations"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold text-pretty sm:text-5xl",
				children: "Tap the shaft. The EU regulations light up."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-lg text-muted",
				children: "ElevatorIQ explains EU regulations. The law for a new elevator is the Lifts Directive. The recipe is the EN 81 family. The health check is LOLER. Click on the cars below, then tap a layer. That is the whole game."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold",
						children: "The building"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-muted",
						children: "Four bands, top to bottom: evacuation, firefighter, standard, then the diary once people are riding it."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UkShaft, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold",
						children: "Three layers"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-muted",
						children: "Law, recipe, health check. They are not the same document. Tap one."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UkLayers, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatuteSplit, {
					statute: "The Lifts Directive 2014/33/EU sets essential health and safety requirements for placing elevators on the market. Harmonised EN 81 parts confer a presumption of conformity. LOLER 1998 places in-service thorough-examination duties on those who control passenger elevators, typically every six months. Approved Documents B and M, and the Equality Act 2010, sit on the building — not on the factory plate.",
					plain: "Think of three different conversations. The factory talks to the Lifts Regulations. The drawing talks to EN 81 — and you must name the part. The owner talks to LOLER twice a year. Fire and access live in Part B, Part M and the Equality Act. Mix them up and you specify a firefighter elevator that cannot carry a wheelchair user out.",
					why: "This is why a CE mark is not a fire strategy, and a 72 car is not a 76 car."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold",
						children: "Three cars, one alarm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted",
						children: "Click on the cars below. The UK job of that car is underneath."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThreeLifts, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-14 overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-border)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/graphics/loler-machine.jpg",
						alt: "Elevator machine room prepared for a LOLER thorough examination, with no people",
						className: "aspect-square w-full object-cover lg:aspect-auto lg:h-full"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-sm text-accent",
								children: "LOLER 1998"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-3xl font-semibold",
								children: "The six-month health check"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-lg text-muted",
								children: "A competent person looks at the real machine, not the brochure. People-carrying elevators: usually every six months. Defects that are or could become a danger get written down — and you stop using it."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/library/$id",
								params: { id: "loler" },
								className: cn(buttonVariants(), "mt-6"),
								children: "Read LOLER in landing language"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-wrap gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/classify",
						className: buttonVariants(),
						children: "Specify this building"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/library",
						className: buttonVariants({ variant: "secondary" }),
						children: "BS EN 81 library"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/specs",
						className: buttonVariants({ variant: "secondary" }),
						children: "Spec sheets"
					})
				]
			})
		]
	});
}
//#endregion
export { UkPage as component };
