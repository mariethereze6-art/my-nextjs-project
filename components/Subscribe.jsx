// components/Subscribe.jsx  (only the changed parts)
"use client";

import { useState } from "react";
import FormField from "./ui/FormField";
import { CheckIcon } from "./ui/icons";

const INITIAL = { name: "", email: "", phone: "" };
const INITIAL_ERRORS = { name: "", email: "", phone: "" };

function validate(fields) {
  const errors = { ...INITIAL_ERRORS };
  if (!fields.name.trim()) errors.name = "Full name is required.";
  else if (fields.name.trim().length < 2) errors.name = "Name must be at least 2 characters.";
  if (!fields.email.trim()) errors.email = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errors.email = "Please enter a valid email address.";
  if (fields.phone && !/^\+?[\d\s\-().]{7,20}$/.test(fields.phone)) errors.phone = "Please enter a valid phone number.";
  return errors;
}

export default function Subscribe() {
  const [fields, setFields] = useState(INITIAL);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate(fields);
    if (Object.values(newErrors).some(Boolean)) {
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
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-700/10 blur-[100px]" />
      </div>

      <div className="2xl:container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-lg">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-indigo-400">Newsletter</p>
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">Stay in the loop</h2>
            <p className="mt-4 text-base text-slate-400">
              Get early access to new products, exclusive deals, and tech insights — no spam, ever.
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-8 backdrop-blur-sm">
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                  <CheckIcon />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">You&apos;re subscribed!</h3>
                  <p className="mt-1 text-sm text-slate-400">
                    Welcome aboard, {fields.name.split(" ")[0]}. We&apos;ll be in touch soon.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <FormField id="name" label="Full Name" placeholder="Jane Smith" value={fields.name} onChange={handleChange} error={errors.name} autoComplete="name" />
                <FormField id="email" label="Email Address" type="email" placeholder="jane@example.com" value={fields.email} onChange={handleChange} error={errors.email} autoComplete="email" />
                <FormField id="phone" label="Phone Number (optional)" type="tel" placeholder="+1 555 000 0000" value={fields.phone} onChange={handleChange} error={errors.phone} autoComplete="tel" />

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-1 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-indigo-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:bg-indigo-400 hover:shadow-indigo-400/30 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Subscribing…" : "Subscribe Now"}
                </button>

                <p className="text-center text-xs text-slate-500">
                  By subscribing you agree to our{" "}
                  <a href="#" className="text-slate-400 underline underline-offset-2 hover:text-white">Privacy Policy</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}