'use client'

import { motion } from "framer-motion"
import { BarChart3, Briefcase, Building2, Shield } from "lucide-react"

const outcomes = [
  {
    title: "Faster Component Delivery",
    description: "Reduce the time between design approval and AEM implementation with repeatable component generation workflows.",
  },
  {
    title: "Less Manual Content Operations",
    description: "Automate metadata, content QA, and routine publishing tasks that usually slow down content teams.",
  },
  {
    title: "More Governed Rollouts",
    description: "Standardize how teams review, approve, and operationalize changes across enterprise digital programs.",
  },
]

const audiences = [
  {
    icon: Building2,
    title: "For AEM Platform Teams",
    description: "Evaluate how ProtoWeave supports component delivery, implementation consistency, and release readiness.",
  },
  {
    icon: Briefcase,
    title: "For Content Operations Leaders",
    description: "Assess how content creation, QA, and governance workflows can move faster without increasing review risk.",
  },
  {
    icon: Shield,
    title: "For Enterprise Architects",
    description: "Understand where ProtoWeave fits within your stack, workflow controls, and operating model before pilot rollout.",
  },
]

export default function EnterpriseOutcomes() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/80">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-600 dark:text-purple-300 mb-4">
            Enterprise Fit
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Built for Outcomes, Not Just Experiments
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            ProtoWeave is positioned for teams that need measurable delivery gains, clearer governance, and a practical rollout path inside existing enterprise workflows.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Expected Business Outcomes</h3>
            </div>
            <div className="grid gap-5">
              {outcomes.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-5"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl border border-purple-200 dark:border-purple-900 bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/30 dark:to-gray-800 p-8"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Who It&apos;s For</h3>
            <div className="space-y-5">
              {audiences.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white dark:bg-gray-900 text-purple-600 shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}