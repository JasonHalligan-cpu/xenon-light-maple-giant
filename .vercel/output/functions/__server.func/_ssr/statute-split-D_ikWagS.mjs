import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/statute-split-D_ikWagS.js
var import_jsx_runtime = require_jsx_runtime();
function StatuteSplit({ statute, plain, why }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-3 lg:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl border-t-4 border-yellow bg-raised p-5 text-fg sm:p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium uppercase tracking-[0.16em] text-yellow",
					children: "What the standard says"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-mono text-base leading-relaxed text-fg/90",
					children: statute
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl border-t-4 border-green bg-paper p-5 text-paper-fg sm:p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium uppercase tracking-wider text-paper-muted",
					children: "What it means"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-lg leading-relaxed",
					children: plain
				})]
			}),
			why ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl border-t-4 border-yellow bg-raised p-5 text-fg sm:p-6 lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium uppercase tracking-wider text-yellow",
					children: "WHY IT MATTERS"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-lg leading-relaxed",
					children: why
				})]
			}) : null
		]
	});
}
//#endregion
export { StatuteSplit as t };
