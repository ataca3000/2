import React from 'react'

const instalacionesData = [
  {
    id: 1,
    title: 'Instalación en Parque Central',
    description: 'Proyecto de alumbrado LED en áreas recreativas del parque central.',
    pdf: '/pdfs/instalacion1.pdf'
  },
  {
    id: 2,
    title: 'Iluminación en Zona Industrial',
    description: 'Implementación de postes coloniales y luminarias LED en zona industrial.',
    pdf: '/pdfs/instalacion2.pdf'
  },
  {
    id: 3,
    title: 'Proyecto Solar en Comunidad Rural',
    description: 'Sistema de alumbrado solar inteligente en comunidad rural.',
    pdf: '/pdfs/instalacion3.pdf'
  }
]

export default function Instalaciones() {
  return (
    <section className="bg-black text-white p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-10 text-center uppercase tracking-wide">
        Instalaciones
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {instalacionesData.map((inst) => (
          <div
            key={inst.id}
            className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg flex flex-col justify-between hover:border-orange-500 transition-all"
          >
            <div>
              <h3 className="text-xl font-semibold text-orange-400 mb-3">
                {inst.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {inst.description}
              </p>
            </div>
            <a
              href={inst.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded-lg text-center font-semibold transition"
            >
              Ver PDF
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
