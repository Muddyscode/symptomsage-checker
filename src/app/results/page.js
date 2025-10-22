'use client';
import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import ClinicMap from '@/components/ClinicMap';

function ResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [resultsData, setResultsData] = useState(null);

  useEffect(() => {
    const dataParam = searchParams.get('data');
    if (!dataParam) {
      router.push('/check');
      return;
    }

    try {
      const decoded = JSON.parse(decodeURIComponent(dataParam));
      setResultsData(decoded);
    } catch (error) {
      console.error('Failed to parse results:', error);
      router.push('/check');
    }
  }, [searchParams, router]);

  if (!resultsData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-700">Loading results...</p>
      </div>
    );
  }

  const { symptoms, analysis } = resultsData;

  // Urgency level styling
  const urgencyStyles = {
    Emergency: 'bg-red-100 border-red-500 text-red-800',
    High: 'bg-orange-100 border-orange-500 text-orange-800',
    Moderate: 'bg-yellow-100 border-yellow-500 text-yellow-800',
    Low: 'bg-green-100 border-green-500 text-green-800',
  };

  const urgencyIcons = {
    Emergency: '🚨',
    High: '⚠️',
    Moderate: '⚡',
    Low: '✅',
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Analysis Results</h1>
          <p className="text-gray-600">Based on your symptoms, here&apos;s what we found</p>
        </div>

        {/* Your Symptoms */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Your Symptoms</h2>
          <p className="text-gray-700 bg-gray-50 p-4 rounded-lg italic">&quot;{symptoms}&quot;</p>
        </div>

        {/* Urgency Level */}
        <div className={`border-l-4 rounded-xl p-6 shadow-lg ${urgencyStyles[analysis.urgencyLevel] || urgencyStyles.Moderate}`}>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">{urgencyIcons[analysis.urgencyLevel] || '⚡'}</span>
            <div>
              <h2 className="text-2xl font-bold">Urgency: {analysis.urgencyLevel}</h2>
              <p className="text-sm">{analysis.urgencyExplanation}</p>
            </div>
          </div>
          <div className="bg-white/50 rounded-lg p-4 mt-4">
            <p className="font-semibold">{analysis.whenToSeekCare}</p>
          </div>
        </div>

        {/* Possible Conditions */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Possible Conditions</h2>
          <div className="space-y-4">
            {analysis.possibleConditions && analysis.possibleConditions.map((condition, index) => (
              <div key={index} className="border-l-4 border-cyan-500 pl-6 py-4 bg-cyan-50 rounded-r-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{condition.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    condition.probability === 'High' ? 'bg-red-100 text-red-700' :
                    condition.probability === 'Moderate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {condition.probability} Probability
                  </span>
                </div>
                <p className="text-gray-700 mb-2">{condition.description}</p>
                {condition.commonIn && (
                  <p className="text-sm text-cyan-700 italic">📍 {condition.commonIn}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Actions */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Actions</h2>
          <ul className="space-y-3">
            {analysis.recommendedActions && analysis.recommendedActions.map((action, index) => (
              <li key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <span className="text-blue-600 font-bold text-lg">{index + 1}.</span>
                <span className="text-gray-700">{action}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Warning Signs */}
        <div className="bg-red-50 border-l-4 border-red-500 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-2">
            <span>⚠️</span> Warning Signs to Watch For
          </h2>
          <p className="text-red-700 mb-4 font-medium">Seek immediate medical attention if you experience:</p>
          <ul className="space-y-2">
            {analysis.warningSignsToWatch && analysis.warningSignsToWatch.map((sign, index) => (
              <li key={index} className="flex items-start gap-3 text-red-800">
                <span className="text-red-600">•</span>
                <span>{sign}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Nigeria-Specific Advice */}
        {analysis.nigeriaSpecificAdvice && (
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span>🇳🇬</span> Nigeria-Specific Advice
            </h2>
            <p className="text-gray-700 text-lg">{analysis.nigeriaSpecificAdvice}</p>
          </div>
        )}

        {/* Nearby Clinics Map */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Nearby Healthcare Facilities</h2>
          <ClinicMap />
        </div>

        {/* Disclaimer */}
        <div className="bg-orange-50 border-l-4 border-orange-400 rounded-lg p-6">
          <p className="text-sm text-orange-800">
            <strong>Medical Disclaimer:</strong> {analysis.disclaimer || 'This is educational information only. Always consult a qualified healthcare professional for proper diagnosis and treatment.'}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/check"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg"
          >
            Check New Symptoms
          </Link>
          <Link
            href="/"
            className="bg-gray-600 text-white px-8 py-4 rounded-lg font-bold text-center hover:bg-gray-700 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function Results() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-700">Loading results...</p>
      </div>
    }>
      <ResultsContent />
    </Suspense>
  );
}