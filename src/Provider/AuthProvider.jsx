import { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };
  const githubLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, githubProvider);
  };

  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };
  const profileUpdate = (name, photo) => {
    setLoader(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      setLoader(false);
      if (currentUser) {
        axios
          .post("https://restica-server.vercel.app/api/v1/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => console.log("access token", res.data));
      } else {
        axios
          .post("https://restica-server.vercel.app/api/v1/logout", loggedUser, {
            withCredentials: true,
          })
          .then((res) => console.log("clean access token", res.data));
      }
    });
    return () => {
      return unSubscribe();
    };
  }, [user?.email]);

  const authInfo = {
    user,
    createUser,
    logIn,
    googleLogin,
    githubLogin,
    logOut,
    profileUpdate,
    loader,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
