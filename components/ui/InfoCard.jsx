// components/ui/InfoCard.jsx
export default function InfoCard({ icon, title, value, href }) {
  const content = (
    <>
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-400">
        {icon}
      </div>
      <h3 className="mb-2 text-base font-bold text-white">{title}</h3>
      <p className="text-sm text-slate-400">{value}</p>
    </>
  );

  const className =
    "group flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-indigo-500/[0.05]";

  if (href) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }
  return <div className={className}>{content}</div>;
}