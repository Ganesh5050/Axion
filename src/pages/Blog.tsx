import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, User } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "How AI is Transforming Data Work",
      excerpt: "Explore how artificial intelligence is reshaping the way we collect, analyze, and act on data in the modern workplace.",
      author: "Sarah Chen",
      date: "March 15, 2024",
      category: "AI & Technology",
    },
    {
      title: "5 Ways to Automate Your Recruiting Workflow",
      excerpt: "Learn practical strategies to streamline candidate sourcing, evaluation, and outreach using Paradigm.",
      author: "Michael Rodriguez",
      date: "March 10, 2024",
      category: "Recruiting",
    },
    {
      title: "The Future of Spreadsheets",
      excerpt: "Why the humble spreadsheet is getting a major AI-powered upgrade and what it means for knowledge workers.",
      author: "Emily Johnson",
      date: "March 5, 2024",
      category: "Product",
    },
    {
      title: "Building Better Market Research with AI",
      excerpt: "How consulting firms are using AI to conduct faster, more comprehensive market analysis.",
      author: "David Kim",
      date: "February 28, 2024",
      category: "Consulting",
    },
    {
      title: "Data Enrichment Best Practices",
      excerpt: "A comprehensive guide to enriching your data with accuracy, speed, and scale.",
      author: "Lisa Wang",
      date: "February 20, 2024",
      category: "Best Practices",
    },
    {
      title: "Paradigm Product Updates - Q1 2024",
      excerpt: "See what's new in Paradigm this quarter, including new integrations, features, and improvements.",
      author: "Product Team",
      date: "February 15, 2024",
      category: "Product Updates",
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
              Blog
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Insights, updates, and best practices from the Axion team
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {posts.map((post, index) => (
              <article key={index} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-accent/20 to-accent/5" />
                <div className="p-6">
                  <div className="text-xs text-accent font-medium mb-2">{post.category}</div>
                  <h2 className="text-xl font-semibold mb-3 leading-tight">{post.title}</h2>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;

