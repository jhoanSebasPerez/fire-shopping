
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/9.6.0/firebase-app-compat.js')
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/9.6.0/firebase-messaging-compat.js')
// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
// eslint-disable-next-line no-undef
firebase.initializeApp({
  apiKey: 'AIzaSyD4w_NN9PlyMNGJSWxRvLEXhKPqt4sLPQQ',
  authDomain: 'fir-shopping-d850e.firebaseapp.com',
  projectId: 'fir-shopping-d850e',
  storageBucket: 'fir-shopping-d850e.appspot.com',
  messagingSenderId: '941636314377',
  appId: '1:941636314377:web:2e6f89ca7f6860b1075fd8'
})
// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
// eslint-disable-next-line no-undef
firebase.messaging()
