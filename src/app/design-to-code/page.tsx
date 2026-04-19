import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowRight, Figma, Image, MessageSquare, Zap, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Workflow Integration and Orchestration - ProtoWeave",
  description: "Orchestrate content operations from design inputs through metadata automation, QA governance, and personalization workflows across CMS platforms.",
}

export default function DesignToCode() {
  return (
    <main className="flex flex-col pt-16">
      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Workflow Integration
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                for Content Operations
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-gray-600 dark:text-gray-300">
              Connect design inputs, content workflows, and governance checks into one repeatable operating model that supports modern marketing and content operations teams.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/signup?source=design-to-code-page&feature=design-to-code">
                  Request Workflow Integration Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Input Methods Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Multiple Inputs, One Orchestrated Workflow
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Bring in design context and requirements, then automate metadata, content quality, and optimization-ready outputs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Figma className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Figma Designs
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Import approved design context and structure so downstream workflows can preserve consistency across content operations.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Preserves design system signals</li>
                <li>• Maps reusable experience patterns</li>
                <li>• Supports governed workflow handoff</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Image className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Image Uploads
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Upload mockups or campaign visuals to trigger metadata enrichment and content operations workflows.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Supports all image formats</li>
                <li>• Extracts semantic metadata signals</li>
                <li>• Supports taxonomy and tagging automation</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Text Prompts
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Define content intent, governance rules, or personalization goals in natural language to guide workflow outputs.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Natural language processing</li>
                <li>• Context-aware workflow recommendations</li>
                <li>• Iterative refinement for operations teams</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Enterprise Workflow Controls
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Run automation with governance, quality, and optimization guardrails built in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Metadata Governance
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Enforce taxonomy, tagging quality, and metadata standards consistently across growing content libraries.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    QA and Compliance Checks
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Apply repeatable checks for quality, brand alignment, and compliance before publishing.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Personalization Readiness
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Structure content and audience signals so teams can activate targeted experiences with less manual setup.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Cross-Platform Fit
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Keep workflows portable across CMS and publishing environments as your platform mix evolves.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Workflow Outputs Include:
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700 dark:text-gray-300">Metadata recommendations and tagging rules</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700 dark:text-gray-300">Content QA checkpoints and issue flags</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700 dark:text-gray-300">Governance controls and approval guidance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700 dark:text-gray-300">Personalization-ready audience and intent signals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700 dark:text-gray-300">Optimization and performance recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700 dark:text-gray-300">Operational summaries for cross-team handoff</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline Integration Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Cross-System Integration
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
              Keep content, governance, and optimization workflows connected across your existing tools.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  CMS Connectivity
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Connect to current CMS and publishing environments without forcing teams to rebuild operating models.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Governance Automation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Keep review, quality, and compliance workflows consistent as teams and channels scale.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Optimization Feedback Loop
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Feed performance and personalization signals back into planning to improve future campaign execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              See Workflow Integration in a Product Demo
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Review how ProtoWeave connects metadata automation, content governance, and personalization workflows across your content stack.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-purple-600 hover:bg-gray-100"
              asChild
            >
              <Link href="/signup?source=design-to-code-page&feature=design-to-code">
                Schedule Workflow Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
