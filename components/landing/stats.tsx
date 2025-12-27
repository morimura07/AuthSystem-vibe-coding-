"use client"

export function Stats() {
  return (
    <section className="border-t bg-muted/30 py-20 md:py-32">
      <div className="container">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 md:max-w-[64rem]">
            <div className="flex flex-col items-center space-y-3">
              <div className="text-5xl font-bold tracking-tight">500k+</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">Active Traders</div>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="text-5xl font-bold tracking-tight">10M+</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">Trades Analyzed</div>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="text-5xl font-bold tracking-tight">99.9%</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

