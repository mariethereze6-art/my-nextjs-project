// components/ui/Accordion.jsx
"use client";

import { useState } from "react";

function ChevronIcon({ open }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 ${
        open ? "rotate-180 text-indigo-400" : ""
      }`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function AccordionItem({ question, answer, index, isOpen, onToggle }) {
  const triggerId = `accordion-trigger-${index}`;
  const panelId = `accordion-panel-${index}`;

  return (
    <div className="border-b border-white/[0.06] last:border-b-0">
      <h3>
        <button
          id={triggerId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className={`group flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0F1E] ${
            isOpen ? "text-white" : "text-slate-300 hover:text-white"
          }`}
        >
          <span className="flex items-center gap-3">
            <span
              className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-200 ${
                isOpen ? "bg-indigo-400" : "bg-slate-600 group-hover:bg-slate-400"
              }`}
              aria-hidden="true"
            />
            {question}
          </span>
          <ChevronIcon open={isOpen} />
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="pb-6 pl-[18px] text-sm leading-7 text-slate-400">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-2">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          index={i}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === i}
          onToggle={() => toggle(i)}
        />
      ))}
    </div>
  );
}