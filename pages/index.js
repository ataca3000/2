
}
import { useState } from 'react'

// Importación de componentes modulares
import Hero from '../components/Hero'
import CatalogoLed from '../components/CatalogoLed'
import CatalogoPostes from '../components/CatalogoPostes'
import CatalogoSolar from '../components/CatalogoSolar'
import Instalaciones from '../components/Instalaciones'
import Cotiza from '../components/Cotiza'
import QuienesSomos from '../components/QuienesSomos'
import Mapa from '../components/Mapa'

// Componente principal de la página
export default function Home() {
  const [seccionActiva, setSeccionActiva] = useState(null)

  const handleBack = () => setSeccionActiva(null)

  // Mapeo de secciones dinámicas
  const secciones = {
    CatalogoLed: <CatalogoLed onBack={handleBack} />,
    CatalogoPostes: <CatalogoPostes onBack={handleBack} />,
    CatalogoSolar: <CatalogoSolar onBack={handleBack} />,
    Instalaciones: <Instalaciones onBack={handleBack} />,
    Cotiza: <Cotiza onBack={handleBack} />,
    QuienesSomos: <QuienesSomos onBack={handleBack} />,
    Mapa: <Mapa onBack={handleBack} />,
  }

  return (
    <div className='bg-black text-white font-sans min-h-screen flex flex-col'>
      {/* Header de navegación persistente */}
      <header className='bg-gray-900 p-4 flex justify-between items-center shadow-md'>
        <h1
          className='text-xl font-bold text-orange-500 cursor-pointer'
          onClick={handleBack}
        >
          Mi Empresa
        </h1>
        <nav className='flex gap-4'>
          <button onClick={() => setSeccionActiva('CatalogoLed')} className='hover:text-orange-400'>
            LED
          </button>
          <button onClick={() => setSeccionActiva('CatalogoPostes')} className='hover:text-orange-400'>
            Postes
          </button>
          <button onClick={() => setSeccionActiva('CatalogoSolar')} className='hover:text-orange-400'>
            Solar
          </button>
          <button onClick={() => setSeccionActiva('Instalaciones')} className='hover:text-orange-400'>
            Instalaciones
          </button>
          <button onClick={() => setSeccionActiva('Cotiza')} className='hover:text-orange-400'>
            Cotiza
          </button>
          <button onClick={() => setSeccionActiva('QuienesSomos')} className='hover:text-orange-400'>
            Nosotros
          </button>
          <button onClick={() => setSeccionActiva('Mapa')} className='hover:text-orange-400'>
            Mapa
          </button>
        </nav>
      </header>

      {/* Portada institucional */}
      {!seccionActiva && <Hero onSelect={setSeccionActiva} />}

      {/* Renderizado dinámico */}
      {seccionActiva && secciones[seccionActiva]}
    </div>
  )
}
