import React from "react";
import styles from "./App.module.css";
import { RegisterCard, LoginCard, TodosList } from "./components";

function App() {
  const [isAuthed, setIsAuthed] = React.useState(false);
  const [isRegistering, setIsRegistering] = React.useState(false);

  const onLogout = () => setIsAuthed(false);

  if (isAuthed)
    return (
      <div className={styles.container}>
        <div className={styles["todo-list"]}>
          <TodosList onLogout={onLogout} />
        </div>
      </div>
    );

  const onAuthed = () => setIsAuthed(true);

  return (
    <div className={styles.container}>
      <div className={styles["signin-signup"]}>
        {isRegistering ? (
          <RegisterCard
            onRegister={onAuthed}
            onSwitch={() => setIsRegistering(false)}
          />
        ) : (
          <LoginCard
            onLogin={onAuthed}
            onSwitch={() => setIsRegistering(true)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
