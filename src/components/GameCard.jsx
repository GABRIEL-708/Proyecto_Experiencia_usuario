import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function GameCard({ game }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/producto/${game.id}`);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      onClick={handleClick}
      className="flex-shrink-0 w-80 bg-card rounded-lg overflow-hidden cursor-pointer group"
    >
      <div className="relative overflow-hidden">
        <img
          src={game.image}
          alt={game.altTag}
          className="w-full h-48 object-cover transition-all duration-200 group-hover:brightness-110"
          loading="lazy"
        />
        {game.discount && (
          <div className="absolute top-4 right-4 bg-success text-white px-3 py-1 rounded-lg font-bold">
            -{game.discount}%
          </div>
        )}
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-headline font-bold text-white text-card-foreground line-clamp-1">
          {game.name}
        </h3>

        <div className="flex flex-wrap gap-2">
          {game.genres.map((genre) => (
            <span
              key={genre}
              className="px-3 py-1 bg-tertiary text-white text-tertiary-foreground rounded-full text-xs font-medium"
            >
              {genre}
            </span>
          ))}
        </div>

        <div className="flex items-baseline gap-3">
          {game.discount && (
            <span className="text-lg text-white text-gray-400 line-through">
              ${game.originalPrice}
            </span>
          )}
          <span className="text-2xl text-white font-headline font-bold text-card-foreground">
            ${game.price}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
