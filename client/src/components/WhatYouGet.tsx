import { Check } from 'lucide-react';

export default function WhatYouGet() {
  const items = [
    '2–3 virtual employees handling specific roles',
    '5–10 automated workflows running 24/7',
    'Connected systems with zero manual handoffs',
    'A trained team that knows how to use everything',
    'Ongoing optimization included'
  ];

  return (
    <section className="bg-muted py-20 lg:py-32 border-t border-border">
      <div className="max-w-4xl mx-auto px-6 lg:px-20">
        <h2 className="text-3xl lg:text-[36px] font-bold text-foreground text-center mb-4" data-testid="text-what-you-get-headline">
          What You Actually Get
        </h2>
        <p className="text-xl text-foreground text-center font-semibold mb-12" data-testid="text-what-you-get-subheadline">
          At the End of 90 Days:
        </p>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div 
              key={index}
              className="flex items-start gap-4"
              data-testid={`item-what-you-get-${index}`}
            >
              <Check 
                className="w-6 h-6 text-[#10B981] flex-shrink-0 mt-0.5" 
                strokeWidth={2.5}
                data-testid={`icon-check-${index}`}
              />
              <p className="text-lg text-muted-foreground" data-testid={`text-what-you-get-item-${index}`}>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
