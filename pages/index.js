import { useState } from 'react'
import Hero from '../components/Hero'
import CatalogoLed from '../components/CatalogoLed'
import CatalogoPostes from '../components/CatalogoPostes'
import CatalogoSolar from '../components/CatalogoSolar'
import Instalaciones from '../components/Instalaciones'
import Cotiza from '../components/Cotiza'
import QuienesSomos from '../components/QuienesSomos'
import Mapa from '../components/Mapa'

export default function Home() {
  const [seccionActiva, setSeccionActiva] = useState(null)
  const handleBack = () => setSeccionActiva(null)

  return (
    <div className="bg-black text-white font-sans min-h-screen flex flex-col">
      {!seccionActiva && <Hero onSelect={setSeccionActiva} />}

      {seccionActiva === 'CatalogoLed' && <CatalogoLed onBack={handleBack} />}
      {seccionActiva === 'CatalogoPostes' && <CatalogoPostes onBack={handleBack} />}
      {seccionActiva === 'CatalogoSolar' && <CatalogoSolar onBack={handleBack} />}
      {seccionActiva === 'Instalaciones' && <Instalaciones onBack={handleBack} />}
      {seccionActiva === 'Cotiza' && <Cotiza onBack={handleBack} />}
      {seccionActiva === 'QuienesSomos' && <QuienesSomos onBack={handleBack} />}
      {seccionActiva === 'Mapa' && <Mapa onBack={handleBack} />}
    </div>
  )
      }
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
          <button onClick={handleBack} className="bg-orange-50 
       px-4 py-2 rounded mb-4">← Regresar</button>
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
