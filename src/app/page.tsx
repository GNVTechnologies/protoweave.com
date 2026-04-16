import { Metadata } from "next"
import NewHero from "@/components/sections/NewHero"
import { UseCases } from "@/components/sections/UseCases"
import AIFeatures from "@/components/sections/AIFeatures"
import CTA from "@/components/sections/CTA"

export const metadata: Metadata = {
  title: "ProtoWeave - AI-Powered AEM Platform for Intelligent Digital Experiences",
  description: "Transform your Adobe Experience Manager with AI capabilities. Automated content creation, intelligent asset management, design-to-code workflows, and real-time personalization.",
}

export default function Home() {
  return (
    <main className="flex flex-col pt-16">
      <NewHero />
      <UseCases />
      <AIFeatures />
      <CTA 
        customTitle="Ready to Transform Your AEM Platform with AI?" 
        customDescription="Join enterprise teams leveraging ProtoWeave's AI capabilities to accelerate content creation, automate workflows, and deliver personalized experiences at scale." 
      />
    </main>
  )
}
