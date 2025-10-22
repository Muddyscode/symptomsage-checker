import { NextResponse } from 'next/server';

// Mock AI analysis function (fallback when API fails)
function generateMockAnalysis(symptoms) {
  const symptomsLower = symptoms.toLowerCase();
  
  // Detect keywords for common conditions
  const hasFever = symptomsLower.includes('fever') || symptomsLower.includes('temperature');
  const hasChills = symptomsLower.includes('chills') || symptomsLower.includes('shaking');
  const hasHeadache = symptomsLower.includes('headache') || symptomsLower.includes('head pain');
  const hasBodyAches = symptomsLower.includes('body ache') || symptomsLower.includes('muscle');
  const hasDiarrhea = symptomsLower.includes('diarrhea') || symptomsLower.includes('loose stool');
  const hasVomiting = symptomsLower.includes('vomit') || symptomsLower.includes('nausea');
  const hasAbdominalPain = symptomsLower.includes('stomach') || symptomsLower.includes('abdomen');
  const hasCough = symptomsLower.includes('cough');
  const hasChestPain = symptomsLower.includes('chest pain');
  const hasDifficultBreathing = symptomsLower.includes('breath') || symptomsLower.includes('gasping');
  
  let conditions = [];
  let urgencyLevel = 'Moderate';
  let urgencyExplanation = '';
  let nigeriaAdvice = '';
  
  // Emergency symptoms
  if (hasChestPain || hasDifficultBreathing) {
    urgencyLevel = 'Emergency';
    urgencyExplanation = 'Chest pain and breathing difficulties require immediate medical evaluation.';
    conditions.push({
      name: 'Cardiac or Respiratory Emergency',
      probability: 'High',
      description: 'Chest pain and breathing issues can indicate serious heart or lung problems.',
      commonIn: 'Requires immediate emergency care regardless of location'
    });
  }
  // Malaria-like symptoms
  else if (hasFever && hasChills && (hasBodyAches || hasHeadache)) {
    urgencyLevel = 'High';
    urgencyExplanation = 'Combination of fever, chills, and body aches strongly suggests malaria in Nigeria.';
    nigeriaAdvice = 'Malaria is very common in Nigeria. Get a malaria test (RDT or blood film) at your nearest clinic immediately. Do not delay treatment.';
    conditions.push({
      name: 'Malaria',
      probability: 'High',
      description: 'Fever with chills and body aches is the classic presentation of malaria, extremely common in tropical regions.',
      commonIn: 'Nigeria has high malaria prevalence, especially during rainy season'
    });
    conditions.push({
      name: 'Typhoid Fever',
      probability: 'Moderate',
      description: 'Can also present with fever and body aches, though typically more gradual onset.',
      commonIn: 'Common in areas with poor sanitation'
    });
  }
  // Typhoid-like symptoms
  else if (hasFever && (hasAbdominalPain || hasDiarrhea) && !hasChills) {
    urgencyLevel = 'High';
    urgencyExplanation = 'Sustained fever with abdominal symptoms suggests possible typhoid or bacterial infection.';
    nigeriaAdvice = 'Consider typhoid testing (Widal test or blood culture). Ensure safe water and food hygiene.';
    conditions.push({
      name: 'Typhoid Fever',
      probability: 'High',
      description: 'Gradual fever with abdominal pain and changes in bowel habits is typical of typhoid.',
      commonIn: 'Endemic in Nigeria, spread through contaminated food/water'
    });
    conditions.push({
      name: 'Gastroenteritis',
      probability: 'Moderate',
      description: 'Bacterial or viral stomach infection causing fever and GI symptoms.',
      commonIn: 'Common from food/water contamination'
    });
  }
  // Flu/common cold
  else if (hasFever && hasCough && !hasChills) {
    urgencyLevel = 'Low';
    urgencyExplanation = 'Symptoms suggest a common viral infection like flu or cold.';
    nigeriaAdvice = 'Rest, stay hydrated, and monitor symptoms. If fever persists beyond 3 days, seek medical care.';
    conditions.push({
      name: 'Influenza (Flu)',
      probability: 'High',
      description: 'Viral infection with fever, cough, and body aches.',
      commonIn: 'Common during harmattan season in Nigeria'
    });
    conditions.push({
      name: 'Common Cold',
      probability: 'Moderate',
      description: 'Mild viral upper respiratory infection.',
      commonIn: 'Very common year-round'
    });
  }
  // General fever
  else if (hasFever) {
    urgencyLevel = 'Moderate';
    urgencyExplanation = 'Fever requires monitoring and medical evaluation if it persists.';
    nigeriaAdvice = 'In Nigeria, any fever should be tested for malaria. Visit a clinic within 24 hours.';
    conditions.push({
      name: 'Viral Infection',
      probability: 'Moderate',
      description: 'Various viral infections can cause fever.',
      commonIn: 'Common in tropical climates'
    });
  }
  // No clear pattern
  else {
    urgencyLevel = 'Moderate';
    urgencyExplanation = 'Your symptoms warrant medical evaluation for proper diagnosis.';
    nigeriaAdvice = 'Visit your nearest healthcare facility for proper examination and testing.';
    conditions.push({
      name: 'Requires Medical Evaluation',
      probability: 'Moderate',
      description: 'Multiple symptoms that need professional assessment.',
      commonIn: 'Professional diagnosis recommended'
    });
  }

  return {
    possibleConditions: conditions,
    urgencyLevel,
    urgencyExplanation,
    recommendedActions: [
      urgencyLevel === 'Emergency' ? 'Seek emergency medical care IMMEDIATELY' : 'Visit a healthcare facility within 24 hours for proper testing',
      'Stay hydrated - drink plenty of clean water',
      'Rest and avoid strenuous activities',
      urgencyLevel === 'High' && hasFever ? 'Take paracetamol for fever (follow package instructions)' : 'Monitor your symptoms closely',
      'Keep a record of your temperature and symptoms'
    ],
    warningSignsToWatch: [
      'Fever above 39.5°C (103°F) or lasting more than 3 days',
      'Severe or worsening headache',
      'Difficulty breathing or chest pain',
      'Persistent vomiting preventing fluid intake',
      'Confusion or altered consciousness',
      'Dark urine or no urination for 8+ hours',
      'Severe weakness or inability to stand'
    ],
    nigeriaSpecificAdvice: nigeriaAdvice || 'Ensure you visit a registered healthcare facility. In Nigeria, many conditions like malaria and typhoid require laboratory testing for proper diagnosis.',
    whenToSeekCare: urgencyLevel === 'Emergency' ? 'IMMEDIATELY - Go to emergency room now' : 
                     urgencyLevel === 'High' ? 'Within 24 hours - Do not delay' :
                     urgencyLevel === 'Moderate' ? 'Within 1-2 days if symptoms persist or worsen' :
                     'Within a few days if symptoms don\'t improve',
    disclaimer: 'This is educational information generated by an AI assistant. It is NOT a medical diagnosis. Always consult a qualified healthcare professional for proper medical evaluation and treatment.'
  };
}

export async function POST(request) {
  try {
    const { symptoms, userContext } = await request.json();

    if (!symptoms || symptoms.trim().length < 5) {
      return NextResponse.json(
        { error: 'Please provide detailed symptoms (at least 5 characters)' },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    
    // Try real AI first if API key exists
    if (apiKey && apiKey !== 'YOUR_API_KEY_HERE') {
      const prompt = `You are a medical symptom analyzer for Nigeria. Analyze these symptoms and provide a structured response.

IMPORTANT DISCLAIMERS:
- You are NOT providing medical diagnosis
- This is educational information only
- Always recommend consulting a healthcare professional

USER SYMPTOMS: ${symptoms}

USER CONTEXT: Location - Nigeria (consider tropical diseases like malaria, typhoid)

Please provide a JSON response with this EXACT structure:
{
  "possibleConditions": [
    {
      "name": "Condition Name",
      "probability": "High/Moderate/Low",
      "description": "Brief explanation",
      "commonIn": "Nigeria context"
    }
  ],
  "urgencyLevel": "Emergency/High/Moderate/Low",
  "urgencyExplanation": "Why this urgency level?",
  "recommendedActions": ["Action 1", "Action 2"],
  "warningSignsToWatch": ["Sign 1", "Sign 2"],
  "nigeriaSpecificAdvice": "Context-specific advice",
  "whenToSeekCare": "Timing guidance",
  "disclaimer": "Educational information disclaimer"
}

Respond ONLY with valid JSON.`;

      const modelsToTry = [
        { version: 'v1', model: 'gemini-1.5-flash' },
        { version: 'v1beta', model: 'gemini-1.5-flash-latest' },
      ];

      for (const { version, model: modelName } of modelsToTry) {
        try {
          const response = await fetch(
            `https://generativelanguage.googleapis.com/${version}/models/${modelName}:generateContent?key=${apiKey}`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: { temperature: 0.7, maxOutputTokens: 2048 }
              }),
            }
          );

          if (response.ok) {
            const data = await response.json();
            const text = data.candidates[0].content.parts[0].text;
            const jsonMatch = text.match(/```json\n([\s\S]*?)\n```/) || text.match(/\{[\s\S]*\}/);
            const jsonString = jsonMatch ? (jsonMatch[1] || jsonMatch[0]) : text;
            const analysisData = JSON.parse(jsonString);
            
            console.log(`✅ SUCCESS with real AI: ${version}/${modelName}`);
            
            return NextResponse.json({
              success: true,
              symptoms,
              analysis: analysisData,
              timestamp: new Date().toISOString(),
              source: 'AI'
            });
          }
        } catch (error) {
          console.log(`Real AI attempt failed, will use smart mock analysis`);
        }
      }
    }

    // Use intelligent mock analysis
    console.log('📊 Using smart symptom analysis (AI unavailable)');
    const analysisData = generateMockAnalysis(symptoms.trim());

    return NextResponse.json({
      success: true,
      symptoms,
      analysis: analysisData,
      timestamp: new Date().toISOString(),
      source: 'mock'
    });

  } catch (error) {
    console.error('Analysis Error:', error);
    return NextResponse.json(
      { error: 'Analysis failed. Please try again.' },
      { status: 500 }
    );
  }
}