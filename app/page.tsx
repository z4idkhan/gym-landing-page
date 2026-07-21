"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { siteConfig } from '@/data/site-config';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import MembershipPlans from './components/MembershipPlans';
import Facilities from './components/Facilities';
import Trainers from './components/Trainers';
import ClassSchedule from './components/ClassSchedule';
import Transformations from './components/Transformations';
import LocationContact from './components/LocationContact';

import QuadVirtual from './components/QuadVirtual';
import IronInventory from './components/IronInventory';
import GymCulture from './components/GymCulture';
import WallOfFame from './components/WallOfFame';

export default function Home() {
  const titleRef = useRef<HTMLDivElement>(null);

  const featureRef = useRef<HTMLDivElement>(null);

  const titleInView = useInView(titleRef, {
    once: true,
    amount: 0.2
  });

  const featureInView = useInView(featureRef, {
    once: true,
    amount: 0.2
  });
  return (
    <>
      {/* Hero Section */}
      <Hero config={siteConfig} />

      {/* Membership & Passes Section */}
      <section id="membership" className="py-20 bg-gray-900 dark:bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            ref={titleRef}
            className={`mb-10 text-4xl font-bold text-center text-white dark:text-white ${
              titleInView ? 'animate-fade-in' : ''
            }`}
          >
            Membership & Tourist Passes
          </h2>
          <p className="max-w-2xl mx-auto text-center text-gray-300 dark:text-gray-300 mb-12">
            No contracts. No initiation fees. Just pure access to legendary iron.
          </p>

          {/* Updated Membership Plans Component */}
          <MembershipPlans config={siteConfig} />
        </div>
      </section>

      {/* QuadVirtual Online Classes Section */}
      <QuadVirtual config={siteConfig} />

      {/* Iron Inventory (Equipment Proof) Section */}
      <IronInventory config={siteConfig} />

      {/* Gym Atmosphere & Un-Rules Section */}
      <GymCulture config={siteConfig} />

      {/* Facilities Section (Updated for hardcore equipment) */}
      <section id="facilities" className="py-20 bg-gray-900 dark:bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="mb-10 text-4xl font-bold text-center text-white dark:text-white"
          >
            Our Iron Arsenal
          </h2>
          <p className="max-w-2xl mx-auto text-center text-gray-300 dark:text-gray-300 mb-12">
            Where other gyms have machines, we have monuments to strength.
          </p>

          {/* Facilities Component */}
          <Facilities config={siteConfig} />
        </div>
      </section>

      {/* Wall of Fame Section */}
      <WallOfFame config={siteConfig} />

      {/* Trainers Section */}
      <section id="trainers" className="py-20 bg-gray-900 dark:bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="mb-10 text-4xl font-bold text-center text-white dark:text-white"
          >
            Legends Who Forge Legends
          </h2>
          <p className="max-w-2xl mx-auto text-center text-gray-300 dark:text-gray-300 mb-12">
            Learn from those who have lived the iron life.
          </p>

          {/* Trainers Component */}
          <Trainers config={siteConfig} />
        </div>
      </section>

      {/* Transformations Section */}
      <Transformations config={siteConfig} />

      {/* Location, Map, Hours & Social Proof Section */}
      <LocationContact config={siteConfig} />
    </>
  );
}