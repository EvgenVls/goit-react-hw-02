import css from "./Feedback.module.css";

export const Feedback = ({ good, neutral, bad, total, positive }) => {
  return (
    <div className={css.feedbackWrapper}>
      <p className={css.feedbackText}>Good: {good}</p>
      <p className={css.feedbackText}>Neutral: {neutral}</p>
      <p className={css.feedbackText}>Bad: {bad}</p>
      <p className={css.feedbackText}>Total: {total}</p>
      <p className={css.feedbackText}>Positive: {positive}%</p>
    </div>
  );
};
