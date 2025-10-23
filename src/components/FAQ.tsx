import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "What is Axion and how does it work?",
      answer:
        "Axion is a powerful workspace that automates manual data collection. It combines the familiarity of spreadsheets with AI-powered automation to help you gather, structure, and act on data with human-level precision. Simply upload your data, enrich it with our tools, and take action through automated workflows.",
    },
    {
      question: "How accurate is the data enrichment?",
      answer:
        "Our data enrichment achieves human-level accuracy by combining multiple trusted data sources, AI processing, and verification systems. We maintain a 95%+ accuracy rate across all enrichment tasks and provide source citations for transparency.",
    },
    {
      question: "Can I integrate Axion with my existing tools?",
      answer:
        "Yes! Axion integrates with hundreds of popular tools including CRMs, marketing platforms, productivity apps, and more. We offer native integrations, API access, and Zapier support for maximum flexibility.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We take security seriously with SOC 2 certification, GDPR compliance, 256-bit encryption, and robust access controls. Your data is encrypted at rest and in transit, and we never share it with third parties.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We offer multiple support tiers based on your plan. Free users get community support, Pro users receive priority email support, and Enterprise customers get dedicated support with SLA guarantees and custom training.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time with no penalties. If you're on a monthly plan, you'll have access until the end of your billing period. Annual subscribers can get a prorated refund within the first 30 days.",
    },
    {
      question: "Do you offer custom enterprise solutions?",
      answer:
        "Yes! Our Enterprise plan includes custom integrations, dedicated infrastructure, advanced security features, custom training, and more. Contact our sales team to discuss your specific requirements.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "All paid plans include a 14-day free trial with full access to features. No credit card is required to start your trial. You can also use our Free plan indefinitely to explore basic features.",
    },
  ];

  return (
    <section id="faq" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-medium text-foreground mb-6">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Axion. Can't find what you're looking for? 
            <a href="#contact" className="text-accent hover:underline ml-1">Contact our team</a>.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-muted/50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help. Get in touch and we'll respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-8"
              >
                Contact Sales
              </a>
              <a
                href="#docs"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-8"
              >
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
