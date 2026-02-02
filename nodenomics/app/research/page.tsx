'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Footer from '@/components/layout/Footer';
import { researchThemes, keyTechnologies, researchChallenges, researchStats } from '@/lib/research-data';

export default function ResearchPage() {
  const [expandedTheme, setExpandedTheme] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#14B8A620] to-transparent"></div>
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Built on <span className="text-[#14B8A6]">Academic Research</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#E5E5E5] mb-8">
            Nodenomics is grounded in {researchStats.totalStudies}+ peer-reviewed studies spanning {researchStats.yearRange}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-[#121212] border border-[#14B8A6] rounded-lg px-6 py-3">
              <p className="text-2xl font-bold text-[#14B8A6]">{researchStats.totalStudies}+</p>
              <p className="text-sm text-[#737373]">Studies Reviewed</p>
            </div>
            <div className="bg-[#121212] border border-[#14B8A6] rounded-lg px-6 py-3">
              <p className="text-2xl font-bold text-[#14B8A6]">{researchStats.thematicAreas}</p>
              <p className="text-sm text-[#737373]">Research Themes</p>
            </div>
            <div className="bg-[#121212] border border-[#14B8A6] rounded-lg px-6 py-3">
              <p className="text-2xl font-bold text-[#14B8A6]">{researchStats.totalCitations.toLocaleString()}+</p>
              <p className="text-sm text-[#737373]">Total Citations</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12 Research Themes */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">12 Research Themes</h2>
            <p className="text-xl text-[#737373]">Core areas shaping the M2M economy</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchThemes.map((theme) => (
              <Card
                key={theme.id}
                hover
                className="cursor-pointer"
                onClick={() => setExpandedTheme(expandedTheme === theme.id ? null : theme.id)}
              >
                <div className="flex justify-between items-start mb-3">
                  <Badge variant="teal" size="sm">{theme.citationCount.toLocaleString()} citations</Badge>
                  <span className="text-[#14B8A6]">{expandedTheme === theme.id ? '−' : '+'}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{theme.title}</h3>
                <p className="text-[#E5E5E5] text-sm mb-4">{theme.description}</p>

                {expandedTheme === theme.id && (
                  <div className="mt-4 pt-4 border-t border-[#262626] space-y-4">
                    <div>
                      <p className="text-sm text-[#14B8A6] font-semibold mb-2">KEY INSIGHT:</p>
                      <p className="text-[#E5E5E5] text-sm italic">{theme.keyInsight}</p>
                    </div>

                    <div>
                      <p className="text-sm text-[#14B8A6] font-semibold mb-2">INFLUENTIAL PAPERS:</p>
                      <ul className="space-y-2">
                        {theme.keyPapers.slice(0, 3).map((paper, idx) => (
                          <li key={idx} className="text-sm">
                            <p className="text-white font-medium">{paper.authors} ({paper.year})</p>
                            <p className="text-[#737373]">{paper.title}</p>
                            <p className="text-[#14B8A6]">{paper.citations} citations • {paper.journal}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Technologies */}
      <section className="py-24 px-6 bg-[#121212]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Key Technologies</h2>
            <p className="text-xl text-[#737373]">Foundational infrastructure for the machine economy</p>
          </div>

          <div className="space-y-6">
            {keyTechnologies.map((tech, idx) => (
              <Card key={idx} variant="bordered">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{tech.name}</h3>
                    <p className="text-[#E5E5E5] mb-4">{tech.description}</p>
                    <Badge variant="gray" size="sm">Source: {tech.researchSource}</Badge>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-[#14B8A6] mb-2">ADVANTAGES:</h4>
                      <ul className="space-y-1">
                        {tech.advantages.map((adv, i) => (
                          <li key={i} className="text-[#E5E5E5] text-sm flex items-start">
                            <span className="text-[#14B8A6] mr-2">+</span>
                            {adv}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-[#737373] mb-2">CHALLENGES:</h4>
                      <ul className="space-y-1">
                        {tech.challenges.map((challenge, i) => (
                          <li key={i} className="text-[#737373] text-sm flex items-start">
                            <span className="mr-2">−</span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Blockchain vs DAG Comparison */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-white text-center mb-8">Blockchain vs DAG Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#262626]">
                    <th className="px-4 py-3 text-[#14B8A6]">Feature</th>
                    <th className="px-4 py-3 text-[#14B8A6]">Traditional Blockchain</th>
                    <th className="px-4 py-3 text-[#14B8A6]">DAG (e.g., IOTA)</th>
                  </tr>
                </thead>
                <tbody className="text-[#E5E5E5]">
                  <tr className="border-b border-[#262626]">
                    <td className="px-4 py-3 font-semibold">Data Structure</td>
                    <td className="px-4 py-3">Linear chain of blocks</td>
                    <td className="px-4 py-3 text-[#14B8A6]">Graph of interconnected transactions</td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="px-4 py-3 font-semibold">Consensus</td>
                    <td className="px-4 py-3">Miners compete (PoW, PoS)</td>
                    <td className="px-4 py-3 text-[#14B8A6]">Transactions confirm previous transactions</td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="px-4 py-3 font-semibold">Transaction Fees</td>
                    <td className="px-4 py-3">Required to incentivize miners</td>
                    <td className="px-4 py-3 text-[#14B8A6]">Feeless</td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="px-4 py-3 font-semibold">Scalability</td>
                    <td className="px-4 py-3">Limited by block size/time</td>
                    <td className="px-4 py-3 text-[#14B8A6]">Improves with network activity</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">M2M Suitability</td>
                    <td className="px-4 py-3">Challenged by fees and throughput</td>
                    <td className="px-4 py-3 text-[#14B8A6]">Ideal for high-volume micropayments</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Research Challenges */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Research Challenges</h2>
            <p className="text-xl text-[#737373]">Open problems driving innovation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {researchChallenges.map((challenge, idx) => (
              <Card key={idx} hover>
                <h3 className="text-2xl font-bold text-white mb-3">{challenge.title}</h3>
                <p className="text-[#E5E5E5] mb-4">{challenge.description}</p>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-[#14B8A6] font-semibold mb-2">CURRENT APPROACHES:</p>
                    <ul className="space-y-1">
                      {challenge.currentApproaches.map((approach, i) => (
                        <li key={i} className="text-[#E5E5E5] text-sm flex items-start">
                          <span className="text-[#14B8A6] mr-2">•</span>
                          {approach}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#14B8A610] border border-[#14B8A6] rounded-lg p-4">
                    <p className="text-sm text-[#14B8A6] font-semibold mb-1">FUTURE DIRECTIONS:</p>
                    <p className="text-white text-sm">{challenge.futureDirections}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Quote */}
      <section className="py-24 px-6 bg-[#121212]">
        <div className="container mx-auto max-w-4xl text-center">
          <blockquote className="text-2xl md:text-3xl text-white font-light italic mb-6">
            "A smart contract is a set of promises, specified in digital form, including protocols within which the parties perform on these promises."
          </blockquote>
          <p className="text-[#14B8A6] font-semibold">— Nick Szabo, 1996</p>
          <p className="text-[#737373] mt-2">Foundational concept enabling autonomous M2M transactions</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
