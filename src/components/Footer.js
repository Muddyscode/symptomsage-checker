import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3">
              SymptomSage
            </h3>
            <p className="text-sm text-gray-400">
              Your trusted AI guide for understanding common symptoms. Always consult a healthcare professional for medical advice.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Health Blog
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/check" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Symptom Checker
                </Link>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h4 className="font-semibold text-white mb-3">Important Notice</h4>
            <p className="text-xs text-gray-400">
              ⚠️ SymptomSage provides informational content only. This is NOT medical advice. Always consult qualified healthcare professionals for diagnosis and treatment.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} SymptomSage. Built with care for Nigeria. 🇳🇬
          </p>
        </div>
      </div>
    </footer>
  );
}