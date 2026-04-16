import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, RefreshCw, CheckCircle, Search, Shield, TrendingUp } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Content Automation & QA - ProtoWeave AI",
  description: "Automated content creation, updates, and quality assurance. Intelligent content lifecycle management with real-time SEO optimization and brand governance.",
}

export default function ContentAutomation() {
  return (
    <main className="flex flex-col pt-16">
      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Content Automation
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                & Quality Assurance
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-gray-600 dark:text-gray-300">
              Streamline your content operations with AI-powered automation. From creation to quality assurance, 
              manage your entire content lifecycle with intelligent workflows that ensure consistency, compliance, and optimization.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/signup">
                  Automate Content Workflow
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Complete Content Lifecycle Management
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              AI-powered automation for every stage of your content journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Automated Content Creation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Generate high-quality content automatically based on templates, brand guidelines, and audience preferences with AI assistance.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Smart Content Updates
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Automatically update content across all touchpoints when source information changes, maintaining consistency at scale.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Intelligent Content QA
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Comprehensive quality checks including grammar, brand compliance, accessibility, and factual accuracy validation.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Real-time SEO Optimization
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Continuous SEO monitoring and optimization with automatic meta tag generation, keyword optimization, and performance tracking.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Brand Governance
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Enforce brand guidelines automatically with AI that understands your voice, tone, visual standards, and compliance requirements.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Performance Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Track content performance with AI-powered insights that identify optimization opportunities and content gaps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Intelligent Content Workflow
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                See how AI transforms your content operations from creation to optimization
              </p>
            </div>

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Content Strategy & Planning
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    AI analyzes your audience, competitors, and performance data to suggest content topics, formats, and distribution strategies 
                    that align with your business goals.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Audience Analysis</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Understand audience preferences and behavior patterns</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Content Gap Analysis</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Identify missing content opportunities</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Automated Content Generation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Generate content automatically using your brand voice, style guidelines, and target audience parameters. 
                    From headlines to full articles, create consistent, on-brand content at scale.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Brand Voice Consistency</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Maintain consistent tone and messaging</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Multi-format Creation</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Generate content for multiple channels simultaneously</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Quality Assurance & Optimization
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Comprehensive QA process that checks grammar, readability, brand compliance, SEO optimization, 
                    and accessibility before content goes live.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Automated QA Checks</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Grammar, spelling, and style validation</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">SEO Optimization</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Meta tags, keywords, and structure optimization</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Continuous Optimization & Updates
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Monitor content performance and automatically update, refresh, or optimize content based on 
                    real-time analytics and changing business requirements.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Performance Monitoring</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Track engagement and conversion metrics</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Adaptive Updates</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Automatically update content based on performance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Transform Your Content Operations
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                See the measurable impact of automated content workflows
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
                      75% Faster Content Production
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Dramatically reduce time-to-market with automated content creation and optimization workflows.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      99% Brand Compliance
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Ensure consistent brand voice and visual standards across all content with AI-powered governance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      50% Improvement in SEO Performance
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Boost search rankings with real-time SEO optimization and performance monitoring.
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
                      Reduced QA Overhead
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Minimize manual review processes with automated quality checks and compliance validation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Scalable Content Operations
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Scale content production without proportional increases in team size or manual effort.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Real-time Performance Insights
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Make data-driven content decisions with comprehensive analytics and optimization recommendations.
                    </p>
                  </div>
                </div>
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
              Ready to Automate Your Content Operations?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Transform your content workflow with AI-powered automation. Create, optimize, and manage content 
              at scale while maintaining quality and brand consistency.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-purple-600 hover:bg-gray-100"
              asChild
            >
              <Link href="/signup">
                Start Content Automation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
