import React from "react";

const getBadgeClass = (variant = "default") => {
  const base =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    default: "border-transparent bg-primary text-primary-foreground hover:bg-primary-hover",
    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary-hover",
    destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive-hover",
    outline: "border border-gray-300 text-gray-800",
  };

  return `${base} ${variants[variant] || variants.default}`;
};

function Badge({ variant, className = "", ...props }) {
  return <div className={`${getBadgeClass(variant)} ${className}`} {...props} />;
}

export { Badge };
