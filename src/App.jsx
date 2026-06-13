import { Router, Route } from './router';
import { Header } from './components/Header';
import { AboutPage } from './pages/AboutPage';
import { ClientsPage } from './pages/ClientsPage';
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
        </main>
        <Footer />
      </div>
    </Router>
  );
}
