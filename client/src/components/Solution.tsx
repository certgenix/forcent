import { Users, Zap, Brain } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function Solution() {
  const features = [
    {
      icon: Users,
      title: 'Virtual Employees',
      points: [
        'AI agents trained on your business',
        'Handle sales, support, scheduling—24/7'
      ],
      result: 'Cost: 90% less than full-time hires'
    },
    {
      icon: Zap,
      title: 'Autonomous Workflows',
      points: [
        'Eliminate manual tasks automatically',
        'Follow-ups, reporting, and data entry run on autopilot'
      ],
      result: '20+ hours back per week'
    },
    {
      icon: Brain,
      title: 'Intelligent Systems',
      points: [
        'Everything connects: Sales → Operations → Support',
        'No gaps, no delays, no manual handoffs'
      ],
      result: 'Scale 3×–10× without adding people'
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
              className="p-8"
              data-testid={`card-solution-${index}`}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon 
                    className="w-8 h-8 text-primary" 
                    strokeWidth={2}
                    data-testid={`icon-solution-${index}`}
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground text-center mb-6" data-testid={`text-solution-title-${index}`}>
                {feature.title}
              </h3>
              
              <ul className="space-y-3 mb-6">
                {feature.points.map((point, pointIndex) => (
                  <li 
                    key={pointIndex}
                    className="text-muted-foreground leading-relaxed flex items-start gap-2"
                    data-testid={`text-solution-point-${index}-${pointIndex}`}
                  >
                    <span className="text-primary mt-1.5">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4 border-t border-border">
                <p className="text-center font-semibold text-primary" data-testid={`text-solution-result-${index}`}>
                  {feature.result}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
