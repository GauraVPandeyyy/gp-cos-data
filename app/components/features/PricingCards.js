// components/features/PricingCards.js
"use client";

import { useEffect, useState } from "react";
import PricingCard from "./PricingCard";

export default function PricingCards({
  plans,
  selectedContacts,
  currency,
  billingCycle,
}) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const table = document.getElementById("features-table");
      const shouldStick = window.scrollY > 200;

      if (!table) {
        setIsSticky(shouldStick);
        return;
      }

      const tableRect = table.getBoundingClientRect();
      const hasPassedTableEnd = tableRect.bottom <= 0;

      setIsSticky(shouldStick && !hasPassedTableEnd);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`grid grid-cols-6 md:grid-cols-5 px-0 w-full pb-4 shadow m-0 pt-16 md:pt-10 md:pb-2 transition-all duration-300 ${
        isSticky
          ? "sticky top-0 z-30 bg-[#050505]/95  backdrop-blur-md border-b border-[#1E1E1E]"
          : ""
      }`}
    >
      {/* Intro / CTA Column */}
      <div className="flex col-span-2 md:col-span-1 flex-col justify-center px-1 md:px-6 pb-1 md:pb-6 border-r border-transparent">
        {isSticky ? (
          <span className="font-bold text-sm md:text-4xl text-white">Compare Plans</span>
        ) : (
          <div className="text-sm text-[#888888] italic">
            All plans include 24/7 access to our knowledge base and community.
          </div>
        )}
      </div>

      {/* Plan Columns */}
      {plans.map((plan) => (
        <PricingCard
          key={plan.id}
          plan={plan}
          selectedContacts={selectedContacts}
          currency={currency}
          billingCycle={billingCycle}
          isSticky={isSticky}
        />
      ))}
    </div>
  );
}
