// components/ui/StatsStrip.jsx
const defaultStats = [
  { stat: "50K+", label: "Customers" },
  { stat: "4.9★", label: "Average Rating" },
  { stat: "120+", label: "Countries" },
  { stat: "2 Yr", label: "Warranty" },
];

export default function StatsStrip({ stats = defaultStats, className = "" }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-6 sm:gap-14 ${className}`}>
      {stats.map(({ stat, label }) => (
        <div key={label} className="flex flex-col items-center gap-1">
          <span className="text-base font-black tracking-tight text-white">{stat}</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">{label}</span>
        </div>
      ))}
    </div>
  );
}