import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Zap, Shield } from "lucide-react";

const Enrich = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-background pt-16">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-serif font-medium text-foreground leading-tight">
              Enrich
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Generate data using trusted sources and integrations
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
              Turn incomplete data into actionable insights
            </h2>
            <p className="text-lg text-muted-foreground">
              Automatically fill gaps in your data with information from verified sources
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Database className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Trusted Data Sources</h3>
              <p className="text-muted-foreground leading-relaxed">
                Access verified data from leading providers. Enrich your spreadsheets with company information, contact details, and market data.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Rapid Enrichment</h3>
              <p className="text-muted-foreground leading-relaxed">
                Process thousands of rows in minutes. Axion rapidly pulls in data from trusted sources to complete your datasets.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Observable & Transparent</h3>
              <p className="text-muted-foreground leading-relaxed">
                View agent reasoning process and verified citations for every data point captured. Full transparency and traceability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif font-medium text-foreground mb-6">
              Integrates with data you already trust
            </h2>
            <p className="text-lg text-muted-foreground">
              Engage with our diversified set of data providers or integrate with your own stack
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60 mb-16">
              {['LinkedIn', 'Clearbit', 'ZoomInfo', 'Apollo', 'Hunter', 'Crunchbase', 'PitchBook', 'Google'].map((provider, i) => (
                <div key={i} className="h-16 px-6 flex items-center justify-center">
                  <div className="text-lg font-semibold text-gray-400">{provider}</div>
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              <div className="bg-muted/30 rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-semibold mb-4">Search the web</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Upload data from any of your sources and watch it instantly integrate into your workspace. Pull information from websites, APIs, and databases automatically.
                </p>
              </div>

              <div className="bg-muted/30 rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-semibold mb-4">Custom integrations</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Connect your proprietary data sources and internal tools. Build custom enrichment workflows tailored to your organization's needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#5B5FED] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight">
              Complete your data with confidence
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join teams using Axion Enrich to build better datasets
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

export default Enrich;

