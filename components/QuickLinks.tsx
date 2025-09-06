'use client';

import { accesosRapidos } from '@/lib/data';
import {
  CreditCard,
  Calendar,
  Eye,
  Phone,
  MessageSquare,
  CalendarDays,
} from 'lucide-react';

const iconMap = {
  CreditCard: CreditCard,
  Calendar: Calendar,
  Eye: Eye,
  Phone: Phone,
  MessageSquare: MessageSquare,
  CalendarDays: CalendarDays,
};

export default function QuickLinks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Accesos Rápidos
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Accede fácilmente a los servicios más utilizados
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {accesosRapidos.map((acceso) => {
            const IconComponent = iconMap[acceso.icono as keyof typeof iconMap] || Eye;
            
            return (
              <a
                key={acceso.id}
                href={acceso.url}
                className="group relative bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-600 focus-visible:outline-offset-2"
                aria-label={`Acceder a ${acceso.titulo}: ${acceso.descripcion}`}
              >
                <div>
                  <span
                    className={`inline-flex p-3 rounded-lg text-white group-hover:scale-110 transition-transform duration-300 ${acceso.color}`}
                  >
                    <IconComponent className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                    {acceso.titulo}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {acceso.descripcion}
                  </p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    className="h-5 w-5 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>

        {/* Emergency Numbers Section */}
        <div className="mt-16 bg-red-50 rounded-xl p-8">
          <div className="text-center">
            <Phone className="mx-auto h-12 w-12 text-red-600" />
            <h3 className="mt-4 text-xl font-bold text-gray-900">
              Números de Emergencia
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 text-center">
              <div>
                <a href="tel:911" className="block text-red-600 font-bold text-lg hover:text-red-700">
                  911
                </a>
                <p className="text-sm text-gray-600">Policía</p>
              </div>
              <div>
                <a href="tel:100" className="block text-red-600 font-bold text-lg hover:text-red-700">
                  100
                </a>
                <p className="text-sm text-gray-600">Bomberos</p>
              </div>
              <div>
                <a href="tel:107" className="block text-red-600 font-bold text-lg hover:text-red-700">
                  107
                </a>
                <p className="text-sm text-gray-600">SAME</p>
              </div>
              <div>
                <a href="tel:103" className="block text-red-600 font-bold text-lg hover:text-red-700">
                  103
                </a>
                <p className="text-sm text-gray-600">Defensa Civil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
