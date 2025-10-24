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
    if (!formData.name || !formData.contact || !formData.message) {
      alert('Por favor completa al menos nombre, contacto y mensaje.')
      return
    }

    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '521234567890'
    const text = `Nueva cotización:
- Nombre: ${formData.name}
- Contacto: ${formData.contact}
- Dirección: ${formData.address}
- Mensaje: ${formData.message}`

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }

  return (
    <section className='bg-black text-white p-6 rounded-lg shadow-lg max-w-xl mx-auto'>
      <h2 className='text-3xl font-bold text-orange-500 mb-6 text-center'>
        Cotiza ahora
      </h2>
      <div className='flex flex-col gap-4'>
        <input 
          type='text' 
          name='name' 
          placeholder='Nombre completo' 
          value={formData.name}
          onChange={handleChange}
          required
          className='p-3 rounded bg-gray-800 text-white border border-gray-600 focus:border-orange-500'
        />
        <input 
          type='text' 
          name='contact' 
          placeholder='Correo o teléfono' 
          value={formData.contact}
          onChange={handleChange}
          required
          className='p-3 rounded bg-gray-800 text-white border border-gray-600 focus:border-orange-500'
        />
        <input 
          type='text' 
          name='address' 
          placeholder='Dirección (opcional)' 
          value={formData.address}
          onChange={handleChange}
          className='p-3 rounded bg-gray-800 text-white border border-gray-600 focus:border-orange-500'
        />
        <textarea 
          name='message' 
          placeholder='Mensaje o detalles de la cotización' 
          value={formData.message}
          onChange={handleChange}
          required
          className='p-3 rounded bg-gray-800 text-white border border-gray-600 focus:border-orange-500 h-32 resize-none'
        />
        <button 
          onClick={handleSubmit}
          className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded transition duration-300'
        >
          Enviar por WhatsApp
        </button>
      </div>
    </section>
  )
}
