export default function Hero({ onSelect }) {
  const grandes = [
    { key: 'CatalogoSolar', img: '/img/solar.jpg' },
    { key: 'Instalaciones', img: '/img/instalaciones.jpg' },
    { key: 'CatalogoPostes', img: '/img/postes.jpg' },
    { key: 'CatalogoLed', img: '/img/ledurbano.jpg' },
  ]

  const pequeños = [
    { key: 'Cotiza', label: 'Cotiza' },
    { key: 'QuienesSomos', label: 'Nosotros' },
    { key: 'Mapa', label: 'Mapa' },
  ]

  return (
    <section
      className="w-full min-h-screen bg-black bg-cover bg-center flex items-center justify-center p-6"
      style={{ backgroundImage: "url('/img/streetlights-bg.jpg')" }}
    >
      <div className="flex gap-8 w-full max-w-6xl">
        {/* Cuadrícula 2x2 de imágenes grandes */}
        <div className="grid grid-cols-2 gap-4 flex-grow">
          {grandes.map((sec) => (
            <div
              key={sec.key}
              onClick={() => onSelect(sec.key)}
              className="cursor-pointer relative overflow-hidden rounded-lg border border-white/30 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={sec.img}
                alt={sec.key}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* Botones pequeños alineados verticalmente */}
        <div className="flex flex-col gap-4 justify-center">
          {pequeños.map((btn) => (
            <button
              key={btn.key}
              onClick={() => onSelect(btn.key)}
              className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded text-sm font-semibold"
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
                }
