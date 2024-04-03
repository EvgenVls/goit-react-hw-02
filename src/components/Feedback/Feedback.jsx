export const Feedback = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const positive = (good + neutral) / total;
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}</p>
    </div>
  );
};
