import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { BioDuda } from '@/components/BioDuda'
import { DireitoAntidiscriminatorioSection } from '@/components/DireitoAntidiscrimatorioSection'
import { ExperienciaPraticaSection } from '@/components/ExperienciaPraticaSection'
import { InformativoSection } from '@/components/InformativoSection'
import { MapSection } from '@/components/MapSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SecondaryFeatures />
        <BioDuda />
        <DireitoAntidiscriminatorioSection />
        <ExperienciaPraticaSection />
        <InformativoSection />
        <MapSection />
      </main>
      <Footer />
    </>
  )
}
