import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, GitBranch, Repeat, Mail } from "lucide-react";

const Workflows = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-background pt-16">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-serif font-medium text-foreground leading-tight">
              Workflows
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Automate data extraction and research at scale
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
              Automate your data's next steps
            </h2>
            <p className="text-lg text-muted-foreground">
              Create automations for dataflow into and out of Axion to and from your favorite third party tools
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <GitBranch className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Workflows</h3>
              <p className="text-muted-foreground leading-relaxed">
                Build multi-step workflows that automatically process data, enrich records, and trigger actions based on your business logic.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Repeat className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Scheduled Automation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Set up recurring workflows that run daily, weekly, or monthly. Keep your data fresh and up-to-date automatically.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Send Personalized Emails</h3>
              <p className="text-muted-foreground leading-relaxed">
                Write and send emails at scale, pulling customized variables directly from your spreadsheet. Track opens and responses.
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
              Workflows for every use case
            </h2>
            <p className="text-lg text-muted-foreground">
              Automate repetitive tasks and focus on what matters
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-muted/30 rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-semibold mb-4">Automated lead generation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Set up workflows that continuously discover new leads, enrich them with contact information, and automatically add them to your CRM or outreach sequences.
              </p>
            </div>

            <div className="bg-muted/30 rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-semibold mb-4">Research automation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Create workflows that gather market data, competitor information, and industry insights on a schedule. Generate comprehensive reports automatically.
              </p>
            </div>

            <div className="bg-muted/30 rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-semibold mb-4">Email campaigns</h3>
              <p className="text-muted-foreground leading-relaxed">
                Build personalized email sequences that adapt based on recipient behavior. Send follow-ups automatically and track engagement metrics in real-time.
              </p>
            </div>

            <div className="bg-muted/30 rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-semibold mb-4">Data synchronization</h3>
              <p className="text-muted-foreground leading-relaxed">
                Keep your data in sync across multiple tools. Automatically export enriched data to your CRM, marketing automation platform, or data warehouse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-6">
              Connect with your favorite tools
            </h2>
            <p className="text-lg text-muted-foreground">
              Integrate Axion with the tools you use every day
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center opacity-60 max-w-5xl mx-auto">
            {['Salesforce', 'HubSpot', 'Slack', 'Gmail', 'Zapier', 'Make'].map((tool, i) => (
              <div key={i} className="h-16 px-4 flex items-center justify-center">
                <div className="text-sm font-semibold text-gray-400">{tool}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#5B5FED] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight">
              Automate your way to better results
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join teams using Axion Workflows to save time and scale their operations
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

export default Workflows;

