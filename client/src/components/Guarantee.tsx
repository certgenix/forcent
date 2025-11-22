import { Card } from '@/components/ui/card';

export default function Guarantee() {
  const guarantees = [
    {
      title: 'Diagnosis:',
      description: "If we can't find 3 ways to save $10K+ or grow revenue 20%+, we'll tell you not to work with us."
    },
    {
      title: 'Deployment:',
      description: 'Systems operational in 90 days, or we keep working at no cost.'
    },
    {
      title: 'Performance:',
      description: 'Measurable ROI in 6 months, or we optimize free until you achieve it.'
    }
  ];

  return (
    <section className="bg-muted py-20 lg:py-32 border-t border-border">
      <div className="max-w-5xl mx-auto px-6 lg:px-20">
        <h2 className="text-3xl lg:text-[36px] font-bold text-foreground text-center mb-16" data-testid="text-guarantee-headline">
          The Guarantee
        </h2>

        <div className="space-y-6">
          {guarantees.map((guarantee, index) => (
            <Card 
              key={index}
              className="p-8 border border-card-border"
              data-testid={`card-guarantee-${index}`}
            >
              <h3 className="text-xl font-semibold text-foreground mb-3" data-testid={`text-guarantee-title-${index}`}>
                {guarantee.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid={`text-guarantee-description-${index}`}>
                {guarantee.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
