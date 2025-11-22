import { Users, Zap, Brain } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function Solution() {
  const features = [
    {
      icon: Users,
      title: 'Virtual Employees',
      points: [
        'AI agents trained on your business.',
        'Handle sales, support, scheduling—24/7.',
        'Cost: 90% less than full-time hires.'
      ]
    },
    {
      icon: Zap,
      title: 'Autonomous Workflows',
      points: [
        'Eliminate manual tasks.',
        'Follow-ups, reporting, and data entry run automatically.',
        'Result: 20+ hours back per week.'
      ]
    },
    {
      icon: Brain,
      title: 'Intelligent Systems',
      points: [
        'Everything connects: Sales → Operations → Support.',
        'No gaps.',
        'No delays.',
        'Result: Scale 3×–10× without adding people.'
      ]
    }
  ];

  return (
    <section id="solution" className="bg-white py-20 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-[36px] font-bold text-foreground mb-4" data-testid="text-solution-headline">
            Your Business Growth Engine
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-solution-subheadline">
            A hybrid system where your team, virtual employees, and intelligent automation work together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-10 border border-card-border hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              data-testid={`card-solution-${index}`}
            >
              <feature.icon 
                className="w-8 h-8 text-primary mb-6" 
                strokeWidth={2}
                data-testid={`icon-solution-${index}`}
              />
              <h3 className="text-xl font-semibold text-foreground mb-4" data-testid={`text-solution-title-${index}`}>
                {feature.title}
              </h3>
              <ul className="space-y-2">
                {feature.points.map((point, pointIndex) => (
                  <li 
                    key={pointIndex}
                    className="text-muted-foreground leading-relaxed"
                    data-testid={`text-solution-point-${index}-${pointIndex}`}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
