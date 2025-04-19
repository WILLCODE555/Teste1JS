import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyBfe7HaQWjYTFl0FBWM1KrR8BxDDOQDdQg",
    authDomain: "projetoatv1.firebaseapp.com",
    projectId: "projetoatv1",
    storageBucket: "projetoatv1.firebasestorage.app",
    messagingSenderId: "1079395693792",
    appId: "1:1079395693792:web:2611faf31f0ee6c70c0c85"
  };

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Obtenha a instância de Auth e Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
