'use client';

import { contactoInfo } from '@/lib/data';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const legalLinks = [
    { name: 'Términos y Condiciones', href: '#terminos' },
    { name: 'Política de Privacidad', href: '#privacidad' },
    { name: 'Transparencia', href: '#transparencia' },
    { name: 'Accesibilidad', href: '#accesibilidad' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#facebook', icon: Facebook },
    { name: 'Instagram', href: '#instagram', icon: Instagram },
    { name: 'Twitter', href: '#twitter', icon: Twitter },
    { name: 'YouTube', href: '#youtube', icon: Youtube },
  ];

  const quickLinks = [
    { name: 'Trámites', href: '#tramites' },
    { name: 'Noticias', href: '#noticias' },
    { name: 'Agenda', href: '#agenda' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Pie de página
      </h2>
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo and description */}
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">JBA</span>
              </div>
              <div>
                <h3 className="text-white text-lg font-bold">
                  Municipalidad de
                </h3>
                <p className="text-gray-300 text-sm">Juan Bautista Alberdi</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-base">
              Gobierno transparente y cercano a los ciudadanos. Trabajamos por el desarrollo 
              y el bienestar de nuestra comunidad.
            </p>
            
            <div className="flex space-x-6">
              {socialLinks.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-gray-300 transition-colors"
                    aria-label={`Seguinos en ${item.name}`}
                  >
                    <span className="sr-only">{item.name}</span>
                    <IconComponent className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            {/* Quick Links */}
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Enlaces Rápidos
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {quickLinks.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Legal
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {legalLinks.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="md:mt-0">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Contacto
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <p className="text-base text-gray-300">
                    {contactoInfo.direccion}
                  </p>
                  <p className="text-base text-gray-300">
                    {contactoInfo.codigo_postal} - {contactoInfo.provincia}
                  </p>
                </li>
                <li>
                  <a
                    href={`mailto:${contactoInfo.email}`}
                    className="text-base text-gray-300 hover:text-white transition-colors"
                  >
                    {contactoInfo.email}
                  </a>
                </li>
                <li>
                  <p className="text-base text-gray-300">
                    Lunes a Viernes<br />
                    {contactoInfo.horarios.lunes_viernes}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-700 pt-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <p className="text-base text-gray-400">
                <a href="#accesibilidad" className="hover:text-gray-300 transition-colors">
                  Declaración de Accesibilidad
                </a>
              </p>
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              &copy; {currentYear} Municipalidad de Juan Bautista Alberdi. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
