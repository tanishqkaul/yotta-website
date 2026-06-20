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
        <section id="hero"><Hero /></section>
        <section id="trust"><TrustBar /></section>
        <section id="products"><Products /></section>
        <section id="ai-factory"><AIFactory /></section>
        <section id="data-centers"><DataCenters /></section>
        <section id="stats"><Stats /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="why-yotta"><WhyYotta /></section>
        <section id="leadership"><Leadership /></section>
        <section id="partners"><Partners /></section>
        <section id="contact"><CTA /></section>
      </main>
      <Footer />
    </div>
  )
}
