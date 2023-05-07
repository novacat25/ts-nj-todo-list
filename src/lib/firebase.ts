import { getApps, initializeApp } from 'firebase/app'

if (typeof window !== 'undefined' && getApps().length === 0) {
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    // measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  }

  initializeApp(firebaseConfig)
}