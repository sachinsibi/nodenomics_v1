import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Footer from '@/components/layout/Footer';
import { participants } from '@/lib/impact-data';

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#14B8A620] to-transparent"></div>
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Join the <span className="text-[#14B8A6]">Ecosystem</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#E5E5E5]">
            Partnership opportunities for IoT devices, value-added brokers, AI agents, and strategic collaborators
          </p>
        </div>
      </section>

      {/* Partnership by Participant Type */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Partnership Opportunities</h2>
            <p className="text-xl text-[#737373]">Tailored for each participant type</p>
          </div>

          <div className="space-y-12">
            {/* IoT Device Manufacturers */}
            <Card variant="bordered">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">📡</div>
                <div>
                  <h3 className="text-3xl font-bold text-white">For IoT Device Manufacturers</h3>
                  <p className="text-[#737373]">Turn your sensors into revenue generators</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-[#14B8A6] mb-3">Opportunities:</h4>
                  <ul className="space-y-2">
                    <li className="text-[#E5E5E5] flex items-start">
                      <span className="text-[#14B8A6] mr-2">•</span>
                      Device integration with Nodenomics marketplace
                    </li>
                    <li className="text-[#E5E5E5] flex items-start">
                      <span className="text-[#14B8A6] mr-2">•</span>
                      Monetize idle sensor capacity
                    </li>
                    <li className="text-[#E5E5E5] flex items-start">
                      <span className="text-[#14B8A6] mr-2">•</span>
                      Access compute resources on demand
                    </li>
                    <li className="text-[#E5E5E5] flex items-start">
                      <span className="text-[#14B8A6] mr-2">•</span>
                      SDK and API support for seamless integration
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#14B8A6] mb-3">Partner Examples:</h4>
                  <ul className="space-y-2">
                    {participants[0].examples.slice(0, 4).map((example, idx) => (
                      <li key={idx} className="text-[#E5E5E5] flex items-start">
                        <span className="text-[#14B8A6] mr-2">→</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#14B8A610] border border-[#14B8A6] rounded-lg">
                <p className="text-white font-semibold">Benefits: Reduce operational costs, create new revenue streams, optimize resource utilization</p>
              </div>
            </Card>

            {/* Value-Added Brokers */}
            <Card variant="bordered">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">⚙️</div>
                <div>
                  <h3 className="text-3xl font-bold text-white">For Value-Added Brokers</h3>
                  <p className="text-[#737373]">Build differentiated data products</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-[#14B8A6] mb-3">Opportunities:</h4>
                  <ul className="space-y-2">
                    <li className="text-[#E5E5E5] flex items-start">
                      <span className="text-[#14B8A6] mr-2">•</span>
                      Data aggregation and enrichment services
                    </li>
                    <li className="text-[#E5E5E5] flex items-start">
                      <span className="text-[#14B8A6] mr-2">•</span>
                      Privacy-preserving data transformation
                    </li>
                    <li className="text-[#E5E5E5] flex items-start">
                      <span className="text-[#14B8A6] mr-2">•</span>
                      Quality assurance and validation
                    </li>
                    <li className="text-[#E5E5E5] flex items-start">
                      <span className="text-[#14B8A6] mr-2">•</span>
                      Domain-specific analytics platforms
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#14B8A6] mb-3">Partner Examples:</h4>
                  <ul className="space-y-2">
                    {participants[1].examples.slice(0, 4).map((example, idx) => (
                      <li key={idx} className="text-[#E5E5E5] flex items-start">
                        <span className="text-[#14B8A6] mr-2">→</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#14B8A610] border border-[#14B8A6] rounded-lg">
                <p className="text-white font-semibold">Benefits: New revenue streams, reputation-based pricing power, leverage data science expertise</p>
              </div>
            </Card>

            {/* AI Agent Developers */}
            <Card variant="bordered">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">🤖</div>
                <div>
                  <h3 className="text-3xl font-bold text-white">For AI Agent Developers</h3>
                  <p className="text-[#737373]">Enable autonomous missions at scale</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-[#14B8A6] mb-3">Opportunities:</h4>
                  <ul className="space-y-2">
                    <li className="text-[#E5E5E5] flex items-start">
                      <span className="text-[#14B8A6] mr-2">•</span>
                      Access high-quality refined data on demand
                    </li>
                    <li className="text-[#E5E5E5] flex items-start">
                      <span className="text-[#14B8A6] mr-2">•</span>
                      Sell idle compute resources
                    </li>
                    <li className="text-[#E5E5E5] flex items-start">
                      <span className="text-[#14B8A6] mr-2">•</span>
                      Humanitarian mission support programs
                    </li>
                    <li className="text-[#E5E5E5] flex items-start">
                      <span className="text-[#14B8A6] mr-2">•</span>
                      Agent SDKs and development tools
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#14B8A6] mb-3">Partner Examples:</h4>
                  <ul className="space-y-2">
                    {participants[2].examples.slice(0, 4).map((example, idx) => (
                      <li key={idx} className="text-[#E5E5E5] flex items-start">
                        <span className="text-[#14B8A6] mr-2">→</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#14B8A610] border border-[#14B8A6] rounded-lg">
                <p className="text-white font-semibold">Benefits: Autonomous decision-making, scale humanitarian impact, reduce data costs, monetize compute</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Partner Categories */}
      <section className="py-24 px-6 bg-[#121212]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Strategic Partner Categories</h2>
            <p className="text-xl text-[#737373]">Building the ecosystem together</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "IoT Platforms",
                description: "Device manufacturers and platform providers",
                examples: ["AWS IoT", "Azure IoT Hub", "Google Cloud IoT", "Arduino", "Particle"]
              },
              {
                category: "Blockchain Infrastructure",
                description: "Layer 1 and Layer 2 DLT platforms",
                examples: ["IOTA Foundation", "Ethereum", "Polygon", "Hedera Hashgraph"]
              },
              {
                category: "Telecom Providers",
                description: "Connectivity and edge computing partners",
                examples: ["Vodafone", "AT&T", "Deutsche Telekom", "Verizon"]
              },
              {
                category: "Cloud Providers",
                description: "Compute and storage infrastructure",
                examples: ["AWS", "Microsoft Azure", "Google Cloud", "IBM Cloud"]
              },
              {
                category: "Energy Providers",
                description: "Renewable energy and smart grid operators",
                examples: ["Enel X", "Siemens Energy", "Schneider Electric", "Tesla Energy"]
              },
              {
                category: "Academic Institutions",
                description: "Research partnerships and collaboration",
                examples: ["MIT", "Stanford", "ETH Zurich", "Cambridge", "CMU"]
              },
              {
                category: "Humanitarian Organizations",
                description: "NGOs and international agencies",
                examples: ["UN agencies", "Red Cross", "WHO", "World Food Programme"]
              },
              {
                category: "Data Analytics Firms",
                description: "Value-added broker ecosystem",
                examples: ["Palantir", "Databricks", "Snowflake", "Splunk"]
              },
              {
                category: "Smart City Initiatives",
                description: "Urban infrastructure partners",
                examples: ["Singapore Smart Nation", "Barcelona Smart City", "Dubai Smart City"]
              }
            ].map((partner, idx) => (
              <Card key={idx} hover>
                <Badge variant="teal" className="mb-3">{partner.category}</Badge>
                <p className="text-[#E5E5E5] mb-4">{partner.description}</p>
                <div>
                  <p className="text-sm text-[#14B8A6] font-semibold mb-2">Examples:</p>
                  <ul className="space-y-1">
                    {partner.examples.map((example, i) => (
                      <li key={i} className="text-sm text-[#737373]">• {example}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Contact Form */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-2xl">
          <Card variant="bordered">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-4">Become a Partner</h2>
              <p className="text-[#E5E5E5]">Join the Nodenomics ecosystem and help build the machine economy</p>
            </div>

            <form className="space-y-6">
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-[#E5E5E5] mb-2">
                  Organization Name
                </label>
                <input
                  type="text"
                  id="organization"
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#262626] rounded-lg text-white focus:border-[#14B8A6] focus:outline-none"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="partner-type" className="block text-sm font-medium text-[#E5E5E5] mb-2">
                  Partner Type
                </label>
                <select
                  id="partner-type"
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#262626] rounded-lg text-white focus:border-[#14B8A6] focus:outline-none"
                >
                  <option>IoT Device Provider</option>
                  <option>Value-Added Broker</option>
                  <option>AI Agent Developer</option>
                  <option>IoT Platform</option>
                  <option>Blockchain Infrastructure</option>
                  <option>Telecom Provider</option>
                  <option>Cloud Provider</option>
                  <option>Energy Provider</option>
                  <option>Academic Institution</option>
                  <option>Humanitarian Organization</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#E5E5E5] mb-2">
                  Contact Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#262626] rounded-lg text-white focus:border-[#14B8A6] focus:outline-none"
                  placeholder="contact@yourcompany.com"
                />
              </div>

              <div>
                <label htmlFor="use-case" className="block text-sm font-medium text-[#E5E5E5] mb-2">
                  Partnership Use Case
                </label>
                <textarea
                  id="use-case"
                  rows={4}
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#262626] rounded-lg text-white focus:border-[#14B8A6] focus:outline-none"
                  placeholder="Describe how you envision partnering with Nodenomics..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#14B8A6] text-white font-semibold rounded-lg hover:bg-[#5EEAD4] active:bg-[#0F766E] transition-colors"
              >
                Submit Partnership Request
              </button>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
}
