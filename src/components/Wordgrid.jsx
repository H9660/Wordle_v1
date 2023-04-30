import "../App.css";
import Letters from "./Letters";
const Wordgrid = () => {
  return (
    // This is the main grid where we will be typing our words
    <div class="grid">
      {/* /* /* Now we need to call the letter component 5 times in each div cause wem will have */}
      {/* 5 letters in each word */}
      <div className="row">
        <Letters letterposition={0} attemptsval={0} />
        <Letters letterposition={1} attemptsval={0} />
        <Letters letterposition={2} attemptsval={0} />
        <Letters letterposition={3} attemptsval={0} />
        <Letters letterposition={4} attemptsval={0} />
      </div>
      <div className="row">
        <Letters letterposition={0} attemptsval={1} />
        <Letters letterposition={1} attemptsval={1} />
        <Letters letterposition={2} attemptsval={1} />
        <Letters letterposition={3} attemptsval={1} />
        <Letters letterposition={4} attemptsval={1} />
      </div>
      <div className="row">
        <Letters letterposition={0} attemptsval={2} />
        <Letters letterposition={1} attemptsval={2} />
        <Letters letterposition={2} attemptsval={2} />
        <Letters letterposition={3} attemptsval={2} />
        <Letters letterposition={4} attemptsval={2} />
      </div>
      <div className="row">
        <Letters letterposition={0} attemptsval={3} />
        <Letters letterposition={1} attemptsval={3} />
        <Letters letterposition={2} attemptsval={3} />
        <Letters letterposition={3} attemptsval={3} />
        <Letters letterposition={4} attemptsval={3} />
      </div>
      <div className="row">
        <Letters letterposition={0} attemptsval={4} />
        <Letters letterposition={1} attemptsval={4} />
        <Letters letterposition={2} attemptsval={4} />
        <Letters letterposition={3} attemptsval={4} />
        <Letters letterposition={4} attemptsval={4} />
      </div>
      <div className="row">
        <Letters letterposition={0} attemptsval={5} />
        <Letters letterposition={1} attemptsval={5} />
        <Letters letterposition={2} attemptsval={5} />
        <Letters letterposition={3} attemptsval={5} />
        <Letters letterposition={4} attemptsval={5} />
      </div>
    </div>
  );
};

export default Wordgrid;
