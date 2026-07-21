'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface IronInventoryProps {
  config: typeof import('@/data/site-config').siteConfig;
}

export default function IronInventory({ config }: IronInventoryProps) {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, amount: 0.2 });
  const contentRef = useRef<HTMLDivElement>(null);
  const contentInView = useInView(contentRef, { once: true, amount: 0.2 });

  return (
    <section id="iron-inventory" className="py-20 bg-gray-900 dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={titleRef}
          className={`mb-10 text-4xl font-bold text-center text-red-200 dark:text-red-200 ${
            titleInView ? 'animate-fade-in' : ''
          }`}
        >
          {config.ironInventory.title}
        </h2>
        <p className="text-center text-gray-400 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          {config.ironInventory.subtitle}
        </p>

        <div ref={contentRef} className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {config.ironInventory.equipment.map((equipment) => (
              <motion.div
                key={equipment.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * parseInt(equipment.id.replace(/\D/g, '')) }}
                className="group"
              >
                <div className="border border-red-800/50 rounded-lg overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-red-600/30 rounded-full flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c4 0 6 2 6 4v1a1 1 0 001 1h2a1 1 0 001-1V9a1 1 0 00-1-1h-1V7a3 3 0 10-6 0v2a1 1 0 001 1h1a1 1 0 001 1z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-red-200">{equipment.name}</h3>
                        <p className="text-sm text-gray-400">{equipment.description}</p>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-4">{equipment.description}</p>

                    {/* Brand Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {equipment.brandTags.map((brand, index) => (
                        <span key={index} className="px-3 py-1 bg-red-800/50 text-red-200 text-xs rounded-full">
                          {brand}
                        </span>
                      ))}
                    </div>

                    {/* Specs */}
                    <div className="space-y-2">
                      {equipment.specs.map((spec, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-3 h-3 bg-red-600/50 rounded-full mr-2"></div>
                          <span className="text-gray-300">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}