import React from 'react'

export default function Header(){
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-semibold">Mi Proyecto</div>
        <nav>
          <ul className="flex gap-4 text-sm text-gray-600">
            <li>Inicio</li>
            <li>Docs</li>
            <li>Contacto</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
