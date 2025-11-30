import { useState } from 'react';
import { ArrowLeft, Mail, Globe } from 'lucide-react';
import { Link } from 'wouter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWidget from '@/components/FloatingWidget';
import AIChatModal from '@/components/AIChatModal';

export default function PrivacyPolicy() {
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
          <Link href="/">
            <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8" data-testid="link-back-home">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
          </Link>

          <h1 className="text-4xl lg:text-[56px] font-bold text-foreground leading-tight mb-4" data-testid="text-privacy-headline">
            Privacy Policy
          </h1>
          
          <p className="text-muted-foreground mb-12" data-testid="text-privacy-updated">
            Last updated: November 2024
          </p>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Forcent.ai ("we", "our", or "us") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, protect, and share your information when you visit our website or use our services.
            </p>

            <p className="text-lg text-foreground font-medium mb-12">
              Our goal is simple: treat your information the way we'd want ours to be treated — with care, respect, and full transparency.
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We collect only the information we need to provide our services, improve them, and communicate with you.
                </p>
                <p className="text-muted-foreground mb-4">We may collect:</p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li><strong className="text-foreground">Contact information:</strong> name, email, phone number, business name</li>
                  <li><strong className="text-foreground">Information you share with us:</strong> details about your business, challenges, or workflows</li>
                  <li><strong className="text-foreground">Usage information:</strong> how you use our website, what pages you visit</li>
                  <li><strong className="text-foreground">Booking information:</strong> when you schedule a call or request a demo</li>
                  <li><strong className="text-foreground">AI conversation data:</strong> if you interact with our AI assistant, we collect the messages you send so we can respond and improve</li>
                </ul>
                <p className="text-foreground font-medium mt-4">We do NOT collect unnecessary personal data.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">We use your information to:</p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li>Deliver our services</li>
                  <li>Respond to your requests or questions</li>
                  <li>Book calls, demos, or consultations</li>
                  <li>Improve our website and AI tools</li>
                  <li>Send helpful updates or important service information</li>
                  <li>Personalize your experience</li>
                </ul>
                <div className="mt-6 p-4 bg-muted rounded-lg border border-card-border">
                  <p className="text-foreground font-semibold">We never sell your data.</p>
                  <p className="text-foreground font-semibold">We never share it with advertisers.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. AI Assistant & Automation Tools</h2>
                <p className="text-muted-foreground mb-4">If you talk to our AI assistant (voice or chat), we may keep a record of:</p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li>What you asked</li>
                  <li>Our responses</li>
                  <li>Booking preferences</li>
                </ul>
                <p className="text-muted-foreground mt-4 mb-4">This helps us:</p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li>Improve the accuracy of our AI</li>
                  <li>Understand your business needs</li>
                  <li>Provide better service</li>
                </ul>
                <p className="text-foreground font-medium mt-4">We do not use your AI conversations to train public AI models.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. How We Protect Your Information</h2>
                <p className="text-muted-foreground mb-4">We take privacy seriously and protect your data through:</p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li>Secure systems and encrypted connections</li>
                  <li>Restricted access within our team</li>
                  <li>Secure third-party tools that meet industry standards</li>
                </ul>
                <p className="text-muted-foreground mt-4">We only work with trusted service providers who follow strict privacy rules.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Sharing Your Information</h2>
                <p className="text-muted-foreground mb-4">We only share your data when necessary, such as:</p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li>With trusted partners who help us run our business (e.g., calendar tools, analytics, secure hosting)</li>
                  <li>When you ask us to</li>
                  <li>When required by law</li>
                </ul>
                <p className="text-foreground font-medium mt-4">We never sell your information or share it for advertising purposes.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Cookies & Website Tracking</h2>
                <p className="text-muted-foreground mb-4">Like most websites, we use cookies to:</p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li>Understand how visitors use our site</li>
                  <li>Improve performance</li>
                  <li>Provide a smoother browsing experience</li>
                </ul>
                <p className="text-muted-foreground mt-4">You can disable cookies in your browser at any time.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
                <p className="text-muted-foreground mb-4">You have the right to:</p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li>Access the information we have about you</li>
                  <li>Ask us to correct or update your information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt out of emails or communication at any time</li>
                </ul>
                <div className="mt-6 p-4 bg-muted rounded-lg border border-card-border flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">To make a request, contact us at: <a href="mailto:privacy@forcent.ai" className="text-primary hover:underline">privacy@forcent.ai</a></p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Data Retention</h2>
                <p className="text-muted-foreground mb-4">We keep your information only as long as it's necessary:</p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li>To provide services</li>
                  <li>To meet legal obligations</li>
                  <li>To maintain accurate records</li>
                </ul>
                <p className="text-muted-foreground mt-4">If you stop using our services, you can request deletion anytime.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Third-Party Links</h2>
                <p className="text-muted-foreground">
                  Our website may link to external websites. We are not responsible for the privacy practices of other sites, so we recommend reviewing their policies too.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy as our services grow or privacy laws change. When we do, we will update the "Last updated" date at the top of the page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Us</h2>
                <p className="text-muted-foreground mb-6">
                  If you have any questions, concerns, or requests regarding your privacy, contact us anytime:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:privacy@forcent.ai" className="text-primary hover:underline">privacy@forcent.ai</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-primary" />
                    <a href="https://forcent.ai" className="text-primary hover:underline">https://forcent.ai</a>
                  </div>
                </div>
                <p className="text-muted-foreground mt-6">
                  We're here to help and happy to answer any questions.
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
