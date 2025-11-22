export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Diagnose',
      subtitle: 'Weeks 1–2',
      description: "We find what's broken and where you're losing time and money.",
      time: 'Your time: 2–3 hours.'
    },
    {
      number: '2',
      title: 'Build',
      subtitle: 'Weeks 3–10',
      description: 'We create your virtual employees and automation systems.',
      time: 'Your time: 30 min/week.'
    },
    {
      number: '3',
      title: 'Deploy',
      subtitle: 'Weeks 11–12',
      description: 'We integrate everything and train your team.',
      time: 'Your time: 3–5 hours.'
    },
    {
      number: '4',
      title: 'Optimize',
      subtitle: 'Ongoing',
      description: 'We refine as you grow.',
      time: 'Your time: 1 hour/month.'
    }
  ];

  return (
    <section id="how-it-works" className="bg-muted py-20 lg:py-32 border-t border-border">
      <div className="max-w-5xl mx-auto px-6 lg:px-20">
        <h2 className="text-3xl lg:text-[36px] font-bold text-foreground text-center mb-4" data-testid="text-how-it-works-headline">
          How It Works
        </h2>
        <p className="text-xl text-foreground text-center font-semibold mb-16" data-testid="text-how-it-works-subheadline">
          90-Day Transformation
        </p>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex gap-6"
              data-testid={`step-${index}`}
            >
              <div className="flex flex-col items-center">
                <div 
                  className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg flex-shrink-0"
                  data-testid={`badge-step-${index}`}
                >
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-border mt-4" data-testid={`line-${index}`} />
                )}
              </div>
              
              <div className="flex-1 pb-8">
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="text-2xl font-semibold text-foreground" data-testid={`text-step-title-${index}`}>
                    {step.title}
                  </h3>
                  <span className="text-muted-foreground" data-testid={`text-step-subtitle-${index}`}>
                    {step.subtitle}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-2" data-testid={`text-step-description-${index}`}>
                  {step.description}
                </p>
                <p className="text-sm text-muted-foreground font-medium" data-testid={`text-step-time-${index}`}>
                  {step.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
