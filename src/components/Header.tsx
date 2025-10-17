import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { LanguageToggle } from './LanguageToggle';
import { useTranslation } from '../hooks/useTranslation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
              G
            </div>
            <span className="text-xl font-bold text-gray-900">{t('header.title')}</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-orange-600 transition-colors">
              About
            </a>
            <a href="#features" className="text-gray-600 hover:text-orange-600 transition-colors">
              Features
            </a>
            <a href="#demo" className="text-gray-600 hover:text-orange-600 transition-colors">
              Demo
            </a>
            <LanguageToggle className="mr-4" />
            <button className="px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-all hover:scale-105">
              {t('hero.downloadButton')}
            </button>
          </nav>

          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            <a
              href="#about"
              className="text-gray-600 hover:text-orange-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#features"
              className="text-gray-600 hover:text-orange-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#demo"
              className="text-gray-600 hover:text-orange-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Demo
            </a>
            <div className="flex justify-center">
              <LanguageToggle />
            </div>
            <button className="px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-all">
              {t('hero.downloadButton')}
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
