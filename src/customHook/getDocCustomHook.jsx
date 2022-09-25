import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from '../FireBase/FirebaseConfig'
import { onSnapshot } from "firebase/firestore";
import _ from "lodash";

export const useGetDocFirebase = (name) => {
  let [datas, setDatas] = useState([]);

  const getData = async () => {
    setDatas((datas = []));
      const getCollections = await collection(db, name);
      onSnapshot(getCollections, (snap) => {
        if(!_.isEmpty(snap.docs)) {
          snap.forEach(doc => {
            datas.push({ ...doc.data(), uid: doc.id });
          })
          setDatas(datas);
          console.log(datas);
        }
      })
    }
  
  useEffect(() => {
    getData(); 
  }, []);
  return [datas];
};