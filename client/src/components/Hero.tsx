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
      className="relative py-16 lg:py-24 overflow-hidden bg-background"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-20 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-4">
          <motion.div 
            className="flex-1 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p 
              className="text-sm text-primary font-semibold uppercase tracking-wide mb-4" 
              data-testid="text-pre-headline"
            >
              For Growing Businesses
            </p>
            
            <h1 
              className="text-3xl lg:text-5xl font-bold text-foreground leading-tight mb-6" 
              data-testid="text-headline"
            >
              The Business Growth Engine That Combines People + AI.
            </h1>
            
            <p 
              className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl" 
              data-testid="text-subheadline"
            >
              We build intelligent systems that combine your team with AI-powered virtual employees and autonomous workflows.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
          </motion.div>

          <motion.div 
            className="flex-shrink-0 order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/20 rounded-full blur-3xl scale-110" />
              <img 
                src={hero3dImage} 
                alt="AI-powered business growth visualization" 
                className="relative w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-contain"
                data-testid="img-hero-3d"
              />
            </div>
          </motion.div>

          <motion.div 
            className="flex-1 text-center lg:text-right order-3 hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-6">
              <div className="inline-block text-right">
                <p className="text-4xl font-bold text-primary mb-1">24/7</p>
                <p className="text-sm text-muted-foreground">Always Available</p>
              </div>
              
              <div className="inline-block text-right">
                <p className="text-4xl font-bold text-primary mb-1">50%</p>
                <p className="text-sm text-muted-foreground">Cost Reduction</p>
              </div>
              
              <div className="inline-block text-right">
                <p className="text-4xl font-bold text-primary mb-1">3x</p>
                <p className="text-sm text-muted-foreground">Faster Response</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-12 pt-8 border-t border-border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p 
            className="text-sm text-muted-foreground text-center" 
            data-testid="text-trust-line"
          >
            Built for professional services, e-commerce, SaaS, and agencies with $500K–$20M in revenue.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
