import { doc, setDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/config";

export const useFireStore = (collectionName) => {
  const [error, setError] = useState(null);

  const addDocument = async (id, data) => {
    setError(null);
    try {
      await setDoc(doc(db, collectionName, id), data);
    } catch (err) {
      setError(err.message);
    }
  };

  const updateDocument = async (id, data) => {
    setError(null);
    try {
      await updateDoc(doc(db, collectionName, id), data);
    } catch (err) {
      setError(err.message);
    }
  };

  return { error, addDocument, updateDocument };
};
