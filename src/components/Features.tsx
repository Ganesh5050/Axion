import { CheckCircle2, Upload, Zap } from "lucide-react";

export const Features = () => {
  return (
    <section className="py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-medium text-foreground mb-6">
            A workspace to transform your data
          </h2>
          <p className="text-lg text-muted-foreground">
            Upload data from any source and watch it instantly integrate into your workspace.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
              <Upload className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Upload</h3>
            <p className="text-muted-foreground leading-relaxed">
              Import raw data from existing spreadsheets, CRMs, or APIs. Or start from scratch by asking chat for the data you need.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
              <CheckCircle2 className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Enrich</h3>
            <p className="text-muted-foreground leading-relaxed">
              Enhance your data with relevant info by adding columns and column prompts. Axion rapidly pulls in data from trusted sources.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
              <Zap className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Take Action</h3>
            <p className="text-muted-foreground leading-relaxed">
              Collaborate or edit the generated data and then take action. Axion suggests actions to take based on the data generated.
            </p>
          </div>
        </div>

        {/* Solutions Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-4">
              One platform, endless solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              Unlock workflow efficiencies across multiple use cases
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { title: "Recruiting", desc: "Handle candidate sourcing, evaluation, outreach and more" },
              { title: "Consulting", desc: "Analyze markets, benchmark companies, build reports, and more" },
              { title: "Finance", desc: "Model scenarios, benchmark financials, build reports, and more" },
              { title: "Sales", desc: "Discover high-potential leads, reach decision makers, and more" },
              { title: "Marketing", desc: "Find new channels, target key audiences, optimize SEO, and more" },
              { title: "Operations", desc: "Organize workflows, track metrics, generate insights, and more" },
            ].map((solution, index) => (
              <div 
                key={index}
                className="bg-background border border-border rounded-lg p-6 hover:border-accent/50 transition-colors group cursor-pointer"
              >
                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                  {solution.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {solution.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
