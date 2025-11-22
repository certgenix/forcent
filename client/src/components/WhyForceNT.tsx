export default function WhyForceNT() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-3xl lg:text-[36px] font-bold text-foreground mb-12" data-testid="text-why-headline">
          Why ForceNT
        </h2>

        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-10">
          <p data-testid="text-why-not-1">We're not consultants who give advice and leave.</p>
          <p data-testid="text-why-not-2">We're not selling software you have to figure out.</p>
          <p data-testid="text-why-not-3">We're not a chatbot company.</p>
        </div>

        <p className="text-xl text-foreground font-semibold mb-6" data-testid="text-why-we-are">
          We build, deploy, and optimize your entire Business Growth Engine—end to end.
        </p>
        <p className="text-lg text-muted-foreground" data-testid="text-why-custom">
          Custom-built for your business. Nothing templated.
        </p>
      </div>
    </section>
  );
}
