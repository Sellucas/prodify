import { AuthForm } from "@/components/auth/auth-form";
import { CardWrapper } from "@/components/auth/card-wrapper";

const RegisterPage = () => {
  return (
    <CardWrapper
      headerLabel="Create Account ✍"
      headerDescription="Start your productivity process!"
      backButtonLabel="Already have an account?"
      backButtonHref="/auth/login"
    >
      <AuthForm />
    </CardWrapper>
  );
};

export default RegisterPage;
