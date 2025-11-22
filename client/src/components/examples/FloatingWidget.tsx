import FloatingWidget from '../FloatingWidget';

export default function FloatingWidgetExample() {
  return (
    <div className="h-screen bg-gray-100 relative">
      <FloatingWidget onClick={() => console.log('Widget clicked')} />
    </div>
  );
}
