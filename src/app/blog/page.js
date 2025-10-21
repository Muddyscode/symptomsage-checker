'use client';
import { useState } from 'react';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: "How to Recognize Malaria Symptoms Early in Nigeria",
    excerpt: "Malaria remains one of Nigeria's most prevalent health challenges. Learn to identify early warning signs and when to seek immediate medical attention.",
    category: "Tropical Diseases",
    readTime: "5 min read",
    date: "October 15, 2025",
    content: `
      <h2>Understanding Malaria in the Nigerian Context</h2>
      <p>Malaria is a life-threatening disease caused by Plasmodium parasites, transmitted through the bites of infected female Anopheles mosquitoes. In Nigeria, malaria accounts for approximately 60% of outpatient visits and 30% of hospitalizations, making it a critical public health concern.</p>

      <h2>Early Symptoms: The First 24-48 Hours</h2>
      <p>The incubation period for malaria typically ranges from 7 to 30 days after the mosquito bite. However, recognizing symptoms early can significantly improve treatment outcomes. Here are the hallmark early signs:</p>

      <h3>Classic Triad of Symptoms</h3>
      <ul>
        <li><strong>Fever:</strong> Often cyclical, with episodes occurring every 48-72 hours depending on the Plasmodium species. Temperatures can spike above 38.5°C (101°F).</li>
        <li><strong>Chills and Rigors:</strong> Intense shaking and feeling cold, even in warm weather—a distinctive feature that sets malaria apart from common flu.</li>
        <li><strong>Sweating:</strong> Profuse sweating episodes, particularly after fever spikes subside.</li>
      </ul>

      <h3>Additional Warning Signs</h3>
      <ul>
        <li>Severe headache (often frontal or generalized)</li>
        <li>Body aches and muscle pain (myalgia)</li>
        <li>Fatigue and weakness</li>
        <li>Nausea and vomiting</li>
        <li>Loss of appetite</li>
        <li>Abdominal discomfort</li>
      </ul>

      <h2>Red Flags: When to Seek Immediate Medical Attention</h2>
      <p>While uncomplicated malaria is treatable, it can quickly progress to severe malaria, which is a medical emergency. Seek immediate care if you experience:</p>
      <ul>
        <li><strong>Altered consciousness or confusion</strong> (cerebral malaria)</li>
        <li><strong>Severe anemia</strong> (pale skin, extreme fatigue)</li>
        <li><strong>Difficulty breathing</strong></li>
        <li><strong>Dark or bloody urine</strong></li>
        <li><strong>Persistent vomiting</strong> preventing oral medication</li>
        <li><strong>Convulsions or seizures</strong></li>
        <li><strong>Jaundice</strong> (yellowing of eyes or skin)</li>
      </ul>

      <h2>Malaria vs. Typhoid: Key Differences</h2>
      <p>In Nigeria, malaria and typhoid are often confused due to overlapping symptoms. However, there are distinguishing features:</p>
      <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background-color: #f0f4f8;">
          <th style="padding: 10px; border: 1px solid #ddd;">Feature</th>
          <th style="padding: 10px; border: 1px solid #ddd;">Malaria</th>
          <th style="padding: 10px; border: 1px solid #ddd;">Typhoid</th>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Fever Pattern</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">Cyclical (every 48-72 hrs)</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Continuous, step-ladder pattern</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Chills</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">Severe, intense rigors</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Mild or absent</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Onset</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">Sudden, acute</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Gradual over days</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Abdominal Pain</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">Possible but not prominent</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Common, with constipation/diarrhea</td>
        </tr>
      </table>

      <h2>Prevention Strategies for Nigerian Residents</h2>
      <p>Prevention remains the most effective strategy against malaria. Consider these evidence-based approaches:</p>
      <ul>
        <li><strong>Sleep under insecticide-treated bed nets (ITNs)</strong> every night, especially in endemic areas</li>
        <li><strong>Use mosquito repellents</strong> containing DEET, especially during evening hours</li>
        <li><strong>Wear long-sleeved clothing</strong> during dusk and dawn when mosquitoes are most active</li>
        <li><strong>Eliminate standing water</strong> around your home (mosquito breeding sites)</li>
        <li><strong>Install window screens</strong> to prevent mosquito entry</li>
        <li><strong>Consider intermittent preventive therapy (IPT)</strong> for pregnant women</li>
      </ul>

      <h2>Diagnosis and Treatment</h2>
      <p>If you suspect malaria, visit a healthcare facility for proper diagnosis. The gold standard is microscopic examination of blood smears or rapid diagnostic tests (RDTs), both widely available in Nigerian hospitals and clinics.</p>
      <p><strong>Never self-medicate.</strong> Artemisinin-based combination therapies (ACTs) are the WHO-recommended first-line treatment for uncomplicated malaria in Nigeria, but dosage and drug choice should be determined by a healthcare professional based on your specific condition.</p>

      <h2>The Bottom Line</h2>
      <p>Early recognition of malaria symptoms can be life-saving. If you experience sudden fever with chills and rigors—especially if you live in or recently visited a malaria-endemic area—seek medical evaluation promptly. Remember: malaria is treatable, but delays can lead to severe complications.</p>
      <p><em>Always consult a healthcare professional for diagnosis and treatment. This article is for educational purposes only.</em></p>
    `
  },
  {
    id: 2,
    title: "Typhoid Fever vs. Malaria: Know the Critical Differences",
    excerpt: "Both conditions present with fever, but knowing the differences can guide you to appropriate treatment faster. Learn the distinctive features of each.",
    category: "Infectious Diseases",
    readTime: "6 min read",
    date: "October 10, 2025",
    content: `
      <h2>Introduction: Two Common Febrile Illnesses in Nigeria</h2>
      <p>In Nigeria's healthcare landscape, typhoid fever and malaria are among the most frequently diagnosed conditions. Unfortunately, symptom overlap often leads to misdiagnosis or dual infections going unrecognized. Understanding the distinct characteristics of each disease is crucial for appropriate treatment and recovery.</p>

      <h2>What is Typhoid Fever?</h2>
      <p>Typhoid fever is a bacterial infection caused by <em>Salmonella typhi</em>, transmitted through contaminated food and water. Unlike malaria, which is vector-borne (mosquitoes), typhoid spreads through the fecal-oral route, making sanitation and hygiene critical factors.</p>

      <h3>Typhoid: Clinical Presentation</h3>
      <p>Typhoid typically has an incubation period of 6-30 days (average 10-14 days). The disease progresses through distinct stages:</p>

      <h4>Week 1: Gradual Onset</h4>
      <ul>
        <li>Progressively worsening fever (step-ladder pattern: incremental daily increases)</li>
        <li>Malaise and body aches</li>
        <li>Headache (often frontal)</li>
        <li>Loss of appetite</li>
        <li>Constipation (more common) or diarrhea (less common)</li>
      </ul>

      <h4>Week 2: Peak Symptoms</h4>
      <ul>
        <li>Sustained high fever (39-40°C or 102-104°F)</li>
        <li>Relative bradycardia (slower pulse than expected for fever level)</li>
        <li>Rose spots: faint pink rash on trunk (20-30% of patients)</li>
        <li>Abdominal distension and tenderness</li>
        <li>Hepatosplenomegaly (enlarged liver and spleen)</li>
        <li>"Pea soup" diarrhea in some cases</li>
      </ul>

      <h4>Week 3-4: Potential Complications (if untreated)</h4>
      <ul>
        <li>Intestinal perforation or bleeding</li>
        <li>Severe confusion or delirium (typhoid encephalopathy)</li>
        <li>Myocarditis (heart inflammation)</li>
      </ul>

      <h2>Malaria: A Quick Recap</h2>
      <p>As covered in our previous article, malaria presents with:</p>
      <ul>
        <li><strong>Sudden onset</strong> (hours to 1-2 days after symptom start)</li>
        <li><strong>Cyclical fever patterns</strong> (every 48-72 hours)</li>
        <li><strong>Intense chills and rigors</strong></li>
        <li><strong>Profuse sweating</strong> after fever spikes</li>
        <li>Muscle aches and headache</li>
      </ul>

      <h2>Side-by-Side Comparison: Typhoid vs. Malaria</h2>
      
      <h3>Fever Characteristics</h3>
      <p><strong>Typhoid:</strong> Sustained, continuous fever that gradually increases over days (step-ladder pattern). Typically peaks in the afternoon/evening.</p>
      <p><strong>Malaria:</strong> Paroxysmal (cyclical) fever with clear intervals of normal temperature between episodes. Fever spikes are abrupt and dramatic.</p>

      <h3>Onset Speed</h3>
      <p><strong>Typhoid:</strong> Insidious, gradual onset over several days to a week.</p>
      <p><strong>Malaria:</strong> Acute, sudden onset—patients can often pinpoint when symptoms began.</p>

      <h3>Chills and Rigors</h3>
      <p><strong>Typhoid:</strong> Mild or absent. Patients rarely experience the severe shaking seen in malaria.</p>
      <p><strong>Malaria:</strong> Hallmark symptom. Severe, uncontrollable shaking chills (rigors) that can last 15-60 minutes.</p>

      <h3>Gastrointestinal Symptoms</h3>
      <p><strong>Typhoid:</strong> Prominent GI involvement—constipation early (more common in adults), diarrhea later. Abdominal pain and tenderness are significant features.</p>
      <p><strong>Malaria:</strong> Nausea and vomiting common, but diarrhea is less prominent. Abdominal discomfort is usually mild.</p>

      <h3>Pulse Rate</h3>
      <p><strong>Typhoid:</strong> Relative bradycardia (pulse slower than expected for fever level)—a classic diagnostic clue.</p>
      <p><strong>Malaria:</strong> Tachycardia (rapid pulse) proportionate to or faster than expected for fever.</p>

      <h3>Skin Manifestations</h3>
      <p><strong>Typhoid:</strong> Rose spots (faint pink macules on trunk/abdomen) in 20-30% of cases.</p>
      <p><strong>Malaria:</strong> No characteristic rash. May see jaundice in severe cases.</p>

      <h2>Diagnosis: Getting It Right</h2>
      
      <h3>Typhoid Diagnosis</h3>
      <ul>
        <li><strong>Blood culture:</strong> Gold standard (most sensitive in first week)</li>
        <li><strong>Widal test:</strong> Commonly used in Nigeria but has limitations (false positives/negatives)</li>
        <li><strong>Stool culture:</strong> Useful after the first week</li>
        <li><strong>Complete blood count:</strong> May show leukopenia (low white blood cells)</li>
      </ul>

      <h3>Malaria Diagnosis</h3>
      <ul>
        <li><strong>Microscopy:</strong> Gold standard (thick and thin blood films)</li>
        <li><strong>Rapid diagnostic tests (RDTs):</strong> Quick, point-of-care option</li>
        <li><strong>Complete blood count:</strong> Often shows thrombocytopenia (low platelets)</li>
      </ul>

      <p><strong>Important Note:</strong> Co-infection with both typhoid and malaria can occur in Nigeria. If symptoms don't improve with treatment for one condition, inform your doctor—you may need testing for the other.</p>

      <h2>Treatment Approaches</h2>
      
      <h3>Typhoid Treatment</h3>
      <ul>
        <li>Antibiotics (fluoroquinolones, ceftriaxone, or azithromycin based on local resistance patterns)</li>
        <li>Supportive care: hydration, rest, nutritious diet</li>
        <li>Duration: typically 7-14 days of antibiotics</li>
        <li><strong>Never use chloramphenicol without professional guidance</strong> due to side effects</li>
      </ul>

      <h3>Malaria Treatment</h3>
      <ul>
        <li>Artemisinin-based combination therapies (ACTs) for uncomplicated malaria</li>
        <li>Intravenous artesunate for severe malaria</li>
        <li>Supportive care including hydration and fever management</li>
        <li>Treatment duration: typically 3 days for uncomplicated cases</li>
      </ul>

      <h2>Prevention: Breaking the Transmission Cycle</h2>
      
      <h3>Preventing Typhoid</h3>
      <ul>
        <li><strong>Safe water:</strong> Drink boiled or bottled water; avoid ice from unknown sources</li>
        <li><strong>Food hygiene:</strong> Eat thoroughly cooked hot food; avoid raw vegetables unless properly washed</li>
        <li><strong>Hand hygiene:</strong> Wash hands with soap before eating and after using the toilet</li>
        <li><strong>Vaccination:</strong> Typhoid vaccine available (injectable or oral forms)</li>
        <li><strong>Avoid street food</strong> from vendors with questionable hygiene practices</li>
      </ul>

      <h3>Preventing Malaria</h3>
      <ul>
        <li>Use insecticide-treated bed nets</li>
        <li>Apply mosquito repellents</li>
        <li>Eliminate mosquito breeding sites (standing water)</li>
        <li>Wear protective clothing during high-risk hours</li>
      </ul>

      <h2>When to Seek Medical Care</h2>
      <p>Consult a healthcare professional immediately if you experience:</p>
      <ul>
        <li>Fever lasting more than 3 days</li>
        <li>Fever above 39°C (102°F)</li>
        <li>Severe abdominal pain</li>
        <li>Bloody stools or dark urine</li>
        <li>Confusion or altered consciousness</li>
        <li>Difficulty breathing</li>
        <li>Persistent vomiting preventing oral intake</li>
      </ul>

      <h2>Conclusion</h2>
      <p>While typhoid and malaria share the common symptom of fever, their distinct characteristics—from onset pattern to associated symptoms—can guide appropriate diagnosis and treatment. In Nigeria, where both conditions are endemic, maintaining high clinical suspicion for either disease (or co-infection) is essential.</p>
      <p>Remember: <strong>Self-diagnosis and self-medication are dangerous.</strong> Both conditions require professional medical evaluation and laboratory confirmation. Early, appropriate treatment significantly improves outcomes and prevents complications.</p>
      <p><em>This article provides educational information only. Always consult qualified healthcare professionals for diagnosis and treatment.</em></p>
    `
  },
  {
    id: 3,
    title: "When to Visit a Doctor in Nigeria: A Practical Guide",
    excerpt: "Not sure if your symptoms warrant a hospital visit? Learn when to seek professional care, what constitutes an emergency, and how to prepare for your appointment.",
    category: "Healthcare Navigation",
    readTime: "7 min read",
    date: "October 5, 2025",
    content: `
      <h2>Understanding Healthcare Decision-Making</h2>
      <p>One of the most common questions we hear is: "Should I go to the doctor, or will this resolve on its own?" In Nigeria's context—where healthcare costs, transportation challenges, and busy schedules are real considerations—this question carries significant weight.</p>
      <p>This guide will help you make informed decisions about when professional medical care is necessary, what constitutes an emergency, and how to maximize your doctor's visit.</p>

      <h2>Red Flag Symptoms: Seek Immediate Medical Attention</h2>
      <p>Certain symptoms indicate potentially serious conditions requiring urgent evaluation. Go to a hospital or clinic <strong>immediately</strong> if you or a family member experiences:</p>

      <h3>Cardiovascular Red Flags</h3>
      <ul>
        <li><strong>Chest pain or pressure</strong>, especially radiating to arm, jaw, or back</li>
        <li><strong>Severe shortness of breath</strong> at rest or with minimal exertion</li>
        <li><strong>Sudden weakness or numbness</strong> on one side of the body</li>
        <li><strong>Fainting or loss of consciousness</strong></li>
        <li><strong>Rapid or irregular heartbeat</strong> with dizziness</li>
      </ul>

      <h3>Neurological Red Flags</h3>
      <ul>
        <li><strong>Sudden severe headache</strong> ("worst headache of my life")</li>
        <li><strong>Confusion, disorientation, or difficulty speaking</strong></li>
        <li><strong>Seizures or convulsions</strong> (especially first-time occurrence)</li>
        <li><strong>Vision changes</strong> (sudden blurred or double vision, loss of vision)</li>
        <li><strong>Severe neck stiffness with fever and headache</strong> (possible meningitis)</li>
      </ul>

      <h3>Respiratory Red Flags</h3>
      <ul>
        <li><strong>Difficulty breathing or gasping for air</strong></li>
        <li><strong>Blue/purple discoloration of lips or fingernails</strong> (cyanosis)</li>
        <li><strong>Choking with inability to speak</strong></li>
        <li><strong>Severe wheezing</strong> not responding to usual medications</li>
      </ul>

      <h3>Gastrointestinal/Abdominal Red Flags</h3>
      <ul>
        <li><strong>Severe abdominal pain</strong> that's constant or worsening</li>
        <li><strong>Vomiting blood</strong> or material that looks like coffee grounds</li>
        <li><strong>Bloody or black, tarry stools</strong></li>
        <li><strong>Severe persistent vomiting</strong> preventing fluid intake (risk of dehydration)</li>
        <li><strong>Abdominal pain with fever and tenderness</strong> (possible appendicitis)</li>
      </ul>

      <h3>Trauma/Injury Red Flags</h3>
      <ul>
        <li><strong>Major trauma</strong> (car accidents, falls from height)</li>
        <li><strong>Head injury with loss of consciousness, vomiting, or confusion</strong></li>
        <li><strong>Deep wounds with uncontrolled bleeding</strong></li>
        <li><strong>Suspected broken bones</strong> with severe pain or deformity</li>
        <li><strong>Burns covering large areas or involving face/hands</strong></li>
      </ul>

      <h3>Infectious Disease Red Flags (Nigeria-Specific)</h3>
      <ul>
        <li><strong>High fever (>39°C/102°F) with altered consciousness</strong></li>
        <li><strong>Fever with severe chills</strong> and dark/bloody urine (severe malaria)</li>
        <li><strong>Persistent fever (>3 days) despite medication</strong></li>
        <li><strong>Severe dehydration</strong> (no urination, extreme weakness, sunken eyes)</li>
        <li><strong>Difficulty swallowing with high fever</strong> (possible severe throat infection)</li>
      </ul>

      <h2>When to Schedule a Doctor's Appointment (Non-Emergency)</h2>
      <p>These situations warrant professional evaluation but aren't immediate emergencies. Schedule an appointment within 24-72 hours:</p>

      <h3>Fever-Related</h3>
      <ul>
        <li>Fever lasting more than 3 days</li>
        <li>Fever with persistent cough, body aches, or other concerning symptoms</li>
        <li>Recurrent fevers over several weeks</li>
      </ul>

      <h3>Respiratory Symptoms</h3>
      <ul>
        <li>Cough lasting more than 2 weeks</li>
        <li>Cough with yellow/green phlegm or blood-tinged sputum</li>
        <li>Persistent shortness of breath with exertion</li>
        <li>Chest pain that worsens with breathing</li>
      </ul>

      <h3>Gastrointestinal Issues</h3>
      <ul>
        <li>Diarrhea or vomiting lasting more than 48 hours</li>
        <li>Unexplained weight loss</li>
        <li>Persistent abdominal pain or changes in bowel habits</li>
        <li>Blood in stool (small amounts)</li>
      </ul>

      <h3>Skin and Wound Issues</h3>
      <ul>
        <li>Wounds showing signs of infection (increasing redness, swelling, pus, warmth)</li>
        <li>Rashes with fever</li>
        <li>Persistent skin changes or unusual growths</li>
      </ul>

      <h3>Chronic Symptoms</h3>
      <ul>
        <li>Persistent fatigue affecting daily activities</li>
        <li>Frequent headaches or migraines</li>
        <li>Joint pain or swelling</li>
        <li>Urinary symptoms (pain, frequency, blood)</li>
      </ul>

      <h2>Symptoms That Can Often Be Managed at Home (With Monitoring)</h2>
      <p>The following mild symptoms usually don't require immediate medical attention but should be monitored. Seek care if they worsen or persist beyond expected timelines:</p>

      <h3>Common Cold/Mild Flu</h3>
      <ul>
        <li>Low-grade fever (<38.5°C/101°F)</li>
        <li>Runny nose, sneezing, mild cough</li>
        <li>Mild sore throat</li>
        <li>Mild body aches</li>
      </ul>
      <p><strong>Home Care:</strong> Rest, hydration, over-the-counter pain relievers (paracetamol), warm saltwater gargles.</p>
      <p><strong>Seek care if:</strong> Symptoms worsen after 3 days or persist beyond 7-10 days.</p>

      <h3>Minor Cuts and Scrapes</h3>
      <ul>
        <li>Superficial wounds with controlled bleeding</li>
        <li>Small burns (first-degree, small area)</li>
      </ul>
      <p><strong>Home Care:</strong> Clean with soap and water, apply antiseptic, cover with clean bandage, monitor for infection signs.</p>
      <p><strong>Seek care if:</strong> Signs of infection develop (increasing redness, warmth, pus, fever).</p>

      <h3>Mild Headache</h3>
      <ul>
        <li>Tension headaches or mild migraines</li>
      </ul>
      <p><strong>Home Care:</strong> Rest in a quiet, dark room; hydration; over-the-counter pain relief; cold/warm compress.</p>
      <p><strong>Seek care if:</strong> Headache is severe, sudden-onset, or accompanied by other symptoms (fever, vision changes, neck stiffness).</p>

      <h2>Special Considerations for Children</h2>
      <p>Children warrant closer monitoring and a lower threshold for seeking care. Consult a pediatrician if your child experiences:</p>
      <ul>
        <li>Fever in infants under 3 months (always see a doctor)</li>
        <li>Fever above 38.5°C (101°F) lasting more than 24 hours in children under 2 years</li>
        <li>Persistent crying or irritability</li>
        <li>Refusal to eat or drink</li>
        <li>Reduced urination (fewer than 3 wet diapers in 24 hours for infants)</li>
        <li>Lethargy or unusual sleepiness</li>
        <li>Rash with fever</li>
        <li>Difficulty breathing or rapid breathing</li>
      </ul>

      <h2>Preparing for Your Doctor's Visit</h2>
      <p>To maximize your consultation time and help your doctor provide the best care:</p>

      <h3>Before the Appointment</h3>
      <ul>
        <li><strong>Document symptoms:</strong> Note when they started, severity, patterns, and what makes them better/worse</li>
        <li><strong>List medications:</strong> Include current medications, supplements, and any self-treatment you've tried</li>
        <li><strong>Note medical history:</strong> Past diagnoses, surgeries, allergies, family health history</li>
        <li><strong>Prepare questions:</strong> Write down questions you want to ask</li>
        <li><strong>Bring relevant documents:</strong> Previous test results, referral letters</li>
      </ul>

      <h3>During the Appointment</h3>
      <ul>
        <li><strong>Be honest and complete:</strong> Don't minimize symptoms or omit information</li>
        <li><strong>Describe symptoms clearly:</strong> Location, quality (sharp, dull, burning), timing, severity (rate 1-10)</li>
        <li><strong>Ask for clarification:</strong> If you don't understand something, ask the doctor to explain</li>
        <li><strong>Take notes:</strong> Write down the diagnosis, treatment plan, and follow-up instructions</li>
        <li><strong>Confirm understanding:</strong> Repeat back instructions to ensure clarity</li>
      </ul>

      <h3>Questions to Ask Your Doctor</h3>
      <ul>
        <li>What is my diagnosis?</li>
        <li>What tests do I need, and why?</li>
        <li>What are my treatment options?</li>
        <li>What are the potential side effects of medications?</li>
        <li>How long until I should feel better?</li>
        <li>What warning signs should I watch for?</li>
        <li>When should I follow up?</li>
        <li>Are there lifestyle changes I should make?</li>
      </ul>

      <h2>Navigating Nigeria's Healthcare System</h2>
      
      <h3>Types of Facilities</h3>
      <ul>
        <li><strong>Primary Health Centers:</strong> First point of contact for minor ailments and preventive care</li>
        <li><strong>General Hospitals:</strong> For more complex conditions requiring specialist consultation</li>
        <li><strong>Teaching Hospitals:</strong> Tertiary care for serious or rare conditions</li>
        <li><strong>Private Clinics:</strong> Often faster service, higher costs</li>
      </ul>

      <h3>Cost Considerations</h3>
      <ul>
        <li>Ask about consultation fees upfront</li>
        <li>Inquire about available health insurance coverage</li>
        <li>Request generic medication options when appropriate</li>
        <li>Prioritize necessary tests; discuss cost-benefit with your doctor</li>
      </ul>

      <h2>When in Doubt, Seek Care</h2>
      <p>While this guide provides general direction, medicine isn't black and white. If you're genuinely worried about a symptom—even if it doesn't fit the "red flag" categories—it's better to seek evaluation and gain peace of mind.</p>
      <p><strong>Trust your instincts:</strong> You know your body (or your child's) better than anyone. If something feels seriously wrong, don't hesitate to seek professional care.</p>

      <h2>Conclusion</h2>
      <p>Understanding when to seek medical care empowers you to make informed health decisions. While minor ailments can often be managed at home with monitoring, recognizing red flag symptoms and seeking timely professional evaluation for persistent or concerning symptoms can prevent complications and save lives.</p>
      <p>Remember: SymptomSage is here to provide educational guidance, but we're not a replacement for professional medical care. When in doubt, consult a healthcare provider.</p>
      <p><em>This article is for educational purposes only and does not constitute medical advice. Always consult qualified healthcare professionals for diagnosis and treatment.</em></p>
    `
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  if (selectedPost) {
    const post = blogPosts.find(p => p.id === selectedPost);
    return (
      <main className="min-h-screen bg-gray-50">
        <article className="max-w-4xl mx-auto py-12 px-4">
          {/* Back Button */}
          <button
            onClick={() => setSelectedPost(null)}
            className="text-cyan-600 hover:text-cyan-700 font-medium mb-8 flex items-center gap-2"
          >
            ← Back to All Articles
          </button>

          {/* Article Header */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full font-medium">
                {post.category}
              </span>
              <span>{post.readTime}</span>
              <span>{post.date}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600">
              {post.excerpt}
            </p>
          </div>

          {/* Article Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Disclaimer */}
          <div className="bg-orange-50 border-l-4 border-orange-400 rounded-lg p-6 mt-8">
            <p className="text-sm text-orange-800">
              <strong>Medical Disclaimer:</strong> This article is for educational and informational purposes only. It does not constitute medical advice and should not be relied upon for medical diagnosis or treatment. Always consult with qualified healthcare professionals before making any health-related decisions.
            </p>
          </div>
        </article>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-500 via-blue-600 to-blue-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Health Blog</h1>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
            Evidence-based health insights for Nigerians. Learn about common conditions, prevention strategies, and when to seek care.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
                onClick={() => setSelectedPost(post.id)}
              >
                {/* Category Badge */}
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-6">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-800 hover:text-cyan-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t">
                    <span>{post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                    Read Article →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Stay Informed
          </h2>
          <p className="text-lg text-gray-600">
            More health articles coming soon. Check back regularly for new insights on tropical diseases, preventive care, and health tips for Nigeria.
          </p>
        </div>
      </section>
    </main>
  );
}