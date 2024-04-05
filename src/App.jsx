import { useState } from "react";
import { Description } from "./components/Description/Description";
import { Options } from "./components/Options/Options";
import { Feedback } from "./components/Feedback/Feedback";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClick = () => {
    setValues({
      ...values,
    });
  };

  return (
    <div>
      <Description />
      <Options />
      <Feedback good={click.good} neutral={click.neutral} bad={click.bad} />
    </div>
  );
}

export default App;
