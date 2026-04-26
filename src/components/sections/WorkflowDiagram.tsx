'use client'

import { motion } from "framer-motion"
import { Pen, FolderOpen, FileText, Monitor, Database, ShieldCheck, Users, Brain } from "lucide-react"

function NodeCard({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex items-center gap-3 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 px-5 py-4 shadow-sm w-full">
      <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
      </div>
      <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">{label}</span>
    </div>
  )
}

const topNodes = [
  { icon: Pen, label: "Design" },
  { icon: FolderOpen, label: "Assets" },
  { icon: FileText, label: "Content" },
] as const

const bottomNodes = [
  { icon: Monitor, label: "AEM" },
  { icon: Database, label: "CMS" },
  { icon: ShieldCheck, label: "QA" },
  { icon: Users, label: "Personalization" },
] as const

export default function WorkflowDiagram() {
  return (
    <section className="pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {/* Top row: Design, Assets, Content */}
          <div className="grid grid-cols-3 gap-4">
            {topNodes.map(({ icon, label }) => (
              <NodeCard key={label} icon={icon} label={label} />
            ))}
          </div>

          {/* Top connectors: 3 lines converge to center */}
          {/* Column centers at 1/6, 3/6, 5/6 → 100, 300, 500 in 600-unit viewBox */}
          <svg
            className="w-full block"
            height="64"
            viewBox="0 0 600 64"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line x1="100" y1="0" x2="100" y2="28" stroke="#9333ea" strokeWidth="1.5" />
            <line x1="300" y1="0" x2="300" y2="28" stroke="#9333ea" strokeWidth="1.5" />
            <line x1="500" y1="0" x2="500" y2="28" stroke="#9333ea" strokeWidth="1.5" />
            <line x1="100" y1="28" x2="500" y2="28" stroke="#9333ea" strokeWidth="1.5" />
            <circle cx="100" cy="28" r="4" fill="#9333ea" />
            <circle cx="300" cy="28" r="4" fill="#9333ea" />
            <circle cx="500" cy="28" r="4" fill="#9333ea" />
            <line x1="300" y1="28" x2="300" y2="52" stroke="#9333ea" strokeWidth="1.5" />
            <polygon points="294,50 306,50 300,60" fill="#9333ea" />
          </svg>

          {/* Center bar */}
          <div className="bg-gradient-to-r from-violet-800 via-purple-700 to-purple-500 rounded-2xl px-8 py-5 flex items-center gap-4 shadow-xl">
            <div className="w-14 h-14 rounded-full bg-white/15 border border-white/20 flex items-center justify-center flex-shrink-0">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <span className="text-white font-bold text-xl lg:text-2xl">ProtoWeave AI Workflow Layer</span>
          </div>

          {/* Bottom connectors: center splits to 4 */}
          {/* Column centers at 1/8, 3/8, 5/8, 7/8 → 75, 225, 375, 525 in 600-unit viewBox */}
          <svg
            className="w-full block"
            height="64"
            viewBox="0 0 600 64"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line x1="300" y1="0" x2="300" y2="28" stroke="#9333ea" strokeWidth="1.5" />
            <line x1="75" y1="28" x2="525" y2="28" stroke="#9333ea" strokeWidth="1.5" />
            <circle cx="75" cy="28" r="4" fill="#9333ea" />
            <circle cx="225" cy="28" r="4" fill="#9333ea" />
            <circle cx="375" cy="28" r="4" fill="#9333ea" />
            <circle cx="525" cy="28" r="4" fill="#9333ea" />
            <line x1="75" y1="28" x2="75" y2="52" stroke="#9333ea" strokeWidth="1.5" />
            <line x1="225" y1="28" x2="225" y2="52" stroke="#9333ea" strokeWidth="1.5" />
            <line x1="375" y1="28" x2="375" y2="52" stroke="#9333ea" strokeWidth="1.5" />
            <line x1="525" y1="28" x2="525" y2="52" stroke="#9333ea" strokeWidth="1.5" />
            <polygon points="69,50 81,50 75,60" fill="#9333ea" />
            <polygon points="219,50 231,50 225,60" fill="#9333ea" />
            <polygon points="369,50 381,50 375,60" fill="#9333ea" />
            <polygon points="519,50 531,50 525,60" fill="#9333ea" />
          </svg>

          {/* Bottom row: AEM, CMS, QA, Personalization */}
          <div className="grid grid-cols-4 gap-3">
            {bottomNodes.map(({ icon, label }) => (
              <NodeCard key={label} icon={icon} label={label} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
