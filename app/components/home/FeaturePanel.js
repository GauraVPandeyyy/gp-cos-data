import { forwardRef } from 'react';
import { ShieldCheck, Shield, Workflow, Check } from 'lucide-react';

const ICONS = {
  'shield-check': ShieldCheck,
  shield: Shield,
  workflow: Workflow,
};

const FeaturePanel = forwardRef(function FeaturePanel(
  {
    icon,
    title,
    description,
    features,
    visual,
    order = 'text-first',
    gradient,
    href,
    zIndex,
  },
  ref
) {
  const Icon = ICONS[icon];

  return (
    <section
      ref={ref}
      id={href}
      className={`sticky top-0 min-h-screen flex items-center ${gradient}`}
      style={{ zIndex }}
    >
      <div className="noise-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full px-6 py-12 md:py-32 grid md:grid-cols-2 gap-0 md:gap-12 items-center">
        <div className={`space-y-8 ${order === 'text-first' ? 'order-2 md:order-1' : 'order-2'}`}>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center border border-brand-orange/20">
              <Icon className="w-6 h-6 text-brand-orange" />
            </div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
          </div>

          <p className="text-xl text-brand-textMuted leading-normal md:leading-relaxed max-w-lg">
            {description}
          </p>

          <ul className="space-y-3 text-sm text-brand-textMain">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-orange/20 text-brand-orange mt-0.5">
                  <Check className="w-3 h-3" />
                </span>
                <span dangerouslySetInnerHTML={{ __html: feature }} />
              </li>
            ))}
          </ul>
        </div>

        <div className={`flex justify-center items-center ${order === 'text-first' ? 'order-1 md:order-2' : 'order-1'}`}>
          {visual}
        </div>
      </div>
    </section>
  );
});

export default FeaturePanel;
