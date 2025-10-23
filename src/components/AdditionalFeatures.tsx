export const AdditionalFeatures = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="space-y-32 max-w-6xl mx-auto">
          {/* Organize with Custom Columns */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-serif font-medium">
                Organize with Custom Columns
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Define custom columns using AI and fetch specific data on demand. Detail the data type and format, prompt for information, and sort to your needs.
              </p>
            </div>
            <div className="bg-muted/30 rounded-lg p-8 h-80 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <div className="h-16 w-16 rounded-lg bg-accent/20 mx-auto mb-4 flex items-center justify-center">
                  <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                  </svg>
                </div>
                <p className="text-sm">Custom Column Interface</p>
              </div>
            </div>
          </div>

          {/* Ask Chatbot for Data */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-muted/30 rounded-lg p-8 h-80 flex items-center justify-center order-2 md:order-1">
              <div className="text-center text-muted-foreground">
                <div className="h-16 w-16 rounded-lg bg-accent/20 mx-auto mb-4 flex items-center justify-center">
                  <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <p className="text-sm">AI Chat Interface</p>
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h3 className="text-4xl md:text-5xl font-serif font-medium">
                Ask Chatbot for Data
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Use our contextually aware engine to query your spreadsheet like a conversation.
              </p>
            </div>
          </div>

          {/* Send personalized emails */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-serif font-medium">
                Send personalized emails
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Write and send emails at scale, pulling customized variables directly from your spreadsheet.
              </p>
            </div>
            <div className="bg-muted/30 rounded-lg p-8 h-80 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <div className="h-16 w-16 rounded-lg bg-accent/20 mx-auto mb-4 flex items-center justify-center">
                  <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm">Email Automation</p>
              </div>
            </div>
          </div>

          {/* Automate data workflows */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-muted/30 rounded-lg p-8 h-80 flex items-center justify-center order-2 md:order-1">
              <div className="text-center text-muted-foreground">
                <div className="h-16 w-16 rounded-lg bg-accent/20 mx-auto mb-4 flex items-center justify-center">
                  <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <p className="text-sm">Workflow Automation</p>
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h3 className="text-4xl md:text-5xl font-serif font-medium">
                Automate your data's next steps
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Create automations for dataflow into and out of Axion to and from your favorite third party tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

