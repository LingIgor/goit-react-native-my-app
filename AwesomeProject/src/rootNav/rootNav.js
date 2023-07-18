import { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { AuthScreen } from "./AuthScreen";
import { AppScreen } from "./AppScreen";
import { onAuthStateChanged } from "firebase/auth";

export function RootNavigation() {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user.displayName);
        console.log(auth.currentUser.uid);
      } else {
        setUser();
      }
    });

    return unsubscribeFromAuthStatuChanged;
  }, []);

  return user ? <AppScreen /> : <AuthScreen />;
}
