'use client'
import { AppSidebar } from "../../components/app-sidebar"
import { ChartAreaInteractive } from "../../components/chart-area-interactive"
import { DataTable } from "../../components/data-table"
import { SectionCards } from "../../components/section-cards"
import { SiteHeader } from "../../components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { useEffect } from "react"

import data from "./data.json"
import { Toaster, toast } from "sonner"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingDownIcon } from "lucide-react"

export default function Page() {
  useEffect(() => {
    const timer = setTimeout(() => {
      toast.success("You have new reports in Inbox", {
        position: "top-right",
        style: {
          background: "#22c55e",
          color: "#fff",
          boxShadow: "0 4px 24px rgba(34,197,94,0.15)",
        }
      });
    }, 2300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <SidebarProvider>
      <Toaster />
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} />

              <Card className="@container/card ml-6 mr-6">
                <CardHeader className="relative">
                  <CardDescription className="flex items-center justify-between gap-2 w-full">
                    New Customers
                    <div className="flex gap-1 rounded-lg text-xs bg-[#ebf9e2] text-[#4a6c41] border border-[#85db57] px-2 py-0.5">
                      <TrendingDownIcon className="size-3" />
                      -20%
                    </div>
                  </CardDescription>
                  <CardTitle className="@[250px]/card:text-[60px] mt-4 text-2xl font-semibold tabular-nums">1,984</CardTitle>

                </CardHeader>
                <CardFooter className="flex-col items-start gap-1 text-sm">
                  <div className="line-clamp-1 flex gap-2 font-medium">
                    Down 20% this period <TrendingDownIcon className="size-4" />
                  </div>
                  <div className="text-muted-foreground">Acquisition needs attention</div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
