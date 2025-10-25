import Segmento from './Segmento'

export default function Hero({ onSelect }) {
  return (
    <section className="flex flex-col lg:flex-row h-screen w-full bg-black text-white">
      
      {/* Imagen principal izquierda */}
      <div 
        className="lg:w-1/2 w-full h-64 lg:h-full bg-cover bg-center relative"
        style={{ backgroundImage: "url('/img/streetlights-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full p-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-orange-500 mb-4">
            Multiservicios e Iluminación Veracruz
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Soluciones en alumbrado urbano, energía inteligente y diseño modular
          </p>

          {/* Botones principales */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onSelect('Cotiza')}
              className="bg-orange-600 hover:bg-orange-500 transition px-6 py-2 rounded text-white font-semibold"
            >
              Cotiza ahora
            </button>
            <button 
              onClick={() => onSelect('QuienesSomos')}
              className="border border-orange-600 hover:bg-orange-600 hover:text-white transition px-6 py-2 rounded text-orange-500 font-semibold"
            >
              Conócenos
            </button>
            <button 
              onClick={() => onSelect('Instalaciones')}
              className="bg-gray-800 hover:bg-gray-700 transition px-6 py-2 rounded text-orange-500 border border-gray-600 font-semibold"
            >
              Instalaciones
            </button>
          </div>

          {/* Ubicación */}
          <button 
            onClick={() => onSelect('Mapa')}
            className="mt-6 text-orange-500 hover:text-white transition flex flex-col items-center"
          >
            <span className="text-3xl">📍</span>
            <span className="text-sm font-semibold">Ubicación</span>
          </button>
        </div>
      </div>

      {/* Cuatro módulos a la derecha */}
      <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4 p-6">
        <Segmento 
          titulo="LED URBANO" 
          imagen="/img/ledurbano.jpg" 
          onClick={() => onSelect('CatalogoLed')}
        />
        <Segmento 
          titulo="POSTES COLONIALES" 
          imagen="/img/postes.jpg" 
          onClick={() => onSelect('CatalogoPostes')}
        />
        <Segmento 
          titulo="SOLAR INTELIGENTE" 
          imagen="/img/solar.jpg" 
          onClick={() => onSelect('CatalogoSolar')}
        />
        <Segmento 
          titulo="INSTALACIONES RECIENTES" 
          imagen="/img/instalaciones.jpg" 
          onClick={() => onSelect('Instalaciones')}
        />
      </div>
    </section>
  )
}
