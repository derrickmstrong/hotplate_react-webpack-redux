import React from "react";
import ReactDOM from "react-dom";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import App from "./App.js";

const store = configureStore();
const persister = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persister} loading={<div>Loading...</div>}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
