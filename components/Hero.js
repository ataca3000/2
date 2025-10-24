import React from 'react'

export default function Hero({ onSelect }) {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-black text-center">
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40" 
        style={{ backgroundImage: "url('/img/streetlights-bg.jpg')" }}
      ></div>

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-orange-500 mb-6">
          Multiservicios e Iluminación Veracruz
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          Soluciones en alumbrado urbano, energía inteligente y diseño modular
        </p>

        {/* Botones principales */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
          <button 
            onClick={() => onSelect('Cotiza')}
            className="bg-orange-600 hover:bg-orange-500 transition px-8 py-3 rounded-lg font-semibold text-white shadow-lg"
          >
            Cotiza ahora
          </button>
          <button 
            onClick={() => onSelect('QuienesSomos')}
            className="border border-orange-600 hover:bg-orange-600 hover:text-white transition px-8 py-3 rounded-lg font-semibold text-orange-500"
          >
            Conócenos
          </button>
          <button 
            onClick={() => onSelect('Instalaciones')}
            className="bg-gray-800 hover:bg-gray-700 transition px-8 py-3 rounded-lg font-semibold text-orange-500 border border-gray-600"
          >
            Instalaciones
          </button>
        </div>

        {/* Icono de ubicación */}
        <div className="flex justify-center">
          <button 
            onClick={() => onSelect('Mapa')}
            className="flex flex-col items-center text-orange-500 hover:text-white transition"
          >
            <span className="text-4xl">📍</span>
            <span className="mt-2 font-semibold">Ubicación</span>
          </button>
        </div>
      </div>
    </section>
  )
}
