import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileText, Zap, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const UploadSection = () => {
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type === "application/pdf" || selectedFile.name.endsWith('.docx')) {
        setFile(selectedFile);
        toast({
          title: "File uploaded successfully",
          description: `${selectedFile.name} is ready for analysis.`,
        });
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF or DOCX file.",
          variant: "destructive",
        });
      }
    }
  };

  const handleAnalyze = async () => {
    if (!file || !jobDescription.trim()) {
      toast({
        title: "Missing information",
        description: "Please upload a resume and add a job description.",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsAnalyzing(false);
      toast({
        title: "Analysis complete!",
        description: "Your resume has been analyzed. Check the results below.",
      });
      
      // Scroll to results
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
    }, 3000);
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Start Your Resume Analysis
          </h2>
          <p className="text-xl text-muted-foreground">
            Upload your resume and paste the job description to get instant AI-powered feedback.
          </p>
        </div>

        <Card className="shadow-lg border-border/50 bg-gradient-card">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-2xl">
              <Zap className="w-6 h-6 text-primary" />
              AI Resume Analyzer
            </CardTitle>
            <CardDescription>
              Get your personalized resume optimization report in seconds
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* File Upload */}
            <div className="space-y-2">
              <Label htmlFor="resume-upload" className="text-base font-medium">
                Upload Your Resume
              </Label>
              <div className="relative">
                <Input
                  id="resume-upload"
                  type="file"
                  accept=".pdf,.docx"
                  onChange={handleFileChange}
                  className="cursor-pointer file:cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-primary file:text-primary-foreground hover:file:bg-primary-hover"
                />
                {file && (
                  <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                    <FileText className="w-4 h-4" />
                    <span>{file.name}</span>
                  </div>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                Supports PDF and DOCX formats (max 10MB)
              </p>
            </div>

            {/* Job Description */}
            <div className="space-y-2">
              <Label htmlFor="job-description" className="text-base font-medium">
                Job Description
              </Label>
              <Textarea
                id="job-description"
                placeholder="Paste the job description here... Include required skills, qualifications, and responsibilities for the best analysis."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                className="min-h-[150px] resize-none"
              />
              <p className="text-sm text-muted-foreground">
                The more detailed the job description, the better the analysis
              </p>
            </div>

            {/* Analyze Button */}
            <div className="pt-4">
              <Button
                onClick={handleAnalyze}
                disabled={isAnalyzing || !file || !jobDescription.trim()}
                variant="hero"
                size="xl"
                className="w-full"
              >
                {isAnalyzing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Analyzing Your Resume...
                  </>
                ) : (
                  <>
                    <Upload className="w-5 h-5 mr-2" />
                    Analyze Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </div>

            {/* Features reminder */}
            <div className="border-t pt-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="space-y-1">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Upload className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-sm font-medium">Instant Upload</p>
                  <p className="text-xs text-muted-foreground">PDF & DOCX support</p>
                </div>
                <div className="space-y-1">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-sm font-medium">AI Analysis</p>
                  <p className="text-xs text-muted-foreground">30-second processing</p>
                </div>
                <div className="space-y-1">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <FileText className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-sm font-medium">Detailed Report</p>
                  <p className="text-xs text-muted-foreground">Actionable insights</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default UploadSection;