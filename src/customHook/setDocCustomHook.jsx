import { collection, doc, addDoc,  } from "firebase/firestore";
import { db } from '../FireBase/FirebaseConfig'
import { useEffect, useState } from "react";


    const addData = async () => {
        const docRef = collection(db, "Foods");
        const payload = {name:"red"}
        await addDoc(docRef, payload)
    }