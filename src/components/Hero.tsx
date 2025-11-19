import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Career Growth</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Career with{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Interacto AI
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Empower your job search with AI-driven resume optimization, personalized interview prep, 
              and direct connections to opportunities. Built for ambitious students ready to stand out.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg group shadow-lg hover:shadow-xl transition-all">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-foreground">10k+</div>
                <div className="text-sm text-muted-foreground">Students Empowered</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Partner Companies</div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:block hidden animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Interacto AI Platform Interface"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
