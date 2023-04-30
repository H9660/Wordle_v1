import React from "react";
import { useContext } from "react";
import { Appcontext } from "../App";

export default function Gameover() {
  const { aval, correctword, isGameover } = useContext(Appcontext);
  const playagain = () => {
    window.location.reload(false);
  };
  var link = "https://www.google.com/search?q=" + correctword.toUpperCase() + "&source=desktop";
  return (
    <div class="gameover">
      {isGameover.win ? (
        <h1>Voila! You guessed the word correctly!</h1>
      ) : (
        <h2>
          {" "}
          You couldn't guess the word.<br></br> <br></br>
          Correct word: <u><a href={link} target="_blank">{correctword.toUpperCase()}</a></u>
        </h2>
      )}

      {isGameover.win ? (
        <h2>Number of attempts taken: {aval}</h2>
      ) : (
        <h2>{ }</h2>
      )}

      <button class="reset" onClick={playagain}>
        Play Again
      </button>
    </div>
  );
}
