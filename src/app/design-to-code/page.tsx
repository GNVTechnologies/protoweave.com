import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Figma, Image, MessageSquare, Zap, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Design to AEM Components - ProtoWeave",
  description: "Generate production-ready AEM components from design inputs with workflows built for enterprise delivery standards and implementation teams.",
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
                Design to AEM
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                Component Generation
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-gray-600 dark:text-gray-300">
              Turn approved designs, mockups, and requirements into production-ready AEM components with workflows aligned to Adobe standards, authoring needs, and enterprise implementation practices.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/signup?source=design-to-code-page&feature=design-to-code">
                  Request Design-to-Code Demo
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
              Multiple Ways to Generate Components
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Evaluate how ProtoWeave converts design inputs into implementation-ready AEM output.
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
                Import directly from Figma and convert designs into pixel-perfect AEM components with proper styling and structure.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Preserves design system tokens</li>
                <li>• Maintains responsive breakpoints</li>
                <li>• Extracts component variants</li>
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
                Upload any design image or mockup and our AI will analyze and recreate it as a functional AEM component.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Supports all image formats</li>
                <li>• Recognizes UI patterns</li>
                <li>• Generates semantic HTML</li>
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
                Describe your component in natural language and watch as AI generates the complete AEM component structure.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Natural language processing</li>
                <li>• Context-aware generation</li>
                <li>• Iterative refinement</li>
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
              Enterprise-Ready Code Generation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Generated components follow Adobe best practices and enterprise standards
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
                    Adobe Best Practices
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Every generated component follows AEM coding standards, includes proper annotations, and uses recommended patterns.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Responsive & Accessible
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Generated components are mobile-first, responsive, and include proper ARIA attributes for accessibility compliance.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Content Model Integration
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Automatically generates content models, dialogs, and authoring interfaces for seamless AEM integration.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Version Control Ready
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Clean, documented code that integrates seamlessly with your existing version control and deployment workflows.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Generated Component Includes:
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Code className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700 dark:text-gray-300">HTL (Sightly) Templates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700 dark:text-gray-300">Sling Models & Java Classes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700 dark:text-gray-300">CSS/SCSS Stylesheets</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700 dark:text-gray-300">JavaScript/ClientLibs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700 dark:text-gray-300">Dialog & Content Policies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700 dark:text-gray-300">Unit Tests & Documentation</span>
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
              Seamless Pipeline Integration
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
              ProtoWeave integrates with your existing development workflow and deployment pipelines
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Code Migration
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Automated migration of legacy components to modern AEM standards with minimal manual intervention.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Version Upgrades
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Automatic updates and upgrades for component code when new AEM versions or best practices are released.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Quality Assurance
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Built-in code quality checks, performance optimization, and security validation for all generated components.
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
              See Design-to-Code in a Product Demo
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Review how ProtoWeave handles component generation, content models, and delivery readiness across your design-to-development workflow.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-purple-600 hover:bg-gray-100"
              asChild
            >
              <Link href="/signup?source=design-to-code-page&feature=design-to-code">
                Schedule Design-to-Code Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
