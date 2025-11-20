
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start relative" style={{
      background: 'linear-gradient(180deg, #0f2027 0%, #2c5364 100%)'
    }}>
      {/* Fondo superior con imagen y overlay */}
  <div className="w-full h-80 md:h-[420px] relative">
          <img
            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1600&q=90"
            alt="Videojuegos fondo"
            className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
            draggable="false"
          />
      </div>
      {/* Card de login flotante */}
      <div className="w-full max-w-md bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl -mt-24 p-8 flex flex-col items-center z-10 border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Login</h2>
        {/* Username */}
        <div className="flex items-center w-full mb-4 bg-gray-200 rounded-lg overflow-hidden">
          <span className="flex items-center justify-center w-14 h-14 text-2xl text-gray-500 bg-gray-300">
            <AccountCircleIcon style={{ fontSize: 32 }} />
          </span>
          <input type="text" placeholder="Username" className="flex-1 h-14 px-4 text-xl font-semibold bg-gray-200 focus:outline-none" />
        </div>
        {/* Password */}
        <div className="flex items-center w-full mb-2 bg-gray-200 rounded-lg overflow-hidden">
          <span className="flex items-center justify-center w-14 h-14 text-2xl text-gray-500 bg-gray-300">
            <LockIcon style={{ fontSize: 32 }} />
          </span>
          <input type="password" placeholder="************" className="flex-1 h-14 px-4 text-xl font-semibold bg-gray-200 focus:outline-none" />
        </div>
        <div className="w-full flex justify-end mb-6">
          <button className="text-gray-600 font-semibold text-sm hover:underline">Reset password</button>
        </div>
        {/* Botón Login */}
        <button className="w-full py-3 mb-3 rounded-lg text-xl font-bold text-white bg-gradient-to-r from-blue-900 to-teal-600 shadow-md hover:opacity-90 transition">Login</button>
        {/* Botón Crear cuenta */}
        <button className="w-full py-3 mb-6 rounded-lg text-xl font-bold text-gray-700 bg-gray-300 shadow hover:bg-gray-400 transition">Create Account</button>
        {/* Login con Google y Facebook */}
        <div className="flex gap-8 justify-center">
          <button className="bg-white border rounded-full p-3 shadow hover:shadow-lg transition"><img src="https://pngimg.com/uploads/google/google_PNG19635.png" alt="Google" className="w-8 h-8" /></button>
          <button className="bg-white border rounded-full p-3 shadow hover:shadow-lg transition"><img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook" className="w-8 h-8" /></button>
        </div>
      </div>
    </div>
  );
}
