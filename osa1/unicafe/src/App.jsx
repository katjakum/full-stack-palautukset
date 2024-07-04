import { useState } from "react";

const Statistics = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        all {props.total} <br/>
        average {props.average} <br />
        positive {props.positiveFeedback} %
      </p>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    setTotal(updatedGood + neutral + bad);
  };

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setTotal(updatedNeutral + good + bad);
  };

  const handleBadClick = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    setTotal(updatedBad + good + neutral);
  };

  const average = total === 0 ? 0 : (good - bad) / total;

  const positiveFeedback =
    total === 0 ? 0 : (good / (good + bad + neutral)) * 100;
 

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <button onClick={handleGoodClick}>good</button>
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClick}>bad</button>
        <h2>statistics</h2>
        <p>
        good {good} <br />
        neutral {neutral} <br/>
        bad {bad} <br />
        </p>
        <Statistics total={total} average={average.toFixed(3)} positiveFeedback={positiveFeedback.toFixed(3)} />

      </div>
    </div>
  );
};

export default App;
