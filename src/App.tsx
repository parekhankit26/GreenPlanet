import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Footer, JoinCTA, ScrollToTop } from '@/components/site'
import Home from '@/pages/Home'
import Wonders from '@/pages/Wonders'
import Mission from '@/pages/Mission'
import Gallery from '@/pages/Gallery'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wonders" element={<Wonders />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <JoinCTA />
        <Footer />
      </div>
    </BrowserRouter>
  )
}
