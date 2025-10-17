import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export default function AcceptanceCriteria() {
  const { t } = useTranslation();
  const criteriaKeys = [
    'acceptance.noTyping',
    'acceptance.poorNetwork',
    'acceptance.hindiVoice',
    'acceptance.bigButtons',
    'acceptance.free'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('acceptance.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('acceptance.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {criteriaKeys.map((criterionKey, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-green-50 to-orange-50 rounded-2xl p-6 border-2 border-green-200 hover:border-green-400 transition-all hover:shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={24} className="text-white" />
                </div>
                <p className="text-gray-800 font-medium leading-relaxed pt-1">
                  {t(criterionKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
