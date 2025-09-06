import Hero from '@/components/Hero';
import QuickLinks from '@/components/QuickLinks';
import TramiteSearch from '@/components/TramiteSearch';
import CalendarComponent from '@/components/CalendarComponent';
import PropagandaCarousel from '@/components/PropagandaCarousel';
import AutoridadesSection from '@/components/AutoridadesSection';
import NewsCards from '@/components/NewsCards';
import EventsList from '@/components/EventsList';
import ContactMap from '@/components/ContactMap';
import WhatsAppWidget from '@/components/WhatsAppWidget';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <QuickLinks />
      <TramiteSearch />
      <div className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <CalendarComponent />
          </div>
        </div>
      </div>
      <PropagandaCarousel />
      <AutoridadesSection />
      <NewsCards />
      <EventsList />
      <ContactMap />
      <WhatsAppWidget />
    </div>
  );
}
