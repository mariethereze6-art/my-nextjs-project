// components/ui/SectionHeading.jsx
export default function SectionHeading({ eyebrow, title, subtitle, align = "center", className = "" }) {
  const alignClass = align === "center" ? "mx-auto items-center text-center" : "items-start text-left";

  return (
    <div className={`mb-10 flex max-w-3xl flex-col md:mb-16 ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-indigo-400 md:mb-4">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 md:mt-6 md:text-lg">{subtitle}</p>
      )}
    </div>
  );
}