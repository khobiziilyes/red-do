import "./TodosList.css";

const DeleteSvg = () => (
  <svg
    className="delete-icon"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.66829 18.332C1.66829 19.25 2.41453 20 3.33658 20H16.6712C17.5893 20 18.3395 19.2539 18.3395 18.332V7.5H1.66829V18.332ZM14.1707 10H15.839V17.5H14.1707V10ZM9.16975 10H10.838V17.5H9.16975V10ZM4.16878 10H5.83707V17.5H4.16878V10ZM19.1717 3.33203H14.1707V1.66797C14.1707 0.746094 13.4206 0 12.5024 0H7.50145C6.58331 0 5.83316 0.746094 5.83316 1.66797V3.33594H0.832193C0.371166 3.33203 0 3.70703 0 4.16797V5C0 5.46094 0.371166 5.83203 0.832193 5.83203H19.1678C19.6288 5.83203 20 5.46094 20 5V4.16797C20.0039 3.70703 19.6327 3.33203 19.1717 3.33203ZM12.5024 3.33203H7.50145V1.66797H12.5024V3.33203Z"
      fill="currentColor"
    />
  </svg>
);

type TodoItemProps = {
  text: string;
  isDone: boolean;
};

const TodoItem = ({ text, isDone }: TodoItemProps) => (
  <div className="todo-item-container">
    <div className="desktop-task">
      <div
        className={`ellipse ${isDone ? "done-ellipse" : "not-done-ellipse"}`}
      ></div>
      <div className={isDone ? "done-workout" : "not-done-workout"}>{text}</div>

      {isDone && (
        <svg
          className="correct-mark"
          width="7"
          height="5"
          viewBox="0 0 7 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 2L2 4.5L6.5 0" stroke="white" />
        </svg>
      )}
    </div>

    <DeleteSvg />
  </div>
);

type TodoListProps = {
  onLogout: () => void;
};

export const TodosList = ({ onLogout }: TodoListProps) => {
  return (
    <div className="container">
      <div className="new-item">
        <div className="desktop-task" style={{ padding: "0px 16px" }}>
          <div className="ellipse not-done-ellipse"></div>

          <input
            className="new-workout-input"
            placeholder="Add a new workout..."
          />
        </div>
      </div>

      <div className="list-container">
        <TodoItem text="Morning workout" isDone={false} />
        <TodoItem text="Complet two chapters of react course" isDone={false} />
        <TodoItem text="Read 10 pages of my book" isDone={false} />
        <TodoItem text="Sleep early" isDone={true} />
      </div>

      <button className="logout-button" onClick={onLogout}>
        <svg
          className="exit-icon"
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 18C1.95 18 1.479 17.804 1.087 17.412C0.695002 17.02 0.499335 16.5493 0.500002 16V2C0.500002 1.45 0.696002 0.979002 1.088 0.587002C1.48 0.195002 1.95067 -0.000664969 2.5 1.69779e-06H9.5V2H2.5V16H9.5V18H2.5ZM13.5 14L12.125 12.55L14.675 10H6.5V8H14.675L12.125 5.45L13.5 4L18.5 9L13.5 14Z"
            fill="currentColor"
          />
        </svg>

        <div className="logout-text">Log out</div>
      </button>
    </div>
  );
};
