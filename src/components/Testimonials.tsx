export const Testimonials = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-medium text-foreground mb-6">
            Collaborative and connected
          </h2>
          <p className="text-lg text-muted-foreground">
            Bring together scattered datasets into one collaborative space.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-32">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Connect data seamlessly</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Drag in files, spreadsheets, and more to unify sources into one centralized space.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Search the web</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Upload data from any of your sources and watch it instantly integrate into your workspace
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Integrates with data you already trust</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Engage with our diversified set of data providers or integrate with your own stack.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {['LinkedIn', 'Apollo', 'ZeroB', 'Crunchbase'].map((provider, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded bg-muted flex items-center justify-center">
                    <span className="text-xs font-semibold">{provider.substring(0, 2)}</span>
                  </div>
                  <span>Connected</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Collaborate together</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Work with your team in real time to track changes, leave comments, and enrich data together.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold mb-4">Observable & transparent</h3>
            <p className="text-muted-foreground leading-relaxed">
              View agent reasoning process and verified citations for every data point captured.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-muted/30 rounded-lg p-8 border border-border">
            <div className="mb-6">
              <svg className="h-8 w-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-base mb-6 text-foreground leading-relaxed">
              "Axion's a super interesting way of marrying old ways (sheets) with new ways (AI) to get a magical tool."
            </p>
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-accent/20 mr-4" />
              <div>
                <div className="font-semibold">Jacob Wallenberg</div>
                <div className="text-sm text-muted-foreground">VP of People & Talent at Ramp</div>
              </div>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-8 border border-border">
            <div className="mb-6">
              <svg className="h-8 w-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-base mb-6 text-foreground leading-relaxed">
              "It's super easy to use and powerful — the best of the spreadsheet solutions that I have tried."
            </p>
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-accent/20 mr-4" />
              <div>
                <div className="font-semibold">RC Willenbrock</div>
                <div className="text-sm text-muted-foreground">Fmr Director of AI at BCG</div>
              </div>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-8 border border-border">
            <div className="mb-6">
              <svg className="h-8 w-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-base mb-6 text-foreground leading-relaxed">
              "We've cut our data collection time by 80%. What used to take days now takes hours. Game-changer for our consulting firm."
            </p>
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-accent/20 mr-4" />
              <div>
                <div className="font-semibold">Emily Johnson</div>
                <div className="text-sm text-muted-foreground">Managing Partner, Insight Analytics</div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Logos */}
        <div className="mt-32 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4">Automate your data's next steps</h3>
            <p className="text-muted-foreground">
              Create workflows to automate hundreds of actions with your enriched data
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-16 w-16 rounded-lg bg-muted flex items-center justify-center">
                <div className="h-8 w-8 rounded bg-muted-foreground/20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
