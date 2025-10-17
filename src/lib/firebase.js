import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCtOXAAGR9159yh0BuwvQVQBbgjvujzzfI",
  authDomain: "symptomsage-checker.firebaseapp.com",
  projectId: "symptomsage-checker",
  storageBucket: "symptomsage-checker.firebasestorage.app",
  messagingSenderId: "956563172459",
  appId: "1:956563172459:web:a22c71c4df785b347c552e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);