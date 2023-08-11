import { AuthScreen } from "./AuthScreen";
import { AppScreen } from "./AppScreen";

import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged} from 'firebase/auth';


export function RootNavigation() {  
const auth = getAuth();
const [user, setUser] = useState();


  useEffect(() => {
    const onAuthState = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });
    return onAuthState;
  }, []);

  
  

  return user? <AppScreen /> : <AuthScreen />;
}
