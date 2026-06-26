// components/ui/SectionHeading.jsx
export default function SectionHeading({ eyebrow, title, subtitle, align = "center", className = "" }) {
  const alignClass = align === "center" ? "mx-auto items-center text-center" : "items-start text-left";

  return (
    <div className={`mb-16 flex max-w-3xl flex-col ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-indigo-400">{eyebrow}</p>
      )}
      <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">{subtitle}</p>
      )}
    </div>
  );
}