export type Language = 'en' | 'hi';

export interface TranslationData {
  [key: string]: string | TranslationData;
}

export interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  translations: TranslationData;
  isLoading: boolean;
}

export interface UseTranslationReturn {
  t: (key: string, fallback?: string) => string;
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  isLoading: boolean;
}

export interface LanguageToggleProps {
  className?: string;
  showLabels?: boolean;
  variant?: 'switch' | 'buttons';
}

export interface LanguagePreference {
  language: Language;
  timestamp: number;
}

// Translation key types for type safety
export type TranslationKeys = 
  | 'common.loading'
  | 'common.error'
  | 'header.title'
  | 'header.subtitle'
  | 'hero.title'
  | 'hero.subtitle'
  | 'hero.description'
  | 'hero.downloadButton'
  | 'hero.watchButton'
  | 'about.title'
  | 'about.features.voice.title'
  | 'about.features.voice.description'
  | 'about.features.scan.title'
  | 'about.features.scan.description'
  | 'about.features.weight.title'
  | 'about.features.weight.description'
  | 'about.features.truck.title'
  | 'about.features.truck.description'
  | 'about.features.reminders.title'
  | 'about.features.reminders.description'
  | 'about.features.offline.title'
  | 'about.features.offline.description'
  | 'features.title'
  | 'features.subtitle'
  | 'features.step1.title'
  | 'features.step1.description'
  | 'features.step2.title'
  | 'features.step2.description'
  | 'features.step3.title'
  | 'features.step3.description'
  | 'features.stats.farmers'
  | 'features.stats.executives'
  | 'features.stats.scans'
  | 'features.stats.success'
  | 'features.ctaButton'
  | 'acceptance.title'
  | 'acceptance.subtitle'
  | 'acceptance.noTyping'
  | 'acceptance.poorNetwork'
  | 'acceptance.hindiVoice'
  | 'acceptance.bigButtons'
  | 'acceptance.free'
  | 'preview.title'
  | 'preview.subtitle'
  | 'preview.features.registration'
  | 'preview.features.voice'
  | 'preview.features.sync'
  | 'preview.features.offline'
  | 'preview.testimonial.text'
  | 'preview.testimonial.author';