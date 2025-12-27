"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { PerformanceChart } from "@/components/dashboard/performance-chart"
import { TrendingUp, TrendingDown, DollarSign, Target, ArrowUpRight, ArrowDownRight } from "lucide-react"

const summaryCards = [
  {
    title: "Total Trades",
    value: "1,247",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    bgColor: "bg-blue-500/10 dark:bg-blue-500/20",
    iconColor: "text-blue-600 dark:text-blue-400",
    borderColor: "border-blue-200 dark:border-blue-800",
  },
  {
    title: "Win Rate",
    value: "68.2%",
    change: "+2.1%",
    trend: "up",
    icon: Target,
    bgColor: "bg-emerald-500/10 dark:bg-emerald-500/20",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    borderColor: "border-emerald-200 dark:border-emerald-800",
  },
  {
    title: "Net P/L",
    value: "$24,580",
    change: "+8.3%",
    trend: "up",
    icon: TrendingUp,
    bgColor: "bg-purple-500/10 dark:bg-purple-500/20",
    iconColor: "text-purple-600 dark:text-purple-400",
    borderColor: "border-purple-200 dark:border-purple-800",
  },
  {
    title: "Avg Risk/Reward",
    value: "1:2.4",
    change: "-0.2",
    trend: "down",
    icon: TrendingDown,
    bgColor: "bg-amber-500/10 dark:bg-amber-500/20",
    iconColor: "text-amber-600 dark:text-amber-400",
    borderColor: "border-amber-200 dark:border-amber-800",
  },
]

const mockTrades = [
  { date: "2024-01-15", symbol: "AAPL", result: "Win", pnl: "+$450" },
  { date: "2024-01-14", symbol: "MSFT", result: "Win", pnl: "+$320" },
  { date: "2024-01-13", symbol: "GOOGL", result: "Loss", pnl: "-$180" },
  { date: "2024-01-12", symbol: "TSLA", result: "Win", pnl: "+$620" },
  { date: "2024-01-11", symbol: "NVDA", result: "Win", pnl: "+$290" },
  { date: "2024-01-10", symbol: "AMZN", result: "Loss", pnl: "-$150" },
]

export default function DashboardPage() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("1W")

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Overview of your trading performance and analytics
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {summaryCards.map((card) => {
          const Icon = card.icon
          const TrendIcon = card.trend === "up" ? ArrowUpRight : ArrowDownRight
          return (
            <Card 
              key={card.title} 
              className={`border ${card.borderColor} hover:border-opacity-60 transition-all duration-200 hover:shadow-md`}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  {card.title}
                </CardTitle>
                <div className={`h-10 w-10 rounded-lg ${card.bgColor} flex items-center justify-center`}>
                  <Icon className={`h-5 w-5 ${card.iconColor}`} />
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-3xl font-bold tracking-tight text-foreground">{card.value}</div>
                <div className="flex items-center gap-1.5">
                  <TrendIcon 
                    className={`h-3.5 w-3.5 ${
                      card.trend === "up"
                        ? "text-emerald-600 dark:text-emerald-500"
                        : "text-red-600 dark:text-red-500"
                    }`}
                  />
                  <span
                    className={`text-sm font-medium ${
                      card.trend === "up"
                        ? "text-emerald-600 dark:text-emerald-500"
                        : "text-red-600 dark:text-red-500"
                    }`}
                  >
                    {card.change}
                  </span>
                  <span className="text-xs text-muted-foreground">from last month</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Chart Section */}
      <Card className="border-border/50">
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle className="text-xl font-semibold">Performance Overview</CardTitle>
              <CardDescription className="mt-1.5">
                Your trading performance over time
              </CardDescription>
            </div>
            <Tabs value={selectedTimeframe} onValueChange={setSelectedTimeframe} className="w-auto">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="1D" className="text-xs">1D</TabsTrigger>
                <TabsTrigger value="1W" className="text-xs">1W</TabsTrigger>
                <TabsTrigger value="1M" className="text-xs">1M</TabsTrigger>
                <TabsTrigger value="3M" className="text-xs">3M</TabsTrigger>
                <TabsTrigger value="1Y" className="text-xs">1Y</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <PerformanceChart />
        </CardContent>
      </Card>

      {/* Trades Table */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="text-xl">Recent Trades</CardTitle>
          <CardDescription className="mt-1">
            Your most recent trading activity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border border-border/50">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead>Date</TableHead>
                  <TableHead>Symbol</TableHead>
                  <TableHead>Result</TableHead>
                  <TableHead className="text-right">P/L</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockTrades.map((trade, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{trade.date}</TableCell>
                    <TableCell className="font-mono">{trade.symbol}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
                          trade.result === "Win"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                        }`}
                      >
                        {trade.result}
                      </span>
                    </TableCell>
                    <TableCell
                      className={`text-right font-semibold ${
                        trade.pnl.startsWith("+")
                          ? "text-green-600 dark:text-green-500"
                          : "text-red-600 dark:text-red-500"
                      }`}
                    >
                      {trade.pnl}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

