"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "An interactive bar chart"
const chartData1 = [
  { month: "January",  stock: 85.3,  clients: 120,  products: 25 },
  { month: "February",  stock: 82.7,  clients: 110,  products: 22 },
  { month: "March",  stock: 88.1,  clients: 130,  products: 30 },
  { month: "April", stock: 90.2, clients: 145, products: 35 },
  { month: "May", stock: 89.5, clients: 150, products: 32 },
  { month: "June", stock: 91.0, clients: 160, products: 38 },
  { month: "July", stock: 87.8, clients: 155, products: 28 },
  { month: "August", stock: 92.3, clients: 170, products: 40 },
  { month: "September", stock: 89.7, clients: 165, products: 34 },
  { month: "October", stock: 90.9, clients: 175, products: 37 },
  { month: "November", stock: 93.5, clients: 180, products: 42 },
  { month: "December", stock: 94.8, clients: 190, products: 45}
]

const chartConfig1 = {
  views: {
    label: "Page Views",
  },
  stock: {
    label: "Stock",
    color: "hsl(var(--chart-1))",
  },
  clients: {
    label: "Clients",
    color: "hsl(var(--chart-2))",
  },
  products: {
    label: "Products",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig
export function Chart() {
  const [activeChart1, setActiveChart1] = React.useState<keyof typeof chartConfig1>("stock")

  const total1 = React.useMemo(
    () => ({
      stock: `${(chartData1.reduce((acc, curr) => acc + curr.stock, 0)/12).toFixed(2)}%`,
      clients: chartData1.reduce((acc, curr) => acc + curr.clients, 0),
      products: chartData1.reduce((acc, curr) => acc + curr.products, 0),
    }),
    []
  )
  return (
    <Card className="min-h-max h-full pb-[100px]">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Bar Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {["stock", "clients", "products"].map((key) => {
            const chart = key as keyof typeof chartConfig1
            return (
              <button
                key={chart}
                data-active={activeChart1 === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart1(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig1[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total1[key as keyof typeof total1].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 h-full sm:p-6">
        <ChartContainer
          config={chartConfig1}
          className="aspect-auto h-full w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData1}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => value}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => value}
                />
              }
            />
            <Bar dataKey={activeChart1} fill={`var(--color-${activeChart1})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <div className="w-[1px]"></div>
    </Card>
  )
}
