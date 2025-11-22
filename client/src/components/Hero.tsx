import GradientButton from './GradientButton';
import OutlineButton from './OutlineButton';
import heroImage from '@assets/hero1_1763805235119.png';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative py-20 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black/75" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-20 z-10">
        <div className="max-w-3xl mx-auto">
          <div>
            <p className="text-sm text-white font-medium mb-6 drop-shadow-lg" data-testid="text-pre-headline">
              For Growing Businesses Ready to Scale Smarter
            </p>
            
            <h1 className="text-4xl lg:text-[56px] font-bold text-white leading-tight mb-6 drop-shadow-lg" data-testid="text-headline">
              The Business Growth Engine That Combines People + AI.
            </h1>
            
            <p className="text-lg text-white/95 leading-relaxed mb-10 drop-shadow-lg" data-testid="text-subheadline">
              We build intelligent systems that combine your team with AI-powered virtual employees and autonomous workflows.
              The result: predictable growth, lower costs, and a business that runs without you being the bottleneck.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <GradientButton 
                onClick={() => scrollToSection('experience')}
                data-testid="button-hero-primary"
              >
                Talk to Our Virtual Employee
              </GradientButton>
              <OutlineButton 
                onClick={() => scrollToSection('how-it-works')}
                data-testid="button-hero-secondary"
              >
                See How It Works
              </OutlineButton>
            </div>
            
            <p className="text-sm text-white/90 drop-shadow-lg" data-testid="text-trust-line">
              Built for professional services, e-commerce, SaaS, and agencies with $500K–$20M in revenue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
