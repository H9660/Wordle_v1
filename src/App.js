import "./App.css";
import { useEffect, useState, createContext } from "react";
import { defaultState, generateWordSet } from "./words";
import Keyboard from "./components/Keyboard";
import Wordgrid from "./components/Wordgrid";
import Gameover from "./components/Gameover";
import Footer from "./components/Footer";


export const Appcontext = createContext(); // this is used to access some of our variables globally

function App() {
  const [board, setBoard] = useState(defaultState);
  const [lpos, setLpos] = useState(0); // the current position of the cursor
  const [aval, setAval] = useState(0); // the current attempt value
  const [wordSet, setWordSet] = useState(new Set()); // this is to store the list of words that can be generated
  const [correctword, setCorrectWord] = useState("");
  const [disabledLetters, setDisabledLetters] = useState([]); // this stores the letters that are incorrect
  // const countnos = new Map();
  const [wordformed, setwordformed] = useState("");
  const newboard = [...board];
  const [countnos, setNos] = useState(new Map());
  const [gameover, isGameover] = useState({ win: false, loose: false }); // used to check if the game is over or not
  // this matrix is used to set colors
  const [colorstate, setColorstate] = useState([
    ["incorrect", "incorrect", "incorrect", "incorrect", "incorrect"],
    ["incorrect", "incorrect", "incorrect", "incorrect", "incorrect"],
    ["incorrect", "incorrect", "incorrect", "incorrect", "incorrect"],
    ["incorrect", "incorrect", "incorrect", "incorrect", "incorrect"],
    ["incorrect", "incorrect", "incorrect", "incorrect", "incorrect"],
    ["incorrect", "incorrect", "incorrect", "incorrect", "incorrect"],
  ]);

  // this function generates a new word everytime the page loads
  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    });
  }, []);
  // the process function counts the frequency of each character in the word and stores them in a map
  const process = () => {
    for (let i = 0; i < 5; i++) {
      let oldfreq = countnos.get(correctword[i]);
      countnos.set(correctword[i], oldfreq ? oldfreq + 1 : 1);
      setNos(countnos);
    }
  };

  // Here we create functions for enter key, delete key and other alphabets key

  const deleteKey = () => {
    if (lpos == 0) return;
    newboard[aval][lpos - 1] = "";
    setLpos(lpos - 1);
    setBoard(newboard);
    if (lpos < 0) setLpos(0);
    console.log(lpos);
  };

  // this works fine
  const enterKey = () => {
    if (aval == 5 && lpos > 4) {
      setcolors(aval);
      if (!isGameover.win) isGameover.loose = true;
    }

    if (lpos > 4) {
      // if (wordSet.has({wordformed})) {
      setcolors(aval);
      setAval(aval + 1);
      setLpos(0);
      // }  else {
      //   alert("Word not found");
      // }
    }

    // console.log(correctword); //for testing purposes
  };

  // this works fine
  const otherKey = (keyval) => {
    if (lpos <= 4) {
      newboard[aval][lpos] = keyval;
      setBoard(newboard);
      setLpos(lpos + 1);
      return;
    }
    console.log(lpos);
  };

  // here we will set the colors of the letters
  const setcolors = (aval) => {
    process(); // this function is not working
    let totalcorrectletters = 0; // to store the total correct letters
    setwordformed("");
    for (let i = 0; i < 5; i++) {
      const alphabet = board[aval][i]; // The block corresponsing to this location will get updated
      const correct = correctword[i] === alphabet.toLowerCase();
      if (correct) {
        totalcorrectletters++;
        countnos.set(correctword[i], countnos.get(correctword[i]) - 1);
        setNos(countnos);
      }
      setwordformed(wordformed + alphabet.toLowerCase());
      const almost =
        !correct &&
        alphabet != "" &&
        correctword.includes(alphabet.toLowerCase()) &&
        countnos.get(alphabet.toLowerCase()) != 0;
      // here for it to be almost correct it cant be correct and it cant be empty as well
      // also it should be present in the correctword
      const newcolorstate = [...colorstate];
      newcolorstate[aval][i] = correct
        ? "correctpos"
        : almost
          ? "incorrectpos"
          : "incorrect";
      setColorstate(newcolorstate);
    }
    setwordformed(wordformed);
    // console.log(wordformed);
    // if (wordformed === correctword) isGameover.win = true;
    if (totalcorrectletters == 5) isGameover.win = true;
  };

  console.log(gameover);
  // we have decalared the board useState so that it can be accessed globally
  return (
    <>
      <div className="Appnav">
        <nav>
          <h1>Wordle</h1>

        </nav>
        <hr></hr>
      </div>
      <Appcontext.Provider
        value={{
          board,
          setBoard,
          lpos,
          setLpos,
          aval,
          setAval,
          otherKey,
          deleteKey,
          enterKey,
          setDisabledLetters,
          disabledLetters,
          correctword,
          colorstate,
          setcolors,
          isGameover,
        }}
      >
        {/* using this we can access the usestate anywhere in the wordgrid, keyboard and letter component */}
        <Wordgrid />
        {isGameover.win || isGameover.loose ? <><Gameover /> <Footer /></> : <Keyboard />}
      </Appcontext.Provider>
    </>
  );
}
export default App;

// const gameover =  document.querySelector(".gameover")
