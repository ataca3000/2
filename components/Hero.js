import Image from 'next/image'

const bloques = [
  { id: 'CatalogoLed', imagen: '/img/ledurbano.jpg' },
  { id: 'CatalogoPostes', imagen: '/img/postes.jpg' },
  { id: 'CatalogoSolar', imagen: '/img/solar.jpg' },
  { id: 'Instalaciones', imagen: '/img/instalaciones.jpg' }
]

export default function Hero({ onSelect }) {
  return (
    <section className='bg-black text-white min-h-screen flex flex-col md:flex-row'>

      {/* 📱 Móvil: portada con botones sobre la imagen */}
      <div className='md:hidden relative w-full h-64'>
        <Image
          src='/img/portada.jpg' // Asegúrate de tener esta imagen en /public/img/
          alt='Portada institucional'
          fill
          className='object-cover'
          sizes='100vw'
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center gap-3'>
          <button
            onClick={() => onSelect('Cotiza')}
            className='bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded text-sm font-semibold w-32'
          >
            Cotiza
          </button>
          <button
            onClick={() => onSelect('Servicios')}
            className='border border-orange-600 hover:bg-orange-600 hover:text-white text-orange-500 px-4 py-2 rounded text-sm font-semibold w-32'
          >
            Servicios
          </button>
        </div>
      </div>

      {/* 🖥️ Escritorio: cuadrícula izquierda + portada derecha */}
      <div className='hidden md:grid w-1/2 grid-cols-2 grid-rows-2 gap-0'>
        {bloques.map((bloque) => (
          <div
            key={bloque.id}
            onClick={() => onSelect(bloque.id)}
            className='cursor-pointer relative overflow-hidden hover:scale-105 transition-transform duration-300'
          >
            <Image
              src={bloque.imagen}
              alt={`Sección ${bloque.id}`}
              fill
              className='object-cover'
              sizes='50vw'
            />
          </div>
        ))}
      </div>

      <div className='hidden md:flex w-1/2 flex-col items-center justify-center p-6 gap-6'>
        <h1 className='text-4xl font-bold text-orange-500 text-center'>
          Multiservicios e Iluminación Veracruz
        </h1>
        <div className='flex flex-col items-center gap-4 mt-4'>
          <button
            onClick={() => onSelect('Servicios')}
            className='bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded text-sm font-semibold'
          >
            Servicios
          </button>
          <button
            onClick={() => onSelect('Cotiza')}
            className='border border-orange-600 hover:bg-orange-600 hover:text-white text-orange-500 px-4 py-2 rounded text-sm font-semibold'
          >
            Cotiza
          </button>
        </div>
      </div>

      {/* 📱 Móvil: cuadrícula de bloques debajo */}
      <div className='md:hidden grid grid-cols-2 grid-rows-2 gap-0 mt-6'>
        {bloques.map((bloque) => (
          <div
            key={bloque.id}
            onClick={() => onSelect(bloque.id)}
            className='cursor-pointer relative overflow-hidden hover:scale-105 transition-transform duration-300'
          >
            <Image
              src={bloque.imagen}
              alt={`Sección ${bloque.id}`}
              fill
              className='object-cover'
              sizes='50vw'
            />
          </div>
        ))}
      </div>
    </section>
  )
              }
