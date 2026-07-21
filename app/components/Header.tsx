'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/data/site-config';

interface HeaderProps {
  config: typeof siteConfig;
}

export default function Header({ config }: HeaderProps) {
  const [scrollY, setScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrollY(scrollTop);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`transition-all duration-300 ${scrollY > 50 ? 'bg-gray-900/90 backdrop-blur-sm shadow-md' : 'bg-gray-900/50 backdrop-blur-sm'} fixed w-full top-0 left-0 z-50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between px-4 py-4">
          {/* Logo and Gym Name */}
          <div className="flex items-center space-x-3">
            {config.logo && (
              <Link href="/" className="flex-shrink-0">
                <img src={config.logo} alt={`${config.gymName} logo`} className="h-10 w-auto" />
              </Link>
            )}
            <Link href="/" className="text-xl font-bold text-red-200 hover:text-red-300 transition-colors">
              {config.gymName}
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6">
            <Link
              href="/"
              className={`text-gray-400 hover:text-red-300 transition-colors ${pathname === '/' ? 'font-medium text-red-200' : ''}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-gray-400 hover:text-red-300 transition-colors ${pathname === '/about' ? 'font-medium text-red-200' : ''}`}
            >
              About
            </Link>
            <Link
              href="/gym-tour"
              className={`text-gray-400 hover:text-red-300 transition-colors ${pathname === '/gym-tour' ? 'font-medium text-red-200' : ''}`}
            >
              Gym Tour
            </Link>
            <Link
              href="/membership"
              className={`text-gray-400 hover:text-red-300 transition-colors ${pathname === '/membership' ? 'font-medium text-red-200' : ''}`}
            >
              Membership Plans
            </Link>
            <Link

                  href="/membership"
                  className="text-gray-400 hover:text-red-300 transition-colors font-medium text-red-200"
                >
                  Membership Plans
                </Link>
                <Link
                  href="/trainers"
                  className="text-gray-400 hover:text-red-300 transition-colors"
                >
                  Trainers
                </Link>
                <Link
                  href="/schedule"
                  className="text-gray-400 hover:text-red-300 transition-colors"
                >
                  Class Schedule
                </Link>
                <Link
                  href="/transformations"
                  className="text-gray-400 hover:text-red-300 transition-colors"
                >
                  Transformations
                </Link>
                <Link
                  href="/location"
                  className="text-gray-400 hover:text-red-300 transition-colors"
                >
                  Location
                </Link>
              </nav>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3">
                {/* WhatsApp Button - always visible on mobile, hidden on desktop */}
                <button
                  onClick={() => {
                    window.open(`https://wa.me/${config.whatsappNumber}`, '_blank');
                  }}
                  className={`${scrollY > 50 ? 'hidden' : 'block'} md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 transition-colors`}
                  aria-label="Chat on WhatsApp"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45z"/>
                  </svg>
                </button>

                {/* Book Trial Button */}
                <a
                  href="#location"
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors font-medium"
                >
                  Book Free Trial
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </header>
      );
    }