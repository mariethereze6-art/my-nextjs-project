// components/ui/FormField.jsx
export default function FormField({
  id,
  label,
  type = "text",
  as = "input",
  rows = 5,
  placeholder,
  value,
  onChange,
  error,
  autoComplete,
}) {
  const sharedClasses = `w-full rounded-xl border bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all duration-200 focus:bg-white/[0.06] focus:ring-2 focus:ring-offset-1 focus:ring-offset-transparent ${
    error
      ? "border-red-500/50 focus:border-red-400 focus:ring-red-500/30"
      : "border-white/10 focus:border-indigo-500/50 focus:ring-indigo-500/20"
  }`;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </label>

      {as === "textarea" ? (
        <textarea
          id={id}
          name={id}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
          className={`${sharedClasses} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
          className={sharedClasses}
        />
      )}

      {error && (
        <p id={`${id}-error`} role="alert" className="flex items-center gap-1 text-xs text-red-400">
          <svg className="h-3.5 w-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}