'use client'

import { Suspense, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ExternalLink, Mail, ShieldCheck, PlugZap, ServerCog, Users } from "lucide-react"
import { motion } from "framer-motion"

const demoHighlights = [
  "Asset intelligence and metadata automation",
  "Content automation with QA and governance",
  "Personalization and experience optimization",
  "Cross-platform workflow integration for modern CMS teams",
]

const featureLabels: Record<string, string> = {
  "platform-overview": "Platform overview",
  "asset-intelligence": "Asset intelligence and tagging",
  "design-to-code": "Workflow integration and orchestration",
  "content-automation": "Content automation and QA",
  "personalization": "Personalization and optimization",
}

const demoAgenda = [
  {
    step: "1",
    title: "Product Walkthrough",
    description: "See how ProtoWeave handles asset intelligence, metadata enrichment, and content workflows end to end.",
  },
  {
    step: "2",
    title: "Use Case Mapping",
    description: "Review the product features that best fit your content operations, governance, and personalization priorities.",
  },
  {
    step: "3",
    title: "Implementation Fit",
    description: "Discuss integration approach, team workflow impact, and how ProtoWeave fits into your delivery stack.",
  },
  {
    step: "4",
    title: "Next-Step Plan",
    description: "Leave with a concrete recommendation for rollout, evaluation, or pilot scope.",
  },
]

const trustSignals = [
  {
    icon: ShieldCheck,
    title: "Governance Ready",
    description: "Review approval paths, content guardrails, and QA checkpoints needed for enterprise rollout.",
  },
  {
    icon: PlugZap,
    title: "Integration Fit",
    description: "Understand how ProtoWeave fits with your CMS, design systems, and existing content operations.",
  },
  {
    icon: ServerCog,
    title: "Deployment Planning",
    description: "Discuss implementation approach, operational handoff, and rollout considerations for your environment.",
  },
  {
    icon: Users,
    title: "Enterprise Support",
    description: "Align on pilot scope, stakeholder workflows, and how your teams will evaluate product impact.",
  },
]

const qualificationPrompts = [
  "Which product area you want to evaluate first",
  "Your current CMS stack and team ownership",
  "The workflow bottleneck or rollout goal you want to solve",
]

function SignUpContent() {
  const searchParams = useSearchParams()
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

  const feature = searchParams.get("feature")?.trim() || "platform-overview"
  const source = searchParams.get("source")?.trim() || "direct"
  const selectedFeatureLabel = featureLabels[feature] || featureLabels["platform-overview"]
  const featureIntro =
    feature !== "platform-overview"
      ? `This demo will emphasize ${selectedFeatureLabel.toLowerCase()}, while also showing how it fits into the broader ProtoWeave platform.`
      : "This demo will cover the core ProtoWeave platform and the product features most relevant to your workflow."

  const tallyQuery = new URLSearchParams({
    alignLeft: "1",
    hideTitle: "1",
    transparentBackground: "1",
    dynamicHeight: "1",
    feature: selectedFeatureLabel,
    source,
  })

  const tallyFormQuery = new URLSearchParams({
    feature: selectedFeatureLabel,
    source,
  })

  const tallyFormUrl = tallyFormId ? `https://tally.so/r/${tallyFormId}?${tallyFormQuery.toString()}` : null
  const tallyEmbedUrl = tallyFormId
    ? `https://tally.so/embed/${tallyFormId}?${tallyQuery.toString()}`
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
            Explore
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 ml-3">
              ProtoWeave Product Features
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Request a focused demo of the product capabilities that help enterprise teams automate metadata and content operations while improving personalization outcomes.
          </motion.p>
        </div>

        <motion.div
          className="mb-8 max-w-3xl mx-auto rounded-2xl border border-purple-200/70 dark:border-purple-900 bg-purple-50/80 dark:bg-purple-950/30 px-5 py-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-700 dark:text-purple-300 mb-2">
            Demo focus
          </p>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{selectedFeatureLabel}</h2>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-200">{featureIntro}</p>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2 mb-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          {demoHighlights.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 p-4"
            >
              <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-200">{item}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 sm:p-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Schedule a Product Demo
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Tell us which product capabilities you want to evaluate and we&apos;ll tailor the walkthrough around your team&apos;s workflow, stack, and priorities.
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
                  Tally form is not configured yet. Add a valid form ID in site-config.json or set NEXT_PUBLIC_TALLY_FORM_ID to enable embedded demo booking.
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
              What the Demo Covers
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {demoAgenda.map((item) => (
                <div key={item.step} className="flex space-x-4">
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 dark:text-purple-300 font-semibold">{item.step}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
              Helpful Details to Include in the Form
            </h3>
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-5">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 text-center">
                Tally is hosted outside this site, but the most useful demo requests usually include these details.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {qualificationPrompts.map((item) => (
                  <div key={item} className="rounded-lg bg-white dark:bg-gray-800 p-4 border border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-700 dark:text-gray-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
              Enterprise Evaluation Signals
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {trustSignals.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-5"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="font-medium text-gray-900 dark:text-white">{item.title}</h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  )
}

export default function SignUp() {
  return (
    <Suspense fallback={<main className="flex min-h-screen flex-col pt-28 pb-16" />}>
      <SignUpContent />
    </Suspense>
  )
}
