'use client';

import StatusBadge from './StatusBadge';
import { COMPETITORS, COMPETITOR_NAMES } from '../../data/comparisonData';

export default function FeatureRow({ feature, mobile = false }) {
  if (mobile) {
    return (
      <div className="px-4 py-4">
        <p className="text-sm font-bold text-white mb-3">
          {feature.name}
        </p>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-[#FF9F1C] text-xs font-bold">
              INWREN
            </span>
            <StatusBadge status={feature.inwren} />
          </div>

          {COMPETITORS.map((comp) => (
            <div
              key={comp}
              className="flex justify-between items-center"
            >
              <span className="text-[#888] text-xs">
                {COMPETITOR_NAMES[comp]}
              </span>
              <StatusBadge status={feature[comp]} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <tr className="hover:bg-[#161616] transition-colors">
      <td className="py-5 px-6 border-b border-[#222] bg-[#0A0A0A] border-r border-[#222]">
        <span className="font-bold text-[#E1E1E1] text-sm">
          {feature.name}
        </span>
      </td>

      <td className="py-5 px-4 border-b border-[#222] bg-[#161616] text-center border-r border-[#222]">
        <StatusBadge status={feature.inwren} />
      </td>

      {COMPETITORS.map((comp) => (
        <td
          key={comp}
          className="py-5 px-4 border-b border-[#222] text-center border-r border-[#222]"
        >
          <StatusBadge status={feature[comp]} />
        </td>
      ))}
    </tr>
  );
}
