import React from 'react'
import logo from '../img/logo.svg';

export default function Header(){
  return (
    <header className="">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className='flex'>

        <img src={logo} alt='Logo' className='h-20 w-20'></img>
        <div className="text-2xl content-center text-bold text-white font-AntonCustom">L.A Store</div>
        </div>
        <nav>
          <ul className="flex gap-4 text-x text-white font-AntonCustom">
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
