import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPsVV_0Vh1VZ8oqAdWSFZ6iQB2qfzj2Q4",
  authDomain: "moving-1fe89.firebaseapp.com",
  projectId: "moving-1fe89",
  storageBucket: "moving-1fe89.appspot.com",
  messagingSenderId: "965009565993",
  appId: "1:965009565993:web:01d3d1ee209179ce632f38"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

