'use client'

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NewHero() {
  return (
    <section className="relative py-20 sm:py-32 lg:py-36">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-4xl font-bold tracking-tight sm:text-6xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              AI-powered content operations
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              for enterprise CMS teams
            </span>
          </motion.h1>
          <motion.p 
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            ProtoWeave helps enterprise content and marketing teams automate asset tagging, content QA, workflow orchestration, and personalization across complex CMS ecosystems.
          </motion.p>
          <motion.div 
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button size="lg" asChild>
              <Link href="/signup?source=hero&feature=platform-overview">
                Schedule Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link href="#use-cases">Explore Platform</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
