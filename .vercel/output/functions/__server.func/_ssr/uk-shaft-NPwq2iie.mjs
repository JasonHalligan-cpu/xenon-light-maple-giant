import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as cn } from "./utils-DDI7QxNU.mjs";
import { C as SHAFT_HOTSPOTS } from "./router-B4HJ06iu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/uk-shaft-NPwq2iie.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CARS = [
	{
		id: "73",
		title: "Standard",
		line: "Parks",
		detail: "Recalls the elevator and places the elevator out of service.",
		img: "/graphics/car-ordinary-j.jpg",
		alt: "Empty standard passenger elevator with doors open onto a yellow landing",
		tone: "bg-yellow text-night",
		to: "en81-73"
	},
	{
		id: "72",
		title: "Firefighter",
		line: "Taken over",
		detail: "A firefighter elevator is the fire brigade's tool, not a way out for residents. They take it over with a key and ride it up to the bridgehead: the protected floor, usually two floors below the fire, where the crew start their attack. It has to keep working while water from the firefighting above runs down the shaft, so it has a second power supply, a pit that drains, and a phone to fire control. A fire strategy may still use it to move people. That does not make it an EN 81-76 evacuation elevator. Mix the two up and the building gets the wrong car.",
		img: "/graphics/car-firefighter-o.jpg",
		alt: "Firefighter in protective kit inside a firefighters elevator with a key panel and a wet floor",
		tone: "bg-orange text-accent-fg",
		to: "en81-72"
	},
	{
		id: "76",
		title: "Evacuation",
		line: "Keeps working",
		detail: "The elevator remains available for evacuation of persons with disabilities under this chosen mode.",
		img: "/graphics/car-evac-i.jpg",
		alt: "Person in a wheelchair inside an evacuation elevator with a large clear floor",
		tone: "bg-green text-ok-fg",
		to: "en81-76"
	}
];
function ThreeLifts() {
	const [active, setActive] = (0, import_react.useState)("76");
	const car = CARS.find((c) => c.id === active) ?? CARS[2];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-3 sm:grid-cols-3",
		children: CARS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setActive(item.id),
			"aria-pressed": active === item.id,
			className: cn("flex h-full flex-col overflow-hidden rounded-xl text-left shadow-[var(--shadow-border)]", active === item.id ? "ring-1 ring-yellow" : ""),
			children: [item.img ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: item.img,
				alt: item.alt,
				className: "aspect-square w-full object-cover"
			}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("flex flex-1 flex-col justify-center p-4", item.tone),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-sm",
						children: item.id
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-2xl font-semibold",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-base",
						children: item.line
					})
				]
			})]
		}, item.id))
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("mt-4 rounded-2xl p-5 sm:p-6", car.tone),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-sm",
				children: ["EN 81-", car.id]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-lg leading-relaxed",
				children: car.detail
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/library/$id",
				params: { id: car.to },
				className: "mt-4 inline-flex min-h-12 items-center text-base underline decoration-2 underline-offset-4",
				children: "Read this part"
			})
		]
	})] });
}
function UkShaft() {
	const [active, setActive] = (0, import_react.useState)(SHAFT_HOTSPOTS[0].id);
	const spot = SHAFT_HOTSPOTS.find((s) => s.id === active) ?? SHAFT_HOTSPOTS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-[1.3fr_0.7fr] lg:items-stretch",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-elevator)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/graphics/shaft-floors.jpg",
				alt: "Cutaway of a UK office building showing three elevator cars in a shaft",
				className: "aspect-video w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 grid grid-rows-4",
				children: SHAFT_HOTSPOTS.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setActive(h.id),
					"aria-pressed": active === h.id,
					className: cn("flex min-h-11 items-end justify-start px-3 py-2 text-left transition-colors", active === h.id ? h.tone : "bg-fg/0 hover:bg-fg/20"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("rounded-md px-2 py-1 font-mono text-sm", active === h.id ? "" : "bg-paper/90 text-paper-fg"),
						children: h.code
					})
				}, h.id))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "flex flex-col justify-between rounded-2xl bg-paper p-5 text-paper-fg sm:p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-sm text-accent",
					children: spot.code
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 font-display text-3xl font-semibold",
					children: spot.label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-lg leading-relaxed text-paper-muted",
					children: spot.plain
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/library/$id",
				params: { id: spot.params.id },
				className: "mt-6 inline-flex min-h-12 items-center text-base text-accent hover:underline",
				children: "Open this code"
			})]
		})]
	});
}
//#endregion
export { UkShaft as n, ThreeLifts as t };
