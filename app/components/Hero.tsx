'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/site-config';

export default function Hero({ config }: { config: typeof siteConfig }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.1 });

  // Trigger animation when component mounts (for initial load)
  useEffect(() => {
    // We can also trigger animation on mount if needed
  }, []);

  const faintVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return ( <section id="hero" className="relative pt-[160px] pb-24" > 
  {/* Background Video */} 
  {/* <div className="absolute inset-0 -z-20">
     <video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover border-4 border-green-500"
>
  <source src="/videos/gym-background.mp4" type="video/mp4" />
</video>
  </div>  */}
  {/* Background shape (now above video) */}
<div className="absolute inset-0 -z-10">
  <div className="relative h-full w-full">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0"
          >
            <path
              fill={config.themeColor}
              fillOpacity="0.1"
              d="M0,160L48,181C96,203,192,246,288,234.7C384,224,480,160,576,149.3C672,139,768,182,864,197.3C960,213,1056,200,1152,178.7C1248,157,1344,128,1440,128L1440 320L0 320Z"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Video Background Container */}
          <div className="absolute inset-0 -z-10">
            <div className="relative h-full w-full">
              {/* Background video placeholder - in production, this would be a real video */}
              <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black/75">
                {/* Video overlay for dark, gritty feel */}
                <div className="absolute inset-0 bg-black/40"></div>
                {/* Animated grain/noise effect for gritty texture */}
                <div className="absolute inset-0 bg-[url('/static/noise.png')] [background-size:200%_200%] [opacity:0.15] pointer-none" aria-hidden="true"></div>
              </div>
            </div>
          </div>

          {/* Content Overlay */}
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-start">
              {/* Text Content */}
              <div className="w-full lg:w-1/2 flex-1 flex-col items-start lg:items-start text-center lg:text-left space-y-6 lg:space-y-8">
                <motion.div
                  ref={heroRef}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-100px' }}
                  variants={faintVariants}
                  className="mb-6 lg:mb-8"
                >
                  <h1 className="text-5xl font-bold text-white tracking-tighter lg:text-6xl">
                    Quads Gym
                  </h1>
                  <p className="mt-4 text-lg text-gray-200 max-w-xl">
                    No Fluff. Just Results since 1976.
                  </p>
                </motion.div>

                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-100px' }}
                  variants={faintVariants}
                  className="mb-6 lg:mb-8"
                >
                  <p className="text-lg text-gray-300 max-w-xl">
                    Where chalk flies, weights bend, and legends are forged. Experience hardcore training that delivers real results - no machines, no mirrors, no mercy.
                  </p>
                </motion.p>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-100px' }}
                  variants={faintVariants}
                >
                  <div className="flex flex-wrap gap-4 lg:gap-6">
                    {/* Buy a Pass Button */}
                    <Link
                      href="/membership"
                      className="flex items-center gap-3 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover:shadow-xl border border-red-500 hover:border-red-600"
                    >
                      Buy a Pass
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l4 4m0 0l-4 4m4-4H3"/>
                      </svg>
                    </Link>

                    {/* Join Virtual Classes Button */}
                    <Link
                      href="/quadvirtual"
                      className="flex items-center gap-3 px-6 py-3 border border-red-600 text-red-500 hover:bg-red-50 hover:text-red-700 hover:border-red-700 font-medium rounded-lg transition-all duration-200 transform hover:-translate-y-1"
                    >
                      Join Virtual Classes
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6m6 0 7-5a5 5 0 11-7 5v1"/>
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Image/Video Placeholder */}
              <div className="w-full lg:w-1/2 flex-1 mt-10 lg:mt-0 lg:ml-16 relative">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                  className="relative"
                >
                  {/* Video placeholder with play button overlay */}
                  <div className="relative w-full max-w-sm mx-auto lg:max-w-md aspect-[9/16] rounded-xl overflow-hidden bg-gray-900 shadow-2xl">
                    {/* In production, this would be a video element */}
                    <video
  autoPlay
  loop
  playsInline
  controls={false}
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/videos/gym-background.mp4" type="video/mp4" />
</video>
                    {/* Overlay for dark, gritty feel */}
                    <div className="absolute inset-0 bg-black/30"></div>
                  </div>

                  {/* Stats overlay */}
                  <div className="absolute bottom-4 left-4 space-y-3">
                    <div className="flex items-center space-x-3 bg-red-600/20 backdrop-blur-sm rounded-lg p-3 border border-red-500/30">
                      <div className="flesx-shrink-0">
                        <div className="w-10 h-10 bg-red-600/30 rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c4.216 316 9 16.115 5 9.883 5 12.23 2.097 12 5-.23 0-.43-.086-.61-.24l-2-2C14.07 8.79 13 7.58 13 6V4a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1h2v1.5a2.5 2.5 0 015 0V6a1 1 0 011-1h3a1 1 0 011 1v3.09l-.39.39a1 1 0 01-1.41 0l-.41-.41a1 1 0 00-1.41 0l-.41.41A1.007 1.007 0 005 11v2a2 2 0 002 2h10a2 2 0 002-2z"/>
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-red-200">200+</h3>
                        <p className="text-xs text-red-300">Max Weight (lbs)</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 bg-red-600/20 backdrop-blur-sm rounded-lg p-3 border border-red-500/30 mt-2">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-red-600/30 rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c4 0 6 2 6 4v1a1 1 0 001 1h2a1 1 0 001-1V9a1 1 0 00-1-1h-1V7a3 3 0 10-6 0v2a1 1 0 001 1h1a1 1 0 001 1z"/>
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-red-200">10+</h3>
                        <p className="text-xs text-red-300">Deadlift Platforms</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 bg-red-600/20 backdrop-blur-sm rounded-lg p-3 border border-red-500/30 mt-2">
                      <div className="flesx-shrink-0">
                        <div className="w-10 h-10 bg-red-600/30 rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c4 0 6 2 6 4v1a1 1 0 001 1h2a1 1 0 001-1V9a1 1 0 00-1-1h-1V7a3 3 0 10-6 0v2a1 1 0 001 1h1a1 1 0 001 1z"/>
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-red-200">24/7</h3>
                        <p className="text-xs text-red-300">Access</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}