import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as ArrowRight } from "../_libs/lucide-react.mjs";
import { _ as UkLayers, v as STANDARDS, w as AdSlot } from "./router-2O5coh7U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/library.index-Ccm7lLO4.js
var import_jsx_runtime = require_jsx_runtime();
var FAMILY = {
	law: "The law around the elevator",
	base: "The default machine",
	people: "People in the car",
	fire: "When the building is in trouble",
	existing: "Elevators already in the shaft"
};
var ORDER = [
	"law",
	"base",
	"people",
	"fire",
	"existing"
];
function EuLibrary() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeLibrary, { region: "eu" });
}
function CodeLibrary({ region }) {
	const standards = STANDARDS.filter((s) => (s.region ?? "eu") === region);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-5xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium uppercase tracking-wider text-accent",
				children: region === "asme" ? "ASME regulations" : "EU regulations"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold sm:text-5xl",
				children: region === "asme" ? "ASME codes, into a language everyone can understand" : "Every part, into a language everyone can understand"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-lg text-muted",
				children: region === "asme" ? "A17.1 is the new elevator. A17.2 is inspection. A17.3 is an elevator already there. Phase I parks. Phase II is the firefighters’ key. Occupant evacuation is the way out. The edition is the one that place adopted. These codes stay in this tab. They are not EN 81." : "EU regulations. Every regulation that sits on an elevator is listed here, then the BS EN 81 parts. The Lifts Regulations say a new elevator must be safe to put on the market. LOLER is the six-month health check. The others are the duties around fire, access, work and design. Tap one."
			}),
			region === "eu" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-semibold",
						children: "EU regulations"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 max-w-xl text-base text-muted",
						children: "Law, recipe, health check — tap to open. The regulations themselves are listed underneath."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UkLayers, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/uk",
						className: "mt-4 inline-flex min-h-11 items-center gap-2 text-base text-accent hover:underline",
						children: ["Interactive shaft", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/specs",
						className: "mt-2 inline-flex min-h-11 items-center gap-2 text-base text-accent hover:underline sm:mt-4 sm:ml-6",
						children: ["Detailed specifications", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-12 text-sm font-medium uppercase tracking-wider text-faint",
				children: region === "asme" ? "The ASME codes" : "The regulations and the BS EN 81 parts"
			}),
			ORDER.map((family) => {
				const items = standards.filter((s) => s.family === family);
				if (!items.length) return null;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-semibold",
						children: FAMILY[family]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid gap-3 sm:grid-cols-2",
						children: items.map((std) => {
							const className = "block min-h-28 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] transition-colors hover:bg-raised";
							const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-xs text-accent",
										children: std.code
									}), std.featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-accent/15 px-2 py-0.5 text-xs text-accent",
										children: "Featured"
									}) : null]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-2 block font-display text-xl font-semibold",
									children: std.everydayTitle
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-2 block text-base text-muted",
									children: std.oneLiner
								})
							] });
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: region === "asme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/asme/library/$id",
								params: { id: std.id },
								className,
								children: inner
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/library/$id",
								params: { id: std.id },
								className,
								children: inner
							}) }, std.id);
						})
					})]
				}, family);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdSlot, {
					slot: "codes",
					size: "strip"
				})
			})
		]
	});
}
//#endregion
export { CodeLibrary, EuLibrary as component };
