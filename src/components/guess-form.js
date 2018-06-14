import React from "react";
import { makesGuess } from "../actions";
import GuessButton from "./guess-button";
import { connect } from "react-redux";
import Feedback from "./feedback";
import Guesses from "./guesses";
/*
Redux does not have constructors or a setState methods
The setState methods are replaced by actions and reducers
*/
export class GuessForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    let value = this.refs.guess.value;
    console.log(value);
    /*
    after mapping state to props,
    your component(GuessForm) now has the 
    method dispatch

    Dispatch allows you to "dispatch" actions
    and those actions are handled by reducers
    which determine the state of the component.

    I am changing the state, that is what I am aiming
    for. So change the state, and then render.
    */
    this.props.dispatch(makesGuess(value));
  }
  //<Guesses guesses={this.props.guesses} />
  render() {
    console.log(this.props);
    console.log(`guesses: ${this.props.guesses}`);
    return (
      <div>
        <Feedback feedback={this.props.feedback} />
        <form onSubmit={e => this.onSubmit(e)}>
          <input ref="guess" required />
          <GuessButton />
        </form>
        <h2> {this.props.guesses} </h2>
      </div>
    );
  } //render
} //class

/*
GuessForm.defaultProps = {
  guesses: [],
  feedback: "no feedback yet",
  luckyNumber: 7,
  mostRecent: 0,
  userInput: "No user input"
};*/

export const mapStateToProps = state => ({
  guesses: state.guesses,
  feedback: state.feedback,
  luckyNumber: state.luckyNumber,
  userInput: state.userInput
});
/**
 * you connect mapStateToProps to your component so that
 * your component can have the properties
 * and also so that your component can have the
 * dispatch method
 *
 */
export default connect(mapStateToProps)(GuessForm);
