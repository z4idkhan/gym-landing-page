'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { siteConfig } from '@/data/site-config';

interface TrainersProps {
  config: typeof siteConfig;
}

export default function Trainers({ config }: TrainersProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Get unique specializations
  const specializations = ['All', ...Array.from(new Set(config.trainers.map(t => t.specialization)))];

  // Filter trainers based on selected specialization
  const filteredTrainers =
    activeFilter === 'All'
      ? config.trainers
      : config.trainers.filter((trainer) => trainer.specialization === activeFilter);

  return (
    <section id="trainers" className="py-20 bg-gray-900 dark:bg-black">
      <div className="max-w-6tl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2
            ref={ref}
            className={`mb-6 text-4xl font-bold text-center text-red-200 ${
              isInView ? 'animate-fade-in' : ''
            }`}
          >
            Legends Who Forge Legends
          </h2>
          <p className="max-w-xl mx-auto text-gray-400 dark:text-gray-400">
            Learn from those who have lived the iron life and transformed countless physiques.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-4">
          {specializations.map((spec) => (
            <button
              key={spec}
              onClick={() => setActiveFilter(spec)}
              className={`px-4 py-2 bg-transparent border border-red-800/50 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === spec
                  ? 'bg-red-800 text-red-200'
                  : 'hover:bg-red-900/20 hover:text-red-300'
              }`}
            >
              {spec}
            </button>
          ))}
        </div>

        {/* Trainers Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTrainers.map((trainer) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * parseInt(trainer.id.replace(/\D/g, '')) }}
              className="group"
            >
              <div className="border border-red-800/50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 hover:border-red-600/50 bg-red-900/20">
                <div className="relative">
                  {/* Trainer Image */}
                  <img
                    src={trainer.image}
                    alt={`${trainer.name}'s photo`}
                    className="w-full h-48 object-cover"
                  />
                  {/* Social Overlay */}
                  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {trainer.socialLinks?.instagram && (
                      <a href={trainer.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-red-200 hover:text-red-100 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v16a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2z"/>
                        </svg>
                      </a>
                    )}
                    {trainer.socialLinks?.facebook && (
                      <a href={trainer.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-red-200 hover:text-red-100 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {trainer.name}
                  </h3>
                  <p className="text-sm text-red-400 mb-2">
                    {trainer.specialization}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {trainer.certification} • {trainer.experience}
                  </p>
                  <p className="text-gray-400 dark:text-gray-400 mb-4">
                    {trainer.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}