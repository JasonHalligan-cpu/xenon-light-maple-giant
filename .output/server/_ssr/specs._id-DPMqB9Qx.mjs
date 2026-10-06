import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as cn } from "./utils-DDI7QxNU.mjs";
import { n as buttonVariants } from "./button-BjXN1-zk.mjs";
import { t as StatuteSplit } from "./statute-split-D_ikWagS.mjs";
import { a as Route$6 } from "./router-Dvuz30ij.mjs";
import { n as SPEC_BY_ID, t as LIFT_SPECS } from "./specs-TqgmfoV3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/specs._id-DPMqB9Qx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function isSpec(id) {
	return id in SPEC_BY_ID;
}
function SpecPage() {
	const { id } = Route$6.useParams();
	const spec = isSpec(id) ? SPEC_BY_ID[id] : void 0;
	const [open, setOpen] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setOpen(spec?.rows[0]?.item ?? "");
	}, [spec]);
	if (!spec) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-2xl px-4 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "That sheet is not on the board." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/specs",
			className: "mt-4 inline-block text-accent",
			children: "All specifications"
		})]
	});
	const row = spec.rows.find((r) => r.item === open) ?? spec.rows[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-5xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/specs",
				className: "text-base text-accent hover:underline",
				children: "All specifications"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-mono text-sm uppercase tracking-wider text-accent",
				children: spec.kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold sm:text-5xl",
				children: spec.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-lg text-muted",
				children: spec.summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: spec.img,
				alt: spec.alt,
				className: "mt-6 aspect-video w-full rounded-2xl object-cover shadow-[var(--shadow-border)]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold",
						children: "The sheet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-lg text-muted",
						children: "Tap a line. Left is the standard. Right is the landing. Typical numbers are teaching values for a UK spec."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3",
						children: spec.rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setOpen(r.item),
							className: cn("flex min-h-16 w-full flex-col items-start rounded-xl px-4 py-3 text-left shadow-[var(--shadow-border)]", open === r.item ? "bg-orange text-accent-fg" : "bg-surface hover:bg-raised"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl font-semibold",
								children: r.item
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("mt-1 text-sm", open === r.item ? "text-accent-fg/85" : "text-muted"),
								children: r.typical
							})]
						}) }, r.item))
					}),
					row ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatuteSplit, {
							statute: row.statute,
							plain: row.plain,
							why: `Typical UK figure: ${row.typical}.`
						})
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12 grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-semibold",
						children: "Write this"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2 text-lg",
						children: spec.must.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line }, line))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-semibold",
						children: "Do not write this"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2 text-lg",
						children: spec.never.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line }, line))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10 rounded-2xl bg-paper p-6 text-paper-fg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium uppercase tracking-wider text-paper-muted",
						children: "Sample tender line"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-mono text-base leading-relaxed",
						children: spec.tender
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-paper-muted",
						children: "A starting sentence for a specifier. Check the current BS part, the fire strategy, and Part B / M before it leaves the office."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/classify",
					className: buttonVariants(),
					children: "Match a building"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/library",
					className: buttonVariants({ variant: "secondary" }),
					children: "EU regulations"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 flex flex-wrap gap-2",
				children: LIFT_SPECS.filter((s) => s.id !== spec.id).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/specs/$id",
					params: { id: s.id },
					className: "inline-flex min-h-11 items-center rounded-lg bg-raised px-3 text-base hover:bg-surface",
					children: s.name
				}) }, s.id))
			})
		]
	});
}
//#endregion
export { SpecPage as component };
