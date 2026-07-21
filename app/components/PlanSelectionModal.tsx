'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { siteConfig } from '@/data/site-config';

interface PlanSelectionModalProps {
  plan: {
    id: string;
    name: string;
    price: number;
    period: string;
    pricePeriodText: string;
    features: string[];
    mostPopular?: boolean;
    qrCodeData?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export default function PlanSelectionModal({
  plan,
  isOpen,
  onClose,
}: PlanSelectionModalProps) {

  const [formState, setFormState] = useState({
    name: '',
    phone: '',
  });

  const [formStatus, setFormStatus] =
    useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const [errorMessage, setErrorMessage] = useState('');

  const ref = useRef<HTMLDivElement>(null);

  useInView(ref, {
    once: true,
    amount: 0.2,
  });


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrorMessage('');
  };


  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    setFormStatus('loading');


    try {

      const message =
`Name: ${formState.name}
Phone: ${formState.phone}
Plan: ${plan.name}

I want to choose this plan. Please confirm my booking and payment details.`;


      const whatsappUrl =
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;


      window.open(
        whatsappUrl,
        '_blank'
      );


      setFormState({
        name: '',
        phone: '',
      });


      setFormStatus('success');


      setTimeout(() => {
        onClose();
      }, 1500);


    } catch {

      setFormStatus('error');

      setErrorMessage(
        'Failed to send WhatsApp message. Please try again.'
      );

    }

  };


  if (!isOpen) {
    return null;
  }


  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >

      <motion.div
        ref={ref}
        initial={{
          scale: 0.9,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        className="relative w-full max-w-md max-h-[90vh] overflow-y-auto p-4 bg-gray-900 rounded-lg"
      >

        <div className="flex justify-between items-start mb-4">

          <h3 className="text-2xl font-bold text-white">
            Select {plan.name} Plan
          </h3>


          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>

        </div>


        <div className="border border-red-800/50 rounded-lg p-4">

          <h3 className="text-xl font-bold text-white">
            {plan.name}
          </h3>


          <div className="text-4xl text-red-400 font-bold mt-3">
            ${plan.price}
          </div>


          <p className="text-gray-400">
            {plan.pricePeriodText}
          </p>


          <div className="mt-4">

            {plan.features.map(
              (feature: string, index: number) => (

              <div
                key={index}
                className="text-gray-300 mb-2"
              >
                ✓ {feature}
              </div>

            ))}

          </div>

        </div>


        <form
          onSubmit={handleSubmit}
          className="space-y-4 mt-6"
        >

          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full px-4 py-2 rounded"
            required
          />


          <input
            type="tel"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full px-4 py-2 rounded"
            required
          />


          <button
            type="submit"
            disabled={formStatus === 'loading'}
            className="w-full bg-red-600 text-white py-3 rounded"
          >

            {
              formStatus === 'loading'
              ? 'Sending...'
              : 'Confirm Selection'
            }

          </button>


        </form>


        {
          formStatus === 'success' && (

            <div className="mt-4 p-3 bg-green-900 text-white rounded">
              Thank you! We'll contact you soon.
            </div>

          )
        }


        {
          formStatus === 'error' && (

            <div className="mt-4 p-3 bg-red-900 text-white rounded">
              {errorMessage}
            </div>

          )
        }


      </motion.div>

    </motion.div>

  );
}