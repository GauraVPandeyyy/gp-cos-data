"use client";

import { useState, useEffect, useRef } from "react";
import {
  Menu,
  Rocket,
  Sparkles,
  Zap,
  Server,
  ChevronRight,
  Brain,
  Shield,
  TrendingUp,
  Workflow,
  Mail,
  MessagesSquare,
  MessageSquare,
  MessageCircle,
  Bell,
  Bot,
  CreditCard,
  Phone,
} from "lucide-react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

const PLANS = [
  {
    id: "launch",
    name: "Launch",
    description: "Perfect for testing & side projects",
    icon: Rocket,
    price: "",
  },
  {
    id: "growth",
    name: "Growth",
    description: "For professional marketers",
    icon: Sparkles,
    price: "",
    // popular: true
  },
  {
    id: "ultra",
    name: "Ultra",
    description: "Maximum performance",
    icon: Zap,
    price: "",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Custom solutions",
    icon: Server,
    price: "",
  },
];

const PLATFORM_FEATURES = [
  {
    id: "intelligence",
    name: "Intelligence & AI",
    description: "Smart segmentation & optimization",
    icon: Brain,
    href: "/compare",
  },
  {
    id: "deliverability",
    name: "Deliverability",
    description: "Advanced inbox placement tools",
    icon: Shield,
    href: "/compare",
  },
  {
    id: "analytics",
    name: "Analytics & Data",
    description: "Real-time insights & exports",
    icon: TrendingUp,
    href: "/compare",
  },
  {
    id: "automation",
    name: "Automation",
    description: "Multi-step flows & triggers",
    icon: Workflow,
    href: "/compare",
  },
];

function PlatformDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [canClose, setCanClose] = useState(true);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
    setCanClose(false);

    setTimeout(() => {
      setCanClose(true);
    }, 100);
  };

  const handleMouseLeave = () => {
    if (canClose) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 50);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const MENU_ITEMS = [
    {
      name: "Deliverability & Intelligence",
      desc: "Advanced inbox placement and smart insights",
      icon: Shield,
      href: "/#deliverability",
    },
    {
      name: "Reputation & Compliance Protection",
      desc: "Safeguard sender reputation and ensure compliance",
      icon: Brain,
      href: "/#reputation",
    },
    {
      name: "Journey & Engagement Intelligence",
      desc: "Track customer journeys and optimize engagement",
      icon: TrendingUp,
      href: "/#journey",
    },
    {
      name: "AI Intelligence & Precision Automation",
      desc: "Smart automation powered by advanced AI",
      icon: Sparkles,
      href: "/#ai-intelligence",
    },
    {
      name: "Developer Email Engine",
      desc: "Powerful APIs for seamless integration",
      icon: Server,
      href: "/#developer-engine",
    },
    {
      name: "Simple Transparent Pricing",
      desc: "Clear pricing with no hidden costs",
      icon: Zap,
      href: "/#pricing",
    },
  ];

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href="/#features"
        className="text-sm font-mono text-brand-textMuted hover:text-brand-orange transition-colors"
      >
        Platform
      </a>

      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[700px] z-50 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-zinc-900 border-t border-l border-zinc-800 rotate-45 z-50" />

        <div className="relative bg-zinc-900 border border-zinc-800 rounded-lg shadow-2xl overflow-hidden backdrop-blur-xl z-50">
          {/* 3x2 Grid */}
          <div className="p-4">
            <div className="grid grid-cols-3 gap-3">
              {MENU_ITEMS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    className="group flex flex-col gap-2 p-3 rounded-lg hover:bg-zinc-800/50 transition-all"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:border-brand-orange/50 group-hover:bg-brand-orange/10 transition-all">
                      <Icon className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white group-hover:text-brand-orange transition-colors leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-xs text-brand-textMuted mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          {/* <div className="px-4 py-3 border-t border-zinc-800 bg-zinc-900/50">
            <a
              href="/compare"
              className="text-xs font-mono text-brand-orange hover:text-white transition-colors flex items-center gap-1"
            >
              Compare with competitors
              <ChevronRight className="w-3 h-3" />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

function PricingDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [canClose, setCanClose] = useState(true);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
    setCanClose(false);

    // Allow closing after 1 second
    setTimeout(() => {
      setCanClose(true);
    }, 100);
  };

  const handleMouseLeave = () => {
    if (canClose) {
      // Add a small delay before closing for smoother UX
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 50);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      <a
        href="/features"
        className="text-sm font-mono text-brand-textMuted hover:text-brand-orange transition-colors"
      >
        Pricing
      </a>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 z-50 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {/* Arrow */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-zinc-900 border-t border-l border-zinc-800 rotate-45 z-50" />

        {/* Menu Content */}
        <div className="relative bg-zinc-900 border border-zinc-800 rounded-lg shadow-2xl overflow-hidden backdrop-blur-xl z-50">
          {/* Header */}
          {/* <div className="px-4 py-3 border-b border-zinc-800">
            <h3 className="text-xs font-mono text-brand-textMuted uppercase tracking-wider">
              Choose Your Plan
            </h3>
          </div> */}

          {/* Plans */}
          {/* <div className="py-2">
            {PLANS.map((plan) => {
              const Icon = plan.icon;
              return (
                <a
                  key={plan.id}
                  href="/features"
                  className="group flex items-center gap-3 px-4 py-3 hover:bg-zinc-800/50 transition-colors relative"
                >
                  
                  {plan.popular && (
                    <div className="absolute top-2 right-2 px-2 py-0.5 bg-brand-orange/20 border border-brand-orange/40 rounded text-[10px] font-mono text-brand-orange uppercase">
                      Popular
                    </div>
                  )}

                
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:border-brand-orange/50 group-hover:bg-brand-orange/10 transition-all">
                    <Icon className="w-5 h-5 text-brand-orange" />
                  </div>

                
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-semibold text-white group-hover:text-brand-orange transition-colors">
                        {plan.name}
                      </h4>
                    </div>
                    <p className="text-xs text-brand-textMuted mt-0.5">
                      {plan.description}
                    </p>
                  </div>

                 
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-mono text-brand-textMain">
                      {plan.price}
                    </span>
                    <ChevronRight className="w-4 h-4 text-brand-textMuted group-hover:text-brand-orange group-hover:translate-x-0.5 transition-all" />
                  </div>
                </a>
              );
            })}
          </div> */}

          {/* Footer */}

          <div className="py-2">
            <a
              href="/features"
              className="group flex items-center gap-3 px-4 py-3 hover:bg-zinc-800/50 transition-colors relative"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:border-brand-orange/50 group-hover:bg-brand-orange/10 transition-all">
                <Brain className="w-5 h-5 text-brand-orange" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-semibold text-white group-hover:text-brand-orange transition-colors">
                    Compare all features
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-brand-textMuted group-hover:text-brand-orange group-hover:translate-x-0.5 transition-all" />
              </div>
            </a>
          </div>
          <div className="py-2">
            <a
              href="/compare"
              className="group flex items-center gap-3 px-4 py-3 hover:bg-zinc-800/50 transition-colors relative"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:border-brand-orange/50 group-hover:bg-brand-orange/10 transition-all">
                <Server className="w-5 h-5 text-brand-orange" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-semibold text-white group-hover:text-brand-orange transition-colors">
                    Compare with competitors
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-brand-textMuted group-hover:text-brand-orange group-hover:translate-x-0.5 transition-all" />
              </div>
            </a>
          </div>

          {/* <div className="px-4 py-3 border-t border-zinc-800 bg-zinc-900/50">
            <a
              href="#"
              className="text-xs font-mono text-brand-orange hover:text-white transition-colors flex items-center gap-1"
            >
              Compare all features
              <ChevronRight className="w-3 h-3" />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Add background when scrolled
          setIsScrolled(currentScrollY > 50);

          // Auto-hide logic
          if (currentScrollY < 120) {
            setIsHidden(false);
          } else if (currentScrollY > lastScrollY + 6) {
            setIsHidden(true);
          } else if (currentScrollY < lastScrollY - 6) {
            setIsHidden(false);
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "glass-nav" : "bg-transparent"
        } ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
        style={{ willChange: "transform" }}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
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
                <feFlood
                  floodColor="#ff9c1c"
                  floodOpacity="0.9"
                  result="color"
                />
                <feComposite
                  in="color"
                  in2="blur"
                  operator="in"
                  result="glow"
                />
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

          <div className="hidden md:flex items-center gap-8">
            <PlatformDropdown />
            <Link
              href="/#how-it-works"
              className="text-sm font-mono text-brand-textMuted hover:text-brand-orange transition-colors"
            >
              Process
            </Link>
            <PricingDropdown />
            <a
              href="#"
              className="text-sm font-mono text-brand-textMain hover:text-white transition-colors"
            >
              Login
            </a>
            <a
              href="#pricing"
              className="btn-shine px-5 py-2 border border-brand-orange text-brand-orange font-mono text-xs uppercase tracking-wider hover:bg-brand-orange hover:text-black transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <MobileMenu isOpen={mobileMenuOpen} onClose={toggleMobileMenu} />
    </>
  );
}
