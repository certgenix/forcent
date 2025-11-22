import { AlertCircle, Users, TrendingDown, Zap } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: AlertCircle,
      title: 'Manual Processes Everywhere',
      description: 'Your team is stuck copying data between systems, chasing approvals, and doing the same tasks over and over. Growth means more manual work, not more efficiency.'
    },
    {
      icon: Users,
      title: 'Teams Drowning in Busywork',
      description: 'Your best people spend their days on admin tasks instead of strategic work. Hiring more people just means more coordination overhead.'
    },
    {
      icon: TrendingDown,
      title: 'Revenue Growth Has Stalled',
      description: "You're working harder than ever, but profits aren't keeping pace. Every new customer adds complexity and costs instead of predictable profit."
    },
    {
      icon: Zap,
      title: 'More Customers = More Chaos',
      description: "Your systems weren't built to scale. What worked at $500K breaks at $2M. You need infrastructure that grows with you, not against you."
    }
  ];

  return (
    <section id="problem" className="bg-muted py-20 lg:py-32 border-t border-border">
      <div className="max-w-4xl mx-auto px-6 lg:px-20">
        <h2 className="text-3xl lg:text-[36px] font-bold text-foreground text-center mb-16" data-testid="text-problem-headline">
          You've Outgrown Your Systems. They Haven't Grown With You.
        </h2>
        
        <div className="space-y-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="flex items-start gap-4"
              data-testid={`item-problem-${index}`}
            >
              <div className="flex-shrink-0">
                <problem.icon 
                  className="w-6 h-6 text-destructive mt-1" 
                  strokeWidth={2}
                  data-testid={`icon-problem-${index}`}
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`text-problem-title-${index}`}>
                  {problem.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed" data-testid={`text-problem-desc-${index}`}>
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xl text-foreground font-semibold" data-testid="text-problem-conclusion">
            The real problem: You're still running your business like it's 2010.
            <br />
            <span className="text-muted-foreground font-normal">Your competitors automated. You're still grinding.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
