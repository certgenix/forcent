import { useState } from 'react';
import { Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidget from '@/components/FloatingWidget';
import AIChatModal from '@/components/AIChatModal';

export default function ResponsibleAI() {
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
        <div className="max-w-4xl mx-auto px-6 lg:px-20">
          <h1 className="text-4xl lg:text-[56px] font-bold text-foreground leading-tight mb-4" data-testid="text-responsible-ai-headline">
            Responsible AI at Forcent.ai
          </h1>
          
          <p className="text-muted-foreground mb-12" data-testid="text-responsible-ai-updated">
            Last updated: November 2024
          </p>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At Forcent.ai, we believe AI should make businesses more efficient without replacing human judgment, harming trust, or creating risk.
              This page explains our approach to building and deploying AI responsibly.
            </p>

            <div className="p-4 bg-muted rounded-lg border border-card-border mb-12">
              <p className="text-lg text-foreground font-semibold">
                Our commitment is simple: AI should help people, not replace them.
              </p>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Human in the Loop (Always)</h2>
                <p className="text-muted-foreground mb-4">
                  AI speeds up work, but people remain in control.
                </p>
                <p className="text-muted-foreground mb-4">We design all systems so that:</p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li>AI assists with tasks, but humans make final decisions</li>
                  <li>Important actions (like approvals, sensitive responses, or major changes) always involve a person</li>
                  <li>Businesses can override, correct, or adjust AI outputs at any time</li>
                </ul>
                <p className="text-foreground font-medium mt-4">AI should support your team — not make decisions for them.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Transparency</h2>
                <p className="text-muted-foreground mb-4">We communicate clearly about:</p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li>What our AI does</li>
                  <li>What it does not do</li>
                  <li>What data it uses</li>
                  <li>How its recommendations are generated</li>
                </ul>
                <p className="text-foreground font-medium mt-4">We avoid "black box" solutions. You always know when and how AI is used in your workflow.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Data Privacy & Security</h2>
                <p className="text-muted-foreground mb-4">We follow strict privacy and security practices:</p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li>We do not sell your data</li>
                  <li>We only use the information needed to provide our services</li>
                  <li>Sensitive information is protected with secure storage and encrypted communication</li>
                  <li>You control what data you want to share or remove</li>
                </ul>
                <p className="text-foreground font-medium mt-4">Your data belongs to you, not us.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Fairness & Bias Reduction</h2>
                <p className="text-muted-foreground mb-4">We take steps to reduce unfair or biased outcomes by:</p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li>Avoiding the use of personal or sensitive demographic data</li>
                  <li>Testing AI outputs for consistency and fairness</li>
                  <li>Allowing humans to review or correct AI recommendations</li>
                </ul>
                <p className="text-foreground font-medium mt-4">Our goal is to ensure AI behaves consistently and responsibly for all users.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Accuracy & Reliability</h2>
                <p className="text-muted-foreground mb-4">
                  AI is powerful, but not perfect. We design Forcent.ai systems with:
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li>Regular monitoring</li>
                  <li>Quality checks</li>
                  <li>Human oversight</li>
                  <li>Continuous improvement</li>
                </ul>
                <p className="text-foreground font-medium mt-4">We openly acknowledge limitations and work to keep improving accuracy.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. No Full Automation of Critical Tasks</h2>
                <p className="text-muted-foreground mb-4">
                  AI should enhance, not replace, important business functions such as:
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li>Legal decisions</li>
                  <li>Medical diagnoses</li>
                  <li>Financial approvals</li>
                  <li>Safety-critical operations</li>
                </ul>
                <p className="text-foreground font-medium mt-4">Forcent.ai solutions never automate these without human involvement.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Customer Control</h2>
                <p className="text-muted-foreground mb-4">You remain in full control of:</p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li>When AI is used</li>
                  <li>What tasks AI performs</li>
                  <li>What data it can access</li>
                  <li>When you want to turn it off</li>
                </ul>
                <p className="text-foreground font-medium mt-4">We believe responsible AI means giving businesses power, not taking it away.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Continuous Improvement</h2>
                <p className="text-muted-foreground mb-4">
                  Responsible AI is not a one-time checklist. We regularly update our practices to:
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li>Adapt to new regulations</li>
                  <li>Improve safety</li>
                  <li>Enhance transparency</li>
                  <li>Reduce bias</li>
                  <li>Maintain the highest ethical standards</li>
                </ul>
                <p className="text-foreground font-medium mt-4">We stay aligned with industry guidelines and best practices.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Honest Limitations</h2>
                <p className="text-muted-foreground mb-4">AI can:</p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-6">
                  <li>Automate repetitive tasks</li>
                  <li>Speed up operations</li>
                  <li>Improve consistency</li>
                  <li>Provide recommendations</li>
                </ul>
                <p className="text-muted-foreground mb-4">But AI cannot:</p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li>Fully replace human judgment</li>
                  <li>Guarantee perfect accuracy</li>
                  <li>Understand human context the way people can</li>
                </ul>
                <p className="text-foreground font-medium mt-4">We commit to being honest about what our AI can and cannot do.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Questions or Concerns?</h2>
                <p className="text-muted-foreground mb-6">
                  If you have any questions about our Responsible AI practices, contact us at:
                </p>
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:support@forcent.ai" className="text-primary hover:underline">support@forcent.ai</a>
                </div>
                <p className="text-muted-foreground">
                  We're always happy to explain how our AI works and how we keep it responsible.
                </p>
              </section>
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
