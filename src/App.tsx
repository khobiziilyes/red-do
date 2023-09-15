import styles from "./App.module.css";
import { AuthCard } from "./components";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles["signin-signup"]}>
        <AuthCard onLogin={() => {}} onCreateAccount={() => {}} />
      </div>
    </div>
  );
}

export default App;
