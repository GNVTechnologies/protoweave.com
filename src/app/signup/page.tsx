'use client'

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function SignUp() {
  const [tallyFormId, setTallyFormId] = useState<string | null>(
    process.env.NEXT_PUBLIC_TALLY_FORM_ID?.trim() || null
  )

  useEffect(() => {
    let mounted = true

    const loadSiteConfig = async () => {
      try {
        const response = await fetch("/site-config.json", { cache: "no-store" })
        if (!response.ok) {
          return
        }

        const config = (await response.json()) as { tallyFormId?: unknown }
        if (!mounted) {
          return
        }

        if (typeof config.tallyFormId === "string") {
          const value = config.tallyFormId.trim()
          setTallyFormId(value || null)
        }
      } catch {
        // Keep build-time env fallback when runtime config is missing.
      }
    }

    loadSiteConfig()

    return () => {
      mounted = false
    }
  }, [])

  const tallyFormUrl = tallyFormId ? `https://tally.so/r/${tallyFormId}` : null
  const tallyEmbedUrl = tallyFormId
    ? `https://tally.so/embed/${tallyFormId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`
    : null

  return (
    <main className="flex min-h-screen flex-col pt-28 pb-16">
      <motion.div 
        className="container max-w-5xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Start Your
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 ml-3">
              AI-Powered Journey
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Let&apos;s create exceptional experiences together
          </motion.p>
        </div>

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 sm:p-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Book Your Demo
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Share your goals and stack details. Our team will tailor a live ProtoWeave walkthrough to your use case.
            </p>
            {tallyEmbedUrl ? (
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-900">
                <iframe
                  src={tallyEmbedUrl}
                  title="ProtoWeave Demo Request Form"
                  className="w-full"
                  height={640}
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="space-y-4 rounded-xl border border-dashed border-gray-300 dark:border-gray-600 p-6 bg-gray-50 dark:bg-gray-900">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Tally form is not configured yet. Add <strong>NEXT_PUBLIC_TALLY_FORM_ID</strong> to your environment file to enable embedded demo booking.
                </p>
                <Button
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={() => {
                    window.location.href = "mailto:experience@protoweave.com?subject=ProtoWeave%20Demo%20Request"
                  }}
                >
                  Request Demo via Email
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}

            <div className="mt-6 flex flex-col items-center gap-2">
              {tallyFormUrl && (
                <a
                  href={tallyFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700"
                >
                  Open form in a new tab
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              )}
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Prefer email? Contact{" "}
                <a
                  href="mailto:experience@protoweave.com"
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  experience@protoweave.com
                </a>
              </span>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
              What to Expect
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex space-x-4">
                <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 dark:text-purple-300 font-semibold">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">Personal Consultation</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    One-on-one meeting to understand your needs and goals
                  </p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 dark:text-purple-300 font-semibold">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">Custom Setup</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Tailored configuration based on your workflow
                  </p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 dark:text-purple-300 font-semibold">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">Team Training</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Guided onboarding for your entire team
                  </p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 dark:text-purple-300 font-semibold">4</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">Ongoing Support</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Dedicated assistance throughout your journey
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  )
}
