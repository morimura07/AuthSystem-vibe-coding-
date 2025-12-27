"use client"

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
import { TrendingUp, TrendingDown, DollarSign, Target } from "lucide-react"

const summaryCards = [
  {
    title: "Total Trades",
    value: "1,247",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Win Rate",
    value: "68.2%",
    change: "+2.1%",
    trend: "up",
    icon: Target,
  },
  {
    title: "Net P/L",
    value: "$24,580",
    change: "+8.3%",
    trend: "up",
    icon: TrendingUp,
  },
  {
    title: "Avg Risk/Reward",
    value: "1:2.4",
    change: "-0.2",
    trend: "down",
    icon: TrendingDown,
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
          return (
            <Card key={card.title} className="border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {card.title}
                </CardTitle>
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold tracking-tight">{card.value}</div>
                <p
                  className={`text-xs mt-1 ${
                    card.trend === "up"
                      ? "text-green-600 dark:text-green-500"
                      : "text-red-600 dark:text-red-500"
                  }`}
                >
                  {card.change} from last month
                </p>
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
              <CardTitle className="text-xl">Performance Overview</CardTitle>
              <CardDescription className="mt-1">
                Your trading performance over time
              </CardDescription>
            </div>
            <Tabs defaultValue="1M" className="w-auto">
              <TabsList>
                <TabsTrigger value="1D">1D</TabsTrigger>
                <TabsTrigger value="1W">1W</TabsTrigger>
                <TabsTrigger value="1M">1M</TabsTrigger>
                <TabsTrigger value="3M">3M</TabsTrigger>
                <TabsTrigger value="1Y">1Y</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex h-[400px] items-center justify-center rounded-lg border border-dashed border-border/50 bg-muted/30">
            <p className="text-sm text-muted-foreground">
              Chart placeholder - Performance visualization would appear here
            </p>
          </div>
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

