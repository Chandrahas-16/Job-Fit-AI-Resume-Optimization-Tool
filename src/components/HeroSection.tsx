import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, Zap, Target } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-20 pb-16 lg:pt-28 lg:pb-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-6">
            <Zap className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">AI-Powered Resume Optimization</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            AI Resume Optimization
            <br />
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Boost Your Job Chances
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get your resume ATS-ready with AI-powered analysis. Match job descriptions perfectly and land more interviews.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="secondary" 
              size="xl" 
              className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Upload className="w-5 h-5 mr-2" />
              Upload Resume & Analyze
            </Button>
            <Button 
              variant="ghost" 
              size="xl" 
              className="text-white border-white/30 hover:bg-white/10"
            >
              Watch Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Target,
                title: "95% Match Rate",
                description: "Optimize for ATS systems"
              },
              {
                icon: Zap,
                title: "30-Second Analysis",
                description: "Instant feedback & suggestions"
              },
              {
                icon: Upload,
                title: "PDF & DOCX Support",
                description: "Upload any resume format"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <feature.icon className="w-8 h-8 text-white mb-3 mx-auto" />
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/80 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;