import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { persistor, store } from "./src/redux/store";
import { RootNavigation } from "./src/rootNav/rootNav";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <Main /> */}
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
}
