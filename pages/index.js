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
    <div className="bg-black text-white font-sans min-h-screen flex flex-col">
      {/* Encabezado institucional */}
      <header className="bg-gray-900 p-4 flex justify-between items-center shadow-md">
        <h1
          className="text-xl font-bold text-orange-500 cursor-pointer"
          onClick={handleBack}
        >
          <nav className="flex gap-4">
          {Object.keys(secciones).map((key) => (
            <button
              key={key}
              onClick={() => setSeccionActiva(key)}
              className="hover:text-orange-400"
            >
              {key.replace('Catalogo', '').replace('QuienesSomos', 'Nosotros')}
            </button>
          ))}
        </nav>
      </header>

      {/* Portada institucional con layout visual */}
      {!seccionActiva && <Hero onSelect={setSeccionActiva} />}

      {/* Renderizado dinámico de secciones */}
      {seccionActiva && secciones[seccionActiva]}
    </div>
  )
}
