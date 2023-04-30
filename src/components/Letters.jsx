import { useContext, useEffect } from "react";
import { Appcontext } from "../App";
function Letters({ letterposition, attemptsval }) {
  const { board, colorstate, setDisabledLetters,aval, lpos} = useContext(Appcontext);
  const alphabet=board[attemptsval][letterposition];
  const state=colorstate[attemptsval][letterposition];

  // this useeffect is to set the keys as useable ot not
  useEffect(() => {
    if (alphabet !== "" && state==="incorrect") {
      setDisabledLetters((prev) => [...prev, alphabet]);
    }
  }, [aval]);
  return (
    <>
      {" "}
      <div className="letter" id={state}>
        {alphabet}
      </div>
    </>
  );
}

export default Letters;
