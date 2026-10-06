import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./button-BjXN1-zk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-CjjmSsVG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SHOP_ITEMS = [
	{
		id: "directive-notes",
		name: "Lifts Directive field notes",
		kind: "Guide",
		price: "£28",
		line: "The EU regulations for a new elevator, in landing language. Not a substitute for the Directive."
	},
	{
		id: "evac-briefing",
		name: "Evacuation elevator briefing",
		kind: "Course",
		price: "£120",
		line: "Class A and Class B, the three modes, and why a firefighter elevator is a different car."
	},
	{
		id: "autodialer",
		name: "Elevator autodialer",
		kind: "Equipment",
		price: "£640",
		line: "The EN 81-28 alarm a trapped passenger uses. Not the firefighter phone."
	},
	{
		id: "door-operator",
		name: "Power operated door operator",
		kind: "Equipment",
		price: "£1,840",
		line: "Power operated sliding doors for an accessible car. Listing only."
	},
	{
		id: "rescue-panel",
		name: "Emergency rescue control",
		kind: "Equipment",
		price: "£410",
		line: "The control an assistant uses to drive the car from inside the elevator control panel."
	},
	{
		id: "exam-diary",
		name: "Examination record book",
		kind: "Duty",
		price: "£18",
		line: "A paper record for the six-month thorough examination. The duty still sits with the owner."
	}
];
function ShopPage() {
	const [basket, setBasket] = (0, import_react.useState)([]);
	function toggle(id) {
		setBasket((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium uppercase tracking-wider text-accent",
				children: "Demonstration"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex flex-wrap items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl font-semibold sm:text-5xl",
					children: "Shopping"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-sm text-muted",
					children: [basket.length, " in the basket"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-lg text-muted",
				children: "A pretend shop for later sponsorship. Nothing here is for sale, and no payment is taken."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-4 sm:grid-cols-2",
				children: SHOP_ITEMS.map((item) => {
					const inBasket = basket.includes(item.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex flex-col rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs uppercase tracking-wider text-accent",
								children: item.kind
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-2xl font-semibold",
								children: item.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 flex-1 text-base leading-relaxed text-muted",
								children: item.line
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-2xl",
									children: item.price
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: inBasket ? "secondary" : "primary",
									onClick: () => toggle(item.id),
									children: inBasket ? "Remove" : "Add"
								})]
							})
						]
					}, item.id);
				})
			})
		]
	}) });
}
//#endregion
export { ShopPage as component };
