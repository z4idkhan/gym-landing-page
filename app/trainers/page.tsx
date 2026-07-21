"use client";

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { siteConfig } from '@/data/site-config';

export default function Trainers() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, {
  once: true,
  amount: 0.2,
});

  // Get unique specializations
  const specializations = ['All', ...Array.from(new Set(siteConfig.trainers.map(t => t.specialization)))];

  // Filter trainers based on selected specialization
  const filteredTrainers =
    activeFilter === 'All'
      ? siteConfig.trainers
      : siteConfig.trainers.filter((trainer) => trainer.specialization === activeFilter);

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2
            ref={titleRef}
            className={`mb-6 text-3xl font-bold text-center text-gray-900 dark:text-gray-100 ${
              titleInView ? 'animate-fade-in' : ''
            }`}
          >
            Meet Our Expert Trainers
          </h2>
          <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-300">
            Certified professionals dedicated to helping you achieve your fitness goals.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {specializations.map((spec) => (
            <button
              key={spec}
              onClick={() => setActiveFilter(spec)}
              className={`px-4 py-2 bg-transparent border border-gray-300 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === spec
                  ? 'bg-primary text-white'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
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
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
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
                      <a href={trainer.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v16a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2z"/>
                        </svg>
                      </a>
                    )}
                    {trainer.socialLinks?.facebook && (
                      <a href={trainer.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    {trainer.name}
                  </h3>
                  <p className="text-sm text-primary mb-2">
                    {trainer.specialization}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {trainer.certification} • {trainer.experience}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
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