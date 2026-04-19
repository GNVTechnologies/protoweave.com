'use client'

import { motion } from "framer-motion"
import { Building2, Shield, Users2, Gauge, HeartHandshake, BarChart3 } from "lucide-react"

export default function EnterprisePage() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-purple-600" />,
      title: "Enterprise-Grade Security",
      description: "Bank-level security with SOC 2 compliance, end-to-end encryption, and advanced access controls."
    },
    {
      icon: <Users2 className="w-6 h-6 text-purple-600" />,
      title: "Dedicated Support",
      description: "24/7 priority support with a dedicated customer success manager for your team."
    },
    {
      icon: <Building2 className="w-6 h-6 text-purple-600" />,
      title: "Custom Deployment",
      description: "Flexible deployment options including on-premise, private cloud, or hybrid solutions."
    },
    {
      icon: <Gauge className="w-6 h-6 text-purple-600" />,
      title: "Advanced Analytics",
      description: "Deep insights into your automation and optimization metrics with custom reporting."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-purple-600" />,
      title: "Strategic Partnership",
      description: "Collaborate with our experts to develop and implement your AI transformation roadmap."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-600" />,
      title: "Scale with Confidence",
      description: "Enterprise-ready infrastructure that grows with your needs while maintaining performance."
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
              Enterprise-Ready{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Product Workflows
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Evaluate ProtoWeave with the security, deployment, governance, and support considerations enterprise teams need before rollout.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
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
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Evaluate Enterprise Fit?
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">
              Talk with our team about deployment options, governance requirements, and the product workflows that matter to your program.
            </p>
            <a
              href="/signup?source=enterprise-page&feature=platform-overview"
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Schedule Enterprise Demo
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
