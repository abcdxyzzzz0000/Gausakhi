import { useTranslation } from '../hooks/useTranslation';

export default function About() {
  const { t } = useTranslation();
  const features = [
    {
      emoji: '🗣️',
      titleKey: 'about.features.voice.title',
      descriptionKey: 'about.features.voice.description'
    },
    {
      emoji: '📱',
      titleKey: 'about.features.scan.title',
      descriptionKey: 'about.features.scan.description'
    },
    {
      emoji: '⚖️',
      titleKey: 'about.features.weight.title',
      descriptionKey: 'about.features.weight.description'
    },
    {
      emoji: '🚚',
      titleKey: 'about.features.truck.title',
      descriptionKey: 'about.features.truck.description'
    },
    {
      emoji: '🔔',
      titleKey: 'about.features.reminders.title',
      descriptionKey: 'about.features.reminders.description'
    },
    {
      emoji: '📵',
      titleKey: 'about.features.offline.title',
      descriptionKey: 'about.features.offline.description'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-orange-100 to-green-100 p-4 shadow-2xl">
              <img
                src="/Punganur cow.jpeg"
                alt="Punganur Cow - GauSakhi Empowering Gau-sewa"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
                onError={(e) => {
                  // Fallback to a cow image if the local image fails to load
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=400&h=400&fit=crop&crop=center";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/80 via-transparent to-transparent rounded-2xl flex items-end justify-center p-6">
                <p className="text-2xl font-semibold text-white text-center">Seva Through Technology</p>
              </div>
            </div>
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-orange-300/40 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-green-300/40 rounded-full blur-2xl"></div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('about.title')}
              </h2>

            </div>

            <div className="grid gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-orange-50 transition-colors group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <span className="text-2xl">{feature.emoji}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {t(feature.titleKey)}
                    </h3>
                    <p className="text-gray-600">{t(feature.descriptionKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
