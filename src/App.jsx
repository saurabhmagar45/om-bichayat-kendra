import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { WeddingProvider } from './context/WeddingContext';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { RentalCartDrawer } from './components/RentalCartDrawer';
import { LightboxModal } from './components/LightboxModal';
import { MenuModal } from './components/MenuModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { Toast } from './components/Toast';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { RentalsPage } from './pages/RentalsPage';
import { GalleryPage } from './pages/GalleryPage';
import { CateringPage } from './pages/CateringPage';
import { PackagesPage } from './pages/PackagesPage';
import { BookingPage } from './pages/BookingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CustomerDashboardPage } from './pages/CustomerDashboardPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';

export function App() {
  return (
    <Router>
      <WeddingProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-[#FAF7F2] text-[#282321] relative flex flex-col font-sans selection:bg-[#C6A15B] selection:text-[#701F35]">
          {/* Sticky Luxury Navbar */}
          <Navbar />

          {/* Main Route Views */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/rentals" element={<RentalsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/catering" element={<CateringPage />} />
              <Route path="/packages" element={<PackagesPage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/dashboard" element={<CustomerDashboardPage />} />
              <Route path="/admin" element={<AdminDashboardPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          {/* Grand Heritage Footer */}
          <Footer />

          {/* Global Drawers & Modals */}
          <RentalCartDrawer />
          <LightboxModal />
          <MenuModal />
          <ServiceDetailModal />
          <Toast />
        </div>
      </WeddingProvider>
    </Router>
  );
}

export default App;
