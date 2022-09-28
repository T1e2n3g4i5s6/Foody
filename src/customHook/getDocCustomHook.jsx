import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from '../FireBase/FirebaseConfig'
import _ from "lodash";

export const useGetDocFirebase = (name) => {
  let [datas, setDatas] = useState([]);

  const getData = async () => {
      const getCollections = await collection(db, name);
      onSnapshot(getCollections, (snap) => {
        if(!_.isEmpty(snap.docs)) {
          snap.forEach(doc => {
            datas.push({ ...doc.data(), uid: doc.id });
          })
        }
      })
    }
    useEffect(() => {
      getData(); 
      return ()=>setDatas([])
    }, []);
    return [datas];
  };