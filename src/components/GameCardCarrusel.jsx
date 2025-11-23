import { useRef } from 'react';
import { Button } from '../components/button';
import GameCard from './GameCard';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

export default function GameCarouselSection({ title, games, sectionId }) {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="px-8 pb-32" id={sectionId}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl text-white font-headline font-bold text-hero-text">
            {title}
          </h2>
          <Button className="bg-cta-primary border border-white text-white hover:bg-secondary font-normal">
            Ver Todos
          </Button>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute text-white left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 bg-tertiary text-tertiary-foreground rounded-full hover:bg-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Desplazar a la izquierda"
          >
            <ChevronLeftIcon className="w-8 h-8" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute text-white right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 bg-tertiary text-tertiary-foreground rounded-full hover:bg-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Desplazar a la derecha"
          >
            <ChevronRightIcon className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}
