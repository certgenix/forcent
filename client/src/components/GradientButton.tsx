import { Button } from "@/components/ui/button";
import { type ButtonProps } from "@/components/ui/button";

interface GradientButtonProps extends Omit<ButtonProps, 'variant'> {
  children: React.ReactNode;
}

export default function GradientButton({ children, className = "", ...props }: GradientButtonProps) {
  return (
    <Button
      className={`bg-gradient-brand text-white font-semibold px-8 py-4 h-auto rounded-lg hover:brightness-110 hover:-translate-y-0.5 transition-all duration-200 hover:shadow-lg hover:shadow-blue-400/30 active:translate-y-0 active:shadow-none ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}
