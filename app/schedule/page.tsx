"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { siteConfig } from '@/data/site-config';

export default function Schedule() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, {
  once: true,
  amount: 0.2,
});

  const mapRef = useRef<HTMLDivElement>(null);
const mapInView = useInView(mapRef, {
  once: true,
  amount: 0.2,
});

  const hoursRef = useRef<HTMLDivElement>(null);
const hoursInView = useInView(hoursRef, {
  once: true,
  amount: 0.2,
});

  // State for day tabs
  const [activeDay, setActiveDay] = useState<string>('Monday');

  // State for class hover popups
  const [hoveredClassId, setHoveredClassId] = useState<string | null>(null);

  // Days of the week
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // Class data - in a real app, this would come from a CMS or API
  const classesByDay: Record<string, Array<any>> = {
    Monday: [
      {
        id: 'mon1',
        name: 'Powerlifting Basics',
        time: '6:00 AM - 7:00 AM',
        instructor: 'Iron Mike Tyson',
        day: 'Monday',
        description: 'Foundational powerlifting techniques focusing on squat, bench, and deadlift form.'
      },
      {
        id: 'mon2',
        name: 'Olympic Lifting Technique',
        time: '12:00 PM - 1:00 PM',
        instructor: 'Diesel Dave',
        day: 'Monday',
        description: 'Technical work on clean & jerk and snatch movements with progressive loading.'
      },
      {
        id: 'mon3',
        name: 'Hypertrophy Hash',
        time: '6:00 PM - 7:30 PM',
        instructor: 'Linda Iron',
        day: 'Monday',
        description: 'High-volume bodybuilding workout designed to maximize muscle growth and pump.'
      }
    ],
    Tuesday: [
      {
        id: 'tue1',
        name: 'Strength & Conditioning',
        time: '5:30 AM - 6:30 AM',
        instructor: 'Iron Mike Tyson',
        day: 'Tuesday',
        description: 'Combined strength training and conditioning for overall athletic development.'
      },
      {
        id: 'tue2',
        name: 'Bodybuilding Basics',
        time: '11:00 AM - 12:00 PM',
        instructor: 'Diesel Dave',
        day: 'Tuesday',
        description: 'Introduction to bodybuilding principles, exercise selection, and mind-muscle connection.'
      },
      {
        id: 'tue3',
        name: 'Powerlifting Open Gym',
        time: '7:00 PM - 9:00 PM',
        instructor: 'Linda Iron',
        day: 'Tuesday',
        description: 'Open gym time for powerlifting practice with coaches available for form checks.'
      }
    ],
    Wednesday: [
      {
        id: 'wed1',
        name: 'Technical Weightlifting',
        time: '7:00 AM - 8:00 AM',
        instructor: 'Diesel Dave',
        day: 'Wednesday',
        description: 'Focus on Olympic lifting technique with barbell complexes and skill transfer exercises.'
      },
      {
        id: 'wed2',
        name: 'Strongman Basics',
        time: '1:00 PM - 2:00 PM',
        instructor: 'Iron Mike Tyson',
        day: 'Wednesday',
        description: 'Introduction to strongman implements including farmer\'s log press and atlas stone work.'
      },
      {
        id: 'wed3',
        name: 'Bodybuilding Split Routine',
        time: '5:00 PM - 6:30 PM',
        instructor: 'Linda Iron',
        day: 'Wednesday',
        description: 'Push/Pull/Legs split focusing on muscle group specialization and progressive overload.'
      }
    ],
    Thursday: [
      {
        id: 'thu1',
        name: 'Powerbuilding Session',
        time: '6:00 AM - 7:30 AM',
        instructor: 'Diesel Dave',
        day: 'Thursday',
        description: 'Hybrid powerlifting/bodybuilding workout combining strength and hypertrophy work.'
      },
      {
        id: 'thu2',
        name: 'Olympic Lifting Complexes',
        time: '12:30 PM - 1:30 PM',
        instructor: 'Linda Iron',
        day: 'Thursday',
        description: 'Technical complexes for clean & jerk and snatch to improve efficiency and power.'
      },
      {
        id: 'thu3',
        name: 'Hypertrophy Circuit',
        time: '6:00 PM - 7:30 PM',
        instructor: 'Iron Mike Tyson',
        day: 'Thursday',
        description: 'Circuit-style bodybuilding workout with short rest periods for maximum pump and burn.'
      }
    ],
    Friday: [
      {
        id: 'fri1',
        name: 'Freaky Friday Strongman',
        time: '7:00 AM - 8:30 AM',
        instructor: 'Diesel Dave',
        day: 'Friday',
        description: 'Fun strongman workout with varying implements atlas stones, yoke carries and tire flips.'
      },
      {
        id: 'fri2',
        name: 'Powerlifting Technique',
        time: '11:00 AM - 12:00 PM',
        instructor: 'Iron Mike Tyson',
        day: 'Friday',
        description: 'Technical focus on one of the big three lifts rotating weekly between squat bench and deadlift.'
      },
      {
        id: 'fri3',
        name: 'Bodybuilding Pump Session',
        time: '5:00 PM - 6:30 PM',
        instructor: 'Linda Iron',
        day: 'Friday',
        description: 'High-rep bodybuilding workout designed to maximize muscle pump and vascularity.'
      }
    ],
    Saturday: [
      {
        id: 'sat1',
        name: 'Weekend Power Session',
        time: '8:00 AM - 10:00 AM',
        instructor: 'Iron Mike Tyson',
        day: 'Saturday',
        description: 'Extended powerlifting session with heavy singles doubles and accessory work.'
      },
      {
        id: 'sat2',
        name: 'Olympic Lifting Workshop',
        time: '11:00 AM - 1:00 PM',
        instructor: 'Diesel Dave',
        day: 'Saturday',
        description: 'In-depth workshop on Olympic lifting technique with video analysis and coach feedback.'
      },
      {
        id: 'sat3',
        name: 'Bodybuilding Pose Practice',
        time: '2:00 PM - 3:30 PM',
        instructor: 'Linda Iron',
        day: 'Saturday',
        description: 'Posing practice and stage presentation tips for bodybuilders and physique competitors.'
      }
    ],
    Sunday: [
      {
        id: 'sun1',
        name: 'Active Recovery Mobility',
        time: '9:00 AM - 10:00 AM',
        instructor: 'Diesel Dave',
        day: 'Sunday',
        description: 'Low-intensity mobility and flexibility work to aid recovery and prevent injury.'
      },
      {
        id: 'sun2',
        name: 'Light Strength Session',
        time: '11:00 AM - 12:00 PM',
        instructor: 'Iron Mike Tyson',
        day: 'Sunday',
        description: 'Moderate-intensity strength workout focusing on technique and movement quality.'
      },
      {
        id: 'sun3',
        name: 'Bodybuilding Light Pump',
        time: '2:00 PM - 3:00 PM',
        instructor: 'Linda Iron',
        day: 'Sunday',
        description: 'Light pump workout to maintain muscle fullness without excessive fatigue before the week.'
      }
    ]
  };

  // Get classes for active day
  const classesForDay = classesByDay[activeDay] || [];

  return (
    <section className="py-20 bg-gray-900 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2
            ref={titleRef}
            className={`mb-6 text-4xl font-bold text-center text-red-200 ${
              titleInView ? 'animate-fade-in' : ''
            }`}
          >
            Schedule & Facility Access
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 dark:text-gray-400">
            Plan your training around our world-class facility access and expert-led classes.
          </p>
        </div>

        {/* Operational Hours Section */}
        <div className="mb-16">
          <div ref={hoursRef} className={`mb-8 text-3xl font-bold text-center text-red-200 ${
            hoursInView ? 'animate-fade-in' : ''
          }`}>
            Facility Access & Hours
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Regular Hours */}
            <div className="border border-red-800/50 rounded-lg p-6 bg-red-900/20 hover:bg-red-900/30 transition-colors">
              <h3 className="mb-4 text-xl font-semibold text-red-200">Regular Hours</h3>
              <p className="mb-2 text-gray-300">Monday - Friday:</p>
              <p className="font-semibold text-white">5:00 AM - 10:00 PM</p>
              <p className="mb-2 text-gray-300">Saturday - Sunday:</p>
              <p className="font-semibold text-white">7:00 AM - 8:00 PM</p>
            </div>

            {/* Holiday Hours */}
            <div className="border border-red-800/50 rounded-lg p-6 bg-red-900/20 hover:bg-red-900/30 transition-colors">
              <h3 className="mb-4 text-xl font-semibold text-red-200">Holiday Hours</h3>
              <p className="mb-2 text-gray-300">Major Holidays:</p>
              <p className="font-semibold text-white">8:00 AM - 6:00 PM</p>
              <p className="mt-2 text-sm text-gray-400">
                (New Year's Day, Memorial Day, Independence Day, Labor Day, Thanksgiving, Thanksgiving, Christmas
              </p>
            </div>

            {/* Membership Access */}
            <div className="border border-red-800/50 rounded-lg p-6 bg-red-900/20 hover:bg-red-900/30 transition-colors">
              <h3 className="mb-4 text-xl font-semibold text-red-200">Access Levels</h3>
              <p className="mb-2 text-gray-300">Daily Pass:</p>
              <p className="font-semibold text-white">Full access during purchase date</p>
              <p className="mb-2 text-gray-300">Monthly/Annual:</p>
              <p className="font-semibold text-white">24/7 facility access</p>
              <p className="mt-2 text-sm text-gray-400">
                (Holiday hours still apply for staffed hours)
              </p>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mb-16">
          <div ref={mapRef} className={`mb-6 text-3xl font-bold text-center text-red-200 ${
            mapInView ? 'animate-fade-in' : ''
          }`}>
            Find Us
          </div>

          <div className="border border-red-800/50 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Google Maps Location"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              src={siteConfig.googleMapEmbedUrl}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-400 dark:text-gray-400">
              {siteConfig.address}
            </p>
            <p className="mt-2 text-gray-400 dark:text-gray-400">
              <a href={`tel:${siteConfig.phone}`} className="hover:text-red-300 transition-colors">
                {siteConfig.phone}
              </a>
              &nbsp;|&nbsp;
              <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-red-300 transition-colors">
                WhatsApp: {siteConfig.whatsappNumber.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3')}
              </a>
            </p>
          </div>
        </div>

        {/* Class Schedule Section */}
        <div className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-center text-red-200">
            Weekly Class Schedule
          </h2>
          <p className="max-w-xl mx-auto text-gray-400 dark:text-gray-400">
            Join our expert-led classes designed for serious strength athletes and physique and strength development.
          </p>

          {/* Day Tabs */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-4 py-2 bg-transparent border border-red-800/50 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeDay === day
                    ? 'bg-red-800 text-red-200'
                    : 'hover:bg-red-900/20 hover:text-red-300'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Classes Grid */}
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
            {classesForDay.map((cls) => (
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
                  className="cursor-pointer bg-red-900/20 dark:bg-red-900/30 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 hover:border-red-600/50"
                >
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white">{cls.name}</h3>
                      <span className="text-sm text-red-200">{cls.time}</span>
                    </div>
                    <p className="text-sm text-gray-400 dark:text-gray-400 mb-2">
                      With {cls.instructor}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {cls.day}
                    </p>
                  </div>

                  {/* Popup on hover/tap */}
                  {hoveredClassId === cls.id && (
                    <div className="absolute left-0 top-full mt-2 w-64 bg-red-900/50 dark:bg-red-900/60 rounded-lg shadow-lg p-4 z-50 border border-red-800/50">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-white">{cls.name}</h3>
                        <button
                          onClick={() => setHoveredClassId(null)}
                          className="text-gray-400 hover:text-red-300"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                          </svg>
                        </button>
                      </div>
                      <p className="text-gray-300 dark:text-gray-300 mb-3">
                        {cls.description}
                      </p>
                      <div className="mt-2 flex items-center">
                        <span className="mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"/>
                          </svg>
                        </span>
                        <span className="text-sm font-medium text-white">{cls.instructor}</span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty state for days with no classes */}
          {classesForDay.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 dark:text-gray-400">
                No classes scheduled for {activeDay}. Check our other days for available training sessions.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}