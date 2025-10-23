import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, FileText, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Consulting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-background pt-16">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-serif font-medium text-foreground leading-tight">
              Consulting Solutions
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Analyze markets and build comprehensive reports
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
                <BarChart3 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Market Analysis</h3>
              <p className="text-muted-foreground leading-relaxed">
                Conduct comprehensive market research with automated data collection. Identify trends, opportunities, and competitive dynamics.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Competitive Benchmarking</h3>
              <p className="text-muted-foreground leading-relaxed">
                Compare companies across key metrics. Build competitive intelligence databases with real-time market data.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <FileText className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Report Generation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Automatically generate client-ready reports. Transform raw data into actionable insights and recommendations.
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
              Deliver insights faster
            </h2>
            <p className="text-lg text-muted-foreground">
              From research to recommendations, accelerate every phase of your consulting projects
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-muted/30 rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-semibold mb-4">Market analysis research</h3>
              <p className="text-muted-foreground leading-relaxed">
                Gather market size data, growth trends, and competitive landscapes automatically. Enrich your research with data from trusted sources and build comprehensive market profiles in hours instead of weeks.
              </p>
            </div>

            <div className="bg-muted/30 rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-semibold mb-4">Competitive benchmarking</h3>
              <p className="text-muted-foreground leading-relaxed">
                Compare companies across revenue, headcount, growth rates, and other key metrics. Build dynamic benchmarking databases that update automatically with the latest market data.
              </p>
            </div>

            <div className="bg-muted/30 rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-semibold mb-4">Automated report generation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Transform spreadsheet data into polished, client-ready reports. Generate executive summaries, data visualizations, and strategic recommendations with AI-powered insights.
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
              Ready to accelerate your research?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join consulting firms using Axion to deliver insights faster
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

export default Consulting;

