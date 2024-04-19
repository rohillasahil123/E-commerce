
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVYv4JbUCXCLivbZIEMzxu_NB3Hr3iEZc",
  authDomain: "frendsshop-1d663.firebaseapp.com",
  projectId: "frendsshop-1d663",
  storageBucket: "frendsshop-1d663.appspot.com",
  messagingSenderId: "366709942019",
  appId: "1:366709942019:web:f40758ebf8f9984bcaeb36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore(app)

export {app,auth,db}