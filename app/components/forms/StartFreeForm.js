"use client";

import { useState } from "react";

export default function StartFreeForm({ onSuccess }) {
  const [form, setForm] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter a valid email";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate success
    setSubmitted(true);

    setTimeout(() => {
      onSuccess();
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <h3 className="text-2xl font-bold text-white mb-2">
          Thank you 🎉
        </h3>
        <p className="text-brand-textMuted">
          We’ll reach out to you shortly.
        </p>
      </div>
    );
  }

  return (
    <>
      <h3 className="text-xl font-bold text-white mb-2">
        Start for Free
      </h3>
      <p className="text-sm text-brand-textMuted mb-6">
        No credit card required.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full rounded-md bg-black/40 border border-brand-border px-4 py-3 text-white placeholder:text-brand-textMuted focus:outline-none focus:border-brand-orange"
          />
          {errors.name && (
            <p className="text-red-400 text-xs mt-1">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full rounded-md bg-black/40 border border-brand-border px-4 py-3 text-white placeholder:text-brand-textMuted focus:outline-none focus:border-brand-orange"
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">
              {errors.email}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="btn-shine w-full py-3 bg-brand-orange text-black font-semibold rounded-md"
        >
          Submit
        </button>
      </form>
    </>
  );
}
