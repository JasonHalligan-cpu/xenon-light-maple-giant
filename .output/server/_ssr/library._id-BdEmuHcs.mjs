import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as cn } from "./utils-DDI7QxNU.mjs";
import { n as buttonVariants } from "./button-BjXN1-zk.mjs";
import { t as StatuteSplit } from "./statute-split-D_ikWagS.mjs";
import { c as Route$10, x as LESSONS, y as STANDARD_BY_ID } from "./router-Dvuz30ij.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/library._id-BdEmuHcs.js
var import_jsx_runtime = require_jsx_runtime();
function EuCode() {
	const { id } = Route$10.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodePage, {
		id,
		region: "eu"
	});
}
function CodePage({ id, region }) {
	const std = STANDARD_BY_ID[id];
	if (!std || (std.region ?? "eu") !== region) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-2xl px-4 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Unknown code in this set." }), region === "asme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/asme/library",
			className: "mt-4 inline-block text-accent",
			children: "Back to ASME codes"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/library",
			className: "mt-4 inline-block text-accent",
			children: "Back to library"
		})]
	});
	const relatedLessons = LESSONS.filter((l) => (l.region ?? "eu") === region && l.standardIds.includes(std.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-4xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs text-accent",
				children: std.code
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold text-pretty sm:text-5xl",
				children: std.everydayTitle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: std.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-muted",
				children: std.oneLiner
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatuteSplit, {
					statute: std.statute,
					plain: std.plain
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold",
					children: "Keep this"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: std.remember.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-xl bg-raised px-4 py-3 text-sm text-fg shadow-[var(--shadow-border)]",
						children: line
					}, line))
				})]
			}),
			std.related.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold",
					children: "Sits next to"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: std.related.filter((rid) => (STANDARD_BY_ID[rid]?.region ?? "eu") === region).map((rid) => {
						const other = STANDARD_BY_ID[rid];
						const className = "min-h-11 rounded-lg bg-surface px-3 py-2 font-mono text-xs text-muted hover:text-fg";
						const label = other?.code ?? rid;
						return region === "asme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/asme/library/$id",
							params: { id: rid },
							className,
							children: label
						}, rid) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/library/$id",
							params: { id: rid },
							className,
							children: label
						}, rid);
					})
				})]
			}) : null,
			relatedLessons.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold",
					children: "Learn it as a floor"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: relatedLessons.map((lesson) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: region === "asme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/asme/learn/$id",
						params: { id: lesson.id },
						className: "block rounded-xl bg-paper px-4 py-3 text-paper-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-semibold",
							children: lesson.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-sm text-paper-muted",
							children: lesson.summary
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/learn/$id",
						params: { id: lesson.id },
						className: "block rounded-xl bg-paper px-4 py-3 text-paper-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-semibold",
							children: lesson.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-sm text-paper-muted",
							children: lesson.summary
						})]
					}) }, lesson.id))
				})]
			}) : null,
			region === "asme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/asme/library",
				className: cn(buttonVariants({ variant: "ghost" }), "mt-10"),
				children: "All codes"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/library",
				className: cn(buttonVariants({ variant: "ghost" }), "mt-10"),
				children: "All codes"
			})
		]
	});
}
//#endregion
export { CodePage, EuCode as component };
