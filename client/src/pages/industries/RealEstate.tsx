import { useState } from 'react';
import { Check, ArrowLeft, Clock, Users, TrendingUp, Home, Calendar, FileText, Bell, Star, MessageSquare, MapPin, Building, Key, BarChart3, Zap } from 'lucide-react';
import { Link } from 'wouter';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidget from '@/components/FloatingWidget';
import AIChatModal from '@/components/AIChatModal';
import GradientButton from '@/components/GradientButton';
import OutlineButton from '@/components/OutlineButton';

const problems = [
  'Slow follow-ups',
  'Missed opportunities',
  'Manual viewing coordination',
  'Cold leads that never reactivate',
  'Time-consuming administrative tasks'
];

const solutions = [
  { icon: Zap, text: 'Every lead contacted instantly' },
  { icon: Users, text: 'Qualification handled automatically' },
  { icon: Calendar, text: 'Viewings booked seamlessly' },
  { icon: Building, text: 'Listing info delivered on demand' },
  { icon: MessageSquare, text: 'Mortgage or neighborhood questions answered' },
  { icon: BarChart3, text: 'Weekly pipeline summaries sent to your inbox' }
];

const outcomes = [
  { metric: '3x', label: 'More qualified conversations' },
  { metric: 'Higher', label: 'Conversion rates' },
  { metric: 'Faster', label: 'Deal cycles' },
  { metric: 'Zero', label: 'Pipeline leakage' }
];

const supports = ['Agents', 'Teams', 'Brokers', 'Property Managers', 'STR Operators'];

export default function RealEstate() {
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

          <div className="max-w-4xl mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <Badge variant="secondary" className="text-sm">Real Estate</Badge>
            </div>
            
            <h1 className="text-4xl lg:text-[56px] font-bold text-foreground leading-tight mb-6" data-testid="text-realestate-headline">
              Automate Lead Follow-Up and Booking—24/7
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-realestate-subheadline">
              We help real estate professionals convert more leads by automating qualification, 
              viewing scheduling, and communication.
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
                How AI Helps Your Team
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

          <div className="bg-gradient-brand rounded-xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl lg:text-[36px] font-bold mb-4" data-testid="text-cta-headline">
              Ready to Close More Deals?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto" data-testid="text-cta-subheadline">
              Get a free diagnosis of your pipeline and see how AI can multiply your conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleOpenChat}
                className="bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-white/90 transition-colors"
                data-testid="button-book-diagnosis"
              >
                Book Your Diagnosis
              </button>
              <button 
                onClick={handleOpenChat}
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
                data-testid="button-talk-ai"
              >
                Talk to AI
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
