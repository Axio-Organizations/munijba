'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Plus, Clock, MapPin, Users, ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  time: string;
  location?: string;
  description?: string;
  type: 'meeting' | 'event' | 'holiday' | 'work';
}

const mockEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Sesión Ordinaria del Concejo',
    date: new Date(2024, 8, 20), // Septiembre 20, 2024
    time: '20:00',
    location: 'Salón de Sesiones',
    type: 'meeting'
  },
  {
    id: '2',
    title: 'Audiencia Pública - Presupuesto 2024',
    date: new Date(2024, 8, 25),
    time: '18:30',
    location: 'Centro Cultural',
    type: 'event'
  },
  {
    id: '3',
    title: 'Operativo de Salud Barrio Norte',
    date: new Date(2024, 8, 28),
    time: '09:00',
    location: 'Centro Comunitario',
    type: 'work'
  },
  {
    id: '4',
    title: 'Día del Estudiante',
    date: new Date(2024, 8, 21),
    time: 'Todo el día',
    type: 'holiday'
  }
];

export default function CalendarComponent() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [events] = useState<CalendarEvent[]>(mockEvents);
  const [showEventForm, setShowEventForm] = useState(false);

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getEventsForDate = (date: Date) => {
    return events.filter(event => 
      event.date.toDateString() === date.toDateString()
    );
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(newDate.getMonth() - 1);
      } else {
        newDate.setMonth(newDate.getMonth() + 1);
      }
      return newDate;
    });
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Días vacíos al inicio
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-8"></div>);
    }

    // Días del mes
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const dayEvents = getEventsForDate(date);
      const isToday = date.toDateString() === new Date().toDateString();
      const isSelected = selectedDate?.toDateString() === date.toDateString();

      days.push(
        <motion.button
          key={day}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`h-8 w-full rounded text-xs font-medium transition-colors relative ${
            isToday
              ? 'bg-primary-600 text-white'
              : isSelected
              ? 'bg-primary-100 text-primary-900'
              : 'hover:bg-gray-100'
          }`}
          onClick={() => setSelectedDate(date)}
        >
          {day}
          {dayEvents.length > 0 && (
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {dayEvents.slice(0, 3).map((event, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full ${
                    event.type === 'meeting'
                      ? 'bg-blue-500'
                      : event.type === 'event'
                      ? 'bg-green-500'
                      : event.type === 'holiday'
                      ? 'bg-red-500'
                      : 'bg-orange-500'
                  }`}
                />
              ))}
            </div>
          )}
        </motion.button>
      );
    }

    return days;
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'meeting':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'event':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'holiday':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'work':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900 flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-primary-600" />
          Calendario Municipal
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary-600 text-white px-3 py-1.5 rounded-lg flex items-center text-sm font-medium hover:bg-primary-700"
          onClick={() => setShowEventForm(true)}
        >
          <Plus className="w-4 h-4 mr-1" />
          Evento
        </motion.button>
      </div>

      <div className="flex items-center justify-between mb-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-1.5 hover:bg-gray-100 rounded-lg"
          onClick={() => navigateMonth('prev')}
        >
          <ChevronLeft className="w-4 h-4" />
        </motion.button>
        
        <h3 className="text-lg font-semibold">
          {currentDate.toLocaleDateString('es-AR', { month: 'long', year: 'numeric' })}
        </h3>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-1.5 hover:bg-gray-100 rounded-lg"
          onClick={() => navigateMonth('next')}
        >
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {['D', 'L', 'M', 'M', 'J', 'V', 'S'].map(day => (
          <div key={day} className="h-6 flex items-center justify-center text-xs font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 mb-4">
        {renderCalendarDays()}
      </div>

      {selectedDate && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t pt-6"
        >
          <h4 className="text-lg font-semibold mb-4">
            Eventos para {selectedDate.toLocaleDateString('es-AR', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </h4>
          
          <div className="space-y-3">
            {getEventsForDate(selectedDate).length > 0 ? (
              getEventsForDate(selectedDate).map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`p-4 rounded-lg border-l-4 ${getEventTypeColor(event.type)}`}
                >
                  <h5 className="font-semibold">{event.title}</h5>
                  <div className="flex items-center text-sm mt-2 space-x-4">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {event.time}
                    </span>
                    {event.location && (
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {event.location}
                      </span>
                    )}
                  </div>
                  {event.description && (
                    <p className="text-sm mt-2 opacity-75">{event.description}</p>
                  )}
                </motion.div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-8">
                No hay eventos programados para este día
              </p>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}
