export const DetailedFeatures = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Transform Section */}
        <div className="max-w-4xl mx-auto text-center mb-32">
          <h2 className="text-5xl md:text-6xl font-serif font-medium text-foreground mb-8">
            A workspace to transform your data
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Handle every step of your data journey with precision and ease. Integrate disparate sources into one workspace.
          </p>
        </div>

        {/* Feature Blocks */}
        <div className="space-y-32 max-w-6xl mx-auto">
          {/* Upload Feature */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-muted rounded-full text-sm font-medium">
                Step 1
              </div>
              <h3 className="text-4xl font-serif font-medium">Upload</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Import raw data from existing spreadsheets, CRMs, or APIs. Or start from scratch by asking chat for the data you need.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-muted-foreground">Drag and drop spreadsheets</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-muted-foreground">Extract from PDFs automatically</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-muted-foreground">Scrape website data on demand</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <div className="h-16 w-16 rounded-lg bg-accent/20 mx-auto mb-4 flex items-center justify-center">
                  <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <p className="text-sm">Upload Interface</p>
              </div>
            </div>
          </div>

          {/* Enrich Feature */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center order-2 md:order-1">
              <div className="text-center text-muted-foreground">
                <div className="h-16 w-16 rounded-lg bg-accent/20 mx-auto mb-4 flex items-center justify-center">
                  <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-sm">Enrichment Engine</p>
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <div className="inline-block px-4 py-2 bg-muted rounded-full text-sm font-medium">
                Step 2
              </div>
              <h3 className="text-4xl font-serif font-medium">Enrich</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Enhance your data with relevant info by adding columns and column prompts. Axion rapidly pulls in data from trusted sources.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-muted-foreground">Access verified data sources</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-muted-foreground">AI-powered data generation</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-muted-foreground">Custom column generation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Take Action Feature */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-muted rounded-full text-sm font-medium">
                Step 3
              </div>
              <h3 className="text-4xl font-serif font-medium">Take Action</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Collaborate or edit the generated data and then take action. Axion suggests actions to take based on the data generated.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-muted-foreground">Automated email campaigns</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-muted-foreground">Export to any format</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-muted-foreground">Integrate with your tools</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <div className="h-16 w-16 rounded-lg bg-accent/20 mx-auto mb-4 flex items-center justify-center">
                  <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <p className="text-sm">Action Tools</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
