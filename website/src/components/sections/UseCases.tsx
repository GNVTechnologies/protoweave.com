'use client'

import { motion } from "framer-motion"
import Image from "next/image"

const useCases = [
  {
    title: "Asset Intelligence & Tagging",
    description: "AI-powered metadata generation and asset classification. Automatically organize and tag your content library with intelligent semantic understanding.",
    icon: "/images/ai-assistance.svg",
    link: "/asset-intelligence"
  },
  {
    title: "Design to AEM Components",
    description: "Generate production-ready AEM components from Figma designs, images, or prompts. Built following Adobe best practices with automated code migration support.",
    icon: "/images/code-automation.svg",
    link: "/design-to-code"
  },
  {
    title: "Content Automation & QA",
    description: "Automated content creation, updates, and quality assurance. Intelligent content lifecycle management with real-time SEO optimization and brand governance.",
    icon: "/images/generate-components.svg",
    link: "/content-automation"
  },
  {
    title: "AI-Driven Personalization",
    description: "Real-time content personalization and contextualization. Platform-independent AI assistance that adapts experiences based on user behavior and preferences.",
    icon: "/images/workflow.svg",
    link: "/personalization"
  }
]

export function UseCases() {
  return (
    <section id="use-cases" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            AI-Powered AEM Capabilities
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Transform your Adobe Experience Manager with intelligent automation and AI-driven workflows
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-xl p-6 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative w-12 h-12 mb-6">
                  <Image
                    src={useCase.icon}
                    alt={useCase.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                  {useCase.description}
                </p>
                <a
                  href={useCase.link}
                  className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
