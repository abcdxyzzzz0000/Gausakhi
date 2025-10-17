import { Github, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                G
              </div>
              <span className="text-xl font-bold text-white">GauSakhi</span>
            </div>
            <p className="text-gray-400 italic">
              "Serving GauMata through technology"
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-orange-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:text-orange-400 transition-colors">
                  Demo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-orange-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center space-x-2 hover:text-orange-400 transition-colors">
                <Mail size={18} />
                <span>contact@gausakhi.com</span>
              </a>
              <a href="#" className="flex items-center space-x-2 hover:text-orange-400 transition-colors">
                <Phone size={18} />
                <span>+91 98765 43210</span>
              </a>
              <a href="#" className="flex items-center space-x-2 hover:text-orange-400 transition-colors">
                <Github size={18} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} GauSakhi. All rights reserved. Made with ❤️ for Bharat.</p>
        </div>
      </div>
    </footer>
  );
}
