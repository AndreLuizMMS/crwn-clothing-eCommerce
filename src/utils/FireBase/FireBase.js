import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDkTskwwXQczXuUAdfcVP682wbKZalEiDM',
  authDomain: 'crwn-clothing-deedzs.firebaseapp.com',
  projectId: 'crwn-clothing-deedzs',
  storageBucket: 'crwn-clothing-deedzs.appspot.com',
  messagingSenderId: '652751348304',
  appId: '1:652751348304:web:f1e7e32e72b076e71a2755'
};

const FireBaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  promt: 'select_account'
});

export const auth = getAuth();

export const signInWithGooglePopUp = () =>
  signInWithPopup(auth, googleProvider);

export const DataBase = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(DataBase, 'user', userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    // UserSnapShot == false
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!password || !email) return; // se nao tiver nenhum, break

  return await createUserWithEmailAndPassword(auth, email, password);
};
