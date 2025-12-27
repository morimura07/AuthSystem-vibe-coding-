"use client"

export function Stats() {
  return (
    <section className="container py-20 md:py-32">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:max-w-[64rem]">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-4xl font-bold">500k+</div>
            <div className="text-muted-foreground">Active Traders</div>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="text-4xl font-bold">10M+</div>
            <div className="text-muted-foreground">Trades Analyzed</div>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="text-4xl font-bold">99.9%</div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  )
}

