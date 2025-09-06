export interface Tramite {
  id: string;
  titulo: string;
  descripcion: string;
  categoria: string;
  url?: string;
  requiereDocumentacion?: string[];
}

export interface Noticia {
  id: string;
  titulo: string;
  resumen: string;
  fecha: string;
  categoria: string;
  imagen?: string;
  url?: string;
}

export interface Evento {
  id: string;
  titulo: string;
  fecha: string;
  hora: string;
  lugar: string;
  descripcion?: string;
}

export interface AccesoRapido {
  id: string;
  titulo: string;
  descripcion: string;
  icono: string;
  url: string;
  color: string;
}

export const tramites: Tramite[] = [
  {
    id: '1',
    titulo: 'Licencia de Conducir',
    descripcion: 'Obtención y renovación de licencia nacional de conducir',
    categoria: 'Transporte',
    requiereDocumentacion: ['DNI', 'Certificado médico', 'Comprobante de domicilio']
  },
  {
    id: '2',
    titulo: 'Habilitación Comercial',
    descripcion: 'Permisos para apertura y funcionamiento de comercios',
    categoria: 'Comercio',
    requiereDocumentacion: ['CUIT/CUIL', 'Plano del local', 'Seguro de responsabilidad civil']
  },
  {
    id: '3',
    titulo: 'Certificado de Libre Deuda',
    descripcion: 'Certificación de estar al día con las obligaciones municipales',
    categoria: 'Tasas e Impuestos',
    requiereDocumentacion: ['DNI', 'Número de partida inmobiliaria']
  },
  {
    id: '4',
    titulo: 'Permiso de Obra',
    descripcion: 'Autorización para construcción, ampliación o refacción',
    categoria: 'Obras Privadas',
    requiereDocumentacion: ['Planos aprobados', 'Cálculo estructural', 'Seguro de caución']
  },
  {
    id: '5',
    titulo: 'Inscripción al Registro Civil',
    descripcion: 'Registro de nacimientos, defunciones y matrimonios',
    categoria: 'Registro Civil',
    requiereDocumentacion: ['Certificados médicos', 'Documentos de identidad']
  },
  {
    id: '6',
    titulo: 'Solicitud de Turnos Médicos',
    descripcion: 'Reserva de turnos en centros de salud municipales',
    categoria: 'Salud',
    requiereDocumentacion: ['DNI', 'Obra social (opcional)']
  },
  {
    id: '7',
    titulo: 'Exención de Tasas',
    descripcion: 'Solicitud de exención de tasas municipales por situación social',
    categoria: 'Tasas e Impuestos',
    requiereDocumentacion: ['Declaración jurada', 'Certificado de ingresos']
  },
  {
    id: '8',
    titulo: 'Permiso de Circulación',
    descripcion: 'Autorización especial para circulación de vehículos de gran porte',
    categoria: 'Transporte',
    requiereDocumentacion: ['Cédula del vehículo', 'Seguro vigente', 'RTO actualizado']
  }
];

export const noticias: Noticia[] = [
  {
    id: '1',
    titulo: 'Nueva oficina de atención al ciudadano en el centro',
    resumen: 'Se inauguró una nueva sede para mejorar la atención y reducir los tiempos de espera en trámites municipales.',
    fecha: '2024-03-15',
    categoria: 'Servicios',
    imagen: '/images/oficina-ciudadano.svg'
  },
  {
    id: '2',
    titulo: 'Programa de mejoramiento urbano en barrios periféricos',
    resumen: 'Iniciativa municipal para asfaltar calles y mejorar la infraestructura en los barrios más alejados del centro.',
    fecha: '2024-03-12',
    categoria: 'Obras Públicas',
    imagen: '/images/obras-barrios.svg'
  },
  {
    id: '3',
    titulo: 'Campaña de vacunación gratuita para adultos mayores',
    resumen: 'El municipio organiza jornadas de vacunación contra la gripe y COVID-19 para personas de la tercera edad.',
    fecha: '2024-03-10',
    categoria: 'Salud',
    imagen: '/images/vacunacion.svg'
  }
];

export const eventos: Evento[] = [
  {
    id: '1',
    titulo: 'Sesión Ordinaria del Concejo Deliberante',
    fecha: '2024-03-20',
    hora: '20:00',
    lugar: 'Salón de Sesiones - Palacio Municipal',
    descripcion: 'Sesión ordinaria con tratamiento de ordenanzas y resoluciones'
  },
  {
    id: '2',
    titulo: 'Audiencia Pública - Presupuesto 2024',
    fecha: '2024-03-25',
    hora: '18:30',
    lugar: 'Centro Cultural Municipal',
    descripcion: 'Presentación y debate del proyecto de presupuesto municipal'
  },
  {
    id: '3',
    titulo: 'Operativo Sanitario Barrio Norte',
    fecha: '2024-03-28',
    hora: '09:00',
    lugar: 'Centro Comunitario Barrio Norte',
    descripcion: 'Atención médica gratuita y controles de salud preventivos'
  }
];

export const accesosRapidos: AccesoRapido[] = [
  {
    id: '1',
    titulo: 'Pagar Tasas',
    descripcion: 'Abona tus impuestos municipales online',
    icono: 'CreditCard',
    url: '#pagos',
    color: 'bg-green-500'
  },
  {
    id: '2',
    titulo: 'Turnos Online',
    descripcion: 'Reserva tu turno para trámites',
    icono: 'Calendar',
    url: '#turnos',
    color: 'bg-blue-500'
  },
  {
    id: '3',
    titulo: 'Transparencia',
    descripcion: 'Información pública y rendición de cuentas',
    icono: 'Eye',
    url: '#transparencia',
    color: 'bg-purple-500'
  },
  {
    id: '4',
    titulo: 'Emergencias',
    descripcion: 'Teléfonos y contactos de emergencia',
    icono: 'Phone',
    url: '#emergencias',
    color: 'bg-red-500'
  },
  {
    id: '5',
    titulo: 'Reclamos',
    descripcion: 'Presenta tu reclamo o sugerencia',
    icono: 'MessageSquare',
    url: '#reclamos',
    color: 'bg-orange-500'
  },
  {
    id: '6',
    titulo: 'Agenda Municipal',
    descripcion: 'Eventos y actividades programadas',
    icono: 'CalendarDays',
    url: '#agenda',
    color: 'bg-indigo-500'
  }
];

export const telefonosUtiles = [
  { nombre: '911 - Emergencia Policial', numero: '911', tipo: 'emergencia' },
  { nombre: '100 - Bomberos', numero: '100', tipo: 'emergencia' },
  { nombre: '107 - Emergencia Médica', numero: '107', tipo: 'emergencia' },
  { nombre: '103 - Defensa Civil', numero: '103', tipo: 'emergencia' },
  { nombre: 'Mesa de Entrada', numero: '+54 3865-421000', tipo: 'municipal' },
  { nombre: 'Secretaría de Obras', numero: '+54 3865-421001', tipo: 'municipal' },
  { nombre: 'Área Social', numero: '+54 3865-421002', tipo: 'municipal' },
  { nombre: 'Hospital Municipal', numero: '+54 3865-421003', tipo: 'salud' }
];

export const contactoInfo = {
  direccion: 'Av. San Martín 123, Juan Bautista Alberdi, Tucumán',
  codigo_postal: 'T4178',
  provincia: 'Tucumán',
  pais: 'Argentina',
  email: 'contacto@alberdi.gob.ar',
  horarios: {
    lunes_viernes: '7:00 - 13:00',
    sabado: 'Cerrado',
    domingo: 'Cerrado'
  },
  coordenadas: {
    lat: -27.6839,
    lng: -65.4456
  }
};
