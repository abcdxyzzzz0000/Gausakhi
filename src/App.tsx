import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import AcceptanceCriteria from './components/AcceptanceCriteria';
import AppPreview from './components/AppPreview';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <About />
        <Features />
        <AcceptanceCriteria />
        <AppPreview />
        <CTA />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
