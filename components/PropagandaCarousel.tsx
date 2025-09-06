'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, Users, Target, Heart } from 'lucide-react';
import Image from 'next/image';

interface PropagandaItem {
  id: string;
  tipo: 'evento' | 'programa' | 'logro' | 'servicio';
  titulo: string;
  descripcion: string;
  fecha?: string;
  imagen: string;
  enlace?: string;
  categoria: string;
  destacado?: boolean;
}

const propagandaItems: PropagandaItem[] = [
  {
    id: '1',
    tipo: 'programa',
    titulo: 'Plan de Viviendas 2025',
    descripcion: 'Nuevo programa municipal para facilitar el acceso a vivienda propia. 200 familias beneficiadas.',
    imagen: '/images/viviendas-plan.svg',
    categoria: 'Desarrollo Social',
    destacado: true,
    enlace: '#viviendas'
  },
  {
    id: '2',
    tipo: 'evento',
    titulo: 'Festival de la Tradición',
    descripcion: 'Gran festival folclórico con artistas locales y regionales. ¡No te lo pierdas!',
    fecha: '15 de Septiembre, 2025',
    imagen: '/images/festival-tradicion.svg',
    categoria: 'Cultura y Turismo',
    enlace: '#festival'
  },
  {
    id: '3',
    tipo: 'logro',
    titulo: 'Nueva Planta de Tratamiento',
    descripcion: 'Inauguramos la moderna planta de tratamiento de agua. Mejor calidad para todos.',
    imagen: '/images/planta-agua.svg',
    categoria: 'Obras Públicas',
    destacado: true
  },
  {
    id: '4',
    tipo: 'servicio',
    titulo: 'Centro de Salud 24hs',
    descripcion: 'Atención médica las 24 horas en nuestro nuevo centro de salud municipal.',
    imagen: '/images/centro-salud.svg',
    categoria: 'Salud Pública',
    enlace: '#salud'
  },
  {
    id: '5',
    tipo: 'programa',
    titulo: 'Empleo Joven',
    descripcion: 'Programa de capacitación laboral para jóvenes de 18 a 25 años. Inscripciones abiertas.',
    imagen: '/images/empleo-joven.svg',
    categoria: 'Desarrollo Social',
    enlace: '#empleo'
  },
  {
    id: '6',
    tipo: 'evento',
    titulo: 'Expo Emprendedores',
    descripcion: 'Muestra de emprendedores locales. Apoyamos la economía de nuestra ciudad.',
    fecha: '22 de Septiembre, 2025',
    imagen: '/images/expo-emprendedores.svg',
    categoria: 'Desarrollo Económico'
  }
];

const getTypeIcon = (tipo: string) => {
  switch (tipo) {
    case 'evento': return <Calendar className="w-5 h-5" />;
    case 'programa': return <Users className="w-5 h-5" />;
    case 'logro': return <Target className="w-5 h-5" />;
    case 'servicio': return <Heart className="w-5 h-5" />;
    default: return <Calendar className="w-5 h-5" />;
  }
};

const getTypeColor = (tipo: string) => {
  switch (tipo) {
    case 'evento': return 'bg-blue-100 text-blue-800';
    case 'programa': return 'bg-green-100 text-green-800';
    case 'logro': return 'bg-purple-100 text-purple-800';
    case 'servicio': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export default function PropagandaCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === propagandaItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? propagandaItems.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === propagandaItems.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentItem = propagandaItems[currentIndex];

  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Nuestros Logros y Próximos Eventos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conocé todo lo que estamos haciendo por Juan Bautista Alberdi
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="lg:flex">
                  {/* Image Section */}
                  <div className="lg:w-1/2">
                    <div className="h-64 lg:h-96 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center relative overflow-hidden">
                      {/* Placeholder for now - you can replace with actual images */}
                      <div className="text-center text-white">
                        <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                          {getTypeIcon(currentItem.tipo)}
                        </div>
                        <p className="text-lg font-semibold opacity-75">
                          {currentItem.categoria}
                        </p>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute top-4 right-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(currentItem.tipo)}`}>
                          {getTypeIcon(currentItem.tipo)}
                          <span className="ml-1 capitalize">{currentItem.tipo}</span>
                        </span>
                      </div>
                      
                      {currentItem.destacado && (
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                            ⭐ Destacado
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(currentItem.tipo)} mb-4`}>
                        {getTypeIcon(currentItem.tipo)}
                        <span className="ml-1">{currentItem.categoria}</span>
                      </span>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {currentItem.titulo}
                    </h3>
                    
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {currentItem.descripcion}
                    </p>
                    
                    {currentItem.fecha && (
                      <div className="flex items-center text-primary-600 mb-6">
                        <Calendar className="w-5 h-5 mr-2" />
                        <span className="font-medium">{currentItem.fecha}</span>
                      </div>
                    )}
                    
                    {currentItem.enlace && (
                      <div>
                        <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium">
                          Más Información
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 z-10"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 z-10"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {propagandaItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-primary-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-4 w-full bg-gray-200 rounded-full h-1 overflow-hidden">
          <motion.div
            className="h-1 bg-primary-600"
            initial={{ width: '0%' }}
            animate={{ width: isAutoPlaying ? '100%' : '0%' }}
            transition={{ duration: 5, ease: 'linear', repeat: Infinity }}
            key={currentIndex}
          />
        </div>
      </div>
    </section>
  );
}
