'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { siteConfig } from '@/data/site-config';

interface LocationContactProps {
  config: typeof siteConfig;
}

export default function LocationContact({ config }: LocationContactProps) {
  const [formState, setFormState] = useState<{ name: string; phone: string; preferredTime: string }>({
    name: '',
    phone: '',
    preferredTime: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    setErrorMessage('');

    // Send WhatsApp message
    try {
      const message = `Name: ${formState.name}\nPhone: ${formState.phone}\nPreferred Time: ${formState.preferredTime}\n\nI would further Like to more about your gym`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');

      // Reset form
      setFormState({ name: '', phone: '', preferredTime: '' });

      // Set success status
      setFormStatus('success');

      // Reset after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    } catch (err) {
      setFormStatus('error');
      setErrorMessage('Failed to send WhatsApp message. Please try again.');
    }
  };

  return (
    <section id="location" className="py-20 bg-gray-900 dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2
            ref={ref}
            className={`${isInView ? 'animate-fade-in' : ''} mb-6 text-4xl font-bold text-center text-red-200`}
          >
            Visit Us or Get in Touch
          </h2>
          <p className="max-w-xl mx-auto text-gray-400 dark:text-gray-400">
            We're here to help you start your fitness journey. Visit our gym or send us a message.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Map Section */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Google Maps Location"
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              src={config.googleMapEmbedUrl}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-300 mb-1">
                  Preferred Time to Visit
                </label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formState.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (6AM - 9AM)</option>
                  <option value="afternoon">Afternoon (12PM - 4PM)</option>
                  <option value="evening">Evening (5PM - 8PM)</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={formStatus === 'loading'}
                className="w-full flex items-center justify-center px-5 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors disabled:opacity-50"
              >
                {formStatus === 'loading' && (
                  <svg className="mr-2 h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                )}
                {formStatus === 'loading' ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>

            {/* Status Messages */}
            {formStatus === 'success' && (
              <div className="p-4 bg-red-900 border-l-4 border-red-500 text-red-200">
                Thank you! We'll get back to you soon.
              </div>
            )}
            {formStatus === 'error' && (
              <div className="p-4 bg-red-900 border-l-4 border-red-500 text-red-200">
                {errorMessage}
              </div>
            )}
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">
              Get in Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 00-2 2v1a0 00l0-44m0 0L23 5m0 0l-2 2m2-2l2 2M3 9h18M3 15h18M3 21h18"/>
                </svg>
                <span>
                  <a href={`tel:${config.phone}`} className="hover:text-red-300 transition-colors">
                    {config.phone}
                  </a>
                </span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l0 12M3 10l0 12M3 12l0 12M3 14l0 12M3 16l0 12M3 18l0 12"/>
                </svg>
                <span>
                  <a href={`mailto:${config.email}`} className="hover:text-red-300 transition-colors">
                    {config.email}
                  </a>
                </span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.1 0-2 .9-2 2s1 2 2 2 2-.9-2-.9-2-2z"/>
                </svg>
                <span>
                  <a
                    href={`https://wa.me/${config.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-300 transition-colors"
                  >
                    WhatsApp: {config.whatsappNumber.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3')}
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">
              Our Location
            </h3>
            <p className="text-gray-300 dark:text-gray-300">
              {config.address}
            </p>
            <p className="mt-2 text-xs text-gray-400 dark:text-gray-400">
              Open daily from 5:00 AM to 10:00 PM<br/>
              24/7 access available for annual members
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}