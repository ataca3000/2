import React from 'react'

export default function Mapa() {
  return (
    <section className="bg-black text-white p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">
        Nuestra Ubicación
      </h2>
      <div className="w-full h-96 rounded-lg overflow-hidden border-2 border-orange-600">
        <iframe
          title="Mapa Ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.123456789!2d-98.1234567!3d19.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfd123456789%3A0xabcdef123456789!2sTetla%20de%20la%20Solidaridad%2C%20Tlaxcala!5e0!3m2!1ses!2smx!4v1699999999999!5m2!1ses!2smx"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  )
}
