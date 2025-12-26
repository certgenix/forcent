import { useState } from 'react';
import { ArrowLeft, Clock, TrendingUp, Briefcase, Calendar, FileText, Target, Zap, UserCheck, ClipboardList } from 'lucide-react';
import { Link } from 'wouter';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidget from '@/components/FloatingWidget';
import AIChatModal from '@/components/AIChatModal';
import { AnimatedSection, ScaleIn } from '@/components/AnimatedSection';

const problems = [
  'Slow or inconsistent follow-ups',
  'Manual onboarding and document collection',
  'Missed renewals',
  'Client communication delays',
  'Time-consuming admin work'
];

const solutions = [
  { icon: Target, text: 'Leads screened automatically' },
  { icon: Calendar, text: 'Calendar booked without back-and-forth' },
  { icon: FileText, text: 'Proposals drafted instantly' },
  { icon: UserCheck, text: 'Clients onboarded faster' },
  { icon: ClipboardList, text: 'Documents requested automatically' },
  { icon: Zap, text: 'Weekly progress summaries generated' }
];

const outcomes = [
  { metric: 'More', label: 'Signed clients' },
  { metric: 'Faster', label: 'Turnaround' },
  { metric: 'Fewer', label: 'Admin tasks' },
  { metric: 'Higher', label: 'Retention' }
];

const supports = ['Law', 'Accounting', 'Consulting', 'HR', 'Recruiting', 'Financial Services', 'Agencies'];

export default function ProfessionalServices() {
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
          <Link href="/industries">
            <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8" data-testid="link-back-industries">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Industries</span>
            </button>
          </Link>

          <AnimatedSection className="max-w-4xl mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <Badge variant="secondary" className="text-sm">Professional Services</Badge>
            </div>
            
            <h1 className="text-4xl lg:text-[56px] font-bold text-foreground leading-tight mb-6" data-testid="text-professional-headline">
              Win More Clients. Reduce Operational Friction. Deliver Faster.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-professional-subheadline">
              We automate repetitive tasks—lead intake, proposals, renewals, and communication—so you 
              can focus on high-value work, not admin.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <ScaleIn delay={0.1}>
              <Card className="p-8 h-full">
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
            </ScaleIn>

            <ScaleIn delay={0.2}>
              <Card className="p-8 h-full">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3" data-testid="text-solutions-title">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  How AI Helps Your Practice
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
                    <div className="text-muted-foreground">{outcome.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mb-20">
              <h2 className="text-2xl font-bold text-foreground text-center mb-8" data-testid="text-supports-title">
                Who We Support
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
          </AnimatedSection>

          <ScaleIn delay={0.4}>
            <div className="bg-gradient-brand rounded-xl p-8 lg:p-12 text-center text-white">
              <h2 className="text-3xl lg:text-[36px] font-bold mb-4" data-testid="text-cta-headline">
                Ready to Scale Your Practice?
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto" data-testid="text-cta-subheadline">
                Get a free diagnosis of your bottlenecks and see how AI can accelerate your growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleOpenChat}
                  className="bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-white/90 transition-colors"
                  data-testid="button-start-diagnosis"
                >
                  Start Your Diagnosis
                </button>
                <button 
                  onClick={handleOpenChat}
                  className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
                  data-testid="button-talk-ai"
                >
                  Talk to AI Now
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
