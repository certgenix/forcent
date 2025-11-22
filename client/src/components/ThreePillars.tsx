import { TrendingUp, Zap, BarChart3 } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function ThreePillars() {
  const pillars = [
    {
      icon: TrendingUp,
      title: 'Revenue Acceleration',
      description: 'Grow 20–40% in 6–12 months.\nAutomated sales. Intelligent upsells. AI follow-ups.',
      metric: '20-40% Growth'
    },
    {
      icon: Zap,
      title: 'Time & Team Efficiency',
      description: 'Free 20+ hours per week.\nVirtual employees handle busywork.\nYour team focuses on growth.',
      metric: '20+ Hours Saved'
    },
    {
      icon: BarChart3,
      title: 'Scalable Infrastructure',
      description: 'Scale 3×–10× without hiring.\nConnected workflows.\nZero bottlenecks.',
      metric: '3-10× Scale'
    }
  ];

  return (
    <section className="bg-white py-20 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card 
              key={index}
              className="p-10 border border-card-border hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
              data-testid={`card-pillar-${index}`}
            >
              <pillar.icon 
                className="w-8 h-8 text-primary mb-6" 
                strokeWidth={2}
                data-testid={`icon-pillar-${index}`}
              />
              <h3 className="text-2xl font-semibold text-foreground mb-4" data-testid={`text-pillar-title-${index}`}>
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 whitespace-pre-line" data-testid={`text-pillar-description-${index}`}>
                {pillar.description}
              </p>
              <p className="text-foreground font-bold text-lg" data-testid={`text-pillar-metric-${index}`}>
                {pillar.metric}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
