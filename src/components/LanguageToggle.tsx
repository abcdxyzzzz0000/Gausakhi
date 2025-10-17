import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { LanguageToggleProps, Language } from '../types/translation';

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  className = '',
  showLabels = true,
  variant = 'buttons'
}) => {
  const { currentLanguage, setLanguage, isLoading } = useTranslation();

  const handleLanguageChange = (lang: Language) => {
    if (lang !== currentLanguage && !isLoading) {
      setLanguage(lang);
    }
  };

  if (variant === 'switch') {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        <span className={`text-sm ${currentLanguage === 'en' ? 'text-orange-600 font-medium' : 'text-gray-500'}`}>
          🇬🇧 {showLabels && 'English'}
        </span>
        <button
          onClick={() => handleLanguageChange(currentLanguage === 'en' ? 'hi' : 'en')}
          disabled={isLoading}
          className={`
            relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out
            ${currentLanguage === 'hi' ? 'bg-orange-600' : 'bg-gray-300'}
            ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-opacity-80'}
            focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
          `}
          aria-label={`Switch to ${currentLanguage === 'en' ? 'Hindi' : 'English'}`}
        >
          <span
            className={`
              inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out
              ${currentLanguage === 'hi' ? 'translate-x-6' : 'translate-x-1'}
            `}
          />
        </button>
        <span className={`text-sm ${currentLanguage === 'hi' ? 'text-orange-600 font-medium' : 'text-gray-500'}`}>
          🇮🇳 {showLabels && 'हिन्दी'}
        </span>
      </div>
    );
  }

  // Button variant (default)
  return (
    <div className={`flex items-center space-x-1 bg-gray-100 rounded-full p-1 ${className}`}>
      <button
        onClick={() => handleLanguageChange('en')}
        disabled={isLoading}
        className={`
          flex items-center space-x-1 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200
          ${currentLanguage === 'en'
            ? 'bg-white text-orange-600 shadow-sm'
            : 'text-gray-600 hover:text-gray-800'
          }
          ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
        `}
        aria-label="Switch to English"
        aria-pressed={currentLanguage === 'en'}
      >
        <span>🇬🇧</span>
        {showLabels && <span>English</span>}
      </button>

      <button
        onClick={() => handleLanguageChange('hi')}
        disabled={isLoading}
        className={`
          flex items-center space-x-1 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200
          ${currentLanguage === 'hi'
            ? 'bg-white text-orange-600 shadow-sm'
            : 'text-gray-600 hover:text-gray-800'
          }
          ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
        `}
        aria-label="Switch to Hindi"
        aria-pressed={currentLanguage === 'hi'}
      >
        <span>🇮🇳</span>
        {showLabels && <span>हिन्दी</span>}
      </button>

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-orange-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};