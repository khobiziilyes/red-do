import { AuthCard } from "..";

type LoginCardProps = {
  onLogin: () => void;
  onSwitch: () => void;
};

export const LoginCard = ({ onLogin, onSwitch }: LoginCardProps) => (
  <AuthCard
    onSubmit={onLogin}
    onSwitch={onSwitch}
    title="Login"
    buttonText="Login"
    accountExistenceText="Don’t have an account?"
    accountExistenceAnchorText="Create an account"
  />
);
