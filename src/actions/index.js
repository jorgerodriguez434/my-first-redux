/*x
ACTIONS
Actions are payloads of information
Actions are handled by reducers
Actions are objects that have a type property
*/

/*
If user:
      makes a guess
*/

export const MAKES_GUESS = "MAKES_GUESS";
export const makesGuess = guess => ({
  type: MAKES_GUESS,
  guess
});
