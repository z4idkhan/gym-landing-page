"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { siteConfig } from '@/data/site-config';

export default function About() {
  const ref = useRef<HTMLHeadingElement>(null);

const isInView = useInView(ref, {
  once: true,
  amount: 0.2,
});

  return (
    <section className="py-20 bg-gray-900 dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2
            ref={ref}
            className={`mb-6 text-3xl font-bold text-center text-red-200 ${
              isInView ? 'animate-fade-in' : ''
            }`}
          >
            About {siteConfig.gymName}
          </h2>
          <p className="max-w-xl mx-auto text-gray-400 dark:text-gray-400">
            Discover what makes {siteConfig.gymName} a legendary institution in the world of strength training. Our iron-packed facility, expert coaches, and uncompromising culture create the perfect environment for forging elite strength and resilience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Image Side */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="aspect-w-3 aspect-h-2 w-full rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/about.jpg"
                  alt={`${siteConfig.gymName} interior`}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              <h3 className="text-2xl font-semibold text-red-200">
                Our Mission
              </h3>
              <p className="text-gray-400 dark:text-gray-400">
                At {siteConfig.gymName}, we're committed to forging stronger individuals through relentless dedication to the iron game. We provide the environment, equipment, and expertise necessary for those who refuse to accept mediocrity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            >
              <h3 className="text-2xl font-semibold text-red-200">
                Why Choose Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-5.618 4.016M12 20a8.001 8.001 0 00-3.058-1.543m5.916 1.44a2 2 0 103.829 0"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Legendary Coaching</h4>
                    <p className="text-gray-400 dark:text-gray-400 text-sm">
                      Learn from those who have lived the iron life and transformed countless physiques through brutal, effective training principles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c4 0 6 2 6 4v1a1 1 0 001 1h2a1 1 0 001-1V9a1 1 0 00-1-1h-1V7a3 3 0 10-6 0v2a1 1 0 001 1h1a1 1 0 001 1v2a1 1 0 001 1z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Iron-Packed Facility</h4>
                    <p className="text-gray-400 dark:text-gray-400 text-sm">
                      Where other gyms have machines, we have monuments to strength. Every piece of equipment is selected for its ability to forge real, usable power.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H3m8 9H3m-4 1h12m8-4v8m0 0l4 4m-4-4V3a1 1 0 00-1-1H5a1 1 0 00-1 1v8a1 1 0 001 1h6m-4 4h4"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Uncompromising Culture</h4>
                    <p className="text-gray-400 dark:text-gray-400 text-sm">
                      Chalk flies, weights bend, and egos are left at the door. We foster an environment where only dedication and effort are rewarded.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="mt-16 text-center"
        >
          <a
            href="/membership"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-800 hover:bg-red-900 text-white rounded-md transition-colors font-medium"
          >
            Get Your Pass
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}