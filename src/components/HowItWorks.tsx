import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description: "Sign up in minutes and upload your current resume. Our AI instantly analyzes your experience and career goals.",
  },
  {
    number: "02",
    title: "Get AI-Powered Insights",
    description: "Receive personalized recommendations to enhance your resume, optimize keywords, and highlight your strengths.",
  },
  {
    number: "03",
    title: "Practice & Improve",
    description: "Engage in mock interviews with real-time AI feedback. Build confidence and refine your responses.",
  },
  {
    number: "04",
    title: "Connect & Apply",
    description: "Access exclusive job opportunities, connect with professionals, and get referrals to top companies.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Four simple steps to accelerate your career journey and land interviews at top companies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group flex gap-6 p-6 rounded-xl bg-card hover:shadow-md transition-all duration-300 animate-slide-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
