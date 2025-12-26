import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Clock, TrendingUp, Target, Zap, MessageCircle, CheckCircle, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidget from '@/components/FloatingWidget';
import AIChatModal from '@/components/AIChatModal';
import { AnimatedSection, ScaleIn, StaggeredList } from '@/components/AnimatedSection';

const painPoints = [
  { text: 'Missed leads and slow response times' },
  { text: '"Copy-pasting" data between apps' },
  { text: 'Customer support backlog' },
  { text: 'Human error in data entry' },
  { text: 'Privacy concerns with public AI' },
];

const solutions = [
  { 
    icon: Target, 
    title: '24/7 Sales Agents',
    text: 'Our AI instantly engages leads, qualifies them, and books meetings on your calendar. You never miss an opportunity because you were sleeping.'
  },
  { 
    icon: Zap, 
    title: 'Workflow Automation',
    text: 'We connect your systems (CRM, Email, Finance) so data moves automatically. Quotes turn into invoices and projects instantly.'
  },
  { 
    icon: MessageCircle, 
    title: 'AI Customer Success',
    text: 'Intelligent agents resolve 80% of common support tickets instantly, escalating only the complex issues to your human team.'
  },
  { 
    icon: CheckCircle, 
    title: 'Precision Processing',
    text: "Bots don't make typos. We automate complex forms, document reading (OCR), and data validation with 100% accuracy."
  },
  { 
    icon: Lock, 
    title: 'Private AI Environments',
    text: 'Your "Virtual Employees" work inside a secure, private perimeter. Your proprietary data is never trained on public models.'
  },
];

const outcomes = [
  { metric: 'Instant', label: 'Response Time', subtext: 'Leads replied to in seconds' },
  { metric: 'Zero', label: 'Data Entry', subtext: 'Staff freed for real work' },
  { metric: '24/7', label: 'Availability', subtext: 'Systems never sleep' },
  { metric: 'Lower', label: 'Overhead', subtext: 'Scale without hiring' },
];

const technologies = [
  'OpenAI (GPT-4)',
  'Make.com',
  'Zapier',
  'Microsoft Power Automate',
  'Anthropic Claude',
  'Custom Agents',
];

export default function Solutions() {
  const [chatOpen, setChatOpen] = useState(false);

  const handleOpenChat = () => {
    setChatOpen(true);
  };

  const handleCloseChat = () => {
    setChatOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <Link href="/">
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8" data-testid="link-back-home">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
          </Link>

          <AnimatedSection className="max-w-4xl mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <Badge variant="secondary" className="text-sm">AI & Process Automation</Badge>
            </div>
            
            <h1 className="text-4xl lg:text-[56px] font-bold text-foreground leading-tight mb-6" data-testid="text-solutions-headline">
              Hire Your Digital Workforce.
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground" data-testid="text-solutions-subheadline">
              Scale your operations without increasing headcount. We deploy intelligent AI agents and automated workflows that handle your repetitive sales, support, and admin tasks 24/7—faster and cheaper than humanly possible.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <ScaleIn delay={0.1}>
              <Card className="p-8 h-full">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3" data-testid="text-painpoints-title">
                  <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-destructive" />
                  </div>
                  What We Fix
                </h2>
                <ul className="space-y-4">
                  {painPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`text-painpoint-${index}`}>
                      <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{point.text}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </ScaleIn>

            <ScaleIn delay={0.2}>
              <Card className="p-8 h-full">
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
                      <div>
                        <div className="font-semibold text-foreground">{solution.title}</div>
                        <span className="text-muted-foreground text-sm">{solution.text}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
            </ScaleIn>
          </div>

          <AnimatedSection delay={0.2}>
            <div className="bg-muted border border-card-border rounded-xl p-8 lg:p-12 mb-20">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-10" data-testid="text-outcomes-title">
                Outcomes You Can Expect
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="text-center" data-testid={`card-outcome-${index}`}>
                    <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{outcome.metric}</div>
                    <div className="text-foreground font-medium">{outcome.label}</div>
                    <div className="text-sm text-muted-foreground">{outcome.subtext}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mb-20">
              <h2 className="text-2xl font-bold text-foreground text-center mb-8" data-testid="text-tech-title">
                Technologies We Deploy
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {technologies.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="text-sm px-4 py-2"
                    data-testid={`badge-tech-${index}`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <ScaleIn delay={0.4}>
            <div className="bg-gradient-brand rounded-xl p-8 lg:p-12 text-center text-white">
              <h2 className="text-3xl lg:text-[36px] font-bold mb-4" data-testid="text-cta-headline">
                Ready to Automate the Busywork?
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto" data-testid="text-cta-subheadline">
                See a live demo of a Virtual Employee handling your workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleOpenChat}
                  className="bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-white/90 transition-colors"
                  data-testid="button-watch-demo"
                >
                  Watch the Demo
                </button>
                <button 
                  onClick={handleOpenChat}
                  className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
                  data-testid="button-talk-expert"
                >
                  Talk to an Expert
                </button>
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      <Footer />
      <FloatingWidget onClick={handleOpenChat} />
      <AIChatModal isOpen={chatOpen} onClose={handleCloseChat} />
    </div>
  );
}
