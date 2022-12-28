import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import Users from "./users/Users";

const App = () => {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  );
}

export default App;
