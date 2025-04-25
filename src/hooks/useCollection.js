import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

export function useCollection(c) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, c), (snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setData(data);
    });

    return () => unsubscribe();
  }, [c]);

  return { data };
}
