import React from "react";

export function Badge({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "secondary";
}) {
  const base =
    "inline-block px-3 py-1 rounded-full text-xs font-semibold mr-2 mb-2";
  const variants = {
    default: "bg-blue-500 text-white",
    secondary: "bg-gray-200 text-gray-800",
  };
  return (
    <span className={`${base} ${variants[variant]}`}>{children}</span>
  );
}