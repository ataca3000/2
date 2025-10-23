import React from 'react'

export default function Segmento({ titulo, imagen, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="relative cursor-pointer group overflow-hidden rounded-lg shadow-lg"
    >
      {/* Imagen de fondo */}
      <img 
        src={imagen} 
        alt={titulo} 
        className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition"></div>

      {/* Texto centrado */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-2xl font-bold text-orange-500 group-hover:text-white transition">
          {titulo}
        </h2>
      </div>
    </div>
  )
}
