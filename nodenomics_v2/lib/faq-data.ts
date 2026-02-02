import { FAQCategory } from "./types"

export const faqCategories: FAQCategory[] = [
  {
    category: "General",
    questions: [
      {
        question: "What is Nodenomics?",
        answer:
          "Nodenomics is a decentralized data marketplace enabling autonomous machine-to-machine (M2M) transactions. It provides the infrastructure for IoT devices, value-added brokers, and AI agents to buy, sell, and trade data and compute resources in real-time using micropayments.",
      },
      {
        question: "What is the machine economy?",
        answer:
          "The machine economy is an emerging economic paradigm where autonomous agents engage in economic transactions, trading data and computational resources with minimal human intervention.",
        researchSource: "M2M Research Document Introduction",
      },
      {
        question: "Who are the three participants in Nodenomics?",
        answer:
          "Nodenomics has three participant types: (1) IoT Devices that sell raw data and buy compute resources, (2) Value-Added Brokers that buy raw data, refine it, and sell refined data products, and (3) AI Agents that buy refined data and sell compute resources.",
      },
    ],
  },
  {
    category: "Technology",
    questions: [
      {
        question: "What blockchain technology does Nodenomics use?",
        answer:
          "Nodenomics uses a hybrid approach: DAG-based ledgers for micropayments due to feeless transactions and high scalability, combined with blockchain for high-value transactions and smart contract execution.",
        researchSource: "Section 2.3: DAG advantages for M2M micropayments",
      },
      {
        question: "How fast are transactions?",
        answer:
          "Average transaction latency is under 100ms from data request to delivery. DAG-based systems achieve this through parallel transaction processing.",
        researchSource: "Platform Metrics",
      },
      {
        question: "What privacy-preserving techniques are used?",
        answer:
          "Nodenomics employs Secure Multi-Party Computation (SMPC), Differential Privacy, Zero-Knowledge Proofs, Federated Learning, and Homomorphic encryption.",
        researchSource: "Section 2.9: Privacy-Preserving Data Exchange",
      },
    ],
  },
  {
    category: "Pricing",
    questions: [
      {
        question: "How is pricing determined?",
        answer:
          "Pricing is market-driven through auction mechanisms. Sellers set minimum prices, buyers set maximum prices, and smart contracts match compatible trades. Dynamic pricing adapts to data freshness, quality, and market supply/demand.",
        researchSource:
          "Section 2.8: Data Pricing; Section 2.11: Game Theory",
      },
      {
        question: "What are the transaction fees?",
        answer:
          "Transaction fees vary: Micropayments under $1: 2% fee; Transactions $1-$100: 1.5% fee; Transactions over $100: 1% fee. IoT devices in humanitarian applications receive 50% fee reduction.",
      },
      {
        question: "What are the minimum transaction sizes?",
        answer:
          "No minimum transaction size. DAG-based architecture enables economically viable micropayments down to fractions of a cent.",
      },
    ],
  },
  {
    category: "Getting Started",
    questions: [
      {
        question: "How do I join as an IoT device owner?",
        answer:
          "Visit our Partners section and select IoT Device Provider to request early access. You'll receive integration documentation, API keys, and SDKs for your platform.",
      },
      {
        question: "How do I become a Value-Added Broker?",
        answer:
          "Apply through our Partners section under Value-Added Broker. We'll review your data science capabilities, privacy compliance, and domain expertise.",
      },
      {
        question: "Is there a test environment?",
        answer:
          "Yes. Nodenomics provides a full-featured testnet with mock data sources, simulated IoT devices, and test tokens for risk-free development and testing.",
      },
    ],
  },
]
