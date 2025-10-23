import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-32 bg-[#5B5FED] text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight">
            Ready to transform your data workflow?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join thousands of teams already using Axion to automate their manual data collection and save hours every week.
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
          <p className="text-sm text-white/70 pt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};
