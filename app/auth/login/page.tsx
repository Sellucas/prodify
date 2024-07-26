import { Suspense } from "react";

import { AuthForm } from "@/components/auth/auth-form";
import { LoginCardWrapper } from "@/components/auth/login-card-wrapper";

const LoginPage = () => {
  return (
    <LoginCardWrapper
      headerLabel="Welcome back"
      headerDescription="Glad to see you again!"
    >
      <Suspense fallback={<div>Loading...</div>}>
        <AuthForm />
      </Suspense>
    </LoginCardWrapper>
  );
};

export default LoginPage;
