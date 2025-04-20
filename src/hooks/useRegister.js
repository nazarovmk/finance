import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";
import { login } from "../app/features/UserSlice";
import { useDispatch } from "react-redux";
import { useFireStore } from "./useFireStore";

export const useRegister = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { addDocument } = useFireStore("users");

  const register = async (email, displayName, password) => {
    setIsPending(true);
    try {
      const req = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL:
          "https://api.dicebear.com/9.x/adventurer/svg?seed=" + displayName,
      });
      const user = req.user;
      await addDocument(user.uid, {
        displayName: user.displayName,
        email: user.email,
        isOnline: true,
        photoURL: user.photoURL,
      });
      dispatch(login(user));
      setUser(user);
      console.log(`Welcome ${displayName}`);
    } catch (error) {
      console.log(error.message || "Xatolik yuz berdi!");
    } finally {
      setIsPending(false);
    }
  };

  return { user, isPending, register };
};
