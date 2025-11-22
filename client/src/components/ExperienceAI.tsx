import { Mic } from 'lucide-react';
import GradientButton from './GradientButton';
import OutlineButton from './OutlineButton';

interface ExperienceAIProps {
  onOpenChat: () => void;
}

export default function ExperienceAI({ onOpenChat }: ExperienceAIProps) {
  return (
    <section id="experience" className="bg-[#0F1B3D] py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-20 text-center">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-brand flex items-center justify-center">
              <Mic className="w-10 h-10 text-white" strokeWidth={2} data-testid="icon-microphone" />
            </div>
            <div className="absolute inset-0 rounded-full bg-blue-400 opacity-30 animate-ping" />
          </div>
        </div>

        <h2 className="text-3xl lg:text-[36px] font-bold text-white mb-6" data-testid="text-experience-headline">
          Experience It
        </h2>
        
        <p className="text-xl text-white mb-4" data-testid="text-experience-subheadline">
          Meet a Virtual Employee
        </p>
        
        <p className="text-lg text-gray-300 mb-10 leading-relaxed" data-testid="text-experience-description">
          Try what we build. This virtual employee qualifies leads, answers questions, and books meetings—automatically.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <GradientButton 
            onClick={onOpenChat}
            data-testid="button-experience-primary"
          >
            Talk to Our Virtual Employee
          </GradientButton>
          <OutlineButton 
            className="border-white text-white hover:bg-white/10 hover:border-white"
            onClick={() => console.log('Schedule call clicked')}
            data-testid="button-experience-secondary"
          >
            Prefer to talk to a human? Schedule a Call
          </OutlineButton>
        </div>
      </div>
    </section>
  );
}
