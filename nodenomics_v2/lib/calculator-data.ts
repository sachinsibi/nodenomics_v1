import { CloudProvider, ComputeConfig } from "./types"

export const cloudProviders: CloudProvider[] = [
  {
    name: "AWS EC2",
    pricePerHour: 0.0464, // t3.medium
    color: "#FF9900",
  },
  {
    name: "Azure VM",
    pricePerHour: 0.0496, // B2s
    color: "#0078D4",
  },
  {
    name: "Google Cloud",
    pricePerHour: 0.0475, // e2-medium
    color: "#4285F4",
  },
  {
    name: "Nodenomics",
    pricePerHour: 0.012, // Decentralized compute
    color: "#14B8A6",
  },
]

export const defaultConfig: ComputeConfig = {
  vcpus: 2,
  memory: 4,
  storage: 100,
  hours: 720, // 1 month
}

// Price modifiers based on specs
export const priceModifiers = {
  vcpu: {
    1: 0.5,
    2: 1,
    4: 2,
    8: 4,
    16: 7.5,
    32: 14,
  },
  memory: {
    2: 0.6,
    4: 1,
    8: 1.8,
    16: 3.2,
    32: 6,
    64: 11,
  },
  storage: {
    50: 0.9,
    100: 1,
    250: 1.15,
    500: 1.3,
    1000: 1.5,
    2000: 1.8,
  },
}

export function calculatePrice(
  provider: CloudProvider,
  config: ComputeConfig
): number {
  const vcpuMod =
    priceModifiers.vcpu[config.vcpus as keyof typeof priceModifiers.vcpu] || 1
  const memMod =
    priceModifiers.memory[config.memory as keyof typeof priceModifiers.memory] ||
    1
  const storageMod =
    priceModifiers.storage[
      config.storage as keyof typeof priceModifiers.storage
    ] || 1

  const hourlyRate = provider.pricePerHour * vcpuMod * memMod * storageMod

  // Nodenomics has additional savings from decentralization
  const decentralizedDiscount = provider.name === "Nodenomics" ? 0.75 : 1

  return hourlyRate * config.hours * decentralizedDiscount
}

export function calculateSavings(
  nodenomicsPrice: number,
  otherPrices: number[]
): { amount: number; percentage: number } {
  const avgOtherPrice =
    otherPrices.reduce((a, b) => a + b, 0) / otherPrices.length
  const amount = avgOtherPrice - nodenomicsPrice
  const percentage = (amount / avgOtherPrice) * 100
  return { amount, percentage }
}
