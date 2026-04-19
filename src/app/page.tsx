import { Metadata } from "next"
import NewHero from "@/components/sections/NewHero"
import { UseCases } from "@/components/sections/UseCases"
import AIFeatures from "@/components/sections/AIFeatures"
import EnterpriseOutcomes from "@/components/sections/EnterpriseOutcomes"
import CTA from "@/components/sections/CTA"

export const metadata: Metadata = {
  title: "ProtoWeave - Product Workflows for AEM Teams",
  description: "Accelerate AEM delivery with component generation, asset operations, content automation, and governed enterprise workflows.",
}

export default function Home() {
  return (
    <main className="flex flex-col pt-16">
      <NewHero />
      <UseCases />
      <AIFeatures />
      <EnterpriseOutcomes />
      <CTA 
        customTitle="Ready to Evaluate ProtoWeave for Your Team?" 
        customDescription="See the product capabilities, workflow fit, and rollout approach that matter most to your AEM program." 
      />
    </main>
  )
}
