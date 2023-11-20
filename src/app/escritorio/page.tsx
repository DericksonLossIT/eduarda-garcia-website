import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import EscritorioHeader from './EscritorioHeader'
import CertificacoesSection from './CertificacoesSection'
import TeamSection from './TeamSection'
import { MapSection } from '@/components/MapSection'

function Escritorio() {
  return (
    <>
      <Header />
      <EscritorioHeader />
      <TeamSection />
      <h2 className="mx-auto text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Certificações
      </h2>
      <CertificacoesSection />
      <MapSection />
      <Footer />
    </>
  )
}

export default Escritorio
