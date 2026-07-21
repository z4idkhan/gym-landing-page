'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { siteConfig } from '@/data/site-config';

// Gym Tour Page - Main highlight for showing gym appearance and equipment
export default function GymTour() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, {
  once: true,
  amount: 0.2,
});

  // Gallery images - in a real app, these would come from the config or a CMS
  // For now, we'll use placeholder paths that the user can replace with their actual photos
  const gymImages = [
    { src: '/images/gym/exterior.jpg', alt: `${siteConfig.gymName} Exterior` },
    { src: '/images/gym/reception.jpg', alt: `${siteConfig.gymName} Reception Area` },
    { src: '/images/gym/cardio-zone.jpg', alt: 'Cardio Zone' },
    { src: '/images/gym/weights-area.jpg', alt: 'Weight Training Area' },
    { src: '/images/gym/group-studio.jpg', alt: 'Group Exercise Studio' },
    { src: '/images/gym/functional-training.jpg', alt: 'Functional Training Area' },
    { src: '/images/gym/locker-room.jpg', alt: 'Locker Rooms' },
    { src: '/images/gym/sauna-steam.jpg', alt: 'Sauna & Steam Room' },
    { src: '/images/gym/stretching-area.jpg', alt: 'Stretching & Mobility Area' },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2
            ref={titleRef}
            className={`mb-6 text-3xl font-bold text-center text-gray-900 dark:text-gray-100 ${
              titleInView ? 'animate-fade-in' : ''
            }`}
          >
            Explore {siteConfig.gymName}
          </h2>
          <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-300">
            Take a virtual tour of our state-of-the-art facility. See our modern equipment, spacious workout areas, and premium amenities that make {siteConfig.gymName} Gorakhpur's premier fitness destination.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gymImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-medium text-sm">{image.alt}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Equipment Section */}
<div className="mt-20">
  <h3 className="text-2xl font-semibold mb-8 text-center text-gray-900 dark:text-gray-100">
    Premium Equipment & Facilities
  </h3>

  <div className="grid gap-8 md:grid-cols-2">
            {/* Cardio Equipment */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <div className="h-48">
                <img
                  src="/images/gym/cardio-equipment.jpg"
                  alt="Cardio Equipment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Cardio Zone
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  State-of-the-art treadmills, ellipticals, bikes, and rowing machines with personal entertainment screens.
                </p>
                <a href="#"
                  className="mt-4 inline-block text-primary font-medium hover:text-primary/80"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Strength Equipment */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <div className="h-48">
                <img
                  src="/images/gym/strength-equipment.jpg"
                  alt="Strength Equipment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Strength Training
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Complete selection of free weights, machines, and functional training equipment for all fitness levels.
                </p>
                <a href="#"
                  className="mt-4 inline-block text-primary font-medium hover:text-primary/80"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Group Studio */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <div className="h-48">
                <img
                  src="/images/gym/group-studio.jpg"
                  alt="Group Exercise Studio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Group Exercise Studio
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Spacious studio for Zumba, Yoga, HIIT, and other group classes with professional sound system.
                </p>
                <a href="#"
                  className="mt-4 inline-block text-primary font-medium hover:text-primary/80"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Recovery Area */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <div className="h-48">
                <img
                  src="/images/gym/recovery-area.jpg"
                  alt="Recovery Area"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Recovery & Wellness
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Sauna, steam room, and stretching areas to help you recover and prevent injury.
                </p>
                <a href="#"
                  className="mt-4 inline-block text-primary font-medium hover:text-primary/80"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <a
            href="/membership"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium text-lg"
          >
            Start Your Fitness Journey
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}