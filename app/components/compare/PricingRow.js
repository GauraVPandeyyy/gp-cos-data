'use client';

import { useEffect, useState } from 'react';
import { COMPETITORS, COMPETITOR_NAMES } from '../../data/comparisonData';
import { getMaxPrice, calculatePricePercentage } from '../../utils/pricing';

export default function PricingRow({ currentData, tierLabel, mobile = false }) {
  const [animate, setAnimate] = useState(false);
  const maxPrice = getMaxPrice(currentData);

  useEffect(() => {
    setAnimate(false);
    const t = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(t);
  }, [currentData]);

  if (mobile) {
    return (
      <div className="glass-panel rounded-xl border border-[#333] p-4">
        <p className="text-white font-bold mb-1">Monthly Cost</p>
        <p className="text-xs text-[#666] mb-4">
          Based on {tierLabel} contacts
        </p>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-[#FF9F1C] font-bold">INWREN</span>
            <span className="text-white font-bold">
              ${currentData.inwren.toFixed(2)}
            </span>
          </div>

          {COMPETITORS.map((comp) => (
            <div key={comp} className="flex justify-between">
              <span className="text-[#888]">
                {COMPETITOR_NAMES[comp]}
              </span>
              <span className="text-[#aaa]">
                ${currentData[comp]}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <tr className="bg-[#0A0A0A] border-b border-[#333]">
      <td className="p-6 border-r border-[#222]">
        <span className="text-white font-bold text-lg block">
          Monthly Cost
        </span>
        <span className="text-[#666] text-xs">
          Estimated based on {tierLabel} contacts
        </span>
      </td>

      <td className="p-6 border-r border-[#222] bg-[#161616]">
        <span className="text-3xl font-bold text-white block mb-2">
          ${currentData.inwren.toFixed(2)}
        </span>

        <div className="h-1.5 w-full bg-[#333] rounded-full overflow-hidden">
          <div
            className={`h-full bg-[#FF9F1C] transition-all duration-1000 ${
              animate ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              width: animate
                ? `${calculatePricePercentage(currentData.inwren, maxPrice)}%`
                : '0%',
            }}
          />
        </div>
      </td>

      {COMPETITORS.map((comp) => (
        <td key={comp} className="p-6 border-r border-[#222] text-center">
          <span className="text-2xl font-bold text-[#888] block">
            ${currentData[comp]}
          </span>
        </td>
      ))}
    </tr>
  );
}
