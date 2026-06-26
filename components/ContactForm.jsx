// components/ContactForm.jsx
"use client";

import { useState } from "react";
import FormField from "./ui/FormField";
import { CheckIcon } from "./ui/icons";

const INITIAL = { name: "", email: "", subject: "", message: "" };
const INITIAL_ERRORS = { name: "", email: "", subject: "", message: "" };

function validate(fields) {
  const errors = { ...INITIAL_ERRORS };

  if (!fields.name.trim()) errors.name = "Full name is required.";
  if (!fields.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!fields.message.trim() || fields.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}

export default function ContactForm() {
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

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
          <CheckIcon />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Message sent!</h3>
          <p className="mt-1 text-sm text-slate-400">
            Thanks, {fields.name.split(" ")[0]}. We&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-8 backdrop-blur-sm"
    >
      <FormField id="name" label="Full Name" placeholder="Jane Smith" value={fields.name} onChange={handleChange} error={errors.name} autoComplete="name" />
      <FormField id="email" label="Email Address" type="email" placeholder="jane@example.com" value={fields.email} onChange={handleChange} error={errors.email} autoComplete="email" />
      <FormField id="subject" label="Subject (optional)" placeholder="How can we help?" value={fields.subject} onChange={handleChange} error={errors.subject} />
      <FormField id="message" label="Message" as="textarea" rows={5} placeholder="Tell us a bit more..." value={fields.message} onChange={handleChange} error={errors.message} />

      <button
        type="submit"
        disabled={loading}
        className="mt-1 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-indigo-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:bg-indigo-400 hover:shadow-indigo-400/30 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}