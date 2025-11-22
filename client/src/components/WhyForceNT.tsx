import { X, CheckCircle2, Wrench, Rocket, Target } from 'lucide-react';

export default function WhyForceNT() {
  const notUs = [
    "Consultants who give advice and leave",
    "Software vendors you have to figure out",
    "A chatbot company"
  ];

  const whatWeAre = [
    {
      icon: Wrench,
      text: "We build, deploy, and optimize your entire Business Growth Engine"
    },
    {
      icon: Target,
      text: "Custom-built for your business—nothing templated"
    },
    {
      icon: Rocket,
      text: "End-to-end implementation with ongoing optimization"
    }
  ];

  return (
    <section className="bg-muted py-20 lg:py-32 border-t border-border">
      <div className="max-w-4xl mx-auto px-6 lg:px-20">
        <h2 className="text-3xl lg:text-[36px] font-bold text-foreground text-center mb-16" data-testid="text-why-headline">
          Why ForceNT
        </h2>

        <div className="grid md:grid-cols-2 gap-20 mb-12">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center md:text-left" data-testid="text-why-not-title">
              We're Not:
            </h3>
            <div className="space-y-4">
              {notUs.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3"
                  data-testid={`item-why-not-${index}`}
                >
                  <X 
                    className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" 
                    strokeWidth={2.5}
                    data-testid={`icon-not-${index}`}
                  />
                  <p className="text-lg text-muted-foreground" data-testid={`text-why-not-${index}`}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center md:text-left" data-testid="text-why-are-title">
              We Are:
            </h3>
            <div className="space-y-4">
              {whatWeAre.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3"
                  data-testid={`item-why-are-${index}`}
                >
                  <CheckCircle2 
                    className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" 
                    strokeWidth={2.5}
                    data-testid={`icon-are-${index}`}
                  />
                  <p className="text-lg text-muted-foreground" data-testid={`text-why-are-${index}`}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
