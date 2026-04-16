'use client'

import { Bot, Code2, Zap, RefreshCcw } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    name: "AI-Powered Generation",
    description: "Leverage advanced AI to convert your designs into components automatically.",
    icon: Bot
  },
  {
    name: "AEM Integration",
    description: "Seamlessly integrate generated components with Adobe Experience Manager using best practices.",
    icon: Code2
  },
  {
    name: "Lightning Fast",
    description: "Generate components in seconds, not hours. Speed up your development workflow dramatically.",
    icon: Zap
  },
  {
    name: "Continuous Updates",
    description: "Keep your components in sync with design changes through automated regeneration.",
    icon: RefreshCcw
  }
]

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features for Modern Development
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to streamline your component development workflow
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4"
              >
                <feature.icon className="h-6 w-6 text-purple-600 dark:text-purple-300" />
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {feature.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
