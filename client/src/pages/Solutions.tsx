import { useState } from 'react';
import { Check, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidget from '@/components/FloatingWidget';
import AIChatModal from '@/components/AIChatModal';

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
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-[56px] font-bold text-foreground leading-tight mb-6" data-testid="text-solutions-headline">
              Our Solutions
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Two powerful pillars working together to grow and protect your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <Card className="p-8 lg:p-10 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
                  THE OFFENSE
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2" data-testid="text-solutions-growth-headline">
                  Virtual Employees & Automation
                </h2>
                <p className="text-xl text-primary font-medium">
                  "Make more profit with less work."
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">What We Build:</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">1. AI Virtual Employees</h4>
                    <p className="text-muted-foreground">
                      Intelligent agents that handle sales qualification, customer support, and scheduling 24/7. They don't sleep, and they cost 90% less than hiring.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">2. Connected Workflows</h4>
                    <p className="text-muted-foreground">
                      We connect your apps so data moves instantly. No more copy-pasting between spreadsheets. Quotes, invoices, and updates happen automatically.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">3. Revenue Acceleration</h4>
                    <p className="text-muted-foreground">
                      Systems that automatically follow up on leads and chase unpaid invoices. We fix the "leaky bucket" in your sales process.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8 p-4 bg-muted rounded-lg">
                <h4 className="font-semibold text-foreground mb-3">Outcome:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium">20+ Hours Saved Per Week</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium">Lower Payroll Costs</span>
                  </div>
                </div>
              </div>

              <Button 
                className="w-full bg-gradient-to-r from-[#00BFFF] via-[#2563EB] to-[#7A5BFF] hover:opacity-90 text-white"
                data-testid="button-see-growth-solutions"
                onClick={handleOpenChat}
              >
                See Growth Solutions
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>

            <Card className="p-8 lg:p-10 border-2 border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold rounded-full text-sm mb-4">
                  THE DEFENSE
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2" data-testid="text-solutions-security-headline">
                  Cybersecurity & Compliance
                </h2>
                <p className="text-xl text-emerald-600 dark:text-emerald-400 font-medium">
                  "Protect your reputation and cash."
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">What We Build:</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">1. Compliance Readiness</h4>
                    <p className="text-muted-foreground">
                      We prepare your business for SOC 2, HIPAA, or ISO standards. This isn't just paperwork—it helps you win bigger clients who demand security.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">2. Threat Protection</h4>
                    <p className="text-muted-foreground">
                      We lock down your email, cloud storage, and devices. We stop ransomware and phishing attacks before they stop your business.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">3. Private AI Environments</h4>
                    <p className="text-muted-foreground">
                      Your Virtual Employees run in a secure, private "box." Your trade secrets and client data are never shared with public AI models.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8 p-4 bg-muted rounded-lg">
                <h4 className="font-semibold text-foreground mb-3">Outcome:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-foreground font-medium">Zero Data Leaks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-foreground font-medium">Trust from Enterprise Clients</span>
                  </div>
                </div>
              </div>

              <Button 
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                data-testid="button-see-security-solutions"
                onClick={handleOpenChat}
              >
                See Security Solutions
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWidget onClick={handleOpenChat} />
      <AIChatModal isOpen={chatOpen} onClose={handleCloseChat} />
    </div>
  );
}
