// // components/home/FeaturesStack.js
// 'use client';

// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import FeaturePanel from './FeaturePanel';

// // Register GSAP plugin
// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const featuresData = [
//   {
//     icon: 'shield-check',
//     title: 'Deliverability Intelligence',
//     description:
//       'Stop guessing. Inwren runs every email through a full stack of AI guardrails that predict problems before they happen. You get clarity, confidence, and the highest chance of hitting the inbox.',
//     features: [
//       'Spam-trigger and content risk analysis',
//       'Link + domain reputation scoring',
//       'Layout and HTML structure validation',
//       'Authentication alignment (SPF, DKIM, DMARC)',
//       '<strong class="text-brand-orange">Inbox Score™</strong> — spam-folder probability with actionable fixes',
//       'Readability, tone, and intent analysis',
//     ],
//     visual: (
//       <div className="glass-card w-full max-w-lg aspect-square rounded-3xl p-8 flex flex-col justify-center items-center relative overflow-hidden">
//         <div className="absolute inset-0 bg-brand-orange/5 blur-3xl"></div>
//         <div className="text-6xl font-bold text-white mb-2">99.2%</div>
//         <div className="text-brand-textMuted font-mono text-sm uppercase tracking-widest">
//           Inbox Rate
//         </div>
//         <div className="flex items-end gap-2 h-32 mt-8">
//           <div className="w-4 bg-brand-border h-[40%] rounded-t"></div>
//           <div className="w-4 bg-brand-border h-[60%] rounded-t"></div>
//           <div className="w-4 bg-brand-border h-[50%] rounded-t"></div>
//           <div className="w-4 bg-brand-orange h-[90%] rounded-t shadow-[0_0_15px_#FF9F1C]"></div>
//           <div className="w-4 bg-brand-border h-[70%] rounded-t"></div>
//         </div>
//       </div>
//     ),
//     order: 'text-first',
//     gradient: 'bg-gradient-to-br from-[#111] to-[#050505]',
//     href: 'deliverability'
//   },
//   {
//     icon: 'shield',
//     title: 'Reputation & Compliance Protection',
//     description:
//       'Your reputation is your power. Inwren protects it automatically, keeping your domain, IP, and compliance posture healthy at all times.',
//     features: [
//       'Automated IP warm-up and controlled ramping',
//       'Smart throttling when risk spikes',
//       'Blocklist + reputation monitoring across providers',
//       'Complaint + bounce intelligence with real-time signals',
//       'Built-in compliance guardrails for safer sending',
//     ],
//     visual: (
//       <div className="glass-card w-full max-w-lg aspect-4/3 rounded-3xl p-8 relative overflow-hidden flex items-center justify-center">
//         <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-orange/20 blur-[80px] rounded-full"></div>
//         <div className="space-y-4 w-full">
//           <div className="flex items-center justify-between p-4 rounded-lg bg-black/40 border border-brand-orange/30">
//             <div className="flex items-center gap-3">
//               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
//               <span className="font-mono text-sm">IP_WARMUP_STATUS</span>
//             </div>
//             <span className="text-brand-orange font-bold">ACTIVE</span>
//           </div>
//           <div className="flex items-center justify-between p-4 rounded-lg bg-black/40 border border-white/5">
//             <span className="font-mono text-sm text-brand-textMuted">THROUGHPUT</span>
//             <span className="text-white font-mono">4,200/min</span>
//           </div>
//           <div className="flex items-center justify-between p-4 rounded-lg bg-black/40 border border-white/5">
//             <span className="font-mono text-sm text-brand-textMuted">REPUTATION</span>
//             <span className="text-green-400 font-mono">HIGH</span>
//           </div>
//         </div>
//       </div>
//     ),
//     order: 'visual-first',
//     gradient: 'bg-gradient-to-br from-[#1a0f00] to-[#050505]',
//     href: 'reputation'
//   },
//   {
//     icon: 'workflow',
//     title: 'Journey & Engagement Intelligence',
//     description:
//       'See how people actually flow through your emails — and let AI optimize every step. Inwren reveals behavior, predictively adjusts timing, and helps you build journeys that convert.',
//     features: [
//       'Drop-off and engagement pattern detection',
//       'Intelligent journey improvement suggestions',
//       'Behavior-triggered automation',
//       'Dynamic send-time adjustments',
//       'Engagement heatmaps and clickstream insights',
//       'Real-time delivery + latency analytics',
//     ],
//     visual: (
//       <div className="relative w-full max-w-lg">
//         <div className="glass-card p-6 rounded-2xl mb-4 transform -rotate-2 translate-x-4 border-l-4 border-l-brand-orange">
//           <div className="text-xs text-brand-textMuted uppercase mb-1">Click Rate</div>
//           <div className="text-3xl font-bold text-white">
//             4.8%<span className="text-sm text-green-500 ml-2">↑ 12%</span>
//           </div>
//         </div>
//         <div className="glass-card p-6 rounded-2xl transform rotate-2 -translate-x-4 z-10 relative bg-[#111]">
//           <div className="text-xs text-brand-textMuted uppercase mb-1">Open Rate</div>
//           <div className="text-3xl font-bold text-white">
//             42.5%<span className="text-sm text-green-500 ml-2">↑ 5%</span>
//           </div>
//         </div>
//       </div>
//     ),
//     order: 'text-first',
//     gradient: 'bg-gradient-to-br from-[#050a14] to-[#020202]',
//     href: 'journey'
//   }
// ];

// export default function FeaturesStack() {
//   const panelRefs = useRef([]);
//   const progressDotsRef = useRef([]);

//   useEffect(() => {
//     // Set up parallax effect for each panel visual
//     panelRefs.current.forEach((panel, index) => {
//       if (!panel) return;

//       const visual = panel.querySelector('.panel-visual');
//       const progressDot = progressDotsRef.current[index];

//       if (visual) {
//         // Parallax animation
//         gsap.to(visual, {
//           y: -100,
//           ease: 'none',
//           scrollTrigger: {
//             trigger: panel,
//             start: 'top bottom',
//             end: 'bottom top',
//             scrub: 1,
//           }
//         });
//       }

//       // Progress dot animation
//       if (progressDot) {
//         ScrollTrigger.create({
//           trigger: panel,
//           start: 'top center',
//           end: 'bottom center',
//           onEnter: () => {
//             progressDotsRef.current.forEach(dot => {
//               if (dot) dot.classList.remove('bg-brand-orange', 'scale-125');
//               if (dot) dot.classList.add('bg-brand-border');
//             });
//             progressDot.classList.remove('bg-brand-border');
//             progressDot.classList.add('bg-brand-orange', 'scale-125');
//           },
//           onEnterBack: () => {
//             progressDotsRef.current.forEach(dot => {
//               if (dot) dot.classList.remove('bg-brand-orange', 'scale-125');
//               if (dot) dot.classList.add('bg-brand-border');
//             });
//             progressDot.classList.remove('bg-brand-border');
//             progressDot.classList.add('bg-brand-orange', 'scale-125');
//           }
//         });
//       }
//     });

//     // Show/hide progress dots based on features section visibility
//     const progressContainer = document.getElementById('feature-progress');
//     if (progressContainer) {
//       ScrollTrigger.create({
//         trigger: '#features',
//         start: 'top center',
//         end: 'bottom center',
//         onEnter: () => gsap.to(progressContainer, { opacity: 1, duration: 0.3 }),
//         onLeave: () => gsap.to(progressContainer, { opacity: 0, duration: 0.3 }),
//         onEnterBack: () => gsap.to(progressContainer, { opacity: 1, duration: 0.3 }),
//         onLeaveBack: () => gsap.to(progressContainer, { opacity: 0, duration: 0.3 })
//       });
//     }

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <section id="features" className="bg-brand-black relative">
//       <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-orange/30 to-transparent"></div>

//       {/* Header */}
//       <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 text-center relative z-20">
//         <p className="text-xs font-mono text-brand-orange uppercase tracking-widest mb-3">
//           Platform Capabilities
//         </p>
//         <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
//           Everything You Need to Grow
//         </h2>
//         <p className="text-brand-textMuted max-w-2xl mx-auto text-lg">
//           From inbox placement to real-time engagement and developer-grade delivery,
//           Inwren gives you a complete growth engine — not just an email tool.
//         </p>
//       </div>

//       {/* Progress Dots */}
//       <div
//         id="feature-progress"
//         className="hidden md:flex fixed top-24 left-1/2 -translate-x-1/2 z-40 gap-3 opacity-0"
//       >
//         {featuresData.map((_, i) => (
//           <span
//             key={i}
//             ref={(el) => (progressDotsRef.current[i] = el)}
//             className="w-2.5 h-2.5 rounded-full bg-brand-border progress-dot transition-all duration-300"
//           ></span>
//         ))}
//       </div>

//       {/* Panels Container */}
//       <div className="space-y-0">
//         {featuresData.map((feature, index) => (
//           <div
//             key={index}
//             ref={(el) => (panelRefs.current[index] = el)}
//           >
//             <FeaturePanel {...feature} />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// components/home/FeaturesStack.js
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import FeaturePanel from './FeaturePanel';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const featuresData = [
  {
    icon: 'shield-check',
    title: 'Deliverability Intelligence',
    description:
      'Stop guessing. Inwren runs every email through a full stack of AI guardrails that predict problems before they happen. You get clarity, confidence, and the highest chance of hitting the inbox.',
    features: [
      'Spam-trigger and content risk analysis',
      'Link + domain reputation scoring',
      'Layout and HTML structure validation',
      'Authentication alignment (SPF, DKIM, DMARC)',
      '<strong class="text-brand-orange">Inbox Score™</strong> — spam-folder probability with actionable fixes',
      'Readability, tone, and intent analysis',
    ],
    visual: (
      <div className="glass-card w-[73%] sm:w-[50%] md:w-[60%] aspect-square rounded-3xl p-1 md:p-4 flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-orange/5 blur-3xl"></div>
        <div className="text-4xl md:text-6xl font-bold text-white mb-2">99.2%</div>
        <div className="text-brand-textMuted font-mono text-sm uppercase tracking-widest">
          Inbox Rate
        </div>
        <div className="flex items-end gap-2 h-24 md:h-32 mt-8">
          <div className="w-4 bg-brand-border h-[40%] rounded-t"></div>
          <div className="w-4 bg-brand-border h-[60%] rounded-t"></div>
          <div className="w-4 bg-brand-border h-[50%] rounded-t"></div>
          <div className="w-4 bg-brand-orange h-[90%] rounded-t shadow-[0_0_15px_#FF9F1C]"></div>
          <div className="w-4 bg-brand-border h-[70%] rounded-t"></div>
        </div>
      </div>
    ),
    order: 'text-first',
    gradient: 'bg-gradient-to-br from-[#111] to-[#050505]',
    href: 'deliverability'
  },
  {
    icon: 'shield',
    title: 'Reputation & Compliance Protection',
    description:
      'Your reputation is your power. Inwren protects it automatically, keeping your domain, IP, and compliance posture healthy at all times.',
    features: [
      'Automated IP warm-up and controlled ramping',
      'Smart throttling when risk spikes',
      'Blocklist + reputation monitoring across providers',
      'Complaint + bounce intelligence with real-time signals',
      'Built-in compliance guardrails for safer sending',
    ],
    visual: (
      <div className="glass-card w-full max-w-sm aspect-4/3 rounded-3xl p-6 relative overflow-hidden flex items-center justify-center">
        <div className="absolute -right-20 -top-20 w-56 h-56 md:w-64 md:h-64 bg-brand-orange/20 blur-[80px] rounded-full"></div>
        <div className="space-y-4 w-full">
          <div className="flex items-center justify-between p-4 rounded-lg bg-black/40 border border-brand-orange/30">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="font-mono text-sm">IP_WARMUP_STATUS</span>
            </div>
            <span className="text-brand-orange font-bold">ACTIVE</span>
          </div>
          <div className="flex items-center justify-between p-4 rounded-lg bg-black/40 border border-white/5">
            <span className="font-mono text-sm text-brand-textMuted">THROUGHPUT</span>
            <span className="text-white font-mono">4,200/min</span>
          </div>
          <div className="flex items-center justify-between p-4 rounded-lg bg-black/40 border border-white/5">
            <span className="font-mono text-sm text-brand-textMuted">REPUTATION</span>
            <span className="text-green-400 font-mono">HIGH</span>
          </div>
        </div>
      </div>
    ),
    order: 'visual-first',
    gradient: 'bg-gradient-to-br from-[#1a0f00] to-[#050505]',
    href: 'reputation'
  },
  {
    icon: 'workflow',
    title: 'Journey & Engagement Intelligence',
    description:
      'See how people actually flow through your emails — and let AI optimize every step. Inwren reveals behavior, predictively adjusts timing, and helps you build journeys that convert.',
    features: [
      'Drop-off and engagement pattern detection',
      'Intelligent journey improvement suggestions',
      'Behavior-triggered automation',
      'Dynamic send-time adjustments',
      'Engagement heatmaps and clickstream insights',
      'Real-time delivery + latency analytics',
    ],
    visual: (
      <div className="relative w-full max-w-sm">
        <div className="glass-card p-4 rounded-2xl mb-4 transform -rotate-2 translate-x-4 border-l-4 border-l-brand-orange">
          <div className="text-xs text-brand-textMuted uppercase mb-1">Click Rate</div>
          <div className="text-3xl font-bold text-white">
            4.8%<span className="text-sm text-green-500 ml-2">↑ 12%</span>
          </div>
        </div>
        <div className="glass-card p-4 rounded-2xl transform rotate-2 -translate-x-4 z-10 relative bg-[#111]">
          <div className="text-xs text-brand-textMuted uppercase mb-1">Open Rate</div>
          <div className="text-3xl font-bold text-white">
            42.5%<span className="text-sm text-green-500 ml-2">↑ 5%</span>
          </div>
        </div>
      </div>
    ),
    order: 'text-first',
    gradient: 'bg-gradient-to-br from-[#050a14] to-[#020202]',
    href: 'journey'
  }
];

export default function FeaturesStack() {
  const panelRefs = useRef([]);
  const progressDotsRef = useRef([]);

  useEffect(() => {
    // Set up parallax effect for each panel visual
    panelRefs.current.forEach((panel, index) => {
      if (!panel) return;

      const visual = panel.querySelector('.panel-visual');
      const progressDot = progressDotsRef.current[index];

      // Pin the panel during scroll (but not the last one)
      if (index < panelRefs.current.length - 1) {
        // const isMobile = window.innerWidth < 768;
        ScrollTrigger.create({
          trigger: panel,
          start: 'bottom bottom',
          end: '+=100%',
          pin: true,
          pinSpacing: false,
          scrub: 0,
        });
      }

      if (visual) {
        // Parallax animation
        gsap.to(visual, {
          y: -100,
          ease: 'none',
          scrollTrigger: {
            trigger: panel,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          }
        });
      }

      // Progress dot animation
      if (progressDot) {
        ScrollTrigger.create({
          trigger: panel,
          start: 'top 20%',
          end: 'bottom center',
          onEnter: () => {
            progressDotsRef.current.forEach(dot => {
              if (dot) dot.classList.remove('bg-brand-orange', 'scale-125');
              if (dot) dot.classList.add('bg-brand-border');
            });
            progressDot.classList.remove('bg-brand-border');
            progressDot.classList.add('bg-brand-orange', 'scale-125');
          },
          onEnterBack: () => {
            progressDotsRef.current.forEach(dot => {
              if (dot) dot.classList.remove('bg-brand-orange', 'scale-125');
              if (dot) dot.classList.add('bg-brand-border');
            });
            progressDot.classList.remove('bg-brand-border');
            progressDot.classList.add('bg-brand-orange', 'scale-125');
          }
        });
      }
    });

    // Show/hide progress dots based on features section visibility
    // const progressContainer = document.getElementById('feature-progress');
    // if (progressContainer) {
    //   ScrollTrigger.create({
    //     trigger: '#features',
    //     start: 'top center',
    //     end: 'bottom center',
    //     onEnter: () => gsap.to(progressContainer, { opacity: 1, duration: 0.3 }),
    //     onLeave: () => gsap.to(progressContainer, { opacity: 0, duration: 0.3 }),
    //     onEnterBack: () => gsap.to(progressContainer, { opacity: 1, duration: 0.3 }),
    //     onLeaveBack: () => gsap.to(progressContainer, { opacity: 0, duration: 0.3 })
    //   });
    // }

     // Show/hide progress dots based on first panel visibility
    const progressContainer = document.getElementById('feature-progress');
    const firstPanel = panelRefs.current[0];
    const lastPanel = panelRefs.current[panelRefs.current.length - 1];
    if (progressContainer && firstPanel && lastPanel) {
      ScrollTrigger.create({
        trigger: firstPanel,
        start: 'top 20%',
        endTrigger: lastPanel,
        end: 'bottom center',
        onEnter: () => gsap.to(progressContainer, { opacity: 1, duration: 0.3 }),
        onLeave: () => gsap.to(progressContainer, { opacity: 0, duration: 0.3 }),
        onEnterBack: () => gsap.to(progressContainer, { opacity: 1, duration: 0.3 }),
        onLeaveBack: () => gsap.to(progressContainer, { opacity: 0, duration: 0.3 })
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="features" className="bg-brand-black relative">
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-orange/30 to-transparent"></div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 text-center relative z-20">
        <p className="text-xs font-mono text-brand-orange uppercase tracking-widest mb-3">
          Platform Capabilities
        </p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Everything You Need to Grow
        </h2>
        <p className="text-brand-textMuted max-w-2xl mx-auto text-lg">
          From inbox placement to real-time engagement and developer-grade delivery,
          Inwren gives you a complete growth engine — not just an email tool.
        </p>
      </div>

      {/* Progress Dots */}
      <div
        id="feature-progress"
        className="hidden md:flex fixed top-1/2 right-6 -translate-y-1/2 z-40 gap-4 flex-col opacity-0"
      >
        {featuresData.map((_, i) => (
          <span
            key={i}
            ref={(el) => (progressDotsRef.current[i] = el)}
            className="w-2.5 h-2.5 rounded-full bg-brand-border progress-dot transition-all duration-300"
          ></span>
        ))}
      </div>

      {/* Panels Container */}
      <div className="space-y-0">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            ref={(el) => (panelRefs.current[index] = el)}
          >
            <FeaturePanel {...feature} />
          </div>
        ))}
      </div>
    </section>
  );
}