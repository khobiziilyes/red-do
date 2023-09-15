import styles from "./AuthCard.module.css";

type InputProps = {
  text: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ text, ...props }: InputProps) => (
  <div className={styles["input-group"]}>
    <div className={styles["input-text"]}>{text}</div>

    <input type="text" className={styles["input-input"]} {...props} />
  </div>
);

type ButtonProps = {
  text: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ text, ...props }: ButtonProps) => (
  <button className={`${styles["cta"]}`} {...props}>
    {text}
  </button>
);

type AuthCardProps = {
  onLogin: () => void;
  onCreateAccount: () => void;
};

export const AuthCard = ({ onLogin, onCreateAccount }: AuthCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Login</div>

      <Input text="Email" placeholder="Enter your email" />
      <Input
        text="Password"
        placeholder="Enter your password"
        type="password"
      />

      <Button text="Login" onClick={onLogin} />

      <div className={styles["account-existence-prompt"]}>
        <span>
          <span className={styles["account-existence-text"]}>
            Don’t have an account?{" "}
          </span>

          <a
            href="#"
            className={styles["account-existence-anchor"]}
            onClick={onCreateAccount}
          >
            Create an account
          </a>
        </span>
      </div>
    </div>
  );
};
