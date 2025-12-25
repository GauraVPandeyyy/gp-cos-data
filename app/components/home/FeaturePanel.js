// components/home/FeaturePanel.js
import { ShieldCheck, Shield, Workflow, Check } from 'lucide-react';

const ICONS = {
  'shield-check': ShieldCheck,
  'shield': Shield,
  'workflow': Workflow,
};

export default function FeaturePanel({
  icon,
  title,
  description,
  features,
  visual,
  order = 'text-first',
  gradient,
  href,
}) {
  const Icon = ICONS[icon];

  return (
    <div 
      id={href}
      className={`relative ${gradient} py-24 sm:pt-36 md:py-32 scroll-mt-20 min-h-[85vh] flex items-center`}
    >
      <div className="noise-overlay"></div>
      <div className="max-w-7xl mx-auto w-full px-6 grid md:grid-cols-2 gap-4 md:gap-12 items-center">
        {/* Text Content */}
        <div className={`space-y-8 ${order === 'text-first' ? 'order-2 md:order-1' : 'order-2'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center border border-brand-orange/20">
              <Icon className="w-6 h-6 text-brand-orange" />
            </div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
          </div>

          <p className="text-xl text-brand-textMuted leading-relaxed max-w-lg">
            {description}
          </p>

          <ul className="space-y-3 text-sm text-brand-textMain">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-orange/20 text-brand-orange mt-0.5 flex-shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span dangerouslySetInnerHTML={{ __html: feature }} />
              </li>
            ))}
          </ul>
        </div>

        {/* Visual Content with Parallax */}
        <div className={`flex justify-center items-center panel-visual transition-transform duration-75 ease-out ${order === 'text-first' ? 'order-1 md:order-2' : 'order-1'}`}>
          {visual}
        </div>
      </div>
    </div>
  );
}