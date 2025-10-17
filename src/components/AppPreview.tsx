import { CheckCircle } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export default function AppPreview() {
  const { t } = useTranslation();
  const featureKeys = [
    'preview.features.registration',
    'preview.features.voice',
    'preview.features.sync',
    'preview.features.offline'
  ];

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-orange-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('preview.title')}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('preview.subtitle')}
              </p>
            </div>

            <div className="space-y-4">
              {featureKeys.map((featureKey, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                  <span className="text-gray-700 font-medium">{t(featureKey)}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-orange-200">
              <p className="text-gray-700 italic text-lg">
                "{t('preview.testimonial.text')}"
              </p>
              <p className="text-orange-600 font-semibold mt-2">— {t('preview.testimonial.author')}</p>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border-8 border-gray-700">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-white font-semibold text-lg">Farmer Registration</div>
                      <div className="px-3 py-1 bg-green-500 rounded-full text-white text-xs font-medium">
                        Synced
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 space-y-3">
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                      <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                      <div className="h-3 bg-gray-200 rounded w-4/6"></div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur rounded-2xl p-6 space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">🎤</span>
                      </div>
                      <div className="text-white font-medium">Voice Input</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3 text-white text-sm">
                      "आज 800 किलो गोबर लिया"
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-500/20 rounded-lg p-4 text-center">
                      <div className="text-green-400 text-2xl font-bold">247</div>
                      <div className="text-green-300 text-xs mt-1">Farmers</div>
                    </div>
                    <div className="bg-orange-500/20 rounded-lg p-4 text-center">
                      <div className="text-orange-400 text-2xl font-bold">1.2K</div>
                      <div className="text-orange-300 text-xs mt-1">Contributions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-40 h-40 bg-orange-400/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-green-400/30 rounded-full blur-3xl animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
