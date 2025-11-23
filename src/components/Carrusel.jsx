import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './button';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const featuredGames = [
  {
    id: 'mortal-kombat-1',
    name: 'Mortal Kombat 1',
    image: 'https://c.animaapp.com/mi7vr5pjun9VdE/img/ai_1.png',
    altTag: 'mortal kombat cover',
    price: 59.99,
    genres: ['Lucha', 'Acción', 'Multijugador'],
  },
  {
    id: 'battlefield-2042',
    name: 'Battlefield 2042',
    image: 'https://c.animaapp.com/mi7vr5pjun9VdE/img/ai_2.png',
    altTag: 'battlefield scene',
    price: 49.99,
    genres: ['Shooter', 'Acción', 'Multijugador'],
  },
  {
    id: 'god-of-war',
    name: 'God of War Ragnarök',
    image: 'https://c.animaapp.com/mi7vr5pjun9VdE/img/ai_3.png',
    altTag: 'god of war scene',
    price: 69.99,
    genres: ['Aventura', 'Acción', 'Historia'],
  },
];

export default function FeaturedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredGames.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredGames.length) % featuredGames.length);
  };

  const currentGame = featuredGames[currentIndex];

  const handleBuyClick = () => {
    navigate(`/producto/${currentGame.id}`);
  };

  return (
    <section className="px-8 pb-32" id="juegos">
      <div className="max-w-7xl mx-auto text-white">
        <h2 className="text-3xl font-headline font-bold text-hero-text mb-12">
          Destacados y Recomendados
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-lg overflow-hidden bg-card"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 bg-blue-800/75 gap-8 p-8">
                <div className="space-y-6">
                  <img
                    src={currentGame.image}
                    alt={currentGame.altTag}
                    className="w-full rounded-lg"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col justify-center space-y-6">
                  <h3 className="text-5xl font-headline font-bold text-card-foreground">
                    {currentGame.name}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {currentGame.genres.map((genre) => (
                      <span
                        key={genre}
                        className="px-4 py-2 bg-tertiary text-tertiary-foreground rounded-full text-sm font-medium"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>

                  <div className="text-4xl font-headline font-bold text-card-foreground">
                    ${currentGame.price}
                  </div>

                  <Button
                    onClick={handleBuyClick}
                    className="w-full lg:w-auto px-12 py-6 text-lg bg-black text-cta-primary-foreground hover:bg-secondary font-normal"
                  >
                    Comprar
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-tertiary text-tertiary-foreground rounded-full hover:bg-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Anterior"
          >
            <ChevronLeftIcon className="w-8 h-8" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-tertiary text-tertiary-foreground rounded-full hover:bg-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Siguiente"
          >
            <ChevronRightIcon className="w-8 h-8" />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {featuredGames.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-secondary w-8'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
