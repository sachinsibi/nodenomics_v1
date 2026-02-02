"use client"

import { useState, useEffect, useRef } from "react"
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
} from "lucide-react"
import { participants, industryApplications, humanitarianCases } from "@/lib/impact-data"
import { researchThemes, researchStats, keyTechnologies } from "@/lib/research-data"
import { faqCategories } from "@/lib/faq-data"
import { PricingCalculator } from "@/components/pricing-calculator"

type TabSection = "home" | "impact" | "research" | "partners" | "faq"

export default function NodenomicsLanding() {
  const [activeSection, setActiveSection] = useState<TabSection>("home")
  const [scrollY, setScrollY] = useState(0)
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null)
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleTabChange = (value: string) => {
    setActiveSection(value as TabSection)
    // Smooth scroll to top of content area
    mainRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const gradientPosition = (scrollY % 1000) / 10

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{
          background: `radial-gradient(ellipse at ${50 + gradientPosition}% ${30 + gradientPosition * 0.5}%, hsl(var(--primary) / 0.15) 0%, transparent 50%),
                       radial-gradient(ellipse at ${20 - gradientPosition * 0.3}% ${70 + gradientPosition * 0.3}%, hsl(var(--primary) / 0.1) 0%, transparent 40%)`,
        }}
      />

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 pointer-events-none grid-pattern opacity-50" />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center glow">
                <Network className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl font-bold tracking-tight font-sans">
                NODE<span className="text-primary">NOMICS</span>
              </span>
            </div>

            <Tabs value={activeSection} onValueChange={handleTabChange} className="hidden md:block">
              <TabsList className="bg-secondary/50">
                <TabsTrigger value="home" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Home
                </TabsTrigger>
                <TabsTrigger value="impact" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Impact
                </TabsTrigger>
                <TabsTrigger value="research" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Research
                </TabsTrigger>
                <TabsTrigger value="partners" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Partners
                </TabsTrigger>
                <TabsTrigger value="faq" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  FAQ
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started
            </Button>
          </div>

          {/* Mobile tabs */}
          <div className="md:hidden mt-4">
            <Tabs value={activeSection} onValueChange={handleTabChange}>
              <TabsList className="w-full bg-secondary/50 grid grid-cols-5">
                <TabsTrigger value="home" className="text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Home
                </TabsTrigger>
                <TabsTrigger value="impact" className="text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Impact
                </TabsTrigger>
                <TabsTrigger value="research" className="text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Research
                </TabsTrigger>
                <TabsTrigger value="partners" className="text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Partners
                </TabsTrigger>
                <TabsTrigger value="faq" className="text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  FAQ
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main ref={mainRef} className="relative z-10">
        {/* Content sections with expand animation */}
        <div className="section-expand">
          {activeSection === "home" && <HomeSection onNavigate={handleTabChange} />}
          {activeSection === "impact" && <ImpactSection />}
          {activeSection === "research" && <ResearchSection />}
          {activeSection === "partners" && <PartnersSection />}
          {activeSection === "faq" && <FAQSection expandedFaq={expandedFaq} setExpandedFaq={setExpandedFaq} />}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Network className="w-6 h-6 text-primary" />
                <span className="font-bold">NODENOMICS</span>
              </div>
              <p className="text-muted-foreground text-sm">
                The machine economy starts here. Autonomous data marketplace enabling real-time M2M transactions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">Documentation</li>
                <li className="hover:text-primary cursor-pointer transition-colors">API Reference</li>
                <li className="hover:text-primary cursor-pointer transition-colors">SDKs</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Status</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">About</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Blog</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">Privacy</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Terms</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Security</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            Built on 115+ peer-reviewed studies. Enabling the machine economy.
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
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
            <Sparkles className="w-3 h-3 mr-1" />
            Backed by 115+ peer-reviewed studies
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance">
            The Machine Economy{" "}
            <span className="text-primary">Starts Here</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Autonomous data marketplace with micropayments enabling real-time machine-to-machine transactions. Connect IoT devices, AI agents, and data brokers in a decentralized ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow"
              onClick={() => onNavigate("impact")}
            >
              Explore Real-World Impact
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
              onClick={() => onNavigate("research")}
            >
              View Research
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* Three Participants */}
      <section className="container mx-auto px-4 py-20 border-t border-border/50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Three Participants, One Ecosystem</h2>
          <p className="text-muted-foreground text-lg">A circular economy of data and compute</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {participants.map((participant, idx) => (
            <Card
              key={participant.type}
              className="card-hover bg-card/50 backdrop-blur-sm border-border/50"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  {participant.icon === "sensor" && <Database className="w-7 h-7 text-primary" />}
                  {participant.icon === "cog" && <Cpu className="w-7 h-7 text-primary" />}
                  {participant.icon === "bot" && <Bot className="w-7 h-7 text-primary" />}
                </div>
                <CardTitle className="text-xl">{participant.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{participant.description}</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/10 border border-primary/30">
                    <span className="text-xs text-primary font-semibold">SELLS:</span>
                    <span className="text-sm">{participant.sells}</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary border border-border">
                    <span className="text-xs text-muted-foreground font-semibold">BUYS:</span>
                    <span className="text-sm">{participant.buys}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Data Flow */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20">
          <h3 className="text-xl font-semibold text-center mb-8">How Data Flows</h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {[
              { icon: Database, label: "IoT Devices generate\nraw data" },
              { icon: Cpu, label: "Brokers refine and\nenrich data" },
              { icon: Bot, label: "AI Agents use data for\nautonomous missions" },
              { icon: Zap, label: "Compute resources\ncirculate back" },
            ].map((step, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{step.label}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block text-primary text-2xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="container mx-auto px-4 py-20 border-t border-border/50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built on Academic Research</h2>
          <p className="text-muted-foreground text-lg">Over {researchStats.totalStudies}+ peer-reviewed studies inform our approach</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
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
            <Card key={idx} className="card-hover bg-card/50 backdrop-blur-sm border-border/50 group cursor-pointer" onClick={() => onNavigate(feature.link)}>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <span className="text-primary text-sm font-medium group-hover:underline">
                  Learn more →
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Calculator Section */}
      <section className="container mx-auto px-4 py-20 border-t border-border/50">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
            <Activity className="w-3 h-3 mr-1" />
            Live Calculator
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Decentralized Compute Pricing</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Compare cloud costs (AWS/Azure/GCP) vs decentralized networks in real-time
          </p>
        </div>
        <PricingCalculator />
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 py-20 border-t border-border/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Scale</h2>
          <p className="text-muted-foreground">Enterprise-grade performance</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { value: "< 100ms", label: "Transaction Latency", sub: "From request to data delivery" },
            { value: "10M+", label: "Connected Devices", sub: "Across all supported networks" },
            { value: "99.99%", label: "Uptime SLA", sub: "Distributed infrastructure" },
          ].map((stat, idx) => (
            <Card key={idx} className="text-center card-hover bg-card/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-8">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2 font-mono">{stat.value}</p>
                <p className="text-lg font-semibold mb-1">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.sub}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20 border-t border-border/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Machine Economy</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Whether you're an IoT device manufacturer, data broker, or AI developer—there's a place for you in the Nodenomics ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 glow" onClick={() => onNavigate("partners")}>
              Become a Partner
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50" onClick={() => onNavigate("faq")}>
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

// Impact Section
function ImpactSection() {
  return (
    <>
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Real-World <span className="text-primary">Impact</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            How autonomous M2M data markets are transforming industries and enabling humanitarian missions at scale
          </p>
        </div>

        {/* Industry Applications */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Applications Across Industries</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryApplications.map((app, idx) => (
              <Card key={idx} className="card-hover bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="bg-primary/20 text-primary border-primary/30">{app.industry}</Badge>
                    {app.researchSource && (
                      <Badge variant="outline" className="text-xs">Research-backed</Badge>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{app.useCase}</h3>
                  <p className="text-sm text-muted-foreground">{app.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Humanitarian Cases */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-2">Humanitarian <span className="text-primary">Missions</span></h2>
          <p className="text-muted-foreground mb-8">AI agents autonomously purchasing data to serve humanity</p>
          <div className="grid md:grid-cols-2 gap-6">
            {humanitarianCases.map((mission, idx) => (
              <Card key={idx} className="card-hover bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{mission.title}</h3>
                  <p className="text-muted-foreground mb-6">{mission.description}</p>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-background/50">
                      <span className="text-xs text-primary font-semibold block mb-1">AI AGENT:</span>
                      <span className="text-sm">{mission.aiAgent}</span>
                    </div>
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                      <span className="text-xs text-primary font-semibold block mb-1">MEASURED IMPACT:</span>
                      <span className="text-sm font-medium">{mission.impact}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "40%", label: "Faster Disaster Response" },
            { value: "200K+", label: "Clean Water Access" },
            { value: "60%", label: "Reduced Poaching" },
            { value: "10K+", label: "Lives Saved" },
          ].map((stat, idx) => (
            <Card key={idx} className="text-center bg-card/50 border-primary/20">
              <CardContent className="p-6">
                <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  )
}

// Research Section
function ResearchSection() {
  const [expandedTheme, setExpandedTheme] = useState<string | null>(null)

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Built on <span className="text-primary">Academic Research</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Nodenomics is grounded in {researchStats.totalStudies}+ peer-reviewed studies spanning {researchStats.yearRange}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { value: `${researchStats.totalStudies}+`, label: "Studies Reviewed" },
            { value: researchStats.thematicAreas.toString(), label: "Research Themes" },
            { value: `${researchStats.totalCitations.toLocaleString()}+`, label: "Total Citations" },
          ].map((stat, idx) => (
            <div key={idx} className="px-6 py-3 rounded-lg bg-card border border-primary/30">
              <p className="text-xl font-bold text-primary">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Research Themes */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-8">Research Themes</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchThemes.map((theme) => (
            <Card
              key={theme.id}
              className="card-hover bg-card/50 backdrop-blur-sm border-border/50 cursor-pointer"
              onClick={() => setExpandedTheme(expandedTheme === theme.id ? null : theme.id)}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <Badge className="bg-primary/20 text-primary border-primary/30">
                    {theme.citationCount.toLocaleString()} citations
                  </Badge>
                  <span className="text-primary text-lg">{expandedTheme === theme.id ? "−" : "+"}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{theme.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{theme.description}</p>
                {expandedTheme === theme.id && (
                  <div className="mt-4 pt-4 border-t border-border animate-fade-in">
                    <p className="text-xs text-primary font-semibold mb-2">KEY INSIGHT:</p>
                    <p className="text-sm italic text-muted-foreground">{theme.keyInsight}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Key Technologies */}
      <div>
        <h2 className="text-2xl font-bold mb-8">Key Technologies</h2>
        <div className="space-y-6">
          {keyTechnologies.map((tech, idx) => (
            <Card key={idx} className="bg-card/50 border-border/50">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                    <p className="text-muted-foreground mb-4">{tech.description}</p>
                    <Badge variant="outline">{tech.researchSource}</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-primary font-semibold mb-2">ADVANTAGES:</p>
                      <ul className="space-y-1">
                        {tech.advantages.map((adv, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary">+</span> {adv}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-semibold mb-2">CHALLENGES:</p>
                      <ul className="space-y-1">
                        {tech.challenges.map((ch, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span>−</span> {ch}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Partners Section
function PartnersSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Join the <span className="text-primary">Ecosystem</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Partnership opportunities for IoT devices, value-added brokers, AI agents, and strategic collaborators
        </p>
      </div>

      {/* Partnership Types */}
      <div className="space-y-8 mb-20">
        {participants.map((participant, idx) => (
          <Card key={idx} className="bg-card/50 border-border/50">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  {participant.icon === "sensor" && <Database className="w-8 h-8 text-primary" />}
                  {participant.icon === "cog" && <Cpu className="w-8 h-8 text-primary" />}
                  {participant.icon === "bot" && <Bot className="w-8 h-8 text-primary" />}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">For {participant.title}</h3>
                  <p className="text-muted-foreground">{participant.description}</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-primary font-semibold mb-3">BENEFITS:</p>
                  <ul className="space-y-2">
                    {participant.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary">+</span> {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm text-primary font-semibold mb-3">EXAMPLES:</p>
                  <ul className="space-y-2">
                    {participant.examples.slice(0, 4).map((example, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary">→</span> {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Strategic Partners */}
      <div>
        <h2 className="text-2xl font-bold mb-8">Strategic Partner Categories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { category: "IoT Platforms", examples: ["AWS IoT", "Azure IoT Hub", "Google Cloud IoT"] },
            { category: "Blockchain Infrastructure", examples: ["IOTA Foundation", "Ethereum", "Polygon"] },
            { category: "Cloud Providers", examples: ["AWS", "Microsoft Azure", "Google Cloud"] },
            { category: "Energy Providers", examples: ["Enel X", "Siemens Energy", "Tesla Energy"] },
            { category: "Academic Institutions", examples: ["MIT", "Stanford", "ETH Zurich"] },
            { category: "Humanitarian Orgs", examples: ["UN agencies", "Red Cross", "WHO"] },
          ].map((partner, idx) => (
            <Card key={idx} className="card-hover bg-card/50 border-border/50">
              <CardContent className="p-6">
                <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">{partner.category}</Badge>
                <ul className="space-y-1">
                  {partner.examples.map((ex, i) => (
                    <li key={i} className="text-sm text-muted-foreground">• {ex}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <Card className="mt-12 bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Become a Partner</h2>
            <p className="text-muted-foreground">Join the Nodenomics ecosystem</p>
          </div>
          <div className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              placeholder="Organization Name"
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
            />
            <input
              type="email"
              placeholder="Contact Email"
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
            />
            <select className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors">
              <option>IoT Device Provider</option>
              <option>Value-Added Broker</option>
              <option>AI Agent Developer</option>
              <option>Strategic Partner</option>
              <option>Other</option>
            </select>
            <textarea
              placeholder="Tell us about your use case..."
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors resize-none"
            />
            <Button className="w-full bg-primary hover:bg-primary/90 glow">
              Submit Partnership Request
            </Button>
          </div>
        </CardContent>
      </Card>
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
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Frequently Asked <span className="text-primary">Questions</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Everything you need to know about Nodenomics and the machine economy
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        {faqCategories.map((category, catIdx) => (
          <div key={catIdx}>
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">{category.category}</Badge>
            <div className="space-y-3">
              {category.questions.map((faq, qIdx) => {
                const faqId = `${catIdx}-${qIdx}`
                const isExpanded = expandedFaq === faqId

                return (
                  <Card
                    key={qIdx}
                    className="card-hover bg-card/50 border-border/50 cursor-pointer"
                    onClick={() => setExpandedFaq(isExpanded ? null : faqId)}
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold pr-4">{faq.question}</h3>
                        <button className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                          {isExpanded ? "−" : "+"}
                        </button>
                      </div>
                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t border-border animate-fade-in">
                          <p className="text-muted-foreground">{faq.answer}</p>
                          {faq.researchSource && (
                            <div className="mt-3 p-3 rounded-lg bg-primary/10 border border-primary/30">
                              <p className="text-xs text-primary">
                                <strong>Research Source:</strong> {faq.researchSource}
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Links */}
      <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {[
          { icon: Globe, title: "Research", description: "Explore 115+ studies backing Nodenomics" },
          { icon: Activity, title: "Impact", description: "See real-world humanitarian applications" },
          { icon: Network, title: "Partners", description: "Join the ecosystem as a partner" },
        ].map((link, idx) => (
          <Card key={idx} className="text-center card-hover bg-card/50 border-border/50">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <link.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{link.title}</h3>
              <p className="text-sm text-muted-foreground">{link.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
