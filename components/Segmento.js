export default function Segmento({ titulo, imagen, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="cursor-pointer group relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
    >
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition duration-300 group-hover:brightness-75"
        style={{ backgroundImage: `url(${imagen})` }}
      ></div>

      {/* Overlay de color */}
      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300"></div>

      {/* Título centrado */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
        <h2 className="text-xl font-bold text-orange-400 group-hover:text-white transition duration-300">
          {titulo}
        </h2>
      </div>
    </div>
  )
}
