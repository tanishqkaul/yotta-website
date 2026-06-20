import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Products from '@/components/Products'
import AIFactory from '@/components/AIFactory'
import DataCenters from '@/components/DataCenters'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import WhyYotta from '@/components/WhyYotta'
import Leadership from '@/components/Leadership'
import Partners from '@/components/Partners'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-space-900 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Products />
        <AIFactory />
        <DataCenters />
        <Stats />
        <Testimonials />
        <WhyYotta />
        <Leadership />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
