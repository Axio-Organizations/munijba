'use client';

import { useState, useEffect, useRef } from 'react';
import { tramites } from '@/lib/data';
import { Search } from 'lucide-react';

export default function TramiteSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTramites, setFilteredTramites] = useState(tramites);
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const categories = ['Todas', ...Array.from(new Set(tramites.map(t => t.categoria)))];

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === '/' && e.target !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  useEffect(() => {
    let filtered = tramites;

    if (selectedCategory !== 'Todas') {
      filtered = filtered.filter(tramite => tramite.categoria === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(tramite =>
        tramite.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tramite.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tramite.categoria.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredTramites(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <section id="tramites" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Buscador de Trámites
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Encuentra fácilmente el trámite que necesitas realizar
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          {/* Search Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Buscar trámites... (presiona '/' para enfocar)"
              className="block w-full pl-10 pr-20 py-4 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Buscar trámites"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-400">
              <kbd className="inline-flex items-center border border-gray-200 rounded px-2 py-1 text-xs font-mono">
                /
              </kbd>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
                }`}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results */}
          <div className="mt-8">
            {filteredTramites.length === 0 ? (
              <div className="text-center py-12">
                <Search className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  No se encontraron trámites
                </h3>
                <p className="mt-2 text-gray-600">
                  Intenta con otros términos de búsqueda o selecciona una categoría diferente.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredTramites.map((tramite) => (
                  <div
                    key={tramite.id}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 card-hover"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {tramite.titulo}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                          {tramite.descripcion}
                        </p>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                          {tramite.categoria}
                        </span>
                      </div>
                    </div>
                    
                    {tramite.requiereDocumentacion && tramite.requiereDocumentacion.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">
                          Documentación requerida:
                        </h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {tramite.requiereDocumentacion.slice(0, 3).map((doc, index) => (
                            <li key={index} className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                              {doc}
                            </li>
                          ))}
                          {tramite.requiereDocumentacion.length > 3 && (
                            <li className="text-gray-500">
                              +{tramite.requiereDocumentacion.length - 3} más...
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                    
                    <div className="mt-4">
                      <button className="w-full btn-primary text-sm py-2">
                        Iniciar Trámite
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
