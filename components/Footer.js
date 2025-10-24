import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo o nombre */}
        <div className="flex items-center gap-3">
          <img src="/img/logo.png" alt="Logo" className="h-10 w-auto" />
          <span className="text-orange-500 font-bold text-lg">
            Multiservicios e Iluminación Veracruz
          </span>
        </div>

        {/* Navegación rápida */}
        <div className="flex gap-6">
          <a href="#" className="hover:text-orange-500 transition">Inicio</a>
          <a href="#" className="hover:text-orange-500 transition">Servicios</a>
          <a href="#" className="hover:text-orange-500 transition">Contacto</a>
        </div>

        {/* Redes sociales */}
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
            Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
            Instagram
          </a>
          <a href="mailto:contacto@empresa.com" className="hover:text-orange-500 transition">
            Email
          </a>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} Multiservicios e Iluminación Veracruz. Todos los derechos reservados.
      </div>
    </footer>
  )
}
