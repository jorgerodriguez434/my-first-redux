import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { GameReducer } from "./reducers/index";
import { Provider } from "react-redux";
import GuessForm from "./components/guess-form";
import Feedback from "./components/feedback";

const store = createStore(GameReducer);
//look at guess form for mapStateToProps
function Game(props) {
  return (
    <div>
      <GuessForm />
      <Feedback />
    </div>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Game />
      </div>
    </Provider>
  );
};

render(<App />, document.getElementById("root"));
