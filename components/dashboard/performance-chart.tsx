"use client"

import { Separator } from "@/components/ui/separator"

// Mock data for the chart - using P/L values directly for better visualization
const chartData = [
  { day: "Mon", pnl: 1200 },
  { day: "Tue", pnl: 1500 },
  { day: "Wed", pnl: 1100 },
  { day: "Thu", pnl: 1800 },
  { day: "Fri", pnl: 1600 },
  { day: "Sat", pnl: 1700 },
  { day: "Sun", pnl: 1400 },
]

const maxPnl = Math.max(...chartData.map((d) => d.pnl))
const minPnl = 0

export function PerformanceChart() {
  return (
    <div className="space-y-4">
      {/* Chart bars with grid background */}
      <div className="relative flex items-end justify-between gap-3 h-[300px] px-4 py-6">
        {/* Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between px-4">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="h-px w-full bg-border/40" />
          ))}
        </div>
        
        {/* Bars */}
        {chartData.map((item, index) => {
          const heightPercent = ((item.pnl - minPnl) / (maxPnl - minPnl)) * 100
          const minHeight = 20 // Minimum 20% height to ensure visibility
          const finalHeight = Math.max(heightPercent, minHeight)
          
          return (
            <div key={index} className="relative flex-1 flex flex-col items-center gap-3 group z-10">
              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-popover border border-border rounded-md px-2.5 py-1.5 text-xs font-semibold shadow-lg whitespace-nowrap z-30 pointer-events-none">
                ${item.pnl.toLocaleString()}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-border"></div>
              </div>
              
              {/* Bar container */}
              <div className="relative w-full flex flex-col justify-end h-full min-h-[60px]">
                <div
                  className="w-full rounded-t-lg bg-primary transition-all duration-300 group-hover:bg-primary/90 group-hover:shadow-lg group-hover:shadow-primary/20"
                  style={{ 
                    height: `${finalHeight}%`,
                    minHeight: '40px'
                  }}
                >
                  {/* Inner gradient for depth */}
                  <div className="h-full w-full rounded-t-lg bg-gradient-to-t from-primary/20 to-transparent"></div>
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
      <div className="flex items-center justify-between px-4 text-xs text-muted-foreground font-medium">
        <span>$0</span>
        <span>${maxPnl.toLocaleString()}</span>
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

