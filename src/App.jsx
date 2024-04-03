import { useState } from "react";
import { Description } from "./components/Description/Description";
import { Options } from "./components/Options/Options";
import { Feedback } from "./components/Feedback/Feedback";
import "./App.css";

function App() {
  const [click, setClick] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClick = () => {};

  return (
    <div>
      <Description />
      <Options />
      <Feedback />
    </div>
  );
}

export default App;
