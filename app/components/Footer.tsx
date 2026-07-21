'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { siteConfig } from '@/data/site-config';

export default function Footer({ config }: { config: typeof siteConfig }) {
  const ref = useRef<HTMLDivElement>(null);
const isInView = useInView(ref, {
  once: true,
  amount: 0.2,
});

  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">
              {config.gymName}
            </h3>
            <p className="mb-4 text-gray-400">
              Where iron meets intention and weakness leaves the building.
              Home of hardcore training since 1976.
            </p>
            <div className="flex space-x-4">
              {config.socialLinks.facebook && (
                <a
                  href={config.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-300 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 00-1-1h-2v-2a1 1 0 001-1h6a1 1 0 001 1v2z"/>
                  </svg>
                </a>
              )}
              {config.socialLinks.instagram && (
                <a
                  href={config.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-300 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v16a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11.37A4 4 0 1112.63 8 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
              )}
              {config.socialLinks.youtube && (
                <a
                  href={config.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-300 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 15l5-5m0 0l-5-5m5 5H9a2 2 0 00-2-2V6a2 2 0 002 2h5v5z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-red-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-red-300 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/gym-tour" className="hover:text-red-300 transition-colors">
                  Gym Tour
                </Link>
              </li>
              <li>
                <Link href="/membership" className="hover:text-red-300 transition-colors">
                  Membership Plans
                </Link>
              </li>
              <li>
                <Link href="/trainers" className="hover:text-red-300 transition-colors">
                  Trainers
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="hover:text-red-300 transition-colors">
                  Class Schedule
                </Link>
              </li>
              <li>
                <Link href="/transformations" className="hover:text-red-300 transition-colors">
                  Transformations
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-red-300 transition-colors">
                  Location & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">Contact Us</h3>
            <p className="mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 00-2 2v1l2 4 2 2 2 4l2-2 2-4 2-2V7a2 2 0 00-2-2h-2zM9 17l2-2 2 2 2-2 6 6-6-6-2-2-2-2-2-2z"/>
              </svg>
              <span className="text-gray-400">{config.address}</span>
            </p>
            <p className="mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2h-2l-2-2-2-2H5a2 2 0 01-2-2V5z"/>
              </svg>
              <span>
                <a href={`tel:${config.phone}`} className="hover:text-red-300 transition-colors">
                  {config.phone}
                </a>
              </span>
            </p>
            <p className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l0 12M3 10l0 12M3 12l0 12M3 14l0 12M3 16l0 12M3 18l0 12"/>
              </svg>
              <span>
                <a href={`mailto:${config.email}`} className="hover:text-red-300 transition-colors">
                  {config.email}
                </a>
              </span>
            </p>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">Hours of Operation</h3>
            <p className="mb-2 text-gray-400">Monday - Friday: 5:00 AM - 10:00 PM</p>
            <p className="mb-2 text-gray-400">Saturday - Sunday: 7:00 AM - 8:00 PM</p>
            <p className="mb-2 text-gray-400">Holidays: 8:00 AM - 6:00 PM</p>
            <p className="mt-4 text-xs text-gray-500">
              24/7 access available for annual members
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {config.gymName}. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-red-300 transition-colors">
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-red-300 transition-colors">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}