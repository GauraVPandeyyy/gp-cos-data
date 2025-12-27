// components/home/FeaturesStack.js
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import FeaturePanel from "./FeaturePanel";

gsap.registerPlugin(ScrollTrigger);

const featuresData = [
  {
    icon: "shield-check",
    title: "Deliverability Intelligence",
    description:
      "Stop guessing. Inwren runs every email through a full stack of AI guardrails that predict problems before they happen.",
    features: [
      "Spam-trigger and content risk analysis",
      "Link + domain reputation scoring",
      "Layout and HTML structure validation",
      "Authentication alignment (SPF, DKIM, DMARC)",
      '<strong class="text-brand-orange">Inbox Score™</strong> — spam-folder probability with actionable fixes',
      "Readability, tone, and intent analysis",
    ],
    visual: (
      <div className="glass-card w-full h-[50%] md:w-[60%] md:aspect-square rounded-3xl mb-8 py-4 md:p-4 flex md:flex-col gap-8 md:gap-0 justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-orange/5 blur-3xl"></div>
        <div>
          <div className="text-2xl md:text-6xl font-bold text-white mb-0 md:mb-2">
            99.2%
          </div>
          <div className="text-brand-textMuted font-mono text-[9px] md:text-sm uppercase tracking-widest">
            Inbox Rate
          </div>
        </div>
        <div className="flex items-end gap-2 h-16 md:h-32 mt-2 md:mt-8">
          <div className="w-4 bg-brand-border h-[40%] rounded-t"></div>
          <div className="w-4 bg-brand-border h-[60%] rounded-t"></div>
          <div className="w-4 bg-brand-border h-[50%] rounded-t"></div>
          <div className="w-4 bg-brand-orange h-[90%] rounded-t shadow-[0_0_15px_#FF9F1C]"></div>
          <div className="w-4 bg-brand-border h-[70%] rounded-t"></div>
        </div>
      </div>
    ),
    order: "text-first",
    gradient: "bg-gradient-to-br from-[#111] to-[#050505]",
    href: "deliverability",
  },
  {
    icon: "shield",
    title: "Reputation & Compliance Protection",
    description:
      "Your reputation is your power. Inwren protects it automatically.",
    features: [
      "Automated IP warm-up and controlled ramping",
      "Smart throttling when risk spikes",
      "Blocklist + reputation monitoring",
      "Complaint + bounce intelligence",
      "Built-in compliance guardrails",
    ],
    visual: (
      <div className="glass-card w-full max-w-sm md:aspect-4/3 rounded-3xl p-6 mb-8 relative overflow-hidden flex items-center justify-center">
        <div className="absolute -right-20 -top-20 w-56 h-56 bg-brand-orange/20 blur-[80px] rounded-full"></div>
        <div className="space-y-2 md:space-y-4 w-full">
          <div className="flex items-center justify-between p-2 md:p-4 rounded-lg bg-black/40 border border-brand-orange/30">
            <span className="font-mono text-sm text-white">
              IP_WARMUP_STATUS
            </span>
            <span className="text-brand-orange font-bold">ACTIVE</span>
          </div>
          <div className="flex items-center justify-between p-2 md:p-4 rounded-lg bg-black/40 border border-white/5">
            <span className="font-mono text-sm text-brand-textMuted">
              THROUGHPUT
            </span>
            <span className="text-white font-mono">4,200/min</span>
          </div>
          <div className="flex items-center justify-between p-2 md:p-4 rounded-lg bg-black/40 border border-white/5">
            <span className="font-mono text-sm text-brand-textMuted">
              REPUTATION
            </span>
            <span className="text-green-400 font-mono">HIGH</span>
          </div>
        </div>
      </div>
    ),
    order: "visual-first",
    gradient: "bg-gradient-to-br from-[#1a0f00] to-[#050505]",
    href: "reputation",
  },
  {
    icon: "workflow",
    title: "Journey & Engagement Intelligence",
    description:
      "See how people actually flow through your emails — and let AI optimize every step.",
    features: [
      "Drop-off and engagement pattern detection",
      "Behavior-triggered automation",
      "Dynamic send-time adjustments",
      "Engagement heatmaps",
      "Real-time analytics",
    ],
    visual: (
      <div className="relative w-full max-w-sm mb-16">
        <div className="glass-card p-3 md:p-4 rounded-2xl mb-4 transform -rotate-2 translate-x-4 border-l-4 border-l-brand-orange">
          <div className="text-xs text-brand-textMuted uppercase mb-1">
            Click Rate
          </div>
          <div className="text-xl md:text-3xl font-bold text-white">
            4.8%
            <span className="text-sm text-green-500 ml-2">↑ 12%</span>
          </div>
        </div>
        <div className="glass-card p-3 md:p-4 rounded-2xl transform rotate-2 -translate-x-4 z-10 relative bg-[#111]">
          <div className="text-xs text-brand-textMuted uppercase mb-1">
            Open Rate
          </div>
          <div className="text-xl md:text-3xl font-bold text-white">
            42.5%
            <span className="text-sm text-green-500 ml-2">↑ 5%</span>
          </div>
        </div>
      </div>
    ),
    order: "text-first",
    gradient: "bg-gradient-to-br from-[#050a14] to-[#020202]",
    href: "journey",
  },
];

export default function FeaturesStack() {
  const sectionRef = useRef(null);
  const panelRefs = useRef([]);
  const dotRefs = useRef([]);

  useEffect(() => {
    panelRefs.current.forEach((panel, index) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top center",
        end: "bottom center",
        onEnter: () => activateDot(index),
        onEnterBack: () => activateDot(index),
      });
    });

    ScrollTrigger.create({
      trigger: "#features",
      start: "top center",
      end: "bottom center",
      onEnter: () =>
        gsap.to("#feature-progress", { opacity: 1, duration: 0.3 }),
      onLeave: () =>
        gsap.to("#feature-progress", { opacity: 0, duration: 0.3 }),
      onEnterBack: () =>
        gsap.to("#feature-progress", { opacity: 1, duration: 0.3 }),
      onLeaveBack: () =>
        gsap.to("#feature-progress", { opacity: 0, duration: 0.3 }),
    });

    function activateDot(activeIndex) {
      dotRefs.current.forEach((dot, i) => {
        if (!dot) return;
        dot.classList.toggle("bg-brand-orange", i === activeIndex);
        dot.classList.toggle("scale-125", i === activeIndex);
        dot.classList.toggle("bg-brand-border", i !== activeIndex);
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="features" className="relative bg-brand-black">
      <div className="relative z-30 max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
        <p className="text-xs font-mono text-brand-orange uppercase tracking-widest mb-3">
          Platform Capabilities
        </p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Everything You Need to Grow
        </h2>
        <p className="text-brand-textMuted max-w-2xl mx-auto text-lg">
          From inbox placement to engagement intelligence — everything stacks
          seamlessly.
        </p>
      </div>
      {/*  */}
      <div
        id="feature-progress"
        className="hidden md:flex fixed top-1/2 right-6 -translate-y-1/2 z-40 gap-4 flex-col opacity-0"
      >
        {featuresData.map((_, i) => (
          <span
            key={i}
            ref={(el) => (dotRefs.current[i] = el)}
            className="w-2.5 h-2.5 rounded-full bg-brand-border transition-all duration-300"
          ></span>
        ))}
      </div>

      <div>
        {featuresData.map((feature, i) => (
          <FeaturePanel
            key={i}
            {...feature}
            zIndex={10 + i}
            ref={(el) => (panelRefs.current[i] = el)}
          />
        ))}
      </div>
    </section>
  );
}
