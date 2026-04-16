'use client'

import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function SignUp() {
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
              Personal Onboarding Experience
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We believe in providing a tailored experience from day one. Our team is ready to understand your unique needs and help you get the most out of ProtoWeave.
            </p>
            <div className="flex flex-col items-center space-y-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto"
                onClick={() => {
                  window.location.href = "mailto:experience@protoweave.com?subject=ProtoWeave%20Onboarding%20Request"
                }}
              >
                Contact Our Team
                <Mail className="ml-2 h-4 w-4" />
              </Button>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Email us at{" "}
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
