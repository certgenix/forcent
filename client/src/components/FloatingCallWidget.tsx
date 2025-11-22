import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FloatingCallWidget() {
  const handleCallClick = () => {
    // This could open a modal, initiate a call, or navigate to contact
    window.location.href = '#contact';
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="icon"
        onClick={handleCallClick}
        className="relative w-20 h-20 rounded-full bg-primary hover:bg-primary shadow-2xl group overflow-visible"
        data-testid="button-floating-call"
      >
        {/* Avatar container with glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-1">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center overflow-hidden">
            {/* Avatar - you can replace this with an actual image */}
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-2xl font-bold">
              AI
            </div>
          </div>
        </div>

        {/* Outer glow ring animation */}
        <div className="absolute inset-0 rounded-full border-4 border-blue-400/30 animate-pulse" />
        <div className="absolute inset-0 rounded-full border-2 border-white/40" />

        {/* Green online status indicator */}
        <div className="absolute top-1 left-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-lg z-10">
          <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75" />
        </div>

        {/* Phone icon badge */}
        <div className="absolute bottom-0 right-0 w-10 h-10 bg-blue-500 rounded-full border-4 border-white flex items-center justify-center shadow-xl z-10">
          <Phone className="w-5 h-5 text-white" />
        </div>

        {/* Hover tooltip */}
        <div className="absolute bottom-full right-0 mb-4 px-4 py-2 bg-foreground text-background text-sm font-medium rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Talk to Our Virtual Employee
        </div>
      </Button>

      {/* Live 24/7 badge */}
      <div className="absolute -top-2 -left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg flex items-center gap-1">
        <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
        Live 24/7
      </div>
    </div>
  );
}
