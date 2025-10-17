'use client';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase';
import Link from 'next/link';

export default function SymptomCheck() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [symptoms, setSymptoms] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState('');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 to-blue-50">
        <p className="text-gray-700 text-lg">Loading...</p>
      </div>
    );
  }

  if (!user) {
    router.push('/login');
    return null;
  }

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window)) {
      setError('Voice input not supported in your browser. Please use text input instead.');
      return;
    }

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
      setError('');
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSymptoms(transcript);
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      setError(`Voice error: ${event.error}. Please try again.`);
      setIsListening(false);
    };

    recognition.onend = () => setIsListening(false);

    recognition.start();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!symptoms.trim()) {
      setError('Please enter or speak at least one symptom.');
      return;
    }
    setError('');
    alert(`Analyzing symptoms: ${symptoms}\n\n(AI results coming soon in Phase 5!)`);
    console.log('Symptoms for AI:', symptoms);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Welcome Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Hello, {user.displayName || user.email.split('@')[0]}! 👋
          </h1>
          <p className="text-gray-600">
            Describe your symptoms below. Be as specific as possible for better insights.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="bg-orange-50 border-l-4 border-orange-400 rounded-lg p-4 mb-6">
          <p className="text-sm text-orange-800 font-medium">
            ⚠️ <strong>Important:</strong> This is NOT medical advice. Always consult a healthcare professional for diagnosis and treatment.
          </p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-xl shadow-xl p-8 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Textarea */}
            <div>
              <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700 mb-2">
                Your Symptoms
              </label>
              <textarea
                id="symptoms"
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                placeholder="E.g., fever for 3 days, severe headache, body aches, nausea..."
                className="w-full h-40 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none bg-white text-gray-800"
                required
              />
              <p className="text-xs text-gray-500 mt-2">
                💡 Tip: Include duration, severity, and any other relevant details
              </p>
            </div>

            {/* Voice Button */}
            <button
              type="button"
              onClick={startListening}
              disabled={isListening}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-md"
            >
              <span className="text-xl">🎤</span>
              <span>{isListening ? 'Listening...' : 'Speak Your Symptoms'}</span>
            </button>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Analyze Symptoms →
            </button>
          </form>

          {/* Tips Section */}
          <div className="border-t pt-6 mt-6">
            <h3 className="font-semibold text-gray-800 mb-3">Quick Tips:</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Be specific about when symptoms started</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Mention severity (mild, moderate, severe)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Include any recent travel or exposure</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center mt-6">
          <Link href="/" className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}