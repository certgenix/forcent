import { Check } from 'lucide-react';
import GradientButton from './GradientButton';

interface FinalCTAProps {
  onOpenChat: () => void;
}

export default function FinalCTA({ onOpenChat }: FinalCTAProps) {
  const benefits = [
    'Free 30-min diagnosis',
    'Custom bottleneck analysis',
    'ROI projections',
    'Zero obligation'
  ];

  return (
    <section className="bg-white py-20 lg:py-32 border-t border-border">
      <div className="max-w-4xl mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-3xl lg:text-[36px] font-bold text-foreground mb-6" data-testid="text-final-cta-headline">
          Ready to Scale Smarter?
        </h2>
        
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed" data-testid="text-final-cta-subheadline">
          Talk to our virtual employee. Get your free diagnosis. See what's possible.
        </p>

        <GradientButton 
          className="mb-12"
          onClick={onOpenChat}
          data-testid="button-final-cta"
        >
          Start the Conversation
        </GradientButton>

        <div className="bg-muted border border-card-border rounded-xl p-8">
          <h3 className="text-xl font-semibold text-foreground mb-6" data-testid="text-final-cta-benefits-title">
            What You Get:
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-3"
                data-testid={`item-benefit-${index}`}
              >
                <Check 
                  className="w-5 h-5 text-[#10B981] flex-shrink-0" 
                  strokeWidth={2.5}
                  data-testid={`icon-benefit-check-${index}`}
                />
                <p className="text-muted-foreground text-left" data-testid={`text-benefit-${index}`}>
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
