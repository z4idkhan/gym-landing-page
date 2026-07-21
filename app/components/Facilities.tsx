"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { siteConfig } from '@/data/site-config';

interface FacilitiesProps {
  config: typeof siteConfig;
}

export default function Facilities({ config }: FacilitiesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
  once: true,
  amount: 0.2,
});

  return (
    <section id="facilities" className="py-20 bg-gray-900 dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={ref}
          className={`mb-10 text-4xl font-bold text-center text-white ${
            isInView ? 'animate-fade-in' : ''
          }`}
        >
          Our Iron Arsenal
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          Where other gyms have machines, we have monuments to strength.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {config.facilities.map((facility) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * parseInt(facility.id.replace(/\D/g, '')) }}
              className="group"
            >
              <div className="border border-red-800/50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-red-600/30 rounded-full flex items-center justify-center mr-3">
                      {/* This would normally use the actual icon */}
                      <span className="text-xl text-red-400">⚡</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{facility.name}</h3>
                      <p className="text-sm text-gray-400 mt-1">{facility.description}</p>
                    </div>
                  </div>
                  <p className="text-gray-400">{facility.description}</p>

                  {/* Brand Tags if available */}
                  {facility.brandTags && facility.brandTags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {facility.brandTags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-red-800/50 text-red-200 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
    </section>
  );
}