import React, { useState } from 'react'

export default function Cotiza() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    address: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    const phoneNumber = "521234567890" // <-- aquí pones el número de WhatsApp de la empresa
    const text = `Nueva cotización:
- Nombre: ${formData.name}
- Contacto: ${formData.contact}
- Dirección: ${formData.address}
- Mensaje: ${formData.message}`

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
  }

  return (
    <section className="bg-black text-white p-6 rounded-lg shadow-lg max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">
        Cotiza ahora
      </h2>
      <div className="flex flex-col gap-4">
        <input 
          type="text" 
          name="name" 
          placeholder="Nombre completo" 
          value={formData.name}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800 text-white border border-gray-600 focus:border-orange-500"
        />
        <input 
          type="text" 
          name="contact" 
          placeholder="Correo o teléfono" 
          value={formData.contact}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800 text-white border border-gray-600 focus:border-orange-500"
        />
        <input 
          type="text" 
          name="address" 
          placeholder="Dirección de envío" 
          value={formData.address}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800 text-white border border-gray-600 focus:border-orange-500"
        />
        <textarea 
          name="message" 
          placeholder="Detalles de la cotización" 
          value={formData.message}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800 text-white border border-gray-600 focus:border-orange-500 h-32"
        />
        <button 
          onClick={handleSubmit}
          className="bg-orange-600 hover:bg-orange-500 transition px-6 py-3 rounded-lg font-semibold text-white shadow-lg"
        >
          Enviar a WhatsApp
        </button>
      </div>
    </section>
  )
}
