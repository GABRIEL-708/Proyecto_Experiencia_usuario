import React from 'react'
import Header from './components/Header'

export default function App(){
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <main className="p-8">
        <section className="max-w-4xl mx-auto bg-white rounded-lg shadow p-10">
          <h1 className="text-3xl font-bold mb-4">Bienvenido a React + Tailwind</h1>
          <p className="text-gray-600">Este es un proyecto inicializado con Vite y TailwindCSS. Desde aquí puedes crear tus componentes y páginas.</p>
        </section>
      </main>
    </div>
  )
}
