'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Footer from '@/components/layout/Footer';
import { faqCategories } from '@/lib/faq-data';

export default function FAQPage() {
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestion(expandedQuestion === questionId ? null : questionId);
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#14B8A620] to-transparent"></div>
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked <span className="text-[#14B8A6]">Questions</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#E5E5E5]">
            Everything you need to know about Nodenomics and the machine economy
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            {faqCategories.map((category, catIdx) => (
              <div key={catIdx}>
                <div className="mb-8">
                  <Badge variant="teal" size="lg">{category.category}</Badge>
                </div>

                <div className="space-y-4">
                  {category.questions.map((faq, qIdx) => {
                    const questionId = `${catIdx}-${qIdx}`;
                    const isExpanded = expandedQuestion === questionId;

                    return (
                      <Card
                        key={qIdx}
                        hover
                        className="cursor-pointer"
                        onClick={() => toggleQuestion(questionId)}
                      >
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-semibold text-white pr-4">
                            {faq.question}
                          </h3>
                          <button
                            className="flex-shrink-0 w-8 h-8 rounded-full bg-[#14B8A6] text-white flex items-center justify-center font-bold"
                            aria-label={isExpanded ? 'Collapse' : 'Expand'}
                          >
                            {isExpanded ? '−' : '+'}
                          </button>
                        </div>

                        {isExpanded && (
                          <div className="mt-4 pt-4 border-t border-[#262626]">
                            <p className="text-[#E5E5E5] mb-4">{faq.answer}</p>
                            {faq.researchSource && (
                              <div className="bg-[#14B8A610] border border-[#14B8A6] rounded-lg p-3">
                                <p className="text-sm text-[#14B8A6]">
                                  <strong>Research Source:</strong> {faq.researchSource}
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 px-6 bg-[#121212]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Still Have Questions?</h2>
            <p className="text-xl text-[#737373]">Explore more resources</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card hover className="text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-white mb-2">Research</h3>
              <p className="text-[#E5E5E5] mb-4">Explore the 115+ studies backing Nodenomics</p>
              <a href="/research" className="text-[#14B8A6] hover:text-[#5EEAD4] font-semibold">
                View Research →
              </a>
            </Card>

            <Card hover className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-2">Impact</h3>
              <p className="text-[#E5E5E5] mb-4">See real-world humanitarian applications</p>
              <a href="/impact" className="text-[#14B8A6] hover:text-[#5EEAD4] font-semibold">
                Explore Impact →
              </a>
            </Card>

            <Card hover className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-white mb-2">Partners</h3>
              <p className="text-[#E5E5E5] mb-4">Join the ecosystem as a partner</p>
              <a href="/partners" className="text-[#14B8A6] hover:text-[#5EEAD4] font-semibold">
                Become a Partner →
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Need More Help?</h2>
          <p className="text-xl text-[#E5E5E5] mb-8">
            Our team is here to answer your questions about implementing Nodenomics in your organization
          </p>
          <a
            href="/partners"
            className="inline-block px-8 py-4 bg-[#14B8A6] text-white font-semibold rounded-lg hover:bg-[#5EEAD4] active:bg-[#0F766E] transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
