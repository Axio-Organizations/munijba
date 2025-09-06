'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import Image from 'next/image';

interface CarouselImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
}

const municipalImages: CarouselImage[] = [
  {
    id: '1',
    src: '/images/municipio-aerial.jpg',
    alt: 'Vista aérea de Juan Bautista Alberdi',
    title: 'Vista Panorámica',
    description: 'Juan Bautista Alberdi desde las alturas, mostrando el crecimiento urbano y los espacios verdes'
  },
  {
    id: '2',
    src: '/images/plaza-central.svg',
    alt: 'Plaza central del municipio',
    title: 'Plaza Principal',
    description: 'El corazón de nuestra ciudad, lugar de encuentro y celebraciones'
  },
  {
    id: '3',
    src: '/images/palacio-municipal.svg',
    alt: 'Palacio Municipal',
    title: 'Palacio Municipal',
    description: 'Sede del gobierno local, donde trabajamos por el bienestar de todos'
  },
  {
    id: '4',
    src: '/images/centro-cultural.svg',
    alt: 'Centro Cultural Municipal',
    title: 'Centro Cultural',
    description: 'Espacio dedicado al arte, la cultura y el desarrollo comunitario'
  },
  {
    id: '5',
    src: '/images/parque-municipal.svg',
    alt: 'Parque Municipal',
    title: 'Espacios Verdes',
    description: 'Nuestros parques y plazas, pulmones verdes para toda la familia'
  }
];

export default function MunicipalCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === municipalImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? municipalImages.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === municipalImages.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-full"
        >
          <Image
            src={municipalImages[currentIndex].src}
            alt={municipalImages[currentIndex].alt}
            fill
            className="object-cover"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Content overlay */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute bottom-0 left-0 right-0 p-8 text-white"
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-2">
              {municipalImages[currentIndex].title}
            </h3>
            <p className="text-lg opacity-90 max-w-2xl">
              {municipalImages[currentIndex].description}
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 text-white transition-colors"
        onClick={goToPrevious}
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 text-white transition-colors"
        onClick={goToNext}
        aria-label="Imagen siguiente"
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>

      {/* Play/Pause button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 text-white transition-colors"
        onClick={() => setIsPlaying(!isPlaying)}
        aria-label={isPlaying ? 'Pausar carrusel' : 'Reproducir carrusel'}
      >
        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
      </motion.button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {municipalImages.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex
                ? 'bg-white'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <motion.div
          className="h-full bg-white"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{
            duration: isPlaying ? 5 : 0,
            ease: 'linear',
            repeat: isPlaying ? Infinity : 0
          }}
          key={currentIndex}
        />
      </div>
    </div>
  );
}
