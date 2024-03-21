import { AuthForm } from "@/components/auth/auth-form";
import { CardWrapper } from "@/components/auth/card-wrapper";

const LoginPage = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back 👋"
      headerDescription="Glad to see you again!"
      backButtonLabel="Don't have a account?"
      backButtonHref="/auth/register"
    >
      <AuthForm />
    </CardWrapper>
  );
};

export default LoginPage;
