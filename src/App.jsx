import { Router, Route } from './router';
import { Header } from './components/Header';
import { AboutPage } from './pages/AboutPage';
import { ClientsPage } from './pages/ClientsPage';
import { SeoServiceDubai } from './pages/services/uae/SeoServiceDubai';
import { DigitalMarketingDubai } from './pages/services/uae/DigitalMarketingDubai';
import { WebDevelopmentDubai } from './pages/services/uae/WebDevelopmentDubai';
import { ContactPage } from './pages/ContactPage';
import { SoftwarePage } from './pages/SoftwarePage';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Route path="/" component={AboutPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/about-us" component={AboutPage} />
          <Route path="/clients" component={ClientsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/contact-us" component={ContactPage} />
          <Route path="/software" component={SoftwarePage} />
          <Route path="/software/crm" component={SoftwarePage} />
          <Route path="/software/erp" component={SoftwarePage} />
          
          {/* Services Routes */}
          <Route path="/services/seo-dubai" component={SeoServiceDubai} />
          <Route path="/services/digital-marketing-dubai" component={DigitalMarketingDubai} />
          <Route path="/services/web-development-dubai" component={WebDevelopmentDubai} />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
