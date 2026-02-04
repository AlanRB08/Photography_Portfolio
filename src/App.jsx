import Gallery from "./Components/Gallery"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import InfiniteDraggableCarousel from "./Components/Carru"
import Producst from "./Components/Producst"
import Info from "./Components/Info"
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"
function App() {
  return (
    <div className="scrollbar-hide w-screen overflow-x-hidden">
    <Navbar />   
    <Gallery />   
    <InfiniteDraggableCarousel />
    <Producst />
    <Info />
    <Footer />
    <Analytics/>
    <SpeedInsights/>
    </div>
  )
}
export default App
