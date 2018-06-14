import React from "react";

export default function Guesses(props) {
  const { guesses } = props;
  const guess = guesses.map((guess, index) => (
    <div key={index} className="guesses">
      <h3> {guess} </h3>
    </div>
  ));
  return <h1>{guess}</h1>;
}
