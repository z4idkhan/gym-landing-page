'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { siteConfig } from '@/data/site-config';

interface TransformationsProps {
  config: typeof siteConfig;
}

export default function Transformations({ config }: TransformationsProps) {
  const ref = useRef<HTMLDivElement>(null);
const isInView = useInView(ref, {
  once: true,
  amount: 0.2,
});

  return (
    <section id="transformations" className="py-20 bg-gray-900 dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={ref}
          className={`mb-12 text-4xl font-bold text-center text-red-200 ${
            isInView ? 'animate-fade-in' : ''
          }`}
        >
          Real Results. Real Iron.
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          These are the kinds of transformations that happen when you train like you mean it.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {config.transformations.map((transformation) => (
            <motion.div
              key={transformation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * parseInt(transformation.id.replace(/\D/g, '')) }}
              className="group"
            >
              <div className="border border-red-800/50 rounded-lg overflow-hidden">
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Before Image */}
                    <div className="aspect-w-1 aspect-h-1">
                      <div className="relative group">
                        <img
                          src={transformation.imageBefore}
                          alt={`${transformation.name} before`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="text-center">
                            <div className="w-8 h-8 bg-red-600/30 rounded-full flex items-center justify-center mb-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 4a9 9 0 11-18 0 9 9 0 0118 0z"/>
                              </svg>
                            </div>
                            <span className="text-white text-sm font-medium">BEFORE</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* After Image */}
                    <div className="aspect-w-1 aspect-h-1">
                      <div className="relative group">
                        <img
                          src={transformation.imageAfter}
                          alt={`${transformation.name} after`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="text-center">
                            <div className="w-8 h-8 bg-red-600/30 rounded-full flex items-center justify-center mb-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 4a9 9 0 11-18 0 9 9 0 0118 0z"/>
                              </svg>
                            </div>
                            <span className="text-white text-sm font-medium">AFTER</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {transformation.name}
                    </h3>
                    <div className="flex items-center mb-2">
                      <div className="flex-shrink-0">
                        <div className="w-5 h-5 bg-red-600/30 rounded-full flex items-center justify-center mr-2">
                          {transformation.rating}/5
                        </div>
                      </div>
                      <span className="text-red-400">{transformation.rating}/5</span>
                    </div>
                    <p className="text-gray-400 mb-4">
                      {transformation.text}
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