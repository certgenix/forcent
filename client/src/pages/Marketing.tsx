import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { 
  AlertCircle, 
  Search, 
  UserX, 
  TrendingUp, 
  MousePointer2, 
  CreditCard, 
  Users,
  Linkedin,
  Instagram,
  Zap,
  PenTool,
  CheckCircle2
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidget from '@/components/FloatingWidget';
import AIChatModal from '@/components/AIChatModal';
import GradientButton from '@/components/GradientButton';
import OutlineButton from '@/components/OutlineButton';
import { AnimatedSection, ScaleIn } from '@/components/AnimatedSection';

const painCards = [
  {
    icon: UserX,
    title: "The Ghost Town",
    description: "High effort, low engagement."
  },
  {
    icon: Search,
    title: "The AI Blindspot",
    description: "Not being cited by ChatGPT, Gemini, or Perplexity."
  },
  {
    icon: AlertCircle,
    title: "The Trust Gap",
    description: "Content that feels robotic and fails to convert."
  }
];

const raceFramework = [
  {
    phase: "REACH",
    strategy: "AI-Search Optimization (GEO) & Discovery",
    result: "You become the \"Top Answer\" everywhere."
  },
  {
    phase: "ACT",
    strategy: "Psychology-Led Micro-Moments",
    result: "Passive viewers become active participants."
  },
  {
    phase: "CONVERT",
    strategy: "Frictionless Lead Generation",
    result: "Interest turns into measurable revenue."
  },
  {
    phase: "ENGAGE",
    strategy: "Owned Community & Authority",
    result: "Customers turn into a lifelong \"Tribe.\""
  }
];

const services = [
  {
    icon: Linkedin,
    title: "Authority Positioning",
    description: "LinkedIn & X (Twitter) management for executives."
  },
  {
    icon: Instagram,
    title: "Short-Form Video",
    description: "Strategic content for Instagram, FB, and TikTok."
  },
  {
    icon: Zap,
    title: "Generative Engine Optimization",
    description: "Future-proofing your brand for the AI-search era."
  },
  {
    icon: PenTool,
    title: "Behavioral Copywriting",
    description: "Copy that triggers action and builds trust."
  }
];

const architectureBenefits = [
  "Scalable Systems",
  "Data-Driven Empathy",
  "Future-Proof Tech"
];

export default function Marketing() {
  const [chatOpen, setChatOpen] = useState(false);

  const handleOpenChat = () => setChatOpen(true);
  const handleCloseChat = () => setChatOpen(false);

  const scrollToRace = () => {
    const element = document.getElementById('race-framework');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFinalCta = () => {
    const element = document.getElementById('final-cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center">
            <AnimatedSection>
              <h1 className="text-4xl lg:text-[64px] font-bold text-foreground leading-tight mb-6" data-testid="text-marketing-h1">
                We Architect Brands That AI Loves and Humans Trust.
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10" data-testid="text-marketing-subheadline">
                Stop shouting into the void. We apply Enterprise-grade strategy and human psychology to turn your digital presence into a high-performance growth engine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GradientButton onClick={scrollToFinalCta} data-testid="button-claim-blueprint">
                  Claim Your Growth Blueprint
                </GradientButton>
                <OutlineButton onClick={scrollToRace} data-testid="button-see-framework">
                  See Our Framework
                </OutlineButton>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pain Point Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6" data-testid="text-pain-h2">
              Is Your Digital Presence 'Glitching'?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-pain-body">
              In 2026, 'just posting' is a waste of time. Algorithms are saturated, and AI is the new gatekeeper of information. If your brand feels invisible, you don’t need more content—you need a better architecture.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {painCards.map((card, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <Card className="p-8 h-full text-center border-border/50" data-testid={`card-pain-${index}`}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                  <p className="text-muted-foreground">{card.description}</p>
                </Card>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* RACE Framework Section */}
      <section id="race-framework" className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-race-h2">
              Our Winning Framework: The RACE System
            </h2>
            <p className="text-lg text-primary font-semibold" data-testid="text-race-subtext">
              Marketing is a System, Not a Guessing Game.
            </p>
          </AnimatedSection>

          <div className="hidden md:block overflow-hidden rounded-xl border border-border bg-white shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="px-8 py-4 font-bold text-foreground">Phase</th>
                  <th className="px-8 py-4 font-bold text-foreground">Strategy</th>
                  <th className="px-8 py-4 font-bold text-foreground">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {raceFramework.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <td className="px-8 py-6 font-bold text-primary">{item.phase}</td>
                    <td className="px-8 py-6 text-foreground">{item.strategy}</td>
                    <td className="px-8 py-6 text-muted-foreground font-medium">{item.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden space-y-4">
            {raceFramework.map((item, index) => (
              <Card key={index} className="p-6">
                <div className="text-primary font-bold mb-2">{item.phase}</div>
                <div className="font-semibold mb-1">{item.strategy}</div>
                <div className="text-sm text-muted-foreground">{item.result}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Media Services */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <div className="space-y-4" data-testid={`service-item-${index}`}>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold">{service.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Architecture Method */}
      <section className="py-20 lg:py-32 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-why-h2">
                Why The Architecture Method?
              </h2>
              <p className="text-primary text-xl font-medium mb-8" data-testid="text-why-tagline">
                Enterprise Logic. Creative Pulse.
              </p>
              <ul className="space-y-4">
                {architectureBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
              <div className="relative bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm">
                <div className="aspect-video bg-slate-700/50 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-20 h-20 text-primary/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="final-cta" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="bg-primary rounded-3xl p-12 lg:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 blur-3xl rounded-full -ml-32 -mb-32"></div>
            
            <AnimatedSection className="relative z-10">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6" data-testid="text-cta-headline">
                Ready to upgrade your brand’s operating system?
              </h2>
              <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto" data-testid="text-cta-body">
                The digital world moves fast. Don’t let a broken architecture hold your business back.
              </p>
              <GradientButton 
                className="bg-white text-primary border-white hover:bg-white/90"
                onClick={handleOpenChat}
                data-testid="button-strategy-audit"
              >
                Book Your 15-Minute Strategy Audit
              </GradientButton>
              <p className="mt-6 text-sm text-white/60" data-testid="text-cta-subtext">
                A clear roadmap. No fluff. Guaranteed.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWidget onClick={handleOpenChat} />
      <AIChatModal isOpen={chatOpen} onClose={handleCloseChat} />
    </div>
  );
}
