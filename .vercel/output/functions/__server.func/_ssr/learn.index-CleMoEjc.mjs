import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as cn } from "./utils-DDI7QxNU.mjs";
import { D as MovingLift, K as useProgress, O as LESSONS } from "./router-B4HJ06iu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/learn.index-CleMoEjc.js
var import_jsx_runtime = require_jsx_runtime();
function EuLessons() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LessonList, { region: "eu" });
}
function LessonList({ region }) {
	const done = useProgress((s) => s.lessonsDone);
	const lessons = LESSONS.filter((lesson) => (lesson.region ?? "eu") === region);
	const landings = [{
		mark: "G",
		name: "Lobby"
	}, ...lessons.map((lesson, i) => ({
		mark: String(i + 1).padStart(2, "0"),
		name: lesson.title,
		done: done.includes(lesson.id)
	}))];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium uppercase tracking-wider text-accent",
				children: "Curriculum"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold sm:text-5xl",
				children: region === "asme" ? "ASME, one floor at a time" : "One floor at a time"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-muted",
				children: region === "asme" ? "Each floor is a short lesson on ASME A17.1 / CSA B44 and the building code beside it. These floors stay in the ASME regulations tab. They are not EN 81." : "Each floor is a short lesson: what the standard says, then what it means. Get the check right and the car climbs. Practice is a different tab — questions only, no reading."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-8 lg:grid-cols-12 lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:sticky lg:top-24 lg:col-span-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MovingLift, {
						floor: lessons.filter((lesson) => done.includes(lesson.id)).length,
						landings
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "space-y-3 lg:col-span-8",
					children: lessons.map((lesson, i) => {
						const complete = done.includes(lesson.id);
						const className = cn("flex min-h-16 flex-col gap-1 rounded-2xl px-5 py-4 shadow-[var(--shadow-border)] transition-colors sm:flex-row sm:items-center sm:gap-6", complete ? "bg-ok/10" : "bg-surface hover:bg-raised");
						const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs tabular-nums text-muted",
								children: String(i + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex flex-wrap items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-xl font-semibold",
										children: lesson.title
									}), lesson.featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-accent/15 px-2 py-0.5 text-xs text-accent",
										children: region === "asme" ? "OEO" : "76"
									}) : null]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-base text-muted",
									children: lesson.summary
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-faint",
								children: [lesson.minutes, " min"]
							})
						] });
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: region === "asme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/asme/learn/$id",
							params: { id: lesson.id },
							className,
							children: inner
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/learn/$id",
							params: { id: lesson.id },
							className,
							children: inner
						}) }, lesson.id);
					})
				})]
			})
		]
	});
}
//#endregion
export { LessonList, EuLessons as component };
