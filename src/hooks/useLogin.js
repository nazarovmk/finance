import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";
import { login as _login } from "../app/features/UserSlice";
import { useDispatch } from "react-redux";
import { useFireStore } from "./useFireStore";

export const useLogin = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { addDocument, updateDocument } = useFireStore("users");

  const login = async (email, password) => {
    setIsPending(true);
    try {
      const req = await signInWithEmailAndPassword(auth, email, password);
      const user = req.user;
      dispatch(_login(user));
      await addDocument(user.uid, {
        displayName: user.displayName || "Anonymous",
        email: user.email,
        isOnline: true,
        photoURL:
          user.photoURL ||
          "https://api.dicebear.com/9.x/adventurer/svg?seed=" + user.email,
      });
      await updateDocument(user.uid, { isOnline: true });
      setUser(user);
      console.log(`Welcome ${user.displayName}`);
    } catch (error) {
      console.log(error.message || "Xatolik yuz berdi!");
    } finally {
      setIsPending(false);
    }
  };

  return { user, isPending, login };
};
