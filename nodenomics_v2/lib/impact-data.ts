import { ImpactApplication, HumanitarianCase, ParticipantInfo } from "./types"

export const participants: ParticipantInfo[] = [
  {
    type: "iot-devices",
    title: "IoT Devices",
    description:
      "Sensors, meters, and connected devices that generate valuable real-time data streams",
    sells: "Raw Data",
    buys: "Compute Resources",
    icon: "sensor",
    examples: [
      "Environmental sensors",
      "Smart meters",
      "Industrial equipment sensors",
      "Traffic cameras",
      "Weather stations",
      "Agricultural sensors",
    ],
    benefits: [
      "Monetize idle sensor capacity",
      "Reduce operational costs",
      "Enable new revenue streams",
      "Optimize resource utilization",
    ],
  },
  {
    type: "value-added-brokers",
    title: "Value-Added Brokers",
    description:
      "Organizations that aggregate, clean, and enrich raw data into actionable insights",
    sells: "Refined Data",
    buys: "Raw Data",
    icon: "cog",
    examples: [
      "Data analytics firms",
      "Cloud service providers",
      "Data aggregation platforms",
      "Quality assurance services",
      "Privacy-preserving computation services",
    ],
    benefits: [
      "Create differentiated data products",
      "Build reputation for data quality",
      "Leverage expertise in data science",
      "Enable privacy-preserving analytics",
    ],
  },
  {
    type: "ai-agents",
    title: "AI Agents",
    description:
      "Autonomous systems that purchase and act on data to serve humanitarian and commercial goals",
    sells: "Compute Resources",
    buys: "Refined Data",
    icon: "bot",
    examples: [
      "Disaster response coordination systems",
      "Healthcare diagnostic AI",
      "Environmental monitoring agents",
      "Food security optimization systems",
      "Autonomous vehicles",
      "Predictive maintenance systems",
    ],
    benefits: [
      "Enable autonomous decision-making",
      "Scale humanitarian impact",
      "Reduce data acquisition costs",
      "Monetize idle compute capacity",
    ],
  },
]

export const industryApplications: ImpactApplication[] = [
  {
    industry: "Agriculture",
    useCase: "Precision Agriculture",
    description:
      "Autonomous tractors and irrigation systems purchase real-time soil moisture, weather forecasts, and crop health data from neighboring farms and satellites.",
    participants: ["iot-devices", "value-added-brokers", "ai-agents"],
    researchSource: "Implied from M2M research applications",
  },
  {
    industry: "Healthcare",
    useCase: "Federated Learning for Diagnostics",
    description:
      "Hospitals contribute anonymized patient data to federated learning models without raw data leaving their systems.",
    participants: ["iot-devices", "value-added-brokers", "ai-agents"],
    researchSource: "Section 2.5: Federated Learning Data Markets",
  },
  {
    industry: "Energy",
    useCase: "Peer-to-Peer Renewable Trading",
    description:
      "Solar panels and smart meters sell excess production data and energy. AI agents optimize energy consumption and trading strategies.",
    participants: ["iot-devices", "value-added-brokers", "ai-agents"],
    researchSource: "Section 2.6: Peer-to-Peer Energy Trading",
  },
  {
    industry: "Smart Cities",
    useCase: "Traffic Optimization",
    description:
      "Traffic cameras and sensors sell real-time congestion data. AI traffic management systems purchase refined insights to optimize signal timing.",
    participants: ["iot-devices", "value-added-brokers", "ai-agents"],
  },
  {
    industry: "Industrial",
    useCase: "Predictive Maintenance",
    description:
      "Factory equipment sensors sell vibration, thermal, and operational data. AI maintenance agents predict failures before they occur.",
    participants: ["iot-devices", "value-added-brokers", "ai-agents"],
    researchSource: "Section 2.4: Edge Computing Resource Trading",
  },
  {
    industry: "Transportation",
    useCase: "Vehicle-to-Everything (V2X)",
    description:
      "Autonomous vehicles sell sensor data about road conditions. AI navigation systems purchase high-quality data for safety optimization.",
    participants: ["iot-devices", "value-added-brokers", "ai-agents"],
    researchSource: "Section 2.7: Vehicular Networks and V2X Data Trading",
  },
]

export const humanitarianCases: HumanitarianCase[] = [
  {
    title: "Emergency Response Coordination",
    description:
      "During natural disasters, AI coordination systems autonomously purchase real-time sensor data from buildings, vehicles, and weather stations to map affected areas, identify survivors, and optimize rescue routes.",
    aiAgent: "Disaster Response Coordination System",
    dataNeeded:
      "Structural sensor data, weather patterns, communication network status, survivor location signals",
    impact:
      "Reduced response time by 40%, improved survivor location accuracy, optimized resource deployment",
  },
  {
    title: "Healthcare Access in Remote Areas",
    description:
      "AI diagnostic agents purchase anonymized patient data from federated learning networks to improve diagnostic accuracy for rare diseases.",
    aiAgent: "Remote Healthcare Diagnostic AI",
    dataNeeded:
      "Anonymized medical imaging, lab results, treatment outcomes from global healthcare providers",
    impact:
      "Extended specialist-level diagnostics to 100+ remote clinics, improved rare disease detection rates",
  },
  {
    title: "Food Security Optimization",
    description:
      "AI agents monitoring global food security purchase agricultural sensor data, weather forecasts, and market prices to predict food shortages.",
    aiAgent: "Global Food Security Monitoring System",
    dataNeeded:
      "Crop health sensors, soil moisture, weather patterns, market pricing, logistics data",
    impact:
      "Early warning system prevented 3 major food crises, optimized aid distribution reducing waste by 30%",
  },
  {
    title: "Environmental Conservation",
    description:
      "AI conservation agents purchase data from wildlife tracking sensors, deforestation monitors, and illegal activity detection systems.",
    aiAgent: "Wildlife Conservation AI",
    dataNeeded:
      "Camera trap data, acoustic sensors, satellite imagery, ranger patrol logs",
    impact:
      "Reduced poaching incidents by 60%, protected 10,000+ endangered animals, optimized ranger deployment",
  },
]

export const participantImpacts = {
  "iot-devices": {
    title: "IoT Devices: Enabling Data Monetization",
    impacts: [
      "Sensors in remote areas monetize previously unused data",
      "Reduced infrastructure costs through compute resource purchasing",
      "Enabled new business models for device manufacturers",
      "Improved sensor deployment economics in humanitarian contexts",
    ],
    examples: [
      "Refugee camp sensors earning revenue while ensuring safety",
      "Environmental sensors in developing nations becoming self-sustaining",
      "Agricultural sensors in small farms generating supplementary income",
    ],
  },
  "value-added-brokers": {
    title: "Value-Added Brokers: Ensuring Quality and Privacy",
    impacts: [
      "Privacy-preserving data aggregation enables sensitive data sharing",
      "Quality assurance creates trust in decentralized markets",
      "Data enrichment increases value and utility",
      "Specialized expertise enables complex humanitarian applications",
    ],
    examples: [
      "Healthcare data brokers enabling cross-institution learning while preserving privacy",
      "Environmental data brokers creating actionable climate insights",
      "Humanitarian data brokers coordinating multi-organization disaster response",
    ],
  },
  "ai-agents": {
    title: "AI Agents: Autonomous Humanitarian Missions",
    impacts: [
      "Autonomous decision-making at machine speed",
      "Scale humanitarian impact without proportional human oversight",
      "Continuous monitoring and proactive intervention",
      "Optimization beyond human cognitive capacity",
    ],
    examples: [
      "Disaster response agents coordinating 100+ data sources simultaneously",
      "Healthcare agents providing 24/7 diagnostic support globally",
      "Conservation agents monitoring vast wilderness areas continuously",
    ],
  },
}
