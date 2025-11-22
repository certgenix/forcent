import { Mic } from 'lucide-react';

interface FloatingWidgetProps {
  onClick: () => void;
}

export default function FloatingWidget({ onClick }: FloatingWidgetProps) {
  return (
    <>
      <div className="fixed bottom-24 right-6 z-40">
        <div className="bg-white border border-card-border rounded-full px-3 py-1.5 shadow-md mb-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#10B981] rounded-full" data-testid="status-online" />
            <p className="text-xs text-primary font-semibold" data-testid="text-widget-badge">
              Live 24/7
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={onClick}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 z-50 animate-pulse-widget"
        data-testid="button-floating-widget"
      >
        <Mic className="w-6 h-6 text-white" strokeWidth={2} data-testid="icon-widget-mic" />
      </button>
    </>
  );
}
