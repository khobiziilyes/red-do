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
  onSubmit: () => void;
  onSwitch: () => void;

  title: string;
  buttonText: string;

  accountExistenceText: string;
  accountExistenceAnchorText: string;
};

export const AuthCard = ({
  onSubmit,
  onSwitch,

  title,
  buttonText,
  accountExistenceText,
  accountExistenceAnchorText,
}: AuthCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>

      <Input text="Email" placeholder="Enter your email" />
      <Input
        text="Password"
        placeholder="Enter your password"
        type="password"
      />

      <Button text={buttonText} onClick={onSubmit} />

      <div className={styles["account-existence-prompt"]}>
        <span>
          <span className={styles["account-existence-text"]}>
            {accountExistenceText}{" "}
          </span>

          <a
            href="#"
            className={styles["account-existence-anchor"]}
            onClick={onSwitch}
          >
            {accountExistenceAnchorText}
          </a>
        </span>
      </div>
    </div>
  );
};
