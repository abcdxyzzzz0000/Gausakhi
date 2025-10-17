import { ArrowRight, Play } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-green-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
              {t('hero.fieldOperationsTag')}
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              {t('hero.title')}
              <span className="block text-orange-600 mt-2">{t('hero.subtitle')}</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-all hover:scale-105 flex items-center justify-center space-x-2 shadow-lg shadow-orange-200">
                <span className="font-medium">{t('hero.downloadButton')}</span>
                <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-50 transition-all flex items-center justify-center space-x-2 border-2 border-gray-200">
                <Play size={20} />
                <span className="font-medium">{t('hero.watchButton')}</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <div className="bg-white rounded-3xl shadow-2xl p-4 border-8 border-gray-800 overflow-hidden">
                <img
                  src="/Mother Love.jpeg"
                  alt="Mother Love - GauSakhi Empowering Gau-sewa"
                  className="w-full h-auto rounded-2xl object-cover"
                  onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=500&h=600&fit=crop&crop=center";
                  }}
                />
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-32 h-32 bg-green-400/30 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-orange-400/30 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
