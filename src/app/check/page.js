'use client';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
import { auth, db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import Link from 'next/link';

export default function SymptomCheck() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [symptoms, setSymptoms] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!symptoms.trim() || symptoms.trim().length < 5) {
      setError('Please enter at least 5 characters describing your symptoms.');
      return;
    }

    setError('');
    setIsAnalyzing(true);

    try {
      // Call AI analysis API
      const response = await fetch('/api/analyze-symptoms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          symptoms: symptoms.trim(),
          userContext: {
            location: 'Nigeria',
            userId: user.uid,
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Analysis failed');
      }

      // Save to Firebase (user history)
      try {
        await addDoc(collection(db, 'symptomChecks'), {
          userId: user.uid,
          userName: user.displayName || user.email,
          symptoms: symptoms.trim(),
          analysis: data.analysis,
          timestamp: new Date().toISOString(),
        });
      } catch (dbError) {
        console.error('Failed to save to history:', dbError);
        // Continue anyway - don't block user from seeing results
      }

      // Navigate to results page with data
      const resultsData = encodeURIComponent(JSON.stringify({
        symptoms: symptoms.trim(),
        analysis: data.analysis,
        timestamp: data.timestamp,
      }));
      
      router.push(`/results?data=${resultsData}`);

    } catch (err) {
      console.error('Analysis error:', err);
      setError(err.message || 'Failed to analyze symptoms. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
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
            ⚠️ <strong>Important:</strong> This AI tool provides educational information only. It is NOT a medical diagnosis. Always consult a healthcare professional for proper medical advice.
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
                placeholder="E.g., I've had a high fever for 3 days, severe headache, body aches, chills, and I'm feeling very weak. I also have some nausea..."
                className="w-full h-40 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none bg-white text-gray-800"
                required
                disabled={isAnalyzing}
              />
              <p className="text-xs text-gray-500 mt-2">
                💡 <strong>Tip:</strong> Include duration, severity, and any other relevant details
              </p>
            </div>

            {/* Voice Button */}
            <button
              type="button"
              onClick={startListening}
              disabled={isListening || isAnalyzing}
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
              disabled={isAnalyzing || !symptoms.trim()}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isAnalyzing ? (
                <span className="flex items-center justify-center gap-3">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing with AI...
                </span>
              ) : (
                'Analyze Symptoms with AI →'
              )}
            </button>
          </form>

          {/* Tips Section */}
          <div className="border-t pt-6 mt-6">
            <h3 className="font-semibold text-gray-800 mb-3">For Best Results:</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Include when symptoms started (e.g., &quot;3 days ago&quot;)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Describe severity (mild, moderate, severe)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Mention any recent travel or exposure to illness</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Note if symptoms are getting better or worse</span>
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