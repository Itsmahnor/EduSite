import React, { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";

const getButtonClass = (variant = "default", size = "default") => {
  let base =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus:outline focus:ring disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary-hover",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive-hover",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline hover:underline",
  };

  const sizes = {
    default: "height: 40px; padding: 0 16px;",
    sm: "height: 36px; padding: 0 12px;",
    lg: "height: 44px; padding: 0 32px;",
    icon: "height: 40px; width: 40px;",
  };

  return `${base} ${variants[variant]} ${sizes[size]}`;
};

const Button = forwardRef(
  ({ variant, size, asChild = false, style, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={getButtonClass(variant, size)} style={style} {...props} />;
  }
);

Button.displayName = "Button";

export { Button };
