import React from "react";
import styles from "./App.module.css";
import { RegisterCard, LoginCard } from "./components";

function App() {
  const [isRegistering, setIsRegistering] = React.useState(false);
  const onAuthed = () => {};

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
