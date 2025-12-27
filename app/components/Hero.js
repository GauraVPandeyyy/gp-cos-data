"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
// import useLiveDashboard from "../hooks/useLiveDashboard"; // Agar ye use nahi ho raha to hata dein
import VerticalCarouselSinSec from "./VerticalCarouselSinSec";
import Modal from "../components/ui/Modal";
import StartFreeForm from "../components/forms/StartFreeForm";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ isLoaderComplete }) {
  const titleRef = useRef(null);
  const underlineRef = useRef(null);
  const hasAnimated = useRef(false);
  const [titleReady, setTitleReady] = useState(false);

  useEffect(() => {
    if (!isLoaderComplete || hasAnimated.current) return;

    hasAnimated.current = true;
    const heroTitle = titleRef.current;
    gsap.set(heroTitle, { opacity: 0 });

    const lines = heroTitle.querySelectorAll(".hero-line");
    const chars = [];

    lines.forEach((line) => {
      const text = line.dataset.text || line.textContent;
      const hasGradient = line.classList.contains("bg-clip-text");
      const gradientClasses = hasGradient
        ? Array.from(line.classList).filter(
            (cls) =>
              cls.startsWith("bg-") ||
              cls.startsWith("from-") ||
              cls.startsWith("to-") ||
              cls === "text-transparent" ||
              cls === "bg-clip-text"
          )
        : [];

      line.innerHTML = "";

      text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.display = "inline-block";
        if (hasGradient) {
          span.classList.add(...gradientClasses);
        }
        line.appendChild(span);
        chars.push(span);
      });
    });

    gsap.set(heroTitle, { opacity: 1 });
    gsap.set(chars, { opacity: 0, y: 18, filter: "blur(6px)" });

    const tl = gsap.timeline();
    tl.to(chars, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      stagger: 0.05,
      duration: 1.05,
      ease: "power3.out",
      delay: 0.3,
    })
      .to(
        underlineRef.current,
        {
          width: 180,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .to(
        ".hero-stagger",
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
        },
        "-=0.8"
      );

    gsap.to(".animate-pulse-slow", {
      y: 60,
      scrollTrigger: {
        trigger: "header",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    setTitleReady(true);
  }, [isLoaderComplete]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <StartFreeForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>

      {/* Header Wrapper: Isme se Carousel HATA diya hai aur overflow fix kiya hai */}
      <header className="relative min-h-screen flex flex-col items-center justify-center pt-24 lg:pt-[8vw]">
        {/* Background Effects ko alag div me rakha hai jo overflow hidden hai */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] grid-bg"></div>
          <div className="absolute top-[23%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange opacity-[0.03] blur-[120px] rounded-full animate-pulse-slow z-10"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-[7px] md:px-6 2xl:px-[1.67vw] text-center z-10 min-w-0 pb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-border bg-brand-surface/50 mb-8 hero-stagger opacity-0 backdrop-blur-sm">
            {/* Badge content */}
          </div>

          <h1
            ref={titleRef}
            id="hero-title"
            className="text-[40px] sm:text-[60px] md:text-7xl lg:text-8xl xl:text-[7rem] font-bold leading-[1.05] mb-6 text-center"
          >
            {!titleReady ? (
              <>
                <span
                  className="hero-line tracking-wide block opacity-0"
                  style={{ fontFamily: "var(--font-funnel-display)" }}
                >
                  THE INTELLIGENT
                </span>
                <span
                  className="hero-line tracking-normal block text-transparent bg-clip-text bg-linear-to-r from-brand-orange to-amber-600 opacity-0"
                  style={{ fontFamily: "var(--font-funnel-display)" }}
                >
                  EMAIL ENGINE
                </span>
              </>
            ) : (
              <>
                <span
                  className="hero-line tracking-wide block"
                  data-text="THE INTELLIGENT"
                >
                  THE INTELLIGENT
                </span>
                <span
                  className="hero-line tracking-normal block text-transparent bg-clip-text bg-linear-to-r from-brand-orange to-amber-600"
                  data-text="EMAIL ENGINE"
                >
                  EMAIL ENGINE
                </span>
              </>
            )}
          </h1>

          <div
            ref={underlineRef}
            id="hero-underline"
            className="mx-auto my-6 h-px w-0 xl:w-3xl bg-brand-orange rounded-full relative"
          ></div>

          <p className="bottom-text text-md sm:text-lg lg:pt-2 md:text-xl xl:text-2xl text-brand-textMuted max-w-2xl mx-auto mb-14 hero-stagger font-light leading-relaxed text-white">
            Send emails with precision. Optimize campaigns with clarity. Built
            for agencies, SaaS, and high-volume teams who need marketing power
            without the complexity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 xl:gap-8 hero-stagger opacity-0">
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-shine magnetic-btn group relative px-8 py-4 xl:px-12 xl:py-6 bg-brand-orange text-black font-semibold text-lg xl:text-xl transition-colors rounded-md duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Early Access
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <a
              href="#how-it-works"
              className="btn-swipe px-8 py-4 xl:px-12 xl:py-6 border border-brand-border text-brand-textMain font-mono text-sm xl:text-lg rounded-md shadow-sm bg-white/10 transition-colors"
            >
              <span>See How It Works</span>
            </a>
          </div>
        </div>
        <VerticalCarouselSinSec />
      </header>

      {/* Carousel ab Header ke neeche hai, sticky ab sahi kaam karega */}
    </>
  );
}
