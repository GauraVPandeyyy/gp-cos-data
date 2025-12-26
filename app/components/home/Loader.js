"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function Loader({ onComplete }) {
  const leftCrownRef = useRef(null);
  const middleCrownRef = useRef(null);
  const rightCrownRef = useRef(null);
  const blockerRef = useRef(null);
  const loaderRef = useRef(null);
  const [glowOpacity, setGlowOpacity] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();

    // Create a proxy object to animate
    const glowProxy = { opacity: 0 };

    tl.fromTo(leftCrownRef.current, {
      y: 225,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
    }, 1)

    .fromTo(middleCrownRef.current, {
      y: 130,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
    }, 0)

    .fromTo(rightCrownRef.current, {
      y: 225,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
    }, 1)

    .to(blockerRef.current, {
      opacity: 0,
      duration: 0,
      ease: "power2.inOut",
    }, 1)

    .to(glowProxy, {
      opacity: 0.9,
      duration: 0.5,
      ease: "power2.out",
      onUpdate: () => {
        setGlowOpacity(glowProxy.opacity);
      }
    })

    // Fade out the entire loader and call onComplete
    .to(loaderRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: () => onComplete?.(),
    });

  }, [onComplete]);

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 bg-black z-[100] flex justify-center items-center w-full h-full"
    >
      <svg
        width="200"
        height="125"
        viewBox="-100 -100 800 500"
        className="max-w-full h-auto"
      >
        <defs>
          <LinearGradient />
          <PolygonGlowFilter glowOpacity={glowOpacity}/>
        </defs>

        {/* Left Crown */}
        <polygon
          ref={leftCrownRef}
          points="50 50 150 275 220 150"
          fill="url(#polyGradient)"
          filter="url(#polyGlow)"
          style={{ opacity: 0, transform: 'translateY(225px)' }}
        />

        {/* Middle Crown */}
        <polygon
          ref={middleCrownRef}
          points="300 50 180 260 300 180 420 260"
          fill="url(#polyGradient)"
          filter="url(#polyGlow)"
          style={{ opacity: 0, transform: 'translateY(130px)' }}
        />

        {/* Right Crown */}
        <polygon
          ref={rightCrownRef}
          points="380 150 450 275 550 50"
          fill="url(#polyGradient)"
          filter="url(#polyGlow)"
          style={{ opacity: 0, transform: 'translateY(225px)' }}
        />

        {/* Middle Crown Blocker */}
        <polygon
          ref={blockerRef}
          points="-30 400 300 180 630 400"
          fill="#000000"
        />

      </svg>
    </div>
  );
}

export default Loader;

function LinearGradient() {
  return (
    <linearGradient id="polyGradient" x1="0%" y1="100%" x2="0%" y2="0%">
      {/* bottom */}
      <stop offset="0%" stopColor="#ec8947" />
      {/* top */}
      <stop offset="100%" stopColor="#ffb318" stopOpacity="1.0" />
    </linearGradient>
  );
}

function PolygonGlowFilter({glowOpacity}) {
  return (
    <filter id="polyGlow" x="-100%" y="-100%" width="300%" height="300%">
      {/* Blur the shape */}
      <feGaussianBlur in="SourceGraphic" stdDeviation="80" result="blur" />

      {/* Glow color */}
      <feFlood floodColor="#ff9c1c" floodOpacity={glowOpacity} result="color" />

      <feComposite in="color" in2="blur" operator="in" result="glow" />

      {/* Layer glow + original shape */}
      <feMerge>
        <feMergeNode in="glow" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  );
}