// Importación de React y estado
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
  // Estado para controlar qué sección está activa
  const [seccionActiva] = useState(null)

  // Función para volver a la portada
  const [handleBack] => setSeccionActiva(null)

  // Renderizado condicional según la sección activa
  return (
    <div className='bg-black text-white font-sans min-h-screen flex flex-col'>
      {/* Portada institucional */}
      {!seccionActiva && <Hero onSelect={setSeccionActiva} />}

      {/* Secciones dinámicas */}
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
