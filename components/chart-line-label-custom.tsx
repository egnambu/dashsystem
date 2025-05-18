"use client"

import { CartesianGrid, LabelList, Line, LineChart } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
const chartData = [
  { browser: "Cabinets", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "Sofas", visitors: 200, fill: "var(--color-safari)" },
  { browser: "Beds", visitors: 250, fill: "var(--color-firefox)" },
  { browser: "Chairs", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
  Cabinets: {
    label: "Cabinets",
    color: "#000000",
  },
  Sofas: {
    label: "Sofas",
    color: "hsl(var(--chart-1))",
  },
  Tables: {
    label: "Tables",
    color: "hsl(var(--chart-2))",
  },
  Beds: {
    label: "Beds",
    color: "hsl(var(--chart-3))",
  },
  Chairs: {
    label: "Chairs",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function Component() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Total Deliveries</CardTitle>
        </div>
        <CardDescription className="ml-4">
          January - June 2024
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 24,
              left: 24,
              right: 24,
            }}
          >
            <CartesianGrid vertical={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" nameKey="visitors" hideLabel />}
            />
            <Line
              dataKey="visitors"
              type="natural"
              stroke="#000000"
              strokeWidth={2}
              dot={{
                fill: "var(--color-visitors)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
                dataKey="browser"
                formatter={(value: keyof typeof chartConfig) => chartConfig[value]?.label}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
