import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as buttonVariants, t as Button } from "./button-BjXN1-zk.mjs";
import { t as StatuteSplit } from "./statute-split-D_ikWagS.mjs";
import { D as Progress, S as LESSON_BY_ID, b as MovingLift, d as Route$12, w as AdSlot, x as LESSONS, z as useProgress } from "./router-2O5coh7U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/learn._id-D9TgOYKH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EuLesson() {
	const { id } = Route$12.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LessonFloor, {
		id,
		region: "eu"
	});
}
var ART = {
	"en81-76": {
		src: "/graphics/car-evac-i.jpg",
		alt: "Person in a wheelchair inside an evacuation elevator with a large clear floor"
	},
	"en81-72": {
		src: "/graphics/car-firefighter-o.jpg",
		alt: "Firefighter in protective kit inside a firefighters elevator with a key panel and a wet floor"
	},
	"en81-73": {
		src: "/graphics/car-ordinary-j.jpg",
		alt: "Empty standard passenger elevator with doors open"
	},
	"a17-1": {
		src: "/graphics/car-ordinary-j.jpg",
		alt: "Empty standard passenger elevator with doors open"
	},
	"asme-ada": {
		src: "/graphics/car-ordinary-j.jpg",
		alt: "Empty standard passenger elevator with doors open"
	},
	"asme-phase1": {
		src: "/graphics/car-ordinary-j.jpg",
		alt: "Empty standard passenger elevator with doors open"
	},
	"asme-phase2": {
		src: "/graphics/car-firefighter-o.jpg",
		alt: "Firefighter in protective kit inside a firefighters elevator with a key panel and a wet floor"
	},
	"asme-fsae": {
		src: "/graphics/car-firefighter-o.jpg",
		alt: "Firefighter in protective kit inside a firefighters elevator with a key panel and a wet floor"
	},
	"asme-oeo": {
		src: "/graphics/car-evac-i.jpg",
		alt: "Person in a wheelchair inside an evacuation elevator with a large clear floor"
	},
	loler: {
		src: "/graphics/loler-machine.jpg",
		alt: "Elevator machine room set for a thorough examination"
	},
	directive: {
		src: "/graphics/shaft-floors.jpg",
		alt: "Cutaway of a UK building showing the elevator shaft"
	}
};
function artFor(ids, region) {
	for (const id of ids) if (ART[id]) return ART[id];
	if (region === "asme") return ART["a17-1"];
	return ART.directive;
}
function LessonFloor({ id, region }) {
	const lesson = LESSON_BY_ID[id];
	const completeLesson = useProgress((s) => s.completeLesson);
	const lessonsDone = useProgress((s) => s.lessonsDone);
	const done = lessonsDone.includes(id);
	const [section, setSection] = (0, import_react.useState)(0);
	const [finished, setFinished] = (0, import_react.useState)(done);
	const stepRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!finished) return;
		stepRef.current?.scrollIntoView({
			block: "start",
			behavior: "smooth"
		});
	}, [finished]);
	if (!lesson || (lesson.region ?? "eu") !== region) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-2xl px-4 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "That floor does not exist in this set." }), region === "asme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/asme/learn",
			className: "mt-4 inline-block text-accent",
			children: "Back to ASME lessons"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/learn",
			className: "mt-4 inline-block text-accent",
			children: "Back to lessons"
		})]
	});
	const art = artFor(lesson.standardIds, lesson.region ?? "eu");
	const totalSteps = lesson.sections.length;
	const track = LESSONS.filter((item) => (item.region ?? "eu") === (lesson.region ?? "eu"));
	const nextLesson = track[track.findIndex((item) => item.id === id) + 1];
	const lessonIndex = track.findIndex((item) => item.id === id);
	const curriculum = [{
		mark: "G",
		name: "Lobby"
	}, ...track.map((item, i) => ({
		mark: String(i + 1).padStart(2, "0"),
		name: item.title,
		done: lessonsDone.includes(item.id)
	}))];
	function finish() {
		completeLesson(lesson.id, lesson.skillIds);
		setFinished(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 lg:grid-cols-12 lg:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "order-2 min-w-0 lg:order-1 lg:col-span-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm font-medium uppercase tracking-wider text-accent",
						children: [
							lesson.kicker,
							" · ",
							lesson.minutes,
							" min"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl font-semibold text-pretty sm:text-5xl",
						children: lesson.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-lg text-muted",
						children: lesson.summary
					}),
					art ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: art.src,
						alt: art.alt,
						className: "mt-6 aspect-video w-full rounded-2xl object-cover shadow-[var(--shadow-border)]"
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
						value: (section + (finished ? 1 : 0)) / (totalSteps + 1),
						className: "mt-6"
					}),
					finished ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						ref: stepRef,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 rounded-2xl bg-paper p-6 text-paper-fg",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-base font-medium uppercase tracking-wider text-paper-muted",
									children: "Floor complete"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 font-display text-3xl font-semibold",
									children: "This one will come back"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-lg leading-relaxed",
									children: "Reading helps. Remembering the answer without the page open is what makes it stick. Practice will keep asking until you can say it yourself."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex flex-wrap gap-3",
									children: [region === "asme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/asme/practice",
										className: buttonVariants(),
										children: "Practice this skill"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/practice",
										className: buttonVariants(),
										children: "Practice this skill"
									}), nextLesson ? region === "asme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/asme/learn/$id",
										params: { id: nextLesson.id },
										className: buttonVariants({ variant: "secondary" }),
										children: "Next floor"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/learn/$id",
										params: { id: nextLesson.id },
										className: buttonVariants({ variant: "secondary" }),
										children: "Next floor"
									}) : region === "asme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/asme/learn",
										className: buttonVariants({ variant: "secondary" }),
										children: "All lessons"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/learn",
										className: buttonVariants({ variant: "secondary" }),
										children: "All lessons"
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdSlot, {
								slot: "floor",
								size: "card"
							})
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 space-y-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl font-semibold",
								children: lesson.sections[section].heading
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatuteSplit, {
								statute: lesson.sections[section].statute,
								plain: lesson.sections[section].plain,
								why: lesson.sections[section].why
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-3",
								children: [section > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									onClick: () => setSection((s) => s - 1),
									children: "Previous"
								}) : null, section + 1 < lesson.sections.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									onClick: () => setSection((s) => s + 1),
									children: "Next section"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									onClick: finish,
									children: "Mark floor complete"
								})]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "order-1 lg:sticky lg:top-24 lg:order-2 lg:col-span-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MovingLift, {
					floor: finished ? Math.max(lessonIndex + 1, 0) : Math.max(lessonIndex, 0),
					landings: curriculum
				})
			})]
		})
	});
}
//#endregion
export { LessonFloor, EuLesson as component };
