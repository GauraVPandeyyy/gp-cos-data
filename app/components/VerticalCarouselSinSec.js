"use client";

import { useRef, useEffect, useState } from "react";
import { Sparkles, GitBranch, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Stunning Email Composer",
    subtitle: "AI Assisted",
    description:
      "Design emails effortlessly with our AI-assisted, drag-and-drop editor. Focus on strategy, let AI handle the heavy lifting for copy and optimization.",
    visual: "composer",
  },
  {
    icon: GitBranch,
    title: "Email Automations",
    subtitle: "Sequences & Flows",
    description:
      "Build complex, multi-step sequences with our smart WYSIWYG builder. Utilize powerful if/else logic for true personalization.",
    visual: "automation",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    subtitle: "Drill-down & Rollups",
    description:
      "Track real performance across campaigns, segments, and individuals. Drill down into full details or view aggregated rollups.",
    visual: "analytics",
  },
];

export default function VerticalCarouselSinSec() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);
  const totalCards = features.length;

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!isAnimating && !isPaused) {
  //       nextCard();
  //     }
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [currentIndex, isAnimating, isPaused]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleWheel = (e) => {
      if (isAnimating) return;

      const isScrollingDown = e.deltaY > 0;
      const isScrollingUp = e.deltaY < 0;

      // Allow natural page scroll AFTER last card
      if (
        (isScrollingDown && currentIndex === totalCards - 1) ||
        (isScrollingUp && currentIndex === 0)
      ) {
        return;
      }

      e.preventDefault();

      if (isScrollingDown) {
        goToCard(currentIndex + 1);
      } else if (isScrollingUp) {
        goToCard(currentIndex - 1);
      }
    };

    carousel.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      carousel.removeEventListener("wheel", handleWheel);
    };
  }, [currentIndex, isAnimating, totalCards]);

  // const nextCard = () => {
  //   setIsAnimating(true);
  //   setTimeout(() => {
  //     setCurrentIndex((prev) => (prev + 1) % totalCards);
  //     setIsAnimating(false);
  //   }, 300);
  // };

  const goToCard = (index) => {
    if (index !== currentIndex && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  const currentFeature = features[currentIndex];

  return (
    <section
      id="carousel-section"
      className="py-12 md:py-24 bg-transparent relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <p className="text-xs font-mono text-orange-500 uppercase tracking-widest mb-3">
            Core Capabilities
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight text-white">
            Experience The INWREN Difference
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative flex gap-4 md:gap-8 justify-center items-center">
          {/* Progress Dots - Left Side (hidden on mobile) */}
          <div className="hidden md:flex flex-col justify-center gap-4">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => goToCard(index)}
                className={`w-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-orange-500 h-8"
                    : "bg-gray-700 hover:bg-orange-500/50 h-2"
                }`}
                aria-label={`Go to card ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Progress Dots - Bottom (visible on mobile only) */}
          <div className="md:hidden absolute -bottom-6 left-0 right-0 flex justify-center gap-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => goToCard(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-orange-500 w-8"
                    : "bg-gray-700 w-2"
                }`}
                aria-label={`Go to card ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Card Display Area */}
          {/* h-[600px] md:h-[500px] lg:h-[670px] */}
          <div
            ref={carouselRef}
            className="relative w-full max-w-[1400px] h-[600px] md:h-[500px] lg:h-[670px]"
            // onMouseEnter={() => setIsPaused(true)}
            // onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className={`w-full h-full transition-all duration-300 ease-in-out ${
                isAnimating ? "scale-90 opacity-0" : "scale-100 opacity-100"
              }`}
            >
              <div className="glass-card rounded-2xl md:rounded-3xl overflow-hidden h-full">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="bg-zinc-900 pt-4 px-4 md:pt-10 md:px-10">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-[15vw] mb-2">
                      <currentFeature.icon className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />
                      <h3 className="text-xl md:text-3xl font-bold text-white">
                        {currentFeature.title}{" "}
                        <span className="text-orange-500">
                          ({currentFeature.subtitle})
                        </span>
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm md:text-base max-w-lg text-left md:text-center md:mx-auto pb-4 md:pb-0">
                      {currentFeature.description}
                    </p>
                  </div>

                  {/* Content */}
                  <div className=" bg-zinc-950 border-t border-zinc-800 pt-2 px-2 md:pt-6 md:px-6 shadow-2xl">
                    {/* Desktop Visuals (hidden on mobile) */}
                    <div className="hidden md:block h-full">
                      <div className="mx-auto h-full w-full md:w-[1000px] max-w-full overflow-hidden">
                        {currentFeature.visual === "composer" && (
                          <ComposerVisual />
                        )}
                        {currentFeature.visual === "automation" && (
                          <AutomationVisual />
                        )}
                        {currentFeature.visual === "analytics" && (
                          <AnalyticsVisual />
                        )}
                      </div>
                    </div>

                    {/* Mobile Visuals (visible on mobile only) */}
                    <div className="md:hidden h-full w-full">
                      {currentFeature.visual === "composer" && (
                        <ComposerVisualMobile />
                      )}
                      {currentFeature.visual === "automation" && (
                        <AutomationVisualMobile />
                      )}
                      {currentFeature.visual === "analytics" && (
                        <AnalyticsVisualMobile />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComposerVisual() {
  return (
    <div className="h-full w-full p-4">
      <div className="border border-gray-300 bg-white rounded-lg p-2 h-full shadow-xl">
        <div className="bg-gray-50 rounded border border-gray-200 p-4 h-full relative overflow-hidden">
          {/* Header with macOS-style controls */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400 border border-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-400 border border-green-500"></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="font-mono text-[10px] text-gray-600 flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                AI_READY
              </div>
              <div className="font-mono text-[10px] text-gray-600">
                mode: compose
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex h-[calc(100%-3rem)] gap-4">
            <div className="w-1/4 pr-4 border-r border-gray-200 flex flex-col">
              <h4 className="font-bold text-xs mb-3 text-gray-900 uppercase tracking-wide">
                Blocks
              </h4>
              <div className="space-y-2">
                <div className="p-2 bg-gray-100 rounded flex items-center justify-between text-xs text-gray-700 hover:bg-gray-200 transition-colors">
                  Text <span className="text-orange-500">≡</span>
                </div>
                <div className="p-2 bg-gray-100 rounded flex items-center justify-between text-xs text-gray-700 hover:bg-gray-200 transition-colors">
                  Image <span className="text-orange-500">⊡</span>
                </div>
                <div className="p-2 bg-gray-100 rounded flex items-center justify-between text-xs text-gray-700 hover:bg-gray-200 transition-colors">
                  Button <span className="text-orange-500">◉</span>
                </div>
              </div>
              <h4 className="font-bold text-xs mt-6 mb-3 text-gray-900 uppercase tracking-wide">
                AI Copilot
              </h4>
              <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg text-xs text-gray-700">
                "Draft a subject line that increases open rate by 15%."
              </div>
            </div>

            <div className="w-3/4 pl-2 relative overflow-auto">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl shadow-xl border border-slate-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center text-2xl shadow-lg">
                      👋
                    </div>
                    <div>
                      <h5 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Welcome,{" "}
                        <span className="text-orange-600">
                          {"{ FIRST_NAME }"}
                        </span>
                        !
                      </h5>
                      <p className="text-xs text-slate-500 font-medium">
                        Your journey starts here
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent my-4"></div>

                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    Thanks for joining the waitlist! Our AI noticed you're
                    interested in
                    <span className="font-semibold text-slate-900">
                      {" "}
                      scaling SaaS marketing
                    </span>
                    .
                  </p>

                  <div className="mt-6 flex justify-center">
                    <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-2">
                      Get Started
                      <span>→</span>
                    </button>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-2">
                    <div className="text-center p-2 bg-white/50 rounded-lg border border-slate-200">
                      <div className="text-lg">⚡</div>
                      <p className="text-xs text-slate-600 font-medium">Fast</p>
                    </div>
                    <div className="text-center p-2 bg-white/50 rounded-lg border border-slate-200">
                      <div className="text-lg">🎯</div>
                      <p className="text-xs text-slate-600 font-medium">
                        Smart
                      </p>
                    </div>
                    <div className="text-center p-2 bg-white/50 rounded-lg border border-slate-200">
                      <div className="text-lg">📈</div>
                      <p className="text-xs text-slate-600 font-medium">
                        Growth
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AutomationVisual() {
  return (
    <div className="h-full w-full p-4">
      <div className="border border-gray-300 bg-white rounded-lg p-2 h-full shadow-xl">
        <div className="bg-gray-50 rounded border border-gray-200 p-4 h-full relative overflow-hidden">
          {/* Header with macOS-style controls */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400 border border-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-400 border border-green-500"></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="font-mono text-[10px] text-gray-600 flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                FLOW_ACTIVE
              </div>
              <div className="font-mono text-[10px] text-gray-600">
                status: running
              </div>
            </div>
          </div>

          {/* Toolbar */}
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <button className="px-2 py-1 bg-orange-500 text-black text-xs font-semibold rounded hover:bg-orange-600 transition-colors">
                + New Flow
              </button>
              <button className="px-2 py-1 bg-gray-200 text-black text-xs font-semibold rounded hover:bg-gray-300 transition-colors">
                Edit
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-gray-600">
                Contacts: <span className="text-black font-mono">2,847</span>
              </span>
              <span className="px-2 py-0.5 bg-green-500/20 text-green-600 text-[10px] rounded border border-green-500/30">
                97% Success
              </span>
            </div>
          </div>

          {/* Main Content with Sidebar */}
          <div className="flex gap-3 h-[calc(100%-6rem)]">
            {/* Sidebar */}
            <div className="w-48 border-r border-gray-200 pr-3 flex flex-col gap-3 overflow-y-auto">
              <div>
                <h4 className="text-[10px] font-bold text-gray-600 uppercase mb-2">
                  Active Flows
                </h4>
                <div className="space-y-1">
                  <div className="p-2 bg-orange-500/10 border border-orange-500/30 rounded text-[10px] text-black">
                    <div className="flex items-center justify-between">
                      <span>Welcome Series</span>
                      <span className="text-orange-500">●</span>
                    </div>
                    <div className="text-gray-600 mt-1">2,847 active</div>
                  </div>
                  <div className="p-2 bg-zinc-100 border border-zinc-200 rounded text-[10px] text-gray-600 hover:border-zinc-300 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <span>Onboarding Flow</span>
                      <span className="text-gray-400">●</span>
                    </div>
                    <div className="mt-1">892 active</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-bold text-gray-600 uppercase mb-2">
                  Quick Stats
                </h4>
                <div className="space-y-2">
                  <div className="p-2 bg-zinc-100 rounded">
                    <div className="text-[10px] text-gray-600">Total Sent</div>
                    <div className="text-sm font-bold text-black">48.2K</div>
                  </div>
                  {/* <div className="p-2 bg-zinc-100 rounded">
                    <div className="text-[10px] text-gray-600">Completion</div>
                    <div className="text-sm font-bold text-green-600">82%</div>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Flow Diagram */}
            <div className="flex-1 flex justify-center items-center overflow-auto">
              <div className="scale-90 w-full">
                {/* Trigger */}
                <div className="bg-green-700/50 border border-green-500 rounded-full text-xs font-mono text-white text-center max-w-[200px] mx-auto relative pb-1 px-3">
                  Contact Subscribes
                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <div className="h-4 w-px bg-zinc-300 mx-auto my-1"></div>

                {/* First Action */}
                <div className="p-2 bg-zinc-50 border border-orange-500/50 rounded text-center shadow-lg max-w-[200px] mx-auto relative group hover:border-orange-500 transition-colors">
                  <span className="text-xs font-mono text-black">
                    ✉ Welcome Email
                  </span>
                  <div className="text-[10px] text-gray-600 mt-0.5">
                    Delay: 1h
                  </div>
                </div>
                <div className="h-4 w-px bg-zinc-300 mx-auto my-1"></div>

                {/* Conditional Split */}
                <div className="relative flex gap-2">
                  {/* Horizontal connector */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-zinc-300 mb-5"></div>
                  {/* Left vertical connector (to IF) */}
                  <div className="absolute top-0 left-1/4 h-4 w-px bg-zinc-300"></div>

                  {/* Right vertical connector (to ELSE) */}
                  <div className="absolute top-0 left-3/4 h-4 w-px bg-zinc-300"></div>

                  {/* YES Path */}
                  <div className="flex flex-col items-center w-1/2 pt-5">
                    <div className="p-1.5 bg-blue-700/50 border border-blue-500 rounded text-[10px] font-bold text-white text-center relative">
                      IF: Clicked (45%)
                    </div>
                    <div className="w-px h-4 bg-zinc-300 my-1"></div>
                    <div className="p-2 bg-zinc-50 border border-zinc-200 rounded text-center text-[10px] hover:border-orange-500/50 transition-colors">
                      <span className="font-mono text-black">
                        🏷 Tag: Hot Lead
                      </span>
                    </div>
                    {/* <div className="w-px h-3 bg-zinc-300 my-1"></div> */}
                    {/* <div className="p-1.5 bg-zinc-50 border border-zinc-200 rounded text-[10px] text-center">
                      <span className="font-mono text-black">📬 Sales Email</span>
                      <div className="text-[9px] text-gray-500">2d</div>
                    </div> */}
                  </div>

                  {/* NO Path */}
                  <div className="flex flex-col items-center w-1/2 pt-5">
                    <div className="p-1.5 bg-red-700/50 border border-red-500 rounded text-[10px] font-bold text-white text-center relative">
                      ELSE (55%)
                    </div>
                    <div className="w-px h-4 bg-zinc-300 my-1"></div>
                    <div className="p-2 bg-zinc-50 border border-zinc-200 rounded text-center text-[10px] hover:border-orange-500/50 transition-colors">
                      <span className="font-mono text-black">
                        📧 Nurture #2
                      </span>
                      <div className="text-[9px] text-gray-600">3d</div>
                    </div>
                    {/* <div className="w-px h-3 bg-zinc-300 my-1"></div>
                    <div className="p-1.5 bg-zinc-50 border border-zinc-200 rounded text-[10px] text-center">
                      <span className="font-mono text-black">🔄 Re-engage</span>
                      <div className="text-[9px] text-gray-500">3 emails</div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Stats */}
          <div className="absolute bottom-2 left-4 right-4 flex justify-between items-center text-[9px] text-gray-500 font-mono">
            <span>Updated: 2m ago</span>
            <span>7 steps | 82% complete</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default AutomationVisual;

function AnalyticsVisual() {
  return (
    <div className="h-full w-full p-4">
      <div className="border border-gray-300 bg-white rounded-lg p-2 h-full shadow-xl">
        <div className="bg-gray-50 rounded border border-gray-200 pt-4 pl-4 pr-4 h-full relative overflow-hidden">
          {/* Header with macOS-style controls */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400 border border-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-400 border border-green-500"></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="font-mono text-[10px] text-gray-600 flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                DATA_SYNCED
              </div>
              <div className="font-mono text-[10px] text-gray-600">
                status: live
              </div>
            </div>
          </div>

          {/* Toolbar */}
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 bg-gray-100 text-gray-900 text-xs rounded hover:bg-gray-200 transition-colors flex items-center gap-1">
                <span>📅</span> Last 30 Days
              </button>
              <button className="px-3 py-1 bg-gray-100 text-gray-900 text-xs rounded hover:bg-gray-200 transition-colors">
                Export
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-600">
                Total Campaigns:{" "}
                <span className="text-gray-900 font-mono">47</span>
              </span>
              <span className="px-2 py-1 bg-orange-500/20 text-orange-600 text-xs rounded border border-orange-500/30">
                Real-time
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col h-[calc(100%-8rem)]">
            <div className="grid grid-cols-3 gap-3 mb-2">
              <div className="p-4 bg-white border border-gray-200 rounded-lg hover:border-orange-500/50 transition-colors relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/5 rounded-full blur-2xl"></div>
                <p className="text-xs text-gray-600 uppercase mb-1">
                  Open Rate
                </p>
                <div className="text-3xl font-bold text-gray-900">42.5%</div>
                <span className="text-green-600 text-sm flex items-center mt-1">
                  <span className="mr-1">↑</span> +4.1% WoW
                </span>
                <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: "42.5%" }}
                  ></div>
                </div>
              </div>
              <div className="p-4 bg-white border border-gray-200 rounded-lg hover:border-orange-500/50 transition-colors relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/5 rounded-full blur-2xl"></div>
                <p className="text-xs text-gray-600 uppercase mb-1">
                  Conversions
                </p>
                <div className="text-3xl font-bold text-gray-900">1,489</div>
                <span className="text-red-600 text-sm flex items-center mt-1">
                  <span className="mr-1">↓</span> -0.8% WoW
                </span>
                <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-500 rounded-full"
                    style={{ width: "68%" }}
                  ></div>
                </div>
              </div>
              <div className="p-4 bg-white border border-gray-200 rounded-lg hover:border-orange-500/50 transition-colors relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500/5 rounded-full blur-2xl"></div>
                <p className="text-xs text-gray-600 uppercase mb-1">Revenue</p>
                <div className="text-3xl font-bold text-orange-600">
                  $14,500
                </div>
                <span className="text-green-600 text-sm flex items-center mt-1">
                  <span className="mr-1">↑</span> +12.5% MoM
                </span>
                <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-500 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-xs text-gray-900 uppercase tracking-wide">
                Campaign Rollup
              </h4>
              <div className="flex gap-2">
                <button className="text-xs text-gray-600 hover:text-gray-900 transition-colors">
                  All
                </button>
                <button className="text-xs text-orange-600 font-semibold">
                  Active
                </button>
                <button className="text-xs text-gray-600 hover:text-gray-900 transition-colors">
                  Paused
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-5 gap-3 uppercase text-xs border-b border-gray-200 bg-gray-50 py-3 px-3">
                <div className="font-semibold text-gray-700">Campaign</div>
                <div className="font-semibold text-gray-700">Opens</div>
                <div className="font-semibold text-gray-700">Clicks</div>
                <div className="font-semibold text-gray-700">Conv.</div>
                <div className="font-semibold text-gray-700">Status</div>
              </div>

              {/* Body */}
              <div className="min-h-[140px]">
                {/* Row 1 */}
                <div className="grid grid-cols-5 gap-3 border-b border-gray-100 hover:bg-gray-50 transition-colors py-3 px-3 text-sm text-gray-600">
                  <div className="text-gray-900 font-medium">
                    Welcome Sequence A
                  </div>
                  <div>68%</div>
                  <div>15%</div>
                  <div className="text-orange-600 font-semibold">8.2%</div>
                  <div>
                    <span className="px-2 py-0.5 bg-green-500/20 text-green-600 text-xs rounded border border-green-500/30">
                      Active
                    </span>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-5 gap-3 border-b border-gray-100 hover:bg-gray-50 transition-colors py-3 px-3 text-sm text-gray-600">
                  <div className="text-gray-900 font-medium">
                    Q4 Promo - Black Friday
                  </div>
                  <div>22%</div>
                  <div>4%</div>
                  <div className="text-orange-600 font-semibold">2.1%</div>
                  <div>
                    <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-600 text-xs rounded border border-yellow-500/30">
                      Paused
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default AnalyticsVisual;

function ComposerVisualMobile() {
  const [activeTab, setActiveTab] = useState("blocks");

  return (
    <div className="h-full p-2 bg-zinc-950">
      <div className="border border-gray-300 bg-white rounded-lg p-2 h-full shadow-xl">
        <div className="bg-gray-50 rounded border border-gray-200 p-2 h-full relative overflow-hidden flex flex-col">
          {/* Header with macOS-style controls */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-2">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-400 border border-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400 border border-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-400 border border-green-500"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="font-mono text-[8px] text-gray-600 flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse"></div>
                AI_READY
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-1 mb-2 border-b border-gray-200 pb-2">
            <button
              onClick={() => setActiveTab("blocks")}
              className={`flex-1 px-2 py-1 rounded text-[10px] font-semibold transition-colors ${
                activeTab === "blocks"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Blocks
            </button>
            <button
              onClick={() => setActiveTab("ai")}
              className={`flex-1 px-2 py-1 rounded text-[10px] font-semibold transition-colors ${
                activeTab === "ai"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              AI Copilot
            </button>
            <button
              onClick={() => setActiveTab("preview")}
              className={`flex-1 px-2 py-1 rounded text-[10px] font-semibold transition-colors ${
                activeTab === "preview"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Preview
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-auto">
            {activeTab === "blocks" && (
              <div className="space-y-2">
                <div className="p-2 bg-gray-100 rounded flex items-center justify-between text-xs text-gray-700 hover:bg-gray-200 transition-colors">
                  Text <span className="text-orange-500">≡</span>
                </div>
                <div className="p-2 bg-gray-100 rounded flex items-center justify-between text-xs text-gray-700 hover:bg-gray-200 transition-colors">
                  Image <span className="text-orange-500">⊡</span>
                </div>
                <div className="p-2 bg-gray-100 rounded flex items-center justify-between text-xs text-gray-700 hover:bg-gray-200 transition-colors">
                  Button <span className="text-orange-500">◉</span>
                </div>
                <div className="p-2 bg-gray-100 rounded flex items-center justify-between text-xs text-gray-700 hover:bg-gray-200 transition-colors">
                  Divider <span className="text-orange-500">—</span>
                </div>
              </div>
            )}

            {activeTab === "ai" && (
              <div className="space-y-2">
                <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg text-xs text-gray-700">
                  "Draft a subject line that increases open rate by 15%."
                </div>
                <div className="p-2 bg-blue-50 border border-blue-200 rounded text-xs text-gray-700">
                  <div className="font-semibold mb-1">💡 AI Suggestions</div>
                  <div className="text-[10px] space-y-1">
                    <div>• Personalize greeting</div>
                    <div>• Add urgency CTA</div>
                    <div>• Optimize for mobile</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "preview" && (
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-3 rounded-lg shadow-lg border border-slate-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center text-lg shadow-md">
                      👋
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-900 tracking-tight">
                        Welcome, <span className="text-orange-600">[NAME]</span>
                        !
                      </h5>
                      <p className="text-[8px] text-slate-500 font-medium">
                        Your journey starts here
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent my-2"></div>

                  <p className="text-gray-700 mb-3 text-[11px] leading-relaxed">
                    Thanks for joining! Our AI noticed you're interested in{" "}
                    <span className="font-semibold text-slate-900">
                      scaling SaaS marketing
                    </span>
                    .
                  </p>

                  <div className="flex justify-center mb-3">
                    <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white text-xs font-semibold rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      Get Started →
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5">
                    <div className="text-center p-1.5 bg-white/50 rounded border border-slate-200">
                      <div className="text-sm">⚡</div>
                      <p className="text-[9px] text-slate-600 font-medium">
                        Fast
                      </p>
                    </div>
                    <div className="text-center p-1.5 bg-white/50 rounded border border-slate-200">
                      <div className="text-sm">🎯</div>
                      <p className="text-[9px] text-slate-600 font-medium">
                        Smart
                      </p>
                    </div>
                    <div className="text-center p-1.5 bg-white/50 rounded border border-slate-200">
                      <div className="text-sm">📈</div>
                      <p className="text-[9px] text-slate-600 font-medium">
                        Growth
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function AutomationVisualMobile() {
  const [activeView, setActiveView] = useState("flow");

  return (
    <div className="h-full p-2 bg-zinc-950">
      <div className="border border-gray-300 bg-white rounded-lg p-2 h-full shadow-xl">
        <div className="bg-gray-50 rounded border border-gray-200 p-2 h-full relative overflow-hidden flex flex-col">
          {/* Header with macOS-style controls */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-2">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-400 border border-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400 border border-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-400 border border-green-500"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="font-mono text-[8px] text-gray-600 flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse"></div>
                ACTIVE
              </div>
            </div>
          </div>

          {/* Toolbar */}
          <div className="flex items-center justify-between mb-2 pb-2 border-b border-gray-200">
            <button className="px-2 py-1 bg-orange-500 text-white text-[10px] font-semibold rounded hover:bg-orange-600 transition-colors">
              + Flow
            </button>
            <div className="flex items-center gap-1">
              <span className="text-[8px] text-gray-600">
                <span className="text-black font-mono">2.8K</span> contacts
              </span>
              <span className="px-1.5 py-0.5 bg-green-500/20 text-green-600 text-[8px] rounded border border-green-500/30">
                97%
              </span>
            </div>
          </div>

          {/* View Toggle */}
          <div className="flex gap-1 mb-2">
            <button
              onClick={() => setActiveView("flow")}
              className={`flex-1 px-2 py-1 rounded text-[10px] font-semibold transition-colors ${
                activeView === "flow"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Flow
            </button>
            <button
              onClick={() => setActiveView("stats")}
              className={`flex-1 px-2 py-1 rounded text-[10px] font-semibold transition-colors ${
                activeView === "stats"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Stats
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-auto">
            {activeView === "flow" && (
              <div className="py-2">
                {/* Trigger */}
                <div className="bg-green-700/50 border border-green-500 rounded-full text-[10px] font-mono text-white text-center py-1 px-2 mx-auto max-w-[180px] relative">
                  Contact Subscribes
                  <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <div className="h-3 w-px bg-zinc-300 mx-auto my-1"></div>

                {/* First Action */}
                <div className="p-2 bg-zinc-50 border border-orange-500/50 rounded shadow-md max-w-[180px] mx-auto">
                  <div className="text-[10px] font-mono text-black text-center">
                    ✉ Welcome Email
                  </div>
                  <div className="text-[8px] text-gray-600 text-center mt-0.5">
                    Delay: 1h
                  </div>
                </div>
                <div className="h-3 w-px bg-zinc-300 mx-auto my-1"></div>

                {/* Conditional Split Label */}
                {/* Conditional Split */}
                <div className="relative flex justify-center mb-2">
                  {/* Horizontal connector */}
                  <div className="absolute top-3 mx-auto h-3 w-px bg-zinc-300"></div>
                  <div className="absolute top-6 w-1/2 h-px bg-zinc-300"></div>

                  {/* Vertical connectors */}
                  <div className="absolute top-6 left-1/4 h-3 w-px bg-zinc-300"></div>
                  <div className="absolute top-6 left-3/4 h-3 w-px bg-zinc-300"></div>

                  <div className="text-[9px] text-gray-600 font-semibold mb-5">
                    IF: Email Clicked?
                  </div>
                </div>

                {/* Split Paths */}
                <div className="flex gap-2 px-1">
                  {/* YES Path */}
                  <div className="flex-1 flex flex-col items-center">
                    <div className="p-1 bg-blue-700/50 border border-blue-500 rounded text-[9px] font-bold text-white text-center w-full">
                      YES (45%)
                    </div>
                    <div className="w-px h-2 bg-zinc-300 my-1"></div>
                    <div className="p-1.5 bg-zinc-50 border border-zinc-200 rounded text-center text-[9px] w-full">
                      <span className="font-mono text-black">🏷 Tag: Hot</span>
                    </div>
                  </div>

                  {/* NO Path */}
                  <div className="flex-1 flex flex-col items-center">
                    <div className="p-1 bg-red-700/50 border border-red-500 rounded text-[9px] font-bold text-white text-center w-full">
                      NO (55%)
                    </div>
                    <div className="w-px h-2 bg-zinc-300 my-1"></div>
                    <div className="p-1.5 bg-zinc-50 border border-zinc-200 rounded text-center text-[9px] w-full">
                      <span className="font-mono text-black">📧 Nurture</span>
                      <div className="text-[7px] text-gray-600 mt-0.5">
                        3d delay
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeView === "stats" && (
              <div className="space-y-2">
                <div className="p-2 bg-orange-500/10 border border-orange-500/30 rounded">
                  <div className="text-[10px] font-semibold text-black mb-1">
                    Welcome Series
                  </div>
                  <div className="text-[9px] text-gray-600">2,847 active</div>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-orange-500 text-[10px]">●</span>
                    <span className="text-[8px] text-gray-600">Running</span>
                  </div>
                </div>

                <div className="p-2 bg-zinc-100 border border-zinc-200 rounded">
                  <div className="text-[10px] font-semibold text-gray-700 mb-1">
                    Onboarding Flow
                  </div>
                  <div className="text-[9px] text-gray-600">892 active</div>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-gray-400 text-[10px]">●</span>
                    <span className="text-[8px] text-gray-600">Paused</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-3">
                  <div className="p-2 bg-zinc-100 rounded">
                    <div className="text-[9px] text-gray-600">Total Sent</div>
                    <div className="text-sm font-bold text-black">48.2K</div>
                  </div>
                  <div className="p-2 bg-zinc-100 rounded">
                    <div className="text-[9px] text-gray-600">Success Rate</div>
                    <div className="text-sm font-bold text-green-600">97%</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
        </div>
      </div>
    </div>
  );
}

function AnalyticsVisualMobile() {
  const [activeView, setActiveView] = useState("overview");

  return (
    <div className="h-full p-2 bg-zinc-950">
      <div className="border border-gray-300 bg-white rounded-lg p-2 h-full shadow-xl">
        <div className="bg-gray-50 rounded border border-gray-200 p-2 h-full relative overflow-hidden flex flex-col">
          {/* Header with macOS-style controls */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-2">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-400 border border-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400 border border-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-400 border border-green-500"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="font-mono text-[8px] text-gray-600 flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse"></div>
                LIVE
              </div>
            </div>
          </div>

          {/* Toolbar */}
          <div className="flex items-center justify-between mb-2 pb-2 border-b border-gray-200">
            <button className="px-2 py-1 bg-gray-100 text-gray-900 text-[10px] rounded hover:bg-gray-200 transition-colors flex items-center gap-1">
              📅 30 Days
            </button>
            <div className="flex items-center gap-1">
              <span className="text-[8px] text-gray-600">
                <span className="text-gray-900 font-mono">47</span> campaigns
              </span>
              <span className="px-1.5 py-0.5 bg-orange-500/20 text-orange-600 text-[8px] rounded border border-orange-500/30">
                Live
              </span>
            </div>
          </div>

          {/* View Toggle */}
          <div className="flex gap-1 mb-2">
            <button
              onClick={() => setActiveView("overview")}
              className={`flex-1 px-2 py-1 rounded text-[10px] font-semibold transition-colors ${
                activeView === "overview"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveView("campaigns")}
              className={`flex-1 px-2 py-1 rounded text-[10px] font-semibold transition-colors ${
                activeView === "campaigns"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Campaigns
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-auto">
            {activeView === "overview" && (
              <div className="space-y-2">
                {/* Key Metrics */}
                <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-green-500/5 rounded-full blur-xl"></div>
                  <p className="text-[9px] text-gray-600 uppercase mb-1">
                    Open Rate
                  </p>
                  <div className="text-2xl font-bold text-gray-900">42.5%</div>
                  <span className="text-green-600 text-[10px] flex items-center mt-0.5">
                    <span className="mr-0.5">↑</span> +4.1% WoW
                  </span>
                  <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500 rounded-full"
                      style={{ width: "42.5%" }}
                    ></div>
                  </div>
                </div>

                <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-red-500/5 rounded-full blur-xl"></div>
                  <p className="text-[9px] text-gray-600 uppercase mb-1">
                    Conversions
                  </p>
                  <div className="text-2xl font-bold text-gray-900">1,489</div>
                  <span className="text-red-600 text-[10px] flex items-center mt-0.5">
                    <span className="mr-0.5">↓</span> -0.8% WoW
                  </span>
                  <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-red-500 rounded-full"
                      style={{ width: "68%" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            {activeView === "campaigns" && (
              <div className="space-y-2">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-[10px] text-gray-900 uppercase">
                    Active Campaigns
                  </h4>
                </div>

                {/* Campaign Cards */}
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-2">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="text-[11px] text-gray-900 font-semibold mb-1">
                        Welcome Sequence A
                      </div>
                      <div className="flex items-center gap-2 text-[9px] text-gray-600">
                        <span>
                          Opens: <span className="font-mono">68%</span>
                        </span>
                        <span>•</span>
                        <span>
                          Clicks: <span className="font-mono">15%</span>
                        </span>
                      </div>
                    </div>
                    <span className="px-1.5 py-0.5 bg-green-500/20 text-green-600 text-[8px] rounded border border-green-500/30 whitespace-nowrap">
                      Active
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-gray-600">Conversion</span>
                    <span className="text-orange-600 font-semibold">8.2%</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-2">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="text-[11px] text-gray-900 font-semibold mb-1">
                        Q4 Promo - Black Friday
                      </div>
                      <div className="flex items-center gap-2 text-[9px] text-gray-600">
                        <span>
                          Opens: <span className="font-mono">22%</span>
                        </span>
                        <span>•</span>
                        <span>
                          Clicks: <span className="font-mono">4%</span>
                        </span>
                      </div>
                    </div>
                    <span className="px-1.5 py-0.5 bg-yellow-500/20 text-yellow-600 text-[8px] rounded border border-yellow-500/30 whitespace-nowrap">
                      Paused
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-gray-600">Conversion</span>
                    <span className="text-orange-600 font-semibold">2.1%</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-2">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="text-[11px] text-gray-900 font-semibold mb-1">
                        Newsletter Weekly
                      </div>
                      <div className="flex items-center gap-2 text-[9px] text-gray-600">
                        <span>
                          Opens: <span className="font-mono">35%</span>
                        </span>
                        <span>•</span>
                        <span>
                          Clicks: <span className="font-mono">8%</span>
                        </span>
                      </div>
                    </div>
                    <span className="px-1.5 py-0.5 bg-green-500/20 text-green-600 text-[8px] rounded border border-green-500/30 whitespace-nowrap">
                      Active
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-gray-600">Conversion</span>
                    <span className="text-orange-600 font-semibold">4.7%</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
