import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import GradientButton from './GradientButton';
import logoImage from '@assets/logo3_1763807336531.png';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const [pendingScroll, setPendingScroll] = useState<string | null>(null);

  useEffect(() => {
    if (pendingScroll && location === '/') {
      const element = document.getElementById(pendingScroll);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      setPendingScroll(null);
    }
  }, [location, pendingScroll]);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    
    if (location !== '/') {
      setPendingScroll(sectionId);
      setLocation('/');
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = () => {
    setMobileMenuOpen(false);
    if (location !== '/') {
      setLocation('/');
    } else {
      scrollToSection('hero');
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center">
            <img 
              src={logoImage} 
              alt="ForceNT Logo" 
              className="h-10 lg:h-12 cursor-pointer"
              onClick={handleLogoClick}
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
            <Link href="/industries">
              <span 
                className={`text-foreground font-medium hover:text-primary transition-colors cursor-pointer ${location.startsWith('/industries') ? 'text-primary' : ''}`}
                data-testid="link-industries"
              >
                Industries
              </span>
            </Link>
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
            <Link href="/industries" onClick={() => setMobileMenuOpen(false)}>
              <span 
                className={`block w-full text-left font-medium py-2 cursor-pointer ${location.startsWith('/industries') ? 'text-primary' : 'text-foreground'}`}
                data-testid="link-mobile-industries"
              >
                Industries
              </span>
            </Link>
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
