import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Search, Target, Users, Sparkles, CheckCircle } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: "Resume & Job Description Matching",
      description: "AI-powered analysis to match your resume with job requirements and identify skill gaps.",
      benefits: ["Keyword optimization", "Skills alignment", "Experience matching"]
    },
    {
      icon: Search,
      title: "ATS Optimization",
      description: "Ensure your resume passes Applicant Tracking Systems with proper formatting and keywords.",
      benefits: ["Format validation", "ATS-friendly structure", "Parsing optimization"]
    },
    {
      icon: Target,
      title: "Tailored Resume Suggestions", 
      description: "Get specific recommendations to improve your resume for each job application.",
      benefits: ["Personalized tips", "Action verbs", "Achievement quantification"]
    },
    {
      icon: Users,
      title: "Cover Letter Optimization",
      description: "Generate compelling cover letters that complement your optimized resume.",
      benefits: ["Template generation", "Tone matching", "Keyword integration"],
      badge: "Coming Soon"
    },
    {
      icon: Sparkles,
      title: "LinkedIn Profile Enhancement",
      description: "Sync your resume improvements with your LinkedIn profile for consistency.",
      benefits: ["Profile optimization", "Headline suggestions", "Summary enhancement"],
      badge: "Coming Soon"
    },
    {
      icon: CheckCircle,
      title: "Success Tracking",
      description: "Monitor your application success rate and iterate on improvements.",
      benefits: ["Analytics dashboard", "Progress tracking", "Success metrics"],
      badge: "Coming Soon"
    }
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Powerful Features for Job Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to optimize your resume, pass ATS systems, and land your dream job.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="relative group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 bg-gradient-card">
              {feature.badge && (
                <div className="absolute -top-2 -right-2 z-10">
                  <span className="bg-secondary text-secondary-foreground text-xs font-medium px-2 py-1 rounded-full shadow-sm">
                    {feature.badge}
                  </span>
                </div>
              )}
              
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-success mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;