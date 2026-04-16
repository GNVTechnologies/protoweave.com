'use client'

import { motion } from "framer-motion"
import { Sparkles, Lightbulb, Palette, Wand2, Brain, Users, Zap, Combine } from "lucide-react"

export default function CreativeAugmentation() {
  const capabilities = [
    {
      icon: <Brain className="w-6 h-6 text-purple-600" />,
      title: "AI-Enhanced Ideation",
      description: "Amplify your creative process with AI-powered brainstorming and concept generation while maintaining your unique vision."
    },
    {
      icon: <Palette className="w-6 h-6 text-purple-600" />,
      title: "Design Exploration",
      description: "Rapidly explore diverse design variations while keeping human creativity at the core of decision-making."
    },
    {
      icon: <Wand2 className="w-6 h-6 text-purple-600" />,
      title: "Smart Refinement",
      description: "Leverage AI to refine and polish designs while preserving your creative intent and brand identity."
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-600" />,
      title: "Creative Acceleration",
      description: "Speed up your creative workflow without compromising on quality or creative control."
    }
  ]

  const workflowSteps = [
    {
      icon: <Lightbulb className="w-6 h-6 text-purple-600" />,
      title: "Human Vision",
      points: ["Set creative direction", "Define brand goals", "Establish design principles"]
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-600" />,
      title: "AI Augmentation",
      points: ["Generate variations", "Explore possibilities", "Optimize designs"]
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "Creative Control",
      points: ["Review and select", "Refine choices", "Guide iterations"]
    },
    {
      icon: <Combine className="w-6 h-6 text-purple-600" />,
      title: "Perfect Blend",
      points: ["Human creativity", "AI efficiency", "Optimal results"]
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
              Amplify Your{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Creative Vision
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Enhance your creative process with AI that amplifies human vision rather than replacing it. Blend human creativity with AI efficiency for extraordinary results.
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
                Human-Centered AI Workflow
              </h2>
              <p className="text-xl text-purple-100 max-w-2xl mx-auto">
                A perfect blend of human creativity and AI capabilities
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-white/10 rounded-xl p-6 backdrop-blur-sm"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-white/20 rounded-lg p-2 mr-3">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {step.points.map((point, i) => (
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
            className="text-center mb-20"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Empowering Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                <div className="text-4xl font-bold text-purple-600 mb-2">10x</div>
                <div className="text-gray-600 dark:text-gray-300">
                  Faster Design Exploration
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                <div className="text-4xl font-bold text-purple-600 mb-2">80%</div>
                <div className="text-gray-600 dark:text-gray-300">
                  More Creative Variations
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                <div className="text-4xl font-bold text-purple-600 mb-2">3x</div>
                <div className="text-gray-600 dark:text-gray-300">
                  Higher Creative Output
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Amplify Your Creative Process?
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">
              Join innovative teams using ProtoWeave&apos;s AI-powered creative augmentation to achieve extraordinary results.
            </p>
            <a
              href="/signup"
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Start Creating Today
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
