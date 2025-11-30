import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import logoImage from '@assets/logo3_1763807336531.png';

export default function Footer() {
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
    if (location !== '/') {
      setLocation('/');
    } else {
      scrollToSection('hero');
    }
  };

  return (
    <footer className="bg-white border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <img 
              src={logoImage} 
              alt="ForceNT Logo" 
              className="h-6 mb-4 cursor-pointer"
              onClick={handleLogoClick}
              data-testid="img-footer-logo"
            />
            <p className="text-sm text-muted-foreground" data-testid="text-footer-tagline">
              Build Your Business Growth Engine.
            </p>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4" data-testid="text-footer-company-title">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-how-it-works"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('solution')}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-solutions"
                >
                  Solutions
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4" data-testid="text-footer-connect-title">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:hello@forcent.ai" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-email"
                >
                  hello@forcent.ai
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-linkedin"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4" data-testid="text-footer-legal-title">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy">
                  <span 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    data-testid="link-footer-privacy"
                  >
                    Privacy Policy
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/responsible-ai">
                  <span 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    data-testid="link-footer-responsible-ai"
                  >
                    Responsible AI
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center" data-testid="text-footer-copyright">
            © 2025 ForceNT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
