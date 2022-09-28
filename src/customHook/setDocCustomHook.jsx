import { collection, doc, addDoc, } from "firebase/firestore";
import { db } from '../FireBase/FirebaseConfig'

const addData = async () => {
    const docRef = collection(db, "Foods");
    const payload = { name: "red" }
    await addDoc(docRef, payload)
}