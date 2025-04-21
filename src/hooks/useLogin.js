import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";
import { login as _login } from "../app/features/UserSlice";
import { useDispatch } from "react-redux";

export const useLogin = () => {
  const dispatch = useDispatch();
  const [isPending, setIsPending] = useState(false);

  const login = async (email, password) => {
    setIsPending(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const userData = {
        uid: res.user.uid,
        email: res.user.email,
        displayName: res.user.displayName,
        photoURL: res.user.photoURL,
      };
      dispatch(_login(userData));
      console.log(`Xush kelibsiz, ${userData.displayName}`);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { login, isPending };
};
