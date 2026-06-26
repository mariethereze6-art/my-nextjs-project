// components/ui/Button.jsx
import Link from "next/link";

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-xl px-8 py-3.5 text-[13px] font-bold tracking-wide transition-all duration-300";

const variants = {
  primary:
    "bg-indigo-500 text-white shadow-xl shadow-indigo-500/20 hover:bg-indigo-400 hover:shadow-indigo-400/30",
  secondary:
    "border border-white/[0.08] bg-white/[0.03] text-slate-300 font-semibold hover:border-white/[0.13] hover:bg-white/[0.07] hover:text-white",
  ghost: "text-slate-400 font-semibold hover:text-white",
};

export default function Button({
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}