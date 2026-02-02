import { CloudProvider, ComputeConfig } from "./types"

export const cloudProviders: CloudProvider[] = [
  {
    name: "AWS EC2",
    pricePerHour: 0.0416, // t3.medium (2025 approx)
    color: "#FF9900",
  },
  {
    name: "Azure VM",
    pricePerHour: 0.0496, // B2s (2025 approx)
    color: "#0078D4",
  },
  {
    name: "Google Cloud",
    pricePerHour: 0.0404, // e2-medium (2025 avg)
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

// Helper to interpolate modifier values
function getInterpolatedModifier(
  value: number,
  modifiers: Record<number, number>
): number {
  const points = Object.keys(modifiers)
    .map(Number)
    .sort((a, b) => a - b)

  // If value is less than min, interpolate from 0 (assuming linear from 0 to min)
  if (value <= points[0]) {
    return (value / points[0]) * modifiers[points[0]]
  }

  // If value is greater than max, extrapolate linearly from last two points
  if (value >= points[points.length - 1]) {
    const last = points[points.length - 1]
    const secondLast = points[points.length - 2]
    const slope =
      (modifiers[last] - modifiers[secondLast]) / (last - secondLast)
    return modifiers[last] + slope * (value - last)
  }

  // Find range [lower, upper] that contains value
  for (let i = 0; i < points.length - 1; i++) {
    const p1 = points[i]
    const p2 = points[i + 1]
    if (value >= p1 && value <= p2) {
      // Linear interpolation
      const fraction = (value - p1) / (p2 - p1)
      const m1 = modifiers[p1]
      const m2 = modifiers[p2]
      return m1 + fraction * (m2 - m1)
    }
  }

  return 1 // Fallback
}

export function calculatePrice(
  provider: CloudProvider,
  config: ComputeConfig
): number {
  const vcpuMod = getInterpolatedModifier(config.vcpus, priceModifiers.vcpu)
  const memMod = getInterpolatedModifier(config.memory, priceModifiers.memory)
  const storageMod = getInterpolatedModifier(
    config.storage,
    priceModifiers.storage
  )

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
