import Link from 'next/link';
import Card from '@/components/ui/Card';
import Footer from '@/components/layout/Footer';
import { participants } from '@/lib/impact-data';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#14B8A620] via-transparent to-transparent"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#14B8A6] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#14B8A6] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              The Machine Economy <span className="text-[#14B8A6]">Starts Here</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#E5E5E5] mb-12 max-w-3xl mx-auto">
              Autonomous data marketplace with micropayments enabling real-time machine-to-machine transactions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/impact"
                className="px-8 py-4 bg-[#14B8A6] text-white font-semibold rounded-lg hover:bg-[#5EEAD4] active:bg-[#0F766E] transition-colors"
              >
                Explore Real-World Impact
              </Link>
              <Link
                href="/research"
                className="px-8 py-4 border-2 border-[#14B8A6] text-[#14B8A6] font-semibold rounded-lg hover:bg-[#14B8A610] transition-colors"
              >
                View Research
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Three Participants Section */}
      <section className="py-24 px-6 bg-[#121212]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Three Participants, One Ecosystem</h2>
            <p className="text-xl text-[#737373]">A circular economy of data and compute</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {participants.map((participant) => (
              <Card key={participant.type} variant="bordered" hover className="text-center">
                <div className="text-6xl mb-4">{participant.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{participant.title}</h3>
                <p className="text-[#E5E5E5] mb-6">{participant.description}</p>

                <div className="space-y-4 text-left">
                  <div className="bg-[#14B8A610] border border-[#14B8A6] rounded-lg p-4">
                    <p className="text-sm text-[#14B8A6] font-semibold mb-1">SELLS:</p>
                    <p className="text-white">{participant.sells}</p>
                  </div>
                  <div className="bg-[#0F766E10] border border-[#0F766E] rounded-lg p-4">
                    <p className="text-sm text-[#5EEAD4] font-semibold mb-1">BUYS:</p>
                    <p className="text-white">{participant.buys}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Data Flow Visualization */}
          <div className="bg-gradient-to-r from-[#0F766E20] via-[#14B8A620] to-[#0F766E20] rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-6">How Data Flows</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center">
                <div className="text-4xl mb-2">📡</div>
                <p className="text-sm text-[#E5E5E5]">IoT Devices generate<br/>raw data</p>
              </div>
              <div className="text-[#14B8A6] text-3xl">→</div>
              <div className="text-center">
                <div className="text-4xl mb-2">⚙️</div>
                <p className="text-sm text-[#E5E5E5]">Brokers refine and<br/>enrich data</p>
              </div>
              <div className="text-[#14B8A6] text-3xl">→</div>
              <div className="text-center">
                <div className="text-4xl mb-2">🤖</div>
                <p className="text-sm text-[#E5E5E5]">AI Agents use data for<br/>autonomous missions</p>
              </div>
              <div className="text-[#14B8A6] text-3xl">→</div>
              <div className="text-center">
                <div className="text-4xl mb-2">⚡</div>
                <p className="text-sm text-[#E5E5E5]">Compute resources<br/>circulate back</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Nodenomics Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Built on Academic Research</h2>
            <p className="text-xl text-[#737373]">Over 115 peer-reviewed studies inform our approach</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card hover>
              <h3 className="text-2xl font-semibold text-white mb-3">Feeless Micropayments</h3>
              <p className="text-[#E5E5E5] mb-4">
                DAG-based distributed ledger technology enables economically viable micropayments down to fractions of a cent, allowing devices to trade individual data points.
              </p>
              <Link href="/research#distributed-ledger" className="text-[#14B8A6] hover:text-[#5EEAD4] font-medium">
                Learn about our DLT approach →
              </Link>
            </Card>

            <Card hover>
              <h3 className="text-2xl font-semibold text-white mb-3">Privacy-Preserving</h3>
              <p className="text-[#E5E5E5] mb-4">
                Secure Multi-Party Computation, Differential Privacy, and Zero-Knowledge Proofs enable data trading without revealing sensitive information.
              </p>
              <Link href="/research#privacy-preserving" className="text-[#14B8A6] hover:text-[#5EEAD4] font-medium">
                Explore privacy techniques →
              </Link>
            </Card>

            <Card hover>
              <h3 className="text-2xl font-semibold text-white mb-3">Smart Contract Automation</h3>
              <p className="text-[#E5E5E5] mb-4">
                Self-executing smart contracts enable autonomous transactions at machine speed, eliminating intermediaries and reducing transaction costs.
              </p>
              <Link href="/research#smart-contracts" className="text-[#14B8A6] hover:text-[#5EEAD4] font-medium">
                Understand smart contracts →
              </Link>
            </Card>

            <Card hover>
              <h3 className="text-2xl font-semibold text-white mb-3">Game-Theoretic Design</h3>
              <p className="text-[#E5E5E5] mb-4">
                Auction mechanisms and Nash equilibrium analysis ensure fair pricing, efficient resource allocation, and market stability.
              </p>
              <Link href="/research#game-theory" className="text-[#14B8A6] hover:text-[#5EEAD4] font-medium">
                See mechanism design →
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Humanitarian Impact Highlight */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-[#14B8A610] to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Enabling Humanitarian Impact at Scale</h2>
          <p className="text-xl text-[#E5E5E5] mb-8">
            AI agents autonomously purchase data to coordinate disaster response, improve healthcare access, ensure food security, and protect the environment—operating 24/7 without human intervention.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-[#121212] border border-[#262626] rounded-lg p-6">
              <p className="text-3xl font-bold text-[#14B8A6] mb-2">40%</p>
              <p className="text-[#E5E5E5]">Faster emergency response coordination</p>
            </div>
            <div className="bg-[#121212] border border-[#262626] rounded-lg p-6">
              <p className="text-3xl font-bold text-[#14B8A6] mb-2">200K+</p>
              <p className="text-[#E5E5E5]">People with improved clean water access</p>
            </div>
            <div className="bg-[#121212] border border-[#262626] rounded-lg p-6">
              <p className="text-3xl font-bold text-[#14B8A6] mb-2">60%</p>
              <p className="text-[#E5E5E5]">Reduction in wildlife poaching incidents</p>
            </div>
            <div className="bg-[#121212] border border-[#262626] rounded-lg p-6">
              <p className="text-3xl font-bold text-[#14B8A6] mb-2">10K+</p>
              <p className="text-[#E5E5E5]">Lives saved through pandemic early warning</p>
            </div>
          </div>
          <Link
            href="/impact"
            className="inline-block px-8 py-4 bg-[#14B8A6] text-white font-semibold rounded-lg hover:bg-[#5EEAD4] active:bg-[#0F766E] transition-colors"
          >
            Explore All Impact Stories
          </Link>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Built for Scale</h2>
            <p className="text-xl text-[#737373]">Enterprise-grade performance</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card variant="bordered" className="text-center">
              <p className="text-5xl md:text-6xl font-bold font-mono text-[#14B8A6] mb-2">&lt; 100ms</p>
              <p className="text-xl font-semibold text-white mb-2">Transaction Latency</p>
              <p className="text-[#737373]">From request to data delivery</p>
            </Card>
            <Card variant="bordered" className="text-center">
              <p className="text-5xl md:text-6xl font-bold font-mono text-[#14B8A6] mb-2">10M+</p>
              <p className="text-xl font-semibold text-white mb-2">Connected Devices</p>
              <p className="text-[#737373]">Across all supported networks</p>
            </Card>
            <Card variant="bordered" className="text-center">
              <p className="text-5xl md:text-6xl font-bold font-mono text-[#14B8A6] mb-2">99.99%</p>
              <p className="text-xl font-semibold text-white mb-2">Uptime SLA</p>
              <p className="text-[#737373]">Distributed infrastructure</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#121212]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join the Machine Economy</h2>
          <p className="text-xl text-[#E5E5E5] mb-8">
            Whether you're an IoT device manufacturer, data broker, or AI developer—there's a place for you in the Nodenomics ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/partners"
              className="px-8 py-4 bg-[#14B8A6] text-white font-semibold rounded-lg hover:bg-[#5EEAD4] active:bg-[#0F766E] transition-colors"
            >
              Become a Partner
            </Link>
            <Link
              href="/faq"
              className="px-8 py-4 border-2 border-[#14B8A6] text-[#14B8A6] font-semibold rounded-lg hover:bg-[#14B8A610] transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
