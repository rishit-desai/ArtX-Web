import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore/lite"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { getStorage,  } from "firebase/storage"

const firebaseApp = initializeApp()

const db = getFirestore()
const auth = getAuth()
const storage = getStorage()
const googleAuth = new GoogleAuthProvider()

export { db, auth, storage, signInWithEmailAndPassword, createUserWithEmailAndPassword, googleAuth, signInWithPopup }