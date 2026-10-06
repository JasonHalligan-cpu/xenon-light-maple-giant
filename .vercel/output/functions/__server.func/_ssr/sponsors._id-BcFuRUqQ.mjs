import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./button-BjXN1-zk.mjs";
import { G as SPONSOR_PACKAGES, W as SPONSOR_BY_ID, i as Route$4, w as AdSlot } from "./router-2O5coh7U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sponsors._id-BcFuRUqQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var KEY = "liftiq-sponsor-enquiries";
function EnquireForm({ packId }) {
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const row = {
			at: (/* @__PURE__ */ new Date()).toISOString(),
			pack: packId,
			name: String(data.get("name") ?? "").trim(),
			org: String(data.get("org") ?? "").trim(),
			email: String(data.get("email") ?? "").trim(),
			note: String(data.get("note") ?? "").trim()
		};
		const prev = JSON.parse(localStorage.getItem(KEY) ?? "[]");
		localStorage.setItem(KEY, JSON.stringify([row, ...prev].slice(0, 40)));
		setSent(true);
	}
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "rounded-2xl bg-green p-5 text-lg text-ok-fg",
		children: "Noted. When ElevatorIQ opens sponsorship, this enquiry is already on the list. We will not sell the address."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "grid gap-3 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-1 text-sm",
				children: ["Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					required: true,
					name: "name",
					autoComplete: "name",
					className: "min-h-12 rounded-lg bg-paper px-3 text-base text-paper-fg shadow-[var(--shadow-border)]"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-1 text-sm",
				children: ["Organisation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					required: true,
					name: "org",
					autoComplete: "organization",
					className: "min-h-12 rounded-lg bg-paper px-3 text-base text-paper-fg shadow-[var(--shadow-border)]"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-1 text-sm",
				children: ["Work email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					required: true,
					type: "email",
					name: "email",
					autoComplete: "email",
					className: "min-h-12 rounded-lg bg-paper px-3 text-base text-paper-fg shadow-[var(--shadow-border)]"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-1 text-sm",
				children: ["What you would put on the landing", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					name: "note",
					rows: 3,
					className: "rounded-lg bg-paper px-3 py-2 text-base text-paper-fg shadow-[var(--shadow-border)]"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				size: "lg",
				children: "Hold a place"
			})
		]
	});
}
function isPack(id) {
	return id in SPONSOR_BY_ID;
}
function SponsorPackagePage() {
	const { id } = Route$4.useParams();
	if (!isPack(id)) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-2xl px-4 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "That slot is not on the board." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/sponsors",
			className: "mt-4 inline-block text-accent",
			children: "All packages"
		})]
	});
	const pack = SPONSOR_BY_ID[id];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-4xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/sponsors",
				className: "text-base text-accent hover:underline",
				children: "All packages"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 font-mono text-sm uppercase tracking-wider text-accent",
				children: [
					pack.kicker,
					" · ",
					pack.price
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold sm:text-5xl",
				children: pack.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 max-w-2xl text-lg text-muted",
				children: [pack.placement, " Right now this slot runs a simulated campaign."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdSlot, {
					slot: pack.id,
					size: pack.size
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-8 grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-sm font-medium uppercase tracking-wider text-faint",
							children: "Who sees it"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 text-lg",
							children: pack.who
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-sm font-medium uppercase tracking-wider text-faint",
							children: "Reach"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 text-lg",
							children: pack.reach
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] sm:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-sm font-medium uppercase tracking-wider text-faint",
							children: "Creative spec"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 text-lg",
							children: pack.spec
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-semibold",
					children: "Hold a place"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-lg text-muted",
					children: "Sponsorship is not live yet. Leave your organisation and we keep the enquiry against this slot."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquireForm, { packId: pack.id })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-12 flex flex-wrap gap-2",
				children: SPONSOR_PACKAGES.filter((p) => p.id !== pack.id).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/sponsors/$id",
					params: { id: p.id },
					className: "inline-flex min-h-11 items-center rounded-lg bg-raised px-3 text-base hover:bg-surface",
					children: p.title
				}) }, p.id))
			})
		]
	});
}
//#endregion
export { SponsorPackagePage as component };
