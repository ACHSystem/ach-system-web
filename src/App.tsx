import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { WhatsAppFloat } from "@/components/layout/whatsapp-float"
import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Documents } from "@/components/sections/documents"
import { Faq } from "@/components/sections/faq"
import { FinalCta } from "@/components/sections/final-cta"
import { ForWho } from "@/components/sections/for-who"
import { Hardware } from "@/components/sections/hardware"
import { Hero } from "@/components/sections/hero"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Portfolio } from "@/components/sections/portfolio"
import { Pricing } from "@/components/sections/pricing"
import { Services } from "@/components/sections/services"
import { Team } from "@/components/sections/team"

function App() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <ForWho />
        <HowItWorks />
        <About />
        <Team />
        <Pricing />
        <Documents />
        <Hardware />
        <Portfolio />
        <Faq />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
