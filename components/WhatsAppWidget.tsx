'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, AlertTriangle } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  
  const whatsappNumber = "5493865421000"; // Número de ejemplo del municipio
  
  const quickMessages = [
    {
      id: 'denuncia',
      title: 'Realizar Denuncia',
      icon: <AlertTriangle className="w-5 h-5" />,
      message: "Hola! Quiero realizar una denuncia municipal. Por favor, ayúdenme con el procedimiento.",
      color: 'bg-red-500'
    },
    {
      id: 'consulta',
      title: 'Consulta General',
      icon: <MessageCircle className="w-5 h-5" />,
      message: "Hola! Tengo una consulta sobre trámites municipales. ¿Podrían ayudarme?",
      color: 'bg-blue-500'
    },
    {
      id: 'emergencia',
      title: 'Emergencia',
      icon: <Phone className="w-5 h-5" />,
      message: "🚨 EMERGENCIA - Necesito asistencia inmediata del municipio.",
      color: 'bg-orange-500'
    }
  ];

  const sendWhatsAppMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-colors relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir chat de WhatsApp"
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
          </motion.div>
          
          {/* Notification pulse */}
          <motion.div
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs font-bold text-white">!</span>
          </motion.div>
        </motion.button>
      </motion.div>

      {/* WhatsApp Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Chat Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-green-500 text-white p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Municipalidad JBA</h3>
                    <p className="text-sm opacity-90">Atención Ciudadana</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    ¿En qué podemos ayudarte?
                  </h4>
                  <p className="text-sm text-gray-600">
                    Selecciona una opción para contactarnos directamente por WhatsApp
                  </p>
                </div>

                <div className="space-y-3">
                  {quickMessages.map((option) => (
                    <motion.button
                      key={option.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full p-3 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors text-left flex items-center space-x-3"
                      onClick={() => sendWhatsAppMessage(option.message)}
                    >
                      <div className={`w-8 h-8 ${option.color} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                        {option.icon}
                      </div>
                      <span className="font-medium text-gray-900">{option.title}</span>
                    </motion.button>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-center text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Disponible 24/7 para emergencias</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
