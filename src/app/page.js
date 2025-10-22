'use client';
import Link from 'next/link';
import { auth } from '@/lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Home() {
  const [user, loading] = useAuthState(auth);

  return (
    <main className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="https://cdn.coverr.co/videos/coverr-doctor-using-digital-tablet-4297/1080p.mp4" type="video/mp4" />
          {/* Fallback to gradient if video fails */}
        </video>
        
        {/* Animated Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-900/90 via-blue-800/85 to-blue-900/90"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center px-4 space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight animate-fade-in">
            Your Health, <span className="text-cyan-300">Decoded</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto">
            AI-powered symptom analysis tailored for Nigeria. Get instant insights on malaria, typhoid, and more—always free, always ethical.
          </p>

          {/* Disclaimer Badge */}
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-3">
            <p className="text-sm text-cyan-50 flex items-center gap-2">
              <span className="text-lg">⚠️</span>
              <span>Educational tool only—always consult a healthcare professional</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            {loading ? (
              <div className="text-cyan-200 text-lg">Loading...</div>
            ) : user ? (
              <>
                <div className="text-center">
                  <p className="text-cyan-100 mb-3 text-lg">
                    Welcome back, <span className="font-bold text-white">{user.displayName || user.email.split('@')[0]}</span>! 👋
                  </p>
                  <Link
                    href="/check"
                    className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                  >
                    Start Symptom Check →
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/signup"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  Get Started Free
                </Link>
                <Link
                  href="/login"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              How SymptomSage Works
            </h2>
            <p className="text-xl text-gray-600">Three simple steps to better health insights</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto text-white text-3xl font-bold shadow-lg">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Describe Symptoms</h3>
              <p className="text-gray-600">
                Type or speak your symptoms in plain language. Include details like duration, severity, and any relevant history.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto text-white text-3xl font-bold shadow-lg">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-800">AI Analysis</h3>
              <p className="text-gray-600">
                Our AI instantly analyzes your symptoms against common Nigerian ailments like malaria, typhoid, and more.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto text-white text-3xl font-bold shadow-lg">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Get Insights</h3>
              <p className="text-gray-600">
                Receive possible conditions with urgency flags, health tips, and nearby clinic recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose SymptomSage?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">
                Enter symptoms via text or voice in seconds. Get instant AI-powered insights.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Smart Analysis</h3>
              <p className="text-gray-600">
                AI identifies possible conditions with probability scores and urgency flags.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Local Clinics</h3>
              <p className="text-gray-600">
                Find nearby healthcare facilities in Nigeria when you need professional care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
            What Users Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-800">Adaobi O.</div>
                  <div className="text-sm text-gray-500">Lagos</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &quot;Helped me recognize malaria symptoms early. I got treatment before it got worse. Thank you!&quot;
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  C
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-800">Chidi M.</div>
                  <div className="text-sm text-gray-500">Port Harcourt</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &quot;The voice input feature is amazing. Super fast and easy to use even when I&apos;m not feeling well.&quot;
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  F
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-800">Fatima A.</div>
                  <div className="text-sm text-gray-500">Abuja</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &quot;Finally, a health tool that understands Nigerian health issues. The clinic finder is very helpful.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Is SymptomSage a replacement for a doctor?</h3>
              <p className="text-gray-600">
                No. SymptomSage is an educational tool that helps you understand your symptoms. Always consult a qualified healthcare professional for diagnosis and treatment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Is my health information private?</h3>
              <p className="text-gray-600">
                Yes. We take privacy seriously. Your symptom data is encrypted and never shared with third parties without your explicit consent.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">How accurate is the AI?</h3>
              <p className="text-gray-600">
                Our AI is trained on medical data and common Nigerian ailments, but it&apos;s not perfect. Results are probabilities, not diagnoses. Always verify with a healthcare provider.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nigeria-Focused Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Built for Naija 🇳🇬
          </h2>
          <p className="text-lg text-gray-700">
            We understand common Nigerian health concerns—malaria, typhoid, heat-related issues, and more. 
            Get context-aware insights that matter to your environment.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              Malaria Symptoms
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              Typhoid Fever
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              Heat Exhaustion
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              Food Poisoning
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              + Many More
            </span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {!user && (
        <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Check Your Symptoms?
            </h2>
            <p className="text-xl text-cyan-100">
              Join thousands of Nigerians using SymptomSage for quick health insights.
            </p>
            <Link
              href="/signup"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Start Free Now →
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}