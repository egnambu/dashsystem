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

export default function Page() {
  useEffect(() => {
    const timer = setTimeout(() => {
      toast.success("You have new reports in Inbox", {
        position: "top-center",
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
      <Toaster/>
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
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
