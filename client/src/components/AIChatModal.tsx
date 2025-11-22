import { useState } from 'react';
import { X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import logoImage from '@assets/logo3_1763807336531.png';

interface AIChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AIChatModal({ isOpen, onClose }: AIChatModalProps) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'ai',
      content: 'Hi! I\'m ForceNT\'s virtual employee. I can help you understand how we can grow your business. What would you like to know?'
    }
  ]);

  const handleSend = () => {
    if (!message.trim()) return;
    
    setMessages([...messages, { role: 'user', content: message }]);
    setMessage('');
    
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'ai',
        content: 'Thanks for your message! In a real implementation, I would provide detailed responses about ForceNT\'s services.'
      }]);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center lg:items-stretch lg:justify-end">
      <div 
        className="absolute inset-0 bg-black/30"
        onClick={onClose}
        data-testid="overlay-chat-modal"
      />
      
      <div className="relative bg-white w-full max-w-md h-full lg:max-h-screen shadow-2xl flex flex-col animate-fade-in">
        <div className="bg-muted border-b border-card-border p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <img 
                src={logoImage} 
                alt="ForceNT" 
                className="h-6"
                data-testid="img-chat-logo"
              />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#10B981] rounded-full" data-testid="status-chat-online" />
                <span className="text-xs text-muted-foreground font-medium" data-testid="text-chat-status">
                  Online Now
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-close-chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <h3 className="text-lg font-semibold text-foreground" data-testid="text-chat-title">
            ForceNT Virtual Employee
          </h3>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              data-testid={`message-${index}`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-3 ${
                  msg.role === 'user'
                    ? 'bg-secondary text-secondary-foreground'
                    : 'bg-primary text-primary-foreground'
                }`}
                data-testid={`bubble-${msg.role}-${index}`}
              >
                <p className="text-sm leading-relaxed">{msg.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-card-border p-4">
          <div className="flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-1"
              data-testid="input-chat-message"
            />
            <Button
              onClick={handleSend}
              className="bg-gradient-brand text-white hover:brightness-110 px-4"
              data-testid="button-send-message"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
