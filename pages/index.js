import Header from '../src/components/molecules/Header'
import Footer from '../src/components/molecules/Footer'
import Hero from '../src/components/organisms/Hero'
import Cta from '../src/components/organisms/Cta'
import WhyUseCP from '../src/components/organisms/WhyUseCP'
import BestProviders from '../src/components/organisms/BestProviders'
import ServiceType from '../src/components/organisms/ServiceType'
import ByState from '../src/components/organisms/ByState'
import Services from '../src/components/organisms/Services'
import CtaFooter from '../src/components/organisms/CtaFooter'

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Cta/>
      <WhyUseCP/>
      <ByState/>
      <BestProviders/>
      <ServiceType/>
      <Services/>
      <CtaFooter/>
      <Footer/>
    </div>
  )
}
