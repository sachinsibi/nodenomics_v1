"use client"

import { useState, useMemo, useEffect, useRef } from "react"
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
  BarChart3,
  LineChartIcon,
  PieChart,
  Sparkles,
} from "lucide-react"

const providerColors = {
  "AWS EC2": "#FF9900",
  "Azure VM": "#0078D4",
  "Google Cloud": "#4285F4",
  Nodenomics: "#14B8A6",
}

// Animated number component
function AnimatedNumber({ value, decimals = 2 }: { value: number; decimals?: number }) {
  const [displayValue, setDisplayValue] = useState(0)
  const previousValue = useRef(0)

  useEffect(() => {
    const start = previousValue.current
    const end = value
    const duration = 500
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Easing function
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = start + (end - start) * eased
      setDisplayValue(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        previousValue.current = end
      }
    }

    requestAnimationFrame(animate)
  }, [value])

  return <>{displayValue.toFixed(decimals)}</>
}

export function PricingCalculator() {
  const [config, setConfig] = useState<ComputeConfig>({
    vcpus: 2,
    memory: 4,
    storage: 100,
    hours: 720,
  })

  const [activeView, setActiveView] = useState<"comparison" | "timeline" | "savings">("comparison")
  const [isHovered, setIsHovered] = useState<string | null>(null)

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
        month: `M${month}`,
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
        month: `M${month}`,
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

  const viewButtons = [
    { id: "comparison" as const, label: "Comparison", icon: BarChart3 },
    { id: "timeline" as const, label: "Timeline", icon: LineChartIcon },
    { id: "savings" as const, label: "Savings", icon: PieChart },
  ]

  return (
    <div className="space-y-8">
      {/* Configuration Panel */}
      <Card className="glass-card border-border/50 overflow-hidden">
        <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
          <CardTitle className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
              <Server className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <span className="block">Configure Your Compute Requirements</span>
              <span className="text-sm font-normal text-muted-foreground">Adjust sliders to see real-time pricing</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* vCPUs */}
            <div className="space-y-5 group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center transition-colors shadow-lg shadow-primary/20">
                    <Cpu className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-semibold">vCPUs</span>
                </div>
                <Badge variant="outline" className="font-mono text-lg px-3 py-1 bg-background">
                  {config.vcpus}
                </Badge>
              </div>
              <Slider
                value={[config.vcpus]}
                onValueChange={([v]) => updateConfig("vcpus", v)}
                min={1}
                max={32}
                step={1}
                className="[&>span:first-child]:h-2 [&>span:first-child]:bg-secondary [&_[role=slider]]:bg-primary [&_[role=slider]]:border-2 [&_[role=slider]]:border-primary [&_[role=slider]]:w-5 [&_[role=slider]]:h-5 [&_[role=slider]]:shadow-lg [&_[role=slider]]:shadow-primary/30 [&>span:first-child>span]:bg-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1 core</span>
                <span>32 cores</span>
              </div>
            </div>

            {/* Memory */}
            <div className="space-y-5 group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center transition-colors shadow-lg shadow-primary/20">
                    <Zap className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-semibold">Memory</span>
                </div>
                <Badge variant="outline" className="font-mono text-lg px-3 py-1 bg-background">
                  {config.memory} GB
                </Badge>
              </div>
              <Slider
                value={[config.memory]}
                onValueChange={([v]) => updateConfig("memory", v)}
                min={2}
                max={64}
                step={2}
                className="[&>span:first-child]:h-2 [&>span:first-child]:bg-secondary [&_[role=slider]]:bg-primary [&_[role=slider]]:border-2 [&_[role=slider]]:border-primary [&_[role=slider]]:w-5 [&_[role=slider]]:h-5 [&_[role=slider]]:shadow-lg [&_[role=slider]]:shadow-primary/30 [&>span:first-child>span]:bg-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>2 GB</span>
                <span>64 GB</span>
              </div>
            </div>

            {/* Storage */}
            <div className="space-y-5 group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center transition-colors shadow-lg shadow-primary/20">
                    <HardDrive className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-semibold">Storage</span>
                </div>
                <Badge variant="outline" className="font-mono text-lg px-3 py-1 bg-background">
                  {config.storage} GB
                </Badge>
              </div>
              <Slider
                value={[config.storage]}
                onValueChange={([v]) => updateConfig("storage", v)}
                min={50}
                max={2000}
                step={50}
                className="[&>span:first-child]:h-2 [&>span:first-child]:bg-secondary [&_[role=slider]]:bg-primary [&_[role=slider]]:border-2 [&_[role=slider]]:border-primary [&_[role=slider]]:w-5 [&_[role=slider]]:h-5 [&_[role=slider]]:shadow-lg [&_[role=slider]]:shadow-primary/30 [&>span:first-child>span]:bg-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>50 GB</span>
                <span>2 TB</span>
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-5 group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center transition-colors shadow-lg shadow-primary/20">
                    <Clock className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-semibold">Hours</span>
                </div>
                <Badge variant="outline" className="font-mono text-lg px-3 py-1 bg-background">
                  {config.hours}h
                </Badge>
              </div>
              <Slider
                value={[config.hours]}
                onValueChange={([v]) => updateConfig("hours", v)}
                min={100}
                max={720}
                step={20}
                className="[&>span:first-child]:h-2 [&>span:first-child]:bg-secondary [&_[role=slider]]:bg-primary [&_[role=slider]]:border-2 [&_[role=slider]]:border-primary [&_[role=slider]]:w-5 [&_[role=slider]]:h-5 [&_[role=slider]]:shadow-lg [&_[role=slider]]:shadow-primary/30 [&>span:first-child>span]:bg-primary"
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
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="premium-card bg-gradient-to-br from-primary/15 via-primary/10 to-transparent border-primary/30 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
          <CardContent className="p-8 text-center relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/20">
              <TrendingDown className="w-7 h-7 text-primary-foreground" />
            </div>
            <p className="text-5xl font-bold text-primary mb-2 font-mono">
              <AnimatedNumber value={savings.percentage} decimals={0} />%
            </p>
            <p className="text-sm text-muted-foreground font-medium">Average Savings vs Cloud</p>
          </CardContent>
        </Card>
        <Card className="glass-card border-border/50">
          <CardContent className="p-8 text-center">
            <div className="w-14 h-14 rounded-2xl bg-secondary/50 flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-7 h-7 text-foreground" />
            </div>
            <p className="text-5xl font-bold text-foreground mb-2 font-mono">
              $<AnimatedNumber value={savings.amount} />
            </p>
            <p className="text-sm text-muted-foreground font-medium">Saved vs Cloud Average</p>
          </CardContent>
        </Card>
        <Card className="glass-card border-border/50">
          <CardContent className="p-8 text-center">
            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/20">
              <Server className="w-7 h-7 text-primary-foreground" />
            </div>
            <p className="text-5xl font-bold text-primary mb-2 font-mono">
              $<AnimatedNumber value={prices.find((p) => p.name === "Nodenomics")?.price || 0} />
            </p>
            <p className="text-sm text-muted-foreground font-medium">Nodenomics Monthly Price</p>
          </CardContent>
        </Card>
      </div>

      {/* View Toggle */}
      <div className="flex justify-center">
        <div className="inline-flex bg-secondary/30 backdrop-blur-sm rounded-xl p-1.5 border border-border/50">
          {viewButtons.map((view) => (
            <Button
              key={view.id}
              variant="ghost"
              onClick={() => setActiveView(view.id)}
              className={`relative px-6 py-2.5 rounded-lg transition-all duration-300 ${activeView === view.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "hover:bg-secondary/50 text-muted-foreground hover:text-foreground"
                }`}
            >
              <view.icon className="w-4 h-4 mr-2" />
              {view.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Charts */}
      <Card className="glass-card border-border/50 overflow-hidden">
        <CardHeader className="border-b border-border/50">
          <CardTitle className="flex items-center gap-3">
            {activeView === "comparison" && <BarChart3 className="w-5 h-5 text-primary" />}
            {activeView === "timeline" && <LineChartIcon className="w-5 h-5 text-primary" />}
            {activeView === "savings" && <PieChart className="w-5 h-5 text-primary" />}
            {activeView === "comparison" && "Cost Comparison by Provider"}
            {activeView === "timeline" && "12-Month Cost Projection"}
            {activeView === "savings" && "Monthly Savings Over Time"}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
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
                  margin={{ top: 20, right: 40, left: 120, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={true} vertical={false} />
                  <XAxis
                    type="number"
                    tickFormatter={(value) => `$${value.toFixed(0)}`}
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis
                    type="category"
                    dataKey="name"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={13}
                    fontWeight={500}
                    tickLine={false}
                    axisLine={false}
                  />
                  <ChartTooltip
                    content={<ChartTooltipContent />}
                    formatter={(value: number) => [`$${value.toFixed(2)}`, "Monthly Cost"]}
                    cursor={{ fill: 'hsl(var(--primary) / 0.1)' }}
                  />
                  <Bar dataKey="price" radius={[0, 8, 8, 0]} barSize={40}>
                    {prices.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={providerColors[entry.name as keyof typeof providerColors]}
                        fillOpacity={entry.name === "Nodenomics" ? 1 : 0.7}
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
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis
                    tickFormatter={(value) => `$${(value / 1000).toFixed(1)}k`}
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <ChartTooltip
                    content={<ChartTooltipContent />}
                    formatter={(value: number) => [`$${value.toFixed(2)}`, ""]}
                  />
                  <Legend wrapperStyle={{ paddingTop: 20 }} />
                  <Line
                    type="monotone"
                    dataKey="AWS"
                    stroke="#FF9900"
                    strokeWidth={2}
                    dot={false}
                    strokeOpacity={0.7}
                  />
                  <Line
                    type="monotone"
                    dataKey="Azure"
                    stroke="#0078D4"
                    strokeWidth={2}
                    dot={false}
                    strokeOpacity={0.7}
                  />
                  <Line
                    type="monotone"
                    dataKey="GCP"
                    stroke="#4285F4"
                    strokeWidth={2}
                    dot={false}
                    strokeOpacity={0.7}
                  />
                  <Line
                    type="monotone"
                    dataKey="Nodenomics"
                    stroke="#14B8A6"
                    strokeWidth={3}
                    dot={{ fill: '#14B8A6', strokeWidth: 0, r: 4 }}
                    activeDot={{ r: 6, fill: '#14B8A6' }}
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
                      <stop offset="0%" stopColor="#14B8A6" stopOpacity={0.4} />
                      <stop offset="100%" stopColor="#14B8A6" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis
                    tickFormatter={(value) => `$${value.toFixed(0)}`}
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <ChartTooltip
                    content={<ChartTooltipContent />}
                    formatter={(value: number) => [`$${value.toFixed(2)}`, "Savings"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="savings"
                    stroke="#14B8A6"
                    strokeWidth={3}
                    fill="url(#savingsGradient)"
                    dot={{ fill: '#14B8A6', strokeWidth: 0, r: 4 }}
                    activeDot={{ r: 6, fill: '#14B8A6', stroke: '#fff', strokeWidth: 2 }}
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
            className={`transition-all duration-300 cursor-pointer ${provider.name === "Nodenomics"
                ? "border-2 border-primary bg-gradient-to-br from-primary/10 to-transparent pulse-glow"
                : "glass-card border-border/50 hover:border-primary/30"
              }`}
            onMouseEnter={() => setIsHovered(provider.name)}
            onMouseLeave={() => setIsHovered(null)}
            style={{
              transform: isHovered === provider.name ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)',
            }}
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-4 h-4 rounded-full shadow-lg"
                  style={{
                    backgroundColor: provider.color,
                    boxShadow: `0 0 12px ${provider.color}50`
                  }}
                />
                <span className="font-semibold">{provider.name}</span>
                {provider.name === "Nodenomics" && (
                  <Badge className="ml-auto bg-primary text-primary-foreground border-primary/30 btn-glow">
                    Best Value
                  </Badge>
                )}
              </div>
              <p className="text-3xl font-bold font-mono mb-1">
                $<AnimatedNumber value={provider.price} />
              </p>
              <p className="text-sm text-muted-foreground">per month</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Info Banner */}
      <Card className="premium-card bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-primary/20 overflow-hidden">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
              <Zap className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="font-bold text-lg mb-2">Why Nodenomics is More Affordable</h3>
              <p className="text-muted-foreground leading-relaxed">
                Decentralized compute leverages idle resources across the network, eliminating traditional data center overhead.
                Smart contracts automate transactions, and DAG-based micropayments enable pay-per-use pricing without minimum commitments.
              </p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 btn-shimmer shrink-0">
              Learn More
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
