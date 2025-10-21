export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-500 via-blue-600 to-blue-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">About SymptomSage</h1>
          <p className="text-xl text-cyan-100">
            Empowering Nigerians with AI-driven health insights
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At SymptomSage, we believe that <strong>healthcare information should be accessible to everyone</strong>—regardless of location, income, or background. In Nigeria, where access to immediate medical consultation can be challenging, we're bridging the gap between symptom onset and professional care.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is simple: <strong>Help Nigerians recognize common health issues early</strong>, understand when to seek medical attention, and connect them with local healthcare resources—all through the power of artificial intelligence.
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We envision a Nigeria where every citizen can make informed health decisions with confidence. Where someone experiencing fever in Lagos can quickly identify potential malaria symptoms. Where a parent in Port Harcourt can assess their child's condition before rushing to the hospital.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              SymptomSage is not just a symptom checker—it's a <strong>health companion</strong> built specifically for the Nigerian context, understanding our unique health challenges, climate-related conditions, and healthcare infrastructure.
            </p>
          </div>

          {/* The Problem Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">The Problem We're Solving</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🏥</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Limited Access to Immediate Care</h3>
                  <p className="text-lg leading-relaxed">
                    Many Nigerians live far from quality healthcare facilities. When symptoms appear, getting professional advice quickly can be difficult and expensive.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-3xl">🌡️</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Tropical Disease Awareness</h3>
                  <p className="text-lg leading-relaxed">
                    Malaria, typhoid, and heat-related illnesses are common in Nigeria, but many people struggle to differentiate between them and ordinary flu.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-3xl">⏰</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Delayed Diagnosis</h3>
                  <p className="text-lg leading-relaxed">
                    Early recognition of serious symptoms can save lives. We help users understand urgency levels and when to seek immediate medical attention.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Approach Section */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Approach</h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="font-bold text-xl mb-2 text-green-700">🤖 AI-Powered Intelligence</h3>
                <p className="text-lg leading-relaxed">
                  We leverage advanced artificial intelligence trained on medical databases and Nigerian health patterns to provide accurate, context-aware symptom analysis.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-2 text-green-700">🇳🇬 Nigeria-First Design</h3>
                <p className="text-lg leading-relaxed">
                  Unlike generic symptom checkers, SymptomSage prioritizes conditions common in Nigeria—from malaria and typhoid to heat exhaustion and food-borne illnesses.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-2 text-green-700">⚖️ Ethics-First Philosophy</h3>
                <p className="text-lg leading-relaxed">
                  We're transparent: SymptomSage is NOT a doctor. Every result comes with clear disclaimers encouraging professional medical consultation. We're an educational tool, not a replacement for healthcare.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-2 text-green-700">💰 Always Free</h3>
                <p className="text-lg leading-relaxed">
                  Health information shouldn't be a luxury. SymptomSage is and will always remain free for all Nigerians.
                </p>
              </div>
            </div>
          </div>

          {/* How We Started Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">How We Started</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              SymptomSage was born from a simple observation: <strong>Too many Nigerians delay seeking medical care</strong> because they're unsure if their symptoms warrant a hospital visit. Others rush to emergency rooms for minor issues, overwhelming an already strained healthcare system.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We asked ourselves: What if there was a tool that could help people make better health decisions? What if AI could provide instant, reliable symptom analysis tailored to Nigeria's unique health landscape?
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              That question led to SymptomSage—a platform built from first principles, designed with Nigerian families in mind, and committed to ethical, accessible healthcare information.
            </p>
          </div>

          {/* What We're Not Section */}
          <div className="bg-orange-50 border-l-4 border-orange-400 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">⚠️ What We're NOT</h2>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">✗</span>
                <span><strong>We are NOT doctors</strong> and do not provide medical diagnoses</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">✗</span>
                <span><strong>We do NOT replace professional medical care</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">✗</span>
                <span><strong>We do NOT prescribe medications or treatments</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span><strong>We ARE</strong> an educational tool to help you understand symptoms and make informed decisions about seeking care</span>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-700 mb-6">
              Have questions, feedback, or suggestions? We'd love to hear from you.
            </p>
            
            <div className="space-y-4 text-gray-700">
              <div className="flex items-center gap-3">
                <div className="text-2xl">📧</div>
                <div>
                  <div className="font-semibold">Email</div>
                  <a href="mailto:hello@symptomsage.ng" className="text-cyan-600 hover:underline">
                    hello@symptomsage.ng
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-2xl">📍</div>
                <div>
                  <div className="font-semibold">Address</div>
                  <p>15 Trans-Amadi Industrial Layout<br />Port Harcourt, Rivers State<br />Nigeria</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-2xl">⏰</div>
                <div>
                  <div className="font-semibold">Support Hours</div>
                  <p>Monday - Friday: 9:00 AM - 5:00 PM WAT</p>
                </div>
              </div>
            </div>
          </div>

          {/* Join Us Section */}
          <div className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Movement</h2>
            <p className="text-xl text-cyan-100 mb-8">
              Be part of a community taking control of their health with technology
            </p>
            <a
              href="/signup"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyan-50 transition-all duration-300 shadow-xl hover:scale-105"
            >
              Get Started Free →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}