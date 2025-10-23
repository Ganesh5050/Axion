import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Mail, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Sales = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-background pt-16">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-serif font-medium text-foreground leading-tight">
              Sales Solutions
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Research prospects and personalize outreach at scale
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
                <Search className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lead Discovery</h3>
              <p className="text-muted-foreground leading-relaxed">
                Find high-potential prospects based on your ideal customer profile. Enrich leads with contact info, company data, and technographics.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Decision Maker Identification</h3>
              <p className="text-muted-foreground leading-relaxed">
                Automatically identify and reach the right decision makers. Get verified contact information and insights on buying intent.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Outreach</h3>
              <p className="text-muted-foreground leading-relaxed">
                Send hyper-personalized emails at scale. Track engagement, schedule follow-ups, and optimize your messaging automatically.
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
              Close more deals with Axion
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join sales teams using Axion to find better leads and close faster
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

export default Sales;

