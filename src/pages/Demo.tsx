import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Demo() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation with Back Button */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Back to Home */}
            <Link to="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>

            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-[#1a1f36] flex items-center justify-center">
                <div className="h-4 w-4 rounded-sm border-2 border-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900">Axion</span>
            </Link>

            <div className="w-[120px]"></div> {/* Spacer for alignment */}
          </div>
        </div>
      </nav>

      {/* Demo Form Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Information */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-serif font-medium text-foreground leading-tight">
              Book a demo
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join Axion's hundreds of active data enthusiasts and interesting workflows with Thousands of providers & agencies.
            </p>
            <div className="pt-4">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#5B5FED]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Personalized walkthrough</h3>
                  <p className="text-sm text-muted-foreground">Get a customized demo tailored to your specific use case and needs.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#5B5FED]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">No commitment required</h3>
                  <p className="text-sm text-muted-foreground">Explore Axion with no pressure or obligations attached.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#5B5FED]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Quick setup assistance</h3>
                  <p className="text-sm text-muted-foreground">Learn how to get started and maximize value from day one.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
            <form className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium">
                    First name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="First name"
                    required
                    className="h-12 text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium">
                    Last name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Last name"
                    required
                    className="h-12 text-base"
                  />
                </div>
              </div>

              {/* Work Email */}
              <div className="space-y-2">
                <Label htmlFor="workEmail" className="text-sm font-medium">
                  Work email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="workEmail"
                  type="email"
                  placeholder="you@company.com"
                  required
                  className="h-12 text-base"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">
                  Phone number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="h-12 text-base"
                />
              </div>

              {/* Company Name */}
              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium">
                  Company name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Your company"
                  required
                  className="h-12 text-base"
                />
              </div>

              {/* Company Size */}
              <div className="space-y-2">
                <Label htmlFor="companySize" className="text-sm font-medium">
                  Company size <span className="text-red-500">*</span>
                </Label>
                <Select required>
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder="Select company size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10 employees</SelectItem>
                    <SelectItem value="11-50">11-50 employees</SelectItem>
                    <SelectItem value="51-200">51-200 employees</SelectItem>
                    <SelectItem value="201-500">201-500 employees</SelectItem>
                    <SelectItem value="501-1000">501-1000 employees</SelectItem>
                    <SelectItem value="1000+">1000+ employees</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Job Role */}
              <div className="space-y-2">
                <Label htmlFor="jobRole" className="text-sm font-medium">
                  Job role <span className="text-red-500">*</span>
                </Label>
                <Select required>
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="executive">Executive / C-Level</SelectItem>
                    <SelectItem value="vp">VP / Director</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="individual">Individual Contributor</SelectItem>
                    <SelectItem value="consultant">Consultant</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Additional Notes */}
              <div className="space-y-2">
                <Label htmlFor="notes" className="text-sm font-medium">
                  Additional notes (optional)
                </Label>
                <Textarea
                  id="notes"
                  placeholder="Tell us more about your use case and what you'd like to achieve with Axion..."
                  className="min-h-[100px] text-base resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full h-12 text-base font-medium bg-[#5B5FED] hover:bg-[#4B4FDD]"
              >
                Contact Sales
              </Button>

              {/* Privacy Notice */}
              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our{" "}
                <a href="#" className="text-[#5B5FED] hover:underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#5B5FED] hover:underline">
                  Terms of Service
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

