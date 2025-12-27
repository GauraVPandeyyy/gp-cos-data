import React from 'react';
import PricingRow from '../compare/PricingRow';
import FeatureRow from '../compare/FeatureRow';
import { FEATURE_GROUPS, COMPETITOR_NAMES } from '../../data/comparisonData';

export default function ComparisonTable({ currentData, selectedTier, tierLabel }) {
  return (
    <div className="max-w-7xl mx-auto px-3 mt-12">

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block glass-panel rounded-2xl overflow-hidden shadow-2xl border border-[#333]">
        <table className="w-full text-left border-collapse">
          <thead className="sticky top-0 z-40 bg-[#050505] shadow-lg">
            <tr className="border-b border-[#333]">
              <th className="p-6 w-[260px] bg-[#0A0A0A] border-r border-[#222]">
                <span className="text-xs font-mono text-[#666] uppercase tracking-wider">
                  Compare Features
                </span>
              </th>

              <th className="p-6 bg-[#161616] border-t-4 border-t-[#FF9F1C] border-r border-[#222]">
                <span className="text-[#FF9F1C] text-sm font-bold uppercase">
                  INWREN
                </span>
              </th>

              {Object.entries(COMPETITOR_NAMES).map(([key, name]) => (
                <th
                  key={key}
                  className="p-6 bg-[#0A0A0A] border-r border-[#222] text-center"
                >
                  <span className="text-[#666] text-sm font-bold uppercase">
                    {name}
                  </span>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            <PricingRow
              currentData={currentData}
              selectedTier={selectedTier}
              tierLabel={tierLabel}
            />

            {FEATURE_GROUPS.map((group, groupIdx) => (
              <React.Fragment key={groupIdx}>
                <tr>
                  <td colSpan="6" className="py-3 px-6 bg-[#111] border-y border-[#222]">
                    <span className="text-[#FF9F1C] font-mono text-[10px] font-bold uppercase tracking-widest">
                      {group.title}
                    </span>
                  </td>
                </tr>

                {group.features.map((feature, rowIdx) => (
                  <FeatureRow key={rowIdx} feature={feature} />
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MOBILE FEATURE-FIRST ================= */}
      <div className="md:hidden space-y-6">

        <PricingRow
          currentData={currentData}
          selectedTier={selectedTier}
          tierLabel={tierLabel}
          mobile
        />

        {FEATURE_GROUPS.map((group, groupIdx) => (
          <details
            key={groupIdx}
            className="glass-panel rounded-xl border border-[#333] overflow-hidden"
          >
            <summary className="px-4 py-3 cursor-pointer bg-[#111] border-b border-[#222]">
              <span className="text-[#FF9F1C] text-xs font-mono font-bold uppercase">
                {group.title}
              </span>
            </summary>

            <div className="divide-y divide-[#222]">
              {group.features.map((feature, idx) => (
                <FeatureRow key={idx} feature={feature} mobile />
              ))}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
