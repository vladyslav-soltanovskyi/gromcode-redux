import React from "react";
import { Provider } from "react-redux";
import TodoList from "./components/TodoList";
import store from "./store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
  }
}

export default App;
