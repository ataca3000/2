import React, { useState } from 'react'

const products = [
  {
    id: 1,
    title: 'LED Streetlight 100W',
    image: '/img/led1.jpg',
    description: 'High efficiency 100W LED streetlight with aluminum body and IP65 protection.'
  },
  {
    id: 2,
    title: 'LED Floodlight 200W',
    image: '/img/led2.jpg',
    description: 'Powerful 200W LED floodlight, ideal for sports fields and large areas.'
  },
  {
    id: 3,
    title: 'Smart LED Panel',
    image: '/img/led3.jpg',
    description: 'Intelligent LED panel with remote control and dimmable brightness.'
  }
]

export default function CatalogoLed() {
  const [activeDesc, setActiveDesc] = useState(null)

  return (
    <section className="bg-black text-white p-6">
      <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">
        LED Urbano
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <div className="flex gap-3">
                <button 
                  className="bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded"
                >
                  Add to cart
                </button>
                <button 
                  onClick={() => setActiveDesc(activeDesc === product.id ? null : product.id)}
                  className="border border-orange-600 hover:bg-orange-600 hover:text-white text-orange-500 px-4 py-2 rounded"
                >
                  Description
                </button>
              </div>
            </div>

            {/* Overlay de descripción */}
            {activeDesc === product.id && (
              <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center p-6">
                <p className="text-gray-200 text-center">{product.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
