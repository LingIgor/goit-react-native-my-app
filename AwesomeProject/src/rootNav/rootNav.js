import { AuthScreen } from "./AuthScreen";
import { AppScreen } from "./AppScreen";
import { useSelector } from "react-redux";

export function RootNavigation() {
  const isLogin = useSelector((state) => state.auth.isLoggedIn);

  return isLogin ? <AppScreen /> : <AuthScreen />;
}
