import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { logOut } from "../app/features/UserSlice";
import { useFireStore } from "./useFireStore";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const dispatch = useDispatch();
  const { updateDocument } = useFireStore("users");
  const navigate = useNavigate();

  const logout = async (uid) => {
    try {
      await updateDocument(uid, { isOnline: false });
      await signOut(auth);
      dispatch(logOut());
      navigate("/login");
    } catch (error) {
      console.log("Logout xatoligi:", error.message);
    }
  };

  return { logout };
};
