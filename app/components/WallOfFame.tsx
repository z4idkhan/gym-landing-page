'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface WallOfFameProps {
  config: typeof import('@/data/site-config').siteConfig;
}

export default function WallOfFame({ config }: WallOfFameProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const titleInView = useInView(titleRef, {
    once: true,
    amount: 0.2,
  });

  useInView(contentRef, {
    once: true,
    amount: 0.2,
  });

  return (
    <section
      id="wall-of-fame"
      className="py-20 bg-gray-900 dark:bg-black"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={titleRef}
          className={`mb-10 text-4xl font-bold text-center text-red-200 ${
            titleInView ? 'animate-fade-in' : ''
          }`}
        >
          Wall of Fame
        </h2>

        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Honoring the legends who forged our legacy within these walls
        </p>

        <div
          ref={contentRef}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {config.wallOfFame.map((legend) => (
            <motion.div
              key={legend.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay:
                  0.1 *
                  Number(legend.id.replace(/\D/g, '') || 0),
              }}
            >
              <div className="border border-red-800/50 rounded-lg overflow-hidden">
                <div className="relative">
                  <div className="w-full h-48 bg-red-900/30 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-black/40" />

                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-12 h-12 bg-red-600/30 rounded-full flex items-center justify-center mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-red-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4"
                          />
                        </svg>
                      </div>

                      <h3 className="text-white font-bold text-lg">
                        {legend.name}
                      </h3>

                      <p className="text-red-400 text-sm">
                        {legend.title}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-gray-300 font-medium">Era</p>
                    <p className="text-white">{legend.era}</p>
                  </div>

                  <div>
                    <p className="text-gray-300 font-medium">
                      Legendary Achievement
                    </p>
                    <p className="text-white">
                      {legend.achievement}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}