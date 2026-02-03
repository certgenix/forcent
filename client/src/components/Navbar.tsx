import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronDown, Zap, Code, RefreshCw, Shield } from 'lucide-react';
import GradientButton from './GradientButton';
import logoImage from '@assets/logo3_1763807336531.png';

const solutionItems = [
  { 
    title: 'AI & Process Automation', 
    href: '/solutions',
    icon: Zap,
    description: 'Virtual Employees & Automation'
  },
  { 
    title: 'Software Development', 
    href: '/solutions/software-development',
    icon: Code,
    description: 'Custom apps & platforms'
  },
  { 
    title: 'Digital Transformation', 
    href: '/solutions/digital-transformation',
    icon: RefreshCw,
    description: 'ERP & CRM systems'
  },
  { 
    title: 'Cybersecurity & Compliance', 
    href: '/solutions/cybersecurity-compliance',
    icon: Shield,
    description: 'Security & compliance'
  }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const [pendingScroll, setPendingScroll] = useState<string | null>(null);

  useEffect(() => {
    setMobileSolutionsOpen(false);
  }, [location]);

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
    setSolutionsOpen(false);
    
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
    setSolutionsOpen(false);
    if (location !== '/') {
      setLocation('/');
    } else {
      scrollToSection('hero');
    }
  };

  const isSolutionsActive = location.startsWith('/solutions');

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
            
            <div 
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button 
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                onBlur={() => setTimeout(() => setSolutionsOpen(false), 150)}
                className={`flex items-center gap-1 font-medium hover:text-primary transition-colors ${isSolutionsActive ? 'text-primary' : 'text-foreground'}`}
                data-testid="link-solutions"
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                className={`absolute top-full left-0 mt-2 w-72 bg-white border border-border rounded-lg shadow-lg transition-all duration-200 ${solutionsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
              >
                <div className="py-2">
                  {solutionItems.map((item, index) => (
                    <Link key={index} href={item.href}>
                      <div 
                        className="flex items-start gap-3 px-4 py-3 hover:bg-muted transition-colors cursor-pointer"
                        onClick={() => setSolutionsOpen(false)}
                        data-testid={`link-solution-${index}`}
                      >
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <item.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <div className={`font-medium ${location === item.href ? 'text-primary' : 'text-foreground'}`}>
                            {item.title}
                          </div>
                          <div className="text-sm text-muted-foreground">{item.description}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/industries">
              <span 
                className={`text-foreground font-medium hover:text-primary transition-colors cursor-pointer ${location.startsWith('/industries') ? 'text-primary' : ''}`}
                data-testid="link-industries"
              >
                Industries
              </span>
            </Link>
            <Link href="/marketing">
              <span 
                className={`text-foreground font-medium hover:text-primary transition-colors cursor-pointer ${location === '/marketing' ? 'text-primary' : ''}`}
                data-testid="link-marketing"
              >
                Marketing
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
          <div className="px-6 py-4 space-y-2">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left text-foreground font-medium py-2"
              data-testid="link-mobile-how-it-works"
            >
              How It Works
            </button>
            
            <div>
              <button
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className={`flex items-center justify-between w-full text-left font-medium py-2 ${isSolutionsActive ? 'text-primary' : 'text-foreground'}`}
                data-testid="link-mobile-solutions"
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {mobileSolutionsOpen && (
                <div className="pl-4 space-y-1 mt-2">
                  {solutionItems.map((item, index) => (
                    <Link key={index} href={item.href}>
                      <div 
                        className={`flex items-center gap-2 py-2 cursor-pointer ${location === item.href ? 'text-primary' : 'text-muted-foreground'}`}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileSolutionsOpen(false);
                        }}
                        data-testid={`link-mobile-solution-${index}`}
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/industries" onClick={() => setMobileMenuOpen(false)}>
              <span 
                className={`block w-full text-left font-medium py-2 cursor-pointer ${location.startsWith('/industries') ? 'text-primary' : 'text-foreground'}`}
                data-testid="link-mobile-industries"
              >
                Industries
              </span>
            </Link>
            <Link href="/marketing" onClick={() => setMobileMenuOpen(false)}>
              <span 
                className={`block w-full text-left font-medium py-2 cursor-pointer ${location === '/marketing' ? 'text-primary' : 'text-foreground'}`}
                data-testid="link-mobile-marketing"
              >
                Marketing
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
