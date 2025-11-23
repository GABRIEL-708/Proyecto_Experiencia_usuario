import { create } from 'zustand';

const allGames = [
  {
    id: 'mortal-kombat-1',
    name: 'Mortal Kombat 1',
    price: 59.99,
    image: 'https://c.animaapp.com/mi7vr5pjun9VdE/img/ai_1.png',
    altTag: 'mortal kombat cover',
    genres: ['Lucha', 'Acción', 'Multijugador'],
    description: 'La legendaria saga de lucha regresa con gráficos renovados y nuevos personajes.',
  },
  {
    id: 'battlefield-2042',
    name: 'Battlefield 2042',
    price: 49.99,
    image: 'https://c.animaapp.com/mi7vr5pjun9VdE/img/ai_2.png',
    altTag: 'battlefield scene',
    genres: ['Shooter', 'Acción', 'Multijugador'],
    description: 'Combate futurista en mapas masivos con hasta 128 jugadores.',
  },
  {
    id: 'god-of-war',
    name: 'God of War Ragnarök',
    price: 69.99,
    image: 'https://c.animaapp.com/mi7vr5pjun9VdE/img/ai_3.png',
    altTag: 'god of war scene',
    genres: ['Aventura', 'Acción', 'Historia'],
    description: 'Continúa la épica saga nórdica de Kratos y Atreus.',
  },
  {
    id: 'fantasy-world',
    name: 'Fantasy World Adventures',
    price: 39.99,
    image: 'https://c.animaapp.com/mi7vr5pjun9VdE/img/ai_4.png',
    altTag: 'fantasy world',
    genres: ['RPG', 'Aventura', 'Mundo Abierto'],
    description: 'Explora un vasto mundo de fantasía lleno de magia y misterio.',
  },
  {
    id: 'cyber-racing',
    name: 'Cyber Racing 2077',
    price: 44.99,
    originalPrice: 59.99,
    discount: 25,
    image: 'https://c.animaapp.com/mi7vr5pjun9VdE/img/ai_5.png',
    altTag: 'blue gradient background',
    genres: ['Carreras', 'Acción', 'Futurista'],
    description: 'Carreras de alta velocidad en un mundo cyberpunk.',
  },
  {
    id: 'space-odyssey',
    name: 'Space Odyssey',
    price: 54.99,
    image: 'https://c.animaapp.com/mi7vr5pjun9VdE/img/ai_1.png',
    altTag: 'mortal kombat cover',
    genres: ['Aventura', 'Ciencia Ficción', 'Exploración'],
    description: 'Viaja por el espacio en una aventura épica.',
  },
  {
    id: 'medieval-legends',
    name: 'Medieval Legends',
    price: 29.99,
    originalPrice: 49.99,
    discount: 40,
    image: 'https://c.animaapp.com/mi7vr5pjun9VdE/img/ai_2.png',
    altTag: 'battlefield scene',
    genres: ['RPG', 'Estrategia', 'Medieval'],
    description: 'Construye tu reino y conquista tierras enemigas.',
  },
  {
    id: 'horror-mansion',
    name: 'Horror Mansion',
    price: 34.99,
    image: 'https://c.animaapp.com/mi7vr5pjun9VdE/img/ai_3.png',
    altTag: 'god of war scene',
    genres: ['Terror', 'Aventura', 'Supervivencia'],
    description: 'Sobrevive en una mansión embrujada llena de secretos.',
  },
];

export const useGameStore = create((set, get) => ({
  mostPurchased: allGames.slice(0, 4),
  offers: allGames.filter(game => game.discount).concat(allGames.slice(0, 2)),
  more: allGames.slice(2, 6),
  cart: [],
  
  addToCart: (game) => {
    set((state) => ({
      cart: [...state.cart, game],
    }));
  },
  
  removeFromCart: (gameId) => {
    set((state) => ({
      cart: state.cart.filter((game) => game.id !== gameId),
    }));
  },
  
  getGameById: (id) => {
    return allGames.find((game) => game.id === id);
  },
}));
