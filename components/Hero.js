export default function Hero({ onSelect }) {
  const servicios = [
    { key: 'CatalogoLed', img: '/img/ledurbano.jpg', label: 'LED URBANO' },
    { key: 'CatalogoPostes', img: '/img/postes.jpg', label: 'POSTES COLONIALES' },
    { key: 'CatalogoSolar', img: '/img/solar.jpg', label: 'SOLAR INTELIGENTE' },
    { key: 'Instalaciones', img: '/img/instalaciones.jpg', label: 'INSTALACIONES RECIENTES' },
  ]

  return (
    <section
      className='w-full min-h-screen bg-black bg-cover bg-center flex items-center justify-center p-6'
      style={{ backgroundImage: 'url(/img/streetlights-bg.jpg)' }}
    >
      <div className='flex w-full max-w-6xl gap-8'>
        {/* Lado izquierdo: nombre y botones */}
        <div className='flex flex-col justify-center w-1/3 text-white'>
          <h2 className='text-3xl font-bold mb-2'>Multiservicios e Iluminación Veracruz</h2>
          <p className='text-sm mb-6'>Soluciones en alumbrado público y energía solar</p>
          <div className='flex flex-col gap-4'>
            <button
              onClick={() => onSelect('QuienesSomos')}
              className='px-4 py-2 bg-orange-600 hover:bg-orange-500 rounded text-sm font-semibold'
            >
              Ver servicios
            </button>
            <button
              onClick={() => onSelect('Cotiza')}
              className='px-4 py-2 bg-orange-600 hover:bg-orange-500 rounded text-sm font-semibold'
            >
              Solicitar cotización
            </button>
          </div>
        </div>

        {/* Lado derecho: cuadrícula 2x2 de servicios */}
        <div className='grid grid-cols-2 gap-4 w-2/3'>
          {servicios.map((item) => (
            <div
              key={item.key}
              onClick={() => onSelect(item.key)}
              className='cursor-pointer relative overflow-hidden rounded-lg border border-white/30 hover:scale-105 transition-transform duration-300 aspect-square'
            >
              <img
                src={item.img}
                alt={item.label}
                className='object-cover w-full h-full'
              />
              <div className='absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-2 text-sm font-semibold'>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
