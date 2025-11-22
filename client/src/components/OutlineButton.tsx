import { Button } from "@/components/ui/button";
import { type ButtonProps } from "@/components/ui/button";

interface OutlineButtonProps extends Omit<ButtonProps, 'variant'> {
  children: React.ReactNode;
}

export default function OutlineButton({ children, className = "", ...props }: OutlineButtonProps) {
  return (
    <Button
      variant="outline"
      className={`border-2 border-white/80 text-white font-semibold px-8 py-3.5 h-auto rounded-lg backdrop-blur-sm bg-white/10 hover:border-white hover:bg-white/20 transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}
