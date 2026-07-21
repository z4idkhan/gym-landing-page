'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface GymCultureProps {
  config: typeof import('@/data/site-config').siteConfig;
}

export default function GymCulture({ config }: GymCultureProps) {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, amount: 0.2 });
  const contentRef = useRef<HTMLDivElement>(null);
  const contentInView = useInView(contentRef, { once: true, amount: 0.2 });

  return (
    <section id="gym-culture" className="py-20 bg-gray-900 dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={titleRef}
          className={`mb-10 text-4xl font-bold text-center text-red-200 dark:text-red-200 ${
            titleInView ? 'animate-fade-in' : ''
          }`}
        >
          {config.gymCulture.title}
        </h2>
        <p className="text-center text-gray-400 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          {config.gymCulture.description}
        </p>

        <div ref={contentRef} className="space-y-8">
          {/* Encouraged & Prohibited Lists */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Encouraged Behaviors */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-green-400">Encouraged & Celebrated</h3>
              <p className="text-gray-400 max-w-lg">
                These behaviors define our culture and make our gym legendary
              </p>
              <div className="space-y-3">
                {config.gymCulture.encouraged.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-green-600/20 rounded-full flex items-center justify-center">
                        <span className="text-green-400 text-sm font-bold">+</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-300">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prohibited Behaviors */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-red-400">Strictly Prohibited</h3>
              <p className="text-gray-400 max-w-lg">
                Violations will result in immediate removal - no warnings, no exceptions
              </p>
              <div className="space-y-3">
                {config.gymCulture.prohibited.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-red-600/20 rounded-full flex items-center justify-center">
                        <span className="text-red-400 text-sm font-bold">–</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-300">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Atmosphere Image Gallery */}
        <div className="mt-16 pt-8 border-t border-red-800/50">
          <h3 className="text-2xl font-bold text-center text-red-200 mb-8">
            Where Iron Meets Intention
          </h3>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-8">
            Experience the atmosphere that forged champions
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* In a real app, these would be actual images */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div key={index} className="aspect-w-16 aspect-h-9 bg-red-900/30 rounded-lg overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-red-600/30 rounded-full flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"/>
                      </svg>
                    </div>
                    <h4 className="text-white font-bold text-sm">Chalk & Iron</h4>
                    <p className="text-xs text-gray-400 mt-1">Where legends are made</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/10 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}