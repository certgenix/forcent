import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import GradientButton from './GradientButton';
import logoImage from '@assets/logo2_1763802557343.png';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between h-24 lg:h-28">
          <div className="flex items-center">
            <img 
              src={logoImage} 
              alt="ForceNT Logo" 
              className="h-20 lg:h-24 cursor-pointer"
              onClick={() => scrollToSection('hero')}
              data-testid="img-logo"
            />
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-foreground font-medium hover:text-primary transition-colors"
              data-testid="link-how-it-works"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('solution')}
              className="text-foreground font-medium hover:text-primary transition-colors"
              data-testid="link-solutions"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection('investment')}
              className="text-foreground font-medium hover:text-primary transition-colors"
              data-testid="link-investment"
            >
              Investment
            </button>
            <GradientButton 
              onClick={() => scrollToSection('experience')}
              data-testid="button-nav-cta"
            >
              Talk to Our Virtual Employee
            </GradientButton>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="px-6 py-4 space-y-4">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left text-foreground font-medium py-2"
              data-testid="link-mobile-how-it-works"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('solution')}
              className="block w-full text-left text-foreground font-medium py-2"
              data-testid="link-mobile-solutions"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection('investment')}
              className="block w-full text-left text-foreground font-medium py-2"
              data-testid="link-mobile-investment"
            >
              Investment
            </button>
            <GradientButton 
              className="w-full"
              onClick={() => scrollToSection('experience')}
              data-testid="button-mobile-cta"
            >
              Talk to Our Virtual Employee
            </GradientButton>
          </div>
        </div>
      )}
    </nav>
  );
}
