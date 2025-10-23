import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Table, Sparkles } from "lucide-react";

const Assistant = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-background pt-16">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-serif font-medium text-foreground leading-tight">
              Assistant
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Set up, edit, and analyze sheets across your organization
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button size="lg" className="text-base px-8 py-6 bg-[#5B5FED] hover:bg-[#4B4FDD] text-white">
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base px-8 py-6 border-gray-300 hover:bg-gray-50 group text-gray-900"
              >
                View Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif font-medium text-foreground mb-6">
              Your AI-powered spreadsheet assistant
            </h2>
            <p className="text-lg text-muted-foreground">
              Ask questions, transform data, and automate workflows using natural language
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <MessageSquare className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ask Chatbot for Data</h3>
              <p className="text-muted-foreground leading-relaxed">
                Use our contextually aware engine to query your spreadsheet like a conversation. Ask questions in plain English and get instant answers.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Table className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Organize with Custom Columns</h3>
              <p className="text-muted-foreground leading-relaxed">
                Define custom columns using AI and fetch specific data on demand. Detail the data type and format, prompt for information, and sort to your needs.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Sparkles className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Suggestions</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get AI-powered recommendations for data transformations, formulas, and next steps based on your spreadsheet content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif font-medium text-foreground mb-6">
              Work smarter, not harder
            </h2>
            <p className="text-lg text-muted-foreground">
              Let AI handle the tedious work while you focus on insights
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-muted/30 rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-semibold mb-4">Natural language queries</h3>
              <p className="text-muted-foreground leading-relaxed">
                Simply ask questions like "What's the average revenue by region?" or "Show me top 10 customers by sales" and get instant results. No complex formulas needed.
              </p>
            </div>

            <div className="bg-muted/30 rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-semibold mb-4">Automated data cleaning</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fix formatting issues, remove duplicates, standardize values, and fill missing data with a simple command. Save hours of manual work.
              </p>
            </div>

            <div className="bg-muted/30 rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-semibold mb-4">Collaborative workflows</h3>
              <p className="text-muted-foreground leading-relaxed">
                Work together with your team in real-time. Leave comments, track changes, and share insights all within the spreadsheet interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#5B5FED] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight">
              Transform how you work with spreadsheets
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join teams using Axion Assistant to analyze data faster and smarter
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button 
                size="lg" 
                className="text-base px-8 py-6 bg-white text-[#5B5FED] hover:bg-gray-100"
              >
                Start free trial
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Assistant;

