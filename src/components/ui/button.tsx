import { cva, type VariantProps } from "class-variance-authority";
import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[background-color,color,box-shadow,opacity] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] disabled:pointer-events-none disabled:opacity-40 min-h-11",
  {
    variants: {
      variant: {
        primary:
          "bg-orange text-accent-fg hover:brightness-110",
        secondary:
          "bg-raised text-fg shadow-[var(--shadow-border)] hover:bg-inset",
        paper: "bg-paper text-paper-fg shadow-[var(--shadow-border)] hover:bg-raised",
        ghost: "bg-transparent text-fg hover:bg-raised",
        outline:
          "bg-transparent text-fg shadow-[var(--shadow-border)] hover:bg-raised",
      },
      size: {
        sm: "h-11 rounded-md px-3.5 text-sm",
        md: "h-12 rounded-lg px-5 text-base",
        lg: "h-14 rounded-xl px-6 text-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>
>(({ className, variant, size, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(buttonVariants({ variant, size }), className)}
    {...props}
  />
));
Button.displayName = "Button";
