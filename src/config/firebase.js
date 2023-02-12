import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, doc, addDoc, collection, getDocs, getDoc, where, query, onSnapshot } from "firebase/firestore";
import { getStorage, uploadBytes, ref, getDownloadURL } from "firebase/storage";
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
const storage = getStorage(app)
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
// upload img
async function uploadImage(adImg) {
    const storageRef = ref(storage, `images/${adImg.name}`);
    const snapshot = await uploadBytes(storageRef, adImg);
    const url = await getDownloadURL(snapshot.ref);
    return url;
}

// for add new item to db
function additemToDb(obj) {

    let { imgUrl, itemName, category, itemDes, itemUnitName, itemUnitPrice } = obj;
    return addDoc(collection(db, "companies"), {
        imgUrl, itemName, category, itemDes, itemUnitName, itemUnitPrice
    });
}

export {
    firebaseSignIn, firebaseSignUp, auth, uploadImage, additemToDb
}