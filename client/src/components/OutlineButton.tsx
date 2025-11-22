import { Button } from "@/components/ui/button";
import { type ButtonProps } from "@/components/ui/button";

interface OutlineButtonProps extends Omit<ButtonProps, 'variant'> {
  children: React.ReactNode;
}

export default function OutlineButton({ children, className = "", ...props }: OutlineButtonProps) {
  return (
    <Button
      variant="outline"
      className={`border-2 border-border text-foreground font-semibold px-8 py-3.5 h-auto rounded-lg hover:border-primary hover:text-primary hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}
