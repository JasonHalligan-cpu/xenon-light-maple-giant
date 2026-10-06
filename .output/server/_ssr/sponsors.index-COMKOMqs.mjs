import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as cn } from "./utils-DDI7QxNU.mjs";
import { n as buttonVariants } from "./button-BjXN1-zk.mjs";
import { u as ArrowRight } from "../_libs/lucide-react.mjs";
import { G as SPONSOR_PACKAGES, U as SPONSOR_AUDIENCE, w as AdSlot } from "./router-Dvuz30ij.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sponsors.index-COMKOMqs.js
var import_jsx_runtime = require_jsx_runtime();
function SponsorsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-5xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium uppercase tracking-wider text-accent",
				children: "Future sponsorship"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold sm:text-6xl",
				children: "Put your name on the landing."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-lg text-muted sm:text-xl",
				children: "Slots in ElevatorIQ already carry simulated campaigns — Ashcombe, Beacon, Northbank, Harbour, Kiln & Rail — so you can see the shape. None of them is real. Hold a place for when yours is."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-7 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/adverts",
					className: cn(buttonVariants({ size: "lg" })),
					children: ["See pretend ads", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/sponsors/$id",
					params: { id: "lobby" },
					className: cn(buttonVariants({
						size: "lg",
						variant: "secondary"
					})),
					children: "Hold the lobby"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-semibold",
					children: "Who is in the car"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 grid gap-3 sm:grid-cols-2",
					children: SPONSOR_AUDIENCE.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl font-semibold",
							children: a.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-base text-muted",
							children: a.line
						})]
					}, a.label))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold",
						children: "The inventory"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-lg text-muted",
						children: "Five labelled places. Tap a package for the spec and to hold a place."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 grid gap-3 sm:grid-cols-2",
						children: SPONSOR_PACKAGES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/sponsors/$id",
							params: { id: p.id },
							className: "block min-h-36 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] transition-colors hover:bg-raised",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-sm uppercase tracking-wider text-accent",
									children: [
										p.kicker,
										" · ",
										p.price
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-2 block font-display text-2xl font-semibold",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-2 block text-base text-muted",
									children: p.placement
								})
							]
						}) }, p.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold",
						children: "How a slot looks today"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 mb-5 max-w-xl text-lg text-muted",
						children: "Live lobby unit, filled with a pretend manufacturer."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdSlot, {
						slot: "lobby",
						size: "billboard"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 text-sm text-faint",
				children: "Ads stay labelled. The campaigns you see now are simulations. ElevatorIQ will not sell lessons, hide a code, or let a partner rewrite the landing language."
			})
		]
	});
}
//#endregion
export { SponsorsPage as component };
