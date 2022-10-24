import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from 'firebase/firestore';

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

// prettier-ignore
export const addCollectionAndDocuments = async (collectionKey,objectsToAdd) => {
  const collectionRef = collection(DataBase, collectionKey);
  const batch = writeBatch(DataBase);

  objectsToAdd.forEach(obj => {
    const docRef = doc(collectionRef, obj.title.toLowerCase());
    batch.set(docRef, obj);
  });

  await batch.commit();
  console.log('batch done ')
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(DataBase, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};
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
export const signInWithEmailAndPass = async (email, password) => {
  if (!password || !email) return; // se nao tiver nenhum, break

  return await signInWithEmailAndPassword(auth, email, password);
};

export const SignOutUser = () => signOut(auth);

export const onAuthStateChangedListener = callback =>
  onAuthStateChanged(auth, callback);
