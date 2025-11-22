import GradientButton from './GradientButton';
import OutlineButton from './OutlineButton';
import heroImage from '@assets/generated_images/premium_geometric_technology_visual.png';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-sm text-muted-foreground font-medium mb-6" data-testid="text-pre-headline">
              For Growing Businesses Ready to Scale Smarter
            </p>
            
            <h1 className="text-4xl lg:text-[56px] font-bold text-foreground leading-tight mb-6" data-testid="text-headline">
              The Business Growth Engine That Combines People + AI.
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-10" data-testid="text-subheadline">
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
            
            <p className="text-sm text-muted-foreground" data-testid="text-trust-line">
              Built for professional services, e-commerce, SaaS, and agencies with $500K–$20M in revenue.
            </p>
          </div>
          
          <div>
            <img 
              src={heroImage} 
              alt="Abstract geometric visualization" 
              className="w-full h-auto animate-fade-in"
              data-testid="img-hero-visual"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
