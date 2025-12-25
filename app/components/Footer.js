// components/Footer.js
import { Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-brand-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <svg width="64" height="64" viewBox="-100 -100 800 500" className="transition-all">
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
                  <linearGradient id="polyGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#ec8947" />
                    <stop offset="100%" stopColor="#ffb318" stopOpacity="1.0" />
                  </linearGradient>
                </defs>

                <filter id="polyGlow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="60" result="blur" />
                  <feFlood floodColor="#ff9c1c" floodOpacity="0.9" result="color" />
                  <feComposite in="color" in2="blur" operator="in" result="glow" />
                  <feMerge>
                    <feMergeNode in="glow" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <polygon points="50 50 150 275 220 150" fill="url(#polyGradient)" filter="url(#polyGlow)"/>
                <polygon
                  points="300 50 180 260 300 180 420 260"
                  fill="url(#polyGradient)"
                  filter="url(#polyGlow)"
                />
                <polygon points="380 150 450 275 550 50" fill="url(#polyGradient)" filter="url(#polyGlow)"/>
              </svg>
              <span className="font-bold text-2xl text-white -ml-4 tracking-tight" style={{ fontFamily: "var(--font-funnel-display)" }}>Inwren</span>
            </a>
            <p className="text-brand-textMuted max-w-sm mb-6">
              The intelligent email platform for teams who value growth over guesswork.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-brand-textMuted hover:text-brand-orange transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-textMuted hover:text-brand-orange transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-textMuted hover:text-brand-orange transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-brand-textMuted">
              <li>
                <a href="#" className="hover:text-brand-orange transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-orange transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-orange transition-colors">
                  Developers
                </a>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-500">System Normal</span>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-brand-textMuted">
              <li>
                <a href="#" className="hover:text-brand-orange transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-orange transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-orange transition-colors">
                  Email Guide
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-textMuted font-mono">
          <p>&copy; 2024 INWREN Inc. All rights reserved.</p>
          <p>Bengaluru • San Francisco</p>
        </div>
      </div>
    </footer>
  );
}