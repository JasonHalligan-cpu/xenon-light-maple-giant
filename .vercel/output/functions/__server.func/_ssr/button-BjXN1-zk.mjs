import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as cn } from "./utils-DDI7QxNU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-BjXN1-zk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[background-color,color,box-shadow,opacity] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] disabled:pointer-events-none disabled:opacity-40 min-h-11", {
	variants: {
		variant: {
			primary: "bg-orange text-accent-fg hover:brightness-110",
			secondary: "bg-raised text-fg shadow-[var(--shadow-border)] hover:bg-inset",
			paper: "bg-paper text-paper-fg shadow-[var(--shadow-border)] hover:bg-raised",
			ghost: "bg-transparent text-fg hover:bg-raised",
			outline: "bg-transparent text-fg shadow-[var(--shadow-border)] hover:bg-raised"
		},
		size: {
			sm: "h-11 rounded-md px-3.5 text-sm",
			md: "h-12 rounded-lg px-5 text-base",
			lg: "h-14 rounded-xl px-6 text-lg"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
var Button = (0, import_react.forwardRef)(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
	ref,
	className: cn(buttonVariants({
		variant,
		size
	}), className),
	...props
}));
Button.displayName = "Button";
//#endregion
export { buttonVariants as n, Button as t };
