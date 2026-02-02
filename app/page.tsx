"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
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
  Users,
  Building2,
  GraduationCap,
  Briefcase,
  Heart,
  Leaf,
  Car,
  Factory,
  Lightbulb,
  Stethoscope,
  Wheat,
  BookOpen,
  FileText,
} from "lucide-react"
import { PricingCalculator } from "@/components/pricing-calculator"

type TabSection = "home" | "impact" | "research" | "partners" | "faq"

// Data imports inline for simplicity
const participants = [
  {
    type: "iot-devices",
    title: "IoT Devices",
    description: "Sensors, meters, and connected devices that generate valuable real-time data streams",
    sells: "Raw Data",
    buys: "Compute Resources",
    icon: "sensor",
  },
  {
    type: "value-added-brokers",
    title: "Value-Added Brokers",
    description: "Organizations that aggregate, clean, and enrich raw data into actionable insights",
    sells: "Refined Data",
    buys: "Raw Data",
    icon: "cog",
  },
  {
    type: "ai-agents",
    title: "AI Agents",
    description: "Autonomous systems that purchase and act on data to serve humanitarian and commercial goals",
    sells: "Compute Resources",
    buys: "Refined Data",
    icon: "bot",
  },
]

const industryApplications = [
  { industry: "Agriculture", useCase: "Precision Agriculture", description: "Autonomous tractors and irrigation systems purchase real-time soil moisture, weather forecasts, and crop health data.", icon: Wheat },
  { industry: "Healthcare", useCase: "Federated Learning for Diagnostics", description: "Hospitals contribute anonymized patient data to federated learning models without raw data leaving their systems.", icon: Stethoscope },
  { industry: "Energy", useCase: "Peer-to-Peer Renewable Trading", description: "Solar panels and smart meters sell excess production data and energy. AI agents optimize energy consumption.", icon: Lightbulb },
  { industry: "Smart Cities", useCase: "Traffic Optimization", description: "Traffic cameras and sensors sell real-time congestion data. AI traffic management systems optimize signal timing.", icon: Building2 },
  { industry: "Transportation", useCase: "Vehicle-to-Everything (V2X)", description: "Autonomous vehicles sell sensor data about road conditions. AI navigation systems purchase high-quality data.", icon: Car },
  { industry: "Industrial", useCase: "Predictive Maintenance", description: "Factory equipment sensors sell vibration and thermal data. AI maintenance agents predict failures.", icon: Factory },
]

const humanitarianCases = [
  { title: "Emergency Response Coordination", description: "AI systems autonomously purchase real-time sensor data to map affected areas and optimize rescue routes.", impact: "40% faster response time", icon: Heart },
  { title: "Healthcare Access in Remote Areas", description: "AI diagnostic agents improve diagnostic accuracy for rare diseases in underserved populations.", impact: "100+ remote clinics served", icon: Stethoscope },
  { title: "Food Security Optimization", description: "AI agents purchase agricultural sensor data to predict food shortages and coordinate aid distribution.", impact: "3 food crises prevented", icon: Wheat },
  { title: "Environmental Conservation", description: "AI conservation agents purchase wildlife tracking data to coordinate anti-poaching efforts.", impact: "60% reduction in poaching", icon: Leaf },
]

const researchThemes = [
  { id: "blockchain-marketplaces", title: "Blockchain-Based Data Marketplaces", description: "Decentralized platforms for secure data exchange", citationCount: 133 },
  { id: "smart-contracts", title: "Smart Contracts & Autonomous Agents", description: "Self-executing agreements for autonomous transactions", citationCount: 1500 },
  { id: "distributed-ledger", title: "Distributed Ledger Technologies", description: "Infrastructure for decentralized transaction recording", citationCount: 389 },
  { id: "compute-trading", title: "Cloud & Edge Computing Resource Trading", description: "Markets for dynamic allocation of compute resources", citationCount: 469 },
  { id: "federated-learning", title: "Federated Learning Data Markets", description: "Privacy-preserving ML with incentive mechanisms", citationCount: 1383 },
  { id: "energy-trading", title: "Peer-to-Peer Energy Trading", description: "Decentralized markets for renewable energy", citationCount: 334 },
]

const faqCategories = [
  {
    category: "General",
    questions: [
      { question: "What is Nodenomics?", answer: "Nodenomics is a decentralized data marketplace enabling autonomous machine-to-machine (M2M) transactions. It provides infrastructure for IoT devices, value-added brokers, and AI agents to trade data and compute resources in real-time using micropayments." },
      { question: "What is the machine economy?", answer: "The machine economy is an emerging paradigm where autonomous agents engage in economic transactions, trading data and computational resources with minimal human intervention." },
      { question: "Who are the three participants?", answer: "(1) IoT Devices that sell raw data and buy compute, (2) Value-Added Brokers that refine data, and (3) AI Agents that buy refined data and sell compute while performing autonomous tasks." },
    ],
  },
  {
    category: "Technology",
    questions: [
      { question: "What DLT technology is used?", answer: "A hybrid approach: DAG-based ledgers for micropayments (feeless, high scalability) combined with blockchain for smart contract execution." },
      { question: "How fast are transactions?", answer: "Average transaction latency is under 100ms from data request to delivery through parallel transaction processing." },
      { question: "What privacy techniques are used?", answer: "Secure Multi-Party Computation (SMPC), Differential Privacy, Zero-Knowledge Proofs, Federated Learning, and Homomorphic encryption." },
    ],
  },
  {
    category: "Getting Started",
    questions: [
      { question: "How do I join as an IoT device owner?", answer: "Visit our Partners section and select IoT Device Provider to request early access with integration docs and API keys." },
      { question: "Is there a test environment?", answer: "Yes. Nodenomics provides a full-featured testnet with mock data sources and test tokens for risk-free development." },
    ],
  },
]

const researchStats = { totalStudies: 115, thematicAreas: 12, totalCitations: 5000 }

export default function NodenomicsLanding() {
  const [activeSection, setActiveSection] = useState<TabSection>("home")
  const [scrollY, setScrollY] = useState(0)
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleTabChange = (value: string) => {
    setActiveSection(value as TabSection)
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
                <TabsTrigger value="home" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Home</TabsTrigger>
                <TabsTrigger value="impact" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Impact</TabsTrigger>
                <TabsTrigger value="research" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Research</TabsTrigger>
                <TabsTrigger value="partners" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Partners</TabsTrigger>
                <TabsTrigger value="faq" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">FAQ</TabsTrigger>
              </TabsList>
            </Tabs>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
          </div>

          {/* Mobile tabs */}
          <div className="md:hidden mt-4">
            <Tabs value={activeSection} onValueChange={handleTabChange}>
              <TabsList className="w-full bg-secondary/50 grid grid-cols-5">
                <TabsTrigger value="home" className="text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Home</TabsTrigger>
                <TabsTrigger value="impact" className="text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Impact</TabsTrigger>
                <TabsTrigger value="research" className="text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Research</TabsTrigger>
                <TabsTrigger value="partners" className="text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Partners</TabsTrigger>
                <TabsTrigger value="faq" className="text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">FAQ</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main ref={mainRef} className="relative z-10">
        <div className="section-expand">
          {activeSection === "home" && <HomeSection onNavigate={handleTabChange} />}
          {activeSection === "impact" && <ImpactSection />}
          {activeSection === "research" && <ResearchSection />}
          {activeSection === "partners" && <PartnersSection />}
          {activeSection === "faq" && <FAQSection />}
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
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">About</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Blog</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">Privacy</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Terms</li>
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
            Autonomous data marketplace with micropayments enabling real-time machine-to-machine transactions. Connect IoT devices, AI agents, and data brokers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow" onClick={() => onNavigate("impact")}>
              Explore Real-World Impact
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10" onClick={() => onNavigate("research")}>
              View Research
            </Button>
          </div>
        </div>
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
            <Card key={participant.type} className="card-hover bg-card/50 backdrop-blur-sm border-border/50">
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
      </section>

      {/* Key Features */}
      <section className="container mx-auto px-4 py-20 border-t border-border/50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built on Academic Research</h2>
          <p className="text-muted-foreground text-lg">Over {researchStats.totalStudies}+ peer-reviewed studies inform our approach</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Zap, title: "Feeless Micropayments", description: "DAG-based distributed ledger technology enables economically viable micropayments down to fractions of a cent." },
            { icon: Shield, title: "Privacy-Preserving", description: "Secure Multi-Party Computation, Differential Privacy, and Zero-Knowledge Proofs enable data trading without revealing sensitive information." },
            { icon: Server, title: "Smart Contract Automation", description: "Self-executing smart contracts enable autonomous transactions at machine speed, eliminating intermediaries." },
            { icon: Activity, title: "Game-Theoretic Design", description: "Auction mechanisms and Nash equilibrium analysis ensure fair pricing, efficient resource allocation, and market stability." },
          ].map((feature, idx) => (
            <Card key={idx} className="card-hover bg-card/50 backdrop-blur-sm border-border/50 group cursor-pointer" onClick={() => onNavigate("research")}>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <span className="text-primary text-sm font-medium group-hover:underline">Learn more</span>
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
            Whether you're an IoT device manufacturer, data broker, or AI developer—there's a place for you.
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
            How autonomous M2M data markets are transforming industries and enabling humanitarian missions
          </p>
        </div>

        {/* Industry Applications */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Applications by Industry</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryApplications.map((app, idx) => (
              <Card key={idx} className="card-hover bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <app.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <Badge variant="outline" className="text-xs mb-1">{app.industry}</Badge>
                      <CardTitle className="text-lg">{app.useCase}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{app.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Humanitarian Cases */}
        <div>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Heart className="w-6 h-6 text-primary" />
            Humanitarian Impact
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {humanitarianCases.map((hcase, idx) => (
              <Card key={idx} className="card-hover bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <hcase.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{hcase.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{hcase.description}</p>
                  <Badge className="bg-primary/20 text-primary border-primary/30">{hcase.impact}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

// Research Section
function ResearchSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Academic <span className="text-primary">Research</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Built on {researchStats.totalStudies}+ peer-reviewed studies across {researchStats.thematicAreas} research themes
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <Card className="text-center bg-card/50 border-primary/20">
          <CardContent className="p-6">
            <p className="text-4xl font-bold text-primary mb-1">{researchStats.totalStudies}+</p>
            <p className="text-sm text-muted-foreground">Peer-Reviewed Studies</p>
          </CardContent>
        </Card>
        <Card className="text-center bg-card/50 border-primary/20">
          <CardContent className="p-6">
            <p className="text-4xl font-bold text-primary mb-1">{researchStats.thematicAreas}</p>
            <p className="text-sm text-muted-foreground">Research Themes</p>
          </CardContent>
        </Card>
        <Card className="text-center bg-card/50 border-primary/20">
          <CardContent className="p-6">
            <p className="text-4xl font-bold text-primary mb-1">{(researchStats.totalCitations / 1000).toFixed(0)}K+</p>
            <p className="text-sm text-muted-foreground">Total Citations</p>
          </CardContent>
        </Card>
      </div>

      {/* Research Themes */}
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-primary" />
        Research Themes
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {researchThemes.map((theme) => (
          <Card key={theme.id} className="card-hover bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">{theme.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">{theme.description}</p>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">{theme.citationCount.toLocaleString()} citations</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

// Partners Section
function PartnersSection() {
  const partnerTypes = [
    { type: "IoT Device Providers", icon: Database, description: "Sensors, meters, and connected devices that want to monetize data streams" },
    { type: "Value-Added Brokers", icon: Cpu, description: "Organizations that aggregate, clean, and enrich data into actionable insights" },
    { type: "AI Agent Developers", icon: Bot, description: "Teams building autonomous systems that need high-quality data at scale" },
    { type: "Research Institutions", icon: GraduationCap, description: "Academic partners contributing to the advancement of M2M technology" },
    { type: "Enterprise Partners", icon: Briefcase, description: "Large organizations looking to integrate with the machine economy" },
  ]

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Become a <span className="text-primary">Partner</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Join the ecosystem powering the machine economy
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {partnerTypes.map((partner, idx) => (
          <Card key={idx} className="card-hover bg-card/50 backdrop-blur-sm border-border/50 group">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <partner.icon className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg">{partner.type}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">{partner.description}</p>
              <Button variant="outline" size="sm" className="border-primary/50 hover:bg-primary/10">
                Apply Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-primary/20">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Join?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Get early access to the Nodenomics platform and help shape the future of autonomous machine transactions.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 glow">
            Request Early Access
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}

// FAQ Section
function FAQSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Frequently Asked <span className="text-primary">Questions</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Everything you need to know about Nodenomics
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        {faqCategories.map((category, idx) => (
          <div key={idx}>
            <h2 className="text-xl font-semibold mb-4 text-primary">{category.category}</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {category.questions.map((faq, faqIdx) => (
                <AccordionItem key={faqIdx} value={`${idx}-${faqIdx}`} className="border border-border/50 rounded-lg bg-card/50 px-4">
                  <AccordionTrigger className="text-left hover:no-underline hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  )
}
