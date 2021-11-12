import initializeAuth from "../Firebase/Firebase.init";
import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";


initializeAuth();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const auth = getAuth();


  const regiUser = (email, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };
  const loginUser = (email, password, location, history) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  // Observer User State
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsub;
  }, []);

  const logout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {})
      .finally(() => setLoading(false));
  };

  return {
    user,
    auth,
    loading,
    regiUser,
    logout,
    loginUser,
    error,
  };
};

export default useFirebase;
