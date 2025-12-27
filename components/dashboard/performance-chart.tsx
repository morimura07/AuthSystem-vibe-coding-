"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// Mock data for the chart
const chartData = [
  { day: "Mon", value: 45, pnl: 1200 },
  { day: "Tue", value: 52, pnl: 1500 },
  { day: "Wed", value: 48, pnl: 1100 },
  { day: "Thu", value: 61, pnl: 1800 },
  { day: "Fri", value: 55, pnl: 1600 },
  { day: "Sat", value: 58, pnl: 1700 },
  { day: "Sun", value: 50, pnl: 1400 },
]

const maxValue = Math.max(...chartData.map((d) => d.value))

export function PerformanceChart() {
  return (
    <div className="space-y-4">
      {/* Chart bars with grid background */}
      <div className="relative flex items-end justify-between gap-2 h-[280px] px-2 py-4">
        {/* Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between px-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="h-px w-full bg-border/30" />
          ))}
        </div>
        
        {/* Bars */}
        {chartData.map((item, index) => {
          const height = (item.value / maxValue) * 100
          return (
            <div key={index} className="relative flex-1 flex flex-col items-center gap-2 group z-10">
              {/* Bar */}
              <div className="relative w-full flex flex-col justify-end h-full">
                <div
                  className="w-full rounded-t-md bg-gradient-to-t from-primary via-primary/80 to-primary/50 transition-all duration-300 group-hover:from-primary group-hover:via-primary/90 group-hover:to-primary/70 group-hover:shadow-lg group-hover:scale-105"
                  style={{ height: `${height}%` }}
                >
                  <div className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-popover border border-border rounded-md px-2.5 py-1.5 text-xs font-semibold shadow-lg whitespace-nowrap z-20">
                    ${item.pnl.toLocaleString()}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border"></div>
                  </div>
                </div>
              </div>
              {/* Day label */}
              <span className="text-xs text-muted-foreground font-medium">
                {item.day}
              </span>
            </div>
          )
        })}
      </div>

      {/* Y-axis labels */}
      <div className="flex items-center justify-between px-2 text-xs text-muted-foreground">
        <span>$0</span>
        <span>${Math.max(...chartData.map((d) => d.pnl)).toLocaleString()}</span>
      </div>

      <Separator />

      {/* Summary stats */}
      <div className="grid grid-cols-3 gap-4 pt-2">
        <div className="text-center">
          <div className="text-sm font-semibold text-foreground">
            ${chartData.reduce((sum, d) => sum + d.pnl, 0).toLocaleString()}
          </div>
          <div className="text-xs text-muted-foreground mt-1">Total P/L</div>
        </div>
        <div className="text-center">
          <div className="text-sm font-semibold text-foreground">
            ${Math.round(chartData.reduce((sum, d) => sum + d.pnl, 0) / chartData.length).toLocaleString()}
          </div>
          <div className="text-xs text-muted-foreground mt-1">Avg Daily</div>
        </div>
        <div className="text-center">
          <div className="text-sm font-semibold text-green-600 dark:text-green-500">
            +{((chartData[chartData.length - 1].pnl / chartData[0].pnl - 1) * 100).toFixed(1)}%
          </div>
          <div className="text-xs text-muted-foreground mt-1">Growth</div>
        </div>
      </div>
    </div>
  )
}

