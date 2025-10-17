import { Download, PlayCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Join GauSakhi in Revolutionizing Gau-sewa Field Operations
        </h2>
        <p className="text-xl text-orange-50 mb-12 leading-relaxed">
          Empower your field teams with technology designed for Indian farmers and rural environments.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-orange-600 rounded-full hover:bg-orange-50 transition-all hover:scale-105 flex items-center justify-center space-x-2 shadow-xl font-semibold">
            <PlayCircle size={24} />
            <span>Request Demo</span>
          </button>
          <button className="px-8 py-4 bg-orange-900 text-white rounded-full hover:bg-orange-950 transition-all hover:scale-105 flex items-center justify-center space-x-2 shadow-xl font-semibold">
            <Download size={24} />
            <span>Download App</span>
          </button>
        </div>

        <p className="mt-8 text-orange-100 text-sm">
          Available for Android • iOS coming soon
        </p>
      </div>
    </section>
  );
}
