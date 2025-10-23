import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileSpreadsheet, Users, TrendingUp, Mail } from "lucide-react";

const Templates = () => {
  const templates = [
    {
      name: "Candidate Sourcing",
      description: "Find and enrich candidate profiles for your open roles",
      category: "Recruiting",
      icon: Users,
    },
    {
      name: "Market Research",
      description: "Analyze markets and build competitive intelligence",
      category: "Consulting",
      icon: TrendingUp,
    },
    {
      name: "Lead Generation",
      description: "Discover and enrich B2B leads at scale",
      category: "Sales",
      icon: Mail,
    },
    {
      name: "Company Analysis",
      description: "Research companies and gather firmographic data",
      category: "Finance",
      icon: FileSpreadsheet,
    },
    {
      name: "Email Outreach",
      description: "Personalize and automate email campaigns",
      category: "Marketing",
      icon: Mail,
    },
    {
      name: "Competitor Analysis",
      description: "Track competitor pricing, features, and positioning",
      category: "Consulting",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-background pt-16">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-serif font-medium text-foreground leading-tight">
              Templates
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Start with pre-built workflows for common use cases
            </p>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {templates.map((template, index) => {
              const Icon = template.icon;
              return (
                <div key={index} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="mb-4">
                    <div className="text-xs text-muted-foreground mb-2">{template.category}</div>
                    <h3 className="text-xl font-semibold mb-3">{template.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {template.description}
                    </p>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Use Template
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#5B5FED] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight">
              Can't find what you need?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Create custom workflows from scratch or contact us to build a template for your use case
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

export default Templates;

