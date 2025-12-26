import { useState } from 'react';
import { ArrowLeft, Clock, TrendingUp, Code, Layers, Smartphone, Database, Zap, Settings, RefreshCw } from 'lucide-react';
import { Link } from 'wouter';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidget from '@/components/FloatingWidget';
import AIChatModal from '@/components/AIChatModal';

const problems = [
  '"Cookie-cutter" software that limits your growth',
  'Development projects that go over budget and timeline',
  'Apps that break under real-world usage',
  'Disconnected systems that don\'t talk to each other',
  'Legacy code that\'s impossible to maintain or scale'
];

const solutions = [
  { icon: Code, text: 'Custom full-stack engineering tailored to your business' },
  { icon: Smartphone, text: 'Mobile apps (iOS & Android) built for performance' },
  { icon: Database, text: 'Scalable backend infrastructure and APIs' },
  { icon: Layers, text: 'System integrations that connect your tools' },
  { icon: RefreshCw, text: 'Legacy system modernization and migration' },
  { icon: Settings, text: 'Ongoing maintenance and support' }
];

const outcomes = [
  { metric: 'Custom', label: 'Built for your needs' },
  { metric: 'Scalable', label: 'From Day 1' },
  { metric: 'Faster', label: 'Time to market' },
  { metric: 'Lower', label: 'Total cost of ownership' }
];

const supports = ['Web Applications', 'Mobile Apps', 'APIs & Integrations', 'Enterprise Platforms', 'E-commerce', 'SaaS Products'];

export default function SoftwareDevelopment() {
  const [chatOpen, setChatOpen] = useState(false);

  const handleOpenChat = () => {
    setChatOpen(true);
  };

  const handleCloseChat = () => {
    setChatOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <Link href="/solutions">
            <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8" data-testid="link-back-solutions">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Solutions</span>
            </button>
          </Link>

          <div className="max-w-4xl mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <Badge variant="secondary" className="text-sm">Software Development</Badge>
            </div>
            
            <h1 className="text-4xl lg:text-[56px] font-bold text-foreground leading-tight mb-6" data-testid="text-software-headline">
              Build Software That Drives Revenue.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-software-subheadline">
              Don't settle for off-the-shelf limitations. We engineer custom software solutions, mobile apps, and platforms that fit your specific business needs—built to scale from Day 1.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3" data-testid="text-problems-title">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-destructive" />
                </div>
                What We Fix
              </h2>
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start gap-3" data-testid={`text-problem-${index}`}>
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{problem}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3" data-testid="text-solutions-title">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                How We Solve It
              </h2>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3" data-testid={`text-solution-${index}`}>
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <solution.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground pt-1">{solution.text}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="bg-muted border border-card-border rounded-xl p-8 lg:p-12 mb-20">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-10" data-testid="text-outcomes-title">
              Outcomes You Can Expect
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {outcomes.map((outcome, index) => (
                <div key={index} className="text-center" data-testid={`card-outcome-${index}`}>
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{outcome.metric}</div>
                  <div className="text-muted-foreground">{outcome.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8" data-testid="text-supports-title">
              What We Build
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {supports.map((support, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="text-base px-4 py-2"
                  data-testid={`badge-support-${index}`}
                >
                  {support}
                </Badge>
              ))}
            </div>
          </div>

          <div className="bg-gradient-brand rounded-xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl lg:text-[36px] font-bold mb-4" data-testid="text-cta-headline">
              Ready to Build Something Great?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto" data-testid="text-cta-subheadline">
              Get a free consultation to discuss your software requirements and see how we can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleOpenChat}
                className="bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-white/90 transition-colors"
                data-testid="button-book-consultation"
              >
                Book Free Consultation
              </button>
              <button 
                onClick={handleOpenChat}
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
                data-testid="button-talk-ai"
              >
                Talk to AI Assistant
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWidget onClick={handleOpenChat} />
      <AIChatModal isOpen={chatOpen} onClose={handleCloseChat} />
    </div>
  );
}
