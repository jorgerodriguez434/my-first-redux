/*
REDUCERS
Reducers are responsible for modifying the app state based on an action
Reducers is just a function that takes two arguments: current state and action
Reducers returns the new state
*/

import { MAKES_GUESS } from "../actions/index";

const initialState = {
  guesses: [],
  feedback: "no feedback yet",
  luckyNumber: 7,
  mostRecent: 0,
  userInput: "No user input"
};

export const GameReducer = (state = initialState, action) => {
  if (action.type === MAKES_GUESS) {
    /* if (action.guess < 7) {
      action.feedback = "You are below!";
    } else if (action.guess > 7) {
      action.feedback = "You are above!";
    } else if (action.guess == 7) {
      action.feedback = "You won!";
    }*/

    const newState = Object.assign({}, state, {
      feedback: action.feedback,
      guesses: [...state.guesses, action.guess]
    });
    return newState;
  }

  console.log("From reducer module:");
  console.log(state);
  return state;
};
