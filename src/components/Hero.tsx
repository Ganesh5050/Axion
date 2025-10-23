import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background pt-16">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-medium text-foreground leading-tight">
            The spreadsheet to automate manual data collection
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A workspace to gather, structure, and take action on data with human-level precision.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link to="/signup">
              <Button size="lg" className="text-base px-8 py-6 bg-[#5B5FED] hover:bg-[#4B4FDD] text-white">
                Try it now
              </Button>
            </Link>
            <Link to="/demo">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base px-8 py-6 border-gray-300 hover:bg-gray-50 group text-gray-900"
              >
                Request a Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Hero Image/Demo Area */}
          <div className="pt-16">
            <div className="relative rounded-lg border border-border bg-card overflow-hidden shadow-2xl">
              <div className="bg-muted/30 p-4 border-b border-border flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-destructive/60" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                  <div className="h-3 w-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="flex items-center space-x-2 bg-background px-4 py-1 rounded text-xs">
                    <div className="h-4 w-4 rounded bg-accent" />
                    <span className="text-muted-foreground">Company List</span>
                  </div>
                </div>
                <Button size="sm" variant="secondary" className="text-xs">
                  Enrich
                </Button>
              </div>
              
              {/* Spreadsheet Mock */}
              <div className="bg-background p-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground w-8">#</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Company</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Website</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Category</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Revenue</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Competitors</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="py-3 px-4 text-muted-foreground">1</td>
                      <td className="py-3 px-4 font-medium">Tesla</td>
                      <td className="py-3 px-4 text-muted-foreground">tesla.com</td>
                      <td className="py-3 px-4">Automotive</td>
                      <td className="py-3 px-4">$96.7B</td>
                      <td className="py-3 px-4 text-muted-foreground">Ford, GM</td>
                    </tr>
                    <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="py-3 px-4 text-muted-foreground">2</td>
                      <td className="py-3 px-4 font-medium">Meta</td>
                      <td className="py-3 px-4 text-muted-foreground">meta.com</td>
                      <td className="py-3 px-4">Technology</td>
                      <td className="py-3 px-4">$134.9B</td>
                      <td className="py-3 px-4 text-muted-foreground">Google, Twitter</td>
                    </tr>
                    <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="py-3 px-4 text-muted-foreground">3</td>
                      <td className="py-3 px-4 font-medium">Zoom</td>
                      <td className="py-3 px-4 text-muted-foreground">zoom.us</td>
                      <td className="py-3 px-4">Software</td>
                      <td className="py-3 px-4">$4.4B</td>
                      <td className="py-3 px-4 text-muted-foreground">Teams, Meet</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px);
          background-size: 80px 80px;
        }
      `}</style>
    </section>
  );
};
