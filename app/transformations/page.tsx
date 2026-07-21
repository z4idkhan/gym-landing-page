"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { siteConfig } from '@/data/site-config';

export default function Transformations() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, {
  once: true,
  amount: 0.2,
});
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % siteConfig.transformations.length);
    }, 5000); // Change slide every 5 seconds
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isPlaying, siteConfig.transformations.length, currentIndex]);

  const pause = () => setIsPlaying(false);
  const play = () => setIsPlaying(true);

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
            Real Results, Real Stories
          </h2>
        </div>

        <div className="relative">
          {/* Transformation Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 items-center p-6">
              {/* Before Image */}
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg">
                <img
                  src={siteConfig.transformations[currentIndex].imageBefore}
                  alt={`${siteConfig.transformations[currentIndex].name} before`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* After Image */}
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg">
                <img
                  src={siteConfig.transformations[currentIndex].imageAfter}
                  alt={`${siteConfig.transformations[currentIndex].name} after`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {siteConfig.transformations[currentIndex].name}
                </h3>
                <div className="flex items-center mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`h-4 w-4 ${
                        star <= siteConfig.transformations[currentIndex].rating
                          ? 'text-primary'
                          : 'text-gray-300'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.218 4.324a1 1 0 001.168 0l4.032-2.322a1 1 0 00.508-.865A1 1 0 009.878 6.03l-3.466 3.646c-.194.245-.453.404-.732.404h-3.174c-.179 0-.35-.079-.481-.208l-1.32-3.683a1 1 0 00-.179-.446l-.584-2.075A1 1 0 004.56 2.86z"/>
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                    ({siteConfig.transformations[currentIndex].rating}/5)
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  “{siteConfig.transformations[currentIndex].text}”
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 px-5 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                >
                  Read Full Story
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {siteConfig.transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 bg-gray-300 rounded-full transition-colors duration-300 ${
                  currentIndex === index ? 'bg-primary w-6 h-6' : ''
                }`}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Play/Pause Button */}
          <div className="absolute top-4 right-4">
            <button
              onClick={() => (isPlaying ? pause() : play())}
              className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-5m0 0l7 5m-7-5v10"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10l.01 0M12 10l.01 0M16 10l.01 0"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}