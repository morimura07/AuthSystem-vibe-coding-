"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b">
      <div className="container space-y-8 py-24 md:py-32 lg:py-40">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-8 text-center">
          <div className="inline-flex items-center rounded-full border bg-muted px-4 py-1.5 text-sm">
            <TrendingUp className="mr-2 h-3.5 w-3.5" />
            <span className="text-muted-foreground">Trusted by 500k+ traders worldwide</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
            Backtest and Analyze Your Trades with{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Confidence
            </span>
          </h1>
          <p className="max-w-[700px] text-lg leading-relaxed text-muted-foreground md:text-xl">
            Professional trading analytics platform that helps you understand your
            trading performance, identify patterns, and make data-driven decisions.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="h-12 px-8 text-base" asChild>
              <Link href="/register">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

