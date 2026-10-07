import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as cn, r as formatPct } from "./utils-DDI7QxNU.mjs";
import { n as buttonVariants } from "./button-BjXN1-zk.mjs";
import { a as Layers, i as Repeat, l as BookOpen, n as Sparkles, u as ArrowRight } from "../_libs/lucide-react.mjs";
import { H as SKILL_BY_ID, I as HOME_FAQS, K as useProgress, L as MASTERY, O as LESSONS, P as Progress, U as masteredCount, V as SKILLS, W as overallMastery, j as AdSlot, q as weakSkills, w as UkLayers } from "./router-B4HJ06iu.mjs";
import { n as UkShaft, t as ThreeLifts } from "./uk-shaft-NPwq2iie.mjs";
import { t as LIFT_SPECS } from "./specs-DM67cXl6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BZSa9aw2.js
var import_jsx_runtime = require_jsx_runtime();
function ShaftMap({ mastery, compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: cn("flex flex-col-reverse gap-1.5", compact && "gap-1"),
		children: SKILLS.filter((skill) => (skill.region ?? "eu") === "eu").map((skill) => {
			const p = mastery[skill.id] ?? 0;
			const done = p >= MASTERY;
			const lesson = LESSONS.find((l) => l.skillIds[0] === skill.id);
			const className = cn("flex min-h-12 min-w-0 items-center gap-3 rounded-lg px-3 py-2.5 transition-colors duration-150", done ? "bg-ok/15" : "bg-raised hover:bg-raised/80");
			const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("grid w-12 shrink-0 place-items-center font-mono text-sm tabular-nums", done ? "text-ok" : "text-muted"),
					children: skill.floor
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block truncate text-base text-fg",
						children: skill.name
					}), !compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block truncate text-sm text-faint",
						children: skill.blurb
					}) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-sm tabular-nums text-muted",
					children: formatPct(p)
				})
			] });
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: lesson ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/learn/$id",
				params: { id: lesson.id },
				className,
				children: inner
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/practice",
				className,
				children: inner
			}) }, skill.id);
		})
	});
}
function NeonCover({ placementDone, nextId, overall, mastered, streak, answers, correct, hydrated }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate min-h-dvh overflow-hidden bg-night text-night-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/graphics/lift-hero.jpg",
				alt: "Futuristic closed elevator: chrome doors, cyan edges, orange up-lantern",
				className: "absolute inset-0 h-full w-full object-cover object-center"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-night via-night/50 to-night/10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex min-h-dvh max-w-6xl flex-col justify-end gap-6 px-4 pb-10 pt-24 sm:px-6 sm:pb-14 lg:flex-row lg:items-end lg:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-sm font-medium uppercase tracking-wider text-cyan neon-cyan",
							children: "One elevator · EU & ASME regulations"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-3 font-display text-5xl font-semibold leading-[0.95] text-pretty sm:text-7xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "neon-text",
								children: "Call this elevator."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 block italic text-yellow neon-acid",
								children: "Then learn what it must do."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-lg text-lg text-night-fg/90 sm:text-xl",
							children: "ElevatorIQ is for elevator professionals and anyone who has an interest in how the regulations affect our industry. EU and ASME rules are written here in simpler terms, so the legal duty is easier to understand."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-lg text-base text-night-fg/80",
							children: "Bayesian Knowledge Tracing brings a missed rule back in simpler words."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex flex-wrap gap-3",
							children: [!placementDone ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/placement",
								className: cn(buttonVariants({ size: "lg" }), "neon-box"),
								children: ["Call the elevator", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/learn/$id",
								params: { id: nextId },
								className: cn(buttonVariants({ size: "lg" }), "neon-box"),
								children: ["Continue", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/practice",
								className: cn(buttonVariants({
									size: "lg",
									variant: "secondary"
								}), "neon-box-green"),
								children: "Practice"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "w-full max-w-sm rounded-2xl border border-cyan/50 bg-night/70 p-5 neon-box",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-sm uppercase tracking-wider text-cyan neon-cyan",
								children: "Progress"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-sm tabular-nums text-night-fg/70",
								children: [
									mastered,
									"/13 ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "lessons" })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-display text-4xl font-semibold tabular-nums neon-text",
							children: formatPct(overall)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
							value: overall,
							className: "mt-3 bg-night-fg/20",
							tone: "ok"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-4 grid grid-cols-3 gap-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-night-fg/55",
									children: "Streak"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "font-mono tabular-nums",
									children: [hydrated ? streak : 0, "d"]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-night-fg/55",
									children: "Answered"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-mono tabular-nums",
									children: hydrated ? answers : 0
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-night-fg/55",
									children: "Accurate"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-mono tabular-nums",
									children: hydrated && answers ? formatPct(correct / answers) : "—"
								})] })
							]
						})
					]
				})]
			})
		]
	});
}
function Home() {
	const hydrated = useProgress((s) => s.hydrated);
	const mastery = useProgress((s) => s.mastery);
	const lessonsDone = useProgress((s) => s.lessonsDone);
	const streak = useProgress((s) => s.streak);
	const answers = useProgress((s) => s.answers);
	const correct = useProgress((s) => s.correct);
	const placementDone = useProgress((s) => s.placementDone);
	const overall = hydrated ? overallMastery(mastery) : 0;
	const mastered = hydrated ? masteredCount(mastery) : 0;
	const weak = hydrated ? weakSkills(mastery, 2) : [];
	const euLessons = LESSONS.filter((l) => (l.region ?? "eu") === "eu");
	const nextLesson = euLessons.find((l) => !lessonsDone.includes(l.id)) ?? euLessons[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NeonCover, {
		placementDone,
		nextId: nextLesson.id,
		overall,
		mastered,
		streak,
		answers,
		correct,
		hydrated
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "overflow-hidden rounded-2xl bg-night shadow-[var(--shadow-elevator)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/graphics/lift-tower.jpg",
						alt: "A single glass elevator climbing the outside of a night skyscraper",
						className: "aspect-video w-full object-cover lg:aspect-auto lg:min-h-72"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 text-night-fg sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-sm uppercase tracking-wider text-cyan neon-cyan",
								children: "One car. The whole plot."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-3xl font-semibold neon-text sm:text-4xl",
								children: "Ride it. Then learn what it must do."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-lg text-night-fg/80",
								children: "Standard cars park. Firefighter cars wait for the fire brigade. Evacuation cars keep working for people who cannot use the stairs."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/uk",
								className: cn(buttonVariants({ size: "lg" }), "mt-6 neon-box"),
								children: ["Enter the shaft", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdSlot, {
					slot: "lobby",
					size: "billboard"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold",
						children: "Tap the shaft"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-lg text-muted",
						children: "Four bands in the building. Evacuation, firefighter, standard, then the LOLER diary. Tap a band."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/uk",
						className: "inline-flex min-h-12 items-center gap-2 text-base text-accent hover:underline",
						children: ["Full tour", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UkShaft, {})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold",
						children: "Law, recipe, health check"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-lg text-muted",
						children: "Under EU regulations those are three different conversations. Tap a layer."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UkLayers, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold",
						children: "Three elevators, one alarm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-lg text-muted",
						children: "Click on the elevator cars below. The standard elevator parks in the event of a fire. The firefighter elevator waits for the fire brigade. Evacuation elevators — if you specified EN 81-76 — keep working for people who cannot use the stairs."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThreeLifts, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold",
						children: "Detailed specifications"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-lg text-muted",
						children: "Load, speed, car size, doors, power, water. Typical UK figures, the standard, and the landing version."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/specs",
						className: "inline-flex min-h-12 items-center gap-2 text-base text-accent hover:underline",
						children: ["All spec sheets", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 grid gap-3 sm:grid-cols-3",
					children: LIFT_SPECS.slice(0, 3).map((spec) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/specs/$id",
						params: { id: spec.id },
						className: "block min-h-36 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] hover:bg-raised",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-sm uppercase tracking-wider text-accent",
								children: spec.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 block font-display text-2xl font-semibold",
								children: spec.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 block text-base text-muted",
								children: spec.who
							})
						]
					}) }, spec.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14 grid min-w-0 gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-semibold",
							children: "Your shaft"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/learn",
							className: "text-sm text-muted hover:text-fg",
							children: "All lessons"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShaftMap, {
							mastery,
							compact: true
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-paper p-5 text-paper-fg sm:p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium uppercase tracking-wider text-paper-muted",
									children: "Next floor"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-3xl font-semibold",
									children: nextLesson.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-paper-muted",
									children: nextLesson.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/learn/$id",
									params: { id: nextLesson.id },
									className: cn(buttonVariants({ variant: "primary" }), "mt-5"),
									children: ["Open lesson", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/drill",
									className: "rounded-2xl bg-raised p-5 shadow-[var(--shadow-border)] transition-colors hover:bg-surface",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Repeat, { className: "size-5 text-accent" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 font-display text-xl font-semibold",
											children: "Spaced drill"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-base text-muted",
											children: "Cards come back just as you start to forget them."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/library/$id",
									params: { id: "en81-76" },
									className: "rounded-2xl bg-raised p-5 shadow-[var(--shadow-border)] transition-colors hover:bg-surface",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-5 text-accent" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 font-display text-xl font-semibold",
											children: "EN 81-76"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-base text-muted",
											children: "Featured: self-rescue for people the stairs cannot carry."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/scenarios",
									className: "rounded-2xl bg-raised p-5 shadow-[var(--shadow-border)] transition-colors hover:bg-surface",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-5 text-accent" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 font-display text-xl font-semibold",
											children: "Scenarios"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-base text-muted",
											children: "Midnight hotel, listed shaft, substitution in the meeting."
										})
									]
								})
							]
						}),
						weak.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								"Weakest floors right now:",
								" ",
								weak.map((id) => SKILL_BY_ID[id].name).join(" · ")
							]
						}) : null
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-14 rounded-2xl bg-inset p-6 sm:p-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mt-1 size-5 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-semibold",
							children: "Bayesian Knowledge Tracing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-3xl text-lg text-fg",
							children: "This is the primary way ElevatorIQ teaches. Each answer updates how likely it is you already know that rule. A miss is not a score. It brings the same rule back in simpler words, with a picture."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 grid gap-2 text-base text-muted sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Diagnostic placement before the first lesson path." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Mastery gates: weak floors return until they hold." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Spaced repetition (SM-2) so 76 does not evaporate overnight." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Interleaving 72, 73 and 76 so you stop mixing them up." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Dual coding: statute language beside ordinary words, every time." })
							]
						})
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold",
						children: "EN 81 and ASME A17.1, in plain language"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-3xl text-lg text-muted",
						children: "Look up a firefighter lift, an evacuation lift, LOLER, EN 81-70, EN 81-72, EN 81-73, EN 81-76, or ASME A17.1. Each page says what the regulation is for, in ordinary words."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 grid gap-3 sm:grid-cols-2",
						children: [
							{
								to: "/learn/$id",
								params: { id: "base-20" },
								label: "EN 81-20, the base for a new passenger lift"
							},
							{
								to: "/learn/$id",
								params: { id: "access-70" },
								label: "EN 81-70, a lift a wheelchair user can use"
							},
							{
								to: "/learn/$id",
								params: { id: "fire-72" },
								label: "EN 81-72, the firefighter lift"
							},
							{
								to: "/learn/$id",
								params: { id: "fire-73" },
								label: "EN 81-73, what a normal lift does in a fire"
							},
							{
								to: "/learn/$id",
								params: { id: "evacuation-why" },
								label: "EN 81-76, the evacuation lift"
							},
							{
								to: "/library/$id",
								params: { id: "loler" },
								label: "LOLER, the six-month thorough examination"
							},
							{
								to: "/asme",
								params: void 0,
								label: "ASME A17.1, the code for a new elevator in the US and Canada"
							},
							{
								to: "/learn/$id",
								params: { id: "three-elevators" },
								label: "Firefighter lift, evacuation lift, and a normal lift"
							}
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							params: item.params,
							className: "flex min-h-14 items-center rounded-xl bg-surface px-4 text-base text-fg shadow-[var(--shadow-border)] hover:bg-raised",
							children: item.label
						}) }, item.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 space-y-6",
						children: HOME_FAQS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-semibold",
							children: item.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-3xl text-lg text-muted",
							children: item.a
						})] }, item.q))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14 rounded-2xl border-t-4 border-yellow bg-paper p-6 text-paper-fg sm:p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold",
					children: "Guidance only"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-3xl text-lg leading-relaxed",
					children: "ElevatorIQ is for elevator professionals and anyone who has an interest in how the regulations affect our industry. EU and ASME rules are written here in simpler terms, so the legal duty is easier to understand. The pages are guidance. They are not the published standard, and they are not legal advice."
				})]
			})
		]
	})] });
}
//#endregion
export { Home as component };
