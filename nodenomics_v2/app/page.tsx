"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Cpu,
  Database,
  Bot,
  Zap,
  Shield,
  Globe,
  ChevronDown,
  ExternalLink,
  Sparkles,
  Activity,
  Server,
  Network,
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  BarChart3,
  Users,
  BookOpen,
  HelpCircle,
  Home,
} from "lucide-react"
import { participants, industryApplications, humanitarianCases } from "@/lib/impact-data"
import { researchThemes, researchStats, keyTechnologies } from "@/lib/research-data"
import { faqCategories } from "@/lib/faq-data"
import { PricingCalculator } from "@/components/pricing-calculator"

type TabSection = "home" | "impact" | "research" | "partners" | "faq"

// Custom hook for intersection observer
function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true)
          observer.unobserve(element)
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isRevealed }
}

// Reveal wrapper component
function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "scale"
  className?: string
}) {
  const { ref, isRevealed } = useReveal()

  const directionClass = {
    up: "reveal",
    down: "reveal",
    left: "reveal-left",
    right: "reveal-right",
    scale: "reveal-scale",
  }[direction]

  return (
    <div
      ref={ref}
      className={`${directionClass} ${isRevealed ? "revealed" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// Animated counter component
function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const { ref, isRevealed } = useReveal()
  const [displayValue, setDisplayValue] = useState("0")

  useEffect(() => {
    if (!isRevealed) return

    const numericValue = parseInt(value.replace(/[^0-9]/g, ""))
    const duration = 2000
    const steps = 60
    const increment = numericValue / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current = Math.min(Math.round(increment * step), numericValue)

      // Format the number
      if (value.includes("K")) {
        setDisplayValue((current / 1000).toFixed(current >= 1000 ? 0 : 1) + "K")
      } else if (value.includes("M")) {
        setDisplayValue((current / 1000000).toFixed(1) + "M")
      } else if (value.includes("%")) {
        setDisplayValue(current + "%")
      } else if (value.includes("+")) {
        setDisplayValue(current.toLocaleString() + "+")
      } else if (value.includes("<")) {
        setDisplayValue("< " + current)
      } else {
        setDisplayValue(current.toLocaleString())
      }

      if (step >= steps) clearInterval(timer)
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isRevealed, value])

  return (
    <span ref={ref} className="tabular-nums">
      {isRevealed ? displayValue : "0"}{suffix}
    </span>
  )
}

// Floating particles component
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 12}s`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
          }}
        />
      ))}
    </div>
  )
}

export default function NodenomicsLanding() {
  const [activeSection, setActiveSection] = useState<TabSection>("home")
  const [scrollY, setScrollY] = useState(0)
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const mainRef = useRef<HTMLDivElement>(null)
  const [sectionKey, setSectionKey] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleTabChange = useCallback((value: string) => {
    setActiveSection(value as TabSection)
    setSectionKey((prev) => prev + 1)
    setMobileMenuOpen(false)
    mainRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [])

  const gradientPosition = (scrollY % 1000) / 10

  const tabItems = [
    { value: "home", label: "Home", icon: Home },
    { value: "impact", label: "Impact", icon: BarChart3 },
    { value: "research", label: "Research", icon: BookOpen },
    { value: "partners", label: "Partners", icon: Users },
    { value: "faq", label: "FAQ", icon: HelpCircle },
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Aurora background */}
      <div className="aurora-bg">
        <div className="aurora-orb aurora-orb-1" />
        <div className="aurora-orb aurora-orb-2" />
        <div className="aurora-orb aurora-orb-3" />
      </div>

      {/* Animated gradient background */}
      <div
        className="fixed inset-0 pointer-events-none opacity-40"
        style={{
          background: `radial-gradient(ellipse at ${50 + gradientPosition}% ${30 + gradientPosition * 0.5}%, hsl(var(--primary) / 0.2) 0%, transparent 50%),
                       radial-gradient(ellipse at ${20 - gradientPosition * 0.3}% ${70 + gradientPosition * 0.3}%, hsl(var(--primary) / 0.15) 0%, transparent 40%)`,
        }}
      />

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 pointer-events-none grid-pattern opacity-40" />

      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled ? "header-blur header-scrolled" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => handleTabChange("home")}>
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center glow group-hover:scale-110 transition-transform duration-300">
                <Network className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl font-bold tracking-tight font-sans">
                NODE<span className="text-primary">NOMICS</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <Tabs value={activeSection} onValueChange={handleTabChange} className="hidden lg:block">
              <TabsList className="bg-secondary/30 backdrop-blur-sm border border-border/50">
                {tabItems.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 gap-2"
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            {/* CTA and Mobile Menu Button */}
            <div className="flex items-center gap-3">
              <Button className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground btn-glow btn-shimmer">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <button
                className="lg:hidden p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border mobile-menu-enter">
            <div className="container mx-auto px-4 py-6">
              <nav className="space-y-2">
                {tabItems.map((tab, idx) => (
                  <button
                    key={tab.value}
                    onClick={() => handleTabChange(tab.value)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeSection === tab.value
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-secondary/50"
                    }`}
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span className="font-medium">{tab.label}</span>
                    <ChevronRight className="w-4 h-4 ml-auto" />
                  </button>
                ))}
              </nav>
              <div className="mt-6 pt-6 border-t border-border">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main ref={mainRef} className="relative z-10">
        <div key={sectionKey} className="section-expand">
          {activeSection === "home" && <HomeSection onNavigate={handleTabChange} />}
          {activeSection === "impact" && <ImpactSection />}
          {activeSection === "research" && <ResearchSection />}
          {activeSection === "partners" && <PartnersSection />}
          {activeSection === "faq" && <FAQSection expandedFaq={expandedFaq} setExpandedFaq={setExpandedFaq} />}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Network className="w-6 h-6 text-primary" />
                </div>
                <span className="font-bold text-lg">NODENOMICS</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                The machine economy starts here. Autonomous data marketplace enabling real-time M2M transactions.
              </p>
              <div className="flex gap-3">
                {["LinkedIn", "X", "GitHub"].map((social) => (
                  <button
                    key={social}
                    className="w-10 h-10 rounded-lg bg-secondary/50 hover:bg-primary/20 hover:text-primary flex items-center justify-center transition-all duration-300"
                  >
                    <span className="text-xs font-medium">{social[0]}</span>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-primary">Platform</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {["Documentation", "API Reference", "SDKs", "Status"].map((item) => (
                  <li key={item} className="hover:text-primary cursor-pointer transition-colors flex items-center gap-2">
                    <ChevronRight className="w-3 h-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-primary">Company</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {["About", "Blog", "Careers", "Contact"].map((item) => (
                  <li key={item} className="hover:text-primary cursor-pointer transition-colors flex items-center gap-2">
                    <ChevronRight className="w-3 h-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-primary">Legal</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {["Privacy Policy", "Terms of Service", "Security"].map((item) => (
                  <li key={item} className="hover:text-primary cursor-pointer transition-colors flex items-center gap-2">
                    <ChevronRight className="w-3 h-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2026 Nodenomics. Enabling the autonomous machine economy.</p>
            <p className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              Built on 115+ peer-reviewed studies
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Home Section
function HomeSection({ onNavigate }: { onNavigate: (section: string) => void }) {
  return (
    <>
      {/* Hero */}
      <section className="container mx-auto px-4 py-24 md:py-36 relative">
        <FloatingParticles />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Reveal delay={0}>
            <Badge variant="outline" className="mb-8 border-primary/50 text-primary px-4 py-2 text-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Backed by 115+ peer-reviewed studies
            </Badge>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
              The Machine Economy{" "}
              <span className="gradient-text">Starts Here</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Autonomous data marketplace with micropayments enabling real-time machine-to-machine transactions.
              Connect IoT devices, AI agents, and data brokers in a decentralized ecosystem.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground btn-glow btn-shimmer text-lg px-8 py-6"
                onClick={() => onNavigate("impact")}
              >
                Explore Real-World Impact
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 text-lg px-8 py-6"
                onClick={() => onNavigate("research")}
              >
                View Research
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Scroll indicator */}
        <Reveal delay={500}>
          <div className="flex justify-center mt-20">
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
              <ChevronDown className="w-5 h-5 text-primary" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Three Participants */}
      <section className="container mx-auto px-4 py-24 border-t border-border/30">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Three Participants, <span className="text-primary">One Ecosystem</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A circular economy of data and compute where every participant benefits
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {participants.map((participant, idx) => (
            <Reveal key={participant.type} delay={idx * 100}>
              <Card className="glass-card card-hover h-full border-border/50">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {participant.icon === "sensor" && <Database className="w-8 h-8 text-primary" />}
                    {participant.icon === "cog" && <Cpu className="w-8 h-8 text-primary" />}
                    {participant.icon === "bot" && <Bot className="w-8 h-8 text-primary" />}
                  </div>
                  <CardTitle className="text-2xl">{participant.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-8 leading-relaxed">{participant.description}</p>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-primary/10 border border-primary/30">
                      <span className="text-xs text-primary font-bold tracking-wider block mb-2">SELLS</span>
                      <span className="text-sm font-medium">{participant.sells}</span>
                    </div>
                    <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                      <span className="text-xs text-muted-foreground font-bold tracking-wider block mb-2">BUYS</span>
                      <span className="text-sm font-medium">{participant.buys}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Data Flow */}
        <Reveal delay={300}>
          <div className="mt-16 p-10 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 dot-pattern opacity-30" />
            <h3 className="text-2xl font-bold text-center mb-10 relative z-10">How Data Flows</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
              {[
                { icon: Database, label: "IoT Devices\ngenerate raw data" },
                { icon: Cpu, label: "Brokers refine\nand enrich data" },
                { icon: Bot, label: "AI Agents use\ndata for missions" },
                { icon: Zap, label: "Compute resources\ncirculate back" },
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-6">
                  <div className="text-center group">
                    <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">{step.label}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden md:flex items-center">
                      <div className="w-16 h-[2px] bg-gradient-to-r from-primary/50 to-primary/20" />
                      <ChevronRight className="w-5 h-5 text-primary -ml-1" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Key Features */}
      <section className="container mx-auto px-4 py-24 border-t border-border/30">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built on <span className="text-primary">Academic Research</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Over {researchStats.totalStudies}+ peer-reviewed studies inform our approach
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Zap,
              title: "Feeless Micropayments",
              description: "DAG-based distributed ledger technology enables economically viable micropayments down to fractions of a cent.",
              link: "research",
            },
            {
              icon: Shield,
              title: "Privacy-Preserving",
              description: "Secure Multi-Party Computation, Differential Privacy, and Zero-Knowledge Proofs enable data trading without revealing sensitive information.",
              link: "research",
            },
            {
              icon: Server,
              title: "Smart Contract Automation",
              description: "Self-executing smart contracts enable autonomous transactions at machine speed, eliminating intermediaries.",
              link: "research",
            },
            {
              icon: Activity,
              title: "Game-Theoretic Design",
              description: "Auction mechanisms and Nash equilibrium analysis ensure fair pricing, efficient resource allocation, and market stability.",
              link: "research",
            },
          ].map((feature, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <Card
                className="glass-card card-hover cursor-pointer group border-border/50"
                onClick={() => onNavigate(feature.link)}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
                  <span className="text-primary text-sm font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pricing Calculator Section */}
      <section className="container mx-auto px-4 py-24 border-t border-border/30">
        <Reveal>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 border-primary/50 text-primary px-4 py-2">
              <Activity className="w-4 h-4 mr-2" />
              Live Calculator
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Decentralized <span className="text-primary">Compute Pricing</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Compare cloud costs (AWS/Azure/GCP) vs decentralized networks in real-time
            </p>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <PricingCalculator />
        </Reveal>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 py-24 border-t border-border/30">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built for <span className="text-primary">Scale</span>
            </h2>
            <p className="text-muted-foreground text-lg">Enterprise-grade performance</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { value: "100", prefix: "< ", suffix: "ms", label: "Transaction Latency", sub: "From request to data delivery" },
            { value: "10000000", suffix: "+", label: "Connected Devices", sub: "Across all supported networks" },
            { value: "99.99", suffix: "%", label: "Uptime SLA", sub: "Distributed infrastructure" },
          ].map((stat, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <Card className="text-center glass-card card-hover border-primary/20">
                <CardContent className="p-10">
                  <p className="text-5xl md:text-6xl font-bold text-primary mb-4 font-mono">
                    {stat.prefix || ""}
                    <AnimatedCounter value={stat.value} />
                    {stat.suffix || ""}
                  </p>
                  <p className="text-xl font-semibold mb-2">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.sub}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-24 border-t border-border/30">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the <span className="text-primary">Machine Economy</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              Whether you're an IoT device manufacturer, data broker, or AI developer—there's a place for you in the Nodenomics ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 btn-glow btn-shimmer text-lg px-8 py-6"
                onClick={() => onNavigate("partners")}
              >
                Become a Partner
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-lg px-8 py-6"
                onClick={() => onNavigate("faq")}
              >
                Learn More
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}

// Impact Section
function ImpactSection() {
  return (
    <>
      <section className="container mx-auto px-4 py-24">
        <Reveal>
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Real-World <span className="gradient-text">Impact</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              How autonomous M2M data markets are transforming industries and enabling humanitarian missions at scale
            </p>
          </div>
        </Reveal>

        {/* Industry Applications */}
        <div className="mb-24">
          <Reveal>
            <h2 className="text-3xl font-bold mb-10">Applications Across Industries</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryApplications.map((app, idx) => (
              <Reveal key={idx} delay={idx * 50}>
                <Card className="glass-card card-hover h-full border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-primary/20 text-primary border-primary/30">{app.industry}</Badge>
                      {app.researchSource && (
                        <Badge variant="outline" className="text-xs">Research-backed</Badge>
                      )}
                    </div>
                    <h3 className="text-lg font-bold mb-3">{app.useCase}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{app.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Humanitarian Cases */}
        <div className="mb-24">
          <Reveal>
            <h2 className="text-3xl font-bold mb-3">
              Humanitarian <span className="text-primary">Missions</span>
            </h2>
            <p className="text-muted-foreground mb-10">AI agents autonomously purchasing data to serve humanity</p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            {humanitarianCases.map((mission, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <Card className="premium-card card-hover bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">{mission.title}</h3>
                    <p className="text-muted-foreground mb-8 leading-relaxed">{mission.description}</p>
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-background/50 border border-border">
                        <span className="text-xs text-primary font-bold tracking-wider block mb-2">AI AGENT</span>
                        <span className="text-sm">{mission.aiAgent}</span>
                      </div>
                      <div className="p-4 rounded-xl bg-primary/10 border border-primary/30">
                        <span className="text-xs text-primary font-bold tracking-wider block mb-2">MEASURED IMPACT</span>
                        <span className="text-sm font-semibold">{mission.impact}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "40", suffix: "%", label: "Faster Disaster Response" },
              { value: "200000", suffix: "+", label: "Clean Water Access" },
              { value: "60", suffix: "%", label: "Reduced Poaching" },
              { value: "10000", suffix: "+", label: "Lives Saved" },
            ].map((stat, idx) => (
              <Card key={idx} className="text-center glass-card border-primary/20">
                <CardContent className="p-8">
                  <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    <AnimatedCounter value={stat.value} />
                    {stat.suffix}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  )
}

// Research Section
function ResearchSection() {
  const [expandedTheme, setExpandedTheme] = useState<string | null>(null)

  return (
    <section className="container mx-auto px-4 py-24">
      <Reveal>
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Built on <span className="gradient-text">Academic Research</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Nodenomics is grounded in {researchStats.totalStudies}+ peer-reviewed studies spanning {researchStats.yearRange}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { value: `${researchStats.totalStudies}+`, label: "Studies Reviewed" },
              { value: researchStats.thematicAreas.toString(), label: "Research Themes" },
              { value: `${researchStats.totalCitations.toLocaleString()}+`, label: "Total Citations" },
            ].map((stat, idx) => (
              <div key={idx} className="px-8 py-4 rounded-2xl glass-card border border-primary/30">
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Research Themes */}
      <div className="mb-24">
        <Reveal>
          <h2 className="text-3xl font-bold mb-10">Research Themes</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchThemes.map((theme, idx) => (
            <Reveal key={theme.id} delay={idx * 50}>
              <Card
                className="glass-card card-hover cursor-pointer border-border/50 h-full"
                onClick={() => setExpandedTheme(expandedTheme === theme.id ? null : theme.id)}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      {theme.citationCount.toLocaleString()} citations
                    </Badge>
                    <button className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold transition-transform duration-300">
                      {expandedTheme === theme.id ? "−" : "+"}
                    </button>
                  </div>
                  <h3 className="text-lg font-bold mb-3">{theme.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{theme.description}</p>
                  <div className={`accordion-content ${expandedTheme === theme.id ? "expanded" : ""}`}>
                    <div className="accordion-inner">
                      <div className="mt-6 pt-6 border-t border-border">
                        <p className="text-xs text-primary font-bold tracking-wider mb-3">KEY INSIGHT</p>
                        <p className="text-sm italic text-muted-foreground leading-relaxed">{theme.keyInsight}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Key Technologies */}
      <div>
        <Reveal>
          <h2 className="text-3xl font-bold mb-10">Key Technologies</h2>
        </Reveal>
        <div className="space-y-8">
          {keyTechnologies.map((tech, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <Card className="glass-card border-border/50">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{tech.name}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{tech.description}</p>
                      <Badge variant="outline" className="text-xs">{tech.researchSource}</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-xs text-primary font-bold tracking-wider mb-4">ADVANTAGES</p>
                        <ul className="space-y-2">
                          {tech.advantages.map((adv, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">+</span>
                              <span>{adv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-bold tracking-wider mb-4">CHALLENGES</p>
                        <ul className="space-y-2">
                          {tech.challenges.map((ch, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="mt-1">−</span>
                              <span>{ch}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// Partners Section
function PartnersSection() {
  return (
    <section className="container mx-auto px-4 py-24">
      <Reveal>
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Join the <span className="gradient-text">Ecosystem</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Partnership opportunities for IoT devices, value-added brokers, AI agents, and strategic collaborators
          </p>
        </div>
      </Reveal>

      {/* Partnership Types */}
      <div className="space-y-8 mb-24">
        {participants.map((participant, idx) => (
          <Reveal key={idx} delay={idx * 100}>
            <Card className="glass-card border-border/50 overflow-hidden">
              <CardContent className="p-10">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shrink-0">
                    {participant.icon === "sensor" && <Database className="w-10 h-10 text-primary" />}
                    {participant.icon === "cog" && <Cpu className="w-10 h-10 text-primary" />}
                    {participant.icon === "bot" && <Bot className="w-10 h-10 text-primary" />}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">For {participant.title}</h3>
                    <p className="text-muted-foreground mb-8">{participant.description}</p>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-sm text-primary font-bold tracking-wider mb-4">BENEFITS</p>
                        <ul className="space-y-3">
                          {participant.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <span className="text-primary mt-0.5">+</span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm text-primary font-bold tracking-wider mb-4">EXAMPLES</p>
                        <ul className="space-y-3">
                          {participant.examples.slice(0, 4).map((example, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                              <span>{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>

      {/* Strategic Partners */}
      <Reveal>
        <h2 className="text-3xl font-bold mb-10">Strategic Partner Categories</h2>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {[
          { category: "IoT Platforms", examples: ["AWS IoT", "Azure IoT Hub", "Google Cloud IoT"] },
          { category: "Blockchain Infrastructure", examples: ["IOTA Foundation", "Ethereum", "Polygon"] },
          { category: "Cloud Providers", examples: ["AWS", "Microsoft Azure", "Google Cloud"] },
          { category: "Energy Providers", examples: ["Enel X", "Siemens Energy", "Tesla Energy"] },
          { category: "Academic Institutions", examples: ["MIT", "Stanford", "ETH Zurich"] },
          { category: "Humanitarian Orgs", examples: ["UN agencies", "Red Cross", "WHO"] },
        ].map((partner, idx) => (
          <Reveal key={idx} delay={idx * 50}>
            <Card className="glass-card card-hover border-border/50 h-full">
              <CardContent className="p-6">
                <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">{partner.category}</Badge>
                <ul className="space-y-2">
                  {partner.examples.map((ex, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>

      {/* Contact Form */}
      <Reveal>
        <Card className="premium-card bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20">
          <CardContent className="p-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Become a Partner</h2>
              <p className="text-muted-foreground">Join the Nodenomics ecosystem</p>
            </div>
            <div className="max-w-lg mx-auto space-y-5">
              <input
                type="text"
                placeholder="Organization Name"
                className="w-full px-5 py-4 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
              />
              <input
                type="email"
                placeholder="Contact Email"
                className="w-full px-5 py-4 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
              />
              <select className="w-full px-5 py-4 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all">
                <option>IoT Device Provider</option>
                <option>Value-Added Broker</option>
                <option>AI Agent Developer</option>
                <option>Strategic Partner</option>
                <option>Other</option>
              </select>
              <textarea
                placeholder="Tell us about your use case..."
                rows={4}
                className="w-full px-5 py-4 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all resize-none"
              />
              <Button className="w-full bg-primary hover:bg-primary/90 btn-glow btn-shimmer text-lg py-6">
                Submit Partnership Request
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </Reveal>
    </section>
  )
}

// FAQ Section
function FAQSection({
  expandedFaq,
  setExpandedFaq,
}: {
  expandedFaq: string | null
  setExpandedFaq: (id: string | null) => void
}) {
  return (
    <section className="container mx-auto px-4 py-24">
      <Reveal>
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Nodenomics and the machine economy
          </p>
        </div>
      </Reveal>

      <div className="max-w-3xl mx-auto space-y-10">
        {faqCategories.map((category, catIdx) => (
          <div key={catIdx}>
            <Reveal delay={catIdx * 50}>
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-6 text-sm">{category.category}</Badge>
            </Reveal>
            <div className="space-y-4">
              {category.questions.map((faq, qIdx) => {
                const faqId = `${catIdx}-${qIdx}`
                const isExpanded = expandedFaq === faqId

                return (
                  <Reveal key={qIdx} delay={catIdx * 50 + qIdx * 30}>
                    <Card
                      className="glass-card card-hover cursor-pointer border-border/50"
                      onClick={() => setExpandedFaq(isExpanded ? null : faqId)}
                    >
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start gap-4">
                          <h3 className="font-semibold text-lg">{faq.question}</h3>
                          <button className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold transition-transform duration-300 hover:scale-110">
                            {isExpanded ? "−" : "+"}
                          </button>
                        </div>
                        <div className={`accordion-content ${isExpanded ? "expanded" : ""}`}>
                          <div className="accordion-inner">
                            <div className="mt-6 pt-6 border-t border-border">
                              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                              {faq.researchSource && (
                                <div className="mt-4 p-4 rounded-xl bg-primary/10 border border-primary/30">
                                  <p className="text-xs text-primary">
                                    <strong>Research Source:</strong> {faq.researchSource}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Reveal>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Links */}
      <Reveal delay={200}>
        <div className="mt-20 grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { icon: Globe, title: "Research", description: "Explore 115+ studies backing Nodenomics" },
            { icon: Activity, title: "Impact", description: "See real-world humanitarian applications" },
            { icon: Network, title: "Partners", description: "Join the ecosystem as a partner" },
          ].map((link, idx) => (
            <Card key={idx} className="text-center glass-card card-hover border-border/50">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-6">
                  <link.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{link.title}</h3>
                <p className="text-sm text-muted-foreground">{link.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
