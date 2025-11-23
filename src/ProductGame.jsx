import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Button } from './components/button';
import { useGameStore } from './store/gameStore';
import { ArrowLeftIcon, ShoppingCartIcon } from 'lucide-react';

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getGameById, addToCart } = useGameStore();
  
  const game = getGameById(id || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!game) {
    return (
      <div className="main-h-screen bg-gradient-1">
        <Header />
        <main className="pt-32 px-8 pb-32">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-headline font-bold text-hero-text mb-8">
              Juego no encontrado
            </h1>
            <Button
              onClick={() => navigate('/home')}
              className="bg-cta-primary text-white  hover:bg-secondary font-normal"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Volver a la tienda
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(game);
  };

  return (
    <div className="min-h-screen bg-gradient-1">
      <Header />
      
      <main className="pt-15 px-8 pb-32">
        <div className="max-w-7xl mx-auto">
          <Button
            onClick={() => navigate('/home')}
            className="mb-8 bg-tertiary text-white border border-white hover:bg-accent font-normal"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Volver
          </Button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <img
                src={game.image}
                alt={game.altTag}
                className="w-full rounded-lg"
                loading="lazy"
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl font-AntonCustom text-white font-headline font-bold text-hero-text mb-4">
                  {game.name}
                </h1>
                <div className="flex flex-wrap gap-2 mb-6">
                  {game.genres.map((genre) => (
                    <span
                      key={genre}
                      className="px-4  text-white py-2 bg-tertiary text-tertiary-foreground rounded-full text-sm font-medium"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-baseline gap-4">
                  {game.discount && (
                    <span className="text-3xl font-bold text-gray-400 line-through">
                      ${game.originalPrice}
                    </span>
                  )}
                  <span className="text-5xl text-white font-headline font-bold text-hero-text">
                    ${game.price}
                  </span>
                  {game.discount && (
                    <span className="px-3 py-1 text-red-600 bg-success text-background rounded-lg text-lg font-bold">
                      -{game.discount}%
                    </span>
                  )}
                </div>
              </div>
              
              <div className="space-y-4">
                <Button
                  onClick={handleAddToCart}
                  className="w-full py-6 text-lg bg-cta-primary border text-white hover:bg-secondary font-normal"
                >
                  <ShoppingCartIcon className="w-6 h-6 mr-2" />
                  Agregar al Carrito
                </Button>
                
                <Button
                  onClick={handleAddToCart}
                  className="w-full py-6 text-lg bg-success text-white border hover:brightness-110 font-normal"
                >
                  Comprar Ahora
                </Button>
              </div>
              
              <div className="pt-8 border-t border-border">
                <h2 className="text-2xl text-white font-headline font-bold text-hero-text mb-4">
                  Descripción
                </h2>
                <p className="text-foreground leading-relaxed text-white">
                  {game.description || 'Sumérgete en una experiencia de juego inolvidable con gráficos impresionantes, jugabilidad envolvente y una historia cautivadora. Este título ofrece horas de entretenimiento para jugadores de todos los niveles.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
