import { useState } from 'react';
import AIChatModal from '../AIChatModal';
import { Button } from '@/components/ui/button';

export default function AIChatModalExample() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="h-screen bg-gray-100 p-8">
      <Button onClick={() => setIsOpen(true)}>Open Chat Modal</Button>
      <AIChatModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
