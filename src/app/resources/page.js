export default function Resources() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Health Resources</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Essential health information, emergency contacts, and trusted resources for Nigerians
          </p>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="bg-red-50 border-l-4 border-red-500 rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <span className="text-4xl">🚨</span>
              Emergency Numbers - Nigeria
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-xl text-gray-800 mb-2">National Emergency</h3>
                <p className="text-3xl font-bold text-red-600">112</p>
                <p className="text-sm text-gray-600 mt-2">24/7 Emergency Response</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-xl text-gray-800 mb-2">Police Emergency</h3>
                <p className="text-3xl font-bold text-blue-600">199</p>
                <p className="text-sm text-gray-600 mt-2">Nigeria Police Force</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-xl text-gray-800 mb-2">Fire Service</h3>
                <p className="text-3xl font-bold text-orange-600">112</p>
                <p className="text-sm text-gray-600 mt-2">National Fire Emergency</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-xl text-gray-800 mb-2">Ambulance (Lagos)</h3>
                <p className="text-3xl font-bold text-green-600">767</p>
                <p className="text-sm text-gray-600 mt-2">Lagos State Ambulance Service</p>
              </div>
            </div>
          </div>

          {/* Common Symptoms Guide */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Common Symptoms Quick Reference</h2>
            
            <div className="space-y-8">
              {/* Malaria */}
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">🦟 Malaria</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Key Symptoms:</strong> Cyclical fever (every 48-72 hrs), severe chills and rigors, profuse sweating, headache, body aches</p>
                  <p><strong>Urgency:</strong> High - Seek care within 24 hours if suspected</p>
                  <p><strong>Prevention:</strong> Use mosquito nets, repellents, eliminate standing water</p>
                </div>
              </div>

              {/* Typhoid */}
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">🤒 Typhoid Fever</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Key Symptoms:</strong> Gradual onset fever (step-ladder pattern), constipation or diarrhea, abdominal pain, relative bradycardia</p>
                  <p><strong>Urgency:</strong> Moderate-High - See doctor if fever persists beyond 3 days</p>
                  <p><strong>Prevention:</strong> Safe water, proper food hygiene, typhoid vaccine</p>
                </div>
              </div>

              {/* Heat Exhaustion */}
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">☀️ Heat Exhaustion</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Key Symptoms:</strong> Heavy sweating, weakness, dizziness, nausea, headache, muscle cramps</p>
                  <p><strong>Urgency:</strong> Moderate - Move to cool place, hydrate. Seek care if symptoms persist</p>
                  <p><strong>Prevention:</strong> Stay hydrated, avoid midday sun, wear light clothing</p>
                </div>
              </div>

              {/* Cholera */}
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">💧 Cholera</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Key Symptoms:</strong> Sudden watery diarrhea (rice-water stools), vomiting, rapid dehydration, leg cramps</p>
                  <p><strong>Urgency:</strong> EMERGENCY - Seek immediate medical care</p>
                  <p><strong>Prevention:</strong> Safe drinking water, proper sanitation, wash hands frequently</p>
                </div>
              </div>

              {/* Food Poisoning */}
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">🍽️ Food Poisoning</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Key Symptoms:</strong> Nausea, vomiting, diarrhea, stomach cramps within hours of eating</p>
                  <p><strong>Urgency:</strong> Low-Moderate - Usually resolves in 24-48 hrs. Seek care if severe or persistent</p>
                  <p><strong>Prevention:</strong> Proper food storage, cook meat thoroughly, avoid street food from unhygienic vendors</p>
                </div>
              </div>
            </div>
          </div>

          {/* Health Tips for Nigeria */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Health Tips for Tropical Climates</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-xl text-gray-800 mb-3">💧 Stay Hydrated</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Drink 2-3 liters of water daily (more in hot weather)</li>
                  <li>• Avoid excessive alcohol and caffeine</li>
                  <li>• Drink before you feel thirsty</li>
                  <li>• Use ORS for rehydration during illness</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-xl text-gray-800 mb-3">🦟 Mosquito Protection</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Sleep under insecticide-treated nets</li>
                  <li>• Use repellents with DEET</li>
                  <li>• Wear long sleeves at dawn/dusk</li>
                  <li>• Remove standing water around home</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-xl text-gray-800 mb-3">🍽️ Food Safety</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Wash hands before eating</li>
                  <li>• Eat freshly cooked hot food</li>
                  <li>• Peel fruits and vegetables</li>
                  <li>• Avoid raw or undercooked meat</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-xl text-gray-800 mb-3">🧼 Hygiene Practices</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Wash hands with soap regularly</li>
                  <li>• Use clean, safe drinking water</li>
                  <li>• Maintain proper sanitation</li>
                  <li>• Keep living spaces clean and ventilated</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-xl text-gray-800 mb-3">☀️ Sun Protection</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Avoid direct sun 11 AM - 3 PM</li>
                  <li>• Wear wide-brimmed hats</li>
                  <li>• Use sunscreen (SPF 30+)</li>
                  <li>• Seek shade when possible</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-xl text-gray-800 mb-3">💊 Medication Safety</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Only buy from licensed pharmacies</li>
                  <li>• Check expiration dates</li>
                  <li>• Complete antibiotic courses</li>
                  <li>• Never share prescription medications</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Trusted Health Organizations */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Trusted Health Organizations</h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-6 py-3">
                <h3 className="font-bold text-xl text-gray-800">Nigeria Centre for Disease Control (NCDC)</h3>
                <p className="text-gray-600">Official health information and disease surveillance</p>
                <a href="https://ncdc.gov.ng" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                  ncdc.gov.ng →
                </a>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 py-3">
                <h3 className="font-bold text-xl text-gray-800">Federal Ministry of Health</h3>
                <p className="text-gray-600">National health policies and programs</p>
                <a href="https://www.health.gov.ng" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  health.gov.ng →
                </a>
              </div>

              <div className="border-l-4 border-purple-500 pl-6 py-3">
                <h3 className="font-bold text-xl text-gray-800">World Health Organization (WHO)</h3>
                <p className="text-gray-600">Global health information and guidelines</p>
                <a href="https://www.who.int" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                  who.int →
                </a>
              </div>

              <div className="border-l-4 border-cyan-500 pl-6 py-3">
                <h3 className="font-bold text-xl text-gray-800">National Primary Health Care Development Agency</h3>
                <p className="text-gray-600">Primary healthcare services and immunization</p>
                <a href="https://www.nphcda.gov.ng" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">
                  nphcda.gov.ng →
                </a>
              </div>
            </div>
          </div>

          {/* Nearby Clinics - Port Harcourt */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Healthcare Facilities - Port Harcourt</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-xl text-gray-800 mb-2">University of Port Harcourt Teaching Hospital</h3>
                <p className="text-sm text-gray-600 mb-3">East-West Road, Choba</p>
                <p className="text-sm text-gray-700">
                  <strong>Services:</strong> Emergency, Surgery, Pediatrics, Internal Medicine
                </p>
                <p className="text-sm text-green-600 mt-2">24/7 Emergency Services</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-xl text-gray-800 mb-2">Braithwaite Memorial Specialist Hospital</h3>
                <p className="text-sm text-gray-600 mb-3">Evo Road, GRA Phase 2</p>
                <p className="text-sm text-gray-700">
                  <strong>Services:</strong> Specialist care, Laboratory, Radiology
                </p>
                <p className="text-sm text-green-600 mt-2">24/7 Emergency Services</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-xl text-gray-800 mb-2">Rivers State University Teaching Hospital</h3>
                <p className="text-sm text-gray-600 mb-3">Harley Street, Old GRA</p>
                <p className="text-sm text-gray-700">
                  <strong>Services:</strong> Multi-specialty hospital with advanced facilities
                </p>
                <p className="text-sm text-green-600 mt-2">24/7 Emergency Services</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-xl text-gray-800 mb-2">Kelsey Harrison Hospital</h3>
                <p className="text-sm text-gray-600 mb-3">Olu Obasanjo Road</p>
                <p className="text-sm text-gray-700">
                  <strong>Services:</strong> General medicine, Surgery, Maternity
                </p>
                <p className="text-sm text-blue-600 mt-2">Outpatient & Emergency Care</p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                💡 <strong>Tip:</strong> Call ahead to confirm services and availability before visiting
              </p>
            </div>
          </div>

          {/* First Aid Basics */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Basic First Aid</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="font-bold text-lg text-gray-800 mb-3">🩹 For Cuts & Wounds</h3>
                <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
                  <li>Wash hands thoroughly</li>
                  <li>Stop bleeding (apply pressure)</li>
                  <li>Clean wound with clean water</li>
                  <li>Apply antiseptic</li>
                  <li>Cover with clean bandage</li>
                </ol>
              </div>

              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="font-bold text-lg text-gray-800 mb-3">🔥 For Burns</h3>
                <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
                  <li>Remove from heat source</li>
                  <li>Cool with running water (10-20 min)</li>
                  <li>Remove jewelry/tight items</li>
                  <li>Cover with clean cloth</li>
                  <li>Seek medical care for severe burns</li>
                </ol>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-bold text-lg text-gray-800 mb-3">🤕 For Fever</h3>
                <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
                  <li>Take temperature reading</li>
                  <li>Give paracetamol (appropriate dose)</li>
                  <li>Encourage fluid intake</li>
                  <li>Use cool compress on forehead</li>
                  <li>Seek care if fever persists 3+ days</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-orange-50 border-l-4 border-orange-400 rounded-lg p-6">
            <p className="text-sm text-orange-800">
              <strong>⚠️ Important Reminder:</strong> This information is for educational purposes only. It does not replace professional medical advice, diagnosis, or treatment. Always consult qualified healthcare providers for medical concerns.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}