import { TrendingDownIcon, TrendingUpIcon } from "lucide-react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Component as BarChartDefault } from "@/components/chart-bar-default"
import { Component as LineGraph} from "./chart-line-label-custom";

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription className="flex items-center justify-between gap-2 w-full">
            Total Revenue
            <div className="flex gap-1 rounded-lg text-xs bg-[#e2e8f9] text-[#243056] border border-[#3b4a6b] px-2 py-0.5">
              <TrendingDownIcon className="size-3" />
              +12%
            </div>
          </CardDescription>
          <CardTitle className="@[250px]/card:text-[60px] mt-4 text-2xl font-semibold tabular-nums">$1,250.00</CardTitle>
          
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">Visitors for the last 6 months</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription className="flex items-center justify-between gap-2 w-full">
            New Customers
            <div className="flex gap-1 rounded-lg text-xs bg-[#ebf9e2] text-[#4a6c41] border border-[#85db57] px-2 py-0.5">
              <TrendingDownIcon className="size-3" />
              -20%
            </div>
          </CardDescription>
          <CardTitle className="@[250px]/card:text-[60px] mt-4 text-2xl font-semibold tabular-nums">1,234</CardTitle>
          
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Down 20% this period <TrendingDownIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">Acquisition needs attention</div>
        </CardFooter>
      </Card>
      <LineGraph/>
      <BarChartDefault/>
    </div>
  )
}
