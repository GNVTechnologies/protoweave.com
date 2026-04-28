'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Testimonial() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-3xl p-10 sm:p-14 border border-purple-100 dark:border-purple-900/40"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-500 mb-6">
            Testimonial
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 leading-snug">
            From Image Tagging to Full CMS Migration
          </h2>

          <blockquote className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
            &ldquo;Protoweave initially came in to support image tagging within Adobe Experience Manager,
            but it quickly became clear their capabilities extend far beyond a single feature.
            {!expanded && (
              <>
                {" "}
                <button
                  onClick={() => setExpanded(true)}
                  className="text-purple-600 dark:text-purple-400 font-medium hover:underline focus:outline-none"
                >
                  ...more
                </button>
              </>
            )}
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.span
                  key="rest"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  style={{ overflow: "hidden", display: "block" }}
                >
                  {" "}Their platform demonstrated a structured, scalable approach to content
                  transformation — handling complex mappings, component alignment, and cross-CMS
                  migration with minimal friction. What started as a targeted implementation evolved
                  into a broader initiative, including Core CMS content migration into AEM. Protoweave
                  brings real engineering depth and a practical understanding of enterprise content
                  architectures, which significantly accelerated our delivery timeline.&rdquo;
                </motion.span>
              )}
            </AnimatePresence>
            {!expanded && <>&rdquo;</>}
          </blockquote>

          <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
            Michel &mdash; Product, BBB
          </p>
        </motion.div>
      </div>
    </section>
  )
}
