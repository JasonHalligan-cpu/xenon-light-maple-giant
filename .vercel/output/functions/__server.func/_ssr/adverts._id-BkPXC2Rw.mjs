import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as cn } from "./utils-DDI7QxNU.mjs";
import { n as buttonVariants } from "./button-BjXN1-zk.mjs";
import { H as ADVERT_BY_ID, V as ADVERTS, p as Route$19 } from "./router-2O5coh7U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/adverts._id-BkPXC2Rw.js
var import_jsx_runtime = require_jsx_runtime();
function isAd(id) {
	return id in ADVERT_BY_ID;
}
function AdvertPage() {
	const { id } = Route$19.useParams();
	if (!isAd(id)) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-2xl px-4 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "That advert is not on the board." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/adverts",
			className: "mt-4 inline-block text-accent",
			children: "All simulated ads"
		})]
	});
	const ad = ADVERT_BY_ID[id];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: cn("text-inherit", ad.tone),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: ad.img,
				alt: ad.alt,
				className: "aspect-video w-full object-cover lg:aspect-auto lg:min-h-[28rem]"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-end p-6 sm:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-sm uppercase tracking-wider opacity-80",
						children: ["Advertisement · Simulated · ", ad.town]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-lg font-medium",
						children: ad.brand
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl font-semibold text-pretty sm:text-5xl",
						children: ad.headline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-lg opacity-90",
						children: ad.line
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 inline-flex min-h-12 items-center rounded-lg bg-paper px-4 text-base text-paper-fg",
						children: [ad.cta, " · demo only"]
					})
				]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "rounded-xl bg-raised px-4 py-3 text-sm text-muted",
				children: [
					"Pretend page. ",
					ad.brand,
					" is not a real firm. ElevatorIQ uses it to show how a future sponsor would land."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-8 font-display text-3xl font-semibold",
				children: ad.kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-lg text-muted",
				children: ad.pitch
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 grid gap-3",
				children: ad.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-xl bg-surface p-4 text-lg shadow-[var(--shadow-border)]",
					children: p
				}, p))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: buttonVariants(),
					children: "Back to the lobby"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/sponsors",
					className: buttonVariants({ variant: "secondary" }),
					children: "Put a real name here"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-12 flex flex-wrap gap-2",
				children: ADVERTS.filter((a) => a.id !== ad.id).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/adverts/$id",
					params: { id: a.id },
					className: "inline-flex min-h-11 items-center rounded-lg bg-raised px-3 text-base hover:bg-surface",
					children: a.brand
				}) }, a.id))
			})
		]
	})] });
}
//#endregion
export { AdvertPage as component };
