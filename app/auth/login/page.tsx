import { AuthForm } from "@/components/auth/auth-form";
import { LoginCardWrapper } from "@/components/auth/login-card-wrapper";

const LoginPage = () => {
  return (
    <LoginCardWrapper
      headerLabel="Welcome back"
      headerDescription="Glad to see you again!"
    >
      <AuthForm />
    </LoginCardWrapper>
  );
};

export default LoginPage;
