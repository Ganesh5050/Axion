import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Email = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-serif font-medium text-foreground leading-tight">
                Send Emails From Spreadsheets
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Draft personalized emails, send, and personalize email campaigns at scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button size="lg" className="text-base px-8 py-6 bg-[#1a1f36] hover:bg-[#2a2f46] text-white">
                    Get Started
                  </Button>
                </Link>
                <Link to="/demo">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="text-base px-8 py-6 border-gray-300 hover:bg-gray-50 text-gray-900"
                  >
                    Request a demo
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Side - Screenshot */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-6">
                <div className="bg-blue-600 h-96 rounded-lg flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-sm opacity-80">Email Interface Preview</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Variables Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-medium">Variables</h2>
              <p className="text-muted-foreground leading-relaxed">
                Reference any sheet column in variables to personalize each message.
              </p>
              <div className="bg-gray-50 rounded-lg p-8 h-64 flex items-center justify-center border border-gray-200">
                <div className="text-center text-muted-foreground">
                  <div className="text-sm">Variables Interface</div>
                </div>
              </div>
            </div>

            {/* Contact Details Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-medium">Contact details</h2>
              <p className="text-muted-foreground leading-relaxed">
                View bulk feedback recipient-per-row and live contact info from enriching workflows.
              </p>
              <div className="bg-gray-50 rounded-lg p-8 h-64 flex items-center justify-center border border-gray-200">
                <div className="text-center text-muted-foreground">
                  <div className="text-sm">Contact Details Interface</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-medium">
                Review email campaigns with ease
              </h2>
              <p className="text-lg text-muted-foreground">
                Preview your campaigns, track your message and send with confidence.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
              <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-sm">Email Review Interface</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Providers Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-medium">
                Email Providers
              </h2>
              <p className="text-lg text-muted-foreground">
                Integrate with leading email providers to send at scale.
              </p>
            </div>

            {/* Provider Logos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center pt-8">
              {[
                { name: 'Sendgrid', color: 'bg-blue-500' },
                { name: 'Gmail', color: 'bg-red-500' },
                { name: 'Yahoo', color: 'bg-purple-600' },
                { name: 'Outlook', color: 'bg-blue-600' },
              ].map((provider, index) => (
                <div key={index} className="flex flex-col items-center gap-3">
                  <div className={`w-16 h-16 ${provider.color} rounded-lg flex items-center justify-center`}>
                    <div className="w-8 h-8 bg-white rounded"></div>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">{provider.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#5B5FED] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight">
              Ready to automate your email outreach?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join teams using Axion to send thousands of personalized emails
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
                  className="text-base px-8 py-6 border-white/30 bg-transparent text-white hover:bg-white/10"
                >
                  Schedule a demo
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

export default Email;

