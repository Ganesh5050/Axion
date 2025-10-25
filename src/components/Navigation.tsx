import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface DropdownItem {
  title: string;
  description: string;
  href: string;
}

interface DropdownMenuProps {
  items: DropdownItem[];
  isOpen: boolean;
}

const DropdownMenu = ({ items, isOpen }: DropdownMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="absolute left-0 top-full pt-2 z-50">
      <div className="w-[400px] rounded-lg border border-border bg-white shadow-xl animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200">
        <div className="p-4">
          <div className="grid gap-1">
            {items.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 cursor-pointer"
              >
                <div className="text-sm font-medium leading-none text-gray-900">
                  {item.title}
                </div>
                <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const solutionsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const productTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSolutionsEnter = () => {
    if (solutionsTimeoutRef.current) {
      clearTimeout(solutionsTimeoutRef.current);
    }
    setSolutionsOpen(true);
  };

  const handleSolutionsLeave = () => {
    solutionsTimeoutRef.current = setTimeout(() => {
      setSolutionsOpen(false);
    }, 150);
  };

  const handleProductEnter = () => {
    if (productTimeoutRef.current) {
      clearTimeout(productTimeoutRef.current);
    }
    setProductOpen(true);
  };

  const handleProductLeave = () => {
    productTimeoutRef.current = setTimeout(() => {
      setProductOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (solutionsTimeoutRef.current)
        clearTimeout(solutionsTimeoutRef.current);
      if (productTimeoutRef.current) clearTimeout(productTimeoutRef.current);
    };
  }, []);

  const solutionsItems: DropdownItem[] = [
    {
      title: "Recruiting",
      description: "Handle candidate sourcing, evaluation, and outreach",
      href: "/recruiting",
    },
    {
      title: "Consulting",
      description: "Analyze markets and build comprehensive reports",
      href: "/consulting",
    },
    {
      title: "Sales",
      description: "Research prospects and personalize outreach at scale",
      href: "/sales",
    },
    {
      title: "Marketing",
      description: "Generate leads and enrich contact information",
      href: "/marketing",
    },
    {
      title: "Finance",
      description: "Model scenarios and benchmark financials",
      href: "/finance",
    },
  ];

  const productItems: DropdownItem[] = [
    {
      title: "Assistant",
      description: "Set up, edit, and analyze sheets across your organization",
      href: "/assistant",
    },
    {
      title: "Enrich",
      description: "Generate data using trusted sources and integrations",
      href: "/enrich",
    },
    {
      title: "Email",
      description: "Write, send, and personalize email campaigns at scale",
      href: "/email",
    },
    {
      title: "Workflows",
      description: "Automate data extraction and research at scale",
      href: "/workflows",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Axion Logo"
              className="h-8 w-8 rounded-lg object-contain"
            />
            <span className="text-xl font-semibold text-gray-900">Axion</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleSolutionsEnter}
              onMouseLeave={handleSolutionsLeave}
            >
              <button className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors rounded-md hover:bg-gray-50">
                Solutions
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`}
                />
              </button>
              <DropdownMenu items={solutionsItems} isOpen={solutionsOpen} />
            </div>

            {/* Product Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleProductEnter}
              onMouseLeave={handleProductLeave}
            >
              <button className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors rounded-md hover:bg-gray-50">
                Product
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${productOpen ? "rotate-180" : ""}`}
                />
              </button>
              <DropdownMenu items={productItems} isOpen={productOpen} />
            </div>

            <Link
              to="/templates"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors rounded-md hover:bg-gray-50"
            >
              Templates
            </Link>
            <Link
              to="/careers"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors rounded-md hover:bg-gray-50"
            >
              Careers
            </Link>
            <Link
              to="/blog"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors rounded-md hover:bg-gray-50"
            >
              Blog
            </Link>
            <a
              href="/#pricing"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors rounded-md hover:bg-gray-50"
            >
              Pricing
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/login">
              <Button
                variant="ghost"
                className="text-sm text-gray-700 hover:text-gray-900"
              >
                Log in
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="text-sm bg-[#5B5FED] hover:bg-[#4B4FDD] text-white">
                Sign up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-4">
            <div className="space-y-2">
              <div className="px-4 py-2 text-sm font-medium text-gray-500">
                Solutions
              </div>
              {solutionsItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="space-y-2">
              <div className="px-4 py-2 text-sm font-medium text-gray-500">
                Product
              </div>
              {productItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="space-y-2 border-t border-gray-200 pt-4">
              <Link
                to="/templates"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Templates
              </Link>
              <Link
                to="/careers"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Careers
              </Link>
              <Link
                to="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Blog
              </Link>
              <a
                href="/#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Pricing
              </a>
            </div>
            <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-gray-200">
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full text-gray-700">
                  Log in
                </Button>
              </Link>
              <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-[#5B5FED] hover:bg-[#4B4FDD] text-white">
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
