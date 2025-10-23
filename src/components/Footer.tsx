import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#0f1419] text-white">
      {/* Hero CTA Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Logo */}
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center">
                <div className="h-4 w-4 rounded-sm border-2 border-[#0f1419]" />
              </div>
              <span className="text-xl font-semibold">Axion</span>
            </div>

            {/* Right - CTA Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight">
                Enter a new age of knowledge work
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                Axion is an AI-first workspace that enables fast, accurate research in spreadsheets.
              </p>
              <Link to="/demo">
                <Button 
                  size="lg" 
                  className="bg-white text-[#0f1419] hover:bg-gray-100 font-medium px-6 py-3 inline-flex items-center gap-2"
                >
                  Request a Demo
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
            {/* Product */}
            <div>
              <h3 className="font-medium mb-4 text-white">Product</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/" className="text-white/60 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/templates" className="text-white/60 hover:text-white transition-colors">
                    Templates
                  </Link>
                </li>
                <li>
                  <a href="/#pricing" className="text-white/60 hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-medium mb-4 text-white">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/blog" className="text-white/60 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-white/60 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-medium mb-4 text-white">Support</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/demo" className="text-white/60 hover:text-white transition-colors">
                    Request a Demo
                  </Link>
                </li>
                <li>
                  <a href="#docs" className="text-white/60 hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h3 className="font-medium mb-4 text-white">Socials</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-medium mb-4 text-white">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#privacy" className="text-white/60 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#acceptable-use" className="text-white/60 hover:text-white transition-colors">
                    Acceptable Use
                  </a>
                </li>
                <li>
                  <a href="#fulfillment" className="text-white/60 hover:text-white transition-colors">
                    Fulfillment
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-6 py-6">
        <p className="text-sm text-white/50 text-center md:text-left">
          © Copyright 2025. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
