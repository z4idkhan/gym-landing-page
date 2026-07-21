'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

interface QuadVirtualProps {
  config: typeof import('@/data/site-config').siteConfig;
}

export default function QuadVirtual({ config }: QuadVirtualProps) {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, amount: 0.2 });
  const contentRef = useRef<HTMLDivElement>(null);
  const contentInView = useInView(contentRef, { once: true, amount: 0.2 });

  return (
    <section id="quadvirtual" className="py-20 bg-gray-900 dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={titleRef}
          className={`mb-10 text-4xl font-bold text-center text-red-200 dark:text-red-200 ${
            titleInView ? 'animate-fade-in' : ''
          }`}
        >
          {config.quadVirtual.title}
        </h2>
        <p className="max-w-2xl mx-auto text-center text-gray-300 dark:text-gray-300 mb-12">
          {config.quadVirtual.subtitle}
        </p>
        <p className="text-center text-gray-400 dark:text-gray-400 mb-16 max-w-3xl mx-auto">
          {config.quadVirtual.description}
        </p>

        <div ref={contentRef} className="space-y-12">
          {/* Onboarding Funnel */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center text-red-200">
              The QuadVirtual Onboarding Process
            </h3>
            <p className="text-center text-gray-400 max-w-2xl mx-auto">
              Our proven 3-phase system takes you from beginner to elite lifter
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {config.quadVirtual.onboardingPhases.map((phase) => (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * parseInt(phase.id.replace(/\D/g, '')) }}
                  className="group"
                >
                  <div className="border border-red-800/50 rounded-lg p-6 bg-red-900/20 hover:bg-red-900/30 transition-colors">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center mr-3">
                        <span className="text-2xl font-bold text-red-200">
                          {phase.id.charAt(0).toUpperCase() + phase.id.slice(1)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-200">{phase.title}</h4>
                        <p className="text-sm text-gray-400">{phase.durationWeeks}</p>
                      </div>
                    </div>
                    <p className="text-gray-400">{phase.description}</p>
                    <div className="mt-4 flex items-center">
                      <span className="text-xs text-red-400">Group Size:</span>
                      <span className="ml-2 font-semibold text-white">{phase.groupSize}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center text-red-200">
              Specialized 12-Week Programs
            </h3>
            <p className="text-center text-gray-400 max-w-2xl mx-auto">
              Choose your path to strength mastery
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {config.quadVirtual.programs.map((program) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * parseInt(program.id.replace(/\D/g, '')) }}
                  className="group"
                >
                  <div className="border border-red-800/50 rounded-lg p-6 bg-red-900/20 hover:bg-red-900/30 transition-colors">
                    <div className="mb-4">
                      <h4 className="font-bold text-red-200">{program.name}</h4>
                      <p className="text-sm text-gray-400 mb-2">
                        {program.durationWeeks} Weeks • {program.sessionsPerWeek} Sessions/Week
                      </p>
                      <div className="mb-3">
                        <span className="bg-red-800/50 text-red-200 text-xs px-2 py-1 rounded">
                          {program.focus[0]}
                        </span>
                        {program.focus.slice(1).map((focus, index) => (
                          <span key={index} className="ml-1 bg-red-800/50 text-red-200 text-xs px-2 py-1 rounded">
                            {focus}
                          </span>
                        ))}
                      </div>
                      <ul className="space-y-2 text-gray-400">
                        {program.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <div className="w-3 h-3 bg-red-600/50 rounded-full mr-2"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Strategy Session CTA */}
          <div className="text-center py-8 border-t border-red-800/50">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              {config.quadVirtual.strategySession.title}
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              {config.quadVirtual.strategySession.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="flex-1 px-6 py-3 bg-red-800 hover:bg-red-900 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Schedule Strategy Call
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </Link>
              <button
                onClick={() => {
                  window.open(`https://wa.me/${config.whatsappNumber}`, '_blank');
                }}
                className="flex-1 px-6 py-3 border border-red-600 text-red-200 hover:bg-red-900/20 font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                WhatsApp Coach
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h11a2 2 0 012 2v10a2 2 0 01-2 2zM12 10a7 7 0 100-14 7 7 0 000 14z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}