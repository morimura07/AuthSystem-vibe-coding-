"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="container space-y-6 py-20 md:py-32 lg:py-40">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-6 text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
          Backtest and Analyze Your Trades with Confidence
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
          Professional trading analytics platform that helps you understand your
          trading performance, identify patterns, and make data-driven decisions.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" asChild>
            <Link href="/register">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

