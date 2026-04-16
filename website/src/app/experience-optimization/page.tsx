'use client'

import { motion } from "framer-motion"
import { LineChart, Brain, Users, Sparkles, LayoutDashboard, Lightbulb, Target, Gauge } from "lucide-react"

export default function ExperienceOptimization() {
  const capabilities = [
    {
      icon: <Brain className="w-6 h-6 text-purple-600" />,
      title: "AI-Powered Analysis",
      description: "Leverage machine learning to understand user behavior patterns and identify optimization opportunities."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "Personalization at Scale",
      description: "Deliver tailored experiences to different user segments automatically."
    },
    {
      icon: <LineChart className="w-6 h-6 text-purple-600" />,
      title: "Real-time Insights",
      description: "Get immediate feedback on experience performance and user engagement metrics."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-600" />,
      title: "Smart Recommendations",
      description: "Receive AI-driven suggestions for improving user experience and conversion rates."
    }
  ]

  const optimizationAreas = [
    {
      icon: <LayoutDashboard className="w-6 h-6 text-purple-600" />,
      title: "UI/UX Enhancement",
      points: ["Layout optimization", "Navigation improvements", "Visual hierarchy"]
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-purple-600" />,
      title: "Content Optimization",
      points: ["Dynamic content delivery", "A/B testing", "Engagement analysis"]
    },
    {
      icon: <Target className="w-6 h-6 text-purple-600" />,
      title: "Conversion Optimization",
      points: ["Funnel analysis", "Behavioral triggers", "Smart CTAs"]
    },
    {
      icon: <Gauge className="w-6 h-6 text-purple-600" />,
      title: "Performance Tuning",
      points: ["Load time optimization", "Resource prioritization", "Core Web Vitals"]
    }
  ]

  const implementationSteps = [
    {
      step: 1,
      title: "Analysis",
      description: "Our AI analyzes your current digital experience, user behavior, and performance metrics."
    },
    {
      step: 2,
      title: "Strategy",
      description: "We develop a personalized optimization strategy based on AI insights and business goals."
    },
    {
      step: 3,
      title: "Implementation",
      description: "Automated implementation of optimizations with continuous AI monitoring and adjustments."
    },
    {
      step: 4,
      title: "Refinement",
      description: "Continuous learning and improvement through AI-driven insights and recommendations."
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
              AI-Powered{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Experience Optimization
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transform your digital experience with intelligent optimization powered by AI. Deliver personalized, high-performing experiences that convert.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-3 mr-4">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {capability.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Optimization Areas
              </h2>
              <p className="text-xl text-purple-100 max-w-2xl mx-auto">
                Comprehensive optimization across all aspects of your digital experience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {optimizationAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-white/10 rounded-xl p-6 backdrop-blur-sm"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-white/20 rounded-lg p-2 mr-3">
                      {area.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {area.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {area.points.map((point, i) => (
                      <li key={i} className="text-purple-100 flex items-center">
                        <span className="w-1.5 h-1.5 bg-purple-300 rounded-full mr-2"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Proven Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                <div className="text-4xl font-bold text-purple-600 mb-2">35%</div>
                <div className="text-gray-600 dark:text-gray-300">
                  Increase in Conversion Rate
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                <div className="text-4xl font-bold text-purple-600 mb-2">50%</div>
                <div className="text-gray-600 dark:text-gray-300">
                  Better User Engagement
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                <div className="text-4xl font-bold text-purple-600 mb-2">2x</div>
                <div className="text-gray-600 dark:text-gray-300">
                  Faster Optimization Cycles
                </div>
              </div>
            </div>
          </motion.div>

          {/* Implementation Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Implementation Process
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                A streamlined process powered by AI to transform your digital experience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {implementationSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm relative"
                >
                  <div className="absolute -top-4 left-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Digital Experience?
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">
              Join leading brands using              ProtoWeave&apos;s AI-powered optimization to deliver exceptional digital experiences.
            </p>
            <a
              href="/signup"
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Start Optimizing Today
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
