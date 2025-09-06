'use client';

import { contactoInfo, telefonosUtiles } from '@/lib/data';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactMap() {
  return (
    <section id="contacto" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contacto y Ubicación
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Visitanos o contáctanos para realizar tus trámites y consultas
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-medium">Dirección</p>
                    <p className="text-gray-600">
                      {contactoInfo.direccion}<br />
                      {contactoInfo.codigo_postal} - {contactoInfo.provincia}, {contactoInfo.pais}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-medium">Email</p>
                    <a 
                      href={`mailto:${contactoInfo.email}`}
                      className="text-primary-600 hover:text-primary-700"
                    >
                      {contactoInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-medium">Horarios de Atención</p>
                    <p className="text-gray-600">
                      Lunes a Viernes: {contactoInfo.horarios.lunes_viernes}<br />
                      Sábados: {contactoInfo.horarios.sabado}<br />
                      Domingos: {contactoInfo.horarios.domingo}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Useful Phone Numbers */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Teléfonos Útiles
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {telefonosUtiles.map((telefono, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-l-4 ${
                      telefono.tipo === 'emergencia' 
                        ? 'bg-red-50 border-red-500' 
                        : telefono.tipo === 'salud'
                        ? 'bg-green-50 border-green-500'
                        : 'bg-blue-50 border-blue-500'
                    }`}
                  >
                    <div className="flex items-center">
                      <Phone className={`w-5 h-5 mr-2 ${
                        telefono.tipo === 'emergencia' 
                          ? 'text-red-600' 
                          : telefono.tipo === 'salud'
                          ? 'text-green-600'
                          : 'text-blue-600'
                      }`} />
                      <div>
                        <p className="font-medium text-gray-900 text-sm">
                          {telefono.nombre}
                        </p>
                        <a
                          href={`tel:${telefono.numero}`}
                          className={`text-sm font-mono ${
                            telefono.tipo === 'emergencia' 
                              ? 'text-red-600 hover:text-red-700' 
                              : telefono.tipo === 'salud'
                              ? 'text-green-600 hover:text-green-700'
                              : 'text-blue-600 hover:text-blue-700'
                          }`}
                        >
                          {telefono.numero}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Ubicación
            </h3>
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14144.544639509031!2d-65.63841350959083!3d-27.589307940187638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9423e8fe4762bf37%3A0xf63c0e9de0e5ad6f!2sJuan%20Bautista%20Alberdi%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1757132274003!5m2!1ses-419!2sar"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Juan Bautista Alberdi, Tucumán"
              ></iframe>
            </div>
            
            <div className="mt-6 text-center">
              <a
                href="https://maps.app.goo.gl/gwxYUrYZYs9nevv5A"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
                aria-label="Abrir ubicación en Google Maps"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Ver en Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
