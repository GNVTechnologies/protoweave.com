import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowRight, Tag, Brain, Search, FileText, Zap, Shield } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Asset Intelligence and Tagging - ProtoWeave",
  description: "Automate metadata generation, classification, and asset discovery for CMS teams with governed asset operations workflows.",
}

export default function AssetIntelligence() {
  return (
    <main className="flex flex-col pt-16">
      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Asset Intelligence
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                and Metadata Operations
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-gray-600 dark:text-gray-300">
              Help DAM and content teams standardize tagging, automate metadata enrichment, and improve asset discoverability across large multi-channel libraries.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/signup?source=asset-intelligence-page&feature=asset-intelligence">
                  Request Asset Intelligence Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Governed Asset Operations
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Reduce manual library work with repeatable workflows for enrichment, classification, compliance, and discovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                AI-Backed Metadata
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Automatically generate comprehensive metadata using advanced AI models that understand image content, context, and semantic relationships.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <Tag className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Smart Classification
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Intelligent categorization system that learns from your content patterns and automatically classifies new assets with relevant tags and taxonomies.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Semantic Search
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Find assets using natural language queries. Our AI understands context and meaning, making asset discovery intuitive and efficient.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Content Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Deep content analysis that extracts text, identifies objects, recognizes faces, and understands scenes within your digital assets.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Bulk Processing
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Process thousands of assets simultaneously with high-speed AI analysis, making it easy to modernize existing content libraries.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Brand Compliance
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ensure brand consistency with AI that recognizes brand elements, validates compliance, and flags potential issues automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Transform Your Asset Management
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                See the immediate impact of AI-powered asset intelligence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      90% Faster Asset Discovery
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Find the right assets instantly with AI-powered semantic search and intelligent tagging.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Automated Compliance
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Ensure brand guidelines are met automatically with AI-powered compliance checking.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Consistent Metadata
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Eliminate manual tagging errors with standardized, AI-generated metadata across all assets.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Scalable Processing
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Handle massive asset libraries with AI that scales to process thousands of files simultaneously.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Improved ROI
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Maximize asset utilization and reduce duplicate content creation with intelligent asset management.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Cross-CMS Integration
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Seamlessly integrates with existing CMS and DAM workflows while improving discoverability and governance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              See Asset Intelligence in a Product Demo
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Review how ProtoWeave handles metadata generation, compliance checks, and large-scale asset operations across your content stack.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-purple-600 hover:bg-gray-100"
              asChild
            >
              <Link href="/signup?source=asset-intelligence-page&feature=asset-intelligence">
                Schedule Asset Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
