import logoImage from '@assets/logo_48x48_1763806857364.png';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
              className="h-10 mb-4"
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
                <button 
                  onClick={() => console.log('Privacy clicked')}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-privacy"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => console.log('Terms clicked')}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-terms"
                >
                  Terms of Service
                </button>
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
