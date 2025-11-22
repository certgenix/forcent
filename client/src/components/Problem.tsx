import problemImage from '@assets/image_1763805702322.png';

export default function Problem() {
  return (
    <section 
      id="problem" 
      className="relative py-20 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: `url(${problemImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-white/85" />
      <div className="relative max-w-4xl mx-auto px-6 lg:px-20 text-center z-10">
        <h2 className="text-3xl lg:text-[36px] font-bold text-foreground mb-6" data-testid="text-problem-headline">
          You've Outgrown Your Systems. They Haven't Grown With You.
        </h2>
        
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
          <p data-testid="text-problem-1">Manual processes everywhere.</p>
          <p data-testid="text-problem-2">Teams drowning in busywork.</p>
          <p data-testid="text-problem-3">Revenue stuck.</p>
          <p data-testid="text-problem-4">More customers mean more chaos, not more profit.</p>
        </div>
        
        <div className="mt-10 space-y-3 text-lg">
          <p className="text-foreground font-semibold" data-testid="text-problem-conclusion-1">
            The real problem: You're still running your business like it's 2010.
          </p>
          <p className="text-muted-foreground" data-testid="text-problem-conclusion-2">
            Your competitors automated.
          </p>
          <p className="text-muted-foreground" data-testid="text-problem-conclusion-3">
            You're still grinding.
          </p>
        </div>
      </div>
    </section>
  );
}
