export default function Hero({ onSelect }) {
  const secciones = [
    { nombre: 'LED', key: 'CatalogoLed' },
    { nombre: 'Postes', key: 'CatalogoPostes' },
    { nombre: 'Solar', key: 'CatalogoSolar' },
    { nombre: 'Instalaciones', key: 'Instalaciones' },
    { nombre: 'Cotiza', key: 'Cotiza' },
    { nombre: 'Nosotros', key: 'QuienesSomos' },
    { nombre: 'Mapa', key: 'Mapa' },
  ]

  return (
    <section className="w-full h-screen bg-black grid grid-cols-2 md:grid-cols-3 gap-4 p-6">
      {secciones.map((sec) => (
        <div
          key={sec.key}
          className="bg-white/10 border border-white/30 rounded-lg flex flex-col justify-center items-center hover:bg-white/20 transition-all"
        >
          <h2 className="text-xl font-bold mb-2 text-orange-400">{sec.nombre}</h2>
          <button
            onClick={() => onSelect(sec.key)}
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded text-sm"
          >
            Ver catálogo
          </button>
        </div>
      ))}
    </section>
  )
}
