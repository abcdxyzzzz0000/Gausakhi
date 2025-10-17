# Language Toggle Feature Design

## Overview

This design document outlines the implementation approach for adding English ↔ Hindi language toggle functionality to the GauSakhi React application. The solution uses React Context for state management, custom hooks for translation logic, and JSON files for translation data storage.

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    React Application                        │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐  ┌─────────────────┐  ┌──────────────┐ │
│  │   Components    │  │  Language Toggle │  │    Header    │ │
│  │                 │  │     Button      │  │              │ │
│  └─────────────────┘  └─────────────────┘  └──────────────┘ │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐  ┌─────────────────┐  ┌──────────────┐ │
│  │ useTranslation  │  │ LanguageContext │  │ Translation  │ │
│  │     Hook        │  │                 │  │   Provider   │ │
│  └─────────────────┘  └─────────────────┘  └──────────────┘ │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐  ┌─────────────────┐  ┌──────────────┐ │
│  │   en.json       │  │    hi.json      │  │ localStorage │ │
│  │ (English)       │  │   (Hindi)       │  │ (Persistence)│ │
│  └─────────────────┘  └─────────────────┘  └──────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### Component Structure

```
src/
├── contexts/
│   └── LanguageContext.tsx          # Language state management
├── hooks/
│   └── useTranslation.ts            # Translation hook
├── components/
│   ├── LanguageToggle.tsx           # Toggle button component
│   └── [existing components]       # Updated with translations
├── translations/
│   ├── en.json                     # English translations
│   └── hi.json                     # Hindi translations
└── types/
    └── translation.ts              # TypeScript interfaces
```

## Components and Interfaces

### 1. Language Context

**Purpose**: Provides global language state and switching functionality

```typescript
interface LanguageContextType {
  currentLanguage: 'en' | 'hi';
  setLanguage: (lang: 'en' | 'hi') => void;
  translations: TranslationData;
  isLoading: boolean;
}

interface TranslationData {
  [key: string]: string | TranslationData;
}
```

**Key Features**:
- Manages current language state
- Handles language switching logic
- Loads and caches translation data
- Persists language preference to localStorage
- Provides loading states during translation loading

### 2. Translation Hook

**Purpose**: Provides easy access to translations in components

```typescript
interface UseTranslationReturn {
  t: (key: string, fallback?: string) => string;
  currentLanguage: 'en' | 'hi';
  setLanguage: (lang: 'en' | 'hi') => void;
  isLoading: boolean;
}
```

**Key Features**:
- Simple `t()` function for getting translations
- Nested key support (e.g., 'hero.title')
- Fallback to English if translation missing
- TypeScript support with key validation

### 3. Language Toggle Component

**Purpose**: UI component for switching languages

```typescript
interface LanguageToggleProps {
  className?: string;
  showLabels?: boolean;
  variant?: 'switch' | 'buttons';
}
```

**Design Features**:
- Toggle switch or button group variants
- Flag icons (🇬🇧 🇮🇳) with text labels
- Smooth transition animations
- Mobile-responsive design
- Accessibility support (ARIA labels)

### 4. Translation Files Structure

**English (en.json)**:
```json
{
  "common": {
    "loading": "Loading...",
    "error": "Error occurred"
  },
  "header": {
    "title": "GauSakhi",
    "subtitle": "Empowering Gau-sewa"
  },
  "hero": {
    "title": "GauSakhi",
    "subtitle": "Your Helper for Gau-Seva Work",
    "description": "Do your daily Gau-seva work easily—with just your phone",
    "downloadButton": "Download App",
    "watchButton": "See How It Works"
  },
  "about": {
    "title": "You Do the Work. GauSakhi Does the Rest.",
    "features": {
      "voice": {
        "title": "Just speak in Hindi",
        "description": "Say \"Aaj 800 kg gobar liya\" → App saves it automatically."
      }
    }
  }
}
```

**Hindi (hi.json)**:
```json
{
  "common": {
    "loading": "लोड हो रहा है...",
    "error": "त्रुटि हुई"
  },
  "header": {
    "title": "गौसखी",
    "subtitle": "गौ-सेवा को सशक्त बनाना"
  },
  "hero": {
    "title": "गौसखी",
    "subtitle": "गौ-सेवा कार्य के लिए आपका सहायक",
    "description": "अपना दैनिक गौ-सेवा कार्य आसानी से करें—बस अपने फोन से",
    "downloadButton": "ऐप डाउनलोड करें",
    "watchButton": "देखें यह कैसे काम करता है"
  },
  "about": {
    "title": "आप काम करें। गौसखी बाकी संभालेगा।",
    "features": {
      "voice": {
        "title": "बस हिंदी में बोलें",
        "description": "कहें \"आज 800 किलो गोबर लिया\" → ऐप अपने आप सेव कर देगा।"
      }
    }
  }
}
```

## Data Models

### Translation Key Structure

```typescript
type TranslationKeys = 
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
  // ... more keys
```

### Language Preference Storage

```typescript
interface LanguagePreference {
  language: 'en' | 'hi';
  timestamp: number;
}
```

**localStorage Key**: `gausakhi_language_preference`

## Error Handling

### Translation Loading Errors
- **Fallback Strategy**: If Hindi translations fail to load, fall back to English
- **Graceful Degradation**: Show English text with error indicator
- **Retry Logic**: Attempt to reload translations on network recovery

### Missing Translation Keys
- **Fallback Chain**: Hindi → English → Key name
- **Development Warnings**: Console warnings for missing keys in development
- **Production Handling**: Silent fallback to prevent UI breaks

### Network Issues
- **Offline Support**: Cache translations in localStorage
- **Loading States**: Show loading indicators during translation fetching
- **Error Recovery**: Retry failed translation loads

## Testing Strategy

### Unit Tests
- **Translation Hook**: Test key resolution, fallbacks, language switching
- **Language Context**: Test state management, persistence, loading states
- **Components**: Test rendering with different languages

### Integration Tests
- **Language Switching**: Test complete language switch flow
- **Persistence**: Test localStorage integration
- **Component Integration**: Test translation updates across components

### E2E Tests
- **User Flows**: Test complete user journey with language switching
- **Performance**: Test language switch performance
- **Accessibility**: Test screen reader compatibility

### Manual Testing Checklist
- [ ] All text elements translate correctly
- [ ] Language preference persists across page reloads
- [ ] Toggle button works on all screen sizes
- [ ] Smooth animations during language changes
- [ ] No layout shifts during translation
- [ ] Proper Hindi font rendering
- [ ] Accessibility features work correctly

## Performance Considerations

### Translation Loading
- **Lazy Loading**: Load translations only when needed
- **Caching**: Cache translations in memory and localStorage
- **Bundle Splitting**: Separate translation files from main bundle

### Language Switching
- **Immediate Updates**: Use React Context for instant UI updates
- **Minimal Re-renders**: Optimize component re-rendering during language changes
- **Animation Performance**: Use CSS transforms for smooth transitions

### Memory Management
- **Translation Cleanup**: Clean up unused translations
- **Context Optimization**: Minimize context value changes
- **Component Memoization**: Use React.memo for translation-heavy components

## Accessibility

### Screen Reader Support
- **ARIA Labels**: Proper labeling for language toggle button
- **Language Attributes**: Set `lang` attribute on HTML elements
- **Announcements**: Announce language changes to screen readers

### Keyboard Navigation
- **Focus Management**: Maintain focus during language changes
- **Keyboard Shortcuts**: Optional keyboard shortcut for language toggle
- **Tab Order**: Proper tab order for language toggle

### Visual Accessibility
- **High Contrast**: Ensure toggle button works in high contrast mode
- **Font Scaling**: Support browser font scaling
- **Color Independence**: Don't rely solely on color for language indication

## Security Considerations

### Input Validation
- **Language Parameter**: Validate language codes
- **Translation Keys**: Sanitize translation key inputs
- **XSS Prevention**: Escape translation content if needed

### Data Storage
- **localStorage Security**: Store only language preference, no sensitive data
- **Translation Integrity**: Validate translation file structure
- **Content Security**: Ensure translation content is safe for rendering