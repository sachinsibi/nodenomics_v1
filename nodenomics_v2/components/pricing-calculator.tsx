"use client"

import { useState, useMemo } from "react"
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Cell,
  Line,
  LineChart,
  Area,
  AreaChart,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Slider } from "@/components/ui/slider"
import {
  cloudProviders,
  calculatePrice,
  calculateSavings,
} from "@/lib/calculator-data"
import { ComputeConfig } from "@/lib/types"
import {
  Server,
  Cpu,
  HardDrive,
  Clock,
  TrendingDown,
  Zap,
} from "lucide-react"

const providerColors = {
  "AWS EC2": "#FF9900",
  "Azure VM": "#0078D4",
  "Google Cloud": "#4285F4",
  Nodenomics: "#14B8A6",
}

export function PricingCalculator() {
  const [config, setConfig] = useState<ComputeConfig>({
    vcpus: 2,
    memory: 4,
    storage: 100,
    hours: 720,
  })

  const [activeView, setActiveView] = useState<"comparison" | "timeline" | "savings">("comparison")

  // Calculate prices for all providers
  const prices = useMemo(() => {
    return cloudProviders.map((provider) => ({
      name: provider.name,
      price: calculatePrice(provider, config),
      color: provider.color,
    }))
  }, [config])

  // Calculate savings
  const savings = useMemo(() => {
    const nodenomicsPrice = prices.find((p) => p.name === "Nodenomics")?.price || 0
    const otherPrices = prices.filter((p) => p.name !== "Nodenomics").map((p) => p.price)
    return calculateSavings(nodenomicsPrice, otherPrices)
  }, [prices])

  // Generate timeline data (12 months)
  const timelineData = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => {
      const month = i + 1
      const monthConfig = { ...config, hours: 720 * month }
      return {
        month: `Month ${month}`,
        AWS: calculatePrice(cloudProviders[0], monthConfig),
        Azure: calculatePrice(cloudProviders[1], monthConfig),
        GCP: calculatePrice(cloudProviders[2], monthConfig),
        Nodenomics: calculatePrice(cloudProviders[3], monthConfig),
      }
    })
  }, [config])

  // Generate savings over time data
  const savingsData = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => {
      const month = i + 1
      const monthConfig = { ...config, hours: 720 * month }
      const nodenomicsPrice = calculatePrice(cloudProviders[3], monthConfig)
      const avgOthers = (
        calculatePrice(cloudProviders[0], monthConfig) +
        calculatePrice(cloudProviders[1], monthConfig) +
        calculatePrice(cloudProviders[2], monthConfig)
      ) / 3
      return {
        month: `Month ${month}`,
        savings: avgOthers - nodenomicsPrice,
        cumulative: Array.from({ length: month }, (_, j) => {
          const mConfig = { ...config, hours: 720 * (j + 1) }
          const np = calculatePrice(cloudProviders[3], mConfig)
          const ao = (
            calculatePrice(cloudProviders[0], mConfig) +
            calculatePrice(cloudProviders[1], mConfig) +
            calculatePrice(cloudProviders[2], mConfig)
          ) / 3
          return ao - np
        }).reduce((a, b) => a + b, 0) / month,
      }
    })
  }, [config])

  const updateConfig = (key: keyof ComputeConfig, value: number) => {
    setConfig((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="space-y-8">
      {/* Configuration Panel */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Server className="w-5 h-5 text-primary" />
            Configure Your Compute Requirements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* vCPUs */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-primary" />
                  <span className="font-medium">vCPUs</span>
                </div>
                <Badge variant="outline" className="font-mono">
                  {config.vcpus}
                </Badge>
              </div>
              <Slider
                value={[config.vcpus]}
                onValueChange={([v]) => updateConfig("vcpus", v)}
                min={1}
                max={32}
                step={1}
                className="[&>span:first-child]:bg-primary/30 [&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1</span>
                <span>32</span>
              </div>
            </div>

            {/* Memory */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="font-medium">Memory (GB)</span>
                </div>
                <Badge variant="outline" className="font-mono">
                  {config.memory} GB
                </Badge>
              </div>
              <Slider
                value={[config.memory]}
                onValueChange={([v]) => updateConfig("memory", v)}
                min={2}
                max={64}
                step={2}
                className="[&>span:first-child]:bg-primary/30 [&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>2 GB</span>
                <span>64 GB</span>
              </div>
            </div>

            {/* Storage */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-primary" />
                  <span className="font-medium">Storage (GB)</span>
                </div>
                <Badge variant="outline" className="font-mono">
                  {config.storage} GB
                </Badge>
              </div>
              <Slider
                value={[config.storage]}
                onValueChange={([v]) => updateConfig("storage", v)}
                min={50}
                max={2000}
                step={50}
                className="[&>span:first-child]:bg-primary/30 [&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>50 GB</span>
                <span>2 TB</span>
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-medium">Hours/Month</span>
                </div>
                <Badge variant="outline" className="font-mono">
                  {config.hours}h
                </Badge>
              </div>
              <Slider
                value={[config.hours]}
                onValueChange={([v]) => updateConfig("hours", v)}
                min={100}
                max={720}
                step={20}
                className="[&>span:first-child]:bg-primary/30 [&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>100h</span>
                <span>720h (24/7)</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Savings Highlight */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-primary/10 to-transparent border-primary/30">
          <CardContent className="p-6 text-center">
            <TrendingDown className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-3xl font-bold text-primary mb-1">
              {savings.percentage.toFixed(0)}%
            </p>
            <p className="text-sm text-muted-foreground">Average Savings</p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-6 text-center">
            <p className="text-3xl font-bold text-foreground mb-1">
              ${savings.amount.toFixed(2)}
            </p>
            <p className="text-sm text-muted-foreground">Saved vs Cloud Avg</p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-6 text-center">
            <p className="text-3xl font-bold text-primary mb-1">
              ${prices.find((p) => p.name === "Nodenomics")?.price.toFixed(2)}
            </p>
            <p className="text-sm text-muted-foreground">Nodenomics Price</p>
          </CardContent>
        </Card>
      </div>

      {/* View Toggle */}
      <div className="flex justify-center gap-2">
        {(["comparison", "timeline", "savings"] as const).map((view) => (
          <Button
            key={view}
            variant={activeView === view ? "default" : "outline"}
            onClick={() => setActiveView(view)}
            className={
              activeView === view
                ? "bg-primary hover:bg-primary/90"
                : "border-primary/50 hover:bg-primary/10"
            }
          >
            {view.charAt(0).toUpperCase() + view.slice(1)}
          </Button>
        ))}
      </div>

      {/* Charts */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle>
            {activeView === "comparison" && "Cost Comparison by Provider"}
            {activeView === "timeline" && "12-Month Cost Projection"}
            {activeView === "savings" && "Cumulative Savings Over Time"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {activeView === "comparison" && (
            <ChartContainer
              config={{
                price: { label: "Monthly Cost ($)" },
              }}
              className="h-[400px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={prices}
                  layout="vertical"
                  margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    type="number"
                    tickFormatter={(value) => `$${value.toFixed(0)}`}
                    stroke="hsl(var(--muted-foreground))"
                  />
                  <YAxis
                    type="category"
                    dataKey="name"
                    stroke="hsl(var(--muted-foreground))"
                  />
                  <ChartTooltip
                    content={<ChartTooltipContent />}
                    formatter={(value: number) => [`$${value.toFixed(2)}`, "Cost"]}
                  />
                  <Bar dataKey="price" radius={[0, 4, 4, 0]}>
                    {prices.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={providerColors[entry.name as keyof typeof providerColors]}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          )}

          {activeView === "timeline" && (
            <ChartContainer
              config={{
                AWS: { label: "AWS EC2", color: "#FF9900" },
                Azure: { label: "Azure VM", color: "#0078D4" },
                GCP: { label: "Google Cloud", color: "#4285F4" },
                Nodenomics: { label: "Nodenomics", color: "#14B8A6" },
              }}
              className="h-[400px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={timelineData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis
                    tickFormatter={(value) => `$${value.toFixed(0)}`}
                    stroke="hsl(var(--muted-foreground))"
                  />
                  <ChartTooltip
                    content={<ChartTooltipContent />}
                    formatter={(value: number) => [`$${value.toFixed(2)}`, ""]}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="AWS"
                    stroke="#FF9900"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="Azure"
                    stroke="#0078D4"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="GCP"
                    stroke="#4285F4"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="Nodenomics"
                    stroke="#14B8A6"
                    strokeWidth={3}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          )}

          {activeView === "savings" && (
            <ChartContainer
              config={{
                savings: { label: "Monthly Savings", color: "#14B8A6" },
              }}
              className="h-[400px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={savingsData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <defs>
                    <linearGradient id="savingsGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#14B8A6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#14B8A6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis
                    tickFormatter={(value) => `$${value.toFixed(0)}`}
                    stroke="hsl(var(--muted-foreground))"
                  />
                  <ChartTooltip
                    content={<ChartTooltipContent />}
                    formatter={(value: number) => [`$${value.toFixed(2)}`, "Savings"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="savings"
                    stroke="#14B8A6"
                    strokeWidth={2}
                    fill="url(#savingsGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          )}
        </CardContent>
      </Card>

      {/* Price Breakdown */}
      <div className="grid md:grid-cols-4 gap-4">
        {prices.map((provider) => (
          <Card
            key={provider.name}
            className={`border-2 transition-all ${
              provider.name === "Nodenomics"
                ? "border-primary bg-primary/5 pulse-glow"
                : "border-border/50 bg-card/50"
            }`}
          >
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: provider.color }}
                />
                <span className="font-medium text-sm">{provider.name}</span>
                {provider.name === "Nodenomics" && (
                  <Badge className="ml-auto bg-primary/20 text-primary border-primary/30 text-xs">
                    Best Value
                  </Badge>
                )}
              </div>
              <p className="text-2xl font-bold font-mono">
                ${provider.price.toFixed(2)}
              </p>
              <p className="text-xs text-muted-foreground">per month</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Info Banner */}
      <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-primary/20">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-semibold mb-1">Why Nodenomics is More Affordable</h3>
              <p className="text-sm text-muted-foreground">
                Decentralized compute leverages idle resources across the network, eliminating traditional data center overhead. 
                Smart contracts automate transactions, and DAG-based micropayments enable pay-per-use pricing without minimum commitments.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
