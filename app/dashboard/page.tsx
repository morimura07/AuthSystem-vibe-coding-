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
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your trading performance and analytics
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {summaryCards.map((card) => {
          const Icon = card.icon
          return (
            <Card key={card.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {card.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{card.value}</div>
                <p
                  className={`text-xs ${
                    card.trend === "up"
                      ? "text-green-600"
                      : "text-red-600"
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
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Performance Overview</CardTitle>
              <CardDescription>
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
          <div className="flex h-[400px] items-center justify-center rounded-lg border border-dashed bg-muted/50">
            <p className="text-sm text-muted-foreground">
              Chart placeholder - Performance visualization would appear here
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Trades Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Trades</CardTitle>
          <CardDescription>
            Your most recent trading activity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
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
                  <TableCell>{trade.symbol}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        trade.result === "Win"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {trade.result}
                    </span>
                  </TableCell>
                  <TableCell
                    className={`text-right font-medium ${
                      trade.pnl.startsWith("+")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {trade.pnl}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

