import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-DDI7QxNU.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function clamp(n, min, max) {
	return Math.min(max, Math.max(min, n));
}
function formatPct(n) {
	return `${Math.round(n * 100)}%`;
}
//#endregion
export { cn as n, formatPct as r, clamp as t };
