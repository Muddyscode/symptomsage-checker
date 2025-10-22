'use client';
import { useState } from 'react';

// Mock clinic data for Port Harcourt
const mockClinics = [
  {
    id: 1,
    name: 'University of Port Harcourt Teaching Hospital',
    address: 'East-West Road, Choba, Port Harcourt',
    phone: '+234 84 462 734',
    distance: '2.5 km',
    rating: 4.2,
    hours: '24/7 Emergency Services',
    services: ['Emergency Care', 'Surgery', 'Pediatrics', 'Internal Medicine'],
  },
  {
    id: 2,
    name: 'Braithwaite Memorial Specialist Hospital',
    address: 'Evo Road, GRA Phase 2, Port Harcourt',
    phone: '+234 84 230 294',
    distance: '3.1 km',
    rating: 4.5,
    hours: '24/7 Emergency Services',
    services: ['Specialist Care', 'Laboratory', 'Radiology', 'Pharmacy'],
  },
  {
    id: 3,
    name: 'Rivers State University Teaching Hospital',
    address: 'Harley Street, Old GRA, Port Harcourt',
    phone: '+234 84 462 800',
    distance: '4.2 km',
    rating: 4.3,
    hours: '24/7 Emergency Services',
    services: ['Multi-specialty', 'ICU', 'Diagnostics', 'Surgery'],
  },
  {
    id: 4,
    name: 'Kelsey Harrison Hospital',
    address: 'Olu Obasanjo Road, Port Harcourt',
    phone: '+234 84 233 456',
    distance: '5.8 km',
    rating: 4.0,
    hours: 'Mon-Sat: 8AM-6PM, Emergency 24/7',
    services: ['General Medicine', 'Maternity', 'Pharmacy'],
  },
];

export default function ClinicMap() {
  const [selectedClinic, setSelectedClinic] = useState(null);

  return (
    <div className="space-y-6">
      {/* Mock Map Placeholder */}
      <div className="relative bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl h-64 flex items-center justify-center overflow-hidden shadow-inner">
        {/* Decorative map-like background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 400 300">
            <path d="M0,150 Q100,100 200,150 T400,150" stroke="#0891b2" strokeWidth="2" fill="none" />
            <path d="M0,180 Q150,140 250,180 T400,180" stroke="#06b6d4" strokeWidth="2" fill="none" />
            <circle cx="200" cy="150" r="8" fill="#ef4444" />
            <circle cx="150" cy="130" r="6" fill="#3b82f6" />
            <circle cx="250" cy="170" r="6" fill="#3b82f6" />
            <circle cx="180" cy="190" r="6" fill="#3b82f6" />
          </svg>
        </div>
        
        <div className="relative z-10 text-center p-6">
          <div className="text-6xl mb-3">🗺️</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Port Harcourt Area Map</h3>
          <p className="text-sm text-gray-600">
            Interactive map showing {mockClinics.length} nearby healthcare facilities
          </p>
          <p className="text-xs text-gray-500 mt-2 italic">
            (Live Google Maps integration coming soon with API key)
          </p>
        </div>
      </div>

      {/* Clinics List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockClinics.map((clinic) => (
          <div
            key={clinic.id}
            className={`bg-white border-2 rounded-xl p-6 shadow-md hover:shadow-xl transition-all cursor-pointer ${
              selectedClinic === clinic.id ? 'border-cyan-500 bg-cyan-50' : 'border-gray-200'
            }`}
            onClick={() => setSelectedClinic(clinic.id)}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-800 mb-1">{clinic.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <span className="flex items-center gap-1">
                    ⭐ {clinic.rating}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    📍 {clinic.distance}
                  </span>
                </div>
              </div>
            </div>

            {/* Address */}
            <p className="text-sm text-gray-600 mb-3 flex items-start gap-2">
              <span className="text-gray-400">📍</span>
              <span>{clinic.address}</span>
            </p>

            {/* Phone */}
            <p className="text-sm text-gray-600 mb-3 flex items-center gap-2">
              <span className="text-gray-400">📞</span>
              <a href={`tel:${clinic.phone}`} className="text-cyan-600 hover:underline">
                {clinic.phone}
              </a>
            </p>

            {/* Hours */}
            <p className="text-sm text-gray-600 mb-3 flex items-center gap-2">
              <span className="text-gray-400">🕐</span>
              <span className={clinic.hours.includes('24/7') ? 'text-green-600 font-semibold' : ''}>
                {clinic.hours}
              </span>
            </p>

            {/* Services */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-gray-500 mb-2">Services:</p>
              <div className="flex flex-wrap gap-2">
                {clinic.services.map((service, index) => (
                  <span
                    key={index}
                    className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.name + ' ' + clinic.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm py-2 px-4 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                Get Directions
              </a>
              <a
                href={`tel:${clinic.phone}`}
                className="bg-green-500 text-white text-sm py-2 px-4 rounded-lg font-semibold hover:bg-green-600 transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                📞 Call
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          💡 <strong>Tip:</strong> Click &quot;Get Directions&quot; to open in Google Maps. Always call ahead to confirm availability and services before visiting.
        </p>
      </div>
    </div>
  );
}