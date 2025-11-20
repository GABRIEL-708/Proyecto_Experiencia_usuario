import React from 'react'

export default function Header(){
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-AntonCustom">L.A Store</div>
        <nav>
          <ul className="flex gap-4 text-sm text-gray-600">
            <li>Juegos</li>
            <li>Nosotros</li>
            <li>FQA</li>
            <li>Contacto</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
