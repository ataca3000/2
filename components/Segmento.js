
export default function Segmento({ titulo, imagen, onClick }) {
  return (
    <div className="bg-gray-950 rounded-lg shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300">
      <img src={imagen} alt={titulo} className="w-full h-56 object-cover" />
      <div className="p-4 flex flex-col flex-grow justify-between text-center">
        <h3 className="text-xl font-bold mb-4">{titulo}</h3>
        <button
          onClick={onClick}
          className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-4 py-2 rounded transition-colors duration-300"
        >
          VER MÁS
        </button>
      </div>
    </div>
  )
}
