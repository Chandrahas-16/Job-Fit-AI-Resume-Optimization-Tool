import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Download, RefreshCw, Star, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";

const ResultsDashboard = () => {
  // Mock data - in real app this would come from the backend
  const analysisResults = {
    matchScore: 78,
    missingKeywords: ["React", "TypeScript", "Agile", "API Development", "Cloud Computing"],
    atsOptimizations: [
      "Add a 'Technical Skills' section with bullet points",
      "Use standard section headers: 'Work Experience', 'Education', 'Skills'",
      "Remove tables and graphics from the resume",
      "Use a standard font like Arial or Calibri",
      "Save as both PDF and .docx formats"
    ],
    improvementTips: [
      {
        category: "Skills Enhancement",
        tip: "Add missing technical skills: React, TypeScript, and Cloud Computing",
        priority: "high"
      },
      {
        category: "Experience Formatting",
        tip: "Use action verbs to start each bullet point (e.g., 'Developed', 'Implemented', 'Led')",
        priority: "medium"
      },
      {
        category: "Quantify Achievements",
        tip: "Add specific numbers and metrics to demonstrate impact (e.g., 'Increased efficiency by 25%')",
        priority: "high"
      },
      {
        category: "Keywords Integration",
        tip: "Naturally integrate job-specific keywords throughout your experience descriptions",
        priority: "medium"
      }
    ]
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-success";
    if (score >= 60) return "text-primary";
    return "text-destructive";
  };

  const getScoreDescription = (score: number) => {
    if (score >= 80) return "Excellent match! Your resume aligns well with the job requirements.";
    if (score >= 60) return "Good match with room for improvement. Follow the suggestions below.";
    return "Significant improvements needed to match job requirements.";
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return <AlertTriangle className="w-4 h-4 text-destructive" />;
      case "medium":
        return <TrendingUp className="w-4 h-4 text-primary" />;
      default:
        return <CheckCircle className="w-4 h-4 text-success" />;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge variant="destructive">High Priority</Badge>;
      case "medium":
        return <Badge variant="secondary">Medium Priority</Badge>;
      default:
        return <Badge variant="outline">Low Priority</Badge>;
    }
  };

  return (
    <section id="results" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Your Resume Analysis Results
          </h2>
          <p className="text-xl text-muted-foreground">
            AI-powered insights to optimize your resume for better job matching
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Match Score Card */}
          <div className="lg:col-span-1">
            <Card className="h-full shadow-lg border-border/50 bg-gradient-card">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  Match Score
                </CardTitle>
                <CardDescription>
                  How well your resume matches the job
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="relative">
                  <div className={`text-6xl font-bold ${getScoreColor(analysisResults.matchScore)}`}>
                    {analysisResults.matchScore}%
                  </div>
                  <Progress 
                    value={analysisResults.matchScore} 
                    className="mt-4 h-3"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  {getScoreDescription(analysisResults.matchScore)}
                </p>
                <div className="pt-4 space-y-2">
                  <Button variant="hero" size="lg" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download Optimized Resume
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Analyze Another Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Missing Keywords & ATS Suggestions */}
          <div className="lg:col-span-2 space-y-8">
            {/* Missing Keywords */}
            <Card className="shadow-lg border-border/50 bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Missing Keywords
                </CardTitle>
                <CardDescription>
                  Important keywords from the job description not found in your resume
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {analysisResults.missingKeywords.map((keyword, index) => (
                    <Badge key={index} variant="outline" className="text-sm py-1 px-3">
                      {keyword}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Consider incorporating these keywords naturally into your resume content.
                </p>
              </CardContent>
            </Card>

            {/* ATS Optimization */}
            <Card className="shadow-lg border-border/50 bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  ATS Optimization Suggestions
                </CardTitle>
                <CardDescription>
                  Ensure your resume passes Applicant Tracking Systems
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {analysisResults.atsOptimizations.map((suggestion, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-success" />
                      </div>
                      <span className="text-sm">{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Improvement Tips */}
        <div className="mt-12">
          <Card className="shadow-lg border-border/50 bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-primary" />
                Improvement Tips
              </CardTitle>
              <CardDescription>
                Personalized recommendations to enhance your resume
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {analysisResults.improvementTips.map((tip, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg bg-muted/20">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {getPriorityIcon(tip.priority)}
                        <h4 className="font-medium">{tip.category}</h4>
                      </div>
                      {getPriorityBadge(tip.priority)}
                    </div>
                    <p className="text-sm text-muted-foreground">{tip.tip}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Bar */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-primary rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Apply with Confidence?</h3>
            <p className="text-white/90 mb-6">
              Your optimized resume is ready to help you land more interviews
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                <Download className="w-5 h-5 mr-2" />
                Download Final Resume
              </Button>
              <Button variant="ghost" size="lg" className="text-white border-white/30 hover:bg-white/10">
                Analyze Another Job
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsDashboard;