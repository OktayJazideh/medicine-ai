// src/firebase.js
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDNDAcBXpSn9lkDg4jvglx3_j5CbQjEqF0',
  authDomain: 'medicine-851e2.firebaseapp.com',
  projectId: 'medicine-851e2',
  appId: '1:983192257230:web:833a51b46a09568f07c69f',
  // Add other config values as needed
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider, signInWithPopup } 