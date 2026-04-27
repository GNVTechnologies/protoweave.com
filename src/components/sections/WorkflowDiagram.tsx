'use client'

import { motion } from "framer-motion"
import { Pen, FolderOpen, FileText, Database, ShieldCheck, Users } from "lucide-react"
import Image from "next/image"

function NodeCard({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 px-3 py-3 shadow-sm w-full min-h-[4.25rem]">
      <div className="w-9 h-9 rounded-lg bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
        <Icon className="w-4.5 h-4.5 text-purple-600 dark:text-purple-400" />
      </div>
      <span className="text-gray-800 dark:text-gray-200 font-medium text-[13px] text-center leading-tight">{label}</span>
    </div>
  )
}

const topNodes = [
  { icon: Pen, label: "Design" },
  { icon: FolderOpen, label: "Assets" },
  { icon: FileText, label: "Content" },
] as const

const bottomNodes = [
  { icon: Database, label: "CMS" },
  { icon: ShieldCheck, label: "QA" },
  { icon: Users, label: "Personalization" },
] as const

export default function WorkflowDiagram() {
  return (
    <section className="pb-16 px-4 sm:px-6 lg:px-8 -mt-2 sm:-mt-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {/* Top row: Design, Assets, Content */}
          <div className="grid grid-cols-3 gap-3">
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
            <line x1="100" y1="0" x2="100" y2="28" stroke="#9333ea" strokeWidth="1.25" />
            <line x1="300" y1="0" x2="300" y2="28" stroke="#9333ea" strokeWidth="1.25" />
            <line x1="500" y1="0" x2="500" y2="28" stroke="#9333ea" strokeWidth="1.25" />
            <line x1="100" y1="28" x2="500" y2="28" stroke="#9333ea" strokeWidth="1.25" />
            <circle cx="100" cy="28" r="3" fill="#9333ea" />
            <circle cx="300" cy="28" r="3" fill="#9333ea" />
            <circle cx="500" cy="28" r="3" fill="#9333ea" />
            <line x1="300" y1="28" x2="300" y2="52" stroke="#9333ea" strokeWidth="1.25" />
            <polygon points="294,50 306,50 300,60" fill="#9333ea" />
          </svg>

          {/* Center bar */}
          <Image
            src="/workflow-center-bar.png"
            alt="ProtoWeave AI Workflow Layer"
            width={1328}
            height={748}
            className="w-full h-auto"
          />

          {/* Bottom connectors: center splits to 3 */}
          {/* Column centers at 1/6, 3/6, 5/6 → 100, 300, 500 in 600-unit viewBox */}
          <svg
            className="w-full block"
            height="64"
            viewBox="0 0 600 64"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line x1="300" y1="0" x2="300" y2="28" stroke="#9333ea" strokeWidth="1.25" />
            <line x1="100" y1="28" x2="500" y2="28" stroke="#9333ea" strokeWidth="1.25" />
            <circle cx="100" cy="28" r="3" fill="#9333ea" />
            <circle cx="300" cy="28" r="3" fill="#9333ea" />
            <circle cx="500" cy="28" r="3" fill="#9333ea" />
            <line x1="100" y1="28" x2="100" y2="52" stroke="#9333ea" strokeWidth="1.25" />
            <line x1="300" y1="28" x2="300" y2="52" stroke="#9333ea" strokeWidth="1.25" />
            <line x1="500" y1="28" x2="500" y2="52" stroke="#9333ea" strokeWidth="1.25" />
            <polygon points="94,50 106,50 100,60" fill="#9333ea" />
            <polygon points="294,50 306,50 300,60" fill="#9333ea" />
            <polygon points="494,50 506,50 500,60" fill="#9333ea" />
          </svg>

          {/* Bottom row: CMS, QA, Personalization */}
          <div className="grid grid-cols-3 gap-3">
            {bottomNodes.map(({ icon, label }) => (
              <NodeCard key={label} icon={icon} label={label} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
