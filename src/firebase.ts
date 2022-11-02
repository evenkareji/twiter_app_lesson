import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCcCjWjkpo_Hi4pY4VqU4nXtZI0GKruBps',
  authDomain: 'twitter-app-2a90d.firebaseapp.com',
  projectId: 'twitter-app-2a90d',
  storageBucket: 'twitter-app-2a90d.appspot.com',
  messagingSenderId: '863819323042',
  appId: '1:863819323042:web:33268298f5619a34c1a9fb',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()
export const provider = new firebase.auth.GoogleAuthProvider()
