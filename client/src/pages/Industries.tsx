import { useState } from 'react';
import { Link } from 'wouter';
import { Stethoscope, Briefcase, Wrench, Home, Utensils, HardHat, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidget from '@/components/FloatingWidget';
import AIChatModal from '@/components/AIChatModal';
import GradientButton from '@/components/GradientButton';
import OutlineButton from '@/components/OutlineButton';

const industries = [
  {
    icon: Stethoscope,
    title: 'Healthcare & Dental',
    description: 'Better patient experience. Less admin. More capacity.',
    details: 'We automate patient intake, reminders, insurance checks, and follow-ups so your clinical team can focus on care—not coordination.',
    href: '/industries/healthcare-dental'
  },
  {
    icon: Briefcase,
    title: 'Professional Services',
    description: 'Win more clients without adding workload.',
    details: 'We streamline lead management, onboarding, renewals, and client communication to eliminate admin friction and accelerate growth.',
    href: '/industries/professional-services'
  },
  {
    icon: Wrench,
    title: 'Trades & Home Services',
    description: 'Never miss another job.',
    details: 'We automate quotes, scheduling, reminders, and customer updates so your team stays efficient and your calendar stays full.',
    href: '/industries/trades-home-services'
  },
  {
    icon: Home,
    title: 'Real Estate',
    description: 'Every lead followed up. Every viewing booked.',
    details: 'We automate lead qualification, viewing scheduling, listing information, and cold lead reactivation—so your pipeline moves 24/7.',
    href: '/industries/real-estate'
  },
  {
    icon: Utensils,
    title: 'Hospitality & Retail',
    description: 'Deliver exceptional experiences at scale.',
    details: 'Reservations, customer engagement, reviews, inventory alerts, and loyalty flows—all automated to keep guests coming back.',
    href: '/industries/hospitality-retail'
  },
  {
    icon: HardHat,
    title: 'Construction & Development',
    description: 'Bid faster. Secure your margins. Zero compliance gaps.',
    details: 'We automate the bidding process, subcontractor scheduling, and insurance tracking (COIs). Streamline your project admin while locking down payment security to prevent fraud.',
    href: '/industries/construction'
  }
];

export default function Industries() {
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
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-[56px] font-bold text-foreground leading-tight mb-6" data-testid="text-industries-headline">
              Industries We Serve
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-industries-subheadline">
              We selectively partner with businesses where AI delivers immediate, measurable impact.
              Our focus is on sectors that rely on time-sensitive coordination, customer communication, 
              and manual workflows—areas where automation creates real transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {industries.map((industry, index) => (
              <Link key={index} href={industry.href}>
                <Card 
                  className="p-8 h-full group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  data-testid={`card-industry-${index}`}
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <industry.icon 
                        className="w-8 h-8 text-primary" 
                        strokeWidth={2}
                        data-testid={`icon-industry-${index}`}
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground text-center mb-3" data-testid={`text-industry-title-${index}`}>
                    {industry.title}
                  </h3>
                  
                  <p className="text-primary font-medium text-center mb-4" data-testid={`text-industry-tagline-${index}`}>
                    {industry.description}
                  </p>
                  
                  <p className="text-muted-foreground text-center leading-relaxed mb-6" data-testid={`text-industry-details-${index}`}>
                    {industry.details}
                  </p>
                  
                  <div className="flex items-center justify-center text-primary font-medium group-hover:gap-3 gap-2 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="bg-muted border border-card-border rounded-xl p-12 text-center">
            <h2 className="text-3xl lg:text-[36px] font-bold text-foreground mb-4" data-testid="text-industries-cta-headline">
              Ready to remove the manual work holding your business back?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-industries-cta-subheadline">
              Get a free diagnosis of your bottlenecks and see how AI can transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton 
                onClick={handleOpenChat}
                data-testid="button-industries-diagnosis"
              >
                Start Your Diagnosis
              </GradientButton>
              <OutlineButton 
                onClick={handleOpenChat}
                data-testid="button-industries-talk-ai"
              >
                Talk to Our AI Agent
              </OutlineButton>
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
