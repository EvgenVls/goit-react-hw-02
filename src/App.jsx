import { useState, useEffect } from "react";
import { Description } from "./components/Description/Description";
import { Options } from "./components/Options/Options";
import { Feedback } from "./components/Feedback/Feedback";
import { Notification } from "./components/Notification/Notification";
import "./App.css";

function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedbacks = window.localStorage.getItem("feedbacks");
    if (savedFeedbacks !== null) {
      return JSON.parse(savedFeedbacks);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = (feedbackType) => {
    setFeedbacks({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    });
  };

  const resetFeedbacks = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positiveFeedback = Math.round(
    ((feedbacks.good + feedbacks.neutral) / totalFeedback) * 100
  );

  useEffect(() => {
    window.localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  return (
    <div>
      <Description />
      <Options
        onUpdate={updateFeedback}
        total={totalFeedback}
        reset={resetFeedbacks}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={feedbacks.good}
          neutral={feedbacks.neutral}
          bad={feedbacks.bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
