"use client";

import { useState } from "react";

function Field({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  autoComplete,
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-semibold uppercase tracking-wider text-slate-400"
      >
        {label}
      </label>

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
        className={`w-full rounded-xl border bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all duration-200 focus:bg-white/[0.06] focus:ring-2 focus:ring-offset-1 focus:ring-offset-transparent ${
          error
            ? "border-red-500/50 focus:border-red-400 focus:ring-red-500/30"
            : "border-white/10 focus:border-indigo-500/50 focus:ring-indigo-500/20"
        }`}
      />

      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="flex items-center gap-1 text-xs text-red-400"
        >
          <svg
            className="h-3.5 w-3.5 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
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

const INITIAL = {
  name: "",
  email: "",
  phone: "",
};

const INITIAL_ERRORS = {
  name: "",
  email: "",
  phone: "",
};

function validate(fields) {
  const errors = { ...INITIAL_ERRORS };

  if (!fields.name.trim()) {
    errors.name = "Full name is required.";
  } else if (fields.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!fields.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (fields.phone && !/^\+?[\d\s\-().]{7,20}$/.test(fields.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  return errors;
}

export default function Subscribe() {
  const [fields, setFields] = useState(INITIAL);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFields((f) => ({
      ...f,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((er) => ({
        ...er,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validate(fields);
    const hasErrors = Object.values(newErrors).some(Boolean);

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    await new Promise((r) => setTimeout(r, 1200));

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="subscribe" className="relative bg-[#0A0F1E] py-28">
      {/* Decorative background */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-700/10 blur-[100px]" />
      </div>

      <div className="2xl:container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-lg">
          {/* Header */}
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-indigo-400">
              Newsletter
            </p>

            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              Stay in the loop
            </h2>

            <p className="mt-4 text-base text-slate-400">
              Get early access to new products, exclusive deals, and tech
              insights — no spam, ever.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-8 backdrop-blur-sm">
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    You&apos;re subscribed!
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    Welcome aboard, {fields.name.split(" ")[0]}. We&apos;ll be
                    in touch soon.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-5"
              >
                <Field
                  id="name"
                  label="Full Name"
                  placeholder="Jane Smith"
                  value={fields.name}
                  onChange={handleChange}
                  error={errors.name}
                  autoComplete="name"
                />

                <Field
                  id="email"
                  label="Email Address"
                  type="email"
                  placeholder="jane@example.com"
                  value={fields.email}
                  onChange={handleChange}
                  error={errors.email}
                  autoComplete="email"
                />

                <Field
                  id="phone"
                  label={
                    <span>
                      Phone Number{" "}
                      <span className="normal-case font-normal text-slate-500">
                        (optional)
                      </span>
                    </span>
                  }
                  type="tel"
                  placeholder="+1 555 000 0000"
                  value={fields.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  autoComplete="tel"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-1 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-indigo-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:bg-indigo-400 hover:shadow-indigo-400/30 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0F1E]"
                >
                  {loading ? (
                    <>
                      <svg
                        className="h-4 w-4 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      Subscribing…
                    </>
                  ) : (
                    "Subscribe Now"
                  )}
                </button>

                <p className="text-center text-xs text-slate-500">
                  By subscribing you agree to our{" "}
                  <a
                    href="#"
                    className="cursor-pointer text-slate-400 underline underline-offset-2 transition-colors hover:text-white"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}