export const Stats = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Trusted By Section */}
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground mb-8">Trusted by industry leaders at</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 max-w-5xl mx-auto opacity-60">
            {/* Company Logo Placeholders - Replace with actual logos */}
            <div className="h-8 px-6 flex items-center justify-center">
              <div className="text-xl font-bold text-gray-400">Ramp</div>
            </div>
            <div className="h-8 px-6 flex items-center justify-center">
              <div className="text-xl font-bold text-gray-400">BCG</div>
            </div>
            <div className="h-8 px-6 flex items-center justify-center">
              <div className="text-xl font-bold text-gray-400">Sequoia</div>
            </div>
            <div className="h-8 px-6 flex items-center justify-center">
              <div className="text-xl font-bold text-gray-400">Stripe</div>
            </div>
            <div className="h-8 px-6 flex items-center justify-center">
              <div className="text-xl font-bold text-gray-400">Atlassian</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
