'use client'

import { motion } from "framer-motion"

export default function Privacy() {
  return (
    <main className="container max-w-4xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Privacy Policy
        </h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
            Last updated: May 10, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              1. Information We Collect
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              When you use ProtoWeave, we collect information that helps us provide and improve our services:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 dark:text-gray-300">
              <li>Account information (email, name)</li>
              <li>Usage data and preferences</li>
              <li>Technical information about your device and connection</li>
              <li>Design files and component configurations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              2. How We Use Your Information
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 dark:text-gray-300">
              <li>Provide and maintain ProtoWeave services</li>
              <li>Improve and personalize your experience</li>
              <li>Send important updates and communications</li>
              <li>Ensure security and prevent fraud</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              3. Data Storage and Security
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              We implement industry-standard security measures to protect your data. Your information is stored securely and processed in accordance with relevant data protection laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              4. Sharing Your Information
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 dark:text-gray-300">
              <li>Service providers who assist in our operations</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners with your consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              5. Your Rights
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 dark:text-gray-300">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              6. Contact Us
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Email: privacy@protoweave.com<br />
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              7. Updates to This Policy
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>
        </div>
      </motion.div>
    </main>
  )
}
