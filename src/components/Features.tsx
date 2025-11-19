import { FileText, MessageSquare, Users, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: FileText,
    title: "AI Resume Enhancement",
    description: "Transform your resume with intelligent suggestions, keyword optimization, and industry-specific formatting that gets past ATS systems and impresses recruiters.",
  },
  {
    icon: MessageSquare,
    title: "Personalized Interview Prep",
    description: "Practice with AI-generated questions tailored to your target role and industry. Get real-time feedback on your responses and body language.",
  },
  {
    icon: Sparkles,
    title: "Mock Interviews with Feedback",
    description: "Experience realistic interview scenarios with instant AI analysis. Improve your confidence, communication, and technical skills through guided practice.",
  },
  {
    icon: Users,
    title: "Professional Network & Referrals",
    description: "Connect with industry professionals, get mentorship, and access exclusive referral opportunities from our partner companies.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Land Your Dream Job
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Our comprehensive platform combines cutting-edge AI with proven career strategies 
            to give you the competitive edge in today's job market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
