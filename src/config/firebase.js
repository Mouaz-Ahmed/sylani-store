import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDLvBpAYshxwsmNG5soKgHerKdedrNO4IE",
    authDomain: "final-hackathon-1f140.firebaseapp.com",
    projectId: "final-hackathon-1f140",
    storageBucket: "final-hackathon-1f140.appspot.com",
    messagingSenderId: "118744821234",
    appId: "1:118744821234:web:ce7987ed22a5da51230f6b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

async function firebaseSignUp(name, phone, email, password) {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await addUserToDb(name, phone, email, userCredential.user.uid)
}

function addUserToDb(name, phone, email, uid) {
    return setDoc(doc(db, "users", uid), { name, phone, email })
}

function firebaseSignIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
}
export {
    firebaseSignIn, firebaseSignUp ,auth
}