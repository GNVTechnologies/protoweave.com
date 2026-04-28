import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service — ProtoWeave",
  description: "Terms of Service for ProtoWeave AI-powered workflow automation and content transformation tools.",
}

const sections = [
  {
    title: "Use of Services",
    body: "You agree to use Protoweave only for lawful purposes. You are responsible for all content you upload, process, or manage through the platform.",
  },
  {
    title: "Data & Content",
    body: "You retain ownership of your content. Protoweave processes content solely to provide its services and does not claim ownership of your data.",
  },
  {
    title: "Intellectual Property",
    body: "All Protoweave technology, including software, workflows, and systems, remains the property of Protoweave.",
  },
  {
    title: "Disclaimer",
    body: 'Protoweave is provided "as is" without warranties of any kind. We do not guarantee uninterrupted or error-free operation.',
  },
  {
    title: "Limitation of Liability",
    body: "Protoweave is not liable for any indirect, incidental, or consequential damages arising from use of the platform.",
  },
  {
    title: "Termination",
    body: "We may suspend or terminate access for misuse. You may stop using the service at any time.",
  },
  {
    title: "Governing Law",
    body: "These Terms are governed by the laws of the State of Tennessee, USA, without regard to its conflict of law principles. Any disputes arising from these Terms shall be resolved in the state or federal courts located in Tennessee.",
  },
]

export default function Terms() {
  return (
    <main className="container max-w-4xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
        Terms of Service
      </h1>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
        Effective Date: April 2026
      </p>

      <p className="text-lg mb-10 text-gray-600 dark:text-gray-300">
        Protoweave provides AI-powered workflow automation and content transformation tools for
        enterprise CMS environments, including Adobe Experience Manager. By accessing or using
        Protoweave, you agree to these Terms.
      </p>

      <div className="space-y-8">
        {sections.map(({ title, body }) => (
          <section key={title}>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              {title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">{body}</p>
          </section>
        ))}

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
            Contact
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Questions? Contact us at:{" "}
            <a
              href="mailto:support@protoweave.com"
              className="text-purple-600 dark:text-purple-400 hover:underline"
            >
              support@protoweave.com
            </a>
          </p>
        </section>
      </div>
    </main>
  )
}
