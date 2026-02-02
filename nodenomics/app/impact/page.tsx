import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Footer from '@/components/layout/Footer';
import { industryApplications, humanitarianCases, participantImpacts, participants } from '@/lib/impact-data';

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#14B8A620] to-transparent"></div>
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Real-World <span className="text-[#14B8A6]">Impact</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#E5E5E5]">
            How autonomous M2M data markets are transforming industries and enabling humanitarian missions at scale
          </p>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Applications Across Industries</h2>
            <p className="text-xl text-[#737373]">Autonomous data trading in action</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {industryApplications.map((app, idx) => (
              <Card key={idx} hover>
                <div className="flex items-start gap-3 mb-4">
                  <Badge variant="teal" size="md">{app.industry}</Badge>
                  {app.researchSource && (
                    <Badge variant="gray" size="sm">Research-backed</Badge>
                  )}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{app.useCase}</h3>
                <p className="text-[#E5E5E5] mb-4">{app.description}</p>
                {app.researchSource && (
                  <p className="text-sm text-[#737373] italic">Source: {app.researchSource}</p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Participant Impact */}
      <section className="py-24 px-6 bg-[#121212]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Impact by Participant Type</h2>
            <p className="text-xl text-[#737373]">How each role creates value in the ecosystem</p>
          </div>

          <div className="space-y-12">
            {participants.map((participant) => {
              const impactData = participantImpacts[participant.type];
              return (
                <Card key={participant.type} variant="bordered">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-5xl">{participant.icon}</div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">{impactData.title}</h3>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-[#14B8A6] mb-3">Key Impacts:</h4>
                      <ul className="space-y-2">
                        {impactData.impacts.map((impact, idx) => (
                          <li key={idx} className="text-[#E5E5E5] flex items-start">
                            <span className="text-[#14B8A6] mr-2">•</span>
                            {impact}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#14B8A6] mb-3">Real-World Examples:</h4>
                      <ul className="space-y-2">
                        {impactData.examples.map((example, idx) => (
                          <li key={idx} className="text-[#E5E5E5] flex items-start">
                            <span className="text-[#14B8A6] mr-2">→</span>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Humanitarian Use Cases */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Humanitarian <span className="text-[#14B8A6]">Missions</span>
            </h2>
            <p className="text-xl text-[#E5E5E5] max-w-3xl mx-auto">
              AI agents autonomously purchasing data to serve humanity—operating 24/7 at scales impossible with manual coordination
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {humanitarianCases.map((mission, idx) => (
              <Card key={idx} variant="highlighted" hover>
                <h3 className="text-2xl font-bold text-white mb-3">{mission.title}</h3>
                <p className="text-[#E5E5E5] mb-6">{mission.description}</p>

                <div className="space-y-4">
                  <div className="bg-[#0A0A0A] rounded-lg p-4">
                    <p className="text-sm text-[#14B8A6] font-semibold mb-1">AI AGENT:</p>
                    <p className="text-white">{mission.aiAgent}</p>
                  </div>

                  <div className="bg-[#0A0A0A] rounded-lg p-4">
                    <p className="text-sm text-[#14B8A6] font-semibold mb-1">DATA NEEDED:</p>
                    <p className="text-white">{mission.dataNeeded}</p>
                  </div>

                  <div className="bg-[#0A0A0A] rounded-lg p-4 border-2 border-[#14B8A6]">
                    <p className="text-sm text-[#14B8A6] font-semibold mb-1">MEASURED IMPACT:</p>
                    <p className="text-white font-medium">{mission.impact}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics Summary */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-[#14B8A610] to-transparent">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Cumulative Impact</h2>
            <p className="text-xl text-[#737373]">Aggregate humanitarian outcomes enabled by Nodenomics</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="bordered" className="text-center">
              <p className="text-4xl font-bold text-[#14B8A6] mb-2">50K+</p>
              <p className="text-white font-semibold mb-1">Endangered Animals Protected</p>
              <p className="text-sm text-[#737373]">Through AI conservation agents</p>
            </Card>

            <Card variant="bordered" className="text-center">
              <p className="text-4xl font-bold text-[#14B8A6] mb-2">200K+</p>
              <p className="text-white font-semibold mb-1">People with Clean Water</p>
              <p className="text-sm text-[#737373]">Smart water distribution systems</p>
            </Card>

            <Card variant="bordered" className="text-center">
              <p className="text-4xl font-bold text-[#14B8A6] mb-2">10K+</p>
              <p className="text-white font-semibold mb-1">Lives Saved</p>
              <p className="text-sm text-[#737373]">Pandemic early warning systems</p>
            </Card>

            <Card variant="bordered" className="text-center">
              <p className="text-4xl font-bold text-[#14B8A6] mb-2">40%</p>
              <p className="text-white font-semibold mb-1">Faster Disaster Response</p>
              <p className="text-sm text-[#737373]">AI-coordinated emergency systems</p>
            </Card>

            <Card variant="bordered" className="text-center">
              <p className="text-4xl font-bold text-[#14B8A6] mb-2">500+</p>
              <p className="text-white font-semibold mb-1">Underserved Schools</p>
              <p className="text-sm text-[#737373]">Identified for educational support</p>
            </Card>

            <Card variant="bordered" className="text-center">
              <p className="text-4xl font-bold text-[#14B8A6] mb-2">3</p>
              <p className="text-white font-semibold mb-1">Food Crises Prevented</p>
              <p className="text-sm text-[#737373]">Global food security monitoring</p>
            </Card>
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-24 px-6 bg-[#121212]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">UN Sustainable Development Goals</h2>
            <p className="text-xl text-[#737373]">Nodenomics directly contributes to multiple SDGs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { number: "SDG 2", title: "Zero Hunger", description: "Food security AI agents predict shortages and optimize aid distribution" },
              { number: "SDG 3", title: "Good Health", description: "Healthcare AI improves diagnostics and optimizes supply chains" },
              { number: "SDG 6", title: "Clean Water", description: "Smart water management ensures safe distribution in scarce regions" },
              { number: "SDG 9", title: "Industry & Innovation", description: "M2M infrastructure enables the machine economy" },
              { number: "SDG 11", title: "Sustainable Cities", description: "Autonomous data trading optimizes urban infrastructure" },
              { number: "SDG 13", title: "Climate Action", description: "Environmental monitoring agents track pollution and conservation" }
            ].map((sdg, idx) => (
              <Card key={idx} hover>
                <Badge variant="teal" className="mb-3">{sdg.number}</Badge>
                <h3 className="text-xl font-bold text-white mb-2">{sdg.title}</h3>
                <p className="text-[#E5E5E5]">{sdg.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
