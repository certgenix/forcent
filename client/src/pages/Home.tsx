import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import WhatYouGet from '@/components/WhatYouGet';
import ThreePillars from '@/components/ThreePillars';
import HowItWorks from '@/components/HowItWorks';
import Investment from '@/components/Investment';
import WhyForceNT from '@/components/WhyForceNT';
import LimitedAvailability from '@/components/LimitedAvailability';
import ExperienceAI from '@/components/ExperienceAI';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import FloatingWidget from '@/components/FloatingWidget';
import AIChatModal from '@/components/AIChatModal';

export default function Home() {
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
      <Hero />
      <Problem />
      <Solution />
      <WhatYouGet />
      <ThreePillars />
      <HowItWorks />
      <Investment />
      <WhyForceNT />
      <LimitedAvailability />
      <ExperienceAI onOpenChat={handleOpenChat} />
      <FinalCTA onOpenChat={handleOpenChat} />
      <Footer />
      <FloatingWidget onClick={handleOpenChat} />
      <AIChatModal isOpen={chatOpen} onClose={handleCloseChat} />
    </div>
  );
}
