import {
    initializeApp,
    getApp,
    
  } from "@firebase/app";

import { 
    collection,
    doc,
    addDoc,
    OrderByDirection,
    setDoc,
    updateDoc,
    deleteDoc,
    collectionGroup,
    getDoc,
    getDocs,
    query,
    arrayRemove,
    where,
    orderBy,
    limit,
    startAfter,
    startAt,
    increment,
    onSnapshot,
    getFirestore,
    Timestamp,
    FieldValue,
    WhereFilterOp,
    FieldPath,
    arrayUnion
  } from "@firebase/firestore";
  

  import {
    getAuth,
    signOut,    
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    sendPasswordResetEmail,
    confirmPasswordReset,
    reauthenticateWithPopup,
    verifyPasswordResetCode,
    updateProfile,
    updateEmail,
    updatePassword,
    sendEmailVerification,
    verifyBeforeUpdateEmail,
    linkWithCredential,
    reauthenticateWithCredential,
    onAuthStateChanged,
    User,
    Unsubscribe,
    Auth,
    AuthProvider,
    EmailAuthProvider,
    GoogleAuthProvider,
    OAuthProvider,
  } from "@firebase/auth";

  import { 
    getStorage, 
    ref, 
    getDownloadURL, 
    uploadBytes, 
    deleteObject, 
} from '@firebase/storage';



const firebaseConfig = {
    apiKey:import.meta.env.VITE_APP_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_APP_FIREBASE_SENDER_ID,
    appId: import.meta.env.VITE_APP_FIREBASE_APP_ID 
 };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { 
        app,
            initializeApp,
            getApp,
            
            

        storage,
            getStorage, 
            ref, 
           
            getDownloadURL, 
           
            uploadBytes, 
          
           
           
            deleteObject, 
           

        auth,
           
            reauthenticateWithPopup,
            signInWithEmailAndPassword,
            createUserWithEmailAndPassword,
          
            signInWithPopup,
            sendPasswordResetEmail,
            confirmPasswordReset,
           
            
            verifyPasswordResetCode,
            updateProfile,
            updateEmail,
            updatePassword,
            sendEmailVerification,
            verifyBeforeUpdateEmail,
            linkWithCredential,
            reauthenticateWithCredential,
           
            onAuthStateChanged,
           
            type User,
            type Unsubscribe,
           
            type Auth,
            type AuthProvider,
            EmailAuthProvider,
           
           
            GoogleAuthProvider,
            OAuthProvider,
           
            signOut,

        db,
            collection,
            arrayRemove,
            doc,
            addDoc,
            type OrderByDirection,
            type WhereFilterOp,
            setDoc,
            updateDoc,
            increment,
            deleteDoc,
            arrayUnion,
            getDoc,
            getDocs,
            collectionGroup,
            query,
            where,
            orderBy,
            limit,
            startAfter,
            startAt,
           
            onSnapshot,
            Timestamp,
            FieldValue,
            FieldPath,
           
};

