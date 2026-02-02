# Project Instructions

> This file tells Claude Code how to work with your project.

## Project Overview

**Business:** Nodenomics
**Type:** Landing Page
**Tagline:** "A Real-Time Economy for Connected Devices"
**Industry:** IoT (Internet of Things)
**SDG Alignment:** SDG 9 (Industry, Innovation & Infrastructure) | SDG 11 (Sustainable Cities & Communities)

### The Challenge

**How might we enable machines to make payments autonomously so that they can exchange services?**

### The Solution

Nodenomics creates a **"data on demand" market** where machines can buy and sell data automatically, in real time, using tiny pay-per-use payments.

Today, even when a device urgently needs specific information (sensor readings, traffic conditions, weather updates, equipment status), acquiring that data requires pre-set integrations, contracts, subscriptions, and manual billing. This friction makes data sharing slow and expensive—machines operate with incomplete information or rely on estimates instead of fresh, real-world readings.

**Our platform enables:**
- Instant data requests and delivery between machines
- Pay-per-use micropayments for data transactions
- Rewards for data providers sharing high-quality information
- Faster, safer, and more cost-effective operations

## Build Commands

```bash
npm install     # Install dependencies
npm run dev     # Start development server
npm run build   # Build for production
```

## Tech Stack

- Framework: Next.js / React
- Styling: Tailwind CSS
- Language: TypeScript

## Design Requirements

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Obsidian Black | `#0A0A0A` | Primary backgrounds |
| Deep Black | `#121212` | Cards, containers |
| Teal Primary | `#14B8A6` | Primary buttons, key highlights |
| Teal Light | `#2DD4BF` | Hover states, accents |
| Teal Dark | `#0D9488` | Active states, borders |
| Teal Glow | `#5EEAD4` | Glowing effects, emphasis |
| Slate Gray | `#64748B` | Secondary text |
| Cool Gray | `#94A3B8` | Muted elements |
| Pure White | `#FFFFFF` | Headlines, primary text |
| Off White | `#F1F5F9` | Body text |

### Style Guidelines

- **Serious and professional** design aesthetic
- Clean, modern typography (Inter, Roboto Mono for data)
- Generous whitespace for clarity
- Card corners: 8px (subtle, professional)
- Subtle hover transitions (0.3s ease)
- Dark mode by default
- Grid patterns or node/network motifs in backgrounds
- Subtle teal glow effects on interactive elements

## Page Sections to Build

### 1. Hero Section
- Large headline: "The Machine Economy Starts Here"
- Subheadline: "Enable devices to autonomously buy, sell, and exchange data in real time. No contracts. No subscriptions. Just instant micropayments."
- CTA button: "Explore the Platform"
- Secondary CTA: "Read the Whitepaper"
- Background: Abstract network/node visualization with teal accents

### 2. Problem Statement Section
Title: "The Data Bottleneck"

| Challenge | Impact |
|-----------|--------|
| Fragmented Integrations | Devices can't access data from other systems without complex setup |
| Manual Billing Overhead | Subscription models don't fit real-time, variable data needs |
| Slow Data Access | Critical decisions delayed waiting for information |
| Wasted Data Assets | Valuable sensor data sits unused without monetization pathways |

### 3. Solution Section
Title: "Data On Demand"

| Feature | Description |
|---------|-------------|
| Instant Data Marketplace | Machines request, receive, and pay for data in milliseconds |
| Micropayment Infrastructure | Pay only for what you use—fractions of a cent per transaction |
| Autonomous Transactions | No human intervention required for routine data exchanges |
| Quality Incentives | Data providers earn rewards for accuracy and reliability |

### 4. Applications Section
Title: "Powering the Future"

| Application | Description |
|-------------|-------------|
| Precision Agriculture | Sensors trade soil moisture, weather, and crop health data to optimize irrigation and yields |
| Automated Healthcare Supply Chains | Medical devices share inventory levels to enable just-in-time restocking |
| P2P Solar Energy Trading | Smart meters autonomously buy and sell excess renewable energy |
| Coordinated Disaster Response | Emergency sensors share real-time conditions for faster, smarter relief |
| Smart City Infrastructure | Traffic systems, utilities, and transit exchange data for optimized urban flow |
| Industrial Predictive Maintenance | Machines share operational data to predict failures before they occur |

### 5. How It Works Section
Title: "Seamless Machine Commerce"

| Step | Action |
|------|--------|
| 1. Register Device | Connect your device to the Nodenomics network |
| 2. Define Data Assets | Specify what data your device can provide or needs |
| 3. Set Pricing Rules | Configure micropayment thresholds and preferences |
| 4. Autonomous Exchange | Devices transact automatically based on your rules |
| 5. Earn & Optimize | Track earnings, analyze usage, refine strategies |

### 6. Partners Section
Title: "Strategic Partners"

| Partner Category | Examples |
|------------------|----------|
| IoT Platforms | AWS IoT, Azure IoT Hub, Google Cloud IoT |
| Blockchain Infrastructure | Ethereum, Polygon, Solana |
| Telecom Providers | Vodafone, AT&T, Deutsche Telekom |
| Smart City Initiatives | Singapore Smart Nation, Barcelona Smart City |
| Agricultural Tech | John Deere, Climate Corporation |
| Energy Providers | Enel X, Siemens Energy |

### 7. Metrics Section
Title: "Built for Scale"

| Metric | Value |
|--------|-------|
| Transaction Latency | < 100ms |
| Supported Devices | 10M+ |
| Data Types | 500+ |
| Uptime | 99.99% |

### 8. Contact / Waitlist Section
Title: "Join the Machine Economy"

Fields: Organization Name, Email, Industry Vertical, Use Case Description (textarea)

Placeholder text: "Describe how your devices could benefit from autonomous data exchange..."

CTA Button: "Request Early Access"

### 9. Footer
- Nodenomics logo with network node icon
- Quick links: Platform, Solutions, Partners, Documentation, Contact
- Legal links: Privacy Policy, Terms of Service
- Social: LinkedIn, Twitter/X, GitHub
- Copyright: "© 2026 Nodenomics. Enabling the autonomous machine economy."

## Code Style

- Use functional React components with TypeScript
- Use Tailwind CSS for styling
- Keep components modular and reusable
- Implement subtle, professional micro-interactions
- Ensure accessibility (WCAG 2.1 AA)
- Mobile-first responsive design

## Workflow

1. Read this file to understand the requirements
2. Set up the project structure
3. Build each section sequentially
4. Implement dark theme with teal accents
5. Add professional animations and transitions
6. Run locally to verify the design
7. Optimize for performance and accessibility

---

## Additional Notes

- Emphasize **trust and security** in messaging
- Use data visualization motifs (graphs, nodes, connections)
- Include subtle particle/network animations in hero
- Ensure all CTAs are prominent and accessible
- Consider adding a "Live Transaction Feed" demo component
