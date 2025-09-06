'use client';

import { eventos } from '@/lib/data';
import { CalendarDays, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function EventsList() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-AR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString: string) => {
    return timeString;
  };

  return (
    <section id="agenda" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Próximos Eventos
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Participa en las actividades y eventos municipales
          </p>
        </div>

        <div className="mt-12">
          {eventos.length === 0 ? (
            <div className="text-center py-12">
              <CalendarDays className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                No hay eventos programados
              </h3>
              <p className="mt-2 text-gray-600">
                Vuelve pronto para ver los próximos eventos municipales.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {eventos.map((evento) => (
                <div
                  key={evento.id}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 card-hover"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {evento.titulo}
                      </h3>
                      {evento.descripcion && (
                        <p className="text-gray-600 text-sm mb-3">
                          {evento.descripcion}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <CalendarDays className="w-4 h-4 mr-3 text-primary-600" />
                      <span className="capitalize">
                        {formatDate(evento.fecha)}
                      </span>
                    </div>

                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-3 text-primary-600" />
                      <span>{formatTime(evento.hora)}</span>
                    </div>

                    <div className="flex items-start text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-3 text-primary-600 mt-0.5 flex-shrink-0" />
                      <span>{evento.lugar}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <button className="w-full btn-secondary text-sm py-2 group">
                      Más información
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#agenda-completa"
            className="btn-primary inline-flex items-center"
            aria-label="Ver la agenda completa de eventos"
          >
            Ver agenda completa
            <CalendarDays className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
