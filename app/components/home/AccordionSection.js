import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import * as LucideIcons from "lucide-react";
import IntelligentFlowDiagram from "../flows/IntelligentFlowDiagram";

function LoadingDots() {
  return (
    <div className="inline-flex items-center gap-1">
      <div className="loader"></div>
    </div>
  );
}

function StaticNodeMap() {
  const nodeData = [
    {
      label: "Landing Page",
      sublabel: "First Touch",
      color: "bg-blue-100",
      textColor: "text-blue-700",
      borderColor: "border-blue-200",
    },
    {
      label: "Signup",
      sublabel: "Account Created",
      color: "bg-purple-100",
      textColor: "text-purple-700",
      borderColor: "border-purple-200",
    },
    {
      label: "Onboarding",
      sublabel: "Profile Setup",
      color: "bg-indigo-100",
      textColor: "text-indigo-700",
      borderColor: "border-indigo-200",
    },
    {
      label: "Activation",
      sublabel: "First Action",
      color: "bg-teal-100",
      textColor: "text-teal-700",
      borderColor: "border-teal-200",
    },
    {
      label: "Engagement",
      sublabel: "Regular Usage",
      color: "bg-green-100",
      textColor: "text-green-700",
      borderColor: "border-green-200",
    },
    {
      label: "Retention",
      sublabel: "Week 2+",
      color: "bg-emerald-100",
      textColor: "text-emerald-700",
      borderColor: "border-emerald-200",
    },
    {
      label: "Advocacy",
      sublabel: "Referrals",
      color: "bg-amber-100",
      textColor: "text-amber-700",
      borderColor: "border-amber-200",
    },
  ];

  return (
    <div className="py-6 px-8">
      <div className="flex items-center justify-center gap-3 mb-2">
        {nodeData.slice(0, 4).map((node, i) => (
          <div key={i} className="flex items-center">
            <div className="flex flex-col items-center gap-2">
              <div
                className={`w-20 h-20 ${node.color} ${node.borderColor} border-2 rounded-xl flex flex-col items-center justify-center shadow-sm px-2 py-2`}
              >
                <div className="text-center mb-1">
                  <div
                    className={`text-[10px] ${node.textColor} whitespace-nowrap font-semibold leading-tight`}
                  >
                    {node.label}
                  </div>
                  <div
                    className={`text-[8px] ${node.textColor} opacity-60 whitespace-nowrap`}
                  >
                    {node.sublabel}
                  </div>
                </div>
                <div className={`text-lg font-bold ${node.textColor}`}>
                  {i + 1}
                </div>
              </div>
            </div>
            {i < 3 && (
              <div className="flex flex-col items-center mx-2">
                <svg width="24" height="2">
                  <line
                    x1="0"
                    y1="1"
                    x2="24"
                    y2="1"
                    stroke="#9ca3af"
                    strokeWidth="2"
                  />
                  <polygon points="24,1 20,0 20,2" fill="#9ca3af" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Connecting path from box 4 to box 5 */}
      <div className="flex justify-center mb-2">
        <div className="relative w-full max-w-full h-[60px] overflow-x-auto">
          <svg width="500" height="60" className="absolute top-0 left-0">
            {/* Vertical line down from box 4 */}
            <line
              x1="450"
              y1="0"
              x2="450"
              y2="30"
              stroke="#9ca3af"
              strokeWidth="2"
            />
            {/* Horizontal line across */}
            <line
              x1="450"
              y1="30"
              x2="120"
              y2="30"
              stroke="#9ca3af"
              strokeWidth="2"
            />
            {/* Vertical line up to box 5 */}
            <line
              x1="120"
              y1="30"
              x2="120"
              y2="60"
              stroke="#9ca3af"
              strokeWidth="2"
            />
            {/* Arrow pointing down at box 5 */}
            <polygon points="10,60 8,56 12,56" fill="#9ca3af" />
          </svg>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3">
        {nodeData.slice(4).map((node, i) => (
          <div key={i + 4} className="flex items-center">
            <div className="flex flex-col items-center gap-2">
              <div
                className={`w-20 h-20 ${node.color} ${node.borderColor} border-2 rounded-xl flex flex-col items-center justify-center shadow-sm px-2 py-2`}
              >
                <div className="text-center mb-1">
                  <div
                    className={`text-[10px] ${node.textColor} whitespace-nowrap font-semibold leading-tight`}
                  >
                    {node.label}
                  </div>
                  <div
                    className={`text-[8px] ${node.textColor} opacity-60 whitespace-nowrap`}
                  >
                    {node.sublabel}
                  </div>
                </div>
                <div className={`text-lg font-bold ${node.textColor}`}>
                  {i + 5}
                </div>
              </div>
            </div>
            {i < 2 && (
              <div className="flex flex-col items-center mx-2">
                <svg width="24" height="2">
                  <line
                    x1="0"
                    y1="1"
                    x2="24"
                    y2="1"
                    stroke="#9ca3af"
                    strokeWidth="2"
                  />
                  <polygon points="24,1 20,0 20,2" fill="#9ca3af" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function TypingText({ text, speed = 25, onComplete }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const hasCalledComplete = useRef(false);

  // Handle both string and array - filter out standalone '\n' elements
  const textArray = Array.isArray(text)
    ? text.filter((t) => t !== "\n")
    : [text];
  const fullText = textArray.join("\n");

  useEffect(() => {
    setDisplayedText("");
    setIsComplete(false);
    hasCalledComplete.current = false;
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
        if (onComplete && !hasCalledComplete.current) {
          hasCalledComplete.current = true;
          onComplete();
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [fullText, speed]);

  return (
    <span className="whitespace-pre-wrap">
      {displayedText}
      {!isComplete && <span className="typing-cursor">|</span>}
    </span>
  );
}

function AccordionItem({ feature, isOpen, onToggle }) {
  const [showOutput, setShowOutput] = useState({});
  const [startTyping, setStartTyping] = useState({});
  const [showNodeMap, setShowNodeMap] = useState(false);
  const IconComponent = LucideIcons[feature.icon] || LucideIcons.Circle;

  useEffect(() => {
    if (isOpen) {
      // Reset all outputs when accordion opens
      const newShowOutput = {};
      const newStartTyping = {};
      setShowNodeMap(false);

      feature.technicalProof.lines.forEach((line, idx) => {
        if (line.type === "output" || line.type === "metric") {
          newShowOutput[idx] = false;
          newStartTyping[idx] = false;

          // Show loader for 1.5 seconds, then start typing
          setTimeout(() => {
            setShowOutput((prev) => ({ ...prev, [idx]: true }));
            setStartTyping((prev) => ({ ...prev, [idx]: true }));
          }, 1500);
        } else {
          newShowOutput[idx] = true;
          newStartTyping[idx] = true;
        }
      });

      setShowOutput(newShowOutput);
      setStartTyping(newStartTyping);
    }
  }, [isOpen, feature.technicalProof.lines]);

  return (
    <div className="border-b border-brand-border last:border-b-0">
      {/* Accordion Header */}
      <button
        onClick={onToggle}
        className={`w-full px-2 md:px-6 py-5 flex items-center justify-between gap-2 md:gap-4
  transition-all duration-300 ease-in-out
  hover:bg-[linear-gradient(to_bottom,rgba(255,159,28,0.10),rgba(255,159,28,0.08))]
  ${
    isOpen
      ? "bg-[linear-gradient(to_bottom,rgba(255,159,28,0.10),rgba(255,159,28,0.08))]"
      : ""
  }`}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2 md:gap-4 flex-1 text-left">
          {/* Icon */}
          <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center">
            <IconComponent className="w-6 h-6 text-brand-orange" />
          </div>

          {/* Headline & Tag */}
          <div className="flex-1">
            <div className="flex items-center gap-2 md:gap-3 mb-1">
              <h3 className="text-[16px] leading-5 md:leading-none md:text-lg font-semibold text-white">
                {feature.headline}
              </h3>
              <span className="px-1 md:px-2 py-0.5 text-xs font-mono bg-brand-orange/10 text-brand-orange rounded border border-brand-orange/20">
                {feature.tag}
              </span>
            </div>
            {!isOpen && (
              <p className="text-sm text-brand-textMuted line-clamp-1">
                {feature.body}
              </p>
            )}
          </div>
        </div>

        {/* Chevron */}
        <ChevronDown
          className="w-5 h-5 text-brand-textMuted shrink-0 transition-transform duration-300"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transformOrigin: "center",
          }}
        />
      </button>

      {/* Accordion Content */}
      <div
        className={`transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100 block" : "opacity-0 hidden"
        }`}
      >
        {/* ///////////// */}
        <div
          className={`px-2 pb-6 md:px-6 md:pl-[88px] ${
            isOpen
              ? "bg-[linear-gradient(to_bottom,rgba(255,159,28,0.08),rgba(255,159,28,0.00))]"
              : ""
          }`}
        >
          {/* Body Text */}
          <p className="text-brand-textMuted leading-relaxed mb-4">
            {feature.body}
          </p>

          {/* Technical Proof Section */}
          <div className="bg-black backdrop-blur-sm border border-brand-border rounded-lg p-2 md:p-4">
            {feature.tag === "AI_COMPOSER" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left side - Code */}
                <div className="font-mono text-sm whitespace-pre-wrap">
                  {feature.technicalProof.lines.map((line, idx) => (
                    <span
                      key={idx}
                      className={
                        line.type === "arrow"
                          ? "text-brand-orange"
                          : line.type === "output"
                          ? "text-[#86efac]"
                          : "text-brand-text"
                      }
                    >
                      {line.type === "output" && !showOutput[idx] ? (
                        <LoadingDots />
                      ) : Array.isArray(line.text) ? (
                        line.text.join("")
                      ) : (
                        line.text
                      )}
                    </span>
                  ))}
                </div>

                {/* Right side - Email Preview */}
                <div className="border border-brand-border rounded bg-white p-4 max-h-[260px] overflow-auto md:max-h-none">
                  {showOutput[2] ? (
                    <div className="font-sans">
                      <h2 className="text-xl font-semibold mb-3 text-gray-900">
                        Welcome!
                      </h2>
                      <p className="text-gray-700 mb-4">
                        Thanks for signing up.
                      </p>
                      <a
                        href="#"
                        className="inline-block bg-brand-orange text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors"
                      >
                        Get Started
                      </a>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-brand-textMuted">
                      <LoadingDots />
                    </div>
                  )}
                </div>
              </div>
            ) : feature.tag === "AUTOMATION_MAP" ? (
              <div className="flex flex-col gap-4">
                {/* Top - Code */}
                <div className="space-y-1.5">
                  {feature.technicalProof.lines.map((line, idx) => (
                    <div
                      key={idx}
                      className={`font-mono text-sm ${
                        line.type === "arrow"
                          ? "text-brand-orange text-center py-1"
                          : line.type === "output" ||
                            line.type === "prediction" ||
                            line.type === "tag"
                          ? "text-[#86efac]"
                          : line.type === "status" &&
                            line.text.includes("Green")
                          ? "text-[#86efac]"
                          : line.type === "analyzing"
                          ? "text-brand-textMuted"
                          : "text-brand-text"
                      }`}
                    >
                      {(line.type === "output" || line.type === "metric") &&
                      !showOutput[idx] ? (
                        <LoadingDots />
                      ) : (line.type === "output" || line.type === "metric") &&
                        startTyping[idx] ? (
                        <TypingText
                          text={
                            Array.isArray(line.text)
                              ? line.text.join(" ")
                              : line.text
                          }
                          speed={25}
                          onComplete={() => setShowNodeMap(true)}
                        />
                      ) : (
                        line.text
                      )}
                    </div>
                  ))}
                </div>

                {/* Bottom - Node Map Preview */}
                {showNodeMap && (
                  <div className="border border-brand-border rounded bg-white p-4">
                    <IntelligentFlowDiagram />
                  </div>
                )}
              </div>
            ) : (
              <div
                className={
                  feature.tag === "BEHAVIOR_LOGIC"
                    ? "flex items-start gap-3 flex-wrap"
                    : "space-y-1.5"
                }
              >
                {feature.technicalProof.lines.map((line, idx) => (
                  <div
                    key={idx}
                    className={`font-mono text-sm ${
                      line.type === "arrow"
                        ? "text-brand-orange" +
                          (feature.tag === "BEHAVIOR_LOGIC"
                            ? ""
                            : " text-center py-1")
                        : line.type === "output" ||
                          line.type === "prediction" ||
                          line.type === "tag"
                        ? "text-[#86efac]"
                        : line.type === "metric"
                        ? "text-white"
                        : line.type === "status" && line.text.includes("Green")
                        ? "text-[#86efac]"
                        : line.type === "analyzing"
                        ? "text-brand-textMuted"
                        : "text-brand-text"
                    } ${
                      feature.tag === "BEHAVIOR_LOGIC" ? "inline-block" : ""
                    }`}
                  >
                    {(line.type === "output" || line.type === "metric") &&
                    !showOutput[idx] ? (
                      <LoadingDots />
                    ) : (line.type === "output" || line.type === "metric") &&
                      startTyping[idx] ? (
                      <TypingText
                        text={
                          Array.isArray(line.text)
                            ? line.text.join(" ")
                            : line.text
                        }
                        speed={25}
                      />
                    ) : (
                      line.text
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AccordionSection({ title, subtitle, features, id }) {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id={id}
      className="ppy-16 md:py-24 bg-brand-black relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-2.5 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            {title}
          </h2>
          <p className="text-brand-textMuted text-lg max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Accordion */}
        <div className="bg-white/[0.02] backdrop-blur-sm border border-brand-border rounded-xl overflow-hidden">
          {features.map((feature, index) => (
            <AccordionItem
              key={index}
              feature={feature}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .loader {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #f97316;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }

        .typing-cursor {
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%,
          49% {
            opacity: 1;
          }
          50%,
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
