'use client'

import { motion } from "framer-motion"
import { Bot, Gauge, Clock, Zap } from "lucide-react"

export default function ContentVelocity() {
  const features = [
    {
      icon: <Gauge className="w-6 h-6 text-purple-600" />,
      title: "Accelerated Content Creation",
      description: "Transform your content production with AI-powered assistance, reducing creation time by up to 60%."
    },
    {
      icon: <Bot className="w-6 h-6 text-purple-600" />,
      title: "Intelligent Suggestions",
      description: "Get real-time recommendations for content optimization, ensuring consistency and engagement."
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-600" />,
      title: "Streamlined Workflows",
      description: "Automate repetitive tasks and focus on strategic content decisions that drive results."
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-600" />,
      title: "Rapid Iteration",
      description: "Test and refine content variations quickly with AI-driven insights and analytics."
    }
  ]

  return (
    <main className="flex min-h-screen flex-col pt-16">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Supercharge Your{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Content Velocity
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Accelerate your content creation and delivery while maintaining quality through AI-powered assistance and automation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-3 mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Enhance Your Content Strategy
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Our AI-powered platform helps you create, optimize, and deliver content faster than ever while maintaining your brand&apos;s unique voice.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">60%</div>
                <div className="text-purple-100">Faster Creation</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">45%</div>
                <div className="text-purple-100">More Engagement</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">3x</div>
                <div className="text-purple-100">Content Output</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
