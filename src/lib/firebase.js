import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth"
import { getStorage } from "firebase/storage"

const firebaseApp = initializeApp({
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_SENDERID,
    appId: import.meta.env.VITE_FIREBASE_APPID
})

const db = getFirestore()
const auth = getAuth()
const storage = getStorage()
const googleAuth = new GoogleAuthProvider()
const facebookAuth = new FacebookAuthProvider()

export { db, auth, storage, signInWithEmailAndPassword, createUserWithEmailAndPassword, googleAuth, signInWithPopup, facebookAuth }