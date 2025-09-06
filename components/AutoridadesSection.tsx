'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Calendar, User } from 'lucide-react';
import Image from 'next/image';

interface Autoridad {
  id: number;
  nombre: string;
  cargo: string;
  area: string;
  telefono?: string;
  email?: string;
  imagen?: string;
  descripcion?: string;
  horarios?: string;
}

const autoridades: Autoridad[] = [
  {
    id: 1,
    nombre: "Dr. Juan Carlos Mendoza",
    cargo: "Intendente Municipal",
    area: "Ejecutivo",
    telefono: "(03564) 492-100",
    email: "intendente@jba.gob.ar",
    descripcion: "Responsable del gobierno municipal y la administración general.",
    horarios: "Lunes a Viernes 8:00 - 14:00"
  },
  {
    id: 2,
    nombre: "Lic. María Elena Rodríguez",
    cargo: "Secretaria de Gobierno",
    area: "Gobierno",
    telefono: "(03564) 492-101",
    email: "gobierno@jba.gob.ar",
    descripcion: "Coordinación de políticas públicas y relaciones institucionales.",
    horarios: "Lunes a Viernes 8:00 - 16:00"
  },
  {
    id: 3,
    nombre: "Ing. Roberto Silva",
    cargo: "Secretario de Obras Públicas",
    area: "Obras Públicas",
    telefono: "(03564) 492-102",
    email: "obras@jba.gob.ar",
    descripcion: "Planificación y ejecución de infraestructura urbana.",
    horarios: "Lunes a Viernes 7:30 - 15:30"
  },
  {
    id: 4,
    nombre: "Dra. Ana Fernández",
    cargo: "Secretaria de Salud",
    area: "Salud",
    telefono: "(03564) 492-103",
    email: "salud@jba.gob.ar",
    descripcion: "Gestión de políticas de salud pública y centros de atención.",
    horarios: "Lunes a Viernes 8:00 - 16:00"
  },
  {
    id: 5,
    nombre: "Prof. Carlos Morales",
    cargo: "Secretario de Educación y Cultura",
    area: "Educación",
    telefono: "(03564) 492-104",
    email: "educacion@jba.gob.ar",
    descripcion: "Promoción de la educación y actividades culturales municipales.",
    horarios: "Lunes a Viernes 8:00 - 16:00"
  },
  {
    id: 6,
    nombre: "Lic. Patricia López",
    cargo: "Secretaria de Desarrollo Social",
    area: "Desarrollo Social",
    telefono: "(03564) 492-105",
    email: "social@jba.gob.ar",
    descripcion: "Programas sociales y asistencia a la comunidad.",
    horarios: "Lunes a Viernes 8:00 - 16:00"
  }
];

export default function AutoridadesSection() {
  return (
    <section className="py-16 bg-gray-50">
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
            Autoridades Municipales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conocé a las autoridades que trabajan por el desarrollo y bienestar de Juan Bautista Alberdi
          </p>
        </motion.div>

        {/* Intendente destacado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="h-64 md:h-full bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
                  <User className="w-24 h-24 text-white" />
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {autoridades[0].nombre}
                  </h3>
                  <p className="text-primary-600 font-semibold text-lg mb-4">
                    {autoridades[0].cargo}
                  </p>
                  <p className="text-gray-600 mb-6">
                    {autoridades[0].descripcion}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700">{autoridades[0].telefono}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700">{autoridades[0].email}</span>
                  </div>
                  <div className="flex items-center space-x-3 md:col-span-2">
                    <Calendar className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700">{autoridades[0].horarios}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid de autoridades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {autoridades.slice(1).map((autoridad, index) => (
            <motion.div
              key={autoridad.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                {/* Avatar */}
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 mx-auto">
                  <User className="w-8 h-8 text-primary-600" />
                </div>
                
                {/* Info */}
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {autoridad.nombre}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-2">
                    {autoridad.cargo}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    {autoridad.descripcion}
                  </p>
                </div>

                {/* Contact */}
                <div className="space-y-2 text-sm">
                  {autoridad.telefono && (
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-primary-600" />
                      <span className="text-gray-700">{autoridad.telefono}</span>
                    </div>
                  )}
                  {autoridad.email && (
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-primary-600" />
                      <span className="text-gray-700 truncate">{autoridad.email}</span>
                    </div>
                  )}
                  {autoridad.horarios && (
                    <div className="flex items-start space-x-2">
                      <Calendar className="w-4 h-4 text-primary-600 mt-0.5" />
                      <span className="text-gray-700">{autoridad.horarios}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-primary-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              ¿Necesitás contactar alguna autoridad?
            </h3>
            <p className="text-gray-600 mb-6">
              Podés solicitar audiencias o hacer consultas a través de nuestros canales oficiales
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Solicitar Audiencia
              </button>
              <button className="border border-primary-600 text-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors">
                Mesa de Entrada
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
