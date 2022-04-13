import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBTeB8xRiSOicYdBtwYqxIXTstcPCFyro0",
  authDomain: "crwn-clothing-db-8f6b1.firebaseapp.com",
  projectId: "crwn-clothing-db-8f6b1",
  storageBucket: "crwn-clothing-db-8f6b1.appspot.com",
  messagingSenderId: "442562403728",
  appId: "1:442562403728:web:1e37cacdc3f97165d82715"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);


  const userSnapshot = await getDoc(userDocRef);
  


  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });

    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};