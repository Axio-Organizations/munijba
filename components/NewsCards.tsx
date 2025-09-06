'use client';

import Image from 'next/image';
import { noticias } from '@/lib/data';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

export default function NewsCards() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-AR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="noticias" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Noticias Destacadas
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Mantente informado sobre las últimas novedades municipales
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {noticias.map((noticia, index) => (
            <article
              key={noticia.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 card-hover"
            >
              <div className="relative h-48">
                <Image
                  className="w-full h-full object-cover"
                  src={noticia.imagen || '/images/news-placeholder.jpg'}
                  alt={noticia.titulo}
                  width={400}
                  height={192}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                    <Tag className="w-3 h-3 mr-1" />
                    {noticia.categoria}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <time dateTime={noticia.fecha}>
                    {formatDate(noticia.fecha)}
                  </time>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {noticia.titulo}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {noticia.resumen}
                </p>
                
                <a
                  href={noticia.url || '#'}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm group transition-colors"
                  aria-label={`Leer más sobre: ${noticia.titulo}`}
                >
                  Leer más
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#todas-noticias"
            className="btn-secondary inline-flex items-center"
            aria-label="Ver todas las noticias municipales"
          >
            Ver todas las noticias
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
