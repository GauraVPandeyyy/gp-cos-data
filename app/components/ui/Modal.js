"use client";

import { X } from "lucide-react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal box */}
      <div className="relative z-10 w-[92%] max-w-md rounded-xl border border-brand-border bg-brand-surface p-6 shadow-2xl animate-fadeIn">
        {/* Close icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-textMuted hover:text-white transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {children}
      </div>
    </div>
  );
}
