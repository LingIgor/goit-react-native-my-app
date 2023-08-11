import { AuthScreen } from "./AuthScreen";
import { AppScreen } from "./AppScreen";
import { useSelector } from "react-redux";

// import { useEffect, useState } from "react";

// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import app from "../../firebase/config";

export const RootNavigation = () => {
  const probnik = useSelector((state) => state);
  const user = useSelector((state) => state.auth.isLoggedIn);

  return user ? <AppScreen /> : <AuthScreen />;
};
