// import { useEffect, useState } from "react";
// import { auth } from "../firebase/config";
import { AuthScreen } from "./AuthScreen";
import { AppScreen } from "./AppScreen";
import { useSelector } from "react-redux";
// import { onAuthStateChanged } from "firebase/auth";

export function RootNavigation() {
  const isLogin = useSelector((state) => state.auth.isLoggedIn);

  // const isLogin = false;
  console.log(isLogin);

  return isLogin ? <AppScreen /> : <AuthScreen />;
}
