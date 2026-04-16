'use client'

import { motion } from "framer-motion"
import { Brain, Code, FileText, Target, Search, Zap } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Asset Classification & Tagging",
    description: "AI-backed metadata generation with intelligent semantic understanding for comprehensive content organization."
  },
  {
    icon: Code,
    title: "Design to AEM Components",
    description: "Generate production-ready AEM components from Figma designs, images, or prompts following Adobe best practices."
  },
  {
    icon: FileText,
    title: "Automated Content Management",
    description: "Intelligent content creation, updates, and QA with automated lifecycle management and brand governance."
  },
  {
    icon: Search,
    title: "SEO & Content Insights",
    description: "Real-time SEO optimization with content insights and automated governance for maximum discoverability."
  },
  {
    icon: Target,
    title: "Real-time Personalization",
    description: "AI-assisted personalization that adapts experiences based on user behavior across any platform."
  },
  {
    icon: Zap,
    title: "Pipeline Integration",
    description: "Seamless code migration, upgrades, and customization with full pipeline integration support."
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
            Complete AI Integration for AEM
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            ProtoWeave brings comprehensive AI capabilities to your Adobe Experience Manager platform, 
            from intelligent asset management to automated component generation.
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
