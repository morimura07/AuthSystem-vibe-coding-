"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, TrendingUp, Shield, Zap } from "lucide-react"

const features = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights into your trading performance with comprehensive metrics and visualizations.",
  },
  {
    icon: TrendingUp,
    title: "Backtesting Engine",
    description: "Test your strategies against historical data to validate your approach before risking capital.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your trading data is encrypted and stored securely. We never share your information.",
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description: "Get instant updates on your portfolio performance and trade analysis results.",
  },
]

export function Features() {
  return (
    <section id="features" className="container py-20 md:py-32">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-4xl">
          Everything you need to analyze your trades
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Powerful features designed to help you understand your trading
          performance and improve your strategies.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-4 mt-12">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <Card key={feature.title}>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

