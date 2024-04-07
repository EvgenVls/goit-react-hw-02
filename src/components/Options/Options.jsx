import css from "./Options.module.css";

export const Options = ({ onUpdate, total, reset }) => {
  return (
    <div className={css.options}>
      <button className={css.optionBtn} onClick={() => onUpdate("good")}>
        Good
      </button>
      <button className={css.optionBtn} onClick={() => onUpdate("neutral")}>
        Neutral
      </button>
      <button className={css.optionBtn} onClick={() => onUpdate("bad")}>
        Bad
      </button>
      {total > 0 && (
        <button className={css.optionBtn} onClick={reset}>
          Reset
        </button>
      )}
    </div>
  );
};
