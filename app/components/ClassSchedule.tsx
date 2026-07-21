'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { siteConfig } from '@/data/site-config';

interface ClassScheduleProps {
  config: typeof siteConfig;
}

export default function ClassSchedule({ config }: ClassScheduleProps) {
  const [activeDay, setActiveDay] = useState<string>('All Days');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
  once: true,
  amount: 0.2,
});

  // Get unique days
  const days = ['All Days', ...Array.from(new Set(config.classSchedule.map(c => c.day)))];

  // Filter classes by selected day
  const filteredClasses =
    activeDay === 'All Days'
      ? config.classSchedule
      : config.classSchedule.filter((cls) => cls.day === activeDay);

  // State for hovered class (for popup)
  const [hoveredClassId, setHoveredClassId] = useState<string | null>(null);

  return (
    <section id="schedule" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2
            ref={ref}
            className={`mb-6 text-3xl font-bold text-center text-gray-900 dark:text-gray-100 ${
              isInView ? 'animate-fade-in' : ''
            }`}
          >
            Weekly Class Schedule
          </h2>
          <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-300">
            Join our diverse range of group fitness classes suitable for all levels.
          </p>
        </div>

        {/* Day Tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-4 py-2 bg-transparent border border-gray-300 rounded-full text-sm font-medium transition-all duration-200 ${
                activeDay === day
                  ? 'bg-primary text-white'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Classes Grid */}
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
          {filteredClasses.map((cls) => (
            <motion.div
              key={cls.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * parseInt(cls.id.replace(/\D/g, '')) }}
              className="group relative"
            >
              <div
                onMouseEnter={() => setHoveredClassId(cls.id)}
                onMouseLeave={() => setHoveredClassId(null)}
                onTouchStart={() => setHoveredClassId(cls.id)}
                onTouchEnd={() => setHoveredClassId(null)}
                className="cursor-pointer bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">{cls.name}</h3>
                    <span className="text-sm text-primary">{cls.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    With {cls.instructor}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {cls.day}
                  </p>
                </div>

                {/* Popup on hover/tap */}
                {hoveredClassId === cls.id && (
                  <div className="absolute left-0 top-full mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-50">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">{cls.name}</h3>
                      <button
                        onClick={() => setHoveredClassId(null)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                      </button>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {cls.description}
                    </p>
                    <div className="mt-3 flex items-center">
                      <span className="mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"/>
                        </svg>
                      </span>
                      <span className="text-sm font-medium">{cls.instructor}</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}