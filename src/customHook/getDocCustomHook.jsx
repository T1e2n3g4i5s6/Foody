import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from '../FireBase/FirebaseConfig'

export const useHookTest = (docUid) => {
  let [datas, setDatas] = useState([]);

  const getData = async () => {
    setDatas((datas = []));
    try {
      const item = await getDocs(collection(db, `Foods`));
      item.forEach(el=>{
        // console.log(el.data())
        
        console.log(datas);
      })
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return datas;
};