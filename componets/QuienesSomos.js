import React from 'react'

export default function QuienesSomos() {
  return (
    <section className="bg-black text-white p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">
        Conócenos
      </h2>

      {/* Visión */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-orange-400 mb-2">Visión</h3>
        <p className="text-gray-300 leading-relaxed">
          Ser líderes en soluciones de iluminación urbana y energía inteligente, 
          ofreciendo innovación, calidad y confianza para transformar los espacios públicos y privados.
        </p>
      </div>

      {/* Misión */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-orange-400 mb-2">Misión</h3>
        <p className="text-gray-300 leading-relaxed">
          Brindar servicios integrales de iluminación y multiservicios con un enfoque en eficiencia, 
          sustentabilidad y diseño, generando valor para nuestros clientes y comunidades.
        </p>
      </div>

      {/* CV del dueño */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-orange-400 mb-2">Nuestro Fundador</h3>
        <p className="text-gray-300 leading-relaxed">
          Con amplia experiencia en proyectos de iluminación y gestión de servicios, 
          el fundador de Multiservicios e Iluminación Veracruz ha liderado iniciativas 
          que combinan innovación tecnológica con compromiso social.  
          Su trayectoria incluye la dirección de proyectos urbanos, instalación de sistemas solares 
          y desarrollo de soluciones personalizadas para empresas y comunidades.
        </p>
      </div>
    </section>
  )
}
