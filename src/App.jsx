import { Router, Route } from './router';
import { Header } from './components/Header';
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
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Route path="/" component={HomePage} />
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
          <Route path="/services/ecommerce-dubai" component={EcommerceDubai} />
          <Route path="/services/brand-kit-dubai" component={BrandKitDubai} />
          <Route path="/services/lms-dubai" component={LmsDubai} />
          <Route path="/services/moodle-dubai" component={MoodleDubai} />
          <Route path="/services/mobile-app-dubai" component={MobileAppDubai} />
          <Route path="/services/public-relations-dubai" component={PublicRelationDubai} />
          <Route path="/services/content-writing-dubai" component={ContentWritingDubai} />
          <Route path="/services/translation-dubai" component={TranslationDubai} />
          
          <Route path="/services/india/seo" component={SeoServiceIndia} />
          <Route path="/services/india/social-media-marketing" component={SocialMediaMarketingIndia} />
          <Route path="/services/india/sms-marketing" component={SmsMarketingIndia} />
          <Route path="/services/india/lead-generation" component={LeadGenerationIndia} />
          <Route path="/services/india/custom-website-development" component={CustomWebsiteDevelopmentIndia} />
          <Route path="/services/india/wordpress-development" component={WordPressCmsDevelopmentIndia} />
          <Route path="/services/india/ecommerce-development" component={EcommerceWebsiteDevelopmentIndia} />
          <Route path="/services/india/website-maintenance" component={WebsiteMaintenanceAndServicesIndia} />
          <Route path="/services/india/brand-kit" component={BrandKitIndia} />
          <Route path="/services/india/lms-development" component={LearningManagementSystemIndia} />
          <Route path="/services/india/android-app-development" component={AndroidAppDevelopmentIndia} />
          <Route path="/services/india/ios-app-development" component={IosAppDevelopmentIndia} />
          <Route path="/privacy" component={PrivacyPolicy} />
          <Route path="/terms" component={TermsOfService} />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
