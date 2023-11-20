import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { MapSection } from '@/components/MapSection'
import InformativoHeader from './InformativoHeader'
import InformativoSection from './InformativoSection'

function Informativo() {
  return (
    <>
      <Header />
      <InformativoHeader />
      <InformativoSection />
      <MapSection />
      <Footer />
    </>
  )
}

export default Informativo
