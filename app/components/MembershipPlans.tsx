'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { siteConfig } from '@/data/site-config';
import PlanSelectionModal from './PlanSelectionModal';

interface MembershipPlansProps {
  config: typeof siteConfig;
}

export default function MembershipPlans({ config }: MembershipPlansProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedPlan, setSelectedPlan] = useState<typeof config.membershipPlans[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectPlan = (plan: typeof config.membershipPlans[0]) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  return (
    <>
      <section id="membership" className="py-20 bg-gray-900 dark:bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            ref={ref}
            className={`${isInView ? 'animate-fade-in' : ''} mb-12 text-4xl font-bold text-center text-red-200`}
          >
            Membership & Tourist Passes
          </h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
            No contracts. No initiation fees. Just pure iron access.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {config.membershipPlans.map((plan) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * parseInt(plan.id.replace(/\D/g, '')) }}
                className="group"
              >
                <div className="border border-red-800/50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 hover:border-red-600/50">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">
                        {plan.name}
                      </h3>
                      {plan.mostPopular && (
                        <span className="px-3 py-1 bg-red-800 text-red-200 text-xs font-semibold uppercase rounded-full">
                          Most Popular
                        </span>
                      )}
                    </div>

                    <div className="flex items-baseline mb-6">
                      <span className="text-5xl font-extrabold text-red-400">
                        ${plan.price}
                      </span>
                      <span className="ml-2 text-xl text-gray-400">
                        {plan.pricePeriodText}
                      </span>
                    </div>

                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start mb-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-3 h-3 bg-red-600/30 rounded-full mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                            </svg>
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      </div>
                    ))}

                    <div className="mt-6">
                      <button
                        onClick={() => handleSelectPlan(plan)}
                        className="w-full flex items-center justify-center px-5 py-3 bg-red-800 text-white rounded-md hover:bg-red-900 transition-colors font-medium"
                      >
                        Get Started
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                      </button>
                    </div>

                    {/* QR Code placeholder */}
                    {plan.qrCodeData && (
                      <div className="mt-6 text-center">
                        <div className="w-16 h-16 mx-auto bg-red-800/30 rounded flex items-center justify-center mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                          </svg>
                        </div>
                        <p className="text-xs text-gray-500">Scan for instant access</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Selection Modal */}
      {selectedPlan && isModalOpen && (
        <PlanSelectionModal
          plan={selectedPlan}
          isOpen={isModalOpen}
          onClose={handleModalClose}
        />
      )}
    </>
  );
}