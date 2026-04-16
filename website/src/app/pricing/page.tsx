'use client'

import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function PricingPage() {
  const tiers = [
    {
      name: "Starter",
      price: "499",
      description: "Perfect for small teams just getting started with AI automation",
      features: [
        "Up to 5 team members",
        "Basic AI component generation",
        "Standard support",
        "Community access",
        "Basic analytics",
        "Core integrations"
      ]
    },
    {
      name: "Professional",
      price: "999",
      description: "Ideal for growing teams that need more power and flexibility",
      features: [
        "Up to 15 team members",
        "Advanced AI features",
        "Priority support",
        "Custom component library",
        "Advanced analytics",
        "Premium integrations",
        "Custom workflows",
        "API access"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For organizations that need maximum security and customization",
      features: [
        "Unlimited team members",
        "Full AI capabilities",
        "24/7 dedicated support",
        "Custom deployment options",
        "Enterprise analytics",
        "All integrations",
        "Custom solutions",
        "API access",
        "SLA guarantees",
        "Security compliance"
      ]
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
              Simple,{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Transparent Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your needs. All plans include our core AI capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-purple-600">
                      ${tier.price}
                    </span>
                    {tier.price !== "Custom" && (
                      <span className="text-gray-600 dark:text-gray-400 ml-2">/month</span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {tier.description}
                  </p>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="w-5 h-5 text-purple-600 mr-3 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/signup"
                  className="block text-center py-3 px-6 rounded-lg font-semibold bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                >
                  {tier.price === "Custom" ? "Contact Sales" : "Get Started"}
                </a>
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
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">
              Contact our team to discuss your specific requirements and get a tailored quote.
            </p>
            <a
              href="/enterprise"
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Talk to Enterprise Sales
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
