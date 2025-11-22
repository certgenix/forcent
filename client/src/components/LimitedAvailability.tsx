export default function LimitedAvailability() {
  return (
    <section className="bg-white py-20 lg:py-32 border-t border-border">
      <div className="max-w-4xl mx-auto px-6 lg:px-20">
        <h2 className="text-3xl lg:text-[36px] font-bold text-foreground text-center mb-6" data-testid="text-limited-headline">
          Limited Availability
        </h2>
        
        <p className="text-lg text-muted-foreground text-center mb-12" data-testid="text-limited-intro">
          We're currently working with our first 10 clients to build proven systems and case studies.
        </p>

        <div className="bg-muted border border-card-border rounded-xl p-10">
          <h3 className="text-xl font-semibold text-foreground mb-6" data-testid="text-limited-means-title">
            What this means:
          </h3>
          <ul className="space-y-3 text-lg text-muted-foreground">
            <li data-testid="text-limited-benefit-1">• More hands-on attention</li>
            <li data-testid="text-limited-benefit-2">• Preferred pricing (locked in)</li>
            <li data-testid="text-limited-benefit-3">• Direct founder access</li>
            <li data-testid="text-limited-benefit-4">• Your feedback shapes our approach</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
