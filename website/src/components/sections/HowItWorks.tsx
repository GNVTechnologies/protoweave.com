'use client'

import Image from "next/image"
import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Connect Your Creativity",
    description: "Link your designs and assets to get started.",
    image: "/images/connect-design.svg"
  },
  {
    number: "02",
    title: "Configure Settings",
    description: "Customize the settings to suite your vision.",
    image: "/images/configure-settings.svg"
  },
  {
    number: "03",
    title: "Generate Components",
    description: "Review and Use ProtoWeave delivered components.",
    image: "/images/generate-components.svg"
  }
]

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How ProtoWeave Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Three simple steps to transform your designs into AEM components
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div 
              key={step.number} 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm h-full flex flex-col"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span 
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="inline-block text-4xl font-bold text-purple-600 mb-4"
                >
                  {step.number}
                </motion.span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {step.description}
                </p>
                <motion.div 
                  className="relative h-48 w-full mt-auto"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </motion.div>
              {step.number !== "03" && (
                <motion.div 
                  className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                >
                  <div className="w-4 h-4 rotate-45 border-t-2 border-r-2 border-purple-600" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
