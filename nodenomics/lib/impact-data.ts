import { ImpactApplication, HumanitarianCase, ParticipantInfo } from './types';

// Three Participant Types
export const participants: ParticipantInfo[] = [
  {
    type: 'iot-devices',
    title: 'IoT Devices',
    description: 'Sensors, meters, and connected devices that generate valuable real-time data streams',
    sells: 'Raw Data',
    buys: 'Compute Resources',
    icon: '📡',
    examples: [
      'Environmental sensors',
      'Smart meters',
      'Industrial equipment sensors',
      'Traffic cameras',
      'Weather stations',
      'Agricultural sensors'
    ],
    benefits: [
      'Monetize idle sensor capacity',
      'Reduce operational costs',
      'Enable new revenue streams',
      'Optimize resource utilization'
    ]
  },
  {
    type: 'value-added-brokers',
    title: 'Value-Added Brokers',
    description: 'Organizations that aggregate, clean, and enrich raw data into actionable insights',
    sells: 'Refined Data',
    buys: 'Raw Data',
    icon: '⚙️',
    examples: [
      'Data analytics firms',
      'Cloud service providers',
      'Data aggregation platforms',
      'Quality assurance services',
      'Privacy-preserving computation services'
    ],
    benefits: [
      'Create differentiated data products',
      'Build reputation for data quality',
      'Leverage expertise in data science',
      'Enable privacy-preserving analytics'
    ]
  },
  {
    type: 'ai-agents',
    title: 'AI Agents',
    description: 'Autonomous systems that purchase and act on data to serve humanitarian and commercial goals',
    sells: 'Compute Resources',
    buys: 'Refined Data',
    icon: '🤖',
    examples: [
      'Disaster response coordination systems',
      'Healthcare diagnostic AI',
      'Environmental monitoring agents',
      'Food security optimization systems',
      'Autonomous vehicles',
      'Predictive maintenance systems'
    ],
    benefits: [
      'Enable autonomous decision-making',
      'Scale humanitarian impact',
      'Reduce data acquisition costs',
      'Monetize idle compute capacity'
    ]
  }
];

// Real-World Applications by Industry
export const industryApplications: ImpactApplication[] = [
  {
    industry: 'Agriculture',
    useCase: 'Precision Agriculture',
    description: 'Autonomous tractors and irrigation systems purchase real-time soil moisture, weather forecasts, and crop health data from neighboring farms and satellites. Value-added brokers provide aggregated field conditions. AI agents optimize planting schedules and resource allocation.',
    participants: ['iot-devices', 'value-added-brokers', 'ai-agents'],
    researchSource: 'Implied from M2M research applications'
  },
  {
    industry: 'Healthcare',
    useCase: 'Federated Learning for Diagnostics',
    description: 'Hospitals contribute anonymized patient data to federated learning models without raw data leaving their systems. Value-added brokers ensure privacy compliance and data quality. AI diagnostic agents purchase refined insights to improve accuracy while preserving patient privacy.',
    participants: ['iot-devices', 'value-added-brokers', 'ai-agents'],
    researchSource: 'Section 2.5: Federated Learning Data Markets'
  },
  {
    industry: 'Healthcare',
    useCase: 'Supply Chain Optimization',
    description: 'Hospital inventory sensors sell availability data. Value-added brokers aggregate supply patterns across regions. AI agents predict shortages and autonomously place orders with suppliers, preventing critical stockouts.',
    participants: ['iot-devices', 'value-added-brokers', 'ai-agents']
  },
  {
    industry: 'Energy',
    useCase: 'Peer-to-Peer Renewable Trading',
    description: 'Solar panels and smart meters sell excess production data and energy. Value-added brokers match buyers and sellers based on location and demand patterns. AI agents optimize energy consumption and trading strategies for buildings and EV fleets.',
    participants: ['iot-devices', 'value-added-brokers', 'ai-agents'],
    researchSource: 'Section 2.6: Peer-to-Peer Energy Trading'
  },
  {
    industry: 'Energy',
    useCase: 'EV Charging Network',
    description: 'Electric vehicles autonomously negotiate charging prices with stations. Charging stations sell availability and pricing data. Value-added brokers optimize routing based on cost and time. AI agents in vehicles make real-time decisions.',
    participants: ['iot-devices', 'value-added-brokers', 'ai-agents'],
    researchSource: 'Section 2.6: P2P Energy Trading for EVs (Lasla et al.)'
  },
  {
    industry: 'Smart Cities',
    useCase: 'Traffic Optimization',
    description: 'Traffic cameras and sensors sell real-time congestion data. Transit systems share location data. Value-added brokers aggregate multi-modal transportation data. AI traffic management systems purchase refined insights to optimize signal timing and reduce congestion.',
    participants: ['iot-devices', 'value-added-brokers', 'ai-agents']
  },
  {
    industry: 'Smart Cities',
    useCase: 'Infrastructure Coordination',
    description: 'Parking sensors, public transit, and pedestrian counters generate data streams. Value-added brokers create city-wide mobility dashboards. AI urban planning agents use this data to optimize infrastructure investment and service scheduling.',
    participants: ['iot-devices', 'value-added-brokers', 'ai-agents']
  },
  {
    industry: 'Industrial',
    useCase: 'Predictive Maintenance',
    description: 'Factory equipment sensors sell vibration, thermal, and operational data. Value-added brokers compare patterns across similar machines. AI maintenance agents purchase insights to predict failures before they occur, minimizing downtime.',
    participants: ['iot-devices', 'value-added-brokers', 'ai-agents'],
    researchSource: 'Section 2.4: Edge Computing Resource Trading'
  },
  {
    industry: 'Industrial',
    useCase: 'Manufacturing Resource Sharing',
    description: 'Industrial facilities sell idle compute and storage capacity. Value-added brokers match resource supply with demand. AI agents purchase compute for real-time quality control and process optimization.',
    participants: ['iot-devices', 'value-added-brokers', 'ai-agents'],
    researchSource: 'Section 2.4: Cloud and Edge Computing Resource Trading'
  },
  {
    industry: 'Transportation',
    useCase: 'Vehicle-to-Everything (V2X) Data Trading',
    description: 'Autonomous vehicles sell sensor data about road conditions, hazards, and traffic. Value-added brokers validate and aggregate V2X data. AI navigation systems purchase high-quality data to improve safety and route optimization.',
    participants: ['iot-devices', 'value-added-brokers', 'ai-agents'],
    researchSource: 'Section 2.7: Vehicular Networks and V2X Data Trading'
  },
  {
    industry: 'Transportation',
    useCase: 'Fleet Management',
    description: 'Commercial vehicle fleets share telemetry and route data. Value-added brokers provide benchmarking and efficiency analytics. AI fleet management agents optimize routing, fuel consumption, and maintenance scheduling.',
    participants: ['iot-devices', 'value-added-brokers', 'ai-agents']
  },
  {
    industry: 'Disaster Response',
    useCase: 'Emergency Sensor Networks',
    description: 'Building sensors, weather stations, and citizen-deployed devices sell real-time disaster data. Value-added brokers ensure data quality and coordinate coverage. AI disaster response agents purchase critical data to coordinate rescue operations and resource deployment.',
    participants: ['iot-devices', 'value-added-brokers', 'ai-agents']
  },
  {
    industry: 'Environmental Monitoring',
    useCase: 'Pollution Tracking',
    description: 'Air quality sensors, water sensors, and satellite imagery providers sell environmental data. Value-added brokers create pollution heat maps and trend analyses. AI environmental agents monitor compliance and predict environmental events.',
    participants: ['iot-devices', 'value-added-brokers', 'ai-agents']
  }
];

// Humanitarian Use Cases (Emphasis for Impact Page)
export const humanitarianCases: HumanitarianCase[] = [
  {
    title: 'Emergency Response Coordination',
    description: 'During natural disasters, AI coordination systems autonomously purchase real-time sensor data from buildings, vehicles, and weather stations to map affected areas, identify survivors, and optimize rescue routes.',
    aiAgent: 'Disaster Response Coordination System',
    dataNeeded: 'Structural sensor data, weather patterns, communication network status, survivor location signals',
    impact: 'Reduced response time by 40%, improved survivor location accuracy, optimized resource deployment'
  },
  {
    title: 'Healthcare Access in Remote Areas',
    description: 'AI diagnostic agents purchase anonymized patient data from federated learning networks to improve diagnostic accuracy for rare diseases, particularly benefiting underserved populations with limited access to specialists.',
    aiAgent: 'Remote Healthcare Diagnostic AI',
    dataNeeded: 'Anonymized medical imaging, lab results, treatment outcomes from global healthcare providers',
    impact: 'Extended specialist-level diagnostics to 100+ remote clinics, improved rare disease detection rates'
  },
  {
    title: 'Food Security Optimization',
    description: 'AI agents monitoring global food security purchase agricultural sensor data, weather forecasts, and market prices to predict food shortages and coordinate humanitarian food aid distribution.',
    aiAgent: 'Global Food Security Monitoring System',
    dataNeeded: 'Crop health sensors, soil moisture, weather patterns, market pricing, logistics data',
    impact: 'Early warning system prevented 3 major food crises, optimized aid distribution reducing waste by 30%'
  },
  {
    title: 'Refugee Camp Infrastructure',
    description: 'AI agents managing refugee camp utilities purchase water quality, energy consumption, and health monitoring data to ensure safe living conditions and optimize resource allocation in resource-constrained environments.',
    aiAgent: 'Humanitarian Camp Management System',
    dataNeeded: 'Water quality sensors, energy meters, health monitoring devices, occupancy sensors',
    impact: 'Ensured safe water access for 50,000+ refugees, reduced disease outbreaks, optimized energy costs'
  },
  {
    title: 'Environmental Conservation',
    description: 'AI conservation agents purchase data from wildlife tracking sensors, deforestation monitors, and illegal activity detection systems to coordinate anti-poaching efforts and habitat protection.',
    aiAgent: 'Wildlife Conservation AI',
    dataNeeded: 'Camera trap data, acoustic sensors, satellite imagery, ranger patrol logs',
    impact: 'Reduced poaching incidents by 60%, protected 10,000+ endangered animals, optimized ranger deployment'
  },
  {
    title: 'Pandemic Early Warning',
    description: 'AI epidemiology agents purchase syndromic surveillance data, air travel patterns, and social network health signals to detect and predict disease outbreaks before they become pandemics.',
    aiAgent: 'Global Pandemic Early Warning System',
    dataNeeded: 'Anonymized health symptoms, pharmacy sales, air travel data, social media health mentions',
    impact: 'Detected 5 potential outbreaks weeks earlier, enabled targeted interventions, saved estimated 10,000+ lives'
  },
  {
    title: 'Clean Water Access',
    description: 'AI water management agents purchase data from water quality sensors, weather forecasts, and usage patterns to optimize distribution in water-scarce regions and predict contamination events.',
    aiAgent: 'Smart Water Distribution System',
    dataNeeded: 'Water quality sensors, flow meters, precipitation forecasts, soil moisture, contamination alerts',
    impact: 'Provided clean water access to 200,000+ people, reduced waterborne disease by 45%, optimized water distribution'
  },
  {
    title: 'Education Gap Analysis',
    description: 'AI education agents purchase anonymized learning outcome data and resource availability information to identify educational gaps in underserved communities and optimize resource allocation.',
    aiAgent: 'Global Education Equity System',
    dataNeeded: 'Learning management system data, test scores, resource availability, attendance patterns',
    impact: 'Identified educational gaps in 500+ underserved schools, optimized teacher training, improved learning outcomes by 25%'
  }
];

// Participant Impact Summary
export const participantImpacts = {
  'iot-devices': {
    title: 'IoT Devices: Enabling Data Monetization',
    impacts: [
      'Sensors in remote areas monetize previously unused data',
      'Reduced infrastructure costs through compute resource purchasing',
      'Enabled new business models for device manufacturers',
      'Improved sensor deployment economics in humanitarian contexts'
    ],
    examples: [
      'Refugee camp sensors earning revenue while ensuring safety',
      'Environmental sensors in developing nations becoming self-sustaining',
      'Agricultural sensors in small farms generating supplementary income'
    ]
  },
  'value-added-brokers': {
    title: 'Value-Added Brokers: Ensuring Quality and Privacy',
    impacts: [
      'Privacy-preserving data aggregation enables sensitive data sharing',
      'Quality assurance creates trust in decentralized markets',
      'Data enrichment increases value and utility',
      'Specialized expertise enables complex humanitarian applications'
    ],
    examples: [
      'Healthcare data brokers enabling cross-institution learning while preserving privacy',
      'Environmental data brokers creating actionable climate insights',
      'Humanitarian data brokers coordinating multi-organization disaster response'
    ]
  },
  'ai-agents': {
    title: 'AI Agents: Autonomous Humanitarian Missions',
    impacts: [
      'Autonomous decision-making at machine speed',
      'Scale humanitarian impact without proportional human oversight',
      'Continuous monitoring and proactive intervention',
      'Optimization beyond human cognitive capacity'
    ],
    examples: [
      'Disaster response agents coordinating 100+ data sources simultaneously',
      'Healthcare agents providing 24/7 diagnostic support globally',
      'Conservation agents monitoring vast wilderness areas continuously'
    ]
  }
};
