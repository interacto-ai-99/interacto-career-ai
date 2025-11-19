import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-md">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Interacto AI
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              About
            </a>
          </nav>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
