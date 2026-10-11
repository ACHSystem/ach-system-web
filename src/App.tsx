import { Navigate, Route, Routes } from "react-router-dom"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { WhatsAppFloat } from "@/components/layout/whatsapp-float"
import { ScrollManager } from "@/components/scroll-to-hash"
import { Home } from "@/pages/home"
import { PortfolioPage } from "@/pages/portfolio"
import { ProjectDetailPage } from "@/pages/project-detail"

function App() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <ScrollManager />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portafolio" element={<PortfolioPage />} />
          <Route path="/portafolio/:slug" element={<ProjectDetailPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
