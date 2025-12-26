import { motion } from 'framer-motion';
import GradientButton from './GradientButton';
import OutlineButton from './OutlineButton';
import hero3dImage from '@assets/hero-image-3d-BQ1hkZUZ_1766732551656.png';

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
      className="relative pt-6 pb-12 lg:pt-10 lg:pb-20 overflow-hidden bg-background"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-20 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.p 
              className="text-sm text-foreground font-medium mb-6" 
              data-testid="text-pre-headline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              For Growing Businesses Ready to Scale Smarter
            </motion.p>
            
            <motion.h1 
              className="text-4xl lg:text-[56px] font-bold text-foreground leading-tight mb-6" 
              data-testid="text-headline"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The Business Growth Engine That Combines People + AI.
            </motion.h1>
            
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed mb-10" 
              data-testid="text-subheadline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              We build intelligent systems that combine your team with AI-powered virtual employees and autonomous workflows.
              The result: predictable growth, lower costs, and a business that runs without you being the bottleneck.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
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
            </motion.div>
            
            <motion.p 
              className="text-sm text-muted-foreground" 
              data-testid="text-trust-line"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Built for professional services, e-commerce, SaaS, and agencies with $500K–$20M in revenue.
            </motion.p>
          </div>

          <motion.div 
            className="hidden lg:flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <img 
              src={hero3dImage} 
              alt="AI-powered business growth visualization" 
              className="w-full max-w-2xl object-contain scale-110"
              data-testid="img-hero-3d"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
