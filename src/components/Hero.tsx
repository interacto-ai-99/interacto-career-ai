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
              Transform Your Students' Careers with{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Interacto AI
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Empower your college students with AI-driven resume optimization, personalized interview prep, 
              and direct connections to opportunities. Help your institution build job-ready graduates who stand out in the competitive market.
            </p>
            
            <div className="flex flex-col gap-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-primary rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <Button size="lg" className="relative text-lg shadow-lg hover:shadow-xl transition-all py-6" asChild>
                  <a href="mailto:interacto.ai.99@gmail.com" className="flex items-center gap-3">
                    <div className="flex flex-col items-start">
                      <span className="font-bold">Partner With Us</span>
                      <span className="text-xs font-normal opacity-90">Contact: interacto.ai.99@gmail.com</span>
                    </div>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-sm">
                <div className="flex items-center gap-1.5 bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400 px-3 py-1.5 rounded-full border border-green-200 dark:border-green-800">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="font-medium">Limited Offer: 1 Month Free for first 5 customers</span>
                </div>
                <span className="text-muted-foreground ml-1">Perfect for placement cells & career development centers</span>
              </div>
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
              {/* <div>
                <div className="text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Partner Companies</div>
              </div> */}
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
