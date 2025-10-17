import { useLanguageContext } from '../contexts/LanguageContext';
import { UseTranslationReturn, TranslationData } from '../types/translation';

export const useTranslation = (): UseTranslationReturn => {
  const { currentLanguage, setLanguage, translations, isLoading } = useLanguageContext();

  const getNestedValue = (obj: TranslationData, path: string): string | undefined => {
    const keys = path.split('.');
    let current: any = obj;
    
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        return undefined;
      }
    }
    
    return typeof current === 'string' ? current : undefined;
  };

  const t = (key: string, fallback?: string): string => {
    // Get translation from current language
    const translation = getNestedValue(translations, key);
    
    if (translation) {
      return translation;
    }

    // If translation not found and we're in Hindi, try English fallback
    if (currentLanguage === 'hi') {
      // Import English translations for fallback
      try {
        const enTranslations = require('../translations/en.json');
        const englishTranslation = getNestedValue(enTranslations, key);
        if (englishTranslation) {
          // Log missing translation in development
          if (process.env.NODE_ENV === 'development') {
            console.warn(`Missing Hindi translation for key: ${key}`);
          }
          return englishTranslation;
        }
      } catch (error) {
        console.error('Failed to load English fallback translations:', error);
      }
    }

    // Final fallback: use provided fallback or key itself
    if (fallback) {
      return fallback;
    }

    // In development, warn about missing translations
    if (process.env.NODE_ENV === 'development') {
      console.warn(`Missing translation for key: ${key}`);
    }

    // Return the key itself as last resort
    return key;
  };

  return {
    t,
    currentLanguage,
    setLanguage,
    isLoading
  };
};