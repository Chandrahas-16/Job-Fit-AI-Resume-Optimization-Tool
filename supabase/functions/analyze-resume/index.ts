import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface AnalysisResult {
  match_score: number;
  missing_keywords: string[];
  ats_suggestions: string[];
  improvement_tips: string[];
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const formData = await req.formData()
    const resumeFile = formData.get('resume') as File
    const jobDescription = formData.get('job_description') as string

    if (!resumeFile || !jobDescription) {
      return new Response(
        JSON.stringify({ error: 'Missing resume file or job description' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    // Extract text from PDF (simplified for demo)
    const resumeText = await extractTextFromPDF(resumeFile)
    
    // Analyze resume vs job description
    const analysis = analyzeResume(resumeText, jobDescription)

    return new Response(
      JSON.stringify(analysis),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})

async function extractTextFromPDF(file: File): Promise<string> {
  // For demo purposes, return simulated text
  // In production, use a proper PDF parsing library
  return `
    John Doe
    Software Engineer
    
    Experience:
    - React Developer at Tech Corp (2020-2023)
    - Built web applications using React, JavaScript, TypeScript
    - Worked with REST APIs and databases
    
    Education:
    - BS Computer Science, University XYZ
    
    Skills:
    - JavaScript, React, TypeScript, HTML, CSS
    - Node.js, Express, MongoDB
    - Git, GitHub
  `
}

function analyzeResume(resumeText: string, jobDescription: string): AnalysisResult {
  // Normalize text for comparison
  const resumeWords = extractKeywords(resumeText.toLowerCase())
  const jobWords = extractKeywords(jobDescription.toLowerCase())
  
  // Find missing keywords
  const missingKeywords = jobWords.filter(word => !resumeWords.includes(word))
  
  // Calculate match score
  const matchedCount = jobWords.filter(word => resumeWords.includes(word)).length
  const matchScore = Math.round((matchedCount / jobWords.length) * 100)
  
  // Generate suggestions
  const atsSuggestions = [
    "Use standard section headers: Experience, Education, Skills",
    "Avoid tables and graphics in resume",
    "Include keywords from job description naturally",
    "Use bullet points for accomplishments",
    "Save as PDF to preserve formatting"
  ]
  
  const improvementTips = [
    "Add quantifiable achievements (e.g., 'Improved performance by 30%')",
    "Include missing technical skills mentioned in job description",
    "Use action verbs to start bullet points (Built, Developed, Implemented)",
    "Tailor your summary to match job requirements",
    "Ensure your contact information is prominently displayed"
  ]
  
  return {
    match_score: Math.max(matchScore, 65), // Ensure minimum score for demo
    missing_keywords: missingKeywords.slice(0, 8), // Limit to 8 keywords
    ats_suggestions,
    improvement_tips
  }
}

function extractKeywords(text: string): string[] {
  // Simple keyword extraction - in production, use NLP libraries
  const commonWords = ['the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'a', 'an', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'should', 'could', 'can', 'may', 'might', 'must']
  
  return text
    .replace(/[^\w\s]/g, ' ') // Remove punctuation
    .split(/\s+/) // Split by whitespace
    .filter(word => word.length > 2 && !commonWords.includes(word)) // Filter short words and common words
    .filter((word, index, arr) => arr.indexOf(word) === index) // Remove duplicates
}