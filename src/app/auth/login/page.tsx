import { Suspense } from "react";

import { AuthForm } from "@/components/auth/auth-form";
import { LoadingAuthForm } from "@/components/auth/loading-authform";
import { LoginCardWrapper } from "@/components/auth/login-card-wrapper";

const LoginPage = () => {
  return (
    <LoginCardWrapper
      headerLabel="Welcome back"
      headerDescription="Glad to see you again!"
    >
      <Suspense fallback={<LoadingAuthForm />}>
        <AuthForm />
      </Suspense>
    </LoginCardWrapper>
  );
};

export default LoginPage;
