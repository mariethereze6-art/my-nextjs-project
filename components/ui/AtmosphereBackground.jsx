
export default function AtmosphereBackground({ compact = false }) {
  const mainOrb = compact
    ? "h-[420px] w-[420px] blur-[110px]"
    : "h-[700px] w-[700px] blur-[150px]";

  return (
    <>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/12 ${mainOrb}`}
        />
        <div className="absolute right-[20%] top-[25%] h-[280px] w-[280px] rounded-full bg-violet-500/7 blur-[90px]" />
        <div className="absolute left-[18%] bottom-[20%] h-[220px] w-[220px] rounded-full bg-blue-600/7 blur-[80px]" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </>
  );
}