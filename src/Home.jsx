import React from 'react';
import { useEffect } from 'react';
import Header from './components/Header';
import Carousel from './components/Carrusel';
import GameCarouselSection from './components/GameCardCarrusel';
import Footer from './components/footer';
import {useGameStore} from './store/gameStore'

export default function Home() {
  const {mostPurchased, offers, more} = useGameStore();
  return (
    <div className="main-h-screen bg-gradient-1">
      <Header/>
      <div>
      <Carousel/>
      </div>
      <GameCarouselSection
      title={"Lo más comprado"}
      games={mostPurchased}
      sectionId="most-purchased"/>

      <GameCarouselSection
      title={"Ofertas"}
      games={offers}
      sectionId="offers"/>

      <GameCarouselSection
      title={"Más"}
      games={more}
      sectionId="more"/>

      <Footer/>
      
    </div>
  );
}