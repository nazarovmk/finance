import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";
import { login } from "../app/features/UserSlice";
import { useDispatch } from "react-redux";

export const useRegister = () => {
  const dispatch = useDispatch();
  const [isPending, setIsPending] = useState(false);

  const register = async (email, displayName, password) => {
    setIsPending(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(res.user, {
        displayName,
        photoURL: `https://api.dicebear.com/9.x/adventurer/svg?seed=${displayName}`,
      });

      const userData = {
        uid: res.user.uid,
        email: res.user.email,
        displayName,
        photoURL: `https://api.dicebear.com/9.x/adventurer/svg?seed=${displayName}`,
      };

      dispatch(login(userData));
      console.log(`Xush kelibsiz, ${displayName}`);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { register, isPending };
};
