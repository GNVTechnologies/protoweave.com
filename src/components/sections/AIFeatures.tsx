'use client'

import { motion } from "framer-motion"
import { Brain, Code, FileText, Target, Search, Zap } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Metadata and Asset Operations",
    description: "Automate asset classification, tagging, and enrichment so teams spend less time managing libraries manually."
  },
  {
    icon: Code,
    title: "Design-System to AEM Delivery",
    description: "Turn approved designs, prompts, and patterns into production-ready AEM components aligned to your implementation standards."
  },
  {
    icon: FileText,
    title: "Content Operations and QA",
    description: "Accelerate content creation, updates, and review cycles with governance-aware automation and repeatable QA checks."
  },
  {
    icon: Search,
    title: "SEO and Content Insights",
    description: "Surface optimization opportunities, content gaps, and quality signals earlier in the publishing workflow."
  },
  {
    icon: Target,
    title: "Personalization Workflows",
    description: "Support targeted experience delivery with reusable patterns for segmentation, testing, and experience optimization."
  },
  {
    icon: Zap,
    title: "Pipeline and Team Integration",
    description: "Fit ProtoWeave into existing delivery pipelines, implementation workflows, and cross-functional operating models."
  }
]

export default function AIFeatures() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How ProtoWeave Fits Enterprise Delivery
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            ProtoWeave supports the operational work behind modern AEM programs, from component generation to governed content workflows and rollout planning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-purple-50 group-hover:to-pink-50 dark:group-hover:from-purple-900/20 dark:group-hover:to-pink-900/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
