'use client';

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { siteConfig } from "@/data/site-config";
import PlanSelectionModal from "../components/PlanSelectionModal";

export default function Membership() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  const titleInView = useInView(titleRef, {
    once: true,
    amount: 0.2,
  });

  const [selectedPlan, setSelectedPlan] = useState<typeof siteConfig.membershipPlans[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectPlan = (plan: typeof siteConfig.membershipPlans[0]) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  return (
    <>
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-16 text-center">
            <h2
              ref={titleRef}
              className={`mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100 ${
                titleInView ? "animate-fade-in" : ""
              }`}
            >
              Choose Your Perfect Membership Plan
            </h2>

            <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-300">
              Flexible options designed to fit your lifestyle and fitness goals.
            </p>
          </div>


          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">

            {siteConfig.membershipPlans.map((plan, index) => (

              <motion.div
                key={plan.id}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group"
              >

                <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:border-gray-700">

                  <div className="p-6">

                    <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
                      {plan.name}
                    </h3>


                    {plan.mostPopular && (
                      <span className="inline-block mb-3 px-3 py-1 bg-primary text-xs font-semibold uppercase rounded-full">
                        Most Popular
                      </span>
                    )}


                    <p className="mb-5 text-2xl font-extrabold text-primary">
                      ₹{plan.price}
                      <span className="text-xs">
                        {" "}
                        / {plan.name.toLowerCase()}
                      </span>
                    </p>


                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">

                      {plan.features.map(
                        (feature: string, index: number) => (

                          <li
                            key={index}
                            className="flex items-center"
                          >

                            <svg
                              className="mr-2 h-4 w-4 text-primary"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>

                            <span>{feature}</span>

                          </li>

                        )
                      )}

                    </ul>


                    <div className="mt-6">

                      <button
                        onClick={() => handleSelectPlan(plan)}
                        className="w-full flex items-center justify-center px-5 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                      >
                        Get Started

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-2 h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 5l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>

                      </button>

                    </div>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>
      </section>

      {/* Plan Selection Modal */}
      {selectedPlan && isModalOpen && (
        <PlanSelectionModal
          plan={selectedPlan}
          isOpen={isModalOpen}
          onClose={handleModalClose}
        />
      )}
    </>
  );
}