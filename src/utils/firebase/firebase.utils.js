import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

//  Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASEu8JQ5SI1hWnd6phgqWai-1qSADkt58",
  authDomain: "crwn-ecommerce-db-9c48d.firebaseapp.com",
  projectId: "crwn-ecommerce-db-9c48d",
  storageBucket: "crwn-ecommerce-db-9c48d.appspot.com",
  messagingSenderId: "364170267380",
  appId: "1:364170267380:web:fcfe0121ad4fd39daf6ca1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
