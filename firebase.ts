import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDWlUoRFxx95tdTrgRY75RVfvpZKpgrk1M",
  authDomain: "pdf-ai-uploader.firebaseapp.com",
  projectId: "pdf-ai-uploader",
  storageBucket: "pdf-ai-uploader.appspot.com",
  messagingSenderId: "331883798531",
  appId: "1:331883798531:web:08678a83ae2c80d060ee36",
  measurementId: "G-GMLRC9C6YK",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
