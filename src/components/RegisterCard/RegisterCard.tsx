import { AuthCard } from "..";

type RegisterCardProps = {
  onRegister: () => void;
  onSwitch: () => void;
};

export const RegisterCard = ({ onRegister, onSwitch }: RegisterCardProps) => (
  <AuthCard
    onSubmit={onRegister}
    onSwitch={onSwitch}
    title="Create account"
    buttonText="Create account"
    accountExistenceText="Already have an account?"
    accountExistenceAnchorText="Login"
  />
);
