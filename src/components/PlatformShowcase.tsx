export const PlatformShowcase = () => {
  return (
    <section className="py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-medium text-foreground mb-6">
            One platform, Endless solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            Upload data from any of your sources and watch it instantly integrate into your workspace.
          </p>
        </div>

        {/* Solution Categories Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex space-x-2 bg-background border border-border rounded-lg p-1">
            {['Recruiting', 'Consulting', 'Sales', 'Marketing', 'Finance'].map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-muted"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-32">
          <div className="bg-background border border-border rounded-lg p-8 hover:shadow-lg transition-all">
            <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center mb-6">
              <svg className="h-6 w-6 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Recruiting</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Handle candidate sourcing, evaluation, outreach and more with automated workflows
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Source qualified candidates</li>
              <li>• Automate initial outreach</li>
              <li>• Track application pipelines</li>
            </ul>
          </div>

          <div className="bg-background border border-border rounded-lg p-8 hover:shadow-lg transition-all">
            <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center mb-6">
              <svg className="h-6 w-6 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Consulting</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Analyze markets, benchmark companies, build reports, and deliver insights faster
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Market analysis research</li>
              <li>• Competitive benchmarking</li>
              <li>• Automated report generation</li>
            </ul>
          </div>

          <div className="bg-background border border-border rounded-lg p-8 hover:shadow-lg transition-all">
            <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center mb-6">
              <svg className="h-6 w-6 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Finance</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Model scenarios, benchmark financials, build reports with precision and speed
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Financial modeling tools</li>
              <li>• Scenario planning</li>
              <li>• Benchmark analysis</li>
            </ul>
          </div>

          <div className="bg-background border border-border rounded-lg p-8 hover:shadow-lg transition-all">
            <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center mb-6">
              <svg className="h-6 w-6 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Sales</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Discover high-potential leads, reach the right decision makers, and close faster
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Lead discovery automation</li>
              <li>• Decision maker identification</li>
              <li>• Personalized outreach at scale</li>
            </ul>
          </div>

          <div className="bg-background border border-border rounded-lg p-8 hover:shadow-lg transition-all">
            <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center mb-6">
              <svg className="h-6 w-6 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Marketing</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Find new channels, target key audiences, optimize SEO, and scale campaigns
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Channel opportunity analysis</li>
              <li>• Audience segmentation</li>
              <li>• SEO optimization workflows</li>
            </ul>
          </div>

          <div className="bg-background border border-border rounded-lg p-8 hover:shadow-lg transition-all">
            <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center mb-6">
              <svg className="h-6 w-6 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Operations</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Organize workflows, track key metrics, generate insights across operations
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Workflow automation</li>
              <li>• Metrics dashboards</li>
              <li>• Process optimization</li>
            </ul>
          </div>
        </div>

        {/* Security Section */}
        <div className="bg-[#0f1419] text-white rounded-lg p-12 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-4xl md:text-5xl font-serif font-medium mb-6 leading-tight">
                Enterprise-grade security
              </h3>
              <p className="text-white/70 leading-relaxed text-lg">
                We push the frontier without compromising trust, prioritizing compliance with the highest industry standards.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="border border-white/20 rounded-lg p-6 flex items-center gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-10 h-10 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-xl font-medium">SOC2 I</div>
              </div>
              <div className="border border-white/20 rounded-lg p-6 flex items-center gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-10 h-10 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-xl font-medium">SOC2 II</div>
              </div>
              <div className="border border-white/20 rounded-lg p-6 flex items-center gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-10 h-10 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="text-xl font-medium">No training on user data</div>
              </div>
              <div className="border border-white/20 rounded-lg p-6 flex items-center gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-10 h-10 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="text-xl font-medium">Audited and tested</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
