import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Recruiting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-background pt-16">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-serif font-medium text-foreground leading-tight">
              Recruiting Solutions
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Handle candidate sourcing, evaluation, and outreach
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link to="/signup">
                <Button size="lg" className="text-base px-8 py-6 bg-[#5B5FED] hover:bg-[#4B4FDD] text-white">
                  Get Started
                </Button>
              </Link>
              <Link to="/demo">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-base px-8 py-6 border-gray-300 hover:bg-gray-50 group text-gray-900"
                >
                  View Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Candidate Sourcing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Automatically discover and qualify top talent from multiple sources. Build comprehensive candidate profiles with enriched data.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Candidate Evaluation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Score and rank candidates based on custom criteria. Get AI-powered insights on candidate fit and potential.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Automated Outreach</h3>
              <p className="text-muted-foreground leading-relaxed">
                Send personalized emails at scale. Track engagement and follow up automatically based on candidate responses.
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
              Streamline your recruiting workflow
            </h2>
            <p className="text-lg text-muted-foreground">
              From sourcing to hiring, automate every step of your recruitment process
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-muted/30 rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-semibold mb-4">Source qualified candidates</h3>
              <p className="text-muted-foreground leading-relaxed">
                Upload your candidate requirements and let Paradigm find matching profiles across LinkedIn, job boards, and your ATS. Automatically enrich profiles with contact information, skills, and employment history.
              </p>
            </div>

            <div className="bg-muted/30 rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-semibold mb-4">Automate initial outreach</h3>
              <p className="text-muted-foreground leading-relaxed">
                Create personalized email sequences that adapt based on candidate responses. Schedule follow-ups automatically and track engagement metrics to optimize your outreach strategy.
              </p>
            </div>

            <div className="bg-muted/30 rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-semibold mb-4">Track application pipelines</h3>
              <p className="text-muted-foreground leading-relaxed">
                Monitor candidate progress through your hiring funnel. Get real-time updates on application status, interview scheduling, and offer acceptance rates all in one place.
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
              Ready to transform your recruiting?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join teams using Axion to hire faster and more efficiently
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/signup">
                <Button 
                  size="lg" 
                  className="text-base px-8 py-6 bg-white text-[#5B5FED] hover:bg-gray-100"
                >
                  Start free trial
                </Button>
              </Link>
              <Link to="/demo">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-base px-8 py-6 border-white/30 bg-transparent text-white hover:bg-white/10 group"
                >
                  Schedule a demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Recruiting;

