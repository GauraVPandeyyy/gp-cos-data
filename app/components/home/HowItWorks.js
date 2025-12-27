"use client";

import {
  Shield,
  MailCheck,
  MailSearch,
  Gauge,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  // useEffect(() => {
  // if (!sectionRef.current) return;

  //   gsap.fromTo(
  //     cardsRef.current,
  //     { y: 32, opacity: 0 },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       duration: 0.9,
  //       ease: "power3.out",
  //       stagger: 0.15,
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top 5%",
  //       },
  //     }
  //   );
  // }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative py-28 bg-brand-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Built on Real Email Infrastructure
          </h2>
          <p className="text-brand-textMuted mb-6">
            Not an API wrapper. Not shared ESPs.
          </p>
          <p className="text-brand-textMuted text-sm md:text-base leading-relaxed">
            Inwren runs its own email infrastructure—from MTA and SMTP to bounce
            handling, analytics, and reputation management—so your emails land
            in the inbox, not the spam folder. 
            {/* Unlike platforms built on Amazon
            SES or Postmark, Inwren gives you true ownership of your sending
            reputation. */}
          </p>
        </div>

        {/* TOP FEATURE CARDS */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8 md:mb-20">
          {[
            {
              icon: Shield,
              title: "Dedicated Sending, Done Right",
              subtitle: "Your domain. Your IP. Your reputation.",
              points: [
                "Custom-built MTA & SMTP stack operated by Inwren",
                "Dedicated domains & IP addresses for Pro customers",
                "Full control over SPF, DKIM, DMARC, and rDNS",
                "Zero reputation leakage from shared senders",
              ],
              note: "Most platforms share infrastructure. Inwren isolates it.",
            },
            {
              icon: MailCheck,
              title: "Inbox-First Deliverability Engine",
              subtitle: "Engineered for inbox placement—not bulk volume.",
              points: [
                "Automated IP & domain warm-up",
                "Intelligent throttling by mailbox provider (Gmail, Outlook, Yahoo)",
                "Advanced bounce classification (hard, soft, policy-level)",
                "Feedback-loop driven suppression and retry logic",
              ],
              note: "Deliverability is a system, not a checkbox.",
            },
            {
              icon: MailSearch,
              title: "Built-In Email Verification",
              subtitle: "Know before you send.",
              points: [
                "Invalid and non-existent mailboxes",
                "Catch-all / accept-all domains",
                "Disposable and role-based addresses",
                "Domain and MX misconfigurations",
              ],
              note: "Inwren never sends emails during verification.",
            },
          ].map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="group relative p-5 md:p-8 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-orange transition-all duration-300 overflow-hidden"
              >
                <div className="noise-overlay" />
                <div className="flex items-start gap-3 md:gap-4 mb-6">
                  <Icon className="w-9 h-9 text-brand-orange shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
                    <p className="text-sm text-brand-orange">{card.subtitle}</p>
                  </div>
                </div>
                <ul className="text-sm text-brand-textMuted space-y-2 leading-relaxed">
                  {card.points.map((p, idx) => (
                    <li key={idx}>• {p}</li>
                  ))}
                </ul>
                <p className="text-xs text-brand-textMuted mt-4">{card.note}</p>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CONTINUOUS ROW */}
        <div className="relative grid lg:grid-cols-2 gap-8 p-5 md:p-8 rounded-2xl bg-brand-surface/50 border border-brand-border overflow-hidden">
          <div className="noise-overlay" />

          {/* LEFT COLUMN */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Gauge className="w-9 h-9 text-brand-orange shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  AI-Assisted Confidence Scoring
                </h3>
                {/* <p className="text-sm text-brand-textMuted leading-relaxed">
                  Each address is evaluated using multiple intelligence signals.
                  You decide who to send, pause, or review before damage happens.
                </p> */}
              </div>
            </div>
            <p className="text-sm text-brand-textMuted leading-relaxed">
              Each address is evaluated using multiple intelligence signals. You
              decide who to send, pause, or review before damage happens.
            </p>

            <div className="space-y-2 text-sm">
              <p>
                <span className="text-brand-textMuted">Email:</span>{" "}
                <span className="text-white font-medium">
                  nathan@enclove.com
                </span>
              </p>
              <p>
                <span className="text-brand-textMuted">Final Status:</span>{" "}
                <span className="text-green-400 font-semibold">
                  ✓ Deliverable
                </span>
              </p>
              <p>
                <span className="text-brand-textMuted">Confidence Score:</span>{" "}
                <span className="text-green-400 font-semibold">
                  94 / 100 (Low Risk)
                </span>
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN TABLE */}
          <div className="overflow-x-auto rounded-xl bg-brand-surface border border-brand-border">
            <table className="w-full text-sm  border-collapse">
              <thead>
                <tr className="text-left border-b border-brand-border">
                  <th className="py-2 pl-3 text-brand-textMuted">Check</th>
                  <th className="py-2 text-brand-textMuted">Result</th>
                  <th className="py-2 text-brand-textMuted">Explanation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border">
                {[
                  [
                    "Domain Mail Configuration",
                    "Healthy",
                    "MX, SPF, DKIM, DMARC present",
                  ],
                  [
                    "Domain Catch-All Classification",
                    "Not Catch-All",
                    "Domain explicitly rejects random usernames",
                  ],
                  [
                    "Username Convention Inference",
                    "Match",
                    "Domain follows first-name only pattern",
                  ],
                  ["Inbox Deliverability", "Valid", "Inbox is reachable"],
                  [
                    "Verification Method",
                    "Probe",
                    "No email sent during verification",
                  ],
                ].map(([check, result, exp], idx) => (
                  <tr key={idx}>
                    <td className="py-3 pr-3 pl-3">{check}</td>
                    <td className="py-3 pr-3 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      <span className="font-medium">{result}</span>
                    </td>
                    <td className="py-3 text-brand-textMuted pr-1">{exp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
