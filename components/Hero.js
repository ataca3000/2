import Image from 'next/image'

const bloques = [
  {
    id: 'CatalogoLed',
    titulo: 'LED URBANO',
    imagen: '/img/ledurbano.jpg'
  },
  {
    id: 'CatalogoPostes',
    titulo: 'POSTES COLONIALES',
    imagen: '/img/postescoloniales.jpg'
  },
  {
    id: 'CatalogoSolar',
    titulo: 'SOLAR INTELIGENTE',
    imagen: '/img/solarsmart.jpg'
  },
  {
    id: 'Instalaciones',
    titulo: 'INSTALACIONES RECIENTES',
    imagen: '/img/instalaciones.jpg'
  }
]

export default function Hero({ onSelect }) {
  return (
    <section className='bg-black text-white p-6'>
      <h1 className='text-4xl font-bold text-orange-500 text-center mb-8'>
        Multiservicios e Iluminación Veracruz
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {bloques.map((bloque) => (
          <div 
            key={bloque.id} 
            onClick={() => onSelect(bloque.id)}
            className='cursor-pointer group relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300'
          >
            <Image 
              src={bloque.imagen}
              alt={bloque.titulo}
              width={600}
              height={400}
              className='object-cover w-full h-auto'
            />
            <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 text-center'>
              <h3 className='text-xl font-bold text-orange-400 group-hover:text-white transition-colors'>
                {bloque.titulo}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
