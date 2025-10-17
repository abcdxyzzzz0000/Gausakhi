import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, LanguageContextType, TranslationData, LanguagePreference } from '../types/translation';

// Import translation files
import enTranslations from '../translations/en.json';
import hiTranslations from '../translations/hi.json';

const STORAGE_KEY = 'gausakhi_language_preference';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [translations, setTranslations] = useState<TranslationData>(enTranslations);
  const [isLoading, setIsLoading] = useState(false);

  // Load saved language preference on mount
  useEffect(() => {
    const loadSavedLanguage = () => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const preference: LanguagePreference = JSON.parse(saved);
          if (preference.language === 'en' || preference.language === 'hi') {
            setCurrentLanguage(preference.language);
            const translations = preference.language === 'hi' ? hiTranslations : enTranslations;
            setTranslations(translations as TranslationData);
          }
        }
      } catch (error) {
        console.warn('Failed to load language preference:', error);
        // Fallback to English
        setCurrentLanguage('en');
        setTranslations(enTranslations);
      }
    };

    loadSavedLanguage();
  }, []);

  const setLanguage = async (lang: Language) => {
    setIsLoading(true);
    
    try {
      // Update current language
      setCurrentLanguage(lang);
      
      // Load appropriate translations
      const newTranslations = lang === 'hi' ? hiTranslations : enTranslations;
      setTranslations(newTranslations as TranslationData);
      
      // Save preference to localStorage
      const preference: LanguagePreference = {
        language: lang,
        timestamp: Date.now()
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(preference));
      
      // Update document language attribute for accessibility
      document.documentElement.lang = lang === 'hi' ? 'hi-IN' : 'en-US';
      
    } catch (error) {
      console.error('Failed to switch language:', error);
      // Fallback to English on error
      setCurrentLanguage('en');
      setTranslations(enTranslations);
    } finally {
      setIsLoading(false);
    }
  };

  const contextValue: LanguageContextType = {
    currentLanguage,
    setLanguage,
    translations,
    isLoading
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
};