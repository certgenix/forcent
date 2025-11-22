export default function Investment() {
  return (
    <section id="investment" className="bg-white py-20 lg:py-32 border-t border-border">
      <div className="max-w-4xl mx-auto px-6 lg:px-20">
        <h2 className="text-3xl lg:text-[36px] font-bold text-foreground text-center mb-16" data-testid="text-investment-headline">
          Investment
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4" data-testid="text-investment-cost-title">
              What It Costs:
            </h3>
            <p className="text-lg text-muted-foreground" data-testid="text-investment-cost-value">
              Most clients: $5K–$15K/month, depending on scope.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4" data-testid="text-investment-return-title">
              What You Get Back:
            </h3>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li data-testid="text-investment-roi">
                • Average ROI: 380% in year one
              </li>
              <li data-testid="text-investment-savings">
                • Typical savings: $40K–$120K annually
              </li>
              <li data-testid="text-investment-payback">
                • Payback period: 4–6 months
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
