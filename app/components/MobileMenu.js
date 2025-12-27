"use client";

import { useState } from "react";
import {
  X,
  ChevronDown,
  Shield,
  Brain,
  TrendingUp,
  Sparkles,
  Server,
  Zap,
} from "lucide-react";
import Link from "next/link";
export default function MobileMenu({ isOpen, onClose }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  return (
    <div
      className={`md:hidden min-h-screen fixed w-full left-0 right-0 top-0 z-60
      bg-zinc-950 border-t border-zinc-800
      transition-all duration-0 ease-in
      ${
        isOpen
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-2 pointer-events-none"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 h-20 border-b border-zinc-800">
        <Link href="/" className="flex items-center gap-3 group">
          {/* <svg
              viewBox="0 0 100 60"
              className="w-8 h-8 stroke-brand-orange fill-none group-hover:drop-shadow-[0_0_8px_rgba(255,159,28,0.5)] transition-all"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 25 L35 10 L50 35 L65 10 L90 25"></path>
              <path d="M10 25 Q 15 35 30 30"></path>
              <path d="M90 25 Q 85 35 70 30"></path>
            </svg> */}
          <svg
            width="64"
            height="64"
            viewBox="-100 -100 800 500"
            className="transition-all"
          >
            <defs>
              <radialGradient
                id="bgGradient"
                gradientUnits="userSpaceOnUse"
                cx="300"
                cy="150"
                r="200"
              >
                <stop offset="0%" stopColor="#ff9c1c" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>
              <linearGradient
                id="polyGradient"
                x1="0%"
                y1="100%"
                x2="0%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#ec8947" />
                <stop offset="100%" stopColor="#ffb318" stopOpacity="1.0" />
              </linearGradient>
            </defs>

            <filter
              id="polyGlow"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="60"
                result="blur"
              />
              <feFlood floodColor="#ff9c1c" floodOpacity="0.9" result="color" />
              <feComposite in="color" in2="blur" operator="in" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <polygon
              points="50 50 150 275 220 150"
              fill="url(#polyGradient)"
              filter="url(#polyGlow)"
            />
            <polygon
              points="300 50 180 260 300 180 420 260"
              fill="url(#polyGradient)"
              filter="url(#polyGlow)"
            />
            <polygon
              points="380 150 450 275 550 50"
              fill="url(#polyGradient)"
              filter="url(#polyGlow)"
            />
          </svg>
          <span
            className="font-bold text-2xl flex tracking-tight text-white -ml-4"
            style={{ fontFamily: "var(--font-funnel-display)" }}
          >
            <span>In</span>
            <span style={{ margin: "0 0.01em" }}>W</span>
            <span>ren</span>
          </span>
        </Link>

        <button
          onClick={onClose}
          className="text-brand-textMuted hover:text-white"
          aria-label="Close menu"
        >
          <X className="w-7 h-7" />
        </button>
      </div>

      {/* Menu Content */}
      <div className="px-6 py-6 space-y-6 overflow-y-auto">
        {/* Platform */}
        <div>
          <button
            onClick={() => toggleDropdown("platform")}
            className="w-full flex items-center justify-between text-left text-lg font-mono text-white"
          >
            Platform
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                openDropdown === "platform" ? "rotate-180" : ""
              }`}
            />
          </button>

          {openDropdown === "platform" && (
            <div className="mt-4 space-y-4 pl-2">
              {[
                {
                  name: "Deliverability & Intelligence",
                  href: "/#deliverability",
                  icon: Shield,
                },
                {
                  name: "Reputation & Compliance Protection",
                  href: "/#reputation",
                  icon: Brain,
                },
                {
                  name: "Journey & Engagement Intelligence",
                  href: "/#journey",
                  icon: TrendingUp,
                },
                {
                  name: "AI Intelligence & Precision Automation",
                  href: "/#ai-intelligence",
                  icon: Sparkles,
                },
                {
                  name: "Developer Email Engine",
                  href: "/#developer-engine",
                  icon: Server,
                },
                {
                  name: "Simple Transparent Pricing",
                  href: "/#pricing",
                  icon: Zap,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center gap-3 text-brand-textMuted hover:text-brand-orange transition-colors"
                  >
                    <Icon className="w-4 h-4 text-brand-orange" />
                    <span className="text-sm">{item.name}</span>
                  </a>
                );
              })}
            </div>
          )}
        </div>

        {/* Process */}
        <a
          href="/#how-it-works"
          onClick={onClose}
          className="block text-lg font-mono text-white hover:text-brand-orange transition-colors"
        >
          Process
        </a>

        {/* Pricing */}
        <div>
          <button
            onClick={() => toggleDropdown("pricing")}
            className="w-full flex items-center justify-between text-left text-lg font-mono text-white"
          >
            Pricing
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                openDropdown === "pricing" ? "rotate-180" : ""
              }`}
            />
          </button>

          {openDropdown === "pricing" && (
            <div className="mt-4 space-y-4 pl-2">
              <a
                href="/features"
                onClick={onClose}
                className="block text-sm text-brand-textMuted hover:text-brand-orange transition-colors"
              >
                Compare all features
              </a>
              <a
                href="/compare"
                onClick={onClose}
                className="block text-sm text-brand-textMuted hover:text-brand-orange transition-colors"
              >
                Compare with competitors
              </a>
            </div>
          )}
        </div>

        {/* Login */}
        <a
          href="#"
          onClick={onClose}
          className="block text-lg font-mono text-brand-textMain hover:text-white transition-colors"
        >
          Login
        </a>

        {/* CTA */}
        <a
          href="#pricing"
          onClick={onClose}
          className="block text-center mt-8 px-5 py-3 border border-brand-orange text-brand-orange font-mono text-xs uppercase tracking-wider hover:bg-brand-orange hover:text-black transition-all"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}
