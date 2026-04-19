import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Brain, Users, TrendingUp, Zap, Globe, FileText } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Personalization Workflows - ProtoWeave",
  description: "Support audience targeting, dynamic experiences, and optimization workflows with enterprise-ready personalization capabilities.",
}

export default function Personalization() {
  return (
    <main className="flex flex-col pt-16">
      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Personalization
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                and Experience Optimization
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-gray-600 dark:text-gray-300">
              Help digital teams adapt messaging, journeys, and experience rules using workflows built for targeting, testing, and operational consistency.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/signup?source=personalization-page&feature=personalization">
                  Request Personalization Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Personalization Capabilities for Enterprise Teams
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Evaluate how ProtoWeave supports segmentation, adaptive experiences, and optimization workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Behavioral Intelligence
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Advanced AI algorithms analyze user behavior patterns, preferences, and intent to create detailed user profiles for precise targeting.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Dynamic Content Adaptation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Automatically adjust content, layout, messaging, and calls-to-action based on user context, device, location, and engagement history.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Audience Segmentation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                AI-powered micro-segmentation that creates dynamic audience groups based on behavior, demographics, and engagement patterns.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Real-time Optimization
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Continuous A/B testing and optimization that learns from user interactions to improve conversion rates and engagement.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Cross-Platform Consistency
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Maintain personalized experiences across web, mobile, email, and other touchpoints with unified user profiles and preferences.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Predictive Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Anticipate user needs and behavior with machine learning models that predict next best actions and content preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personalization Types Section */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Multi-Dimensional Personalization
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Personalize every aspect of the user experience with AI-driven insights
              </p>
            </div>

            <div className="space-y-12">
              {/* Content Personalization */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Content Personalization
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Deliver the right content to the right user at the right time. Our AI analyzes user interests, 
                    reading patterns, and engagement history to surface the most relevant content.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Dynamic article recommendations</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Personalized product catalogs</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Contextual messaging and CTAs</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Adaptive content formatting</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Smart Content Engine</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Automatically curates and presents content based on user preferences and behavior patterns
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience Personalization */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Adaptive UX Engine</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Dynamically adjusts interface elements and user flows based on individual preferences
                      </p>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Experience Personalization
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Adapt the entire user experience including navigation, layout, and interaction patterns 
                    to match individual user preferences and usage patterns.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Personalized navigation menus</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Dynamic layout optimization</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Adaptive form configurations</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Contextual feature highlighting</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Journey Personalization */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Journey Personalization
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Guide users through personalized journeys that adapt based on their goals, behavior, and stage in the customer lifecycle.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Intelligent path optimization</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Predictive next-best-action</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Dynamic goal completion assistance</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Personalized onboarding flows</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Journey Intelligence</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Maps and optimizes user journeys in real-time based on behavior and conversion data
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Independence Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Deployment and Operational Fit
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
              Review how personalization workflows fit across channels, privacy requirements, and your broader delivery stack.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Universal Integration
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Works with any CMS, e-commerce platform, or custom application through flexible APIs and SDKs.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Edge Computing
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Lightning-fast personalization with edge-deployed AI that reduces latency and improves performance.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Privacy-First Design
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  GDPR and CCPA compliant personalization with user consent management and data protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Measurable Personalization Impact
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                See how AI-driven personalization transforms business outcomes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">250%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Increase in Conversion Rates</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">180%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Boost in User Engagement</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">60%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Reduction in Bounce Rate</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">45%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Increase in Session Duration</div>
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
              See Personalization Workflows in a Product Demo
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Review how ProtoWeave supports targeting, journey optimization, and experimentation without adding operational sprawl.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-purple-600 hover:bg-gray-100"
              asChild
            >
              <Link href="/signup?source=personalization-page&feature=personalization">
                Schedule Personalization Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
