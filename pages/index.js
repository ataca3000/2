import { useState } from 'react'
import Hero from '../componets/Hero.js'
import Segmento from '../componets/Segmento.js'
import CatalogoLed from '../componets/CatalogoLed.js'
import CatalogoPostes from '../componets/CatalogoPostes.js'
import CatalogoSolar from '../componets/CatalogoSolar.js'
import Instalaciones from '../componets/Instalaciones.js'
import Cotiza from '../componets/Cotiza.js'
import QuienesSomos from '../componets/QuienesSomos.js'
import Mapa from '../componets/Mapa.js'
import Footer from '../componets/Footer.js'

export default function Home() {
  const [seccionActiva, setSeccionActiva] = useState(null)
  const handleBack = () => setSeccionActiva(null)

  return (
    <div className="bg-black text-white font-sans min-h-screen flex flex-col">
      {!seccionActiva && <Hero onSelect={setSeccionActiva} />}

      {!seccionActiva && (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          <Segmento titulo="LED URBANO" imagen="/img/ledurbano.jpg" onClick={() => setSeccionActiva('CatalogoLed')} />
          <Segmento titulo="POSTES COLONIALES" imagen="/img/postes.jpg" onClick={() => setSeccionActiva('CatalogoPostes')} />
          <Segmento titulo="SOLAR INTELIGENTE" imagen="/img/solar.jpg" onClick={() => setSeccionActiva('CatalogoSolar')} />
          <Segmento titulo="INSTALACIONES RECIENTES" imagen="/img/instalaciones.jpg" onClick={() => setSeccionActiva('Instalaciones')} />
        </section>
      )}

      {seccionActiva === 'CatalogoLed' && (
        <div className="p-6">
          <button onClick={handleBack} className="bg-orange-600 px-4 py-2 rounded mb-4">← Regresar</button>
          <CatalogoLed />
        </div>
      )}

      {seccionActiva === 'CatalogoPostes' && (
        <div className="p-6">
          <button onClick={handleBack} className="bg-orange-600 px-4 py-2 rounded mb-4">← Regresar</button>
          <CatalogoPostes />
        </div>
      )}

      {seccionActiva === 'CatalogoSolar' && (
        <div className="p-6">
          <button onClick={handleBack} className="bg-orange-600 px-4 py-2 rounded mb-4">← Regresar</button>
          <CatalogoSolar />
        </div>
      )}

      {seccionActiva === 'Instalaciones' && (
        <div className="p-6">
          <button onClick={handleBack} className="bg-orange-600 px-4 py-2 rounded mb-4">← Regresar</button>
          <Instalaciones />
        </div>
      )}

      {seccionActiva === 'Cotiza' && (
        <div className="p-6">
          <button onClick={handleBack} className="bg-orange-600 px-4 py-2 rounded mb-4">← Regresar</button>
          <Cotiza />
        </div>
      )}

      {seccionActiva === 'QuienesSomos' && (
        <div className="p-6">
          <button onClick={handleBack} className="bg-orange-600 px-4 py-2 rounded mb-4">← Regresar</button>
          <QuienesSomos />
        </div>
      )}

      {seccionActiva === 'Mapa' && (
        <div className="p-6">
          <button onClick={handleBack} className="bg-orange-600 px-4 py-2 rounded mb-4">← Regresar</button>
          <Mapa />
        </div>
      )}

      <Footer />
    </div>
  )
}
