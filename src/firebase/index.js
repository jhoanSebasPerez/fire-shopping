// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getMessaging, getToken } from 'firebase/messaging'
import { getFirestore } from 'firebase/firestore'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBEnWP6o6m4nkRr5mt_mgN3Uv1LPGMvP74',
  authDomain: 'fire-shopping-31ff1.firebaseapp.com',
  projectId: 'fire-shopping-31ff1',
  storageBucket: 'fire-shopping-31ff1.appspot.com',
  messagingSenderId: '83950226453',
  appId: '1:83950226453:web:b534f9a2be32f8500c921c'
}

const vapidKey = 'BL3xfBWbomaU4WbFWB0IndErVJf0cLSW7_9TQwqT7d1m_3Xruk5wUb4_Zoy82w_xt4IEFvCcI0NzjtVoY0EOWB0'

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const messaging = getMessaging()
getToken(messaging, { vapidKey })
  .then(currentToken => {
    if (currentToken) {
      sendTokenToServer(currentToken)
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.')
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err)
    // ...
  })

const sendTokenToServer = (token) => {
  if (window.localStorage.getItem('tokenSentToServer')) return
  window.localStorage.setItem('tokenSentToServer', '1')
}

export const db = getFirestore()
