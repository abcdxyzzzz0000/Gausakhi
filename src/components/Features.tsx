import { UserPlus, Radio, CheckCircle } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export default function Features() {
  const { t } = useTranslation();
  const steps = [
    {
      icon: UserPlus,
      title: 'Open the app in the morning',
      description: 'See your tasks for the day.',
      number: '1'
    },
    {
      icon: Radio,
      title: 'While working',
      description: 'Scan, speak, or let the scale send weight.',
      number: '2'
    },
    {
      icon: CheckCircle,
      title: 'Finish your day',
      description: 'Everything is saved and sent—no extra work!',
      number: '3'
    }
  ];

  const stats = [
    {
      number: '500+',
      labelKey: 'features.stats.farmers'
    },
    {
      number: '50+',
      labelKey: 'features.stats.executives'
    },
    {
      number: '10K+',
      labelKey: 'features.stats.scans'
    },
    {
      number: '95%',
      labelKey: 'features.stats.success'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('features.title')}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-orange-600">
            {t('features.subtitle')}
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Left Side - Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                      <Icon size={24} className="mr-2 text-orange-600" />
                      {t(`features.step${step.number}.title`)}
                    </h4>
                    <p className="text-gray-600">{t(`features.step${step.number}.description`)}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center - Video */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-96 h-[28rem] bg-gradient-to-br from-orange-500 to-green-600 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  poster="/Punganur cow.jpeg"
                >
                  <source src="/cow-walking.mp4" type="video/mp4" />
                  <source src="cow_walking.mp4" type="video/mp4" />
                  <img
                    src="/Punganur cow.jpeg"
                    alt="Punganur Cow - GauSakhi Field Operations"
                    className="w-full h-full object-cover"
                  />
                </video>
              </div>
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-orange-300/40 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-300/40 rounded-full blur-xl animate-pulse delay-500"></div>
            </div>
          </div>

          {/* Right Side - Stats */}
          <div className="space-y-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-right">
                <div className="text-4xl font-bold text-orange-600 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {t(stat.labelKey)}
                </div>
                <div className="w-full h-px bg-gray-200 mt-4"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full hover:from-orange-600 hover:to-orange-700 transition-all hover:scale-105 shadow-lg shadow-orange-200 font-semibold text-lg">
            {t('features.ctaButton')}
          </button>
        </div>
      </div>
    </section>
  );
}
