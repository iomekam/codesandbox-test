import React, { useReducer } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  interface AppState {
    count: number;
  }

  interface Action {
    type: string;
    payload?: Object;
  }

  const reducer = (state: AppState, action: Action) => {
    switch (action.type) {
      case "increment":
        return {
          count: state.count + 1
        };
      case "decrement":
        return {
          count: state.count - 1
        };
      default:
        return {
          count: state.count
        };
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleOnChange = e => {
    dispatch({ type: "decrement" });
    dispatch({ type: "decrement" });
  };

  return (
    <div className="App">
      <h1>{state.count}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input onChange={e => handleOnChange(e)} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
