import { Router, Route } from './router';
import { Header } from './components/Header';
import { ContactProvider } from './context/ContactContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ClientsPage } from './pages/ClientsPage';
import { SeoServiceDubai } from './pages/services/uae/SeoServiceDubai';
import { DigitalMarketingDubai } from './pages/services/uae/DigitalMarketingDubai';
import { WebDevelopmentDubai } from './pages/services/uae/WebDevelopmentDubai';
import { EcommerceDubai } from './pages/services/uae/EcommerceDubai';
import { BrandKitDubai } from './pages/services/uae/BrandKitDubai';
import { LmsDubai } from './pages/services/uae/LmsDubai';
import { MoodleDubai } from './pages/services/uae/MoodleDubai';
import { MobileAppDubai } from './pages/services/uae/MobileAppDubai';
import { PublicRelationDubai } from './pages/services/uae/PublicRelationDubai';
import { ContentWritingDubai } from './pages/services/uae/ContentWritingDubai';
import { TranslationDubai } from './pages/services/uae/TranslationDubai';
import { ContactPage } from './pages/ContactPage';
import { SoftwarePage } from './pages/SoftwarePage';
import { Footer } from './components/Footer';
import { SeoServiceIndia } from './pages/services/india/digitalmarketing/SeoServiceIndia';
import { SocialMediaMarketingIndia } from './pages/services/india/digitalmarketing/SocialMediaMarketingIndia';
import { SmsMarketingIndia } from './pages/services/india/digitalmarketing/SmsMarketingIndia';
import { LeadGenerationIndia } from './pages/services/india/digitalmarketing/LeadGenerationIndia';
import { CustomWebsiteDevelopmentIndia } from './pages/services/india/webdevelopment/CustomWebsiteDevelopmentIndia';
import { WordPressCmsDevelopmentIndia } from './pages/services/india/webdevelopment/WordPressCmsDevelopmentIndia';
import { EcommerceWebsiteDevelopmentIndia } from './pages/services/india/webdevelopment/EcommerceWebsiteDevelopmentIndia';
import { WebsiteMaintenanceAndServicesIndia } from './pages/services/india/webdevelopment/WebsiteMaintenanceAndServicesIndia';
import { BrandKitIndia } from './pages/services/india/webdevelopment/BrandKitIndia';
import { LearningManagementSystemIndia } from './pages/services/india/elearningdevelopment/LearningManagementSystemIndia';
import { AndroidAppDevelopmentIndia } from './pages/services/india/mobileappdevelopment/AndroidAppDevelopmentIndia';
import { IosAppDevelopmentIndia } from './pages/services/india/mobileappdevelopment/IosAppDevelopmentIndia';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';

export default function App() {
  return (
    <Router>
      <ContactProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
          <Route path="/" component={HomePage} />
          <Route path="/about/" component={AboutPage} />
          <Route path="/about-us/" component={AboutPage} />
          <Route path="/clients/" component={ClientsPage} />
          <Route path="/contact/" component={ContactPage} />
          <Route path="/contact-us/" component={ContactPage} />
          <Route path="/software/" component={SoftwarePage} />
          <Route path="/software/crm/" component={SoftwarePage} />
          <Route path="/software/erp/" component={SoftwarePage} />

          {/* Services Routes */}
          <Route path="/services/seo-dubai/" component={SeoServiceDubai} />
          <Route path="/services/digital-marketing-dubai/" component={DigitalMarketingDubai} />
          <Route path="/services/web-development-dubai/" component={WebDevelopmentDubai} />
          <Route path="/services/ecommerce-dubai/" component={EcommerceDubai} />
          <Route path="/services/brand-kit-dubai/" component={BrandKitDubai} />
          <Route path="/services/lms-dubai/" component={LmsDubai} />
          <Route path="/services/moodle-dubai/" component={MoodleDubai} />
          <Route path="/services/mobile-app-dubai/" component={MobileAppDubai} />
          <Route path="/services/public-relations-dubai/" component={PublicRelationDubai} />
          <Route path="/services/content-writing-dubai/" component={ContentWritingDubai} />
          <Route path="/services/translation-dubai/" component={TranslationDubai} />

          <Route path="/services/india/seo-services/" component={SeoServiceIndia} />
          <Route path="/services/india/social-media-marketing/" component={SocialMediaMarketingIndia} />
          <Route path="/services/india/sms-marketing/" component={SmsMarketingIndia} />
          <Route path="/services/india/lead-generation/" component={LeadGenerationIndia} />
          <Route path="/services/india/custom-website-development/" component={CustomWebsiteDevelopmentIndia} />
          <Route path="/services/india/wordpress-development/" component={WordPressCmsDevelopmentIndia} />
          <Route path="/services/india/ecommerce-development/" component={EcommerceWebsiteDevelopmentIndia} />
          <Route path="/services/india/website-maintenance/" component={WebsiteMaintenanceAndServicesIndia} />
          <Route path="/services/india/brand-kit/" component={BrandKitIndia} />
          <Route path="/services/india/lms-development/" component={LearningManagementSystemIndia} />
          <Route path="/services/india/android-app-development/" component={AndroidAppDevelopmentIndia} />
          <Route path="/services/india/ios-app-development/" component={IosAppDevelopmentIndia} />
          <Route path="/privacy/" component={PrivacyPolicy} />
          <Route path="/terms/" component={TermsOfService} />
        </main>
        <Footer />
        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/971524828215?text=Hi,%20Thank%20you%20for%20contacting%20Suggestinfo.%20Your%20interest%20is%20greatly%20appreciated.%20We%20will%20get%20back%20to%20you%20as%20soon%20as%20possible."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed right-5 top-1/2 -translate-y-1/2 z-50 bg-[#25d366] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-xl wa-pulse"
          aria-label="WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.844L.054 23.25a.75.75 0 0 0 .938.898l5.577-1.47A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.672-.512-5.195-1.403l-.372-.218-3.863 1.02 1.042-3.78-.24-.39A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>
        </a>
        </div>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
      </ContactProvider>
    </Router>
  );
}
